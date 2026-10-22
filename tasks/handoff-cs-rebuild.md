# Handoff: rebuild the class environment as CS- agents

Written 2026-10-21 at the end of a long session that ran out of context, updated by the second session at 21:45 and by the third session at about 22:55, before a compact. Start with section 0, then the plan in [todo.md](todo.md) (section "Rebuild the class environment as CS- agents"). Sections 1 to 8 are the first session's record; section 0 overrides them where they differ.

## 0. Resume here (fourth session, 2026-10-21 23:58)

### Status (the owner's template, reproduce it exactly)

| Module / topic | Agent | Demo run live | Guide text |
| --- | --- | --- | --- |
| 03/01 Standard agents | CS-Employee Onboarding Assistant | ✅ verified | ✅ updated |
| 03/02 Knowledge | same | ✅ (sightseeing cites the Sightseeing site; ungrounded off sends the capital question to Fallback) | ✅ updated |
| 03/03 Topics | CS-HR Buddy | ✅ | ✅ updated |
| 03/04 Power Fx | CS-Travel Expense Refund | ✅ | ✅ updated |
| 03/05 Adaptive Cards | CS-Food Stock Buddy | ✅ | ✅ updated |
| 03/06 Publishing | CS-HR Buddy | ✅ (Teams and M365 Copilot run, shared, republish after start over) | ✅ updated |
| 04/01 Prompts | CS-Food Stock Buddy | ✅ | ✅ updated |
| 04/02 Dataverse | CS-Travel Expense Refund | ✅ | ✅ updated |
| 04/03 Connectors | CS-Travel Agent | ✅ (Teams post landed) | ✅ updated |
| 04/04 Agent flows | CS-Health Advisor | ✅ (both branches, review mail, Teams post landed) | ✅ updated |
| 04/05 REST API | CS-Food Stock Buddy | ✅ | ✅ updated |
| 04/06 MCP | CS-Restaurant HR Manager | ✅ (shifts booked, mail sent) | ✅ updated |
| 05/01 Autonomous | CS-Returns Agent | ✅ (replay mailed the reply, published run on Activity) | ✅ updated |
| 05/03 Multi-agent | CS-Business Travel Planner | ✅ (all 5 routes) | ✅ updated |
| 05/05 Foundry agents | CS-Compliance Agent | ✅ (Foundry call after confirm, invalid mail stops) | ✅ updated |
| 06/01 Build and ground | GH-Health Advisor | ✅ | ✅ updated (existing Northwind guide) |
| 06/02 Reasoning trace | GH-Health Advisor | ✅ (step list replaces Get rationale; History replaces Monitor, which counts credits but lists no Preview sessions) | ✅ updated |
| 06/03 Agent skills | GH-Health Advisor | ✅ (Download produced `doctor-appointment-request-drafter.md`) | ✅ updated |
| 06/04 MCP and workflow | GH-Food Buddy | ✅ (agent and workflow published, end-to-end run succeeded) | ✅ updated (publish before the agent node) |
| 06/05 Work IQ | GH-Aurora Account Assistant | ✅ | ✅ updated |
| 06/06 Apps | Tasting Request Tracker (app, personal environment) | ✅ (owner fixed credits; built, refined twice, code view, published; Share dialog opened, nobody added) | ✅ updated |

The third session's work is committed in `f56642f`. The fourth session's work is not committed: guides 03/06 and 05/01, the agent folders CS-Returns Agent (tool, trigger, workflow, instructions) and CS-HR Buddy (settings, Collect Employee Data), this file, `tasks/lessons.md` and `.time/`. A peer Claude session works in the same repo on a module 06 evaluations topic, so commit by pathspec only (claude-push skill).

### Agents (all 10 applied and tested)

