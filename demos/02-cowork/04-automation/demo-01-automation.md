# Automate a Weekly Status Report

Teach Cowork your house status-report format once, then hand it a schedule so the report writes and sends itself every Friday without you lifting a finger.

## Related Topics

This demo builds directly on [Scheduling Prompts & Recurring Automation](./readme.md), where scheduling and recurring prompts are introduced, and on [Creating Custom Skills](../03-custom-skills/readme.md), which explains the custom `SKILL.md` file you author here. The scheduled send still respects the approval and governance model from [Human-in-the-Loop](../06-staying-in-control/readme.md), so automation never means unsupervised.

---

Each step follows the same pattern:

- Overview: what this step achieves
- Research / Planning / Discussion: an open prompt to reason through the problem before acting
- Finding: what to read and evaluate in the response before moving on
- Recipe: a complete implementation prompt you can use as-is or adapt from your own findings
- Expected Outcome: observable artefacts that confirm success

Every Friday you write the same regional status report from the same sources. This demo turns that recurring chore into a custom skill on a schedule, so it lands in your manager's inbox before you have finished your coffee.

---

## Demo Files

Point Cowork at the `demo-01-automation` folder.

| File | What it represents |
|------|--------------------|
| `weekly-status-template.docx` | The house status-report template: the section order and headings your reports must follow, with bracketed placeholders |

## Load the demo files

In Microsoft 365 Copilot Cowork, start a new task, click **+**, and attach `weekly-status-template.docx` from the `demo-01-automation` folder. Keep it attached for the first steps.

---

## Step 1: Turn the template into a recipe

**Overview:** Before automating anything, Cowork has to understand what a good report looks like. Have it read the house template and work out where the content for each section would come from week to week.

**Research / Planning / Discussion:**

With the template attached, send this prompt:

```
Read weekly-status-template.docx. This is our house format for the weekly regional status report. For each section, tell me where that content would come from in a normal week: which of my emails, meetings, or figures would fill it. Flag any section that needs a judgement call rather than just pulling data.
```

**Finding:** A strong answer maps sections to real sources: revenue-versus-target to the latest figures, blockers to escalations in your inbox, next-week to your calendar. It should flag Highlights and Asks as judgement sections that need framing, not just data. If it only restates the headings, ask it which section is hardest to fill automatically and why.

**Expected Outcome:** A source map that ties each template section to the emails, meetings, or figures that feed it, with the judgement-heavy sections flagged.

---

## Step 2: Author the custom skill

**Overview:** Now capture that recipe as a reusable custom skill. A `SKILL.md` file lets Cowork discover and reuse this recipe by name, so you never re-explain the format. You author it once and store it in your OneDrive skills folder.

**Recipe:**

Create a `SKILL.md` file in your OneDrive under `Documents/Cowork/skills/weekly-status-report/`, and paste this as its contents:

```text
---
name: Weekly Regional Status Report
description: Writes my Northern Europe weekly status report in the house format from my recent emails, meetings, and latest figures, then prepares it to send to my manager.
---

Produce the weekly regional status report for Northern Europe in the house format defined by weekly-status-template.docx.

Gather my sent emails, meetings, and the latest regional figures from the past seven days.

Fill every section of the template in order:
- Highlights: three to five outcome-led wins from the week.
- Revenue vs target: one line per country, actual versus target and the trend.
- In progress: initiatives underway, with status and owner.
- Blockers and risks: anything escalated or at risk, with the help needed.
- Next week: the top three priorities from my calendar and open work.
- Asks: specific decisions or support I need from leadership.

Keep the report to one page. Replace every bracketed placeholder. Save it as a Word document titled with the week ending date, then draft an email to Elena Varga with the report attached and hold it for my approval.
```

**Finding:** Cowork discovers custom skills at the start of each conversation, so start a new task after saving the file and check the skill is picked up. The `description` is what Cowork reads to decide when the skill applies, so confirm yours is specific and trigger-oriented rather than generic. If Cowork does not find the skill, verify the file is named exactly `SKILL.md` inside its own subfolder.

**Expected Outcome:** A `SKILL.md` saved in your OneDrive skills folder that Cowork lists as an available custom skill in a new task.

> You can hold up to 50 custom skills, and each can carry companion files. See [Creating Custom Skills](../03-custom-skills/readme.md#companion-files).

---

## Step 3: Run the skill once before you trust it

**Overview:** Never put a recipe on a schedule before you have seen it produce a good result once. Run the skill by hand and inspect the output against the template.

**Recipe:**

In a new Cowork task, send:

```
Run my Weekly Regional Status Report skill for this week. Show me the finished report and the draft email before sending anything.
```

**Finding:** Compare the output against `weekly-status-template.docx`: the sections should be in the same order, every bracketed placeholder should be gone, and the report should fit on one page. Read the Highlights and Asks sections closely, since those were the judgement calls flagged in Step 1. If a section is thin or a placeholder survived, refine the skill wording and run it again before moving on.

**Expected Outcome:** A one-page status report matching the house format, plus a draft email to Elena held at an approval step, produced entirely from the skill.

---

## Step 4: Put it on a schedule

**Overview:** The recipe works, so remove yourself from the loop. A scheduled prompt runs the skill automatically every week and delivers the result, while the send still waits for your approval.

**Recipe:**

In the same task, send:

```
Schedule my Weekly Regional Status Report skill to run every Friday at 3 PM. Each week it should produce the report and prepare the email to Elena, then hold the send for my approval rather than sending on its own. Add this to my scheduled prompts.
```

**Finding:** Open the **Scheduled** tab in Task views and confirm the new recurring prompt is listed with a Friday 3 PM recurrence. From there you can pause, edit, or delete it later. Note that scheduling the run does not schedule the send: the report is generated automatically, but the high-risk email still stops for your approval each week, so nothing reaches your manager unread.

**Expected Outcome:** A recurring prompt visible in the Scheduled tab, set to Friday 3 PM, that will generate the report each week and pause the email at the approval step.

> Scheduling, recurrence, and how automation pairs with custom skills are covered in [Scheduling Prompts & Recurring Automation](./readme.md#how-scheduling-works).
