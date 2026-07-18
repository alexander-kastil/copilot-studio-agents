# Turn a Partner Meeting into a Follow-Up Package

Give Cowork your raw meeting notes and a half-finished proposal, and let it reconcile the two, close every open term, draft the follow-up email, and book the next call.

## Related Topics

This demo shows the [Intro to Cowork](../01-intro/readme.md) promise of end-to-end work: one request that spans reading, editing, emailing, and scheduling. The document and calendar work draws on built-in [Skills](../02-skills/readme.md), and because the final email reaches an external partner, it exercises the high-risk approval path from [Staying in Control](./readme.md).

---

Each step follows the same pattern:

- Overview: what this step achieves
- Research / Planning / Discussion: an open prompt to reason through the problem before acting
- Finding: what to read and evaluate in the response before moving on
- Recipe: a complete implementation prompt you can use as-is or adapt from your own findings
- Expected Outcome: observable artefacts that confirm success

You have just come off a discovery call with Fjallbryggan Retail, a Nordic chain that wants to stock Aurora Outdoor for the AW26 season. You promised a revised proposal within a week and a follow-up call.

---

## Demo Files

Point Cowork at the `demo-02-follow-up` folder.

| File | What it represents |
|------|--------------------|
| `partner-meeting-notes.docx` | Notes from the discovery call: what the buyer asked for, the open questions, and the action items |
| `partnership-proposal-draft.docx` | The pre-call draft proposal, with several commercial terms still marked `[OPEN]` |

## Load the demo files

In Microsoft 365 Copilot Cowork, start a new task, click **+**, and attach both files from the `demo-02-follow-up` folder. They remain available for every step.

---

## Step 1: Reconcile the notes against the draft

**Overview:** The draft proposal was written before the call and is full of open placeholders. The meeting answered most of them. First, have Cowork line the two documents up and tell you exactly what changed.

**Research / Planning / Discussion:**

With both files attached, send this prompt:

```
Read partner-meeting-notes.docx and partnership-proposal-draft.docx. The draft was written before the call. For every item marked [OPEN] in the draft, tell me whether the meeting resolved it and what the agreed position is. Then list anything the buyer raised that the draft does not cover at all.
```

**Finding:** Check that Cowork maps each `[OPEN]` to a concrete decision: 45 percent margin at a 180k opening order in exchange for in-store fixtures, no exclusivity required, and Accessories confirmed as an impulse add-on. It should also flag something the draft omits entirely: the mid-layer fleece fit concern the buyer raised. If it leaves any placeholder unresolved, ask it which meeting note covers that term.

**Expected Outcome:** A point-by-point reconciliation showing each open term, the meeting's decision, and at least one new item (the fleece fit) the draft never addressed.

---

## Step 2: Close every open term in the proposal

**Overview:** With the mapping agreed, turn the draft into a sendable document. Cowork edits the existing file rather than starting a new one, so the structure your partner expects stays intact.

**Recipe:**

In the same task, send:

```
Update partnership-proposal-draft.docx into a finished v1.0. Replace every [OPEN] placeholder with the position agreed on the call: 45 percent wholesale margin at a 180,000 euro opening order, conditional on an in-store brand-fixtures commitment; Accessories included as a till-point range; no category exclusivity required. Add a short quality note that the AW26 mid-layer fleece has a corrected fit. Set the heads-of-terms deadline to align with the buyer's range review four weeks out. Change the document title from DRAFT to v1.0 and remove any leftover bracketed text. Save it as a new file so the draft is preserved.
```

**Finding:** Open the result and search for the word "OPEN" and any square brackets; there should be none left. Confirm the three commercial terms read back exactly as agreed and that the fleece note is present. If a placeholder survived, tell Cowork which section still has one.

**Expected Outcome:** A new proposal file with no remaining placeholders, the three commercial terms filled in, a fit-quality note added, and the draft file left untouched.

> The recipe above reflects the typical outcome of the reconciliation in Step 1. If your call notes led to different terms, use those.

---

## Step 3: Draft the follow-up email

**Overview:** The partner is waiting on the revised proposal. Cowork writes the cover email and attaches the finished document, but it will not send to an external address without your go-ahead.

**Recipe:**

In the same task, send:

```
Draft an email to Markus Lind at Fjallbryggan with the finished proposal attached. Keep it to three short paragraphs: thank him for the call, summarise the three headline terms we agreed so he can see them without opening the attachment, and propose we walk through it on a follow-up call next week. Warm and concise. Do not send it; show me the draft.
```

**Finding:** This is an external recipient, so the send is high risk and Cowork holds it at an approval step. Read the summary paragraph and make sure the three terms match the proposal exactly, since a mismatch between the email and the attachment is the classic follow-up mistake. Confirm the attachment is v1.0 and not the old draft.

**Expected Outcome:** A drafted email to Markus Lind with the finished proposal attached, paused at a high-risk approval step with a visible **Send** action.

---

## Step 4: Book the follow-up call

**Overview:** You promised a call next week. Rather than switch to your calendar, describe the meeting and let Cowork schedule it, which is a medium-risk action because it touches other people's calendars.

**Recipe:**

In the same task, send:

```
Set up a 30-minute follow-up call titled "Aurora x Fjallbryggan - proposal review" with Markus Lind for next week. Aim for a mid-morning slot, and in the invite body note that the agenda is to walk through the v1.0 proposal. Show me the invite before you send it.
```

**Finding:** Note that scheduling shows a **medium** risk level, not high: it changes calendars but stays closer to home than an external email. Check the proposed time does not collide with anything Cowork can see, and that the invite body names the proposal so the partner arrives prepared.

**Expected Outcome:** A drafted meeting invite for a 30-minute mid-morning call next week, addressed to Markus Lind, held at a medium-risk approval step for you to confirm.

> Why sending an email is high risk while scheduling is medium is explained in [Staying in Control](./readme.md#risk-levels).
