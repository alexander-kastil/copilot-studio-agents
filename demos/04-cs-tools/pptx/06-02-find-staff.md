---
slide: "06-02"
topic: 06-mcp
title: "Finding staff through the HR MCP server"
subtitle: "CS-Restaurant HR Manager reads the team before it plans"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/04-cs-tools/pptx/images/06-02-find-staff.png
photo-link: demos/04-cs-tools/pptx/images/06-02-find-staff.png
visual-prompt: >
  CS-Restaurant HR Manager test chat: the bartender and waiter question for Friday evening and the answer naming Sofia Fernandez and Luca Rossi with their languages (pool 04-06-004).
order: 18
source: demos/04-cs-tools/06-mcp/demo-restaurant-hr-mcp.md
gamma_prompt: >
  Slide titled "Finding staff through the HR MCP server", subtitle "CS-Restaurant HR Manager reads the
  team before it plans". Left column: four short bullets on how the orchestrator reached the server and
  what came back. Right column, wider than the left: the provided screenshot of the test chat as an
  inline content image, never cropped. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
---

# Finding staff through the HR MCP server

## Content

- The question names no tool; the orchestrator picks **CS-HR MCP Server** from its description
- The answer names **Sofia Fernandez** and **Luca Rossi** with their languages, from the seeded staff
- The server was connected through the **MCP onboarding wizard**: name, description, URL, no authentication
- A reply that names people missing from the server's data means **no tool ran**

## Speaker Notes

Step 1 of the agent's instructions says to retrieve names, roles and availability from the HR system before planning. This is the read test from the live run.

The orchestrator's choice: the wizard's server description, "Knows about employees and how they can be used in our restaurant", is what the orchestrator reads. The activity map shows list_employees or search_employees running on CS-HR MCP Server.

The answer: Sofia Fernandez is a bartender who speaks Portuguese, Spanish and English, and Luca Rossi is head waiter with Italian, English and Spanish. The agent added on its own that their Friday availability still needs checking.

The wizard: it needs no tool list, because the agent discovers the six tools from the server. The HR server answers at the root of its HTTPS address.

The check: when a reply names people the server does not know, the orchestrator answered without calling it and the activity map shows no tool call. The server's search semantics bind the agent too: a deployed search_employees that matched single names only returned nothing for a full name.
