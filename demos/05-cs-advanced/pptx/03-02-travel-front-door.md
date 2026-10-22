---
slide: "03-02"
topic: 03-multi-agent
title: "One front door for the travel specialists"
subtitle: "CS-Business Travel Planner names a specialist for every request"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/05-cs-advanced/pptx/images/03-02-routing-instructions.png
photo-link: demos/05-cs-advanced/pptx/images/03-02-routing-instructions.png
visual-prompt: >
  Screenshot crop of the Instructions card of CS-Business Travel Planner, with the agent references
  Work life balance Buddy, CS-Travel Agent, CS-Health Advisor and CS-Travel Expense Refund rendered as
  chips, and the model card above it (pool 05-03-008).
order: 9
source: demos/05-cs-advanced/03-multi-agent/demo-business-travel-planner.md
gamma_prompt: >
  Slide titled "One front door for the travel specialists", subtitle "CS-Business Travel Planner names
  a specialist for every request". Layout: Two columns. Left column: four short bullets on connected
  agents, the child agent, descriptions and references. Right column, wider than the left: the provided
  screenshot of the planner's instructions with agent chips as an inline content image at its natural
  aspect ratio, never cropped, never used as a background or side accent. Use exactly the one image
  given for this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# One front door for the travel specialists

## Content

- Three **connected agents**: CS-Travel Agent, CS-Health Advisor and CS-Travel Expense Refund
- One **child agent**, Work life balance Buddy, answers from a gym document only it can see
- Each description says what the specialist covers and what it **does not handle**
- Typing `/` on an agent name turns it into a **reference**, shown as a chip

## Speaker Notes

An employee planning a trip shouldn't need to know that booking, a health check and the expense claim live in three agents. CS-Business Travel Planner is the one agent they talk to, and it owns no knowledge of its own.

Connected agents: each is a separate published agent in the same environment with Let other agents connect to and use this one turned on. The planner always calls the last published version, so publish the specialists before the parent.

Child agent: Work life balance Buddy lives inside the planner and ships with it. It always receives the parent's context, and its gym document is invisible to every other agent.

Descriptions: the description on the planner side is a local copy you control. The CS-Travel Agent text ends with "Does not handle health questions, expense claims or gym benefits", which keeps the allowance question away from it.

References: select each agent name in the instructions, type a slash and pick the agent. With those chips, all five routes of the travel planner reached the right agent.
