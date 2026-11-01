---
slide: "02-02"
topic: 02-how-agents-work
title: "What a harness is"
subtitle: "Everything around the model that turns reasoning into work"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: opus-svg
media-file: demos/01-intro/pptx/images/02-02-what-a-harness-is.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, headings #24292f, secondary text #57606a, minimum 28px type. A large purple
  #f3edff panel "Harness" with the line "equips and directs the model". In its centre a green #e9f7ef
  box "Model: reasons and writes", joined by thin lines to six white cards: left "Context" (instructions,
  history, retrieved knowledge), "Skills" (SKILL.md loaded when a request matches), "Memory" (what it
  learned across turns and runs); right "Tools" (connectors, REST APIs, MCP servers), "Sandbox and
  files" (runs code, writes Word, Excel, PowerPoint, PDF), "Orchestration loop" (plan, act, check,
  retry, delegate, stop). A dashed band at the bottom of the panel: "Guardrails on every step: sign-in,
  permissions, approvals". A grey "Request" box with an arrow into the panel on the left, an arrow out
  of the panel to a grey "Answer or action" box on the right.
order: 8
source: demos/01-intro/02-how-agents-work/readme.md
gamma_prompt: >
  Slide titled "What a harness is", subtitle "Everything around the model that turns reasoning into
  work". Full-width diagram layout: title and subtitle at the top, the provided diagram across the whole
  card width at its natural aspect ratio, never cropped, then one caption line under it. Use exactly the
  one image given for this card; do not generate or add any other images, icons or logos.
---

# What a harness is

## Content

- The **model** reasons, the **harness** equips and directs it

## Speaker Notes

A model on its own only reasons and writes: text goes in, text comes out. It can't read your SharePoint site, call a connector, remember yesterday's conversation or save a file. The harness is the operating layer around the model that turns that reasoning into work.

Context: on every call the harness packs the instructions, the conversation so far and the retrieved knowledge, for example the HR agent's rules and three snippets from the HR Documents site.

Tools: the harness describes connectors, REST APIs and MCP servers to the model and runs the calls the model asks for, such as the HR MCP server's add_employee tool.

Skills: a skill is a name, a description and Markdown instructions for one task, and the harness loads it when a request matches, for example a first-week checklist skill.

Memory: the harness keeps what the agent learned across turns and runs, such as a recruiter who wants the summary as a table.

Sandbox and files: the harness runs code and creates or edits Word, Excel, PowerPoint and PDF files in an isolated container, so the onboarding plan can come back as an Excel workbook.

Orchestration loop: the harness plans the steps, checks each result and decides to continue, retry, hand over to another agent or stop. Guardrails apply on every step: sign-in, permissions and approvals decide what actually runs.

The model is the same in every product; the harness is what you choose. GitHub Copilot and Claude Code are harnesses around a model, the Microsoft Copilot harness in Copilot Studio shares technology with GitHub Copilot, and each Copilot Studio harness equips the model with a different set of these capabilities.
