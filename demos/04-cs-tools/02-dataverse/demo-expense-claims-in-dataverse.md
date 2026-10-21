# Save Expense Claims to Dataverse

A travel claim that lives only in a chat transcript can't be approved, paid, or reported on. Today someone copies each claim from the conversation into a list by hand. In this demo CS-Travel Expense Refund writes every submitted claim as a row in its own Dataverse table, through an agent flow the topic calls with the values its Power Fx formulas prepared.

What you practice here: storing structured conversation data in a Dataverse table through an agent flow called from a topic, with each flow input mapped to a topic variable.

Duration: about 40 minutes.

## What you'll build

- A Dataverse table, CS-Travel Expense Claims, with one column for each claim value.
- An agent flow, CS-Save Claim to Dataverse, that receives seven inputs, adds a row, and responds to the agent.
- An **Action** node in the Submit Refund Request topic that passes the claim, ISO dates included, to the flow.
- A saved row you can open in Power Apps after a test claim.

## Prerequisites

- CS-Travel Expense Refund with the Submit Refund Request topic from [Prepare a Travel Expense Claim with Power Fx](../../03-cs-basics/04-power-fx/demo-expense-claim-power-fx.md), opened in the classic experience (home page, three dots (**…**) at the bottom of the side bar, **Open classic experience**).
- The Environment Maker role in the agent's environment, so you can create a table in [Power Apps](https://make.powerapps.com).
- The flow this demo rebuilds, cloned in [src/cs-schema/workflows/SaveClaimtoDataverse](../../../src/cs-schema/workflows/SaveClaimtoDataverse/).

## Exercise 1: Create the CS-Travel Expense Claims table

The table is the claim's permanent home, so its columns mirror the values the topic collects. The dates use **Date and time** columns, which is why the previous demo built full ISO timestamps.

1. In Power Apps, select **Tables**, then **New table** > **Set advanced properties**.
2. Set **Display name** to `CS-Travel Expense Claim` and **Plural display name** to `CS-Travel Expense Claims`.
3. On the **Primary column** tab, set **Display name** to `Claim ID`, then select **Save**.
4. In the table's **Columns** area, select **Add column** for each row below, set **Display name** and **Data type**, and select **Done**.

| Display name | Data type |
|--------------|-----------|
| Email Address | Text |
| Destination | Text |
| Departure Date | Date and time |
| Return Date | Date and time |
| Amount | Decimal Number |
| Comment | Multiline Text |

5. Select **Save Table**.

Expected: the table CS-Travel Expense Claims lists Claim ID as its primary column plus the six new columns, each with the data type from the table.

## Exercise 2: Build the agent flow and its inputs

An agent flow starts with **When an agent calls the flow** and ends with **Respond to the agent**, and only flows with both can be called from an agent. Each trigger input becomes a field the topic fills, so the names and descriptions below match the clone.

1. In Copilot Studio, select **Tools** in the left navigation, then **New tool** > **Agent flow**.
2. Select the **When an agent calls the flow** trigger and use **Add an input** to add these seven inputs, each with its name and description.

| Type | Name | Description |
|------|------|-------------|
| Text | ClaimId | The id of the claim |
| Text | EMail | The email of the person |
| Text | Destination | The destination |
| Text | Comment | The comment |
| Number | Amount | the amount |
| Text | Departure Date | The Departure Date |
| Text | Return Date | the return date |

3. Open the Comment input's menu (**…**) and make the field optional, because the card's comment field isn't required.
4. Rename the flow to `CS-Save Claim to Dataverse`.

Expected: the trigger card lists the seven inputs, six marked as required and Comment as optional, and the flow carries its CS- name.

## Exercise 3: Add the row and respond

The **Add a new row** action of the Microsoft Dataverse connector writes one row, and dynamic content from the trigger fills each column. The dates take the trigger's Departure Date and Return Date inputs directly, because the topic already sends them as ISO timestamps.

1. Between the trigger and **Respond to the agent**, select the plus sign (**+**), search for `Add a new row`, and select the **Microsoft Dataverse** action **Add a new row**.
2. Set **Table name** to `CS-Travel Expense Claims`, then fill each column from the trigger's dynamic content.

| Column | Dynamic content |
|--------|-----------------|
| Claim ID | ClaimId |
| Email Address | EMail |
| Destination | Destination |
| Departure Date | Departure Date |
| Return Date | Return Date |
| Amount | Amount |
| Comment | Comment |

3. Leave **Respond to the agent** without outputs and its **Asynchronous response** setting off, then select **Publish**.

