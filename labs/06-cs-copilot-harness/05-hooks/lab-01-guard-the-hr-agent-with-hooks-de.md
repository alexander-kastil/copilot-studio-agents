# Den HR Agent mit Hooks absichern

Ein HR Agent, der die Mitarbeiterliste liest, soll jede Schichtleitung mit Namen begrüßen, neue Mitarbeitende an HR verweisen und jede Abfrage protokollieren, und nichts davon darf davon abhängen, dass sich der Agent an eine Instruction erinnert. In diesem Lab geben Sie einem Microsoft Copilot Harness Agent auf dem HR MCP Server der Klasse drei Hooks: einen Start Hook, der ihm den Namen des angemeldeten Users übergibt, einen Pre Tool Use Hook, der das Hinzufügen von Mitarbeitenden blockiert, und einen Post Tool Use Hook, der Ihnen zu jedem Tool-Aufruf eine E-Mail schickt. Am Ende haben Sie einen Agent, dessen Regeln in jeder Session und bei jedem Aufruf gelten, und Sie sehen jeden Hook in der Schrittliste von Preview laufen.

Was Sie hier üben: einen Workflow an ein Hook Event binden und in der Schrittliste nachweisen, dass er gelaufen ist.

Dauer: etwa 65 Minuten.

## Was Sie bauen

- Restaurant HR Assistant, einen Microsoft Copilot Harness Agent mit dem HR MCP Server unter **Tools**.
- Einen **Start (pre-loop)** Hook, dessen Workflow den Namen des angemeldeten Users als `additionalContext` zurückgibt.
- Einen **Pre tool use** Hook auf dem HR MCP Server, dessen Workflow `permissionDecision` `deny` nur für `add_employee` zurückgibt, mit einer Begründung, die der Agent weitergibt.
- Einen **Post tool use** Hook auf allen Tools, dessen Workflow Ihnen zu jedem Tool-Aufruf eine E-Mail sendet.

## Was dieses Lab abdeckt

| Schritt | Fokus |
|------|-------|
| 1 | Den Agent erstellen und den HR MCP Server hinzufügen |
| 2 | Die Baseline lesen: keine Begrüßung mit Namen, kein Protokoll |
| 3 | Einen Start Hook hinzufügen, der den Namen des angemeldeten Users übergibt |
| 4 | Den Start Hook in einem neuen Chat testen |
| 5 | Einen Pre Tool Use Hook hinzufügen, der das Hinzufügen von Mitarbeitenden blockiert |
| 6 | Die Blockade testen |
| 7 | Einen Post Tool Use Hook hinzufügen, der jeden Tool-Aufruf protokolliert |
| 8 | Das Protokoll testen und den Agent veröffentlichen |

## Voraussetzungen

- Eine Copilot Studio Umgebung, in der Sie Agents erstellen dürfen (Maker-Rolle) und in der das Menü **New agent** auf der Seite **Agents** den Eintrag **Agent** mit dem Badge **GitHub Copilot** anbietet. Die oberen Tabs des Agents lauten Build, Preview, Evaluate und Monitor, und das Menü **…** in der oberen Menüleiste enthält **Hooks**.
- Ihre eigene Umgebung: Wählen Sie unten in der linken Navigation den Namen der Umgebung (**Switch environment**) und prüfen Sie, dass **Current environment** die nach Ihrem Konto benannte Umgebung zeigt, zum Beispiel `copilot-studio-01` (Sandbox) für `copilot-studio-01@mst.fastlane.net`. Arbeiten Sie das ganze Lab darin durch, nie in der gemeinsamen Default-Umgebung.
- Der HR MCP Server der Klasse unter `https://lab-human-resource-mcp.azurewebsites.net/mcp`, für die Klasse ohne Anmeldung gehostet. Alle Teilnehmenden teilen sich seine Mitarbeiterliste.
- Ein Outlook-Postfach für Ihr Klassenkonto, für das Protokoll, das der Post Tool Use Hook sendet.
- Keine Dateien zum Herunterladen. Sie fügen jede Eingabe aus dieser Anleitung ein.

