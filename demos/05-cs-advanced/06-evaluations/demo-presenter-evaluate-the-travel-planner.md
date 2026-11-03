---
presents: demo-evaluate-the-travel-planner.md
budget: 4 min
beats: 4
---

# Present: Find the Wrong Answer Behind a Passing Score

**Guide:** [Find the Wrong Answer Behind a Passing Score](demo-evaluate-the-travel-planner.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · each beat links the exercise holding its step

**Agent:** CS-Business Travel Planner from [Connect Your Travel Specialists Behind One Front Door](../03-multi-agent/demo-business-travel-planner.md), with its three connected agents published and **Web Search** on

**Initial prompt** (upload [travel-planner-test-set.csv](demo-evaluate-the-travel-planner/travel-planner-test-set.csv) in Exercise 1; nothing is typed, this is the first of its seven questions):

```text
I need to get from Vienna to Budapest on May 12 for two colleagues. Can you book it, and what can we see there in the evening?
```

### Beat 1: A test set graded two ways (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > CS-Business Travel Planner > **Evaluation** > **Create a test set** · **Add test method** > **Meaning match** > **OK** · [Exercise 1](demo-evaluate-the-travel-planner.md#exercise-1-import-the-routing-test-set) · [Exercise 2](demo-evaluate-the-travel-planner.md#exercise-2-grade-every-answer-two-ways)
**What is there:** "Your file was uploaded successfully." and **Review your test cases (7)**; **Answer quality** and **Meaning match** with the tag **Pass score 50**.

### Beat 2: The run needs an account that reaches every source (1 min)

**Navigate:** **User profile** > **Manage** > **Connections** > **Microsoft Teams** > **Save** > **Run** · [Exercise 3](demo-evaluate-the-travel-planner.md#exercise-3-run-it-under-your-own-profile)
**What is there:** the run Travel planner routing plus a date stamp; the **Evaluation summary** with a bar per method, 86% and 71% in the live run.

### Beat 3: Each case shows its route and why it failed (1 min)

**Navigate:** case > **Results** > **Details** > map icon · [Exercise 4](demo-evaluate-the-travel-planner.md#exercise-4-read-the-route-and-the-verdict-of-every-case)
**What is there:** every specialist case names its agent; the canteen case lists none and answered from public web pages (**Meaning match** **Fail • 0**); the refund case shows the **Expense Claim** card and "Not answered".

### Beat 4: Rerun before and after one fix (1 min)

**Navigate:** run icon > **Run** · **Overview** > **Web Search** > **Disabled** · **Evaluation** > two more runs · [Exercise 5](demo-evaluate-the-travel-planner.md#exercise-5-run-it-again-before-you-change-anything) · [Exercise 6](demo-evaluate-the-travel-planner.md#exercise-6-fix-the-agent-with-one-change-then-prove-it)
**What is there:** the unchanged rerun flips the canteen case (71% and 86%); after the fix it reads "I couldn't find a published company canteen menu..." with **Meaning match** **Pass • 100** in both runs and no public web pages.
