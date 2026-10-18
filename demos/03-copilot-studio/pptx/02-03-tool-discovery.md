---
slide: "02-03"
topic: 02-tools
title: "Tool discovery with MCP"
subtitle: "A connector is fixed at import, an MCP server lists its tools at runtime"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/03-copilot-studio/pptx/images/02-03-tool-discovery.svg
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
order: 8
source: labs/03-copilot-studio/02-tools/lab-5/readme.md
gamma_prompt: >
  Slide titled "Tool discovery with MCP", subtitle "A connector is fixed at import, an MCP server
  lists its tools at runtime". Left column: five short bullets on the custom connector's import, the
  MCP server's tools/list, tool metadata from the C# method signatures, adding a tool, and the
  Streamable HTTP transport. Right column, wider than the left: the provided diagram comparing the Lab
  4 connector lane with the Lab 5 MCP server lane, as an inline content image at its natural 16:9
  aspect ratio, never cropped, never used as a background or side accent. White background, calm
  pastel accents. Use exactly the one image given for this card; do not generate or add any other
  images, icons or logos.
---

# Tool discovery with MCP

## Content

- A **custom connector** keeps the operations of the OpenAPI file you imported
- An **MCP server** answers `tools/list` at runtime with its current tools
- Tool names, descriptions and **parameter schemas** come from the C# method signatures
- **Adding a tool** means adding a method and restarting the server
- **Streamable HTTP** is the transport Copilot Studio requires

## Speaker Notes

Labs 4 and 5 reach their own services in two ways, and this slide puts them side by side. Read the top lane as Lab 4 and the bottom lane as Lab 5.

Custom connector: you import an OpenAPI specification and map one operation to one action. The tool list stays frozen until you re-import the file and re-add the action.

MCP server: you point Copilot Studio at the server URL and every tool it exposes shows up at once. The agent calls tools/list and gets back the current set.

Parameter schemas: the HR MCP Server builds each tool's name, description and parameters from the C# method signatures in Tools/HRTools.cs. The agent's instructions never name a tool, because orchestration matches intent against these descriptions.

Adding a tool: a new method with [McpServerTool] and a [Description] adds a capability. Restart the server, reconnect, and the agent discovers it without any change to the agent.

Streamable HTTP: Copilot Studio requires this transport. The older stdio transport works only for a server on the same machine as the client.
