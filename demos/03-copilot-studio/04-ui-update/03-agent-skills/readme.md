# Agent Skills in Copilot Studio

Skills are the standout addition to the new experience and the strongest tie to the rest of this course. A skill is a reusable capability defined by a name, a description, and Markdown instructions, stored as a `SKILL.md` file. Because it uses the same Agent Skills open format as Claude Code and GitHub Copilot, a skill a maker or developer already wrote can be uploaded straight into a Copilot Studio agent.

For makers, the key idea is separation of concerns. Instructions set the agent's general behavior, knowledge grounds it, tools connect it to services, and skills package focused task recipes the agent activates only when a request matches. This keeps a complex agent modular instead of one giant instruction block.

## What to teach

- What a skill is: a name, a description, and Markdown instructions that tell the agent how to handle a specific task or scenario.
- The file format: a `SKILL.md` file with YAML front matter (name, description) plus Markdown instructions, optionally bundled in a ZIP with scripts, templates, and reference documents.
- Loaded on demand: only the name and description sit in the agent's context by default; the full instructions load when the orchestration runtime matches a request to the skill.
- Why the description matters: the runtime uses it to decide when to activate the skill, so a clear, keyword-rich description is what makes invocation reliable.
- Two authoring paths on the Build tab, Skills panel: Create from blank (name, description, instructions in the UI) or Upload a skill (a `SKILL.md` or a ZIP).
- Portability: import an existing Claude Code or GitHub Copilot skill by uploading it, then download, replace, or delete it later from the skill configuration panel.
- Skills versus tools: a tool connects to an external service; a skill is self-contained instructions, and a skill can direct the agent to use a specific tool in a particular way.
- Current limit to flag honestly: a skill travels with its agent through solutions and ALM (per-agent distribution), not yet through a shared cross-tenant catalog.

## Skill file shape

```markdown
---
name: customer-support-escalation
description: Handle escalations when a customer reports a blocked or urgent issue. Collect the case details and route to the right queue.
---

# Customer support escalation

Steps the agent should follow, response format, and edge cases go here as plain Markdown.
```

## Key Topics covered in this module

[Skills overview for agents](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-overview)

[Create a skill for an agent](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-create)

[Add an existing skill to an agent](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-add-existing)

[Manage and delete skills in an agent](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-manage)
