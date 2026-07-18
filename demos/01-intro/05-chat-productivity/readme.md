# Copilot Chat & Productivity Agents

Microsoft 365 Copilot Chat is the always-on AI you talk to in plain language to draft, summarize, and answer questions. Around it sits a set of ready-to-use productivity capabilities: no-code app building, prebuilt agents, and site-grounded assistants. This topic gives you the chat experience, the Frontier early-access program that unlocks Cowork, and the productivity agents you can put to work without building anything.

---

## Copilot Chat vs. Microsoft 365 Copilot

Everyone in a commercial tenant gets Copilot Chat for free, grounded in the web. Adding a Microsoft 365 Copilot license grounds the same chat in your organization's data and unlocks the deeper features.

| | Copilot Chat (free) | Microsoft 365 Copilot (licensed) |
|---|---|---|
| Grounding | Public web content | Your emails, chats, files, and meetings via Microsoft Graph |
| In-app help | Standalone chat | Embedded in Word, Excel, PowerPoint, Outlook, and Teams |
| Prebuilt agents | Limited | Researcher, Analyst, and the coach agents |
| Controls | Basic | Copilot Control System and Copilot Analytics |

Start with Copilot Chat for quick drafts and answers. Add the license when you need Copilot to reason over your own work content and act inside the apps you already use. You reach it in the browser at [m365.cloud.microsoft](https://m365.cloud.microsoft), in the Microsoft 365 Copilot desktop and mobile apps, and inside Teams, Outlook, and the Office apps.

---

## Copilot Tasks & the Frontier Program

Copilot helps you capture and track work, not just answer questions. Ask it to pull the to-dos and owners out of a meeting recap or a long thread, or set a prompt to run on a recurring schedule so a Monday status summary arrives without you asking. Recurring automation across your apps is covered in depth in [Module 2: Automation & Plugins](../../02-cowork/03-automation/readme.md).

Frontier is Microsoft's early-access program for the newest Copilot innovations. Enrolling opts your tenant into preview features before general availability, and it is where capabilities like Copilot Cowork first appear. Treat preview features as evaluation, not production; enrollment and pay-as-you-go setup are covered in [Licensing & Environment Setup](../04-licensing-setup/readme.md#pay-as-you-go-licensing).

---

## Build No-Code Apps with App Builder

App Builder is an agent inside Microsoft 365 Copilot that turns a plain-language description into a working app. You describe the app you want, App Builder generates the pages in a conversational preview, and you refine it by talking to it. Each app stores its data in a Microsoft List in an associated SharePoint site and can create, read, update, and delete that data.

App Builder is easy to confuse with Agent Builder, but they produce different things.

| | App Builder | Agent Builder |
|---|---|---|
| What you get | An app: pages, forms, and data views | An agent: a scoped chatbot with instructions and knowledge |
| You describe | "Build an app that tracks and visualizes X" | "Build an assistant that answers questions about X" |
| Where data lives | Microsoft Lists in a SharePoint site | Grounded on SharePoint, connectors, and the web |

Use App Builder for interactive prototypes, dashboards over a List, and lightweight team tools. You cannot edit the generated code, complex designs can be hard for the agent, and it is English only today. Building full agents is covered later in [Module 3: Copilot Studio](../../03-copilot-studio/readme.md).

---

## Productivity & SharePoint Agents

A Microsoft 365 Copilot license installs a set of first-party agents for licensed users, so there is nothing to build. You find them in the Agents pane in Copilot Chat, and Researcher and Analyst also appear under Tools.

| Agent | What it does for you |
|---|---|
| Researcher | Runs multi-step research across your work content and the web, then returns a structured, source-cited report |
| Analyst | Reasons over your data to produce analysis, tables, and charts you can act on |
| Visual Creator | Generates images and visuals from a description |
| Prompt / Idea / Writing Coach | Help you write better prompts, develop ideas, and sharpen your writing |

A SharePoint agent is an assistant scoped to the content you choose: a whole site, specific folders, or selected documents. It grounds its answers in that content and only ever surfaces what the person asking already has permission to see. You create one directly from a site or from selected files with no code, then publish it so people can chat with it in SharePoint and in Microsoft 365 Copilot.

---

## Practical Scenarios

| Scenario | Reach for |
|---|---|
| Catch up on a 40-message thread before a meeting | Copilot Chat summary |
| Extract action items and owners from a recap | Copilot Tasks |
| Track team requests with a form and status board | App Builder |
| Cited market scan combining your files and the web | Researcher |
| Answer policy questions from a document library | SharePoint agent |

---

## Where to Go Next

1. [Module 2: Cowork](../../02-cowork/readme.md): agentic AI that completes multi-step work on your behalf
2. [Module 3: Copilot Studio](../../03-copilot-studio/readme.md): build and ground custom agents with actions

---

## Links & Resources

- [Microsoft 365 Copilot overview](https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-overview)
- [Decide which Copilot is right for you](https://learn.microsoft.com/microsoft-365/copilot/which-copilot-for-your-organization)
- [Microsoft Frontier Program](https://adoption.microsoft.com/en-us/copilot/frontier-program/)
- [FAQs for App Builder](https://learn.microsoft.com/microsoft-365/copilot/responsible-ai/faq-app-builder)
- [Get started with Researcher agent](https://learn.microsoft.com/microsoft-365/copilot/researcher-agent)
- [Insights report on agents in SharePoint](https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents)
