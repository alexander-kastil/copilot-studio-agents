---
slide: "07-02"
topic: 07-evaluations
title: "A test set worth trusting"
subtitle: "Weight the cases toward where the agent is likely to fail"
layout: content
visual-weight: 1/2
visual-type: photo
media-source: nano-banana
media-file: demos/06-cs-gh-copilot/pptx/images/07-02-test-set-cases.jpg
subject: trace
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych, no
  collage. A reviewed test set left on a light-oak desk after a review session, nobody in frame: two
  printed sheets with neat rows of faint grey lines, some rows marked in the margin with a green pen
  tick and a few with a red pen circle, a green pen lying across the top sheet, a second sheet slightly
  fanned out beneath it and a plain white coffee cup at the edge. Seen from a slightly raised angle,
  the sheets sharp, the background a softly blurred bright office with a green plant. The sheets show
  only colour marks and faint grey lines, with no letters, words or numbers anywhere. Modern, light,
  bright and friendly: high-key natural daylight, soft pastel accents in light blue, mint and lavender,
  green plants, 2020s design. 2:3 portrait, contemporary editorial photography. Avoid: readable text,
  letters, numbers, logos, watermarks, people, hands, dark or moody lighting, vintage or retro decor,
  grime, clutter.
order: 19
source: demos/06-cs-gh-copilot/07-evaluations/readme.md
gamma_prompt: >
  Slide titled "A test set worth trusting", subtitle "Weight the cases toward where the agent is likely
  to fail". Side-accent layout: four bullets on the left half on plain white, the provided photograph of
  printed test sheets marked with green ticks and red circles on a light-oak desk filling the right half,
  no text over it. Use exactly the one image given for this card; do not generate or add any other
  images, icons or logos.
---

# A test set worth trusting

## Content

- **Grounded facts**: the agent reports something from its knowledge correctly
- **Guardrails**: it refuses what it should, such as a binding price quote
- **Off-topic**: it declines instead of answering from general model knowledge
- **Multi-turn**: it holds context and asks for the missing detail

## Speaker Notes

A test set is only as good as its cases, and the instinct to fill it with questions the agent already handles is exactly wrong. Four categories belong in almost every set.

Grounded facts: these cases catch a broken or still-processing knowledge source.

Guardrails: these catch instructions that drifted too permissive, such as an agent that gives a binding price quote or legal advice.

Off-topic: these check that the agent declines gracefully rather than answering from general model knowledge.

Multi-turn: these check that the agent asks which account before it answers and reaches the right end state. Quick conversation set reads the same instructions the agent answers from, so the guardrail and off-topic cases are the ones you write by hand.
