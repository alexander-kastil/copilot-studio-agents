---
presents: demo-01-build-and-ground-an-agent.md
budget: 4 min
beats: 4
---

# Present: Build and Ground Your First Microsoft Copilot Harness Agent

> **Note:** This demo shows one agent: GH-Health Advisor, a Microsoft Copilot harness agent.

**Guide:** [Build and Ground Your First Microsoft Copilot Harness Agent](demo-01-build-and-ground-an-agent.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · the **New agent** menu must offer **Agent** with the **GitHub Copilot** badge; have the `northwind-products` sheet ready

**Agent:** GH-Health Advisor; demos 02 and 03 continue it

**Initial prompt** (upload `northwind-products` as knowledge first; sent in **Preview** in Exercise 4):

```text
What is the standard lead time for a Tier 2 account, and what does a case of Cold Brew Concentrate cost?
```

### Beat 1: Instructions instead of topics (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Agents** > **New agent** > **Agent** (**GitHub Copilot** badge) · **Build** > **Instructions** > **Save**
**What is there:** tabs Build, Preview, Evaluate and Monitor; the right panel with **Model**, **Channels**, **Skills**, **Tools**, **Knowledge**, **Connected agents** and **Memory**; **Search all websites** under Knowledge, zero topics, and the "You do / You do not" instructions saved.

### Beat 2: A document the agent can cite (1 min)

**Navigate:** **Knowledge** > **+** > **Drag and drop or click to upload** > **Add to agent** · reload > **Edit knowledge source**
**What is there:** `northwind-products` beside **Search all websites**, its **Status** moving from **In progress** to **Ready** after a reload.

### Beat 3: A grounded answer and a refusal (1 min)

**Navigate:** **Preview** > **Debug mode** · step list > **Used tool: Searched knowledge** · **History**
**What is there:** 5 business days and 48.00 USD, the steps **Used tool: Searched knowledge** and **Used skill: analyzing-docx** (or **analyzing-markdown**); the contract price declined; in **History** the transcript with a numbered citation to `northwind-products`.

### Beat 4: Published before any channel (1 min)

**Navigate:** **Publish** > **+ Add channel** > close > **Publish agent**
**What is there:** channel options **Teams + Microsoft 365**, **Demo website** and **App**; "Your agent is published" with "It isn't on any channels yet."; the chip next to the name changes from **Draft** to **Published**.
