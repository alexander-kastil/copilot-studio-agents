# The Two Copilot Studio Experiences

In June 2026 Microsoft shipped a rebuilt Copilot Studio, delivered as a production-ready preview and rolled out worldwide. It runs beside the classic experience rather than replacing it, so both are live in the same tenant at once. This topic gives makers a clear mental model of what changed and, most importantly, how to tell which experience they are in before they touch anything.

The teaching goal is transfer, not replacement. Students learn the classic authoring surface they use in production today (Topics, Knowledge, Actions, Settings), then see the new experience beside it so the concepts carry over when their tenant adopts it. Treat classic as the primary track and the new experience as guided demos.

### What launched

The rebuilt Copilot Studio brings three changes that matter to a maker. It adds an enhanced orchestration runtime that reasons and plans across steps on every turn, a natural-language-first authoring model where you describe the agent's job instead of hand-building topics, and a single consolidated Build surface that replaces the separate classic areas. All of this ships alongside classic, not on top of it, so nothing you run today is moved or rewritten.

Because both experiences are live in the same tenant, coexistence is the normal state, not a migration event. You can keep shipping classic agents while you learn the new surface, and you decide per agent which one to build in. Treat the toggle as a per-agent choice rather than a tenant-wide switch you flip once.

### Telling the two experiences apart

The fastest tell is the navigation. Classic shows Topics, Knowledge, Actions, and Settings down the left; the new experience shows Build, Preview, Evaluate, and Monitor tabs across the top. If you ever see Topics in the navigation, you are in classic, full stop.

To move between them, open the Copilot Studio home page, choose Try it now on the banner, then use the New experience toggle to switch back and forth at any time. Confirming which experience you are in before you create an agent is the single habit that prevents the most rework. A minute spent reading the tabs saves an hour of building in the wrong place.

### The one-way conversion rule

Agents built in one experience cannot be converted to the other. The two run on fundamentally different architectures (classic uses authored topics and branching; the new experience uses instructions plus the reasoning runtime), so there is no bridge and no import path between them. This makes the per-agent choice a real commitment rather than a preference you can undo later.

The practical consequence is simple: decide the experience before you invest in an agent, not after. Rebuilding a mature classic agent in the new experience means re-authoring it from scratch, and the same is true in reverse. Read the navigation, confirm the experience, then start building.

### When to choose which

Classic still leads where you need deterministic control: authored topics and branching logic, configurable orchestration modes (classic or generative), and the broader mature feature set that production agents lean on today. Reach for classic when the flow must follow an exact, auditable path, or when it depends on a feature the new experience has not surfaced yet.

Choose the new experience for a greenfield agent that reasons over Microsoft 365 data, when you want the simpler instructions-first model, and when you want access to Skills and the enhanced orchestrator. In this module, classic stays the primary production track and the new experience runs as guided demos and labs, so the concepts transfer cleanly when your tenant adopts it.

## Classic to new at a glance

| Concept | Classic experience | New experience |
|---------|--------------------|----------------|
| Primary navigation | Topics, Knowledge, Actions, Settings | Build, Preview, Evaluate, Monitor |
| Authoring model | Topics, triggers, branching nodes | Natural-language instructions plus reasoning |
| Orchestration | Configurable (classic or generative) | Enhanced runtime, used for all agents |
| Convert between them | Not possible | Not possible |
| Status | Generally available | Production-ready preview |

## Hands-On Demo

- [Build and Ground Your First New-Experience Agent](./demo-01-build-and-ground-an-agent.md): the maker creates a Northwind Sales Assistant from a plain-language description, scopes it with Instructions, grounds it on a product document, and verifies a cited answer in Preview.

## Hands-On Lab

- [Compare the Classic and New Copilot Studio Experiences Side by Side](../../../../labs/03-copilot-studio/04-ui-update/01-new-experience-overview/lab-01-compare-classic-and-new.md): the maker stands up a minimal Northwind assistant in the new experience, contrasts it against a classic agent, and records a per-agent decision that reinforces the toggle, coexistence, and the one-way conversion rule.

## Key Topics covered in this module

[Agents overview (new experience)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/overview)

[Classic vs. new agent experience](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/classic-vs-new)

[What's new in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/whats-new)

[Meet the new Copilot Studio (announcement)](https://techcommunity.microsoft.com/blog/copilot-studio-blog/meet-the-new-copilot-studio-rebuilt-for-more-complex-multi-step-work/4526488)
