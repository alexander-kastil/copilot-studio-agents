---
slide: "07-03"
topic: 07-evaluations
title: "Comparing runs before and after a change"
subtitle: "One change, Web Search switched to Disabled, fixed the canteen case"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: existing
media-file: demos/05-cs-advanced/07-evaluations/_images/planner-four-runs.svg
photo-link: demos/05-cs-advanced/07-evaluations/_images/planner-four-runs.svg
visual-prompt: >
  Existing topic diagram: Answer quality swings from run to run (86%, 71%, 71%, 57%), while after one
  change, Web Search switched to Disabled, Meaning match holds at 86% and its last failure is the
  refund-claim card case. Static.
order: 19
source: demos/05-cs-advanced/07-evaluations/readme.md
gamma_prompt: >
  Slide titled "Comparing runs before and after a change", subtitle "One change, Web Search switched to
  Disabled, fixed the canteen case". Layout: Two columns. Left column: four short bullets on the two
  unchanged runs, the cause, the one change and the result. Right column, wider than the left: the
  provided bar diagram of four runs as an inline content image at its natural 16:9 aspect ratio, never
  cropped, never used as a background or side accent. Use exactly the one image given for this card;
  do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Comparing runs before and after a change

## Content

- Run the **unchanged agent twice** first: 86% and 71%, then 71% and 86%
- The canteen case flipped on its own, and its activity listed **public web pages**
- One change: **Web Search** switched to Disabled on the planner
- **Meaning match** held at 86% in both later runs, while Answer quality moved to 71% and 57%

## Speaker Notes

An unchanged agent doesn't score the same twice. So the demo runs the set again before changing anything, then changes exactly one component.

Two unchanged runs: ten minutes apart, the totals swapped from 86 and 71 percent to 71 and 86 percent, because one case answered differently. A case that flips on its own marks an unstable component, often the first thing to fix.

The cause: the planner needs no knowledge of its own, since every answer should come from a specialist. Web Search let it answer the canteen question from any public website.

The change: with Web Search disabled, both later runs answered that no published company canteen menu was found, Meaning match passed it with 100, and no web pages were referenced.

The gate: Meaning match held at 86 percent, and its one remaining failure is the refund-claim card. Answer quality kept moving while nothing changed, which makes it the wrong number to gate a release on.
