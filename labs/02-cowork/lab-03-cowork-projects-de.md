# Lab 03: Arbeit mit Cowork Projects organisieren

> **Vorschlag: Führen Sie dieses Lab mit einem günstigeren Model aus.** Wählen Sie im Model Picker von Cowork (**Model and generation settings**) **Sonnet 5.5** ("Efficient for everyday tasks") statt **Auto**, und ziehen Sie den Regler **Effort level** auf **Light**, seine Stufe ganz links, statt **Medium (default)**. Hat Ihr Tenant die Anthropic Models abgeschaltet, wählen Sie stattdessen **GPT 5.5**.

In diesem Lab führen Sie eine Arbeit, die sich über mehrere Cowork Tasks erstreckt, als ein Project. Sie leiten den Betrieb bei Grey Logistics, und der neue Vienna Hub öffnet am 07 Dec 2026. Jedes Status Briefing und jedes Entscheidungsmemo zum Launch geht an denselben Vorstand, verwendet dieselben Begriffe und folgt demselben einseitigen Format: Das legen Sie einmal im Project fest, statt es in jedem Prompt zu wiederholen.

Das Lab steht für sich: Sie brauchen ein Konto mit Cowork und die zwei Dateien im Ordner [lab-03-cowork-projects](./lab-03-cowork-projects/), nichts aus den anderen Labs.

![Ein Project Q3 Close enthält seine Instructions, die Tasks unter Recent, die Dateien unter Outputs und den Project context; ein neuer Task, der auf der Seite des Projects startet, übernimmt die Instructions und den verfügbaren Kontext, und seine Datei landet unter Outputs.](../../demos/02-cowork/pptx/images/04-01-what-a-project-holds.svg)

Am Ende dieses Labs können Sie:

- Ein Project anlegen und ihm Instructions geben, denen jeder Task darin folgt
- Tasks auf der Seite des Projects starten und ihre Dateien unter **Outputs** finden
- Einen bestehenden Chat ins Project holen und einen Task wieder herausnehmen
- Sehen, dass die Instructions des Projects an seiner Grenze aufhören
- Das Project umbenennen, archivieren und wiederherstellen

## Voraussetzungen

- Ein Microsoft 365 Konto mit einer Microsoft 365 Copilot Lizenz und Zugang zu Cowork (eine Spending Policy für Copilot Credits, die **Cowork** auswählt, deckt Sie ab)
- Die Lab-Dateien, auf Ihren Computer heruntergeladen:

| Datei | Inhalt |
| --- | --- |
| [vienna-hub-launch-plan.xlsx](./lab-03-cowork-projects/vienna-hub-launch-plan.xlsx) | Blatt **Milestones**: sieben Meilensteine des Launches mit Owner, Fälligkeit, Status und Notizen. Blatt **Budget**: sechs Positionen, geplant und bisher ausgegeben in EUR Tausend |
| [carrier-notes.docx](./lab-03-cowork-projects/carrier-notes.docx) | Die Notizen des Einkaufs zu den drei Frachtführern, den offenen Risiken und der Entscheidung, die der Vorstand treffen muss |

> Jeder Task in diesem Lab verbraucht Copilot Credits. Das Lab führt fünf kurze Tasks aus.

## Übung 1: Das Project Vienna Hub Launch anlegen

Ein Project bündelt die Tasks einer Arbeit. Legen Sie es vor dem ersten Task an, damit jeder Task des Launches ab seiner ersten Nachricht dazugehört.

### Schritt 1: Cowork öffnen

