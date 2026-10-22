# Demo Check

| Module / topic | Agent | Demo run live | Guide text | Tokens | Euros | Copilot Credits |
| --- | --- | --- | --- | --- | --- | --- |
| **Module 02: Copilot Cowork** | | | | 116.4M | €35.81 | none booked yet |
| 02/01 Q3 review deck | Cowork | ✅ | ✅ | 16.3M | €5.23 | – |
| 02/01 Work IQ scheduling | Cowork + Work IQ | ✅ | ✅ | 10.4M | €3.52 | – |
| 02/02 Research brief | Cowork Deep Research | ✅ | ✅ | 10.2M | €3.41 | – |
| 02/03 Product pitch skill | product-pitch | ✅ | ✅ | 22.4M | €6.54 | – |
| 02/03 Meeting prep skill | meeting-prep | ✅ | ✅ | in 02/06 lane | in 02/06 lane | – |
| 02/04 Weekly status automation | weekly-status-report | ✅ | ✅ | 16.6M | €5.13 | – |
| 02/05 Plugins | dietitian | ✅ | ✅ | 14.8M | €4.59 | – |
| 02/06 Follow-up package | Cowork | ✅ | ✅ | 25.7M | €7.37 | – |
| **Module 03: Copilot Studio Basics** | | | | | | |
| 03/01 Standard agents | CS-Employee Onboarding Assistant | ✅ | ✅ | | | 0 CC [1] |
| 03/02 Knowledge | CS-Employee Onboarding Assistant | ✅ | ✅ | | | incl. above |
| 03/03 Topics | CS-HR Buddy | ✅ | ✅ | | | 0 CC [1] |
| 03/04 Power Fx | CS-Travel Expense Refund | ✅ | ✅ | | | 0 CC [1] |
| 03/05 Adaptive Cards | CS-Food Stock Buddy | ✅ | ✅ | | | 0 CC [1] |
| 03/06 Publishing | CS-HR Buddy | ✅ | ✅ | | | incl. above |
| **Module 04: Extending Copilot Studio Agents with Tools** | | | | | | |
| 04/01 Prompts | CS-Food Stock Buddy | ✅ | ✅ | | | incl. above |
| 04/02 Dataverse | CS-Travel Expense Refund | ✅ | ✅ | | | incl. above |
| 04/03 Connectors | CS-Travel Agent | ✅ | ✅ | | | 0 CC [1] |
| 04/04 Agent flows | CS-Health Advisor | ✅ | ✅ | | | 0 CC + 0.8 CC non-billed [2] |
| 04/05 REST API | CS-Food Stock Buddy | ✅ | ✅ | | €0 Azure F1 [3] | incl. above |
| 04/06 MCP | CS-Restaurant HR Manager | ✅ | ✅ | | €0 Azure F1 [3] | 0 CC [1] |
| 04/07 Computer use | CS-Contoso IT Help Desk | ✅ | ✅ | | | 0 CC so far [9] |
| **Module 05: Advanced Copilot Studio Agents** | | | | | | |
| 05/01 Autonomous | CS-Returns Agent | ✅ | ✅ | | | 0 CC + Work IQ n/a [4] |
| 05/03 Multi-agent | CS-Business Travel Planner | ✅ | ✅ | | | 0 CC [1] |
| 05/05 Foundry agents | CS-Compliance Agent | ✅ | ✅ | 14.1K [5] | n/a [5] | 0 CC [1] |
| **Module 06: GitHub Copilot Agents in Copilot Studio** | | | | | | |
| 06/01 Build and ground | GH-Health Advisor | ✅ | ✅ | | | 169.7 CC [6] |
| 06/02 Reasoning trace | GH-Health Advisor | ✅ | ✅ | | | incl. above |
| 06/03 Agent skills | GH-Health Advisor | ✅ | ✅ | | | incl. above |
| 06/04 MCP and workflow | GH-Food Buddy | ✅ | ✅ | | | 51.7 CC + 26.7 CC workflow [7] |
| 06/05 Work IQ | GH-Aurora Account Assistant | ✅ | ✅ | | | 46.1 CC + Work IQ n/a [4] |
| 06/06 Apps | Tasting Request Tracker (app) | ✅ | ✅ | | | n/a [8] |

