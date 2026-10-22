---
slide: "07-01"
topic: 07-computer-use
title: "Computer use on web apps without an API"
subtitle: "Two tools for the help desk agent, fenced to one site"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: existing
media-file: demos/04-cs-tools/07-computer-use/_images/computer-use-overview.svg
photo-link: demos/04-cs-tools/07-computer-use/_images/computer-use-overview.svg
visual-prompt: >
  Existing demo diagram: CS-Grey Logistics IT Help Desk uses CS-Look up portfolio on the Financial
  Portfolio Dashboard and CS-Register inventory items on the Product Inventory Update form, both fenced
  to computerusedemos.blob.core.windows.net.
order: 20
source: demos/04-cs-tools/07-computer-use/demo-computer-use.md
gamma_prompt: >
  Slide titled "Computer use on web apps without an API", subtitle "Two tools for the help desk agent,
  fenced to one site". Full-width layout: the provided diagram across the whole card under the title at
  its natural aspect ratio, never cropped, with one caption line below it. Use exactly the one image
  given for this card; do not generate or add any other images, icons or logos.
---

# Computer use on web apps without an API

## Content

- **CS-Look up portfolio** reads a client's manager and value, **CS-Register inventory items** types two products into a form, both limited to one HTTPS site

## Speaker Notes

Some systems have no API and no connector, and people still use them every day by looking at the screen. Computer use gives a Standard agent the same ability through a virtual mouse and keyboard, guided by plain-language instructions.

The loop: the tool takes a screenshot, decides the next action, performs it and repeats until the task is done. Because the model reads the screen, it adapts when a button moves, where a recorded script would break.

Where it runs: every run needs a Windows machine, either the hosted browser (preview), a Cloud PC pool (preview) or your own machine registered in Power Automate. The demo runs on the hosted browser.

Two tools: CS-Look up portfolio takes the client name as an input, and CS-Register inventory items fills five fields twice. The orchestrator keeps lookups and entries apart by reading the two descriptions.

Fenced: Only allow specific websites and desktop apps limits both tools to the sample site plus Microsoft Edge, and Enforce HTTPS is on by default. Use dedicated machines with least privilege, and when the app later gains an API or a connector, replace the tool with it.
