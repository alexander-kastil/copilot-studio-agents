---
slide: "01-01"
topic: 01-basics
title: "Parts of an agent"
subtitle: "The HR Agent built in labs 01 to 03"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/03-copilot-studio/pptx/images/01-01-agent-parts.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading inside the image, no
  arrow crossing a box or a label. Left: a white header box "HR Agent" with "Model: GPT-4.1 (Default)",
  a spine down to four part rows: Instructions blue #eaf2ff (HR policies, career growth, learning
  pathways; professional tone, answers from its sources), Knowledge green #e9f7ef (public website and
  SharePoint site; name and description say what is inside), Topics purple #f3edff (Collect user's
  role, Register a new candidate, Register new candidate with adaptive cards), Settings amber #fff6e5
  (orchestration: generative AI, chooses the best knowledge, topic or action). Below them a grey
  #f6f8fa band "Power Platform environment", "Copilot Dev Camp (Developer), where the agent lives".
  Each row carries a lab pill (Lab 01, Lab 02, Lab 03). Right column: "Microsoft Teams" (Teams +
  Microsoft 365 channel) reached by a "Publish" arrow from the header, and two green knowledge boxes
  "Microsoft Careers site" (public website, careers.microsoft.com) and "HR Documents" (SharePoint site,
  answers only from documents the user has access to) reached from the Knowledge row. Static.
order: 3
source: demos/03-copilot-studio/01-basics/readme.md
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

- Every agent lives in a Power Platform **environment**, managed in the admin center
- Name, description and **instructions** set its identity and tone
- **Knowledge** grounds its answers in websites, SharePoint, files or Dataverse
- **Topics** carry the conversations you want to control precisely

## Speaker Notes

Before any feature, the class needs a picture of what an agent is made of. This diagram shows the HR Agent the labs build, part by part.

Environment: an agent belongs to a Power Platform environment, and the admin center is where you manage environments, security and Dataverse before you build anything. In the labs that is the Copilot Dev Camp developer environment.

Instructions: the name, description, instructions and general settings set the agent's identity and tone. The HR Agent's instructions keep it on HR policies, career growth and learning pathways.

Knowledge: public websites, SharePoint, files and Dataverse let the agent answer from real content. With SharePoint, users only get answers from documents they have access to.

Topics: a topic is the classic unit of deterministic conversation, built from trigger phrases and nodes on the authoring canvas. The settings decide whether generative orchestration picks between topics and knowledge.
