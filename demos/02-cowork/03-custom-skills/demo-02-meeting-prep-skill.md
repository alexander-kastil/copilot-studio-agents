# Build a Reusable Meeting-Prep Skill

![The one-page Meeting Brief - Markus Lind - 30 October 2026.docx has eight sections tagged data, judgement or mixed, fed by the invite and directory, the call notes and v1.0 proposal, and your judgement, with no emails from Markus Lind found, and it is shaped by the meeting-prep skill and its template, run by name and then found without being named.](./_images/02-meeting-prep-skill-overview.svg)

Author a custom `SKILL.md` that turns Cowork into a repeatable meeting-brief writer, tune its description so Cowork discovers it, then run and refine it until every brief comes out in house format.

> **Reasoning effort:** Use **Light** for this demo, set in the **Auto Medium** picker beside the send arrow, where Light is the leftmost stop on the **Faster** to **Smarter** slider. Step 2 has no prompt, because you author the file yourself. Switch to **Medium** for the first run in Step 3 only if the brief comes out thin. A one-page meeting brief from a template never needs High or Max.

## Run Cost

| Token type | Tokens | Opus 5.5 (run) | Sonnet 5.5 (estimate) | Haiku 5.5 (estimate) |
| --- | --- | --- | --- | --- |
| Input | 258 | €0.00 | €0.00 | €0.00 |
| Cache write | 337K | €1.50 | €0.75 | €0.13 |
| Cache read | 25.3M | €4.49 | €4.49 | €1.08 |
| Output | 77K | €1.38 | €0.69 | €0.16 |
| **Total** | **25.7M** | **€7.37** | **€5.93** | **€1.38** |

## Related Topics

This demo builds on [Understanding Skills](../02-built-in-skills/readme.md), which explains how Cowork picks a skill for a task and why a clear description matters, and on [Creating Custom Skills](./readme.md), which introduces the `SKILL.md` file and companion files you author here. Once the skill is reliable, [Scheduled Prompts & Event-Driven Tasks](../04-automation/readme.md) shows how to put it on a recurring schedule so the prep happens before you even open your calendar.

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

In Microsoft 365 Copilot Cowork, select **New task**, then **Add attachments** (**+**) > **Upload images and files**, and add `meeting-brief-template.docx` from the `demo-02-meeting-prep-skill` folder. It shows as a Word document chip above the composer and stays under **References** in the **Workspace** panel.

---

## Step 1: Map the template to its sources

**Overview:** Before you can automate the brief, Cowork has to understand what a good one contains and where its content lives. Have it read the house template and work out where each section would be filled from before any meeting.

**Research / Planning / Discussion:**

With the template attached, send this prompt:

```
Read meeting-brief-template.docx. This is our house format for a one-page meeting brief. For each section, tell me where that content would come from before a meeting: which calendar entry, which recent emails with the attendee, or which files. Flag any section that needs my judgement rather than data I can pull.
```

**Finding:** A strong answer maps sections to real sources: Attendees and context to the invite plus the directory, Where we left off to the last meeting or thread with that person, Open items to recent emails and chats. It flags My objectives, Risks and sensitivities, and Next steps as judgement sections, and marks Meeting purpose and Talking points as mixed because you choose the success outcome and what to raise. If it only restates the headings, ask it which section is hardest to fill before a meeting and why.

**Expected Outcome:** A source map, typically a table with a data-or-judgement column, that ties each of the eight template sections to the calendar, emails, or files that feed it, with the judgement-heavy sections flagged.

---

## Step 2: Author the Meeting Prep skill

**Overview:** Now capture that recipe as a reusable custom skill. A `SKILL.md` file lets Cowork discover and reuse this recipe by name, so you never re-explain the format. You author it once, store it in your OneDrive skills folder, and place the template next to it as a companion file.

![Diagram of the product-pitch and meeting-prep skill folders, each with a SKILL.md that names its companion file, pitch-deck-structure.pptx or meeting-brief-template.docx, which Cowork reads whenever the skill runs.](./_images/companion-files.svg)

**Recipe:**

Create a `SKILL.md` file in your OneDrive at `Documents/Cowork/Skills/meeting-prep/SKILL.md`, place a copy of `meeting-brief-template.docx` in the same folder, and paste this as the file contents:

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

To upload instead, zip the contents of the `meeting-prep` folder, with `SKILL.md` and the template at the root of the archive. In **Customize**, select **Add** > **Upload** and choose the zip in the **Upload a skill or plugin** dialog, which takes `.md`, `.zip` or `.skill` files. Cowork confirms with **Skill uploaded** and stores both files in the same OneDrive folder.

