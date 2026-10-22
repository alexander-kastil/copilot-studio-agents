---
slide: "04-02"
topic: 04-foundry-agents
title: "Foundry agents and Copilot Studio agents"
subtitle: "Who builds, where it runs and how it reaches users"
layout: statement
visual-weight: 1/3
visual-type: photo
subject: people-talk
media-source: nano-banana
media-file: demos/05-cs-advanced/pptx/images/04-02-foundry-and-copilot-studio.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych, no
  collage. In a bright meeting corner of a modern logistics company office, a Power Platform maker, a
  woman in her early thirties, and a developer from the AI team, a man in his late twenties, both in
  modern work-casual clothes, sit across a small light-oak table and agree on a hand-off: she points at
  a sheet of paper on the table showing only two hand-drawn boxes joined by one arrow, with no letters,
  words or numbers anywhere, and he nods and smiles. Their notebooks are closed beside them. Both people
  are centred in the frame. Modern, light, bright and friendly: high-key natural daylight, soft pastel
  accents in light blue, mint and lavender, green plants, 2020s design. 2:3 portrait, people centred,
  contemporary editorial photography. Avoid: readable text, letters or words on the paper, logos,
  watermarks, extra people, dark or moody lighting, vintage or retro decor, grime, clutter.
order: 12
source: demos/05-cs-advanced/04-foundry-agents/readme.md
gamma_prompt: >
  Slide titled "Foundry agents and Copilot Studio agents", subtitle "Who builds, where it runs and how
  it reaches users". Statement layout: the one bullet as a large sentence across the left two thirds,
  the provided photograph of a maker and a developer agreeing on a hand-off as a side accent in the
  right third, no text over it. Use exactly the one image given for this card; do not generate or add
  any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Foundry agents and Copilot Studio agents

## Content

- The maker keeps the conversation, the channels and the routing; the developer team keeps the specialist's model, tools and versions

## Speaker Notes

Both platforms build agents from instructions, a model and tools, and the shared words confuse mixed teams. The difference is who builds, where it runs and how it reaches users.

Who and where: Foundry agents are built by developers and AI engineers in a Foundry project in an Azure subscription. Standard Copilot Studio agents are built by makers in a Power Platform environment, inside a solution.

Behavior and models: a Foundry agent picks any deployed model from the Foundry catalog, and hosted agents add custom code. A Copilot Studio agent combines instructions, topics, knowledge, tools and agent flows on the models Copilot Studio offers.

Reaching users and paying: Foundry speaks endpoint protocols and bills Azure consumption under Azure RBAC. Copilot Studio publishes to channels such as Teams, websites and telephony, bills Copilot Credits and follows Power Platform security and data policies.

Where they meet: a Copilot Studio agent connects a Foundry agent as a specialist, and each team keeps its own part.
