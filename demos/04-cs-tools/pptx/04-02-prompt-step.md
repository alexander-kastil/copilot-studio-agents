---
slide: "04-02"
topic: 04-agent-flows
title: "A prompt step inside an agent flow"
subtitle: "CS-Classify Patient Symptoms classifies, the topic branches"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/04-cs-tools/pptx/images/04-02-prompt-step.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Consolas for inputs and the
  output name, borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading inside the
  image, no arrow crossing a box. Three boxes left to right joined by arrows: blue "When an agent calls
  the flow" with Number Age: 34, Text Gender: female, Text Symptoms: slight headache and a runny nose
  since yesterday; purple "Run a prompt, CS-Classify Patient Symptoms" with one model call at a fixed
  step, reads only its instructions and the three inputs, no tools and no knowledge search; green
  "Respond to the agent, Outcome (Text)" with the prompt's text response ending with "Patient is cleared
  for light work and movement." An arrow down to a grey band "Check Symptoms topic" that stores the
  Outcome and asks a follow-up question only when it lacks "cleared for light work". Static.
order: 12
source: demos/04-cs-tools/04-agent-flows/demo-health-advisor-flows.md
gamma_prompt: >
  Slide titled "A prompt step inside an agent flow", subtitle "CS-Classify Patient Symptoms classifies,
  the topic branches". Left column: four short bullets on the Run a prompt step, its inputs, the test
  result and the Outcome output. Right column, wider than the left: the provided diagram as an inline
  content image at its natural 16:9 aspect ratio, never cropped, never used as a background or side
  accent. Use exactly the one image given for this card; do not generate or add any other images, icons
  or logos.
---

# A prompt step inside an agent flow

## Content

- **Run a prompt** makes one model call at a fixed point in the flow
- The prompt reads only its **instructions** and the age, gender and symptoms it is given
- With 34, female and mild symptoms, the answer ends "Patient is cleared for light work and movement."
- **Respond to the agent** returns that text as Outcome, and the topic branches on it

## Speaker Notes

A flow can still use a model, as long as the model does one bounded job at a fixed point. This is the classification step of CS-Summarize Patient Symptoms with the test values from the demo.

Run a prompt: the action sits in the AI capabilities section and returns text or structured output for the next action. It makes a single model call with no tools and no knowledge search.

Only its instructions: the prompt node never searches SharePoint or reads mail on its own. An earlier step passes the data in, here the three trigger inputs.

The test: in the live run, 34, female and a slight headache with a runny nose came back with an analysis ending in the cleared-for-light-work sentence. The wording around it varies from run to run.

The Outcome: Respond to the agent returns the prompt's text response, and the Check Symptoms condition asks a follow-up question only when that sentence is missing. The cloned flow returned the trigger body instead, so every check fell into the serious branch.
