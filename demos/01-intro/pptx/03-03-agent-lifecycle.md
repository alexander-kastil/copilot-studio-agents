---
slide: "03-03"
topic: 03-agent-harnesses
title: "One lifecycle on every harness"
subtitle: "Create, build, test, publish, monitor, then improve"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/01-intro/pptx/images/03-03-agent-lifecycle.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, headings #24292f, secondary text #57606a, minimum 28px type, no heading inside the
  image. Five rounded stage cards in a row joined by arrows, left to right: blue #eaf2ff "Create" (Purpose
  and harness), blue #eaf2ff "Build" (Instructions, knowledge, tools, model, boundaries), purple #f3edff
  "Test" (Test chat or Preview: one example; evaluation: a fixed set), green #e9f7ef "Publish" (Channels),
  amber #fff6e5 "Monitor" (Real conversations, tasks and credits). A curved return arrow runs from Monitor
  back to Build beneath the row, labelled "Focused change, test again, republish". Under each card a small
  grey #f6f8fa pill naming where the course teaches it: Create "Modules 3 and 6", Build "Modules 3 to 6",
  Test "Evaluations in modules 5 and 6", Publish "Modules 3 and 7", Monitor "From module 6".
order: 12
source: demos/01-intro/03-agent-harnesses/readme.md
gamma_prompt: >
  Slide titled "One lifecycle on every harness", subtitle "Create, build, test, publish, monitor, then
  improve". Layout: Two columns. Left column: the bullets. Right column, wider than the left: the provided
  diagram as an inline content image at its natural 16:9 aspect ratio, scaled to fit the column, never
  cropped, never used as a background or side accent. Use exactly the one image given for this card; do
  not generate or add any other images, icons or logos.
---

# One lifecycle on every harness

## Content

- Every agent is **created, built, tested, published and monitored**, whatever harness runs it
- A test chat shows **one example**; an evaluation runs **a fixed set** you can compare
- Monitor shows **real use**, and each finding becomes one focused change
- The tab names differ by harness; **the stages don't**

## Speaker Notes

The course itself follows this loop, so this slide doubles as a map of the modules ahead.

Create and build: you name the purpose, pick the harness, then add instructions, knowledge, tools, the model and the boundaries. Standard agents are built from module 3, GitHub Copilot agents in module 6.

Test: a test chat or Preview answers one question once. An evaluation runs the same set of cases every time, so two versions of an agent are compared on the same evidence; modules 5 and 6 each have an evaluations topic.

Publish and monitor: publishing releases the agent to its channels, and Monitor shows what real users did and what it cost. An unclear instruction, two overlapping tools or an answer without a source each lead to one focused change, a new test and a new publish.
