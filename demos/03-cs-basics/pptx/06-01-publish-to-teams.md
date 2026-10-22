---
slide: "06-01"
topic: 06-publishing
title: "Publishing to channels"
subtitle: "From the agent editor to a chat in Microsoft Teams"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/03-cs-basics/pptx/images/06-01-publish-to-teams.svg
order: 17
source: demos/03-cs-basics/06-publishing/readme.md
gamma_prompt: >
  Slide titled "Publishing to channels", subtitle "From the agent editor to a chat in Microsoft Teams".
  Layout: Two columns. Left column: four short bullets on publishing, the channel, availability options
  and authentication. Right column, wider than the left: the provided diagram of five stages from the
  agent editor through publish, the Teams + Microsoft 365 channel and the availability options to a chat
  in Microsoft Teams, as an inline content image at its natural 16:9 aspect ratio, never cropped, never
  used as a background or side accent. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Publishing to channels

## Content

- **Publish** copies the draft to every channel the agent is connected to
- The **Microsoft 365 and Microsoft Teams** channel is added after the first publish
- **Availability options** decide who finds the agent: link, shared users, the org, or a .zip
- **Authenticate with Microsoft** opens Teams, Microsoft 365 Copilot and SharePoint

## Speaker Notes

An agent that only answers in the test panel helps nobody. Walk the diagram from the editor to the Teams chat.

Publish: selecting Publish copies the current draft to every connected channel, which can take a few minutes. Until you publish again, edits stay in the draft and users keep the old behavior.

Channel: after the first publish, open Channels and the Microsoft 365 and Microsoft Teams tile. Keep Make agent available in Microsoft 365 Copilot selected, so one channel serves Teams and Copilot Chat.

Availability options: a share link needs no approval, Show to my teammates and shared users lists the agent in the Built with Power Platform section, and Show to everyone in my org needs an administrator to approve. The app can also be downloaded as a .zip.

Authentication: new agents use Authenticate with Microsoft, which signs users in with Microsoft Entra ID in Teams, Power Apps and Microsoft 365 Copilot with no setup. It is also what SharePoint and Dataverse knowledge need to apply each user's permissions.
