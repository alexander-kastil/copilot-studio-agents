---
slide: "03-03"
topic: 03-topics
title: "The rewards detour in the test chat"
subtitle: "The first reward request runs the employee questions"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/03-cs-basics/pptx/images/03-03-employee-detour.png
photo-link: demos/03-cs-basics/pptx/images/03-03-employee-detour.png
visual-prompt: >
  Screenshot from the CS-HR Buddy test run (pool 03-01-011), cropped to the end of the detour: the
  department answer Marketing, the cost center 4711, the paid leave message and Please choose your
  reward: with A free dinner and A visit to theatre.
order: 11
source: demos/03-cs-basics/03-topics/demo-hr-buddy-employee-topics.md
gamma_prompt: >
  Slide titled "The rewards detour in the test chat", subtitle "The first reward request runs the
  employee questions". Layout: Two columns. Left column: four short bullets. Right column, wider than the
  left: the provided screenshot of the test chat as an inline content image at its natural aspect ratio,
  never cropped, never used as a background or side accent. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# The rewards detour in the test chat

## Content

- A reward request from an unknown employee runs **Collect Employee Data** first
- The cost center is recognized as a **Number**
- The paid leave message confirms the employee
- The redirect returns to **Please choose your reward:**

## Speaker Notes

This is the live test of CS-HR Buddy, cropped to the end of the detour: the employee questions finish and the rewards topic takes over again.

Detour: Global.EmployeeIdentified is still empty at the start of the session, so the condition sends the reward request through Collect Employee Data. The chat shows the last answers, the department Marketing and the cost center 4711.

Paid leave message: the topic greets the employee by first and last name and confirms 25 days of paid leave. In the same step it sets the global variable to true.

Return: the redirect hands control back to the rewards topic, which asks Please choose your reward: with A free dinner and A visit to theatre.

Second request: in the same session a new reward request asks only the reward question, because the employee is already identified. An extra Please choose your reward: right after the first confirmation comes from the orchestrator, not from the topic.
