---
slide: "00-02"
topic: 07-cs-maintaining
title: "Overview"
subtitle: "Five topics along the lifecycle of an agent"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/07-cs-maintaining/pptx/images/00-02-module-lifecycle.svg
order: 2
source: demos/07-cs-maintaining/readme.md
gamma_prompt: >
  Slide titled "Overview", subtitle "Five topics along the lifecycle of an agent". Left: five bullets.
  Right, wider: the provided diagram of development, test and production environments, the channels
  they publish to and the coding-agent band below, with numbered topic pills 01 to 05. Use exactly the
  one image given for this card; do not generate or add any other images, icons or logos.
---

# Overview

## Content

- **Environments and solutions**: development, test and production, with Dataverse holding the solution
- **Microsoft channels**: one publish reaches Teams, Microsoft 365 Copilot and SharePoint
- **ALM and source control**: deployment pipelines and Git move the solution forward
- **Advanced channels** (optional): websites, Direct Line and WhatsApp
- **Agentic building**: a coding agent clones and pushes the agent as files

## Speaker Notes

The five topics follow the real lifecycle of a Copilot Studio agent, and the numbered pills map each one onto this picture.

Environments and solutions: a healthy setup uses development where makers build, test where changes are validated and production where agents reach real users. Solutions carry the agent between them, and Dataverse stores them.

Microsoft channels: publishing creates the live version, and one publish updates Teams, Microsoft 365 Copilot and SharePoint at once.

ALM and source control: deployment pipelines promote the solution from development to test to production. Git integration adds a source of truth outside Dataverse.

Advanced channels: this optional topic covers agents that must reach people outside Microsoft 365, on a website, in your own app or on WhatsApp.

Agentic building: Claude Code with the copilot-studio and mcs-assistant plugins clones the agent from development, edits it as .mcs.yml files and pushes it back.
