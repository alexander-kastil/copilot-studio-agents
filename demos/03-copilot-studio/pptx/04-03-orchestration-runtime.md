---
slide: "04-03"
topic: 04-new-experience
title: "The enhanced orchestration runtime"
subtitle: "How one question becomes a plan across sources and tools"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/03-copilot-studio/pptx/images/04-03-orchestration-runtime.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. Left: grey box "One multi-part
  question" with an arrow into a large purple box "Enhanced orchestration runtime", subtitle "Always
  on, not a setting you choose", holding a white card "Multi-step plan" (one question becomes an
  ordered plan of several steps) and an amber card "Deep reasoning" (automatic on complex tasks, or
  forced by the keyword reason). Below the runtime, stacked green cards "Knowledge sources" and
  stacked blue cards "Tools", each joined by a "consult" arrow down and a "result" arrow up. Right:
  green box "One answer, stitched together". SMIL animation on an 8 second loop: a dot carries the
  question into the runtime, down to the sources and tools, back up, and out to the answer.
order: 14
source: demos/03-copilot-studio/04-new-experience/02-unified-build-and-orchestrator/readme.md
gamma_prompt: >
  Slide titled "The enhanced orchestration runtime", subtitle "How one question becomes a plan
  across sources and tools". Left column: five short bullets on the Build tab components panel, the
  always-on runtime, multi-step plans, deep reasoning and how the plan is made visible. Right column,
  wider than the left: the provided diagram showing one question flowing into the runtime, out to
  knowledge sources and tools, and back as one answer, at its natural 16:9 aspect ratio, never
  cropped. White background, calm pastel accents. Use exactly the one image given for this card; do
  not generate or add any other images, icons or logos.
---

# The enhanced orchestration runtime

## Content

- **Build tab**: Instructions, Knowledge, Tools and Skills sit in one components panel
- **Always on**: every new-experience agent runs this runtime; there is no setting to pick
- **Multi-step plans**: one question can draw on several knowledge sources and tools and come back as one answer
- **Deep reasoning**: applied on its own to complex tasks, or forced with the keyword `reason` in an instruction
- **Visible plan**: Get rationale in Preview and the Monitor tab show what the agent chained

## Speaker Notes

This slide moves from the Build surface to the runtime behind it. The point to land is why a new-experience agent behaves so differently from a classic one.

Build tab: instructions, knowledge, tools and skills now sit in one components panel instead of separate Topics, Knowledge, Actions and plugins areas. Instructions are the always-in-context brief the runtime reasons against on every turn.

Always on: in classic you picked classic or generative orchestration, while here the enhanced runtime runs for every new-experience agent. There is no switch to look for in settings.

Multi-step plans: one question can make the agent consult several knowledge sources and tools, then stitch the results into a single answer. Walk the diagram from the question through the runtime to the sources and back out to one answer.

Deep reasoning: the runtime spends more planning effort when it judges a task complex enough. Makers force it by adding the keyword reason to an instruction step, the lever for high-stakes flows.

Visible plan: Get rationale in Preview opens the plan behind one answer, and the Monitor tab reopens past runs to show what the agent chained. The demo uses both on a question about the Around the Horn account.
