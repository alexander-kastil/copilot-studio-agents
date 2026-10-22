---
slide: "08-01"
topic: 04-cs-tools
title: "Takeaways"
subtitle: "Pick the tool by the job"
layout: content
visual-weight: 1/2
visual-type: photo
media-source: nano-banana
subject: people-talk
media-file: demos/04-cs-tools/pptx/images/08-01-takeaways.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych,
  no collage. At lunchtime in a bright modern staff canteen, three makers in their late twenties to mid
  thirties, two women and a man in modern work-casual clothes, sit at a long light-oak table and laugh
  together over plates of breaded schnitzel, pizza and green curry, glasses of water beside them and no
  devices on the table; behind them, softly out of focus, the serving counter is full. Modern, light,
  bright and friendly: high-key natural daylight, soft pastel accents in light blue, mint and lavender,
  green plants, 2020s design. 16:9 landscape, contemporary editorial photography. Avoid: readable text,
  logos, watermarks, extra people in focus, menu boards or signs with writing, dark or moody lighting,
  vintage or retro decor, grime, clutter.
order: 22
source: demos/04-cs-tools/readme.md
gamma_prompt: >
  Content card titled "Takeaways", subtitle "Pick the tool by the job". Five short bullets on the left
  half on plain white covering the tool choice, descriptions, credentials, confirmation before writes and
  the activity map. The provided photograph of three makers laughing over lunch in a staff canteen fills
  the right half as a side accent, no text over it. Use exactly the one image given for this card; do
  not generate or add any other images, icons or logos.
---

# Takeaways

## Content

- A **prompt** for the canteen order, an **agent flow** for fixed steps, a connector or REST API for one service
- **MCP** for a toolset many agents share, **computer use** only where no API exists
- The orchestrator chooses by **name and description**, so write them in your users' words
- Rows, posts, shifts and mails go out **after a confirmation**, with credentials you chose on purpose
- The **activity map** shows which tool ran and what it was given

## Speaker Notes

This closing slide collects one point per step of the path. Each one came up in a demo of this module.

Tool by job: a prompt gives a fixed instruction and format, a flow runs the same steps every time, a connector or REST API reaches one service. The canteen order ran on a prompt first and on live stock from the API later.

MCP and computer use: an MCP server suits several agents sharing a toolset or an API that changes often. Computer use is the route for systems that leave no other door; when an API exists, use it.

Name and description: they carry most of the weight when the orchestrator chooses, and a description can even set the call order. Rename every tool after Add and configure, because wizard names don't carry over.

Confirmation and credentials: Ask the end user before running guards anything that sends, writes or deletes. End user credentials are the default; maker-provided credentials act with your access for everyone.

Activity map: it shows the tool calls and the inputs the agent prepared. A reply with no tool call in the map came from the model alone.
