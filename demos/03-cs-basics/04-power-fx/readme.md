# Power Fx: Formulas in Topics

Topics collect values, but real conversations need logic on top of them: a due date three working days out, a priority mapped to a service level, a check that a description is long enough to act on. Power Fx is the low-code formula language that handles this inside Copilot Studio. It reads like Excel, `If`, `Text`, `DateAdd`, `Concat`, so a maker who writes spreadsheet formulas can write topic logic without code.

This topic shows where formulas run in the topics of a Standard agent, how they refer to variables, which data types and literals they accept, and the functions makers use most. It closes with the habits that keep formulas readable when someone else maintains the agent.

## Where formulas run in a topic

Power Fx isn't a separate editor: it appears wherever a node accepts a value. The **Formula** tab sits next to the variable picker, and a **Condition** node switches to a formula with **Change to formula**.

| Where | How you open it | What the formula returns |
|-------|-----------------|--------------------------|
| **Set variable value** node | **To value**, the **>** arrow, then the **Formula** tab | Any value; the variable takes its type |
| **Condition** node | The node's three dots (**…**), then **Change to formula** | A Boolean that picks the branch |
| **Question** node | **Properties**, **Entity recognition**, **Additional entity validation**, **Condition** | A Boolean that accepts or rejects the answer |
| **Adaptive Card** node | **Properties**, switch to **Formula** | A record that describes the card |
| Topic and tool inputs | **Customize** under **Prompt** in the input's additional settings | Text for the question the agent asks |
| Agent instructions | Type `/` and insert a Power Fx expression | A value the instructions can reference |

## Referring to variables

A formula names a variable with a prefix for its scope. The prefix isn't optional, and a formula that uses `customerName` alone doesn't resolve.

| Scope | Prefix | Example |
|-------|--------|---------|
| Topic | `Topic.` | `Topic.assetTag` |
| Global | `Global.` | `Global.officeLocation` |
| System | `System.` | `System.User.DisplayName`, `System.Activity.Text` |
| Environment | `Environment.` | `Environment.ServiceDeskEmail` |

The variable picker doesn't show every system variable, and Learn notes that the hidden ones are reachable in a formula. Every system variable takes the `System.` prefix there, for example `System.Conversation.Id` for the current conversation's ID, which is useful when a support ticket should reference the chat it came from.

## Literals and data types

A literal is a value typed straight into a formula, and its format tells Power Fx the type. Copilot Studio uses US-style numbers, so the decimal separator is a period and the separator between function arguments is always a comma, whatever the browser's language.

| Type | Literal examples |
|------|------------------|
| String | `"hi"`, `"hello world!"` |
| Boolean | `true`, `false` |
| Number | `1`, `5.258`, `-9201` |
| Record and table | `{ id: 1 }`, `[45, 8, 2]`, `["cats", "dogs"]`, `{ name: "John", info: { age: 25 } }` |
| Date and time | `Date(2026,10,21)`, `Time(5,0,23)`, `DateTimeValue("May 10, 2026 5:00:00 PM")` |
| Blank | `Blank()` |

Choice values have no literal form. When a **Question** node uses multiple-choice options or a prebuilt entity, wrap the variable in `Text()` before you compare it or join it to a string, as Learn's own example does with `Upper(Text(Topic.customerName))`.

## The functions you reach for

The Copilot Studio formula reference lists the functions that work in topics, and a short set covers most help desk and request logic.

| Need | Functions |
|------|-----------|
| Build and clean text | `Text`, `Concatenate`, `&`, `Upper`, `Lower`, `Proper`, `Trim`, `Left`, `Len`, `Substitute` |
| Check a pattern | `IsMatch`, `Match`, `StartsWith`, `EndsWith` |
| Decide | `If`, `Switch`, `And`, `Or`, `Not`, `IsBlank`, `Coalesce`, `IfError` |
| Work with numbers | `Value`, `Round`, `RoundUp`, `Int`, `Mod` |
| Work with dates | `Today`, `Now`, `DateAdd`, `DateDiff`, `Weekday`, `Text` with a format |
| Work with tables | `CountRows`, `First`, `Last`, `Filter`, `LookUp`, `ForAll`, `Concat`, `Sort` |
| Work with JSON | `ParseJSON`, `JSON` |

