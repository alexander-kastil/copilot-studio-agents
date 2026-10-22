---
slide: "03-03"
topic: 03-multi-agent
title: "Proving every route"
subtitle: "Five test messages, each answered by exactly one agent or by none"
layout: diagram-full
visual-weight: 1/1
visual-type: svg
media-source: existing
media-file: demos/05-cs-advanced/03-multi-agent/_images/business-travel-planner-overview.svg
photo-link: demos/05-cs-advanced/03-multi-agent/_images/business-travel-planner-overview.svg
visual-prompt: >
  Existing demo diagram: five test messages (booking, health, allowance, gym, canteen) go into
  CS-Business Travel Planner, which routes each one to CS-Travel Agent, CS-Health Advisor, CS-Travel
  Expense Refund, its child agent Work life balance Buddy or Web Search, with the answer the guide
  expects on each route. Animated with a complete first frame.
order: 10
source: demos/05-cs-advanced/03-multi-agent/demo-business-travel-planner.md
gamma_prompt: >
  Slide titled "Proving every route", subtitle "Five test messages, each answered by exactly one agent
  or by none". Full-width diagram layout: the provided diagram spans the whole card under the title at
  its natural aspect ratio, never cropped, with one caption line below it. Use exactly the one image
  given for this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Proving every route

## Content

- With the activity map on, each message shows the agent node that answered it, and the canteen question shows none

## Speaker Notes

The activity map shows which agent node ran, so you can catch a wrong route before an employee does. Turn on Show activity map when testing and send each message in a new test conversation.

Booking: a CS-Travel Agent node runs its Book Trip topic, asks for place, date and number of travelers, and returns evening tips such as the Castle District and a Danube cruise.

Health and allowance: CS-Health Advisor gives first advice that the trip is reasonable while the symptoms stay mild. CS-Travel Expense Refund answers with €30 per 24 hours and €2.50 per commenced hour.

Gym: Work life balance Buddy names the No Pain - No Gain gym in Budapest with up to three free one-day passes and cites the gym document.

Canteen: no agent node runs; with Web Search on, the planner searches the web and says it has no access to today's menu. A request no specialist covers is the test Learn's multi-agent guidance asks for.
