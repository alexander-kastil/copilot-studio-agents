---
slide: "01-02"
topic: 01-basics
title: "Topics and generative answers"
subtitle: "How orchestration picks a topic or knowledge for each prompt"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/03-copilot-studio/pptx/images/01-02-topics-or-knowledge.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading inside the image, no
  arrow crossing a box or a label. Left: two blue #eaf2ff prompt bubbles "What's your feedback for my
  role?" and "How can we hire new people in our company?", each with an arrow into an amber #fff6e5 box
  "Generative orchestration" (understands the intent, reads every name and description, picks the best
  topic or knowledge). Right: three arrows to a purple #f3edff box "Topic: Collect user's role" (collect
  user's role and provide feedback) and two green #e9f7ef boxes "Knowledge: HR Documents" (policies,
  procedures, and rules related to the HR department) and "Knowledge: Microsoft Careers site" (benefits,
  culture, diversity and inclusion, and hiring tips). Bottom grey #f6f8fa band "Classic orchestration":
  starts the topic whose trigger phrases match the query most closely; each topic lists 5 to 10 trigger
  phrases instead of one description. Animated with SMIL, 10 second loop: amber dots carry the first
  prompt to the topic, then the second prompt to both knowledge sources. Complete and readable at t=0.
order: 4
source: demos/03-copilot-studio/01-basics/readme.md
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

- A **topic** runs a precise, repeatable flow from its trigger and nodes
- **Knowledge** with generative answers covers open-ended questions over your content
- Generative orchestration reads each name and **description** to pick the best match
- Classic orchestration starts the topic whose **trigger phrases** match most closely

## Speaker Notes

With the parts in place, the next question is which part answers a given prompt. The diagram follows two prompts from the labs.

Topic: reach for a topic when the flow must be precise and repeatable, such as opening a ticket or booking a room. The role feedback prompt lands in the Collect user's role topic.

Knowledge: open-ended questions over your content go to knowledge sources and generative answers. The hiring question draws on HR Documents and the Microsoft Careers site.

Descriptions: generative orchestration understands the intent and picks the best knowledge, topic or action. That is why every knowledge source and topic needs a meaningful name and description.

Trigger phrases: classic orchestration starts the topic whose trigger phrases match the query most closely, with 5 to 10 phrases per topic. Generative orchestration is the default, so the labs stay on it.
