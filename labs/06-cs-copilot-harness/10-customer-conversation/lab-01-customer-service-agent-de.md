# Einen Customer Service Agent mit Sub-Agents und Topic Skills bauen

Ein einzelner Kunden-Agent, der alles beantwortet, bringt Fragen zur Speisekarte, Catering-Anfragen und Beschwerden durcheinander, und er kann einen Kunden nicht an einen Menschen übergeben. In diesem optionalen Lab bauen Sie einen Service Desk für Happy Longnose auf dem Customer Conversation Harness: einen Primary Agent, der Kunden begrüßt und weiterleitet, einen Menu Specialist mit einem Generative Skill auf dem Food Catalog der Klasse und einen Catering Specialist mit einem Topic Skill, der eine Catering-Anfrage aufnimmt, und einem Handoff per E-Mail an das Catering-Team. Am Ende haben Sie einen Agent, den Sie auf seiner Demo-Website öffnen und an Testerinnen und Tester weitergeben können.

Was Sie hier üben: einen Kunden-Agent in Spezialisten aufteilen und jedem die Art von Skill geben, die seine Aufgabe braucht: einen Generative Skill für Beratung und einen Topic Skill für Daten, die jedes Mal gleich erfasst werden müssen.

Dauer: etwa 80 Minuten.

## Was Sie bauen

- Happy Longnose Service Desk, einen Customer Conversation Agent, dessen Primary Agent Kunden begrüßt und weiterleitet.
- Einen Sub-Agent Menu Specialist mit dem Food Catalog MCP Server der Klasse und dem Generative Skill `dish-recommendation`.
- Einen Sub-Agent Catering Specialist mit dem Topic Skill `catering request` und einem Handoff per E-Mail für Kunden, die nach einem Menschen fragen.
- Eine Demo-Website mit einer Intro-Nachricht und Starter Prompts für Testerinnen und Tester.

## Was dieses Lab abdeckt

| Schritt | Schwerpunkt |
|---------|-------------|
| 1 | Den Primary Agent erstellen |
| 2 | Kunden mit dem Event Conversation start begrüßen |
| 3 | Den Menu Specialist mit dem Food Catalog hinzufügen |
| 4 | Gerichte mit einem Generative Skill empfehlen |
| 5 | Den Catering Specialist und seinen Topic Skill hinzufügen |
| 6 | Einen Kunden per E-Mail an einen Menschen übergeben |
| 7 | Kunden an die Spezialisten weiterleiten |
| 8 | Das Routing in Preview testen |
| 9 | Den Agent gezielt an seine Grenzen bringen |
| 10 | Auf der Demo-Website deployen |

## Voraussetzungen

- Ihr eigenes Environment, benannt nach Ihrem Klassen-Account (zum Beispiel `copilot-studio-01`), ausgewählt unter **Switch environment** unten in der linken Navigation.
- In diesem Environment bietet die Seite **Home** unter **Explore what else is possible with agents** die Karte **Customer conversation agent**, und ihm sind Copilot Credits zugewiesen, weil das Harness in Preview Credits verbraucht. Das Harness ist in Preview; fehlt die Karte, folgen Sie stattdessen der [Demo](../../../demos/06-cs-copilot-harness/10-customer-conversation/demo-10-customer-service-with-topic-skills.md).
- Der Food Catalog MCP Server der Klasse unter `https://lab-food-catalog-api.azurewebsites.net/api/mcp`, für die Klasse gehostet und ohne Anmeldung erreichbar. Alle Teilnehmenden teilen ihn, deshalb liest dieses Lab nur daraus.
- Ihr eigenes Postfach, das den Handoff in Schritt 9 empfängt.
- Keine Dateien zum Herunterladen. Sie fügen jede Eingabe aus dieser Anleitung ein.

## Schritt 1: Den Primary Agent erstellen

Der Primary Agent ist der Empfang: Er begrüßt Kunden, findet heraus, was sie brauchen, und gibt sie weiter. Er bekommt jetzt seine Aufgabenbeschreibung und in Schritt 7 seine Routing-Regeln, sobald die Spezialisten existieren.

1. Wählen Sie auf der Seite **Home** den Eintrag **Explore what else is possible with agents** und dann **Customer conversation agent**. Wählen Sie auf **Create your Customer Assist Agent** unter **Start from scratch** den Eintrag **Create agent**.
2. Geben Sie in **Name your agent** unter **Agent name** `Happy Longnose Service Desk` ein und erstellen Sie den Agent; die Einrichtung dauert etwa zwei Minuten und endet mit "Agent setup complete." Wählen Sie im Editor Panel **Edit description** und geben Sie den Text unten ein.

