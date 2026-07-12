# Copilot Studio: New Experience + Skills — Research Notes

Context gathered 2026-07-12. Source: Microsoft Tech Community announcement + Microsoft Learn docs + Microsoft's hands-on labs repo. For use as reference context when building/testing agents in the new Copilot Studio experience.

## 1. What launched

Announcement: [Meet the new Copilot Studio: rebuilt for more complex, multi-step work](https://techcommunity.microsoft.com/blog/copilot-studio-blog/meet-the-new-copilot-studio-rebuilt-for-more-complex-multi-step-work/4526488) (Ben Appleby, Microsoft — published Jun 9, 2026, updated Jun 17, 2026).

- Status: **public preview**, worldwide, "production-ready" (the post was corrected from an initial "GA" claim).
- New agentic orchestrator: built on a new coding-harness/CLI layer, stronger instruction adherence, long-horizon/recursive task execution, larger content volumes, richer file outputs.
- New agent building UI: instructions, skills, tools, and knowledge visible in one place; config tabs reduced from 9 → 4; new full-page test experience with inline chain-of-thought and tool-call visibility.
- New workflow designer: node-by-node testing, versioning, agent nodes (call agents from inside a workflow), MCP server connections (preview).
- Classic and new experiences **coexist** — switch via the "New experience" toggle on the Copilot Studio home page. **Agents built in one experience cannot be converted to the other.**
- Entry point: [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) → "Try now".

## 2. Skills in the new experience

Docs: [Skills overview (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview) · [Create a skill (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-create) · [Add an existing skill (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-add-existing)

- Skills are based on the **Agent Skills open format** (the same spec used by Claude Code / GitHub Copilot / `agentskills.io`). This is the same format your coding agent's own skills follow.
- A Skill = **name + description + Markdown instructions**, stored as `SKILL.md` with YAML front matter, optionally bundled in a ZIP with supporting scripts/templates/reference files.
- **Loaded on demand**: only name + description sit in the agent's context by default; full instructions load only when the orchestrator matches a user request to the skill. (Agent's own base instructions are always loaded in full — skills are the exception, not the rule.)
- Location in UI: **Build tab → Skills** (components panel). Two entry points:
  - **Create from blank** — enter name (lowercase/numbers/hyphens only), description (used by the orchestrator to decide when to invoke it), and Markdown instructions.
  - **Upload a skill** — drag/drop a standalone `SKILL.md` or a `.zip` package containing one.
- **Portability confirmed**: Microsoft's blog post explicitly states you can import existing **GitHub Copilot or Claude Code skills** into Copilot Studio.
- Current limitation (as of June 2026 per third-party analysis, not yet in official docs): skill distribution is **per-agent** — a skill travels with its agent through solutions/ALM, not yet via a shared cross-tenant catalog. A catalog-style sharing model is reportedly in progress.
- Skills can reportedly reference the agent's own tools (not just bundled scripts), per the same third-party writeup — worth verifying directly in the product since this isn't yet in the official Learn docs.

Useful unofficial deep-dive (not a Microsoft doc, treat as secondary): [Modern Agents Have Skills Now — The Custom Engine](https://microsoft.github.io/mcscatblog/posts/modern-mcs-agent-skills/).

## 3. Hands-on labs (in priority order)

### Primary: "Orchestration with Copilot Studio" (mcs-orchestration)
**[microsoft.github.io/mcs-labs/labs/mcs-orchestration](https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/)**
Level 300, ~60 min, part of the official `microsoft/mcs-labs` GitHub repo's Core Learning Path.

What it covers:
- Builds a new-type agent ("Sales Account Assistant") in the **New experience** from scratch.
- Attaches knowledge + tools (a weather connector, Dataverse MCP Server, custom MCP servers).
- Exercises the **New Orchestrator's Agentic Reasoning Loop**: multi-tool reasoning, dynamic chaining, "Get rationale" to inspect planner decisions, activity tracker for debugging routing.
- **Packages behavior into a reusable Skill** directly in the UI: right rail → *Add skill* (+) → *Upload a skill* (SKILL.md) or *Create from blank* — then watches the orchestrator load the skill and chain it with MCP servers/knowledge/weather in a single turn.
- Contrasts Standard generative orchestration (single-pass planner, one tool/turn) vs. the New Orchestrator's reasoning loop.

### Secondary: "Advanced Agent in a Day" workshop
**[microsoft.github.io/mcs-labs/workshops/advanced-agent-in-a-day](https://microsoft.github.io/mcs-labs/workshops/advanced-agent-in-a-day/)**
Full-day, 300-level, assumes Copilot Studio basics already known.

Covers multi-agent core concepts, all four tool types (connectors, agent flows, MCP servers, custom prompts, CUA), generative orchestration/dynamic chaining, the new Workflows autonomous-agent capabilities, and — notably — **authoring agents from the terminal with Copilot Studio skills** (CLI-side, complementary to the UI-based skill authoring above). Optional take-home labs extend into multi-agent, governance/DLP, component collections, and ALM.

### Repo / portal
- GitHub source: [github.com/microsoft/mcs-labs](https://github.com/microsoft/mcs-labs)
- Rendered portal: [microsoft.github.io/mcs-labs](https://microsoft.github.io/mcs-labs/) (community mirror also exists at `pratapladhani.github.io/mcs-labs`)
- Organized into journeys: Quick Start, Business User, Developer, Autonomous AI — plus a curated Bootcamp sequence.

### Note on the older lab set
The prior Copilot Studio labs under **Copilot Developer Camp** (`microsoft.github.io/copilot-camp`) are being retired **June 30, 2026** in favor of a newer program:

**Copilot Studio Agent Academy** — [microsoft.github.io/agent-academy](https://microsoft.github.io/agent-academy/)
A multi-phase, rank-based training program (Recruit → higher ranks), plus standalone "Special Ops" labs (YAML, MCP servers, Copilot Cowork use cases) and a "Cowork Collective" set. Newer than mcs-labs' core path — worth checking periodically for a dedicated Skills module as the academy matures, since it wasn't confirmed to have one yet as of this research.

## 4. Quick reference — where things live

| Task | Location |
|---|---|
| Toggle new vs. classic experience | Copilot Studio home page, top-right toggle |
| Create a skill | Agent → **Build** tab → **Skills** panel → *Add skill* |
| Skill file format | `SKILL.md` (YAML front matter: name, description) + Markdown body, optional ZIP with scripts/templates |
| Import Claude Code / GitHub Copilot skill | Build tab → Skills → *Upload a skill* |
| Inspect orchestrator decisions | Activity tracker + "Get rationale" in test pane |
| MCP servers | Tools panel → Add tool → filter to Model Context Protocol |
