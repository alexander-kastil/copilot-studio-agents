---
slide: "01-08"
topic: 01-standard-vs-github-copilot
title: "Calling, publishing and paying"
subtitle: "How a GitHub Copilot agent joins an automation and what it costs"
layout: diagram-full
visual-weight: full
visual-type: photo
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/01-08-calling-publishing-paying.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. Three tall columns: blue "Calling
  it" (the Agent node of a Copilot Studio workflow calls the published agent; the Power Automate
  connector calls Standard agents only), purple "Publishing it" (Microsoft Teams, Microsoft Copilot,
  Demo website, Web app, MCP and A2A clients in preview, not yet SharePoint, Native app, Email and
  messaging channels), amber "Paying for it" (building, testing, evaluating and running consume
  Copilot Credits, a Microsoft 365 Copilot license does not cover them, the monthly limit stops the
  agent only when Stop usage is on). A grey band below: a monthly limit is not a per-run limit.
  Static.
order: 10
source: demos/06-cs-gh-copilot/01-standard-vs-github-copilot/readme.md
gamma_prompt: >
  Slide titled "Calling, publishing and paying", subtitle "How a GitHub Copilot agent joins an
  automation and what it costs". Layout: full-width diagram. The provided diagram of three columns on
  calling, publishing and paying for a GitHub Copilot agent across the whole card width, then one
  caption line under it, at its natural 16:9 aspect ratio, never cropped. White background, calm
  pastel accents. Use exactly the one image given for this card; do not generate or add any other
  images, icons or logos.
---

# Calling, publishing and paying

## Content

- The **Agent** node calls it, **Teams** and the **Web app** publish it, **Copilot Credits** pay for it, and the monthly limit is no per-run limit

## Speaker Notes

This slide closes the topic with how the agent is used and paid for. The diagram has one column each for calling, publishing and paying.

Calling: a GitHub Copilot agent joins an automation through a workflow, where the Agent node of a Copilot Studio workflow calls the published agent. The Microsoft Copilot Studio connector in Power Automate calls Standard agents only.

Publishing: the agent publishes to Microsoft Teams, Microsoft Copilot, the Demo website and a Web app, with MCP and A2A clients in preview. SharePoint, Native app, Email and the messaging channels aren't available yet.

Paying: building, testing, evaluating and running a GitHub Copilot agent all consume Copilot Credits, and a Microsoft 365 Copilot license doesn't cover any of it.

Limits: the monthly limit under Licensing, Copilot Studio, Manage Agents, Set limit stops the agent only when Stop usage is on, while the notification threshold and Azure budgets only warn. A monthly limit isn't a per-run limit, so a run that must stop after a set number of calls or retries needs that limit in the tool or workflow it calls.
