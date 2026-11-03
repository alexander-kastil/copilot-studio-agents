# Changelog


## [Unreleased]

### Added

- Module 05 deck teaches each topic beside its lab slides: teaching slides with concept diagrams (unattended instructions, guardrails and cost, routing descriptions, child or connected agent, routing rules, Foundry agent types, endpoint protocols, how the planner calls a Foundry agent, access and preview, the parts of an evaluation, test methods, failing case to fix); the deep reasoning topic is six plain slides (what deep reasoning is, what it brings, turning it on for one step, where it is configured in a Standard agent, seeing where it reasoned, when it pays off) in place of the reason keyword, model and ticket backlog slides; 29 to 45 slides
- Module 04 and 05 labs run without command-line tools: the class uses the hosted REST API and MCP labs (readmes, topic readmes and schedule link them), the hosted MCP lab drops its MCP Inspector exercise, connectors lab-02 drops the PnP PowerShell provisioning, and the autonomous agent lab drops the Inspector, `dotnet run` and dev tunnel steps and points at the hosted `lab-human-resource-mcp` server
- The hosted REST API and MCP labs no longer refer to the local versions (alternative-version intros, the Entra ID and local-server pointers are gone), so every lab builds on the hosted services
- Removed the local REST API and MCP lab guides (`lab-01-call-a-secured-rest-api.md`, `lab-01-give-an-agent-mcp-tools.md` and their German versions); the hosted labs replace them and take over their file names (the `-alt` suffix is gone)
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
- Update .claude, .gitignore, .time
- Update assets
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
- Update labs
- Update demos
- Update src
- Release build
- Clean and verify new food shop: Save already sent the full item, so pictureUrl and description survive an edit
- Translate module 02 Cowork labs: Progress: 4/5 · check
- Translate module 06 labs 05 to 08: Progress: 5/6 · check
- Draw topic 01-03 teaching SVGs: All seven SVGs are written
- Draw topic 04-06 teaching SVGs: I drew all six SVGs and wrote each one to its media-file path
- Draw topic 01-03 teaching SVGs: I drew the diagram and wrote it to
- Draw topic 04-06 teaching SVGs: I drew both diagrams at their media-file paths and checked them at half size: no overlaps, no clipped
- Draw topic 01-03 teaching SVGs: I drew both diagrams
- Draw topic 04-06 teaching SVGs: I drew the diagram at and checked i

### Changed

- Module 05 drops the Voice Agents topic: Test and Evaluate Standard Agents moves from `07-evaluations` to `06-evaluations` in demos and labs, the module 05 deck loses its voice slides (31 to 29 slides, six topics on the overview, dividers and module path diagram) and is redelivered to OneDrive, and the class readme, module readmes, cost and harness tables and migration table no longer link to voice
- Module 02 deck slide 20 (Anatomy of a SKILL.md) drops the companion-files picture and splits 50:50, bullets left and the SKILL.md code right.
- Exclude all pptx folders and the assets folder from git: `.gitignore` ignores `pptx/` and `/assets/`, and their files stay on disk
- Module 02 Cowork labs name a cheaper model that does the job as a proposal note on top of each lab guide
- The first Copilot Studio lab skips the environment exercise, since the environments are pre-created for students
- The Workflows lab is removed from module 01 and from the lab tests
- The SharePoint agent labs ground on the copilot-demo SharePoint site
- The publishing lab, English and German, drops the icon and knowledge steps of the Agentic HR agent, already covered in the first and the knowledge lab, and names its Excel tool a prebuilt Connector instead of a Custom connector; the Copilot Chat test no longer promises document references or shows the knowledge citation screenshot

### Fixed

- Broken image links in the readmes and labs: the slide diagrams (`pptx/images/*.svg`) they embed are tracked again, while decks, renders and photos stay local
- Module 02 Cowork lab guides corrected from the live runs
- Module 03 deck slides 13, 21 and 28: the screenshots are sharpened from the original captures at 4x resolution, and the PDF is re-exported
- Module 03 to 05 lab guides fixed where a live run found an error
- Module 01 Agent Builder lab re-run: all screenshots retaken at 1280 width, two new ones for the SharePoint source and the Share menu, and the guide steps and image texts matched to the current UI
- Publishing, secured REST API, autonomous agent, multi-agent and evaluations lab guides corrected from the live runs; the publishing lab builds its Copilot Chat agent as a Standard agent, since the Microsoft 365 Copilot agent entry is gone
- MCP lab Exercise 4 (Microsoft 365 Copilot replied blank) rewritten to match a live rerun, where Microsoft 365 Copilot asked to connect first and answered after Connect and Retry; the blank reply did not come back, its cause is unknown
- Translate three module 04 labs to German: I wrote the three German lab translations and the translation check ends with files=10 errors=0
- Translate module 06 labs 01 to 04: Of the shared section names, only "Verify" needed fixing in my four files
