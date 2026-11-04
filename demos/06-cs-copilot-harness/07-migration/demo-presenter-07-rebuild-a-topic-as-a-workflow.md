---
presents: demo-07-rebuild-a-topic-as-a-workflow.md
budget: 5 min
beats: 5
---

# Present: Rebuild a Topic and Its Agent Flow as a Workflow

> **Note:** This demo shows two agents: the Health Advisor, a Standard agent, and **Health Advisor (Upgraded)**, its Microsoft Copilot harness copy.

**Guide:** [Rebuild a Topic and Its Agent Flow as a Workflow](demo-07-rebuild-a-topic-as-a-workflow.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · the upgrade, the workflow runs and every Preview turn consume Copilot Credits

**Agent:** the Standard Health Advisor from [Rebuild the Health Advisor with Two Agent Flows](../../04-cs-tools/04-agent-flows/demo-health-advisor-flows.md), upgraded in Exercise 2 to **Health Advisor (Upgraded)**

**Initial prompt** (attach nothing; sent on the Copilot Studio home page in Exercise 2):

```text
upgrade my Health Advisor agent
```

### Beat 1: Map each node by its purpose (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > Health Advisor > **Topics** > **Check Symptoms** · action node `SummarizePatientSymtoms`
**What is there:** the trigger, the Age, Gender and Symptoms questions, `SummarizePatientSymtoms` with inputs `number`, `text`, `text_1` and output `outcome`, the Power Fx condition, the outcome message and the TookDrugs question.

### Beat 2: The upgrade is a copy with a report (1 min)

**Navigate:** **Home** > input box > send · cards > **Open** on **Health Advisor (Upgraded)**
**What is there:** what was migrated, what requires attention and what was skipped, the Power Fx condition among the items not carried over; **Health Advisor (Upgraded)** on **Build** with the original instructions and tools; the Standard agent unchanged in **Agents**.

### Beat 3: Questions become inputs, prompt and formula one classify node (1 min)

**Navigate:** **Tools** > **+** > **+ Add** > **Workflow** · trigger > **+ Add an input** > **Text** · **+** > **Classify** > **Categories** > **Examples** · **Save** > **Publish**
**What is there:** Check Symptoms with the inputs `Age`, `Gender` and `Symptoms`, a classify node with the branches **Cleared for light work**, **See a doctor** and **Other**, each ending in **Respond to the agent** with `Outcome`; status **Published**.

### Beat 4: The instructions take over the follow-up question (1 min)

**Navigate:** **Tools** > **Check Symptoms** > description > **Save** · **Instructions** · **Publish** > **Publish agent**
**What is there:** **Check Symptoms** under **Tools** with the new description, instructions that name the tool and ask about medication for a doctor outcome, the agent published.

### Beat 5: Same journeys on both agents (1 min)

**Navigate:** **Health Advisor (Upgraded)** > **Preview** > **Debug mode** · Standard Health Advisor > test pane
**What is there:** the first message runs **Check Symptoms** at once with the output `Cleared for light work`; the second asks only for age and gender, reports **See a doctor** and asks about medication; the Standard agent asks its three questions in fixed order and reaches the same two outcomes.
