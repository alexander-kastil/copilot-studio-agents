---
slide: "03-02"
topic: 03-custom-skills
title: "Anatomy of a SKILL.md"
subtitle: "A YAML header plus plain-language instructions"
layout: split-code
visual-weight: 1/2
visual-type: svg
media-source: existing
media-file: demos/02-cowork/03-custom-skills/_images/companion-files.svg
photo-link: demos/02-cowork/03-custom-skills/_images/companion-files.svg
visual-prompt: >
  Existing topic diagram companion-files.svg: the product-pitch and meeting-prep skill folders, each
  with a SKILL.md that names its companion file, pitch-deck-structure.pptx or
  meeting-brief-template.docx, and the limit of 20 companion files and 10 MB per skill.
order: 10
source: demos/02-cowork/03-custom-skills/demo-01-product-pitch-skill.md
gamma_prompt: >
  Slide titled "Anatomy of a SKILL.md", subtitle "A YAML header plus plain-language instructions".
  Two short bullets under the title. Left column: a light grey panel holding the given SKILL.md code
  block in a monospace font, exactly as given. Right column: the provided diagram of two skill
  folders with their companion files, at its natural aspect ratio, never cropped. White background.
  Use exactly the one image given for this card; do not generate or add any other images, icons or
  logos.
---

# Anatomy of a SKILL.md

## Content

- The **name** matches its folder, and the **description** is what Cowork reads to decide when the skill applies
- **Companion files** sit beside `SKILL.md`, up to 20 files and 10 MB, each named in the instructions

```markdown
---
name: product-pitch
description: Turns a market brief, research report, or product document into a wholesale partner pitch deck in Aurora Outdoor house structure, with every claim traced back to a named source. Use whenever I say build a pitch, pitch this to partners, turn this brief into a deck, or name a range or season to pitch.
---

Produce a seven-card partner pitch deck in the house structure defined by pitch-deck-structure.pptx, which sits in this skill folder.
```

## Speaker Notes

This slide takes apart the product-pitch skill from the first demo of the topic. A skill file has two parts: a YAML header with a name and a description, and plain-language instructions.

Name: lowercase letters, numbers and hyphens, up to 64 characters, and it must match its folder, so product-pitch/ carries name: product-pitch. A mismatch is the most common reason a skill silently fails to load.

Description: Cowork reads only the description to decide whether the skill applies, so it names the phrases you would actually type, such as build a pitch or turn this brief into a deck. A vague description like helps with reports rarely matches.

Instructions: the body is the step-by-step recipe Cowork follows, up to 1 MB. This one fills seven cards in order and never invents pricing, order tiers or terms.

Companion files: the diagram shows both demo skills, product-pitch naming pitch-deck-structure.pptx and meeting-prep naming meeting-brief-template.docx. Cowork reads the companion file whenever the skill runs.
