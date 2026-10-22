---
slide: "01-05"
topic: 01-standard-vs-github-copilot
title: "Where each rule lives"
subtitle: "Each requirement goes into the component that can carry it"
layout: diagram-full
visual-weight: full
visual-type: photo
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/01-05-where-each-rule-lives.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. A table of six rounded rows with
  three columns, Requirement, Put it in, What to remember: role, scope, forbidden actions and
  escalation to Instructions (apply on every turn); approved policies and trusted records to Knowledge
  (a search finds passages); a narrow operation to Tools (remove what the task does not need); a
  repeatable procedure to Skills (SKILL.md is no security boundary); an approval, record update or
  notification to Workflows (the authored path runs the same every time); a check before a tool runs
  to Hooks (Pre tool use can deny). Static.
order: 7
source: demos/06-cs-gh-copilot/01-standard-vs-github-copilot/readme.md
gamma_prompt: >
  Slide titled "Where each rule lives", subtitle "Each requirement goes into the component that can
  carry it". Layout: full-width diagram. The provided diagram of six requirements mapped to
  Instructions, Knowledge, Tools, Skills, Workflows and Hooks across the whole card width, then one
  caption line under it, at its natural 16:9 aspect ratio, never cropped. White background, calm
  pastel accents. Use exactly the one image given for this card; do not generate or add any other
  images, icons or logos.
---

# Where each rule lives

## Content

- Put each requirement in the component that can carry it: **Instructions**, **Knowledge**, **Tools**, **Skills**, **Workflows** or **Hooks**

## Speaker Notes

This slide follows the sorting rule of the GitHub Copilot Harness Execution pattern in Microsoft's AI Agent Runbooks. The diagram lists six requirements and the component that carries each.

Instructions: role, scope, forbidden actions and when to escalate. They apply on every turn, so no request has to repeat them.

Knowledge and Tools: approved policies, standards and trusted records belong in Knowledge, and a knowledge search finds passages without proving the agent read a whole document. A narrow operation with clear inputs, outputs and errors is a tool, so remove the connector actions and turn off the MCP tools the task doesn't need.

Skills and Workflows: a SKILL.md carries a repeatable procedure and its output format, and it guides the agent without being a security boundary. An approval, a record update or a notification belongs in a workflow, where the authored path runs the same way every time.

Hooks: Pre tool use can deny a call before a tool runs, and the target system still checks access itself.
