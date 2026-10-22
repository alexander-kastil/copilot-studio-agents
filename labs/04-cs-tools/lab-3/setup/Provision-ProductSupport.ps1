param(
    [string]$SiteUrl = "https://integrationsonline.sharepoint.com/sites/copilot-demo",
    [string]$LibraryName = "Products",
    [string]$ClientId = $env:PNP_CLIENT_ID,
    [string]$AssetsPath = (Join-Path $PSScriptRoot "..\assets")
)

Connect-PnPOnline -Url $SiteUrl -Interactive -ClientId $ClientId

$existing = Get-PnPList -Identity $LibraryName -ErrorAction SilentlyContinue
if (-not $existing) {
    New-PnPList -Title $LibraryName -Template DocumentLibrary -OnQuickLaunch
    Set-PnPList -Identity $LibraryName -Description "Product support material for the Product Support Assistant lab" -EnableVersioning $true
}

Get-ChildItem -Path $AssetsPath -File | ForEach-Object {
    Add-PnPFile -Path $_.FullName -Folder $LibraryName | Out-Null
    Write-Host "uploaded $($_.Name)"
}

$library = Get-PnPList -Identity $LibraryName
Write-Host ""
Write-Host "Site Address    : $SiteUrl"
Write-Host "Document Library: $LibraryName"
Write-Host "File Identifier : $LibraryName"
Write-Host "Files in library: $($library.ItemCount)"
