---
slide: "03-03"
topic: 03-connectors
title: "Whose credentials a tool uses"
subtitle: "End user credentials ask each person to connect once"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/04-cs-tools/pptx/images/03-03-connect-to-continue.png
photo-link: demos/04-cs-tools/pptx/images/03-03-connect-to-continue.png
visual-prompt: >
  Connect to continue card for Microsoft Teams in the CS-Travel Agent test chat, with Allow and Cancel (pool 04-01-004).
order: 10
source: demos/04-cs-tools/03-connectors/readme.md
gamma_prompt: >
  Slide titled "Whose credentials a tool uses", subtitle "End user credentials ask each person to
  connect once". Left column: four short bullets comparing end user and maker-provided credentials.
  Right column, wider than the left: the provided screenshot of the Connect to continue card as an
  inline content image, never cropped. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
---

# Whose credentials a tool uses

## Content

- **End user credentials** (the default): each person connects on first use and acts with their own access
- **Maker-provided credentials** run every call with the author's access
- Maker-provided credentials need an **authenticated channel**, and admins can turn them off
- The Publish dialog then warns: "Your agent runs tools that use the author's credentials."

## Speaker Notes

Every connector call runs as someone, and that choice decides what data the agent can reach. The card in the screenshot is the first Teams call of CS-Travel Agent with end user credentials.

End user credentials: each user selects Allow once, and the agent can only do what that person could do. The trip summary then appears in the channel under the user's own name.

Maker-provided credentials: every user acts with the author's access, which suits shared resources every user may read. The risk to manage is oversharing.

The conditions: maker-provided credentials need an authenticated channel, and administrators can turn the option off per environment in the Power Platform admin center. Plan for that before you build an agent around shared credentials.

The live finding: a Teams post tool on end user credentials stopped another test chat at "Let's get you connected first", and Retry kept failing. Switching that tool to maker-provided credentials fixed it, and the Publish dialog then showed the warning.