```text
The service desk of Happy Longnose, an online food shop for Austrian dishes. Greets customers and routes menu and catering questions to the right specialist.
```

3. Fügen Sie den Text unten in den Tab **General** von **Instructions** ein und wählen Sie **Save** im Instructions Panel.

```text
Role: You are the service desk of Happy Longnose, an online food shop for Austrian dishes. You greet customers, find out what they need and pass them to the right specialist.

You do not:
- Help with anything outside the food shop; say politely what you can help with instead.
- Take orders or payments; customers order in the shop.

Style: friendly and short.
```

Erwartet: Die Tabs des Agents heißen **Build**, **Preview**, **Evaluate**, **Deploy** und **Monitor**, der Header zeigt **Saved**, und der Tab **Build** zeigt die Karte des Primary Agents mit dem Namen Happy Longnose Service Desk.

## Schritt 2: Kunden mit dem Event Conversation start begrüßen

Events sind die festen Momente jeder Unterhaltung, und jedes davon ist darunter ein Topic. Die Begrüßung ist das Erste, was jeder Kunde hört oder liest, deshalb nennt sie, wobei der Service Desk hilft.

1. Öffnen Sie auf dem Tab **Build** den Abschnitt **Conversation events** und dann **Conversation start**.
2. Ersetzen Sie im Topic Canvas den Text der Begrüßungsnachricht durch den Text unten. Die Nachricht hat eine Version **Chat** und eine Version **Voice**, und das Panel öffnet sich auf **Chat**; ändern Sie auch **Voice**, wenn die Begrüßung am Telefon gleich lauten soll. Das Topic speichert sich selbst.

```text
Welcome to Happy Longnose! I can help you choose dishes for any occasion or plan catering for your event. What can I do for you?
```

Erwartet: **Conversation start** zeigt die neue Begrüßung, und das Event ist in **Conversation events** weiterhin eingeschaltet.

## Schritt 3: Den Menu Specialist mit dem Food Catalog hinzufügen

Ein Sub-Agent übernimmt eine Art von Frage und bringt die Tools dafür mit. Der Menu Specialist antwortet aus dem Live-Food-Catalog, und seine Description liest der Primary Agent, wenn er entscheidet, wohin eine Frage geht.

1. Wählen Sie auf dem Tab **Build** den Eintrag **Add a sub-agent**; sofort erscheint eine Karte "New Sub-Agent". Wählen Sie **Edit agent name**, geben Sie `Menu Specialist` ein und wählen Sie **Save name**, fügen Sie dann die Description mit **Edit description** und die Instructions mit **Edit instructions** ein.

```text
Answers questions about Happy Longnose dishes: what is on the menu, current prices, units in stock and recommendations for an occasion.
```

```text
Role: You are the menu specialist of Happy Longnose.

You do:
- Answer questions about dishes, prices and stock from the food catalog only.
- Never name a dish, price or stock figure the food catalog did not return.

Style: friendly and short.
```

2. Wählen Sie auf der Karte des Menu Specialist **+** neben **Tools**, den Chip **Model Context Protocol** und dann **Add** > **MCP** und tragen Sie die Werte unten ein, **Authentication** auf **None** (**Add** bleibt deaktiviert, bis die drei Textfelder ausgefüllt sind). Wählen Sie **Add**, dann **Connection** > **Select a connection** > **Create new connection**, **Create** und **Add and configure**.
   - Server name: `Happy Longnose Food Catalog`
   - Server description: `Looks up Happy Longnose's live food catalog: dishes, current prices and units in stock. Only read from it.`
   - Server URL: `https://lab-food-catalog-api.azurewebsites.net/api/mcp`
3. Wählen Sie den Server unter **Tools**, um **Edit MCP server** zu öffnen, schalten Sie **Allow all** aus, schalten Sie `add_food_item`, `update_food_item`, `update_food_item_stock` und `delete_food_item` aus und wählen Sie **Save**.

Erwartet: Der Tab **Build** zeigt neben dem Primary Agent eine Karte Menu Specialist, und ihre **Tools** listen **Happy Longnose Food Catalog**, nur mit `get_all_food_items`, `get_food_items_by_name` und `get_food_item_by_id` eingeschaltet.