## Schritt 1: Den Agent erstellen und den HR MCP Server hinzufügen

Hooks beobachten den Lauf eines Agents, also brauchen Sie einen Agent mit einem Tool, das sie beobachten können. Der HR MCP Server gibt ihm Abfragen zum Team und ein Tool zum Hinzufügen von Mitarbeitenden, das Schritt 5 absichert.

1. Wählen Sie im Seitenbereich **Agents**, öffnen Sie den Pfeil neben **New agent** und wählen Sie unter **Optimize your business processes** den Eintrag **Agent** mit dem Badge **GitHub Copilot**.
2. Wählen Sie das Stiftsymbol neben dem Namen des Agents und geben Sie `Restaurant HR Assistant` ein.
3. Fügen Sie den folgenden Text in den Abschnitt **Instructions** ein.

```text
Role: You are the Restaurant HR Assistant, an internal helper for the restaurant's shift managers.

You do:
- When a question asks about our team (who works here, their roles, skills, spoken languages or email addresses), use the HR MCP Server to look it up before you reply.
- When a manager asks to add a new employee, use the HR MCP Server to add them.

Style: concise and professional.
```

4. Wählen Sie im Komponentenbereich das **x** bei **Work IQ** unter **Tools** und bestätigen Sie **Remove** in **Remove tool?**.
5. Wählen Sie **+** neben **Tools**. Wählen Sie in **Add a tool** zuerst **+ Add**, dann **Model Context Protocol (MCP)**. Füllen Sie in **Add MCP server** die folgenden Felder aus, setzen Sie **Authentication** auf **None** und wählen Sie **Add**.
   - Server name: `HR MCP Server`
   - Server description: `Looks up and adds the restaurant's employees: names, roles, skills, spoken languages and email addresses.`
   - Server URL: `https://lab-human-resource-mcp.azurewebsites.net/mcp`
6. Öffnen Sie unter **Select a connection** die Liste **Not connected**, wählen Sie **Create new connection** und dann **Create**. Sobald die Liste die Verbindung zeigt, wählen Sie **Add** und dann **Save** (das Diskettensymbol oben rechts). Das erste Speichern zeigt etwa eine Minute lang **Saving...**; warten Sie, bis es endet, bevor Sie weitermachen.
7. Wählen Sie unter **Tools** den Eintrag **HR MCP Server**, um **Edit tool** zu öffnen. Unter **Tool permissions** ist **Allow all** eingeschaltet und sperrt jeden Schalter: Schalten Sie **Allow all** aus, wodurch jedes Tool ausgeschaltet wird, schalten Sie dann **Add employee**, **Search employees** und **List employees** ein und wählen Sie **Done**. Wählen Sie danach **Save**.

Erwartet: **HR MCP Server** erscheint unter **Tools**, seine **Tool permissions** erlauben nur die Tools zum Auflisten, Suchen und Hinzufügen, und die Instructions sagen, dass der Agent auf Wunsch Mitarbeitende hinzufügt. Schritt 5 nimmt dem Agent diese Entscheidung ab, ohne die Instructions anzufassen.

## Schritt 2: Die Baseline lesen

Bevor es einen Hook gibt, sehen Sie, was der Agent von sich aus tut. Er weiß nicht, wer Sie sind, und nichts protokolliert seine Tool-Aufrufe.

1. Öffnen Sie den Tab **Preview** und senden Sie:

```text
Hi, who on our team speaks Japanese?
```

2. Klappen Sie die Schrittliste unter der Antwort auf.

Erwartet: Die Antwort nennt Kenji Tanaka, Sushi Chef, aus einer Zeile **Used tool** für den HR MCP Server, und sie begrüßt Sie nicht mit Ihrem Namen. In Ihrem Postfach kommt keine E-Mail an.

## Schritt 3: Einen Start Hook hinzufügen, der den Namen des angemeldeten Users übergibt

