# Create a Device Specialist Agent in Microsoft Foundry

![Inside a Foundry project, grey-logistics-device-specialist is built from gpt-5-mini and device instructions, tested in the Playground, and Version 2 is pinned to 100 percent of traffic; outside the portal, az rest with a Microsoft Entra token calls the endpoint and gets back the Dell Precision 5690, replaced every 4 years.](./_images/create-a-foundry-agent-overview.svg)

The Grey Logistics IT team gets the same device questions every day: which laptop a new hire receives, whether a broken docking station is still under warranty, what to do with a swollen battery. The help desk agent in Copilot Studio shouldn't own those rules, because the device team changes them and wants to manage them in one place. In this demo you build that specialist as a prompt agent in Microsoft Foundry, test it, pin a version, and call its endpoint the way other services will.

What you practice here: defining a Foundry prompt agent from a model and instructions, and reading the version and endpoint that make it callable from outside the portal.

Duration: about 30 minutes.

## What you'll build

- A prompt agent named `grey-logistics-device-specialist` in a Foundry project, running on a deployed gpt-5-mini model.
- Instructions that hold the device rules and keep the agent to its domain.
- A tested conversation in the playground, including a follow-up that relies on conversation history.
- A pinned agent version and a response from the agent's endpoint, called with the Azure CLI.

## Prerequisites

- An Azure subscription and a Foundry project in the Foundry portal at `ai.azure.com` with the **New Foundry** toggle on, and the **Foundry User** role on the project.
- A gpt-5-mini deployment in the project: on **Build** > **Models**, select **Deploy** > **Deploy a base model**, search for gpt-5-mini and deploy it with **Default settings**.
- The Azure CLI, signed in with `az login` to the tenant of the Foundry project.

## Exercise 1: Create the specialist from a model and instructions

A prompt agent is pure configuration: a model, instructions and optional tools. The name you give it now is permanent and becomes part of the agent's endpoint, so pick it once.

1. In your project, select **Build**, select the arrow next to **New agent**, and select **Build an agent**.
2. In **Agent name**, enter `grey-logistics-device-specialist` and select **Create**. The agent opens on the **Playground** tab.
3. In the **Model** section, select your gpt-5-mini deployment.
4. In the **Instructions** section, paste this text and save the agent:

```text
You are the Grey Logistics Device Specialist. You answer questions about Grey Logistics company laptops, docking stations and phones.
Standard laptops: Surface Laptop 7 for office staff, Dell Precision 5690 for engineering. Laptops are replaced every 4 years.
Warranty: 3 years on laptops, 2 years on docking stations and phones. A broken device under warranty is replaced within 2 business days.
Battery: a swollen or bulging battery is a safety risk. Tell the user to stop using the device, unplug it immediately and hand it in at the IT desk the same day.
Lost or stolen device: report it within 24 hours so IT can wipe it remotely.
Only answer device questions. For anything else, say in one sentence that it is outside your scope.
```

Expected: the **Playground** tab shows the model and your instructions in the left pane and an empty chat in the right pane, and the agent appears in the agent list on **Build**.

## Exercise 2: Test the rules and the boundary in the playground

The playground runs the agent against a conversation, so each turn sees the earlier ones. Testing a follow-up proves the history works, and testing an off-topic question proves the boundary in the instructions.

1. In the playground chat, send:

```text
The battery of my Surface Laptop 7 is bulging. What should I do?
```

2. Send a follow-up that only makes sense with the earlier turn:

```text
And is it still under warranty if I got it 30 months ago?
```

3. Send a question outside the device domain:

```text
How do I reset my Teams password?
```

Expected: the first answer tells you to stop using the laptop, unplug it and bring it to the IT desk today. The follow-up confirms the 3-year laptop warranty and replacement within 2 business days without asking which device you meant. The password question gets a one-sentence reply that it is outside the specialist's scope.

## Exercise 3: Change the agent and pin a version

Every saved change creates a new immutable version, and by default the endpoint serves the latest one. Pinning a version decides what callers such as Copilot Studio receive while you keep editing.

1. Add this line to the end of the instructions and save the agent:

```text
Loaner laptops: available from the IT desk for up to 10 business days while a device is repaired.
```

2. Ask in the playground:

```text
Can I get a loaner while my laptop is repaired?
```

3. Expand the **Publish** dropdown to see the endpoint configuration, select the version selector arrow, and choose the latest version.

Expected: the answer mentions the 10-business-day loaner. The **Publish** dropdown lists the agent's endpoints and shows the version you selected as the one that receives 100 percent of the traffic, so later edits no longer change what callers get until you select a new version.

> **Note:** The endpoints are live from the moment you create the agent. Pinning changes which version they serve; it doesn't publish anything to users.

## Exercise 4: Call the agent's endpoint from outside the portal

Copilot Studio, applications and other agents never open the playground; they call the agent's stable endpoint with a protocol it supports. A call to the Responses protocol from the command line shows the endpoint, the Microsoft Entra sign-in it requires, and the same answer the playground gave.

1. On the project's welcome screen, copy the project endpoint. It has the form `https://<resource>.services.ai.azure.com/api/projects/<project>`.
2. Save this request body as `request.json` in your working folder:

```json
{
  "input": [
    { "role": "user", "content": "Which laptop does a new engineer receive, and when is it replaced?" }
  ]
}
```

3. Run this command, with your project endpoint in place of the placeholder:

```bash
az rest --method post --resource https://ai.azure.com --url "<project-endpoint>/agents/grey-logistics-device-specialist/endpoint/protocols/openai/responses?api-version=v1" --body @request.json
```

Expected: the command returns a JSON response whose output text names the Dell Precision 5690 and the 4-year replacement cycle. The request needed no API key: the Azure CLI signed it with your Microsoft Entra token, which works because your account holds a Foundry role on the project.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| **Build an agent** or the **Playground** tab looks different | The portal is in the classic Foundry view | Turn on the **New Foundry** toggle and open the project again |
| No model to select in the **Model** section | No model is deployed in the project | Deploy gpt-5-mini from **Build** > **Models** |
| The CLI call returns 403 Forbidden | Your account lacks a Foundry role on the project | Ask the project owner for **Foundry User**, or **Foundry Agent Consumer** to only call agents |
| The CLI call returns 401 Unauthorized | The token is for the wrong resource or expired | Keep `--resource https://ai.azure.com` in the command and run `az login` again |

## Summary

You built the Grey Logistics Device Specialist as a Microsoft Foundry prompt agent and called it the way other services will. You can now:

- Create a prompt agent from a deployed model and instructions in the Foundry portal
- Test answers, conversation history and scope boundaries in the playground
- Explain how versions and the stable endpoint relate, and pin the version callers receive
- Call an agent's Responses endpoint with Microsoft Entra authentication

The next topic connects this specialist to the Grey Logistics IT Help Desk in Copilot Studio: [Foundry Agents in Copilot Studio](../05-connect-foundry-agents/readme.md).
