# Den HR Agent upgraden und seine Topics neu aufbauen

![Der Standard HR Agent aus Modul 03 mit seinen Instructions, zwei Knowledge Sources und drei Topics wird zu HR Agent (Upgraded) auf dem GitHub Copilot Harness upgegradet: Die Knowledge wird neu hinzugefügt, das Rollen-Topic wird zu Instructions plus einem Start Hook, der den angemeldeten User begrüßt, das Kandidaten-Topic wird zum Workflow Tool Register Candidate, das eine E-Mail sendet, und das Adaptive Card Topic bleibt auf dem Standard Agent.](./_images/lab-01-upgrade-the-hr-agent-overview.svg)

Der HR Agent, den Sie in Modul 03 gebaut haben, beantwortet Fragen zu Policies und Jobs, fragt Personen nach ihrer Rolle und registriert Kandidatinnen und Kandidaten über feste Topics. In diesem Lab bringen Sie ihn so auf den GitHub Copilot Harness, wie es die Guidance von Microsoft beschreibt: auflisten, wofür jeder Teil da ist, eine Kopie upgraden, neu aufbauen, was das Upgrade übersprungen hat, und dieselben Journeys auf beiden Agents belegen. Am Ende haben Sie einen upgegradeten HR Agent, der Kandidatinnen und Kandidaten über ein Workflow Tool registriert und jeden User über einen Hook begrüßt.

Was Sie hier üben: einen Standard Agent Journey für Journey migrieren und pro Topic zwischen Instructions, einem Workflow Tool und einem Hook entscheiden.

Dauer: etwa 40 Minuten.

## Was Sie bauen

- Eine Purpose Map des HR Agents mit einer Entscheidung und einem Upgrade-Ergebnis pro Component.
- **HR Agent (Upgraded)**, eine Kopie Ihres Agents auf dem GitHub Copilot Harness, mit neu hinzugefügter Knowledge.
- Ein Workflow Tool `Register Candidate`, das vier Inputs entgegennimmt, Ihnen die Zusammenfassung zur Kandidatur per E-Mail schickt und dem Agent eine Bestätigung zurückgibt.
- Einen Hook **Start (pre-loop)**, dessen Workflow dem Agent zu Beginn jeder Session den Namen des angemeldeten Users gibt.
- Einen Run von vier Journeys, nebeneinander auf dem Standard Agent und dem upgegradeten Agent.

## Voraussetzungen

- Der HR Agent aus den Labs von Modul 03, beginnend mit [Ihren ersten Copilot Studio Agent erstellen](../../03-cs-basics/01-standard-agents/lab-01-create-your-first-agent-de.md): seine Instructions, die Knowledge aus der Microsoft Careers site und den SharePoint HR Documents sowie die Topics aus [Topics, Entities und Variables definieren](../../03-cs-basics/03-topics/lab-01-build-topics-de.md) und [Input mit Adaptive Cards erfassen](../../03-cs-basics/05-adaptive-cards/lab-01-collect-input-with-adaptive-cards-de.md).
- Eine Copilot Studio Environment, in der das Menü **New agent** den Eintrag **Agent** mit dem Badge **GitHub Copilot** anbietet, mit der Maker-Rolle und verfügbaren Copilot Credits: Das Upgrade, Workflow Runs, Hooks und Turns in Preview verbrauchen sie.
- Eine Office 365 Outlook Connection für Ihren eigenen Account, damit der Workflow Ihnen die Zusammenfassung zur Kandidatur senden kann.
- Die Demo [Ein Topic und seinen Agent Flow als Workflow neu aufbauen](../../../demos/06-cs-copilot-harness/07-migration/demo-07-rebuild-a-topic-as-a-workflow.md), gesehen oder durchgearbeitet, damit Ihnen der Workflow Designer vertraut ist.

## Schritt 1: Den HR Agent kartieren und eine Baseline festhalten

Bevor sich etwas bewegt, schreiben Sie auf, wofür jeder Teil des HR Agents da ist, und führen Sie die Journeys aus, die der neue Agent wiederholen muss. Die Map ist Ihr Plan und am Ende Ihr Beleg: Die Migration ist fertig, wenn jede Zeile ein Zuhause hat und die Journeys auf beiden Agents bestehen.

1. Öffnen Sie den Standard HR Agent und gleichen Sie seine **Overview**, **Knowledge** und **Topics** mit der folgenden Map ab; ergänzen Sie eine Zeile für alles, was Sie sonst noch gebaut haben.
2. Kopieren Sie die Map in eine Textdatei namens `hr-agent-migration.txt`.

