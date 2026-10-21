---
slide: "02-01"
topic: 02-deep-reasoning
title: "Deep reasoning and the reason keyword"
subtitle: "Only the step that carries the keyword runs on Azure OpenAI o3"
layout: diagram
visual-weight: 1/2
visual-type: photo
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
order: 3
source: labs/05-cs-advanced/02-deep-reasoning/lab-01-supplier-recommendation.md
gamma_prompt: >
  Slide titled "Deep reasoning and the reason keyword", subtitle "Only the step that carries the keyword
  runs on Azure OpenAI o3". Layout: Two columns. Left column: four short bullets on the deep reasoning
  setting, the reason keyword, the model and its cost, and the activity map. Right column, wider than
  the left: the provided diagram of five instruction steps in two lanes, steps 1 to 3 and 5 on the fast
  default model and step 4 on Azure OpenAI o3, as an inline content image at its natural 16:9 aspect
  ratio, never cropped, never used as a background or side accent. Use exactly the one image given for
  this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Deep reasoning and the reason keyword

## Content

- **Deep reasoning** is a per-agent setting that needs generative orchestration
- The keyword `reason` in an instruction step forces the reasoning model for **that step only**
- The model is **Azure OpenAI o3**: slower, and billed in Copilot Credits per use
- The **activity map** shows a deep reasoning node wherever the model ran

## Speaker Notes

Some problems need the agent to work through them step by step instead of pattern matching an answer. Deep reasoning brings in a slower model for exactly those steps.

Per-agent setting: Deep reasoning (preview) sits in the agent's settings next to generative orchestration and stays missing while orchestration is off. It is available in environments in the United States and in the EU excluding the United Kingdom.

The reason keyword: with deep reasoning on, the agent decides for itself when to use it, and the literal word reason in an instruction step forces it for that step. In the supplier lab only step 4, the award decision, carries it, while the three retrieval steps stay on the fast default model.

Cost: Azure OpenAI o3 trades response time for logical, step-by-step problem solving and consumes billed Copilot Credits per use. A reason keyword on every step turns a ten second answer into a minute of waiting.

Trace: the activity map draws one node per step of the plan and a distinct node wherever deep reasoning ran. A simple lookup produces no reasoning node at all, which shows the scoping worked.
