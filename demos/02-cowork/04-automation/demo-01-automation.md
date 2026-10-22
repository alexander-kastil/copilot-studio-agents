# Automate a Weekly Status Report

![On a timeline, the weekly-status-report skill runs once by hand with nothing sent, a Create recurring task? card schedules it for Weekly, Friday, 3:00 PM under Automations > Active, each Friday run leaves a one-page Word report and a Hi Elena email saved to drafts, and ... > Pause ends it after the demo.](./_images/01-automation-overview.svg)

Teach Cowork your house status-report format once, then hand it a schedule so the report writes and sends itself every Friday without you lifting a finger.

> **Reasoning effort:** Use **Medium** for Steps 1 and 2 (mapping the template and authoring the skill) and **Light** for the test run in Step 3 and the scheduling in Step 4. Set it with the effort slider next to the send arrow; the picker reads **Auto Medium** or **Auto Light**. Do not use High or Max. Each scheduled run consumes Copilot Credits every Friday, so pause or delete the task on the **Automations** page (**...** > **Pause** or **Delete**) after the demo unless you want it to keep running.

## Run Cost

| Token type | Tokens | Opus 5.5 (run) | Sonnet 5.5 (estimate) | Haiku 5.5 (estimate) |
| --- | --- | --- | --- | --- |
| Input | 194 | €0.00 | €0.00 | €0.00 |
| Cache write | 301K | €1.34 | €0.67 | €0.11 |
| Cache read | 16.3M | €2.90 | €2.90 | €0.68 |
| Output | 50K | €0.90 | €0.45 | €0.10 |
| **Total** | **16.6M** | **€5.13** | **€4.02** | **€0.90** |

## Related Topics

This demo builds directly on [Scheduled Prompts & Event-Driven Tasks](./readme.md), where scheduling and recurring prompts are introduced, and on [Creating Custom Skills](../03-custom-skills/readme.md), which explains the custom `SKILL.md` file you author here. The scheduled send still respects the approval and governance model from [Human-in-the-Loop](../06-staying-in-control/readme.md), so automation never means unsupervised.

---

Each step follows the same pattern:

- Overview: what this step achieves
- Research / Planning / Discussion: an open prompt to reason through the problem before acting
- Finding: what to read and evaluate in the response before moving on
- Recipe: a complete implementation prompt you can use as-is or adapt from your own findings
- Expected Outcome: observable artefacts that confirm success

Every Friday you write the same regional status report from the same sources. This demo turns that recurring chore into a custom skill on a schedule, so it lands in your manager's inbox before you have finished your coffee.

![The demo at a glance: Step 1 maps the template to its sources, Step 2 writes the weekly-status-report skill, Step 3 runs it once by hand, and Step 4 runs it every Friday at 3 PM. Each run produces a one-page Word report and a draft email to Elena Varga held for your approval.](./_images/weekly-status-report-build.svg)

---

## Demo Files

Point Cowork at the `demo-01-automation` folder.

| File | What it represents |
|------|--------------------|
| `weekly-status-template.docx` | The house status-report template: the section order and headings your reports must follow, with bracketed placeholders |

## Load the demo files

In Microsoft Copilot, select **Cowork** in the **Chat / Cowork / Code** switch, choose **New task**, click **+** > **Upload images and files**, and pick `weekly-status-template.docx` from the `demo-01-automation` folder. The file appears as a Word document chip above the composer; keep it attached for Step 1.

---

## Step 1: Turn the template into a recipe

**Overview:** Before automating anything, Cowork has to understand what a good report looks like. Have it read the house template and work out where the content for each section would come from week to week.

**Research / Planning / Discussion:**

With the template attached, send this prompt:

```
Read weekly-status-template.docx. This is our house format for the weekly regional status report. For each section, tell me where that content would come from in a normal week: which of my emails, meetings, or figures would fill it. Flag any section that needs a judgement call rather than just pulling data.
```

**Finding:** A strong answer maps sections to real sources: revenue versus target to the latest figures (in the class tenant, the Targets sheet of `q3-sales-by-region.xlsx` from the [quarterly review demo](../01-intro/demo-01-quarterly-review.md)), in progress and blockers to the regional notes or escalations in your inbox, next week to your calendar. It should flag Highlights, Blockers, Next week, and Asks as judgement sections that need framing, not just data, and say when no weekly feed sits behind the figures. If it only restates the headings, ask it which section is hardest to fill automatically and why.

**Expected Outcome:** A source map that ties each template section to the emails, meetings, or files that feed it, with the judgement-heavy sections flagged and any missing weekly data called out.

---

## Step 2: Author the custom skill

**Overview:** Now capture that recipe as a reusable custom skill. A `SKILL.md` file lets Cowork discover and reuse this recipe by name, so you never re-explain the format. You author it once and store it in your OneDrive skills folder.

**Recipe:**

Create a `SKILL.md` file in your OneDrive under `Documents/Cowork/Skills/weekly-status-report/`. In OneDrive on the web, open **My files** > **Documents** > **Cowork** > **Skills**, choose **Create or upload** > **Folder**, and name it `weekly-status-report`. Open the new folder, choose **Create or upload** > **Markdown document**, replace all of the sample text with the block below, and select **Save**. Then click the file name `Untitled` in the header and rename it to `SKILL`, so the file reads `SKILL.md`.

