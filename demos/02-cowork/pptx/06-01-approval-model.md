---
slide: "06-01"
topic: 06-staying-in-control
title: "The approval model"
subtitle: "Cowork pauses before anything that leaves your workspace"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/02-cowork/pptx/images/06-01-calendar-approval-card.png
photo-link: demos/02-cowork/pptx/images/06-01-calendar-approval-card.png
visual-prompt: >
  Screenshot from the Work IQ scheduling demo run (pool 02-01-023, 1098x714), native crop
  0,12,1098,632: the Create calendar event? card at Medium risk for the one-hour Agentic AI session,
  with an empty Attendees field, its three-point agenda, Cancel and Save, and the Always allow Create
  event option open under the arrow.
order: 18
source: demos/02-cowork/06-staying-in-control/readme.md
gamma_prompt: >
  Slide titled "The approval model", subtitle "Cowork pauses before anything that leaves your
  workspace". Left column: five short bullets. Right column, wider than the left: the provided
  screenshot of a Create calendar event? approval card marked Medium risk, as an inline content image
  at its natural aspect ratio, never cropped. White background. Use exactly the one image given for
  this card; do not generate or add any other images, icons or logos.
---

# The approval model

## Content

- The card names the action as a question, here **Create calendar event?**, and shows what it will write
- **Save** approves this one action, and the task records Approved 1 action
- The arrow beside it offers **Always allow Create event** for the rest of the session
- **Medium risk** changes your content or calendar; **high risk** reaches other people
- New files in Output and saved drafts need **no approval**

## Speaker Notes

Cowork acts on your behalf, but never behind your back. The screenshot is the card from the Work IQ scheduling demo, where Cowork booked a one-hour Agentic AI session on your own calendar.

The card: before Cowork sends an email, posts in Teams, books or changes a meeting or edits an existing file, it pauses and shows what it will write. Here that is the date, the title, the attendees and the agenda, all still editable.

Approve once: the action button, here Save, approves that one action, and Cancel skips it while Cowork carries on. When several approvals are pending, Approve All (n) releases every one of them.

More options: the arrow approves and skips similar prompts for the rest of the session; for email and Teams it offers Only to a recipient, Only to a domain, or Always allow. The Permissions section of the Workspace panel lets you review or revoke those choices.

Risk levels: creating or updating an event, editing a file or mailing yourself shows Medium, while mail to other people or a Teams post shows High. The indicator on the card is the authority: the review deck sent to your own address showed Medium.

No approval: new files in the task's Output and an email saved to your Drafts folder need no approval, so a prompt that ends with do not send stops at a draft. The follow-up package demo of this topic relies on that: it saves the partner email as a draft with no approval, then books the follow-up call through a medium-risk approval.
