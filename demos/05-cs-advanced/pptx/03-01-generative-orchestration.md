---
slide: "03-01"
topic: 03-multi-agent
title: "Generative orchestration"
subtitle: "How the planner turns a request into a multi-step plan"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/05-cs-advanced/pptx/images/00-01-generative-orchestration.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading inside the image, no
  arrow crossing a box or a label. Left column labelled "How work starts": three blue #eaf2ff boxes
  "Chat", "Event trigger" and "Voice", each with an arrow into a large purple #f3edff box in the centre,
  "Generative orchestration" with secondary "the LLM-driven planning layer", holding three numbered
  white cards: "1 Reads the request", "2 Picks the right tools, knowledge, and agents", "3 Executes a
  multi-step plan". Right column labelled "What the plan can use": five green #e9f7ef boxes, "Tools",
  "Knowledge", "Other agents" (child, connected, Microsoft Foundry, A2A), "Deep reasoning model" (with
  the reason keyword) and "Agent flows" (fixed sequence of steps), each reached by an arrow from the
  planner. Static.
order: 8
source: demos/05-cs-advanced/03-multi-agent/readme.md
gamma_prompt: >
  Slide titled "Generative orchestration", subtitle "How the planner turns a request into a multi-step
  plan". Layout: Two columns. Left column: four short bullets on how the planner chooses. Right column,
  wider than the left: the provided diagram of chat, event trigger and voice feeding the planner, which
  reaches tools, knowledge, other agents, a deep reasoning model and agent flows, as an inline content
  image at its natural 16:9 aspect ratio, never cropped, never used as a background or side accent. Use
  exactly the one image given for this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Generative orchestration

## Content

- The planner reads a request and picks **topics, tools, knowledge and other agents** to answer it
- The **description** weighs most in that choice, then the name
- One plan can chain **several steps** and writes one reply from what they returned
- Event triggers, deep reasoning and other agents all need **generative orchestration**

## Speaker Notes

Every topic of this module sits on one planning layer, and this one opens it up: what the planner reads when it chooses, and how agents that call other agents follow from it.

How it chooses: Learn names the description as the most important factor, followed by the name and the names and descriptions of inputs and outputs. You describe what each component does instead of predicting every phrasing.

Several steps: "I need store hours and the nearest store" chains two topics in one turn. The planner asks for any required input it can't fill from context, then writes one answer from everything the steps returned.

Classic or generative: you switch under Settings, Generative AI, Orchestration. Classic picks one topic per turn by trigger phrases and keeps scripted voice agents predictable; triggers, MCP servers and other agents need generative orchestration.

Overlap: two similar descriptions make the choice unpredictable, and Learn's rule of thumb says one agent gets confused at about 30 to 40 choices. Sharpen the descriptions first, then split work into child or connected agents.
