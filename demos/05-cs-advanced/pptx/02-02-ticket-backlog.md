---
slide: "02-02"
topic: 02-deep-reasoning
title: "Ordering a ticket backlog"
subtitle: "The same nine tickets on the default model and with reason on step 4"
layout: diagram-full
visual-weight: 1/1
visual-type: svg
media-source: existing
media-file: demos/05-cs-advanced/02-deep-reasoning/_images/deep-reasoning-overview.svg
photo-link: demos/05-cs-advanced/02-deep-reasoning/_images/deep-reasoning-overview.svg
visual-prompt: >
  Existing demo diagram: the nine-ticket backlog of the Grey Logistics IT Help Desk passes through step
  4 with reason and comes out in instruction order, T-109 first as overdue, T-103 raised to P2 by the
  board rule and T-107 kept at P3, beside the default model's typical misses and a Wi-Fi question that
  runs without deep reasoning. Animated with a complete first frame.
order: 7
source: demos/05-cs-advanced/02-deep-reasoning/demo-deep-reasoning.md
gamma_prompt: >
  Slide titled "Ordering a ticket backlog", subtitle "The same nine tickets on the default model and
  with reason on step 4". Full-width diagram layout: the provided diagram spans the whole card under the
  title at its natural aspect ratio, never cropped, with one caption line below it. Use exactly the one
  image given for this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Ordering a ticket backlog

## Content

- With `reason` on the ranking step, T-109 comes first as overdue, T-103 rises to P2 and T-107 stays at P3

## Speaker Notes

The demo gives the Grey Logistics IT Help Desk a job where several rules meet: priority, a rule for the executive board, deadlines and the clock. It runs the same nine tickets twice and compares the plans in the activity map.

Baseline: on the default model a table comes back within seconds and no reasoning node appears. The default model often lists T-105 first, misses that T-109 is overdue by an hour, or leaves board member Anna Berger's T-103 at P3.

With reason: only step 4, which orders the tickets by time left until the deadline, gets the keyword. The reply takes noticeably longer, and the activity map shows a reasoning node for that step alone.

Reading the node: a correct run puts T-109 first, raises T-103 to P2 under the board rule, and keeps T-107 at P3 because the marketing team can still use the shared drive. If the baseline already matched, that is a valid finding too: this backlog didn't need the slower model.

Fast path: a guest Wi-Fi question in the same conversation answers quickly with no reasoning node. The Model list on the Overview page, with its Deep tags, is a separate choice from this setting.
