---
slide: "01-03"
topic: 01-standard-agents
title: "Instructions, model and answer settings"
subtitle: "The same off-topic question before and after"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: existing
media-file: demos/03-cs-basics/01-standard-agents/_images/create-the-onboarding-assistant-overview.svg
photo-link: demos/03-cs-basics/01-standard-agents/_images/create-the-onboarding-assistant-overview.svg
visual-prompt: >
  Existing demo diagram: the blank CS-Employee Onboarding Assistant answers the off-topic capital
  question; after structured instructions, GPT Chat Latest and its answer settings it gives the
  first-week checklist, points the benefits question to HR and declines the capital question.
order: 5
source: demos/03-cs-basics/01-standard-agents/demo-create-the-onboarding-assistant.md
gamma_prompt: >
  Slide titled "Instructions, model and answer settings", subtitle "The same off-topic question before
  and after". Layout: full-width diagram. The provided diagram of the onboarding assistant before and
  after its instructions across the whole card width at its natural 16:9 aspect ratio, never cropped,
  then one caption line under it. Use exactly the one image given for this card; do not generate or add
  any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Instructions, model and answer settings

## Content

- Structured **instructions**, GPT Chat Latest and deliberate answer settings keep CS-Employee Onboarding Assistant on onboarding questions

## Speaker Notes

This diagram is the whole demo on one picture. Before any instructions, the capital of Australia question gets Canberra and a limerick, because nothing tells the agent what its job is.

Structured instructions: Purpose and General Guidelines set tone and limits, Skills and Step-by-step Instructions say how to answer, Error Handling covers a missing document, and Follow-up and Closing fixes how every conversation ends.

Model: the original runs on GPT-5.5 Chat, which the picker marks with will retire on 10/30/2026. The rebuild uses GPT Chat Latest, which always points to the current GPT chat model.

Orchestration and answer settings: generative orchestration picks topics, tools and knowledge by their descriptions, while classic orchestration matches trigger phrases. The demo keeps web search off, ungrounded answers and semantic search on, and moderation at Low.

Prove the scope: the checklist comes back with tasks and the supportive closing, the benefits question points to HR because no SharePoint source exists yet, and the capital question is declined. When an answer surprises you, read the activity map before you edit the instructions.
