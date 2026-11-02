---
presents: demo-compliance-agent-foundry.md
budget: 5 min
beats: 5
---

# Present: Run a New Hire Background Check Through a Foundry Agent

**Guide:** [Run a New Hire Background Check Through a Foundry Agent](demo-compliance-agent-foundry.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience, and [Microsoft Foundry](https://ai.azure.com) · social-profiler must run with the Activity Protocol on

**Agent:** CS-Compliance Agent, created blank in Exercise 1 from the original [Compliance Agent](../../../src/cs-schema/agents/Compliance%20Agent/); it calls the Foundry agent `social-profiler`; the finished rebuild is [CS-Compliance Agent](../../../src/cs-schema/cs-agents/CS-Compliance%20Agent/)

**Initial prompt** (attach nothing; sent in Exercise 2, after the instructions and Claude Sonnet 4.6 are set):

```text
I need a background check on a new colleague.
```

### Beat 1: Instructions fix the order: explain, collect, confirm (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **…** > **Open classic experience** > **Agents** > **Create blank agent** · **Details**, **Instructions** · **Knowledge** > **Web Search** · [Exercise 1](demo-compliance-agent-foundry.md#exercise-1-create-cs-compliance-agent-with-structured-instructions)
**What is there:** CS-Compliance Agent with its description and the instructions with their headings.

### Beat 2: An external model follows long instructions (1 min)

**Navigate:** **Model** > **Anthropic** > **Claude Sonnet 4.6** · **Test your agent** · [Exercise 2](demo-compliance-agent-foundry.md#exercise-2-choose-claude-sonnet-46-as-the-primary-model)
**What is there:** **Model** shows Claude Sonnet 4.6; the agent explains the check, names the three details and asks for the full name first.

### Beat 3: The Foundry agent is connected, not copied (1 min)

**Navigate:** **Agents** > **Add** > **Connect to an external agent** > **Microsoft Foundry** > **Create new connection** > **Add and configure** · [Exercise 3](demo-compliance-agent-foundry.md#exercise-3-connect-the-social-profiler-agent-as-cs-social-profiler)
**What is there:** CS-Social Profiler with **Enabled** on, **Azure AI Foundry Agent Service** as **Server**, CS-Microsoft Foundry as **Connection** and **AgentId** `social-profiler`.

### Beat 4: One step says when to hand off (1 min)

**Navigate:** **Overview** > **Instructions** > **Edit** > **/** > CS-Social Profiler > **Save** · [Exercise 4](demo-compliance-agent-foundry.md#exercise-4-hand-the-confirmed-details-to-cs-social-profiler)
**What is there:** step 5, Run the Background Check, with CS-Social Profiler as a reference.

### Beat 5: The Foundry call runs only after confirmation (1 min)

**Navigate:** **Test your agent** > **…** > **Show activity map when testing** · [Exercise 5](demo-compliance-agent-foundry.md#exercise-5-run-a-background-check-for-a-new-hire)
**What is there:** name, email and company asked in separate turns and repeated in a table; only after the confirmation a CS-Social Profiler node and the Foundry agent's sections; the broken email stops the check before the call.
