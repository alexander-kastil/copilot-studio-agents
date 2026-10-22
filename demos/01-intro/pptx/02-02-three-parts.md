---
slide: "02-02"
topic: 02-how-agents-work
title: "The three parts of every agent"
subtitle: "Instructions, knowledge and tools in a Copilot Studio agent"
layout: diagram
visual-weight: 2/3
visual-type: screenshot
media-source: existing
media-file: demos/01-intro/pptx/images/02-02-agent-parts.png
photo-link: demos/01-intro/pptx/images/02-02-agent-parts.png
visual-prompt: >
  Live screenshot (pool 03-01-042), cropped to the left column of the CS-Employee Onboarding Assistant
  overview page in Copilot Studio: the end of its Instructions and the Knowledge section with a SharePoint
  source marked Ready.
order: 7
source: demos/01-intro/02-how-agents-work/readme.md
gamma_prompt: >
  Slide titled "The three parts of every agent", subtitle "Instructions, knowledge and tools in a Copilot
  Studio agent". Layout: Two columns. Left column: the bullets. Right column, wider than the left: the
  provided screenshot as an inline content image at its natural 2:1 aspect ratio, scaled to fit the
  column, never cropped, never used as a background or side accent. Use exactly the one image given for
  this card; do not generate or add any other images, icons or logos.
---

# The three parts of every agent

## Content

- **Instructions** set the role, tone and scope, here the onboarding agent's rules and examples
- **Knowledge** grounds answers in your content through RAG, here a SharePoint site
- **Tools** act on live systems, often through an MCP server; this agent has none yet
- A weak agent is thin in one part: **name which one** to fix it

## Speaker Notes

Every agent in this course, on any surface, is built from the same three parts. The screenshot shows the CS-Employee Onboarding Assistant from Copilot Studio Basics, with all three on its overview page.

Instructions: the system prompt sets the agent's role, tone and rules, and good instructions name the scope and what to do when the answer is missing. In the test panel the agent declines the off-topic question about the capital of Australia and a limerick.

Knowledge: Retrieval Augmented Generation fetches relevant snippets from your content at question time, and the semantic index finds them by meaning, so a search for time off policy also matches annual leave. This agent grounds its answers in the HR Documents SharePoint site.

Tools: they are functions the agent calls for live data or to act, such as a REST connector, an MCP server or a Power Automate flow. An MCP server describes its tools once, and any MCP-aware host, Copilot Studio or Claude, discovers and calls them.

Name the thin part: confident but wrong answers point to knowledge or instructions, off-topic answers to instructions, and no access to current data to tools. This agent has no tools yet, so it can answer from documents but cannot act.
