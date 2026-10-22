---
slide: "02-01"
topic: 02-publishing-channels
title: "Publishing and channels"
subtitle: "One publish updates every connected channel"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/07-cs-maintaining/pptx/images/02-01-publish-channels.svg
order: 5
source: demos/07-cs-maintaining/02-publishing-channels/readme.md
gamma_prompt: >
  Slide titled "Publishing and channels", subtitle "One publish updates every connected channel". Left:
  four bullets. Right, wider: the provided diagram of one publish fanning out from the live version to
  six channels, with the authentication choice below. Use exactly the one image given for this card;
  do not generate or add any other images, icons or logos.
---

# Publishing and channels

## Content

- **Publishing** creates the live version; nobody can use the agent before you publish
- One publish updates **every connected channel** at once
- **Microsoft channels**: Teams and Microsoft 365 Copilot, and SharePoint
- The **authentication model** is chosen at publish time: Entra ID by default, manual or none

## Speaker Notes

With the agent packaged in a solution, the next step is to put it where users already work. Publishing and channels are the two halves of that step.

Publishing: it creates the live version of the agent, and you must publish before anyone can use it.

Every connected channel: publishing applies to all connected channels at once, so a single publish updates the agent everywhere.

Microsoft channels: Teams and Microsoft 365 Copilot, and SharePoint, put the agent where Microsoft 365 users already work. The advanced channels on the right side of the diagram are the optional topic 4.

Authentication model: Authenticate with Microsoft through Entra ID is the default; manual authentication and No authentication are the alternatives.
