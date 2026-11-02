---
presents: demo-business-travel-planner.md
budget: 5 min
beats: 5
---

# Present: Connect Your Travel Specialists Behind One Front Door

**Guide:** [Connect Your Travel Specialists Behind One Front Door](demo-business-travel-planner.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · the three specialists from modules 03 and 04 must exist in the same environment

**Agent:** CS-Business Travel Planner, created blank in Exercise 1 from the original [Business Travel Planner](../../../src/cs-schema/agents/Business%20Travel%20Planner/); it connects CS-Travel Agent, CS-Health Advisor and CS-Travel Expense Refund; the finished rebuild is [CS-Business Travel Planner](../../../src/cs-schema/cs-agents/CS-Business%20Travel%20Planner/)

**Initial prompt** (attach nothing; the first of the five route tests in Exercise 6):

```text
I need to get from Vienna to Budapest on May 12 for two colleagues. Can you book it, and what can we see there in the evening?
```

### Beat 1: One front door, specialists published to connect (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **…** > **Open classic experience** > **Agents** > **Create blank agent** · each specialist > **Settings** > **Generative AI** > **Connected agents** > **Publish** · [Exercise 1](demo-business-travel-planner.md#exercise-1-create-cs-business-travel-planner) · [Exercise 2](demo-business-travel-planner.md#exercise-2-make-the-three-specialists-connectable)
**What is there:** CS-Business Travel Planner with its description and GPT-5 Chat; the three specialists with a fresh publish time and **Let other agents connect to and use this one** on.

### Beat 2: Descriptions decide the route (1 min)

**Navigate:** **Agents** > **Add an agent** > **Connect to an external agent** > **Copilot Studio** · [Exercise 3](demo-business-travel-planner.md#exercise-3-connect-the-specialists-with-routing-descriptions)
**What is there:** the **Agents** page lists CS-Travel Agent, CS-Health Advisor and CS-Travel Expense Refund, each with **Enabled** on.

### Beat 3: A child agent with knowledge no one else sees (1 min)

**Navigate:** **Agents** > **Add** > **New child agent** · **Knowledge** > **Add** > SharePoint · [Exercise 4](demo-business-travel-planner.md#exercise-4-add-the-gym-benefits-child-agent)
**What is there:** Work life balance Buddy next to the three connected agents, the gym document under its **Knowledge**.

### Beat 4: Instructions name a specialist per request (1 min)

**Navigate:** **Overview** > **Instructions** > **Edit** > **/** > agent > **Save** · [Exercise 5](demo-business-travel-planner.md#exercise-5-write-the-routing-instructions)
**What is there:** the **Instructions** section shows the four agent names as references, not plain text.

### Beat 5: Every route proven in the activity map (1 min)

**Navigate:** **Test your agent** > **…** > **Show activity map when testing** · [Exercise 6](demo-business-travel-planner.md#exercise-6-prove-every-route-in-the-activity-map)
**What is there:** booking in CS-Travel Agent (Book Trip), health in CS-Health Advisor, the €30 allowance in CS-Travel Expense Refund, the gym in Work life balance Buddy, and no agent node for the canteen question.
