---
slide: "04-03"
topic: 04-where-to-build
title: "Spending limits"
subtitle: "Guardrails set when you activate Copilot Credits"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/01-intro/pptx/images/03-03-spending-governance.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. Left: five pale blue user columns
  with person glyphs underneath and a dashed amber line "Per-user limit, the most any one user can
  consume"; the tallest column stops exactly at that line. An arrow leads right to a tall tank for
  the tenant, filled partway, with a thick amber top line "Monthly spending limit, the tenant's total
  ceiling" and two dashed amber "Alert thresholds" lines below it; the lower threshold, already
  passed, has a filled amber marker.
order: 15
source: demos/01-intro/04-where-to-build/readme.md
gamma_prompt: >
  Slide titled "Spending limits", subtitle "Guardrails set when you activate Copilot Credits". Layout:
  Two columns. Left column: the bullets. Right column, wider than the left: the provided diagram as an
  inline content image at its natural 16:9 aspect ratio, scaled to fit the column, never cropped, never
  used as a background or side accent. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
---

# Spending limits

## Content

- **Monthly spending limit**: the tenant's total ceiling for the billing period
- **Per-user limit**: the most any one user can consume, at least 2,000 credits a month
- **Alert thresholds** below the ceiling notify you before it is reached
- Set them **at activation**, with numbers from the Copilot Credit Estimator

## Speaker Notes

This slide covers the guardrails you set when you activate Copilot Credits, before the first bill arrives.

Monthly spending limit: a spending policy caps the tenant's monthly total for the billing period.

Per-user limit: it caps each user's share, so a single heavy user cannot use up the tenant's credits. Microsoft sets the minimum at 2,000 credits a month, and a user who reaches it loses access until credits reset on the first of the month.

Alert thresholds: alerts fire at thresholds below the ceiling, so you hear about the spend before the limit is reached.

At activation: set all three when you activate, not after the first bill. The Copilot Credit Estimator models realistic numbers first.
