---
slide: "03-01"
topic: 03-agent-anatomy
title: "The three parts of every agent"
subtitle: "Instructions, knowledge and tools at run time"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/01-intro/pptx/images/03-01-three-parts.svg
visual-prompt: >
  Hand-written SVG with SMIL animation (8 s loop, complete at t=0), viewBox 0 0 1920 1080, white
  background, Segoe UI, Helvetica, Arial, sans-serif, borders #8c959f 2px, headings #24292f, secondary
  text #57606a, minimum 28px type. No heading inside the image. A grey "User question" box on the left
  arrows into a purple #f3edff "Agent" box holding a white "Instructions" card ("How it behaves"). Above
  it a blue #eaf2ff "Knowledge" box ("What it knows"), joined by a two-way arrow labelled "Retrieves
  grounding when it needs facts". Below it a green #e9f7ef "Tools" box ("What it can do"), joined by a
  two-way arrow labelled "Calls tools when it needs live data or has to act". On the right a grey box
  "Grounded answer or action". An amber marker walks the path in that order.
order: 9
source: demos/01-intro/03-agent-anatomy/readme.md
gamma_prompt: >
  Slide titled "The three parts of every agent", subtitle "Instructions, knowledge and tools at run
  time". Layout: Two columns. Left column: the bullets. Right column, wider than the left: the provided
  diagram as an inline content image at its natural 16:9 aspect ratio, scaled to fit the column, never
  cropped, never used as a background or side accent. Use exactly the one image given for this card; do
  not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# The three parts of every agent

## Content

- **Instructions**: the system prompt that sets the agent's role, tone and rules
- **Knowledge**: grounding content the agent retrieves from when it needs facts
- **Tools**: functions it calls for live data or to take action
- A weak agent is thin in one part: **name which one** to fix it

## Speaker Notes

Every agent in this course, on any surface, is assembled from the same three parts. A well-built agent reads its instructions, retrieves grounding from knowledge when it needs facts, and calls tools when it needs live data or has to act.

Instructions: they decide how the agent behaves and are the biggest lever on quality. A dependable structure names the role, the scope, which knowledge to trust, the tone and the steps, and tells the agent to say "I don't know" when the answer is missing.

Knowledge: it decides what the agent knows, from SharePoint sites, uploaded files, Dataverse tables or Bing custom search.

Tools: they decide what the agent can do, through a REST connector, an MCP server or a Power Automate flow.

Name the thin part: confident but wrong answers point to knowledge or instructions, off-topic answers to instructions, and no access to current data to tools.
