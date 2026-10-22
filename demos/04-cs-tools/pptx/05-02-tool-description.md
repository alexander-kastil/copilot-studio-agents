---
slide: "05-02"
topic: 05-rest-api
title: "Tool descriptions the orchestrator routes on"
subtitle: "A description can also set the call order"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/04-cs-tools/pptx/images/05-02-tool-description.png
photo-link: demos/04-cs-tools/pptx/images/05-02-tool-description.png
visual-prompt: >
  REST API wizard, Configure your tool for Update food stock quantity: tool name CS-Update food stock quantity and its description ending "look the dish up with CS-Gets all food first" (pool 04-05-007).
order: 15
source: demos/04-cs-tools/05-rest-api/readme.md
gamma_prompt: >
  Slide titled "Tool descriptions the orchestrator routes on", subtitle "A description can also set the
  call order". Left column: four short bullets on what a description names, call order, the Not Found
  finding and required parameter descriptions. Right column, wider than the left: the provided
  screenshot of the wizard as an inline content image, never cropped. Use exactly the one image given
  for this card; do not generate or add any other images, icons or logos.
---

# Tool descriptions the orchestrator routes on

## Content

- Each description names the **job**, the data and when to use the tool
- "Look the dish up with CS-Gets all food first" sets the **call order**
- Without that line the agent guessed an id and got **Not Found**
- The wizard asks for a description of **every input and output** before Next turns on

## Speaker Notes

The orchestrator reads the tool description when it decides, so each one names the job, the data and when to use it. This is the third tool from the live run.

The job: a positive amount adds delivered portions, a negative amount removes used or spoiled ones. That lets one tool serve both deliveries and spoilage.

Call order: the update needs the item's id, and only the list operation knows it. The description tells the agent to look the dish up first.

Not Found: without that line the agent guessed an id and the API answered Not Found. One connector whose operations have real descriptions beats three connectors with bare ones such as "Gets all food".

Parameter descriptions: on the review page every input and output needs a description, and Next stays disabled until all are filled. The file's own descriptions are the first draft.
