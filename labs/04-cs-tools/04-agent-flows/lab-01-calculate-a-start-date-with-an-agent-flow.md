# Calculate a Start Date with an Agent Flow

Ask a language model for the date six weeks from today and you may get a different answer each time, because the model guesses at calendar arithmetic. An HR answer about a candidate's earliest start date has to be the same every time. In this lab you move that calculation into an agent flow, a fixed sequence of steps, and let the HR agent call it as a tool.

Duration: about 15 minutes.

## What you'll build

- An agent flow named `Calculate earliest start date` that takes a notice period in weeks and returns the date that many weeks from today.
- The flow added to the HR agent as a tool, called by generative orchestration from a normal question.

## Prerequisites

- The HR agent from the earlier labs, or any Standard agent with generative orchestration on.
- An environment where you can create agent flows. The flow uses only built-in actions, so no connection is needed.

## Task 1: Build the flow

The trigger **When an agent calls the flow** is what makes a flow callable by an agent, and its inputs are the values the agent has to supply. The date arithmetic runs in a built-in action, so the same input always gives the same date.

1. Go to **Workflows**, open the arrow next to **New workflow** and select **Agent flows**.
2. Add the **When an agent calls the flow** trigger. Select **Add an input**, choose **Number**, and name it:

```text
NoticeWeeks
```

3. Below the trigger, select **Insert a new action**, search for **Get future time** (Date Time) and add it. Set **Interval** to the `NoticeWeeks` token and **Time unit** to **Week**.
4. Add the **Respond to the agent** action with one **Text** output named `StartDate`, set to the **Future time** token of the previous step. In its settings, under **Networking**, check that **Asynchronous response** is **Off**.
5. Rename the flow to the name below, open **Flow checker**, fix any red cards, then select **Publish**.

```text
Calculate earliest start date
```

6. Select **Test**, choose **Manually**, enter `6` for **NoticeWeeks** and select **Run flow**.

Expected: every card shows a green checkmark, and the output of **Respond to the agent** holds a `StartDate` six weeks from today.

## Task 2: Add the flow to the agent as a tool

The orchestrator knows the flow only by its name and description, so the description says what the flow does, what it needs and what it does not do.

1. Open the HR agent and go to the **Tools** page.
2. Select **Add a tool**, select **Flow**, select **Calculate earliest start date** and select **Add and configure**.
3. Replace the description with this text and select **Save**:

```text
Calculates the earliest start date of a new hire from their notice period in weeks, counted from today. Needs the notice period in weeks. Does not check public holidays or the hiring manager's calendar.
```

Expected: **Calculate earliest start date** appears in the agent's list of tools with the input `NoticeWeeks`.

## Task 3: Ask the agent

1. Open the test pane and select the map icon at its top to show the activity map.
2. Send this message:

```text
A candidate has a 6 week notice period. What is the earliest date they can start?
```

Expected: the activity map shows a **Calculate earliest start date** node with `NoticeWeeks` set to 6, and the agent answers with the same date the flow returned in Task 1.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| The flow isn't listed under **Flow** in **Add a tool** | The **Respond to the agent** action is missing or the flow isn't published | Add the action, run **Flow checker**, then **Publish** |
| The agent calculates the date itself and never calls the flow | Generative orchestration is off, or the description doesn't match the question | Check **Settings** > **Generative AI**, then compare the description with the question |
