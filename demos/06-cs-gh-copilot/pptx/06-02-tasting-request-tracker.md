---
slide: "06-02"
topic: 06-apps
title: "The Tasting Request Tracker"
subtitle: "An app refined by conversation, checked in the live preview"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/06-cs-gh-copilot/pptx/images/06-02-tasting-request-tracker.png
photo-link: demos/06-cs-gh-copilot/pptx/images/06-02-tasting-request-tracker.png
visual-prompt: >
  Live screenshot, pool id 06-06-011: the app build conversation on the left after the status change
  request, and the Tasting Request Tracker preview on the right with 8 open requests (3 New, 5
  Scheduled), 3 closed, and the sample requests grouped into high, medium and low priority.
order: 22
source: demos/06-cs-gh-copilot/06-apps/demo-06-build-an-app.md
gamma_prompt: >
  Slide titled "The Tasting Request Tracker", subtitle "An app refined by conversation, checked in the
  live preview". Layout: Two columns. Left column: the bullets. Right column, wider than the left: the
  provided screenshot of the conversation and the app preview as an inline content image at its natural
  aspect ratio, scaled to fit the column, never cropped, never used as a background or side accent. Use
  exactly the one image given for this card; do not generate or add any other images, icons or logos.
---

# The Tasting Request Tracker

## Content

- **Describe**: one message named the people, the data and the actions; the first draft took about five minutes
- **Refine 1**: a priority field, with High requests listed first
- **Refine 2**: four statuses, with New and Scheduled counted as open
- **Check** each change in the preview before sending the next one

## Speaker Notes

The loop from the previous slide, run live for Aurora Provisions, whose sales reps logged customer tasting requests in email. The screenshot shows the conversation on the left and the app preview on the right after the second refinement.

Describe: the first message named the customer name, product, requested date and status, asked for a list and a summary by status, and asked for sample data. After about five minutes the chat reported the app built, checked and published, with 11 sample requests.

Refine 1: "Add a priority field with the choices High, Medium, and Low" regrouped the list into high, medium and low priority sections. The reply said the change was only in the preview until you publish again.

Refine 2: changing the statuses to New, Scheduled, Completed and Cancelled also changed the logic. The summary now counts 3 New and 5 Scheduled as 8 open, and 2 Completed and 1 Cancelled as 3 closed, 11 in all.

Check: compare the preview with the request before sending the next change, and remember that the code view is read-only. Publish and Share are two separate steps, and sharing the app does not grant access to a connected list.
