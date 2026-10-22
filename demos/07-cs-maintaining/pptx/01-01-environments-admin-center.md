---
slide: "01-01"
topic: 01-environments-solutions
title: "Environments, solutions and Dataverse"
subtitle: "Where every agent lives and how it is packaged"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/07-cs-maintaining/pptx/images/01-01-environments-admin-center.svg
order: 3
source: demos/07-cs-maintaining/01-environments-solutions/readme.md
gamma_prompt: >
  Slide titled "Environments, solutions and Dataverse", subtitle "Where every agent lives and how it is
  packaged". Left: four bullets. Right, wider: the provided diagram of the Power Platform Admin Center
  beside a tenant with four environment types and the Dataverse contents of one environment. Use
  exactly the one image given for this card; do not generate or add any other images, icons or logos.
---

# Environments, solutions and Dataverse

## Content

- **Power Platform Admin Center**: admins create environments, assign security and apply policies
- **Environment types**: default, developer, sandbox and production
- New agents land in the **default solution**; a **custom solution** set as preferred captures every component
- **Dataverse** stores solutions, environment variables and in-product pipelines

## Speaker Notes

Every Copilot Studio agent lives inside a Power Platform environment and is packaged inside a solution. This slide sets the foundation the rest of the module builds on.

Power Platform Admin Center: this is the control plane. Admins create environments here, assign security and apply policies.

Environment types: a tenant holds default, developer, sandbox and production environments, and the strategy for agents is development, test and production.

Default and custom solution: agents land in the default solution automatically, which is fine for a quick build. For anything you plan to promote, create a custom solution with your own publisher and prefix and set it as your preferred solution before you build.

Dataverse: it stores the solutions, the environment variables and the in-product pipelines.
