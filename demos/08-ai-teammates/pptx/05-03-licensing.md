---
slide: "05-03"
topic: 05-memory-governance
title: "Licensing for agent accounts"
subtitle: "Three separate things to plan"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/08-ai-teammates/pptx/images/05-03-licensing.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text #24292f
  and #57606a, pastel fills, no heading inside the image, minimum 28px type. Three columns. Blue "Maker
  license" (the person who builds the agent): Microsoft 365 E5 with the Agent 365 add-on, or Microsoft
  365 E7, which includes Agent 365. Purple "Microsoft 365 Frontier for AI Teammates" (each agent with an
  account): a white "License pool" box (the tenant receives it on Frontier enrollment), an arrow
  "Assigned at publish" to "One license per agent", and the note that when the pool is empty an admin
  removes one from another agent or acquires more. Green "Copilot Credits" (the usage): building,
  testing, evaluating and running the agent consume credits on usage-based billing. A grey band below:
  agents are covered under their owner's license and need no Agent 365 seat of their own. Static.
order: 17
source: demos/08-ai-teammates/05-memory-governance/readme.md
gamma_prompt: >
  Slide titled "Licensing for agent accounts", subtitle "Three separate things to plan". Left: four
  bullets. Right, wider: the provided diagram of three columns, the maker license, the per-agent
  Frontier for AI Teammates license from the tenant pool, and Copilot Credits for usage. Use exactly the
  one image given for this card; do not generate or add any other images, icons or logos.
---

# Licensing for agent accounts

## Content

- **Maker license**: Microsoft 365 E5 with the Agent 365 add-on, or Microsoft 365 E7
- **Frontier for AI Teammates**: one per agent with an account, from the tenant's pool
- **Copilot Credits**: building, testing, evaluating and running the agent
- **Agent 365** has been generally available per user since May 1, 2026

## Speaker Notes

Three separate things need licensing, and they are easy to confuse. This slide separates who needs what.

Maker license: the person who builds the agent needs Microsoft 365 E5 with the Agent 365 add-on, or Microsoft 365 E7, which includes Agent 365.

Frontier for AI Teammates: each agent with an account gets one, assigned at publish. The tenant receives a pool on Frontier enrollment, and in a class that pool is the scarce resource.

Copilot Credits: building, testing, evaluating and running the agent all consume credits on usage-based billing.

Agent 365: agents are covered under their owner's license rather than needing their own Agent 365 seat. When the Frontier pool is empty, an admin removes a license from another agent or acquires more.
