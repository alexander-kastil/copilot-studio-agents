---
slide: "01-03"
topic: 01-autonomous-agents
title: "Testing and publishing the trigger"
subtitle: "Replay a recorded email first, then let the agent work alone"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/05-cs-advanced/pptx/images/01-03-replay-and-publish.png
photo-link: demos/05-cs-advanced/pptx/images/01-03-replay-and-publish.png
visual-prompt: >
  Screenshot crop of the Publish this agent dialog of CS-Returns Agent, listing the two review items
  Full Access for Editors and Your agent includes triggers that use the author's credentials, with the
  Publish button (pool 05-01-043).
order: 5
source: demos/05-cs-advanced/01-autonomous-agents/demo-returns-agent-mailbox-trigger.md
gamma_prompt: >
  Slide titled "Testing and publishing the trigger", subtitle "Replay a recorded email first, then let
  the agent work alone". Layout: Two equal columns. Left column: title, subtitle and four bullets at
  normal size. Right column: the provided screenshot of the Publish this agent dialog as an inline
  content image, scaled down to fit the card height, never cropped. Use exactly the one image given for
  this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Testing and publishing the trigger

## Content

- Before you publish, the trigger records each email but its flow run stops at the agent call
- The test icon replays a recorded email: **Trigger detected**, then **Email sent** citing returns-policy.docx
- **Publish** lists two items to review: Full Access for Editors and triggers that use the author's credentials
- After publishing, every run appears as an **Automated** row on the Activity page

## Speaker Notes

A trigger that goes live answers real customers through your credentials, so the demo tests it on one real email first and publishes second.

Safe test loop: until you publish, the trigger still records each event, but the flow run fails at the agent call and nothing is answered on its own.

Replay: the test icon next to the trigger lists the recorded emails, and Start testing runs the agent on one of them. The chat shows Trigger detected with the email as JSON, the agent answers with Email sent, and the second mailbox receives the reply that the 14-day return window has passed.

Publish: the dialog shown here lists Full Access for Editors and the warning that the trigger uses the author's credentials. Anyone who reaches the published agent might see data through those credentials, so review the trigger's scope and the tools before every publish.

Activity: in the live run, an email about a billing address became an Automated row with the status Completed, and the agent declined it because it only handles returns. A trigger never backfills, so mail that arrived before it existed is never answered.
