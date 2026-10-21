# Copilot Studio Basics

Copilot Studio is Microsoft's low-code platform for building agents, and this module is where makers get their footing with Standard agents (Learn: standard harness). You create and configure an agent, ground it with knowledge, shape its conversations with topics, entities, variables, Adaptive Cards and Power Fx, and publish it to the channels your colleagues already use. The goal is a working, grounded agent in Teams by the end, built without writing code.

![The HR Agent built in the labs: instructions, knowledge, topics and orchestration settings in a Power Platform environment, grounded in the Microsoft Careers site and SharePoint HR Documents, and published to Microsoft Teams.](pptx/images/01-01-agent-parts.svg)

Standard agents are the ones many clients run in production today: you pick **Agent** with the **Standard** badge under **Other ways to build** in the **New agent** menu. Everything here transfers to [GitHub Copilot Agents in Copilot Studio](../06-cs-gh-copilot/readme.md), which reuses the same concepts under a consolidated Build surface.

## Topics

| Topic | What it teaches |
|-------|-----------------|
| [Standard Agents: Create & Configure](01-standard-agents/readme.md) | Standard versus GitHub Copilot agents, creating and opening a Standard agent, identity, instructions, model, the orchestration setting and the test panel |
| [Knowledge Sources & Suggested Prompts](02-knowledge/readme.md) | Every knowledge source type, how generative answers use them, Bing Custom Search and web search, and suggested prompts for Teams and Microsoft 365 Copilot |
| [Topics, Entities & Variables](03-topics/readme.md) | System and custom topics, trigger phrases versus generative routing, nodes, prebuilt and custom entities, slot filling, variable scopes and conversation design |
| [Power Fx: Formulas in Topics](04-power-fx/readme.md) | Where formulas run in a topic, the functions makers use most, data types and tables, and real formula syntax |
| [Adaptive Cards: Collect Structured Input](05-adaptive-cards/readme.md) | Asking with an Adaptive Card, card JSON and the designer, schema versions per channel, card outputs as variables and formula cards |
| [Publishing to Teams & Copilot](06-publishing/readme.md) | What publish does, the Teams and Microsoft Copilot channel, the custom website and SharePoint, and who can use the agent |

## Hands-On Demos

| Topic | Description |
|-------|-------------|
| [Standard Agents: Create & Configure](01-standard-agents/demo-create-a-standard-agent.md) | Create a Standard IT Help Desk agent, set its identity, instructions, model and orchestration, and prove the scope in the test panel |
| [Knowledge Sources & Suggested Prompts](02-knowledge/demo-ground-with-knowledge.md) | Ground the help desk agent in public support content and compare answers before and after |
| [Topics, Entities & Variables](03-topics/demo-build-a-slot-filling-topic.md) | Build a device issue topic that fills slots with custom entities |
| [Power Fx: Formulas in Topics](04-power-fx/demo-power-fx-in-a-topic.md) | Calculate a ticket due date from priority and weekday with four Power Fx formulas |
| [Adaptive Cards: Collect Structured Input](05-adaptive-cards/demo-collect-input-with-a-card.md) | Collect a software request with one Adaptive Card that validates its fields |
| [Publishing to Teams & Copilot](06-publishing/demo-publish-to-teams-and-copilot.md) | Publish the help desk agent to Teams and SharePoint and show one republish reaching every channel |

## Labs

| Lab | Focus |
|-----|-------|
| [Create Your First Copilot Studio Agent](../../labs/03-cs-basics/01-standard-agents/lab-01-create-your-first-agent.md) | A Trial Power Platform environment with Copilot Studio activated, and the HR agent created and tested |
| [Ground the HR Agent with SharePoint Knowledge](../../labs/03-cs-basics/02-knowledge/lab-01-ground-with-sharepoint.md) | SharePoint HR documents added as knowledge |
| [Define Topics, Entities, and Variables](../../labs/03-cs-basics/03-topics/lab-01-build-topics.md) | Generative orchestration turned on, then single-turn and multi-turn topics |
| [Collect Input with Adaptive Cards](../../labs/03-cs-basics/05-adaptive-cards/lab-01-collect-input-with-adaptive-cards.md) | A candidate's data collected in an Adaptive Card and confirmed with a formula card |
| [Publish the HR Agent to Teams and Microsoft 365 Copilot](../../labs/03-cs-basics/06-publishing/lab-01-publish-to-teams-and-copilot.md) | The HR agent in Teams, plus a declarative agent with knowledge and a tool in Microsoft 365 Copilot Chat |

Environments, solutions and advanced channels are taught in [Publishing, Maintaining & Governing Copilot Studio Agents](../07-cs-maintaining/readme.md).

## Links & Resources

- [Harnesses in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/harnesses-overview)
- [Microsoft Copilot Studio documentation](https://learn.microsoft.com/microsoft-copilot-studio/)
