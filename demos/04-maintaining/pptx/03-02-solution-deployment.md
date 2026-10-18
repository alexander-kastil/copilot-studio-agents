---
slide: "03-02"
topic: 03-alm-source-control
title: "What a solution carries"
subtitle: "And what you set up after deployment"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/04-maintaining/pptx/images/03-02-solution-deployment.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image, minimum 28px type. Left: a blue
  "Development" box (Customize here, in a solution) holding an amber "Custom solution" card with four
  white chips: Agent, Required objects, Environment variables, Connection references. Below it, joined
  by a two-headed arrow, a purple box "Native Git integration" (Source of truth outside Dataverse).
  Middle: a long arrow captioned "Deployment pipeline" (One click in Copilot Studio) above and "or
  pro-dev CI/CD with Azure DevOps or GitHub" below. Right: a green "Test and production" box (Imported
  as managed or unmanaged) with a white "Imported solution" card (The same agent, unedited; Environment
  variables and connection references hold this environment's settings) and an amber "Post-deployment
  steps" card (Not solution-aware: set up here) listing Deployed channels, Authentication settings,
  Sharing, Application Insights. SMIL animation, 8 s loop: a dot travels the pipeline, then the
  imported solution and the post-deployment card highlight in turn.
order: 8
source: demos/04-maintaining/03-alm-source-control/readme.md
gamma_prompt: >
  Slide titled "What a solution carries", subtitle "And what you set up after deployment". Left: five
  bullets. Right, wider: the provided diagram of a custom solution travelling from development through
  a deployment pipeline into test and production, with the post-deployment steps listed. Use exactly
  the one image given for this card; do not generate or add any other images, icons or logos.
---

# What a solution carries

## Content

- A **custom solution** carries the agent and the objects it needs
- **Environment variables** and **connection references** hold the settings that change per environment
- **Deployment pipelines** promote in one click inside Copilot Studio; Azure DevOps or GitHub run pro-dev CI/CD
- **Native Git integration** keeps a source of truth outside Dataverse
- Deployed channels, authentication settings, sharing and Application Insights need **post-deployment steps**

## Speaker Notes

The ALM rules say to work in solutions; this slide shows what actually travels in one and what stays behind.

Custom solution: you create it and add the required objects, so the agent moves as one package between environments.

Environment variables and connection references: they hold the settings that change per environment. The same agent carries different settings in dev, test and production without anyone editing the agent itself.

Deployment pipelines: they deploy in one click from inside Copilot Studio. Pro-dev teams run the same promotion as CI/CD in Azure DevOps or GitHub.

Native Git integration: it gives you a source of truth outside Dataverse, next to the solution in development.

Post-deployment steps: deployed channels, authentication settings, sharing and Application Insights are not solution-aware. Plan them as steps in the target environment after every import.
