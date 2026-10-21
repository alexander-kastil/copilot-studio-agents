---
slide: "03-01"
topic: 03-where-to-build
title: "Where to build an agent"
subtitle: "The lowest-effort path that meets the need"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/01-intro/pptx/images/03-01-build-paths.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  2px #8c959f borders, text #24292f and #57606a, pastel fills, minimum 28px type, no heading inside
  the image. Four cards in a row above a horizontal axis labelled "Build effort", running from "No
  code: fastest to ship" on the left to "Code: most control" on the right. Green #e9f7ef card "Agent
  Builder & SharePoint agents" (No code; grounded Q&A over sites and files) with pill "Module 1";
  green #e9f7ef card "Cowork skills & plugins" (No code; recurring knowledge work) with pill "Module
  2"; blue #eaf2ff card "Copilot Studio" (Low code; three harnesses: GitHub Copilot, standard,
  Copilot chat) with a thick border and pill "Most of this course"; grey #f6f8fa card "Pro-code"
  (Agents Toolkit, Agents SDK, Microsoft Foundry) with pill "Out of scope here". Each card drops a
  line to a dot on the axis. Below the axis, one wide purple #f3edff bar "Serves every path" holding
  three chips: "Copilot connectors: external content", "MCP servers: tools", "Plugins: one
  installable package".
order: 11
source: demos/01-intro/03-where-to-build/readme.md
gamma_prompt: >
  Slide titled "Where to build an agent", subtitle "The lowest-effort path that meets the need".
  Layout: Two columns. Left column: the bullets. Right column, wider than the left: the provided
  diagram as an inline content image at its natural 16:9 aspect ratio, scaled to fit the column,
  never cropped, never used as a background or side accent. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Where to build an agent

## Content

- **No code**: Agent Builder, SharePoint agents, Cowork skills and plugins
- **Copilot Studio**: low code, and most of this course
- **Harnesses** decide how a Copilot Studio agent runs and bills
- **Pro-code** (Agents Toolkit, Agents SDK, Foundry) is out of scope
- **Connectors, MCP servers and plugins** serve every path

## Speaker Notes

The build paths trade ease of building against control. Start with the lowest-effort path that meets the need, and move up only when a real requirement such as a tool call, a channel or a multi-step process forces it.

No code: Agent Builder and SharePoint agents answer from your sites and files, and Cowork skills and plugins automate recurring knowledge work. Both come in the first two modules.

Copilot Studio: the low-code path for process agents with tools, triggers, channels and governance, and the home of most of this course. Its three harnesses decide how an agent runs: the GitHub Copilot harness reasons through multi-step processes, the standard harness follows the topics and flows you define, and the Copilot chat harness extends Copilot Chat with your knowledge.

Pro-code: the Microsoft 365 Agents Toolkit, the Agents SDK and Microsoft Foundry bring your own orchestrator, models or hosting. They are out of scope here.

Every path: Copilot connectors bring external content in, MCP servers bring tools, and a Microsoft 365 Copilot plugin packages agents, skills, connectors and MCP servers into one installable unit that admins govern.
