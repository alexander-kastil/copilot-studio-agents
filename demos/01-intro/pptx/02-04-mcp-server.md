---
slide: "02-04"
topic: 02-how-agents-work
title: "Tools and the Model Context Protocol"
subtitle: "Tools described once and shared by every MCP-aware agent"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/01-intro/pptx/images/02-04-mcp-server.svg
visual-prompt: >
  Hand-written SVG with SMIL animation (9 s loop, complete at t=0), viewBox 0 0 1920 1080, white
  background, Segoe UI, Helvetica, Arial, sans-serif, borders #8c959f 2px, headings #24292f, secondary
  text #57606a, minimum 28px type. No heading inside the image. Left, under the caption "MCP-aware
  agents", three purple #f3edff boxes "Copilot Studio", "Claude", "Other agent hosts", each with an arrow
  into one blue #eaf2ff "MCP server" box ("Tools described once, discovered at runtime") holding four
  white chips "Check an order status", "Create a ticket", "Query a database", "Call an internal API".
  An arrow from the server reaches a green #e9f7ef box "Live systems, fresh data and actions". Under the
  server: "One server, many agents". An amber marker travels from each agent to the server in turn.
order: 9
source: demos/01-intro/02-how-agents-work/readme.md
gamma_prompt: >
  Slide titled "Tools and the Model Context Protocol", subtitle "Tools described once and shared by every
  MCP-aware agent". Layout: Two columns. Left column: the bullets. Right column, wider than the left: the
  provided diagram as an inline content image at its natural 16:9 aspect ratio, scaled to fit the
  column, never cropped, never used as a background or side accent. Use exactly the one image given for
  this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Tools and the Model Context Protocol

## Content

- **Tools** let an agent act and reach live systems
- An **MCP server** describes its tools once; agents discover them at runtime
- **Copilot Studio, Claude and others** call the same server
- A tool exposed today works for **another agent host** tomorrow without a rewrite

## Speaker Notes

Knowledge lets an agent read; tools let it act and reach live systems. This slide places MCP as the tool layer every agent shares.

Tools: with them an agent can check an order status, create a ticket, query a database or call an internal API. Without tools it is limited to what it was given up front.

MCP server: the Model Context Protocol is an open standard for exposing tools to any AI agent. You run a server that describes its tools once, instead of writing a bespoke integration for each product.

Many agents: any MCP-aware agent, Copilot Studio, Claude and others, can discover and call those tools at runtime.

Portable: a tool exposed today for a Copilot Studio agent works tomorrow for a different agent host without a rewrite. You build and consume MCP servers later in the course.
