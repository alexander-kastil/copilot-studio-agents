---
slide: "02-02"
topic: 02-publishing-channels
title: "Authentication and channel choice"
subtitle: "The Channels page of a published agent"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/07-cs-maintaining/pptx/images/02-02-channels-authentication.png
photo-link: demos/07-cs-maintaining/pptx/images/02-02-channels-authentication.png
visual-prompt: >
  Screenshot (pool 05-01-033, native crop 834x417): the Channels page of the published CS-HR Buddy
  with the Microsoft authentication banner, the published status and the channel tiles.
order: 6
source: demos/07-cs-maintaining/02-publishing-channels/readme.md
gamma_prompt: >
  Slide titled "Authentication and channel choice", subtitle "The Channels page of a published agent".
  Left: four bullets. Right, wider: the provided screenshot of the Copilot Studio Channels page with
  its authentication banner and channel tiles, never cropped. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
---

# Authentication and channel choice

## Content

- **Published agent status** shows who published and when
- With **Microsoft authentication**, only Teams and Microsoft 365 and SharePoint are available
- Other channels need **manual** or **No authentication**
- No authentication lets anyone with the link chat and blocks tools that rely on **user credentials**

## Speaker Notes

This is the Channels page of CS-HR Buddy right after its publish in the module 3 demo. It shows how the authentication choice decides which channels you can connect.

Published agent status: the page names who published the live version and when. Nothing appears in a channel before that first publish.

Microsoft authentication: the banner says it plainly, only Teams and Microsoft 365 and SharePoint channels are available. That is the right setting for an internal HR agent whose users always sign in.

Other channels: the tiles with the corner mark need manual authentication or No authentication. Each channel has its own connection steps, and some differ between Standard and GitHub Copilot agents.

No authentication: anyone with the link can chat with the agent, and tools that rely on user credentials stop working. Choose it only for an agent that is meant to be open.
