---
presents: demo-computer-use.md
budget: 4 min
beats: 4
---

# Present: Read and Fill a Legacy Web App with Computer Use

**Guide:** [Read and Fill a Legacy Web App with Computer Use](demo-computer-use.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · open both sample apps once before the session

**Agent:** CS-Grey Logistics IT Help Desk, a Standard agent with generative orchestration and a hosted browser or a machine enabled for computer use

**Initial prompt** (attach nothing; paste it into the computer use tool's **Instructions** in Exercise 1):

```text
1. Go to https://computerusedemos.blob.core.windows.net/web/Portfolio/index.html.
2. Find the row for Fourth Coffee and record the Manager name and the Portfolio Value exactly as shown.
3. Return those two values as the final output.
```

### Beat 1: A screen task described like to a colleague (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Tools** > **Add a tool** > **Add new Computer use** > **Add and configure** · **Machines** > **Hosted browser** · **Test directly** · [Portfolio dashboard](https://computerusedemos.blob.core.windows.net/web/Portfolio/index.html) · [Exercise 1](demo-computer-use.md#exercise-1-extract-values-from-a-web-app)
**What is there:** the **Test** window with the model's reasoning messages, the **Preview** tab scrolling the dashboard to the Fourth Coffee row, and the status **Finished**.

### Beat 2: An input and a fence around one site (1 min)

**Navigate:** **Inputs** > **Add input** · **Allowed websites and desktop apps** > **Only allow specific websites and desktop apps** > **Add** · **Test directly** · [Exercise 2](demo-computer-use.md#exercise-2-make-the-client-an-input) · [Exercise 3](demo-computer-use.md#exercise-3-fence-the-tool-to-one-site)
**What is there:** `Manager: Niklas Gasper, Value: $95,000,000` for Northwind Traders; the allow list with computerusedemos.blob.core.windows.net and Microsoft Edge, the Fourth Coffee run still succeeding.

### Beat 3: The orchestrator calls the tool from chat (1 min)

**Navigate:** **Test** > **Start new test session** · **Activity** > newest session > **View** > **Map view** · [Exercise 4](demo-computer-use.md#exercise-4-let-the-agent-call-the-tool-from-chat)
**What is there:** reasoning messages with a screenshot per step, then "Fourth Coffee's portfolio is managed by Yhlas Geldiyew and is worth $190,000,000."; an **ExecuteCUA** node with **Session replay** in the map.

### Beat 4: A second tool types records into a form (1 min)

**Navigate:** **Tools** > **Add a tool** > **Add new Computer use** > **Add and configure** · **Test directly** · [Inventory form](https://computerusedemos.blob.core.windows.net/web/Adventure/index.html) · [Exercise 5](demo-computer-use.md#exercise-5-enter-records-with-a-second-tool)
**What is there:** the five fields filled twice; Pedal Set and Rear Derailleur under **Inventory Items** with IDs, quantities, prices, suppliers and an **Added** time.