Notes on the Copilot Credits and Euros columns:

1. Standard (CS-) agents ran in the test chat, which Microsoft documents as consuming no Copilot Credits. Each agent's Monitor page shows 0 Copilot credits for Oct 16 to 22, and none of them appears in the PPAC agent list. CS-HR Buddy also logged 2 published sessions for 03/06, still at 0 CC.
2. PPAC lists the agent flow CS-Summarize Patient Symptoms (flow ID 5bbc183e) with 0.80 CC on gpt-4.1-mini through GptPowerPrompt, 0% billed.
3. App Service F1 is a free tier, and Azure Cost Management returns no rows for rg-copilot-studio in October.
4. Work IQ API credits for these runs are not posted yet. Microsoft 365 Cost management books all 500 Work IQ API credits this month on Oct 1 (427), Oct 6 (1) and Oct 7 (72), with nothing on Oct 21. The 05/01 autonomous run (1 run) shows 0 CC on its Monitor page.
5. Azure Cost Management has no rows yet for rg-copilot-studio, whose resources were created on Oct 21. Azure Monitor shows 2 model requests on the gpt-5.4-mini deployment of cs-copilot-studio-foundry that day, with 13,017 prompt tokens and 1,059 generated tokens.
6. All five Preview sessions ran on Oct 22 between 00:43 and 01:08 local time, so they cannot be split by date. PPAC bills 169.72 CC and Monitor shows 169.7. Preview History lists 47.25, 42.35, 33.5, 25.55 and 25.69 CC per session (174.34 in total).
7. GH-Food Buddy bills 51.67 CC: Preview 20.19, M365 agents SDK client 17.63, and the autonomous run started by the workflow 13.85. The workflow charge is PPAC entry b652e447 (channel workflow-agents, feature Workflows, 26.67 CC billed). That ID is not in Dataverse, so it is attributed to GH-Food Reorder Draft, the only workflow created and run in the window (Oct 22, 01:42).
8. App build and run credits are not posted yet. The PPAC agent list (refreshed Oct 21) has no App row, and Microsoft 365 Cost management lists no Copilot Managed Runtime usage.
9. Run on Oct 22 in the default environment on the hosted browser: five **Test directly** runs (one with the CUA model, four with Claude Sonnet 4.5) and one test chat run. The agent's Monitor page showed 0 Copilot credits right after the runs. The map view of the test chat run counts 4 actions, which is 20 CC at the documented 5 credits per step if PPAC bills it later.

## How the cost was measured

- Sources: Power Platform admin center, Licensing > Copilot Studio > Manage Agents, with billed credits per agent, channel and billable feature. Copilot Studio Monitor and Preview > History for the GH- agents, and the Monitor page of each CS- agent. Microsoft 365 admin center > Copilot > Cost management, plus Azure Cost Management, Azure Monitor metrics and a Dataverse workflow lookup through the az CLI, all read only.
- Date range: the demos ran on Oct 21 and 22, 2026. PPAC is month to date, refreshed on Oct 21, and already includes the GH- sessions from late Oct 21 UTC. Copilot Studio Monitor covers Oct 16 to 22, Microsoft 365 Cost management is month to date with data through Oct 21, and Azure was queried for Oct 1 to 22.
- Billed vs non-billed: 294.14 CC billed (GH-Health Advisor 169.72, GH-Food Buddy 51.67, GH-Aurora Account Assistant 46.08, workflow 26.67) and 0.80 CC non-billed (CS-Summarize Patient Symptoms). PPAC lists no other agents this month, so no old non-CS agent had to be excluded.
- Not measured: Work IQ API credits for 06/05 and 05/01, Azure cost for 05/05 and app credits for 06/06, because none of them is posted yet. The environment's Copilot Credit consumption details grid shows no data for October, and the GH-Food Reorder Draft run history shows no credits.
