@description('Name of the App Service')
param name string

@description('Location for the App Service')
param location string = resourceGroup().location

@description('Tags to apply to the App Service')
param tags object = {}

@description('ID of the App Service Plan')
param appServicePlanId string

@description('Runtime name (dotnetcore, node, python, etc.)')
param runtimeName string

@description('Runtime version')
param runtimeVersion string

@description('Application settings as key-value pairs')
param appSettings object = {}

@description('Application Insights connection string (optional)')
param appInsightsConnectionString string = ''

// Convert appSettings object to array format required by App Service
var appSettingsArray = [for key in items(appSettings): {
  name: key.key
  value: key.value
}]

// Add Application Insights settings if connection string is provided
var appInsightsSettings = !empty(appInsightsConnectionString) ? [
  {
    name: 'APPLICATIONINSIGHTS_CONNECTION_STRING'
    value: appInsightsConnectionString
  }
  {
    name: 'ApplicationInsightsAgent_EXTENSION_VERSION'
    value: '~3'
  }
] : []

var finalAppSettings = concat(appSettingsArray, appInsightsSettings)

resource appService 'Microsoft.Web/sites@2023-01-01' = {
  name: name
  location: location
  tags: tags
  kind: 'app,linux'
  properties: {
    serverFarmId: appServicePlanId
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: '${toUpper(runtimeName)}|${runtimeVersion}'
      alwaysOn: false
      ftpsState: 'Disabled'
      minTlsVersion: '1.2'
      appSettings: finalAppSettings
      cors: {
        allowedOrigins: ['*']
      }
    }
  }
}

output id string = appService.id
output name string = appService.name
output uri string = 'https://${appService.properties.defaultHostName}'
