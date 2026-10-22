---
slide: "02-01"
topic: 02-deep-reasoning
title: "Deep reasoning and the reason keyword"
subtitle: "Only the step that carries the keyword runs on the reasoning model"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/05-cs-advanced/pptx/images/02-01-deep-reasoning.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  Consolas for the keyword, borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading
  inside the image, no arrow crossing a box or a label. Two vertical lanes: left grey #f6f8fa "Fast
  default model" (steps without the keyword), right purple #f3edff "Azure OpenAI o3" (deep reasoning,
  preview) with four short lines: forced by the keyword reason, runs for that step only, noticeably
  slower responses, billed Copilot Credits per use. Five numbered white step cards from the Sourcing
  Advisor instructions: in the left lane "1 Read sourcing policy SP-14", "2 Read the supplier
  scorecard", "3 Read the supplier incident log"; in the right lane a taller card "4 reason through the
  award" (screen each supplier against R1 to R4, apply the cap R5 and continuity R6, rank with R7,
  determine the split, escalate under R8 if volume is short); back in the left lane "5 Present the
  recommendation". Arrows 1 to 2 to 3, across to 4 and back to 5. SMIL animation on a 10 second loop:
  an amber outline steps through cards 1, 2 and 3 for one second each, pulses on card 4 for five
  seconds, then rests on card 5; the diagram is complete at t=0.
order: 6
source: demos/05-cs-advanced/02-deep-reasoning/readme.md
gamma_prompt: >
  Slide titled "Deep reasoning and the reason keyword", subtitle "Only the step that carries the keyword
  runs on the reasoning model". Layout: Two columns. Left column: four short bullets on the setting, the
  reason keyword, the model and the activity map. Right column, wider than the left: the provided
  diagram of five instruction steps in two lanes, steps 1 to 3 and 5 on the fast default model and step
  4 on Azure OpenAI o3, as an inline content image at its natural 16:9 aspect ratio, never cropped,
  never used as a background or side accent. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Deep reasoning and the reason keyword

## Content

- **Deep reasoning (preview)** is a switch in the agent's Settings and needs generative orchestration
- The keyword `reason` in an instruction step forces the reasoning model for **that step only**
- Learn's deep reasoning article names **Azure OpenAI o3** for the reasoning steps
- The **activity map** shows a deep reasoning node wherever the model ran

## Speaker Notes

Most agent steps are fast and shallow: look something up, call a tool, phrase an answer. Some steps weigh several rules at once, and a deep reasoning model works through them step by step, slower and more carefully.

The switch: turn on generative orchestration first, then Deep reasoning (preview) in Settings. It is available in the United States and in the EU outside the United Kingdom, with no data residency commitment.

The keyword: once it is on, the agent decides by itself which steps need it, and reason in an instruction step forces it for that step. The pattern in the diagram keeps retrieval and presentation on the fast model and puts reason on the one decision step.

The model: Learn's deep reasoning article names Azure OpenAI o3, while the model selection article mentions separate settings for the reasoning model, so check both pages before you promise one. A reasoning step is billed twice: the normal rate plus 10 Copilot Credits per 1,000 reasoning tokens.

Trace: expand the deep reasoning node to see its steps, the data it used and its result. A simple lookup shows no reasoning node at all, which proves the keyword sits where you meant it.