| Agent | AgentId | Schema | State |
| --- | --- | --- | --- |
| CS-Employee Onboarding Assistant | `bd42a7f9-6dcd-f111-a05a-7c1e528616d5` | `iits_CSEmployeeOnboardingAssistant` | live, first session |
| CS-HR Buddy | `3124d03e-72cd-f111-a05a-7c1e528616d5` | `iits_CSHRBuddy` | published, Microsoft 365 and Microsoft Teams channel, shared with Copilot Users |
| CS-Travel Expense Refund | `362c599e-72cd-f111-a05a-7c1e528616d5` | `new_CSTravelExpenseRefund` | tested, published (connected to the planner) |
| CS-Food Stock Buddy | `5c717ca7-72cd-f111-a05a-7c1e528616d5` | `iits_CSFoodStockBuddy` | tested |
| CS-Travel Agent | `f073f6be-72cd-f111-a05a-7c1e528616d5` | `cr915_CSTravelAgent` | tested, published |
| CS-Restaurant HR Manager | `d14ea3dc-72cd-f111-a05a-7c1e528616d5` | `iits_CSRestaurantHRManager` | tested |
| CS-Health Advisor | `0092e2cb-83cd-f111-a05a-7c1e528616d5` | `iits_CSHealthAdvisor` | 04/04 tools wired, tested, published |
| CS-Returns Agent | `ef2c30e4-83cd-f111-a05a-7c1e528616d5` | `cr915_CSReturnsAgent` | CS-Work IQ Mail (maker credentials) and the shared mailbox trigger, published |
| CS-Business Travel Planner | `8f9d08ee-83cd-f111-a05a-7c1e528616d5` | `iits_CSBusinessTravelPlanner` | applied, 5 routes tested |
| CS-Compliance Agent | `23bdf5f8-83cd-f111-a05a-7c1e528616d5` | `iits_CSComplianceAgent` | Claude Sonnet 4.6 (`Sonnet46`), CS-Social Profiler wired, tested |

### Live artifacts added by the third session

- Prompt CS-Classify Patient Symptoms `41e2658c-c3d1-4339-9790-851376e83a50` (inputs Age, Gender, Symptoms; built from Tools > Add a tool > Add new Prompt, then Cancel, so it is not an agent tool).
- Agent flows CS-Summarize Patient Symptoms `a547f81c-8acd-f111-a05a-7c1e528616d5` and CS-Post to teams `0afefe22-8acd-f111-a05a-7c1e528616d5` (Respond first, Request for information with Channel Outlook to alexander.kastil@integrations.at, then the Teams post to the travel desk channel; connections embedded). Both are tools on CS-Health Advisor; CS-Post to teams uses **Maker-provided credentials**.
- Duplicates from a rerun, switched off, to delete at cleanup: CS-Duplicate Summarize Patient Symptoms `2274ea2f-8acd-f111-a05a-7c1e528616d5` and CS-Duplicate Post to teams `3274ea2f-8acd-f111-a05a-7c1e528616d5`.
- Connection references `iits_CSTeams` (CS-Teams) and `iits_CSHumanintheloop` (CS-Human in the loop), beside `iits_CSDataverse`.
- Topics on CS-Health Advisor: Check Symptoms with the flow call, the outcome message and the TookDrugs branch; the new Post to teams topic (`topics/PostToTeams.mcs.yml`).
- Planner child knowledge file renamed to `iits_CSBusinessTravelPlanner.topic.NoPainNoGainGym_Qw7Zk2Lm9Xc4Vb8.mcs.yml`, because the long name failed with PropertyLengthTooLong.
- CS-Social Profiler on CS-Compliance Agent: external agent `iits_CSComplianceAgent.action.CS-SocialProfiler`, AgentId `social-profiler`, connection CS-Microsoft Foundry (Azure AI Foundry Agent Service, Entra user login, the owner signed in). Step 5 of the instructions references it as `{System.Bot.Components.Agents.'iits_CSComplianceAgent.action.CS-SocialProfiler'.DisplayName}`, which renders as a chip.
- Foundry in swedencentral, resource group `rg-copilot-studio`: account `cs-copilot-studio-foundry` (AIServices, project management on), project `copilotstudio`, endpoint `https://cs-copilot-studio-foundry.services.ai.azure.com/api/projects/copilotstudio`, deployment `gpt-5.4-mini` (2026-03-17, GlobalStandard, 50K), prompt agent `social-profiler` with `web_search_preview` and the Activity Protocol plus BotServiceRbac on. Built with `az cognitiveservices account create` and `account project create` plus the Azure MCP foundry tools; the microsoft-foundry MCP server stays disconnected.
- Browser screenshots for the slides: `C:\Users\AlexanderKastil\Downloads\cs-rebuild-screenshots` (25 files, 05/03 and 05/05).
- Evaluation session (optional topic 05/07, 2026-10-21): CS-HR Agent `8a5a59ab-91cd-f111-a05a-7c1e528616d5`, created in the portal for the lab (lab 03/01 description and instructions, Microsoft Careers site, SharePoint HR Documents `copilot-demo/HRDocuments`, web search on, not cloned, not published) with the test set HR agent regression and three runs; on CS-Business Travel Planner the test set Travel planner routing with four runs. The planner's **Web Search** was off for runs 3 and 4 and is back on.

