---
presents: demo-trigger-an-autonomous-agent.md
budget: 4 min
beats: 4
---

# Present: Trigger an Autonomous Agent from a SharePoint List

**Guide:** [Trigger an Autonomous Agent from a SharePoint List](demo-trigger-an-autonomous-agent.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · create the Help Desk Requests list before the session

**Agent:** Grey Logistics IT Help Desk, a Standard agent with generative orchestration

**Initial prompt** (attach nothing; Exercise 1 sets the instructions and the tool, this is the trigger's payload instruction in Exercise 2):

```text
Use content from Body. This is a new item in the Help Desk Requests list. Decide its priority, write a triage note of at most two sentences that names the likely cause and the next step, then call Update help desk request with the item's ID and title, the priority and the triage note.
```

### Beat 1: Boundaries in instructions, a tool on maker credentials (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Overview** > **Instructions** · **Tools** > **Add a tool** > **Connector** > SharePoint > **Update item** > **Add and configure** · **Additional details** > **Credentials to use** > **Maker-provided credentials** · [Exercise 1](demo-trigger-an-autonomous-agent.md#exercise-1-set-boundaries-and-a-tool-that-works-without-a-user)
**What is there:** Update help desk request on the **Tools** page, its details showing **Maker-provided credentials**.

### Beat 2: A trigger with its own payload instruction (1 min)

**Navigate:** **Triggers** > **Add trigger** > **When an item is created** > **Next** > **Create trigger** · [Exercise 2](demo-trigger-an-autonomous-agent.md#exercise-2-add-the-event-trigger-and-its-payload-instruction)
**What is there:** the dialog inviting you to test the trigger; New help desk request in the **Triggers** section.

### Beat 3: A real event replayed, the plan in the map (1 min)

**Navigate:** SharePoint list > new item · test trigger icon > instance > **Start testing** · map icon · [Exercise 3](demo-trigger-an-autonomous-agent.md#exercise-3-replay-a-real-event-and-read-the-plan)
**What is there:** the trigger payload, then Update help desk request with the item ID, `P1` and a two-sentence note; the item shows P1 in **Priority** and the note in **Triage note**.

### Beat 4: Behind every trigger is a flow (1 min)

**Navigate:** trigger > **…** > **Edit in Power Automate** · **Publish** · **Activity** · [Exercise 4](demo-trigger-an-autonomous-agent.md#exercise-4-look-behind-the-trigger-and-publish-it)
**What is there:** the SharePoint trigger followed by **Sends a prompt to the specified copilot for processing**; publish warnings about author credentials and embedded connections; an automated run on **Activity**.
