# Das Back Office eines Food Shops mit Computer Use betreiben

Die Küche von Passion for Food prüft Portionen, füllt Gerichte nach und erfasst telefonische Bestellungen mehrmals täglich von Hand im Web Back Office des Shops. In diesem Lab bauen Sie einen Copilot Studio Agent, der diese Arbeit selbst erledigt: Er liest die Bestandsliste, ändert den Bestand auf der Bearbeitungsseite eines Gerichts und gibt über den Checkout des Shops eine Bestellung auf, indem er die Web App am Bildschirm bedient. Am Ende haben Sie einen Agent und drei Computer Use Tools, die der Orchestrator aus einer einzigen Anfrage im Chat verkettet.

Was Sie hier üben: eine Aufgabe am Bildschirm in ein Computer Use Tool mit Inputs verwandeln, das Tool auf eine einzige Site beschränken und den Orchestrator mehrere Bildschirm-Tools kombinieren lassen.

Dauer: etwa 65 Minuten.

## Was Sie bauen

- Einen Standard Agent, CS-Food Shop Assistant, mit Instructions, die festlegen, welches Tool welche Anfrage bedient.
- CS-Read food stock, ein Computer Use Tool, das jedes Gericht mit seinem Preis und den vorrätigen Portionen zurückgibt.
- CS-Update food stock, ein Tool mit zwei Inputs, das die Bearbeitungsseite eines Gerichts öffnet und einen neuen Bestandswert speichert.
- CS-Place food order, ein Tool, das den Warenkorb und das Checkout-Formular ausfüllt und die Bestellnummer zurückgibt.
- Access Control und HTTPS Enforcement, die alle drei Tools auf der Site des Shops halten.

## Voraussetzungen

- Eine Copilot Studio Environment, in der Computer Use verfügbar ist, und Copilot Credits: Jeder Schritt eines Runs verbraucht mit einem Standard-Model 5 Credits.
- Der Hosted Browser (Preview) als Machine, den das Tool mit einer bereiten Connection auswählt, wenn Ihre Environment ihn anbietet, oder eine in Power Automate registrierte Windows Machine mit eingeschaltetem **Enable for computer use**.
- Der Food Shop des Kurses, geöffnet in Ihrem Browser: `https://victorious-sky-029f1cb03.6.azurestaticapps.net/food/catalog`.

> **Hinweis:** Der Food Shop ist die Angular App in [src/food-shop](../../../src/food-shop), und seine Katalogdaten kommen aus dem .NET Service in [src/food-catalog-service](../../../src/food-catalog-service). Beide sind für den Kurs in der Resource Group `rg-copilotstudio-labs` deployt: der Shop als Static Web App `lab-food-shop` (`https://victorious-sky-029f1cb03.6.azurestaticapps.net`), der Katalog als Web App `lab-food-catalog-service` (`https://lab-food-catalog-service.azurewebsites.net/food`). Alle Teilnehmenden teilen sich einen Katalog, deshalb ändern sich Bestandswerte, während Sie arbeiten.

## Übung 1: Den Shop Assistant erstellen

Der Orchestrator wählt ein Computer Use Tool nach seinem Namen und seiner Description, und die Instructions des Agents sagen ihm, wie die Tools zusammenspielen. Sie erstellen zuerst den Agent, damit jedes Tool, das Sie später hinzufügen, am selben Ort landet.

1. Öffnen Sie in Copilot Studio auf der Startseite das Dropdown neben **New agent** und wählen Sie unter **Other ways to build** den Eintrag **Agent** mit dem Badge **Standard**.
2. Geben Sie im Dialog **Name your agent** `CS-Food Shop Assistant` ein und bestätigen Sie.
3. Wählen Sie auf der Konfigurationsseite des Agents im Abschnitt **Instructions** die Option **Edit**, fügen Sie diese Instructions ein und wählen Sie **Save**:

```text
You are the back-office assistant of Passion for Food, a restaurant web shop.
Use CS-Read food stock to answer questions about dishes, prices and portions in stock.
Use CS-Update food stock to change the portions in stock of one dish; when several dishes must change, call it once per dish.
Use CS-Place food order to order dishes for a customer.
Answer with the values the tools return and never guess a stock number.
```

Erwartet: Die Konfigurationsseite zeigt CS-Food Shop Assistant mit den Instructions im Abschnitt **Instructions**, und der Abschnitt **Tools** listet noch keine Tools.

## Übung 2: Die Bestandsliste lesen

Eine Bestandsprüfung ist eine Seite, die eine Person Zeile für Zeile liest. Das Tool tut dasselbe nach den Instructions, die Sie ihm geben, und die Testansicht zeigt jeden Schritt, den es ausführt.

