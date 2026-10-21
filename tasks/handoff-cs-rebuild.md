# Handoff: rebuild the class environment as CS- agents

Written 2026-10-21 at the end of a long session that ran out of context. Read this file, then the plan in [todo.md](todo.md) (section "Rebuild the class environment as CS- agents"), then start at "Next steps". Everything below was observed in this session unless marked otherwise.

## 1. Goal, in the owner's words

- "the goal is a fresh cleaned / consolidated environment with a perfect demo guide that is currently missing"; the new demos "we will keep them as optional".
- "we want to re-create the agents standard agents with CS-* prefix github agents with GH-* prefix", and "we want prefix also on tools so we easily find old artifacts and can delete them after success".
- The owner asked to "present your reflected perfect demo story" before implementing, then for "a plan, a learn loop and a top handoff". Re-create was recommended over mapping the existing agents; the owner has not yet said "go" to it explicitly. Confirm in one line, then execute.

## 2. Settled decisions (do not re-ask)

| Decision | Value |
| --- | --- |
| Environment | Integrations e. U. (default), `Default-d92b247e-90e0-4469-a129-6a32866c0d0a`, tenant `d92b247e-90e0-4469-a129-6a32866c0d0a`, account alexander.kastil@integrations.at |
| Prefix rule | Every environment-level artifact the rebuild creates gets `CS-` (Standard) or `GH-` (GitHub Copilot): agents, agent flows and trigger flows, prompts, custom connectors and MCP connectors, tool entries on agents, Dataverse tables (display name), connections where a dialog lets you name them. Items inside an agent (topics, entities, knowledge sources, child agents, variables) keep their names, because deleting the old agent removes them. |
| Old artifacts | Kept until the CS- environment works, then deleted (owner confirms each batch). `src/cs-schema/schema.json` lists all of them. |
| Demos | 15 new rebuild guides COEXIST with the existing Contoso/Northwind demo in each topic folder and are optional demos. The main thread marks them "(optional)" in readmes; the guides carry no label. |
| Not cloned, not needed | "Copilot in Power Apps", "Adaptive Card Gallery" (owner: "we dont need this 2") |
| Sorted out (deleted locally, still live) | Food Stock Agent, Onboarding Agent, Profile Agent (reasons in `schema.json` > `sortedOut`) |
| Not recreated | Transportation Agent (mock, replaced by CS-Travel Agent in 05/03), Food Inventory REST (folded into CS-Food Stock Buddy, 04/05), Food Buddy and Food Body (Food MCP returns as GH-Food Buddy in 06/04), Health Agent v2 (returns as GH-Health Advisor in 06/01), Employee Agent, Claim-Reporter |
| Model | GPT Chat Latest (YAML `modelNameHint: GPT56Chat`). GPT-5.5 Chat shows "will retire on 10/30/2026" in the portal. Check the other models a guide names (GPT-5 Chat, Claude Sonnet 4.6) for the same warning when you build. |
| Agent budget | Up to 10 agents in parallel; Haiku (`subagent-delegation-plugin:fact-gatherer`) for fact gathering, up to 8; Sonnet for porting YAML. |
| Azure | Create `rg-copilot-studio` and deploy the `src/` apps the demos need, topic by topic (owner: "in azure you can create a rg-copilot-studio and deploy src apps that you need like rest and mcp ... let do it topic by topic") |

## 3. The story (agreed shape of the 15 optional demos)

One company's employee services desk, built one specialist at a time: module 3 gives each specialist its core, module 4 gives them tools, module 5 makes one autonomous and connects them behind one front door.

