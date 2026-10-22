---
slide: "00-02"
topic: 05-cs-advanced
title: "Overview"
subtitle: "Seven topics in delivery order"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/05-cs-advanced/pptx/images/00-02-module-path.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, text #24292f and #57606a, minimum 26px type, no heading inside the image, no
  arrow crossing a box or a label. Seven full-width topic cards stacked top to bottom, each with a
  numbered circle, the topic title from the module readme in bold and one line naming its demo. A left
  column labels four groups with a grey bracket line: "Wakes on an event" (topic 1, blue #eaf2ff),
  "Reasons through a hard problem" (topic 2, purple #f3edff), "Routes work to other agents" (topics 3
  to 5, green #e9f7ef) and "Optional" (topics 6 and 7, grey #f6f8fa with dashed borders). Demo lines:
  CS-Returns Agent answers every new email in a shared mailbox; the help desk orders a ticket backlog
  with reason on one step; CS-Business Travel Planner routes to connected agents and a child agent; a
  device specialist built as a prompt agent in Microsoft Foundry; CS-Compliance Agent hands a confirmed
  check to CS-Social Profiler; a keypad and speech menu with a post-call action; a routing test set
  for CS-Business Travel Planner. Static.
order: 2
source: demos/05-cs-advanced/readme.md
gamma_prompt: >
  Slide titled "Overview", subtitle "Seven topics in delivery order". Layout: Two columns. Left column:
  five short bullets walking the path through the module. Right column, wider than the left: the
  provided diagram of seven numbered topic cards in four groups, as an inline content image at its
  natural 16:9 aspect ratio, never cropped, never used as a background or side accent. Use exactly the
  one image given for this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Overview

## Content

- Start with an agent that **wakes on an event** and answers by mail
- Give one hard step a **deep reasoning** model with the `reason` keyword
- Route work to **child and connected agents** through generative orchestration
- Bring in **Microsoft Foundry** agents that developers build and own
- Optional: **voice** menus on the phone and **test sets** that grade the agent

## Speaker Notes

This slide walks the path through the seven topics once. Each topic has a demo, and most of them run on an agent the class built in earlier modules.

Wakes on an event: topic one turns CS-Returns Agent into an autonomous agent that answers every new email in a shared returns mailbox.

Reasons through a hard problem: topic two orders a ticket backlog for the Grey Logistics IT Help Desk, once on the default model and once with reason on the ranking step.

Routes work to other agents: topic three puts CS-Business Travel Planner in front of the travel specialists, topic four builds a device specialist in Microsoft Foundry, and topic five connects the social-profiler Foundry agent to CS-Compliance Agent.

Optional: voice takes a help desk agent to the phone, and evaluation grades the travel planner's routes with a test set.
