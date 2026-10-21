# Todo

## Standard-agent evaluation lab (2026-10-21)

A tailored 3-day customer agenda runs evaluations on Standard agents (the customer dropped the GitHub Copilot agents block), but the only evaluation lab, `labs/06-cs-gh-copilot/07-evaluations/lab-01-evaluate-with-test-sets.md`, builds a GitHub Copilot agent and uses its Evaluate tab.

- [ ] Write a 25-minute lab that evaluates the HR agent from the Basics labs on the Standard agent **Evaluation** page: a test set, a comparing grader (Compare meaning or Text similarity), a baseline run, one diagnosed fix, a second run; the topic readme `demos/06-cs-gh-copilot/07-evaluations/readme.md` already teaches both surfaces
- [ ] Get the Standard agent test-set CSV template from the live product before authoring the companion CSV (see the evaluations lesson in `tasks/lessons.md`)

## Classic Copilot Studio teachings per topic (2026-10-21)

Owner request: `demos/03-copilot-studio/01-basics`, `02-tools` and `03-advanced` get numbered topic folders shaped like `04-new-experience`, each with learning-prose `readme.md` and a demo guide; the classic experience stays taught because clients ask for it. Labs were moved into matching topic folders; no new labs in this pass.

- [x] Learn currency check of the Key Topics links: only the Document Processing managed agent link is outdated (archived release plan, never GA)
- [x] Labs moved into topic folders (945 tracked files before and after), links repointed, `link-check` broken=0
- [ ] 18 topic readmes and 18 demo guides with the create-class skill (create-teaching, create-guide), one writer per module, contract below
- [ ] Sub-module index readmes, `demos/03-copilot-studio/readme.md`, master TOC and schedule in `demos/readme.md`, `labs/03-copilot-studio` indexes
- [ ] Remove folded legacy labs `02-tools/connectors`, `02-tools/consume-api` and the new-experience `02-tools/lab-3` from the classic track
- [ ] Demo guides are written from Learn, not yet run in a tenant

### Contract

Audience: Power Platform makers, software engineers and solution architects; low-code maker register (configuration over code, explain a term at first use). Brand voice: `.claude/skills/brand-voice-copilot/references/rules.md` (no em dashes, max 4 sentences per paragraph, fenced code declares a language, Mermaid labels quoted).

Topic readme shape, closed (model: `demos/03-copilot-studio/04-new-experience/06-iq-grounding/readme.md`): `# <exact title>`, two or three intro paragraphs, `##`/`###` sections of concept-first learning prose with at least one comparison table, existing SVGs embedded where they fit, `## Hands-On Demo` (link to the demo), `## Hands-On Lab` (only where a lab exists, link below), `## Key Topics covered in this module` (current Learn links, one per line). No table of contents, no slash-command table, no "What to teach" bullets.

