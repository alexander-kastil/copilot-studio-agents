# Guard the HR Agent with Hooks

An HR agent that reads the staff list should greet each manager by name, send new hires to HR, and leave a record of every lookup, and none of that may depend on the agent remembering an instruction. This lab gives a Microsoft Copilot harness agent on the class HR MCP server three hooks: a Start hook that hands it the signed-in user's name, a Pre tool use hook that blocks adding an employee, and a Post tool use hook that mails you a record of every tool call. You finish with an agent whose rules hold on every session and every call, and you can see each hook run in the Preview step list.

What you practice here: binding a workflow to a hook event, and proving in the step list that it ran.

Duration: about 65 minutes.

## What you'll build

- Restaurant HR Assistant, a Microsoft Copilot harness agent with the HR MCP server under **Tools**.
- A **Start (pre-loop)** hook whose workflow returns the signed-in user's name as `additionalContext`.
- A **Pre tool use** hook on the HR MCP server whose workflow returns `permissionDecision` `deny` for `add_employee` only, with a reason the agent passes on.
- A **Post tool use** hook on all tools whose workflow sends you an email for every tool call.

## What This Lab Covers

| Step | Focus |
|------|-------|
| 1 | Create the agent and add the HR MCP server |
| 2 | Read the baseline: no greeting by name, no record |
| 3 | Add a Start hook that passes the signed-in user's name |
| 4 | Test the Start hook in a new chat |
| 5 | Add a Pre tool use hook that blocks adding an employee |
| 6 | Test the block |
| 7 | Add a Post tool use hook that records every tool call |
| 8 | Test the record and publish the agent |

## Prerequisites

- A Copilot Studio environment where you can create agents (maker role), where the **New agent** menu on the **Agents** page offers **Agent** with the **GitHub Copilot** badge. The agent's top tabs read Build, Preview, Evaluate, and Monitor, and the top menu bar's **…** menu lists **Hooks**.
- Your own environment: select the environment name at the bottom of the left navigation (**Switch environment**) and check that **Current environment** shows the environment named after your account, for example `copilot-studio-01` (Sandbox) for `copilot-studio-01@mst.fastlane.net`. Work through the whole lab in it, never in the shared Default environment.
- The class HR MCP server at `https://lab-human-resource-mcp.azurewebsites.net/mcp`, hosted for the class with no sign-in. Every learner shares its staff list.
- An Outlook mailbox for your class account, for the record the Post tool use hook sends.
- No files to download. You paste every input from this guide.

## Step 1: Create the agent and add the HR MCP server

Hooks watch an agent's run, so you need an agent with a tool to watch. The HR MCP server gives it staff lookups and an add employee tool, which Step 5 guards.

1. In the side pane, select **Agents**, open the arrow next to **New agent**, and under **Optimize your business processes** select **Agent** with the **GitHub Copilot** badge.
2. Select the pencil icon next to the agent name and enter `Restaurant HR Assistant`.
3. Paste the text below into the **Instructions** section.

```text
Role: You are the Restaurant HR Assistant, an internal helper for the restaurant's shift managers.

You do:
- When a question asks about our team (who works here, their roles, skills, spoken languages or email addresses), use the HR MCP Server to look it up before you reply.
- When a manager asks to add a new employee, use the HR MCP Server to add them.

Style: concise and professional.
```

4. In the components panel, select the **x** on **Work IQ** under **Tools** and confirm **Remove** in **Remove tool?**.
5. Select **+** next to **Tools**. In **Add a tool**, select **+ Add**, then **Model Context Protocol (MCP)**. In **Add MCP server**, fill in the fields below, set **Authentication** to **None**, and select **Add**.
   - Server name: `HR MCP Server`
   - Server description: `Looks up and adds the restaurant's employees: names, roles, skills, spoken languages and email addresses.`
   - Server URL: `https://lab-human-resource-mcp.azurewebsites.net/mcp`
