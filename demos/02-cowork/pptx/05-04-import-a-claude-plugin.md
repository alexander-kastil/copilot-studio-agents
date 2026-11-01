---
slide: "05-04"
topic: 05-plugins
title: "Import a Claude plugin"
subtitle: "One command turns a Claude plugin into a Microsoft 365 plugin"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/02-cowork/pptx/images/05-04-import-a-claude-plugin.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. Left: a peach box "Claude plugin"
  listing six folder rows: ".claude-plugin/plugin.json", "skills/", ".mcp.json", then three greyed rows
  "commands/", "agents/" and "hooks/". Right: a blue box "Microsoft 365 plugin" listing "manifest.json",
  "skills/", "Connectors" and "Icons". Between them a thick arrow labelled in a monospace code chip
  "wiqd plugin import". Thin arrows map plugin.json to manifest.json, skills/ to skills/ with the note
  "copied as they are", and .mcp.json to Connectors. The three greyed rows end in a muted red tag "Not
  converted" with no arrow to the right.
order: 18
source: demos/02-cowork/05-plugins/readme.md
gamma_prompt: >
  Slide titled "Import a Claude plugin", subtitle "One command turns a Claude plugin into a Microsoft
  365 plugin". Left column: four short bullets. Right column, wider than the left: the provided diagram
  showing a Claude plugin folder converted by the wiqd plugin import command into a Microsoft 365
  plugin, with skills and MCP servers carried over and slash commands, sub-agents and hooks marked not
  converted, at its natural 16:9 aspect ratio, never cropped. White background, calm pastel accents.
  Use exactly the one image given for this card; do not generate or add any other images, icons or
  logos.
---

# Import a Claude plugin

## Content

- **wiqd plugin import** reads a Claude, Cursor or Open Plugin folder and creates a Microsoft 365 plugin project
- **Skills** are copied as they are, and MCP servers from `.mcp.json` become **connectors**
- Slash commands, sub-agents and hooks are **not converted**
- The first import needs your organization's privacy, terms and website links

## Speaker Notes

Most teams that build agents today already have Claude Code plugins. This slide shows how one command brings such a plugin into Microsoft 365, so it can run in Cowork next to the plugins from Discover.

wiqd plugin import: WIQD is Microsoft's preview command-line tool for Microsoft 365 plugins. Its import reads a Claude, Cursor or Open Plugin folder and writes a plugin project that WIQD validates, provisions, packages and shares like one it created itself.

Skills and connectors: skills use the same SKILL.md format on both sides, so they are copied unchanged. The MCP servers listed in .mcp.json become the plugin's connectors.

Not converted: slash commands, sub-agents and hooks have no place in the Microsoft 365 manifest yet, so the import leaves them behind. A harness built mostly from commands, agents and hooks arrives in Cowork as its skills and connectors only.

Links: the Microsoft 365 manifest requires privacy and terms links, and the website link is needed when plugin.json names no homepage or author. Exercise 7 of the lab runs the import step by step.
