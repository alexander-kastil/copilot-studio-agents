---
slide: "02-01"
topic: 02-publishing-channels
title: "Publishing and channels"
subtitle: "One publish updates every connected channel"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/07-cs-maintaining/pptx/images/02-01-publish-channels.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image, minimum 28px type. Top left: a blue
  box "Your agent" (in Copilot Studio), an amber pill "Publish", a green box "Live version" (One
  publish updates every connected channel). Below it a grey strip "Users see updated content after a
  new session starts" and a white box "Authentication model, chosen at publish time" with three rows:
  green "Authenticate with Microsoft (Entra ID)" tagged Default, blue "Manual authentication", amber "No
  authentication" (Anyone with the link can chat; Blocks tools that rely on user credentials). Right: a
  vertical bus from the live version branches into six tiles, blue under "Microsoft channels" (Teams
  and Microsoft 365 Copilot; SharePoint) and purple under "Advanced channels" (WhatsApp; Custom website
  or embedded web app (iframe); Demo website, prebuilt, for testing; Direct Line API, custom and mobile
  apps). SMIL animation, 6 s loop: Publish pulses, then six dots reach all channels at the same moment.
order: 5
source: demos/07-cs-maintaining/02-publishing-channels/readme.md
gamma_prompt: >
  Slide titled "Publishing and channels", subtitle "One publish updates every connected channel". Left:
  five bullets. Right, wider: the provided diagram of one publish fanning out from the live version to
  six channels, with the authentication choice below. Use exactly the one image given for this card;
  do not generate or add any other images, icons or logos.
---

# Publishing and channels

## Content

- **Publishing** creates the live version; nobody can use the agent before you publish
- One publish updates **every connected channel** at once
- Users see updated content after a **new session** starts
- **Microsoft channels**: Teams and Microsoft 365 Copilot, and SharePoint
- **Advanced channels**: WhatsApp, a custom website or iframe, the demo website and the Direct Line API

## Speaker Notes

With the agent packaged in a solution, the next step is to put it where users already work. Publishing and channels are two halves of that step.

Publishing: it creates the live version of the agent. You must publish before anyone can use it.

Every connected channel: publishing applies to all connected channels at once, so a single publish updates the agent everywhere.

New session: updated content only reaches users after a new session starts. Tell testers to start a fresh conversation after each publish.

Microsoft channels: Microsoft Teams and Microsoft 365 Copilot, and SharePoint. These put the agent where Microsoft 365 users already work.

Advanced channels: WhatsApp, a custom website or embedded web app in an iframe, the prebuilt demo website for testing, and the Direct Line API for custom and mobile apps.
