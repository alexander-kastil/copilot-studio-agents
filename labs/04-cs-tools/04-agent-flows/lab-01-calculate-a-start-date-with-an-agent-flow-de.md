# Ein Startdatum mit einem Agent Flow berechnen

Fragen Sie ein Language Model nach dem Datum in sechs Wochen, bekommen Sie womöglich jedes Mal eine andere Antwort, weil das Model Kalenderrechnungen schätzt. Eine HR-Antwort zum frühesten Startdatum einer Kandidatin muss jedes Mal gleich ausfallen. In diesem Lab verlagern Sie diese Berechnung in einen Agent Flow, also eine feste Abfolge von Schritten, und lassen den HR Agent ihn als Tool aufrufen.

Dauer: etwa 15 Minuten.

## Was Sie bauen

- Einen Agent Flow namens `Calculate earliest start date`, der eine Kündigungsfrist in Wochen entgegennimmt und das Datum zurückgibt, das so viele Wochen nach heute liegt.
- Den Flow als Tool im HR Agent, den Generative Orchestration aus einer normalen Frage heraus aufruft.

## Voraussetzungen

- Den HR Agent aus den vorigen Labs oder einen beliebigen Standard Agent mit eingeschalteter Generative Orchestration.
- Eine Environment, in der Sie Agent Flows erstellen dürfen. Der Flow nutzt nur Built-in Actions und braucht deshalb keine Connection.

## Aufgabe 1: Den Flow bauen

Der Trigger **When an agent calls the flow** macht einen Flow für einen Agent aufrufbar, und seine Inputs sind die Werte, die der Agent liefern muss. Die Datumsrechnung läuft in einer Built-in Action, deshalb liefert derselbe Input immer dasselbe Datum.

1. Öffnen Sie **Workflows**, klappen Sie den Pfeil neben **New workflow** auf und wählen Sie **Agent flows**.
2. Fügen Sie den Trigger **When an agent calls the flow** hinzu. Wählen Sie **Add an input**, dann **Number**, und nennen Sie den Input:

```text
NoticeWeeks
```

3. Wählen Sie unter dem Trigger **Insert a new action**, suchen Sie nach **Get future time** (Date Time) und fügen Sie die Action hinzu. Setzen Sie **Interval** auf das Token `NoticeWeeks` und **Time unit** auf **Week**.
4. Fügen Sie die Action **Respond to the agent** mit einem **Text** Output namens `StartDate` hinzu und setzen Sie ihn auf das Token **Future time** des vorigen Schritts. Prüfen Sie in ihren Einstellungen unter **Networking**, dass **Asynchronous response** auf **Off** steht.
5. Benennen Sie den Flow wie unten um, öffnen Sie **Flow checker**, beheben Sie rote Karten und wählen Sie dann **Publish**.

```text
Calculate earliest start date
```

6. Wählen Sie **Test**, dann **Manually**, geben Sie für **NoticeWeeks** den Wert `6` ein und wählen Sie **Run flow**.

Erwartet: Jede Karte zeigt ein grünes Häkchen, und der Output von **Respond to the agent** enthält ein `StartDate` sechs Wochen nach heute.

## Aufgabe 2: Den Flow als Tool zum Agent hinzufügen

Der Orchestrator kennt den Flow nur über seinen Namen und seine Beschreibung. Deshalb sagt die Beschreibung, was der Flow tut, was er braucht und was er nicht tut.

1. Öffnen Sie den HR Agent und gehen Sie auf die Seite **Tools**.
2. Wählen Sie **Add a tool**, dann **Flow**, dann **Calculate earliest start date** und schließlich **Add and configure**.
3. Ersetzen Sie die Beschreibung durch diesen Text und wählen Sie **Save**:

```text
Calculates the earliest start date of a new hire from their notice period in weeks, counted from today. Needs the notice period in weeks. Does not check public holidays or the hiring manager's calendar.
```

Erwartet: **Calculate earliest start date** erscheint in der Tool-Liste des Agents mit Ihrer Beschreibung und dem Input `NoticeWeeks`.

## Aufgabe 3: Den Agent fragen

1. Öffnen Sie den Test Pane und wählen Sie oben das Kartensymbol, um die Activity Map einzublenden.
2. Senden Sie diese Nachricht:

```text
A candidate has a 6 week notice period. What is the earliest date they can start?
```

Erwartet: Die Activity Map zeigt einen Knoten **Calculate earliest start date** mit `NoticeWeeks` gleich 6, und der Agent antwortet mit demselben Datum, das der Flow in Aufgabe 1 geliefert hat.

## Troubleshooting

| Symptom | Wahrscheinliche Ursache | Lösung |
| --- | --- | --- |
| Der Flow erscheint nicht unter **Flow** in **Add a tool** | Die Action **Respond to the agent** fehlt, oder der Flow ist nicht veröffentlicht | Fügen Sie die Action hinzu, führen Sie **Flow checker** aus und wählen Sie dann **Publish** |
| Der Agent berechnet das Datum selbst und ruft den Flow nie auf | Generative Orchestration ist ausgeschaltet, oder die Beschreibung passt nicht zur Frage | Prüfen Sie **Settings** > **Generative AI** und vergleichen Sie dann die Beschreibung mit der Frage |
