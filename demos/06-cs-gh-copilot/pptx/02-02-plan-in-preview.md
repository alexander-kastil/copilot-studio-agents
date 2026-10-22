---
slide: "02-02"
topic: 02-unified-build-and-orchestrator
title: "Reading the plan in Preview"
subtitle: "A reason instruction turns one question into parallel searches"
layout: split-code
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/06-cs-gh-copilot/pptx/images/02-02-plan-in-preview.png
photo-link: demos/06-cs-gh-copilot/pptx/images/02-02-plan-in-preview.png
visual-prompt: >
  Live screenshot, pool id 06-01-027: GH-Health Advisor in Preview with Debug mode on, answering the
  fever and business trip question. The step list shows the thought, Ran 2 events in parallel and an
  expanded Used tool: Searched knowledge with its three uploaded sources, the Input query and the Output.
order: 7
source: demos/06-cs-gh-copilot/02-unified-build-and-orchestrator/demo-02-trace-agent-reasoning.md
gamma_prompt: >
  Slide titled "Reading the plan in Preview", subtitle "A reason instruction turns one question into
  parallel searches". Split code layout: left column a light grey panel with the instruction line as a
  code block and one bullet, right column the provided screenshot of the Preview step list at its
  natural aspect ratio, never cropped. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
---

# Reading the plan in Preview

## Content

- With **Debug mode** on, the step list shows **Ran 2 events in parallel**, one **Searched knowledge** per part of the question

```text
When an employee mentions a trip and a symptom, reason step by step:
first check whether the symptom allows travel, then look up the
company doctor's consultation hours and booking rules, then summarize.
```

## Speaker Notes

The runtime from the previous slide is easiest to trust when you can watch it plan. This screenshot is from the live run on GH-Health Advisor, the agent that carried topics one to three.

The instruction: the code block is the line added to the agent's Instructions in the live run. The keyword reason forces deliberate planning, and the demo guide adds the same kind of line to the Northwind Sales Assistant for a seller who names an account.

The plan: asked "I have a fever and I am supposed to travel abroad for business next week", the agent first thought it should look up travelling with health issues and the company doctor hours at the same time. It then ran two knowledge searches in parallel instead of one undifferentiated pass.

The evidence: expanding Used tool: Searched knowledge shows the sources it could search (company-doctor-hours.md, Traveling with Health Issues.docx and The Benefits of Intermittent Fasting.docx), the query it ran and the number of results. A second source is what gives the planner something to route across.

After the fact: History keeps every Preview session with its activity and credits, so a colleague's question from yesterday can be debugged today.
