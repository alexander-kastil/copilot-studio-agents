---
presents: demo-food-order-prompt.md
budget: 5 min
beats: 5
---

# Present: Calculate the Canteen Order with a Prompt

**Guide:** [Calculate the Canteen Order with a Prompt](demo-food-order-prompt.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · each beat links the exercise holding its prompt

**Agent:** CS-Food Stock Buddy with the Submit Demand topic from [Collect a Canteen Order Demand on an Adaptive Card](../../03-cs-basics/05-adaptive-cards/demo-food-demand-card.md); the finished rebuild is [CS-Food Stock Buddy](../../../src/cs-schema/cs-agents/CS-Food%20Stock%20Buddy/)

**Initial prompt** (attach nothing; paste it as the prompt's instructions in Exercise 1, then turn both placeholders into Text inputs):

```text
You plan the food order for a canteen.

Demand per dish as JSON: {foodDemand}

Current stock per dish as JSON: {foodStock}

For every dish in the demand with a value above 0, find the stock item with the same name, ignoring spaces, letter case and umlauts. WienerSchnitzel matches Wiener Schnitzel, and WeisswurstMitBrezn matches Weißwurst mit Brezn.
Calculate orderQuantity = demand + minStock - inStock. If the result is below 0, use 0. If a dish has no stock item, use inStock 0 and minStock 0.
Return only a JSON array, one object per dish with the fields name, demand, inStock, minStock and orderQuantity, in the order of the demand. Return no other text.
```

### Beat 1: The prompt is the calculation step (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Tools** > **Add a tool** > **Add new Prompt** · **/** > **Input** > **Text** · **Test** > **Save** > **Add and configure** · [FoodSeeder.cs](../../../src/food-catalog-mcp/Database/FoodSeeder.cs) · [Exercise 1](demo-food-order-prompt.md#exercise-1-create-the-cs-calculate-food-to-order-prompt)
**What is there:** a JSON array with three dishes: 16 for Wiener Schnitzel, 8 for Pizza Napoli, 12 for Green Curry.

### Beat 2: A description lets the orchestrator pick the tool (1 min)

**Navigate:** **Tools** > CS-Calculate food to order > description > **Save** · [Exercise 2](demo-food-order-prompt.md#exercise-2-describe-the-prompt-for-the-orchestrator)
**What is there:** the description Calculate food to order; the inputs `foodDemand` and `foodStock` filled dynamically by default.

### Beat 3: Stand-in stock in a named node (1 min)

**Navigate:** **Topics** > **Add a topic** > **From blank** · **Add node** > **Variable management** > **Set a variable value** > **…** > **Rename** · [Exercise 3](demo-food-order-prompt.md#exercise-3-hold-the-stock-in-a-set-sample-stock-node)
**What is there:** the **Trigger** node with its description and Set sample stock setting `Topic.foodStock` to a table of nine records.

### Beat 4: The topic wires the prompt inputs itself (1 min)

**Navigate:** **Add node** > **Add a tool** > CS-Calculate food to order · **Set a variable value** · **Send a message** > **{x}** · [Exercise 4](demo-food-order-prompt.md#exercise-4-call-the-prompt-from-the-topic)
**What is there:** Set sample stock, the prompt node with `JSON(Global.orderDemand)` and `JSON(Topic.foodStock)` and the output `Topic.orderQuantityRecord`, the `orderQuantityJSON` node and the message.

### Beat 5: From demand to order quantities in one chat (1 min)

**Navigate:** **Test** > **Reset** > **…** > **Track between topics** · **Submit Demand** · [Exercise 5](demo-food-order-prompt.md#exercise-5-run-the-order-from-demand-to-quantities)
**What is there:** the tracking view runs Calculate order quantity through Set sample stock and the prompt node; "Based on our current stock we have to order" with orderQuantity 16, 8 and 12.
