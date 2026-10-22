---
slide: "04-01"
topic: 04-power-fx
title: "Power Fx in a topic"
subtitle: "Three formulas turn the expense card into a claim ready to save"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: existing
media-file: demos/03-cs-basics/04-power-fx/_images/expense-claim-power-fx-overview.svg
photo-link: demos/03-cs-basics/04-power-fx/_images/expense-claim-power-fx-overview.svg
visual-prompt: >
  Existing demo diagram: CS-Travel Expense Refund turns the filled Expense Claim card into a claimID and
  two ISO timestamps with three Power Fx formulas, and the recap shows the values an agent flow later
  writes to Dataverse.
order: 12
source: demos/03-cs-basics/04-power-fx/demo-expense-claim-power-fx.md
gamma_prompt: >
  Slide titled "Power Fx in a topic", subtitle "Three formulas turn the expense card into a claim ready
  to save". Layout: Two columns. Left column: four short bullets. Right column, wider than the left: the
  provided diagram of the expense card, three Set a variable value nodes and the recap message as an
  inline content image at its natural 16:9 aspect ratio, never cropped, never used as a background or
  side accent. Use exactly the one image given for this card; do not generate or add any other images,
  icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Power Fx in a topic

## Content

- Formulas run wherever a node takes a value: **Set variable value**, Condition, Question
- `Text(GUID())` gives every claim its own **claimID**
- `& "T00:00:00Z"` turns each card date into an **ISO timestamp**
- Name variables with their **scope prefix**, separate arguments with commas

## Speaker Notes

Topics collect values, and Power Fx adds the logic on top. In the demo CS-Travel Expense Refund collects a claim on a six-field Adaptive Card, and three formulas prepare it for saving.

Where formulas run: the Formula tab sits next to the variable picker in a Set variable value node, a Condition node switches with Change to formula, and a Question node takes a formula under Additional entity validation. One calculation per node, with a variable name that says what it holds, keeps the canvas readable.

Claim ID: a saved claim needs a key that no other claim shares, and the user should never invent one. GUID() creates a unique identifier and Text() turns it into the string a Dataverse text column expects.

ISO dates: an Input.Date field returns a plain date such as 2026-11-03, while a Dataverse Date and time column takes a full ISO 8601 timestamp. The & operator appends the time and the UTC marker.

Syntax: a formula names a variable with its scope prefix, so write Topic.departureDate, never departureDate alone. Copilot Studio uses US-style numbers, so the comma separates arguments whatever the browser language.
