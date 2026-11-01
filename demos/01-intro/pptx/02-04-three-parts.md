---
slide: "02-04"
topic: 02-how-agents-work
title: "What you design in every agent"
subtitle: "Instructions, knowledge and tools in a Copilot Studio agent"
layout: diagram
visual-weight: 2/3
visual-type: svg
media-source: existing
media-file: demos/01-intro/pptx/images/02-02-three-parts.svg
visual-prompt: >
  Existing SVG demos/01-intro/pptx/images/02-02-three-parts.svg from the How Agents Work readme: a user
  question reaches the agent, which reads its instructions (how it behaves), retrieves grounding from
  knowledge (what it knows) when it needs facts, calls tools (what it can do) when it needs live data or
  has to act, and returns a grounded answer or action.
order: 10
source: demos/01-intro/02-how-agents-work/readme.md
gamma_prompt: >
  Slide titled "What you design in every agent", subtitle "Instructions, knowledge and tools in a Copilot
  Studio agent". Layout: Two columns. Left column: the bullets. Right column, wider than the left: the
  provided diagram as an inline content image at its natural 16:9 aspect ratio, scaled to fit the
  column, never cropped, never used as a background or side accent. Use exactly the one image given for
  this card; do not generate or add any other images, icons or logos.
---

# What you design in every agent

## Content

- **Instructions** decide how the agent behaves: role, tone and scope
- **Knowledge** grounds answers in your content when it needs facts
- **Tools** fetch live data or act, often through an MCP server
- A weak agent is thin in one part: **name which one** to fix it

## Speaker Notes

Every agent in this course, on any surface, is designed from the same three parts; the model and the harness run that design. The diagram follows one user question through them to a grounded answer or an action.

Instructions: the system prompt sets the agent's role, tone and rules, and good instructions name the scope and what to do when the answer is missing ("say I don't know"), which cuts down confident wrong answers.

Knowledge: when the agent needs facts, Retrieval Augmented Generation fetches relevant snippets from your content at question time, and the semantic index finds them by meaning, so a search for time off policy also matches annual leave. Sources are SharePoint sites, uploaded files, Dataverse tables or Bing custom search.

Tools: when the agent needs live data or has to act, it calls functions such as a REST connector, an MCP server or a Power Automate flow. An MCP server describes its tools once, and any MCP-aware host, Copilot Studio or Claude, discovers and calls them.

Name the thin part: confident but wrong answers point to knowledge or instructions, off-topic answers to instructions, and no access to current data to tools. When the design looks complete, check the model and the harness next.