| Topic | Guide (all untracked, drafted, NOT run live unless noted) | Agent | Creates (CS- artifacts) |
| --- | --- | --- | --- |
| 03/01 | `demos/03-cs-basics/01-standard-agents/demo-create-the-onboarding-assistant.md` | CS-Employee Onboarding Assistant | agent. **Run live, verified**, needs the findings in section 6 |
| 03/02 | `demos/03-cs-basics/02-knowledge/demo-onboarding-sharepoint-knowledge.md` | same | knowledge only. Exercises 1 to 3 run live and verified; 4 (sightseeing) and 5 (dog question, ungrounded toggle) not run |
| 03/03 | `demos/03-cs-basics/03-topics/demo-hr-buddy-employee-topics.md` | CS-HR Buddy | agent (no MCP) |
| 03/04 | `demos/03-cs-basics/04-power-fx/demo-expense-claim-power-fx.md` | CS-Travel Expense Refund | agent |
| 03/05 | `demos/03-cs-basics/05-adaptive-cards/demo-food-demand-card.md` | CS-Food Stock Buddy | agent |
| 03/06 | `demos/03-cs-basics/06-publishing/demo-publish-hr-buddy.md` | CS-HR Buddy | publish only |
| 04/01 | `demos/04-cs-tools/01-prompts/demo-food-order-prompt.md` | CS-Food Stock Buddy | CS-Calculate food to order (prompt and tool entry); topic node "Set sample stock" holds a sample `Topic.foodStock` table |
| 04/02 | `demos/04-cs-tools/02-dataverse/demo-expense-claims-in-dataverse.md` | CS-Travel Expense Refund | CS-Travel Expense Claims (table, 7 columns), CS-Save Claim to Dataverse (agent flow) |
| 04/03 | `demos/04-cs-tools/03-connectors/demo-travel-agent-teams-tool.md` | CS-Travel Agent | agent, CS-Post message in a chat or channel (Teams tool) |
| 04/04 | `demos/04-cs-tools/04-agent-flows/demo-health-advisor-flows.md` | CS-Health Advisor | agent, CS-Summarize Patient Symptoms (flow), CS-Classify Patient Symptoms (prompt inside it), CS-Post to teams (flow with approval) |
| 04/05 | `demos/04-cs-tools/05-rest-api/demo-food-catalog-rest-connector.md` plus `demo-food-catalog-rest-connector/cs-food-catalog.json` | CS-Food Stock Buddy | CS-Food Catalog (custom connector), tools CS-Gets all food, CS-Add food, CS-Update food stock quantity; replaces the "Set sample stock" node |
| 04/06 | `demos/04-cs-tools/06-mcp/demo-restaurant-hr-mcp.md` | CS-Restaurant HR Manager | agent, CS-HR MCP Server (MCP connector and tool, `src/hr-mcp-server`, 6 tools in `HRTools.cs`), CS-Send an email (Outlook tool) |
| 05/01 | `demos/05-cs-advanced/01-autonomous-agents/demo-returns-agent-mailbox-trigger.md` | CS-Returns Agent | agent, CS-Work IQ Mail (MCP tool entry), CS-When a new email arrives in a shared mailbox (trigger and its flow) |
| 05/03 | `demos/05-cs-advanced/03-multi-agent/demo-business-travel-planner.md` | CS-Business Travel Planner | agent; connects CS-Travel Agent, CS-Health Advisor, CS-Travel Expense Refund; child agent Work life balance Buddy (gym document only, no Event knowledge) |
| 05/05 | `demos/05-cs-advanced/05-connect-foundry-agents/demo-compliance-agent-foundry.md` | CS-Compliance Agent | agent, CS-Social Profiler (Foundry agent entry) |

Connections whose dialogs have no name field (Teams, Office 365 Outlook, Dataverse, Work IQ Mail, Copilot Studio, Food Catalog) are found by connector at cleanup. Each guide says so in a Note.

Topics without a matching agent keep only their existing demo: 04/07 computer use, 05/02 deep reasoning, 05/04 Foundry agents, 05/06 voice.

## 4. Current state

### Live in the environment (changed by this session)

- **CS-Employee Onboarding Assistant** created: agent id `bd42a7f9-6dcd-f111-a05a-7c1e528616d5`, schema `iits_CSEmployeeOnboardingAssistant`, solution Playground, model GPT Chat Latest, description, full instructions with the Sightseeing section at the end, knowledge HR Documents and Sightseeing (Sightseeing description changed by Apply to "Recommended sights and things to do near the office"). Not published.
- **Original Employee Onboarding Assistant** (`f9e18ce0-c494-f111-8075-7c1e528616d5`): model switched GPT55Chat to GPT56Chat through Apply, as the owner's one-agent test. Draft only, not published.
- Nothing else live changed. No Azure resources created (`rg-copilot-studio` does not exist). Subscription: Visual Studio Enterprise Subscription `cd091145-5ea2-4703-ba5d-41063b1d4308`, `az` is signed in to the right tenant.

### Repo (nothing committed; the owner commits)

