---
slide: "06-01"
topic: 06-mcp
title: "Tool discovery with MCP"
subtitle: "A connector is fixed at import, an MCP server lists its tools at runtime"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/04-cs-tools/pptx/images/06-01-tool-discovery.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading inside the image, no
  arrow crossing a box or a label. Two lanes separated by a thin rule. Top lane "Custom connector, Lab
  4": a grey box "hr-service-swagger.json, OpenAPI file", an arrow "imported at design time" into a
  blue #eaf2ff box "HR-Services custom connector" listing getCandidates, getCandidate, addCandidate and
  removeCandidate, and an arrow "one action per operation" into a purple #f3edff box "Agentic HR,
  action: Get all candidates"; under the file "To add a capability: re-import the specification,
  re-add the action". Bottom lane "MCP server, Lab 5": a grey box "Tools/HRTools.cs, [McpServerTool]
  methods", an arrow "generates tool schemas" into a green #e9f7ef box "HR MCP Server, six tools,
  found at runtime" listing list_employees, search_employees, add_employee, update_employee,
  remove_employee and assign_shift; a purple box "HR Employee Management, MCP tool: HR MCP Server"
  sends "tools/list" to the server and gets the tools back "at runtime"; under the file "To add a
  capability: add a method, restart the server". SMIL animation on an 8 second loop in the bottom lane
  only: a dot carries tools/list to the server, the six tool rows light up one after another, and a
  dot carries the answer back to the agent.
order: 17
source: demos/04-cs-tools/06-mcp/readme.md
gamma_prompt: >
  Slide titled "Tool discovery with MCP", subtitle "A connector is fixed at import, an MCP server lists
  its tools at runtime". Left column: five short bullets on the connector's import, the server's
  tools/list, descriptions owned by the server, adding a tool, and the orchestration requirement. Right
  column, wider than the left: the provided diagram comparing the connector lane with the MCP server
  lane, as an inline content image at its natural 16:9 aspect ratio, never cropped, never used as a
  background or side accent. Use exactly the one image given for this card; do not generate or add any
  other images, icons or logos.
---

# Tool discovery with MCP

## Content

- A **custom connector** keeps the operations of the OpenAPI file you imported
- An **MCP server** answers `tools/list` at runtime with its current tools
- Tool descriptions come from the server's `[Description]` attributes, so a vague one is fixed there
- **Adding a tool** means adding a method and restarting the server
- MCP needs **generative orchestration**, and topics cannot call a server directly

## Speaker Notes

A connector is a design-time contract, an MCP server a runtime one. The diagram puts the two HR labs of this module side by side: the REST API lab's connector on top, the MCP lab's server below.

Custom connector: you import an OpenAPI file and map each operation to a tool. The tool list stays fixed until you import the file again and re-add the operation.

MCP server: the agent asks the server which tools exist, and Copilot Studio reflects added, changed and removed tools on its own. On the agent the whole server is one tool, and its settings page lists the server's tools.

Descriptions: in the HR server each tool is a C# method marked [McpServerTool], and its [Description] attributes become what the orchestrator reads. A maker cannot enrich them in Copilot Studio.

Adding a tool: a new method plus a restart, and connected agents discover it the next time they list the tools. Copilot Studio supports the Streamable HTTP transport only, so a server has to sit behind an HTTPS URL.

Orchestration: only the orchestrator decides when to call one of the server's tools, so MCP does not work with classic orchestration. Learn's guidance: use MCP when several agents share a toolset or the upstream API changes often.
