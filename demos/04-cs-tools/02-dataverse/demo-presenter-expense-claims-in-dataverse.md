---
presents: demo-expense-claims-in-dataverse.md
budget: 5 min
beats: 5
---

# Present: Save Expense Claims to Dataverse

**Guide:** [Save Expense Claims to Dataverse](demo-expense-claims-in-dataverse.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience, and [Power Apps](https://make.powerapps.com) · each beat links the exercise holding its prompt

**Agent:** CS-Travel Expense Refund with the Submit Refund Request topic from [Prepare a Travel Expense Claim with Power Fx](../../03-cs-basics/04-power-fx/demo-expense-claim-power-fx.md); the finished rebuild is [CS-Travel Expense Refund](../../../src/cs-schema/cs-agents/CS-Travel%20Expense%20Refund/)

**Initial prompt** (attach nothing; sent in Exercise 5, after the table, the flow and the **Action** node exist):

```text
I want to submit a travel expense claim
```

### Beat 1: The table mirrors what the topic collects (1 min)

**Navigate:** [Power Apps](https://make.powerapps.com) > **Tables** > **New table** > **Set advanced properties** · **Columns** > **Add column** > **Save Table** · [Exercise 1](demo-expense-claims-in-dataverse.md#exercise-1-create-the-cs-travel-expense-claims-table)
**What is there:** CS-Travel Expense Claims with Claim ID as primary column plus six columns, the dates as **Date and time**.

### Beat 2: Trigger inputs are the fields the topic fills (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Tools** > **New tool** > **Agent flow** · **When an agent calls the flow** > **Add an input** · [Exercise 2](demo-expense-claims-in-dataverse.md#exercise-2-build-the-agent-flow-and-its-inputs)
**What is there:** the trigger card with seven inputs, six required and Comment optional; the flow named CS-Save Claim to Dataverse.

### Beat 3: One row, then a response to the agent (1 min)

**Navigate:** **+** > **Add a new row** (**Microsoft Dataverse**) · **Respond to the agent** · **Publish** · [cloned flow](../../../src/cs-schema/workflows/SaveClaimtoDataverse/) · [Exercise 3](demo-expense-claims-in-dataverse.md#exercise-3-add-the-row-and-respond)
**What is there:** a published flow with three cards in order: the trigger, **Add a new row** on CS-Travel Expense Claims, **Respond to the agent**.

### Beat 4: The topic, not the orchestrator, saves the claim (1 min)

**Navigate:** **Tools** > **Add a tool** > **Workflows** > CS-Save Claim to Dataverse > **Add and configure** · Submit Refund Request > **Add node** > **Add a tool** · [Exercise 4](demo-expense-claims-in-dataverse.md#exercise-4-call-the-flow-from-the-claim-topic)
**What is there:** the card, three **Set variable value** nodes, the **Action** node with seven mapped inputs and the confirmation message.

### Beat 5: The proof is the row (1 min)

**Navigate:** **Test your agent** > new conversation > **Submit Claim** · [Power Apps](https://make.powerapps.com) > CS-Travel Expense Claims · [Exercise 5](demo-expense-claims-in-dataverse.md#exercise-5-submit-a-claim-and-find-the-row)
**What is there:** "Thanks. Claim <claim ID> for Salzburg is saved: 318.4 from 2026-11-10T00:00:00Z to 2026-11-12T00:00:00Z."; one new row with that Claim ID, Salzburg, 318.40, the comment and both dates.
