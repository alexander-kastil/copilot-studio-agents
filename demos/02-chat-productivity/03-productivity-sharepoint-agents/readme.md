# Productivity & SharePoint Agents

Agents extend Copilot with focused skills and grounded knowledge. This topic covers two ready-to-use kinds: the prebuilt productivity agents that ship with a Microsoft 365 Copilot license, and SharePoint agents that you scope to specific sites and documents. Both work inside the tools you already use and respect the permissions you already have.

---

## Prebuilt Productivity Agents

Microsoft installs and pins a set of first-party agents for licensed users, so there is nothing to build. You find them in the Agents pane in Copilot Chat, and Researcher and Analyst also appear under Tools.

| Agent | What it does for you |
|---|---|
| Researcher | Runs multi-step research across your work content and the web, then returns a structured, source-cited report |
| Analyst | Reasons over your data to produce analysis, tables, and charts you can act on |
| Visual Creator | Generates images and visuals from a description |
| Prompt Coach | Helps you write better prompts and get stronger results |
| Idea Coach | Facilitates brainstorming and helps you develop ideas |
| Writing Coach | Improves clarity, tone, and structure of your writing |

Researcher and Analyst take more time on purpose: they retrieve and analyze more deeply to deliver a report you can share. Use standard Copilot chat for a quick summary or reply, and reach for these agents when you need depth, citations, and a clean structure.

---

## Where to Find Them

1. Sign in to the [Microsoft 365 Copilot app](https://m365.cloud.microsoft).
2. Open the Agents pane, or select Tools for Researcher and Analyst.
3. Pick an agent, describe your task, and answer any clarifying questions it asks.

These agents are included with a Microsoft 365 Copilot license and inherit the same security, privacy, and compliance boundaries as the rest of Copilot. Admins can govern them in the Microsoft 365 admin center.

---

## SharePoint Agents

A SharePoint agent is an assistant scoped to the content you choose: a whole site, specific folders, or selected documents. It grounds its answers in that content using the same semantic index and retrieval that powers Copilot, so responses cite the source files. It only ever surfaces content the person asking already has permission to see.

You create a SharePoint agent directly from a site or from selected files, with no code. Once published, people can chat with it in SharePoint and in Microsoft 365 Copilot to find answers buried across documents.

---

## Using a SharePoint Agent

1. Go to a SharePoint site and choose to create an agent, or select files and create an agent scoped to them.
2. Set the scope: the sites, folders, or documents the agent should ground its answers in.
3. Adjust the name and starter prompts so users know what to ask.
4. Publish and share the agent with the site's audience.

Because retrieval respects existing permissions, a SharePoint agent is a safe way to open up a knowledge base without copying or exporting the content.

---

## Practical Scenarios

| Scenario | Which Agent | Result |
|---|---|---|
| Market scan before a decision | Researcher | A cited report combining your files and the web |
| Explain a spreadsheet | Analyst | Charts and analysis of your data |
| Answer policy questions | SharePoint agent | Cited answers grounded in the policy library |
| Onboard to a project site | SharePoint agent | An assistant that answers from the site's documents |

---

## Where to Go Next

1. [Module 4: Copilot Studio](../../04-copilot-studio/readme.md): build and ground custom agents with actions
2. [Module 3: Cowork](../../03-cowork/readme.md): agentic AI that completes multi-step work

---

## Links & Resources

- [Get started with Researcher agent](https://learn.microsoft.com/microsoft-365/copilot/researcher-agent)
- [Explore prebuilt Microsoft 365 Copilot agents (training)](https://learn.microsoft.com/training/modules/explore-prebuilt-microsoft-365-copilot-agents/)
- [Agent installation in Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365/copilot/copilot-agent-install)
- [Insights report on agents in SharePoint](https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents)
