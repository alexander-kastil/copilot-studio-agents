---
slide: "04-02"
topic: 04-workflows-and-mcp
title: "Adding an MCP server"
subtitle: "One connection, every tool the server exposes"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/06-cs-gh-copilot/pptx/images/04-02-mcp-edit-tool.png
photo-link: demos/06-cs-gh-copilot/pptx/images/04-02-mcp-edit-tool.png
visual-prompt: >
  Live screenshot, pool id 06-04-022: the Edit tool dialog of GH-Food Buddy for its MCP server, with
  the connection GH-Food MCP, Authentication End user account and Tool permissions listing seven food
  catalog tools under Allow all.
order: 16
source: demos/06-cs-gh-copilot/04-workflows-and-mcp/demo-04-connect-mcp-and-workflow.md
gamma_prompt: >
  Slide titled "Adding an MCP server", subtitle "One connection, every tool the server exposes". Layout:
  Two columns. Left column: the bullets. Right column, wider than the left: the provided screenshot of
  the Edit tool dialog as an inline content image at its natural aspect ratio, scaled to fit the column,
  never cropped, never used as a background or side accent. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
---

# Adding an MCP server

## Content

- **Add a tool**, MCP tab for a prebuilt server, or **Model Context Protocol** for your own
- Server name, **description**, URL and authentication: None, API key or OAuth 2.0
- **Edit tool** lists every tool the server exposes under **Tool permissions**
- The orchestrator calls the server on its own when a question matches the description

## Speaker Notes

This slide turns the MCP box of the previous diagram into the real dialog. The screenshot is from the live run on GH-Food Buddy, connected to the class's food catalog server.

Two ways in: on the Build tab, the plus next to Tools opens Add a tool with the tabs Featured, MCP, Connectors and Workflows. Prebuilt Microsoft servers such as Dataverse sit on the MCP tab, and your own server goes through Model Context Protocol; the live run used it with authentication None.

The description: the Server description is routing logic, not documentation, so write it in the words of the questions people ask. A vague description is the most common reason a good server never gets called.

Edit tool: after the connection step, Edit tool shows the connection, the authentication and Tool permissions with Allow all on. For GH-Food Buddy that was seven tools, from Get all food items to Update food item stock, through one connection.

The call: in Preview, "List the food in the catalog with units in stock and minimum stock" showed Used tool: get_all_food_items with no topic wiring. With the Streamable transport, a tool the server owner adds reaches the agent without a republish.
