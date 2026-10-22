---
slide: "02-03"
topic: 02-dataverse
title: "The saved claim in the test chat"
subtitle: "The confirmation carries the claim ID and ISO dates"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/04-cs-tools/pptx/images/02-03-claim-saved.png
photo-link: demos/04-cs-tools/pptx/images/02-03-claim-saved.png
visual-prompt: >
  Test chat of CS-Travel Expense Refund after Submit Claim: "Thanks. Claim ... for Graz is saved: 245.5 from 2026-11-03T00:00:00Z to 2026-11-05T00:00:00Z." (pool 04-02-001).
order: 7
source: demos/04-cs-tools/02-dataverse/demo-expense-claims-in-dataverse.md
gamma_prompt: >
  Slide titled "The saved claim in the test chat", subtitle "The confirmation carries the claim ID and
  ISO dates". Left column: four short bullets on the confirmation, the ISO dates, the row as proof and
  the write tools for Dataverse. Right column, wider than the left: the provided screenshot of the test
  chat as an inline content image, never cropped. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
---

# The saved claim in the test chat

## Content

- After **Submit Claim** the agent confirms the claim with its ID, amount and dates
- The dates arrive as **ISO timestamps**, the format the Date and time columns accept
- The proof is the **row in Power Apps**, matched against what you typed
- Writes can also run through a **Dataverse connector tool** that asks before running

## Speaker Notes

This is the test chat from the live run, which used a Graz claim of 245.5 instead of the guide's Salzburg values. The flow ran from the topic and the confirmation came back in one turn.

Confirmation: the message comes from the topic's recap node, moved below the Action node. In the live run the orchestrator added a second line of its own, saying the claim was already saved; it did not write a second row.

ISO dates: the topic sends departureDateIso and returnDateIso, so the flow maps the date columns straight from its inputs. The cloned flow mapped its dates from inputs that did not exist, and the rebuild removes that mismatch.

The row: open CS-Travel Expense Claims in Power Apps, refresh the data view and find the claim ID. The chat message alone proves nothing about the table.

Other write paths: a Microsoft Dataverse connector tool such as Add a new row should keep Ask the end user before running on and end user credentials. The Dataverse MCP Server (preview) offers create_record and update_record under role-based access control; turn off every tool your scenario does not need.
