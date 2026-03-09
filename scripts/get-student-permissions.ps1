Import-Module Microsoft.Graph.Users -ErrorAction Stop
Import-Module Microsoft.Graph.Identity.DirectoryManagement -ErrorAction Stop
Import-Module Microsoft.Graph.Identity.Governance -ErrorAction Stop
Import-Module Microsoft.PowerApps.Administration.PowerShell -ErrorAction Stop

$upn = "student01@cloud-agents.org"
$outputPath = ".\student-permissions-report.json"
$includeDataverseRoles = $true

function Connect-GraphIfNeeded {
	$requiredScopes = @(
		"User.Read.All",
		"Directory.Read.All",
		"RoleManagement.Read.Directory",
		"Organization.Read.All"
	)

	$context = $null
	try {
		$context = Get-MgContext
	}
	catch {
	}

	$missingScopes = @()
	if ($context -and $context.Scopes) {
		foreach ($scope in $requiredScopes) {
			if ($context.Scopes -notcontains $scope) {
				$missingScopes += $scope
			}
		}
	}
	else {
		$missingScopes = $requiredScopes
	}

	if ($missingScopes.Count -gt 0) {
		Connect-MgGraph -Scopes $requiredScopes -NoWelcome | Out-Null
	}
}

function Get-EnvironmentInstanceUrl {
	param(
		[Parameter(Mandatory = $true)]
		[object]$Environment
	)

	$paths = @(
		"Internal.properties.linkedEnvironmentMetadata.instanceUrl",
		"Internal.properties.instanceUrl",
		"Properties.linkedEnvironmentMetadata.instanceUrl",
		"Properties.instanceUrl",
		"linkedEnvironmentMetadata.instanceUrl",
		"instanceUrl"
	)

	foreach ($path in $paths) {
		$current = $Environment
		$found = $true

		foreach ($segment in ($path -split '\.')) {
			if ($null -eq $current) {
				$found = $false
				break
			}

			$property = $current.PSObject.Properties[$segment]
			if ($property) {
				$current = $property.Value
				continue
			}

			if ($current -is [System.Collections.IDictionary] -and $current.Contains($segment)) {
				$current = $current[$segment]
				continue
			}

			$found = $false
			break
		}

		if ($found -and -not [string]::IsNullOrWhiteSpace([string]$current)) {
			return ([string]$current).TrimEnd('/')
		}
	}

	return $null
}

function Test-HasDataverse {
	param(
		[Parameter(Mandatory = $true)]
		[object]$Environment
	)

	return -not [string]::IsNullOrWhiteSpace((Get-EnvironmentInstanceUrl -Environment $Environment))
}

function Get-DataverseAccessToken {
	param(
		[Parameter(Mandatory = $true)]
		[string]$InstanceUrl
	)

	$tokenJson = az account get-access-token --resource $InstanceUrl --output json 2>$null
	if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($tokenJson)) {
		throw "Azure CLI could not get an access token for $InstanceUrl. Run az login first."
	}

	return ($tokenJson | ConvertFrom-Json).accessToken
}

function Invoke-DataverseGet {
	param(
		[Parameter(Mandatory = $true)]
		[string]$InstanceUrl,

		[Parameter(Mandatory = $true)]
		[string]$AccessToken,

		[Parameter(Mandatory = $true)]
		[string]$RelativePath
	)

	$uri = "{0}/api/data/v9.2/{1}" -f $InstanceUrl.TrimEnd('/'), $RelativePath.TrimStart('/')
	Invoke-RestMethod -Method Get -Uri $uri -Headers @{
		Authorization = "Bearer $AccessToken"
		Accept = "application/json"
		"OData-MaxVersion" = "4.0"
		"OData-Version" = "4.0"
	}
}

Connect-GraphIfNeeded
Add-PowerAppsAccount | Out-Null

$user = Get-MgUser -UserId $upn -Property Id,DisplayName,UserPrincipalName,Mail,AccountEnabled
$skus = Get-MgSubscribedSku -All
$licenseDetails = Get-MgUserLicenseDetail -UserId $user.Id
$roleDefinitions = Get-MgRoleManagementDirectoryRoleDefinition -All
$directoryRoleAssignments = Get-MgRoleManagementDirectoryRoleAssignment -Filter "principalId eq '$($user.Id)'"
$nonDataverseEnvironmentRoles = Get-AdminPowerAppEnvironmentRoleAssignment -UserId $user.Id
$environments = Get-AdminPowerAppEnvironment

