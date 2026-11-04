# Einen Agent aus dem Terminal bauen und migrieren

![Mit Claude Code links und Copilot Studio rechts wird der Agent Grey Logistics IT Help Desk nach src/cs-schema/agents geklont, vom Advisor mit Findings der Stufen High, Medium und Low geprüft, um ein validiertes VPN Topic ergänzt, als Draft gepullt und gepusht, veröffentlicht und per Point Test getestet und schließlich von mcs-assistant:migrate zu GH-Grey Logistics IT Help Desk auf dem Microsoft Copilot Harness migriert, während das Original unverändert bleibt.](../../../demos/07-cs-maintaining/05-agentic-building/_images/build-and-migrate-from-the-terminal-overview.svg)

Der Agent Grey Logistics IT Help Desk aus Modul 3 braucht ein neues Topic, ein Review und später den Umzug auf den Microsoft Copilot Harness. Im Portal ist das ein Nachmittag voller Klicks, den niemand wiederholen kann. In diesem Lab übergeben Sie alle drei Aufgaben an Claude Code mit den beiden Copilot Studio Plugins, und jede Änderung landet als Datei, die Sie per Diff vergleichen können.

Was Sie hier üben: den Loop aus Clone, Author, Validate, Pull, Push, Publish und Test mit `copilot-studio`, danach eine Migration von Standard zu Microsoft Copilot mit `mcs-assistant`.

Dauer: etwa 60 Minuten.

## Was Sie bauen

- Eine lokale `.mcs.yml` Kopie des Agents Grey Logistics IT Help Desk, aus Ihrer Environment geklont.
- Ein Advisor Review des Agents, von dem Sie ein Finding übernehmen.
- Ein neues Topic zur VPN-Fehlerbehebung, validiert, als Draft gepusht und veröffentlicht.
- Einen Point Test gegen den veröffentlichten Agent.
- Eine migrierte Kopie, `GH-Grey Logistics IT Help Desk`, auf dem Microsoft Copilot Harness.

## Voraussetzungen

