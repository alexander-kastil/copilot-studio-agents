# Creating Custom Skills with SKILL.md

> **Frontier Preview**: part of [Getting Started with Cowork](../01-intro/readme.md). Features are subject to change.

[Built-in skills](../02-built-in-skills/readme.md) cover the common office tasks. Custom skills teach Cowork how to handle *your* specific recurring work. You write the instructions in plain language and store them in OneDrive; no coding required. Cowork discovers them automatically and reuses them by name, so you never re-explain the same format twice.

---

## Where to Store Custom Skills

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

Cowork **automatically discovers** your custom skills at the start of each conversation. You can create up to **50 custom skills**. Because discovery happens per conversation, a skill you just added shows up in the next new task, not the one you already have open.

---

## Anatomy of a SKILL.md

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

The **description** is what Cowork reads to decide when a skill applies, so make it specific and trigger-oriented. A vague description ("helps with reports") rarely matches; a concrete one ("writes my weekly Northern Europe status report from my emails and figures") loads at the right moment. The body is the step-by-step recipe Cowork follows.

---

## Companion Files

Each skill folder can hold supporting material next to the `SKILL.md`: reference documents, templates, or scripts. The limits are **20 companion files** and **10 MB per skill**. A proposal-writing skill, for example, can carry your standard template so every output matches house style. Point the skill at the companion file by name in its instructions, and Cowork reads it whenever the skill runs.

---

## Ideas for Custom Skills

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

## Custom Skills vs. Plugins

Both add new capabilities, but they come from different places and solve different problems. A custom skill is *yours*: plain-language instructions you author for your own recurring work. A [plugin](../05-plugins/readme.md) is packaged software from the Microsoft 365 App Store that connects Cowork to an external system or a published expertise. Reach for a custom skill to standardize how *you* do a task; reach for a plugin to bring in data or expertise you cannot write yourself.

---

## Hands-On Demo

- [Build a Reusable Meeting-Prep Skill](./demo-01-meeting-prep-skill.md): author a `SKILL.md` with a companion brief template, tune its description so Cowork discovers it, then run and refine it until every meeting brief comes out in house format.

---

## Where to Go Next

- **[Scheduling Prompts & Recurring Automation](../04-automation/readme.md)**: put the skill you authored on a recurring schedule
- **[Extending Cowork with Plugins](../05-plugins/readme.md)**: add capabilities you cannot write yourself
- **[Human-in-the-Loop](../06-staying-in-control/readme.md)**: approve, pause, and govern what your skills do

---

## Links & Resources

- [Use Cowork: Skills & Custom Skills](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork)
- [Cowork Overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/)
- [Cowork FAQ](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-faq)