These formulas show the functions in help desk situations. Each one fits a **Set variable value** node or a **Condition** node.

```powerfx
Switch(Text(Topic.priority), "High", 1, "Medium", 2, 5)
```

```powerfx
If(IsBlank(Topic.assetTag), "unknown", Upper(Topic.assetTag))
```

```powerfx
IsMatch(Topic.ticketNumber, "INC\d{6}")
```

```powerfx
Len(Topic.issueDescription) >= 20
```

```powerfx
Coalesce(Global.officeLocation, "Vienna")
```

## Working with dates

Dates are where formulas save the most manual work. `DateAdd` adds days by default, `DateDiff` counts the days between two dates, and `Weekday` returns 1 for Sunday through 7 for Saturday, which is enough to push a due date off a weekend. Learn's discount example compares a booking date with `DateAdd(Now(), 14)` in a **Condition** node.

```powerfx
DateAdd(Today(), Topic.slaDays)
```

```powerfx
Weekday(Topic.dueDate) = 1 || Weekday(Topic.dueDate) = 7
```

```powerfx
Text(Topic.dueDate, "dddd, mmmm d")
```

## Records, tables, and JSON

Inputs from Adaptive Cards, connectors, and flows often arrive as records or tables. `First` and `Last` pick one record, `Filter` and `LookUp` find records that match a condition, `CountRows` counts them, and `Concat` joins one column into a single line of text for a message.

```powerfx
Concat(Topic.selectedApps, Value, ", ")
```

When an API returns JSON as a string, prefer the **Parse value** node: it takes a sample of the JSON and produces a typed record with IntelliSense in later formulas. `ParseJSON` in a formula returns a dynamic value whose fields have no fixed type, so you convert each field you use with `Text` or `Value`. Going the other way, call `JSON()` once, where a value leaves the agent. Store the record itself in a variable such as `Global.orderDemand`, because a second `JSON()` on text that already holds JSON escapes it twice.

## Habits that keep formulas readable

Formulas are configuration that someone else maintains, so write them for that person. Put one calculation in each **Set variable value** node and give the variable a name that says what it holds, such as `slaDays` or `dueDateText`, so the canvas reads as a sequence of steps. Then trace every computed variable to the node that consumes it, because a variable no node passes on is dead code: an expense agent that calculated ISO dates but passed the raw `departureDate` and `returnDate` to its flow never got the formulas into the database.

Guard every value a user may skip with `IsBlank` or `Coalesce`, because a blank in the middle of a calculation can fail, and an error during a conversation sends the user to the **On Error** system topic. Convert choices and entities with `Text` before comparing them; when a condition compares mismatched types, the **Fix type mismatch** button generates the conversion formula for you. Test each formula on its own in the test panel, using the **Variables** panel's **Test** tab to watch the result change.

## Hands-On Demo

- [Calculate a Ticket Due Date with Power Fx](./demo-power-fx-in-a-topic.md): the presenter validates an issue description with a formula, maps a priority to service days with `Switch`, calculates a due date that skips weekends, and formats it for the user.

## Key Topics covered in this module

[Create expressions using Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx)

[Formula reference for Microsoft Copilot Studio](https://learn.microsoft.com/power-platform/power-fx/formula-reference-copilot-studio)

[Power Fx overview](https://learn.microsoft.com/power-platform/power-fx/overview)

[Variables overview](https://learn.microsoft.com/microsoft-copilot-studio/authoring-variables-about)

[Work with variables (Parse value)](https://learn.microsoft.com/microsoft-copilot-studio/authoring-variables#parse-values)

[Ask a question (additional entity validation)](https://learn.microsoft.com/microsoft-copilot-studio/authoring-ask-a-question)

[Add conditions to topics](https://learn.microsoft.com/microsoft-copilot-studio/authoring-using-conditions)
