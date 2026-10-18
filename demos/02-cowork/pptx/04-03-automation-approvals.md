---
slide: "04-03"
topic: 04-automation
title: "Approvals in automated tasks"
subtitle: "Scheduling the run does not approve the send"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/02-cowork/pptx/images/04-03-automation-approvals.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. A bracket "The run: automatic" over
  a blue box "Schedule or trigger fires" and a purple box "Cowork does the work and prepares the
  send, post, or change"; a bracket "The send: waits for your approval" over an amber box "Held for
  your approval, draft-and-approve" and a green box "Leaves your workspace". A dashed path below the
  gate: "Or pre-authorize when you create the task: trades control for speed". Two rows of grey
  chips: "Runs with your permissions", "Sees only what you can see", "Rate-limited", "Guarded
  against triggering itself in a loop", "Results go only to you". SMIL animation, 8 second loop: a
  highlight moves through the four boxes and pulses at the approval box.
order: 14
source: demos/02-cowork/04-automation/readme.md
gamma_prompt: >
  Slide titled "Approvals in automated tasks", subtitle "Scheduling the run does not approve the
  send". Left column: five short bullets. Right column: the provided diagram showing a schedule or
  trigger firing, Cowork preparing the send automatically, the send held for your approval, and only
  then leaving your workspace, with guardrail chips below. White background, calm pastel accents.
  Use exactly the one image given for this card; do not generate or add any other images, icons or
  logos.
---

# Approvals in automated tasks

## Content

- By default a task **drafts** any send, post or change and holds it for your approval
- **Pre-authorizing** actions when you create the task trades control for speed
- Tasks run with **your permissions** and see only what you can see
- **Rate limits** and a loop guard stop a task from triggering itself
- **Results** go only to you unless you approve otherwise

## Speaker Notes

This slide covers what an automated task may do while you are not watching. The run is automatic; anything that leaves your workspace still waits for you by default.

Draft-and-approve: scheduled and event-driven tasks prepare any send, post or change to a shared system and hold it for your approval. Scheduling the run alone does not approve the send.

Pre-authorize: you can approve actions in advance when you create a task, which trades control for speed.

Your permissions: tasks run with your permissions and see only what you can see.

Rate limits: tasks are rate-limited and guarded against triggering themselves in a loop.

Results: they go only to you unless you approve otherwise. The full approval model follows in the Human-in-the-Loop topic.