1. Öffnen Sie **Tools**, wählen Sie **Add a tool** und dann die Karte **Add new Computer use**.
2. Fügen Sie diese Instructions ein und wählen Sie **Add and configure**:

```text
1. Go to https://victorious-sky-029f1cb03.6.azurestaticapps.net/food/catalog.
2. Wait until the Catalog table shows its rows with the columns Id, Name, Price and In Stock.
3. Return every row as a JSON array of objects with the fields name, price and inStock, using the values exactly as shown, and nothing else.
```

3. Setzen Sie **Name** auf `CS-Read food stock`, belassen Sie **Model** bei **Claude Sonnet 4.5** und ersetzen Sie **Description** durch:

```text
Reads every dish of the Passion for Food catalog with its price and portions in stock from the shop's back office. Use it when a user asks what is in stock, how many portions of a dish are left, or what a dish costs.
```

4. Prüfen Sie unter **Machines**, dass **Machine** den Wert **Hosted browser** und **Connection** ein grünes Häkchen zeigt. Wählen Sie **Save**; steht im Header noch immer Computer use, geben Sie den Namen erneut ein und wählen Sie noch einmal **Save**.
5. Wählen Sie in der Karte **Instructions** die Option **Test directly**.

Erwartet: Das Fenster **Test** zeigt links das Reasoning des Models, während **Preview** den Hosted Browser zeigt, der die Seite **Catalog** des Shops öffnet. Der Status wechselt auf **Finished**, und die letzte Karte enthält ein JSON Array mit den fünf Gerichten Falafel Plate, Hand pulled Noodles, Pad Kra Pao, Pizza Tartufo und Wiener Schnitzel, jeweils mit dem Preis und dem Bestand, den die Tabelle zeigte. Vergleichen Sie es mit der Seite Catalog in Ihrem eigenen Browser: Auf einem frischen Deployment zeigt die Spalte In Stock 9, 9, 12, 4 und 13.

## Übung 3: Die Tools auf den Shop beschränken

Das Bestands-Tool braucht nur eine Site, darf standardmäßig aber auf jeder Website und in jeder App agieren. Sie schränken es ein, bevor Sie Tools hinzufügen, die Daten ändern.

1. Schließen Sie das Fenster **Test**. Scrollen Sie zu **Allowed websites and desktop apps** und schalten Sie **Only allow specific websites and desktop apps** ein.
2. Wählen Sie **Add**, belassen Sie **Type** bei **Website**, geben Sie diese Domain ein und wählen Sie **Add**:

```text
victorious-sky-029f1cb03.6.azurestaticapps.net
```

3. Prüfen Sie, dass **Enforce HTTPS** eingeschaltet ist, wählen Sie **Save** und führen Sie **Test directly** erneut aus.

Erwartet: Die Allow List zeigt die Domain des Shops als Website und Microsoft Edge als Desktop App, die der Hosted Browser braucht. Der Run liefert dasselbe JSON Array wie zuvor, weil jede Aktion auf der erlaubten `https://` Site bleibt.

## Übung 4: Den Bestand auf der Bearbeitungsseite eines Gerichts ändern

Nachfüllen heißt: ein Gericht öffnen, ein Feld ändern und speichern. Über zwei Inputs übergibt der Orchestrator das Gericht und den neuen Wert, deshalb bedient ein einziges Tool jedes Nachfüllen.

1. Wählen Sie auf der Seite **Tools** den Eintrag **Add a tool** > **Add new Computer use**, fügen Sie diese Instructions ein und wählen Sie **Add and configure**:

```text
1. Go to https://victorious-sky-029f1cb03.6.azurestaticapps.net/food/catalog.
2. In the Catalog table, find the row whose Name matches the DishName input and select the pencil icon (Edit) in that row.
3. On the Edit page, replace the value of In stock with the NewStock input. Do not change Name or Price.
4. Select Save. No confirmation from me is needed.
5. Back on the Catalog page, read the In Stock value of that dish and return it in the form: <DishName>: <In Stock>.
```

2. Setzen Sie **Name** auf `CS-Update food stock` und **Description** auf den folgenden Text, belassen Sie **Claude Sonnet 4.5** und den **Hosted browser** und fügen Sie die Domain des Shops wie in Übung 3 unter **Allowed websites and desktop apps** hinzu.

```text
Sets the portions in stock of one dish in the Passion for Food back office. Use it when a user asks to restock a dish or to set, raise or lower its stock. Call it once per dish.
```

3. Wählen Sie in der Karte **Inputs** zweimal **Add input**, legen Sie diese beiden Inputs an und wählen Sie dann **Save**:

| Name | Description |
|------|-------------|
| `DishName` | The dish name exactly as it appears in the Name column, for example Pizza Tartufo |
| `NewStock` | The new number of portions in stock, a whole number such as 20 |