Demo guide shape, closed: create-class `references/create-guide.md`, walkthrough format, Template B (product UI), low-code maker audience, no runnable project. File `demo-<slug>.md` without a number. `# <verb-action title>`, two or three sentences opening on the problem, "What you practice here: ...", "Duration: about N minutes" computed with create-class `scripts/estimate-duration.py`, `## What you'll build`, `## Prerequisites`, 4 to 6 `## Exercise N: <business outcome>` with bold UI labels, copy-paste inputs in `text` fences and an `Expected:` line each, `## Troubleshooting` (three or more rows), `## Summary`. No Related Topics section. Runs in the classic experience; no fabricated screenshots or output. Default sample: a Contoso IT Help Desk agent (Learn's standard-harness example); the Dataverse demo uses the OfferRequests tables. Never the HR agent the labs build, so demo and lab differ.

| Folder | Title (TOC bullet, H1, module table) | Demo file | Lab (under `labs/03-copilot-studio/`) |
| --- | --- | --- | --- |
| 01-basics/01-standard-agents | Standard Agents: Create & Configure | demo-create-a-standard-agent.md | 01-basics/01-standard-agents/lab-01-create-your-first-agent.md |
| 01-basics/02-knowledge | Knowledge Sources & Suggested Prompts | demo-ground-with-knowledge.md | 01-basics/02-knowledge/lab-01-ground-with-sharepoint.md |
| 01-basics/03-topics | Topics, Entities & Variables | demo-build-a-slot-filling-topic.md | 01-basics/03-topics/lab-01-build-topics.md |
| 03-cs-basics/05-adaptive-cards | Adaptive Cards: Collect Structured Input | demo-collect-input-with-a-card.md | 01-basics/04-adaptive-cards/lab-01-collect-input-with-adaptive-cards.md |
| 03-cs-basics/04-power-fx | Power Fx: Formulas in Topics | demo-power-fx-in-a-topic.md | none |
| 01-basics/06-publishing | Publishing to Teams & Copilot | demo-publish-to-teams-and-copilot.md | 01-basics/06-publishing/lab-01-publish-to-teams-and-copilot.md |
| 02-tools/01-prompts | Prompt Tool & Code Interpreter | demo-prompt-tool-with-code-interpreter.md | 02-tools/01-prompts/lab-01-build-a-prompt-tool.md |
| 02-tools/02-connectors | Connector Tools: Prebuilt Connectors | demo-connector-tools.md | 02-tools/02-connectors/lab-01-connector-and-flow-tools.md |
| 02-tools/03-agent-flows | Agent Flows: Deterministic Automation | demo-build-an-agent-flow.md | none |
| 02-tools/04-dataverse | Dataverse: Knowledge & Business Records | demo-dataverse-knowledge-and-records.md | none |
| 02-tools/05-rest-api | Custom Connectors & REST APIs | demo-rest-api-tool.md | 02-tools/05-rest-api/lab-01-call-a-secured-rest-api.md |
| 02-tools/06-mcp | MCP Servers as Agent Tools | demo-connect-an-mcp-server.md | 02-tools/06-mcp/lab-01-give-an-agent-mcp-tools.md |
| 02-tools/07-computer-use | Computer Use: Apps Without APIs | demo-computer-use.md | none |
| 03-advanced/01-autonomous-agents | Autonomous Agents & Event Triggers | demo-trigger-an-autonomous-agent.md | 03-advanced/01-autonomous-agents/lab-01-create-an-autonomous-agent.md |
| 03-advanced/02-multi-agent | Generative Orchestration & Multi-Agent Routing | demo-route-to-child-and-connected-agents.md | 03-advanced/02-multi-agent/lab-01-parent-and-child-agents.md |
| 03-advanced/03-deep-reasoning | Deep Reasoning Models | demo-deep-reasoning.md | 03-advanced/03-deep-reasoning/lab-01-supplier-recommendation.md |
| 03-advanced/04-foundry-agents | Microsoft Foundry Agents: Core Concepts | demo-create-a-foundry-agent.md | none |
| 03-advanced/05-connect-foundry-agents | Foundry Agents in Copilot Studio | demo-connect-a-foundry-agent.md | none |
| 03-advanced/06-voice (optional) | Voice Agents: IVR & Post-Call | demo-voice-agent.md | none |

Verified product facts (Learn, re-check before relying on one):

- Learn names three harnesses: GitHub Copilot harness, standard harness, Copilot chat harness ([harnesses-overview](https://learn.microsoft.com/microsoft-copilot-studio/harnesses-overview), 2026-10-19). Classic pages carry "features used in agents ... powered by the standard harness"; the home page menu says "Open classic experience" and standard agents are created from "Other ways to build" ([switch-experiences](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/switch-experiences), 2026-09-21). Agents never move between harnesses; standard agents stay fully supported. Course wording: "the classic experience (Learn: standard harness)" at first mention, then "classic".
- New agents default to generative orchestration; classic orchestration is still selectable, and event triggers, MCP, computer use and child or connected agents need generative ([advanced-generative-actions](https://learn.microsoft.com/microsoft-copilot-studio/advanced-generative-actions)). The classic area is **Tools**, not Actions.
- Knowledge: public websites, files, SharePoint, Dataverse, Azure AI Search, real-time connectors; Bing Custom Search under Add knowledge > Advanced, replaces public website sources ([knowledge-bing-custom-search](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-bing-custom-search)). Suggested prompts: up to 10, shown in Teams and Microsoft Copilot Chat, not in the test pane ([configure-starter-prompts](https://learn.microsoft.com/microsoft-copilot-studio/configure-starter-prompts), 2026-10-01).
- Publish channel name: "Teams and Microsoft Copilot" ([publication-fundamentals-publish-channels](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels), 2026-10-16). Unmanaged developer environments cannot be created from 2026-11-15 ([environments-overview](https://learn.microsoft.com/power-platform/admin/environments-overview)).
- Adaptive Cards up to schema 1.6, Teams 1.5 ([adaptive-cards-overview](https://learn.microsoft.com/microsoft-copilot-studio/adaptive-cards-overview)).
- Prompts: prompt builder, Prompt assistant, prompt library; code interpreter is enabled per prompt and needs user authentication ([code-interpreter-for-prompts](https://learn.microsoft.com/microsoft-copilot-studio/code-interpreter-for-prompts), 2026-09-30). Prompt tool is classic-only (Skills replace it on the GitHub Copilot harness).
- REST API tool is preview, OpenAPI v2 ([agent-extend-action-rest-api](https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-rest-api)). MCP needs generative orchestration ([agent-extend-action-mcp](https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp)). Computer use is GA, 5 Copilot Credits per step (15 with a premium model), runs on a Windows machine registered in Power Automate ([computer-use](https://learn.microsoft.com/microsoft-copilot-studio/computer-use), 2026-10-21). Component collections exist ([authoring-export-import-copilot-components](https://learn.microsoft.com/microsoft-copilot-studio/authoring-export-import-copilot-components)).
- Agent flows keep that name in classic, created from the Workflows page; cloud flows convert one way; express mode is preview ([flows-overview](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview), [agent-flow-express-mode](https://learn.microsoft.com/microsoft-copilot-studio/agent-flow-express-mode)). Event trigger payloads count as messages ([authoring-triggers-about](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers-about)).
- Multi-agent: child (inline) and connected agents; Microsoft Foundry, Fabric data and Microsoft 365 Agents SDK agents are preview; A2A ([authoring-add-other-agents](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents), [multi-agent-patterns](https://learn.microsoft.com/microsoft-copilot-studio/guidance/multi-agent-patterns)). Deep reasoning is preview with the `reason` keyword; the reasoning page names o3 while the model page lists GPT-5 Reasoning and Claude Opus as Deep ([authoring-reasoning-models](https://learn.microsoft.com/microsoft-copilot-studio/authoring-reasoning-models), [authoring-select-agent-model](https://learn.microsoft.com/microsoft-copilot-studio/authoring-select-agent-model)). Voice: basic and real-time voice agents, post-call actions on End of conversation ([voice-overview](https://learn.microsoft.com/microsoft-copilot-studio/voice-overview), [voice-post-call-actions](https://learn.microsoft.com/microsoft-copilot-studio/voice-post-call-actions)).
- The Document Processing managed agent is not taught: its release-plan page is archived and it never reached GA.


### Naming: Standard and GitHub Copilot agents (owner, 2026-10-21)

The owner's screenshot of the live tenant is the authority. Copilot Studio home, **New agent** split button, dropdown: under "Optimize your business processes", **Agent** with the badge **GitHub Copilot** ("Create an agent to take actions and answer questions."); under "Other ways to build", **Agent** with the badge **Standard** ("Create an agent with predefined rules and flows."). The agents list shows the value "Standard" in a column for standard agents. Learn names the runtimes standard harness and GitHub Copilot harness ([harnesses-overview](https://learn.microsoft.com/microsoft-copilot-studio/harnesses-overview)); existing standard agents also open from **Agents** or through **...** > **Open classic experience** at the bottom of the side bar ([switch-experiences](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/switch-experiences), 2026-09-21).

- "classic experience", "classic agent", "classic" meaning the old authoring surface: becomes "Standard agent(s)" (first mention per file: "Standard agents (Learn: standard harness)").
- "new experience", "New Experience", "new-experience agent": becomes "GitHub Copilot agent(s)" (first mention per file: "GitHub Copilot agents (Learn: GitHub Copilot harness)").
- Never change: "classic orchestration" (a real orchestration mode of Standard agents), **Classic data**, the literal UI label **Open classic experience**, quoted Learn text, and URLs (the `/agents-experience/` path stays).
- The "New experience toggle" is not how makers choose any more: teach the **New agent** dropdown above. Agents still never convert between the two.
- Folders: `01-basics/01-standard-agents`, module `04-gh-copilot` (topic `01-standard-vs-github-copilot`). Titles: Module 6 "GitHub Copilot Agents in Copilot Studio", its topic 01 "Standard vs. GitHub Copilot Agents", Basics topic 01 "Standard Agents: Create & Configure".
- SVG text that says "classic" or "New experience" for the surfaces gets the same words; a diagram whose drawing shows the toggle is reported, not redrawn.

## Trim 01-intro to essentials (2026-10-21)

Owner feedback: learners already know most of the intro. Six topics become four; market research and Learn currency check approved the merge.

- [x] Merge `02-agentic-ai` and `03-agent-anatomy` into `02-how-agents-work`; cut the before/after process, capabilities table, multi-agent section and prompt template
- [x] Merge `04-extensibility` and `05-licensing-setup` into `03-where-to-build`: current build paths (harnesses, plugins, Copilot connectors) and Copilot Credits (three billing routes, 2,000-credit per-user minimum); cut envisioning, per-service click paths and the tools table
- [x] Renumber `06-chat-productivity` to `04-chat-productivity`; repoint module, class and cross-module links and slide image embeds
- [x] Renumber the M1 slide specs and images, cut four specs, rewrite `03-01-build-paths` and `03-02-copilot-credits`, update overview, takeaways and `topics.json`
- [x] Redraw `00-02-module-path.svg`, `03-01-build-paths.svg`, `03-02-copilot-credits.svg`

## Microsoft plugin registry (2026-10-21)

Sources: MC1484008 (2026-09-30), [plugin registry post](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/introducing-the-plugin-registry---one-place-to-discover-and-govern-plugins-for-m/4559682), MC1511052 (2026-10-16), [What is a Microsoft 365 Copilot plugin?](https://learn.microsoft.com/microsoft-365/copilot/extensibility/plugins-overview), [Manage plugins, skills, and MCP servers](https://learn.microsoft.com/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers), [WIQD build a plugin](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/).

- [x] 1. `demos/02-cowork/05-plugins/readme.md`: reframe as Copilot plugins used in Cowork, section "One plugin, every Copilot surface" with the Anthropic comparison table
- [x] 2. `labs/02-cowork/lab-03-cowork-plugins.md`: new exercise "Write once, run in Claude and Copilot" (WIQD import, validate, provision, package, publish, approve in Requests, export to claude-plugin)
- [ ] 3. UI rename sweep **Customize** / **Agents** to the **Plugins** menu (43 hits in 17 files under `demos/02-cowork`, `labs/02-cowork` and the slide specs). Blocked: checked live 2026-10-21, Chat still shows **Agents** and Cowork still shows **Customize**; MC1484008 rolls the UI change out late Oct to late Nov 2026. Recheck the tenant, read the new menu path live, then sweep.
- [x] Ran lab-03 Exercise 7 on 2026-10-21 with WIQD 0.19.0 and rewrote it to match. Two steps stay unverified: `wiqd plugin publish --env dev` was refused ("Publishing is not permitted for this account") so the admin Registry upload was used, and the Cowork prompt hit the monthly credit limit, so skill activation was not observed. Rerun both when credits reset.
- [x] 4. `demos/04-maintaining/04-governance-compliance`: plugin registry beside the agent registry, sibling slide to `04-02-agent-registry`
- [x] 5. One line each: `demos/03-copilot-studio/04-new-experience/04-agent-skills` (registry support for Copilot Studio announced, not shipped), `demos/05-ai-teammates/01-meet-autopilot` (Autopilot uses the same Plugins menu)

## Draft module 05 (AI Teammates), trim 01-intro (2026-10-18)

- [x] Research: Autopilot, agent accounts and Agent 365, GitHub Copilot app fit, market demand, Google Trends
- [x] Verify key facts on Learn and primary sources
- [x] Draft `demos/05-ai-teammates` (module readme and five topic readmes) and `labs/05-ai-teammates/readme.md`
- [x] Trim `demos/01-intro/06-chat-productivity` and its references
- [x] Add module 05 to `demos/readme.md` and `readme.md`
- [x] Rename `03-copilot-studio/04-ui-update` to `04-new-experience` in `demos/` and `labs/`
- [ ] Write the module 05 demo and lab guides once each one is run-verified in a Frontier tenant with agent accounts activated
- [ ] Decide on a GitHub Copilot app module after GitHub Universe (2026-10-28 to 29) and Ignite (2026-11-17 to 20, session BRK201 "The evolution of the Microsoft Copilot app"); the removed draft was built from `agentic-sw-engineering-gh/demos/06-copilot-app`, and its automations topic should compare the app's automations with Cowork, Copilot Studio triggers, and Scout

## Review

Module 05 demo and lab guides are planned in each topic readme and in the labs readme, not written: they need a Frontier tenant with agent accounts activated.

## SVG teachings and module deck specs (2026-10-18)

- [x] SVG diagrams for every demos/ and labs/ topic where a picture adds understanding (156 new, many SMIL-animated), embedded in the readmes, demo guides and labs
- [x] Mermaid blocks evaluated: 9 replaced by SVGs, 5 kept
- [x] create-pptx Gamma-path specs for the five module decks in `demos/<module>/pptx/` (90 specs, `topics.json`, 70 opus-svg slide images shared with the readmes)
- [x] Reused deck SVGs in teachings, demo guides and labs: 45 more embeds across 34 docs, including cross-module reuse (2026-10-18)
- [ ] Render the 20 nano-banana photo slides (visual prompts are in the specs)
- [ ] Gamma generation per module (gamma-deck Steps 4 to 9)
- [x] Fixed: `labs/03-copilot-studio/03-advanced/04-reasoning/lab-01-supplier-recommendation.md:155` says Terra Verde Farms ranks below Cascade Organics under R7; the scorecard ranks it above (97.1 vs 96.2), it loses only on capacity (3,000 < 5,200)
- [x] Fixed: `demos/03-copilot-studio/04-new-experience/03-evaluations/readme.md:52` caps a conversation at six question-answer pairs; line 72 and the verified facts say 8

## Work IQ retrieve code lab (2026-10-21)

- [ ] After Ignite (2026-11-17 to 20), decide on a code lab in `labs/03-copilot-studio/04-new-experience/06-iq-grounding/` that calls the Work IQ MCP `retrieve` tool from an agent built in code: app registration with delegated `WorkIQAgent.Ask` and admin consent, a spending policy that includes Work IQ API, `grounding` versus `copilot` strategy, `capabilities` scoping, and the cited `markdown` plus `retrievalHits` response. Recheck first whether `retrieve` left public preview and whether the Work IQ tools shipped over REST (planned November 2026). Sources: [retrieve](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve), [migration guide](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/migrate-retrieval-api)

## Evaluations topic: October 2026 announcements (2026-10-21)

- [x] `demos/03-copilot-studio/04-new-experience/03-evaluations/readme.md`: Content safety and abstention on the classic grader tables, fix the expected-answer claims, announced graders (Task Completion, Tool Accuracy, Safety, latency, Custom Graders Library, generated graders), Review panel evaluation warnings, Agent viewer role, agent node evaluation in workflows
- [x] `labs/03-copilot-studio/04-new-experience/03-evaluations/lab-01-evaluate-with-test-sets.md`: Exercise 7 note on announced graders
- [x] brand-voice-copilot check on both files
