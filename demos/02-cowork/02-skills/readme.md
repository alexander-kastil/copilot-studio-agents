# Skills: The Building Blocks of Cowork

> **Frontier Preview**: part of [Microsoft 365 Copilot Cowork](../01-intro/readme.md). Features are subject to change.

Skills are Cowork's specialized capabilities. As Cowork works on your task, it automatically loads the right skills and shows them in the **side panel**. You do not need to pick a skill manually; Cowork figures out which ones it needs from the task you describe.

---

## Built-in Skills

These ship with Cowork and cover the most common office tasks.

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

### The Side Panel

While Cowork runs, the side panel shows which skills are active for the current step. It is a live view of what Cowork is doing, so you can see, for example, that the **Excel** skill is building a spreadsheet before the **Email** skill sends it.

### Where Skills Come From

Built-in skills are only the starting point. You can also:
- **Create your own custom skills** stored in OneDrive
- **Install plugin skills** from the Microsoft 365 App Store (see [Automation & Plugins](../03-automation/readme.md))
- **Use admin-deployed plugins** rolled out by your IT organization

---

## Custom Skills: Extend Cowork for Your Own Workflows

Custom skills teach Cowork how to handle your specific recurring tasks. You write the instructions in plain language; no coding required.

### Where to Store Custom Skills

Place a `SKILL.md` file inside a subfolder of your OneDrive:

```text
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

The **description** is what Cowork reads to decide when a skill applies, so make it specific and trigger-oriented. The body is the step-by-step recipe Cowork follows.

### Companion Files

Each skill folder can hold supporting material next to the `SKILL.md`: reference documents, templates, or scripts. The limits are **20 companion files** and **10 MB per skill**. A proposal-writing skill, for example, can carry your standard template so every output matches house style.

### Ideas for Custom Skills

**For individual contributors**
- *Weekly Status Report*: summarize sent emails and calendar events into a report
- *Meeting Prep*: pull the agenda, attendee bios, and relevant files before a meeting
- *Inbox Triage*: sort and flag emails by priority, project, or sender
- *Daily Briefing*: custom morning summary with your top priorities

**For team leads and managers**
- *Team Update Digest*: aggregate updates from a Teams channel into a weekly summary
- *New Hire Onboarding Pack*: create a welcome doc, schedule intro meetings, share key links
- *Project Kickoff Package*: create a brief, draft a kickoff email, set up a recurring meeting
- *Stakeholder Announcement*: generate a formatted communication from bullet points

**For power users**
- *Competitive Research Brief*: deep research on a topic and output a formatted report
- *Proposal Template Filler*: populate a standard template from a description you provide
- *Expense Folder Organizer*: move and rename receipts in OneDrive by month or category

---

## Hands-On Demo

- [Produce a Competitive Market Brief](./demo-03-research-brief.md): use Deep Research and Enterprise Search together to survey the market, compare it against Aurora's own positioning, and ship a decision-ready brief.

---

## Where to Go Next

- **[Automation & Plugins](../03-automation/readme.md)**: put a skill on a recurring schedule and add plugin skills from the App Store
- **[Staying in Control](../04-staying-in-control/readme.md)**: approve, pause, and govern what your skills do

---

## Links & Resources

- [Use Cowork: Skills & Custom Skills](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork)
- [Cowork Overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/)
- [Cowork FAQ](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-faq)
