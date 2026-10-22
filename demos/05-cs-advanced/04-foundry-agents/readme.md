# Microsoft Foundry Agents: Core Concepts

Sooner or later a maker meets an agent that a developer team built somewhere else. In many organizations that place is Microsoft Foundry, the Azure platform where developers pick models from a catalog, wire tools and data into agents, and run them behind a managed endpoint. Copilot Studio can call those agents, so a maker who understands what a Foundry agent is can reuse a specialist the developer team already runs.

This topic explains the building blocks of Foundry Agent Service: the project and the portal, the three agent types, the model, instructions and tools an agent is made of, how conversations and responses carry a dialog, and how versions, endpoints and identities make an agent callable. It closes with a comparison to a Standard Copilot Studio agent (Learn: standard harness), which sets up the next topic, where you connect a Foundry agent to one.

## Foundry, the project and the portal

Foundry Agent Service is Microsoft's managed platform for building, deploying and scaling agents in Azure. Everything you build lives in a Foundry project, which Learn describes as a folder that groups related resources such as agents, files and tools; the project sits inside a Foundry resource in an Azure subscription. You work in the Foundry portal at `ai.azure.com`, where the current documentation assumes the **New Foundry** toggle is on.

Models come first. On the **Build** page you open **Models**, select **Deploy** > **Deploy a base model** and deploy a model such as gpt-5-mini; agents then use that deployment. The project endpoint, shown on the project's welcome screen in the form `https://<resource>.services.ai.azure.com/api/projects/<project>`, is the address code and other services use to reach the project's agents.

Access is Azure role-based access control. The **Foundry User** role on the project lets a person build and invoke agents, and principals that only call agents get the **Foundry Agent Consumer** role. Learn notes that these roles were renamed recently, so older pages may still show the previous names.

## Three agent types

Foundry offers three agent types, and the choice decides how much you build versus how much Foundry runs for you.

| | Prompt agent | Voice-based prompt agent | Hosted agent |
| --- | --- | --- | --- |
| What you supply | Configuration: model, instructions, tools | Configuration plus audio settings and an optional greeting | Your own code in a container image or a .zip file |
| Where you author it | Portal, SDK or REST API | Portal, SDK or REST API | Agent Framework, LangGraph, OpenAI Agents SDK, Anthropic Agent SDK, GitHub Copilot SDK or custom code |
| Runtime code to maintain | None | None for the voice orchestration | Your agent logic |
| How callers reach it | Managed endpoint | Real-time WebSocket through Voice Live | Managed endpoint, plus custom protocols |
| Best for | A fast start and production agents without custom orchestration | Real-time spoken conversations | Agents that call into custom code or need custom orchestration |

A prompt agent is the one a maker can create and test entirely in the portal, which is why the demo uses it. A hosted agent runs a team's own code in a per-session sandbox with a dedicated Microsoft Entra identity, and Foundry still handles the endpoint, scaling and observability. Teams that already run agent code elsewhere can also call the Responses API directly and keep the agent definition in their own code.

## What a prompt agent is made of

A prompt agent combines three things: a model from the Foundry catalog, instructions that define its behavior, and tools that let it act beyond generating text. In the portal you create one from **Build** with **New agent** > **Build an agent**, give it a name, and land on the **Playground** tab, whose left pane holds sections such as **Model**, **Instructions**, **Tools** and **Knowledge** while the right pane is a chat for testing. The name is permanent: Learn notes that you can't change it after you create the agent.

Tools are where Foundry agents differ most from a plain chat model.

| Tool family | Examples | What it adds |
| --- | --- | --- |
| Built-in tools | Web search, file search, code interpreter, memory | Grounding in the web or uploaded files, computation, and remembered context |
| Custom tools | Functions, OpenAPI specifications, MCP servers | Calls into a team's own APIs and services |
| Toolboxes | A curated set of tools behind one managed MCP endpoint | One place to govern, authenticate and version tools that many agents share |

File search works over a vector store: uploaded files are chunked, embedded and indexed, and an agent can attach at most one vector store. Remote MCP servers connect with key-based access, Microsoft Entra (the agent's or the project's managed identity), OAuth identity passthrough, or no authentication where that fits.

## Conversations and responses