```text
---
name: weekly-status-report
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

**Finding:** Cowork picks up a skill saved to OneDrive after a short sync, which took about six minutes in testing. Reload **Customize** until `weekly-status-report` appears under **Added**, then start a new task, type `/`, and choose the **Skills** filter: it is listed under **Custom skills**. The `description` is what Cowork reads to decide when the skill applies, so confirm yours is specific and trigger-oriented rather than generic. If Cowork still does not find the skill, verify the file is named exactly `SKILL.md` inside its own subfolder.

![Three ways to create a skill all end in one folder, Documents/Cowork/skills, with one subfolder per skill and up to 50 custom skills. A task that was already open before the save does not list the new skill; the next new task discovers it at its start.](../pptx/images/03-01-create-a-skill.svg)

**Expected Outcome:** A `SKILL.md` saved in your OneDrive skills folder that Cowork lists under **Customize** > **Added** (its page reads "Created by you") and as `/weekly-status-report` under **Custom skills** in a new task.

> You can hold up to 50 custom skills, and each can carry companion files. See [Creating Custom Skills](../03-custom-skills/readme.md#companion-files).

---

## Step 3: Run the skill once before you trust it

**Overview:** Never put a recipe on a schedule before you have seen it produce a good result once. Run the skill by hand and inspect the output against the template.

**Recipe:**

In a new Cowork task with the effort set to **Light**, send:

```
Run my Weekly Regional Status Report skill for this week. Show me the finished report and the draft email before sending anything.
```

Cowork loads the skill (the first step reads "Reviewed custom skill Weekly status report") and checks this week's sent mail, calendar, and figures. In a class tenant it finds no weekly figures and no mailbox for Elena Varga, so it stops before writing anything and asks how to go ahead. Reply with:

```
Build it from the Q3 material: q3-sales-by-region.xlsx and q3-regional-notes.docx in my OneDrive. Elena Varga has no mailbox in this tenant, so address the draft to me instead and hold it for my approval.
```

**Finding:** Open the Word document from the **Output** list in the **Workspace** panel and compare it against `weekly-status-template.docx`: the sections should be in the same order, every bracketed placeholder should be gone, and the report should fit on one page. Read the Highlights and Asks sections closely, since those were the judgement calls flagged in Step 1. The email card reads **Saved to drafts**: the draft starts "Hi Elena", carries the report, and waits in your Outlook Drafts folder until you tell Cowork to send it. If a section is thin or a placeholder survived, refine the skill wording and run it again before moving on.

![The run-and-tune loop: start a new task, run the skill by name, check the result against the template and the source, ask what misses, and fold the fixes into SKILL.md. Repeat until the skill fires without being named.](../pptx/images/03-03-run-and-tune.svg)

**Expected Outcome:** A one-page Word report titled with the week ending date, matching the house format and marked as built from the Q3 sources, plus a "Hi Elena" email addressed to you and saved to your Drafts folder; Cowork confirms "Nothing has been sent."

---

## Step 4: Put it on a schedule

**Overview:** The recipe works, so remove yourself from the loop. A scheduled prompt runs the skill automatically every week and delivers the result, while the send still waits for your approval.

**Recipe:**

In the same task, send:

```
Schedule my Weekly Regional Status Report skill to run every Friday at 3 PM. Each week it should produce the report and prepare the email to Elena, then hold the send for my approval rather than sending on its own. Add this to my scheduled prompts.
```

**Finding:** Cowork answers with a **Create recurring task?** card. Check that **Repeat** reads **Weekly**, **Friday**, **3:00 PM**, and read the **Description**: it is the prompt every run receives, including where to address the draft. Clear **Run once now** so the first run lands on Friday (leave it ticked to watch one run immediately), then select **Schedule**; Cowork confirms the first run date.

Open **Automations** in the left navigation and confirm the task is listed under **Active** with "Every week on Friday at 3:00 PM" and its next run. Its **...** menu offers **Edit**, **Run now**, **Pause**, and **Delete**. Note that scheduling the run does not schedule the send: each run saves the email to your Drafts folder and never sends it on its own, so nothing reaches your manager unread.

![The run is automatic and the send waits for your approval: a schedule or trigger fires, Cowork prepares the send, and it is held for your approval before it leaves your workspace unless you pre-authorized it. Below, the guardrails: your permissions, rate limits, loop protection, and results only to you.](../pptx/images/04-03-automation-approvals.svg)

**Expected Outcome:** A recurring task listed under **Automations** > **Active**, set to every week on Friday at 3:00 PM, that will generate the report each week and leave the email in your Drafts folder. After the demo, choose **...** > **Pause**: the task moves under **Paused**, its toggle switches off, and no next run is shown.

> Scheduling, recurrence, and how automation pairs with custom skills are covered in [Scheduled Prompts & Event-Driven Tasks](./readme.md#how-scheduling-works).
