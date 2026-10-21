---
slide: "04-01"
topic: 04-workflows-and-mcp
title: "Connectors, MCP servers and workflows"
subtitle: "Which tool fits which job"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/04-01-connectors-mcp-workflows.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image, minimum 28px type. Top: a blue box
  "Agent" with an arrow down into a wide grey bar "Tools: add all three from the same place". Three
  arrows lead down into three white panels side by side. Connector panel (amber header): a box "Send
  an email" with an arrow down to a box "Outlook", captioned "One action, one service" and the quote
  "send one email" or "create one record". MCP server panel (purple header): a line labelled "one
  connection" into a purple frame holding chips "tool", "tool", "tool" and "resource", captioned "A
  shared set of tools" and the quote "give every agent the same shared toolbox". Workflow panel (green
  header): "input" into five numbered green circles in a row and out to "output", captioned "Repeated
  multi-step process" and the quote "do these five steps the same way every time". Static.
order: 5
source: demos/06-cs-gh-copilot/04-workflows-and-mcp/readme.md
gamma_prompt: >
  Slide titled "Connectors, MCP servers and workflows", subtitle "Which tool fits which job". Left
  column: four short bullets on a connector for one action, an MCP server for a shared set of tools
  whose description routes the call, a workflow for a repeated multi-step process, and the agent node
  that calls an agent from inside a workflow. Right column, wider than the left: the provided diagram
  of an agent reaching one Tools surface that splits into a connector, an MCP server and a workflow,
  at its natural 16:9 aspect ratio, never cropped. White background, calm pastel accents. Use exactly
  the one image given for this card; do not generate or add any other images, icons or logos.
---

# Connectors, MCP servers and workflows

## Content

- **Connector**: one action against one service, such as sending one email
- **MCP server**: one connection to a shared set of tools; its description tells the orchestrator when to call it
- **Workflow**: a repeated multi-step process, tested node by node and versioned in the new designer
- **Agent node**: a workflow step that hands a task to your agent and passes the result on

## Speaker Notes

Everything an agent does beyond talking comes from one Tools surface, and a GitHub Copilot agent offers three kinds of tools there. You add all three from the same place, so the decision is about fit for the job rather than about where the button sits. In a Standard agent, MCP needs generative orchestration turned on and topics cannot call an MCP server directly; a GitHub Copilot agent treats all three tool types as first-class.

Connector: a connector gives the agent a single action against a single service, drawn from the hundreds Power Platform already ships, such as SharePoint, Outlook and Salesforce. It is the right size for "send one email" or "create one record".

MCP server: Model Context Protocol is an open standard that lets an agent reach a whole set of tools through one connection. You add it with Add a tool, then Model Context Protocol, and enter the server name, description and URL plus None, API key or OAuth 2.0 authentication; Dataverse, GitHub and Outlook ship as prebuilt Microsoft servers. Stress that the description is an instruction: the orchestrator reads it at runtime to decide whether to call the server, so write it as a plain "call this when" sentence. With the Streamable transport, a new or updated tool on the server reaches every connected agent without a republish.

Workflow: a workflow is for deterministic work done the same way every time: take an input, run a fixed sequence of steps, produce an output. The new workflows designer builds it node by node, lets you test each node on its own and keeps versions, so a change is deliberate; the designer is in public preview.

Agent node: this node calls an agent from inside a workflow as one step. The workflow hands the task to the agent's reasoning, takes the result and passes it to the next deterministic step, for example drafting a recap with the agent and then sending it through an Outlook action.
