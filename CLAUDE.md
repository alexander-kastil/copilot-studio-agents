# CLAUDE.md

This is a hands-on masterclass repository for **Designing, Implementing & Maintaining Low-Code and Pro-Code Agents for Microsoft 365 with Copilot Studio**, a four-day workshop. Most content is README documentation; a few areas contain runnable code projects.

## Repository Layout

- `demos/01-intro`, `02-chat-productivity`, `03-cowork`, `04-copilot-studio`, `05-maintaining` — tutorial modules. Numbered prefix = delivery order. Do not reorganize.
- `labs/01` … `labs/04` — hands-on exercises; `labs/04` nests further (`01-basics`, `02-tools`, `03-advanced`).
- `src/` — standalone runnable projects referenced by modules (MCP servers, connectors, agents, sample services).
- `infra/`, `azure.yaml`, `scripts/` — deployment assets for the sample projects.

## Available Skills

Skills live under `.claude/skills/`. There are no custom slash commands in this repo.

- `create-class` — master skill for authoring and maintaining this course (scaffold, write guides, generate slides, enrich module READMEs, track completeness).
- `brand-voice-cowork` — audits and fixes Markdown against the repo's brand-voice rules (see below).
- `mermaid-expert` — authors Mermaid diagrams for the module and lab docs, following the repo's Mermaid label rule.

## Brand Voice

All `readme.md` files in `demos/` must pass the brand-voice rules in `.claude/skills/brand-voice-cowork/references/rules.md`. Run the `brand-voice-cowork` skill after writing or significantly editing any README. Brand voice stays a repo-local skill (the Cowork audience differs from a Claude Code class); the `create-class` master discovers it by globbing `.claude/skills/brand-voice-*`.

The four rules in short:
- No em dashes in prose — replace with `,` `;` `:` or `()`
- Mermaid node labels use `"quoted<br/>labels"`, never `\n`
- Paragraphs are capped at 4 sentences; start a new paragraph at the 5th
- Slash command tables are topic-specific — never the same generic set in every module; `/init` only in modules about project setup

## Hard Rules

- **PARALLELIZE ALL INDEPENDENT WORK.** When multiple tool calls, file reads, searches, or subagent tasks have no dependencies between them, you MUST issue them in a single parallel batch. Sequential execution of independent work is a bug.
- YOU MUST NOT commit or push without explicit user request.
- Internal links use relative paths (e.g. `demos/01-intro/readme.md`); anchors use `#heading-name`.
- Code fences must declare a language (`bash`, `python`, `json`, …).
- If a quality check fails, fix the underlying issue. Do not bypass with `--no-verify`.
- Write clean code with no noise: no inline comments, no explanatory remarks, no placeholder notes.
- No error handling in scripts unless explicitly requested.

## Workflow Orchestration

### 1. Plan Node Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately — don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes — don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.
- **Tutorial over library**: Prioritize clear explanations and copy-paste examples over reusable abstractions.
- **Small fixes → minimal diff**: Do not rewrite a section to fix a typo.

## Token Efficiency

- Never re-read files you just wrote or edited.
- Never re-run commands to verify unless the outcome was uncertain.
- Do not echo back large blocks of code or file contents unless asked.
- Batch related edits into single operations.
- Do not summarize what you just did unless the result is ambiguous or you need additional input.
