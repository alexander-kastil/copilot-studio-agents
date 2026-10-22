---
slide: "02-02"
topic: 02-dataverse
title: "Saving a claim through an agent flow"
subtitle: "Seven topic variables, seven flow inputs, one new row"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: existing
media-file: demos/04-cs-tools/02-dataverse/_images/expense-claims-in-dataverse-overview.svg
photo-link: demos/04-cs-tools/02-dataverse/_images/expense-claims-in-dataverse-overview.svg
visual-prompt: >
  Existing demo diagram: seven Submit Refund Request topic variables map to the inputs of CS-Save Claim
  to Dataverse, which adds the Salzburg claim to CS-Travel Expense Claims and responds to the agent.
order: 6
source: demos/04-cs-tools/02-dataverse/demo-expense-claims-in-dataverse.md
gamma_prompt: >
  Slide titled "Saving a claim through an agent flow", subtitle "Seven topic variables, seven flow
  inputs, one new row". Full-width layout: the provided mapping diagram across the whole card under the
  title at its natural aspect ratio, never cropped, with one caption line below it. Use exactly the one
  image given for this card; do not generate or add any other images, icons or logos.
---

# Saving a claim through an agent flow

## Content

- The **Action** node passes the claim, ISO dates included, to CS-Save Claim to Dataverse, which adds the row and responds to the agent

## Speaker Notes

The diagram reads left to right: topic variables, flow inputs, table columns. Every column of the table mirrors one value the topic collects.

The table: CS-Travel Expense Claims has Claim ID as its primary column plus email, destination, two dates, amount and comment. The dates are Date and time columns, which is why the topic builds full ISO timestamps.

The flow: it starts with When an agent calls the flow, adds the row with the Dataverse action Add a new row, and ends with Respond to the agent. Comment is the one optional input, because the card does not require it.

The Action node: the topic, not the orchestrator, saves the claim right after its formulas run. Each input is mapped to a variable, and departureDateIso and returnDateIso carry the converted dates, because Dataverse rejects the raw card dates.

Before you debug: the flow appears under Add a tool only when it is published, keeps both its trigger and Respond to the agent, and has Asynchronous response off. The table must sit in the same environment as the agent and the flow.
