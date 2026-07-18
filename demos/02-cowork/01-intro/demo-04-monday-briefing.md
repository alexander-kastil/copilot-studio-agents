# Clear a Monday Backlog into a Briefing

Drop a Monday-morning inbox and a clashing calendar on Cowork, and get back a prioritised briefing, a resolved conflict, and the hard replies already drafted.

## Related Topics

This demo uses the Daily Briefing, Enterprise Search, and Calendar Management capabilities from the built-in [Skills](../02-skills/readme.md) catalogue to compress a backlog into a plan. It is a concrete run of the [Intro to Cowork](./readme.md) interaction model, and the drafted replies stop at the same approval gate described in [Staying in Control](../04-staying-in-control/readme.md).

---

Each step follows the same pattern:

- Overview: what this step achieves
- Research / Planning / Discussion: an open prompt to reason through the problem before acting
- Finding: what to read and evaluate in the response before moving on
- Recipe: a complete implementation prompt you can use as-is or adapt from your own findings
- Expected Outcome: observable artefacts that confirm success

It is Monday morning at Aurora Outdoor. Fourteen messages landed over the weekend, your Tuesday has a double-booking, and the Q3 review is Thursday. You want a plan before your 09:00 stand-up.

---

## Demo Files

Point Cowork at the `demo-04-monday-briefing` folder.

| File | What it represents |
|------|--------------------|
| `inbox-snapshot.xlsx` | A weekend inbox on the Inbox sheet, and your week's meetings on the Calendar sheet, including one conflict |

## Load the demo files

In Microsoft 365 Copilot Cowork, start a new task, click **+**, and attach `inbox-snapshot.xlsx` from the `demo-04-monday-briefing` folder. Keep it attached throughout.

---

## Step 1: Triage the inbox

**Overview:** Fourteen messages is a wall, not a plan. Before drafting anything, have Cowork sort the backlog by what actually needs you today versus what can wait or be ignored.

**Research / Planning / Discussion:**

With the file attached, send this prompt:

```
Read the Inbox sheet in inbox-snapshot.xlsx. Sort these messages into three groups: needs my action today, can wait until later this week, and no action needed. For the "today" group, tell me the order I should handle them in and why. Call out anything with a hard deadline this week.
```

**Finding:** A good triage does more than echo the Priority column: it should surface the two genuine deadlines (the Bergen candidate needing an answer by Wednesday and the deck due to Elena) and correctly file the newsletter and IT notice as no-action. If it treats every "High" as equally urgent, ask which single item is most time-critical and why.

**Expected Outcome:** The inbox split into today, this-week, and no-action groups, with the today group ordered and the two hard deadlines named.

---

## Step 2: Resolve the calendar conflict

**Overview:** One decision this morning is not optional: you are double-booked. Switch Cowork's attention to the calendar and let it propose a fix rather than you juggling invites.

**Research / Planning / Discussion:**

In the same task, send:

```
Now look at the Calendar sheet in the same file. I have a conflict on Tuesday. Show me what clashes, tell me which meeting is more important to keep given the Q3 review on Thursday and the Fjallbryggan work, and propose how to resolve it, including a suggested new time for the one I move.
```

**Finding:** Check that Cowork identifies the 14:00 Tuesday clash between the Fjallbryggan prep and the People Team headcount meeting, and that it reasons about which to keep rather than picking arbitrarily. A strong answer proposes a specific alternative slot for the moved meeting and checks that slot is free. If it just reports the clash without a recommendation, ask it to decide and justify.

**Expected Outcome:** The Tuesday 14:00 conflict identified, a recommendation on which meeting to keep with reasoning, and a concrete new time proposed for the other.

---

## Step 3: Write the Monday briefing

**Overview:** You now have a triaged inbox and a resolved calendar. Capture the plan in a short document you can glance at through the day and paste into your stand-up.

**Recipe:**

In the same task, send:

```
Create a Word document titled "Monday Briefing" with these sections:
1. Top priorities today: the ordered action list from the inbox triage.
2. Deadlines this week: every hard deadline with its day.
3. Calendar: the week at a glance, with the Tuesday conflict and how it is resolved.
4. Can wait: the lower-priority items so nothing is lost.
Keep it to one page and make it scannable.
```

**Expected Outcome:** A one-page `.docx` briefing with an ordered priority list, the week's deadlines, the resolved calendar, and a holding list for lower-priority items.

> The recipe above assumes the triage and conflict resolution above. If your session reached different priorities, brief those instead.

---

## Step 4: Draft the replies you cannot avoid

**Overview:** Some of today's items need a reply from you, not just a note in a briefing. Have Cowork draft the two or three hardest, so you approve wording instead of writing from scratch.

**Recipe:**

In the same task, send:

```
Draft replies for the three most time-critical messages from the today group: the Bergen candidate decision to Lars, the proposal-timing question from Markus at Fjallbryggan, and Elena's request to present Thursday. Match the tone to each recipient. Keep each reply to a few sentences. Do not send any of them; show me the drafts so I can review and approve.
```

**Finding:** These are outbound emails, so each one stops at an approval step with a risk level rather than sending automatically. Read the Bergen reply first, since a decision that commits Aurora to a hire is the one most worth getting right. Confirm each draft answers the actual question in its source message.

**Expected Outcome:** Three drafted replies addressed to Lars, Markus, and Elena, each paused at an approval step with a visible **Send** action for you to review.

> How the approval gate and per-action risk levels work is covered in [Staying in Control](../04-staying-in-control/readme.md).
