# Copilot Chat & Productivity Agents

Copilot ships agents you use with nothing to build (Researcher, Analyst, and agents scoped to a SharePoint site), and Agent Builder lets you build your own inside Microsoft 365 Copilot without code. This topic starts at those agents, so you know what Copilot already does before you build anything in Copilot Studio. The Copilot Chat basics are pre-class homework.

> **Pre-class homework:** complete [Manage email efficiently with Microsoft Outlook and Copilot Chat](https://aiskillsnavigator.microsoft.com/explore/search/module-b9259bdd701906b1bc10fd3eddc8505e6302469b923b591afaf7a03432c6fe97) on AI Skills Navigator (16 minutes) before day one. It shows how Outlook and Copilot Chat save time on everyday communication, so class time goes to agents.

---

## Productivity & SharePoint Agents

Copilot Chat is free in every commercial tenant and grounded in the web. A Microsoft 365 Copilot license grounds the same chat in your work data and gives licensed users first-party agents with nothing to build. Researcher runs multi-step research across your work content and the web and returns a structured, source-cited report. Analyst reasons over your data to produce analysis, tables, and charts you can act on.

A SharePoint agent is an assistant scoped to the content you choose: a whole site, specific folders, or selected documents. It grounds its answers in that content and only surfaces what the person asking already has permission to see. You create one from a site or from selected files with no code, then publish it so people can chat with it in SharePoint and in Microsoft 365 Copilot.

![A SharePoint agent answers only from the overlap of two sets: the content you choose (a whole site, specific folders, or selected documents) and what the person asking already has permission to see.](../pptx/images/04-01-productivity-agents.svg)

Copilot also works where the files live. Copilot in OneDrive and SharePoint became generally available in October 2026: select several spreadsheets and ask for trends and charts across them, point Copilot at a crowded folder to sort it into a structure, or turn existing files into an interactive HTML report that you refine with follow-up prompts. OneDrive opens that HTML, and any Markdown output, for editing, anchored comments, and live coauthoring, so the result becomes a file your team works on together.

---

## Agent Builder

Agent Builder builds your own declarative agent inside Microsoft 365 Copilot, with no code. Select **New agent**, describe the job in plain language on the **Describe** tab, and Agent Builder fills in the name, description, instructions, knowledge sources, and suggested prompts. **Skip to configure** opens the same fields on the **Configure** tab for manual editing, and templates give you a preconfigured start. You test the result on the **Try it** tab before anyone else sees it.

Knowledge is what makes the agent specific to your team. An agent grounds on up to four public URLs, up to 100 SharePoint files, folders, or sites plus one SharePoint list, OneDrive files, Teams chats and meetings, your Outlook email, uploaded files, and the Copilot connectors your admin enabled. Which sources a builder can add depends on their license.

You share the agent with specific people, or with the whole organization when your admin allows org-wide sharing. To make it discoverable, submit it to the org catalog: an admin reviews it in the Microsoft 365 admin center and can approve it into **Built by your org** in the Agent Store. SharePoint agents are moving into Agent Builder from mid-November 2026, as [Copilot Studio security and governance](https://learn.microsoft.com/microsoft-copilot-studio/security-and-governance) explains.

Agent Builder stops where integration starts: it can't author actions that call external services. When the agent needs a connector, a workflow, or a custom tool, copy it to Copilot Studio and continue there. [Module 3: Copilot Studio](../../03-cs-basics/readme.md) picks up from that point, and building apps from a description is covered with [Apps in Copilot Studio](../../06-cs-gh-copilot/06-apps/readme.md).

| Scenario | Reach for |
|---|---|
| Cited market scan combining your files and the web | Researcher |
| Spot trends across a folder of monthly spreadsheets | Copilot in OneDrive |
| Answer policy questions from a document library | SharePoint agent |
| Onboard new team members from your team site and files | Agent Builder |
| The same onboarding agent, plus a connector or an approval workflow | Copy it to Copilot Studio |

---

## Links & Resources

- [Agent Builder overview](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder)
- [Build agents in Agent Builder](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-build-agents)
- [Copy an agent to Copilot Studio](https://learn.microsoft.com/microsoft-365/copilot/extensibility/copy-agent-to-copilot-studio)
- [Build agents with Agent Builder](https://aiskillsnavigator.microsoft.com/explore/search/skillingsession-4b6fee963ec3e8e81a5f6340a7c8bfa00794e0c728a807c748baf465e41c1e59): a 13-minute AI Skills Navigator session with a Skilling Coach agent
- [Microsoft 365 Copilot overview](https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-overview)
- [How Copilot Chat works with and without a Microsoft 365 Copilot license](https://support.microsoft.com/en-us/microsoft-365-copilot/how-copilot-chat-works-with-and-without-a-microsoft-365-copilot-license)
- [Get started with Researcher agent](https://learn.microsoft.com/microsoft-365/copilot/researcher-agent)
- [Insights report on agents in SharePoint](https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents)
- [OneDrive: New Copilot capabilities, simpler sharing, and smarter photos](https://techcommunity.microsoft.com/blog/onedriveblog/onedrive-just-got-a-major-upgrade-new-copilot-capabilities-simpler-sharing-and-s/4565995)