| Path | What |
| --- | --- |
| `src/cs-schema/agents/` | 17 original agents cloned with the extension (`src/agents` was moved here with `git mv`); 12 carry `.mcs/conn.json` (extension-attached). Employee Onboarding Assistant's `agent.mcs.yml` shows the model change. |
| `src/cs-schema/workflows/` | 6 standalone workflows cloned with **Clone workflow** (hello-world, CheckSymptoms, SummarizePatientSymtoms, Posttoteams, GetProtein, SaveClaimtoDataverse) |
| `src/cs-schema/cs-agents/CS-Employee Onboarding Assistant/` | the rebuilt agent, pulled with the extension, attached |
| `src/cs-schema/schema.json` | inventory: per element type its disk path, classic and new UI path, scope and new-UI replacement (`locations`), every standard-agent tool (`standardTools`), each agent with `whatItDoes`, `maturity`, `gaps`, the workflows with `usedBy`, `shared` reuse, `sortedOut`. Verified by five Haiku checks; the fixes they found are applied. |
| `src/cs-schema/schema-notes.json` | the per-agent notes the generator merges in |
| `~/.claude/skills/copilot-studio/scripts/` | the session's automation scripts (section 5); `build-schema.py` regenerates `schema.json`: `python -I build-schema.py <src/cs-schema> <src/cs-schema/schema.json> <src/cs-schema/schema-notes.json>` |
| 15 guides in section 3 | untracked drafts |
| `CLAUDE.md` line 35, `.claude/rules/copilot-studio.md`, `tasks/lessons.md` | repointed to `src/cs-schema/agents/` and to the global copilot-studio skill |
| `.claude/skills/copilot-studio/` | deleted (deletion staged) on the owner's instruction "If we have a local copy of the skill in the way delete it"; the global skill is the only copy |

Observed and NOT done by this session's main thread: `.claude/skills/copilot-cowork/*` shows as deleted in the working tree. Check with the owner before touching it.

## 5. Proven procedures

### The window trap (read first)

The extension's **Clone agent**, **Clone workflow** and any folder open end with `vscode.openFolder(..., { forceReuseWindow: true })`. Run from the window that hosts Claude Code, it replaces that window and kills the session. Always run extension commands from a second window opened with `code -n`. Several other VS Code windows (other sessions) are open; target windows by exact title, never send keys to whatever has focus.

### Scripts (`~/.claude/skills/copilot-studio/scripts/`, documented in the skill's `references/clone-and-sync.md`)

| Script | Does |
| --- | --- |
| `vsc.ps1` | `-List` prints VS Code windows; `-Title <regex>` focuses that window; `-Keys 'a||SLEEP500||{ENTER}'` sends SendKeys with a foreground check before every key (prints `ABORT:` and stops if focus moved); `-Click 'x,y'` clicks at coordinates of a 1400-wide screenshot of the window; `-Shot <png>` captures the foreground window. DPI aware. |
| `clone-a.ps1`, `clone-b.ps1`, `clone-c.ps1`, `clone-full.ps1 -Name '<agent>'` | palette **Copilot Studio: Clone agent** > default environment (top item) > type the agent name > folder dialog (type the path, Enter, Tab to **Select Folder**, Enter). Pass `-Root 'D:\git-classes\copilot-studio-agents\src\cs-schema\cs-agents'` and `-HelperTitle` (regex of the helper window title) as parameters; read the script's `param()` line first. |
| `wf-full.ps1 -Name '<flow>'` | the same for **Copilot Studio: Clone workflow**; its picker lists every cloud flow in the environment, so take names from the portal's **Workflows** page |
| `build-schema.py` | the inventory generator |

### Apply local YAML to a live agent (proven twice)

1. `code -n "<agent folder>"`, wait about 10 s; the window title is `<folder name> - Visual Studio Code`.
2. `vsc.ps1 -Title '^<folder name> - Visual Studio Code$' -Keys '^+p||SLEEP700||Copilot Studio: Preview changes||SLEEP1000||{ENTER}' -Wait 9000`
3. `vsc.ps1 -Title ... -Click '200,152'` selects the **Local Changes (n)** row; `-Click '379,152'` clicks its inline cloud-up icon, tooltip "Copilot Studio: Apply changes". Apply is not in the palette.
4. Expect the toast "Completed applying changes for <agent>" and an empty Local Changes group. Close the window: palette **View: Close Window**.

### Create a blank CS- agent (the only portal step per agent)

Classic experience: new UI side bar **...** (More options) > **Open classic experience** > dialog "Share feedback before opening the previous experience?" > **Skip feedback**; the classic UI opens in a NEW tab at `/environments/<env>/home`. Then **Agents** (`/bots`) > **+ Create blank agent** > "Name your agent" > name > **Create**. **Agent settings (Optional)** shows Language, Solution (default Playground) and Schema name. The agent shows "Setting up..." for about a minute; reload the overview before editing (Details **Edit** stays disabled until then).

### Browser facts (claude-in-chrome)

- Copilot Studio pages return nothing to `get_page_text` until a chat answer exists; read with `javascript_tool` on `main.innerText`, keep results under about 1000 characters, and strip nothing: results containing citation URLs come back `[BLOCKED: Cookie/query string data]`, so read answers from a screenshot.
- The instructions editor is a rich editor: a synthetic `paste` event (DataTransfer) inserts plain markdown at the caret; Ctrl+End does not move the caret, place it with the Selection API on the last text node.
- Navigating to the Dataverse Web API (`orgaa1e572d.crm4.dynamics.com`) triggers a passkey sign-in; do not.

### What the pull-down showed

