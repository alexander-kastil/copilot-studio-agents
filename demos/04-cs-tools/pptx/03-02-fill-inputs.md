---
slide: "03-02"
topic: 03-connectors
title: "How the agent fills tool inputs"
subtitle: "Dynamically fill with AI or a custom value, per input"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/04-cs-tools/pptx/images/03-02-fill-inputs.png
photo-link: demos/04-cs-tools/pptx/images/03-02-fill-inputs.png
visual-prompt: >
  Inputs of the CS-Travel Agent Teams tool: Post as, Post in and Post message request, with the Fill using list open on Dynamically fill with AI and Custom value (pool 04-02-003).
order: 9
source: demos/04-cs-tools/03-connectors/readme.md
gamma_prompt: >
  Slide titled "How the agent fills tool inputs", subtitle "Dynamically fill with AI or a custom value,
  per input". Left column: four short bullets on dynamic filling, custom values, the Teams tool's inputs
  and tool descriptions. Right column, wider than the left: the provided screenshot of the tool inputs as
  an inline content image, never cropped. Use exactly the one image given for this card; do not generate
  or add any other images, icons or logos.
---

# How the agent fills tool inputs

## Content

- **Dynamically fill with AI** (the default) takes the value from the conversation or asks for it
- A **custom value** is fixed: a value, a variable or a formula such as `System.User.Email`
- The Teams tool keeps Post as, Post in and Post message request on dynamic filling
- The orchestrator chooses the tool by its **name and description**, so rename it after Add and configure

## Speaker Notes

With generative orchestration, the agent decides which tool answers a request and also fills that tool's inputs. This screenshot is the Teams tool's Inputs section from the live run.

Dynamic filling: the agent pulls the value from the user's message or earlier turns. When it finds none, it generates a question, so you never author a question node for these inputs.

Custom value: use it when a value must never come from the user, such as their own identity or a fixed site address. A Power Fx formula like System.User.Email fills it at runtime.

The Teams inputs: the agent fills who posts, whether it goes to a chat or a channel, and the recipient and text. It asks for anything it can't find.

Name and description: they carry most of the weight when the orchestrator chooses. Names typed in the wizard don't carry over, so rename the tool on its settings page.
