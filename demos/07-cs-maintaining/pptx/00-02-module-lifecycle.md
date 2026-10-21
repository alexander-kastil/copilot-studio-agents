---
slide: "00-02"
topic: 07-cs-maintaining
title: "Overview"
subtitle: "Four topics along the lifecycle of an agent"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/07-cs-maintaining/pptx/images/00-02-module-lifecycle.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image, minimum 28px type. Top row: three
  environment boxes, blue "Development" (Makers build), purple "Test" (Changes validated), green
  "Production" (Real users), each holding a white "Dataverse" box with an amber "Solution" card that
  carries "Agent" and "Its components". A bracket above the three boxes carries the dark pill "01" and
  "Environments and solutions". Elbow arrows below the row run development to test and test to
  production, captioned with pill "03" and "Deployment pipelines". A "Publish" arrow leads from
  production to a grey "Channels" box (where people work: Microsoft Teams, SharePoint, WhatsApp,
  Websites and custom apps) under pill "02" and "Publishing to channels". A full-width grey band at the
  bottom, pill "04" and "Governance runs across all of it", holds three chips: environment-level data
  loss prevention, Microsoft Purview compliance, admin controls that stop agents multiplying unchecked.
  SMIL animation, 8 s loop: a dot travels each pipeline arrow and the publish arrow in turn while the
  matching solution card or the channels box highlights; complete and readable at t=0.
order: 2
source: demos/07-cs-maintaining/readme.md
gamma_prompt: >
  Slide titled "Overview", subtitle "Four topics along the lifecycle of an agent". Left: four bullets.
  Right, wider: the provided diagram of development, test and production environments with numbered
  topic pills for environments, publishing, deployment pipelines and governance. Use exactly the one
  image given for this card; do not generate or add any other images, icons or logos.
---

# Overview

## Content

- **Environments and solutions**: development, test and production, with solutions in Dataverse carrying the agent
- **Publishing**: one publish puts the live agent into Teams, SharePoint, WhatsApp, websites and custom apps
- **ALM and source control**: deployment pipelines and Git move the agent between environments

## Speaker Notes

The four topics follow the real lifecycle of a Copilot Studio agent, and this diagram maps each one onto that lifecycle.

Environments and solutions: a healthy setup uses at least three environments, development where makers build, test where changes are validated and production where agents reach real users. Solutions carry the agent and its components between them, and Dataverse stores the solutions.

Publishing: publishing creates the live version and puts it in the channels where people already work. One publish updates every connected channel.

ALM and source control: deployment pipelines, stored in Dataverse, promote the solution from development to test to production. Git integration adds a source of truth outside Dataverse.

