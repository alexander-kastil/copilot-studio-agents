param(
    [string]$SiteUrl = "https://integrationsonline.sharepoint.com/sites/copilot-demo",
    [string]$LibraryName = "Products",
    [string]$AssetsPath = (Join-Path $PSScriptRoot "..\assets")
)

m365 login

m365 spo list add --webUrl $SiteUrl --title $LibraryName --baseTemplate 101 --description "Product support material for the Product Support Assistant lab"

Get-ChildItem -Path $AssetsPath -File | ForEach-Object {
    m365 spo file add --webUrl $SiteUrl --folder $LibraryName --path $_.FullName
    Write-Host "uploaded $($_.Name)"
}

m365 spo list get --webUrl $SiteUrl --title $LibraryName --output json
