# Changelog


## [Unreleased]

### Added

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
- Run lab 05/02 deep reasoning: Lab 05/02 ran end to end

### Changed

- Module 02 deck slide 20 (Anatomy of a SKILL.md) drops the companion-files picture and splits 50:50, bullets left and the SKILL.md code right.
- Exclude all pptx folders and the assets folder from git: `.gitignore` ignores `pptx/` and `/assets/`, and their files stay on disk
