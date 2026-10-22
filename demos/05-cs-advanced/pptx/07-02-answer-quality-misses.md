---
slide: "07-02"
topic: 07-evaluations
title: "What Answer quality misses"
subtitle: "A confident answer from the wrong source can pass it"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/05-cs-advanced/pptx/images/07-02-canteen-case.png
photo-link: demos/05-cs-advanced/pptx/images/07-02-canteen-case.png
visual-prompt: >
  Screenshot crop of the Results panel for the case What is on the canteen menu today?: the expected
  response "The planner has no access to the canteen menu and says so." beside the Details verdicts,
  Answer quality Pass and Meaning match Fail 0 with its analysis (pool 05-07-017).
order: 18
source: demos/05-cs-advanced/07-evaluations/readme.md
gamma_prompt: >
  Slide titled "What Answer quality misses", subtitle "A confident answer from the wrong source can pass
  it". Layout: Two columns. Left column: four short bullets on the two graders and the canteen case.
  Right column, wider than the left: the provided screenshot of the canteen case with its expected
  response and two verdicts as an inline content image at its natural aspect ratio, never cropped,
  never used as a background or side accent. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# What Answer quality misses

## Content

- **Answer quality** judges the reply alone and never reads the expected response
- The planner answered the canteen question with a full menu from public school web pages
- Answer quality passed it; **Meaning match** scored it 0 against "has no access"
- Pair Answer quality with a **comparing method** on cases with one right answer

## Speaker Notes

The baseline run looked good at 86 percent, and the case that mattered hid behind that number. This slide opens it.

Answer quality: it checks relevance, groundedness, completeness and whether the agent attempted an answer. It never reads your expected response, so a confident reply built from the wrong source can pass.

The canteen case: the planner answered with breakfast, lunch and a second choice, and the case's activity listed public web pages as the referenced sources.

Meaning match: it compares the reply with "The planner has no access to the canteen menu and says so." and gave it Fail with a score of 0. Only the comparison caught that the agent should not have answered.

The reverse: in the next run the planner said it couldn't find a reliable menu. Meaning match gave it 100, and Answer quality failed the correct refusal as Not answered, so grade refusals with a comparing method or a Custom method.