### Live artifacts added by the fourth session

- Shared mailbox **Help** `help@integrations.at` (created in the Microsoft 365 admin center, member Alexander Kastil with Full Access and Send as), because the address no longer existed in the tenant. It took about 15 minutes until the trigger could read its Inbox.
- On CS-Returns Agent: MCP tool CS-Work IQ Mail (connector shown as **Mail (Preview)**, connection Alex Mail, **Maker-provided credentials**); trigger CS-When a new email arrives in a shared mailbox, flow `bdd8c6a7-95cd-f111-a05a-7c1e528616d5` (resource id `b6009624-83f9-a71f-21ba-d1cdb15bfef5`) on help@, folder typed as `Inbox`; instructions gained "Send that email to the customer with CS-Work IQ Mail." Published.
- CS-HR Buddy published, channel **Microsoft 365 and Microsoft Teams** added, installed in Teams for the owner, shared with the security group Copilot Users (End user access, **Show in Built By Your Colleagues**); Collect Employee Data message ends with "Ask me to collect your employee reward next."
- Test mails sent to help@: two "Return request for order 10482" (the first landed before the mailbox was readable and was never picked up) and one "Invoice address change". The agent mailed "Your wireless headphones return request" and "Re: Return request for order 10482" to alexander.kastil@integrations.at.
- Screenshots folder now holds 50 files (03/06 and 05/01 added).

### Live artifacts added by the fifth session (2026-10-22, module 06 in three Workflow lanes, `wf_001286df-a6a`)

- GH-Health Advisor `627a3d8f-5bf6-4f59-97e9-6298eac93257` (GitHub Copilot agent, published, no channel, not shared): CS-Health Advisor's instructions, knowledge The Benefits of Intermittent Fasting.docx, Traveling with Health Issues.docx and company-doctor-hours.md (fictional, scratchpad `lane1/`), a reason line in the instructions, skill doctor-appointment-request-drafter (v2 SKILL.md in scratchpad `lane1/skill-v2`). The 06/02 and 06/03 changes are saved, not republished.
- GH-Food Buddy `602b6390-3899-4481-a182-8ef712681178` (published in the tenant on the owner-delegated yes, no channel, not shared), tool and connection GH-Food MCP (`https://cs-food-catalog-api.azurewebsites.net/api/mcp`, auth None, 7 tools), workflow GH-Food Reorder Draft `flows/85f4b31a-eb72-ff83-a002-d7cdfd4715c7` (published, Version 5 live, input FoodItems, agent node calls GH-Food Buddy, output ReorderDraft; one run on 2026-10-22 01:42, not attached as a tool).
- GH-Aurora Account Assistant `1ab5afb2-c032-4287-a50f-c6dd5647618f` (draft) with Work IQ (Preview) on the existing presenter connection. The 30-character name limit cut GH-Aurora Provisions Account Assistant.
- 06/06: a first app-build conversation failed on "No usage quota is available for your account"; after the owner gave the personal environment credits, the app Tasting Request Tracker (`play.preview.managedapps.cloud.microsoft/apps/2e56a7c1-f0b6-4dda-9956-429b4e170fef`, personal environment, sample data kept local) was built, refined (priority, four statuses) and published. The app settings have no rename, so it carries no GH- prefix.
- `demos/demo-check.md`: the owner's status table with module dividers; a peer session added Module 02 rows and the Tokens and Euros columns, and the cost workflow `wf_67ba0a5e-baa` fills Copilot Credits for modules 03 to 06.
- Screenshots folder: 06-01 to 06-06 files added by the lanes.