Ein **Start (pre-loop)** Hook läuft jedes Mal, wenn eine Session beginnt, vor der ersten Nachricht. Sein Workflow gibt `additionalContext` zurück, Hintergrundtext, den der Agent für die ganze Session liest, und die Metadaten, die jeder Hook erhält, enthalten den Anzeigenamen des angemeldeten Users.

1. Wählen Sie in der oberen Menüleiste **…** > **Hooks** (mit **Preview** markiert) und dann **Create**.
2. **Event type** zeigt bereits **Start (pre-loop)**. Ersetzen Sie den vorausgefüllten **Name** durch `Greet the signed-in user` und wählen Sie dann **New workflow**. Der Workflow Designer öffnet sich und verlässt den Dialog, der Hook selbst ist also noch nicht gespeichert.
3. Behalten Sie im Starter-Workflow jeden Feldnamen. Wählen Sie **Respond to the agent** und setzen Sie `additionalContext` auf den folgenden Text, wobei Sie `userDisplayName` an seiner Stelle aus dem Variablen-Picker einfügen.

```text
The user's name is userDisplayName. Greet them by first name in your first reply. Every staff fact you give comes from the HR MCP Server.
```

4. Wählen Sie das Symbol **Save** und dann **Publish**.
5. Gehen Sie zurück zum Agent. **Add hook** öffnet sich erneut mit ausgefülltem **Name** und dem neuen Workflow unter **Workflow**; wählen Sie **Done**.
6. Wählen Sie das Symbol **Save** auf dem Agent.

Erwartet: Der Dialog **Hooks** listet **Greet the signed-in user** mit dem Event Type **Start (pre-loop)**, und der Workflow zeigt **Published**.

> **Warnung:** Wenn Sie ein Starter-Feld umbenennen oder entfernen, verschwindet der Workflow aus der Liste **Workflow** des Hooks. Lassen Sie `event`, `timestamp`, `metadata` und `additionalContext` unverändert.

## Schritt 4: Den Start Hook in einem neuen Chat testen

Ein Start Hook läuft nur, wenn eine Session beginnt, deshalb sieht der offene Chat aus Schritt 2 ihn nie.

1. Wählen Sie im Tab **Preview** die Option **New chat** und senden Sie:

```text
Hi
```

2. Klappen Sie die Schrittliste unter der Antwort auf.

Erwartet: Die Schrittliste zeigt **Executed hook: SessionStart** über der Antwort, und die Antwort begrüßt Sie mit Ihrem Vornamen. Nichts in den Instructions verlangt eine Begrüßung mit Namen: Der Text kam aus dem Workflow des Hooks.

## Schritt 5: Einen Pre Tool Use Hook hinzufügen, der das Hinzufügen von Mitarbeitenden blockiert

Neue Mitarbeitende registriert HR im Onboarding-System, und diese Regel muss gelten, obwohl die Instructions den Agent weiterhin anweisen, Mitarbeitende hinzuzufügen. Ein **Pre tool use** Hook läuft, bevor der Agent ein Tool aufruft, und ist der einzige Hook, der den Aufruf blockieren kann: Sein Workflow gibt `permissionDecision` mit dem Wert `deny` und eine `permissionDecisionReason` zurück, die der Agent liest.

1. Wählen Sie **…** > **Hooks** > **Create**. Setzen Sie **Event type** auf **Pre tool use** und **Name** auf `Send new hires to HR`.
2. Wählen Sie unter **Tools** den Eintrag **HR MCP Server**. Die Liste zeigt den Server als einen Eintrag, nie seine einzelnen Tools, deshalb läuft der Hook vor jedem Aufruf an den Server, und sein Workflow entscheidet, welcher Aufruf blockiert wird.
3. Wählen Sie **New workflow**. Behalten Sie im Starter-Workflow jeden Feldnamen, wählen Sie **Respond to the agent** und setzen Sie die beiden folgenden Outputs; lassen Sie die anderen leer.
   - `permissionDecision`: den folgenden Ausdruck. Wählen Sie das Blitzsymbol im Feld, öffnen Sie den Tab `</>`, fügen Sie ihn ein und wählen Sie **Insert**.
   - `permissionDecisionReason`: den Text nach dem Ausdruck

