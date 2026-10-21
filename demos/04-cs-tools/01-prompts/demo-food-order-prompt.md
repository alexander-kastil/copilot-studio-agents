# Calculate the Canteen Order with a Prompt

CS-Food Stock Buddy now knows what the canteen needs, but someone still holds the demand against the stock list and works out what to buy. In this demo you give the agent a prompt that takes the demand and the stock as JSON and returns the quantity to order per dish, and a topic that feeds it both values without asking the user. The stock is a sample table for now; the REST API demo later swaps it for the live food catalog.

What you practice here: passing structured topic data to a prompt as text inputs with `JSON()` and using the prompt's answer in the conversation.

Duration: about 40 minutes.

## What you'll build

- A prompt, CS-Calculate food to order, with the text inputs `foodDemand` and `foodStock`, added to the agent as a tool.
- A Calculate order quantity topic with a node named Set sample stock that holds the canteen's stock as a Power Fx table.
- A prompt node in that topic that receives `JSON(Global.orderDemand)` and `JSON(Topic.foodStock)` and returns the order.
- A test where a submitted demand turns into order quantities.

## Prerequisites

- CS-Food Stock Buddy with the Submit Demand topic from [Collect a Canteen Order Demand on an Adaptive Card](../../03-cs-basics/05-adaptive-cards/demo-food-demand-card.md), opened in the classic experience (**Home**, the three dots (**…**) at the bottom of the side bar, **Open classic experience**).
- The original agent's definition, for reference: [src/cs-schema/agents/Food Stock Buddy](../../../src/cs-schema/agents/Food%20Stock%20Buddy/). Its prompt definition did not come along in the clone, so this demo writes the prompt text.
- Prompts in Copilot Studio consume Copilot Credits.

## Exercise 1: Create the CS-Calculate food to order prompt

The prompt is the calculation step: it receives two JSON texts and returns JSON. Created from the **Tools** page, it can be added to the agent as a tool and called from any topic. Its rule keeps the minimum stock after serving the demand: order = demand + minStock - inStock, never below 0.

