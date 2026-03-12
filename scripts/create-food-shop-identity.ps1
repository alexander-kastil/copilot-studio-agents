$resourceGroup = "rg-copilot-studio"
$location = "westeurope"
$identityName = "mi-food-shop-deploy"
$repoOwner = "alexander-kastil"
$repoName = "copilot-studio-agents"
$branch = "master"

az group create --name $resourceGroup --location $location

az identity create --resource-group $resourceGroup --name $identityName --location $location

$identityInfo = az identity show --resource-group $resourceGroup --name $identityName | ConvertFrom-Json
$principalId = $identityInfo.principalId
$clientId = $identityInfo.clientId
$tenantId = $identityInfo.tenantId

$scope = $(az group show --name $resourceGroup --query id --output tsv)

az role assignment create `
  --assignee-object-id $principalId `
  --assignee-principal-type ServicePrincipal `
  --role Contributor `
  --scope $scope

az identity federated-credential create `
  --resource-group $resourceGroup `
  --identity-name $identityName `
  --name "github-actions-branch" `
  --issuer "https://token.actions.githubusercontent.com" `
  --subject "repo:$repoOwner/${repoName}:ref:refs/heads/$branch" `
  --audiences "api://AzureADTokenExchange"

$subscriptionId = $(az account show --query id --output tsv)

Write-Output ""
Write-Output "GitHub repository secrets to configure:"
Write-Output "  AZURE_CLIENT_ID:          $clientId"
Write-Output "  AZURE_TENANT_ID:          $tenantId"
Write-Output "  AZURE_SUBSCRIPTION_ID:    $subscriptionId"
Write-Output "  AZURE_STATIC_WEB_APP_NAME: <name of your Static Web App in $resourceGroup>"
