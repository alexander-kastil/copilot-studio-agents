---
slide: "07-02"
topic: 07-computer-use
title: "A computer use test run"
subtitle: "The model's reasoning next to the hosted browser"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/04-cs-tools/pptx/images/07-02-test-run.png
photo-link: demos/04-cs-tools/pptx/images/07-02-test-run.png
visual-prompt: >
  Test directly run of CS-Look up portfolio: reasoning cards ending with "Manager: Yhlas Geldiyew Portfolio Value: $190,000,000" beside the hosted browser's portfolio table down to Fourth Coffee (pool 04-07-028).
order: 21
source: demos/04-cs-tools/07-computer-use/demo-computer-use.md
gamma_prompt: >
  Slide titled "A computer use test run", subtitle "The model's reasoning next to the hosted browser".
  Left column: four short bullets on the reasoning messages, the scroll to Fourth Coffee, the result and
  the credit cost. Right column, wider than the left: the provided screenshot of the test run as an
  inline content image, never cropped. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
---

# A computer use test run

## Content

- The left column shows the model's **reasoning** after each step of the run
- The hosted browser scrolls the Financial Portfolio Dashboard down to **Fourth Coffee**
- Claude Sonnet 4.5 returned **Yhlas Geldiyew, $190,000,000** exactly as the page shows it
- In chat the same lookup took **4 actions**: 20 Copilot Credits at 5 per step

## Speaker Notes

Test directly opens a window with the reasoning messages on the left and a live preview of the machine on the right. This is the first lookup from the live run.

Reasoning: each card says what the model sees and what it does next, such as scrolling because Fourth Coffee is not visible yet. Screenshots and reasoning steps stay in the run history on the Activity tab.

The scroll: the instructions name the site by its full URL and state exactly which two values to record. Precise instructions reach the goal in fewer steps, and fewer steps cost less.

The model: Claude Sonnet 4.5, preselected in the class environment, read the name exactly. Computer-Using Agent (CUA) zoomed until the Manager column was cut off and returned "Yhlas Galdiyew".

The cost: each step costs 5 Copilot Credits with a standard model and 15 with a premium one. The map view's Number of actions showed 4 for the chat run, which is 20 credits.