1. In CS-Food Stock Buddy, go to **Tools**, select **Add a tool**, then the **Add new Prompt** card at the top of the **Add tool** dialog.
2. Select the generated name at the top left and rename the prompt `CS-Calculate food to order`. Leave **Model** on its default.
3. Paste the instructions below. At each placeholder in braces, delete the placeholder, type **/** (or select **Add content**), choose **Text** under **Input**, and name the input exactly as the placeholder: `foodDemand`, then `foodStock`.

```text
You plan the food order for a canteen.

Demand per dish as JSON: {foodDemand}

Current stock per dish as JSON: {foodStock}

For every dish in the demand with a value above 0, find the stock item with the same name, ignoring spaces, letter case and umlauts. WienerSchnitzel matches Wiener Schnitzel, and WeisswurstMitBrezn matches Weißwurst mit Brezn.
Calculate orderQuantity = demand + minStock - inStock. If the result is below 0, use 0. If a dish has no stock item, use inStock 0 and minStock 0.
Return only a JSON array, one object per dish with the fields name, demand, inStock, minStock and orderQuantity, in the order of the demand. Return no other text.
```

4. Select the `foodDemand` input and enter this sample value.

```json
{"Kaiserschmarrn":0,"WeisswurstMitBrezn":0,"WienerSchnitzel":40,"PizzaNapoli":30,"Germknoedel":0,"AranciniNapoletana":0,"SchweinshaxeMitKraut":0,"PadKaPrao":0,"GreenCurry":25}
```

5. Select the `foodStock` input and enter this sample value, which mirrors the food catalog API's seed data in [FoodSeeder.cs](../../../src/food-catalog-mcp/Database/FoodSeeder.cs).

```json
[{"id":1,"name":"Wiener Schnitzel","price":18,"inStock":30,"minStock":6},{"id":2,"name":"Germknoedel","price":7,"inStock":26,"minStock":6},{"id":3,"name":"Kaiserschmarrn","price":9,"inStock":22,"minStock":5},{"id":4,"name":"Weißwurst mit Brezn","price":10,"inStock":20,"minStock":5},{"id":5,"name":"Schweinshaxe mit Kraut","price":19,"inStock":12,"minStock":3},{"id":6,"name":"Pizza Napoli","price":9,"inStock":28,"minStock":6},{"id":7,"name":"Arancini Napoletana","price":7,"inStock":15,"minStock":4},{"id":8,"name":"Pad Ka Prao","price":10,"inStock":18,"minStock":4},{"id":9,"name":"Green Curry","price":13,"inStock":17,"minStock":4}]
```

6. Select **Test**, then **Save**. The **Add tool** dialog shows the prompt; select **Add and configure**.

Expected: the test response is a JSON array with three dishes, and the arithmetic gives 16 for Wiener Schnitzel (40 + 6 - 30), 8 for Pizza Napoli (30 + 6 - 28) and 12 for Green Curry (25 + 4 - 17). The wording comes from the model and can differ, but the numbers follow the rule. **Add and configure** opens the tool's settings page, and the **Tools** page lists CS-Calculate food to order.

> **Note:** Leave code interpreter off for this prompt. Learn lists calling a code interpreter prompt directly from a topic as unsupported, and this demo calls the prompt from a topic. The existing [prompt tool with code interpreter](demo-prompt-tool-with-code-interpreter.md) demo in this folder shows that setting.

## Exercise 2: Describe the prompt for the orchestrator

As a tool, the prompt can also be picked by generative orchestration without any topic. The orchestrator decides from the tool's name and description, so the description says plainly what the tool does. It comes verbatim from the original agent.

1. On the tool's settings page, which **Add and configure** opened (or **Tools** > CS-Calculate food to order), replace the prefilled description CS-Calculate food to order with the text below and select **Save**.

```text
Calculate food to order
```

Expected: the tool's details show the description Calculate food to order, and its two inputs, `foodDemand` and `foodStock`, are filled dynamically by default.

## Exercise 3: Hold the stock in a Set sample stock node

The topic needs the stock as data. Until the REST API demo connects the live catalog, a **Set a variable value** node holds the same nine rows as a Power Fx table with the API's field names. Naming the node Set sample stock marks it as the one node that the later demo replaces.

1. Go to **Topics**, select **Add a topic**, then **From blank**, and name it `Calculate order quantity` in **Details**.
2. On the **Trigger** node, paste this text into **Describe what the topic does**.

```text
Calculates order quantity based on demand and food in stock. Triggered with phrases like: Calculate quantity to order
```

3. Under the **Trigger** node, select **Add node**, **Variable management**, then **Set a variable value**. Rename the node `Set sample stock`: select its name field, or the three dots (**…**) and **Rename**.
4. Under **Set variable**, create the topic variable `foodStock`, switch the value to the formula editor, and enter this table.

```powerfx
Table(
  {id: 1, name: "Wiener Schnitzel", price: 18, inStock: 30, minStock: 6},
  {id: 2, name: "Germknoedel", price: 7, inStock: 26, minStock: 6},
  {id: 3, name: "Kaiserschmarrn", price: 9, inStock: 22, minStock: 5},
  {id: 4, name: "Weißwurst mit Brezn", price: 10, inStock: 20, minStock: 5},
  {id: 5, name: "Schweinshaxe mit Kraut", price: 19, inStock: 12, minStock: 3},
  {id: 6, name: "Pizza Napoli", price: 9, inStock: 28, minStock: 6},
  {id: 7, name: "Arancini Napoletana", price: 7, inStock: 15, minStock: 4},
  {id: 8, name: "Pad Ka Prao", price: 10, inStock: 18, minStock: 4},
  {id: 9, name: "Green Curry", price: 13, inStock: 17, minStock: 4}
)
```

Expected: the canvas shows the **Trigger** node with the description and a node named Set sample stock that sets `Topic.foodStock` to a table of nine records.

> **Tip:** The original topic describes itself with "Triggered with phased like"; the rebuild says "phrases", which reads correctly for makers and for the orchestrator.

## Exercise 4: Call the prompt from the topic

In the topic, you wire the inputs yourself instead of leaving them to the orchestrator. `JSON()` turns the demand record from Submit Demand and the stock table into the text the prompt expects. The prompt returns a record whose `text` field holds its answer.

1. Under Set sample stock, select **Add node**, then **Add a tool**, and choose CS-Calculate food to order from the agent's tools.
2. Set each input with a formula: `foodDemand` to `JSON(Global.orderDemand)` and `foodStock` to `JSON(Topic.foodStock)`. For the output, create the topic variable `orderQuantityRecord`.
3. Add a **Set a variable value** node, create the topic variable `orderQuantityJSON`, and set it with this formula.

```powerfx
Topic.orderQuantityRecord.text
```

4. Add a **Send a message** node with the text below, insert `Topic.orderQuantityJSON` with the **Insert variable** icon (**{x}**), and select **Save**.

```text
Based on our current stock we have to order: {Topic.orderQuantityJSON}
```

The original agent's prompt node, for comparison (ids replaced):

```yaml
    - kind: InvokeAIBuilderModelAction
      id: invokeAIBuilderModelAction_vCWBmM
      input:
        binding:
          foodDemand: =JSON(Global.orderDemand)
          foodStock: =JSON(Topic.foodStock)

      output:
        binding:
          predictionOutput: Topic.orderQuantityRecord

      aIModelId: <your CS-Calculate food to order prompt id>
```

Expected: the topic shows Set sample stock, the prompt node with both input formulas and the output `Topic.orderQuantityRecord`, the `orderQuantityJSON` node, and the message.

> **Tip:** The original topic wraps the answer in `JSON(Topic.orderQuantityRecord.text)`, which escapes text that is already JSON, and its message inserts the whole record. The rebuild uses the `text` field directly in both places.

## Exercise 5: Run the order from demand to quantities

The test chains both demos: Submit Demand fills `Global.orderDemand`, and Calculate order quantity reads it in the same conversation. A last turn without the topic shows the agent-level tool path, where the orchestrator fills the inputs itself.

1. Select **Test**, select the **Reset** icon, turn on **Track between topics** under the three dots (**…**) of the panel, and send the message below.

```text
I want to submit demand
```

2. On the card, enter 40 for Wiener Schnitzel, 30 for Pizza Napoli and 25 for Green Curry, then select **Submit Demand**. Then send this message.

```text
Calculate quantity to order
```

3. Reset the conversation and send a request that carries its own numbers.

```text
Calculate food to order: we need 10 Pad Ka Prao, we have 5 in stock and keep at least 2.
```

Expected: after step 2 the tracking view runs Calculate order quantity through Set sample stock and the prompt node, and the agent answers Based on our current stock we have to order, followed by JSON with orderQuantity 16 for Wiener Schnitzel, 8 for Pizza Napoli and 12 for Green Curry; in the live run the model listed Green Curry first, so read the numbers, not the order. In step 3 the activity map shows how the orchestrator chose: either the CS-Calculate food to order tool with inputs it filled from the message (the rule gives 7), or a question for the missing values. Both outcomes are model decisions, which is why the topic, not the bare tool, carries the canteen's real data.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The answer wraps the JSON in a code fence or adds sentences | The model ignored the output rule | Keep "Return only a JSON array" and "Return no other text" in the instructions, or set the prompt's output format to JSON |
| The prompt receives the demand with escaped quotes | `Global.orderDemand` holds JSON text, so `JSON()` encodes it twice | Store the record without `JSON()` in Submit Demand, as in its Exercise 5 |
| The prompt can't be called from the topic | Code interpreter is on for the prompt | Turn it off, or call the prompt from an agent flow |
| A dish comes back with inStock 0 | Its demand key doesn't match a stock name | Keep the matching rule for spaces, case and umlauts in the instructions |
| Every orderQuantity is 0 | The demand is below inStock minus minStock for all dishes | Enter larger quantities on the card |

## Summary

You gave CS-Food Stock Buddy a prompt that turns demand and stock into order quantities. You can now:

- create a prompt with named text inputs, sample data and a test from the **Tools** page
- describe a prompt tool so the orchestrator can choose it
- hold stand-in data in a named **Set a variable value** node
- feed a prompt from a topic with `JSON()` and read its answer from the output record's `text` field

Next, the [REST API](../05-rest-api/readme.md) topic connects CS-Food Stock Buddy to the live food catalog and replaces Set sample stock with real stock.
