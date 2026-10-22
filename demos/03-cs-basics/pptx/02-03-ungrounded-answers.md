---
slide: "02-03"
topic: 02-knowledge
title: "Grounded and ungrounded answers"
subtitle: "What Allow ungrounded responses changes"
layout: statement
visual-weight: 1/3
visual-type: photo
subject: hands-artefact
media-source: nano-banana
media-file: demos/03-cs-basics/pptx/images/02-03-ungrounded-answers.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych, no
  collage. Close-up of the hands of a new employee at a light-oak desk in a bright office: one hand holds
  open a printed onboarding guide of a few stapled pages, the index finger of the other hand rests on a
  paragraph marked with a single mint highlighter stroke. The pages show only faint grey lines, with no
  letters, words or numbers anywhere. A white coffee cup and a small green plant stand softly out of
  focus beside the guide. Hands and guide centred in the frame. Modern, light, bright and friendly:
  high-key natural daylight, soft pastel accents in light blue, mint and lavender, green plants, 2020s
  design. 2:3 portrait, hands centred, contemporary editorial photography. Avoid: readable text, letters
  or numbers on paper, logos, watermarks, faces, extra people, dark or moody lighting, vintage or retro
  decor, grime, clutter.
order: 8
source: demos/03-cs-basics/02-knowledge/readme.md
gamma_prompt: >
  Statement slide titled "Grounded and ungrounded answers", subtitle "What Allow ungrounded responses
  changes". The single bullet as one large sentence across the left two thirds; the provided photograph
  of hands checking a paragraph in a printed onboarding guide as a side accent in the right third, no
  text over it. Use exactly the one image given for this card; do not generate or add any other images,
  icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Grounded and ungrounded answers

## Content

- An ungrounded answer sounds just as right as a grounded one, so open the **citation**: the cited file proves grounding

## Speaker Notes

One setting decides what happens when no source finds anything: Allow ungrounded responses, in the Knowledge section of the Generative AI settings page. It is on for a new agent.

Setting on: the model may answer from general knowledge without a citation. In the demo the capital of Australia question got Canberra and a limerick with no reference.

Setting off: a turn that used no source or tool is blocked and the Fallback topic answers. The capital question then showed No information was found that could help answer this, followed by the Fallback message asking to rephrase.

Partly covered questions: the question about bringing a dog to the office stayed grounded either way, because the answer cited Employee Onboarding.docx. With the setting off, only an answer with an in-text citation counts as grounded.

Citations: instructions that tell the model to omit sources can suppress citations and make answers disappear. An instruction to always cite sources keeps them consistent.
