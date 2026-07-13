# Publishing, Maintaining & Governing Copilot Studio Agents

Building an agent is only half the job; this module covers everything that happens after it works on your screen. You take an agent from a personal sandbox to a governed production environment, publish it to the channels where people already work, move it safely between dev, test, and production, and keep the whole estate secure and countable. It is split into four focused topics that follow the real lifecycle of a Copilot Studio agent.

## Topics

| # | Topic | What you learn |
|---|-------|----------------|
| 1 | [Environments, Solutions & the Admin Center](./01-environments-solutions/readme.md) | How Power Platform environments and solutions work, the environment types, and where the Power Platform Admin Center fits |
| 2 | [Publishing Agents & Advanced Channels](./02-publishing-channels/readme.md) | Publishing an agent, choosing an authentication model, and connecting it to Teams, WhatsApp, websites, and custom apps |
| 3 | [Application Lifecycle Management & Source Control](./03-alm-source-control/readme.md) | Moving agents across environments with solutions, deployment pipelines, and Git-based source control |
| 4 | [Governance, Compliance & Preventing Agent Sprawl](./04-governance-compliance/readme.md) | Security and DLP controls, Microsoft Purview compliance, the agent registry, and keeping a growing fleet under control |

## The Lifecycle at a Glance

A healthy setup uses at least three environments: development where makers build, test where changes are validated, and production where agents reach real users. Solutions are the containers that carry an agent and its components between those environments, and Dataverse stores both the solutions and the deployment pipelines. Governance runs across all of it: environment-level data loss prevention, Microsoft Purview compliance, and admin controls that stop agents from multiplying unchecked.

## Links & Resources

- [Application lifecycle management with Power Platform](https://learn.microsoft.com/power-platform/alm/overview-alm)
- [Establish an ALM strategy for Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/alm)
- [Copilot Studio security and governance](https://learn.microsoft.com/microsoft-copilot-studio/security-and-governance)
- [Power Platform admin documentation](https://learn.microsoft.com/power-platform/admin/admin-documentation)
