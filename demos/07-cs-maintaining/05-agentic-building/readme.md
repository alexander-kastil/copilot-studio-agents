# Agentic Building: Copilot Studio Plugins for Coding Agents

Topic 3 put agents under source control; this topic hands the authoring itself to a coding agent. Microsoft publishes two open-source plugins that let Claude Code, GitHub Copilot CLI and VS Code clone a Copilot Studio agent to `.mcs.yml` files, edit it, validate it, push it back and test it from the terminal. The class needs both: one for the Standard agents of modules 3 to 5, one for the GitHub Copilot agents of module 6.

## What this topic covers

- The two plugins, which agent type each one targets, and their two marketplaces
- How `copilot-studio` is wired: one entry point, four sub-agents, 31 skills
- The local, draft and published lifecycle, and the rules that keep a push from failing
- `mcs-assistant` for GitHub Copilot agents, including migrating a Standard agent
- Installing both plugins, switching between them per module, and keeping them current
- The sharp edges of research-grade tooling

## The two plugins

| | Standard agents | GitHub Copilot agents |
| --- | --- | --- |
| Plugin | `copilot-studio@skills-for-copilot-studio` | `mcs-assistant@copilot-studio-plugin` |
| Repo | [microsoft/skills-for-copilot-studio](https://github.com/microsoft/skills-for-copilot-studio) | [microsoft/copilot-studio-plugin](https://github.com/microsoft/copilot-studio-plugin) |
| Agent type | Standard harness (classic orchestration) | GitHub Copilot harness (agentic loop), plus migration from Standard |
| Reaches Copilot Studio through | VS Code Copilot Studio extension | Power Platform CLI (`pac`) 2.9.3 or later |
| Status on 22 Oct 2026 | Version 1.0.11, marked as an experimental research project | Version 1.0.2, work in progress, support through GitHub Issues only |
| Used in | [03-cs-basics](../../03-cs-basics/readme.md), [04-cs-tools](../../04-cs-tools/readme.md), [05-cs-advanced](../../05-cs-advanced/readme.md) | [06-cs-gh-copilot](../../06-cs-gh-copilot/readme.md) |

Both plugins come from the Microsoft Copilot Studio CAT team and are MIT licensed. Each repo is its own marketplace, so you add two marketplaces and install one plugin from each. Both warn that the YAML schema can change without notice, so review generated YAML before you push it to an environment.

## How copilot-studio is wired

The plugin ships four sub-agents, 31 skills and 15 design patterns, each pattern marked proven, recommended or experimental. A `SessionStart` hook injects `hooks/system-prompt.md`, which turns the main model into a router: it delegates every request to a sub-agent and never calls a skill directly. Skills hold no logic of their own; they call bundled Node scripts that query the schema, look up connectors, drive the sync and run evaluations.

![Skills for Copilot Studio architecture: Claude Code, GitHub Copilot CLI and VS Code feed one SessionStart hook that routes to the Author, Manage, Test and Advisor sub-agents, which use authoring, ALM, testing and shared skills that run against the local workspace, bundled Node scripts, reference schemas and Copilot Studio.](./_images/skills-for-copilot-studio-architecture.svg)

| Command | Does |
| --- | --- |
| `/copilot-studio:copilot-studio-manage` | Clone, pull, push, publish, list environments and agents |
| `/copilot-studio:copilot-studio-author` | Create and edit topics, nodes, actions, knowledge, child agents, variables, triggers and Adaptive Cards |
| `/copilot-studio:copilot-studio-test` | Evaluations against the draft; point tests and Copilot Studio Kit batch suites against the published agent |
| `/copilot-studio:copilot-studio-advisor` | Design guidance from the pattern library, agent review and troubleshooting; it advises and hands building to the Author |

The skills group into 11 authoring, 2 ALM, 10 testing and 7 shared skills, plus `create-eval`, which writes eval scenarios for the plugin itself. Two testing skills, `chat-with-agent` and `directline-chat`, are deprecated; use `detect-mode` with `chat-directline` or `chat-sdk` instead. The repo's `evals` folder tests the plugin's own routing, for example that "create a topic for password reset" in an empty folder answers with "clone" and writes no YAML.

## Local, draft and published

Your agent lives in a Power Platform environment, not on your laptop. The plugin works on a local copy, and nothing is live until you publish.

| State | Who can see it |
| --- | --- |
| Local | You and the coding agent |
| Pushed (draft) | The Copilot Studio authoring canvas, the Test tab and evaluations |
| Published | End users, Teams, Direct Line and other channels |

- **Clone first.** The plugin can't create an agent. Create one in the portal (an empty one is enough), then clone it; in an empty folder the Author refuses and tells you to clone.
- **Pull before you push.** Pushing over stale files fails with `ConcurrencyVersionMismatch`, so the order is pull, change, push.
- **Iterate against the draft.** Edit, push, run an evaluation, read the failures, fix, and publish only when the round is done.
- **No app registration for sync.** Clone, pull and push sign in through the browser with the VS Code client and keep the token for about 90 days. Evaluations and SDK chat need an app registration; the `test-auth` skill lists its settings.

Clone, pull and push run through `LanguageServerHost`, a binary inside the Copilot Studio VS Code extension. The extension must be installed, but VS Code doesn't have to be running.

## mcs-assistant: GitHub Copilot agents

`mcs-assistant` works through `pac copilot` and covers the full lifecycle, including creating, publishing and deleting agents. Its skills are `create-agent`, `clone-agent`, `pull-agent`, `push-agent`, `publish-agent`, `delete-agent`, `add-knowledge` and `add-skill`, run by the sub-agents `copilot-studio-architect`, `copilot-studio-describer`, `copilot-studio-init` and `copilot-studio-manage`.

| Command | Does |
| --- | --- |
| `/mcs-assistant:migrate` | Migrates a Standard agent to a GitHub Copilot agent, cloning it first when it isn't local; writes a resumable `MIGRATION-PLAN-<id>.md` next to the agent folder |
| `/mcs-assistant:chat` | Chats with a published GitHub Copilot agent from the terminal to test it |

`chat` signs in with a public client app registration in Microsoft Entra ID: platform **Mobile and desktop applications**, redirect URI `http://localhost`, delegated permission **Power Platform API > CopilotStudio.Copilots.Invoke**. The agent must be published first, otherwise the chat stops with a 404.

## Prerequisites

- Claude Code, GitHub Copilot CLI or VS Code.
- Git, because Claude Code clones each marketplace with Git.
- Node.js 18 or later: `node --version`.
- For `copilot-studio`: VS Code with the Copilot Studio extension `ms-copilotstudio.vscode-copilotstudio`, which [setup-vscode-extensions.ps1](../../../setup/scripts/setup-vscode-extensions.ps1) installs.
- For `mcs-assistant`: the .NET SDK and the Power Platform CLI 2.9.3 or later.

Install or update the Power Platform CLI as a .NET tool, then check the version in the first line `pac` prints:

```powershell
dotnet tool install --global Microsoft.PowerApps.CLI.Tool
dotnet tool update --global Microsoft.PowerApps.CLI.Tool
pac
```

## Install

### Option A: open this repo in Claude Code

The repo's [.claude/settings.json](../../../.claude/settings.json) registers both marketplaces and enables both plugins:

```json
{
  "extraKnownMarketplaces": {
    "skills-for-copilot-studio": {
      "source": { "source": "github", "repo": "microsoft/skills-for-copilot-studio" },
      "autoUpdate": true
    },
    "copilot-studio-plugin": {
      "source": { "source": "github", "repo": "microsoft/copilot-studio-plugin" },
      "autoUpdate": true
    }
  },
  "enabledPlugins": {
    "copilot-studio@skills-for-copilot-studio": true,
    "mcs-assistant@copilot-studio-plugin": true
  }
}
```

1. Clone the repo and open its folder in Claude Code.
2. Accept the workspace trust dialog. Claude Code applies `extraKnownMarketplaces` only in a trusted folder.
3. Claude Code adds both marketplaces and installs both plugins at the start of the session.

### Option B: add the marketplaces yourself

Use this in any other folder, or in GitHub Copilot CLI. Run it inside an interactive session:

```text
/plugin marketplace add microsoft/skills-for-copilot-studio
/plugin install copilot-studio@skills-for-copilot-studio
/plugin marketplace add microsoft/copilot-studio-plugin
/plugin install mcs-assistant@copilot-studio-plugin
```

The same from a terminal, installed for your user account:

```bash
claude plugin marketplace add microsoft/skills-for-copilot-studio
claude plugin install copilot-studio@skills-for-copilot-studio --scope user
claude plugin marketplace add microsoft/copilot-studio-plugin
claude plugin install mcs-assistant@copilot-studio-plugin --scope user
```

### Option C: VS Code with GitHub Copilot

Open the Extensions view, filter with `@agentPlugins`, search for **Skills for Copilot Studio** and select **Install**. The README of `copilot-studio-plugin` documents only the marketplace commands, so use Option B for it.

## One plugin per module

`/mcs-assistant:migrate` checks for the Standard plugin before it runs and recommends disabling it, because the two may conflict. Keep both installed and turn off the one the current module doesn't need in `.claude/settings.local.json`, which overrides the project settings and stays out of Git.

Modules 3 to 5, Standard agents:

```json
{
  "enabledPlugins": {
    "mcs-assistant@copilot-studio-plugin": false
  }
}
```

Module 6, GitHub Copilot agents and migration:

```json
{
  "enabledPlugins": {
    "copilot-studio@skills-for-copilot-studio": false
  }
}
```

Start a new Claude Code session after you change the file.

## Verify and update

1. Run `/plugin`: both marketplaces and both plugins are listed, with the one you turned off shown as disabled.
2. Type `/copilot-studio:` or `/mcs-assistant:` and check that the commands above appear. Typing `@` lists the sub-agents, such as `copilot-studio:copilot-studio-manage`.
3. Run `node --version` and `pac`: Node.js 18 or later, PAC CLI 2.9.3 or later.

| Tool | How to update |
| --- | --- |
| Claude Code | `autoUpdate` is on for both marketplaces in this repo; update by hand with `/plugin marketplace update skills-for-copilot-studio` and `/plugin marketplace update copilot-studio-plugin` |
| GitHub Copilot CLI | `/plugin update skills-for-copilot-studio`, or `copilot plugin update skills-for-copilot-studio` from a terminal |
| VS Code | Extension auto-update |

`/mcs-assistant:migrate` also compares its installed version with the latest on GitHub and offers to stop so you can update first.

## Sharp edges

- Both plugins are experimental, and the schema can change without notice. Validate after every change and treat generated YAML as a draft to review.
- Some YAML is invisible in the portal. A `triggerCondition` on a knowledge source is one example, and a later portal edit can remove it silently.
- A few schema entries are dead: `OnOutgoingMessage` exists but never fires.
- The Author doesn't build everything. Autonomous triggers and AI Prompt nodes stay in the portal.
- VS Code Copilot Chat support is still in progress; the terminal CLIs are the mature path today.

## Why it matters

Once an agent is a set of files, every change can be diffed, reviewed in a pull request and replayed, which is the source control story of [topic 3](../03-alm-source-control/readme.md) applied to authoring. The portal stays the place to publish and to make complex visual edits. For the bulk of authoring, testing and review, a coding agent that knows the schema, follows proven patterns and validates its own output is the faster route.

## Hands-On Demo

- [Build and migrate an agent from the terminal](./demo-build-and-migrate-from-the-terminal.md)

## Links & Resources

- [Skills for Copilot Studio](https://github.com/microsoft/skills-for-copilot-studio)
- [Skills for Copilot Studio setup guide](https://github.com/microsoft/skills-for-copilot-studio/blob/main/SETUP_GUIDE.md)
- [Copilot Studio Authoring Plugin](https://github.com/microsoft/copilot-studio-plugin)
- [Skills for Copilot Studio: Inside Microsoft's Claude Code Plugin (Wario W. Wario, 30 May 2026)](https://www.wariowario.com/blog/skills-for-copilot-studio-plugin)
- [Install the Power Platform CLI](https://learn.microsoft.com/power-platform/developer/cli/introduction#install-microsoft-power-platform-cli)
- [Claude Code: plugins per repository](https://code.claude.com/docs/en/plugins/org#require-plugins-per-repository)
