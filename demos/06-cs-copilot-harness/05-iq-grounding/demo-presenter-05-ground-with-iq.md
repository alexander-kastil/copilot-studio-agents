---
presents: demo-05-ground-with-iq.md
budget: 4 min
beats: 4
---

# Present: Ground an Agent in Your Work Context with Work IQ

> **Note:** This demo shows one agent: GH-Aurora Account Assistant, a Microsoft Copilot harness agent.

**Guide:** [Ground an Agent in Your Work Context with Work IQ](demo-05-ground-with-iq.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) and [Outlook](https://outlook.office.com/mail/inbox) · Work IQ must be enabled for the tenant with your user on the usage-based billing plan; know which mail thread the question will find

**Agent:** GH-Aurora Account Assistant

**Initial prompt** (attach nothing; sent in **Preview** in Exercise 1, before Work IQ is added, and again unchanged in Exercise 3):

```text
What did the most recent customer email I received ask me to do, and by when?
```

### Beat 1: An agent that cannot see your mail (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Home** > **Agent** (**GitHub Copilot** badge) > **Instructions** > **Save** · **Preview**
**What is there:** "Your agent has been saved."; a reply naming no sender, subject or deadline ("I couldn't find any of your emails"), and **Reasoned through your request** with no **Used tool** line.

### Beat 2: Work IQ, not the workload tools (1 min)

**Navigate:** **Build** > **Tools** > **+** > **MCP** > **Work IQ (Preview)** > **+ Add** · **Work IQ (Preview)** > **Edit tool** > **Connection** > **Done** > **Save**
**What is there:** "Work IQ (Preview) added"; the green check next to the presenter account under **Connection**; **Tool permissions** listing 12 tools, among them **Retrieve**, **Fetch** and **Ask**.

### Beat 3: Same question, your own mailbox (1 min)

**Navigate:** **Preview** > **New chat** > **Allow** · [Outlook inbox](https://outlook.office.com/mail/inbox)
**What is there:** **Used tool: retrieve** and several **Used tool: fetch** lines; the subject and deadline of a real email, checked against the inbox, and "Sources: your Outlook mailbox (inbox and Sent Items)."

### Beat 4: The trace is the evidence (1 min)

**Navigate:** **Debug mode** > **Used tool: retrieve** > **Input**, **Output** and **Latency**
**What is there:** the `Email` capability and its search query in **Input**, the thread the reply quoted in **Output**, and a grey check-circle on every tool line.
