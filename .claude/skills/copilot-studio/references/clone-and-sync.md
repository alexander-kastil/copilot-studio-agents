# Clone and sync (VS Code extension)

The agents under `src/agents/` are **cloned Copilot Studio agents committed into this repo**. They came from a live environment and can be pushed back to one. Source: [microsoft/vscode-copilotstudio](https://github.com/microsoft/vscode-copilotstudio), extension id `ms-copilotstudio.vscode-copilotstudio`.

## Command surface

Exact command ids, from the extension's `package.json`. All are reachable via `Ctrl+Shift+P`.

| Command palette title | Command id |
| --- | --- |
| Copilot Studio: Sign in | `microsoft-copilot-studio.signIn` |
| Copilot Studio: Clone agent | `microsoft-copilot-studio.cloneAgent` |
| Copilot Studio: Preview changes | `microsoft-copilot-studio.previewChanges` |
| Copilot Studio: Get changes | `microsoft-copilot-studio.getChanges` |
| Copilot Studio: Apply changes | `microsoft-copilot-studio.applyChanges` |
| Copilot Studio: Reattach Agent | `microsoft-copilot-studio.reattachAgent` |
| Copilot Studio: Manage Connections | `microsoft-copilot-studio.manageConnections` |
| Copilot Studio: Download All Remote Knowledge Files | `microsoft-copilot-studio.downloadAllKnowledgeFiles` |
| Copilot Studio: Visualize Workflow | `microsoft-copilot-studio.workflow.visualize` |
| Copilot Studio: Show Session Info | `microsoft-copilot-studio.sessionInfo` |
| Help: Copilot Studio: Report Issue | `microsoft-copilot-studio.reportIssue` |

**These are VS Code commands with no CLI equivalent.** An agent/automation cannot run them; `pac` CLI covers solution import/export, not this live-sync model. When a user asks to "sync the agent back," the correct move is to run the pre-flight checks and then hand them the exact palette command, not to claim it was done.

Use the extension's own **Report Issue** command rather than VS Code's generic one; it attaches diagnostic session data.

## Apply lives in the Agent Changes view, not the palette

Searching the command palette for "Copilot Studio: Apply" often comes up empty. `applyChanges` is contributed to three surfaces, none of which is the palette proper:

| Surface | `when` clause |
| --- | --- |
| Agent Changes view title bar | `view == agent-changes` (third button, `navigation@3`) |
| Inline on the **Local Changes** group | `view == agent-changes && viewItem == changeGroup-local` |
| Source Control resource group | `scmProvider == mcs && scmResourceGroup == local` |

Every one of them requires the Agent Changes view to exist **and** a local-changes group to be populated. Work down this ladder when Apply is nowhere to be found:

1. **Is the extension active?** It activates on `workspaceContains:**/agent.mcs.yml` (also `settings.mcs.yml`, `agent.sync.yaml`). The glob is recursive, so agents nested under `src/agents/*/` do activate it.
2. **Is the agent workspace recognized?** The Agent Changes view only renders when `mcs.hasAgentWorkspace` is true. If the Copilot Studio sidebar shows **Getting started** instead of **Agent Changes**, that key is false: open the individual agent folder as the workspace root rather than the whole repo.
3. **Has a diff been computed?** The view opens empty with "No differences detected." Run **Preview changes** first; it is what populates the view.
4. **Is there a Local Changes group?** Apply only attaches to `changeGroup-local`. No group means the extension sees no difference between your working files and `.mcs/botdefinition.json`.

If step 4 stays empty while you know you edited a topic, that missing diff is the real problem to chase, not the missing menu item.

## Clone

Three ways, all ending in a folder picker:

1. **Agents pane (recommended):** Copilot Studio icon in the activity bar, pick the environment, right-click the agent, **Clone agent**.
2. **Command palette:** `Copilot Studio: Clone Agent`, then follow the environment/agent/folder prompts.
3. **From URL:** copy the agent URL in the web portal (**Settings > Agent details**, format `https://copilotstudio.microsoft.com/environments/{guid}/bots/{guid}`), then **Clone agent** shows it marked *(from clipboard)*.

Cloning takes roughly 10 to 30 seconds. The **Clone Agent** button on the extension pane disappears once an agent is already open locally, so use the palette or the Agents pane from then on.

Remote knowledge *files* are not downloaded automatically. Pull them with **Download All Remote Knowledge Files**, or click a file in the Remote Knowledge Files view.

## The three sync operations

| Operation | Direction | What it does | Danger |
| --- | --- | --- | --- |
| **Preview** | Cloud to local | Lists remote changes in the Agent Changes pane | None; touches no files |
| **Get** | Cloud to local | Downloads and applies remote changes | **Overwrites uncommitted local changes** (prompts first) |
| **Apply** | Local to cloud | Uploads local edits to the live agent | Modifies the live agent immediately |

Four rules that matter more than the rest:

- **Apply is not Publish.** It updates the agent in the environment but does not publish it to channels. Test afterward in the Copilot Studio test pane.
- **Apply is blocked while unretrieved remote changes exist.** The icon and command are disabled until you Get. This is a guardrail, not a bug.
- **Get overwrites uncommitted local work.** Commit to Git *before* running Get, always.
- **Apply hits the live agent instantly.** There is no staging step, so treat it like a deploy and confirm before triggering it on someone's behalf.

Conflicts (a component changed both locally and remotely) surface during Get: you choose to revert to your local version or keep the remote "latest change." If you dismiss the dialog, reopen it with the **Open Changes** icon on the highlighted component.

Preview at the start of a session, before major changes, and periodically (every 30 to 60 minutes) when a team shares the agent.

## Before Apply

- No unresolved conflicts.
- Preview and Get run, so local is current.
- **Problems pane is clean** (see [`schema-verification.md`](schema-verification.md)).
- Work committed to Git.
- You have permission to modify the agent.

## Is this folder attached?

`.mcs/conn.json` holds the binding and is the fastest way to check without opening VS Code:

```bash
cat "src/agents/<Agent Name>/.mcs/conn.json"
```

It carries `EnvironmentId`, `EnvironmentDisplayName`, `AgentId`, `DataverseEndpoint`, and the signed-in `AccountEmail`. If it is present and names the expected environment, the folder is attached and Preview/Get/Apply will work. If it is missing (the normal case here, because these agents arrived via `git clone` rather than a Copilot Studio clone), run **Reattach Agent** first.

Sibling files in `.mcs/`: `changetoken.txt` (remote sync watermark) and `botdefinition.json` (a generated bundle that embeds the topic YAML verbatim). The extension diffs working files against these to compute "local changes", which is why an edited `.yml` shows as a pending change while `botdefinition.json` still holds the old text. That is expected; never hand-edit either file.

## Reattach: the command that makes the repo work

`Copilot Studio: Reattach Agent` binds a local agent folder to an agent in an environment. It is what turns a *git clone* into a *working Copilot Studio clone*, and it covers two scenarios:

- **Team collaboration.** Only the first developer clones from Copilot Studio; everyone else clones the Git repo and runs Reattach. That is exactly the situation for anyone checking out this repo: the folders under `src/agents/` arrive via Git with no binding, so Reattach is the first step before Preview/Get/Apply will do anything.
- **Promoting across environments.** Clone from dev, edit, apply and test in dev, then Reattach to the target environment to move the definition. Microsoft's own guidance prefers **solutions and pipelines** for dev/test/prod promotion; Reattach is the escape hatch when you are not using solutions, and it skips the auditing that pipelines give you.

## Git interplay

- Initialize or connect Git immediately after cloning; the clone itself is not version controlled.
- Commit before Get. Get is the only operation that can silently destroy local work.
- `.mcs/botdefinition.json` is generated and will churn on every sync. It is committed here, so expect noisy diffs and do not hand-edit it.
- Clone to a stable, backed-up path, never a temp directory, and never clone the same agent to two locations.
