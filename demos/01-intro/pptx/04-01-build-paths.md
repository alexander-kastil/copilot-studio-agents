---
slide: "04-01"
topic: 04-where-to-build
title: "Where to build an agent"
subtitle: "The lowest-effort path that meets the need"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: opus-svg
media-file: demos/01-intro/pptx/images/04-01-build-paths.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  2px #8c959f borders, text #24292f and #57606a, pastel fills, minimum 28px type, no heading inside
  the image. Four cards in a row above a horizontal axis labelled "Build effort", running from "No
  code: fastest to ship" on the left to "Code: most control" on the right. Green #e9f7ef card "Agent
  Builder & SharePoint agents" (No code; grounded Q&A over sites and files) with pill "Module 1";
  green #e9f7ef card "Cowork skills & plugins" (No code; recurring knowledge work) with pill "Module
  2"; blue #eaf2ff card "Copilot Studio" (Low code; four harnesses: GitHub Copilot, standard,
  Copilot chat, Customer Conversation) with a thick border and pill "Most of this course"; grey #f6f8fa card "Pro-code"
  (Agents Toolkit, Agents SDK, Microsoft Foundry) with pill "Out of scope here". Each card drops a
  line to a dot on the axis. Below the axis, one wide purple #f3edff bar "Serves every path" holding
  three chips: "Copilot connectors: external content", "MCP servers: tools", "Plugins: one
  installable package".
order: 13
source: demos/01-intro/04-where-to-build/readme.md
gamma_prompt: >
  Slide titled "Where to build an agent", subtitle "The lowest-effort path that meets the need".
  Full-width diagram layout: title and subtitle at the top, the provided diagram across the whole card
  width at its natural aspect ratio, never cropped, then one caption line under it. Use exactly the one
  image given for this card; do not generate or add any other images, icons or logos.
---

# Where to build an agent

## Content

- Start on the **lowest-effort path** that meets the need, and move up when a tool call, a channel or a multi-step process requires it

## Speaker Notes

The build paths trade ease of building against control, so start with the lowest-effort path that meets the need. A common pattern is to prototype without code, then rebuild in Copilot Studio when the process needs custom tools, multi-agent orchestration or governance.

No code: Agent Builder and SharePoint agents answer from your sites and files, and Cowork skills and plugins automate recurring knowledge work. Both come in the first two modules.

Copilot Studio: the low-code path for process agents with tools, triggers, channels and governance, and the home of most of this course. Its harness decides how an agent runs and bills; the previous topic compared the four harnesses and how to choose one.

Pro-code: the Microsoft 365 Agents Toolkit, the Agents SDK and Microsoft Foundry bring your own orchestrator, models or hosting. They are out of scope here.

Every path: Copilot connectors bring external content in, MCP servers bring tools, and a Microsoft 365 Copilot plugin packages agents, skills, connectors and MCP servers into one installable unit that admins govern.
