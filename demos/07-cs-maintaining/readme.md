# Publishing & Maintaining Copilot Studio Agents

Building an agent is only half the job; this module covers everything that happens after it works on your screen. You take an agent from a personal sandbox to a production environment, publish it to the channels where people already work, and move it safely between dev, test, and production. It is split into three focused topics that follow the real lifecycle of a Copilot Studio agent, plus an optional topic on advanced channels.

## Topics

| # | Topic | What you learn |
|---|-------|----------------|
| 1 | [Environments, Solutions & the Admin Center](./01-environments-solutions/readme.md) | How Power Platform environments and solutions work, the environment types, and where the Power Platform Admin Center fits |
| 2 | [Publishing Agents & Microsoft Channels](./02-publishing-channels/readme.md) | Publishing an agent, choosing an authentication model, and connecting it to Teams, Microsoft 365 Copilot and SharePoint |
| 3 | [Application Lifecycle Management & Source Control](./03-alm-source-control/readme.md) | Moving agents across environments with solutions, deployment pipelines, and Git-based source control |
| 4 | [Using Advanced Channels: WhatsApp, Web & Direct Line](./04-advanced-channels/readme.md) (optional) | The demo and live website, web channel security, Direct Line for custom apps, and WhatsApp with its limits |

## The Lifecycle at a Glance

A healthy setup uses at least three environments: development where makers build, test where changes are validated, and production where agents reach real users. Solutions are the containers that carry an agent and its components between those environments, and Dataverse stores both the solutions and the deployment pipelines.

![Development, test and production environments, each with Dataverse holding a solution that carries the agent and its components, linked by deployment pipelines and published to channels such as Teams, SharePoint and WhatsApp. Numbered pills map the parts to the module topics.](./pptx/images/00-02-module-lifecycle.svg)

## Links & Resources

- [Application lifecycle management with Power Platform](https://learn.microsoft.com/power-platform/alm/overview-alm)
- [Establish an ALM strategy for Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/alm)
- [Power Platform admin documentation](https://learn.microsoft.com/power-platform/admin/admin-documentation)
