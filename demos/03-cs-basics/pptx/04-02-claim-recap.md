---
slide: "04-02"
topic: 04-power-fx
title: "The claim recap"
subtitle: "The values an agent flow receives next"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/03-cs-basics/pptx/images/04-02-claim-recap.png
photo-link: demos/03-cs-basics/pptx/images/04-02-claim-recap.png
visual-prompt: >
  Screenshot from the CS-Travel Expense Refund test run (pool 03-04-002), cropped to the bottom of the
  Expense Claim card (Amount 245.5, Comment, Submit Claim) and the recap message with the claim GUID,
  245.5 for Graz and both ISO dates.
order: 13
source: demos/03-cs-basics/04-power-fx/demo-expense-claim-power-fx.md
gamma_prompt: >
  Slide titled "The claim recap", subtitle "The values an agent flow receives next". Layout: Two columns.
  Left column: four short bullets. Right column, wider than the left: the provided screenshot of the
  submitted card and the recap message as an inline content image at its natural aspect ratio, never
  cropped, never used as a background or side accent. Use exactly the one image given for this card; do
  not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# The claim recap

## Content

- **Submit Claim** fills one topic variable per card input
- The recap starts with the **claimID**, a 36-character GUID
- Both dates arrive as **ISO timestamps** ending in T00:00:00Z
- A second test run gets a **different claimID**

## Speaker Notes

This is the recap from the live test of CS-Travel Expense Refund. The card was submitted, and the message shows what the formulas made of it.

Card input: each input id of the card becomes a variable, so Amount and Comment arrive as the user typed them. The card validates required fields before the submit.

Claim ID: the recap opens with the GUID that Text(GUID()) created. Every test run gets a new one, which proves it comes from the formula and not from the card.

ISO dates: the two dates read 2026-11-03T00:00:00Z and 2026-11-05T00:00:00Z, the format a Dataverse Date and time column accepts. Trace each computed variable to the node that consumes it: the cloned agent passed the raw dates to its flow, so its formulas never reached the database.

Next step: module 04 maps these values to the inputs of an agent flow that saves the claim to a Dataverse table. The Test tab of the Variables panel shows each value while the topic runs.
