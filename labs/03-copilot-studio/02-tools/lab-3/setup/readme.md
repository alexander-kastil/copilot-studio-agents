# Provision the Product Support Site Content

Creates the `Products` document library on a SharePoint site and uploads the five lab files from [../assets](../assets/). Run this once per tenant before delivering [the lab](../readme.md), or hand it to students so they provision their own site.

The default site is `https://integrationsonline.sharepoint.com/sites/copilot-demo`. Every script takes `-SiteUrl` to point somewhere else.

## What gets created

| Item | Value |
|------|-------|
| Document library | `Products`, base template 101, versioning on, shown on the quick launch |
| Files | The five files in [../assets](../assets/) |
| Copilot Studio Site Address input | the site URL |
| Copilot Studio File Identifier input | `Products` |
| Copilot Studio Excel Table input | `Stock` |

## Option 1: PnP PowerShell (recommended)

The shortest path, and the one that also works against a site you do not own outright.

```powershell
Install-Module PnP.PowerShell -Scope CurrentUser
```

PnP PowerShell 2.x and later removed the shared multi-tenant Entra app, so `-Interactive` needs a client ID of your own. Register one once per tenant:

```powershell
Register-PnPEntraIDAppForInteractiveLogin -ApplicationName "PnP Lab Provisioning" -Tenant integrationsonline.onmicrosoft.com
```

Keep the client ID it prints, then run the provisioning:

```powershell
$env:PNP_CLIENT_ID = "<client id from the registration>"
./Provision-ProductSupport.ps1
```

To target a different site:

```powershell
./Provision-ProductSupport.ps1 -SiteUrl "https://contoso.sharepoint.com/sites/product-support"
```

Expected: one `uploaded <name>` line per file, then a summary block showing the three input values the lab asks for and a file count of 5.

## Option 2: The PnP site template

[product-support-template.xml](product-support-template.xml) is a PnP provisioning template: the declarative "upload this and it builds itself" artifact. It creates the same library and pushes the same five files, and it is the format to hand to whoever owns tenant provisioning.

```powershell
Connect-PnPOnline -Url "https://integrationsonline.sharepoint.com/sites/copilot-demo" -Interactive -ClientId $env:PNP_CLIENT_ID
Invoke-PnPSiteTemplate -Path ./product-support-template.xml
```

The `Src` paths are relative to the template file, so keep the template in this `setup` folder next to `../assets`. To read a provisioned site back out as a template later:

```powershell
Get-PnPSiteTemplate -Out current-site.xml -Handlers Lists,Files
```

> **Note:** This is a PnP provisioning template, not the legacy `.stp` list template. `.stp` only covers classic lists, cannot carry documents, and is blocked on modern sites in most tenants. PnP templates are the supported equivalent.

## Option 3: CLI for Microsoft 365

Use this when you are on macOS or Linux, or when you do not want PnP PowerShell installed.

```powershell
npm install -g @pnp/cli-microsoft365
./provision-m365cli.ps1
```

The script logs you in with the device code flow, creates the library, and uploads each file.

## Option 4: The raw SharePoint REST API

The scripts above wrap these two calls. The awkward part of calling REST directly is not the payload, it is getting a bearer token and a form digest; that is exactly the work the CLIs do for you. Shown here so you can see what the lab setup actually is.

Create the document library (`BaseTemplate` 101 is a document library, 100 is a generic list):

```http
POST https://integrationsonline.sharepoint.com/sites/copilot-demo/_api/web/lists
Authorization: Bearer {token}
Content-Type: application/json;odata=verbose
Accept: application/json;odata=verbose
X-RequestDigest: {digest}

{
  "__metadata": { "type": "SP.List" },
  "Title": "Products",
  "BaseTemplate": 101,
  "Description": "Product support material for the Product Support Assistant lab"
}
```

Upload one file into it:

```http
POST https://integrationsonline.sharepoint.com/sites/copilot-demo/_api/web/GetFolderByServerRelativeUrl('/sites/copilot-demo/Products')/Files/add(url='ProductInventory.xlsx',overwrite=true)
Authorization: Bearer {token}
X-RequestDigest: {digest}
Content-Type: application/octet-stream

{binary file content}
```

Fetch the digest first from `POST /_api/contextinfo`, and read it from `d.GetContextWebInformation.FormDigestValue`.

The Microsoft Graph equivalent, which needs no digest:

```http
PUT https://graph.microsoft.com/v1.0/sites/{site-id}/drives/{drive-id}/root:/ProductInventory.xlsx:/content
Authorization: Bearer {token}
Content-Type: application/octet-stream

{binary file content}
```

Graph cannot create a document library, so the library itself still comes from the SharePoint REST call above or from one of the scripts.

## Verify the result

After any option, confirm the three things the lab depends on:

1. Open the site and check that `Products` appears in the left navigation with 5 items.
2. Open `ProductInventory.xlsx` in Excel for the web, select a cell in the data, and confirm the **Table Design** tab shows the table name `Stock` over `A1:E13`.
3. In Copilot Studio, the SharePoint **List folder** tool with **File Identifier** set to `Products` returns the four documents plus the workbook.

## Reset between deliveries

To hand a clean site to the next class, remove the library and re-run the provisioning:

```powershell
Connect-PnPOnline -Url "https://integrationsonline.sharepoint.com/sites/copilot-demo" -Interactive -ClientId $env:PNP_CLIENT_ID
Remove-PnPList -Identity "Products" -Force
./Provision-ProductSupport.ps1
```

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `AADSTS650057` or an invalid client error on connect | No client ID passed, PnP 2.x removed the shared app | Run `Register-PnPEntraIDAppForInteractiveLogin` and set `PNP_CLIENT_ID` |
| `File Not Found` on `Add-PnPFile` | `AssetsPath` did not resolve | Run the script from the `setup` folder, or pass `-AssetsPath` with a full path |
| The library exists but is empty | The library was created in a previous run and the upload leg failed | Re-run the script; it skips library creation and only uploads |
| The Excel connector shows no tables | The workbook was rebuilt or re-saved without the table | Re-upload `ProductInventory.xlsx` from `../assets` unchanged |
| Consent prompt loops on first connect | The registered app has no admin consent | Have a tenant admin grant consent to the app once |
