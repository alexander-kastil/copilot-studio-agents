---
slide: "07-01"
topic: 07-evaluations
title: "A routing test set for the travel planner"
subtitle: "Seven cases, two test methods and two failing cases with different owners"
layout: diagram-full
visual-weight: 1/1
visual-type: svg
media-source: existing
media-file: demos/05-cs-advanced/07-evaluations/_images/evaluate-the-travel-planner-overview.svg
photo-link: demos/05-cs-advanced/07-evaluations/_images/evaluate-the-travel-planner-overview.svg
visual-prompt: >
  Existing demo diagram: the Travel planner routing test set, graded by Answer quality and Meaning
  match and run twice, splits into two failing cases: the canteen answer is an agent problem fixed by
  turning off Web Search, and the refund-claim card is a test-case problem that stays in the set.
  Animated with a complete first frame.
order: 17
source: demos/05-cs-advanced/07-evaluations/demo-evaluate-the-travel-planner.md
gamma_prompt: >
  Slide titled "A routing test set for the travel planner", subtitle "Seven cases, two test methods and
  two failing cases with different owners". Full-width diagram layout: the provided diagram spans the
  whole card under the title at its natural aspect ratio, never cropped, with one caption line below
  it. Use exactly the one image given for this card; do not generate or add any other images, icons or
  logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# A routing test set for the travel planner

## Content

- The baseline run scored Answer quality 86% and Meaning match 71%, and its two failures had two different owners

## Speaker Notes

In the multi-agent demo each route looked right when you tried it once. A test set runs the same questions the same way every time, so a drop in the score points at the change you just made.

The set: Travel planner routing holds seven questions in the template's two columns, question and expectedResponse, one per specialist, one for the child agent and one that no agent owns. Answer quality comes by default, and Meaning match with a pass score of 50 is added.

Routes: Tool use can't grade them, because its Select tools picker lists the planner's 13 topics and no connected agents. Each case's Details panel names the connected or child agent instead.

Profile: the gym answer needs SharePoint and CS-Travel Agent posts to Teams, so the run uses your own account with a green Microsoft Teams connection.

Two failures: the canteen answer came from public web pages, an agent problem. The refund claim came back as the title of an Adaptive Card, a test-case problem that stays in the set to prove the route.
