# Work IQ aktivieren (Lab 06-5)

In Lab 06-5 fügen die TN einem GitHub Copilot Agent in Copilot Studio das Tool **Work IQ (Preview)** hinzu. Es erscheint nur, wenn der Tenant einmalig für Work IQ eingerichtet ist und die Accounts in einer Spending Policy mit Work IQ stehen.

**Rolle:** Global Administrator (einmalig, Schritt 1)

## Schritt 1: Service Principal anlegen

Variante A, Azure CLI:

```bash
az login --tenant mst.fastlane.net --allow-no-subscriptions
az ad sp create --id fdcc1f02-fc51-4226-8753-f668596af7f7
```

Variante B, Graph Explorer (<https://developer.microsoft.com/graph/graph-explorer>), als Global Administrator angemeldet:

```http
POST https://graph.microsoft.com/v1.0/servicePrincipals
Content-Type: application/json

{
  "appId": "fdcc1f02-fc51-4226-8753-f668596af7f7"
}
```

`201 Created` heißt angelegt. Ein Conflict-Fehler heißt, der Service Principal existiert schon. Beides ist in Ordnung.

## Schritt 2: Billing

Die Spending Policy aus [Anleitung 02](./02-spending-policy-m365.md) muss **Work IQ API for custom apps and agents** enthalten und die fünf Accounts abdecken. Nach dem Aktivieren 15 bis 30 Minuten warten.

## Prüfen

Als ein Kurs-Account in Copilot Studio: einen GitHub Copilot Agent öffnen, **Tools** > **Add a tool** > **MCP**. **Work IQ (Preview)** steht in der Liste.

| Symptom | Ursache |
| --- | --- |
| Work IQ (Preview) fehlt in der MCP-Liste | Service Principal fehlt, oder der Account steht in keiner Policy mit Work IQ API |
| `403 Forbidden` beim Aufruf | Account nicht in der Policy, oder keine Microsoft 365 Copilot Lizenz |
| Antwort leer oder generisch | Index nach Billing- oder Lizenzänderung noch im Aufbau, 15 bis 30 Minuten warten |
