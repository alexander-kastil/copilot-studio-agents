---
slide: "04-01"
topic: 04-foundry-agents
title: "A prompt agent in Microsoft Foundry"
subtitle: "Model, instructions and tools behind a stable endpoint"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: existing
media-file: demos/05-cs-advanced/04-foundry-agents/_images/create-a-foundry-agent-overview.svg
photo-link: demos/05-cs-advanced/04-foundry-agents/_images/create-a-foundry-agent-overview.svg
visual-prompt: >
  Existing demo diagram: inside a Foundry project, grey-logistics-device-specialist is built from
  gpt-5-mini and device instructions, tested in the Playground, and Version 2 is pinned to 100 percent
  of traffic; outside the portal, az rest with a Microsoft Entra token calls the endpoint and gets back
  the Dell Precision 5690, replaced every 4 years. Animated with a complete first frame.
order: 11
source: demos/05-cs-advanced/04-foundry-agents/readme.md
gamma_prompt: >
  Slide titled "A prompt agent in Microsoft Foundry", subtitle "Model, instructions and tools behind a
  stable endpoint". Layout: Two columns. Left column: four short bullets on the project, the prompt
  agent, versions and the endpoint. Right column, wider than the left: the provided diagram of building,
  testing, pinning and calling the device specialist, as an inline content image at its natural 16:9
  aspect ratio, never cropped, never used as a background or side accent. Use exactly the one image
  given for this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# A prompt agent in Microsoft Foundry

## Content

- A **Foundry project** groups agents, files and tools inside an Azure subscription
- A **prompt agent** is configuration only: a model, instructions and optional tools
- Every saved change creates an **immutable version**; you pin the one the endpoint serves
- The endpoint takes a **Microsoft Entra** sign-in; API keys aren't supported

## Speaker Notes

Sooner or later a maker meets an agent a developer team built in Microsoft Foundry. Knowing what such an agent is made of lets you reuse a specialist instead of copying its rules.

Project: everything lives in a Foundry project in the portal at ai.azure.com, and models come first: the demo deploys gpt-5-mini. The Foundry User role lets a person build and invoke agents.

Three types: a prompt agent is configuration, a voice-based prompt agent adds audio settings, and a hosted agent runs a team's own code. The demo builds grey-logistics-device-specialist as a prompt agent, and its name is permanent.

Versions: the loaner-laptop line added in the demo creates a new version. The endpoint serves the latest one by default, and the Publish dropdown pins the version callers receive.

Endpoint: az rest with your Microsoft Entra token calls the Responses protocol and gets back the Dell Precision 5690 with its 4-year cycle. Copilot Studio uses the Activity Protocol on the same endpoint, which is the next topic.
