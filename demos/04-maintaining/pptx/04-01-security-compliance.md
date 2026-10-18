---
slide: "04-01"
topic: 04-governance-compliance
title: "Security and compliance controls"
subtitle: "Guardrails on what agents can see and do"
layout: content
visual-weight: 1/2
visual-type: photo
media-source: nano-banana
media-file: demos/04-maintaining/pptx/images/04-01-security-compliance.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych, no
  collage. In a bright operations corner with a long white desk and two large monitors, a Power
  Platform admin and a compliance officer, a woman and a man in their early thirties in modern
  work-casual clothes, review policy settings together: the admin sits and works the keyboard while the
  compliance officer stands beside her holding a blank tablet and points at one of the monitors, both
  relaxed and smiling. The two people and the monitors are on the right half of the frame; the left half
  is a bright white wall and a tall green plant. Modern, light, bright and friendly: high-key natural
  daylight, white and light-oak contemporary interior, soft pastel accents in light blue, mint and
  lavender, green plants, 2020s design. Screens show only soft blurred shapes and colours, never
  readable UI. 16:9 landscape, contemporary editorial photography. Avoid: readable text, logos,
  watermarks, dark or moody lighting, vintage or retro decor, grime, clutter, extra people, text on the
  tablet, badges or lanyards with text.
order: 9
source: demos/04-maintaining/04-governance-compliance/readme.md
gamma_prompt: >
  Slide titled "Security and compliance controls", subtitle "Guardrails on what agents can see and do".
  Five short bullets on the left half on plain white, the provided photograph of an admin and a
  compliance officer reviewing settings at two monitors as a side accent on the right half. Use exactly
  the one image given for this card; do not generate or add any other images, icons or logos.
---

# Security and compliance controls

## Content

- **Copilot Studio settings** at tenant, environment and agent level
- **Geographic data residency**
- **Data loss prevention** and connector governance limit which systems an agent can reach
- **Microsoft Purview**: sensitivity labels that agents respect, and unified audit logs
- **DLP for Microsoft 365 Copilot** and retention policies

## Speaker Notes

Every agent that connects to enterprise data is a new surface for oversharing and compliance risk. This slide lists the guardrails that limit what agents can see and do.

Copilot Studio settings: compliance and security settings exist at three levels, the tenant, the environment and the individual agent.

Geographic data residency: it sits with the Copilot Studio compliance and security settings.

Data loss prevention and connector governance: environment-level DLP and connector rules limit which systems an agent can reach.

Microsoft Purview: agents respect sensitivity labels, and unified audit logs record what happened.

DLP for Microsoft 365 Copilot and retention: Purview adds DLP for Microsoft 365 Copilot and retention policies on top.
