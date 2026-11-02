---
presents: demo-create-a-foundry-agent.md
budget: 4 min
beats: 4
---

# Present: Create a Device Specialist Agent in Microsoft Foundry

**Guide:** [Create a Device Specialist Agent in Microsoft Foundry](demo-create-a-foundry-agent.md) · runs in [Microsoft Foundry](https://ai.azure.com) with the **New Foundry** toggle on · deploy gpt-5-mini and run `az login` before the session

**Agent:** grey-logistics-device-specialist, a Foundry prompt agent on gpt-5-mini this demo creates; [Connect a Foundry Agent to the Help Desk](../05-connect-foundry-agents/demo-connect-a-foundry-agent.md) later connects it to Grey Logistics IT Help Desk

**Initial prompt** (attach nothing; sent in the playground in Exercise 2, after the instructions are saved):

```text
The battery of my Surface Laptop 7 is bulging. What should I do?
```

### Beat 1: A prompt agent is pure configuration (1 min)

**Navigate:** [Microsoft Foundry](https://ai.azure.com) > **Build** > **New agent** > **Build an agent** > **Create** · **Model** · **Instructions** · [Exercise 1](demo-create-a-foundry-agent.md#exercise-1-create-the-specialist-from-a-model-and-instructions)
**What is there:** the **Playground** tab with model and instructions on the left and an empty chat on the right; the agent in the **Build** list.

### Beat 2: Rules, history and the boundary in the playground (1 min)

**Navigate:** **Playground** > chat · [Exercise 2](demo-create-a-foundry-agent.md#exercise-2-test-the-rules-and-the-boundary-in-the-playground)
**What is there:** stop, unplug and bring it to the IT desk today; the follow-up confirms the 3-year laptop warranty without asking which device; the password question gets one sentence that it is out of scope.

### Beat 3: Every save is a version, the pin decides what callers get (1 min)

**Navigate:** **Instructions** > save · **Publish** > version selector · [Exercise 3](demo-create-a-foundry-agent.md#exercise-3-change-the-agent-and-pin-a-version)
**What is there:** the 10-business-day loaner answer; **Publish** lists the endpoints and the selected version at 100 percent of the traffic.

### Beat 4: The endpoint answers outside the portal (1 min)

**Navigate:** project welcome screen > project endpoint · terminal > `az rest` with `request.json` · [Exercise 4](demo-create-a-foundry-agent.md#exercise-4-call-the-agents-endpoint-from-outside-the-portal)
**What is there:** a JSON response naming the Dell Precision 5690 and the 4-year replacement cycle, signed with your Microsoft Entra token and no API key.
