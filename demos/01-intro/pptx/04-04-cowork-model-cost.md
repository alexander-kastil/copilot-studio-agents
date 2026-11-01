---
slide: "04-04"
topic: 04-where-to-build
title: "What the model costs in Cowork"
subtitle: "Every task draws Copilot Credits, and the model sets how many"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: opus-svg
media-file: demos/01-intro/pptx/images/04-04-cowork-model-cost.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, headings #24292f, secondary text #57606a, minimum 28px type. Three rising steps
  from left to right, beside a dashed "Auto" box (the default, picks a model from the steps for each
  request and weighs accuracy, speed and cost): green
  "Everyday" (Claude Sonnet 5.5, GPT 5.6 Terra, GPT 5.5 (Frontier)), blue "Hard work" (GPT 6.1 Sol, Grok
  4.7), purple "Highest" (Claude Opus 5.5, GPT 6 Astra, Claude Fable 5.1 (Frontier)). An arrow under the
  steps: "more Copilot Credits per task". Top left, a dashed box "Reasoning effort, higher effort uses
  more credits" with five rising bars Light, Medium (bold, default), High, Extra High, Max.
order: 18
source: demos/01-intro/04-where-to-build/readme.md
gamma_prompt: >
  Slide titled "What the model costs in Cowork", subtitle "Every task draws Copilot Credits, and the
  model sets how many". Full-width diagram layout: title and subtitle at the top, the provided diagram
  across the whole card width at its natural aspect ratio, never cropped, then one caption line under
  it. Use exactly the one image given for this card; do not generate or add any other images, icons or
  logos.
---

# What the model costs in Cowork

## Content

- No fixed price per model: **model, effort, context and tools** set a task's credits

## Speaker Notes

Cowork is advanced AI: every task draws Copilot Credits through usage-based billing, on top of the user's Microsoft 365 Copilot license. Microsoft publishes no fixed price per model; a task's credits come from the model, the reasoning effort, how much context Cowork retrieves, and how much orchestration and how many tools the task needs.

Auto: the default for most day-to-day work. Cowork weighs accuracy, speed and cost and picks the model for each request.

Everyday: Claude Sonnet 5.5, GPT 5.6 Terra and GPT 5.5 (Frontier) for common tasks and medium effort, with a short response cycle.

Hard work: GPT 6.1 Sol and Grok 4.7 for hard problems, long documents, coding and multistep tasks.

Highest: Claude Opus 5.5, GPT 6 Astra and Claude Fable 5.1 (Frontier) for complex, high-stakes work. The license shows the same ladder: GPT 5.6 and Sonnet are included with fair use, Opus with limits, and frontier models such as Astra and Fable always bill Copilot Credits.

Reasoning effort: Light, Medium as the default, High, Extra High and Max. Higher effort is more thorough, slower and uses more credits. Inside the EU Data Boundary only GPT models are offered, an admin can turn off the Anthropic family, and Claude Fable requires data retention by the model provider.
