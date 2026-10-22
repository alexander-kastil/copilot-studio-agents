---
slide: "03-03"
topic: 03-agent-accounts
title: "Tool authentication"
subtitle: "From the author's credentials to the agent's own"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/08-ai-teammates/pptx/images/03-03-tool-authentication.png
photo-link: demos/08-ai-teammates/pptx/images/03-03-tool-authentication.png
visual-prompt: >
  Screenshot from the Module 5 run (pool 05-01-043): the Copilot Studio Publish dialog of CS-Returns Agent warning that the agent includes triggers that use the author's credentials, beside the test pane where the shared-mailbox trigger fired and the reply email was sent.
order: 11
source: demos/08-ai-teammates/03-agent-accounts/readme.md
gamma_prompt: >
  Slide titled "Tool authentication", subtitle "From the author's credentials to the agent's own". Left:
  five bullets. Right, wider: the provided screenshot of the Copilot Studio Publish dialog warning that
  the agent's triggers use the author's credentials, beside the test pane where a shared-mailbox trigger
  fired and an email was sent. Use exactly the one image given for this card; do not generate or add any
  other images, icons or logos.
---

# Tool authentication

## Content

- **Without an account**: an event trigger runs on the author's credentials, and Publish warns about it
- **With an account**: the agent acts as itself, with its own scoped access rights
- **Agent account** becomes the default authentication for every tool that supports it
- **End-user authentication** still needs each person's consent through Go to Agent Management
- Check which identity each tool uses and grant only the **access the job needs**

## Speaker Notes

The account changes whose credentials the agent works with. The screenshot comes from the Module 5 run: CS-Returns Agent answered a returns mail through a shared-mailbox trigger, and Publish then listed the author's credentials as an item to review.

Without an account: event triggers run on the author's credentials. The dialog spells out the risk: if the trigger's instructions share data with other users, those users can use the author's credentials to reach information or complete a task.

With an account: the agent acts as itself, with its own scoped access rights. Admins audit it as an identity, like any member of the organization.

Agent account authentication: adding the account makes it the default for every tool that supports it. You can still change it per tool.

End-user authentication: tools set this way still need each person to complete their own consent through Go to Agent Management.

Least access: the account does not grant every tool permission automatically. Check which identity each tool uses and grant only the access the job needs.
