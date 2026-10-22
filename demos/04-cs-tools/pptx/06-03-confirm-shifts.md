---
slide: "06-03"
topic: 06-mcp
title: "Booking shifts after a confirmation"
subtitle: "The agent reads freely and writes after a yes"
layout: statement
visual-weight: 1/3
visual-type: photo
media-source: nano-banana
subject: object
media-file: demos/04-cs-tools/pptx/images/06-03-confirm-shifts.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych,
  no collage. Close still life at the end of the bar in a bright modern restaurant before Friday evening
  service: two clean work aprons hang ready side by side on brass hooks, a short dark bartender's apron
  and a long white waiter's apron, beside a tray of freshly polished wine glasses on the light-oak
  counter; behind them, softly out of focus, empty tables are set with white linen and green plants. No
  people in frame. Modern, light, bright and friendly: high-key natural daylight, soft pastel accents in
  light blue, mint and lavender, green plants, 2020s design. 16:9 landscape, contemporary editorial
  photography. Avoid: readable text, logos, watermarks, people, embroidery or name tags on the aprons,
  labels on bottles, dark or moody lighting, vintage or retro decor, grime, clutter.
order: 19
source: demos/04-cs-tools/06-mcp/demo-restaurant-hr-mcp.md
gamma_prompt: >
  Statement card titled "Booking shifts after a confirmation", subtitle "The agent reads freely and
  writes after a yes". One large sentence across the left two thirds about the two shifts booked only
  after the user confirms. The provided photograph of a bartender's apron and a waiter's apron hanging
  ready at a restaurant bar as a side accent in the right third, no text over it. Use exactly the one
  image given for this card; do not generate or add any other images, icons or logos.
---

# Booking shifts after a confirmation

## Content

- The agent books **Sofia on the bar and Luca on waiter duty** for 2026-11-06 only after you confirm, and the server sets each shift to eight hours

## Speaker Notes

A read is harmless, a write changes the schedule. The guideline "Always confirm changes before finalizing schedules" in the instructions makes the agent stop before it calls assign_shift.

Two calls after the yes: before the confirmation the activity map shows no assign_shift call. After it, two calls run with the date 2026-11-06 and shiftStartHour 14, and the server answers from 14:00 to 22:00.

Allow all: all server tools are on by default. Turn it off and switch off remove_employee, so a scheduling agent can never delete staff and tools the server adds later stay off until you turn them on.

The schedule by email: CS-Send an email, an Office 365 Outlook tool with Ask the end user before running, sends the schedule the instructions promise. It needs a Message to display, or the call fails with "This tool requires user confirmation, but no confirmation message has been set."
