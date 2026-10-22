---
slide: "04-01"
topic: 04-agent-flows
title: "The Health Advisor's two agent flows"
subtitle: "A prompt step classifies, a review step guards the post"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: existing
media-file: demos/04-cs-tools/04-agent-flows/_images/health-advisor-flows-overview.svg
photo-link: demos/04-cs-tools/04-agent-flows/_images/health-advisor-flows-overview.svg
visual-prompt: >
  Existing demo diagram: Check Symptoms calls CS-Summarize Patient Symptoms and branches on the Outcome;
  Post to teams calls CS-Post to teams, which answers the agent at once, waits for a reviewer and posts.
order: 11
source: demos/04-cs-tools/04-agent-flows/demo-health-advisor-flows.md
gamma_prompt: >
  Slide titled "The Health Advisor's two agent flows", subtitle "A prompt step classifies, a review step
  guards the post". Full-width layout: the provided diagram across the whole card under the title at its
  natural aspect ratio, never cropped, with one caption line below it. Use exactly the one image given
  for this card; do not generate or add any other images, icons or logos.
---

# The Health Advisor's two agent flows

## Content

- **Check Symptoms** branches on the Outcome of CS-Summarize Patient Symptoms, and **CS-Post to teams** answers the agent at once, then waits for a reviewer

## Speaker Notes

Logging a ticket or posting advice has to happen the same way every time. Agent flows are the deterministic half of a Standard agent: one trigger, a fixed sequence of actions, the same output for the same input.

Flows as tools: a flow becomes a tool with When an agent calls the flow and Respond to the agent, Asynchronous response off, published, and a typical run inside the 100-second action limit. The trigger's inputs are the contract the agent fills, and the outputs are what it gets back.

The first flow: Check Symptoms collects age, gender and symptoms, and the flow returns an Outcome. A Power Fx condition looks for "cleared for light work" and asks a follow-up question when it is missing.

The second flow: it answers the agent first, then waits for a reviewer before it posts to Teams. Actions after Respond to the agent keep running for up to the 30-day flow run limit.

Flow tool or connector tool: one read or write in one service is a connector tool. Several steps in a fixed order, a condition or a person in the middle belong in a flow, billed at 13 Copilot Credits per 100 actions.
