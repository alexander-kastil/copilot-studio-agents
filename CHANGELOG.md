# Changelog


## [Unreleased]

### Added

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

### Changed

- Module 02 deck slide 20 (Anatomy of a SKILL.md) drops the companion-files picture and splits 50:50, bullets left and the SKILL.md code right.
- Exclude all pptx folders and the assets folder from git: `.gitignore` ignores `pptx/` and `/assets/`, and their files stay on disk
- Module 02 Cowork labs name a cheaper model that does the job as a proposal note on top of each lab guide
- The first Copilot Studio lab skips the environment exercise, since the environments are pre-created for students
- The Workflows lab is removed from module 01 and from the lab tests
- The SharePoint agent labs ground on the copilot-demo SharePoint site

### Fixed

- Broken image links in the readmes and labs: the slide diagrams (`pptx/images/*.svg`) they embed are tracked again, while decks, renders and photos stay local
- Module 02 Cowork lab guides corrected from the live runs
- Module 03 deck slides 13, 21 and 28: the screenshots are sharpened from the original captures at 4x resolution, and the PDF is re-exported
- Module 03 to 05 lab guides fixed where a live run found an error
- Module 01 Agent Builder lab re-run: all screenshots retaken at 1280 width, two new ones for the SharePoint source and the Share menu, and the guide steps and image texts matched to the current UI
- Publishing, secured REST API, autonomous agent, multi-agent and evaluations lab guides corrected from the live runs; the publishing lab builds its Copilot Chat agent as a Standard agent, since the Microsoft 365 Copilot agent entry is gone
- MCP lab Exercise 4 (Microsoft 365 Copilot replied blank) rewritten to match a live rerun, where Microsoft 365 Copilot asked to connect first and answered after Connect and Retry; the blank reply did not come back, its cause is unknown
