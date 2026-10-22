---
slide: "03-01"
topic: 03-agent-skills
title: "Agent skills"
subtitle: "A SKILL.md recipe that loads when a request matches its description"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/03-01-agent-skills.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Consolas for skill names,
  2px #8c959f borders, text #24292f and #57606a, pastel fills, no heading inside the image. Left:
  blue box "Request" with the quote "A customer says we are more expensive than a competitor. How
  should I reply?", an arrow into a grey box "Orchestration runtime, matches the request to a
  description". Right: a large panel "Agent context". Under "On every turn" a grey bar "Agent
  instructions" and, under "Each skill: name and description", three amber rows
  customer-support-escalation, follow-up-email-drafter and objection-handling. The runtime arrow
  points at the objection-handling row, and a short arrow drops to the blue box under "Loaded
  just-in-time on a match": "objection-handling instructions" with four chips Task, Method,
  Response format and Edge case. SMIL animation on an 8 second loop: a dot carries the request into
  the runtime, the runtime and then the objection-handling row light up in green, and the dot drops
  into the loaded instructions, which light up last. Complete and readable at t=0.
order: 13
source: demos/06-cs-gh-copilot/03-agent-skills/readme.md
gamma_prompt: >
  Slide titled "Agent skills", subtitle "A SKILL.md recipe that loads when a request matches its
  description". Left column: five short bullets on the SKILL.md format, on-demand loading, the
  description as the activation trigger, portability across Claude Code, GitHub Copilot and Copilot
  Studio, and how skills work with tools. Right column, wider than the left: the provided diagram
  showing a request matched by the orchestration runtime to one skill description, with every
  skill's name and description in context on every turn and only the matched skill's full
  instructions loaded, at its natural 16:9 aspect ratio, never cropped. White background, calm
  pastel accents. Use exactly the one image given for this card; do not generate or add any other
  images, icons or logos.
---

# Agent skills

## Content

- **SKILL.md**: YAML front matter with a name and a description, then Markdown instructions
- **On demand**: only names and descriptions stay in context; the full instructions load on a match
- **Description**: the runtime activates a skill from it alone, so it carries the caller's words
- **Portable**: the same open format as Claude Code and GitHub Copilot, uploaded or downloaded in the Skills panel
- **With tools**: a skill has no live connection of its own, but it can direct the agent to use a tool

## Speaker Notes

Skills are the standout addition to GitHub Copilot agents and the strongest tie to the rest of this course. Walk the diagram from the request to the one set of instructions that loads.

SKILL.md: the YAML front matter carries the name and description, and everything below it is plain Markdown with the steps, response format and edge cases. Supporting material such as a price table goes into a ZIP with SKILL.md at the root, so the data is updated in one place.

On demand: only each skill's name and description sit in the agent's context, and the full instructions load just-in-time when the orchestration runtime matches a request. That is how one agent carries many skills without bloating every turn.

Description: the runtime decides activation from the description alone, so it is the activation dial, packed with the words a real request contains. In the demo, follow-up-email-drafter activates on a follow-up request and stays quiet on a lead-time question.

Portable: the Skills panel on the Build tab offers Create from blank and Upload a skill, and later Download, Replace and Delete. Each agent holds its own copy, which moves with the agent through solutions and ALM; the lab reuses objection-handling on a second agent.

With tools: a tool connects the agent to an external service or data source, while a skill is self-contained instructions. A skill can direct the agent to use a specific tool, so the two work together.
