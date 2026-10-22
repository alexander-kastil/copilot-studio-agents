---
slide: "07-03"
topic: 07-evaluations
title: "From a failing case to a fix"
subtitle: "What went wrong names the component to change"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: existing
media-file: demos/06-cs-gh-copilot/07-evaluations/_images/failing-case-to-fix.svg
photo-link: demos/06-cs-gh-copilot/07-evaluations/_images/failing-case-to-fix.svg
visual-prompt: >
  Existing topic diagram, static: a failing test case leads to an amber decision "What went wrong?",
  which splits into four outcomes (fact is wrong or missing, refused too little or too much, wrong tool
  or no tool, lost the thread across turns), each with its fix (knowledge source, instructions, tool
  description, multi-turn conversation design), all ending in "Re-run the same test set".
order: 20
source: demos/06-cs-gh-copilot/07-evaluations/readme.md
gamma_prompt: >
  Slide titled "From a failing case to a fix", subtitle "What went wrong names the component to change".
  Layout: Two columns. Left column: the bullets. Right column, wider than the left: the provided diagram
  as an inline content image at its natural 16:9 aspect ratio, scaled to fit the column, never cropped,
  never used as a background or side accent. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
---

# From a failing case to a fix

## Content

- **Wrong or missing fact**: fix the knowledge source
- **Refused too little or too much**: fix the instructions
- **Wrong tool or no tool**: fix the tool description
- **Lost the thread across turns**: fix the multi-turn design, then re-run the same set

## Speaker Notes

The value of evaluation is the path from a symptom to a cause. A failing case tells you the answer was wrong; the activity map tells you which component let it down.

Wrong or missing fact: the knowledge source is missing, still processing, or too unstructured to retrieve cleanly.

Refused too little or too much: a missing refusal or a tone problem is almost always the instructions.

Wrong tool or no tool: the orchestrator selects tools by matching the request against their descriptions, so the right answer through the wrong path is a description problem.

Lost the thread: a conversation that never recovers after a clarifying question is a multi-turn design problem rather than a content one. Every fix ends in a re-run of the identical set, one change at a time, so a case that flips from fail to pass is the signal.
