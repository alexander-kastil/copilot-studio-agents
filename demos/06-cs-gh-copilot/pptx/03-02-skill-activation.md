---
slide: "03-02"
topic: 03-agent-skills
title: "Testing a skill in Preview"
subtitle: "The description decides when the skill fires"
layout: split-code
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/06-cs-gh-copilot/pptx/images/03-02-skill-activation.png
photo-link: demos/06-cs-gh-copilot/pptx/images/03-02-skill-activation.png
visual-prompt: >
  Live screenshot, pool id 06-01-036 (1568x765), native crop 466,236,1136,650 saved at 670x414 (06-01-034
  has the mouse pointer over the reply): GH-Health Advisor in Preview answering "Please draft an
  appointment request to the company doctor: I need a pre-travel check before my business trip to
  Singapore on 3 November." The step list opens with Used skill: doctor-appointment-request-drafter and
  the agent's date reasoning; the reply gives the booking deadline, the two slots Friday 23 October and
  Monday 26 October, and the start of the markdown draft with its subject line.
order: 14
source: demos/06-cs-gh-copilot/03-agent-skills/demo-03-add-a-reusable-skill.md
gamma_prompt: >
  Slide titled "Testing a skill in Preview", subtitle "The description decides when the skill fires".
  Split code layout: left column a light grey panel with the SKILL.md front matter as a code block and
  one bullet, right column the provided screenshot of the Preview reply at its natural aspect ratio,
  never cropped. Use exactly the one image given for this card; do not generate or add any other images,
  icons or logos.
---

# Testing a skill in Preview

## Content

- **Used skill** in the step list proves the match; a near-miss question must stay quiet

```yaml
---
name: doctor-appointment-request-drafter
description: Draft an appointment request to the company doctor
  ONLY when the employee explicitly asks to book, request, or
  schedule an appointment, a pre-travel check, or a fit-to-travel
  note. Do not use for general health questions, symptom advice,
  fasting or nutrition questions, travel advice, or questions
  about consultation hours.
---
```

## Speaker Notes

The previous slide showed how a skill loads on demand; this one shows the test that proves it. The screenshot is from the live run, where GH-Health Advisor carried the skill doctor-appointment-request-drafter; the demo guide runs the same steps with follow-up-email-drafter on the Northwind Sales Assistant.

The description: it is the only part of the skill the runtime sees until a request matches, so it carries the words an employee actually types. This is the tightened version that went back in with Replace, and it names what the skill must not handle as well.

The match: asked to draft an appointment request for a pre-travel check, the step list opens with Used skill: doctor-appointment-request-drafter. The reply names the booking deadline and two consultation slots, then starts the draft in the skill's response format with its subject line.

The near miss: a plain question, such as the consultation hours, must answer from knowledge with no Used skill line. When a skill fires too often or never, change the description before you touch the instructions.

Upload and share: the file was uploaded unchanged with Upload a skill, which marks it read-only, and Download gives back a portable copy in the same open format as Claude Code and GitHub Copilot.
