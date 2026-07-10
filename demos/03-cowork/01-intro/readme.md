# Microsoft 365 Copilot Cowork

> **Frontier Preview** — Cowork requires enrollment in the [Microsoft Frontier Program](https://adoption.microsoft.com/en-us/copilot/frontier-program/). Features are subject to change.

Cowork is Microsoft 365's agentic AI that does work on your behalf. You describe what you need in plain language — Cowork takes the steps, and you approve before anything is sent or saved.

---

## Cowork vs. Copilot Chat

| | Copilot Chat | Cowork |
|---|---|---|
| **What it is** | Always-on AI for drafting, summarizing, and answering questions | Agentic AI that completes multi-step work across Microsoft 365 |
| **Best for** | Fast, single-task support | End-to-end work across multiple apps |
| **Speed** | Seconds to minutes | Minutes to hours (autonomous execution) |
| **Task complexity** | Single-step, single-session | Multi-step workflows across apps and data |
| **Use when…** | You need a quick draft, answer, or insight | You need Copilot to take action — not just suggest |

Think of Copilot Chat as your AI thought partner. Think of Cowork as your AI colleague who actually does the work.

---

## Where to Access Cowork

- **Browser**: [m365.cloud.microsoft](https://m365.cloud.microsoft)
- **Desktop**: Microsoft 365 Copilot app for Windows and Mac
- **Mobile**: Microsoft 365 Copilot app for iOS and Android

---

## How a Typical Interaction Works

1. **Describe your task** — Use natural language. Example: *"Send a meeting recap to my team and attach the notes from today."*
2. **Watch Cowork work** — It breaks your request into steps and works through them visibly, one by one.
3. **Steer at any time** — Interrupt, add context, or redirect during execution.
4. **Approve before sensitive actions** — Before sending an email or posting in Teams, Cowork pauses and asks for your go-ahead. Risk level (medium/high) is shown on each action.
5. **Review the results** — Download documents, confirm sent messages, or ask for changes.

---

## What Cowork Can Do

### Communication
- Draft and send emails, replies, and forwards through Outlook
- Post messages in Teams channels or group chats
- Create and send HTML newsletters
- Prepare polished stakeholder communications (status updates, announcements)

### Documents & Files
- Create Word documents, Excel spreadsheets, PowerPoint presentations, and PDFs from scratch
- Edit existing documents shared in the conversation
- Create and reorganize SharePoint and OneDrive folders

### Calendar & Meetings
- Schedule meetings using natural language (*"Set up a 30-minute check-in with Alex tomorrow at 2 PM"*)
- Manage your calendar — add events, resolve conflicts, decline meetings with a reason
- Get meeting intelligence and briefings to prepare for upcoming conversations
- Start your day with a **Daily Briefing** of what's ahead

### Research
- Search across your organization for documents, messages, and people
- Perform **Deep Research** that synthesizes information from multiple sources into a report
- Browse SharePoint and OneDrive to pull in the files you need

### Automation
- Run prompts on a recurring schedule (e.g., weekly reports, daily briefings)
- Manage scheduled prompts from the **Scheduled** tab in Task views

---

## Skills — The Building Blocks of Cowork

Skills are Cowork's specialized capabilities. As Cowork works on your task, it automatically loads the right skills and shows them in the **side panel**. You do not need to pick a skill manually — Cowork figures out which ones it needs.

### Built-in Skills

| Skill | What it does |
|---|---|
| **Word** | Create and edit Word documents |
| **Excel** | Create and edit Excel spreadsheets |
| **PowerPoint** | Create and edit presentations |
| **PDF** | Work with PDF documents |
| **Email** | Compose, reply, forward, and send emails |
| **Scheduling** | Schedule meetings |
| **Calendar Management** | Create and manage calendar events using natural language |
| **Meetings** | Prepare meeting intelligence and summaries |
| **Daily Briefing** | Prepare your morning overview |
| **Enterprise Search** | Search across your organization's content |
| **Deep Research** | Multi-source research and analysis |
| **Communications** | Draft stakeholder communications |
| **Adaptive Cards** | Generate interactive card-based responses |

### Where Skills Come From

Built-in skills cover the most common office tasks. But you can also:
- **Create your own custom skills** stored in OneDrive
- **Install plugin skills** from the Microsoft 365 App Store
- **Use admin-deployed plugins** rolled out by your IT organization

---

## Custom Skills — Extend Cowork for Your Own Workflows

Custom skills let you teach Cowork how to handle your specific recurring tasks. You write the instructions in plain language — no coding required.

### Where to Store Custom Skills

Place a `SKILL.md` file inside a subfolder of your OneDrive:

```
OneDrive/
  Documents/
    Cowork/
      skills/
        weekly-report/
          SKILL.md
        meeting-prep/
          SKILL.md
```

Cowork **automatically discovers** your custom skills at the start of each conversation. You can create up to **50 custom skills**.

### Anatomy of a SKILL.md

A skill file has two parts: a YAML header (name and description) and plain-language instructions.

```yaml
---
name: Weekly Status Report
description: Generates a weekly status report from my recent emails and calendar.
---

Gather my sent emails and calendar events from the past week.
Summarize activity by project and key outcomes.
Create a Word document with sections: Highlights, In Progress, Blockers, Next Week.
Send the document to my manager every Friday at 4 PM.
```

### Ideas for Custom Skills

**For individual contributors**
- *Weekly Status Report* — summarize sent emails and calendar events into a report
- *Meeting Prep* — pull the agenda, attendee bios, and relevant files before a meeting
- *Inbox Triage* — sort and flag emails by priority, project, or sender
- *Daily Briefing* — custom morning summary with your top priorities

**For team leads and managers**
- *Team Update Digest* — aggregate updates from a Teams channel into a weekly summary
- *New Hire Onboarding Pack* — create a welcome doc, schedule intro meetings, share key links
- *Project Kickoff Package* — create a brief, draft a kickoff email, set up a recurring meeting
- *Stakeholder Announcement* — generate a formatted communication from bullet points

**For power users**
- *Competitive Research Brief* — deep research on a topic and output a formatted report
- *Proposal Template Filler* — populate a standard template from a description you provide
- *Expense Folder Organizer* — move and rename receipts in OneDrive by month/category

Each companion file (reference documents, templates, scripts) can be added to the skill folder — up to 20 companion files and 10 MB per skill.

---

## Extending Cowork with Plugins

Plugins from the **Microsoft 365 App Store** add new skills and connect Cowork to external services.

- **Specialized expertise** — e.g., financial analysis, legal research, HR systems
- **External data connectors** — e.g., CRM data, ticketing systems, third-party APIs
- **Admin deployment** — IT admins can roll out plugins organization-wide

Once a plugin is installed, its skills appear alongside built-in skills and are activated automatically based on context.

---

## Staying in Control

Cowork asks for your approval before taking sensitive actions.

- **Approve actions**: Each action button reflects what will happen (e.g., **Send**, **Post**, **Save**). A risk indicator highlights medium and high-risk actions.
- **Skip future prompts**: Use the dropdown on an action button to allow similar actions in the current session without re-confirming.
- **Pause / Resume / Cancel**: Stop Cowork at any point. Resume when ready or cancel the current task entirely.
- **Feedback**: Rate responses with thumbs up/down or leave inline comments directly on messages.

---

## Practical Scenarios

| Scenario | How Cowork Handles It |
|---|---|
| **Prepare for a client meeting** | Pull the latest emails with that client, find the relevant files, create a one-page brief |
| **Summarize the week** | Gather sent emails and calendar events, generate a Word summary, send to your manager |
| **Launch a project** | Draft the kickoff email, schedule the first meeting, create a shared folder structure |
| **Clean up your inbox** | Sort emails into folders, unsubscribe from newsletters, flag items needing replies |
| **Create a status presentation** | Pull data from Excel, generate a PowerPoint, send it to stakeholders |

---

## Links & Resources

- [Cowork Overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/)
- [Use Cowork — Skills & Custom Skills](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork)
- [Get Started with Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/get-started)
- [Cowork Plugins](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugins)
- [Cowork FAQ](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-faq)
- [Frontier Program](https://adoption.microsoft.com/en-us/copilot/frontier-program/)
