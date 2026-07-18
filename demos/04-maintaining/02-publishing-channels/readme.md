# Publishing Agents & Advanced Channels

Publishing creates the live version of your agent; channels put that live version where your users already work. Publishing applies to every connected channel at once, so a single publish updates the agent everywhere. This topic covers the publish action, the authentication choices that come with it, and the range of channels from Teams to WhatsApp to your own website.

## What this topic covers

- Publishing and Deploying Copilot Studio Agents: the publish action, why you must publish before anyone can use the agent, and how updated content only reaches users after a new session starts
- Authentication models at publish time: Authenticate with Microsoft (Entra ID) by default, manual authentication, and the No authentication option with its caution for open access
- Microsoft channels: Microsoft Teams and Microsoft 365 Copilot, and SharePoint
- Using Advanced Channels: WhatsApp, a custom website or embedded web app (iframe), the prebuilt demo website for testing, and the Direct Line API for custom and mobile apps

## Why it matters

Each channel has its own connection steps and its own availability, and some channels differ between the classic and new agent experiences. The authentication choice is not cosmetic: selecting No authentication lets anyone with the link chat with the agent and blocks tools that rely on user credentials. Choosing the right channel and auth model is what turns a working agent into a safely shared one.

## Links & Resources

- [Key concepts: publish and deploy your agent](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)
- [Publish an agent to Microsoft Teams](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams)
- [Publish an agent to WhatsApp](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-whatsapp)
- [Publish an agent to a live or demo website](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels)
- [Channels guidance: Direct Line and live handoff](https://learn.microsoft.com/microsoft-copilot-studio/guidance/channels)
