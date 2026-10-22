---
slide: "01-07"
topic: 01-standard-vs-github-copilot
title: "What the harness leaves to you"
subtitle: "Read-only tools, approval and credentials are design decisions"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/01-07-what-the-harness-leaves-to-you.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. A two by two grid of cards: amber
  "Part of your design" (read-only tools, write access behind a workflow, approval and duplicate-write
  protection), blue "Check how each tool signs in" (maker credentials, Control maker credential
  options, background runs fail), purple "Limits of hooks and review" (a failing hook lets the agent
  continue, Request for information is Outlook only, tenant only, first response), green "Treat reads
  as data" (instructions in documents change nothing, files 10 MB and 28 days, memory private and
  deleted after 28 days). Static.
order: 9
source: demos/06-cs-gh-copilot/01-standard-vs-github-copilot/readme.md
gamma_prompt: >
  Slide titled "What the harness leaves to you", subtitle "Read-only tools, approval and credentials
  are design decisions". Left column: four short bullets on read-only tools behind a workflow, maker
  credentials, the limits of hooks and Request for information, and treating everything the agent
  reads as data. Right column, wider than the left: the provided diagram of four cards on design,
  sign-in, hooks and review limits and data handling, at its natural 16:9 aspect ratio, never cropped.
  White background, calm pastel accents. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
---

# What the harness leaves to you

## Content

- Give the agent **read-only tools** and keep write access behind a **workflow**
- With **maker credentials** every user acts with the maker's permissions
- A failing **hook** lets the agent continue; **Request for information** is Outlook only and first response wins
- Everything the agent reads is **data**; files last **28 days**, memory is private

## Speaker Notes

This slide lists what the harness does not provide by itself. The diagram groups it into four cards.

Your design: read-only tools, mandatory human approval and protection against duplicate writes are part of your design. Give the agent read-only tools and keep write access behind a workflow.

Credentials: with maker-provided credentials every user acts with the maker's permissions, so a user can reach data or actions their own account can't. Administrators can require end-user credentials under Control maker credential options in the Power Platform admin center, but the setting covers the whole environment or environment group and makes scheduled and background runs fail.

Hooks and review: a hook that fails, times out or returns something unreadable lets the agent continue as though it returned nothing, so a business-critical rule also needs a check in the system that owns the data. Request for information in a workflow pauses for a person, but it sends through Outlook only, reaches people in your tenant only and uses the first response.

Data: a document, a mail or a tool result can carry instructions, and none of them can change the agent's role or grant permissions. Created files are capped at 10 MB each and deleted 28 days after the conversation's last activity, and memory is private to each user and deleted after 28 days without interaction, so neither is the record of what was approved.
