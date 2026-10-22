# Using Advanced Channels: WhatsApp, Web & Direct Line

This topic is optional: take it when an agent has to reach people outside Microsoft 365, on a public website, inside your own app, or on a phone messenger. Publishing to Teams and Microsoft 365 Copilot covers most internal agents, and [Publishing Agents & Microsoft Channels](../02-publishing-channels/readme.md) teaches that path. Advanced channels trade the comfort of Microsoft sign-in for reach, so each one comes with its own authentication limits and security settings.

Everything here applies to Standard agents (Learn: standard harness). GitHub Copilot agents publish to Microsoft 365, Teams and a website today; WhatsApp, SharePoint and Dynamics 365 Contact Center are Standard-only channels.

![One publish turns the agent into a live version that reaches every connected channel at once: Teams and Microsoft 365 Copilot, SharePoint, WhatsApp, a custom website, the demo website and the Direct Line API. The authentication model chosen at publish time is Entra ID by default, manual, or none.](../pptx/images/02-01-publish-channels.svg)

## The demo website and a live website

Every published agent gets a prebuilt demo website. It exists for testing: you set a welcome message and a few conversation starters on the **Demo website** panel under **Channels**, share the URL with teammates, and change the message whenever you want them to test something new. Learn is explicit that the demo site is not for production and that its URL never goes to customers.

A live website embeds the agent itself. The embed code on the **Web** channel only appears when the agent uses **No authentication**, because an anonymous visitor cannot sign in. For a branded chat window, Learn ships a Bot Framework Web Chat sample page that fetches a conversation token from your agent's token endpoint and renders the chat with your own colours, avatar and size; a web developer drops that page into the site.

## Web channel security

Without further settings, anyone who knows an agent's ID can reach it through the demo and custom website channels. **Require secured access** under **Settings** > **Security** > **Web channel security** closes that door: every client must then present a Direct Line secret or a token generated from it. Turning the setting on or off takes up to two hours to propagate, so plan the switch before a launch.

Copilot Studio gives you two secrets that work at the same time, so you can move clients to the second secret, then regenerate the first without downtime. A secret belongs only in server code. A browser or mobile app gets a token instead: your service exchanges the secret for a token that is valid for one conversation and expires unless it is refreshed.

## Direct Line for mobile and custom apps

When the agent lives inside your own mobile, desktop or IoT app, the app talks to it over the Bot Framework Direct Line API. The **Mobile app** channel shows the agent's token endpoint; the app requests a Direct Line token from it, starts a conversation, posts the user's messages and reads the agent's replies. This is developer work, and Learn says so: the steps assume someone comfortable with REST calls and an IDE.

For new apps, Learn also points to the Microsoft 365 Agents SDK client, which connects with the user's own sign-in. Direct Line remains the route when the SDK does not cover your scenario.

## WhatsApp

WhatsApp puts the agent where many customers already chat. The connection runs through an Azure Communication Services resource with a WhatsApp business phone number: you publish, select **WhatsApp** on the **Channels** page, pick the subscription, resource and phone number, and select **Deploy** to get a QR code that opens the chat.

The channel has firm limits. Authentication must be **No authentication** or **Authenticate manually**, because WhatsApp does not support sign-in with Microsoft; a common pattern checks the caller's phone number against your own list with an HTTP request in a topic. Only three Adaptive Card shapes render (buttons with up to three actions, a choice list of up to ten options, and an open-URL card), files cannot be uploaded or downloaded, and conversation data leaves your organization's compliance and regional boundaries.

The channel is also closing for new connections. Because Azure Communication Services retires its WhatsApp advanced messaging, agents connected before October 23, 2026 keep working, while no new WhatsApp connection can be set up through this experience after that date. Teach WhatsApp as a channel you maintain for existing connections.

## Choosing an advanced channel

| Channel | Use it for | Authentication | Watch out for |
|---------|-----------|----------------|---------------|
| Demo website | Testing with teammates and stakeholders | No authentication | Never share the URL with customers |
| Live website (embed or Web Chat sample) | A public help agent on your site | No authentication for the embed code | Turn on secured access and use tokens |
| Mobile or custom app (Direct Line) | An agent inside your own app | Secret on the server, token in the client | Needs developer work; refresh tokens |
| WhatsApp | Existing connections to customers on WhatsApp | No authentication or manual | No new connections after October 23, 2026; card and file limits |

## Key Topics covered in this module

[Publish an agent to a live or demo website](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels)

[Configure web and Direct Line channel security](https://learn.microsoft.com/microsoft-copilot-studio/configure-web-security)

[Publish an agent to mobile or custom apps](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-custom-application)

[Integrate with web or native apps by using Microsoft 365 Agents SDK](https://learn.microsoft.com/microsoft-copilot-studio/publication-integrate-web-or-native-app-m365-agents-sdk)

[Publish an agent to WhatsApp](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-whatsapp)

[Channels guidance: Direct Line and live handoff](https://learn.microsoft.com/microsoft-copilot-studio/guidance/channels)
