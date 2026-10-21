# Build an Agent Flow and Call It from an Agent

When a help desk agent logs tickets by improvising each step, two identical requests can end up with different priorities and one of them without a confirmation email. A ticket needs the same rules every time. In this demo you build the ticket-logging sequence once as an agent flow and let the Contoso IT Help Desk agent call it as a tool.

What you practice here: wrapping a fixed business sequence in an agent flow and handing it to the orchestrator as a tool.

Duration: about 30 minutes.

## What you'll build

- An agent flow named Log help desk ticket that starts with the **When an agent calls the flow** trigger and takes two text inputs.
- A **Run a prompt** step that sorts each ticket into priority P1 to P4.
- A confirmation email to the requester and a **Respond to the agent** step that returns the priority.
- The flow attached to the Contoso IT Help Desk agent as a tool, with its call visible in the activity map.

## Prerequisites

- A Copilot Studio environment where you can create agents and agent flows, and an Office 365 Outlook mailbox for the confirmation email.
- A Standard agent named Contoso IT Help Desk: on the Copilot Studio home page open the **New agent** dropdown, select **Agent** with the **Standard** badge under **Other ways to build**, create the agent, keep generative orchestration on (the default for new agents), and paste these instructions on the **Overview** page:

```text
You are the Contoso IT Help Desk. Help employees with IT problems and log tickets for issues you cannot solve in the conversation. Before you log a ticket, make sure you know a short summary of the issue and the requester's email address. After a ticket is logged, tell the user the priority it received.
```

## Exercise 1: Start a flow that an agent can call

The trigger decides who can start the flow and which inputs the caller must provide. An agent can only call flows that start with **When an agent calls the flow**, so this choice is what makes the flow a tool.

1. Go to **Workflows**, open the arrow next to **New workflow** and select **Agent flows**. The designer opens with **Add a trigger**.
2. Add the **When an agent calls the flow** trigger.
3. On the trigger card, select **Add an input**, choose **Text**, and name it `IssueSummary`.
4. Add a second **Text** input named `RequesterEmail`.
5. Rename the flow to `Log help desk ticket` and save it.

Expected: the canvas shows the trigger card with the two inputs `IssueSummary` and `RequesterEmail`, and the flow appears on the **Workflows** page as a draft.

## Exercise 2: Classify, confirm and respond in a fixed order

Here the deterministic sequence takes shape: one bounded model call for the priority, one email, one response. The prompt step sees only the text you place in its instructions, which keeps its job small and predictable.

1. Below the trigger, select **Insert a new action**, open **AI capabilities** and select **Run a prompt**, then create a new prompt.
2. Paste these instructions, then insert the `IssueSummary` dynamic content token at the end:

```text
Classify the priority of this IT help desk ticket. Answer with exactly one value: P1, P2, P3 or P4.
P1: many people cannot work, or a security incident is suspected.
P2: one person cannot work at all.
P3: one person can work with a workaround.
P4: a question, or a request for new equipment or software.
Ticket:
```

3. Save the prompt. Below it, add the Office 365 Outlook action **Send an email (V2)**. Set **To** to the `RequesterEmail` token, the subject to the text below, and the body to the `IssueSummary` token followed by the prompt's text output.

```text
Contoso IT Help Desk: your ticket is logged
```

4. Add the **Respond to the agent** action with one text output named `Priority`, set to the prompt's text output. In its settings, under **Networking**, check that **Asynchronous response** is **Off**.
5. Open **Flow checker**, fix any red cards, then select **Publish**.
6. Select **Test**, choose **Manually**, enter the values below and select **Run flow**.

```text
IssueSummary: The whole finance floor has had no network connection since 9:00.
RequesterEmail: <your own email address>
```

Expected: a green checkmark on every card, `P1` in the output of the **Run a prompt** step, and the confirmation email in your inbox with the ticket text and the priority.

> **Tip:** Test runs from the designer don't consume Copilot Studio capacity, so test as often as you need before you attach the flow to an agent.

## Exercise 3: Hand the flow to the agent as a tool

A published flow with the right trigger and response shows up in the agent's tool picker. Its name and description are now everything the orchestrator knows about it, so the description says what the flow does, which inputs it needs and what it does not do.

1. Open the Contoso IT Help Desk agent and go to the **Tools** page.
2. Select **Add a tool**, select **Flow**, select **Log help desk ticket** and select **Add and configure**.
3. Replace the description with this text and select **Save**:

```text
Logs an IT help desk ticket for an issue the agent could not solve, assigns a priority from P1 to P4 and emails a confirmation to the requester. Needs a short summary of the issue and the requester's email address. Does not answer IT questions or look up existing tickets.
```

Expected: **Log help desk ticket** appears in the agent's list of tools with your description and the two inputs.

## Exercise 4: Log a ticket from a conversation and trace the call

The orchestrator now has to decide on its own that this request needs the flow and fill both inputs from the conversation. The activity map shows whether it did, and with which values.

1. Open the test pane and select the map icon at its top to show the activity map.
2. Send this message:

```text
My laptop won't connect to the VPN, so I can't work at all today. Please log a ticket.
```

3. When the agent asks for your email address, answer with your own address.
4. Send a second request in the same conversation:

```text
Also, could you order me a second monitor?
```

5. Open **Log help desk ticket** on the **Workflows** page and look at the trigger card for the **Express mode** toggle.

Expected: the activity map shows a **Log help desk ticket** node with `IssueSummary` taken from your message, `RequesterEmail` from your answer and `Priority` returned as P2, and the agent tells you the priority. The second request returns P4. A confirmation email arrives for each ticket. The **Express mode** toggle appears on the trigger card when your environment already runs on the new infrastructure; when it is missing, the environment hasn't been upgraded yet.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| The flow isn't listed under **Flow** in **Add a tool** | The trigger isn't **When an agent calls the flow**, the **Respond to the agent** action is missing, or the flow isn't published | Add the missing card, run **Flow checker**, then **Publish** |
| The agent answers the VPN question itself and never calls the flow | Generative orchestration is off, or the tool description doesn't match the request | Check **Settings** > **Generative AI**, then sharpen the description with the words users say |
| The tool call fails with a timeout | The run takes longer than the 100-second limit for a flow used as a tool | Remove slow actions, return less data, or turn on express mode where it's available |
| No confirmation email arrives | The Outlook connection in the flow belongs to another account or isn't authorized | Open the **Send an email (V2)** card and fix the connection, then publish again |

## Summary

You built Log help desk ticket, an agent flow that classifies, confirms and responds in the same order on every run, and gave it to the Contoso IT Help Desk agent as a tool. You can now:

- Build an agent flow with the **When an agent calls the flow** trigger and a **Respond to the agent** action
- Place one bounded model call inside a fixed sequence with **Run a prompt**
- Publish and test a flow before any agent uses it
- Attach a flow as an agent-level tool and verify the call in the activity map

The next topic grounds the same agent in Dataverse tables and lets it write business records: [Dataverse: Knowledge & Business Records](../02-dataverse/readme.md).
