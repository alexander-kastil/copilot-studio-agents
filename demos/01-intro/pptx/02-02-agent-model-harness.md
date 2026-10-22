---
slide: "02-02"
topic: 02-how-agents-work
title: "Agent, model and harness"
subtitle: "What you design, what reasons, what coordinates"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/01-intro/pptx/images/02-06-agent-model-harness.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, headings #24292f, secondary text #57606a, minimum 28px type, no heading inside
  the image. Three stacked horizontal layers. Top: blue #eaf2ff card "Agent: what you design" with
  three chips "Instructions", "Knowledge", "Tools" and a smaller dashed chip "Skills and memory
  (GitHub Copilot harness)". Middle, the widest and with a thick border: purple #f3edff card "Harness:
  coordinates the work" with four short lines "When to call the model", "What to send it", "How to read
  the reply", "Which step runs next". Bottom: green #e9f7ef card "Model: reasons and writes" with the line
  "Differs in speed, cost and depth". On the left, an arrow labelled "Request" enters the harness; on the
  right, an arrow labelled "Answer or action" leaves it. Thin two-way arrows join the harness to the agent
  layer above and to the model layer below. Under the stack, one grey #f6f8fa pill: "Same model, different
  harness: a different agent".
order: 7
source: demos/01-intro/02-how-agents-work/readme.md
gamma_prompt: >
  Slide titled "Agent, model and harness", subtitle "What you design, what reasons, what coordinates".
  Layout: Two columns. Left column: the bullets. Right column, wider than the left: the provided diagram as
  an inline content image at its natural 16:9 aspect ratio, scaled to fit the column, never cropped, never
  used as a background or side accent. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
---

# Agent, model and harness

## Content

- The **agent** is what you design: instructions, knowledge, tools and boundaries
- The **model** reasons and writes, and models differ in speed, cost and depth
- The **harness** coordinates: when to call the model, what to send, which step runs next
- Same model, different harness: **a different agent**

## Speaker Notes

Three parts shape how a Copilot Studio agent works, and only one of them is the part you write.

The agent is your design: its purpose, instructions, knowledge, tools and the limits it must respect. It defines the job, but it doesn't run itself.

The model generates language and makes the decision for one call. Picking a model trades speed and cost against how deep it reasons.

The harness is the runtime around the model. It decides when to call the model, what to send with the call, how to read the reply and whether a topic, a tool, another agent or an answer comes next. That's why two agents with the same model can behave differently, and why the next topic treats the harness as the first decision you make.