The pulled YAML equals what was entered. Predictable differences from an original clone: `displayName`/`schemaName`, `accessControlPolicy: GroupMembership` (new default), no `channels` until publish, `gptCapabilities: {}` when web search is off, `modelNameHint: GPT56Chat` for GPT Chat Latest, slightly newer system topic templates (EndofConversation, Fallback, Goodbye, MultipleTopicsMatched, StartOver). So porting YAML into a blank CS- clone and applying it is safe for instructions, knowledge, topics and entities.

## 6. Findings to fold into the guides (from the live 03/01 and 03/02 run)

- 03/01: model GPT Chat Latest, not GPT-5.5 Chat (retires 10/30/2026); Exercise 4 is a check: orchestration Yes, **Use information from the Web** Off (capital W), **Allow ungrounded responses** On, **Tenant graph grounding with semantic search** On, moderation Low are the new-agent defaults; Overview **Web Search** shows Disabled.
- Classic entry and Create blank agent as in section 5 (feedback dialog, new tab, setting-up wait).
- Verified outputs: before instructions the agent answers "Canberra" and writes the limerick; after, the checklist ends with the closing line, the benefits question points to HR, the off-topic question is declined with the closing line. With HR Documents, the benefits answer cites Employee Onboarding.docx.
- Every guide that names GPT-5.5 Chat or GPT-5 Chat: check the model list live and switch to GPT Chat Latest where a retirement warning shows.
- Writer-reported uncertain labels are listed in each guide's troubleshooting or described in plain words; confirm them during the smoke tests.
- Writer deviations to keep or revert consciously: 04/01 prompt text is new (the clone has no prompt for Food Stock Buddy; rule order = demand + minStock - inStock, code interpreter off because Learn's FAQ lists calling it from a topic as unsupported); 04/04 drops the instruction "present this directory"; 05/05 adds an instruction step that calls CS-Social Profiler; 05/03 rewrites the planner description.
- Repo defect found, out of scope: `src/food-catalog-mcp/Controllers/FoodController.cs` `InsertFood` never copies `MinStock`; the API readme route table misses the byname and update-stock endpoints.

## 7. Next steps

1. Confirm re-create with the owner (one line), then build in story order, because later demos connect earlier agents.
2. For each of the 9 agents (CS-HR Buddy, CS-Travel Expense Refund, CS-Food Stock Buddy, CS-Travel Agent, CS-Health Advisor, CS-Restaurant HR Manager, CS-Returns Agent, CS-Business Travel Planner, CS-Compliance Agent): create blank (section 5), clone into `src/cs-schema/cs-agents/` from a second window, hand the folder to one Sonnet writer with: the original clone path, the guide path, the fix list from the guide's Tips, the prefix rule, "never edit `.mcs/`", and "verify every file with `mcp__ide__getDiagnostics`, expect `[]`"; then Apply (section 5) and smoke-test two prompts in the classic test panel. Embed the full shared contract verbatim in every writer brief: parallel forks do not see sibling briefs.
3. Tools when needed: 04/05 and 04/06 first deploy to `rg-copilot-studio` (base on `src/deploy-apis.ps1`, which targets `rg-cowork-copilot-studio`; `food-catalog-mcp` serves REST under `/Food` and MCP under `/api/mcp`); custom connectors from the cloned `openapidefinition.json` with `pac connector create` (PowerAppsCLI is on PATH; verify `pac help` in PowerShell first) or the portal; flows from the cloned `workflow.json` with the extension's **Create workflow** plus push, or the portal; prompts and the table in the portal. Every create in Azure or the environment stays on the main thread.
4. Guides: one Haiku or Sonnet pass per guide against the pulled YAML and the smoke test; then add an "(optional)" row per guide to the module **Hands-On Demos** tables (`demos/03-cs-basics/readme.md`, `demos/04-cs-tools/readme.md`, `demos/05-cs-advanced/readme.md`) and a bullet under each topic readme's `## Hands-On Demo`; run `link-check.sh` (it does not decode `%20` in links to the agent folders), `fence-lang.py`, brand-voice-copilot.
5. After the owner signs off: cleanup batches from `schema.json`.

## 8. House rules that bit this session

- Never commit or push; never `git checkout --`, `restore`, `stash`, `reset`. `docs-agent` is banned here; guides go through the create-class skill (invoke `/class-authoring-plugin:create-class` first).
- No em dashes, at most 4 sentences per paragraph, every fence has a language, zero comments in code under `src/`.
- Never `cd` in shell commands; use absolute paths.
- The owner steers mid-run and expects corrections applied at once; present a story or plan before a fan-out when the owner asks for one; keep replies short (Answer Only style).
- A delegate's absence claim is unverified until checked (a Haiku check reported two existing agent folders as missing).
