---
slide: "04-03"
topic: 04-workflows-and-mcp
title: "A workflow with an agent node"
subtitle: "Fixed steps around one call to your agent"
layout: diagram-full
visual-weight: 1/1
visual-type: diagram
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/04-03-workflow-run.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image, minimum 28px type. Redrawn from live
  screenshots 06-04-013 and 06-04-014 (Activity tab of GH-Food Reorder Draft), whose three nodes are a
  620x50 px strip on an empty canvas. A bracket labelled "Whole run: 17 s" spans three nodes joined by
  arrows: grey "When an agent calls the flow" (trigger, green check), purple "Agent" (published GH-Food
  Buddy, green check, 17.1 s) and grey "Respond to the agent" (returns the output, green check, 0.01 s).
  A blue chip "Input FoodItems" points up into the trigger, a blue chip "Output ReorderDraft" hangs
  below Respond to the agent, and a dashed line leads from the Agent node to a Run Details panel with
  status Completed and result "Reorder list (catalog read only, no records changed)".
order: 17
source: demos/06-cs-gh-copilot/04-workflows-and-mcp/demo-04-connect-mcp-and-workflow.md
gamma_prompt: >
  Slide titled "A workflow with an agent node", subtitle "Fixed steps around one call to your agent".
  Full-width layout: the provided diagram of the workflow run across the whole card width at its
  natural 16:9 aspect ratio, never cropped, with one caption line below it. Use exactly the one image given
  for this card; do not generate or add any other images, icons or logos.
---

# A workflow with an agent node

## Content

- Trigger, **Agent** node and **Respond to the agent** ran in 17 seconds; the agent node called the published GH-Food Buddy

## Speaker Notes

A workflow is the deterministic half of the Tools surface: an input, fixed steps, an output. The diagram redraws this run of GH-Food Reorder Draft from the live demo.

The nodes: the trigger When an agent calls the workflow takes a text input, the Agent node hands the drafting to an agent, and Respond to the agent returns the result as an output. In the live run the input was FoodItems and the output ReorderDraft; the demo guide builds the same shape as Northwind Follow-up Draft with AccountName and FollowUp.

Published agents only: an agent node calls the published version of an agent, so publish the agent after adding its tools. Picking New agent for this workflow instead builds a separate agent that knows nothing about yours.

Test and version: the Run node tab tests the agent node on its own, even on a draft, while the toolbar Run needs a published workflow. Every save and publish adds a version under the clock icon, with Preview, Compare to current and Restore.

The run: the agent node took 17.1 seconds and Respond to the agent 0.01, and the Run Details show status Completed with the drafted reorder list as the result.
