---
slide: "08-01"
topic: 06-cs-gh-copilot
title: "Takeaways"
subtitle: "What to carry into publishing and maintaining"
layout: content
visual-weight: 1/2
visual-type: photo
media-source: nano-banana
media-file: demos/06-cs-gh-copilot/pptx/images/08-01-takeaways.jpg
subject: people-talk
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych, no
  collage. A Northwind Traders seller, a man in his early thirties in modern work-casual clothes, stands
  at the counter of a bright delicatessen that buys from Northwind and talks with the shop owner, a
  woman in her late thirties, both smiling at the start of a relaxed customer meeting; on the counter
  between them stand a case of glass cold brew bottles and a small plain tin of green tea with blank
  kraft labels, shelves of jars softly blurred behind them. Modern, light, bright and friendly: high-key
  natural daylight, soft pastel accents in light blue, mint and lavender, green plants, 2020s design.
  2:3 portrait, people centred, contemporary editorial photography. Avoid: readable text, readable
  labels on jars, bottles, tins or shelves, logos, watermarks, extra people, dark or moody lighting,
  vintage or retro decor, grime, clutter.
order: 21
source: demos/06-cs-gh-copilot/readme.md
gamma_prompt: >
  Closing slide titled "Takeaways", subtitle "What to carry into publishing and maintaining". Side-accent
  layout: five bullets on the left half on plain white, the provided photograph of a seller talking with
  a delicatessen owner at her counter filling the right half, no text over it. Use exactly the one image
  given for this card; do not generate or add any other images, icons or logos.
---

# Takeaways

## Content

- Decide the **kind of agent** before you build: there is no conversion
- Read the **step list** and **History** to see how the orchestrator planned
- A skill's **description** and an MCP server's **description** decide when they are used
- Prove grounding in the **activity trace**, not in the wording of the reply
- Run the **same test set** before and after every change

## Speaker Notes

Close with the habits the module was built around, each one a check you can make in the product. The photo is the payoff: a seller who walks into a customer meeting with answers the agent got from the right source.

Kind of agent: Standard and GitHub Copilot agents live side by side, and an agent built as one can't become the other. Standard stays the primary production track; GitHub Copilot agents add skills, memory and the always-on orchestrator.

Step list and History: with Debug mode on, every Preview reply shows the searches and tools behind it, and History keeps the session for later.

Descriptions: the runtime matches a request against a skill's description and an MCP server's description, so tune those first when something fires too often or never.

Trace and test set: a grounded reply shows the tool call in the trace, and the Evaluate tab's General quality judges answers without comparing them to your expected response. Module 7 picks up from here with environments, solutions, publishing and ALM.
