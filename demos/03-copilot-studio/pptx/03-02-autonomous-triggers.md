---
slide: "03-02"
topic: 03-advanced
title: "Autonomous agents and triggers"
subtitle: "A trigger is a Power Automate flow that prompts the agent"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/03-copilot-studio/pptx/images/03-02-autonomous-triggers.svg
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
order: 10
source: labs/03-copilot-studio/03-advanced/02-autonomous-agents/readme.md
gamma_prompt: >
  Slide titled "Autonomous agents and triggers", subtitle "A trigger is a Power Automate flow that
  prompts the agent". Layout: Two columns. Left column: four short bullets on events instead of chats,
  the Power Automate flow behind a trigger, the lab scenario and the author's credentials. Right column,
  wider than the left: the provided diagram of a PDF upload flowing from SharePoint through the trigger
  flow into the autonomous agent and on to two MCP servers, as an inline content image at its natural
  16:9 aspect ratio, never cropped, never used as a background or side accent. Use exactly the one image
  given for this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Autonomous agents and triggers

## Content

- An **autonomous agent** acts on an event: a new record, an incoming email, a scheduled time
- Its trigger is a **Power Automate flow** that sends the agent a prompt
- In the lab, a resume PDF in SharePoint becomes an employee record through the **HR MCP server**
- Triggers use the **author's credentials**; the instructions set the agent's boundaries

## Speaker Notes

Generative orchestration plans the work; an autonomous agent decides when the work starts. Here the request comes from an event instead of a person.

Events instead of chats: an autonomous agent reacts to a new record, an incoming email or a scheduled time with no human in the loop. It acts within the decision boundaries and guardrails its instructions set.

The trigger: behind every trigger sits a Power Automate flow, here When a file is created (properties only) followed by Sends a prompt to the specified copilot for processing. Almost any Power Automate trigger can therefore start an autonomous agent.

The lab: a resume PDF uploaded to SharePoint makes the Autonomous HR Docs Processor extract the candidate data, call add_employee on the HR MCP server and confirm with SendEmail. Several files uploaded at once can arrive as one flow run and one agent instance that processes them one by one.

Credentials and boundaries: publishing warns that triggers use the author's credentials and that editors get access to the embedded connections. The lab instructions draw the line: work without waiting for user input, and never invent candidate data.
