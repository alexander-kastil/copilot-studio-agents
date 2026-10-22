---
slide: "03-02"
topic: 03-agent-harnesses
title: "Choose the harness"
subtitle: "Answer before you create the agent"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: opus-svg
media-file: demos/01-intro/pptx/images/03-02-choose-a-harness.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  2px #8c959f borders, text #24292f and #57606a, pastel fills, minimum 28px type, no heading inside the
  image. A top-down decision path of four white question boxes on the left, joined by "No" arrows going
  down; each question has a "Yes" arrow to the right ending in a harness card in the same colors as the
  four-harnesses slide. Question 1 "Extend Copilot Chat for employees?" Yes to purple #f3edff card "Copilot
  chat". Question 2 "Customers by website chat or phone, with a person to hand over to?" Yes to dashed amber
  #fff6e5 card "Customer Conversation". Question 3 "Must every conversation follow paths a maker defines?"
  Yes to green #e9f7ef card "Standard". Question 4 "Plans across tools and files, needs memory, recovers
  from failed steps?" Yes to blue #eaf2ff card "GitHub Copilot", and its "No" arrow ends in a second, smaller
  green card "Standard". On the far right, one grey #f6f8fa side note "Then check: where do users reach it,
  and which billing fits?". Along the bottom, one wide grey #f6f8fa bar "Mixed needs: decide by the dominant
  job. Agents and workflows combine; each agent runs on one harness."
order: 11
source: demos/01-intro/03-agent-harnesses/readme.md
gamma_prompt: >
  Slide titled "Choose the harness", subtitle "Answer before you create the agent". Full-width diagram
  layout: title and subtitle at the top, the provided diagram across the whole card width at its natural
  aspect ratio, never cropped, then one caption line under it. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
---

# Choose the harness

## Content

- Walk the questions **top to bottom**; the first Yes names the harness, then check reach and billing

## Speaker Notes

Five questions separate what a solution needs from the appeal of one feature, and the diagram walks four of them in order.

Copilot Chat first: when the requirement is grounded answers for employees inside the Copilot Chat they already use, the Copilot chat harness fits, and no separate agent experience is needed.

Customers second: when customers reach the agent through a website or a phone number and need a person behind it, the Customer Conversation harness fits.

Fixed paths third: when every conversation must follow questions and branches a maker controls, the standard harness fits. When the work plans across several tools and files, needs memory or must recover from a failed step, the GitHub Copilot harness fits; otherwise Standard is the simpler choice.

Then check where users reach the agent and which billing model the organization accepts. A requirement that mixes answers goes by its dominant job, and a solution can combine several agents and workflows, each on one harness.
