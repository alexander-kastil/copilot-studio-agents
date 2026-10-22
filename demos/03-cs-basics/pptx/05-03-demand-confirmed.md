---
slide: "05-03"
topic: 05-adaptive-cards
title: "Submitting the demand"
subtitle: "40 schnitzel, 30 pizza and 25 curry in one submit"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/03-cs-basics/pptx/images/05-03-demand-confirmed.png
photo-link: demos/03-cs-basics/pptx/images/05-03-demand-confirmed.png
visual-prompt: >
  Screenshot from the CS-Food Stock Buddy test run (pool 04-01-006), cropped to the bottom rows of the
  demand card (Pizza Napoli 30, Arancini Napoletana 0, Pad Ka Prao 0, Green Curry 25), Submit Demand and
  the confirmation JSON with Wiener Schnitzel 40, Pizza Napoli 30 and Green Curry 25.
order: 16
source: demos/03-cs-basics/05-adaptive-cards/demo-food-demand-card.md
gamma_prompt: >
  Slide titled "Submitting the demand", subtitle "40 schnitzel, 30 pizza and 25 curry in one submit".
  Layout: Two columns. Left column: four short bullets. Right column, wider than the left: the provided
  screenshot of the card rows and the confirmation as an inline content image at its natural aspect
  ratio, never cropped, never used as a background or side accent. Use exactly the one image given for
  this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Submitting the demand

## Content

- Each dish row has a **number field** that starts at 0
- Pizza Napoli 30 and Green Curry 25 typed, the other rows left at 0
- **Submit Demand** sends every row in one step
- The confirmation lists only the **three dishes** above 0

## Speaker Notes

This is the live test of CS-Food Stock Buddy. The message I want to submit demand starts the topic, and the card waits for numbers.

Number fields: every input starts at value 0, so an empty row submits 0 instead of nothing. The crop shows the last rows of the card, from Pizza Napoli to Green Curry.

Submit: the manager entered 40 for Wiener Schnitzel, 30 for Pizza Napoli and 25 for Green Curry, then selected Submit Demand once.

Confirmation: Your demand was successfully noted, followed by compact JSON with exactly three entries in the formula's order. On the Test tab of the Variables panel, Global.orderDemand still shows all nine dishes, six of them at 0.

Next step: in the live run the orchestrator added one more line of its own after the confirmation, which you can leave. The next module feeds Global.orderDemand to a prompt that works out what to order.
