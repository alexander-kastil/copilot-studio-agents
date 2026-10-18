---
slide: "03-02"
topic: 03-custom-skills
title: "Anatomy of a SKILL.md"
subtitle: "A YAML header plus plain-language instructions"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/02-cowork/pptx/images/03-02-skill-anatomy.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI and Consolas, 2px #8c959f
  borders, text #24292f and #57606a, pastel fills, no heading inside the image. Left: a file card
  titled weekly-report/SKILL.md showing the readme's example verbatim, the YAML header on a blue band
  and the instructions on a green band; the folder name in the tab and the value of name are both
  highlighted amber. Right: three callouts with arrows into the file, amber "name: matches the folder
  exactly, lowercase, numbers, hyphens, up to 64 characters", blue "description: what Cowork reads to
  decide when the skill applies, specific, trigger-oriented", green "instructions: the step-by-step
  recipe Cowork follows, SKILL.md up to 1 MB". Static.
order: 10
source: demos/02-cowork/03-custom-skills/readme.md
gamma_prompt: >
  Slide titled "Anatomy of a SKILL.md", subtitle "A YAML header plus plain-language instructions".
  Left column: five short bullets. Right column, wider than the left: the provided diagram of an
  annotated weekly-report SKILL.md with callouts for name, description and instructions, at its
  natural 16:9 aspect ratio, never cropped. White background, calm pastel accents. Use exactly the
  one image given for this card; do not generate or add any other images, icons or logos.
---

# Anatomy of a SKILL.md

## Content

- The **name** is kebab-case, up to 64 characters, and matches its folder exactly
- The **description** is what Cowork reads to decide when the skill applies
- The **body** is the step-by-step recipe Cowork follows, up to 1 MB
- **Companion files** sit beside it: up to 20 files and 10 MB per skill
- Name each companion file **in the instructions** so Cowork reads it

## Speaker Notes

This slide takes apart the weekly-report example from the topic readme. A skill file has two parts: a YAML header with a name and a description, and plain-language instructions.

Name: lowercase letters, numbers and hyphens only, so the folder weekly-report/ must carry name: weekly-report. A mismatch between folder and name is the most common reason a skill silently fails to load.

Description: make it specific and trigger-oriented. A vague "helps with reports" rarely matches, while "writes my weekly Northern Europe status report from my emails and figures" loads at the right moment.

Body: here it gathers a week of sent mail and calendar events and writes a Word report with Highlights, In Progress, Blockers and Next Week. A SKILL.md can be up to 1 MB.

Companion files: reference documents, templates or scripts that live in the skill folder next to the SKILL.md. A proposal-writing skill, for example, can carry your standard template so every output matches house style.

In the instructions: point the skill at the companion file by name, and Cowork reads it whenever the skill runs. The product-pitch demo does this with pitch-deck-structure.pptx.
