---
slide: "05-02"
topic: 05-connect-foundry-agents
title: "Collect, confirm, then hand off"
subtitle: "CS-Compliance Agent calls CS-Social Profiler only after the user confirms"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/05-cs-advanced/pptx/images/05-02-handoff-step.png
photo-link: demos/05-cs-advanced/pptx/images/05-02-handoff-step.png
visual-prompt: >
  Screenshot crop of the Instructions card of CS-Compliance Agent: the end of step 3, step 4 Prepare
  Data for Handoff, the new step 5 Run the Background Check with CS-Social Profiler shown twice as an
  agent chip, and the Error Handling section (pool 05-05-025).
order: 14
source: demos/05-cs-advanced/05-connect-foundry-agents/demo-compliance-agent-foundry.md
gamma_prompt: >
  Slide titled "Collect, confirm, then hand off", subtitle "CS-Compliance Agent calls CS-Social Profiler
  only after the user confirms". Layout: Two columns. Left column: four short bullets on the model, the
  numbered steps, step 5 and the error handling. Right column, wider than the left: the provided
  screenshot of the instructions with step 5 as an inline content image at its natural aspect ratio,
  never cropped, never used as a background or side accent. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Collect, confirm, then hand off

## Content

- **Claude Sonnet 4.6** runs CS-Compliance Agent, chosen for following long, ordered instructions
- Numbered steps explain the check, collect name, email and company, then **confirm** them
- New **step 5** calls CS-Social Profiler only after the user confirmed the details
- **Error handling** asks again for invalid data, so a broken email address stops the check

## Speaker Notes

Before a new hire starts, HR checks who the person is, and the research behind that check belongs to a data team that built it in Foundry. CS-Compliance Agent collects and confirms the details and hands them to that team's agent.

Model: Claude Sonnet 4.6 is an external model from Anthropic, and the admin has to allow external models first. A model that follows long, ordered instructions suits a check where skipping the confirmation is the real risk.

Steps: the instructions spell out explain, collect, confirm and prepare, so the agent asks one thing per turn and never sends unconfirmed data on.

Step 5: the original instructions only promised that the data is ready for the next step. The added step names CS-Social Profiler as a reference, typed with a slash, at the one point where the details are confirmed.

Error handling: in the second test run, jana.novak(at)example made the agent say the format looks invalid and ask for a corrected address. No CS-Social Profiler node appeared, so no data left the agent.
