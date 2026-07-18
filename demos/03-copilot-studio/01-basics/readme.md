# Copilot Studio Basics

Copilot Studio is Microsoft's low-code platform for building agents, and this topic is where makers get their footing. You start in the Power Platform admin center to understand environments and where an agent actually lives, then build and configure your first agent, ground it with knowledge, shape its conversations with topics, and publish it to a channel your colleagues already use. The goal is a working, grounded agent in Teams by the end, built without writing code.

The through-line is the classic authoring surface (Topics, Knowledge, Actions, Settings) that most tenants still open by default and that all production agents and ALM pipelines live in today. Everything here transfers: the new experience in [04-ui-update](../04-ui-update/readme.md) reuses these same concepts under a consolidated Build surface. Learn the classic model first and the new one reads as a rearrangement, not a reset.

## What to teach

- Environments and architecture: what a Power Platform environment is, why an agent belongs to one, and how the admin center is where you manage environments, security, and Dataverse before you build anything.
- Create and configure an agent: name, description, instructions, and the general settings that set an agent's identity and tone.
- Knowledge and starter prompts: add knowledge sources (public websites, SharePoint, files, Dataverse) so the agent answers from real content, and configure conversation starters that appear on the welcome screen.
- Topics: the classic unit of deterministic conversation, built on the authoring canvas from trigger phrases and nodes, for flows you want to control precisely rather than leave to generative answers.
- Entities and variables: capture and reuse what a user says, with prebuilt or custom entities and slot filling to gather the values a topic needs.
- Power Fx: Excel-like formulas that set variables, parse strings, and evaluate conditions, the low-code logic layer inside topics.
- Conversation design: fallback topics, prompt phrasing, and escalation so the agent stays helpful when a request falls outside what it knows.
- Publish to channels: push the agent to Microsoft Teams, Microsoft 365 Copilot, or a custom website, and understand that publish is what makes edits go live.

## Topics versus generative answers

| Situation | Reach for |
|-----------|-----------|
| A precise, repeatable flow (open a ticket, book a room) | A topic with trigger phrases and nodes |
| Open-ended questions over your content | Knowledge sources and generative answers |
| Capture a specific value from the user (a date, an ID) | An entity plus slot filling in a topic |
| Branching or calculation inside a flow | Power Fx in a topic node |

## Key Topics covered in this module

[Create and edit topics](https://learn.microsoft.com/microsoft-copilot-studio/authoring-create-edit-topics)

[Work with variables](https://learn.microsoft.com/microsoft-copilot-studio/authoring-variables)

[Use entities and slot filling in agents](https://learn.microsoft.com/microsoft-copilot-studio/advanced-entities-slot-filling)

[Create expressions using Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx)

[Add knowledge to an agent](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-existing-copilot)

[Configure suggested prompts for Teams and Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/configure-starter-prompts)

[Publish and deploy your agent to channels](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)

[Power Platform environments overview](https://learn.microsoft.com/power-platform/admin/environments-overview)

[Recommendations for designing conversational experiences](https://learn.microsoft.com/power-platform/well-architected/experience-optimization/conversation-design)
