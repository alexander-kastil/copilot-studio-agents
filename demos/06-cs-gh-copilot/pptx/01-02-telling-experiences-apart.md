---
slide: "01-02"
topic: 01-standard-vs-github-copilot
title: "Telling Standard and GitHub Copilot apart"
subtitle: "The navigation shows which one is open"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/01-02-telling-experiences-apart.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. Two Copilot Studio window
  wireframes side by side, captioned "Standard: navigation down the left" and "GitHub Copilot: tabs
  across the top". Left window: a blue sidebar listing Topics, Knowledge, Tools and Settings, with
  Topics highlighted amber and an amber callout "Topics means Standard" pointing at it; grey content
  placeholders. Right window: a top tab row Build, Preview, Evaluate, Monitor highlighted amber, an
  amber callout "Tabs mean GitHub Copilot" pointing up at it, and below the label "Build tab:
  components panel" four cards: a purple Instructions card "Seeded from your description" and dashed
  empty cards Knowledge, Tools and Skills. Static.
order: 4
source: demos/06-cs-gh-copilot/01-standard-vs-github-copilot/readme.md
gamma_prompt: >
  Slide titled "Telling Standard and GitHub Copilot apart", subtitle "The navigation shows which one is open".
  Left column: four short bullets on the Standard left navigation, the GitHub Copilot top tabs, Topics
  as the sign of Standard, and checking the badge before creating an agent. Right column, wider than the left:
  the provided diagram of two Copilot Studio windows side by side, Standard with its navigation down
  the left and GitHub Copilot with its tabs across the top, at its natural 16:9 aspect ratio,
  never cropped. White background, calm pastel accents. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
---

# Telling Standard and GitHub Copilot apart

## Content

- **Standard**: Topics, Knowledge, Tools and Settings down the left
- **GitHub Copilot**: Build, Preview, Evaluate and Monitor tabs across the top
- **Topics** in the navigation always means a Standard agent
- Check the badge in the **New agent** menu **before you create** an agent

## Speaker Notes

The previous slide made the choice; this one gives the habit that protects it: knowing which kind of agent is open before building anything. The diagram puts both surfaces side by side.

Standard navigation: a Standard agent opens on an Overview page with Knowledge, Tools, Topics and Settings. It is the topic-driven surface most production agents use today.

GitHub Copilot tabs: a GitHub Copilot agent opens on the Build tab with Build, Preview, Evaluate and Monitor across the top. The panel on the right lists Model, Channels, Skills, Tools, Knowledge, Connected agents and a Memory switch.

Topics means Standard: if Topics appears in the navigation, you are in a Standard agent. In the demo and the lab, that sign means going back to the New agent menu and creating the agent again with the GitHub Copilot badge.

Check before you create: a minute spent reading the badge and the navigation saves an hour of building in the wrong place.
