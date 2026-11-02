---
presents: demo-connect-a-foundry-agent.md
budget: 4 min
beats: 4
---

# Present: Connect a Foundry Agent to the Help Desk

**Guide:** [Connect a Foundry Agent to the Help Desk](demo-connect-a-foundry-agent.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) and [Microsoft Foundry](https://ai.azure.com) · run `az login` to the Foundry tenant before the session

**Agent:** Grey Logistics IT Help Desk, connecting grey-logistics-device-specialist from [Create a Device Specialist Agent in Microsoft Foundry](../04-foundry-agents/demo-create-a-foundry-agent.md)

**Initial prompt** (attach nothing; Exercises 1 and 2 prepare the endpoint and the connection, this is sent in Exercise 3):

```text
The battery on my work laptop is bulging. What do I do, and is a laptop I got four years ago still covered?
```

### Beat 1: The Activity Protocol opens the endpoint to Copilot Studio (1 min)

**Navigate:** terminal > `activity.json` > `az rest --method patch`, then `--method get` · [Exercise 1](demo-connect-a-foundry-agent.md#exercise-1-open-the-specialists-endpoint-to-copilot-studio)
**What is there:** `activity`, `responses` and `a2a` under `protocol_configuration`, `Entra` and `BotServiceRbac` under `authorization_schemes`, and the agent's `id`.

### Beat 2: The specialist on the help desk's Agents page (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Agents** > **Add an agent** > **Connect to an external agent** > **Microsoft Foundry** > **Add Agent** · [Exercise 2](demo-connect-a-foundry-agent.md#exercise-2-connect-the-specialist-to-the-help-desk)
**What is there:** Grey Logistics Device Specialist on the **Agents** page with **Enabled** on.

### Beat 3: Device questions reach the specialist, others do not (1 min)

**Navigate:** test pane > map icon · [Exercise 3](demo-connect-a-foundry-agent.md#exercise-3-route-a-device-question-and-a-non-device-question)
**What is there:** a Grey Logistics Device Specialist node, the advice to stop, unplug and hand it in today, and that the 3-year warranty has run out; the Outlook question runs without the specialist node.

### Beat 4: A rule changed in Foundry reaches the help desk (1 min)

**Navigate:** [Microsoft Foundry](https://ai.azure.com) > specialist > **Instructions** > save > **Publish** > version selector · Copilot Studio > new test conversation · [Exercise 4](demo-connect-a-foundry-agent.md#exercise-4-change-a-rule-in-foundry-and-see-it-reach-the-help-desk)
**What is there:** before, no phone models on record; after the new pin, the iPhone 16 and the Samsung Galaxy S25 with the 3-year cycle, nothing changed in Copilot Studio.
