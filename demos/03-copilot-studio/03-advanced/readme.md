# Advanced Copilot Studio Agents

Basics build an agent that answers, and tools let it act; this topic makes it run on its own. You move from an agent a person chats with to one that wakes on an event, plans across several steps, reasons through a hard problem, calls other agents, automates a deterministic process, and even talks. This is where a Copilot Studio agent stops being a smarter FAQ and starts being a coworker that handles a workflow end to end.

The shift underneath all of this is generative orchestration: the LLM-driven planning layer that reads a request, picks the right tools, knowledge, and agents, and executes a multi-step plan. Autonomous behavior, multi-agent handoffs, and deep reasoning all depend on it being turned on. This is the same runtime the new experience makes always-on, so understanding it in classic is what makes the new orchestrator ([02-unified-build-and-orchestrator](../04-ui-update/02-unified-build-and-orchestrator/readme.md)) feel familiar.

## What to teach

- Generative orchestration: how the planner interprets intent and chooses tools, knowledge, and agents at runtime, and why advanced features require it rather than classic orchestration.
- Autonomous agents and triggers: agents that act proactively on an event (a new record, an incoming email, a scheduled time) instead of waiting for a chat, with decision boundaries and guardrails.
- Multi-agent orchestration: connect an agent to child, connected, Microsoft Foundry, or A2A agents so a lead agent delegates specialized work to others.
- Deep reasoning models: switch on a reasoning model and use the reason keyword so the agent works through complex, multi-step problems step by step.
- Agent flows: deterministic, trigger-and-action automation built natively in Copilot Studio, for the repeatable process steps you do not want an LLM to improvise.
- Voice support: enable speech and IVR so the agent handles phone-style interactions, from basic voice to real-time conversation.

## Reasoning versus deterministic work

| The task is | Use |
|-------------|-----|
| Interpret intent and choose tools at runtime | Generative orchestration |
| React to an event with no human in the loop | An autonomous agent with a trigger |
| A hard, multi-step problem needing planning | A deep reasoning model plus the reason keyword |
| A fixed sequence of steps every time | An agent flow |
| Delegate specialized work | A connected or child agent |
| Handle a phone or spoken interaction | Voice support |

## Key Topics covered in this module

[Apply generative orchestration capabilities](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-orchestration)

[Design autonomous agent capabilities](https://learn.microsoft.com/microsoft-copilot-studio/guidance/autonomous-agents)

[Add other agents for multi-agent orchestration](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents)

[Use deep reasoning models for complex tasks](https://learn.microsoft.com/microsoft-copilot-studio/authoring-reasoning-models)

[Agent flows overview](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview)

[Voice overview](https://learn.microsoft.com/microsoft-copilot-studio/voice-overview)
