---
slide: "04-01"
topic: 04-new-experience
title: "Choosing the experience per agent"
subtitle: "Classic and new run in one tenant, and the choice is fixed at creation"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/03-copilot-studio/pptx/images/04-01-experience-per-agent.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. A grey frame "One tenant, both
  experiences live". Left: a white box "Read the navigation" with an arrow down into an amber box
  "Confirm the experience" holding a toggle glyph and "New experience toggle", captioned "A per-agent
  choice, not a tenant-wide switch". A fork leads right: "off" into a blue lane "Classic experience,
  authored topics and branching" with a small Trigger, Branch and two-node tree; "on" into a purple
  lane "New experience, instructions plus the reasoning runtime" with an Instructions box feeding a
  "Runtime, every turn" loop. Between the lanes: "No conversion: decide before you invest" and "The
  experience is fixed when the agent is created". SMIL animation on an 8 second loop: a dot travels
  from the toggle into the classic lane, then a second dot into the new lane, each lane pulsing amber
  when the dot arrives.
order: 12
source: demos/03-copilot-studio/04-new-experience/01-new-experience-overview/readme.md
gamma_prompt: >
  Slide titled "Choosing the experience per agent", subtitle "Classic and new run in one tenant, and
  the choice is fixed at creation". Left column: four short bullets on the June 2026 preview, the
  per-agent New experience toggle, the missing conversion path and when to pick each experience.
  Right column, wider than the left: the provided diagram showing one tenant where a toggle sends each
  agent into a classic lane or a new-experience lane that never meet, at its natural 16:9 aspect
  ratio, never cropped. White background, calm pastel accents. Use exactly the one image given for
  this card; do not generate or add any other images, icons or logos.
---

# Choosing the experience per agent

## Content

- **Production-ready preview** since June 2026, running beside classic
- The **New experience** toggle is set per agent, not once per tenant
- **No conversion** in either direction, so decide before you invest
- **Classic** for exact, auditable paths; new for greenfield agents over Microsoft 365 data

## Speaker Notes

This slide opens the new experience by showing where it sits next to classic. The diagram shows one tenant in which each agent goes into one experience and stays there.

Production-ready preview: Microsoft shipped the rebuilt Copilot Studio in June 2026 and rolled it out worldwide. It runs beside classic rather than replacing it, so nothing students run today is moved or rewritten.

Per-agent toggle: open the home page, choose Try it now on the banner, then use the New experience toggle. Treat it as a choice per agent, not a switch flipped once for the whole tenant.

No conversion: classic uses authored topics and branching, while the new experience uses instructions plus the reasoning runtime, so there is no import path between them. Moving a mature agent to the other experience means re-authoring it from scratch.

When to pick which: classic leads when the flow must follow an exact, auditable path or needs a feature the new experience has not surfaced yet. The new experience suits a greenfield agent that reasons over Microsoft 365 data with the simpler instructions-first model.
