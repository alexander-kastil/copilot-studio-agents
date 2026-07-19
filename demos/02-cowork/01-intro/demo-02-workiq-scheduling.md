# Schedule a Meeting Where Your Week Has Room

Let Cowork read your live week through Work IQ, reason about where a one-hour Agentic AI discussion actually fits, book it on your real calendar through the approval gate, and brief you for it from your own work data.

## Related Topics

This demo runs the [Getting Started with Cowork](./readme.md) interaction model against live tenant data instead of attached files. The Calendar Management, Scheduling, and Enterprise Search capabilities it exercises come from the built-in [Skills](../02-built-in-skills/readme.md) catalogue, and every write to your calendar pauses at the approval flow covered in [Human-in-the-Loop](../06-staying-in-control/readme.md).

---

Each step follows the same pattern:

- Overview: what this step achieves
- Research / Planning / Discussion: an open prompt to reason through the problem before acting
- Finding: what to read and evaluate in the response before moving on
- Recipe: a complete implementation prompt you can use as-is or adapt from your own findings
- Expected Outcome: observable artefacts that confirm success

Work IQ is the layer that grounds Cowork in your working life: your mail, meetings, files, and the people you work with. The previous demo attached files; this one attaches nothing, because the data is your own week. The task is simple to say and annoying to do by hand: find the right one-hour slot this week for a working session on Agentic AI, and book it.

## Live Data, No Demo Files

There is no companion folder for this demo. Everything Cowork reads comes from your own calendar, mail, and files through Work IQ, so run it in a week with real meetings on it. The meeting you book in Step 3 is real and stays on your calendar, so choose a week you are willing to commit the hour to.

In Microsoft 365 Copilot Cowork (m365.cloud.microsoft), start a new task. Do not attach anything.

---

## Step 1: Map your week from live data

**Overview:** Every chat demo starts with "here is my file". This step proves Cowork does not need one: through Work IQ it already sees your calendar, and the first thing to verify is that what it sees is true. Grounding you have not verified is grounding you cannot trust with a booking.

**Research / Planning / Discussion:**

In the new task, with nothing attached, send:

```
Without me giving you any files: how does the rest of my week look? Which days are heaviest, and where are my longest unbroken stretches of free time during working hours?
```

**Finding:** Open your Outlook calendar next to the answer and check it: real meeting names, real times, gaps where you actually have gaps. This is Work IQ doing the grounding; nothing was attached, yet the answer is about your week. If Cowork asks you to provide a calendar export or answers generically, the grounding is not active in your tenant, and the setup section of [Getting Started with Cowork](./readme.md) is the place to fix that before continuing.

**Recipe:**

In the same task, send:

```
Map my working week: for each remaining day this week, list my meetings with their times, then every free block of one hour or more between 09:00 and 17:00. Mark which free blocks are good for a focused discussion rather than squeezed admin time, and say why.
```

**Expected Outcome:** A day-by-day map of your actual week that matches Outlook, with free blocks of an hour or more identified and a judgment attached to each, not just a list of gaps.

---

## Step 2: Make it defend the slot, not just find one

**Overview:** Any scheduling assistant can return the first free gap; that is why so many meetings land at the worst possible time. The point of this step is the reasoning: what sits before and after a slot, which day can carry a thinking session, and which free hour is free for a bad reason.

**Research / Planning / Discussion:**

In the same task, send:

```
I need one hour this week for a working discussion on Agentic AI. Which of my free blocks is the best choice, and why? Consider what comes before and after each block, and tell me which blocks you would rule out even though they are technically free.
```

**Finding:** Look for exclusions with reasons: a block right after your longest meeting ruled out for fatigue, a gap that would slice your only long focus stretch left intact, late Friday treated with suspicion. The recommendation should reference your real week, not scheduling folklore. If it just proposes the earliest gap, push back: ask what is wrong with the slot immediately after your heaviest meeting and let it reconsider.

**Recipe:**

In the same task, send:

```
Pick the single best one-hour slot this week for a working discussion on Agentic AI. Give me your final choice with the day, the time, and a one-line justification. Do not book anything yet.
```

**Expected Outcome:** One named slot with a justification grounded in your actual calendar, and nothing created yet; your calendar is unchanged.

---

## Step 3: Book it through the approval gate

**Overview:** So far Cowork has only read. Creating an event writes to your real calendar, and a write is where the approval model shows up: the action carries a risk level and pauses for you. You are about to approve a real booking, which is exactly why the demo made Cowork defend the slot first.

**Research / Planning / Discussion:**

In the same task, send:

```
Before you create this meeting: what exactly will you write to my calendar, and at what point will you stop and wait for my approval?
```

**Finding:** The answer should enumerate the concrete event details it intends to write (title, day and time, duration, body) and state that it pauses for approval before the event is created. If it is vague about what it will write, do not proceed to the recipe yet; make it spell the event out first, because the approval step is only as good as your ability to check it.

**Recipe:**

In the same task, send:

```
Create a one-hour meeting called "Agentic AI" on my calendar in the slot we chose, with just me as attendee. In the meeting body, add a three-point agenda: where agents could remove manual work from my week, what data they would need to do it, and which decisions should stay human-approved. Then book it.
```

**Expected Outcome:** The create action is held at an approval step with a visible risk level even though the prompt said to book it. Check the day, time, and duration against the slot from Step 2, then approve. The "Agentic AI" meeting appears in your Outlook calendar this week with the agenda in its body.

---

## Step 4: Brief yourself from your own work data

**Overview:** The meeting exists; now make Work IQ earn its keep a second time. Instead of walking in cold, have Cowork search your own mail, meetings, and files for what you have already touched on the topic, and turn it into a prep note. This is enterprise search grounded in your work, not a web search.

**Research / Planning / Discussion:**

In the same task, send:

```
Look across my recent emails, meetings, and files: what have I already read, written, or discussed that is relevant to a working session on Agentic AI? List what you find and one line on what each item contributes.
```

**Finding:** The list should name real items from your tenant: a mail thread, a deck someone shared, a meeting where the topic came up. Honesty matters more than volume here; if your tenant has little on the topic, a short truthful list beats an invented rich one, and that behaviour is itself worth observing. Follow up on anything you do not recognize and ask where it came from.

**Recipe:**

In the same task, send:

```
Create a one-page Word document called "Agentic AI Prep" with the three most relevant things you found in my own emails, meetings, and files, one line each on why they matter, followed by two questions I should answer during the session. Then attach the document to the Agentic AI meeting on my calendar.
```

**Expected Outcome:** An `Agentic AI Prep.docx` in the task's working folder, and the calendar update that attaches it held at an approval step before the meeting changes. After you approve, opening the meeting in Outlook shows the prep note, and Thursday-you walks in briefed by your own data.

> Approvals, risk levels, and how to steer a task mid-run are covered in [Human-in-the-Loop](../06-staying-in-control/readme.md).