4. Wählen Sie **Test directly**, geben Sie `Pizza Tartufo` als **DishName** und `20` als **NewStock** ein und wählen Sie **Start test**.

Erwartet: Die Preview zeigt die Seite Catalog, dann die Bearbeitungsseite unter `/food/catalog/edit/5` mit der Überschrift **Edit** und Pizza Tartufo daneben, den Feldern **Name**, **Price** und **In stock** sowie den Schaltflächen **Cancel** und **Save**. Nach **Save** ist der Browser zurück auf der Seite Catalog, und die letzte Karte lautet `Pizza Tartufo: 20`. Laden Sie die Seite Catalog in Ihrem eigenen Browser neu: Pizza Tartufo zeigt 20 in der Spalte In Stock.

> **Tipp:** Die Karte **Inputs** listet beide Inputs mit **Fill using** auf **Dynamically fill with AI**; so füllt der Orchestrator sie in Übung 6 aus den Worten des Users.

## Übung 5: Eine Bestellung über den Checkout aufgeben

Telefonische Bestellungen laufen über denselben Shop, den auch Kundinnen und Kunden nutzen: die Karten der Gerichte, den Warenkorb und ein Checkout-Formular. Dieses Tool tippt die Daten einer Kundin oder eines Kunden in dieses Formular und meldet die Bestellnummer, die der Shop zurückgibt.

1. Fügen Sie ein drittes Computer Use Tool mit diesen Instructions hinzu und wählen Sie **Add and configure**:

```text
1. Go to https://victorious-sky-029f1cb03.6.azurestaticapps.net/food.
2. On the card of the dish that matches the DishName input, select the plus button (Add one <dish>) as many times as the Quantity input says.
3. Check that the Actions panel shows the expected number of items in cart, then select Checkout.
4. On the Checkout page, replace Name with the CustomerName input and E-Mail with the CustomerEmail input. Keep all other fields as they are.
5. Select Complete Checkout. No confirmation from me is needed.
6. Return the order number shown after "Your order number is".
```

2. Setzen Sie **Name** auf `CS-Place food order` und **Description** auf den folgenden Text, fügen Sie die Domain des Shops zur Allow List hinzu und legen Sie die Inputs `DishName`, `Quantity`, `CustomerName` und `CustomerEmail` mit den Beschreibungen aus der Tabelle an. Wählen Sie **Save**.

```text
Orders dishes for a customer in the Passion for Food web shop and returns the order number. Use it when a user asks to order or buy dishes for a customer.
```

| Name | Description |
|------|-------------|
| `DishName` | The dish name exactly as shown on its card, for example Falafel Plate |
| `Quantity` | How many portions to order, a whole number |
| `CustomerName` | The customer's full name |
| `CustomerEmail` | The customer's email address |

3. Wählen Sie **Test directly** mit `Falafel Plate`, `2`, `Mara Huber` und `mara.huber@example.com`.

Erwartet: Die Preview zeigt die Seite Food mit den Bildern der Gerichte, das Panel Actions wechselt auf "2 items in cart" und "24.00 €", dann folgt die Seite Checkout mit dem Formular und einer Zeile für Falafel Plate mit "item price:" 12 und "Total: 24.00 €". Nach **Complete Checkout** zeigt die Seite "Your order was submitted" und "Thank you for your order!", das Panel steht wieder auf "0 items in cart", und die letzte Karte liefert die Bestellnummer, eine GUID.

> **Hinweis:** Der Shop des Kurses simuliert den Checkout: Er liefert eine Bestellnummer, ohne die Bestellung zu speichern, deshalb können Sie dieses Tool beliebig oft ausführen.

## Übung 6: Den Agent das Tool wählen lassen

Jedes Tool funktioniert für sich. Jetzt entscheidet der Orchestrator, welches Tool eine Anfrage braucht, und füllt die Inputs aus den Worten des Users.

1. Wählen Sie rechts oben **Test** und dann das Symbol **Start new test session**, denn eine Session, die Sie vor dem Hinzufügen der Tools geöffnet haben, antwortet unter Umständen nie.
2. Senden Sie diese drei Nachrichten nacheinander und warten Sie jeweils auf die Antwort:

```text
Which dishes have fewer than 10 portions in stock?
```

```text
Set the stock of Pizza Tartufo to 25.
```

```text
Order 2 Falafel Plate for Mara Huber, mara.huber@example.com.
```

Erwartet: Die erste Antwort kommt von CS-Read food stock und nennt mit ihren Zahlen die Gerichte, deren Wert In Stock in diesem Moment unter 10 liegt. Die zweite führt CS-Update food stock mit Pizza Tartufo und 25 aus und bestätigt `Pizza Tartufo: 25`. Die dritte führt CS-Place food order aus und antwortet mit einer Bestellnummer. Während jedes Runs zeigt der Chat die Reasoning-Nachrichten des Tools mit einem Screenshot nach jedem Schritt.