### Next steps

Start the next session by reading this section, then recreate a 5-minute status cron with the report skill (the fourth session deleted its cron 019c94e4 before the compact) and post the status table above on each tick. The learn loop after 05/01 and 03/06 ran: lessons in `tasks/lessons.md`, the copilot-studio skill gained a triggers-and-publishing recipe and a `flow-history.py` trigger check, and 1.20h went to `.time/`. Its delegation-router fix sits uncommitted in the integrations-marketplace repo and takes effect only after that change is committed and the plugin updated, which is the owner's call. Continue with step 3.

Every guide edit starts by invoking `/class-authoring-plugin:create-class` with the Skill tool (repo hard rule: guides, readmes and labs under `demos/` and `labs/` are written on the main thread through that skill, never the docs-agent), followed by the brand-voice-copilot check (`python -I .claude/skills/brand-voice-copilot/scripts/check.py --paths <file>`) and `fence-lang.py` from the create-class scripts folder.

1. Done (fourth session): **05/01, full run including publish** (owner answer: "Full run incl. publish"). On CS-Returns Agent add the Work IQ Mail (Preview) MCP tool, rename it CS-Work IQ Mail and set Maker-provided credentials; add the trigger **When a new email arrives in a shared mailbox (V2)** named CS-When a new email arrives in a shared mailbox on `help@integrations.at`, Inbox (taken from the original flow). Send the guide's test mail from alexander.kastil@integrations.at to help@ (the owner approved the full run), replay it, publish, send the invoice-address mail, and follow the **Activity** page. Use GPT Chat Latest, not GPT-5 Chat. Then update guide 05/01 and run a learn loop.
2. Done (fourth session): 03/06, publish CS-HR Buddy along the guide, then update the guide.
3. Done (fifth session, 2026-10-22): 03/02 exercises 4 (sightseeing) and 5 (dog question, ungrounded toggle) on CS-Employee Onboarding Assistant, guide updated (exercise 5 now adds the capital question, because the dog question stays grounded either way), learn loop started. **Allow ungrounded responses** is back on.
4. Add the "(optional)" rows to the module **Hands-On Demos** tables and the topic readme bullets for the 15 guides; run `link-check.sh`, `fence-lang.py` and brand-voice-copilot.
5. Commit all and push (claude-push, pathspec only) when the guides are done.
6. Next batch: the module 06 demos as GH- agents (`demos/06-cs-gh-copilot/01` to `06`), planned in `tasks/todo.md` first.
7. Clean up the old unprefixed artifacts and the two CS-Duplicate flows only after the owner signs off.

### Procedures proven this session

