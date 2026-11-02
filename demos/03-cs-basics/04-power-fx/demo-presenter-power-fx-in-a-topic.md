---
presents: demo-power-fx-in-a-topic.md
budget: 5 min
beats: 4
---

# Present: Calculate a Ticket Due Date with Power Fx

**Guide:** [Calculate a Ticket Due Date with Power Fx](demo-power-fx-in-a-topic.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · each beat links the exercise holding its prompt

**Agent:** Grey Logistics IT Help Desk from [Create a Standard IT Help Desk Agent](../01-standard-agents/demo-create-a-standard-agent.md), either orchestration mode

**Initial prompt** (attach nothing; sent in Exercise 5, after the topic is built):

```text
When will my ticket be done?
```

### Beat 1: A formula rejects a vague answer (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Topics** > **Add a topic** > **From blank** · second **Question** > **Properties** > **Entity recognition** > **Additional entity validation** · [Exercise 1](demo-power-fx-in-a-topic.md#exercise-1-collect-the-priority-and-validate-the-description)
**What is there:** two **Question** nodes; the second one's properties show the `Len` condition and the custom prompt.

### Beat 2: One Switch replaces three branches (1 min)

**Navigate:** **Set variable value** > **Create new** > **>** > **Formula** · [Exercise 2](demo-power-fx-in-a-topic.md#exercise-2-map-the-priority-to-service-days-with-switch)
**What is there:** the node sets `slaDays` to the `Switch` formula, and the variable type changes from unknown to number.

### Beat 3: Date math and a weekend check in formulas (1.5 min)

**Navigate:** **Condition** > **…** > **Change to formula** · **Set variable value** · **Message** > **{x}** · [Exercise 3](demo-power-fx-in-a-topic.md#exercise-3-calculate-the-due-date-and-move-it-off-a-weekend) · [Exercise 4](demo-power-fx-in-a-topic.md#exercise-4-format-the-date-and-reply)
**What is there:** the `dueDate` calculation, a formula condition with an adjustment node in the true branch only, `dueDateText`, and a message with three inserted variables.

### Beat 4: The Test tab shows every formula's result (1.5 min)

**Navigate:** **Variables** > **Test** · **Test your agent** > new conversation > **Low**, then **High** · [Exercise 5](demo-power-fx-in-a-topic.md#exercise-5-test-the-formulas-and-watch-the-variables)
**What is there:** "broken" brings back the custom prompt; the **Test** tab shows `slaDays` 5 for Low and 1 for High, `dueDate` never on a Saturday or Sunday, and the reply names `dueDateText`.
