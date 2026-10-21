---
slide: "04-01"
topic: 04-proactive-teammates
title: "Triggers, tools and instructions"
subtitle: "Three pieces that start an agent's cycle"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/08-ai-teammates/pptx/images/04-01-trigger-tools-instructions.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text #24292f
  and #57606a, pastel fills, no heading inside the image, minimum 28px type. Left: a blue "Trigger"
  container (one of these starts the cycle) with white boxes Recurrence (the schedule you set comes
  around), Email (a message arrives in the agent's mailbox) and A person (someone @mentions it or sends
  it a task), joined by a bracket into one arrow to a green "The agent's cycle" box (runs a shared
  process without anyone opening a chat). Purple "Tools" (can reach the sources) above and purple
  "Instructions" ("every Monday, prepare the review") below feed the same box by elbow arrows; the
  caption "All three must be present" sits under the trigger arrow. SMIL animation, 9 s loop: each
  trigger lights up in turn and a dot travels to the cycle; complete and readable at t=0.
order: 11
source: demos/08-ai-teammates/04-proactive-teammates/readme.md
gamma_prompt: >
  Slide titled "Triggers, tools and instructions", subtitle "Three pieces that start an agent's cycle".
  Left: five bullets. Right, wider: the provided diagram of a recurrence, an email or a person
  triggering the agent's cycle, with tools and instructions feeding the same cycle. Use exactly the one
  image given for this card; do not generate or add any other images, icons or logos.
---

# Triggers, tools and instructions

## Content

- **Recurrence**: the schedule you set comes around
- **Email**: a message arrives in the agent's mailbox
- **A person**: someone @mentions it or sends it a task
- Instructions alone don't create a **schedule** or grant access
- Triggers for the **GitHub Copilot harness** were announced on October 15, 2026

## Speaker Notes

An agent with an account has a name and a mailbox, but instructions alone do not make it act. This slide shows what starts its cycle.

Recurrence: the schedule you set comes around. It fits weekly reviews, status packs and reminder chains.

Email: a message arrives in the agent's mailbox. It fits the intake of requests, proposals or supplier updates.

A person: someone @mentions it or sends it a task. It fits ad hoc questions, assignments and updates.

Three pieces: writing every Monday, prepare the review in the instructions does nothing until a recurrence trigger exists and the tools can reach the sources. Treat trigger, tools and instructions as three separate pieces of configuration.

GitHub Copilot harness: Microsoft announced triggers for agents on it on October 15, 2026. The rollout runs through the Frontier program, alongside agent accounts and business process memory.
