---
slide: "02-01"
topic: 02-dataverse
title: "Travel claims as Dataverse rows"
subtitle: "Business records the agent reads and writes"
layout: statement
visual-weight: 1/3
visual-type: photo
media-source: nano-banana
subject: hands-artefact
media-file: demos/04-cs-tools/pptx/images/02-01-claims-as-rows.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych,
  no collage. On a light-oak desk by a bright window, two hands lay a train ticket and a folded hotel
  receipt from a two-night customer workshop trip side by side, ready to be filed with a claim; a pen
  rests beside them and a small green plant stands at the edge of the desk. Both papers show only faint
  grey lines, with no letters, words or numbers anywhere. Modern, light, bright and friendly: high-key
  natural daylight, soft pastel accents in light blue, mint and lavender, green plants, 2020s design.
  16:9 landscape, contemporary editorial photography. Avoid: readable text, logos, watermarks, extra
  people, printed words or numbers on tickets, receipts or the pen, dark or moody lighting, vintage or
  retro decor, grime, clutter.
order: 5
source: demos/04-cs-tools/02-dataverse/readme.md
gamma_prompt: >
  Statement card titled "Travel claims as Dataverse rows", subtitle "Business records the agent reads
  and writes". One large sentence across the left two thirds about writing every claim as a table row.
  The provided photograph of hands laying out trip receipts as a side accent in the right third, no text
  over it. Use exactly the one image given for this card; do not generate or add any other images,
  icons or logos.
---

# Travel claims as Dataverse rows

## Content

- A claim that stays in the chat can't be approved, paid or reported on, so **CS-Travel Expense Refund** writes each one as a row in a Dataverse table

## Speaker Notes

Most business answers live in table rows, and Microsoft Dataverse is often where those rows already sit. This topic uses Dataverse in both directions an agent can.

Writing: today someone copies each travel claim from the conversation into a list by hand. In the demo the agent writes every submitted claim to the CS-Travel Expense Claims table through an agent flow.

Reading: a Dataverse knowledge source answers questions over up to 15 tables, searching as the signed-in user. Two people asking the same question can get different answers, because nobody sees a row they could not open in a Dataverse app.

Two decisions: reading and writing need separate design and separate permissions. Knowledge answers questions, tools change rows, and each tool runs with the credentials it is configured for.
