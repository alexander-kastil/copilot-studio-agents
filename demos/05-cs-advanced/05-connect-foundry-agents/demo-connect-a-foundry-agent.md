# Connect a Foundry Agent to the Help Desk

Employees ask the Contoso IT Help Desk about their laptops, but the device rules live with the device team in a Microsoft Foundry agent. Copying those rules into Copilot Studio would leave two versions to keep in sync. In this demo you connect the Contoso Device Specialist from the previous demo to the help desk, route device questions to it, and watch a rule change in Foundry reach the help desk without touching Copilot Studio.

What you practice here: preparing a Foundry agent's endpoint for Copilot Studio, connecting it as an external agent, and proving the route in the activity map.

Duration: about 30 minutes.

## What you'll build

- The Activity Protocol turned on for the `contoso-device-specialist` agent in Microsoft Foundry.
- A connection from the Contoso IT Help Desk to the Foundry project.
- Contoso Device Specialist on the help desk's **Agents** page, with a description the planner routes on.
- A traced device question, a traced non-device question, and a Foundry-side change that reaches the help desk.

## Prerequisites

- The `contoso-device-specialist` prompt agent from [Create a Device Specialist Agent in Microsoft Foundry](../04-foundry-agents/demo-create-a-foundry-agent.md), its project endpoint, and the Azure CLI signed in with `az login` to that tenant.
- A Standard agent (Learn: standard harness) named Contoso IT Help Desk, created from the **New agent** dropdown on the Copilot Studio home page: under **Other ways to build**, select **Agent** with the **Standard** badge. Keep generative orchestration on (the default for new agents).
- A Copilot Studio account that can sign in to the Foundry project with at least the **Foundry Agent Consumer** role.

## Exercise 1: Open the specialist's endpoint to Copilot Studio

Copilot Studio talks to a Foundry agent over the Activity Protocol, which a new agent doesn't have. The Foundry portal can't switch it on yet, so you send one update to the agent with the Azure CLI, keeping the protocols and the Entra authorization it already uses.

1. Save this body as `activity.json` in your working folder:

```json
{
  "agent_endpoint": {
    "protocol_configuration": {
      "responses": {},
      "activity": {},
      "a2a": {}
    },
    "authorization_schemes": [
      { "type": "Entra" },
      { "type": "BotServiceRbac" }
    ]
  }
}
```

2. Run the update, with your project endpoint in place of the placeholder:

```bash
az rest --method patch --resource https://ai.azure.com --headers "Content-Type=application/merge-patch+json" --url "<project-endpoint>/agents/contoso-device-specialist?api-version=v1" --body @activity.json
```

3. Read the agent back and note its `id`:

```bash
az rest --method get --resource https://ai.azure.com --url "<project-endpoint>/agents/contoso-device-specialist?api-version=v1"
```

Expected: the returned JSON lists `activity`, `responses` and `a2a` under `protocol_configuration` and both `Entra` and `BotServiceRbac` under `authorization_schemes`, and it carries the agent's `id`. In the Foundry portal the agent's **Endpoints** still show only **Responses** and **A2A**, which Learn describes as expected.

> **Warning:** The update replaces the whole protocol and authorization lists. Leaving out `responses` or `Entra` breaks chatting with the agent in the Foundry portal and from code.

## Exercise 2: Connect the specialist to the help desk

The connection tells Copilot Studio which Foundry project to reach, and the agent entry tells the planner what the specialist is for. The description you write here is the one the help desk's orchestrator reads.

1. Open Contoso IT Help Desk, go to the **Agents** page and select **Add an agent**.
2. Under **Connect to an external agent**, select **Microsoft Foundry**.
3. Create a new connection with your Foundry project endpoint, sign in when asked, and select **Next**.
4. Enter `Contoso Device Specialist` as the **Name**, paste this **Description**, and enter the `id` from Exercise 1 as the **Agent Id**:

```text
Answers questions about Contoso company laptops, docking stations and phones: standard models, warranty, replacement, loaner devices, battery safety and lost or stolen devices. Does not handle accounts, passwords or software licenses.
```

5. Select **Add Agent**.

Expected: Contoso Device Specialist appears on the help desk's **Agents** page next to any child or connected agents, with its **Enabled** toggle on.

## Exercise 3: Route a device question and a non-device question

The planner should send device questions to the specialist and keep everything else away from it. The activity map shows which agent each question reached.

1. Open the test pane, select the map icon, and send:

```text
The battery on my work laptop is bulging. What do I do, and is a laptop I got four years ago still covered?
```

2. In a new test conversation, send:

```text
How do I share my calendar with a colleague in Outlook?
```

Expected: the first question shows a Contoso Device Specialist node in the activity map, and the reply tells the user to stop using and unplug the laptop, hand it in today, and that the 3-year laptop warranty has run out. The second question runs without a Contoso Device Specialist node, and the help desk answers on its own.

> **Tip:** If the first call fails with an HTTP 400 error saying the agent endpoint doesn't support activity, rerun Exercise 1 and check the `protocol_configuration` in the response.

## Exercise 4: Change a rule in Foundry and see it reach the help desk

The device team owns the rules, so a change on their side must reach the help desk without a maker publishing anything. Because the previous demo pinned a version, the change only arrives once the team moves the pin.

1. In Copilot Studio, start a new test conversation and send:

```text
Which phone can I get as a Contoso employee?
```

2. In the Foundry portal, add this line to the specialist's instructions and save the agent:

```text
Phones: employees choose between an iPhone 16 and a Samsung Galaxy S25. Phones are replaced every 3 years.
```

3. Expand the **Publish** dropdown, open the version selector and choose the version you just created.
4. In Copilot Studio, start a new test conversation and send the phone question again.

Expected: before the change, the reply says the specialist has no phone models on record. After you pin the new version, the same question returns the iPhone 16 and the Samsung Galaxy S25 with the 3-year cycle, and nothing changed in Copilot Studio.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Calls fail with HTTP 400 about activity | The Activity Protocol isn't on the agent endpoint | Run the update from Exercise 1 and verify `protocol_configuration` |
| Adding the agent fails with `404 - Version not found` | The agent was created in the previous Foundry portal | Recreate it in the current portal with the **New Foundry** toggle on |
| The update or the call returns 403 Forbidden | The signed-in account lacks a Foundry role on the project | Ask the project owner for **Foundry User**, or **Foundry Agent Consumer** to only call the agent |
| Device questions never reach the specialist | The description overlaps another tool or agent, or generative orchestration is off | Sharpen the description and check **Settings** > **Generative AI** |

## Summary

You connected a Microsoft Foundry agent to a Standard Copilot Studio agent and kept each team in charge of its own part. You can now:

- Turn on the Activity Protocol for a Foundry agent with a single REST update
- Connect a Foundry agent on the **Agents** page with a project endpoint and an agent ID
- Prove in the activity map which questions reach the specialist and which don't
- Explain how version pinning in Foundry controls what the help desk receives

The optional voice topic takes the help desk to the phone: [Voice Agents: IVR & Post-Call](../06-voice/readme.md).
