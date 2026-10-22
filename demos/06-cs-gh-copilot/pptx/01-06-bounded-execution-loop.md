---
slide: "01-06"
topic: 01-standard-vs-github-copilot
title: "Bounding the agent's loop"
subtitle: "The route is planned, the limits are set"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: existing
media-file: demos/06-cs-gh-copilot/01-standard-vs-github-copilot/_images/bounded-execution-loop.svg
photo-link: demos/06-cs-gh-copilot/01-standard-vs-github-copilot/_images/bounded-execution-loop.svg
visual-prompt: >
  Existing readme diagram: inside the agent run, a task contract leads to a plan, running only allowed
  steps with read-only tools and a check of evidence and output; a safe gap sends the agent back to
  planning, a denial, a safety failure or a reached limit stops the run with a partial or blocked
  report, and a complete result leaves as a draft that a person or workflow approves, records or pays.
order: 8
source: demos/06-cs-gh-copilot/01-standard-vs-github-copilot/readme.md
gamma_prompt: >
  Slide titled "Bounding the agent's loop", subtitle "The route is planned, the limits are set". Left
  column: four short bullets on the planned route, replanning without wider permissions, the stop
  conditions and the handoff to a person or workflow. Right column, wider than the left: the provided
  diagram of the bounded execution loop, at its natural 16:9 aspect ratio, never cropped. White
  background, calm pastel accents. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
---

# Bounding the agent's loop

## Content

- The agent asks for missing inputs, plans, runs the steps it may run and checks its **evidence**
- A safe gap means **replanning**, which never widens permissions or works around a denial
- A denial, a failed safety rule or a reached **limit** stops the run as partial or blocked
- The loop ends in a **draft with evidence**; a person or workflow takes the consequential step

## Speaker Notes

This slide shows how a GitHub Copilot agent that plans its own route stays inside limits. The diagram is the bounded execution loop from the topic readme.

The loop: the agent asks for missing inputs, makes a plan, picks the knowledge, skills and tools it needs, runs the steps it may run and checks that the evidence supports its output.

Replanning: when something is missing and recovery is safe, the agent plans again. Replanning never widens permissions or works around a denial.

Stopping: when access is denied, a safety rule fails or a limit on calls, time or retries is reached, the agent stops and reports the work as partial or blocked.

The handoff: the agent returns a draft with its evidence, uncertainty and exceptions, and a person or a deterministic workflow takes the consequential step such as the approval, the record update or the payment. The output says which parts are complete, partial or blocked.