## Übung 7: Mehrere Gerichte mit einer Anfrage nachfüllen

Die Instructions des Agents sagen dem Orchestrator, das Update-Tool einmal pro Gericht aufzurufen. Eine einzige Anfrage verkettet jetzt beide Tools: ein Lesen, um die knappen Gerichte zu finden, dann ein Update für jedes gefundene Gericht.

1. Senden Sie in derselben Test Session:

```text
Restock every dish with fewer than 10 portions to 20.
```

2. Sobald die Antwort eintrifft, laden Sie die Seite Catalog des Shops in Ihrem eigenen Browser neu.

Erwartet: Die Antwort listet jedes nachgefüllte Gericht mit seinem neuen Wert. Der Run ruft CS-Read food stock einmal und CS-Update food stock einmal für jedes Gericht unter 10 auf, und die Seite Catalog zeigt für diese Gerichte 20 in der Spalte In Stock.

## Übung 8: Die Kosten der Runs in der Map View ermitteln

Computer Use rechnet jeden Schritt ab, deshalb kostet dieselbe Anfrage mehr, wenn sie mehr Bildschirme braucht. Die Map View jeder Session zeigt, wie viele Aktionen jeder Run gebraucht hat.

1. Öffnen Sie den Tab **Activity** des Agents und dann die Session aus Übung 7.
2. Stellen Sie **View** auf **Map view** und wählen Sie nacheinander jeden Node **ExecuteCUA**.
3. Notieren Sie für jeden Node das Tool und die **Number of actions** in seiner **Summary**, und multiplizieren Sie diese Zahl mit 5.

Erwartet: Die Map zeigt einen ExecuteCUA Node für das Lesen des Bestands und einen pro nachgefülltem Gericht, jeweils mit einem **Session replay**, einer Liste **Activity** seiner Schritte und einer **Summary** mit **Model** Claude Sonnet 4.5, **Machine details** Hosted browser und seiner **Number of actions**. Die Summe aller Aktionen mal 5 ergibt die Copilot Credits, die die Anfrage zum Nachfüllen verbraucht hat, und die Update-Runs kosten zusammen mehr als das einzelne Lesen.

## Troubleshooting

| Symptom | Wahrscheinliche Ursache | Lösung |
|---------|--------------|-----|
| **Add new Computer use** fehlt oder ist ausgegraut | Generative Orchestration ist ausgeschaltet, oder Computer Use ist für die Environment ausgeschaltet | Schalten Sie Generative Orchestration ein, oder bitten Sie die Administration, **Computer use** in den Features der Environment einzuschalten |
| "No machine able to run the automation has been found" | Eine andere Hosted Browser Session von Ihnen läuft noch, oder Demand-based Throttling greift | Warten Sie, bis der andere Run fertig ist, und testen Sie dann erneut |
| Ein Bestandswert weicht von dem Wert ab, den Sie gesetzt haben | Eine andere teilnehmende Person hat dasselbe Gericht im gemeinsamen Katalog geändert | Lesen Sie den Bestand erneut; das letzte Speichern gewinnt |
| Der Update-Run stoppt auf der Seite Catalog | DishName passt zu keinem Wert in der Spalte Name der Tabelle | Verwenden Sie den Namen des Gerichts genau so, wie die Seite Catalog ihn zeigt |
| Der Run stoppt, nachdem Sie Access Control hinzugefügt haben | Eine Aktion zielte auf eine Site außerhalb der Allow List oder auf eine `http://` Seite | Prüfen Sie die Domain unter **Allowed websites and desktop apps** und verwenden Sie die `https://` Adresse |
| Der Test-Chat zeigt Ihre Nachricht, antwortet aber nie | Die Test Session begann, bevor die Tools hinzugefügt wurden | Wählen Sie **Start new test session** und senden Sie die Nachricht erneut |

## Zusammenfassung

Sie haben CS-Food Shop Assistant mit drei Computer Use Tools gebaut, die über die Webseiten des Food Shops lesen, ändern und bestellen, haben die Tools auf die Site des Shops beschränkt und den Orchestrator sie aus einer einzigen Anfrage verketten lassen. Sie können jetzt:

- Computer Use Instructions schreiben, die eine Tabelle lesen und strukturierte Werte zurückgeben
- Ein Tool mit mehreren Inputs parametrisieren, die der Orchestrator aus einer Chat-Nachricht füllt
- Ein Webformular mit mehreren Feldern mit Computer Use ausfüllen und absenden
- Tools mit Access Control und HTTPS Enforcement einschränken
- Die Kosten einer Computer Use Anfrage aus der Zahl der Aktionen in der Map View berechnen
