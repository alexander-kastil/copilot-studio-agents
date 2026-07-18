# Understanding Skills: Built-in Skills & the Side Panel

> **Frontier Preview**: part of [Getting Started with Cowork](../01-intro/readme.md). Features are subject to change.

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

---

## The Side Panel

While Cowork runs, the side panel shows which skills are active for the current step. It is a live view of what Cowork is doing, so you can see, for example, that the **Excel** skill is building a spreadsheet before the **Email** skill sends it. Watching the panel is the fastest way to understand how Cowork decomposes a request: each skill that lights up is one step in its plan. When a step stalls or produces the wrong output, the panel tells you which skill to steer.

---

## Where Skills Come From

Built-in skills are only the starting point. You can also:

- **Create your own custom skills** stored in OneDrive (see [Creating Custom Skills](../03-custom-skills/readme.md))
- **Install plugin skills** from the Microsoft 365 App Store (see [Extending Cowork with Plugins](../05-plugins/readme.md))
- **Use admin-deployed plugins** rolled out by your IT organization

All of them appear in the same side panel and activate the same way: automatically, based on the task. A custom skill or a plugin skill is not something you invoke by name; Cowork reads its description and loads it when the work calls for it.

---

## Hands-On Demo

- [Produce a Competitive Market Brief](./demo-01-research-brief.md): use Deep Research and Enterprise Search together to survey the market, compare it against Aurora's own positioning, and ship a decision-ready brief.

---

## Where to Go Next

- **[Creating Custom Skills](../03-custom-skills/readme.md)**: teach Cowork your own recurring workflows with a `SKILL.md` file
- **[Scheduling Prompts & Recurring Automation](../04-automation/readme.md)**: put a skill on a recurring schedule
- **[Human-in-the-Loop](../06-staying-in-control/readme.md)**: approve, pause, and govern what your skills do

---

## Links & Resources

- [Use Cowork: Skills & Custom Skills](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork)
- [Cowork Overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/)
- [Cowork FAQ](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-faq)
