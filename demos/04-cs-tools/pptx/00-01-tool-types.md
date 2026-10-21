---
slide: "00-01"
topic: 04-cs-tools
title: "Tool types"
subtitle: "What each tool lets an agent reach"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/04-cs-tools/pptx/images/00-01-tool-types.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading inside the image, no
  arrow crossing a box or a label. A purple #f3edff box in the centre, "Copilot Studio agent" with
  secondary "calls real systems", with arrows out to seven blue #eaf2ff cards. Left column of four:
  "Prompt action" (AI Builder prompt: summarize, classify, extract), "Connector" (SharePoint, Outlook,
  Salesforce, SQL, or custom), "Dataverse" (business records, read and write), "Document Processing"
  (managed agent: invoices, contracts, receipts). Right column of three: "MCP server" (shared,
  versioned toolset that many agents can share), "REST API tool" (any REST endpoint from an OpenAPI
  description), "Computer use" (websites and desktop apps that have no API). Static.
order: 1
source: demos/04-cs-tools/readme.md
gamma_prompt: >
  Slide titled "Tool types", subtitle "What each tool lets an agent reach". Left column: five short
  bullets on what a tooled agent does, prompt actions with connectors and Dataverse, the Document
  Processing managed agent, MCP servers with REST API tools, and computer use. Right column, wider
  than the left: the provided diagram of one agent reaching seven tool types, as an inline content
  image at its natural 16:9 aspect ratio, never cropped, never used as a background or side accent.
  White background, calm pastel accents. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
---

# Tool types

## Content

- A **tooled agent** acts on real systems, where a grounded agent only answers
- **Prompt actions**, connectors and Dataverse handle AI tasks, known services and business records
- The **Document Processing** managed agent pulls fields from invoices, contracts and receipts
- **MCP servers** and REST API tools reach shared toolsets and services without a connector
- **Computer use** drives websites and desktop apps that have no API

## Speaker Notes

This topic moves the agent from reading knowledge to calling real systems. Adding a tool is a configuration task in a Standard agent's Tools area, and the skill is picking the right type.

Tooled agent: a grounded agent can answer questions, a tooled agent can act. Walk the diagram from the agent in the centre out to what each tool reaches.

Prompt actions, connectors and Dataverse: a prompt action runs a reusable AI Builder prompt to summarize, classify or extract. Connectors cover one action in a known service, and Dataverse reads and writes business records.

Document Processing: this prebuilt managed agent extracts, categorizes and validates fields from invoices, contracts and receipts. Nobody has to train a model from scratch.

MCP servers and REST API tools: an MCP server gives many agents one standardized, versioned set of tools, and in a Standard agent it needs generative orchestration. A REST API tool connects to any endpoint from an OpenAPI description when no connector fits.

Computer use: the agent reads the screen and acts on a website or desktop app. It is the route into a legacy system with no API.
