---
slide: "03-02"
topic: 03-topics
title: "Sharing state between topics"
subtitle: "CS-HR Buddy identifies an employee once"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: existing
media-file: demos/03-cs-basics/03-topics/_images/hr-buddy-employee-topics-overview.svg
photo-link: demos/03-cs-basics/03-topics/_images/hr-buddy-employee-topics-overview.svg
visual-prompt: >
  Existing demo diagram: in CS-HR Buddy the first reward request redirects through Collect Employee
  Data, which sets Global.EmployeeIdentified to true, and the second request goes straight to the
  dinner or theatre reward.
order: 10
source: demos/03-cs-basics/03-topics/demo-hr-buddy-employee-topics.md
gamma_prompt: >
  Slide titled "Sharing state between topics", subtitle "CS-HR Buddy identifies an employee once".
  Layout: full-width diagram. The provided diagram of the rewards topic, its condition and redirect, and
  the Collect Employee Data topic across the whole card width at its natural 16:9 aspect ratio, never
  cropped, then one caption line under it. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Sharing state between topics

## Content

- Collect Employee Data sets **Global.EmployeeIdentified**, so the rewards topic detours through it only until the employee is known

## Speaker Notes

CS-HR Buddy keeps its behavior in two topics, and one global variable connects them. The agent level stays thin: a one-line description, a one-line instruction and the HR Documents site.

Collect Employee Data: four questions bind to entities, Person name for both names, multiple choice options for the department and Number for the cost center. The topic confirms 25 days of paid leave and sets Global.EmployeeIdentified to true.

Collect Employee rewards: a Condition with Not(Global.EmployeeIdentified) redirects an unknown employee to Collect Employee Data, which returns to the reward question afterwards. The choices are a free dinner or a visit to theatre.

Variable scope: a topic variable lives only while its topic runs, a global variable keeps its value for the whole session. Start over resets global variables, so the next reward request detours again.

Descriptions: under generative orchestration the agent picks each topic by its name and the description on the Trigger node. The description therefore lists the requests the topic handles.