- Den Standard Agent Grey Logistics IT Help Desk aus [Create a Standard IT Help Desk Agent](../../../demos/03-cs-basics/01-standard-agents/demo-create-a-standard-agent.md) oder einen beliebigen Standard Agent in einer Environment, in der Sie die Maker-Rolle haben. Verwenden Sie eine Trial oder Sandbox Environment. Wenn Sie keinen haben, erstellen Sie einen in [Copilot Studio](https://copilotstudio.microsoft.com): Wählen Sie auf **Home** den Befehl **Other ways to build**, dann den Eintrag **Agent** mit dem Badge **Standard**, und nennen Sie ihn `Grey Logistics IT Help Desk`.
- Claude Code, Git, Node.js 18 oder neuer sowie VS Code mit der Copilot Studio Extension.
- Das .NET SDK und die Power Platform CLI 2.9.3 oder neuer für Übung 6.
- Dieses Repo, auf Ihren Rechner geklont. Das [Topic Readme](../../../demos/07-cs-maintaining/05-agentic-building/readme.md#prerequisites) listet die Installationsbefehle.

## Übung 1: Beide Plugins installieren und eines aktiv lassen

Die `.claude/settings.json` des Repos registriert beide Marketplaces und aktiviert beide Plugins, das Öffnen des Ordners ist also die Installation. Sie schalten `mcs-assistant` vorerst ab, weil dessen Migrationsbefehl warnt, dass sich die beiden Plugins in die Quere kommen können.

1. Öffnen Sie den Repo-Ordner in Claude Code und bestätigen Sie den Workspace Trust Dialog.
2. Führen Sie `/plugin` aus und prüfen Sie, dass beide Marketplaces und beide Plugins aufgelistet sind. Fehlen die Plugins, installieren Sie sie für dieses Projekt aus einem Terminal im Repo-Ordner.

```bash
claude plugin install copilot-studio@skills-for-copilot-studio --scope project
claude plugin install mcs-assistant@copilot-studio-plugin --scope project
```

3. Legen Sie im Repo-Root die Datei `.claude/settings.local.json` mit folgendem Inhalt an und starten Sie danach eine neue Claude Code Session.

```json
{
  "enabledPlugins": {
    "mcs-assistant@copilot-studio-plugin": false
  }
}
```

4. Tippen Sie `@` in den Prompt und suchen Sie die vier Sub-Agents.

Erwartet: `/plugin` zeigt `mcs-assistant` als deaktiviert, und die Autovervollständigung listet `copilot-studio:Copilot Studio Manage`, `Copilot Studio Author`, `Copilot Studio Test` und `Copilot Studio Advisor`.

Außer `/copilot-studio:create-eval` hat das Plugin keine Slash Commands. Sie formulieren Ihre Anfrage in normaler Sprache, und der Session Hook des Plugins leitet jede Anfrage an einen Sub-Agent weiter: Klonen, Pullen und Pushen an Manage, Reviews an Advisor, Änderungen an Author und Tests an Test.

## Übung 2: Den Agent klonen

Das Plugin arbeitet nur mit einem Agent, der bereits in einer Environment existiert; aus einem leeren Ordner baut es nie. Das Klonen lädt die Agent-Definition als YAML herunter und speichert die Verbindung zur Environment.

1. Senden Sie folgenden Prompt.

```text
Clone my Copilot Studio agent Grey Logistics IT Help Desk into src/cs-schema/agents.
```

2. Melden Sie sich an, wenn sich der Browser öffnet. Fragt Claude, welche Environment oder welchen Agent Sie meinen, wählen Sie Ihre Demo Environment und **Grey Logistics IT Help Desk**.
3. Öffnen Sie den neuen Agent-Ordner und sehen Sie sich `agent.mcs.yml` und den Ordner `topics` an.
4. Committen Sie den Klon, damit die nächsten Übungen nur Ihre eigenen Änderungen zeigen.

```bash
git add "src/cs-schema/agents/Grey Logistics IT Help Desk"
git commit -m "Clone Grey Logistics IT Help Desk"
```

Erwartet: `src/cs-schema/agents/Grey Logistics IT Help Desk/` enthält `agent.mcs.yml`, `settings.mcs.yml`, einen Ordner `topics` mit den System Topics und einen Ordner `.mcs` mit `conn.json`. Enthält das Repo bereits geklonte Agents, übernimmt Claude Tenant und Environment aus deren `.mcs/conn.json` Dateien und fragt nicht nach.

> **Hinweis:** Clone, Pull und Push laufen über den Language Server der Copilot Studio VS Code Extension. Die Extension muss installiert sein, VS Code muss nicht geöffnet sein. Die Anmeldung im Browser erfolgt einmal, das Token wird danach etwa 90 Tage lang still erneuert.

## Übung 3: Den Advisor um ein Review bitten

Der Advisor berät nur. Er liest die Dateien des Agents, prüft sie gegen die Patterns und bekannten Fallstricke des Plugins und ordnet seine Findings nach Gewicht, sodass Sie entscheiden, was sich ändert.

1. Senden Sie folgenden Prompt.

```text
Review my agent Grey Logistics IT Help Desk for improvements and known pitfalls.
```

2. Lesen Sie die Findings und notieren Sie zu jedem die Severity, die Datei und die Zeile.
3. Wählen Sie ein Finding und antworten Sie, dass Sie es übernehmen, zum Beispiel `I accept finding 1.`

Erwartet: ein Review, gruppiert nach **High**, **Medium** und **Low**, jedes Finding mit der Datei und Zeile, auf die es sich bezieht, einem Fix und, wo eines passt, dem Pattern aus der Bibliothek. Wenn Sie ein Finding übernehmen, setzt Claude es um, und `git status --short` listet die geänderte Datei im Agent-Ordner.

## Übung 4: Ein Topic erstellen und validieren

Der Author arbeitet mit dem Schema und den Templates des Plugins und prüft seine Datei selbst mit dem Schema Validator. Sie beschreiben das Topic in einfachen Worten und validieren danach den ganzen Agent mit dem Language Server, also mit derselben Prüfung, die auch die Extension ausführt.

1. Senden Sie folgenden Prompt.

```text
Create a topic that helps employees whose VPN won't connect. Add three trigger phrases, ask which operating system they use, and give numbered steps for Windows and for macOS.
```

2. Öffnen Sie die neue Datei unter `topics` und lesen Sie die Trigger Phrases, den Question Node und die Condition.
3. Validieren Sie den Agent.

```text
Validate all topics in my agent
```

4. Führen Sie `git status --short` aus, um zu sehen, was der Coding Agent geändert hat.

Erwartet: eine neue Topic-Datei wie `topics/VpnWontConnect.mcs.yml` mit drei Trigger Phrases und einer Frage nach **Windows** oder **macOS**, eine Validierung mit 0 Errors und 0 Warnings über alle `.mcs.yml` Dateien und ein Status, der nur das neue Topic und die in Übung 3 geänderte Datei listet.

## Übung 5: Pushen, veröffentlichen und testen

Ein Push erzeugt einen Draft, den nur der Authoring Canvas, der Test-Tab und Evaluations sehen. Point Tests und alle Channels sehen den Agent erst, wenn Sie ihn veröffentlichen.

1. Pullen Sie zuerst, dann pushen Sie.

```text
Pull my agent, then push my changes.
```

2. Öffnen Sie den Agent in Copilot Studio, prüfen Sie, dass das VPN Topic unter **Topics** mit dem Trigger **By agent** gelistet ist, und senden Sie `My VPN won't connect on my laptop` im Bereich **Test your agent**.
3. Wählen Sie **Publish** und danach **Publish** im Dialog **Publish this agent**.
4. Senden Sie einen Point Test an den veröffentlichten Agent.

```text
Send "My VPN won't connect on my laptop" to the published agent
```

Erwartet: Pull und Push liefern beide `status: ok`, und der Push validiert jede Datei, bevor er sie sendet. Der Test-Bereich fragt **Which operating system do you use?** mit **Windows** und **macOS** und antwortet mit den nummerierten Schritten. Nach dem Veröffentlichen liefert der Point Test die Frage nach dem Betriebssystem aus Ihrem Topic.

> **Hinweis:** Antwortet der Test-Bereich, dass er bei VPN-Problemen nicht helfen kann, listen die Instructions des Agents auf, was er tun darf, und lassen VPN weg, sodass der Orchestrator das Topic nie wählt. Ein Finding, das Sie in Übung 3 übernommen haben, kann das auslösen. Fügen Sie die Antwort in Claude ein und bitten Sie Claude, das zu beheben: Claude ergänzt die VPN-Fehlerbehebung in den Instructions, und mit dem nächsten Pull und Push antwortet das Topic.

> **Hinweis:** Ein Push über veraltete Dateien schlägt mit `ConcurrencyVersionMismatch` fehl; führen Sie Pull und Push erneut aus. Ein Point Test gegen einen Agent mit Microsoft Entra ID Authentication läuft über das Copilot Studio SDK und braucht eine Public Client App Registration (Redirect URI `http://localhost`, **Allow public client flows** eingeschaltet, delegierte Berechtigung **Power Platform API** > **CopilotStudio.Copilots.Invoke**) sowie eine Anmeldung im Browser. Claude führt Sie mit dem Skill `test-auth` des Plugins durch beides.

## Übung 6: Den Agent auf den Microsoft Copilot Harness migrieren

`mcs-assistant` migriert einen Standard Agent in einen neuen Agent in derselben Environment, das Original bleibt also unangetastet. Das Plugin legt den leeren Ziel-Agent an, beschreibt den Quell-Agent und bittet Sie, einen Migrationsplan freizugeben. Erst dann wandelt es die unterstützten Actions in Tools um, baut den neuen Agent und pusht ihn.

1. Prüfen Sie die Version der Power Platform CLI in der ersten Zeile der Ausgabe.

```powershell
pac
```

2. Legen Sie ein PAC Auth Profile für Ihre Environment an. Verwenden Sie die Dataverse URL, die in der `.mcs/conn.json` des Klons als `DataverseEndpoint` steht; die Environment ID `Default-<guid>` wird mit "No Dataverse organization was found" abgelehnt.

```powershell
pac auth create --environment https://<your-org>.crm.dynamics.com/
```

3. Tauschen Sie die Plugins in `.claude/settings.local.json` und starten Sie danach eine neue Claude Code Session.

```json
{
  "enabledPlugins": {
    "copilot-studio@skills-for-copilot-studio": false
  }
}
```

4. Starten Sie die Migration.

```text
/mcs-assistant:migrate Grey Logistics IT Help Desk
```

5. Wenn das Plugin warnt, dass das Standard Plugin installiert ist, wählen Sie Fortfahren; das Plugin ist für diese Session deaktiviert.
6. Geben Sie dem neuen Agent einen Display Name mit höchstens 30 Zeichen, etwa `GH-Grey Logistics IT Help Desk`, und übernehmen Sie das Default Publisher Prefix `catmgr` oder geben Sie Ihr eigenes ein. Der vorgeschlagene Name `<name> (migrated)` ist für die meisten Namen zu lang, und das Plugin sagt Ihnen das.
7. Lesen Sie den Migrationsplan: die Capabilities-Tabelle, die Entscheidung für jede Action und die vorgeschlagene Behandlung jeder Lücke. Eine Action, die das Plugin nicht umwandeln kann, etwa Computer Use, ist als manuell markiert. Tragen Sie Änderungen in die Freitext-Antwort ein, bis der Plan stimmt, und antworten Sie dann mit **Approve**.
8. Bestätigen Sie den Pull in den neuen Agent-Ordner, wenn Claude vor dem Push nachfragt. Schlägt der Push mit `A record with the specified key values does not exist in connectionreference entity` fehl, nutzt der Plan einen Connector, für den es in der Environment noch keine Connection Reference gibt. Bitten Sie Claude, sie für die bestehende Connection anzulegen oder das Tool auszulassen, und pushen Sie erneut.
9. Öffnen Sie den migrierten Agent in Copilot Studio, prüfen Sie, dass **Skills** den VPN Skill listet, wählen Sie dann **Preview** und senden Sie `My VPN won't connect on my laptop`.

Erwartet: ein neuer Ordner `GH-Grey Logistics IT Help Desk` neben dem Quell-Agent, eine Datei `MIGRATION-PLAN-<id>.md` im übergeordneten Ordner, die jeden Schritt festhält, und ein neuer Microsoft Copilot Harness Agent mit diesem Namen in Ihrer Environment, mit den migrierten Instructions und dem VPN Topic als Skill `vpn-wont-connect`. In **Preview** zeigt die Schrittliste **Used skill vpn-wont-connect**, und der Agent fragt nach Windows oder macOS. Der ursprüngliche Standard Agent ist unverändert.

> **Hinweis:** Zeigt `pac` eine Version unter 2.9.3, obwohl Sie das .NET Tool installiert haben, steht eine ältere MSI-Installation der Power Platform CLI zuerst in Ihrem PATH. Deinstallieren Sie **Microsoft Power Platform CLI** unter **Settings** > **Apps** oder stellen Sie `%USERPROFILE%\.dotnet\tools` an den Anfang Ihres PATH.

> **Hinweis:** Bleibt **Skills** leer und beantwortet **Preview** die VPN-Frage mit allgemeinen Schritten, hat der Push den Skill nicht gesendet. Sagen Sie Claude, was Sie sehen; Claude baut den Skill im Format `SKILL.md` und `skill.mcs.yml` neu auf und pusht erneut.

> **Tipp:** Sie können jederzeit aufhören und `/mcs-assistant:migrate` später erneut ausführen; der Befehl findet die Datei `MIGRATION-PLAN-<id>.md` und macht beim nächsten offenen Schritt weiter.

## Aufräumen

- Löschen Sie `.claude/settings.local.json` oder behalten Sie das Plugin, das Sie als Nächstes verwenden.
- Löschen Sie `GH-Grey Logistics IT Help Desk` in Copilot Studio, wenn Sie den Agent nicht mehr brauchen, und entfernen Sie seinen lokalen Ordner und die Datei `MIGRATION-PLAN-<id>.md`.
