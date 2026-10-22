---
slide: "04-03"
topic: 04-workflows-and-mcp
title: "A workflow with an agent node"
subtitle: "Fixed steps around one call to your agent"
layout: diagram-full
visual-weight: 1/1
visual-type: screenshot
media-source: existing
media-file: demos/06-cs-gh-copilot/pptx/images/04-03-workflow-run.png
photo-link: demos/06-cs-gh-copilot/pptx/images/04-03-workflow-run.png
visual-prompt: >
  Live screenshot, pool id 06-04-013: the published GH-Food Reorder Draft workflow on its Activity tab,
  one run of 17 s, the nodes When an agent calls the flow, Agent (17.1 s) and Respond to the agent
  (0.01 s) with green checks, and the Agent node's Run Details showing status Completed and the result.
order: 12
source: demos/06-cs-gh-copilot/04-workflows-and-mcp/demo-04-connect-mcp-and-workflow.md
gamma_prompt: >
  Slide titled "A workflow with an agent node", subtitle "Fixed steps around one call to your agent".
  Full-width layout: the provided screenshot of the workflow run across the whole card width at its
  natural aspect ratio, never cropped, with one caption line below it. Use exactly the one image given
  for this card; do not generate or add any other images, icons or logos.
---

# A workflow with an agent node

## Content

- Trigger, **Agent** node and **Respond to the agent** ran in 17 seconds; the agent node called the published GH-Food Buddy

## Speaker Notes

A workflow is the deterministic half of the Tools surface: an input, fixed steps, an output. This run of GH-Food Reorder Draft is from the live demo.

The nodes: the trigger When an agent calls the workflow takes a text input, the Agent node hands the drafting to an agent, and Respond to the agent returns the result as an output. In the live run the input was FoodItems and the output ReorderDraft; the demo guide builds the same shape as Northwind Follow-up Draft with AccountName and FollowUp.

Published agents only: an agent node calls the published version of an agent, so publish the agent after adding its tools. Picking New agent for this workflow instead builds a separate agent that knows nothing about yours.

Test and version: the Run node tab tests the agent node on its own, even on a draft, while the toolbar Run needs a published workflow. Every save and publish adds a version under the clock icon, with Preview, Compare to current and Restore.

The run: the agent node took 17.1 seconds and Respond to the agent 0.01, and the Run Details show status Completed with the drafted reorder list as the result.
