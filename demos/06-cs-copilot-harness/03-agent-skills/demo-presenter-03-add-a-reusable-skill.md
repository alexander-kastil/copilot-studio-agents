---
presents: demo-03-add-a-reusable-skill.md
budget: 5 min
beats: 5
---

# Present: Add and Tune an Agent Skill

> **Note:** This demo shows one agent: GH-Health Advisor, a Microsoft Copilot harness agent.

**Guide:** [Add and Tune an Agent Skill](demo-03-add-a-reusable-skill.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · continues the demo 01 agent; have [SKILL.md](demo-03-add-a-reusable-skill/SKILL.md) and an edited copy for Exercise 5 on your machine

**Agent:** GH-Health Advisor from [Build and Ground Your First Microsoft Copilot Harness Agent](../01-standard-vs-copilot-harness/demo-01-build-and-ground-an-agent.md)

**Initial prompt** (upload `SKILL.md` first; sent in **Preview** in Exercise 4):

```text
Draft a follow-up email after my call with Around the Horn about their green tea reorder.
```

### Beat 1: The description is what the runtime matches (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > GH-Health Advisor > **Build** > **Skills** > **+** > **Create from blank** > **Create**
**What is there:** `follow-up-email-drafter` under **Skills**, its description on hover; the panel with **Name**, **Description**, **Instructions** holding the "When this skill is activated:" template, a **Download** icon, **Save** and **Cancel**.

### Beat 2: A Claude Code skill file, uploaded unchanged (1 min)

**Navigate:** **Skills** > **x** > **Delete** · **+** > **Upload a skill** > [SKILL.md](demo-03-add-a-reusable-skill/SKILL.md)
**What is there:** "Saving skill..." and no review step; the panel marked **Read-only** with **Name**, **Description**, **Optional frontmatter** and the rendered instructions, and a **...** menu with **Replace** and **Download**.

### Beat 3: It fires on a follow-up and stays quiet on a lookup (1 min)

**Navigate:** **Preview** > **Debug mode** > **New chat** · step list
**What is there:** **Used skill: follow-up-email-drafter** and an email with a greeting, a recap of the green tea reorder, a next step and your display name; the Tier 3 question shows only **Used tool: Searched knowledge** and the file reader, no email format.

### Beat 4: Tighten activation without a second skill (1 min)

**Navigate:** **Skills** > `follow-up-email-drafter` > **...** > **Replace** > the edited `SKILL.md`
**What is there:** "Saving skill..."; the same skill with the narrower description and no second entry under **Skills**.

### Beat 5: The file is the unit of sharing (1 min)

**Navigate:** **Skills** > `follow-up-email-drafter` > **...** > **Download**
**What is there:** `follow-up-email-drafter.md` with the tuned name, description and full Markdown instructions, renamed to `SKILL.md` before it travels.
