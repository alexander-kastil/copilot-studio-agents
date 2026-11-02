---
presents: demo-food-demand-card.md
budget: 6 min
beats: 6
---

# Present: Collect a Canteen Order Demand on an Adaptive Card

**Guide:** [Collect a Canteen Order Demand on an Adaptive Card](demo-food-demand-card.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · each beat links the exercise holding its prompt

**Agent:** CS-Food Stock Buddy, created blank in Exercise 1 from the original [Food Stock Buddy](../../../src/cs-schema/agents/Food%20Stock%20Buddy/); the finished rebuild is [CS-Food Stock Buddy](../../../src/cs-schema/cs-agents/CS-Food%20Stock%20Buddy/)

**Initial prompt** (attach nothing; sent in Exercise 6, after the card topic is built):

```text
I want to submit demand
```

### Beat 1: The agent starts small on purpose (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **…** > **Open classic experience** > **Agents** > **Create blank agent** · **Overview** > **Details**, **Instructions**, **Model** > **GPT Chat Latest** · [Exercise 1](demo-food-demand-card.md#exercise-1-create-cs-food-stock-buddy)
**What is there:** CS-Food Stock Buddy with its description, the one-line instruction and GPT Chat Latest as the model.

### Beat 2: A description and three phrases start the topic (1 min)

**Navigate:** **Topics** > **Add a topic** > **From blank** > **Details** · **Trigger** > **…** > **Properties** > **Phrases** · [Exercise 2](demo-food-demand-card.md#exercise-2-create-the-submit-demand-topic)
**What is there:** Submit Demand in the **Topics** list; its **Trigger** node with the description and three phrases.

### Beat 3: Nine dishes in one form (1 min)

**Navigate:** **Add node** > **Ask with Adaptive Card** > **…** > **Properties** > **Edit adaptive card** · [Exercise 3](demo-food-demand-card.md#exercise-3-add-the-nine-dish-demand-card)
**What is there:** the preview with Please enter your demand, the header row Enter required quantity and Quantity, nine dish rows from Wiener Schnitzel to Green Curry at 0, and **Submit Demand**.

### Beat 4: Numbers stay numbers (1 min)

**Navigate:** card node > **Properties** > **Edit Schema** · **More** > **Open code editor** · [Exercise 4](demo-food-demand-card.md#exercise-4-bind-the-card-outputs-to-typed-variables)
**What is there:** nine outputs from `Topic.qtyAranciniNapoletana` to `Topic.qtyWienerSchnitzel`, each typed Number.

### Beat 5: A global record outlives the topic (1 min)

**Navigate:** **Add node** > **Variable management** > **Set a variable value** > **Global (any topic can access)** · **Send a message** > **{x}** · [Exercise 5](demo-food-demand-card.md#exercise-5-keep-the-demand-for-the-rest-of-the-agent)
**What is there:** two **Set a variable value** nodes and the message node below the card; **Variables** lists `Global.orderDemand` as a record with nine number fields.

### Beat 6: One submit, only the ordered dishes confirmed (1 min)

**Navigate:** **Test** > **Reset** · **Variables** > **Test** · **Submit Demand** · [Exercise 6](demo-food-demand-card.md#exercise-6-submit-a-demand-in-the-test-chat)
**What is there:** "Your demand was successfully noted" with three JSON entries (WienerSchnitzel 40, PizzaNapoli 30, GreenCurry 25); the **Test** tab shows `Global.orderDemand` with all nine dishes.
