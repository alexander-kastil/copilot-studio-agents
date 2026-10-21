---
slide: "02-05"
topic: 02-how-agents-work
title: "Design patterns in agentic AI"
subtitle: "Five patterns to choose and combine"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/01-intro/pptx/images/02-05-design-patterns.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, headings #24292f, secondary text #57606a, minimum 28px type. No heading inside
  the image. Five grey #f6f8fa panels, three on top and two below, each with a name, a small sketch and
  a "when to use it" line. "Single agent": a purple agent box holding "Instructions", "Knowledge",
  "Tools". "Multi-agent orchestration": "Master agent" with arrows to "Hotel booking", "Flight search",
  "Restaurant". "Deterministic flow": steps 1, 2, 3 in a row. "Autonomous agent": "Trigger" to "Agent"
  to "Acts". "Human-in-the-loop": "Agent proposes" to an amber "Person approves" to a green "Action
  runs".
order: 10
source: demos/01-intro/02-how-agents-work/readme.md
gamma_prompt: >
  Slide titled "Design patterns in agentic AI", subtitle "Five patterns to choose and combine". Layout:
  Two columns. Left column: the bullets. Right column, wider than the left: the provided diagram as an
  inline content image at its natural 16:9 aspect ratio, scaled to fit the column, never cropped, never
  used as a background or side accent. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Design patterns in agentic AI

## Content

- **Single agent**: one job with one set of instructions, knowledge and tools
- **Multi-agent orchestration**: a master agent routes work to focused specialists
- **Deterministic flow**: fixed steps that run the same way every time
- **Autonomous agent**: a trigger fires the agent without a person starting it
- **Human-in-the-loop**: a person approves before a consequential action

## Speaker Notes

Most agent solutions are assembled from a small set of recurring patterns. You choose a pattern for the shape of the problem, and you can combine several in one solution.

Single agent: one job, one set of instructions, knowledge and tools. Single-agent design starts in Copilot Studio Basics.

Multi-agent orchestration: a master agent owns the goal and routes each request to a specialist, such as hotel booking, flight search or restaurant agents. The master needs clear routing rules, and you build this in the advanced module as focused and connected agents.

Deterministic flow: the steps are fixed and must run the same way every time. It is covered in the advanced module.

Autonomous agent and human-in-the-loop: a trigger fires an autonomous agent with no person starting it, while human-in-the-loop pauses for a person before a consequential action. Autonomous agents also come in the advanced module.
