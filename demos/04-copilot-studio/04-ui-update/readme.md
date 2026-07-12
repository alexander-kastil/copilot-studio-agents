# The New Copilot Studio Experience

In June 2026 Microsoft shipped a rebuilt Copilot Studio, delivered as a production-ready preview and rolled out worldwide. It runs beside the classic experience rather than replacing it: a New experience toggle on the home page switches between them, and an agent built in one experience cannot be converted to the other. This sub-module teaches what students work with today (the classic authoring surface in [Basics](../01-basics/readme.md), [Tools](../02-tools/readme.md), and [Advanced](../03-advanced/readme.md)) alongside an honest, demo-led preview of the new experience.

Treat classic as the primary teaching track and the new experience as guided demos. Most tenants still open classic by default, existing agents and ALM pipelines live there, and not every feature has moved across yet. For each new-experience idea, the theory and demos show the classic equivalent so the concept transfers when a tenant adopts the toggle.

## Topics

| Topic | What it teaches |
|-------|-----------------|
| [The Two Copilot Studio Experiences](01-new-experience-overview/readme.md) | The toggle, coexistence, the one-way conversion rule, and how to tell which experience you are in |
| [The Unified Build Surface and the New Orchestrator](02-unified-build-and-orchestrator/readme.md) | The four-tab Build surface, the component map from classic, and the enhanced orchestration runtime |
| [Agent Skills in Copilot Studio](03-agent-skills/readme.md) | The Agent Skills open format, `SKILL.md`, and importing Claude Code or GitHub Copilot skills |
| [Tools, MCP, and the New Workflows Designer](04-workflows-and-mcp/readme.md) | Connectors, MCP servers, and the new node-by-node workflows designer with agent nodes |

## Demos

| Topic | Demo |
|-------|------|
| [The Two Copilot Studio Experiences](01-new-experience-overview/readme.md) | [Build and Ground Your First New-Experience Agent](../demo-01-build-and-ground-an-agent.md) |
| [The Unified Build Surface and the New Orchestrator](02-unified-build-and-orchestrator/readme.md) | [Trace an Agent's Reasoning in the New Orchestrator](../demo-02-trace-agent-reasoning.md) |
| [Agent Skills in Copilot Studio](03-agent-skills/readme.md) | [Add a Reusable Skill to an Agent](../demo-03-add-a-reusable-skill.md) |
| [Tools, MCP, and the New Workflows Designer](04-workflows-and-mcp/readme.md) | [Connect an MCP Server and Automate with a Workflow](../demo-04-connect-mcp-and-workflow.md) |

## Labs

| Lab | Focus |
|-----|-------|
| [Build a Sales Account Assistant in the New Experience](../../../labs/04/lab-01-sales-account-assistant.md) | Capstone: build, ground, tool up, skill, and publish a new-experience agent end to end |
| [Package Team Knowledge into a Portable Skill](../../../labs/04/lab-02-portable-skill.md) | Author a `SKILL.md`, reuse it across two agents, and contrast with classic topics |

## Classic to new quick reference

| Task | Classic experience | New experience |
|------|--------------------|----------------|
| Switch surfaces | Not applicable | Home page, top-right New experience toggle |
| Primary navigation | Topics, Knowledge, Actions, Settings | Build, Preview, Evaluate, Monitor |
| Configure an agent | Nine-plus config areas | Unified Build components panel |
| Orchestration | Configurable, classic or generative | Enhanced runtime, always on |
| Reusable behaviour | Topics, plugins | Skills panel, `SKILL.md` create or upload |
| Add an MCP server | Tools, add tool, requires generative orchestration | Tools, Add a tool, Model Context Protocol |
| Test | Test pane | Preview tab, then Evaluate and Monitor |

## Labs to draw from

The official [microsoft/mcs-labs](https://github.com/microsoft/mcs-labs) repo carries the closest hands-on material. The in-class capstone above is based on [Orchestration with Copilot Studio](https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/) (Level 300, roughly 60 minutes), which builds a new-experience Sales Account Assistant and packages behaviour into a Skill. For a full day, extend into [Advanced Agent in a Day](https://microsoft.github.io/mcs-labs/workshops/advanced-agent-in-a-day/). Note that the older Copilot Developer Camp labs retire on 2026-06-30 in favour of the [Copilot Studio Agent Academy](https://microsoft.github.io/agent-academy/).

## Links & Resources

[Agents overview (new experience)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/overview)

[Classic vs. new agent experience](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/classic-vs-new)

[Skills overview (preview)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-overview)

[What's new in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/whats-new)

[Meet the new Copilot Studio (announcement)](https://techcommunity.microsoft.com/blog/copilot-studio-blog/meet-the-new-copilot-studio-rebuilt-for-more-complex-multi-step-work/4526488)