```text
Component (Standard HR Agent)                      Purpose                          On the GitHub Copilot harness        Upgrade result
Instructions (eight bullets)                       Tone and scope                   Instructions
Knowledge: Microsoft Careers site                  Answer job questions             Knowledge, added again
Knowledge: SharePoint HR Documents                 Answer policy questions          Knowledge, added again
Topic: Collect user's role                         Tailor answers to the role       Instructions plus a Start hook
Topic: Register a new candidate                    Collect and confirm a candidate  Workflow tool Register Candidate
Topic: Register new candidate with adaptive cards  Collect a candidate on a card    Stays on the Standard agent
Channels: Teams and Microsoft 365 Copilot          Reach employees                  Published again
```

3. Öffnen Sie das Test Pane des Standard HR Agents und senden Sie jede der folgenden Nachrichten in einer neuen Unterhaltung; notieren Sie in der Datei, welches Topic oder welche Knowledge Source geantwortet hat.

```text
I'm a candidate. What should I know before I apply?
```

```text
Where can I find open jobs at Microsoft?
```

```text
What do our HR documents say about the onboarding of new employees?
```

```text
I want to register a new candidate.
```

Erwartet: `hr-agent-migration.txt` listet jede Component mit einem Zweck und einem Ziel, und das Adaptive Card Topic ist die einzige Zeile ohne Neuaufbau, weil Adaptive Cards auf dem GitHub Copilot Harness kein dokumentiertes Gegenstück haben. Im Test Pane führt die erste Nachricht **Collect user's role** aus, die zweite und dritte werden aus der Microsoft Careers site und den HR Documents mit Zitaten beantwortet, und die vierte erfasst die Kandidatur auf einer Adaptive Card.

## Schritt 2: Den Agent upgraden und wieder hinzufügen, was übersprungen wurde

Das Upgrade baut eine Kopie auf dem GitHub Copilot Harness, lässt Ihren Standard Agent, wie er ist, und meldet, was migriert wurde, was Aufmerksamkeit braucht und was übersprungen wurde. Knowledge Sources sind nie Teil des Upgrades, deshalb scheitern die Journeys zu Jobs und Policies, bis Sie sie wieder hinzufügen.

1. Geben Sie auf der Startseite von Copilot Studio den folgenden Request in das Eingabefeld ein, mit dem exakten Namen Ihres Agents aus der Liste **Agents**, und beantworten Sie die Fragen im Chat.

```text
upgrade my HR Agent
```

2. Lesen Sie jeden Eintrag des Reports und füllen Sie die Spalte **Upgrade result** in `hr-agent-migration.txt`.
3. Wählen Sie das Icon **Open** auf der Karte **HR Agent (Upgraded)**.
4. Wählen Sie im Tab **Build** das **+** neben **Knowledge** und fügen Sie die öffentliche Website `https://careers.microsoft.com/` mit dem Namen `Microsoft Careers site` hinzu.
5. Fügen Sie die SharePoint Site aus Modul 03 mit dem Namen `HR Documents` und der folgenden Beschreibung hinzu und wählen Sie dann das Icon **Save**.

```text
Provides documents about policies, procedures, and rules related to the HR department.
```

Erwartet: **HR Agent (Upgraded)** öffnet sich im Tab **Build** mit Ihren Instructions, **Knowledge** listet **Microsoft Careers site** und **HR Documents**, und der Standard HR Agent steht unverändert auf der Seite **Agents**. Jede Zeile der Map trägt ein Upgrade-Ergebnis, und bei beiden Knowledge-Zeilen steht not migrated.

> **Hinweis:** Hat das Upgrade für ein Topic bereits einen Skill oder einen Workflow gebaut, vergleichen Sie ihn mit Ihrer Map, behalten Sie den passenden und entfernen Sie den anderen, damit der Agent für jede Aufgabe genau einen Weg hat.

## Schritt 3: Das Kandidaten-Topic als Workflow Tool neu aufbauen

Die Kandidaten-Topics haben vier Werte erfasst, sie zur Kontrolle angezeigt und vor dem Einfügen nach einem Ja gefragt. Der Workflow nimmt die vier Werte als Inputs und erledigt die Arbeit; der Agent erfasst sie im Gespräch, und die Ja-oder-Nein-Frage wird zu einem Satz in den Instructions, neben der Regel, die das Rollen-Topic ersetzt.

1. Wählen Sie im Tab **Build** das **+** neben **Tools** und dann **+ Add** > **Workflow**.
2. Wählen Sie den Trigger **When an agent calls the flow**, dann **+ Add an input** > **Text**, und fügen Sie diese vier Inputs mit ihren Beschreibungen hinzu.

