# Build and Migrate an Agent from the Terminal

![With Claude Code on the left and Copilot Studio on the right, the Grey Logistics IT Help Desk agent is cloned into src/cs-schema/agents, reviewed by the Advisor with High, Medium and Low findings, given a validated VPN topic, pulled and pushed as a draft, published and point tested, then migrated by mcs-assistant:migrate into GH-Grey Logistics IT Help Desk on the GitHub Copilot harness while the original stays unchanged.](./_images/build-and-migrate-from-the-terminal-overview.svg)

The Grey Logistics IT Help Desk agent from module 3 needs a new topic, a review and, eventually, a move to the GitHub Copilot harness. In the portal that is an afternoon of clicking that nobody can replay. In this demo you hand all three jobs to Claude Code with the two Copilot Studio plugins, and every change lands as a file you can diff.

What you practice here: the clone, author, validate, pull, push, publish and test loop with `copilot-studio`, then a Standard-to-GitHub-Copilot migration with `mcs-assistant`.

Duration: about 60 minutes.

## What you'll build

- A local `.mcs.yml` copy of the Grey Logistics IT Help Desk agent, cloned from your environment.
- An Advisor review of the agent, with one finding applied.
- A new VPN troubleshooting topic, validated, pushed as a draft and published.
- A point test against the published agent.
- A migrated copy, `GH-Grey Logistics IT Help Desk`, on the GitHub Copilot harness.

## Prerequisites

