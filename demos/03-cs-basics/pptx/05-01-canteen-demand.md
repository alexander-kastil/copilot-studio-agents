---
slide: "05-01"
topic: 05-adaptive-cards
title: "Canteen demand on one card"
subtitle: "CS-Food Stock Buddy collects nine dishes in one submit"
layout: statement
visual-weight: 1/3
visual-type: photo
subject: place
media-source: nano-banana
media-file: demos/03-cs-basics/pptx/images/05-01-canteen-demand.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych, no
  collage. The serving counter of a bright modern company canteen shortly before lunch, nobody in frame:
  a row of steel trays holds golden Wiener Schnitzel, slices of Pizza Napoli and a bowl of green curry
  with rice, white plates stacked at the end of the counter and small pots of fresh herbs beside them.
  Tall windows behind the counter let in soft morning daylight onto light-oak panels and white tiles.
  The trays centred in the frame. Modern, light, bright and friendly: high-key natural daylight, soft
  pastel accents in light blue, mint and lavender, green plants, 2020s design. 2:3 portrait, the counter
  centred, contemporary editorial photography. Avoid: readable text, menu boards or price tags with
  letters, logos, watermarks, people, dark or moody lighting, vintage or retro decor, grime, clutter.
order: 14
source: demos/03-cs-basics/05-adaptive-cards/demo-food-demand-card.md
gamma_prompt: >
  Statement slide titled "Canteen demand on one card", subtitle "CS-Food Stock Buddy collects nine
  dishes in one submit". The single bullet as one large sentence across the left two thirds; the
  provided photograph of a bright canteen counter with schnitzel, pizza and green curry as a side accent
  in the right third, no text over it. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Canteen demand on one card

## Content

- One **Adaptive Card** replaces nine questions: the canteen manager types a number per dish and submits once

## Speaker Notes

Topic five moves from questions to cards. The running example is the canteen: its manager sends the week's demand for nine dishes, from Wiener Schnitzel to Green Curry.

Questions: a question per dish would take nine turns and still return free text. A Question node stays the better choice for a single conversational value.

Card: an Adaptive Card shows the whole form at once and the host renders it natively, in Teams, on a website or in Copilot Chat. The values arrive in the topic as variables after one submit.

Channels: Copilot Studio supports schema 1.6 and earlier, but Teams renders up to 1.5. The demand card uses version 1.5, the highest that Teams renders.
