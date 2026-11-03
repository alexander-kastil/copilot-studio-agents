# Job Openings in Dataverse beantworten und erfassen

Das HR-Team führt seine offenen Stellen in einer Tabelle. Heute öffnet jemand diese Tabelle, filtert sie von Hand und tippt jede neue Stelle ein. In diesem Lab beantwortet der HR Agent Fragen direkt aus einer Dataverse-Tabelle und erfasst eine neue Stelle, nachdem der User sie bestätigt hat.

Dauer: etwa 20 Minuten.

## Was Sie bauen

- Eine Dataverse-Tabelle `Job Opening` mit drei Zeilen.
- Eine Dataverse Knowledge Source im HR Agent, die Fragen über diese Zeilen beantwortet.
- Ein Tool `Record job opening` auf dem Microsoft Dataverse Connector, das nach der Bestätigung des Users eine Zeile anlegt.

## Voraussetzungen

- Den HR Agent aus den vorigen Labs mit **Authenticate with Microsoft** unter **Settings** > **Security** > **Authentication**.
- Die Rolle Environment Maker in der Environment des Agents, mit eingeschalteter Dataverse Search (fragen Sie Ihren Administrator, wenn sich **Dataverse** nicht als Knowledge hinzufügen lässt).

## Aufgabe 1: Die Tabelle Job Opening erstellen

Der Agent beantwortet nur Fragen zu Zeilen, die es gibt. Deshalb beginnen Sie mit einer kleinen Tabelle, deren Antworten Sie auf einen Blick prüfen.

1. Wählen Sie in [Power Apps](https://make.powerapps.com) die Environment des Agents, öffnen Sie **Tables** und wählen Sie **New table** > **Set advanced properties**.
2. Setzen Sie **Display name** auf `Job Opening`, öffnen Sie den Tab **Primary column**, setzen Sie dort **Display name** auf `Title` und wählen Sie **Save**.
3. Wählen Sie dreimal **+ New column** und legen Sie diese Spalten an:

| Display name | Data type |
|--------------|-----------|
| Department | Single line of text |
| Open Positions | Whole number |
| Location | Single line of text |

4. Wählen Sie in der Befehlsleiste **Edit**, um die Zeilen in einem Grid zu öffnen, und fügen Sie diese Zeilen hinzu:

| Title | Department | Open Positions | Location |
|-------|------------|----------------|----------|
| HR Generalist | Human Resources | 2 | Vienna |
| Software Engineer | IT | 4 | Graz |
| Sales Representative | Sales | 3 | Vienna |

Erwartet: Die Tabelle **Job Opening** zeigt drei Zeilen, in denen alle vier Spalten befüllt sind.

## Aufgabe 2: Die Tabelle als Knowledge hinzufügen und Fragen stellen

Der Orchestrator durchsucht eine Knowledge Source nur, wenn ihre Beschreibung sagt, was darin steht. Deshalb beschreiben Sie die Tabelle mit den Worten, mit denen User fragen.

1. Öffnen Sie den HR Agent und wählen Sie auf der Seite **Overview** den Eintrag **Add knowledge**.
2. Wählen Sie **Dataverse**, suchen Sie nach `Job Opening`, wählen Sie die Tabelle und dann **Next**.
3. Ersetzen Sie die Beschreibung der Knowledge durch:

```text
Open job positions at the company: one row per job opening with its title, department, number of open positions and location. Use it for questions about open jobs, vacancies and hiring needs.
```

4. Wählen Sie **Add to agent**.
5. Senden Sie im Test Pane:

```text
Which job openings do we have in Vienna, and how many positions are open?
```

Erwartet: Die Antwort nennt HR Generalist mit 2 Stellen und Sales Representative mit 3 und zitiert die Dataverse-Quelle. Findet der Agent nichts, warten Sie ein paar Minuten, bis Dataverse Search die neuen Zeilen indiziert hat, und fragen Sie erneut.

## Aufgabe 3: Eine neue Stelle mit einem Dataverse Tool erfassen

Knowledge liest Zeilen, ein Tool schreibt sie. Sie fügen eine Action des Microsoft Dataverse Connectors hinzu und lassen den Agent um Bestätigung bitten, bevor er die Zeile anlegt.

1. Öffnen Sie **Tools** > **+ Add a tool**, suchen Sie nach `Microsoft Dataverse`, wählen Sie **Add a new row**, legen Sie bei Bedarf die Connection an und wählen Sie **Add and configure**.
2. Setzen Sie **Name** auf `Record job opening` und die Beschreibung auf:

```text
Creates a new job opening in the Job Opening table. Use it when a user asks to record, add or open a new job position. Requires the title, the department, the number of open positions and the location.
```

3. Setzen Sie unter **Inputs** den **Table name** auf den Custom Value **Job Openings** und wählen Sie **Save**. Lassen Sie die Spalten-Inputs, die dann erscheinen, auf **Dynamically fill with AI**.
4. Setzen Sie unter **Additional details** den Wert **Ask the end user before running** auf **Yes** und wählen Sie **Save**.
5. Senden Sie im Test Pane:

```text
Record a new job opening: Payroll Specialist in Finance, 1 position, in Graz.
```

6. Prüfen Sie die Werte in der Bestätigung und bestätigen Sie.
7. Öffnen Sie in Power Apps die Tabelle **Job Opening** und aktualisieren Sie die Zeilen.

Erwartet: Der Agent zeigt Payroll Specialist, Finance, 1 und Graz zur Bestätigung, bevor er das Tool ausführt. Nach Ihrer Bestätigung hat die Tabelle eine vierte Zeile mit diesen Werten.

## Troubleshooting

| Symptom | Wahrscheinliche Ursache | Lösung |
|---------|-------------------------|--------|
| **Dataverse** fehlt, oder die Tabelle lässt sich in **Add knowledge** nicht auswählen | Dataverse Search ist ausgeschaltet, oder Ihnen fehlt die Berechtigung für die Tabelle | Bitten Sie den Administrator, Dataverse Search einzuschalten, und prüfen Sie Ihre Security Role |
| Die Spalten-Inputs erscheinen nicht, nachdem Sie **Table name** gesetzt haben | Das Connector-Schema aktualisiert sich erst, wenn die Pflicht-Inputs gesetzt sind | Speichern Sie das Tool, schließen Sie es und öffnen Sie die Konfigurationsseite erneut |
| Die neue Zeile erscheint nicht sofort in Knowledge-Antworten | Der Suchindex aktualisiert sich erst nach dem Schreiben | Prüfen Sie die Zeile in Power Apps; die Knowledge-Antworten ziehen nach der Indizierung nach |
