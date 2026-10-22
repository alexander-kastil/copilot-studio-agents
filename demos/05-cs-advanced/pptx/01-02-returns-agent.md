---
slide: "01-02"
topic: 01-autonomous-agents
title: "CS-Returns Agent on a shared mailbox"
subtitle: "Every new return request gets an answer by mail"
layout: content
visual-weight: 1/2
visual-type: photo
subject: object
media-source: nano-banana
media-file: demos/05-cs-advanced/pptx/images/01-02-returns-agent.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych, no
  collage. A still life on a light-oak packing bench in the bright returns room of a web shop: a pair
  of matte white unbranded wireless earbuds, the left earbud lying outside its open charging case,
  beside a small opened plain kraft-paper shipping box with crinkled paper fill and a roll of plain
  brown packing tape. Soft daylight from a window on the left, a green plant softly out of focus
  behind. The earbuds and the box are centred in the frame. Modern, light, bright and friendly:
  high-key natural daylight, soft pastel accents in light blue, mint and lavender, green plants, 2020s
  design. 2:3 portrait, subject centred, contemporary editorial photography. Avoid: readable text,
  shipping labels with text, logos or brand marks on the earbuds, case or box, watermarks, people,
  hands, dark or moody lighting, vintage or retro decor, grime, clutter.
order: 4
source: demos/05-cs-advanced/01-autonomous-agents/demo-returns-agent-mailbox-trigger.md
gamma_prompt: >
  Slide titled "CS-Returns Agent on a shared mailbox", subtitle "Every new return request gets an
  answer by mail". Side-accent layout: title, subtitle and five bullets on the left half on plain
  white, the provided photograph of returned wireless earbuds beside an opened shipping box filling
  the right half, no text over it. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# CS-Returns Agent on a shared mailbox

## Content

- **Instructions** limit the agent to returns and set the reply format: an email with `<p>` and `<br>` tags
- **returns-policy.docx** from SharePoint is its only knowledge source
- **CS-Work IQ Mail** runs on maker-provided credentials, because no user is there to sign in
- One sentence names the tool: "Send that email to the customer with CS-Work IQ Mail."
- **CS-When a new email arrives in a shared mailbox** hands every new email to the agent

## Speaker Notes

The demo turns the concept into a returns desk that answers itself. CS-Returns Agent wakes for every new email in a shared mailbox, checks it against the returns policy and replies by mail.

Instructions: a run nobody watches has nobody to answer a question, so the instructions carry the whole job. The reply goes out as an email body, which is why they fix the HTML tags, and a flight request gets declined.

Knowledge: one policy document instead of a whole site keeps other content out of the answer. Its description, "Information about our returns policy", tells the orchestrator when to search it.

Mail tool: the Work IQ Mail MCP server, listed as Mail (Preview), is switched to Maker-provided credentials under Additional details. Every reply then goes out through your account, so keep this agent to the returns job.

The sentence and the trigger: without the sentence, the triggered run wrote its reply only into the test chat. The trigger hides under the All filter, keeps the default payload, and a new shared mailbox needs about 15 minutes before it can read the Inbox.
