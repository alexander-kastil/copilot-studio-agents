# Conversation design

## Variable scope

| Scope | Prefix | Lives | Use for |
| --- | --- | --- | --- |
| Topic | `Topic.` | One topic | Values consumed inside the same topic |
| Global | `Global.` | Whole conversation | Values other topics need |
| System | `System.` | Read-only, built in | `System.Activity.Text`, `System.User.DisplayName` |
| Environment | (Power Platform) | Read-only in Copilot Studio | Per-environment config |

Default to `Topic.`; promote to `Global.` only when another topic reads the value. A topic that mixes both without reason (as `UserAccountCreation` does, with `Global.FirstName` beside `Topic.LastName`) signals an unintentional scope choice worth questioning.

## Trigger queries

Aim for 8 to 10 phrasings that vary *form*, not just wording: imperative ("create account"), first-person intent ("I want to register"), and question form ("how do I create an account?"). Near-duplicates add nothing; the language model generalizes.

## Slot filling

The agent listens continuously and fills entity slots from anything the user has already said, then **skips** questions whose variable is already populated. So a user answering "I want to book a trip to Rome for 3 people" can skip two downstream questions.

Consequences worth designing around:

- Questions are not guaranteed to run in written order, or at all.
- Never put a side effect in a `Question` node's prompt that must happen exactly once.
- To force a prompt regardless, set skip behavior to **Ask every time** (`alwaysPrompt: true`).

`Question` nodes with prebuilt entities participate in slot filling. Adaptive Card inputs do not.

## Question behavior

- **Reprompt:** default is repeat up to 2 times, then run the "no valid entity found" action.
- **No valid entity found:** escalate (default), set the variable to a value, set it empty, or redirect to a topic. Escalation is rarely what a data-collection topic wants; choose deliberately.
- **Additional entity validation:** a Power Fx boolean for constraints the entity alone cannot express, for example `Topic.Age < 120`.
- **Include metadata:** changes the variable to a *record* exposing `.Value`, `.Literal`, and `.ConfidenceScore`. `.Literal` preserves what the user actually said ("tomorrow") next to the resolved value, which is useful for confirmations and for confidence-based branching.

## Interruptions

By default a user's answer can trigger a different topic. When an answer keeps hijacking the conversation instead of filling the variable, turn off "Allow switching to another topic" on that node.

## Question or card?

| Situation | Choose |
| --- | --- |
| One conversational value, natural phrasing matters | `Question` with a prebuilt entity |
| Several related fields submitted together | One `AdaptiveCardPrompt` |
| Input needs format validation and inline errors | `AdaptiveCardPrompt` |
| The value should benefit from slot filling | `Question` |

Avoid alternating card, question, card in one topic. It reads as an inconsistent interface: the user fills a form, then gets a chat prompt, then another form. If a topic collects a coherent record (name, birth date, department), collect it in **one** card with one submit.

## Message hygiene

- Summarize collected values back before acting, so the user can catch a misheard entity.
- Keep confirmations to one message. Duplicate consecutive `SendActivity` nodes with identical text are a copy-paste artifact and read as a bug to the user.
