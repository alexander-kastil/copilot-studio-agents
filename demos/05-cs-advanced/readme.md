# Advanced Copilot Studio Agents

Basics build a Standard agent that answers, and tools let it act; this module makes it run on its own and work with other agents. You move from an agent a person chats with to one that wakes on an event, routes work to other agents, reasons through a hard problem, and hands specialized work to a Microsoft Foundry agent built by developers. Voice closes the module as an optional topic.

The shift underneath all of this is generative orchestration: the planning layer that reads a request, picks the right tools, knowledge and agents, and executes a multi-step plan. Autonomous behavior, multi-agent handoffs and deep reasoning all depend on it, and GitHub Copilot agents run the same idea always on ([The Unified Build Surface and the New Orchestrator](../06-cs-gh-copilot/02-unified-build-and-orchestrator/readme.md)).

![Chat, an event trigger and voice hand a request to generative orchestration, which reads it, picks tools, knowledge and agents, and executes a multi-step plan using tools, knowledge, other agents, a deep reasoning model and agent flows.](pptx/images/00-01-generative-orchestration.svg)

## Topics

| Topic | What it teaches |
|-------|-----------------|
| [Autonomous Agents & Event Triggers](01-autonomous-agents/readme.md) | Event triggers and their payload, instructions for unattended runs, guardrails and human review, testing triggers and billing per payload |
| [Generative Orchestration & Multi-Agent Routing](03-multi-agent/readme.md) | How the planner reads names and descriptions, classic versus generative orchestration, routing patterns, and child versus connected agents |
| [Deep Reasoning Models](02-deep-reasoning/readme.md) | The deep reasoning setting, the `reason` keyword, the models Learn lists, regions, cost and latency, and when not to use it |
| [Microsoft Foundry Agents: Core Concepts](04-foundry-agents/readme.md) | What a Microsoft Foundry agent is, prompt and hosted agents, model, instructions and tools, and how it differs from a Copilot Studio agent |
| [Foundry Agents in Copilot Studio](05-connect-foundry-agents/readme.md) | Connecting a Foundry agent to a Standard agent, what the connection needs, how orchestration routes to it, authentication and preview limits |
| [Voice Agents: IVR & Post-Call](06-voice/readme.md) (optional) | Interactive voice response, basic versus real-time voice agents, speech settings and post-call actions |

## Hands-On Demos

| Topic | Description |
|-------|-------------|
| [Autonomous Agents & Event Triggers](01-autonomous-agents/demo-trigger-an-autonomous-agent.md) | The help desk agent triages each new request in a SharePoint list, sets its priority and writes a triage note back, with nobody in the chat |
| [Generative Orchestration & Multi-Agent Routing](03-multi-agent/demo-route-to-child-and-connected-agents.md) | The help desk hands account problems to a child agent and licensing questions to a connected agent |
| [Deep Reasoning Models](02-deep-reasoning/demo-deep-reasoning.md) | Order a ticket backlog twice, once on the default model and once with deep reasoning, and compare the result |
| [Microsoft Foundry Agents: Core Concepts](04-foundry-agents/demo-create-a-foundry-agent.md) | Build a device specialist as a prompt agent in Microsoft Foundry and test it |
| [Foundry Agents in Copilot Studio](05-connect-foundry-agents/demo-connect-a-foundry-agent.md) | Connect the device specialist to the help desk, route device questions to it, and watch a rule change in Foundry reach the help desk |
| [Voice Agents: IVR & Post-Call](06-voice/demo-voice-agent.md) (optional) | Turn a Standard agent into a basic voice agent with a spoken and keypad menu, test it without a phone, and add a post-call action |

## Labs

| Lab | Focus |
|-----|-------|
| [Create an Autonomous Agent](../../labs/05-cs-advanced/01-autonomous-agents/lab-01-create-an-autonomous-agent.md) | An agent triggered by SharePoint uploads that writes candidate records through the HR MCP server |
| [Route Work from a Parent Agent to a Child Agent](../../labs/05-cs-advanced/03-multi-agent/lab-01-parent-and-child-agents.md) | A parent agent that routes HR policy questions to a child agent |
| [Recommend a Supplier with a Deep Reasoning Agent](../../labs/05-cs-advanced/02-deep-reasoning/lab-01-supplier-recommendation.md) | Ten suppliers screened against a sourcing policy with deep reasoning, traced in the activity map |

## Links & Resources

- [Apply generative orchestration capabilities](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-orchestration)
- [Add other agents overview](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents)
- [Microsoft Foundry documentation](https://learn.microsoft.com/azure/foundry/)
