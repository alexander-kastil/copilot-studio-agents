---
slide: "03-01"
topic: 03-topics
title: "Topics and generative answers"
subtitle: "How orchestration picks a topic or knowledge for each prompt"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/03-cs-basics/pptx/images/03-01-topics-or-knowledge.svg
order: 9
source: demos/03-cs-basics/03-topics/readme.md
gamma_prompt: >
  Slide titled "Topics and generative answers", subtitle "How orchestration picks a topic or knowledge
  for each prompt". Layout: Two columns. Left column: four short bullets on topics, knowledge,
  descriptions and classic trigger phrases. Right column, wider than the left: the provided diagram of
  two prompts routed by generative orchestration to a topic and to two knowledge sources, with classic
  orchestration below, as an inline content image at its natural 16:9 aspect ratio, never cropped,
  never used as a background or side accent. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Topics and generative answers

## Content

- A **topic** runs a fixed path of nodes: questions, messages, conditions, redirects
- **Knowledge** with generative answers covers open-ended questions over your content
- Generative orchestration picks a topic by its **description**
- Classic orchestration starts the topic whose **trigger phrases** match most closely

## Speaker Notes

Knowledge answers open questions, but some requests must follow a fixed path every time, such as reporting a broken device or registering a candidate. The diagram follows two prompts from the labs to show which part answers.

Topic: a topic asks the questions you wrote in your order, checks each answer and replies with exactly the message you designed. The role feedback prompt lands in the Collect user's role topic.

Knowledge: open-ended questions go to knowledge through generative answers. The hiring question draws on HR Documents and the Microsoft Careers site.

Descriptions: under generative orchestration the Trigger node switches to The agent chooses, and the topic needs a description of its purpose. Write descriptions that say what each topic does and doesn't do, because overlapping descriptions lead to unpredictable choices.

Trigger phrases: classic orchestration matches the user's message against 5 to 10 trigger phrases per topic, and the language model matches meaning rather than exact words.