```text
FirstName: The candidate's first name.
LastName: The candidate's last name.
Email: The candidate's e-mail address.
CurrentRole: The candidate's current job role.
```

3. Wählen Sie das **+** zwischen dem Trigger und **Respond to the agent**, suchen Sie nach **Office 365 Outlook** und fügen Sie **Send an email (V2)** hinzu, mit Ihrer eigenen Adresse in **To**, dem Betreff `New candidate` und dem folgenden Text; fügen Sie jeden Input über das Blitz-Icon an der Stelle seines Labels ein.

```text
New candidate: FirstName LastName, e-mail Email, current role CurrentRole. Registered by the HR agent.
```

4. Wählen Sie **Respond to the agent**, dann **+ Add an output** > **Text** mit dem Namen `Confirmation` und dem folgenden Wert, die Inputs an der Stelle ihrer Labels eingefügt.

```text
Registered FirstName LastName (Email) and sent the summary to HR.
```

5. Benennen Sie den Workflow in `Register Candidate` um, wählen Sie das Icon **Save** und dann **Publish**.
6. Wählen Sie zurück im Agent **Register Candidate** unter **Tools**, fügen Sie die folgende Beschreibung ein und wählen Sie **Save**.

```text
Registers a new job candidate and emails the summary to HR. Use it when a member of HR staff wants to register a candidate, after you have the first name, last name, e-mail address and current role.
```

7. Öffnen Sie **Instructions**, fügen Sie den folgenden Absatz nach dem upgegradeten Text ein und wählen Sie das Icon **Save**.

```text
Every user is a candidate, an employee or a member of HR staff. If you don't know which, ask once before you answer an HR question. Candidates get information about applying and open jobs from the Microsoft Careers site; employees get answers about policies and procedures from HR Documents; HR staff can also register a new candidate with Register Candidate. Before you run Register Candidate, show the four values back to the user and run it only after they confirm.
```

Erwartet: Das Workflow Canvas zeigt den Trigger mit vier Inputs, **Send an email (V2)** und **Respond to the agent** mit `Confirmation`, und sein Status zeigt **Published**. **Tools** listet **Register Candidate** mit seiner Beschreibung, und die Instructions nennen die drei Rollen, beide Knowledge Sources, das Tool und die Bestätigungsregel.

## Schritt 4: Einen Start Hook hinzufügen, der den angemeldeten User begrüßt

Ein Topic Conversation Start lief am Anfang jeder Standard-Unterhaltung. Ein Hook **Start (pre-loop)** übernimmt diese Aufgabe: Sein Workflow läuft jedes Mal, wenn eine Session beginnt, und gibt `additionalContext` zurück, Hintergrundtext, den der Agent vor der ersten Nachricht liest; so hängen die Begrüßung und die Frage nach der Rolle nicht mehr davon ab, dass der Agent sich entscheidet zu fragen.

1. Wählen Sie in der oberen Menüleiste **…** > **Hooks** und dann **Create**.
2. Setzen Sie **Event type** auf **Start (pre-loop)** und **Name** auf `Greet the signed-in user` und wählen Sie dann **New workflow**.
3. Behalten Sie im Starter Workflow die Feldnamen bei. Wählen Sie **Respond to the agent** und setzen Sie `additionalContext` auf den folgenden Text; fügen Sie dabei `userDisplayName` aus **metadata** über den Variable Picker an der Stelle seines Labels ein.

```text
The user's name is userDisplayName. Greet them by first name in your first reply, and ask whether they are a candidate, an employee or a member of HR staff unless they have already said so.
```

4. Wählen Sie das Icon **Save** und dann **Publish**; prüfen Sie zurück in **Add hook**, dass der neue Workflow ausgewählt ist, und wählen Sie dann **Done**.
5. Wählen Sie das Icon **Save** am Agent und dann **Publish** und **Publish agent**.

Erwartet: Der Dialog **Hooks** listet **Greet the signed-in user** mit dem Event Type **Start (pre-loop)**, und der Agent ist mit dem Hook, dem Tool und beiden Knowledge Sources veröffentlicht.

> **Warnung:** Wenn Sie die Starter-Felder umbenennen oder entfernen, verschwindet der Workflow aus der Liste **Workflow** des Hooks. Lassen Sie `event`, `timestamp`, `metadata` und `additionalContext`, wie sie sind.

## Schritt 5: Die vier Journeys ausführen und die Map abschließen

Wiederholen Sie die Baseline aus Schritt 1 auf dem upgegradeten Agent. Jede Journey sollte über ihr neues Zuhause dasselbe Ergebnis erreichen, und die Map hält fest, ob das gelungen ist.

