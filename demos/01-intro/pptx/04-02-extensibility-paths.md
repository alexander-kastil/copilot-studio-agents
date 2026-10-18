---
slide: "04-02"
topic: 04-extensibility
title: "Extensibility paths"
subtitle: "Ease of building traded against control and capability"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/01-intro/pptx/images/04-02-extensibility-paths.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. Four cards in a row above a
  horizontal axis labelled "Build effort", running from "No-code: fastest to ship" on the left to
  "Pro-code: most power, steepest effort" on the right. Green card "Declarative agents" (Agent
  Builder, SharePoint; Lowest, no code) with pill "Also in this course"; blue card "Copilot Studio"
  (Low-code; Low to medium) with a thick border and pill "Most of this course"; purple card "Graph
  connectors" (External content in Microsoft Graph; Medium); grey card "Pro-code" (Agents SDK,
  Microsoft Foundry; Steepest effort) with pill "Out of scope here". Each card drops a line to a dot
  on the axis.
order: 13
source: demos/01-intro/04-extensibility/readme.md
gamma_prompt: >
  Slide titled "Extensibility paths", subtitle "Ease of building traded against control and
  capability". Left column: five short bullets. Right column: the provided diagram placing four
  extensibility paths on one build-effort scale, with Copilot Studio highlighted. White background,
  calm pastel accents. Use exactly the one image given for this card; do not generate or add any
  other images, icons or logos.
---

# Extensibility paths

## Content

- **Declarative agents** (Agent Builder, SharePoint): lowest effort, no code
- **Copilot Studio**: low to medium effort, with topics, tools, orchestration, channels and governance
- **Graph connectors**: medium effort, external content indexed into Microsoft Graph
- **Pro-code** (Agents SDK, Microsoft Foundry): out of scope for this course
- Start with the **lowest-effort path** that meets the need

## Speaker Notes

With the two ways in place, this slide lines up the concrete paths. They trade ease of building against control and capability.

Declarative agents: Agent Builder and SharePoint add instructions and knowledge on top of the Copilot model, with no code. They fit a grounded Q&A or task assistant over your sites and files.

Copilot Studio: low to medium effort buys topics, tools, orchestration, channels and governance. Most of this course lives here, because it balances speed and control for makers and architects.

Graph connectors: medium effort indexes external content into Microsoft Graph. Reach for them when Copilot must answer from a system outside Microsoft 365.

Pro-code and the bias: the Agents SDK and Microsoft Foundry serve complex custom hosting and orchestration, out of scope here. Start low and name the requirement that forces each jump: a tool call, a channel, external data.
