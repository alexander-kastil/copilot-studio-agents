# Build a Reusable Meeting-Prep Skill

Author a custom `SKILL.md` that turns Cowork into a repeatable meeting-brief writer, tune its description so Cowork discovers it, then run and refine it until every brief comes out in house format.

## Related Topics

This demo builds on [Understanding Skills](../02-built-in-skills/readme.md), which explains how Cowork picks a skill for a task and why a clear description matters, and on [Creating Custom Skills](./readme.md), which introduces the `SKILL.md` file and companion files you author here. Once the skill is reliable, [Scheduling Prompts & Recurring Automation](../04-automation/readme.md) shows how to put it on a recurring schedule so the prep happens before you even open your calendar.

---

Each step follows the same pattern:

- Overview: what this step achieves
- Research / Planning / Discussion: an open prompt to reason through the problem before acting
- Finding: what to read and evaluate in the response before moving on
- Recipe: a complete implementation prompt you can use as-is or adapt from your own findings
- Expected Outcome: observable artefacts that confirm success

As Regional Manager for Northern Europe at Aurora Outdoor, you prep the same way before every partner call and 1:1. This demo captures that routine once as a reusable skill, so Cowork writes a one-page brief in your house format on demand. You end holding a working Meeting Prep skill that Cowork discovers and runs by name.

---

## Demo Files

Point Cowork at the `demo-02-meeting-prep-skill` folder.

| File | What it represents |
|------|--------------------|
| `meeting-brief-template.docx` | The house meeting-brief template: the section order and headings every brief must follow, with bracketed placeholders |

## Load the demo files

In Microsoft 365 Copilot Cowork, start a new task, click **+**, and attach `meeting-brief-template.docx` from the `demo-02-meeting-prep-skill` folder. Keep it attached for the first steps.

---

## Step 1: Map the template to its sources

**Overview:** Before you can automate the brief, Cowork has to understand what a good one contains and where its content lives. Have it read the house template and work out where each section would be filled from before any meeting.

**Research / Planning / Discussion:**

With the template attached, send this prompt:

```
Read meeting-brief-template.docx. This is our house format for a one-page meeting brief. For each section, tell me where that content would come from before a meeting: which calendar entry, which recent emails with the attendee, or which files. Flag any section that needs my judgement rather than data I can pull.
```

**Finding:** A strong answer maps sections to real sources: Attendees and context to the invite plus recent mail, Where we left off to the last thread with that person, Next steps to open commitments. It should flag My objectives, Risks and sensitivities, and Talking points as judgement sections that need framing, not just data. If it only restates the headings, ask it which section is hardest to fill before a meeting and why.

**Expected Outcome:** A source map that ties each template section to the calendar, emails, or files that feed it, with the judgement-heavy sections flagged.

---

## Step 2: Author the Meeting Prep skill

**Overview:** Now capture that recipe as a reusable custom skill. A `SKILL.md` file lets Cowork discover and reuse this recipe by name, so you never re-explain the format. You author it once, store it in your OneDrive skills folder, and place the template next to it as a companion file.

**Recipe:**

Create a `SKILL.md` file in your OneDrive at `Documents/Cowork/skills/meeting-prep/SKILL.md`, place a copy of `meeting-brief-template.docx` in the same folder, and paste this as the file contents:

```text
---
name: meeting-prep
description: Writes a one-page meeting brief in Aurora Outdoor house format before a partner call or 1:1, pulling from my calendar, recent emails with the attendee, and related files. Use whenever I say prep me for a meeting, write a brief, or name an upcoming meeting to prepare for.
---

Produce a one-page meeting brief in the house format defined by meeting-brief-template.docx, which sits in this skill folder.

Identify the meeting I am preparing for from my request or my calendar. Gather the meeting invite, my recent emails with the attendee, and any related files from the past few weeks.

Fill every section of the template in order:
- Meeting purpose: why we are meeting and the one outcome that means success.
- Attendees and context: who is in the room, their role and company, and our relationship in a line.
- Where we left off: the last interaction, what was agreed, and what stayed open.
- Open items to resolve: unresolved questions and commitments carried over.
- My objectives: the two or three things I want to walk away with, in priority order.
- Risks and sensitivities: topics to handle with care and anything that could derail the talk.
- Talking points: the specific points, numbers, and updates I will raise, matched to my objectives.
- Next steps: the follow-up actions, owners, and dates I will propose.

Keep the brief to one page. Replace every bracketed placeholder with real detail from my sources. Where a section needs my judgement, draft a first version I can adjust rather than leaving it blank. Save the finished brief as a Word document titled with the attendee name and meeting date.
```

**Finding:** Cowork discovers custom skills at the start of each conversation, so start a new task after saving the file and check that Meeting Prep is listed. The `description` is what Cowork reads to decide when the skill applies, so confirm yours names the situation and the trigger phrases rather than staying generic. If Cowork does not find the skill, verify the file is named exactly `SKILL.md` inside its own subfolder with the template beside it.

**Expected Outcome:** A `SKILL.md` saved in your OneDrive skills folder, with the template as its companion file, that Cowork lists as an available custom skill in a new task.

---

## Step 3: Run the skill for a real meeting

**Overview:** Never trust a recipe until you have seen it produce a good result once. Run the skill by name for a real upcoming meeting and inspect the brief against the template.

**Recipe:**

In a new Cowork task, send:

```
Run my Meeting Prep skill for my upcoming Fjallbryggan follow-up with Markus Lind. Use my calendar, my recent emails with Markus, and any related files, then show me the finished one-page brief.
```

**Finding:** Compare the output against `meeting-brief-template.docx`: the sections should be in the same order, every bracketed placeholder should be gone, and the brief should fit on one page. Read Where we left off and Open items closely against your real thread with Markus, and check that My objectives and Talking points reflect the Fjallbryggan relationship rather than generic filler. If a section is thin or a placeholder survived, note it for the next step.

**Expected Outcome:** A one-page meeting brief for the Markus Lind follow-up that matches the house format, with every section filled from your real sources.

---

## Step 4: Tune the skill for reliable discovery

**Overview:** The skill works, but discovery and quality both improve with a sharper description and clearer instructions. Refine the wording so Cowork reaches for Meeting Prep on its own, then re-run to confirm the brief holds up.

**Research / Planning / Discussion:**

In the same task, send:

```
Look at my Meeting Prep skill description and instructions. Which meeting requests would fail to trigger it, and which template sections came out weakest in the brief you just wrote? Suggest a tighter description and any instruction changes that would fix both.
```

**Finding:** A good answer points to phrasings you would use naturally that the current description misses, such as asking to get ready for a call, and to any section that read thin, often Risks and sensitivities or Talking points. Fold its suggestions into the `SKILL.md`: widen the description with the trigger phrases you actually say, and sharpen the instruction for the weak section so it draws on the right source.

**Recipe:**

Save the edited `SKILL.md`, start a new task, and confirm the skill triggers without being named:

```
Prep me for my next Fjallbryggan call. Give me the one-page brief.
```

**Expected Outcome:** A refined Meeting Prep skill that Cowork reliably auto-discovers from natural phrasing, producing a house-format one-page brief with the previously weak sections improved.

> You can hold up to 50 custom skills, and each can carry companion files. See [Creating Custom Skills](./readme.md).
