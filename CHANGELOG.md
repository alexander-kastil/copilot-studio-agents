# Changelog


## [Unreleased]

### Added

- The Cowork plugin lab builds a Grey Logistics sample plugin shipped in `labs/02-cowork/lab-03-grey-logistics-plugin/` (deck, document and Foundry research skills, own icons), the skills lab links its own `weekly-status-mail` copy, and the HR documents, the candidates workbook, the resumes and the gardening documents download from this repository (`src/assets/` and the lab folders) instead of the copilot-camp repository; no lab, demo or diagram names Copilot Dev Camp any more
- Every lab outside module 02 starts on its own: a lab that used an earlier lab's agent, topic, connection or MCP registration opens with a short setup section that builds it (learners who have it keep using it), in English and German; the labs name their company Happy Longnose Ltd or Grey Logistics instead of Northwind or Contoso, the sample HR site is Grey Logistics HR and the environment diagram shows Grey Logistics, in text, diagrams, companion files and file names
- Module 06 apps topic opens with what an app is and how an app in Copilot Studio compares with the Cowork App skill and Power Apps canvas and model-driven apps: two new slides with diagrams and the matching readme section
- Module 02 deck notes where Cowork saves custom skills (OneDrive, Documents/Cowork/Skills) and that plugins are Microsoft 365 app packages under Customize > Plugins, on the skill sources and plugins slides
- German translation of the module 07 lab (`lab-01-build-and-migrate-from-the-terminal-de.md`); the module 07 lab readme gains a title, an intro and a lab table with Deutsch and Focus columns like modules 02 to 06
- Module 05 deck teaches each topic beside its lab slides: teaching slides with concept diagrams (unattended instructions, guardrails and cost, routing descriptions, child or connected agent, routing rules, Foundry agent types, endpoint protocols, how the planner calls a Foundry agent, access and preview, the parts of an evaluation, test methods, failing case to fix); the deep reasoning topic is six plain slides (what deep reasoning is, what it brings, turning it on for one step, where it is configured in a Standard agent, seeing where it reasoned, when it pays off) in place of the reason keyword, model and ticket backlog slides; 29 to 45 slides
- Module 04 and 05 labs run without command-line tools: the class uses the hosted REST API and MCP labs (readmes, topic readmes and schedule link them), the hosted MCP lab drops its MCP Inspector exercise, connectors lab-02 drops the PnP PowerShell provisioning, and the autonomous agent lab drops the Inspector, `dotnet run` and dev tunnel steps and points at the hosted `lab-human-resource-mcp` server
- The hosted REST API and MCP labs no longer refer to the local versions (alternative-version intros, the Entra ID and local-server pointers are gone), so every lab builds on the hosted services
- German translations of every lab in modules 02, 04 and 06 (21 new `-de.md` guides, module 04's hosted alternatives included); the lab readmes of modules 02 to 06 each have one lab table with a Deutsch column linking the German guide
- Dataverse lab `labs/04-cs-tools/02-dataverse/lab-01-answer-and-record-job-openings-in-dataverse.md` (20 minutes): the HR agent answers from a Job Opening table as knowledge and records a new row through a Dataverse tool, listed in the module lab readme and the topic readme
- Connectors lab-02 builds on the HR agent as a Standard agent: the agent creation, the new-experience steps, the repeated Excel tool setup and the publish exercise are gone, testing uses the activity map, and the lab is retitled "Give the HR Agent Live SharePoint and Excel Data with Connector Tools"
- Agent flows lab `labs/04-cs-tools/04-agent-flows/lab-01-calculate-a-start-date-with-an-agent-flow.md` (15 minutes): the HR agent calls an agent flow that calculates a new hire's earliest start date, listed in the module lab readme and the topic readme
- Module 04 labs follow the demo numbering: `labs/04-cs-tools/lab-3` is now `03-connectors/lab-02-sharepoint-and-excel-connector-tools.md` with its `assets` and `setup` in a companion folder and its diagrams in `03-connectors/_images`; the module lab readme and the class schedule link to it, and its closing link points to the REST API lab
- Prompts lab `labs/04-cs-tools/01-prompts/lab-01-build-a-prompt-tool.md` (and its German sibling) starts with a task that builds the **Check Ticket Status** topic on any agent, with sample ticket JSON in `SNTicketInfo` and an Adaptive Card, so the lab no longer needs an agent from outside the class or a ServiceNow instance
- Computer use lab `labs/04-cs-tools/07-computer-use/lab-01-run-the-food-shop-with-computer-use.md` on the class food shop, with a note in the topic readme where the shop comes from; `src/food-shop` replaced by the Angular shop of the Claude Code masterclass (catalog edit on its own page) and `src/food-catalog-service` added from its .NET catalog service, deployed in `rg-copilotstudio-labs` as `lab-food-shop` and `lab-food-catalog-service`
- Module 04 alternative labs on hosted services: `lab-01-call-a-secured-rest-api-alt.md` builds the HR-Services connector on the anonymous `lab-hr-service` Function App (with `lab-food-catalog-api` as the optional second API), and `lab-01-give-an-agent-mcp-tools-alt.md` registers the anonymous `lab-human-resource-mcp` server, all deployed in `rg-copilotstudio-labs`
- How Agents Work: a "Work IQ: The Work Context Behind Copilot" section on what Work IQ is (its data, the context, tools, chat and workspaces parts, user-scoped access, cost) and a "What Work IQ is" slide with its diagram in the module 01 deck
- Presenter guides for every demo in modules 03 to 05, each beside its demo, naming the agent to use
- German translations of the 13 lab guides in modules 03 to 05 as `lab-01-*-de.md` beside each English guide; UI labels and typed text stay English, links between labs point to the German siblings
- Module 06 topic 08, Migrate Standard Agents to Microsoft Copilot Harness Agents: when to migrate, the upgrade, rebuild and terminal routes, where each Standard part from modules 03 to 05 lands, topics rebuilt as workflow tools and hooks; the Health Advisor demo, the HR agent lab, four slides in the module 06 deck, and the lab on the Day 4 schedule
- Add the `wiqd plugin import` command to the Cowork module: a short teaching and one slide with an overview of what it does
- Module 02 deck slide 10 "A typical Cowork interaction" shows the interaction-loop diagram full width instead of the screenshot
- Module 02 intro topic: three new slides on what Cowork remembers, model and effort, and core capabilities, each with its own diagram
- Module 02 deck slide 17 "Producing a market brief": a row under the four green output boxes names the harness element that serves each step
- Add the `00` class deck: MASTER CLASS slide, intro slides and one class path slide per course day
- Module 01 deck: "From Copilot to Cowork" shows the Chat and Cowork diagram full width, and a new slide "Start without code, grow into Copilot Studio" follows it
- Capitalize Copilot and Cowork everywhere in the class Markdown, the module 01 deck and its vocabulary diagram
- How Agents Work: a "What a Harness Is" section and slide that explain the harness through what it equips the model with (context, tools, skills, memory, sandbox and files, the orchestration loop, guardrails)
- Where to Build and What It Costs: a "What the Model Costs in Cowork" section and slide with the November 2026 Cowork models, reasoning effort levels and what drives a task's credits
- Module 01 labs: five external labs (Agent Builder, SharePoint agents, Analyst, Researcher, share and use agents) migrated into `labs/01-intro` as local guides with their screenshots and sample files; the readme links the local copies and lists the originals as sources
- Module 02 deck gets the Import a Claude plugin slide at the end of the plugins topic.
- Lab run record `labs/02-cowork/cowork-lab-cost.json` for the module 02 Cowork labs: exercises run, model and effort, and the Copilot Credits per task, still marked not yet available
- Lab run record `labs/copilot-studio-labs.json` for the module 03 to 05 Copilot Studio labs: exercises run per lab, the tests, and the Copilot Credits each showed, most still not shown
- Presenter guides for every demo in module 06, each beside its demo, with a note under the title naming the agents the demo shows
- Module 06 skills topic opens with an intro: what a skill is, where skills come from (including the skills marketplace, preview) and where they are saved (including the Copilot Cowork OneDrive location) and the built-in skills, as four new slides with their diagrams, and the topic readme carries the matching teaching
- Update demos
- Update lab 06/04 and 06/05 SVGs: Progress: 3/3 · routing-staff-questions-to-hr-mcp.svg
- Run lab 06/04 in browser: Lab 06/04 browser run (Integrationsonline Production)
- Update lab 06/04 and 06/05 SVGs: I relabelled the diagram in
- Find 404 path on HR MCP server: No 404 request is recorded anywhere
- Add /mcp path to HR MCP server: The HR server now answers MCP at both / and /mcp
- Run lab 03/06 in the browser: Progress: 9/9 · report
- Run lab 01/05 in the browser: The site is renamed: its title is now LAB-Grey Logistics HR 0105 (checked after a reload)
- Update .run
- Release build

### Changed

- Labs 06/04 and 06/05 build on the class MCP servers: the Sales Account Assistant registers the hosted food catalog (`lab-food-catalog-api`) in place of the Dataverse MCP server and reads live prices and stock with its write tools turned off, and the grounding lab builds a Restaurant Staff Assistant on the hosted HR MCP server in place of Work IQ; both guides, their German versions and diagrams match the live product after browser runs on 2026-11-04, and the module, class and schedule tables carry the new 06/05 title
- The HR MCP server also answers at `/mcp`, the address Microsoft Copilot harness agents can list tools from; the root address stays for the module 04 MCP lab
- The module 04 MCP lab and the agent-parts diagram send learners to their own environment instead of a shared class environment

- Module 06 topics reordered in demos, labs, deck and schedule: Test and Evaluate is topic 06, Migrate is topic 07 and Building Apps is topic 08, with the demo files, slide numbers, overview diagram, lab path and day 4 lab order following
- Module 05 drops the Voice Agents topic: Test and Evaluate Standard Agents moves from `07-evaluations` to `06-evaluations` in demos and labs, the module 05 deck loses its voice slides (31 to 29 slides, six topics on the overview, dividers and module path diagram) and is redelivered to OneDrive, and the class readme, module readmes, cost and harness tables and migration table no longer link to voice
- Module 02 deck slide 20 (Anatomy of a SKILL.md) drops the companion-files picture and splits 50:50, bullets left and the SKILL.md code right.
- Exclude all pptx folders and the assets folder from git: `.gitignore` ignores `pptx/` and `/assets/`, and their files stay on disk
- Module 02 Cowork labs name a cheaper model that does the job as a proposal note on top of each lab guide
- The first Copilot Studio lab skips the environment exercise, since the environments are pre-created for students
- The Workflows lab is removed from module 01 and from the lab tests
- The SharePoint agent labs ground on the copilot-demo SharePoint site
- The publishing lab, English and German, drops the icon and knowledge steps of the Agentic HR agent, already covered in the first and the knowledge lab, and names its Excel tool a prebuilt Connector instead of a Custom connector; the Copilot Chat test no longer promises document references or shows the knowledge citation screenshot
- Module 06 migration readme: the Adaptive Cards row says what replaces cards (the agent asks in conversation, passes input to a workflow and shows results as formatted text), with no card designer needed
- Module 06 topics reordered: Test and Evaluate is now topic 06, Migrate topic 07 and Building Apps topic 08, in demos, labs, deck images and the class and module readmes

### Removed

- The local REST API and MCP lab guides (`lab-01-call-a-secured-rest-api.md`, `lab-01-give-an-agent-mcp-tools.md` and their German versions); the hosted labs replace them and take over their file names (the `-alt` suffix is gone)
- Module 06 topic 01 drops "Where each rule lives", slide and readme section, since the real Build tab shows no Workflows or Hooks

### Fixed

- Martin's lab 01 (reconcile with an agent flow, German): the file step uses Get files (properties only) instead of Get file properties, with no ID to fill in, and the script step loads its parameters from the workbook before the file expression is set, so the flow receives the parameters
- Lab 06/01 (compare Standard and Microsoft Copilot harness agents) matches the live product after a run on 2026-11-04: the Agents list has no kind column, a Microsoft Copilot harness agent saves with the **Save** icon at the top right and folds its tabs into a **Build** drop-down in a narrow window, its new agent already holds Work IQ and Search all websites, and Troubleshooting covers the EnforcementUsageCredits error in Preview; Exercise 7 ran with credits in Integrationsonline Production and its Expected now says the agent finds no Tier 1 figure without Northwind data
- Module 06 deck: the "Reading the plan in Preview" slide is retitled "Following the agent's reasoning in Preview" and describes only what the screenshot shows, with no plan or execution path; the skills slide 20 is rebuilt
- Broken image links in the readmes and labs: the slide diagrams (`pptx/images/*.svg`) they embed are tracked again, while decks, renders and photos stay local
- Module 02 Cowork lab guides corrected from the live runs
- Module 03 deck slides 13, 21 and 28: the screenshots are sharpened from the original captures at 4x resolution, and the PDF is re-exported
- Module 03 to 05 lab guides fixed where a live run found an error
- Module 01 Agent Builder lab re-run: all screenshots retaken at 1280 width, two new ones for the SharePoint source and the Share menu, and the guide steps and image texts matched to the current UI
- Publishing, secured REST API, autonomous agent, multi-agent and evaluations lab guides corrected from the live runs; the publishing lab builds its Copilot Chat agent as a Standard agent, since the Microsoft 365 Copilot agent entry is gone
- MCP lab Exercise 4 (Microsoft 365 Copilot replied blank) rewritten to match a live rerun, where Microsoft 365 Copilot asked to connect first and answered after Connect and Retry; the blank reply did not come back, its cause is unknown