## Schritt 4: Gerichte mit einem Generative Skill empfehlen

Eine Empfehlung braucht Urteilsvermögen über den Anlass und den heutigen Lagerbestand, deshalb ist sie ein Generative Skill: ein kurzes Playbook, über das das Modell nachdenkt. Der Skill liegt beim Menu Specialist, weil dort der Catalog ist.

1. Wählen Sie auf der Karte des Menu Specialist unter **Skills** den Eintrag **Add skill** und öffnen Sie den Tab **Generative**.
2. Setzen Sie **Skill name** auf `dish-recommendation` (Kebab-Case, höchstens 64 Zeichen) und **Description** auf den Text unten.

```text
Recommends Happy Longnose dishes for an occasion, a number of guests or a taste, with current prices and stock from the food catalog.
```

3. Fügen Sie die Instructions unten ein. Der Picker `/` in den Instructions eines Skills bietet **Suggested**, **Events** und **Variables**, keine Tools, deshalb nennt Zeile 2 den Food Catalog in Worten.

```text
1. If the customer has not said what the dishes are for, ask once for the occasion and the number of guests.
2. Look up matching dishes with the food catalog.
3. Suggest two or three dishes with their price in EUR and the units in stock.
4. Only name dishes, prices and stock the food catalog returned.
```

4. Wählen Sie **Add skill**.

Erwartet: Die **Skills** des Menu Specialist listen den neuen Skill als **Dish recommendation**.

## Schritt 5: Den Catering Specialist und seinen Topic Skill hinzufügen

Eine Catering-Anfrage braucht jedes Mal dieselben drei Angaben in derselben Reihenfolge, bevor jemand sie planen kann. Das ist ein Topic Skill: ein Ablauf, den Sie im Topic Canvas erstellen, den das Modell startet und dem es dann folgt. Seine Description beansprucht die drei Fragen in höchstens 200 Zeichen für sich, damit das Modell sie nicht vorher selbst stellt.

1. Wählen Sie erneut **Add a sub-agent**, benennen Sie ihn mit **Edit agent name** und **Save name** in `Catering Specialist` um und fügen Sie die Description und die Instructions unten mit **Edit description** und **Edit instructions** ein.

```text
Takes catering requests for events, parties and offices: the event date, the number of guests and the customer's email address.
```

```text
Role: You are the catering specialist of Happy Longnose. You take catering requests for events, parties and offices.

You do:
- Start the catering request skill for every catering request.

Style: friendly and short.
```

2. Wählen Sie auf der Karte des Catering Specialist unter **Skills** den Eintrag **Add skill**, öffnen Sie den Tab **Topic** und lassen Sie **Create topic** ausgewählt.
3. Setzen Sie **Skill name** auf `catering request` und **Description** auf den Text unten und wählen Sie dann **Add skill**. Der Topic Canvas öffnet sich.

```text
Runs a fixed flow that collects the event date, the number of guests and the customer's email address. Call it for every catering request; never ask for these details yourself.
```

4. Fügen Sie mit **+** > **Ask a question** drei Fragen hinzu, jede mit ihrem Typ unter **Identify** (Suche **Choose information to identify**) und einer umbenannten Variable (öffnen Sie die Eigenschaften der Variable, tippen Sie den Namen in **Name** und wählen Sie die Stift-Schaltfläche **Rename**):

| Question text | Identify | Variable |
|---|---|---|
| `On which date is your event?` | **Date** | `EventDate` |
| `How many guests do you expect?` | **Number** | `Guests` |
| `Which email address should we use for your offer?` | **Email** | `CustomerEmail` |

5. Wählen Sie **+** > **Add a condition**: `Guests` `>` `40`. Wählen Sie unter der Bedingung **+** > **Send a message** mit dem ersten Text unten und fügen Sie unter **All other conditions** eine Nachricht mit dem zweiten hinzu. Ersetzen Sie jeden Namen in geschweiften Klammern durch seine Variable über die Schaltfläche **{x}** (Tab **Topic**).

```text
Thank you. An event with {Guests} guests needs a tailored offer, so our catering team will write to you at {CustomerEmail} within one working day.
```

```text
Thank you. We have noted catering for {Guests} guests on {EventDate}. Our menu options for your event go to {CustomerEmail}.
```

6. Gehen Sie zurück zum Tab **Build**; das Topic speichert sich selbst.

