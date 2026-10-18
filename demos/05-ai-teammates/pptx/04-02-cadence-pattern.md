---
slide: "04-02"
topic: 04-proactive-teammates
title: "The Cadence pattern"
subtitle: "An execution-review agent from the Learn documentation"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/05-ai-teammates/pptx/images/04-02-cadence-pattern.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text #24292f
  and #57606a, pastel fills, no heading inside the image, minimum 28px type. Seven blue boxes in reading
  order, four in the top row left to right and three in the bottom row right to left, joined by arrows:
  Recurrence trigger fires, Read tracker and status evidence, Find blockers and missing updates,
  Generate a new review document, Send link to reviewers, Reviewers reply or comment, People decide
  priorities. SMIL animation, 10 s loop: the steps light up in order with a dot on each arrow; complete
  and readable at t=0.
order: 12
source: demos/05-ai-teammates/04-proactive-teammates/readme.md
gamma_prompt: >
  Slide titled "The Cadence pattern", subtitle "An execution-review agent from the Learn documentation".
  Left: five bullets. Right, wider: the provided seven-step flow from the recurrence trigger through
  reading the tracker, finding blockers, generating a review document and sending the link to reviewers
  who reply while people decide priorities. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
---

# The Cadence pattern

## Content

- **Inputs**: an approved workstream tracker and a small internal reviewer group
- Each **scheduled run** reads the tracker, finds blockers and creates a review document
- A **new document** each cycle, because co-authoring is not supported
- **Preserve uncertainty**: a missing reply does not mean the work is on track
- **Stop and explain** when a source, connection or permission is missing

## Speaker Notes

Cadence is the execution-review agent from the Learn documentation and a useful template for any review process. The diagram shows one cycle from the trigger to the people who decide.

Inputs: the maker gives it an approved workstream tracker and a small internal reviewer group. Then come supported tools and a recurrence trigger.

Scheduled run: it reads the tracker and status evidence, identifies blockers and missing updates, generates a new review document and sends reviewers the link.

New document: the design works inside the preview limits on purpose. Cadence creates a fresh document each cycle because co-authoring an existing one is not supported.

Preserve uncertainty: its instructions say a missing reply does not mean the work is on track. It must not invent metrics, owners, dates or completion.

Stop and explain: when a source, connection, permission or output tool is unavailable, it says what is missing and stops the affected action. People own prioritization and sign-off.
