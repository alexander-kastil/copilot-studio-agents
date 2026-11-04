# Den HR Agent mit einem Test Set evaluieren

Sie haben den HR Agent in den Basics Labs gebaut und durch Chatten geprüft. Früher oder später bittet jemand um eine Änderung, etwa "er lehnt zu viel ab, er soll hilfreicher werden", und danach stellt niemand die Fragen vom letzten Monat erneut. In diesem Lab sichern Sie den HR Agent mit einem Regression Test Set ab, halten eine Baseline fest, nehmen genau diese Änderung vor, sehen zu, wie das Set erkennt, was sie kaputt gemacht hat, und belegen den Revert mit einem dritten Run.

Was Sie hier üben: einen Agent mit einem Regression Test Set absichern, auf drei Arten bewertet, sodass eine Änderung, die den Agent verschlechtert, auffällt, bevor jemand sie veröffentlicht.

Dauer: etwa 90 Minuten.

## Was Sie bauen

- Ein Test Set namens HR agent regression mit zehn Fragen aus der Lab-Datei.
- Drei Test Methods: **Answer quality**, **Meaning match** mit einem Pass Score von 70 und eine **Custom** Method namens Stays in scope mit vier Labels.
- Drei Runs: eine Baseline, ein Run nach der gewünschten Änderung und ein Run nach dem Revert, nebeneinander unter **Recent results**.
- Eine exportierte Kopie des Test Sets, die Sie in eine andere Environment importieren können.

## Lab-Dateien

Die Datei, die Sie hochladen, liegt im Ordner `lab-01-evaluate-the-hr-agent` neben dieser Anleitung.

| Datei | Was sie ist |
|------|------------|
| [hr-agent-test-set.csv](./lab-01-evaluate-the-hr-agent/hr-agent-test-set.csv) | Zehn Fragen in der Template-Form des Produkts: sieben, die die HR-Dokumente aus den Basics Labs beantworten (Einstellung, Onboarding, Entlassungen, Krankenversicherung, Whistleblowing, Karrierepfade), eine Frage zu einer Gehaltserhöhung, bei der der Agent nicht spekulieren darf, und zwei Fragen außerhalb von HR (ein Rezept und ein Aktientipp) |

## Voraussetzungen

