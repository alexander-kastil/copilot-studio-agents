# Enforce Purchase Limits with Hooks

![The Grey Purchasing Assistant reads the user's approval limit and manager from the Approval Limit table when a session starts, holds an order above that limit before Submit Purchase Order runs, writes a failed order to the Agent Error Log, and lets an order within the limit through as an email.](./_images/05-purchase-limits-with-hooks-overview.svg)

A purchasing agent that places orders must know each requester's approval limit and must never submit an order above it, whatever the requester types. This demo builds a Grey Logistics purchasing agent on the Microsoft Copilot harness and puts both rules into hooks: a Start hook loads the user's limit and manager from Dataverse, a Pre tool use hook holds any order above that limit, and an After tool failure hook writes a failed order to an error log. The audience sees the same request blocked or let through by data in a table, with no change to the agent's instructions.

What you practice here: moving a business rule from the instructions into hooks that read live data on every session and every tool call.

Duration: about 50 minutes.

## Prerequisites

- A Copilot Studio environment with Dataverse where the **New agent** menu offers **Agent** with the **GitHub Copilot** badge, and the top menu bar's **…** menu lists **Hooks**.
- Maker rights to create Dataverse tables in that environment ([Power Apps](https://make.powerapps.com), same environment).
- An Outlook mailbox for the presenter account, which receives the submitted orders.

## Step 1: Create the approval limit and error log tables

The hooks read the requester's limit from Dataverse and write failures back to it, so the rule lives in data the business can change without touching the agent.

1. In Power Apps, in the demo environment, select **Tables** > **New table** > **Table (advanced properties)**. Name it `Approval Limit`, rename its primary column to `Email`, and select **Save**. If the panel stays on its spinner, reload the page: the table is created.
2. Add two columns: `Limit` (**Currency**) and `Manager` (**Single line of text**). Note the logical names Power Apps shows, for example `iits_email`, `iits_limit` and `iits_manager`, where `iits_` is the environment's publisher prefix.
3. Open the table's data and add one row for the presenter account:

| Email | Limit | Manager |
|---|---|---|
| the presenter's sign-in address | 5000 | Mara Grey |

4. Create a second table `Agent Error Log` with the primary column `Tool` and two more columns: `Error` (**Single line of text** with **Format** **Text area**) and `User` (**Single line of text**).

Expected: **Tables** lists **Approval Limit** with one row and an empty **Agent Error Log**.

## Step 2: Create the agent and its order tool

The order tool is a workflow the agent calls by name and description. It mails the order to the presenter, and it fails on purpose for one supplier so Step 5 has a failure to log.

1. In Copilot Studio, select **Agents** > **New agent** > **Agent** with the **GitHub Copilot** badge, and name it `Grey Purchasing Assistant` (the name takes at most 30 characters).
2. Paste the instructions below, remove **Work IQ** under **Tools**, and select **Save**.

```text
Role: You are the Grey Logistics Purchasing Assistant. You place purchase orders for employees.

You do:
- When a user asks to order something, collect the supplier, the item and the total amount in EUR, then submit it with Submit Purchase Order.
- Confirm the order with the reference the tool returns.

Style: short and businesslike.
```

3. Select **+** next to **Tools** > **+ Add** > **Workflow** > **New workflow**. In **When an agent calls the flow**, add three inputs: `supplier` (text), `item` (text) and `amount` (number), each with a one-line description.
4. Add an **If/Else** node with the condition `supplier` is equal to `Offline Supplier`. On the **If** branch add the **End** node (search for `Terminate`) with **Run status** **Failed**, an **Error code** such as `SupplierOffline` and the **Error message** `The supplier system is offline.`
5. On the **Else** branch add the Office 365 Outlook **Send an email** action to the presenter's address with the subject `Purchase order:` followed by `item` and a body that names `supplier` and `amount`. Connect **Send an email** to **Respond to the agent**, and delete the link the new **If/Else** drew from **If** to **Respond to the agent**.
6. In **Respond to the agent**, add the output `confirmation` with the text `Order submitted to` followed by `supplier`.
7. Name the workflow `Submit Purchase Order` with the description `Submits a purchase order for a supplier, an item and a total amount in EUR.`, then **Save** and **Publish**. Back on the agent, add it under **Tools** and select **Save**.

Expected: **Tools** lists **Submit Purchase Order**, and its workflow shows **Published** with **End** on the **If** branch and the email on the **Else** branch.

## Step 3: Load the limit with a Start hook

A **Start (pre-loop)** hook runs before the first message of every session. The metadata it receives carries `userAadObjectId`, which the workflow turns into an email address and looks up in **Approval Limit**.

1. Select **…** > **Hooks** > **Create**. **Event type** reads **Start (pre-loop)**; set **Name** to `Load my approval limit` and select **New workflow**.
2. Keep the starter fields. Between the two nodes add Office 365 Users **Get user profile** with **User (UPN)** set to `userAadObjectId` from `metadata`; the picker also lists `userId`, which is the channel's ID.
3. Add the Dataverse **List rows** action on **Approval Limit** with the **Filter rows** value below, inserting the profile's **Mail** between the quotes.

```text
iits_email eq 'Mail'
```

4. In **Respond to the agent**, set `additionalContext` to the expression below through the lightning icon, the `</>` tab and **Insert**.

```text
concat('The user''s purchase order approval limit is ', string(first(outputs('List_rows')?['body/value'])?['iits_limit']), ' EUR. Their manager is ', first(outputs('List_rows')?['body/value'])?['iits_manager'], ', who approves orders above that limit.')
```

5. **Save** and **Publish** the workflow. Go back to the agent: **Add hook** opens again with the name and the workflow filled in. Select **Done**, then **Save** (**Save draft** in the unsaved changes dialog).

Expected: the **Hooks** dialog lists **Load my approval limit** with **Start (pre-loop)**.

## Step 4: Hold orders above the limit with a Pre tool use hook

The limit in the context helps the agent answer, and the agent could still submit a large order. A **Pre tool use** hook on the order tool checks the amount in `parameters` against the table before every call and returns `deny` when it is too high. The workflow tool's inputs arrive in `parameters` under the designer's keys, `text`, `text_1` and `number` for supplier, item and amount, so the expression reads `number`.

1. Select **…** > **Hooks** > **Create**, set **Event type** to **Pre tool use** and **Name** to `Hold orders above the limit`, select **Submit Purchase Order** in **Tools**, and select **New workflow**.
2. Repeat the two lookup actions from Step 3 (**Get user profile** and **List rows**).
3. In the starter **Respond to the agent**, set `permissionDecision` to the expression below through the lightning icon, the `</>` tab and **Insert**. Keep the one starter response node: a second one stops the workflow from publishing, and an **If/Else** branch without a response returns an error.

```text
if(greater(float(triggerBody()?['parameters']?['number']), float(first(outputs('List_rows')?['body/value'])?['iits_limit'])), 'deny', '')
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

## Step 6: Run the orders against the rules

Each request below goes to the same agent with the same instructions. The outcome changes only with the amount, the supplier and the row in Dataverse.

1. On the **Preview** tab, select **New chat** and send the first prompt; expand the step list.

```text
Hi, what can I order without approval?
```

2. Send the chairs order. The agent usually holds it from the Start context alone and asks for approval, without calling the tool; then send the follow-up, which makes it call the tool.

```text
Order 20 office chairs from Grey Office Supplies, 6,400 EUR in total.
```

```text
Mara Grey approved it. Submit the order now.
```

3. Send the monitors order.

```text
Order 10 monitors from Grey Office Supplies, 2,100 EUR in total.
```

4. Send the printers order, then open **Agent Error Log** in Power Apps.

```text
Order 5 printers from Offline Supplier, 900 EUR in total.
```

5. In Power Apps, change the presenter's **Limit** to `10000`, select **New chat** in Preview, and send the chairs order again.

Expected: the first reply names the 5,000 EUR limit and Mara Grey, and the step list shows **Executed hook: SessionStart**. After the follow-up the step list shows **Executed hook: PreTool (SubmitPurchaseOrder)**, the order is held with Mara Grey named as approver, and no email arrives: the instructions and the context held the order once, and the hook held it when the agent tried anyway.

The monitors order goes through and its email arrives. The printers order fails, the step list shows **Executed hook: PostToolFailure (SubmitPurchaseOrder)**, **Agent Error Log** holds a row with the tool, the error and the user, and the reply says the order was logged. After the limit change the chairs order goes through: the rule moved with the data.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The first reply names no limit | **List rows** found no row, because the **Email** value differs from the profile's **Mail**, or the filter uses another column name | Compare the two addresses and the logical name, fix the row or the filter, and start a new chat |
| The chairs order goes through after the follow-up | The expression reads a key `parameters` doesn't have, such as `amount`, so the hook flow fails and fails open | Open the hook's workflow run history, read the keys under `parameters`, and fix the expression |
| The step list shows "The hook flow returned an error" | A function in the expression got an empty value, or a branch ends without a response | Check the run history of the hook's workflow and the column names in the expression |
| The workflow is missing from the hook's **Workflow** list | The workflow isn't published, or a starter field was renamed | Restore the starter fields, then **Save** and **Publish** |
| **Agent Error Log** stays empty after the printers order | The order tool didn't fail, so **After tool failure** didn't fire | Check that the **If** branch ends with **End** set to **Failed** and that the supplier name matches |

## Cleanup

Delete the agent, its four workflows and the two Dataverse tables when the demo is over.
