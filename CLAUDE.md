# CLAUDE.md

Hands-on masterclass repository for **Automate Business Processes with Copilot Studio and Copilot Cowork**, a four-day workshop for Power Platform Makers, software engineers and solution architects. Most content is README documentation; a few areas contain runnable code projects.

Author with the global `create-class` skill, build slides with the global `create-pptx` skill, and run the `brand-voice-copilot` skill after writing or editing a readme or guide.

## Layout

```text
demos/readme.md                      class readme: Duration, Audience, Prerequisites, Modules, Schedule
demos/NN-<module>/readme.md          01-intro, 02-cowork, 03-copilot-studio, 04-maintaining, 05-ai-teammates
demos/NN-<module>/NN-<topic>/        readme.md (learning prose), the Hands-On Demo and its companion folders
demos/NN-<module>/pptx/              slide specs NN-MM-<slug>.md, topics.json, images/<slide>-<slug>.svg
labs/readme.md                       lab index, each folder pairs with a demo module
labs/NN-<module>/                    01-intro, 02-cowork, 03-copilot-studio, 05-ai-teammates: readme.md, lab-NN-<slug>.md, _images/
src/                                 standalone runnable projects the modules reference: agents, MCP servers, connectors, sample services
infra/, azure.yaml, scripts/         deployment assets for the sample projects
tasks/                               todo.md, lessons.md
```

- Modules and topics are numbered by delivery order; do not reorganize them. `labs/03-copilot-studio` nests further (`01-basics`, `02-tools`, `03-advanced`, `04-new-experience`).
- When a module or sub-module has numbered `NN-topic` subfolders, its demos and labs are filed inside the owning topic subfolder (companion folders alongside), never left at the parent root; per-topic lab numbering starts at `lab-01`.
- Each topic is a complete learning unit: developed learning-prose `readme.md` plus a Hands-On Demo and a Hands-On Lab.
- The `demos/01-intro/pptx/` to `demos/05-ai-teammates/pptx/` slide specs follow the create-pptx Gamma path. A readme, demo guide or lab that shows a slide diagram embeds that same file by relative path; a diagram no slide uses sits in `_images/` beside the doc that embeds it.

## Brand Voice

Every `readme.md` and guide under `demos/` and `labs/` follows `.claude/skills/brand-voice-copilot/references/rules.md`. Check a file against it after writing or significantly editing it. The skill stays repo-local because the Cowork audience differs from a Claude Code class; `create-class` finds it by globbing `.claude/skills/brand-voice-*`.

## Where the detail lives

| Topic | Lives in |
| --- | --- |
| Copilot Cowork custom `SKILL.md` authoring (frontmatter contract, kebab-case name matching the folder, companion-file limits, run-and-tune loop); use it whenever course content demonstrates or ships a Cowork skill | `.claude/skills/copilot-cowork/` |
| Copilot Studio `.mcs.yml` agent definitions under `src/agents/` (topic YAML, prebuilt entities, Adaptive Cards, conversation design, clone and sync via the VS Code extension); read `.claude/skills/copilot-studio/references/schema-verification.md` before writing any Copilot Studio YAML token, because Learn documents the UI, not the literal identifiers | `.claude/skills/copilot-studio/` |
| Mermaid diagrams for the module and lab docs, following the Mermaid label rule | `.claude/skills/mermaid-expert/` |
| Brand-voice audit and fixes for Markdown | `.claude/skills/brand-voice-copilot/` |

There are no custom slash commands in this repo.

## Harness

Orchestration runs in the integrations-marketplace mods (`D:\git-projects\integrations-marketplace`), and the house rules in `~/.claude/CLAUDE.md` apply as they stand; this file repeats neither.

- `subagent-delegation-plugin`: routes work to the owning agent (owners in `.claude/rules/`), sends fact gathering to the Haiku fact-gatherer, bounds every brief, keeps the agent ledger.
- `learn-loop-plugin`: runs `claude-learn` once a session goes idle.
- `report-plugin`: starts a status cron when an agent or workflow runs long.
- `intent-guard-plugin`: holds destructive commands nobody asked for.
- `ask-check-plugin`: stops questions the conversation already settled and unrequested findings.
- `write-gate-plugin`: holds a writer's finish until the humanize and marketing-psychology passes ran.
- `harness-plugin`: guards this file's shape, halts a run on `AGENT_STOP`, redirects it with `STEER.md`; `fix-constitution` realigns the repo.

## Hard Rules

- Internal links use relative paths (e.g. `demos/01-intro/readme.md`); anchors use `#heading-name`.
- Code fences declare a language (`bash`, `python`, `json`, ...).
- If a quality check fails, fix the underlying issue. Do not bypass with `--no-verify`.
- **Zero comments in code under `src/`, no exceptions**: no `//`, `/* */`, `///` or `/** */` doc comments, `#` script comments, JSDoc, banner or divider comments, `TODO`/`FIXME`/`HACK` notes, commented-out code or explanation lines above a method; delete any you meet while editing a file, rename or extract instead, and keep prose in `readme.md`.
- No error handling in scripts unless explicitly requested.

## Working Method

- **Plan first** for anything non-trivial (3+ steps or an architectural decision): write it to `tasks/todo.md`, check in, then track progress there.
- **Verify before reporting done.** Run the check, show the command and its output. A claim is not a receipt.
- **Review `tasks/lessons.md`** at session start; `claude-learn`'s `instruction-audit` gate prunes it and this file.
- **Simplicity first**: minimal diff, root causes over patches, no rewrite to fix a typo.
- **Tutorial over library**: clear explanations and copy-paste examples over reusable abstractions.