```text
if(equals(triggerBody()?['toolName'], 'add_employee'), 'deny', '')
```

```text
New employees are registered by HR in the onboarding system. Do not add them here. Ask the manager to send the new hire's name, role and email address to hr@restaurant.com.
```

4. Wählen Sie das Symbol **Save** und dann **Publish**.
5. Gehen Sie zurück zum Agent. **Add hook** öffnet sich erneut mit Event, Name, **HR MCP Server** unter **Tools** und dem neuen Workflow; wählen Sie **Done**.
6. Wählen Sie das Symbol **Save** auf dem Agent.

Erwartet: Der Dialog **Hooks** listet zwei Hooks, **Greet the signed-in user** mit **Start (pre-loop)** und **Send new hires to HR** mit **Pre tool use**.

> **Warnung:** Behalten Sie den Starter-Knoten **Respond to the agent** und verzweigen Sie im Ausdruck. Ein Output, den Sie selbst hinzufügen, wird unabhängig von seiner Beschriftung als `text` oder `text_1` gespeichert, sodass der Agent ihn ignoriert. Ein **If/Else** mit einem leeren Zweig endet ohne Antwort ("The hook flow returned an error"), und ein Workflow mit zwei Knoten **Respond to the agent** lässt sich nicht veröffentlichen.

> **Hinweis:** Ein Hook schlägt offen fehl: Wenn sein Workflow scheitert oder nichts zurückgibt, was der Agent lesen kann, läuft der Aufruf weiter. In einem echten Agent bleibt die Berechtigung der Verbindung des Tools die harte Grenze, und der Hook legt die Geschäftsregel darüber.

## Schritt 6: Die Blockade testen

Die folgende Anfrage passt zur Instruction "use the HR MCP Server to add them", ohne den Hook würde der Agent die Person also zur gemeinsamen Mitarbeiterliste hinzufügen.

1. Wählen Sie im Tab **Preview** die Option **New chat** und senden Sie:

```text
Please add a new waiter: LAB Test Hire, email lab.test.hire@restaurant.com, skills table service and wine pairing, speaks English and German.
```

2. Klappen Sie die Schrittliste unter der Antwort auf.
3. Wählen Sie **New chat** und senden Sie `Is LAB Test Hire on our staff list?`.

Erwartet: Die Schrittliste der ersten Antwort zeigt **Executed hook: PreTool (add_employee)** ohne eine folgende Zeile **Used tool** für `add_employee`, und die Antwort bittet Sie, die Angaben an `hr@restaurant.com` zu senden. Die zweite Antwort zeigt **Executed hook: PreTool (search_employees)** gefolgt von einer Zeile **Used tool** und findet keinen LAB Test Hire.

## Schritt 7: Einen Post Tool Use Hook hinzufügen, der jeden Tool-Aufruf protokolliert

Ein Audit-Protokoll ist die Aufgabe, die ein **Post tool use** Hook gut erledigt: Er läuft nach jedem erfolgreichen Tool-Aufruf und erhält `toolName`, `parameters` und `result`. Bleibt **Tools** leer, beobachtet er alle Tools, und kein Aufruf bleibt unprotokolliert.

1. Wählen Sie **…** > **Hooks** > **Create**. Setzen Sie **Event type** auf **Post tool use** und **Name** auf `Record every tool call`, und lassen Sie **Tools** leer.
2. Wählen Sie **New workflow**. Behalten Sie im Starter-Workflow jeden Feldnamen.
3. Wählen Sie **+** zwischen **When an agent calls the flow** und **Respond to the agent**, suchen Sie nach **Send an email** und wählen Sie den Eintrag von Office 365 Outlook. Erstellen Sie die Verbindung, falls der Designer danach fragt.
4. Füllen Sie die folgende Action aus. Fügen Sie jeden als Code formatierten Wert über das Blitzsymbol im Feld ein, indem Sie nach seinem Namen suchen: `toolName` und `parameters` aus dem Trigger sowie `userDisplayName`, das der Picker als `metadata / userDisplayName` führt.
   - **To**: die E-Mail-Adresse Ihres Klassenkontos
   - **Subject**: `HR agent tool call:` gefolgt von `toolName`
   - **Body**: `Tool:` `toolName`, `User:` `userDisplayName`, `Parameters:` `parameters`
