---
presents: demo-02-trace-agent-reasoning.md
budget: 5 min
beats: 5
---

# Present: Trace the Agentic Reasoning Loop

> **Note:** This demo shows one agent: GH-Health Advisor, a Microsoft Copilot harness agent.

**Guide:** [Trace the Agentic Reasoning Loop](demo-02-trace-agent-reasoning.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · continues the demo 01 agent; have the `northwind-accounts` file ready

**Agent:** GH-Health Advisor from [Build and Ground Your First Microsoft Copilot Harness Agent](../01-standard-vs-copilot-harness/demo-01-build-and-ground-an-agent.md)

**Initial prompt** (upload `northwind-accounts` as a second knowledge source first; sent in **Preview** in Exercise 2):

```text
What is a case of Organic Green Tea, and what is the standard lead time for a Tier 2 account?
```

### Beat 1: Two sources give the planner a choice (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > GH-Health Advisor > **Build** > **Knowledge** > **+** > **Drag and drop or click to upload** > **Add to agent**
**What is there:** the product reference and `northwind-accounts` under **Knowledge**, both **Ready**, beside **Search all websites**.

### Beat 2: One turn pulls from both documents (1 min)

**Navigate:** **Preview** > **Debug mode** > **New chat**
**What is there:** a compact first answer from the product reference alone; the Around the Horn answer with the Organic Green Tea order and its backordered case, no open support cases, and the Tier 2 lead time.

### Beat 3: The plan above the answer (1 min)

**Navigate:** step list > **Used tool: Searched knowledge** > **Input** and **Output**
**What is there:** **Searched knowledge** steps whose queries cover orders, support cases and lead time, each with an **Output** such as "[3 results]", followed by **Used skill: analyzing-markdown** or **analyzing-docx**.

### Beat 4: The same run read after the fact (1 min)

**Navigate:** **Preview** > **History** > the Around the Horn session > **Activity** · **Monitor** > **Overview** and **Sessions**
**What is there:** the **Searched knowledge** steps in **Activity**, numbered citations to `northwind-accounts` and the product reference, a **Credits** column; **Monitor** shows **Total credits used** but "No sessions to show".

### Beat 5: The reason keyword orders the plan (1 min)

**Navigate:** **Build** > **Instructions** > **Save** · **Preview** > **New chat**
**What is there:** "Your agent has been saved."; a thought naming the lookups, then **Ran 2 events in parallel** with one **Searched knowledge** query per part; the answer in the instructed order, tier, then orders and cases, then a summary.
