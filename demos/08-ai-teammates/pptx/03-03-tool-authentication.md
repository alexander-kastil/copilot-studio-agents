---
slide: "03-03"
topic: 03-agent-accounts
title: "Tool authentication"
subtitle: "From the author's credentials to the agent's own"
layout: diagram
visual-weight: 1/2
visual-type: diagram
media-source: opus-svg
media-file: demos/08-ai-teammates/pptx/images/03-03-tool-authentication.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text #24292f
  and #57606a, pastel fills, no heading inside the image, minimum 28px type. Drawn because the Publish
  dialog in the only shot of it (Module 5 run, pool 05-01-043, 1568x765) is 404 px wide, and the dialog
  with the test pane beside it reads as a whole page. Left, grey "Without an account" (acts as the
  signed-in user, or with connector credentials): a white box "Event trigger", CS-When a new email
  arrives in a shared mailbox, runs on the author's credentials, with an arrow down to an amber box
  "Publish lists it for review" quoting the dialog: your agent includes triggers that use the author's
  credentials; users the trigger shares data with can use those credentials. Middle: amber "Add account",
  before the first publish, with arrows into the right. Right, green "With an agent account" (acts as
  itself, with its own scoped access rights): a white box "Agent account", default authentication for
  every tool that supports it, you can change it per tool; and a white box "End-user authentication",
  each person still completes their own consent through Go to Agent Management.
order: 11
source: demos/08-ai-teammates/03-agent-accounts/readme.md
gamma_prompt: >
  Slide titled "Tool authentication", subtitle "From the author's credentials to the agent's own". Left:
  five bullets. Right, wider: the provided diagram with "Without an account" on the left, where an event
  trigger runs on the author's credentials and Publish lists it for review, an "Add account" step in the
  middle, and "With an agent account" on the right, where agent account authentication is the tool
  default and end-user authentication still needs each person's consent. Use exactly the one image given
  for this card; do not generate or add any other images, icons or logos.
---

# Tool authentication

## Content

- **Without an account**: an event trigger runs on the author's credentials, and Publish warns about it
- **With an account**: the agent acts as itself, with its own scoped access rights
- **Agent account** becomes the default authentication for every tool that supports it
- **End-user authentication** still needs each person's consent through Go to Agent Management
- Check which identity each tool uses and grant only the **access the job needs**

## Speaker Notes

The account changes whose credentials the agent works with. The left side of the diagram is what the Module 5 run showed: CS-Returns Agent answered a returns mail through a shared-mailbox trigger, and Publish then listed the author's credentials as an item to review.

Without an account: event triggers run on the author's credentials. The Publish dialog spells out the risk: if the trigger's instructions share data with other users, those users can use the author's credentials to reach information or complete a task.

With an account: the agent acts as itself, with its own scoped access rights. Admins audit it as an identity, like any member of the organization.

Agent account authentication: adding the account makes it the default for every tool that supports it. You can still change it per tool.

End-user authentication: tools set this way still need each person to complete their own consent through Go to Agent Management.

Least access: the account does not grant every tool permission automatically. Check which identity each tool uses and grant only the access the job needs.
