---
slide: "02-02"
topic: 02-autopilot-at-work
title: "Heartbeat and automations"
subtitle: "How Autopilot keeps working in the background"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/08-ai-teammates/pptx/images/02-02-background-work.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text #24292f
  and #57606a, pastel fills, no heading inside the image, minimum 28px type. A timeline with lanes and a
  time axis. Top lane "Interactive conversation" (briefing, steering, reviewing) with two blue "You send
  a message" pills. An amber container states that background modes run under a more restrictive
  permission policy because nobody is there to approve; inside it a "Heartbeat" lane (one prompt on an
  interval: 15 min, 30 min, 1 h or 2 h) with evenly spaced ticks inside a green "Within the work hours
  you set" band, and an "Automation" lane (its own schedule, prompt and optional steps) with white boxes
  Schedule-triggered, Condition-triggered and One-shot. SMIL animation, 10 s loop: a time cursor sweeps
  left to right, heartbeat ticks pulse and boxes highlight as it passes; complete and readable at t=0.
order: 7
source: demos/08-ai-teammates/02-autopilot-at-work/readme.md
gamma_prompt: >
  Slide titled "Heartbeat and automations", subtitle "How Autopilot keeps working in the background".
  Left: five bullets. Right, wider: the provided timeline of interactive conversations, heartbeat ticks
  inside the work hours and automations on a schedule, a condition or once. Use exactly the one image
  given for this card; do not generate or add any other images, icons or logos.
---

# Heartbeat and automations

## Content

- **Heartbeat**: one prompt every 15 minutes, 30 minutes, 1 hour or 2 hours, within your work hours
- **Automations**: schedule-triggered, condition-triggered or one-shot
- **Interactive conversation**: briefing, steering and reviewing results
- Background modes run under a **more restrictive permission policy**
- Mechanics documented for **Microsoft Scout**, the preview Autopilot grew out of

## Speaker Notes

A teammate is only useful when you can trust it with work you are not watching. This slide shows the two background modes beside the interactive conversation.

Heartbeat: it runs one prompt on a fixed interval within the work hours you set. It suits inbox triage or watching for schedule conflicts.

Automations: separate tasks with their own schedule, prompt and optional steps. Use them for a weekly status pack or a reminder chain.

Interactive conversation: it runs when you send a message. That is where you brief, steer and review the results.

Restrictive policy: nobody is there to approve a background run, so both modes get stricter permissions than an interactive conversation.

Microsoft Scout: Autopilot has no Learn documentation yet. These mechanics come from Scout, and the Autopilot announcement describes the same behavior from the user's side.
