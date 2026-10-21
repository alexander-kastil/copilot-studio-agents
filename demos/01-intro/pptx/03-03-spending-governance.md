---
slide: "03-03"
topic: 03-where-to-build
title: "Spending governance"
subtitle: "Limits and alerts set when you activate Copilot Credits"
layout: diagram
visual-weight: 1/2
visual-type: photo
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
order: 13
source: demos/01-intro/03-where-to-build/readme.md
gamma_prompt: >
  Slide titled "Spending governance", subtitle "Limits and alerts set when you
  activate Copilot Credits". Left column: four short bullets. Right column: the provided diagram showing user
  columns capped by a per-user limit and a tenant total with alert thresholds below its monthly
  ceiling. White background, calm pastel accents. Use exactly the one image given for this card; do
  not generate or add any other images, icons or logos.
---

# Spending governance

## Content

- **Monthly spending limit**: the tenant's total ceiling for the billing period
- **Per-user limit**: the most any one user can consume, at least 2,000 credits a month
- **Alert thresholds**: notifications at set percentages of the limit
- Set them **at activation**, with numbers from the Copilot Credit Estimator

## Speaker Notes

Copilot Credits without limits are a surprise waiting to happen, so this slide covers the guardrails you set when you activate them.

Monthly spending limit: this is the tenant's total ceiling for the billing period.

Per-user limit: it caps the most any one user can consume, so a single heavy user cannot drain the tenant's credits. Microsoft sets the minimum at 2,000 credits a month, and a user who reaches it loses access until credits reset on the first of the month.

Alert thresholds: notifications fire at set percentages of the limit, so you hear about spend before you hit the ceiling.

At activation: set all three when you activate, not after the first large bill. The Copilot Credit Estimator helps you pick realistic numbers before go-live.
