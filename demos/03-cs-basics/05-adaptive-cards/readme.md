# Adaptive Cards: Collect Structured Input

Asking six questions one after another works, but it feels like filling in a form one field at a time through a chat window. An Adaptive Card shows the whole form at once: text inputs, choice lists, a date picker, and a submit button, rendered natively by Teams, a website, or Copilot Chat. The user fills it in one step, the card validates what it can, and the values arrive in your topic as variables.

This topic explains what an Adaptive Card is, where a card can appear in a topic, and which schema version each channel renders. It then follows a card's inputs into variables, makes a card dynamic with Power Fx, and covers the behaviors and design rules that keep cards reliable in a real conversation.

## What an Adaptive Card is

An Adaptive Card is a snippet of UI written in JSON. The JSON says what the card contains, and the host app (Teams, the web chat on your site, Outlook) turns it into native controls that follow the host's look, including light and dark mode. The same card therefore looks at home in every channel without you designing it per channel.

A card has a `body` of elements, such as `TextBlock`, `ColumnSet`, and inputs like `Input.Text`, `Input.ChoiceSet`, `Input.Date`, and `Input.Number`, and a list of `actions`. An `Action.Submit` button sends the values of every input back to the agent. Each input needs an `id`, because that id becomes the name of the variable in your topic.

## Where a card can appear in a topic

Copilot Studio uses cards in two ways, and the difference is whether the user is expected to answer.

| Use | Node | The card needs | Typical example |
|-----|------|----------------|-----------------|
| Ask for information | **Adaptive Card** node (**Ask with Adaptive Card**) | At least one submit button | A software request form |
| Show information | A **Message** node or **Question** node with a card attached | No submit button | A ticket summary or an order status |

You design the card in the built-in Adaptive Card designer, which carries the most useful features of the public Adaptive Cards Designer, or you paste a JSON payload into the **Card payload editor**. Learn also suggests reusing cards from earlier topics, generating the JSON with Copilot or ChatGPT, designing a card in Power Apps or Power Automate, and checking the schema documentation on the Adaptive Cards website.

## Schema versions and channels

Copilot Studio supports Adaptive Cards schema 1.6 and earlier, but the channel decides what renders. Design for the lowest version among the channels you publish to, which for most internal agents means Teams.

| Host | Highest version | Note |
|------|-----------------|------|
| Bot Framework Web Chat (the default website integration) | 1.6 | `Action.Execute` isn't supported |
| Microsoft Teams | 1.5 | |
| Live chat widget for Omnichannel for Customer Service | 1.5 | |
| Copilot Studio while you build | 1.6 in the test chat | The node preview on the authoring canvas doesn't render 1.6 cards |

## From card inputs to variables

When you save a card in an **Adaptive Card** node, Copilot Studio creates output variables from the inputs in the JSON, one per `id`, with a matching type. If the generated variables are wrong, for example a number read as text, you fix the list and the types with **Edit Schema** in the **Adaptive Card node properties** panel. After the user selects a submit button, the variables hold what they entered and the topic continues with the next node. A card input stores exactly what the user typed, with no entity extraction or slot filling, so a card suits a multi-field form and a **Question** node stays the better choice for a single conversational value.

![The six card inputs become topic variables, and a Formula Card binds them into the Candidate Summary, turning the two table variables into text with Text and Concat.](../../../labs/03-cs-basics/05-adaptive-cards/_images/adaptive-card-round-trip.svg)

A multi-select `Input.ChoiceSet` returns several values, so treat its variable as a list and turn it into text with Power Fx before you show it. The previous topic, [Power Fx: Formulas in Topics](../04-power-fx/readme.md), covers the formulas that do this.

In the topic's YAML, an **Adaptive Card** node is a three-part contract: the input `id` in the JSON, the `output.binding` that maps it to a variable, and the `outputType.properties` that declares its type must match. The Copilot Studio extension for VS Code reports a break by name, such as `AdaptiveCardMissingActionSubmit`, so its messages double as a checklist.

## Dynamic cards with Power Fx

A card written as a JSON literal is static: every user sees the same text. Switching the node to **Formula** in the **Adaptive Card node properties** panel converts the JSON into a Power Fx record, and then any value can come from a variable, such as a title built from `Topic.Title` or a greeting with `System.User.DisplayName`.

The conversion is one way. Once you edit in the formula panel you can't return to the original JSON, so Learn recommends saving a copy of the JSON first, in your own notes or as a comment in the node. The formula form is also how you build display cards whose rows come from a table variable.

## Card behavior in a conversation

A card waits for a submission, and users don't always cooperate. If a user types a message while a card waits, Copilot Studio treats it as an invalid response, unless the message triggers an interruption.

| Property | What it controls | Default |
|----------|------------------|---------|
| **How many reprompts** | How often the card is resent after an invalid response | **Repeat up to 2 times** |
| **Retry prompt** | A message sent with the repeated card | The standard retry text; select **Customize** to change it |
| **Allow switching to another topic** | Whether a typed message can start another topic | On; the card is sent again when the interrupting topic ends |

## Designing cards that hold up

Submit buttons stay clickable after use, so a user can select a button on an earlier card while a later one is waiting. Give every submit action unique data, for example an `actionSubmitId` value that names the card and the action, and check it when you process the response. In a custom web chat, disable a card's inputs after its first submission.

Validate inside the card where you can, because it saves a round trip. Inputs support `isRequired`, a `regex` pattern, and an `errorMessage`, so most malformed values are caught before the user submits. Keep labels short, use `Input.ChoiceSet` wherever the set of answers is known, and stay within schema 1.5 when Teams is a channel. Treat these rules as hints, because some clients ignore `min` on a number input: check the value again in the topic after submit, as the demo does when it drops rows with a quantity of zero before the order.

## Hands-On Demo

- [Collect a Software Request with an Adaptive Card](./demo-collect-input-with-a-card.md): the presenter builds a software request card from JSON, checks the generated variables, confirms the submission in a message, makes the card greet the user with Power Fx, and shows what happens when a user types a message while the card waits.

## Hands-On Lab

- [Collect Input with Adaptive Cards](../../../labs/03-cs-basics/05-adaptive-cards/lab-01-collect-input-with-adaptive-cards.md): learners register a new candidate for the HR agent with one card and confirm the data with a formula card.

## Key Topics covered in this module

[Using Adaptive Cards in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/adaptive-cards-overview)

[Ask with Adaptive Cards](https://learn.microsoft.com/microsoft-copilot-studio/authoring-ask-with-adaptive-card)

[Send a message (Add an Adaptive Card)](https://learn.microsoft.com/microsoft-copilot-studio/authoring-send-message#add-an-adaptive-card)

[Adaptive Cards documentation and schema](https://adaptivecards.microsoft.com/?topic=AdaptiveCard)

[Adaptive Cards Designer](https://adaptivecards.microsoft.com/designer)
