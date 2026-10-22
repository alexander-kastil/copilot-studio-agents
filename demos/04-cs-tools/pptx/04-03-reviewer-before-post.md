---
slide: "04-03"
topic: 04-agent-flows
title: "A reviewer before the Teams post"
subtitle: "The agent gets its answer first, the post waits for a person"
layout: content
visual-weight: 1/2
visual-type: photo
media-source: nano-banana
subject: people-at-work
media-file: demos/04-cs-tools/pptx/images/04-03-reviewer-before-post.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych,
  no collage. In a bright modern office, a team lead in her early thirties in modern work-casual clothes
  sits at a light-oak desk by a tall window and reads a short review request on her laptop, one hand on
  the trackpad as she decides, with a calm, attentive look; a white mug and a green plant stand beside
  the laptop. Modern, light, bright and friendly: high-key natural daylight, white and light-oak
  contemporary interior, soft pastel accents in light blue, mint and lavender, green plants, 2020s
  design. Screens show only soft blurred shapes and colours, never readable UI. 16:9 landscape,
  contemporary editorial photography. Avoid: readable text, logos, watermarks, extra people, writing on
  the mug, dark or moody lighting, vintage or retro decor, grime, clutter.
order: 13
source: demos/04-cs-tools/04-agent-flows/demo-health-advisor-flows.md
gamma_prompt: >
  Content card titled "A reviewer before the Teams post", subtitle "The agent gets its answer first, the
  post waits for a person". Four short bullets on the left half on plain white about the order of
  Respond to the agent and Request for information. The provided photograph of a team lead reading a
  review request on her laptop fills the right half as a side accent, no text over it. Use exactly the
  one image given for this card; do not generate or add any other images, icons or logos.
---

# A reviewer before the Teams post

## Content

- **Respond to the agent** sits right below the trigger, so the chat gets its answer at once
- **Request for information** emails the reviewer a Posting Control request through Outlook
- The flow posts to the Teams channel only after the reviewer selects **Submit**
- An agent waits at most 100 seconds for a flow; the review step runs on after the response

## Speaker Notes

A post to a shared channel should not leave the agent unseen, so CS-Post to teams asks a person first. A reviewer can take hours, while an agent waits at most 100 seconds for a flow.

Respond first: Respond to the agent goes directly below the trigger, so the agent answers right away. With the response after the review step, saving to Teams times out with an error.

Request for information: it sends the reviewer an email from Microsoft Power Automate titled "Posting Control" with the advice in it. Its Channel must be set, or publishing fails with missing required property 'RequestForInformationInput/channel'.

Submit: after the reviewer submits, the channel shows a post that starts "A new post with content:". The request has no inputs yet, so any submission posts; a Yes/No input and a condition give the reviewer a real choice.

Credentials: the tool runs with maker-provided credentials, so the flow uses your Teams and Human review connections. With end user credentials, the chat stopped at "Let's get you connected first".
