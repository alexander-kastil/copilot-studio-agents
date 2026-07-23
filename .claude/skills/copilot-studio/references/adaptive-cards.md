# Adaptive Cards

## Pick the right node first

| Goal | Node | Notes |
| --- | --- | --- |
| Show a card the user submits input from | `AdaptiveCardPrompt` | The interactive node; requires an `Action.Submit` |
| Show a card that only displays information | `SendActivity` (or a `Question` with an attachment) | Non-interactive; no submit button |

A `Question` node cannot collect card input. If the goal is "replace this question with a card," the answer is `AdaptiveCardPrompt`, not a `Question` with a card attached.

## Node contract

Proven shape, from `src/agents/Food Stock Buddy/topics/SubmitDemand.mcs.yml`:

```yaml
- kind: AdaptiveCardPrompt
  id: firstNameCard
  card: |-
    {
      "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
      "type": "AdaptiveCard",
      "version": "1.5",
      "body": [
        {
          "type": "Input.Text",
          "id": "firstName",
          "label": "What is your first name?",
          "isRequired": true,
          "errorMessage": "Please enter your first name"
        }
      ],
      "actions": [
        { "type": "Action.Submit", "title": "Continue" }
      ]
    }
  output:
    binding:
      firstName: Global.FirstName

  outputType:
    properties:
      firstName: String
```

Three parts must agree:

1. Each input's `id` inside the card JSON.
2. `output.binding` maps that **card input id** to a **topic or global variable**.
3. `outputType.properties` declares that same card input id's type (`String`, `Number`, `Boolean`).

Input ids may contain dots (`qty.WienerSchnitzel`); the binding key must match the id exactly.

`card:` also accepts a Power Fx expression instead of a JSON literal (`card: =Topic.cardJson`, or a `=` formula building the object) when the card must be dynamic. Converting the designer's JSON to a formula is one-way, so keep a copy of the JSON before switching.

## Validator rules

These are the authoring tool's own diagnostics, read out of the language server binary. Satisfy all of them:

| Diagnostic | Requirement |
| --- | --- |
| `AdaptiveCardMissingActionSubmit` | The card must contain at least one `Action.Submit` |
| `AdaptiveCardInputIsRequiredMissingLabel` | Any `isRequired` input needs a `label` |
| `AdaptiveCardInputIsRequiredMissingErrorMessage` | Any `isRequired` input needs an `errorMessage` |
| `AdaptiveCardVersionNotSupported` | `version` must be a supported schema version |
| `AdaptiveCardToggleInputMissingTitle` | An `Input.Toggle` needs a `title` |
| `AdaptiveCardActionSubmitIdTypeMismatch` | A submit action's data id must match its declared type |
| `AdaptiveCardJsonParsingError` | The `card` block must be valid JSON |

## Version targeting

Copilot Studio supports schema 1.6 and earlier, but the ceiling is set by the *host channel*, not by Copilot Studio:

| Host | Ceiling |
| --- | --- |
| Bot Framework Web Chat (default website embed) | 1.6, but no `Action.Execute` |
| Microsoft Teams | 1.5 |
| Omnichannel live chat widget | 1.5 |

**Default to `1.5`** unless a 1.6-only feature is required and the target channel is known to support it. Version 1.6 cards render only in the test chat, never on the authoring canvas, which makes them hard to review.

## What you give up by replacing a Question with a card

A `Question` node with a prebuilt entity does natural-language extraction and participates in slot filling. A card input does neither: the user types into a form field and the raw value is stored verbatim. Swapping a Question for a card trades NLU and proactive slot filling for a structured, validated form. That is usually the right trade for multi-field data entry and the wrong one for a single conversational value. Say so when making the swap rather than presenting it as a pure upgrade.

## Consecutive cards

Cards stay clickable after submission, so a user can submit a stale earlier card. When a topic sends several, give each submit action a unique payload id and branch on it:

```json
{ "type": "Action.Submit", "title": "Confirm", "data": { "actionSubmitId": "booking_confirm_v3" } }
```
