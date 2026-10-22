---
slide: "02-05"
topic: 02-how-agents-work
title: "Design patterns in agentic AI"
subtitle: "Five patterns to choose and combine"
layout: diagram-full
visual-weight: full
visual-type: svg
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
order: 8
source: demos/01-intro/02-how-agents-work/readme.md
gamma_prompt: >
  Slide titled "Design patterns in agentic AI", subtitle "Five patterns to choose and combine". Full-width
  diagram layout: title and subtitle at the top, the provided diagram across the whole card width at its
  natural aspect ratio, never cropped, then one caption line under it. Use exactly the one image given
  for this card; do not generate or add any other images, icons or logos.
---

# Design patterns in agentic AI

## Content

- Choose a **pattern** for the shape of the problem, and combine several in one solution

## Speaker Notes

Most agent solutions are assembled from a small set of recurring patterns. You choose a pattern for the shape of the problem, and you can combine several in one solution.

Single agent: one job, one set of instructions, knowledge and tools. Single-agent design starts in Copilot Studio Basics.

Multi-agent orchestration: a master agent routes work to focused specialists, sketched here as hotel booking, flight search and restaurant agents. You build it in the advanced module.

Deterministic flow: the steps are fixed and must run the same way every time. It is covered in the advanced module.

Autonomous agent and human-in-the-loop: a trigger fires an autonomous agent with no person starting it, while human-in-the-loop pauses for a person before a consequential action. Autonomous agents also come in the advanced module.
