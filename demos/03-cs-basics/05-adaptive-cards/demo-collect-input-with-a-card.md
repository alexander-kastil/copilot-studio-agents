# Collect a Software Request with an Adaptive Card

![Grey Logistics IT Help Desk runs the Request software topic, whose Adaptive Card collects Software, Needed by and Business justification, passes software, neededBy and justification to a confirmation message, and handles an empty date, the reply asdf and a OneDrive question.](./_images/collect-input-with-a-card-overview.svg)

A software request needs the product, the date it's needed, and a business reason, and asking for them in three chat turns feels slow and invites half answers. One card shows all three fields at once, checks that none is empty, and returns clean variables to the topic. In this demo you build that card from JSON, confirm the values it returns, personalize it with Power Fx, and see how it behaves when a user types something else.

What you practice here: collecting several values in one interactive Adaptive Card and controlling how the card behaves inside a conversation.

Duration: about 40 minutes.

## What you'll build

- A topic, Request software, with an **Adaptive Card** node that asks for software, a date, and a justification.
- Output variables generated from the card's input ids, checked in the node properties.
- A confirmation message that repeats the submitted values.
- A personalized card heading written in Power Fx, and a custom retry prompt for invalid responses.

## Prerequisites

- A Standard agent, such as Grey Logistics IT Help Desk from the earlier demos, with either orchestration mode.
- Teams as the target channel, so the card uses schema version 1.5.

## Exercise 1: Build the card from JSON

The card's JSON is the whole contract: every input `id` becomes a variable, and `isRequired` with an `errorMessage` stops an empty submission before it reaches the agent. Pasting the payload is faster than dragging elements, and it is the form you can review and reuse.

1. Go to **Topics**, select **Add a topic**, then **From blank**, and name it `Request software` in **Details**.
2. On the **Trigger** node, add these trigger phrases, and enter the description for generative orchestration.

```text
request software
I need a new application
install software on my laptop
get a license for an app
software request
```

```text
Collects a software installation request from an employee: the product, the date it is needed, and a business justification.
```

3. Select the **Add node** icon under the **Trigger** node, then **Ask with Adaptive Card**.
4. Open the node's three dots (**…**), select **Properties**, then **Edit adaptive card**, and replace the default payload in the **Card payload editor** with the JSON below. Select **Save** and close the designer.

```json
{
  "$schema": "http://adaptivecards.microsoft.com/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "text": "Request software",
      "weight": "Bolder",
      "size": "Medium",
      "style": "heading",
      "wrap": true
    },
    {
      "type": "Input.ChoiceSet",
      "id": "software",
      "label": "Software",
      "isRequired": true,
      "errorMessage": "Select the software you need.",
      "choices": [
        { "title": "Microsoft Visio", "value": "Microsoft Visio" },
        { "title": "Microsoft Project", "value": "Microsoft Project" },
        { "title": "Power BI Desktop", "value": "Power BI Desktop" },
        { "title": "Adobe Acrobat Pro", "value": "Adobe Acrobat Pro" }
      ]
    },
    {
      "type": "Input.Date",
      "id": "neededBy",
      "label": "Needed by",
      "isRequired": true,
      "errorMessage": "Pick the date you need the software."
    },
    {
      "type": "Input.Text",
      "id": "justification",
      "label": "Business justification",
      "isMultiline": true,
      "isRequired": true,
      "errorMessage": "Tell us why you need the software."
    }
  ],
  "actions": [
    {
      "type": "Action.Submit",
      "title": "Submit request",
      "data": { "actionSubmitId": "software_request_submit" }
    }
  ]
}
```

Expected: the node shows a preview of the card with a dropdown, a date field, a multiline text box, and a **Submit request** button.

## Exercise 2: Check the variables the card returns

Copilot Studio reads the inputs in the JSON and creates one output variable per `id`. Checking them now saves a confusing error later, when a node expects a type the card doesn't deliver.

1. Look at the outputs listed under the card preview on the node.
2. Open **Properties** and select **Edit Schema** to see the variable names and types Copilot Studio derived.

Expected: outputs named `software`, `neededBy`, and `justification` appear on the node, and **Edit Schema** lists them with their types. Leave the schema as generated.

> **Tip:** When a generated type is wrong, for example a number typed as text, correct it once in **Edit Schema**, so every later node receives the right type.

## Exercise 3: Confirm the submission in a message

A confirmation proves the values made it from the card into the topic, and it gives the user a last look at the request.

1. Add a **Message** node under the **Adaptive Card** node. Type the text below and insert each variable with the **{x}** icon where the placeholder names it.

```text
Thanks. Your request for {software}, needed by {neededBy}, is recorded with this justification: {justification}
```

2. Save the topic, start a new conversation in the **Test your agent** panel, and send the message.

```text
I need to request software
```

3. Submit the card once with the date empty, then fill in every field and select **Submit request**.

Expected: the first attempt shows the card's own error message under the date field and sends nothing. The second attempt returns the confirmation with the selected product, the date, and your justification.

## Exercise 4: Personalize the card with Power Fx

A static card greets everyone the same way. Switching the node to **Formula** turns the JSON into a Power Fx record, so any value can come from a variable, here the signed-in user's display name.

1. Open the node's **Properties** and switch from JSON to **Formula**. Read the warning, because this conversion can't be undone.
2. In the formula, find the `text` property of the first `TextBlock` and replace its value with the expression below.

```powerfx
"Hi " & System.User.DisplayName & ", which software do you need?"
```

3. Save the topic and run the test from Exercise 3 again.

Expected: the card heading greets you by your display name. The rest of the card and the confirmation behave exactly as before.

> **Note:** Keep a copy of the JSON from Exercise 1 before you switch to **Formula**. Learn recommends this because the formula panel can't return to the original JSON.

## Exercise 5: Handle a user who types while the card waits

While a card waits, a typed message is an invalid response unless it triggers another topic. The retry prompt is your chance to explain what the agent needs before the card comes back.

1. Open the node's **Properties**, set **How many reprompts** to **Repeat once**, select **Customize** under **Retry prompt**, and enter the text below. Save the topic.

```text
Please use the form above and select Submit request, or type "cancel" to stop.
```

2. Start a new conversation, trigger the topic, and reply to the card with the message below.

```text
asdf
```

3. Trigger the topic again and reply to the card with a message that matches another topic or knowledge source.

```text
How do I fix a OneDrive sync error?
```

Expected: the meaningless reply brings back your retry prompt with the card. The OneDrive question switches to another topic or to knowledge because **Allow switching to another topic** is on, and the card is sent again once that answer is finished.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The node rejects the card | It has no submit action | Every **Adaptive Card** node needs at least one `Action.Submit` |
| The card looks fine in the test chat but breaks in Teams | The card uses schema 1.6 features | Set `"version": "1.5"` and remove 1.6-only elements |
| A variable is missing after submission | The input has no `id`, or the schema wasn't refreshed | Add the `id`, then check **Edit Schema** |
| Selecting the button on an older card restarts a step | Submit buttons stay clickable on earlier cards | Give each submit action unique `data` such as `actionSubmitId` and check it |

## Summary

You built a software request card that collects three validated values in one step. You can now:

- write an Adaptive Card payload for an **Adaptive Card** node and target Teams with schema 1.5
- read and correct the output variables generated from input ids
- personalize a card with a Power Fx formula
- control reprompts and interruptions while a card waits

Next, [Publishing to Teams & Copilot](../06-publishing/readme.md) puts the agent in front of real users.
