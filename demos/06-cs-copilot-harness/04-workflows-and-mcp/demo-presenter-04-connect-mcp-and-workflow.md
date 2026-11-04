---
presents: demo-04-connect-mcp-and-workflow.md
budget: 4 min
beats: 4
---

# Present: Connect an MCP Server and Automate with a Workflow

> **Note:** This demo shows one agent: GH-Food Buddy, a Microsoft Copilot harness agent.

**Guide:** [Connect an MCP Server and Automate with a Workflow](demo-04-connect-mcp-and-workflow.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · publish the agent after Exercise 1, because the agent node calls the published version

**Agent:** GH-Food Buddy

**Initial prompt** (attach nothing; sent in **Preview** in Exercise 2, after the Dataverse MCP server is added):

```text
Which open support cases do we have for accounts in the North region?
```

### Beat 1: A vendor's tool bundle in a few fields (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > GH-Food Buddy > **Build** > **Tools** > **+** > **MCP** > **Microsoft Dataverse MCP Server** > **Add** > **Create new connection** · **Edit tool** > **Done**
**What is there:** the server under **Tools**; **Edit tool** with **MCP server**, the connection, **Authentication** on **End user account** and **Tool permissions** on **Allow all**, listing every tool the server exposes.

### Beat 2: The orchestrator calls it on its own (1 min)

**Navigate:** **Preview** > step list > **Used tool:**
**What is there:** **Using tool:** then **Used tool:** with the server tool's name, its **Output** and **Latency**; the open support cases of the North region accounts.

### Beat 3: A fixed process that hands the wording to the agent (1 min)

**Navigate:** **Tools** > **+** > **+ Add** > **Workflow** · trigger > **+ Add an input** > **Text** · **+** > **Actions** > **Agent** · **Respond to the agent** > **+ Add an output**
**What is there:** "Your workflow has been saved."; three nodes: the trigger with `AccountName`, the **Agent** node calling GH-Food Buddy, and **Respond to the agent** returning `FollowUp`.

### Beat 4: Node by node, then a version per save (1 min)

**Navigate:** agent node > **Run node** > **Run** · **Publish** > **Run** > **Enter trigger inputs** · clock icon > **Version history**
**What is there:** the node's inputs, thinking and the drafted follow-up under **Outputs**; the full run with each node's duration (the agent node about 17 seconds) and `FollowUp`; "Synced with Dataverse", the published version **LIVE**, and **Preview**, **Compare to current** and **Restore** per version.
