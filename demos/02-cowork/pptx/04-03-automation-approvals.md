---
slide: "04-03"
topic: 04-automation
title: "Approvals in automated tasks"
subtitle: "The weekly status report runs every Friday; the send waits for you"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/02-cowork/pptx/images/04-03-recurring-task-card.png
photo-link: demos/02-cowork/pptx/images/04-03-recurring-task-card.png
visual-prompt: >
  Screenshot from the automation demo run (pool 02-04-025): the Create recurring task? card for the
  Weekly Regional Status Report, Northern Europe, set to Weekly, Friday, 3:00 PM in a new
  conversation, with the start of its Description; cropped above the line naming the recipient
  address.
order: 14
source: demos/02-cowork/04-automation/demo-01-automation.md
gamma_prompt: >
  Slide titled "Approvals in automated tasks", subtitle "The weekly status report runs every Friday;
  the send waits for you". Left column: five short bullets. Right column, wider than the left: the
  provided screenshot of the Create recurring task? card for the weekly status report, as an inline
  content image at its natural aspect ratio, never cropped. White background. Use exactly the one
  image given for this card; do not generate or add any other images, icons or logos.
---

# Approvals in automated tasks

## Content

- **Create recurring task?** sets the name, Weekly, Friday, 3:00 PM, and a new conversation per run
- The **Description** is the prompt every run receives, including where the draft goes
- **Run once now** is ticked by default; clear it so the first run waits for Friday
- Each run leaves the report under Output and a **Hi Elena** email in your Drafts folder
- **Scheduling the run does not approve the send**: nothing leaves until you say so

## Speaker Notes

This slide shows what an automated task may do while you are not watching, on the weekly status report from the topic's demo. The screenshot is the card Cowork proposed when asked to run the weekly-status-report skill every Friday at 3 PM.

Create recurring task?: check that Repeat reads Weekly, Friday, 3:00 PM and that Run in starts a new conversation for each run. Select Schedule, and Cowork confirms the first run date.

Description: every run receives this text as its prompt, so read it before you schedule. In the class tenant it addresses the draft to you, because Elena Varga has no mailbox there.

Run once now: leave it ticked to watch a first run and its approvals straight away, or clear it so the first run lands on Friday. After the demo, pause the task on the Automations page, because each run spends Copilot Credits.

Drafts: each run writes a one-page Word report and saves an email that starts Hi Elena to your Drafts folder. New files in Output and a saved draft need no approval.

Not approved: by default scheduled and event-driven tasks hold any send, post or change for your approval, and pre-authorizing actions when you create a task trades control for speed. Tasks run with your permissions, are rate-limited and are guarded against triggering themselves in a loop.
