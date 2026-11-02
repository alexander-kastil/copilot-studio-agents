---
presents: demo-collect-input-with-a-card.md
budget: 5 min
beats: 4
---

# Present: Collect a Software Request with an Adaptive Card

**Guide:** [Collect a Software Request with an Adaptive Card](demo-collect-input-with-a-card.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · each beat links the exercise holding its prompt

**Agent:** Grey Logistics IT Help Desk from [Create a Standard IT Help Desk Agent](../01-standard-agents/demo-create-a-standard-agent.md), either orchestration mode

**Initial prompt** (attach nothing; sent in Exercise 3, after the card topic is built):

```text
I need to request software
```

### Beat 1: The card's JSON is the contract (1.5 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Topics** > **Add a topic** > **From blank** · **Add node** > **Ask with Adaptive Card** > **…** > **Properties** > **Edit adaptive card** · **Edit Schema** · [Exercise 1](demo-collect-input-with-a-card.md#exercise-1-build-the-card-from-json) · [Exercise 2](demo-collect-input-with-a-card.md#exercise-2-check-the-variables-the-card-returns)
**What is there:** a card preview with a dropdown, a date field, a multiline text box and **Submit request**; outputs `software`, `neededBy` and `justification`.

### Beat 2: The card checks its own fields (1 min)

**Navigate:** **Message** > **{x}** · **Test your agent** > new conversation · [Exercise 3](demo-collect-input-with-a-card.md#exercise-3-confirm-the-submission-in-a-message)
**What is there:** an empty date shows the card's error under the date field and sends nothing; the full submit returns the confirmation with product, date and justification.

### Beat 3: Power Fx personalizes the card (1 min)

**Navigate:** card node > **Properties** > **Formula** · [Exercise 4](demo-collect-input-with-a-card.md#exercise-4-personalize-the-card-with-power-fx)
**What is there:** the card heading greets you by your display name; the card and the confirmation otherwise unchanged.

### Beat 4: A user types while the card waits (1.5 min)

**Navigate:** card node > **Properties** > **How many reprompts** > **Repeat once**, **Retry prompt** > **Customize** · [Exercise 5](demo-collect-input-with-a-card.md#exercise-5-handle-a-user-who-types-while-the-card-waits)
**What is there:** "asdf" brings back the retry prompt with the card; the OneDrive question switches to another topic or knowledge, then the card is sent again.
