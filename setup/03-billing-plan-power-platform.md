# Billing Plan im Power Platform Admin Center

GitHub Copilot Agents, Workflows und Apps in Copilot Studio (alle Labs in Modul 06) verbrauchen Copilot Credits ab dem ersten Build, Preview und Test. Die Microsoft 365 Copilot Lizenz deckt das nicht ab. Abgerechnet wird pro Environment, über einen Pay-as-you-go Billing Plan oder eine Prepaid-Zuteilung. Developer- und Trial-Environments werden seit 1. September 2026 abgerechnet.

**Rolle:** Power Platform Administrator oder Global Administrator

**Voraussetzung:** Azure Subscription und Resource Group für den Pay-as-you-go Billing Plan

## Teil A: Pod-Environments

1. Power Platform Admin Center öffnen: <https://admin.powerplatform.microsoft.com>
2. **Licensing** > **Copilot Studio** > Tab **Environments**: Für jedes Pod-Environment die Spalten **Pay-as-you-go**, **Allocated capacity** und **Draw from tenant** ansehen. **No** ohne Zuteilung blockiert die Labs.
3. **Licensing** > **Billing Plans**:
   - einen bestehenden Plan **bearbeiten**, dessen **Products** **Copilot Studio** enthalten und dessen **Region** zu den Environments passt, oder
   - **New billing plan**: Name, Azure Subscription, Resource Group, Region, Meter **Copilot Studio**.
4. Die Pod-Environments als Target Environments hinzufügen und speichern.
5. **See details** am Plan: Meter und Target Environments kontrollieren.

Mit Prepaid-Credits: **Licensing** > **Copilot Studio** > **Manage Copilot Credits**, Environment wählen, Zuteilung eintragen, unter **Capacity overages** das Verhalten bei Überschreitung wählen.

## Teil B: Persönliche Developer-Environments (Lab 06-6)

Apps entstehen in Copilot Studio immer im persönlichen Developer-Environment des Makers. Copilot Studio legt es beim ersten App-Aufruf automatisch an: Typ Developer, Managed **Yes**, Dataverse **No**, Gruppe *Default Environment Group*, benannt nach dem Account. Ohne Billing Plan bricht der erste App-Build ab mit:

```text
No usage quota is available for your account, so this request couldn't be completed.
```

Damit das nicht erst im Kurs passiert, pro Account vorab:

1. Als der Account in Copilot Studio anmelden, auf **Home** die Kachel **App** öffnen und eine kurze erste Nachricht senden. Die Nachricht scheitert mit der Meldung oben, das Environment existiert danach.
2. Power Platform Admin Center > **Manage** > **Environments**: das Environment des Accounts finden und die Region notieren.
3. **Licensing** > **Billing Plans** > den Plan aus Teil A (gleiche Region) > **Edit** > **Add or remove environments** > Environment anhaken > **Update environments** > **Save**.
4. Optional zur Wiedererkennung umbenennen: Environment > **Details** > **Edit** > **Name**.

Die persönlichen Environments weder löschen noch verschieben.

## Optional: Kostenwarnung

Pay-as-you-go hat kein hartes Limit. Ein Azure Budget warnt, stoppt aber nichts: Azure Portal > die Resource Group des Billing Plans > **Cost Management** > **Budgets** > **Add**, Reset **Billing month**, Betrag, Alerts z. B. *Actual cost 80 %* und *Forecasted cost 100 %* mit Empfänger.

## Prüfen

1. **See details** am Billing Plan listet alle Pod-Environments und die fünf persönlichen Environments unter *Target environments*.
2. **Licensing** > **Copilot Studio** > **Environments** zeigt bei allen **Pay-as-you-go: Yes**. Diese Ansicht kann einige Minuten hinterherhinken.
3. Als ein Kurs-Account: einen GitHub Copilot Agent anlegen und eine Preview-Frage stellen. In der App-Kachel die erste Nachricht erneut senden, der Build startet. Die Test-App danach löschen, damit Lab 06-6 leer beginnt.