6. Under **Select a connection**, open the **Not connected** list, select **Create new connection**, then **Create**. When the list shows the connection, select **Add**, then select **Save** (the disk icon at the top right). The first save shows **Saving...** for about a minute; wait until it ends before you go on.
7. Under **Tools**, select **HR MCP Server** to open **Edit tool**. Under **Tool permissions**, **Allow all** is on and locks every switch: turn **Allow all** off, which turns every tool off, then turn on **Add employee**, **Search employees** and **List employees**, and select **Done**. Then select **Save**.

Expected: **HR MCP Server** appears under **Tools**, its **Tool permissions** allow only the list, search and add tools, and the instructions say the agent adds employees when asked. Step 5 takes that decision away from the agent without touching the instructions.

## Step 2: Read the baseline

Before any hook exists, see what the agent does on its own. It doesn't know who you are, and nothing records its tool calls.

1. Open the **Preview** tab and send:

```text
Hi, who on our team speaks Japanese?
```

2. Expand the step list under the reply.

Expected: the reply names Kenji Tanaka, Sushi Chef, from a **Used tool** line for the HR MCP server, and it doesn't greet you by your name. No email arrives in your mailbox.

## Step 3: Add a Start hook that passes the signed-in user's name

A **Start (pre-loop)** hook runs every time a session begins, before the first message. Its workflow returns `additionalContext`, background text the agent reads for the whole session, and the metadata that every hook receives carries the signed-in user's display name.

1. On the top menu bar, select **…** > **Hooks** (marked **Preview**), then **Create**.
2. **Event type** already reads **Start (pre-loop)**. Replace the prefilled **Name** with `Greet the signed-in user`, then select **New workflow**. The workflow designer opens and leaves the dialog, so the hook itself is not saved yet.
3. In the starter workflow, keep every field name. Select **Respond to the agent** and set `additionalContext` to the text below, inserting `userDisplayName` from the variable picker at its label.

```text
The user's name is userDisplayName. Greet them by first name in your first reply. Every staff fact you give comes from the HR MCP Server.
```

4. Select the **Save** icon, then **Publish**.
5. Go back to the agent. **Add hook** opens again with **Name** and the new workflow under **Workflow** filled in; select **Done**.
6. Select the **Save** icon on the agent.

Expected: the **Hooks** dialog lists **Greet the signed-in user** with the event type **Start (pre-loop)**, and the workflow shows **Published**.

> **Warning:** Renaming or removing a starter field drops the workflow from the hook's **Workflow** list. Keep `event`, `timestamp`, `metadata` and `additionalContext` as they are.

## Step 4: Test the Start hook in a new chat

A Start hook only runs when a session begins, so the open chat from Step 2 never sees it.

1. On the **Preview** tab, select **New chat** and send:

```text
Hi
```

2. Expand the step list under the reply.

Expected: the step list shows **Executed hook: SessionStart** above the reply, and the reply greets you by your first name. Nothing in the instructions asked for a greeting by name: the text came from the hook's workflow.

## Step 5: Add a Pre tool use hook that blocks adding an employee

New hires are registered by HR in the onboarding system, and that rule must hold even though the instructions still tell the agent to add employees. A **Pre tool use** hook runs before the agent calls a tool and is the only hook that can block the call: its workflow returns `permissionDecision` set to `deny` and a `permissionDecisionReason` the agent reads.

1. Select **…** > **Hooks** > **Create**. Set **Event type** to **Pre tool use** and **Name** to `Send new hires to HR`.
2. In **Tools**, select **HR MCP Server**. The list shows the server as one entry, never its single tools, so the hook runs before every call to the server and its workflow decides which call to block.
3. Select **New workflow**. In the starter workflow, keep every field name, select **Respond to the agent** and set the two outputs below; leave the others empty.
   - `permissionDecision`: the expression below. Select the lightning icon in the field, open the `</>` tab, paste it and select **Insert**.
   - `permissionDecisionReason`: the text after the expression

