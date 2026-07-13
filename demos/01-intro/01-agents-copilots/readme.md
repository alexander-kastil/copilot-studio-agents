# Agents & Copilots for Microsoft 365

This topic sets the vocabulary for the whole course. Before you build anything, you need a clear mental model of what a copilot is, what an agent is, and how both fit into the Microsoft 365 platform you already use. By the end you can place any product you meet later (Copilot Chat, Copilot Studio, Cowork, SharePoint agents) on a single map and explain what job it does.

---

## Copilot, Agent, Assistant: One Vocabulary

These words get used loosely, so this course fixes their meaning up front.

| Term | What it is | Who drives |
|---|---|---|
| Copilot | An AI assistant embedded in an app or surface you already use, grounded in your work content | The human asks; Copilot responds turn by turn |
| Agent | A copilot given a specific job, its own knowledge, instructions, and tools it can call | The human sets a goal; the agent plans and acts across steps |
| Assistant | The general category: any AI that helps a person complete work in natural language | Either, depending on capability |

A useful way to hold it: every agent is a copilot with a narrower job and more autonomy. Microsoft 365 Copilot is the broad assistant across your apps. An agent you build in Copilot Studio is a focused copilot for one process, for example handling sales objections or answering HR policy questions.

---

## The Microsoft 365 Copilot Ecosystem

Copilot is not one product, it is a layer that spans the platform. The pieces you will meet in this course sit at different levels, from the everyday chat experience up to the pro-code extensibility surface.

```mermaid
flowchart TB
  subgraph Experiences["Where people work"]
    Chat["Copilot Chat<br/>(web, Teams, apps)"]
    Cowork["Copilot Cowork<br/>(agentic workspace)"]
    InApp["In-app Copilot<br/>(Word, Excel, Outlook)"]
  end
  subgraph Build["Where makers build"]
    Studio["Copilot Studio<br/>(low-code agents)"]
    Agents["SharePoint &<br/>Agent Builder agents"]
  end
  subgraph Foundation["What grounds it"]
    Graph["Microsoft Graph<br/>(your work content)"]
    Tools["Tools, connectors<br/>& MCP servers"]
  end
  Experiences --> Foundation
  Build --> Foundation
```

The experiences layer is what end users touch. The build layer is where makers and developers assemble agents. Both stand on a shared foundation: Microsoft Graph, which grounds Copilot in your emails, files, chats, and meetings, and the tools and connectors that let agents reach beyond Graph into other systems.

---

## What Is Agentic AI?

A plain chatbot answers one question at a time and forgets. Agentic AI is different: you give it a goal, and it plans a sequence of steps, calls tools to get information or take action, checks the result, and keeps going until the goal is met. The shift is from "answer my question" to "get this done for me."

Three properties make an AI agentic.

- Goal-driven: it works toward an outcome you describe, not a single reply.
- Tool-using: it can call functions, search knowledge, read data, and act in other systems.
- Iterative: it loops (plan, act, observe, adjust) instead of answering once.

You stay in control through human-in-the-loop approvals: the agent proposes an action such as sending an email or updating a record, and a person approves before it runs. This is a theme you will see across Cowork and Copilot Studio throughout the course.

---

## Where Agents Live in Microsoft 365

The same agent concept shows up in several places, each suited to a different builder and audience.

| Surface | Best for | Who builds it |
|---|---|---|
| Copilot Chat | Everyday drafting, summarizing, and Q&A | Everyone, no build required |
| Copilot Cowork | Recurring knowledge-work automation with skills | Business users, low-code |
| Agent Builder / SharePoint agents | Site-grounded and prebuilt agents | Makers, no code |
| Copilot Studio | Custom agents with topics, tools, and orchestration | Low-code makers, pro-code |

You do not have to choose one path forever. A common pattern is to prototype in a no-code surface, then rebuild in Copilot Studio when the process needs custom tools, multi-agent orchestration, or governance.

---

## Practical Scenarios

| Scenario | Copilot vs. Agent |
|---|---|
| "Summarize this thread" | Copilot Chat, one turn |
| "Every Monday, compile my team's highlights and post them" | Agent (scheduled, multi-step) |
| "Answer customer objections using our approved playbook" | Agent (grounded knowledge plus instructions) |
| "Draft a reply using the latest numbers in this file" | Copilot Chat, grounded in Graph |

The dividing line is scope and autonomy. When a task repeats, spans steps, or needs its own knowledge and tools, it is agent work.

---

## Where to Go Next

1. [How Agents Work: Knowledge, Prompting & Tools](../02-agent-anatomy/readme.md): the parts every agent is made of
2. [Extensibility & Development Paths](../03-extensibility/readme.md): how to choose where to build
3. [Licensing & Environment Setup](../04-licensing-setup/readme.md): what to enable before you build

---

## Links & Resources

- [Microsoft 365 Copilot overview](https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-overview)
- [What are agents in Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365-copilot/extensibility/agents-overview)
- [Microsoft 365 Copilot extensibility overview](https://learn.microsoft.com/microsoft-365-copilot/extensibility/)
- [Microsoft Copilot Scenario Library](https://adoption.microsoft.com/en-us/scenario-library/)
