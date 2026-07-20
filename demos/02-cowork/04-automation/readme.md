# Scheduling Prompts & Recurring Automation

> **Frontier Preview**: part of [Getting Started with Cowork](../01-intro/readme.md). Features are subject to change.

The earlier topics covered what Cowork does and the skills behind it. This topic makes that work repeatable: any prompt you can run once, you can hand to Cowork on a recurring schedule so it runs on its own and delivers the result.

---

## How Scheduling Works

Instead of asking for the same report every week, you hand Cowork the recipe once and it runs on its own.

1. **Write the prompt** as you normally would, describing the full outcome.
2. **Set a recurrence** (daily, weekly, monthly, or a specific time).
3. **Cowork runs it automatically** at each interval and delivers the result.
4. **Manage all scheduled prompts** from the **Scheduled** tab in Task views: pause, edit, or delete them.

---

## Good Candidates for a Schedule

| Schedule | Prompt |
|---|---|
| **Every weekday, 8 AM** | *"Give me a Daily Briefing: today's meetings, unread priority emails, and any documents shared with me since yesterday."* |
| **Every Friday, 4 PM** | *"Summarize my sent emails and calendar for the week into a Word status report and send it to my manager."* |
| **First of the month** | *"Compile last month's project updates from the Marketing Teams channel into a one-page digest."* |

---

## Scheduled Prompts vs. Custom Skills

They pair well but solve different problems. A [custom skill](../03-custom-skills/readme.md) defines *how* a recurring task is done; a schedule defines *when* it runs. Point a schedule at a custom skill to get a repeatable, house-style output with zero manual effort. The skill carries your format and sources; the schedule carries the cadence.

---

## Automation Still Stops for Approval

Scheduling the run does not schedule the send. A recurring prompt generates its output automatically, but any high-risk action inside it, such as emailing your manager or posting in Teams, still pauses for your go-ahead each time. Automation removes the repetitive work, not your control over what leaves your workspace. The full approval model is covered in [Human-in-the-Loop](../06-staying-in-control/readme.md).

---

## Hands-On Demo

- [Automate a Weekly Status Report](./demo-01-automation.md): author a custom skill from a house template, run it once to check the output, then put it on a Friday schedule that still pauses the send for approval.

---

## Where to Go Next

- **[Creating Custom Skills](../03-custom-skills/readme.md)**: build the custom skills you schedule here
- **[Extending Cowork with Plugins](../05-plugins/readme.md)**: add new skills and connect external services
- **[Human-in-the-Loop](../06-staying-in-control/readme.md)**: approvals and governance for automated actions

---

## Links & Resources

- [Copilot Tasks & Scheduled Prompts](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork)
- [Cowork Overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/)
- [Cowork FAQ](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-faq)
