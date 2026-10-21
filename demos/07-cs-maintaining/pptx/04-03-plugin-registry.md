---
slide: "04-03"
topic: 04-governance-compliance
title: "The plugin registry"
subtitle: "One place to discover, publish and govern plugins"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/07-cs-maintaining/pptx/images/04-03-plugin-registry.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image, minimum 28px type. Top: a grey band
  "Plugins from every publisher" holding a row of six simple plugin tokens (rounded squares, each
  with a small puzzle-piece mark). Below, left: a white box "Publisher categories" with three purple
  tiles, Microsoft, Your organization, Certified external publishers. Centre: a blue box "Tools
  registry" (Agents > Tools > Registry; One inventory of plugins, skills, MCP servers and connectors).
  Right: a white box "User access" with three green tiles, Per-plugin user scope, Request access,
  Block. Bottom, across the full width: a grey-blue strip "Agent 365 Tooling Gateway" with the caption
  "Tool toggles enforced at runtime". Arrows: the band down to the publisher box and down to the
  registry, the publisher box to the registry, the registry to the user access box, the user access
  box down to the gateway strip. SMIL animation, 8 s loop: a dot runs publisher categories, registry,
  user access and then the gateway, each box highlighting as it arrives.
order: 11
source: demos/07-cs-maintaining/04-governance-compliance/readme.md
gamma_prompt: >
  Slide titled "The plugin registry", subtitle "One place to discover, publish and govern plugins".
  Left: three bullets. Right, wider: the provided diagram of plugins from every publisher passing
  publisher categories into the tools registry, then per-plugin user access, with the Agent 365 Tooling
  Gateway enforcing tool toggles at runtime. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
---

# The plugin registry

## Content

- The **tools registry** inventories plugins, skills, MCP servers and connectors; the **agent registry** inventories agents
- **Agent and plugin access** limits which publisher categories a plugin can come from, and each plugin has its own **user scope**
- Admins **approve access requests**, **block** plugins and MCP servers, and toggle **individual tools** through the Agent 365 Tooling Gateway

## Speaker Notes

Agents are only part of what Copilot uses. Plugins package skills, connectors, agents and MCP server settings, and the plugin registry is where a tenant governs them.

Publisher categories and user scope: Agent and plugin access in the admin center sets which publisher categories a plugin can come from. Each plugin then has its own user scope, so a plugin can reach all users, no users, or specific users and groups.

Requests and blocks: a user who needs a plugin selects Request access, and an admin approves or rejects it under Tools, Requests. Blocking a plugin also blocks the agents it includes, and blocking an MCP server disables all of its tools.

Tool toggles: for MCP servers registered in Agent 365, an admin turns each tool on or off, and the Agent 365 Tooling Gateway enforces that setting at runtime.