5. Lassen Sie jeden Output von **Respond to the agent** leer, damit der Agent das Ergebnis des Tools unverändert behält.
6. Wählen Sie das Symbol **Save** und dann **Publish**.
7. Gehen Sie zurück zum Agent. **Add hook** öffnet sich erneut mit Event, Name und dem neuen Workflow, und **Tools** ist leer; wählen Sie **Done**.
8. Wählen Sie das Symbol **Save** auf dem Agent.

Erwartet: Der Dialog **Hooks** listet drei Hooks, der dritte ist **Record every tool call** mit **Post tool use**, und sein Workflow zeigt **Published** mit der Action **Send an email** zwischen den beiden Starter-Knoten.

## Schritt 8: Das Protokoll testen und den Agent veröffentlichen

Die letzte Prüfung sendet eine Frage zum Team, die ein Such-Tool aufruft und ein Protokoll in Ihrem Postfach hinterlassen sollte.

1. Wählen Sie im Tab **Preview** die Option **New chat** und senden Sie:

```text
Which of our team members are chefs?
```

2. Klappen Sie die Schrittliste auf und öffnen Sie dann Outlook.
3. Wählen Sie oben rechts **Publish** und dann **Publish agent**, damit die Hooks für alle laufen, die den Agent nutzen.

Erwartet: Die Schrittliste zeigt **Executed hook: SessionStart**, dann für jeden Tool-Aufruf eine Zeile **Used tool** gefolgt von **Executed hook: PostTool**, zum Beispiel **Executed hook: PostTool (search_employees)**. Innerhalb einer Minute liegt in Outlook pro Tool-Aufruf eine E-Mail mit dem Betreff `HR agent tool call:` und dem Namen des Tools, und der Text nennt Sie und die Parameter; eine Frage zum Team, die zwei Tools aufruft, hinterlässt zwei E-Mails. Nach **Publish agent** zeigt der Agent **Published**.

## Troubleshooting

| Symptom | Wahrscheinliche Ursache | Lösung |
|---------|--------------|-----|
| Die Liste **Workflow** in **Add hook** ist leer | Der Workflow ist nicht veröffentlicht, oder ein Starter-Feld wurde umbenannt oder entfernt | Öffnen Sie den Workflow, stellen Sie die Namen der Starter-Felder wieder her und wählen Sie **Save** und **Publish** |
| **Hooks** zeigt nach **New workflow** keinen neuen Hook | **Add hook** hat sich nicht wieder geöffnet oder wurde vor **Done** geschlossen | Öffnen Sie erneut **…** > **Hooks** > **Create**, setzen Sie Event und Name, wählen Sie den veröffentlichten Workflow und dann **Done** |
| **Add MCP server** meldet "Choose a different server name. This name is already in use." | Ein früheres Lab hat `HR MCP Server` in dieser Umgebung registriert | Geben Sie einen anderen Servernamen ein, zum Beispiel `HR MCP Server 2`, und wiederholen Sie Punkt 5 von Schritt 1 |
| Keine Zeile **Executed hook: SessionStart** | Der Test lief im Chat, der schon vor dem Hook offen war, oder der Agent wurde nicht gespeichert | Speichern Sie den Agent, wählen Sie **New chat** und senden Sie die Nachricht erneut |
| **Tools** erscheint nicht in **Add hook** | Das Event ist **Start (pre-loop)**, oder der Agent hat noch keine Tools | Wählen Sie ein Tool Event, oder schließen Sie zuerst Schritt 1 ab |
| Der Aufruf zum Hinzufügen lief, und LAB Test Hire steht in der Mitarbeiterliste | Der Pre Tool Use Hook ist nicht gespeichert, oder sein Workflow gab nichts Lesbares zurück, zum Beispiel einen selbst hinzugefügten Output; ein Hook schlägt offen fehl | Prüfen Sie, dass `permissionDecision` im Starter-Knoten **Respond to the agent** steht, speichern Sie den Agent und sagen Sie Ihrer Trainerin oder Ihrem Trainer Bescheid, damit der Testeintrag entfernt wird |
| Auch Suchen werden blockiert | `permissionDecision` enthält den festen Wert `deny` und blockiert jeden Aufruf an den Server | Ersetzen Sie ihn durch den Ausdruck aus Schritt 5 und wählen Sie im Workflow **Save** und **Publish** |
| Die Schrittliste zeigt "The hook flow returned an error" | Der Workflow hat ein **If/Else**, dessen leerer Zweig ohne Antwort endet | Entfernen Sie das **If/Else** und setzen Sie die Outputs mit dem Ausdruck aus Schritt 5 |
| Es kommt keine E-Mail an | Die Outlook-Verbindung wurde nicht erstellt, oder **To** ist leer | Öffnen Sie den Workflow, korrigieren Sie die Action **Send an email** und wählen Sie **Save** und **Publish** |
| Preview antwortet "You need credits to continue ... Error code: EnforcementUsageCredits" | Die Umgebung hat keine Copilot Credits mehr | Bitten Sie den Admin, der Umgebung Copilot Credits zuzuweisen, und senden Sie die Nachricht erneut |

