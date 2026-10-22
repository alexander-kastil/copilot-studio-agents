---
slide: "03-02"
topic: 03-alm-source-control
title: "What a solution carries"
subtitle: "And what you set up after deployment"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/07-cs-maintaining/pptx/images/03-02-solution-deployment.svg
order: 9
source: demos/07-cs-maintaining/03-alm-source-control/readme.md
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
