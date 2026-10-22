# Extending Copilot Studio Agents with Tools

A grounded agent can answer questions; a tooled agent can act. This module moves a Standard agent (Learn: standard harness) from reading knowledge to calling real systems: running a prompt, invoking connectors and agent flows, reading and writing Dataverse, calling a REST API, reaching an MCP server, and driving a user interface that has no API at all. Each tool type has a job it does best, and the maker skill is choosing the right one.

![A Copilot Studio agent in the centre reaching the tool types of this module, each labelled with what it reaches.](pptx/images/00-01-tool-types.svg)

Adding a tool is a configuration task in the agent's **Tools** area. Tools, MCP and workflows return for GitHub Copilot agents in [Tools, MCP, and the New Workflows Designer](../06-cs-gh-copilot/04-workflows-and-mcp/readme.md), so the concepts carry straight across.

## Topics

| Topic | What it teaches |
|-------|-----------------|
| [Prompt Tool & Code Interpreter](01-prompts/readme.md) | Prompts as tools, prompt builder, Prompt assistant and the prompt library, typed inputs and outputs, and code interpreter |
| [Connector Tools: Prebuilt Connectors](03-connectors/readme.md) | Prebuilt connectors as tools, how the tool name and description drive orchestration, user versus maker credentials, and component collections |
| [Agent Flows: Deterministic Automation](04-agent-flows/readme.md) | Agent flows built in Copilot Studio, flows as tools with inputs and outputs, AI actions inside a flow, express mode and billing |
| [Dataverse: Knowledge & Business Records](02-dataverse/readme.md) | Dataverse as a knowledge source and as a read and write target for business records |
| [Custom Connectors & REST APIs](05-rest-api/readme.md) | A custom connector secured with Microsoft Entra ID, the REST API tool, the HTTP request node, and when to use which |
| [MCP Servers as Agent Tools](06-mcp/readme.md) | MCP servers as tools, runtime tool discovery, transport and authentication, and the generative orchestration requirement |
| [Computer Use: Apps Without APIs](07-computer-use/readme.md) | What computer use automates, where it runs, models and credits per step, guardrails, and when an API is the better choice |

## Hands-On Demos

| Topic | Description |
|-------|-------------|
| [Prompt Tool & Code Interpreter](01-prompts/demo-prompt-tool-with-code-interpreter.md) | Two prompt tools for the help desk agent: one returns every triage in the same JSON shape, one calculates exact backlog figures with code interpreter |
| [Connector Tools: Prebuilt Connectors](03-connectors/demo-connector-tools.md) | Three prebuilt connector tools chained from one sentence, then shared in a component collection |
| [Agent Flows: Deterministic Automation](04-agent-flows/demo-build-an-agent-flow.md) | The ticket-logging sequence built once as an agent flow and called by the help desk agent as a tool |
| [Dataverse: Knowledge & Business Records](02-dataverse/demo-dataverse-knowledge-and-records.md) | The help desk agent answers supplier offer comparisons from two Dataverse tables and records a new offer after confirmation |
| [Custom Connectors & REST APIs](05-rest-api/demo-rest-api-tool.md) | A public holiday API called from a topic with an HTTP request node, then as a REST API tool, with the two paths compared |
| [MCP Servers as Agent Tools](06-mcp/demo-connect-an-mcp-server.md) | The help desk agent connected to the Microsoft Learn MCP Server, with control over which of its tools the agent may call |
| [Computer Use: Apps Without APIs](07-computer-use/demo-computer-use.md) | The help desk agent reads values from one web app and types records into another inside the boundaries you set |

## Labs

| Lab | Focus |
|-----|-------|
| [Invoke Prompts from a Copilot Studio Agent](../../labs/04-cs-tools/01-prompts/lab-01-build-a-prompt-tool.md) | A prompt built in prompt builder with typed inputs, called from the agent as a tool |
| [Define Tools with Power Platform Connectors](../../labs/04-cs-tools/03-connectors/lab-01-connector-and-flow-tools.md) | Excel Online connector tools and a Power Automate flow tool for the HR agent |
| [Call a Secured REST API from an Agent](../../labs/04-cs-tools/05-rest-api/lab-01-call-a-secured-rest-api.md) | An HR API behind a custom connector secured with Microsoft Entra ID, called on behalf of the signed-in user |
| [Give an Agent MCP Tools](../../labs/04-cs-tools/06-mcp/lab-01-give-an-agent-mcp-tools.md) | The HR MCP server registered as a tool, with every server tool discovered at runtime |

## Links & Resources

- [Use connectors in Copilot Studio agents](https://learn.microsoft.com/microsoft-copilot-studio/advanced-connectors)
- [Agent flows overview](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview)
- [Extend your agent with Model Context Protocol](https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp)
