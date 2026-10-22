---
slide: "01-02"
topic: 01-prompts
title: "Writing and testing a prompt"
subtitle: "Instructions, typed inputs and a test before anyone uses it"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/04-cs-tools/pptx/images/01-02-prompt-builder.png
photo-link: demos/04-cs-tools/pptx/images/01-02-prompt-builder.png
visual-prompt: >
  Prompt builder showing the CS-Calculate food to order instructions with the foodDemand and foodStock input chips, model and Test button (pool 03-04-006).
order: 4
source: demos/04-cs-tools/01-prompts/readme.md
gamma_prompt: >
  Slide titled "Writing and testing a prompt", subtitle "Instructions, typed inputs and a test before
  anyone uses it". Left column: four short bullets on instructions, inputs, testing and JSON output.
  Right column, wider than the left: the provided screenshot of prompt builder as an inline content
  image, never cropped. Use exactly the one image given for this card; do not generate or add any other
  images, icons or logos.
---

# Writing and testing a prompt

## Content

- The **instructions** say what the model does and what the answer looks like
- Typing **/** inserts an input; foodDemand and foodStock are Text inputs
- **Test** with sample values first, and save only when the output has the right shape
- "Return only a JSON array" and **temperature 0** keep the output easy to parse

## Speaker Notes

This is prompt builder with the canteen prompt from the live run. Every prompt has three parts you design: the instructions, the inputs and the output.

Instructions: they state the task and the format of the answer. Prompt assistant can draft them from a short description of your intent, between 4 and 500 characters, and the prompt library offers templates in some regions.

Inputs: a forward slash or Add content inserts a placeholder, either Text or Image or document. The chips in the screenshot are the two Text inputs the topic fills later.

Test: you type a sample value per input and select Test, and the response appears next to the instructions. In the live run the test returned 16, 8 and 12, the numbers the rule gives.

Predictable output: temperature 0 is the default and suits extraction, classification and anything a later step parses. The model wraps JSON in a code fence unless the instructions forbid it, so keep "Return no other text", or switch the output to JSON.
