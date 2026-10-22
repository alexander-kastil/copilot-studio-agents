---
slide: "01-01"
topic: 01-autonomous-agents
title: "Autonomous agents and triggers"
subtitle: "A trigger is a Power Automate flow that prompts the agent"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/05-cs-advanced/pptx/images/01-01-autonomous-triggers.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  Consolas for tool names, borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading
  inside the image, no arrow crossing a box or a label. Left to right: a blue #eaf2ff box "SharePoint"
  (document library, a candidate PDF is uploaded); a grey #f6f8fa container "Trigger" (a Power Automate
  flow) holding two white cards joined by a downward arrow, "When a file is created (properties only)"
  and "Sends a prompt to the specified copilot for processing"; a purple #f3edff box "Autonomous HR Docs
  Processor" (extracts the candidate data); then two green #e9f7ef boxes stacked on the right, "HR MCP
  server" with Consolas "add_employee" (new employee record in a SQL database) and "Email Management MCP
  Server" with Consolas "SendEmail" (confirmation email with a recap). SMIL animation on an 8 second
  loop: an amber dot carries the upload from SharePoint through both flow steps into the agent, then to
  add_employee and to SendEmail, each box outlined amber as the dot arrives; the diagram is complete at
  t=0.
order: 3
source: demos/05-cs-advanced/01-autonomous-agents/readme.md
gamma_prompt: >
  Slide titled "Autonomous agents and triggers", subtitle "A trigger is a Power Automate flow that
  prompts the agent". Layout: Two columns. Left column: four short bullets on event triggers, the
  payload, the flow behind a trigger and the lab scenario. Right column, wider than the left: the
  provided diagram of a PDF upload flowing from SharePoint through the trigger flow into the autonomous
  agent and on to two MCP servers, as an inline content image at its natural 16:9 aspect ratio, never
  cropped, never used as a background or side accent. Use exactly the one image given for this card;
  do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Autonomous agents and triggers

## Content

- An **event trigger** fires when something happens in another system, not when a user types
- It sends the agent a **payload** with the event's data, and the instructions decide which tools run
- Behind every trigger sits a small **Power Automate flow** that sends the agent a prompt
- In the lab, a resume PDF in SharePoint becomes an employee record through the **HR MCP server**

## Speaker Notes

Every agent so far waited for someone to type. An autonomous agent reacts to an event instead: a new list item, an email, a completed Planner task or a set time.

Event trigger: Learn calls it one part of a three-part workflow. The trigger registers the event, sends a payload, and the agent's instructions choose among the tools and topics the maker gave it; it never invents a new action.

Payload: each trigger ships a default, such as "Use content from Body". The payload says how to react to this one event, and the agent instructions keep the rules that apply to every run.

The flow: Edit in Power Automate opens the flow behind the trigger, the event followed by an action that prompts the agent. Almost any event Power Automate can listen to can start an agent, and event triggers need generative orchestration.

The lab: an uploaded resume PDF makes the Autonomous HR Docs Processor call add_employee on the HR MCP server and confirm with SendEmail. Several files uploaded at once start one flow run and one agent session.
