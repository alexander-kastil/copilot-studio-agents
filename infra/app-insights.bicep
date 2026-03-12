@description('Resource ID of the Application Insights component')
param appInsightsId string

@description('Name of the Application Insights component')
param appInsightsName string

// Reference the existing Application Insights resource
resource appInsights 'Microsoft.Insights/components@2020-02-02' existing = {
  name: appInsightsName
}

// Outputs
output id string = appInsights.id
output name string = appInsights.name
output instrumentationKey string = appInsights.properties.InstrumentationKey
output connectionString string = appInsights.properties.ConnectionString
