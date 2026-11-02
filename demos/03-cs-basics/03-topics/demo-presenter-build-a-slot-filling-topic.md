---
presents: demo-build-a-slot-filling-topic.md
budget: 5 min
beats: 4
---

# Present: Build a Device Issue Topic with Custom Entities

**Guide:** [Build a Device Issue Topic with Custom Entities](demo-build-a-slot-filling-topic.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · each beat links the exercise holding its prompt

**Agent:** Grey Logistics IT Help Desk from [Create a Standard IT Help Desk Agent](../01-standard-agents/demo-create-a-standard-agent.md), switched to classic orchestration (**Settings** > **Generative AI** > orchestration **No**)

**Initial prompt** (attach nothing; sent in Exercise 4, after the two entities and the topic exist):

```text
My notebook CT-104233 has a cracked screen
```

### Beat 1: Entities turn free text into clean values (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Settings** > **Entities** > **Add an entity** > **New entity** > **Closed list**, then **Regular expression (regex)** · [Exercise 1](demo-build-a-slot-filling-topic.md#exercise-1-create-the-device-type-closed-list-entity) · [Exercise 2](demo-build-a-slot-filling-topic.md#exercise-2-create-the-asset-tag-regular-expression-entity)
**What is there:** the **Entities** list with Device type (five values, synonyms, **Smart matching** on) and Asset tag next to it.

### Beat 2: Each question is bound to an entity (1 min)

**Navigate:** **Topics** > **Add a topic** > **From blank** · **Trigger** > **…** > **Properties** > **Phrases** · [Exercise 3](demo-build-a-slot-filling-topic.md#exercise-3-build-the-report-a-device-issue-topic)
**What is there:** the **Trigger** node, three **Question** nodes with Device type, Asset tag and Email under **Identify**, and the **Message** node with three inserted variables.

### Beat 3: One message fills two questions (1.5 min)

**Navigate:** **Variables** > **Test** · **Test your agent** > new conversation > tracking between topics · [Exercise 4](demo-build-a-slot-filling-topic.md#exercise-4-watch-proactive-slot-filling-fill-two-answers-at-once)
**What is there:** the tracking view jumps straight to the email question; the **Test** tab shows `deviceType` laptop and `assetTag` CT-104233; the recap names all three values.

### Beat 4: One retry, then a default value (1.5 min)

**Navigate:** asset tag **Question** > **…** > **Properties** > **Question behavior** > **Repeat once**, **Entity recognition** > **Set variable to value** · [Exercise 5](demo-build-a-slot-filling-topic.md#exercise-5-decide-what-happens-after-invalid-answers)
**What is there:** the custom retry prompt after the first invalid answer; after the second, the email question and a recap naming asset unknown.
