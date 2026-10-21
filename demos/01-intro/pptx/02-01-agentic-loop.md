---
slide: "02-01"
topic: 02-how-agents-work
title: "What makes an AI agentic"
subtitle: "From answering a question to working toward a goal"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/01-intro/pptx/images/02-01-agentic-loop.svg
visual-prompt: >
  Hand-written SVG with SMIL animation (8 s loop, complete at t=0), viewBox 0 0 1920 1080, white
  background, Segoe UI, Helvetica, Arial, sans-serif, borders #8c959f 2px, headings #24292f, secondary
  text #57606a, minimum 28px type. No heading inside the image. Left grey #f6f8fa panel "Chatbot": "A
  question" arrow to "One answer", caption "One turn at a time, then it forgets". Right panel "Agent":
  an amber #fff6e5 box "Goal: an outcome you describe" leads into a clockwise loop of four blue #eaf2ff
  boxes "Plan", "Act", "Observe", "Adjust" around the caption "Repeat until the outcome is reached".
  "Act" has a purple pill "Calls tools" and an amber box "Person approves before it runs". "Observe"
  leads down to a green #e9f7ef box "Outcome reached". An amber outline steps through the four loop
  boxes in order.
order: 6
source: demos/01-intro/02-how-agents-work/readme.md
gamma_prompt: >
  Slide titled "What makes an AI agentic", subtitle "From answering a question to working toward a goal".
  Layout: Two columns. Left column: the bullets. Right column, wider than the left: the provided diagram
  as an inline content image at its natural 16:9 aspect ratio, scaled to fit the column, never cropped,
  never used as a background or side accent. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# What makes an AI agentic

## Content

- **Goal-driven**: works toward an outcome you describe, not a single reply
- **Tool-using**: calls functions, searches knowledge, reads data and acts in other systems
- **Iterative**: loops through plan, act, observe and adjust instead of answering once
- **Human-in-the-loop**: a person approves before an action such as sending an email runs

## Speaker Notes

A plain chatbot answers one turn at a time and forgets; an agent takes a goal, breaks it into steps and works the steps until the outcome is reached. The move is from "answer my question" to "get this done for me".

Goal-driven: the agent works toward an outcome you describe rather than producing a single reply.

Tool-using: it calls functions, searches knowledge, reads data and acts in other systems.

Iterative: it loops through plan, act, observe and adjust instead of answering once.

Human-in-the-loop: the agent proposes an action such as sending an email or updating a record, and a person approves before it runs. This control theme runs through Cowork and Copilot Studio for the rest of the course.
