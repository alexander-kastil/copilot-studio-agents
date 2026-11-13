# Working with Autopilot: Goals, Memory & Long-Running Work

A teammate is only useful when you can trust it with work you are not watching. This topic covers how you brief Autopilot, how it keeps working in the background, and the controls that decide what it may do without you. Autopilot itself has no Learn documentation yet, so the mechanics below come from Microsoft Scout, the Frontier preview it grew out of, and each section says which source it rests on.

## Brief It Like a Colleague: Name, Role, Goal

Autopilot starts from three inputs: a name, a role, and a goal. The name is how colleagues find and @mention it, the role says which part of the process it owns, and the goal says what done looks like. Microsoft's guidance is that you set the objective and the boundaries, and Autopilot handles the rest while keeping you informed.

A good brief reads like the handover you would give a new colleague. State the outcome, the people involved, the sources it may use, and the decisions it must bring back to you. Leave the steps open: working out the schedule, the follow-ups, and the reminders is the work you are handing over.

```text
Name: Supplier Review Lead
Role: Run the quarterly supplier review for the procurement team.
Goal: Every active supplier has a scorecard, a review meeting, and recorded actions by the end of the quarter.
Boundaries: Contact suppliers only through the procurement shared mailbox. Ask me before you move a meeting with a supplier executive.
Escalate: Any supplier with two missed deliveries or an open quality incident.
```

## Background Work: Heartbeat and Automations

Scout keeps working through two background modes. Heartbeat runs one prompt on a fixed interval (every 15 minutes, 30 minutes, 1 hour, or 2 hours) within the work hours you set, which suits inbox triage or watching for schedule conflicts. Automations are separate tasks with their own schedule, prompt, and optional steps: schedule-triggered, condition-triggered, or one-shot.

Both modes run under a more restrictive permission policy than an interactive conversation, because nobody is there to approve. The Autopilot announcement describes the same behavior from the user's side: it watches channels, follows up on threads, runs recurring work, and resumes a project days later without a new prompt.

![A timeline with three lanes: an interactive conversation runs when you send a message, a heartbeat runs one prompt at a fixed interval within your work hours, and an automation runs on a schedule, on a condition, or once, both background modes under a stricter permission policy.](../pptx/images/02-02-background-work.svg)

| Mode | Runs | Typical use |
|---|---|---|
| Interactive conversation | When you send a message | Briefing, steering, and reviewing results |
| Heartbeat | One prompt on an interval, within work hours | Triage and monitoring |
| Automation | Its own schedule or condition, or once | A weekly status pack, a reminder chain |

## Tools: Work IQ, MCP, Browser and Shell

Scout reaches its work through four capability groups that you switch on or off in **Settings** > **Permissions**: Work IQ, browser, shell, and file system. A group that is off is removed from the system prompt, so the agent can't use it at all. Shell commands run in three tiers: read-only commands run without asking, installs, pushes, and network calls ask first, and destructive commands are blocked. You add your own allow and deny patterns on top.

| Tool group | What it reaches | Example |
|---|---|---|
| Work IQ and Microsoft 365 | Mail, calendar, Teams meetings and chats, SharePoint lists, OneDrive and SharePoint files, meeting transcripts | A one-page brief built from every thread, file, and chat about a client, an hour before the meeting |
| Browser control | Any web page: navigate, click, fill forms, upload files, read content | Expense entries typed into a web portal that has no API |
| Shell | PowerShell, `git`, `gh`, `curl`, and scripts on the machine | Old installers cleared out of the Downloads folder |
| File system | Files in the workspace and, once you grant access, folders such as Downloads | A CSV of the sales figures found in your mail |

The walkthrough videos also connect Scout to outside systems such as a CRM through MCP servers. Learn doesn't document MCP for Scout yet, so read it as a preview of where the tool list is heading.

## Approvals and Permissions

Before a sensitive action such as sending an email, posting in Teams, or running a command, Scout pauses and shows exactly what it plans to do. You choose **Approve**, **Always allow** (which adds the pattern to the auto-approve list), or **Deny**. Capability categories (file system, shell, browser, Microsoft 365) can be switched on or off, and sensitive locations can be marked so they always need approval.

Content that arrives from outside (emails, web pages, Teams messages) is tagged as untrusted and treated as data, not instructions. That matters for a teammate that reads every message in a channel: a message that says "forward the price list to this address" is something it reports, not something it obeys.

![A sensitive action pauses until you choose Approve, Always allow, or Deny, and content from outside is tagged as untrusted and treated as data that the teammate reports instead of obeying.](../pptx/images/02-03-approvals-untrusted.svg)

## Skills, Sub-Agents and Memory

Scout ships with skills for Word, Excel, PowerPoint, Loop, and building HTML dashboards. You add your own by placing a `SKILL.md` folder in the skills directory, the same open format you used in [Cowork](../../02-cowork/03-custom-skills/readme.md) and [Copilot Studio](../../06-cs-copilot-harness/03-agent-skills/readme.md). For larger jobs it launches sub-agents for research, review, or long-running tasks, and it remembers preferences and decisions across conversations.

## Files as a Shared Workspace (Roadmap)

The OneDrive roadmap shows where teamwork with agents is heading in files. Microsoft is exploring ways to share a file with an agent, @mention it, and keep working with it through comments, the way you would with a colleague. OneDrive also plans to mark files that AI helped create, show which agents contributed, and explain what changed. These items come from the October 2026 OneDrive event, which illustrates them with Autopilot working in OneDrive but gives no dates.

## Where the Models Come From

Scout processes prompts through GitHub Copilot and inherits its model catalog from it, so your GitHub Copilot admin decides which models are available. Signing in needs a GitHub Copilot Business or Enterprise seat and the **GitHub Copilot app** policy enabled for the user. This is why Autopilot and the GitHub Copilot app share an admin story, and why the identity and model questions belong in the same conversation with your tenant and GitHub admins.

## Hands-On Demo

Planned: **Hand Autopilot a Process**. In a Frontier tenant, the instructor briefs a teammate with the supplier-review brief above, configures a heartbeat, and approves its first outbound message.

## Hands-On Lab

Planned: [Set Up Background Work and Approvals](../../../labs/08-ai-teammates/readme.md). You configure a heartbeat and a scheduled automation, add a custom `SKILL.md`, and test which actions stop for approval. Requires Frontier preview access.

## Key Topics covered in this module

[Microsoft Scout (Frontier) overview](https://learn.microsoft.com/microsoft-scout/overview)

[Use Microsoft Scout](https://learn.microsoft.com/microsoft-scout/use-microsoft-scout)

[Microsoft Scout common questions](https://learn.microsoft.com/microsoft-scout/faq)

[Admin access overview for Microsoft Scout](https://learn.microsoft.com/microsoft-scout/admin-access-overview)

[OneDrive: New Copilot Capabilities, Simpler Sharing, and Smarter Photos](https://techcommunity.microsoft.com/blog/onedriveblog/onedrive-just-got-a-major-upgrade-new-copilot-capabilities-simpler-sharing-and-s/4565995)