```text
if(equals(triggerBody()?['toolName'], 'add_employee'), 'deny', '')
```

```text
New employees are registered by HR in the onboarding system. Do not add them here. Ask the manager to send the new hire's name, role and email address to hr@restaurant.com.
```

4. Select the **Save** icon, then **Publish**.
5. Go back to the agent. **Add hook** opens again with the event, the name, **HR MCP Server** under **Tools** and the new workflow filled in; select **Done**.
6. Select the **Save** icon on the agent.

Expected: the **Hooks** dialog lists two hooks, **Greet the signed-in user** with **Start (pre-loop)** and **Send new hires to HR** with **Pre tool use**.

> **Warning:** Keep the starter **Respond to the agent** node and branch inside the expression. An output you add yourself is stored as `text` or `text_1` whatever its label, so the agent ignores it. An **If/Else** with an empty branch ends without a response ("The hook flow returned an error"), and a workflow with two **Respond to the agent** nodes doesn't publish.

> **Note:** A hook fails open: if its workflow fails or returns nothing the agent can read, the call goes ahead. In a real agent the permission the tool's connection holds stays the hard limit, and the hook adds the business rule on top.

## Step 6: Test the block

The request below matches the instruction "use the HR MCP Server to add them", so without the hook the agent would add the employee to the shared staff list.

1. On the **Preview** tab, select **New chat** and send:

```text
Please add a new waiter: LAB Test Hire, email lab.test.hire@restaurant.com, skills table service and wine pairing, speaks English and German.
```

2. Expand the step list under the reply.
3. Select **New chat** and send `Is LAB Test Hire on our staff list?`.

Expected: the step list of the first reply shows **Executed hook: PreTool (add_employee)** with no **Used tool** line for `add_employee` after it, and the reply tells you to send the details to `hr@restaurant.com`. The second reply shows **Executed hook: PreTool (search_employees)** followed by a **Used tool** line, and finds no LAB Test Hire.

## Step 7: Add a Post tool use hook that records every tool call

An audit record is the job a **Post tool use** hook does well: it runs after every successful tool call and receives `toolName`, `parameters` and `result`. With **Tools** left empty it watches all tools, so no call goes unrecorded.

1. Select **…** > **Hooks** > **Create**. Set **Event type** to **Post tool use** and **Name** to `Record every tool call`, and leave **Tools** empty.
2. Select **New workflow**. In the starter workflow, keep every field name.
3. Select **+** between **When an agent calls the flow** and **Respond to the agent**, search for **Send an email**, and select the Office 365 Outlook entry. Create the connection if the designer asks for one.
4. Fill in the action below. Insert each code-formatted value with the lightning icon in the field, searching for its name: `toolName` and `parameters` from the trigger, and `userDisplayName`, which the picker lists as `metadata / userDisplayName`.
   - **To**: your class account's email address
   - **Subject**: `HR agent tool call:` followed by `toolName`
   - **Body**: `Tool:` `toolName`, `User:` `userDisplayName`, `Parameters:` `parameters`
5. Leave every output of **Respond to the agent** empty, so the agent keeps the tool's result as it is.
6. Select the **Save** icon, then **Publish**.
7. Go back to the agent. **Add hook** opens again with the event, the name and the new workflow filled in, and **Tools** empty; select **Done**.
8. Select the **Save** icon on the agent.

Expected: the **Hooks** dialog lists three hooks, the third one **Record every tool call** with **Post tool use**, and its workflow shows **Published** with the **Send an email** action between the two starter nodes.

## Step 8: Test the record and publish the agent

The last check sends a staff question, which calls a search tool and should leave a record in your mailbox.

1. On the **Preview** tab, select **New chat** and send:

```text
Which of our team members are chefs?
```

2. Expand the step list, then open Outlook.
3. Select **Publish** at the top right, then **Publish agent**, so the hooks run for everyone who uses the agent.

