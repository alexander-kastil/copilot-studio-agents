---
slide: "01-01"
topic: 01-standard-vs-github-copilot
title: "Choosing Standard or GitHub Copilot per agent"
subtitle: "Both run in one tenant, and the choice is fixed at creation"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/01-01-experience-per-agent.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. A grey frame "One tenant, both
  agent types live". Left: a white box "Read the navigation" with an arrow down into an amber box
  "Confirm the agent type" holding a toggle glyph and "New agent menu", captioned "A per-agent
  choice, not a tenant-wide switch". A fork leads right: "Standard" into a blue lane "Standard agent,
  authored topics and branching" with a small Trigger, Branch and two-node tree; "GitHub Copilot" into a purple
  lane "GitHub Copilot agent, instructions plus the reasoning runtime" with an Instructions box feeding a
  "Runtime, every turn" loop. Between the lanes: "No conversion: decide before you invest" and "The
  agent type is fixed when the agent is created". SMIL animation on an 8 second loop: a dot travels
  from the menu into the Standard lane, then a second dot into the GitHub Copilot lane, each lane pulsing amber
  when the dot arrives.
order: 1
source: demos/06-cs-gh-copilot/01-standard-vs-github-copilot/readme.md
gamma_prompt: >
  Slide titled "Choosing Standard or GitHub Copilot per agent", subtitle "Both run in one tenant, and
  the choice is fixed at creation". Left column: four short bullets on the June 2026 preview, the
  New agent menu with its two badges, the missing conversion path and when to pick each type.
  Right column, wider than the left: the provided diagram showing one tenant where the New agent menu sends each
  agent into a Standard lane or a GitHub Copilot lane that never meet, at its natural 16:9 aspect
  ratio, never cropped. White background, calm pastel accents. Use exactly the one image given for
  this card; do not generate or add any other images, icons or logos.
---

# Choosing Standard or GitHub Copilot per agent

## Content

- **GitHub Copilot agents** since June 2026, running beside **Standard** agents
- Choose per agent in the **New agent** menu: **GitHub Copilot** first, **Standard** under **Other ways to build**
- **No conversion** in either direction, so decide before you invest
- **Standard** for exact, auditable paths; **GitHub Copilot** for greenfield agents over Microsoft 365 data

## Speaker Notes

This slide opens GitHub Copilot agents by showing where they sit next to Standard agents. The diagram shows one tenant in which each agent is created as one type and stays there.

Production-ready preview: Microsoft shipped GitHub Copilot agents (Learn: GitHub Copilot harness) in June 2026 and rolled them out worldwide. They run beside Standard agents (Learn: standard harness) rather than replacing them, so nothing students run today is moved or rewritten.

New agent menu: on the home page, open the arrow next to **New agent**. **Agent** with the **GitHub Copilot** badge sits under Optimize your business processes and **Agent** with the **Standard** badge under **Other ways to build**; the agents list shows Standard for a standard agent, and **Open classic experience** in the side bar menu opens existing ones. Treat it as a choice per agent, not a switch flipped once for the whole tenant.

No conversion: Standard agents use authored topics and branching, while GitHub Copilot agents use instructions plus the reasoning runtime, so there is no import path between them. Moving a mature agent to the other type means re-authoring it from scratch.

When to pick which: Standard leads when the flow must follow an exact, auditable path or needs a feature GitHub Copilot agents have not surfaced yet. GitHub Copilot suits a greenfield agent that reasons over Microsoft 365 data with the simpler instructions-first model.