$licenses = foreach ($licenseDetail in $licenseDetails) {
	$sku = $skus | Where-Object { $_.SkuId -eq $licenseDetail.SkuId } | Select-Object -First 1
	[pscustomobject]@{
		SkuPartNumber = if ($sku) { $sku.SkuPartNumber } else { $null }
		SkuId = $licenseDetail.SkuId
		ServicePlans = @($licenseDetail.ServicePlans | ForEach-Object {
			[pscustomobject]@{
				ServicePlanName = $_.ServicePlanName
				ProvisioningStatus = $_.ProvisioningStatus
			}
		})
	}
}

$directoryRoles = foreach ($assignment in $directoryRoleAssignments) {
	$role = $roleDefinitions | Where-Object { $_.Id -eq $assignment.RoleDefinitionId } | Select-Object -First 1
	[pscustomobject]@{
		RoleName = if ($role) { $role.DisplayName } else { $null }
		DirectoryScopeId = $assignment.DirectoryScopeId
	}
}

$powerPlatformRoles = @($nonDataverseEnvironmentRoles | ForEach-Object {
	[pscustomobject]@{
		EnvironmentName = $_.EnvironmentName
		RoleName = $_.RoleName
	}
})

$dataverseRoles = @()
if ($includeDataverseRoles) {
	foreach ($environment in $environments | Where-Object { Test-HasDataverse -Environment $_ }) {
		$instanceUrl = Get-EnvironmentInstanceUrl -Environment $environment

		try {
			$accessToken = Get-DataverseAccessToken -InstanceUrl $instanceUrl
			$systemUserResponse = Invoke-DataverseGet -InstanceUrl $instanceUrl -AccessToken $accessToken -RelativePath ("systemusers?`$select=systemuserid,fullname,azureactivedirectoryobjectid&`$filter=azureactivedirectoryobjectid eq {0}" -f $user.Id)
			$systemUser = @($systemUserResponse.value) | Select-Object -First 1

			if (-not $systemUser) {
				$dataverseRoles += [pscustomobject]@{
					EnvironmentName = $environment.DisplayName
					InstanceUrl = $instanceUrl
					Roles = @()
					Error = "User is not present in this Dataverse environment"
				}
				continue
			}

			$roleResponse = Invoke-DataverseGet -InstanceUrl $instanceUrl -AccessToken $accessToken -RelativePath ("systemusers({0})/systemuserroles_association?`$select=name,roleid" -f $systemUser.systemuserid)
			$dataverseRoles += [pscustomobject]@{
				EnvironmentName = $environment.DisplayName
				InstanceUrl = $instanceUrl
				Roles = @($roleResponse.value | ForEach-Object {
					[pscustomobject]@{
						RoleName = $_.name
						RoleId = $_.roleid
					}
				})
				Error = $null
			}
		}
		catch {
			$dataverseRoles += [pscustomobject]@{
				EnvironmentName = $environment.DisplayName
				InstanceUrl = $instanceUrl
				Roles = @()
				Error = $_.Exception.Message
			}
		}
	}
}

$allRoleNames = @($powerPlatformRoles.RoleName) + @($dataverseRoles | ForEach-Object { $_.Roles.RoleName })
$allLicenseNames = @($licenses.SkuPartNumber)

$report = [pscustomobject]@{
	User = [pscustomobject]@{
		DisplayName = $user.DisplayName
		UserPrincipalName = $user.UserPrincipalName
		Mail = $user.Mail
		Id = $user.Id
		AccountEnabled = $user.AccountEnabled
	}
	Licenses = $licenses
	DirectoryRoles = $directoryRoles
	PowerPlatformRoles = $powerPlatformRoles
	DataverseRoles = $dataverseRoles
	CopilotStudioAssessment = [pscustomobject]@{
		HasPotentialLicense = @($allLicenseNames | Where-Object { $_ -match "COPILOT|POWERAPPS|POWERAUTOMATE" }).Count -gt 0
		HasPotentialAuthoringRole = @($allRoleNames | Where-Object { $_ -in @("Environment Maker", "EnvironmentMaker", "System Administrator", "System Customizer", "Bot Author", "Bot Contributor") }).Count -gt 0
	}
}

$report | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $outputPath -Encoding UTF8
Write-Host "Permission report written to $outputPath" -ForegroundColor Green
