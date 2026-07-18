# Compile a Q3 Business Review Deck

Hand Cowork a quarter of regional sales data and manager notes, and walk away with a boardroom-ready PowerPoint and a cover email to your VP.

## Related Topics

This demo puts the [Intro to Cowork](./readme.md) interaction model to work: you describe an outcome and Cowork plans, reads, and builds across Excel, Word, and PowerPoint in one task. It leans on the document and communication capabilities that the built-in [Skills](../02-skills/readme.md) provide, and every send or save in the final step runs through the approval flow covered in [Staying in Control](../04-staying-in-control/readme.md).

---

Each step follows the same pattern:

- Overview: what this step achieves
- Research / Planning / Discussion: an open prompt to reason through the problem before acting
- Finding: what to read and evaluate in the response before moving on
- Recipe: a complete implementation prompt you can use as-is or adapt from your own findings
- Expected Outcome: observable artefacts that confirm success

You play the Regional Manager for Northern Europe at Aurora Outdoor, a premium Nordic outdoor-gear retailer. Q3 has closed and your VP, Elena Varga, wants the regional review on Thursday.

---

## Demo Files

Point Cowork at the `demo-01-quarterly-review` folder. It holds the raw quarter you will turn into a deck.

| File | What it represents |
|------|--------------------|
| `q3-sales-by-region.xlsx` | Q3 revenue by country and category, with QoQ and YoY columns, plus a Targets sheet and headcount |
| `q3-regional-notes.docx` | Your qualitative notes on what drove the numbers and what needs a decision |

## Load the demo files

In Microsoft 365 Copilot Cowork (m365.cloud.microsoft), start a new task, click the **+** button, and attach both files from the `demo-01-quarterly-review` folder. They stay available for every step below, so you attach once.

---

## Step 1: Understand the quarter before you present it

**Overview:** A good review deck tells a story, not a table. Before Cowork builds anything, have it read the numbers and the notes together and surface the three or four things that actually matter.

**Research / Planning / Discussion:**

With both files attached, send this prompt:

```
Read q3-sales-by-region.xlsx and q3-regional-notes.docx together. I need to present the Q3 review for Northern Europe on Thursday. Walk me through what the quarter's story is: where we beat and missed target, the biggest year-over-year movements, and any theme that shows up across all four countries. Tell me what you think my top ask to leadership should be.
```

**Finding:** Look for a synthesis, not a re-listing of cells. A strong response names the returns-and-fleece theme across all four countries, flags Norway as the largest region but most staffing-constrained, and connects the six open roles to the recommended ask. If it only repeats the spreadsheet back to you, push it: ask which single issue you should open the presentation with and why.

**Expected Outcome:** A written analysis in the task that identifies target attainment per country, the cross-region returns theme, and a recommended leadership ask about open headcount.

---

## Step 2: Build the deck

**Overview:** Now turn the agreed story into slides. You give Cowork the structure and the data source; it produces the PowerPoint.

**Recipe:**

In the same Cowork task, send:

```
Create a PowerPoint called "Aurora Northern Europe - Q3 Review" for an executive audience, using the figures in q3-sales-by-region.xlsx and the commentary in q3-regional-notes.docx. Use these slides:
1. Title slide with region, quarter, and my role.
2. Executive summary: three bullets on the quarter's headline.
3. Revenue vs target by country, as a table with an attainment column.
4. Category performance: which categories grew and which slipped, with the returns theme called out.
5. Country highlights: one row per country, one win and one risk each.
6. The ask: open headcount across the region and what it is costing us in growth.
Keep the design clean and the text tight. No more than five bullets per slide.
```

**Expected Outcome:** A `.pptx` file appears in the task with six slides, a revenue-versus-target table matching the Targets sheet, and a closing ask slide about the six open roles.

> The recipe above is one possible prompt based on typical findings from the research above. If your conversation led to a different story, use those slides instead.

---

## Step 3: Add a talk track

**Overview:** You have slides; now make them presentable without you memorising them. Speaker notes turn the deck into something you can deliver on Thursday.

**Research / Planning / Discussion:**

In the same task, send:

```
Look at the deck you just built. For each slide, what is the one sentence I should lead with when I speak to it, and where is the audience most likely to challenge me? Point out any slide where the data alone will not land without context from the regional notes.
```

**Finding:** A useful response anticipates pushback: it should predict that the ask slide invites a "why now" question and that the Denmark miss needs the delayed-shipment context so it does not read as underperformance. If the notes are generic ("explain the numbers"), ask for the specific objection each slide invites.

**Recipe:**

Then send:

```
Add speaker notes to every slide in the deck. For each note, give me the opening line to say and a one-line answer to the most likely challenge. Save the updated file.
```

**Expected Outcome:** The `.pptx` is updated in place, and each slide carries speaker notes with an opening line and a rebuttal to the likely objection.

---

## Step 4: Send it up the line

**Overview:** The deck is done. The last step is a short cover email to Elena, and it is the first time in this demo that Cowork wants to do something that leaves your workspace.

**Recipe:**

In the same task, send:

```
Draft an email to Elena Varga with the Q3 review deck attached. Two short paragraphs: the first says the deck is ready for Thursday, the second gives her the single most important takeaway and my headcount ask so she is not surprised in the room. Professional but not stiff. Do not send it yet; show me the draft first.
```

**Finding:** Before you approve anything, check the risk indicator on the send action. Sending an email is a high-risk action because it leaves your workspace, so Cowork pauses and shows a **Send** button rather than acting on its own. Read the draft, confirm the attachment is the finished deck, then decide.

**Expected Outcome:** A drafted email addressed to Elena with the deck attached, held at the approval step with a visible risk level, waiting for you to press **Send** or edit first.

> Approvals, risk levels, and how to steer a task mid-run are covered in [Staying in Control](../04-staying-in-control/readme.md).
