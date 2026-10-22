---
slide: "03-01"
topic: 03-agent-accounts
title: "Publishing an agent with an account"
subtitle: "What the account provisions at publish"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/08-ai-teammates/pptx/images/03-01-publish-account.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text #24292f
  and #57606a, pastel fills, no heading inside the image, minimum 28px type. Left to right: blue "Your
  new agent" (name, description and instructions; account added before the first publish) into amber
  "Publish" into purple "Assigns one Microsoft 365 Frontier for AI Teammates license to the agent", with
  the note that when none is free an admin frees one or buys more. Two arrows lead to a green "Agent
  account" group (provisioned and governed by Agent 365) with white boxes Mailbox, Teams presence and
  Directory entry, and to a grey "Microsoft Entra Agent ID" box (created by Copilot Studio, admins
  manage it separately). SMIL animation, 8 s loop: the boxes light up in order from the agent to the
  provisioned identities; complete and readable at t=0.
order: 9
source: demos/08-ai-teammates/03-agent-accounts/readme.md
gamma_prompt: >
  Slide titled "Publishing an agent with an account", subtitle "What the account provisions at publish".
  Left: five bullets. Right, wider: the provided diagram of a new agent going through publish and a
  Frontier for AI Teammates license into an agent account with mailbox, Teams presence and directory
  entry, and a Microsoft Entra Agent ID. Use exactly the one image given for this card; do not generate
  or add any other images, icons or logos.
---

# Publishing an agent with an account

## Content

- Add the **account** to a new agent before its first publish
- **Publish** provisions the mailbox, Teams presence, directory entry and Entra Agent IDs
- Each agent takes one **Frontier for AI Teammates** license; with none free, publishing fails
- **Agent 365** governs the account; admins manage the Entra Agent ID separately
- Colleagues find it in the **Teams people picker** and the directory

## Speaker Notes

When a process needs your own instructions, tools and triggers, you build the teammate in Copilot Studio and give it an account. This slide shows what publishing creates.

Account before publish: agent accounts live in Copilot Studio Preview on an early release environment. You add the account to a new agent, set the display name and email address, and only publishing makes it active.

Publish: it provisions the mailbox, Teams presence, directory entry and Entra Agent IDs. The agent can then send and receive email and join distribution lists.

License: publishing assigns one Microsoft 365 Frontier for AI Teammates license to the agent. If no license is free, publishing fails until an admin frees one or buys more.

Two identities: Agent 365 provisions and governs the account with user-grade visibility. Copilot Studio also creates a Microsoft Entra Agent ID that admins manage separately.

People picker: once published, people find the agent in Teams and the directory and @mention it like a colleague. The planned demo looks it up in the Teams people picker and the organization directory.
