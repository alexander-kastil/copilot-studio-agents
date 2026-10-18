---
slide: "01-03"
topic: 01-basics
title: "Publishing to channels"
subtitle: "From the agent editor to a chat in Microsoft Teams"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/03-copilot-studio/pptx/images/01-03-publish-to-teams.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading inside the image, no
  arrow crossing a box or a label. U-shaped sequence of five stages. Top row left to right: grey
  #f6f8fa "Agent editor" (edits stay in the editor until you publish), arrow "Publish", blue #eaf2ff
  "Published" (registered in the Power Platform environment, not in a channel yet), arrow "Channels",
  green #e9f7ef "Teams + Microsoft 365" (channel added on the Channels tab). Down arrow to green
  "Availability options" with three rows: Copy link (amber #fff6e5, highlighted), Download a ZIP
  package, Teams app store. Arrow "Copy link" left to a blue "Microsoft Teams" box (paste the link,
  Add, then Open) holding a user bubble "How can we hire new people in our company?" and an agent
  bubble "AI generated", "HR answer with references to the documents". Animated with SMIL, 10 second
  loop: the stages light up in order while an amber dot travels each arrow. Complete and readable at t=0.
order: 5
source: demos/03-copilot-studio/01-basics/readme.md
gamma_prompt: >
  Slide titled "Publishing to channels", subtitle "From the agent editor to a chat in Microsoft Teams".
  Layout: Two columns. Left column: four short bullets on publishing, channels, availability options
  and default authentication. Right column, wider than the left: the provided diagram of five stages
  from the agent editor through publish, the Teams + Microsoft 365 channel and the availability options
  to a chat in Microsoft Teams, as an inline content image at its natural 16:9 aspect ratio, never
  cropped, never used as a background or side accent. Use exactly the one image given for this card;
  do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Publishing to channels

## Content

- **Publish** makes your edits go live and registers the agent in its environment
- A **channel** brings it to users: Teams, Microsoft 365 Copilot or a custom website
- Share it from the availability options by link, ZIP package or the **Teams app store**
- Default Microsoft authentication allows Teams, Microsoft 365 Copilot and SharePoint

## Speaker Notes

The last step of the basics puts the agent where colleagues already work. Walk the diagram from the editor to the Teams chat.

Publish: publishing is what makes edits go live, and it registers the agent in the Power Platform environment. On its own it does not make the agent available in any channel yet.

Channel: on the Channels tab you add a target such as Teams + Microsoft 365. The teaching names Microsoft Teams, Microsoft 365 Copilot and a custom website as typical channels.

Availability options: copy a link to open the agent in Teams, download a ZIP package for the Teams app store, or make it available there for the whole organization or selected users. The lab uses the link, then Add and Open in Teams.

Authentication: with the default Microsoft authentication the agent relies on Microsoft Entra ID. That limits it to the Teams and Microsoft 365 Copilot and SharePoint channels.
