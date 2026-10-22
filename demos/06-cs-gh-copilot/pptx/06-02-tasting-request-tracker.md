---
slide: "06-02"
topic: 06-apps
title: "The Tasting Request Tracker"
subtitle: "An app refined by conversation, checked in the live preview"
layout: diagram
visual-weight: 1/2
visual-type: diagram
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/06-02-tasting-request-tracker.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image, minimum 26px type. Redrawn from live
  screenshot 06-06-011, a 941 px pool shot in which the app preview is 505 px wide; the pools hold no
  larger shot of the app. Left, three grey message cards with amber number badges: 1 Describe (customer
  name, product, requested date and status, a list, a summary by status, sample data), 2 Refine 1 (a
  priority field with the choices High, Medium and Low, High priority first), 3 Refine 2 (statuses New,
  Scheduled, Completed and Cancelled; New and Scheduled count as open, Completed and Cancelled as
  closed). Right, the Tasting Request Tracker live preview window with badge 1 in its title bar: a
  summary card with badge 3 (Open requests 8 over an amber and blue bar, New 3, Scheduled 5; Closed:
  Completed 2, Cancelled 1) and a list with badge 2 grouped into HIGH PRIORITY 3 requests, MEDIUM
  PRIORITY 4 requests and LOW PRIORITY 4 requests, each row a High, Medium or Low pill and a blank
  name bar.
order: 22
source: demos/06-cs-gh-copilot/06-apps/demo-06-build-an-app.md
gamma_prompt: >
  Slide titled "The Tasting Request Tracker", subtitle "An app refined by conversation, checked in the
  live preview". Layout: Two columns. Left column: the bullets. Right column, wider than the left: the
  provided diagram of the three messages and the app preview they shaped as an inline content image at
  its natural 16:9 aspect ratio, scaled to fit the column, never cropped, never used as a background or side accent. Use
  exactly the one image given for this card; do not generate or add any other images, icons or logos.
---

# The Tasting Request Tracker

## Content

- **Describe**: one message named the people, the data and the actions; the first draft took about five minutes
- **Refine 1**: a priority field, with High requests listed first
- **Refine 2**: four statuses, with New and Scheduled counted as open
- **Check** each change in the preview before sending the next one

## Speaker Notes

The loop from the previous slide, run live for Aurora Provisions, whose sales reps logged customer tasting requests in email. The diagram puts the three messages on the left and the app preview on the right after the second refinement, with matching numbers on the parts each message shaped.

Describe: the first message named the customer name, product, requested date and status, asked for a list and a summary by status, and asked for sample data. After about five minutes the chat reported the app built, checked and published, with 11 sample requests.

Refine 1: "Add a priority field with the choices High, Medium, and Low" regrouped the list into high, medium and low priority sections. The reply said the change was only in the preview until you publish again.

Refine 2: changing the statuses to New, Scheduled, Completed and Cancelled also changed the logic. The summary now counts 3 New and 5 Scheduled as 8 open, and 2 Completed and 1 Cancelled as 3 closed, 11 in all.

Check: compare the preview with the request before sending the next change, and remember that the code view is read-only. Publish and Share are two separate steps, and sharing the app does not grant access to a connected list.
