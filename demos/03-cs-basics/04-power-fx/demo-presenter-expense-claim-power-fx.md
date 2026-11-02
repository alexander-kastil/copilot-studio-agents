---
presents: demo-expense-claim-power-fx.md
budget: 5 min
beats: 4
---

# Present: Prepare a Travel Expense Claim with Power Fx

**Guide:** [Prepare a Travel Expense Claim with Power Fx](demo-expense-claim-power-fx.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · each beat links the exercise holding its prompt

**Agent:** CS-Travel Expense Refund, created blank in Exercise 1 from the original [Travel Expense Refund](../../../src/cs-schema/agents/Travel%20Expense%20Refund/); the finished rebuild is [CS-Travel Expense Refund](../../../src/cs-schema/cs-agents/CS-Travel%20Expense%20Refund/)

**Initial prompt** (attach nothing; sent in the test panel at the end of Exercise 1):

```text
Which costs count as travel expenses on a business trip in Austria?
```

### Beat 1: A one-job agent with one official source (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **…** > **Open classic experience** > **Agents** > **Create blank agent** · **Knowledge** > **Add knowledge** > **Public websites** · [WKO business travel page](https://www.wko.at/lohnverrechnung/lohnsteuerliche-behandlung-dienstreisen) · [Exercise 1](demo-expense-claim-power-fx.md#exercise-1-create-cs-travel-expense-refund)
**What is there:** the **Overview** page with description and instructions, the WKO source under **Knowledge**; the test answer summarizes the WKO rules and cites the page.

### Beat 2: Card inputs become topic variables (1 min)

**Navigate:** **Topics** > **Add a topic** > **From blank** · **Add node** > **Ask with Adaptive Card** > **…** > **Properties** > **Edit adaptive card** · [Exercise 2](demo-expense-claim-power-fx.md#exercise-2-add-the-claim-card-topic)
**What is there:** a preview of the Expense Claim card; the outputs `actionSubmitId`, `amount`, `comment`, `departureDate`, `destination`, `email` and `returnDate`.

### Beat 3: Formulas derive what the card cannot give (1 min)

**Navigate:** **Add node** > **Variable management** > **Set a variable value** > **>** > **Formula** · [Exercise 3](demo-expense-claim-power-fx.md#exercise-3-give-every-claim-its-own-id) · [Exercise 4](demo-expense-claim-power-fx.md#exercise-4-turn-the-card-dates-into-timestamps)
**What is there:** three **Set variable value** nodes under the card, in the order `claimID`, `departureDateIso`, `returnDateIso`.

### Beat 4: The Test tab proves each formula ran (2 min)

**Navigate:** **Variables** > **Test** · **Test your agent** > new conversation > **Submit Claim** · [Exercise 5](demo-expense-claim-power-fx.md#exercise-5-recap-the-claim-and-watch-the-formulas-run)
**What is there:** `claimID` as a 36-character ID, `departureDateIso` `2026-11-03T00:00:00Z`, `returnDateIso` `2026-11-05T00:00:00Z`, the same values in the recap; a second run gets a different `claimID`.
