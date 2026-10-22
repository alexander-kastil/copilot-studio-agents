# AI Teammates: Autopilot & Agent Accounts

Hands-on labs for [Module 5](../../demos/08-ai-teammates/readme.md). This is a draft lab plan: each lab gets its full guide once it has been run end to end in a Frontier tenant with agent accounts activated.

> Note: Labs 2 to 5 need a tenant enrolled in the Frontier program. Labs 3 to 5 also need an early release environment, a maker license (Microsoft 365 E5 with the Agent 365 add-on, or Microsoft 365 E7), and a free Microsoft 365 Frontier for AI Teammates license per participant agent. Lab 1 runs anywhere.

## Lab 1: Write a Teammate Brief

Topic: [Meet Autopilot](../../demos/08-ai-teammates/01-meet-autopilot/readme.md). About 20 minutes, no preview access.

![A business process that needs an owner raises the question who builds the teammate: a user who describes name, role, and goal gets Autopilot, and a maker who configures instructions, tools, and triggers builds a Copilot Studio agent with an agent account. Both paths end in their own identity, memory, Teams and Outlook presence, governed in Agent 365 and Entra.](../../demos/08-ai-teammates/pptx/images/01-03-two-paths.svg)

- Pick a recurring process from your own work (supplier review, project status, onboarding).
- Write the name, role, goal, boundaries, and escalation rules for a teammate that owns it.
- Decide whether Autopilot or a Copilot Studio agent with an account should carry it, and justify the choice against the comparison table.

## Lab 2: Set Up Background Work and Approvals

Topic: [Working with Autopilot](../../demos/08-ai-teammates/02-autopilot-at-work/readme.md). About 30 minutes.

![A timeline with three lanes: an interactive conversation runs when you send a message, a heartbeat runs one prompt at a fixed interval within your work hours, and an automation runs on a schedule, on a condition, or once.](../../demos/08-ai-teammates/pptx/images/02-02-background-work.svg)

![A sensitive action pauses until you choose Approve, Always allow, or Deny, and content from outside is tagged as untrusted and treated as data.](../../demos/08-ai-teammates/pptx/images/02-03-approvals-untrusted.svg)

- Brief the teammate with the Lab 1 brief.
- Configure a heartbeat with work hours and a scheduled automation.
- Add a custom `SKILL.md` and confirm the teammate discovers it.
- Trigger an outbound message and record which actions stop for approval.

## Lab 3: Create the Cadence Agent with an Account

Topic: [Agent Accounts](../../demos/08-ai-teammates/03-agent-accounts/readme.md). About 30 minutes.

![What you build in Labs 3 and 4: Cadence with its instructions, account, and tool authentication, started by a recurrence or email trigger, reading a SharePoint workstream tracker, creating a new review document, and exchanging the link and updates with reviewers.](./_images/cadence-what-you-build.svg)

- Create a new agent in Copilot Studio Preview in the early release environment.
- Paste the Cadence instructions, add an account, and plan the display name and email address before you publish.
- Review the authentication mode of each tool.
- Publish and find Cadence in the Teams people picker and the directory.

## Lab 4: Make Cadence Proactive

Topic: [Proactive Teammates](../../demos/08-ai-teammates/04-proactive-teammates/readme.md). About 40 minutes.

- Create a workstream tracker in a SharePoint site that Cadence can read.
- Add a recurrence trigger and an email trigger.
- Run one review cycle and open the new review document.
- Contribute an update as a reviewer, once by email reply and once by @mention in Teams.

## Lab 5: Teammate Readiness Review

Topic: [Shared Memory, Licensing & Teammate Governance](../../demos/08-ai-teammates/05-memory-governance/readme.md). About 25 minutes.

![The four activation steps in order across the Microsoft 365 admin center, the Power Platform admin center, and the environment, after which only the chosen users and groups can create agents with accounts.](../../demos/08-ai-teammates/pptx/images/05-02-admin-activation.svg)

![Each agent with an account takes one Microsoft 365 Frontier for AI Teammates license, assigned at publish from the pool the tenant receives on Frontier enrollment, beside the maker license and the Copilot Credits that cover usage. When the pool is empty, an admin removes a license from another agent or acquires more.](../../demos/08-ai-teammates/pptx/images/05-03-licensing.svg)

![You tell Cadence a preference, a performance judgment, and a phone number; only the preference lands in its shared memories, which you then list and delete from.](./_images/memory-test-what-it-keeps.svg)

- Walk the four admin activation steps and record who owns each one in your tenant.
- Check the Frontier for AI Teammates license pool before and after publishing.
- Tell Cadence a preference, a performance judgment, and a phone number, then list its shared memories and see which it kept.
- Delete one saved memory.
