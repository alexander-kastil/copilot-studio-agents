# CLAUDE.md

Automate Business Processes with Copilot Studio and Copilot Cowork: a 4-day hands-on class for Power Platform makers, software engineers and solution architects who build agents for business teams.

## Layout

```text
demos/readme.md                      class readme: Duration, Audience, Prerequisites, Modules, Schedule
demos/_images/                       class-path-by-day.svg
demos/NN-<module>/readme.md          module readme, 8 modules from 01-intro to 08-ai-teammates
demos/NN-<module>/NN-<topic>/        readme.md (teaching), demo-<slug>.md guides, companion folders, _images/
demos/NN-<module>/pptx/              slide specs NN-MM-<slug>.md, topics.json, images/
demos/pptx/                          portraits.json
labs/NN-<module>/                    readme.md, NN-<topic>/lab-01-<slug>.md, _images/
src/cs-schema/                       Copilot Studio agents, CS- rebuilds and workflows as .mcs.yml
src/food-catalog-mcp/, hr-mcp-server/  MCP servers (.NET)
src/parts-inventory-connector/       custom connector API (.NET)
src/food-shop/                       Angular sample app
src/assets/                          food-api-swagger.json
infra/, azure.yaml                   deployment of the sample projects
setup/                               tenant, Cowork, credit and AI teammates setup
tasks/                               todo.md, lessons.md
```

Module and topic numbers are two-digit, in delivery order; do not reorganize them. Copilot Studio spans `03-cs-basics` to `07-cs-maintaining`: Standard agents in 03 to 05, GitHub Copilot agents in 06. Every topic has a teaching readme, a Hands-On Demo and a Hands-On Lab, filed inside its `NN-<topic>/` folder; lab numbering restarts at `lab-01` per topic. A doc that shows a slide diagram embeds that slide's file by relative path; a diagram no slide uses sits in `_images/` beside the doc.

## Harness

Orchestration runs in the installed plugins and the house rules in `~/.claude/CLAUDE.md` apply as they stand; this file repeats neither.

## Hard Rules

- `docs-agent` is banned here, even when a hook or the roster names it: readmes, guides, labs and schedules are written on the main thread.
- Internal links are relative; anchors use `#heading-name`.
- Code fences declare a language (`bash`, `python`, `json`, ...).
- If a quality check fails, fix the underlying issue; never bypass with `--no-verify`.
- No comments of any kind in code under `src/` (`//`, `/* */`, `///`, `#`, JSDoc, `TODO`, commented-out code); delete any you meet in a file you edit, keep prose in `readme.md`.
- No error handling in scripts unless explicitly requested.

## Working Method

- **Plan first** for anything non-trivial (3+ steps or an architectural decision): write it to `tasks/todo.md`, check in, then track progress there.
- **Verify before reporting done.** Run the check, show the command and its output. A claim is not a receipt.
- **Review `tasks/lessons.md`** at session start; `claude-learn`'s `instruction-audit` gate prunes it and this file.
- **Simplicity first**: minimal diff, root causes over patches, no rewrite to fix a typo.
- **Tutorial over library**: clear explanations and copy-paste examples over reusable abstractions.
