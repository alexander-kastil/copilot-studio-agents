#Requires -Modules @{ ModuleName="Microsoft.Graph.Authentication"; ModuleVersion="2.0" }
#Requires -Modules @{ ModuleName="Microsoft.Graph.Users"; ModuleVersion="2.0" }
#Requires -Modules @{ ModuleName="Microsoft.Graph.Users.Actions"; ModuleVersion="2.0" }
#Requires -Modules @{ ModuleName="Microsoft.Graph.Identity.DirectoryManagement"; ModuleVersion="2.0" }

param(
    [Parameter(Mandatory)]
    [string]$Password,
    [int]$NumberOfUsers = 4,
    [string]$UsernamePattern = "copilot-studio",
    [string]$TenantDomain = "cloud-agents.org",
    [string]$EnvironmentName = "Dev Env (default)",
    [string]$UsageLocation = "US"
)

function Connect-GraphIfNeeded {
    try {
        $context = Get-MgContext
        if ($null -eq $context) { throw "Not connected" }
        Write-Host "Already connected to Microsoft Graph" -ForegroundColor Green
    }
    catch {
        Write-Host "Connecting to Microsoft Graph..." -ForegroundColor Yellow
        Connect-MgGraph -Scopes "User.ReadWrite.All", "Directory.ReadWrite.All", "Organization.Read.All", "LicenseAssignment.ReadWrite.All" -NoWelcome | Out-Null
        Write-Host "Connected to Microsoft Graph" -ForegroundColor Green
    }
}

function Get-SkuId {
    param([string]$SkuPartNumber)
    $sku = Get-MgSubscribedSku -All -ErrorAction SilentlyContinue | Where-Object { $_.SkuPartNumber -eq $SkuPartNumber } | Select-Object -First 1
    if ($sku) { return $sku.SkuId }
    return $null
}

function New-CopilotStudioUser {
    param([int]$Index, [string]$FirstName, [string]$LastName, [string]$Pattern, [string]$Domain, [string]$UsageLocation, [string]$Password)
    
    $upn = "$Pattern-$('{0:D2}' -f $Index)@$Domain"
    $nickname = "$Pattern-$('{0:D2}' -f $Index)"
    
    $existing = Get-MgUser -Filter "userPrincipalName eq '$upn'" -ErrorAction SilentlyContinue
    if ($existing) {
        Write-Host "User already exists: $upn" -ForegroundColor Cyan
        return $existing
    }
    
    $pwd = @{ Password = $Password; ForceChangePasswordNextSignIn = $true }
    
    try {
        $params = @{
            accountEnabled = $true
            displayName = "$FirstName $LastName $Index"
            givenName = $FirstName
            surname = "$LastName $Index"
            mailNickname = $nickname
            userPrincipalName = $upn
            usageLocation = $UsageLocation
            passwordProfile = $pwd
        }

        $user = New-MgUser -BodyParameter $params -ErrorAction Stop
        Write-Host "Created user: $upn" -ForegroundColor Green
        return $user
    }
    catch {
        Write-Host "Failed to create user $upn : $_" -ForegroundColor Red
        return $null
    }
}

function Add-Licenses {
    param([object]$User, [string[]]$Licenses)
    if ($null -eq $User) { return }
    
    $addLicenses = @()
    foreach ($sku in $Licenses) {
        $id = Get-SkuId -SkuPartNumber $sku
        if ($id) { $addLicenses += @{ SkuId = $id } }
    }
    
    if ($addLicenses.Count -eq 0) {
        Write-Host "No matching licenses found in tenant for assignment" -ForegroundColor Yellow
        return
    }
    
    try {
        Set-MgUserLicense -UserId $User.Id -AddLicenses $addLicenses -RemoveLicenses @() -ErrorAction Stop
        Write-Host "Assigned licenses to $($User.UserPrincipalName)" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to assign licenses: $_" -ForegroundColor Red
    }
}

function Add-PowerPlatformRole {
    param([object]$User, [string]$Environment, [string]$Role = "Environment Maker")
    if ($null -eq $User) { return }
    
    try {
        $pac = Get-Command pac -ErrorAction SilentlyContinue
        if (-not $pac) {
            Write-Host "Failed to add user to environment: pac CLI is not installed or not on PATH" -ForegroundColor Yellow
            return
        }

        $environmentsJson = & pac admin list --json 2>$null
        if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($environmentsJson)) {
            Write-Host "Failed to add user to environment: pac admin list failed. Run 'pac auth create' first." -ForegroundColor Yellow
            return
        }

        $environments = $environmentsJson | ConvertFrom-Json
        $env = $environments | Where-Object {
            $_.DisplayName -eq $Environment -or $_.Name -eq $Environment -or $_.EnvironmentId -eq $Environment -or $_.EnvironmentUrl -eq $Environment
        } | Select-Object -First 1

        if ($null -eq $env) {
            Write-Host "Failed to add user to environment: environment '$Environment' was not found by pac admin list" -ForegroundColor Yellow
            return
        }

        & pac admin assign-user --environment $env.EnvironmentId --user $User.UserPrincipalName --role $Role | Out-Null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Added $($User.UserPrincipalName) to Dataverse environment with $Role role" -ForegroundColor Green
            return
        }

        Write-Host "Failed to add user to environment: pac admin assign-user did not succeed" -ForegroundColor Yellow
    }
    catch {
        Write-Host "Failed to add user to environment: $_" -ForegroundColor Yellow
    }
}

Write-Host "======================================================================"
Write-Host "Creating Copilot Studio Users"
Write-Host "======================================================================"

Connect-GraphIfNeeded

$licenses = @("POWERAPPS_DEV", "CCIBOTS_PRIVPREV_VIRAL", "DEVELOPERPACK_E5")
$users = @()

for ($i = 1; $i -le $NumberOfUsers; $i++) {
    Write-Host "[$i/$NumberOfUsers] Creating user..."
    
    $user = New-CopilotStudioUser -Index $i -FirstName "Copilot" -LastName "Studio" -Pattern $UsernamePattern -Domain $TenantDomain -UsageLocation $UsageLocation -Password $Password
    if ($null -eq $user) { continue }
    
    Add-Licenses -User $user -Licenses $licenses
    Add-PowerPlatformRole -User $user -Environment $EnvironmentName
    
    $users += $user
}

Write-Host ""
Write-Host "======================================================================"
Write-Host "SUMMARY: Created $($users.Count) users"
Write-Host "======================================================================"
foreach ($u in $users) {
    Write-Host "UPN: $($u.UserPrincipalName)" -ForegroundColor Green
}