Expected: the step list shows **Executed hook: SessionStart**, then for each tool call a **Used tool** line followed by **Executed hook: PostTool**, for example **Executed hook: PostTool (search_employees)**. Within a minute Outlook holds one email per tool call with the subject `HR agent tool call:` and the tool's name, and the body names you and the parameters; a staff question that calls two tools leaves two emails. After **Publish agent** the agent shows **Published**.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The **Workflow** list in **Add hook** is empty | The workflow isn't published, or a starter field was renamed or removed | Open the workflow, restore the starter field names, then **Save** and **Publish** |
| **Hooks** shows no new hook after **New workflow** | **Add hook** didn't open again, or it closed before **Done** | Open **…** > **Hooks** > **Create** again, set the event and the name, pick the published workflow and select **Done** |
| **Add MCP server** says "Choose a different server name. This name is already in use." | An earlier lab registered `HR MCP Server` in this environment | Enter another server name, for example `HR MCP Server 2`, and repeat Step 1 point 5 |
| No **Executed hook: SessionStart** line | The test ran in the chat that was open before the hook existed, or the agent wasn't saved | Save the agent, select **New chat** and send the message again |
| **Tools** doesn't appear in **Add hook** | The event is **Start (pre-loop)**, or the agent has no tools yet | Pick a tool event, or finish Step 1 first |
| The add employee call ran and LAB Test Hire is on the staff list | The Pre tool use hook isn't saved, or its workflow returned nothing readable, for example an output you added yourself; a hook fails open | Check that `permissionDecision` sits in the starter **Respond to the agent** node, save the agent, and tell your instructor so the test entry is removed |
| Searches are blocked too | `permissionDecision` holds the literal `deny` and blocks every call to the server | Replace it with the expression from Step 5, then **Save** and **Publish** the workflow |
| The step list shows "The hook flow returned an error" | The workflow has an **If/Else** whose empty branch ends without a response | Remove the **If/Else** and set the outputs with the expression from Step 5 |
| No email arrives | The Outlook connection wasn't created, or **To** is empty | Open the workflow, fix the **Send an email** action, then **Save** and **Publish** |
| Preview answers "You need credits to continue ... Error code: EnforcementUsageCredits" | The environment has no Copilot Credits left | Ask the admin to allocate Copilot Credits to the environment, then send the message again |

## Verify

You have met the lab goal when all of the following are true:

1. The **Hooks** dialog lists **Greet the signed-in user** (**Start (pre-loop)**), **Send new hires to HR** (**Pre tool use**, **HR MCP Server**) and **Record every tool call** (**Post tool use**, all tools).
2. A new chat shows **Executed hook: SessionStart** and greets you by first name.
3. The add employee request is blocked with the HR reason, and LAB Test Hire is not on the staff list.
4. A staff question leaves an email with the subject `HR agent tool call:` in your mailbox.
5. The agent is published.

## Summary

You gave an HR agent three rules that hold on every session and every call. A Start hook passed the signed-in user's name as `additionalContext`, a Pre tool use hook blocked adding an employee while the instructions still asked for it, and a Post tool use hook mailed you a record of every tool call. You can now:

- Add a hook from **…** > **Hooks** and bind it to a published workflow built from the event's starter.
- Scope a tool hook to a tool or an MCP server, or leave **Tools** empty to watch them all.
- Block one tool of a server with a `permissionDecision` expression on `toolName` and a reason the agent passes on.
- Prove in the Preview step list that a hook ran.

Return to [Hooks: Steps That Run Every Time](../../../demos/06-cs-copilot-harness/05-hooks/readme.md) to compare the six events and the patterns built on them.

## Cleanup

Delete the Restaurant HR Assistant if you don't need it: open the agent, then choose **Delete**. The three hook workflows stay in your environment; delete them from **Workflows** if no other agent uses them, and delete the test emails from your mailbox. The HR MCP server and its staff list stay unchanged.