Erwartet: Die **Skills** des Catering Specialist listen **catering request**, und sein Canvas zeigt drei Fragen, eine Bedingung und zwei Nachrichten.

## Schritt 6: Einen Kunden per E-Mail an einen Menschen übergeben

Ein Kunde, der nach einem Menschen fragt, muss einen bekommen, und eine Catering-Frage, die eine menschliche Antwort braucht, braucht keinen Live-Anruf: Die Handoff-Methode ist **Email**. Ihre Scenario description sagt der Orchestrierung, wann sie sie nutzt, und eine Zeile in den Instructions des Catering Specialist nennt sie.

1. Öffnen Sie auf der Karte des Catering Specialist den Abschnitt **Human handoff** und wählen Sie **Handoff method** > **Email**.
2. Ändern Sie **Name** von "Handoff by email" in `Email the catering team`, fügen Sie den Text unten in **Scenario description** ein, tragen Sie unter **Recipients** Ihre eigene E-Mail-Adresse ein und wählen Sie **Add method**.

```text
Sends the conversation to the catering team when the customer asks for a person.
```

3. Fügen Sie in den Instructions des Catering Specialist die Zeile unten unter "You do:" hinzu. Löschen Sie dann die Wörter `Email the catering team` darin, tippen Sie an ihrer Stelle `/`, öffnen Sie den Tab **Tools** und wählen Sie **Email the catering team** (als System Tool gelistet). Wählen Sie **Save**.

```text
- When the customer asks for a person, hand over with Email the catering team and tell the customer that the team will write to them.
```

Erwartet: Die **Tools** des Catering Specialist listen **Email the catering team**, und seine Instructions zeigen das Tool als eingefügte Referenz.

## Schritt 7: Kunden an die Spezialisten weiterleiten

Die Orchestrierung vergleicht jede Nachricht bereits mit den Descriptions der Spezialisten. Ausdrückliche Routing-Zeilen in den Instructions des Primary Agents nehmen den Zweifel bei Anfragen, die in beide Richtungen gehen könnten, und sie verhindern, dass der Primary Agent die Catering-Angaben selbst erfragt, bevor er übergibt.

1. Wählen Sie die Karte des Primary Agents und fügen Sie den Block unten nach dem Absatz "Role" in seine **Instructions** ein.
2. Ersetzen Sie den Namen jedes Spezialisten durch die Referenz mit `/`: Löschen Sie `Menu Specialist`, tippen Sie `/`, öffnen Sie den Tab **Agents** und wählen Sie **Menu Specialist**, dann dasselbe für `Catering Specialist`. Wählen Sie **Save**.

```text
Routing:
- Questions about dishes, prices, stock or recommendations go to Menu Specialist.
- Every catering request, for an event, a party or an office, goes to Catering Specialist. Do not ask the customer for the date, the number of guests or the email address yourself.
```

Erwartet: Die **Instructions** des Primary Agents zeigen **Menu Specialist** und **Catering Specialist** als eingefügte Referenzen.

## Schritt 8: Das Routing in Preview testen

Die Testanleitung von Microsoft arbeitet sich von innen nach außen: zuerst Begrüßung und Umfang, dann Routing, dann Tools und Topics. Die Activity map zeigt, welcher Spezialist jeden Turn übernommen hat und welches Tool oder Topic gelaufen ist, so belegen Sie das Routing, statt der Antwort zu vertrauen.

1. Öffnen Sie den Tab **Preview**, der sich auf **Voice Call** öffnet, und wählen Sie **Web Chat**; die **Activity map** ist daneben bereits geöffnet. Lesen Sie die Begrüßung.
2. Senden Sie die Frage zur Speisekarte.

```text
Which desserts do you recommend for a birthday with six people, and what do they cost?
```

3. Starten Sie eine neue Testsitzung und senden Sie die kleine Catering-Anfrage. Beantworten Sie die Fragen des Topics mit einem Datum im nächsten Monat, `20` und Ihrer E-Mail-Adresse.

```text
I'd like catering for a team lunch.
```

4. Starten Sie eine neue Testsitzung und senden Sie die große Catering-Anfrage. Antworten Sie mit einem Datum im nächsten Monat, `60` und Ihrer E-Mail-Adresse.

```text
We're planning a summer party and need catering.
```

