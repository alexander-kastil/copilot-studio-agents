---
slide: "02-01"
topic: 02-knowledge
title: "Knowledge source types"
subtitle: "What the agent searches and who can see the content"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/03-cs-basics/pptx/images/02-01-knowledge-sources.svg
order: 6
source: demos/03-cs-basics/02-knowledge/readme.md
gamma_prompt: >
  Slide titled "Knowledge source types", subtitle "What the agent searches and who can see the content".
  Layout: Two columns. Left column: four short bullets. Right column, wider than the left: the provided
  diagram of the knowledge source types in four groups by who can see the content, with the name and
  description band below, as an inline content image at its natural 16:9 aspect ratio, never cropped,
  never used as a background or side accent. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Knowledge source types

## Content

- **Add knowledge** offers websites, files, SharePoint, Dataverse, Azure AI Search and connectors
- SharePoint and Dataverse answer within the **signed-in user's** permissions
- An **uploaded file** can answer everyone who chats with the agent
- Each source gets a **name and description** the orchestrator chooses by

## Speaker Notes

An agent with good instructions but no knowledge answers from the model's general training and cites nothing your company wrote. Knowledge sources change that: the agent searches the content you point it at and grounds its reply with citations.

Source types: the Add knowledge dialog offers public websites, uploaded files, SharePoint, Dataverse, Azure AI Search, real-time connectors and unstructured data. Every source added at agent level lands in the Conversational boosting system topic, so the agent answers from it without any topic work.

Signed-in user: SharePoint, Dataverse and Copilot connector sources use the user's Microsoft Entra ID sign-in, so two people asking the same question can get different answers. This is the column makers underestimate.

Uploaded files: an uploaded file has no such filter, so every user of the agent can be answered from it. Keep its name short, because a long name fails to sync with PropertyLengthTooLong.

Name and description: Learn asks for a description that is as detailed as possible, because generative orchestration uses it to decide which source to search. The demo adds HR Documents and Sightseeing, each with its own description.
