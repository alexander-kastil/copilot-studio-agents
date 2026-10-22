---
slide: "05-03"
topic: 05-connect-foundry-agents
title: "The Foundry call in the activity map"
subtitle: "CS-Social Profiler runs once the details are confirmed"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/05-cs-advanced/pptx/images/05-03-background-check.png
photo-link: demos/05-cs-advanced/pptx/images/05-03-background-check.png
visual-prompt: >
  Screenshot crop of the CS-Social Profiler node in the activity map of CS-Compliance Agent: Interpreting
  tool intent, Preparing tool inputs with the input social-profiler, Executing tool action, Processing
  tool result, Passing control to next node and the execution summary (pool 05-05-028).
order: 15
source: demos/05-cs-advanced/05-connect-foundry-agents/demo-compliance-agent-foundry.md
gamma_prompt: >
  Slide titled "The Foundry call in the activity map", subtitle "CS-Social Profiler runs once the
  details are confirmed". Layout: Two columns. Left column: four short bullets on the node, its input,
  the five answer sections and the preview limits. Right column, wider than the left: the provided
  screenshot of the CS-Social Profiler node as an inline content image at its natural aspect ratio,
  never cropped, never used as a background or side accent. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# The Foundry call in the activity map

## Content

- The **CS-Social Profiler** node appears only after "Yes, that's correct."
- Its input carries the Agent Id **social-profiler**
- The reply comes back in five sections, from **Person** to **Notes for the compliance check**
- Each hop runs its own model, so expect more **latency** than for a tool

## Speaker Notes

The activity map proves the order of the instructions: three questions, a confirmation table, and only then the call to Microsoft Foundry.

The node: after the confirmation, the map shows CS-Social Profiler with Interpreting tool intent, Preparing tool inputs and Executing tool action. The input is the Agent Id social-profiler, the value that selects the agent inside the project.

The answer: social-profiler is a prompt agent on gpt-5.4-mini with Web search. Its reply carries Person, Company, Email domain check, Public sources and Notes for the compliance check, and for example.com it reports a reserved example domain that doesn't match the company.

Limits: every call adds a hop with its own model run, and Learn notes that citations aren't always kept when an answer comes back from another agent.

Responsibility: Learn puts a connected external agent on you, the maker. Check what data reaches Foundry and agree with the developer team whether your agent relies on a pinned version or on the latest one.
