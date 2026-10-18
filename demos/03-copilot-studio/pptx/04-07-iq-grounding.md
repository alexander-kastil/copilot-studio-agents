---
slide: "04-07"
topic: 04-new-experience
title: "Grounding with Work IQ, Foundry IQ and Fabric IQ"
subtitle: "The agent reads each source where it lives"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/03-copilot-studio/pptx/images/04-07-iq-grounding.svg
visual-prompt: >
  Opus 5.5, hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, rounded rectangles,
  #8c959f borders, #24292f and #57606a text, pastel fills, no heading inside the image, minimum 28px type.
  Two grey zones stacked. Top zone captioned "Copilot Studio holds only the connection": a wide blue bar
  "Your agent in Copilot Studio" with the line "The orchestrator decides from each tool's name and description",
  arrows down to three purple tool cards: Work IQ (MCP tab, sign-in connection), Foundry IQ (Search Service
  endpoint), Fabric IQ (workspace and model access). Arrows cross into the bottom zone, captioned "Each source
  stays where it lives, with its owner": three green source cards (Microsoft 365 work context: files, emails,
  meetings, chats and Business Applications; Foundry knowledge base: data sources with retrieval and relevance
  settings; Fabric semantic model: business data and analytics in tables and measures), each with an amber owner
  card below pointing up at it (Administrators govern it, Microsoft 365 admin center; The owning team tunes it,
  sources, retrieval, ranking; Workspace and model owner, decides what the model holds).
order: 18
source: demos/03-copilot-studio/04-new-experience/06-iq-grounding/readme.md
gamma_prompt: >
  Slide titled "Grounding with Work IQ, Foundry IQ and Fabric IQ", subtitle "The agent reads each source
  where it lives". Left column: four short bullets naming what Work IQ, Foundry IQ and Fabric IQ ground an
  agent on and that Copilot Studio holds only the connection. Right column, wider: the provided diagram of an
  agent in Copilot Studio reaching three IQ tools, each linked to its source in Microsoft 365, Microsoft Foundry
  or Microsoft Fabric and the owner who tunes it, at its natural 16:9 aspect ratio, never cropped. Use exactly
  the one image given for this card; do not generate or add any other images, icons or logos.
---

# Grounding with Work IQ, Foundry IQ and Fabric IQ

## Content

- **Work IQ** reads your Microsoft 365 email, meetings, chats and files
- **Foundry IQ** answers over a knowledge base a team tunes in Microsoft Foundry
- **Fabric IQ** answers data questions from a semantic model in Microsoft Fabric
- Copilot Studio holds only the **connection**; each source stays with its owner

## Speaker Notes

An uploaded knowledge file gives the agent a fixed copy, while the three IQ connections read a source that stays where it lives when the question arrives. Each connection becomes a tool on the Build tab, and the orchestrator decides from its name and description when to call it.

Work IQ: it grounds the agent in Microsoft 365 work context such as files, emails, meetings and chats. Administrators govern it in the Microsoft 365 admin center, and the maker decides through Instructions when the agent calls it.

Foundry IQ: it connects to a knowledge base a team built in Microsoft Foundry, with its data sources and retrieval settings. That team tunes it by changing sources, retrieval instructions or ranking, and an agent holds one Foundry IQ connection.

Fabric IQ: it answers data questions from the tables and measures of a semantic model in Microsoft Fabric. The owner of the workspace and model decides what it holds, and the picker shows only the items your account can access.

Only the connection: removing it in Copilot Studio leaves the knowledge base or semantic model unchanged. Work IQ and Fabric IQ are in preview, all three use usage-based billing, and the activity trace shows which lookups ran.
