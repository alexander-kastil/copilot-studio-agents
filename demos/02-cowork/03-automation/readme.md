# Automation & Plugins

> **Frontier Preview**: part of [Microsoft 365 Copilot Cowork](../01-intro/readme.md). Features are subject to change.

The first two topics covered what Cowork does and the skills behind it. This topic makes that work repeatable (recurring prompts) and extensible (plugins that add new skills and connect external services).

---

## Scheduling Prompts & Recurring Automation

Any prompt you can run once, you can run on a schedule. Instead of asking for the same report every week, you hand Cowork the recipe once and it runs on its own.

### How Scheduling Works

1. **Write the prompt** as you normally would, describing the full outcome.
2. **Set a recurrence** (daily, weekly, monthly, or a specific time).
3. **Cowork runs it automatically** at each interval and delivers the result.
4. **Manage all scheduled prompts** from the **Scheduled** tab in Task views: pause, edit, or delete them.

### Good Candidates for a Schedule

| Schedule | Prompt |
|---|---|
| **Every weekday, 8 AM** | *"Give me a Daily Briefing: today's meetings, unread priority emails, and any documents shared with me since yesterday."* |
| **Every Friday, 4 PM** | *"Summarize my sent emails and calendar for the week into a Word status report and send it to my manager."* |
| **First of the month** | *"Compile last month's project updates from the Marketing Teams channel into a one-page digest."* |

### Scheduled Prompts vs. Custom Skills

They pair well but solve different problems. A [custom skill](../02-skills/readme.md) defines *how* a recurring task is done; a schedule defines *when* it runs. Point a schedule at a custom skill to get a repeatable, house-style output with zero manual effort.

---

## Extending Cowork with Plugins

Plugins from the **Microsoft 365 App Store** add new skills and connect Cowork to external services. Once installed, a plugin's skills appear alongside built-in skills and activate automatically based on context, exactly like the ones you already use.

### What Plugins Add

- **Specialized expertise**: financial analysis, legal research, HR systems
- **External data connectors**: CRM data, ticketing systems, third-party APIs
- **Admin deployment**: IT admins can roll out plugins organization-wide

### Where Plugins Fit

Built-in skills handle the common office tasks. Custom skills handle *your* recurring workflows. Plugins reach *beyond* Microsoft 365 into the systems your work depends on, and admin-deployed plugins let IT standardize that reach across the whole organization.

---

## Hands-On Demo

- [Automate a Weekly Status Report](./demo-05-automation.md): author a custom skill from a house template, run it once to check the output, then put it on a Friday schedule that still pauses the send for approval.

---

## Where to Go Next

- **[Skills](../02-skills/readme.md)**: build the custom skills you schedule here
- **[Staying in Control](../04-staying-in-control/readme.md)**: approvals and governance for automated and plugin-driven actions

---

## Links & Resources

- [Cowork Plugins](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugins)
- [Use Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork)
- [Cowork Overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/)
