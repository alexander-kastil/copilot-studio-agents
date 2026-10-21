---
slide: "06-01"
topic: 06-apps
title: "Building apps"
subtitle: "Describe the app, then review and refine it until the main scenarios work"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/06-01-building-apps.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, rounded rectangles,
  2px #8c959f borders, text #24292f and #57606a, pastel fills, no heading inside the image,
  minimum 28px type. Four numbered boxes. Left, blue: 1 "Describe the problem" with "Name the
  outcome, people, data, and actions" and "Answer follow-up questions". Top centre, green: 2
  "Review the draft" with "Test the main scenario in the live preview". Bottom centre, purple: 3
  "Refine by conversation" with "Describe one small change" and "Add a file, a screenshot, or
  annotate the canvas". An arrow runs from 1 into 2, a down arrow from 2 to 3 and an up arrow
  from 3 to 2, with "Repeat" between them. Right, amber: 4 "Publish" with "Release the latest
  tested version", reached from 2 by an arrow labelled "When the main scenarios work". SMIL
  animation on a 12 second loop: box 1 lights up, then review and refine light up in turn twice,
  then the exit arrow and Publish. Complete and readable at t=0.
order: 7
source: demos/06-cs-gh-copilot/06-apps/readme.md
gamma_prompt: >
  Slide titled "Building apps", subtitle "Describe the app, then review and refine it until the
  main scenarios work". Left column: four short bullets on the first description, refining one
  small change at a time with a read-only code view, data access granted separately from sharing
  the app, and Copilot Credits billed from the first build.
  Right column, wider than the left: the provided diagram of the build loop from describing the
  problem, through repeated review and refine, to publishing, at its natural 16:9 aspect ratio,
  never cropped. White background, calm pastel accents. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
---

# Building apps

## Content

- **Describe**: name the outcome, people, data and actions; Copilot Studio generates the data model, logic and interface
- **Refine**: one small change per message, checked in the live preview; the code view is read-only
- **Data access**: granted on the SharePoint list or Dataverse table, separately from sharing the app
- **Copilot Credits**: billing starts as soon as you start building

## Speaker Notes

Apps sit beside GitHub Copilot agents and workflows: build an app when a person needs a screen to enter, find or review records, and pair it with a workflow for fixed steps and an agent for questions. Walk the diagram from the first description to publishing; the demo and the lab follow the same loop.

Describe: the first message names the outcome, the people, the data and the actions, and Copilot Studio might ask follow-up questions before it builds. It then generates the data model, the logic and the user interface and shows the app in a live preview beside the chat.

Refine: each change updates the data model, the logic and the interface together, so keep requests small and test the preview after each one. You can also attach a file, add a screenshot or annotate the canvas, and because the code view is read-only, every change goes through the conversation.

Data access: apps reach connected data with the signed-in user's identity, and sharing an app doesn't give people access to the data it uses. The owner of the list or table grants that access, and changes made after publishing stay hidden from app users until you publish again.

Copilot Credits: building, previewing and testing an app consume credits, while in the standard harness billing starts after publishing. Apps are in public preview and administrators can turn app creation off, so your environment might not show the App tile yet.