**Finding:** Cowork discovers custom skills at the start of each conversation, so start a new task after saving the file and check that **meeting-prep** is listed under **Added** in **Customize**; its page shows the description and **Instructions**, and **Open in OneDrive** shows `SKILL.md` beside the template. The `description` is what Cowork reads to decide when the skill applies, so confirm yours names the situation and the trigger phrases rather than staying generic. If Cowork does not find the skill, verify the file is named exactly `SKILL.md` inside its own subfolder with the template beside it. If Cowork returns a **Skill Report** for the skill, start with its lowest-scoring dimension.

**Expected Outcome:** A `SKILL.md` in `Documents/Cowork/Skills/meeting-prep`, with the template as its companion file, that **Customize** lists under **Added** as **meeting-prep**, created by you.

---

## Step 3: Run the skill for a real meeting

**Overview:** Never trust a recipe until you have seen it produce a good result once. Run the skill by name for a real upcoming meeting and inspect the brief against the template. The prompt preps the call booked in [Turn a Partner Meeting into a Follow-Up Package](../06-staying-in-control/demo-01-follow-up.md), and Cowork builds the brief from that invite and its files, so run that demo first.

**Recipe:**

In a new Cowork task, send:

```
Run my Meeting Prep skill for my upcoming Fjallbryggan follow-up with Markus Lind. Use my calendar, my recent emails with Markus, and any related files, then show me the finished one-page brief.
```

**Finding:** The **Plugins** panel lists **meeting-prep**, which shows Cowork loaded your skill, and **Output** holds a Word file named after the attendee and date, such as `Meeting Brief - Markus Lind - 30 October 2026.docx`. Compare it against `meeting-brief-template.docx`: the sections should be in the same order, the brief should fit on one page, and My objectives and Talking points should reflect the Fjallbryggan terms rather than generic filler. Markus Lind has no mail in your tenant, so Cowork reports that it found no emails from him and fills Where we left off and Open items from the call notes and the v1.0 proposal; it leaves a placeholder where no source holds the fact, such as fleece fit-test data or the signing date. If a section is thin or a placeholder survived, note it for the next step.

**Expected Outcome:** A one-page meeting brief for the Markus Lind follow-up in the house format, filled from the invite and the follow-up files, with any missing facts called out for you to fill.

---

## Step 4: Tune the skill for reliable discovery

**Overview:** The skill works, but discovery and quality both improve with a sharper description and clearer instructions. Refine the wording so Cowork reaches for Meeting Prep on its own, then re-run to confirm the brief holds up.

![Diagram of the run-and-tune loop: start a new task, run the skill, check the result against the template and the source, ask what misses, and fold the fixes in, repeating until the skill fires without being named.](../pptx/images/03-03-run-and-tune.svg)

**Research / Planning / Discussion:**

In the same task, send:

```
Look at my Meeting Prep skill description and instructions. Which meeting requests would fail to trigger it, and which template sections came out weakest in the brief you just wrote? Suggest a tighter description and any instruction changes that would fix both.
```

**Finding:** A good answer points to phrasings you would use naturally that the current description misses, such as asking to get ready for a call, and to any section that read thin, often Risks and sensitivities or Talking points. It also offers to apply the changes to your skill file. Accept with a short reply, or edit `SKILL.md` in OneDrive yourself: widen the description with the trigger phrases you actually say, and sharpen the instruction for the weak section so it draws on the right source.

```text
Apply the suggested description and instruction changes to my Meeting Prep skill file and save it.
```

Cowork writes the file through a **Copy file** card at **Medium risk**, with your Cowork folder `skills/meeting-prep` as the target and **Overwrite** set to Yes; select **Approve**. It then reports a quality review score out of 100 with a pass mark, and the weakest area it names shows what to fix next, such as how reliably the description triggers.

**Recipe:**

Start a new task and confirm the skill triggers without being named:

```
Prep me for my next Fjallbryggan call. Give me the one-page brief.
```

**Expected Outcome:** **meeting-prep** appears under **Plugins** although the prompt never names it, and the brief lands in **Output** with readiness warnings at the top (an unsent draft, an invite with no attendees) and missing facts marked "Needed". Cowork says when it cannot confirm the one-page fit, so check the page count in Word and tell it whether to cut further or put detail back.

> You can hold up to 50 custom skills, and each can carry companion files. See [Creating Custom Skills](./readme.md).
