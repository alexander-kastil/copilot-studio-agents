# Cowork Plugin hochladen und freigeben (Lab 02-3)

In Lab 02-3 baut jeder TN ein Cowork Plugin mit drei Skills und einem Microsoft Learn MCP Connector. Testen für sich selbst geht ohne Admin. Damit das Plugin unter **Discover** erscheint, muss ein Admin es hochladen oder freigeben.

**Rolle:** AI Administrator oder Global Administrator

## Vorab prüfen

Microsoft 365 Admin Center (<https://admin.cloud.microsoft>):

1. **Copilot** > **Settings** > **View all** > **Advanced package uploads**: Das Plugin enthält einen MCP Connector und gilt damit als Advanced Package. Die Kurs-Accounts müssen solche Pakete hochladen dürfen.
2. **Agents** > **Settings** > **Agent and plugin access**: Plugins aus der eigenen Organisation müssen erlaubt sein.

## Ohne Admin (zum Testen)

Der TN lädt das Paket selbst hoch: Cowork > **Customize** > **Plugins** > **Upload plugin**, im **Share**-Dialog **Only you** oder **Specific users in your organization**.

## Exercise 6, Step 1: Upload im Admin Center

1. **Agents** > **Tools** > Tab **Registry** > **Upload**.
2. Das Plugin-`.zip` des TN hochladen.
3. Die Komponenten prüfen (drei Skills, ein MCP Connector) > **Next**.
4. **Scope users**: **Specific users or groups**, den TN-Account > **Install**.

## Exercise 7, Steps 3 bis 6: WIQD und Freigabe

In Step 3 meldet der TN die `wiqd` CLI mit dem Account an, der die Admin-Rolle für Step 6 hat. Step 5 reicht das Plugin mit `wiqd plugin publish --env dev` im Org-Katalog ein.

Wurde es eingereicht:

1. **Agents** > **Tools** > **Requests (preview)**.
2. Die Anfrage freigeben.

Wurde es abgelehnt (`Publishing is not permitted for this account`), lädt der Admin das Paket hoch:

1. **Agents** > **Tools** > **Registry** > **Upload**.
2. **Choose file**: `appPackage\build\appPackage.dev.zip` des TN. Die Seite zeigt **Upload complete**.
3. **Publish**: **Specific users and groups**, den TN-Account. **Install**: **No users**.
4. **Review & finish** > **Upload**. Nach rund 30 Sekunden steigt die Anzahl in der Registry um eins.

## Prüfen

Als der TN-Account in Cowork: **Customize** > **Discover** zeigt das Plugin *Dev Camp Foundry Research*, **Install** funktioniert.