Learn describes the runtime with three components. The agent supplies the reusable model, instructions and tools. A conversation persists the history of a dialog across turns, and a response runs the agent against the input and the conversation and appends output items, including any tool calls.

| Component | Role | Use it when |
| --- | --- | --- |
| Agent | Reusable model, instructions and tools | Many requests need the same behavior |
| Conversation | Server-side history of messages and tool calls | Later turns need earlier context |
| Response | One unit of execution that produces output items | Every interaction, with or without an agent or a conversation |

Older Foundry material, now filed under Foundry (classic), talks about threads and runs. Learn calls that the older thread-based pattern; current agents use conversations and responses, and an application can also carry context forward by referencing a previous response.

## Versions and the stable endpoint

Every change to an agent, even one edited sentence in its instructions, creates a new immutable agent version. The agent itself is the stable, consumer-facing object: its identity and endpoint stay the same while versions change underneath. By default the endpoint serves the latest version (**Always use latest**); for an agent in production you pin it to a specific version from the **Publish** dropdown in the portal.

The endpoint is live from the moment the agent exists, and it can speak several protocols at once.

| Protocol | Used by |
| --- | --- |
| Responses | Applications and the Foundry portal and SDKs |
| Activity Protocol | Microsoft 365 channels such as Teams and Microsoft Copilot, and Copilot Studio when it connects to the agent |
| Invocations | Custom apps and services with their own payloads |
| A2A | Other agents, over the Agent2Agent protocol (v1.0 generally available) |
| MCP (preview) | Clients that call the agent as an MCP server |

Inbound calls are authorized with Microsoft Entra ID, or with Azure Bot Service schemes for Microsoft 365 channels (`BotServiceRbac` for callers with Azure permissions, `BotServiceTenant` for everyone in the tenant). API keys aren't supported on the agent endpoint.

## Foundry agent versus Copilot Studio agent

Both platforms build agents with instructions, a model and tools, and the vocabulary overlaps enough to confuse a mixed team. The difference lies in who builds, where it runs, and how it reaches users.

| Question | Microsoft Foundry agent | Standard Copilot Studio agent |
| --- | --- | --- |
| Typical builder | Developers and AI engineers | Makers and business technologists |
| Where it lives | A Foundry project in an Azure subscription | A Power Platform environment, inside a solution |
| How behavior is defined | Model, instructions and tools; hosted agents add custom code | Instructions, topics, knowledge, tools and agent flows |
| Model choice | Any deployed model from the Foundry catalog | Models offered in Copilot Studio |
| Reaching users | Endpoint protocols, publishing to Teams and Microsoft Copilot, other agents | Channels such as Teams and Microsoft Copilot, websites and telephony |
| Access control | Azure RBAC and Microsoft Entra agent identity | Power Platform security, sharing and data policies |
| Billing | Azure consumption: inference, tool use and, for hosted agents, compute | Copilot Credits |

The two meet when a Copilot Studio agent connects a Foundry agent as a specialist: the maker keeps the conversation, the channels and the routing, and the developer team keeps the specialist's model, tools and versions.

## Hands-On Demo

- [Create a Device Specialist Agent in Microsoft Foundry](./demo-create-a-foundry-agent.md): the presenter creates the Grey Logistics Device Specialist prompt agent in the Foundry portal, tests it in the playground, pins a version, and calls its endpoint from the command line.

## Key Topics covered in this module

[Agents in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/agents/overview)

[Quickstart: Set up Microsoft Foundry resources](https://learn.microsoft.com/azure/foundry/tutorials/quickstart-create-foundry-resources)

[Quickstart: Create a prompt agent](https://learn.microsoft.com/azure/foundry/agents/quickstarts/prompt-agent)

[Build with agents, conversations, and responses](https://learn.microsoft.com/azure/foundry/agents/concepts/runtime-components)

[Agent development lifecycle](https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle)

[What are hosted agents?](https://learn.microsoft.com/azure/foundry/agents/concepts/hosted-agents)

[What is Toolbox in Foundry?](https://learn.microsoft.com/azure/foundry/agents/concepts/toolbox-overview)

[Configure and share your agent](https://learn.microsoft.com/azure/foundry/agents/how-to/configure-agent)
