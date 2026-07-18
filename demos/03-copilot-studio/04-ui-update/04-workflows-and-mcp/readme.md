# Tools, MCP, and the New Workflows Designer

The new experience gives an agent several tool types from one Tools surface: Power Platform connectors, Model Context Protocol (MCP) servers, and workflows. This topic teaches makers how the agent reaches beyond its own instructions to act on real systems, and how the new workflows designer automates multi-step processes. It also connects MCP, already taught in [02-tools](../../02-tools/readme.md), to the new orchestration model.

The maker takeaway is fit for purpose. Use a connector for a single service action, an MCP server for a standardized set of tools that many agents can share, and a workflow for a repeated deterministic process the agent runs on demand.

## One Tools surface, three kinds of reach

Everything an agent can do beyond talking lives on one Tools surface, and it comes in three shapes. Connectors give the agent a single action against a single service, drawn from the hundreds Power Platform already ships (SharePoint, Outlook, Salesforce, and more). MCP servers hand the agent a standardized set of tools and resources that many agents can share at once, and workflows package a repeated multi-step process the agent runs on demand.

The reason to keep the three straight is that they solve different problems. A connector is the right size for "send one email" or "create one record", an MCP server is the right size for "give every agent the same shared toolbox", and a workflow is the right size for "do these five steps the same way every time". You add all three from the same place, so the choice is about fit, not about where the button lives.

## Connecting an MCP server

Model Context Protocol (MCP) is an open standard that lets an agent reach a whole set of tools through one connection instead of wiring up each action by hand. You add one from the Tools page: choose Add a tool, then Model Context Protocol, then walk the onboarding wizard where you enter the server name, description, and URL, and pick an authentication method (None, API key, or OAuth 2.0). Copilot Studio ships prebuilt Microsoft servers such as Dataverse, GitHub, and Outlook, and you can point at third-party servers like Salesforce or JIRA or a custom server of your own.

The server description is not documentation; it is instruction. The orchestrator reads that description at runtime to decide whether this server is worth calling for the request in front of it, exactly the way it reads a skill description. A vague description is the most common reason a perfectly good server never gets used, so write it as a plain "call this when" sentence.

Two currency details matter for makers. Copilot Studio supports the Streamable transport, which means a change on the server side (a new tool, an updated one) reaches your agent automatically without republishing every agent that uses it. This is the payoff of the shared-toolbox model: you maintain the server once, and every agent connected to it stays current.

## The new workflows designer

A workflow is for the deterministic work you want done the same way every time: take an input, run a fixed sequence of steps, produce an output. The new workflows designer builds this node by node, and it adds two things makers have wanted for a long time. You can test each node on its own before running the whole flow, and you can version the workflow so a change is deliberate rather than a surprise. The designer is currently in public preview.

The standout new node type is the agent node, which calls an agent from inside a workflow as a single step. That closes the loop between the two worlds: a workflow can hand a task to your agent's reasoning, take the result, and pass it to the next deterministic step (for example, drafting a recap with the agent, then sending it through an Outlook action). It is worth naming the classic contrast so makers coming from the old experience notice the shift: in classic, MCP required generative orchestration to be turned on and topics could not call an MCP server directly, whereas the new experience treats all three tool types as first-class from one surface.

## When to use which tool

| Need | Best tool |
|------|-----------|
| One action in a single service | Connector |
| A shared, versioned set of tools for many agents | MCP server |
| A repeated deterministic multi-step process | Workflow |
| Call another agent as a step | Agent node in a workflow |

## Hands-On Demo

- [Connect an MCP Server and Automate with a Workflow](./demo-04-connect-mcp-and-workflow.md): add a prebuilt MCP server to an agent, then wire a node-by-node workflow with an agent node that automates a multi-step follow-up.

## Hands-On Lab

- [Build a Sales Account Assistant in the New Experience](../../../../labs/03-copilot-studio/04-ui-update/04-workflows-and-mcp/lab-01-sales-account-assistant.md): a capstone that grounds an agent on knowledge, connects an Outlook action and a Dataverse MCP server, and automates the follow-up with a workflow agent node.

## Key Topics covered in this module

[Available tools for agents](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-available)

[Model Context Protocol (MCP) in Copilot Studio overview](https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp)

[Connect your agent to an existing MCP server](https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-existing-server-to-agent)

[Agent flows and workflows overview](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview)