- The Grey Logistics IT Help Desk Standard agent from [Create a Standard IT Help Desk Agent](../../03-cs-basics/01-standard-agents/demo-create-a-standard-agent.md), or any Standard agent in an environment where you hold the maker role. Use a trial or sandbox environment.
- Claude Code, Git, Node.js 18 or later, and VS Code with the Copilot Studio extension.
- The .NET SDK and the Power Platform CLI 2.9.3 or later for Exercise 6.
- This repo cloned to your machine. The [topic readme](./readme.md#prerequisites) lists the install commands.

## Exercise 1: Install both plugins and keep one active

The repo's `.claude/settings.json` registers both marketplaces and enables both plugins, so opening the folder is the install. You switch off `mcs-assistant` for now, because its migration command warns that the two plugins may conflict.

1. Open the repo folder in Claude Code and accept the workspace trust dialog.
2. Run `/plugin` and confirm that both marketplaces and both plugins are listed. If the plugins are missing, install them for this project from a terminal in the repo folder.

```bash
claude plugin install copilot-studio@skills-for-copilot-studio --scope project
claude plugin install mcs-assistant@copilot-studio-plugin --scope project
```

3. Create `.claude/settings.local.json` in the repo root with the following content, then start a new Claude Code session.

```json
{
  "enabledPlugins": {
    "mcs-assistant@copilot-studio-plugin": false
  }
}
```

4. Type `@` in the prompt and look for the four sub-agents.

Expected: `/plugin` shows `mcs-assistant` as disabled, and the autocomplete lists `copilot-studio:Copilot Studio Manage`, `Copilot Studio Author`, `Copilot Studio Test` and `Copilot Studio Advisor`.

Apart from `/copilot-studio:create-eval`, the plugin has no slash commands. You ask in plain language, and the plugin's session hook routes each request to a sub-agent: cloning, pulling and pushing to Manage, reviews to Advisor, edits to Author and tests to Test.

## Exercise 2: Clone the agent

The plugin works only on an agent that already exists in an environment; it never builds from an empty folder. Cloning pulls the agent definition down as YAML and records the connection to the environment.

1. Send the following prompt.

```text
Clone my Copilot Studio agent Grey Logistics IT Help Desk into src/cs-schema/agents.
```

2. Sign in when the browser opens. If Claude asks which environment or agent you mean, pick your demo environment and **Grey Logistics IT Help Desk**.
3. Open the new agent folder and look at `agent.mcs.yml` and the `topics` folder.
4. Commit the clone, so that the next exercises show only your own changes.

```bash
git add "src/cs-schema/agents/Grey Logistics IT Help Desk"
git commit -m "Clone Grey Logistics IT Help Desk"
```

Expected: `src/cs-schema/agents/Grey Logistics IT Help Desk/` holds `agent.mcs.yml`, `settings.mcs.yml`, a `topics` folder with the system topics and a `.mcs` folder with `conn.json`. When the repo already holds cloned agents, Claude takes the tenant and environment from their `.mcs/conn.json` files and doesn't ask.

> **Note:** Clone, pull and push run through the Copilot Studio VS Code extension's language server. The extension has to be installed; VS Code doesn't have to be open. The browser sign-in happens once, and the token is refreshed silently for about 90 days.

## Exercise 3: Ask the Advisor for a review

The Advisor only advises. It reads the agent's files, checks them against the plugin's patterns and known pitfalls, and ranks what it finds, so you decide what changes.

1. Send the following prompt.

```text
Review my agent Grey Logistics IT Help Desk for improvements and known pitfalls.
```

2. Read the findings and note the severity, file and line of each one.
3. Pick one finding and reply that you accept it, for example `I accept finding 1.`

Expected: a review grouped into **High**, **Medium** and **Low**, each finding with the file and line it refers to, a fix, and the pattern from the library where one fits. When you accept a finding, Claude applies it, and `git status --short` lists the changed file under the agent folder.

## Exercise 4: Author and validate a topic

The Author works from the plugin's schema and templates and checks its own file with the schema validator. You describe the topic in plain words, then validate the whole agent with the language server, the same check the extension runs.

1. Send the following prompt.

```text
Create a topic that helps employees whose VPN won't connect. Add three trigger phrases, ask which operating system they use, and give numbered steps for Windows and for macOS.
```

2. Open the new file under `topics` and read the trigger phrases, the question node and the condition.
3. Validate the agent.

```text
Validate all topics in my agent
```

4. Run `git status --short` to see what the coding agent changed.

Expected: a new topic file such as `topics/VpnWontConnect.mcs.yml` with three trigger phrases and a **Windows** or **macOS** question, a validation with 0 errors and 0 warnings across all `.mcs.yml` files, and a status that lists only the new topic and the file you changed in Exercise 3.

## Exercise 5: Push, publish and test

A push creates a draft that only the authoring canvas, the Test tab and evaluations can see. Point tests and every channel see the agent only after you publish.

1. Pull first, then push.

```text
Pull my agent, then push my changes.
```

2. Open the agent in Copilot Studio, check that the VPN topic is listed under **Topics** with the trigger **By agent**, and send `My VPN won't connect on my laptop` in the **Test your agent** pane.
3. Select **Publish**, then **Publish** in the **Publish this agent** dialog.
4. Send a point test to the published agent.

```text
Send "My VPN won't connect on my laptop" to the published agent
```

Expected: pull and push both return `status: ok`, and the push validates every file before it sends them. The Test pane asks **Which operating system do you use?** with **Windows** and **macOS** and answers with the numbered steps. After publishing, the point test returns the operating system question from your topic.

> **Note:** If the Test pane answers that it can't help with VPN problems, the agent's instructions list what it may do and leave VPN out, so the orchestrator never picks the topic. A finding you accepted in Exercise 3 can cause this. Paste the answer into Claude and ask it to fix it: it adds VPN troubleshooting to the instructions, and the next pull and push make the topic answer.

> **Note:** A push over stale files fails with `ConcurrencyVersionMismatch`; run pull and push again. A point test of an agent with Microsoft Entra ID authentication goes through the Copilot Studio SDK and needs a public client app registration (redirect URI `http://localhost`, **Allow public client flows** on, delegated permission **Power Platform API** > **CopilotStudio.Copilots.Invoke**) plus a browser sign-in. Claude walks you through both with the plugin's `test-auth` skill.

## Exercise 6: Migrate the agent to the GitHub Copilot harness

`mcs-assistant` migrates a Standard agent into a new agent in the same environment, so the original stays untouched. It creates the empty target agent, describes the source agent and asks you to approve a migration plan. Only then does it convert the supported actions into tools, build the new agent and push it.

1. Check the Power Platform CLI version in the first line of the output.

```powershell
pac
```

2. Create a PAC auth profile for your environment. Use the Dataverse URL, which the clone's `.mcs/conn.json` holds as `DataverseEndpoint`; the `Default-<guid>` environment ID is rejected with "No Dataverse organization was found".

```powershell
pac auth create --environment https://<your-org>.crm.dynamics.com/
```

3. Swap the plugins in `.claude/settings.local.json`, then start a new Claude Code session.

```json
{
  "enabledPlugins": {
    "copilot-studio@skills-for-copilot-studio": false
  }
}
```

4. Start the migration.

```text
/mcs-assistant:migrate Grey Logistics IT Help Desk
```

5. When it warns that the Standard plugin is installed, choose to continue; the plugin is disabled for this session.
6. Give the new agent a display name of at most 30 characters, such as `GH-Grey Logistics IT Help Desk`, and accept the default publisher prefix `catmgr` or type your own. The suggested `<name> (migrated)` is too long for most names, and the plugin tells you so.
7. Read the migration plan: the capabilities table, the decision for each action and the proposed handling of each gap. An action the plugin can't convert, such as computer use, is marked manual. Type changes into the free-text answer until the plan is right, then reply **Approve**.
8. Confirm the pull into the new agent folder when Claude asks before the push. If the push fails with `A record with the specified key values does not exist in connectionreference entity`, the plan uses a connector that has no connection reference in the environment yet. Ask Claude to create it for the existing connection, or to skip the tool, and push again.
9. Open the migrated agent in Copilot Studio, check that **Skills** lists the VPN skill, then select **Preview** and send `My VPN won't connect on my laptop`.

Expected: a new folder `GH-Grey Logistics IT Help Desk` next to the source agent, a `MIGRATION-PLAN-<id>.md` file in the parent folder that records each step, and a new GitHub Copilot agent of that name in your environment with the migrated instructions and the VPN topic turned into the skill `vpn-wont-connect`. In **Preview**, the step list shows **Used skill vpn-wont-connect** and the agent asks for Windows or macOS. The original Standard agent is unchanged.

> **Note:** If `pac` prints a version below 2.9.3 although you installed the .NET tool, an older MSI install of the Power Platform CLI comes first on your PATH. Uninstall **Microsoft Power Platform CLI** under **Settings** > **Apps**, or move `%USERPROFILE%\.dotnet\tools` to the front of your PATH.

> **Note:** If **Skills** stays empty and **Preview** answers the VPN question with generic steps, the push didn't send the skill. Tell Claude what you see; it rebuilds the skill in the `SKILL.md` and `skill.mcs.yml` format and pushes again.

> **Tip:** Stop at any time and run `/mcs-assistant:migrate` again later; it finds the `MIGRATION-PLAN-<id>.md` file and resumes at the next unfinished step.

## Clean up

- Delete `.claude/settings.local.json`, or keep the plugin you use next.
- Delete `GH-Grey Logistics IT Help Desk` in Copilot Studio if you don't need it, and remove its local folder and the `MIGRATION-PLAN-<id>.md` file.
