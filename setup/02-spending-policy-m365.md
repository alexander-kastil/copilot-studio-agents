# Spending Policy im Microsoft 365 Admin Center

Copilot Credits für Cowork, Work IQ und das Ausführen von Apps kommen aus einer Spending Policy im Microsoft 365 Admin Center. Copilot Studio selbst rechnet zusätzlich über Power Platform ab: [Anleitung 03](./03-billing-plan-power-platform.md).

**Rolle:** Global Administrator oder Billing Administrator. Ein AI oder License Administrator kann eine Policy bearbeiten, aber nicht anlegen.

**Voraussetzung:** eine Billing Method, z. B. Pay-as-you-go über eine Azure Subscription (rund 0,01 USD pro Credit).

## Was die Policy abdecken muss

| Agents and services | Lab |
| --- | --- |
| Cowork | 02-1 bis 02-3 |
| Work IQ API for custom apps and agents | 06-5 |
| Copilot Managed Runtime | 06-6, Ausführen der geteilten App |

## Schritte

1. Security Group mit den fünf Kurs-Accounts anlegen: Microsoft 365 Admin Center > **Teams & groups** > **Active teams & groups** > **Security groups** > **Add a security group**.
2. **Copilot** > **Cost management** öffnen: <https://admin.cloud.microsoft/#/copilot/costmanagement>
3. Beim ersten Mal **Get started** wählen. Das aktiviert usage-based billing und verknüpft die Billing Method.
4. **Configuration** > **+ Add spending policy**.
5. **Scope user and group**: **Specific groups**, die Security Group aus Schritt 1.
6. **Select agents and services**: die drei Services aus der Tabelle oben anhaken.
7. **Spending limit**: **Limit monthly spending**. Richtwert 5000 Credits pro Account, also 25.000 für fünf Accounts (rund 250 USD). Den Wert nicht unter das Minimum setzen, das die Seite aus der User-Anzahl berechnet.
8. Optional: **Limit monthly spending per user** mit 5000.
9. Optional: **Define alerts**, z. B. bei 80 %, Empfänger unter **Email alerts to** eintragen.
10. Billing Method wählen und speichern.

## Gut zu wissen

- Eine Policy am Limit sperrt alle Services darin bis zum 1. des Folgemonats. Ein Limit, das mitten im Kurs greift, stoppt Cowork und Work IQ für alle betroffenen Accounts.
- Ein User in mehreren Policies bekommt die Policy mit dem höchsten Limit.
- Neue Services landen automatisch in der *All Users Policy*. Eine eigene Policy bekommt sie erst, wenn man sie dort anhakt.
- Eine gelbe Meldung *"Spending limits for this policy are below the required minimum"* heißt: Limit erhöhen, sonst arbeitet die Policy nicht zuverlässig.

## Prüfen

1. **Configuration**: Die Policy steht auf Active, **Monthly limit** zeigt den eingetragenen Wert.
2. Als ein Kurs-Account auf <https://copilot.cloud.microsoft>: **Cowork** erscheint neben **Chat**, eine kleine Aufgabe läuft durch.
3. Verbrauch erscheint unter **Cost management** > **Overview** erst nach 24 bis 48 Stunden.