- **Blank agent:** `https://copilotstudio.microsoft.com/environments/Default-d92b247e-90e0-4469-a129-6a32866c0d0a/bots/new` opens "Name your agent" directly; click the field at (783,367), type, **Create** at (867,440) in a 1568-wide frame. The schema prefix varies (`iits_`, `cr915_`, `new_`); new agents start with web search on.
- **Clone:** helper window `code -n "D:\git-classes\copilot-studio-agents\src\cs-schema\cs-agents"`, then `clone-full.ps1 -Name <agent> -Root <that folder> -HelperTitle '^(.* - )?cs-agents - Visual Studio Code$'`. An abort means focus moved; send `{ESC}||{ESC}` to the helper and retry.
- **`vsc.ps1`** (global copilot-studio skill) now presses Alt before `SetForegroundWindow` only when the target is not already in front; Chrome in front otherwise blocks the focus switch.
- **Apply:** `C:\Users\ALEXAN~1\AppData\Local\Temp\claude\D--git-classes-copilot-studio-agents\40163078-2413-4ae2-b23e-d7fe2695a197\scratchpad\apply.ps1 -Name <agent>` opens the helper, runs Preview, screenshots Problems and the Local Changes row; then click the Apply icon at (379,152), or (367,152) when the side bar is narrower, and close with **View: Close Window**. If the Copilot Studio view was already open, the (37,636) click hides the side bar; click it again. Remote changes block Apply: run **Copilot Studio: Get changes** first. Get pulls portal-made tools into `actions/`, `connectionreferences.mcs.yml`, `workflows/`, `prompts/`, `connectors/`.
- **Portal tools:** **Add a tool** offers cards **Add new Computer use / Workflow / Prompt / MCP** and, under **See more**, **Add new REST API / Custom connector**, plus filters Popular, Connector, Prompt, Workflows, REST API, Model Context Protocol. After **Add and configure**, rename the tool on its settings page; wizard names do not carry over. Rich text fields (Message to display) keep text only after a click outside before **Save**.
- **Dataverse and flows without the portal:** token `az account get-access-token --resource https://orgaa1e572d.crm4.dynamics.com`; scripts `dv-table.py` and `dv-flow.py` in the scratchpad above. An agent flow is a `workflows` row with `category 5`, `type 1`, `modernflowtype 1`, `primaryentity none` and `clientdata`, turned on with a PATCH of `statecode 1`, `statuscode 2`, header `MSCRM.SolutionUniqueName: Playground`. A connection reference must point at a connection you own.
- **Verify without the browser:** Graph via `az rest` for Teams ids; the claude.ai Microsoft 365 connector for channel messages and mail; the agent's **Activity** tab (read `main.innerText`) shows each tool's prepared inputs.
- **Deploy:** `C:\Users\ALEXAN~1\AppData\Local\Temp\claude\D--git-classes-copilot-studio-agents\40163078-2413-4ae2-b23e-d7fe2695a197\scratchpad\deploy-cs.ps1` (publish, zip, `az webapp deploy`).
- **Third session additions:** `dv-ha.py` (connection references and two flows, not idempotent, do not rerun), `dv-q.py "<odata path>"` (read-only Web API query), `dv-emb.py` (switch a flow's connections to embedded) in the same scratchpad. A failed Apply ("Improper response, not implemented") can still land: run **Get changes** and read Remote Changes before retrying. Flow tools that post or mail need **Maker-provided credentials** on the tool, otherwise the test chat stops at "Open connection manager". The Foundry connection dialog has a **Display name** field and opens a separate "Sign in to Microsoft Foundry" window that the owner completes.

### Owner instructions this session

Fix typos while porting; cheaper models (Sonnet general agents) for porting; build in batches and finish one before creating more ("we dont want to build castles in the cloud"); full go for the Teams post and the 04/06 shift booking and mail (to alexander.kastil@integrations.at); update guides in parallel; commit all and push when guides are done; give the status table on request.

After each demo that works, update its guide and start a learn loop (owner, third session, 2026-10-21).

Keep every browser screenshot sent in the chat for the slides: take it with `save_to_disk: true` and copy it with a descriptive name (`<module>-<topic>-<what>.jpg`) to `C:\Users\AlexanderKastil\Downloads\cs-rebuild-screenshots`; never keep the VS Code screenshots there (owner, third session).

GitHub Copilot agents for module 06 (`demos/06-cs-gh-copilot`) get the GH- prefix; they are the next batch after this one (owner, third session).

The status table follows the owner's template exactly: columns Module / topic, Agent, Demo run live, Guide text, one row per topic, short cells with ✅, ◐ and ⏳ (owner, third session: "I asked for a table and I gave you a template"). A demo that works and whose guide is updated is ✅, even when a missing UI step was replaced; say "works, guide updated" first and the replacement second (owner, fifth session). The owner keeps the table in `demos/demo-check.md` with module dividers and Tokens, Euros and Copilot Credits columns.

## 1. Goal, in the owner's words

- "the goal is a fresh cleaned / consolidated environment with a perfect demo guide that is currently missing"; the new demos "we will keep them as optional".
- "we want to re-create the agents standard agents with CS-* prefix github agents with GH-* prefix", and "we want prefix also on tools so we easily find old artifacts and can delete them after success".
- The owner asked to "present your reflected perfect demo story" before implementing, then for "a plan, a learn loop and a top handoff". Re-create was recommended over mapping the existing agents and the owner confirmed it on 2026-10-21 (blank in the portal, then YAML and Apply).

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
