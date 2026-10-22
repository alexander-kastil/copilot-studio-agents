# Publishing Agents & Microsoft Channels

Publishing creates the live version of your agent; channels put that live version where your users already work. Publishing applies to every connected channel at once, so a single publish updates the agent everywhere. This topic covers the publish action, the authentication choices that come with it, and the Microsoft channels most internal agents use.

## What this topic covers

- Publishing and Deploying Copilot Studio Agents: the publish action, why you must publish before anyone can use the agent, and how updated content only reaches users after a new session starts
- Authentication models at publish time: Authenticate with Microsoft (Entra ID) by default, manual authentication, and the No authentication option with its caution for open access
- Microsoft channels: Microsoft Teams and Microsoft 365 Copilot, and SharePoint

WhatsApp, websites, the demo website and the Direct Line API for custom apps are taught in the optional topic [Using Advanced Channels: WhatsApp, Web & Direct Line](../04-advanced-channels/readme.md).

![One publish turns the agent into a live version that reaches every connected channel at once: Teams and Microsoft 365 Copilot, SharePoint, WhatsApp, a custom website, the demo website and the Direct Line API. The authentication model chosen at publish time is Entra ID by default, manual, or none.](../pptx/images/02-01-publish-channels.svg)

## Why it matters

Each channel has its own connection steps and its own availability, and some channels differ between Standard agents and GitHub Copilot agents. The authentication choice decides who can reach the agent: selecting No authentication lets anyone with the link chat with the agent and blocks tools that rely on user credentials. Choosing the right channel and auth model is what turns a working agent into a safely shared one.

## Links & Resources

- [Key concepts: publish and deploy your agent](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)
- [Publish an agent to Microsoft Teams](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams)
- [Configure user authentication](https://learn.microsoft.com/microsoft-copilot-studio/configuration-end-user-authentication)