Öffnen Sie [Microsoft 365 Copilot Cowork](https://copilot.cloud.microsoft/cowork). Stellen Sie den Umschalter **Chat / Cowork** oben auf **Cowork**: Projects gibt es in Cowork, nicht im Chat.

**Erwartetes Ergebnis:** Die Startseite von Cowork ist offen, und die linke Navigation zeigt die Überschrift **Projects**; solange es noch keine Projects gibt, steht darunter der Link **Add project here**.

### Schritt 2: Das Project anlegen

1. Fahren Sie in der linken Navigation mit der Maus über die Überschrift **Projects** und wählen Sie das **+**, das erscheint. Ohne Projects öffnet **Add project here** denselben Dialog.
2. Geben Sie im Dialog **New project** unter **Project name** `Vienna Hub Launch` ein.
3. Wählen Sie eine Farbe aus der Farbreihe.
4. Wählen Sie **Create**.

**Erwartetes Ergebnis:** Cowork öffnet das neue Project. Die Seite zeigt eine Chat-Eingabe und die Tabs **Recent**, **Outputs** und **Project context**; unter **Recent** steht "No chats or tasks yet", und **Vienna Hub Launch** erscheint in der linken Navigation unter **Projects**.

## Übung 2: Dem Project seine Instructions geben

Project Instructions halten fest, was jeder Task dieser Arbeit beachten muss: das Publikum, die Begriffe, das Format. Sie gelten für jeden Task im Project und haben Vorrang vor Ihren persönlichen Cowork Instructions.

### Schritt 1: Die Instructions setzen

1. Öffnen Sie auf der Seite des Projects das Menü **More actions** (**...**: **Edit project**, **Edit instructions**, **Archive**, **Delete**) und wählen Sie **Edit instructions**.
2. Fügen Sie den folgenden Text in den Editor ein, der leer "Tell Cowork how you want to work on this project" zeigt:

```text
This project is the Grey Logistics Vienna Hub launch. Every document goes to the Grey Logistics leadership board.
Call the site "Vienna Hub", never "Vienna warehouse" or "the new site".
Report money in EUR thousands and dates as DD Mon YYYY, for example 07 Dec 2026.
Keep every document to one page, lead with the decision the board has to make, and end with a section titled "Open risks".
```

3. Wählen Sie **Save**. Meldet der Editor, dass die Instructions das Limit überschreiten, kürzen Sie sie und speichern Sie erneut.

**Erwartetes Ergebnis:** Der Editor schließt ohne Fehler. Öffnen Sie **More actions** > **Edit instructions** noch einmal, stehen dort die vier gespeicherten Zeilen.

## Übung 3: Den ersten Task im Project ausführen

Ein Task, den Sie auf der Seite des Projects starten, gehört zum Project und bringt dessen Instructions und den verfügbaren Kontext mit.

### Schritt 1: Das Status Briefing zum Launch anfordern

1. Wählen Sie auf der Seite des Projects **Vienna Hub Launch** in der Chat-Eingabe **+**, dann **Upload images and files**, und wählen Sie `vienna-hub-launch-plan.xlsx`.
2. Senden Sie diesen Prompt:

```text
Read vienna-hub-launch-plan.xlsx and write the weekly launch status brief as a Word document named vienna-hub-status-brief.docx. Cover every milestone that is at risk with its owner and due date, and compare planned and actual spend for each budget line.
```

**Erwartetes Ergebnis:** Cowork liest beide Blätter, benennt den Task etwa "Vienna Hub Launch Status Brief" und erstellt `vienna-hub-status-brief.docx`. Der Prompt erwähnt weder den Vorstand noch die Benennung noch das Format, und trotzdem folgt das Briefing den Instructions des Projects: Es beginnt mit einem Abschnitt "Decision for the board", nennt den Standort "Vienna Hub", gibt Beträge in EUR Tausend an (die Position für das Warehouse Management System mit 291 gegenüber geplanten 260), schreibt Daten wie 20 Nov 2026, passt auf eine Seite und endet mit **Open risks**.

### Schritt 2: Task und Datei im Project finden

1. Kehren Sie zur Seite des Projects zurück, indem Sie in der linken Navigation unter **Projects** den Eintrag **Vienna Hub Launch** wählen.
2. Sehen Sie sich die Tabs **Recent**, **Outputs** und **Project context** an.

**Erwartetes Ergebnis:** **Recent** listet den Task des Status Briefings mit einem Chip `vienna-hub-status-brief.docx`. **Outputs** zeigt die Datei als Vorschaubild, mit einer Listenansicht und einer Suche; ein Klick öffnet das Dokument. **Project context** listet `vienna-hub-launch-plan.xlsx`, die Datei, die Sie im Task hochgeladen haben.

## Übung 4: Das Project erweitern

Ein Project sammelt mehr als einen Task. Fügen Sie auf der Seite des Projects einen zweiten Task hinzu und holen Sie dann einen Chat herein, der außerhalb begonnen hat.

### Schritt 1: Das Entscheidungsmemo zu den Frachtführern schreiben

1. Beginnen Sie auf der Seite des Projects eine neue Anfrage: Wählen Sie **+** > **Upload images and files** und wählen Sie `carrier-notes.docx`.
2. Senden Sie diesen Prompt:

```text
Read carrier-notes.docx and write a decision memo for the Pannonia Express question as a Word document named vienna-hub-carrier-decision.docx. Set out both options, the cost of each and what happens on opening day if no decision is made by the deadline.
```

**Erwartetes Ergebnis:** `vienna-hub-carrier-decision.docx` beginnt mit einem Abschnitt "Decision required": den Tarif von Pannonia Express genehmigen, 9 Prozent über Budget, oder die Ostrouten auf die Ausweichlösung AlpenLink Transport mit 30 Prozent mehr Kapazität umstellen, bis zur Frist am 20 Nov 2026, mit beiden Optionen nebeneinander in einer Tabelle. Auch dieses Memo folgt den Instructions des Projects, ohne dass Sie es sagen: eine Seite, "Vienna Hub" und ein Abschnitt **Open risks**, der die Scanner-Firmware und die Winterbeschränkungen auf der A4 nennt. Zurück auf der Seite des Projects listet **Recent** zwei Tasks, **Outputs** beide Dateien und **Project context** beide hochgeladenen Dateien.

### Schritt 2: Einen Chat außerhalb des Projects beginnen

1. Wählen Sie in der linken Navigation **New**, außerhalb des Projects, damit der Task zu keinem Project gehört.
2. Senden Sie diesen Prompt:

```text
List five questions a logistics operations lead should ask a regional freight carrier before signing a one-year contract.
```

**Erwartetes Ergebnis:** Cowork antwortet in einem neuen Task mit fünf Fragen und benennt ihn etwa "Freight Carrier Contract Due Diligence Questions". Der Task erscheint in der linken Navigation unter **Recent**, aber nicht in **Vienna Hub Launch**.

### Schritt 3: Den Chat ins Project holen

1. Öffnen Sie das Project **Vienna Hub Launch**.
2. Wählen Sie im Tab **Recent** das **+** neben dem Suchsymbol (Tooltip **Add existing chats**). Ein leeres Project zeigt stattdessen den Link **add from existing**.
3. Suchen Sie im Auswahldialog den Chat mit den Fragen an die Frachtführer, bei Bedarf mit **Search chats and tasks**, markieren Sie ihn (der Zähler springt von "0 selected" auf "1 selected") und wählen Sie **Add**.

**Erwartetes Ergebnis:** Der Chat erscheint im Tab **Recent** des Projects neben den zwei früheren Tasks und verschwindet aus der Liste **Recent** in der linken Navigation. Ein Chat, der schon zu einem anderen Project gehört, ließe sich im Auswahldialog nicht markieren.

### Schritt 4: Den Chat wieder herausnehmen

1. Öffnen Sie im Tab **Recent** des Projects das Menü **...** des Chats mit den Fragen (**Rename**, **Remove from project**, **Delete**).
2. Wählen Sie **Remove from project**. Das wirkt sofort, ohne Rückfrage.

**Erwartetes Ergebnis:** Der Chat verschwindet aus dem Tab **Recent** des Projects. Seine Unterhaltung wird nicht gelöscht: Sie steht wieder unter **Recent** in der linken Navigation.

## Übung 5: Sehen, wo die Instructions aufhören

Project Instructions gehören zum Project. Dieselbe Anfrage außerhalb des Projects bekommt nur Ihre persönlichen Instructions.

### Schritt 1: Das Status Briefing außerhalb des Projects ausführen

1. Wählen Sie in der linken Navigation **New**, außerhalb des Projects.
2. Wählen Sie **+** > **Upload images and files** und wählen Sie `vienna-hub-launch-plan.xlsx`.
3. Senden Sie denselben Prompt wie in Übung 3:

```text
Read vienna-hub-launch-plan.xlsx and write the weekly launch status brief as a Word document named vienna-hub-status-brief.docx. Cover every milestone that is at risk with its owner and due date, and compare planned and actual spend for each budget line.
```

**Erwartetes Ergebnis:** Cowork schreibt ein Briefing aus denselben Daten, aber nichts sagt ihm etwas über den Vorstand, die Grenze von einer Seite oder den Abschnitt **Open risks**, also folgt es seinen eigenen Standards. Im Testlauf begann es mit "Summary", schrieb Daten als "7 December 2026", lief über zwei Seiten und endete mit "Next steps", ohne **Open risks**. Legen Sie die beiden Dokumente nebeneinander: Nur das aus dem Project beginnt mit der Entscheidung für den Vorstand. Die neue Datei erscheint nicht unter **Outputs** von **Vienna Hub Launch**.

## Übung 6: Das Project aufräumen

### Schritt 1: Das Project umbenennen und seine Farbe ändern

1. Öffnen Sie das Project, öffnen Sie **More actions** und wählen Sie **Edit project**.
2. Ändern Sie den Namen auf `Vienna Hub Launch 2026`, wählen Sie eine andere Farbe und dann **Save**.

**Erwartetes Ergebnis:** Der Kopf der Project-Seite zeigt den neuen Namen und die neue Farbe; die linke Navigation kann noch eine Weile den alten Namen zeigen, auch nach einem Neuladen. Die Instructions bleiben unverändert: **Edit project** ändert, wie das Project aussieht, **Edit instructions**, wie Cowork daran arbeitet.

### Schritt 2: Das Project archivieren und wiederherstellen

1. Öffnen Sie **More actions** und wählen Sie **Archive**. Der Dialog lautet "Archive Vienna Hub Launch 2026? The project will be moved to Archived. You can restore it anytime." Bestätigen Sie mit **Archive**.
2. Cowork öffnet die Seite der Projects mit den Tabs **Active** und **Archived**. Wählen Sie **Archived**.
3. Öffnen Sie **Vienna Hub Launch 2026**, öffnen Sie **More actions** und wählen Sie **Restore**. Das wirkt sofort, ohne Rückfrage.

**Erwartetes Ergebnis:** Nach **Archive** verschwindet das Project aus der linken Navigation und steht unter **Archived**, wo sich seine Seite weiter öffnen lässt. Nach **Restore** ist es wieder unter **Active** und in der Navigation, mit seinen Instructions, seinen Tasks und beiden Dateien unter **Outputs**.

## Zusammenfassung

Sie haben einen Launch, der sich über mehrere Tasks erstreckt, als ein Cowork Project geführt. Die Instructions des Projects haben Publikum, Begriffe und Format einmal festgelegt, und jeder Task, der auf der Seite des Projects begann, ist ihnen gefolgt, während dieselbe Anfrage außerhalb des Projects es nicht tat. **Outputs** hat die Dateien jedes Tasks gesammelt, ein Chat von außen ist dem Project beigetreten und wieder gegangen, ohne seine Unterhaltung zu verlieren, und das Archivieren hat die fertige Arbeit aus dem Weg geräumt, ohne sie zu löschen.

Mehr dazu in [Organizing Work with Projects](../../demos/02-cowork/04-projects/readme.md) und in [Projects in Copilot Cowork verwenden](https://learn.microsoft.com/de-de/copilot/cowork/cowork-projects).

Weiter mit [Lab 04: Ihr erstes Cowork Plugin bauen](./lab-04-cowork-plugins-de.md).