Expected: the flow publishes without errors, with three cards in order: the trigger, **Add a new row** on CS-Travel Expense Claims, and **Respond to the agent**.

> **Tip:** The cloned flow writes its date columns from inputs that don't exist, so both dates fail on every run.
>
> ```json
> "item/iits_departuredate": "@parseDateTime(triggerBody()?['date'])",
> "item/iits_returndate": "@parseDateTime(triggerBody()?['date_1'])"
> ```
>
> Its trigger names the date inputs `text_4` and `text_5`. Mapping the Departure Date and Return Date inputs from dynamic content, as above, removes the mismatch.

> **Note:** The designer creates the Microsoft Dataverse connection when you add the action and gives you no field to name it. For cleanup, identify it by its connector, Microsoft Dataverse, under the flow's connections.

## Exercise 4: Call the flow from the claim topic

The topic, not the orchestrator, should save the claim, right after the formulas run. A topic-level tool turns the flow into an **Action** node whose inputs you map to the variables from the previous demo, including the two ISO dates.

1. Attach the flow to the agent first: on the **Tools** page select **Add a tool**, then the **Workflows** filter, the CS-Save Claim to Dataverse card, and **Add and configure**. The settings page lists the flow's inputs on **Dynamically fill with AI**; leave them, because the topic maps them in the next steps.
2. Open the Submit Refund Request topic in CS-Travel Expense Refund.
3. Under the `returnDateIso` node, select the **Add node** icon, then **Add a tool**, and select CS-Save Claim to Dataverse.
4. In the new **Action** node, set each input to its variable.

| Input | Variable |
|-------|----------|
| ClaimId | `Topic.claimID` |
| EMail | `Topic.email` |
| Destination | `Topic.destination` |
| Comment | `Topic.comment` |
| Amount | `Topic.amount` |
| Departure Date | `Topic.departureDateIso` |
| Return Date | `Topic.returnDateIso` |

5. Move the recap **Message** node below the **Action** node and replace its text with the confirmation below, inserting the variables with **{x}**.

```text
Thanks. Claim {claimID} for {destination} is saved: {amount} from {departureDateIso} to {returnDateIso}.
```

6. Select **Save**.

Expected: the canvas runs card, three **Set variable value** nodes, the **Action** node with seven mapped inputs, and the confirmation message.

## Exercise 5: Submit a claim and find the row

The proof is the row, not the chat message. You submit one claim in the test panel, then open the table and match the row against what you typed.

1. In the **Test your agent** panel, start a new conversation and send the message below.

```text
I want to submit a travel expense claim
```

2. Fill in the card with these values and select **Submit Claim**.

```text
Email Address: alex@contoso.com
Destination: Salzburg
Departure Date: 2026-11-10
Return Date: 2026-11-12
Amount: 318.40
Comment: Customer workshop, two nights
```

3. In Power Apps, open the CS-Travel Expense Claims table and refresh its data view.

Expected: the agent answers with the confirmation and the claim ID, in the form "Thanks. Claim <claim ID> for Salzburg is saved: 318.4 from 2026-11-10T00:00:00Z to 2026-11-12T00:00:00Z." The table holds one new row with that Claim ID, Salzburg, 318.40, the comment, and departure and return dates of 10 and 12 November 2026. In the live run the orchestrator added a second line of its own, saying the claim had already been saved; it does not write a second row.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| CS-Save Claim to Dataverse is missing under **Add a tool** | The flow isn't published, or **Respond to the agent** is missing | Publish the flow and keep both the trigger and **Respond to the agent** |
| The topic reports a flow error after the card | **Asynchronous response** is on, or a required input is empty | Turn **Asynchronous response** off in **Respond to the agent** and map all six required inputs |
| The row is created without dates | The date columns are mapped to something other than the Departure Date and Return Date inputs | Remap both columns from the trigger's dynamic content and publish again |
| The date columns reject the value | The topic passes the raw card dates | Map Departure Date and Return Date to `Topic.departureDateIso` and `Topic.returnDateIso` |
| The table isn't offered in **Table name** | The table was saved in another environment | Create the table in the same environment as the agent and its flow |

## Summary

You gave CS-Travel Expense Refund a place to keep its claims and a flow that writes them there. You can now:

- create a Dataverse table whose columns match what a topic collects
- build an agent flow with typed trigger inputs, **Add a new row**, and **Respond to the agent**
- call the flow from a topic as an **Action** node and map each input to a variable
- prove the write by finding the row in Power Apps

Next, [Connector Tools: Prebuilt Connectors](../03-connectors/readme.md) gives an agent connector tools it can call on its own.