Erwartet: Die Sitzung beginnt mit der Begrüßung aus Schritt 2, und die Activity map zeigt **Conversation start** als ausgeführtes Topic. Die Frage zur Speisekarte geht an **Menu Specialist**, die Activity map zeigt den Aufruf des Food Catalog `get all food items`, und die Antwort nennt Gerichte mit Preisen und Lagerbestand aus dem Catalog, zum Beispiel Germknoedel für 7 EUR mit 26 auf Lager und Kaiserschmarrn für 9 EUR mit 22 auf Lager. Beide Catering-Anfragen gehen an **Catering Specialist** und starten **catering request**, das seine drei Fragen wortgleich stellt; 20 Gäste enden mit "We have noted catering for 20 guests on" und Ihrem Datum, und 60 Gäste enden mit der Nachricht zum individuellen Angebot und ohne Handoff.

## Schritt 9: Den Agent gezielt an seine Grenzen bringen

Der Happy Path belegt, dass der Agent funktionieren kann; diese Tests belegen, dass er sicher scheitert. Jeder prüft eine Regel aus den Instructions oder den Handoff.

1. Senden Sie in einer neuen Testsitzung die Anfrage außerhalb des Umfangs.

```text
Can you book me a taxi to the airport?
```

2. Bitten Sie in einer neuen Testsitzung um einen Menschen.

```text
Please escalate this to a person on the catering team.
```

Erwartet: Die Taxi-Anfrage wird mit einem kurzen Hinweis abgelehnt, dass der Service Desk bei Gerichten, Preisen, Empfehlungen und Catering hilft, und die Activity map zeigt keinen Spezialisten und kein Tool. Die Bitte um einen Menschen startet **Email the catering team** (die Activity map kann einen ersten Aufruf als Cancelled zeigen, bevor der Handoff läuft), der Agent sagt, dass er an einen Menschen übergibt und die Details sendet, und die Handoff-E-Mail kommt in Ihrem Postfach an.

## Schritt 10: Auf der Demo-Website deployen

Testerinnen und Tester brauchen eine Seite, die sie ohne Copilot Studio öffnen können. Das Veröffentlichen erstellt eine Demo-Website, und ihre Intro-Nachricht und Starter Prompts sagen, was auszuprobieren ist.

1. Öffnen Sie den Tab **Deploy** und wählen Sie **Publish**. **Review before publishing** listet Warnungen, etwa Tools mit den Credentials des Autors oder noch keinen Evaluierungslauf; sie blockieren das Veröffentlichen nicht.
2. Wählen Sie unter **Share a preview** auf der Karte **Demo website** den Eintrag **Configure**. Fügen Sie in **Set up agent demo** die Intro-Nachricht unten (höchstens 250 Zeichen) und die zwei Starter Prompts (je höchstens 80 Zeichen) ein und speichern Sie.

```text
Test the Happy Longnose service desk: ask for a dessert recommendation, then request catering for 60 guests.
```

```text
Which desserts do you recommend?
```

```text
I need catering for our office party.
```

3. Wählen Sie **Open demo**, wählen Sie den ersten Starter Prompt und beantworten Sie die Frage des Agents nach dem Anlass und der Zahl der Gäste.

Erwartet: Die Demo-Website öffnet sich in einem neuen Tab mit Ihrer Intro-Nachricht und den Starters, dazu ein Standard-Starter "Connect me with support". Der erste Starter antwortet mit einer Frage nach dem Anlass und der Zahl der Gäste und empfiehlt nach Ihrer Antwort Gerichte aus dem Food Catalog. **Copy link** liefert die URL auf `ccai.preview.microsoft.com`, die Sie an Testerinnen und Tester weitergeben; die Demo-Website dient zum Testen und nie für Kunden.

## Troubleshooting

