---
slide: "00-01"
topic: 05-cs-advanced
title: "Generative orchestration"
subtitle: "How the planner turns a request into a multi-step plan"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/05-cs-advanced/pptx/images/00-01-generative-orchestration.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading inside the image, no
  arrow crossing a box or a label. Left column labelled "How work starts": three blue #eaf2ff boxes
  "Chat" (a person chats with the agent), "Event trigger" (a new record, an incoming email, a scheduled
  time) and "Voice" (speech and IVR, phone-style calls), each with an arrow into a large purple #f3edff
  box in the centre, "Generative orchestration" with secondary "the LLM-driven planning layer", holding
  three numbered white cards: "1 Reads the request", "2 Picks the right tools, knowledge, and agents",
  "3 Executes a multi-step plan". Right column labelled "What the plan can use": five green #e9f7ef
  boxes, "Tools", "Knowledge", "Other agents" (child, connected, Microsoft Foundry, A2A), "Deep
  reasoning model" (with the reason keyword) and "Agent flows" (fixed sequence of steps), each reached
  by an arrow from the planner. Static.
order: 1
source: demos/05-cs-advanced/readme.md
gamma_prompt: >
  Slide titled "Generative orchestration", subtitle "How the planner turns a request into a multi-step
  plan". Layout: Two columns. Left column: four short bullets on the planning layer, the multi-step
  plan, the features that depend on it and GitHub Copilot agents. Right column, wider than the left: the
  provided diagram of chat, event trigger and voice feeding the planner, which reaches tools, knowledge,
  other agents, a deep reasoning model and agent flows, as an inline content image at its natural 16:9
  aspect ratio, never cropped, never used as a background or side accent. Use exactly the one image
  given for this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Generative orchestration

## Content

- **Generative orchestration** is the LLM-driven planning layer of the agent
- It reads a request, picks tools, knowledge and agents, and runs a **multi-step plan**
- Autonomous agents, multi-agent handoffs and **deep reasoning** all need it turned on
- **GitHub Copilot agents** run the same runtime, always on

## Speaker Notes

This topic takes the agent from answering and acting to running on its own. All of it rests on one planning layer, so the topic opens there.

Planning layer: generative orchestration is the LLM-driven layer that interprets the intent behind a request at runtime. A chat, an event trigger or a voice call can all hand it that request.

Multi-step plan: the planner picks the right tools, knowledge and agents and executes the steps of its plan. Walk the diagram from the inputs on the left through the planner to what the plan can use.

Prerequisite: autonomous behavior, multi-agent handoffs and deep reasoning all depend on generative orchestration being turned on. With classic orchestration only, the deep reasoning switch stays unavailable.

GitHub Copilot agents: a GitHub Copilot agent runs this runtime always on. Learning it in a Standard agent is what makes the GitHub Copilot orchestrator feel familiar.
