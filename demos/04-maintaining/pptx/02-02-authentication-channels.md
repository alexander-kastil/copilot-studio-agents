---
slide: "02-02"
topic: 02-publishing-channels
title: "Authentication and channel choice"
subtitle: "What turns a working agent into a safely shared one"
layout: content
visual-weight: 1/2
visual-type: photo
media-source: nano-banana
media-file: demos/04-maintaining/pptx/images/02-02-authentication-channels.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych, no
  collage. In a bright glass-walled meeting room, a Power Platform maker and an IT security colleague,
  a man and a woman in their early thirties in modern work-casual clothes, sit at a round white table
  and agree on how the agent will be shared: the maker holds a smartphone in one hand and points at an
  open laptop with the other, the colleague nods and smiles. The two people sit on the right half of
  the frame; the left half shows the clear glass wall and soft daylight beyond it. Modern, light, bright
  and friendly: high-key natural daylight, white and light-oak contemporary interior, soft pastel
  accents in light blue, mint and lavender, green plants, 2020s design. Screens show only soft blurred
  shapes and colours, never readable UI. 16:9 landscape, contemporary editorial photography. Avoid:
  readable text, logos, watermarks, dark or moody lighting, vintage or retro decor, grime, clutter,
  extra people, writing on the glass.
order: 6
source: demos/04-maintaining/02-publishing-channels/readme.md
gamma_prompt: >
  Slide titled "Authentication and channel choice", subtitle "What turns a working agent into a safely
  shared one". Five short bullets on the left half on plain white, the provided photograph of a maker
  and a security colleague in a glass meeting room as a side accent on the right half. Use exactly the
  one image given for this card; do not generate or add any other images, icons or logos.
---

# Authentication and channel choice

## Content

- **Authenticate with Microsoft** (Entra ID) is the default
- **Manual authentication** and **No authentication** are the other two options
- No authentication lets anyone with the link chat and blocks tools that rely on **user credentials**
- Each channel has its own **connection steps** and its own availability
- Some channels differ between the **classic and new** agent experiences

## Speaker Notes

The authentication model is chosen at publish time, and it is not cosmetic. Together with the channel choice, it decides whether a working agent is also a safely shared one.

Authenticate with Microsoft: Entra ID is the default model, selected unless you change it.

Manual and No authentication: these are the two alternatives. No authentication comes with a caution for open access.

No authentication: anyone with the link can chat with the agent, and tools that rely on user credentials are blocked.

Connection steps: each channel has its own steps to connect and its own availability. Check them per channel before you promise a channel to users.

Classic and new experiences: some channels differ between the classic and the new agent experience, so the steps you see depend on which one the agent uses.
