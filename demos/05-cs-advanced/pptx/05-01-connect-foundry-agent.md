---
slide: "05-01"
topic: 05-connect-foundry-agents
title: "Connecting a Foundry agent"
subtitle: "The Activity Protocol on the Foundry side, a connection and an Agent Id in Copilot Studio"
layout: split-code
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/05-cs-advanced/pptx/images/05-01-social-profiler-entry.png
photo-link: demos/05-cs-advanced/pptx/images/05-01-social-profiler-entry.png
visual-prompt: >
  Screenshot crop of the Details card of CS-Social Profiler on the Agents page of CS-Compliance Agent:
  name, description, Server Azure AI Foundry Agent Service (external agent activity protocol), the
  connection CS-Microsoft Foundry with a green status and Available to CS-Compliance Agent (pool
  05-01-002).
order: 13
source: demos/05-cs-advanced/05-connect-foundry-agents/readme.md
gamma_prompt: >
  Slide titled "Connecting a Foundry agent", subtitle "The Activity Protocol on the Foundry side, a
  connection and an Agent Id in Copilot Studio". Split code layout: left column a light grey panel
  holding the JSON request body exactly as given in a monospace font, right column the provided
  screenshot of the CS-Social Profiler details card as an inline content image at its natural aspect
  ratio, never cropped. Use exactly the one image given for this card; do not generate or add any other
  images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Connecting a Foundry agent

## Content

```json
{
  "agent_endpoint": {
    "protocol_configuration": {
      "responses": {},
      "activity": {},
      "a2a": {}
    },
    "authorization_schemes": [
      { "type": "Entra" },
      { "type": "BotServiceRbac" }
    ]
  }
}
```

## Speaker Notes

Connecting a Foundry agent keeps one source of truth: the maker owns the conversation, channels and routing in Copilot Studio, and the developers keep the specialist. Learn marks the connection as preview.

Foundry side: Copilot Studio talks to the agent over the Activity Protocol, which a new agent doesn't have. Without it you can still add the connection, but every call fails with an HTTP 400 error.

The update: this body goes to the agent with a PATCH and the content type application/merge-patch+json. It replaces the whole list, so it names responses and Entra as well; the portal keeps showing only Responses and A2A, which Learn calls expected.

Copilot Studio side: on the Agents page, Add, Connect to an external agent, Microsoft Foundry. The demo creates the connection CS-Microsoft Foundry with Microsoft Entra ID User Login and the project endpoint, then enters CS-Social Profiler, a description and the Agent Id social-profiler.

Routing: the planner picks the Foundry agent by the description entered here, like any other agent. An agent created in the previous Foundry portal fails with 404 - Version not found.
