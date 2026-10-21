---
slide: "04-02"
topic: 04-governance-compliance
title: "The agent registry"
subtitle: "One place to see and act on every agent"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/07-cs-maintaining/pptx/images/04-02-agent-registry.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image, minimum 28px type. Top: a grey band
  "Every agent" (across the tenant) holding a row of ten simple agent tokens, one amber token labelled
  "At risk". Below, left: a white box "Agents-at-risk signals" with three purple tiles, Microsoft
  Defender, Microsoft Entra, Microsoft Purview. Centre: a blue box "Agent registry" (Microsoft 365 admin
  center and Agent 365; One place to see and act on the whole estate). Right: a white box "Governance
  actions" with three green tiles, Block, Reassign, Delete. Arrows: the band down to the signals box
  and down to the registry, the signals box to the registry, the registry to the actions box, the
  actions box up to the band. SMIL animation, 8 s loop: a dot runs signals, registry, actions and back
  to the at-risk agent, each box highlighting as it arrives.
order: 10
source: demos/07-cs-maintaining/04-governance-compliance/readme.md
gamma_prompt: >
  Slide titled "The agent registry", subtitle "One place to see and act on every agent". Left: three
  bullets. Right, wider: the provided diagram of every agent flowing into the agent registry, with risk
  signals from Defender, Entra and Purview on one side and the actions block, reassign and delete on
  the other. Use exactly the one image given for this card; do not generate or add any other images,
  icons or logos.
---

# The agent registry

## Content

- The **agent registry** in the Microsoft 365 admin center and Agent 365 shows every agent
- **Agents-at-risk** signals come from Defender, Entra and Purview
- Admins **block, reassign or delete** an agent from the registry

## Speaker Notes

Guardrails limit what each agent can do; the agent registry is how admins see the whole estate at once.

Every agent: the registry in the Microsoft 365 admin center and Agent 365 lists every agent in the tenant, one place to see and act on all of them.

Agents at risk: Defender, Entra and Purview send the signals that mark an agent as at risk, so the registry shows where to look first.

Governance actions: from the registry an admin blocks, reassigns or deletes an agent, acting on the whole estate from one place.