| Symptom | Wahrscheinliche Ursache | Lösung |
|---------|-------------------------|--------|
| **Home** zeigt keine Karte **Customer conversation agent** | Home hat das ältere Layout geladen ("What would you like to build?"), oder die Preview hat dieses Environment noch nicht erreicht | Wechseln Sie das Environment und zurück; ein Neuladen allein behält oft das alte Layout. Fehlt die Karte weiterhin, folgen Sie der Demo |
| **Add MCP server** lädt etwa eine Minute und endet mit "Couldn't create the MCP server. Please try again." | Das Environment lehnt den neuen Custom Connector als doppelten Namen ab, auch bei einem nie verwendeten Namen | Fügen Sie den Server in einem anderen Environment hinzu |
| **Add skill** bleibt im Tab Topic deaktiviert | Die Description ist länger als 200 Zeichen | Kürzen Sie sie auf den Text aus Schritt 5 |
| Eine Frage zur Speisekarte landet beim Catering Specialist oder umgekehrt | Die Descriptions überschneiden sich, oder Schritt 7 ist nicht gespeichert | Vergleichen Sie die beiden Descriptions der Sub-Agents mit Schritt 3 und 5, prüfen Sie den Routing-Block, wählen Sie **Save** und starten Sie eine neue Sitzung |
| Der Primary Agent fragt nach Datum und Gästen, danach fragt das Topic erneut | Der Routing-Zeile fehlt "Do not ask the customer for the date, the number of guests or the email address yourself" | Fügen Sie den Block aus Schritt 7 erneut ein, wählen Sie **Save** und starten Sie eine neue Sitzung |
| Kein Tool **Escalate** unter **Tools** > **System tools** | Der Handoff per E-Mail liegt im Abschnitt **Human handoff** | Nutzen Sie **Human handoff** > **Handoff method** > **Email** (Schritt 6) |
| Keine Handoff-E-Mail kommt an | Die Empfängeradresse ist falsch, oder die Mail liegt im Junk-Ordner | Prüfen Sie **Recipients** in **Email the catering team** und Ihren Junk-Ordner |
| Eine Antwort nennt Gerichte ohne Aufruf des Food Catalog | Die lesenden Tools des Food Catalog sind ausgeschaltet, oder der Skill nennt den Food Catalog nicht mehr | Prüfen Sie **Edit MCP server** und die Instructions des Skills und starten Sie dann eine neue Sitzung |
| Preview antwortet mit dem alten Verhalten | Die letzte Änderung ist noch nicht gespeichert | Warten Sie, bis der Header **Saved** zeigt, und starten Sie dann eine neue Testsitzung |
| Preview antwortet "You need credits to continue" | Das Environment hat keine Copilot Credits mehr | Bitten Sie den Admin, dem Environment Copilot Credits zuzuweisen |

## Prüfen

Sie haben das Ziel des Labs erreicht, wenn alles Folgende zutrifft:

1. Der Tab **Build** zeigt den Primary Agent mit zwei Sub-Agents, Menu Specialist und Catering Specialist.
2. Der Menu Specialist trägt **Happy Longnose Food Catalog**, nur mit den lesenden Tools eingeschaltet, und den Generative Skill **Dish recommendation**.
3. Der Catering Specialist trägt den Topic Skill **catering request** und den Handoff per E-Mail **Email the catering team**.
4. In Schritt 8 leitet die Activity map jede Anfrage an den erwarteten Spezialisten, und in Schritt 9 hat die Bitte um einen Menschen **Email the catering team** gestartet.
5. Die Demo-Website öffnet sich mit Ihrer Intro-Nachricht und beantwortet den ersten Starter Prompt.

## Zusammenfassung

Sie haben einen Customer Conversation Agent als kleines Team gebaut: einen Empfang, der begrüßt und weiterleitet, einen Menu Specialist, der mit einem Generative Skill über den Live-Catalog nachdenkt, und einen Catering Specialist, der mit einem Topic Skill feste Daten erfasst und einen Kunden, der nach einem Menschen fragt, per E-Mail an das Catering-Team übergibt. Sie können jetzt:

- Einen Customer Conversation Agent erstellen, sein Event Conversation start bearbeiten und Sub-Agents mit eigenen Tools und Skills hinzufügen.
- Einen Generative Skill für Beratung und einen Topic Skill für Daten wählen, die jedes Mal gleich erfasst werden müssen, und eine Description für ein Topic schreiben, die seine Fragen für sich beansprucht.
- Einen Human Handoff hinzufügen, ein Routing schreiben, das den Primary Agent nicht erfragen lässt, was ein Topic erfasst, das Routing in der Activity map testen und eine Demo-Website für Testerinnen und Tester veröffentlichen.

Kehren Sie zu [Customer Conversation Agents: Topic Skills, Sub-Agents, and Escalation](../../../demos/06-cs-copilot-harness/10-customer-conversation/readme.md) zurück, um zu vergleichen, wo ein fester Ablauf auf jedem Harness liegt.

## Aufräumen

Löschen Sie Happy Longnose Service Desk aus der Liste der Agents, wenn Sie ihn nicht mehr brauchen. Der Food Catalog der Klasse bleibt unverändert, weil jedes schreibende Tool ausgeschaltet war.
