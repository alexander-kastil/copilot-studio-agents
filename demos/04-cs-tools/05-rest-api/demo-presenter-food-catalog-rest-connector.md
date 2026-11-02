---
presents: demo-food-catalog-rest-connector.md
budget: 5 min
beats: 5
---

# Present: Give the Canteen Agent Live Stock from a REST API

**Guide:** [Give the Canteen Agent Live Stock from a REST API](demo-food-catalog-rest-connector.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · the food catalog API from [src/food-catalog-mcp](../../../src/food-catalog-mcp/) must be reachable over HTTPS

**Agent:** CS-Food Stock Buddy as [Calculate the Canteen Order with a Prompt](../01-prompts/demo-food-order-prompt.md) left it; the connector comes from the [Food Inventory REST clone](../../../src/cs-schema/agents/Food%20Inventory%20REST/); the finished rebuild is [CS-Food Stock Buddy](../../../src/cs-schema/cs-agents/CS-Food%20Stock%20Buddy/)

**Initial prompt** (put your API host into [cs-food-catalog.json](demo-food-catalog-rest-connector/cs-food-catalog.json) first; sent in Exercise 3, after the three tools are connected):

```text
What do we have in stock, and how far is each dish above its minimum stock?
```

### Beat 1: An OpenAPI file becomes a connector (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Tools** > **Add a tool** > **See more** > **Add new REST API** > **Browse API specification** · **Authentication** > **None** · [Exercise 1](demo-food-catalog-rest-connector.md#exercise-1-create-cs-food-catalog-from-the-openapi-file)
**What is there:** **Select and configure your tool** lists seven operations, from Gets all food to Update food stock quantity.

### Beat 2: Only three operations become tools (1 min)

**Navigate:** **Gets all food**, **Add food**, **Update food stock quantity** > **Configure your tool** > **Review your tool's parameters** · [Exercise 2](demo-food-catalog-rest-connector.md#exercise-2-turn-three-operations-into-cs--tools)
**What is there:** **Review your tool** shows CS-Food Catalog with three tools; "Your tool is now published" and **Create connection**.

### Beat 3: One connection, live stock (1 min)

**Navigate:** **Create connection** > **REST API** > **Create new connection** > **Add and configure** · **Tools** · test panel · [Exercise 3](demo-food-catalog-rest-connector.md#exercise-3-connect-the-tools-and-read-the-live-stock)
**What is there:** one call to CS-Gets all food and no question back; nine dishes, Wiener Schnitzel at 30 against a minimum of 6.

### Beat 4: Live stock replaces the sample table (1 min)

**Navigate:** **Topics** > Calculate order quantity > Set sample stock > **…** > **Delete** · **Add node** > **Add a tool** > **Tool** > CS-Gets all food · **More** > **Open code editor** · [Exercise 4](demo-food-catalog-rest-connector.md#exercise-4-feed-the-order-calculation-with-live-stock)
**What is there:** CS-Gets all food runs inside the topic before the Calculate food to order prompt; the reply starts with "Based on our current stock we have to order:".

### Beat 5: The orchestrator chains lookup and update (1 min)

**Navigate:** test panel > activity map · [Exercise 5](demo-food-catalog-rest-connector.md#exercise-5-book-a-delivery-and-add-a-dish)
**What is there:** CS-Gets all food, then CS-Update food stock quantity with amount 12 (Schweinshaxe mit Kraut at 24); -2 for Pad Ka Prao (18 to 16); CS-Add food once, ten dishes with Apfelstrudel at 15.
