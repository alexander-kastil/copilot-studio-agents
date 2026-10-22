---
slide: "01-01"
topic: 01-standard-agents
title: "Parts of an agent"
subtitle: "The HR Agent built in labs 01 to 03"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/03-cs-basics/pptx/images/01-01-agent-parts.svg
order: 3
source: demos/03-cs-basics/01-standard-agents/readme.md
gamma_prompt: >
  Slide titled "Parts of an agent", subtitle "The HR Agent built in labs 01 to 03". Layout: Two columns.
  Left column: four short bullets on the environment, instructions, knowledge and topics. Right column,
  wider than the left: the provided diagram of the HR Agent's instructions, knowledge, topics and
  settings, the environment it lives in, its two knowledge sources and the Teams channel, as an inline
  content image at its natural 16:9 aspect ratio, never cropped, never used as a background or side
  accent. Use exactly the one image given for this card; do not generate or add any other images,
  icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Parts of an agent

## Content

- Every agent lives in a Power Platform **environment** with its Dataverse database and solutions
- Name, description and **instructions** set its identity and tone
- **Knowledge** grounds its answers in websites, SharePoint, files or Dataverse
- **Topics** carry the conversations you want to control precisely

## Speaker Notes

Before any feature, the class needs a picture of what an agent is made of. This diagram shows the HR Agent the labs build, part by part.

Environment: an agent belongs to the environment you select before you create it, and that environment holds its Dataverse database, its solutions and its connections. Use a trial or sandbox environment for a new class tenant, because new unmanaged developer environments can't be created from November 15, 2026.

Instructions: the name, description and instructions set the agent's identity and tone. The HR Agent's instructions keep it on HR policies, career growth and learning pathways.

Knowledge: public websites, SharePoint, files and Dataverse let the agent answer from real content. With SharePoint, users only get answers from documents they can already open.

Topics: a topic runs a fixed path of nodes on the authoring canvas. The orchestration setting decides whether generative AI picks between topics, tools and knowledge.
