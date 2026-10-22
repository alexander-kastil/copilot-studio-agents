---
slide: "05-02"
topic: 05-iq-grounding
title: "Proving grounding in the activity trace"
subtitle: "The same question, asked again after Work IQ is added"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/06-cs-gh-copilot/pptx/images/05-02-work-iq-trace.png
photo-link: demos/06-cs-gh-copilot/pptx/images/05-02-work-iq-trace.png
visual-prompt: >
  Live screenshot, pool id 06-06-026 (1537x784), native crop 518,62,1178,440 saved at 660x378, cut
  above the email details: GH-Aurora Account Assistant in Preview with Debug mode on, the question about
  the most recent customer email, and the step list with Used tool: fetch, Used tool: retrieve and a
  second Used tool: fetch.
order: 19
source: demos/06-cs-gh-copilot/05-iq-grounding/demo-05-ground-with-iq.md
gamma_prompt: >
  Slide titled "Proving grounding in the activity trace", subtitle "The same question, asked again after
  Work IQ is added". Layout: Two columns. Left column: the bullets. Right column, wider than the left:
  the provided screenshot of the Preview step list as an inline content image at its natural aspect
  ratio, scaled to fit the column, never cropped, never used as a background or side accent. Use exactly
  the one image given for this card; do not generate or add any other images, icons or logos.
---

# Proving grounding in the activity trace

## Content

- Add **Work IQ (Preview)** from the MCP tab of **Add a tool**, not the legacy Mail or Teams tools
- Ask the **same question** before and after: only the tool changed
- The trace shows **Used tool: retrieve** and **fetch**; expand a line for its input and output
- **Debug mode** must be on to expand the lines

## Speaker Notes

The previous slide showed where each IQ reads from; this one shows how to prove that an answer came from there. The screenshot is from the live run on GH-Aurora Account Assistant.

Work IQ (Preview): it sits on the MCP tab of Add a tool and lists 12 tools, among them Retrieve, Fetch and Ask. The workload tools beside it, such as Mail and Teams, belong to a legacy experience with its own licensing.

Same question: before Work IQ, "What did the most recent customer email I received ask me to do, and by when?" got "I couldn't find any of your emails" and no Used tool line. After adding it, the same question in a new chat ran fetch and retrieve against the mailbox.

The trace: expanding retrieve shows the Email capability and the search query as input, the hits as output, and the latency. A reply that names your email could still come from memory, so the trace is the evidence.

Debug mode: with it off, the Used tool lines stay but can't be expanded. Monitor shows "Monitor data starts after you publish" for a draft agent, so Preview is the only place to read the calls.
