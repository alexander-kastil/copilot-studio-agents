---
slide: "05-01"
topic: 05-memory-governance
title: "Shared memory"
subtitle: "One memory for everyone the agent works with"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/08-ai-teammates/pptx/images/05-01-shared-memory.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text #24292f
  and #57606a, pastel fills, no heading inside the image, minimum 28px type. Left to right: blue "One
  person explains" (even in a one-to-one chat) into a purple "One shared memory" container (for everyone
  it works with) holding white boxes Facts about the work (team processes and terminology) and Details
  about people (how someone prefers to receive updates), into green "Later conversations with other
  people can use it". Below, a full-width amber note quoting the People card: anything shared can be
  summarized in the agent's responses to any user, even users without permission to the original file or
  chat, regardless of sensitivity label. SMIL animation, 8 s loop: a dot carries a fact from the person
  through the memory to later conversations; complete and readable at t=0.
order: 15
source: demos/08-ai-teammates/05-memory-governance/readme.md
gamma_prompt: >
  Slide titled "Shared memory", subtitle "One memory for everyone the agent works with". Left: five
  bullets. Right, wider: the provided diagram of one person's explanation flowing into one shared memory
  of work facts and people details and on to later conversations, above a note quoting the People card.
  Use exactly the one image given for this card; do not generate or add any other images, icons or
  logos.
---

# Shared memory

## Content

- **One memory** across everyone it works with, even in one-to-one chats
- **No privacy boundary**: a record about one person can come up with others
- **Never kept**: personal details, secrets, judgments, sensitive categories and requests to forget
- Anyone who interacts can **view or delete** saved memories; 28 days without interaction deletes them
- **No opt-out** in the preview: share only what the whole team may know

## Speaker Notes

A teammate that remembers what the whole team tells it is useful and risky at the same time. This slide shows how shared memory behaves.

One memory: what one person explains benefits the whole team. The agent uses it instead of personal memory, even in one-to-one chats.

No privacy boundary: a record about one person can be used in later conversations with others. The People card says anything shared can be summarized for any user, regardless of sensitivity label.

Never kept: ID numbers, passwords and tokens, assessments of anyone's performance or conduct, health information, and anything someone asks it to forget. When a memory conflicts with the instructions, the agent follows the instructions and corrects the memory.

View or delete: everyone who interacts with the agent can view or delete its saved memories. If no one interacts with it for 28 days, the system deletes them.

No opt-out: end users cannot opt out, and admins can only turn agent accounts off altogether. Write the team briefing with that in mind.
