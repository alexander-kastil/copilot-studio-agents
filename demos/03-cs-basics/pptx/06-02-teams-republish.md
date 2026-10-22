---
slide: "06-02"
topic: 06-publishing
title: "CS-HR Buddy in Teams"
subtitle: "The republished message after start over"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/03-cs-basics/pptx/images/06-02-teams-republish.png
photo-link: demos/03-cs-basics/pptx/images/06-02-teams-republish.png
visual-prompt: >
  Screenshot from the 03/06 demo run (pool 03-06-020), cropped to the Teams conversation with CS-HR
  Buddy: the department question with the Marketing, Software Engineering and Accounting buttons, the
  cost center 4711 and the republished message ending Ask me to collect your employee reward next.
order: 18
source: demos/03-cs-basics/06-publishing/demo-publish-hr-buddy.md
gamma_prompt: >
  Slide titled "CS-HR Buddy in Teams", subtitle "The republished message after start over". Layout: Two
  columns. Left column: four short bullets. Right column, wider than the left: the provided screenshot of
  the Teams chat as an inline content image at its natural aspect ratio, never cropped, never used as a
  background or side accent. Use exactly the one image given for this card; do not generate or add any
  other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# CS-HR Buddy in Teams

## Content

- The published agent runs the same **topics** in a Teams chat
- The department options appear as **buttons**
- After **Publish** and `start over`, the message ends with the new sentence
- Start over also clears **Global.EmployeeIdentified**

## Speaker Notes

The test panel runs the draft; Teams runs what you published. This is the live Teams chat with CS-HR Buddy after the change of the last exercise.

Same topics: the employee questions, the entities and the paid leave message work in the published version exactly as in the test panel. Microsoft 365 Copilot opened the same questions from Agents, More agents, because the agent was missing from the @ list right after the install.

Buttons: Teams renders the three department options as buttons, and it shows at most six suggested actions in a question.

Republish: the demo appends Ask me to collect your employee reward next. to the paid leave message, saves, publishes and types start over in Teams. A running Teams conversation keeps the old version until a new session starts.

Reset: Start Over also clears global variables, so a reward request right after it detours through the employee questions again. Force newest version in the Publish dialog moves ongoing Teams chats at once, but it can interrupt conversations in progress.
