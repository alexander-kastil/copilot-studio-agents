---
slide: "01-01"
topic: 01-environments-solutions
title: "Environments, solutions and Dataverse"
subtitle: "Where every agent lives and how it is packaged"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/04-maintaining/pptx/images/01-01-environments-admin-center.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image, minimum 28px type. Left: a blue box
  "Power Platform Admin Center" (The control plane) with three white chips "Create environments",
  "Assign security", "Apply policies"; an arrow leads right into a large grey "Tenant" box. Across the
  top of the tenant four tiles labelled "Environment types": Default, Developer, Sandbox, Production.
  Below them a white box "Inside an environment" (where every agent lives) holds a blue "Dataverse"
  box with a grey "Default solution" card (Agents land here automatically; Fine for a quick build), a
  green "Custom solution" card with a thicker border (Set as preferred solution; Custom publisher and
  prefix; Captures new components as you build), and two white chips "Environment variables" and
  "In-product pipelines". Static.
order: 3
source: demos/04-maintaining/01-environments-solutions/readme.md
gamma_prompt: >
  Slide titled "Environments, solutions and Dataverse", subtitle "Where every agent lives and how it is
  packaged". Left: four bullets. Right, wider: the provided diagram of the Power Platform Admin Center
  above a tenant with four environment types and the Dataverse contents of one environment. Use exactly
  the one image given for this card; do not generate or add any other images, icons or logos.
---

# Environments, solutions and Dataverse

## Content

- **Power Platform Admin Center**: the control plane where admins create environments, assign security and apply policies
- **Environment types**: default, developer, sandbox and production
- **Dataverse** stores solutions, environment variables and in-product pipelines
- Every agent lives in an **environment** and is packaged in a **solution**

## Speaker Notes

Before you publish or move anything, you need an environment strategy and a working grasp of the admin side. This slide sets that foundation for the whole module.

Power Platform Admin Center: this is the control plane. Admins create environments here, assign security and apply policies.

Environment types: a tenant holds default, developer, sandbox and production environments. The strategy for agents is dev, test and production.

Dataverse: it stores the solutions, the environment variables and the in-product pipelines.

Environment and solution: every Copilot Studio agent lives inside a Power Platform environment and is packaged inside a solution. The next slide shows which solution that should be.
