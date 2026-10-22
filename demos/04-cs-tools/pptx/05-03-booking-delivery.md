---
slide: "05-03"
topic: 05-rest-api
title: "Booking a delivery in one sentence"
subtitle: "The orchestrator chains a lookup and an update"
layout: statement
visual-weight: 1/3
visual-type: photo
media-source: nano-banana
subject: hands-artefact
media-file: demos/04-cs-tools/pptx/images/05-03-booking-delivery.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych,
  no collage. In the brightly lit walk-in cold room of a modern staff canteen kitchen, two hands in the
  sleeves of a white chef jacket slide a freshly delivered crate of vacuum-packed meat portions onto a
  stainless steel shelf beside neatly stacked steel containers; daylight falls in through the open door
  behind. Clean, tidy surfaces. Modern, light, bright and friendly: high-key natural daylight, soft pastel
  accents in light blue, mint and lavender, green plants, 2020s design. 16:9 landscape, contemporary
  editorial photography. Avoid: readable text, logos, watermarks, extra people, labels or printing on
  the packs, the crate or the containers, dark or moody lighting, vintage or retro decor, grime, clutter.
order: 16
source: demos/04-cs-tools/05-rest-api/demo-food-catalog-rest-connector.md
gamma_prompt: >
  Statement card titled "Booking a delivery in one sentence", subtitle "The orchestrator chains a lookup
  and an update". One large sentence across the left two thirds about the delivery booked from one chat
  message. The provided photograph of hands shelving a delivered crate in a canteen cold room as a side
  accent in the right third, no text over it. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
---

# Booking a delivery in one sentence

## Content

- "We just received 12 portions of Schweinshaxe mit Kraut" makes the agent **look up the dish, then add 12 to its stock**: 24 portions on the seeded database

## Speaker Notes

With add and update in its tool set, the agent keeps the stock true without any topic. One sentence about a delivery is enough.

Two tool calls: the activity map shows CS-Gets all food, then CS-Update food stock quantity with the dish's id and an amount of 12. In the live run the agent answered that the new stock is 24 portions.

Spoiled portions: "Two portions of Pad Ka Prao spoiled" runs the same update with an amount of -2, from 18 to 16. A new dish such as Apfelstrudel goes through CS-Add food.

The order: the next Calculate quantity to order works from 24 portions of Schweinshaxe mit Kraut and 16 of Pad Ka Prao. The quantities follow the stock as soon as it changes.
