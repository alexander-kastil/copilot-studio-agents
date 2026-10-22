# Build and Migrate an Agent from the Terminal

The Contoso IT Help Desk agent from module 3 needs a new topic, a review and, eventually, a move to the GitHub Copilot harness. In the portal that is an afternoon of clicking that nobody can replay. In this demo you hand all three jobs to Claude Code with the two Copilot Studio plugins, and every change lands as a file you can diff.

What you practice here: the clone, author, validate, pull, push, publish and test loop with `copilot-studio`, then a Standard-to-GitHub-Copilot migration with `mcs-assistant`.

Duration: about 60 minutes.

## What you'll build

- A local `.mcs.yml` copy of the Contoso IT Help Desk agent, cloned from your environment.
- An Advisor review of the agent against the plugin's pattern library.
- A new VPN troubleshooting topic, validated, pushed as a draft and published.
- A point test against the published agent.
- A migrated copy, `Contoso IT Help Desk (migrated)`, on the GitHub Copilot harness.

## Prerequisites

- The Contoso IT Help Desk Standard agent from [Create a Standard IT Help Desk Agent](../../03-cs-basics/01-standard-agents/demo-create-a-standard-agent.md), or any Standard agent in an environment where you hold the maker role. Use a trial or sandbox environment.
- Claude Code, Git, Node.js 18 or later, and VS Code with the Copilot Studio extension.
- The .NET SDK and the Power Platform CLI 2.9.3 or later for Exercise 6.
- This repo cloned to your machine. The [topic readme](./readme.md#prerequisites) lists the install commands.

## Exercise 1: Install both plugins and keep one active

The repo's `.claude/settings.json` registers both marketplaces and enables both plugins, so opening the folder is the install. You switch off `mcs-assistant` for now, because its migration command warns that the two plugins may conflict.

1. Open the repo folder in Claude Code and accept the workspace trust dialog.
2. Run `/plugin` and confirm that both marketplaces and both plugins are listed.
3. Create `.claude/settings.local.json` in the repo root with the following content, then start a new Claude Code session.

```json
{
  "enabledPlugins": {
    "mcs-assistant@copilot-studio-plugin": false
  }
}
```

4. Type `@` in the prompt and look for the four sub-agents.

Expected: `/plugin` shows `mcs-assistant` as disabled, and the autocomplete lists `copilot-studio:copilot-studio-manage`, `-author`, `-test` and `-advisor`.

## Exercise 2: Clone the agent

The plugin works only on an agent that already exists in an environment; it never builds from an empty folder. Cloning pulls the agent definition down as YAML and records the connection to the environment.

1. Run the following command and follow the guided flow.

```text
/copilot-studio:copilot-studio-manage clone
```

2. Sign in when the browser opens, pick your demo environment, then pick **Contoso IT Help Desk**.
3. When asked for a folder, use `src/cs-schema/agents`.
4. Open the new agent folder and look at `agent.mcs.yml` and the `topics` folder.

Expected: `src/cs-schema/agents/Contoso IT Help Desk/` holds `agent.mcs.yml`, a `topics` folder with the system topics and a `.mcs` folder. `git status` lists the new folder.

> **Note:** Clone, pull and push run through the Copilot Studio VS Code extension's language server. The extension has to be installed; VS Code doesn't have to be open.

## Exercise 3: Ask the Advisor for a review

The Advisor only advises. It reads the agent, compares it with the 15 patterns in the plugin, and labels each recommendation proven, recommended or experimental, so you know what is battle-tested.

1. Run the following command.

```text
/copilot-studio:copilot-studio-advisor Review my agent for improvements and known pitfalls
```

2. Read the findings and note the maturity label on each one.
3. Pick one proven recommendation and reply that you accept it.

Expected: a list of findings with a maturity label per pattern. When you accept one, the Advisor hands it to the Author, and a changed or new file appears under the agent folder.

## Exercise 4: Author and validate a topic

The Author never writes YAML by hand when a skill exists for the task, because the skills carry the templates and the schema checks. You describe the topic in plain words and then validate the whole agent.

1. Run the following command.

```text
/copilot-studio:copilot-studio-author Create a topic that helps employees whose VPN won't connect. Add three trigger phrases, ask which operating system they use, and give numbered steps for Windows and for macOS.
```

2. Open the new file under `topics` and read the trigger phrases, the question node and the condition.
3. Validate the agent.

```text
/copilot-studio:copilot-studio-advisor Validate all topics in my agent
```

4. Run `git diff --stat` to see what the coding agent changed.

Expected: a new `.mcs.yml` topic file, a validation run with no errors, and a diff that lists only the files the last two steps touched.

## Exercise 5: Push, publish and test

A push creates a draft that only the authoring canvas, the Test tab and evaluations can see. Point tests and every channel see the agent only after you publish.

1. Pull first, then push.

```text
/copilot-studio:copilot-studio-manage pull
/copilot-studio:copilot-studio-manage push
```

2. Open the agent in Copilot Studio, check that the VPN topic is listed under **Topics**, and try it in the **Test** pane.
3. Select **Publish**.
4. Send a point test to the published agent.

```text
/copilot-studio:copilot-studio-test Send "My VPN won't connect on my laptop" to the published agent
```

Expected: the push succeeds, the topic answers in the Test pane before you publish, and after publishing the point test returns the operating system question from your topic.

> **Note:** A push over stale files fails with `ConcurrencyVersionMismatch`; run pull and push again. If the agent uses Microsoft Entra ID authentication, the Test agent asks for an app registration first and the `test-auth` skill lists its settings.

## Exercise 6: Migrate the agent to the GitHub Copilot harness

`mcs-assistant` migrates a Standard agent into a new agent named `<name> (migrated)` in the same environment, so the original stays untouched. It describes the source agent, asks you to approve a migration plan, converts the supported actions into tools and only then builds and pushes the new agent.

1. Check the Power Platform CLI version in the first line of the output.

```powershell
pac
```

2. Swap the plugins in `.claude/settings.local.json`, then start a new Claude Code session.

```json
{
  "enabledPlugins": {
    "copilot-studio@skills-for-copilot-studio": false
  }
}
```

3. Start the migration.

```text
/mcs-assistant:migrate Contoso IT Help Desk
```

4. When it warns that the Standard plugin is installed, choose to continue; the plugin is disabled for this session.
5. Accept the display name `Contoso IT Help Desk (migrated)` and the default publisher prefix `catmgr`, or type your own prefix.
6. Read the migration plan: the capabilities table, the decision for each action and the proposed handling of each gap. Type changes into the free-text answer until the plan is right, then select **Approve**.
7. If the plan lists connector tools without a connection in the environment, create the connection or choose to skip the tool.
8. Let the migration finish, then open the migrated agent in Copilot Studio.

Expected: a new folder `Contoso IT Help Desk (migrated)` next to the source agent, a `MIGRATION-PLAN-<id>.md` file in the parent folder that records each step, and a new agent of the same name in your environment. The original Standard agent is unchanged.

> **Tip:** Stop at any time and run `/mcs-assistant:migrate` again later; it finds the `MIGRATION-PLAN-<id>.md` file and resumes at the next unfinished step.

## Clean up

- Delete `.claude/settings.local.json`, or keep the plugin you use next.
- Delete `Contoso IT Help Desk (migrated)` in Copilot Studio if you don't need it, and remove its local folder.
