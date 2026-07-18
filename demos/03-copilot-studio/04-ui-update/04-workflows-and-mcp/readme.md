# Tools, MCP, and the New Workflows Designer

The new experience gives an agent several tool types from one Tools surface: Power Platform connectors, Model Context Protocol (MCP) servers, and workflows. This topic teaches makers how the agent reaches beyond its own instructions to act on real systems, and how the new workflows designer automates multi-step processes. It also connects MCP, already taught in [02-tools](../../02-tools/readme.md), to the new orchestration model.

The maker takeaway is fit for purpose. Use a connector for a single service action, an MCP server for a standardized set of tools that many agents can share, and a workflow for a repeated deterministic process the agent runs on demand.

## What to teach

- The three tool types: connectors (hundreds of services such as SharePoint, Outlook, Salesforce), MCP servers (standardized tools and resources), and workflows (automated multi-step flows).
- Adding an MCP server: Tools page, Add a tool, Model Context Protocol, then the onboarding wizard where you enter server name, description, and URL, and choose None, API key, or OAuth 2.0.
- Why the server description matters: the orchestrator reads it to decide whether to call the server at runtime, exactly as it reads a skill description.
- Prebuilt Microsoft MCP servers: Dataverse, GitHub, and Outlook, plus third-party servers such as Salesforce and JIRA, with custom servers for anything else.
- Transport and currency: Copilot Studio supports the Streamable transport; a change on the server is reflected automatically without republishing every agent.
- The new workflows designer: node-by-node testing, versioning, and agent nodes that call an agent from inside a workflow, currently in public preview.
- Classic contrast worth naming: in classic, MCP requires generative orchestration to be turned on, and topics cannot call an MCP server directly.

## When to use which tool

| Need | Best tool |
|------|-----------|
| One action in a single service | Connector |
| A shared, versioned set of tools for many agents | MCP server |
| A repeated deterministic multi-step process | Workflow |
| Call another agent as a step | Agent node in a workflow |

## Key Topics covered in this module

[Available tools for agents](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-available)

[Model Context Protocol (MCP) in Copilot Studio overview](https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp)

[Connect your agent to an existing MCP server](https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-existing-server-to-agent)

[Agent flows and workflows overview](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview)
