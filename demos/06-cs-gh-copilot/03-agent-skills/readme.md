# Agent Skills in Copilot Studio

Skills are the standout addition of GitHub Copilot agents and the strongest tie to the rest of this course. A skill is a reusable capability defined by a name, a description, and Markdown instructions, stored as a `SKILL.md` file. Because it uses the same Agent Skills open format as Claude Code and GitHub Copilot, a skill a maker or developer already wrote can be uploaded straight into a Copilot Studio agent.

For makers, the key idea is separation of concerns. Instructions set the agent's general behavior, knowledge grounds it, tools connect it to services, and skills package focused task recipes the agent activates only when a request matches. This keeps a complex agent modular instead of one giant instruction block.

## What a skill actually is

A skill is a focused task recipe the agent activates only when a request calls for it. It carries three things: a name, a description, and Markdown instructions that spell out how to handle one specific task or scenario. Think of it as the difference between a general job description (your agent's instructions) and a step-by-step playbook for one recurring situation.

The instructions can be as simple as a numbered method and a response format, or as rich as a full playbook with edge cases. The agent reads them the way a new team member would read a one-page how-to before answering that particular kind of question.

## The SKILL.md file format

A skill lives in a single `SKILL.md` file. The top of the file is YAML front matter (the `name` and `description`) fenced between two `---` lines; everything below is plain Markdown that describes the behaviour. When a task needs supporting material, you bundle the `SKILL.md` together with scripts, templates, or reference documents into a ZIP, with `SKILL.md` at the root.

![Diagram of a SKILL.md file: YAML front matter with the name and description between two --- lines, then the Markdown instructions. The file is bundled at the root of a ZIP package beside scripts, templates and reference documents.](./_images/skill-md-file-and-zip.svg)

Keeping the data in a reference file (a price table, a set of canned responses) rather than in the instructions themselves means you update it in one place without rewriting the recipe. The instructions stay short and readable; the details stay maintainable.

## Loaded on demand, driven by the description

Only the name and description of each skill sit in the agent's context by default. The full instructions load just-in-time, when the orchestration runtime matches an incoming request to the skill. That on-demand loading is what lets an agent carry many skills without bloating every single turn with instructions it rarely needs.

![Animated diagram: a request reaches the orchestration runtime, which matches it to the objection-handling description. Agent instructions and every skill's name and description sit in context on every turn; the objection-handling instructions load only on the match.](../pptx/images/03-01-agent-skills.svg)

Because the runtime decides activation from the description alone, the description is your activation dial, not a summary. Pack it with the exact words a real request would contain (the caller's vocabulary, not yours) and say both what the skill does and when to use it. If a skill fails to fire, widen or narrow the description before you touch the instructions.

## Authoring and importing skills

On the Build tab of a GitHub Copilot agent, the Skills panel offers two paths: Create from blank, where you type the name, description, and instructions directly in the UI, or Upload a skill, where you bring a `SKILL.md` or a ZIP. Once uploaded, the same panel lets you download, replace, or delete the skill later.

Portability is the payoff of the shared open format. A skill a maker or developer already wrote for Claude Code or GitHub Copilot can be uploaded straight into a Copilot Studio agent, and a skill authored here can travel the other way. Distribution is per-agent today: a skill moves with its agent through solutions and ALM, but there is no shared cross-tenant catalog yet, so each agent gets its own copy.

Plugin registry support for Copilot Studio is announced for a later release.

![Diagram: the same SKILL.md or ZIP moves between Claude Code, GitHub Copilot and a Copilot Studio agent's Skills panel through Upload a skill and Download, beside Create from blank, Replace and Delete. Each agent holds its own copy.](./_images/skill-portability.svg)

## Skills versus tools

Skills and tools solve different problems and work best together. A tool connects the agent to an external service or data source; a skill is self-contained instructions with no live connection of its own. A skill can, however, direct the agent to use a specific tool in a particular way, which makes the two complementary rather than competing.

![Diagram of a Copilot Studio agent: instructions set general behavior on every turn, knowledge grounds the agent, skills load when a request matches and tools hold the live connection to an external service or data source. A skill can direct the agent to use a tool.](./_images/skills-instructions-knowledge-tools.svg)

## Skill file shape

```markdown
---
name: customer-support-escalation
description: Handle escalations when a customer reports a blocked or urgent issue. Collect the case details and route to the right queue.
---

# Customer support escalation

Steps the agent should follow, response format, and edge cases go here as plain Markdown.
```

## Hands-On Demo

- [Add and Tune an Agent Skill](./demo-03-add-a-reusable-skill.md): the maker uploads a `SKILL.md`, tests activation in Preview, and refines the description until the skill fires only on the right requests.

## Hands-On Lab

- [Package Team Knowledge into a Portable Skill](../../../labs/06-cs-gh-copilot/03-agent-skills/lab-01-portable-skill.md): capture repeatable objection-handling guidance as a ZIP-packaged skill, then prove it is portable by reusing it on a second agent.

## Key Topics covered in this module

[Skills overview for agents](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-overview)

[Create a skill for an agent](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-create)

[Add an existing skill to an agent](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-add-existing)

[Manage and delete skills in an agent](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-manage)

[Introducing the plugin registry](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/introducing-the-plugin-registry---one-place-to-discover-and-govern-plugins-for-m/4559682)
