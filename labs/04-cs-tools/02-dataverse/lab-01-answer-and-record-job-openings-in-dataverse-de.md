# Job Openings in Dataverse beantworten und erfassen

Das HR-Team führt seine offenen Stellen in einer Tabelle. Heute öffnet jemand diese Tabelle, filtert sie von Hand und tippt jede neue Stelle ein. In diesem Lab beantwortet der HR Agent Fragen direkt aus einer Dataverse-Tabelle und erfasst eine neue Stelle, nachdem der User sie bestätigt hat.

Dauer: etwa 20 Minuten.

## Was Sie bauen

- Eine Dataverse-Tabelle `Job Opening` mit drei Zeilen.
- Eine Dataverse Knowledge Source im HR Agent, die Fragen über diese Zeilen beantwortet.
- Ein Tool `Record job opening` auf dem Microsoft Dataverse Connector, das nach der Bestätigung des Users eine Zeile anlegt.

## Voraussetzungen

- Den HR Agent mit **Authenticate with Microsoft** unter **Settings** > **Security** > **Authentication**; [Den HR Agent einrichten](#den-hr-agent-einrichten) baut ihn, falls Sie ihn noch nicht haben.
- Die Rolle Environment Maker in der Environment des Agents, mit eingeschalteter Dataverse Search (fragen Sie Ihren Administrator, wenn sich **Dataverse** nicht als Knowledge hinzufügen lässt).

## Den HR Agent einrichten

Dieses Lab startet mit einem Standard Agent namens HR Agent mit seiner Description und seinen Instructions. Wenn Sie ihn in den Basics Labs gebaut haben, zum Beispiel in [Ihren ersten Copilot Studio Agent erstellen](../../03-cs-basics/01-standard-agents/lab-01-create-your-first-agent-de.md), öffnen Sie ihn unter **Agents** und überspringen diesen Abschnitt. Andernfalls erstellen Sie ihn jetzt:

1. Rufen Sie [Copilot Studio](https://copilotstudio.microsoft.com) auf, wählen Sie auf **Home** den Befehl **Other ways to build** und dann unter **Build with standard orchestration** den Eintrag **Agent** mit dem Badge **Standard**.
2. Geben Sie im Dialog **Name your agent** den Namen `HR Agent` ein und wählen Sie **Create**.
3. Warten Sie, bis der Agent eingerichtet ist (die Befehle **Edit** bleiben etwa eine Minute deaktiviert). Wählen Sie dann im Tab **Overview** im Abschnitt **Details** den Befehl **Edit**, fügen Sie den folgenden Text in **Description** ein und wählen Sie **Save**.

```txt
You help employees to find information about HR related policies
```

4. Wählen Sie im Abschnitt **Instructions** den Befehl **Edit**, fügen Sie die folgenden Instructions ein und wählen Sie **Save**.

```txt
- Provide employees with clear, accurate information about HR policies and procedures.
- Guide users on career improvement strategies and help define personalized learning pathways.
- Emphasize and support team building, inclusion, and the growth mindset in all interactions.
- Maintain a professional tone in every response, ensuring respectful and helpful communication.
- Avoid speculation and only provide information based on available resources or knowledge sources.
- Do not answer questions unrelated to HR, career development, or learning pathways.
- Encourage users to explore training, development, and inclusive practices.
- Respond promptly and clearly to all user queries.
```

5. Wählen Sie **Settings** > **Security** > **Authentication** und prüfen Sie, dass **Authenticate with Microsoft** ausgewählt ist.

Erwartet: Der Tab **Overview** des HR Agent zeigt die Description und die Instructions, und **Authentication** zeigt **Authenticate with Microsoft**.

## Aufgabe 1: Die Tabelle Job Opening erstellen

Der Agent beantwortet nur Fragen zu Zeilen, die es gibt. Deshalb beginnen Sie mit einer kleinen Tabelle, deren Antworten Sie auf einen Blick prüfen.

1. Wählen Sie in [Power Apps](https://make.powerapps.com) die Environment des Agents, öffnen Sie **Tables** und wählen Sie **New table** > **Table (advanced properties)**.
2. Setzen Sie **Display name** auf `Job Opening`, behalten Sie den vorbelegten **Plural name**, öffnen Sie den Tab **Primary column**, setzen Sie dort **Display name** auf `Title` und wählen Sie **Save**.
3. Wählen Sie dreimal das **+** am Ende der Spaltenüberschriften und legen Sie diese Spalten an (**Whole number** steht unter **Number**):

| Display name | Data type |
|--------------|-----------|
| Department | Single line of text |
| Open Positions | Whole number |
| Location | Single line of text |

4. Wählen Sie in der Befehlsleiste **Edit**, um die Zeilen in einem Grid zu öffnen. Zeigt das Grid nur **Title** und **Created On**, wählen Sie am Ende der Überschriften den Eintrag **+N more** > **Show existing column**, haken Sie **Department**, **Location** und **Open Positions** an und wählen Sie **Save**. Fügen Sie dann diese Zeilen einzeln hinzu und lassen Sie jede Zeile speichern, bevor Sie die nächste beginnen:

| Title | Department | Open Positions | Location |
|-------|------------|----------------|----------|
| HR Generalist | Human Resources | 2 | Vienna |
| Software Engineer | IT | 4 | Graz |
| Sales Representative | Sales | 3 | Vienna |

Erwartet: Die Tabelle **Job Opening** zeigt drei Zeilen, in denen alle vier Spalten befüllt sind.

## Aufgabe 2: Die Tabelle als Knowledge hinzufügen und Fragen stellen

Der Orchestrator durchsucht eine Knowledge Source nur, wenn ihre Beschreibung sagt, was darin steht. Deshalb beschreiben Sie die Tabelle mit den Worten, mit denen User fragen.

1. Öffnen Sie den HR Agent und wählen Sie auf der Seite **Overview** den Eintrag **Add knowledge**.
2. Wählen Sie **Dataverse**, suchen Sie nach `Job Opening`, wählen Sie die Tabelle und dann **Add to agent**.
3. Öffnen Sie im Tab **Knowledge** die neue Quelle und ersetzen Sie ihre Beschreibung durch:

```text
Open job positions at the company: one row per job opening with its title, department, number of open positions and location. Use it for questions about open jobs, vacancies and hiring needs.
```

4. Wählen Sie **Save**.
5. Senden Sie im Test Pane:

```text
Which job openings do we have in Vienna, and how many positions are open?
```

Erwartet: Die Antwort nennt HR Generalist mit 2 Stellen und Sales Representative mit 3 und zitiert die Dataverse-Quelle. Findet der Agent nichts, warten Sie ein paar Minuten, bis Dataverse Search die neuen Zeilen indiziert hat, und fragen Sie erneut.

## Aufgabe 3: Eine neue Stelle mit einem Dataverse Tool erfassen

Knowledge liest Zeilen, ein Tool schreibt sie. Sie fügen eine Action des Microsoft Dataverse Connectors hinzu und lassen den Agent um Bestätigung bitten, bevor er die Zeile anlegt.

1. Öffnen Sie **Tools** > **+ Add a tool**, suchen Sie nach `Microsoft Dataverse`, wählen Sie im Dialog **Add tool** den Eintrag **Add a new row to selected environment**. Werden Sie gefragt, wählen Sie **Create new connection** > **Create** und Ihr Konto, dann **Add and configure**.
2. Setzen Sie **Name** auf `Record job opening` und die Beschreibung auf:

```text
Creates a new job opening in the Job Opening table. Use it when a user asks to record, add or open a new job position. Requires the title, the department, the number of open positions and the location.
```

3. Setzen Sie unter **Inputs** die **Environment** auf **(Current)**, wählen Sie **Job Openings** (den Pluralnamen der Tabelle) als Wert für **Table name** und wählen Sie **Save**. Fügen Sie dann mit **Add input** die Inputs **Title**, **Department**, **Open Positions** und **Location** hinzu, lassen Sie jeden auf **Dynamically fill with AI** und wählen Sie **Save**.
4. Klappen Sie **Additional details** auf und setzen Sie **Ask the end user before running** auf **Yes**. Behalten Sie unter **How do you want to ask the user?** den Eintrag **Send specific response**, geben Sie die folgende Nachricht ein und wählen Sie **Save**.

```text
Do you want me to create this job opening?
```

5. Senden Sie im Test Pane:

```text
Record a new job opening: Payroll Specialist in Finance, 1 position, in Graz.
```

6. Beantworten Sie die Bestätigungsfrage mit `Yes`. Erscheint eine Card **Connect to continue**, wählen Sie **Allow**. Fragt der Agent erneut, prüfen Sie zuerst die Tabelle: Ihre erste Antwort hat die Zeile womöglich schon angelegt.
7. Öffnen Sie in Power Apps die Tabelle **Job Opening** und aktualisieren Sie die Zeilen.

Erwartet: Der Agent stellt die Bestätigungsfrage, bevor er das Tool ausführt. Nach Ihrer Bestätigung hat die Tabelle eine vierte Zeile mit Payroll Specialist, Finance, 1 und Graz.

## Troubleshooting

| Symptom | Wahrscheinliche Ursache | Lösung |
|---------|-------------------------|--------|
| **Dataverse** fehlt, oder die Tabelle lässt sich in **Add knowledge** nicht auswählen | Dataverse Search ist ausgeschaltet, oder Ihnen fehlt die Berechtigung für die Tabelle | Bitten Sie den Administrator, Dataverse Search einzuschalten, und prüfen Sie Ihre Security Role |
| Die Spalten-Inputs erscheinen nicht, nachdem Sie **Table name** gesetzt haben | Das Connector-Schema aktualisiert sich erst, wenn die Pflicht-Inputs gesetzt sind | Speichern Sie das Tool, schließen Sie es und öffnen Sie die Konfigurationsseite erneut |
| Die neue Zeile erscheint nicht sofort in Knowledge-Antworten | Der Suchindex aktualisiert sich erst nach dem Schreiben | Prüfen Sie die Zeile in Power Apps; die Knowledge-Antworten ziehen nach der Indizierung nach |
