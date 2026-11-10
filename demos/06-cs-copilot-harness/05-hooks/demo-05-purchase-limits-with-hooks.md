# Enforce Purchase Limits with Hooks

![The Grey Logistics Purchasing Assistant reads the user's approval limit and manager from the Approval Limit table when a session starts, holds an order above that limit before Submit Purchase Order runs, writes a failed order to the Agent Error Log, and lets an order within the limit through as an email.](./_images/05-purchase-limits-with-hooks-overview.svg)

A purchasing agent that places orders must know each requester's approval limit and must never submit an order above it, whatever the requester types. This demo builds a Grey Logistics purchasing agent on the Microsoft Copilot harness and puts both rules into hooks: a Start hook loads the user's limit and manager from Dataverse, a Pre tool use hook holds any order above that limit, and an After tool failure hook writes a failed order to an error log. The audience sees the same request blocked or let through by data in a table, with no change to the agent's instructions.

What you practice here: moving a business rule from the instructions into hooks that read live data on every session and every tool call.

Duration: about 50 minutes.

## Prerequisites

- A Copilot Studio environment with Dataverse where the **New agent** menu offers **Agent** with the **GitHub Copilot** badge, and the top menu bar's **…** menu lists **Hooks**.
- Maker rights to create Dataverse tables in that environment ([Power Apps](https://make.powerapps.com), same environment).
- An Outlook mailbox for the presenter account, which receives the submitted orders.

## Step 1: Create the approval limit and error log tables

The hooks read the requester's limit from Dataverse and write failures back to it, so the rule lives in data the business can change without touching the agent.

1. In Power Apps, in the demo environment, select **Tables** > **New table** > **Table (advanced properties)**. Name it `Approval Limit`, rename its primary column to `Email`, and select **Save**.
2. Add two columns: `Limit` (**Currency**) and `Manager` (**Single line of text**).
3. Open the table's data and add one row for the presenter account:

| Email | Limit | Manager |
|---|---|---|
| the presenter's sign-in address | 5000 | Mara Grey |

4. Create a second table `Agent Error Log` with the primary column `Tool` and two more columns, `Error` (**Multiple lines of text**) and `User` (**Single line of text**).

Expected: **Tables** lists **Approval Limit** with one row and an empty **Agent Error Log**.

## Step 2: Create the agent and its order tool

The order tool is a workflow the agent calls by name and description. It mails the order to the presenter, and it fails on purpose for one supplier so Step 5 has a failure to log.

1. In Copilot Studio, select **Agents** > **New agent** > **Agent** with the **GitHub Copilot** badge, and name it `Grey Logistics Purchasing Assistant`.
2. Paste the instructions below, remove **Work IQ** under **Tools**, and select **Save**.

```text
Role: You are the Grey Logistics Purchasing Assistant. You place purchase orders for employees.

You do:
- When a user asks to order something, collect the supplier, the item and the total amount in EUR, then submit it with Submit Purchase Order.
- Confirm the order with the reference the tool returns.

Style: short and businesslike.
```

3. Select **+** next to **Tools** > **+ Add** > **Workflow** > **New workflow**. In **When an agent calls the flow**, add three inputs: `supplier` (text), `item` (text) and `amount` (number), each with a one-line description.
4. Add a **Condition**: `supplier` is equal to `Offline Supplier`. In the **True** branch add **Terminate** with **Status** **Failed** and the message `The supplier system is offline.`
5. After the condition, add the Office 365 Outlook **Send an email** action to the presenter's address with the subject `Purchase order:` followed by `item` and a body that names `supplier` and `amount`.
6. In **Respond to the agent**, add the output `confirmation` with the text `Order submitted to` followed by `supplier`.
7. Name the workflow `Submit Purchase Order` with the description `Submits a purchase order for a supplier, an item and a total amount in EUR.`, then **Save** and **Publish**. Back on the agent, add it under **Tools** and select **Save**.

Expected: **Tools** lists **Submit Purchase Order**, and its workflow shows **Published** with the condition, the email and the response.

## Step 3: Load the limit with a Start hook

A **Start (pre-loop)** hook runs before the first message of every session. The metadata it receives carries `userAadObjectId`, which the workflow turns into an email address and looks up in **Approval Limit**.

1. Select **…** > **Hooks** > **Create**. **Event type** reads **Start (pre-loop)**; set **Name** to `Load my approval limit` and select **New workflow**.
2. Keep the starter fields. Between the two nodes add Office 365 Users **Get user profile (V2)** with **User (UPN)** set to `userAadObjectId` from `metadata`.
3. Add the Dataverse **List rows** action on **Approval Limit** with the **Filter rows** value below, where the address comes from the profile's **Mail**.

```text
email eq 'Mail'
```

4. In **Respond to the agent**, set `additionalContext` to the text below, inserting **Limit** and **Manager** from the first row the list returned.

```text
The user's purchase order approval limit is Limit EUR. Their manager is Manager, who approves orders above that limit.
```

5. **Save** and **Publish** the workflow. Go back to the agent: **Add hook** opens again with the name and the workflow filled in. Select **Done**, then **Save**.

Expected: the **Hooks** dialog lists **Load my approval limit** with **Start (pre-loop)**.

## Step 4: Hold orders above the limit with a Pre tool use hook

The limit in the context helps the agent answer, and the agent could still submit a large order. A **Pre tool use** hook on the order tool checks the amount in `parameters` against the table before every call and returns `deny` when it is too high.

1. Select **…** > **Hooks** > **Create**, set **Event type** to **Pre tool use** and **Name** to `Hold orders above the limit`, select **Submit Purchase Order** in **Tools**, and select **New workflow**.
2. Repeat the two lookup actions from Step 3 (**Get user profile (V2)** and **List rows**).
3. In the starter **Respond to the agent**, set `permissionDecision` to the expression below: select the lightning icon in the field, open the `</>` tab, paste it, replace `cr_limit` with the logical name of the **Limit** column that Power Apps shows, and select **Insert**. Keep the one starter response node: a second one stops the workflow from publishing, and an **If/Else** branch without a response returns an error.

```text
if(greater(float(triggerBody()?['parameters']?['amount']), float(first(outputs('List_rows')?['body/value'])?['cr_limit'])), 'deny', '')
```

4. Set `permissionDecisionReason` to the text below, with **Limit** and **Manager** inserted; the agent only reads it when the call is denied.

```text
This order is above the user's approval limit of Limit EUR. Do not submit it. Tell the user that Manager must approve it first.
```

5. **Save** and **Publish** the workflow. Back on the agent, **Add hook** opens again with **Submit Purchase Order** under **Tools** and the workflow filled in; select **Done** and **Save**.

Expected: the **Hooks** dialog lists **Hold orders above the limit** with **Pre tool use**.

## Step 5: Log failed calls with an After tool failure hook

An **After tool failure** hook receives the `error` of a failed call. It writes the failure to the log table and tells the agent what to say, because its only output is guidance for the agent.

1. Select **…** > **Hooks** > **Create**, set **Event type** to **After tool failure** and **Name** to `Log tool failures`, leave **Tools** empty, and select **New workflow**.
2. Add the Dataverse **Add a new row** action on **Agent Error Log**: **Tool** `toolName`, **Error** `error`, **User** `userDisplayName` from `metadata`.
3. In **Respond to the agent**, set `additionalContext` to the text below.

```text
The order did not reach the supplier. Tell the user it was logged for the purchasing team and offer to try again later.
```

4. **Save** and **Publish** the workflow. Back on the agent, select **Done** in the reopened **Add hook**, then **Save**.

Expected: the **Hooks** dialog lists three hooks: **Start (pre-loop)**, **Pre tool use** and **After tool failure**.

## Step 6: Run three orders against the rules

Each request below goes to the same agent with the same instructions. The outcome changes only with the amount, the supplier and the row in Dataverse.

1. On the **Preview** tab, select **New chat** and send the first prompt; expand the step list.

```text
Hi, what can I order without approval?
```

2. Send the second prompt.

```text
Order 20 office chairs from Grey Office Supplies, 6,400 EUR in total.
```

3. Send the third prompt.

```text
Order 10 monitors from Grey Office Supplies, 2,100 EUR in total.
```

4. Send the fourth prompt, then open **Agent Error Log** in Power Apps.

```text
Order 5 printers from Offline Supplier, 900 EUR in total.
```

5. In Power Apps, change the presenter's **Limit** to `10000`, select **New chat** in Preview, and send the second prompt again.

Expected: the first reply names the 5,000 EUR limit and Mara Grey, and the step list shows **Executed hook: SessionStart**. The chairs order is held with Mara Grey named as approver, and no email arrives. The monitors order goes through and its email arrives. The printers order fails, **Agent Error Log** holds a row with the tool, the error and the user, and the reply says the order was logged. After the limit change the chairs order goes through: the rule moved with the data.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The first reply names no limit | **List rows** found no row, because the **Email** value differs from the profile's **Mail** | Compare the two addresses, fix the row, and start a new chat |
| The chairs order goes through | The expression reads no `amount` or no limit, or the hook watches another tool | Open the hook's workflow run history, check the `parameters` value and the column name in the expression |
| The workflow is missing from the hook's **Workflow** list | The workflow isn't published, or a starter field was renamed | Restore the starter fields, then **Save** and **Publish** |
| **Agent Error Log** stays empty after the printers order | The order tool didn't fail, so **After tool failure** didn't fire | Check that the condition's **True** branch ends with **Terminate** and **Failed** |

## Cleanup

Delete the agent, its four workflows and the two Dataverse tables when the demo is over.
