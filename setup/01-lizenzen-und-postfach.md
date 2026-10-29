# Lizenzen und Postfach

Für die fünf Kurs-Accounts `copilot-studio-01@mst.fastlane.net` bis `copilot-studio-05@mst.fastlane.net`.

**Rolle:** License Administrator, User Administrator oder Global Administrator

## Wofür

| Lizenz | Lab | Grund |
| --- | --- | --- |
| Microsoft 365 Business Standard | 02-1, 02-2 | Cowork arbeitet mit Outlook, Kalender und Teams; Skills liegen in OneDrive unter `Documents/Cowork/skills` |
| Microsoft 365 Business Standard | 06-2 | Office 365 Outlook Connector mit Anmeldung |
| Microsoft 365 Business Standard | 06-4 | Workflow "Send an email (V2)" sendet eine echte Mail an das eigene Postfach |
| Microsoft 365 Business Standard | 06-5 | Seed-Mail an sich selbst, Work IQ liest sie |
| Microsoft 365 Copilot | 02-1 bis 02-3 | Cowork setzt die Lizenz pro User voraus |

## Schritte

1. Microsoft 365 Admin Center öffnen: <https://admin.cloud.microsoft>
2. **Users** > **Active users**, den Account öffnen.
3. Tab **Licenses and apps**.
4. **Microsoft 365 Business Standard** und **Microsoft 365 Copilot** anhaken, **Microsoft 365 F1** abhaken.
5. Copilot Studio Viral Trial, Power Apps for Developer und Power Automate Free bleiben zugewiesen.
6. **Save changes**.
7. Für die übrigen Accounts wiederholen. Mehrere Accounts auf einmal: in **Active users** markieren > **Manage product licenses**.

## Prüfen

Als jeder Account anmelden:

- <https://outlook.office.com>: Der Posteingang öffnet sich, eine Testmail an sich selbst kommt an. Das Postfach kann nach der Zuweisung einige Minuten brauchen.
- OneDrive öffnet sich.
- <https://copilot.cloud.microsoft>: **Cowork** erscheint neben **Chat**, sobald die Spending Policy aus [Anleitung 02](./02-spending-policy-m365.md) greift.