1. Öffnen Sie **Preview** mit eingeschaltetem **Debug mode** und starten Sie für jede Nachricht aus Schritt 1 eine neue Unterhaltung.
2. Antworten Sie bei der vierten Nachricht als Mitglied des HR-Teams, geben Sie die folgenden Daten zur Kandidatur an und bestätigen Sie, wenn der Agent die Werte zur Kontrolle anzeigt.

```text
Ana Silva, ana.silva@contoso.com, current role Project Manager
```

3. Öffnen Sie Ihren Outlook-Posteingang.
4. Markieren Sie in `hr-agent-migration.txt` jede Zeile als done, stays Standard oder open, und notieren Sie das Ergebnis jeder Journey auf dem Standard Agent und dem upgegradeten Agent nebeneinander.

Erwartet: Die erste Antwort in jeder Unterhaltung begrüßt Sie mit Vornamen; hier wirkt der Kontext des Hooks. Die Kandidatenfrage bekommt Hinweise zur Bewerbung, die Fragen zu Jobs und Onboarding werden aus **Microsoft Careers site** und **HR Documents** beantwortet, und die vierte Journey zeigt die vier Werte zur Kontrolle an, bevor die Schrittliste **Used tool** **Register Candidate** mit `Confirmation` im Output zeigt. In Ihrem Posteingang liegt eine E-Mail mit dem Betreff `New candidate` und den Daten von Ana Silva, und jede Zeile der Map außer dem Adaptive Card Topic zeigt done.

## Troubleshooting

| Symptom | Wahrscheinliche Ursache | Lösung |
|---------|--------------|-----|
| Es erscheint keine Karte **HR Agent (Upgraded)** | Der Request passte zu keinem Agent-Namen | Senden Sie den Request erneut mit dem exakten Namen aus der Liste **Agents** |
| Fragen zu Jobs und Policies werden ohne Zitate beantwortet | Die Knowledge aus Schritt 5 fehlt oder wurde nicht gespeichert | Fügen Sie beide Quellen erneut hinzu und speichern Sie den Agent |
| Der neue Workflow erscheint nicht in der Liste **Workflow** des Hooks | Die Starter-Felder wurden umbenannt oder entfernt, oder der Workflow ist nicht veröffentlicht | Stellen Sie `additionalContext` und die Input-Felder wieder her und veröffentlichen Sie dann den Workflow |
| Die erste Antwort begrüßt Sie nicht mit Namen | Der Agent wurde nach dem Hinzufügen des Hooks nicht erneut veröffentlicht, oder der User ist nicht angemeldet | Veröffentlichen Sie den Agent erneut; `userDisplayName` ist bei anonymen Usern leer |
| Der Agent registriert, ohne nach einer Bestätigung zu fragen | Der Bestätigungssatz fehlt in den Instructions | Fügen Sie den Satz aus Schritt 8 hinzu und veröffentlichen Sie erneut |
| **Register Candidate** scheitert beim E-Mail-Schritt | Die Outlook Connection fehlt oder gehört zu einem anderen Account | Öffnen Sie den Workflow, korrigieren Sie die Connection bei **Send an email (V2)** und veröffentlichen Sie erneut |

## Prüfen

- `hr-agent-migration.txt` hat für jede Zeile ein Upgrade-Ergebnis und einen Endzustand.
- Der Dialog **Hooks** listet **Greet the signed-in user** auf **Start (pre-loop)**.
- Nach der vierten Journey ist eine E-Mail mit dem Betreff `New candidate` angekommen.
- Der Standard HR Agent ist unverändert und beantwortet weiterhin die vier Baseline-Nachrichten.

## Zusammenfassung

Sie haben den HR Agent Journey für Journey auf den GitHub Copilot Harness migriert. Sie können jetzt:

- Die Teile eines Standard Agents ihrem Zweck und ihrem Platz auf dem neuen Harness zuordnen.
- Eine Kopie upgraden und aus dem Upgrade Report eine Liste für den Neuaufbau machen.
- Ein Topic, das Daten erfasst, als Workflow Tool neu aufbauen und seine Bestätigung in die Instructions verlagern.
- Ein Topic Conversation Start durch einen Hook **Start (pre-loop)** ersetzen.
- Eine Migration belegen, indem Sie dieselben Journeys auf beiden Agents ausführen.

## Aufräumen

Löschen Sie **HR Agent (Upgraded)** aus der Liste **Agents**, wenn Sie ihn nicht mehr brauchen, löschen Sie den Workflow `Register Candidate` und den Workflow des Hooks auf der Seite **Workflows**, und löschen Sie die E-Mail `New candidate`; der Standard HR Agent bleibt, wie er war.