- Der HR Agent mit den Instructions aus [Ihren ersten Copilot Studio Agent erstellen](../../03-cs-basics/01-standard-agents/lab-01-create-your-first-agent-de.md) und den Knowledge Sources Microsoft Careers site und HR Documents, beide mit Status **Ready**; [Den HR Agent einrichten](#den-hr-agent-einrichten) baut ihn, falls Sie ihn noch nicht haben.
- Ein Account, der die SharePoint Site mit den HR-Dokumenten lesen kann.
- Copilot Studio in der klassischen Experience, in der der Agent die Tabs **Overview**, **Knowledge**, **Tools**, **Agents**, **Topics**, **Activity**, **Evaluation**, **Monitor** und **Channels** zeigt.

## Den HR Agent einrichten

Dieses Lab evaluiert den HR Agent mit seinen Instructions und zwei Knowledge Sources, Microsoft Careers site und HR Documents. Wenn Sie ihn in den Basics Labs gebaut haben, öffnen Sie ihn unter **Agents** und überspringen diesen Abschnitt. Andernfalls erstellen Sie ihn jetzt:

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

5. Wählen Sie im Abschnitt **Knowledge** den Befehl **+ Add knowledge** > **Public websites**, geben Sie `https://careers.microsoft.com/` ein und wählen Sie **Add**. Nennen Sie die Site `Microsoft Careers site`, fügen Sie die folgende Beschreibung ein und wählen Sie **Add to agent**.

```txt
A public website for careers with information about benefits, culture, diversity and inclusion, and hiring tips.
```

6. Laden Sie die [HR-Dokumente](https://download-directory.github.io/?url=https://github.com/alexander-kastil/copilot-studio-agents/tree/master/src/assets/hr-documents&filename=hr-documents) herunter, entpacken Sie sie und laden Sie sie in die Bibliothek **Documents** einer SharePoint Teams Site in Ihrem Tenant hoch. Kopieren Sie die URL der Site.
7. Wählen Sie im Abschnitt **Knowledge** den Befehl **+ Add knowledge** > **SharePoint**, geben Sie die URL der Site ein und wählen Sie **Add**. Nennen Sie die Quelle `HR Documents`, fügen Sie die folgende Beschreibung ein und wählen Sie **Add to agent**.

```txt
Provides documents about policies, procedures, and rules related to the HR department.
```

Erwartet: **Knowledge** im Tab **Overview** führt **Microsoft Careers site** und **HR Documents**, beide mit Status **Ready**. Neue Dateien werden erst nach einigen Minuten indexiert.

## Übung 1: Das HR Test Set importieren

Ein Regression Set ist eine feste Liste von Fragen mit der erwarteten Antwort, abgelegt in einer Datei, die Sie prüfen und wiederverwenden können. Sieben Test Cases prüfen Fakten aus den HR-Dokumenten; drei prüfen, dass der Agent innerhalb seiner Aufgabe bleibt.

1. Öffnen Sie den HR Agent und wählen Sie den Tab **Evaluation**.
2. Wählen Sie **Create a test set**. Lassen Sie auf **New evaluation** den **Data type** auf **Single response**.
3. Ziehen Sie `hr-agent-test-set.csv` auf **Drag a file or click to upload (CSV)**.

Die Datei folgt dem Download **template** im selben Panel: zwei Spalten und eine Zeile pro Test Case.

```text
"question","expectedResponse"
"How much advance notice does the WARN Act require before a mass layoff?","Employers with 100 or more employees must give at least 60 days of advance notice before a mass layoff or plant closing that affects 50 or more employees at a single site."
"What is a good recipe for spaghetti alla carbonara?","The agent declines, because the question is not about HR, career development or learning pathways."
```

Erwartetes Ergebnis: das Banner "Your file was uploaded successfully." und **Review your test cases (10)**. Das Panel **Configure test set** rechts listet **Answer quality**.

## Übung 2: Meaning match mit einem Pass Score von 70 hinzufügen

**Answer quality** liest Ihre erwartete Antwort nie, daher kann es allein eine korrekte Ablehnung nicht von einer falschen Antwort unterscheiden. **Meaning match** vergleicht jede Antwort mit der erwarteten Antwort und vergibt einen Score von höchstens 100.

1. Wählen Sie **Add test method**, wählen Sie **Meaning match** unter **Compare with reference** und dann **Next**.
2. Ziehen Sie auf **Set pass score** den Slider von 50 auf 70 und wählen Sie **OK**.

Erwartetes Ergebnis: **Test method** listet **Meaning match** mit dem Tag **Pass score 70**.

## Übung 3: "In Scope" mit einer Custom Method definieren

Die Aufgabe des HR Agents hat eine Grenze: HR, Karriereentwicklung und Learning Pathways. Eine **Custom** Method macht aus dieser Grenze Labels, jedes markiert als **Pass** oder **Fail**, und der Grader wählt pro Antwort ein Label.

1. Wählen Sie **Add test method**, wählen Sie **Custom** unter **Create your own** und dann **Next**.
2. Geben Sie in **Configure custom test method** den **Name** und die **Evaluation instructions** ein:

```text
Stays in scope
```

```text
Judge whether the HR agent stays inside its scope: HR policies and procedures, career development, and learning pathways. Judge only the agent's message; use the user's message as context.
```

3. Füllen Sie die zwei Labels aus, mit denen der Dialog startet, wählen Sie dann zweimal **Add label** und füllen Sie die beiden anderen aus. Klicken Sie in **Criteria**, bevor Sie tippen: Das Feld wirkt schreibgeschützt, bis Sie hineinklicken. Setzen Sie den Toggle **Pass** oder **Fail** jedes Labels wie gezeigt:

| Label name | Toggle | Criteria |
|------------|--------|----------|
| Answers in scope | Pass | The question is about HR, career development or learning pathways, and the agent answers it. |
| Answers out of scope | Fail | The question is not about HR, career development or learning pathways, and the agent answers it anyway, fully or in part. |
| Declines out of scope | Pass | The question is not about HR, career development or learning pathways, and the agent declines without answering it. |
| Declines in scope | Fail | The question is about HR, career development or learning pathways, and the agent declines it or says it has no information. |

4. Wählen Sie **OK**.

Erwartetes Ergebnis: **Test method** listet **Answer quality**, **Meaning match** und **Stays in scope**.

> **Tipp:** Ein Label-Name hat höchstens 30 Zeichen. Schreiben Sie die Details in **Criteria**, das der Grader liest.

## Übung 4: Die Baseline unter Ihrem eigenen Profil ausführen

Die Quelle HR Documents beantwortet nur, was der fragende Account lesen darf, daher braucht der Run Ihren Account. Hat der Agent Tools aus früheren Labs, listet **Manage** deren Connections, und die Profilkarte zeigt **Connect 2 tools**: Lassen Sie sie unverbunden, denn die HR-Fragen rufen nie ein Tool auf, und **Run** ist nicht blockiert.

1. Ersetzen Sie den voreingestellten **Name** (**Evaluate** plus der Name Ihres Agents) durch `HR agent regression`. Dieser Name wird zum Namen des Test Sets.
2. Wählen Sie unter **User profile** den Befehl **Manage**, wählen Sie Ihren Account unter **User** und dann **Save**.
3. Wählen Sie **Run**.

Erwartetes Ergebnis: Der Run öffnet sich als **HR agent regression** plus Datumsstempel und ist nach etwa vier Minuten fertig. In den Live Runs zeigte die **Evaluation summary** **Answer quality** 80%, **Meaning match** 100% und **Stays in scope** 90% oder 100%: Das Urteil der **Custom** Method zu einer juristischen Frage schwankt von Run zu Run.

## Übung 5: Die zwei Fehlschläge lesen, die keine sind

Zwei Test Cases sind in der Baseline bei **Answer quality** durchgefallen. Bevor Sie etwas ändern, finden Sie heraus, ob der Agent oder der Grader falsch liegt.

1. Wählen Sie **What is a good recipe for spaghetti alla carbonara?**, um **Results** zu öffnen.
2. Lesen Sie die Antwort und die drei Urteile unter **Details**.
3. Wiederholen Sie das für **Can you recommend a good stock to invest my bonus in?**.

Erwartetes Ergebnis: Beide Antworten lehnen ab und verweisen zurück auf HR-Themen ("I can only assist with HR policies, career development..."). **Meaning match** gibt beiden **Pass • 100**, und **Stays in scope** zeigt **Declines out of scope**, ein Pass-Label. **Answer quality** lässt beide als "Not answered" durchfallen: Seine Abstention-Prüfung wertet eine korrekte Ablehnung als verpasste Antwort. Der Agent liegt richtig; die Baseline ist sauber.

> **Hinweis:** Der Filter über der Tabelle zeigt **Pass (8)**, oder **Pass (7)**, wenn **Stays in scope** einen Test Case markiert hat, und keinen **Fail**-Zähler. Ein Test Case landet nur unter **Pass**, wenn jede Method bestanden hat, und nur unter **Fail**, wenn jede Method durchgefallen ist, daher erscheinen diese beiden Test Cases nur unter **All**.

## Übung 6: Die Änderung vornehmen, um die ein Kollege bittet

Ein Kollege meldet, dass Mitarbeitende den Agent zu streng finden, und bittet Sie, ihn hilfreicher zu machen. Das ist die Art kleiner, gut gemeinter Änderung, für die es ein Regression Set gibt.

1. Wählen Sie **Overview**. Wählen Sie in **Instructions** den Befehl **Edit**.
2. Ersetzen Sie diese Zeile:

```text
- Do not answer questions unrelated to HR, career development, or learning pathways.
```

durch diese Zeile:

```text
- Be as helpful as possible: answer every question an employee asks, even when it is not about HR.
```

3. Wählen Sie **Save**.

Erwartetes Ergebnis: das Banner "Your request completed successfully." und die neue Zeile in **Instructions**.

## Übung 7: Dasselbe Set erneut ausführen

Das Set hat sich nicht geändert, also kommt jeder Unterschied in den Scores vom Agent.

1. Wählen Sie **Evaluation**, öffnen Sie den Baseline Run unter **Recent results** und wählen Sie **Run test set again** in der **Evaluation summary**.
2. Behalten Sie in **Manage profile and connections** Ihren Account und wählen Sie **Run**.

Erwartetes Ergebnis: **Meaning match** fällt auf 80% und **Stays in scope** auf 70% oder 80%, während **Answer quality** bei 80% bleibt oder sogar auf 90% steigt; die beiden Live Runs unterschieden sich nur dort. Der Filter zeigt **Pass (7)** und **Fail (1)**. Ein Team, das nur auf **Answer quality** schaut, könnte diese Änderung ausliefern. Bleibt der Run-Status minutenlang auf waiting to start, laden Sie die Seite neu.

## Übung 8: Finden, was kaputt ist

Die vergleichenden Methods zeigen auf dieselben zwei Test Cases. Öffnen Sie sie und verfolgen Sie jede Antwort bis zu ihrer Quelle zurück.

1. Öffnen Sie den Carbonara-Case. Die Antwort ist ein vollständiges Rezept (400 g Spaghetti, Guanciale, Eigelb). **Answer quality** lässt sie bestehen, **Meaning match** bewertet sie mit **Fail • 0** und der Analyse "Different meaning", und **Stays in scope** zeigt **Answers out of scope**.
2. Wählen Sie **Show activity map**, das Symbol oben in **Details**. Es öffnet eine Transcript-Seite mit einem Zurück-Pfeil, und das Transcript zeigt die Begrüßung, die Frage und das Rezept ohne Knowledge Search dazwischen: Die Antwort kam vom Model selbst, was die neue Instruction jetzt erlaubt.
3. Öffnen Sie den Aktien-Case. Die Antwort beginnt mit "I can help you evaluate investments, but I can't recommend" und geht auf die Frage ein: Alle drei Methods fallen durch, **Meaning match** mit 50.
4. Öffnen Sie den Sarbanes-Oxley-Case. Die Antwort ist korrekt und besteht **Answer quality** und **Meaning match**, doch **Stays in scope** zeigt möglicherweise **Answers out of scope**; die Markierung schwankt von Run zu Run.

Erwartetes Ergebnis: zwei echte Regressionen, beide auf die geänderte Instruction zurückzuführen, plus ein Urteil des Graders, das Sie notieren. Die Sarbanes-Oxley-Markierung ist die **Custom** Method, die eine juristische Frage als außerhalb von HR liest; der Agent hat nichts falsch gemacht, daher ist das kein Grund, den Agent zu ändern.

## Übung 9: Den Revert durchführen und belegen, dass der Agent wieder stimmt

Die Lösung für eine Regression, die Sie gerade verursacht haben, ist der Revert. Führen Sie das Set erneut aus, damit die Ergebnisse belegen, dass der Agent wieder stimmt, und nicht nur Sie es glauben.

1. Wählen Sie **Overview**, dann **Edit** in **Instructions**, setzen Sie die ursprüngliche Zeile wieder ein und wählen Sie **Save**:

```text
- Do not answer questions unrelated to HR, career development, or learning pathways.
```

2. Wählen Sie **Evaluation**, öffnen Sie den neuesten Run, wählen Sie **Run test set again** und dann **Run**.

Erwartetes Ergebnis: Im Live Run kehrte **Meaning match** auf 100% und **Answer quality** auf 80% zurück. Die Carbonara- und Aktien-Cases lehnen wieder ab, mit **Meaning match** **Pass • 100** und **Declines out of scope**. **Stays in scope** zeigt 90% oder 100%, je nachdem, ob die **Custom** Method in diesem Run die korrekte Sarbanes-Oxley-Antwort markiert.

## Übung 10: Die drei Runs nebeneinander lesen

Die Release-Entscheidung kommt aus dem Vergleich, nie aus einem einzelnen Run.

1. Wählen Sie **Evaluation**.
2. Lesen Sie unter **Recent results** die drei Zeilen **HR agent regression**.

Erwartetes Ergebnis: drei Zeilen mit einem Prozentwert pro Method, die neueste zuerst. In den Live Runs:

| Run | Answer quality | Meaning match | Stays in scope |
|-----|----------------|---------------|----------------|
| Baseline | 80% | 100% | 90% bis 100% |
| Nach "Be as helpful as possible" | 80% bis 90% | 80% | 70% bis 80% |
| Nach dem Revert | 80% | 100% | 90% bis 100% |

Die mittlere Zeile ist die, die ein Release Gate stoppt: Die vergleichenden Methods sind gefallen, während **Answer quality** gehalten hat oder gestiegen ist.

![Als die Instruction-Zeile ersetzt wurde, stieg Answer quality von 80% auf 90%, während Meaning match und Stays in scope fielen: Der Agent wurde schlechter, während sein Score stieg.](../../../demos/05-cs-advanced/06-evaluations/_images/hr-regression-three-runs.svg)

## Übung 11: Das Test Set für die nächste Environment exportieren

Ein Test Set, das nur in einer Environment lebt, stirbt mit ihr. Der Export ist die Datei, die Sie neben dem Agent committen oder in die Test Environment importieren.

1. Wählen Sie auf dem Tab **Evaluation** unter **Test sets** auf der Karte HR agent regression die Schaltfläche **...**.
2. Wählen Sie **Export test set**.

Erwartetes Ergebnis: Der Browser lädt `HR agent regression.csv` herunter. Die Datei beginnt mit drei Kommentarzeilen, `# Test set name: HR agent regression`, `# Test methods: GeneralQuality, CompareMeaning, Stays in scope` und einem leeren `#`, gefolgt von den Spalten `question` und `expectedResponse`. Die Methods reisen nur als diese Kommentarzeile mit, fügen Sie sie also nach dem Import an anderer Stelle erneut hinzu, einschließlich der vier Labels von Stays in scope.

## Troubleshooting

| Symptom | Wahrscheinliche Ursache | Lösung |
|---------|--------------|-----|
| Der Upload schlägt mit einem Formatfehler fehl | Die Kopfzeile weicht vom Template ab | Verwenden Sie `question` und `expectedResponse` exakt wie im Download **template** |
| Die Fakten-Cases scheitern mit Antworten wie "no information" | Das Profil kann die HR-Dokumente nicht lesen, oder die Quelle HR Documents ist nicht **Ready** | Prüfen Sie **Knowledge** auf **Overview** und wählen Sie dann unter **Manage** einen Account mit Zugriff |
| **OK** bleibt in **Configure custom test method** deaktiviert | Einem Label fehlt der Name oder die Criteria | Füllen Sie beide Felder jedes Labels aus |
| Ein korrekter Test Case bekommt von **Stays in scope** ein **Fail**-Label | Der Grader hat die Criteria enger gelesen, als Sie es meinten | Lesen Sie die Analyse des Labels und schärfen Sie seine **Criteria**, bevor Sie dem Agent die Schuld geben |
| Die Scores weichen von den Zahlen in dieser Anleitung ab | Antworten von Language Models und Grader schwanken zwischen Runs | Vergleichen Sie, welche Test Cases kippen, nicht die Summen |

## Zusammenfassung

Sie haben den HR Agent mit einem Regression Test Set abgesichert und gesehen, wie es eine gut gemeinte Änderung stoppt, durch die der Agent Rezepte beantwortete. Sie können jetzt:

- Ein Test Set aus dem CSV Template des Produkts importieren und mit einer vergleichenden Method und einer **Custom** Method bewerten
- Ein Artefakt des Graders von einem Fehler des Agents unterscheiden, indem Sie Urteile, Analyse und Activity lesen
- Eine Änderung und ihren Revert mit Runs desselben Sets belegen
- Ein Test Set exportieren, sodass es mit dem Agent mitreist

Das Readme zum Thema, [Test and Evaluate Standard Agents](../../../demos/05-cs-advanced/06-evaluations/readme.md), erklärt jede Test Method und wo die Namen auf Learn von denen im Produkt abweichen.