## Prüfen

Sie haben das Ziel des Labs erreicht, wenn alles Folgende zutrifft:

1. Der Dialog **Hooks** listet **Greet the signed-in user** (**Start (pre-loop)**), **Send new hires to HR** (**Pre tool use**, **HR MCP Server**) und **Record every tool call** (**Post tool use**, alle Tools).
2. Ein neuer Chat zeigt **Executed hook: SessionStart** und begrüßt Sie mit Ihrem Vornamen.
3. Die Anfrage zum Hinzufügen wird mit der HR-Begründung blockiert, und LAB Test Hire steht nicht in der Mitarbeiterliste.
4. Eine Frage zum Team hinterlässt eine E-Mail mit dem Betreff `HR agent tool call:` in Ihrem Postfach.
5. Der Agent ist veröffentlicht.

## Zusammenfassung

Sie haben einem HR Agent drei Regeln gegeben, die in jeder Session und bei jedem Aufruf gelten. Ein Start Hook übergab den Namen des angemeldeten Users als `additionalContext`, ein Pre Tool Use Hook blockierte das Hinzufügen von Mitarbeitenden, obwohl die Instructions es weiterhin verlangten, und ein Post Tool Use Hook schickte Ihnen zu jedem Tool-Aufruf ein Protokoll. Sie können jetzt:

- Einen Hook über **…** > **Hooks** hinzufügen und an einen veröffentlichten Workflow binden, der aus dem Starter des Events entsteht.
- Einen Tool Hook auf ein Tool oder einen MCP Server eingrenzen, oder **Tools** leer lassen, um alle zu beobachten.
- Ein Tool eines Servers mit einem Ausdruck für `permissionDecision` auf `toolName` blockieren, mit einer Begründung, die der Agent weitergibt.
- In der Schrittliste von Preview nachweisen, dass ein Hook gelaufen ist.

Kehren Sie zu [Hooks: Steps That Run Every Time](../../../demos/06-cs-copilot-harness/05-hooks/readme.md) zurück, um die sechs Events und die darauf aufbauenden Muster zu vergleichen.

## Aufräumen

Löschen Sie den Restaurant HR Assistant, wenn Sie ihn nicht mehr brauchen: Öffnen Sie den Agent und wählen Sie **Delete**. Die drei Hook-Workflows bleiben in Ihrer Umgebung; löschen Sie sie unter **Workflows**, wenn kein anderer Agent sie nutzt, und löschen Sie die Test-E-Mails aus Ihrem Postfach. Der HR MCP Server und seine Mitarbeiterliste bleiben unverändert.
