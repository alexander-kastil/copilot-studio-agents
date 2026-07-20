# Produce a Competitive Market Brief

Send Cowork out to research the outdoor market, hold its findings up against your own positioning document, and come back with a decision-ready brief, shipped as a PDF for leadership.

## Related Topics

This demo runs on the Deep Research capability described in [Understanding Skills](./readme.md); watch the side panel to see skills activate as the task runs. The same recurring-report idea returns in [Scheduling Prompts & Recurring Automation](../04-automation/readme.md) when you put a brief like this on a schedule.

---

Each step follows the same pattern:

- Overview: what this step achieves
- Research / Planning / Discussion: an open prompt to reason through the problem before acting
- Finding: what to read and evaluate in the response before moving on
- Recipe: a complete implementation prompt you can use as-is or adapt from your own findings
- Expected Outcome: observable artefacts that confirm success

You are preparing for Aurora Outdoor's AW26 brand planning. Leadership wants to know where the outdoor market is heading and where Aurora is exposed before they lock the season's strategy.

---

## Demo Files

Point Cowork at the `demo-01-research-brief` folder.

| File | What it represents |
|------|--------------------|
| `internal-positioning.docx` | Aurora's confidential brand and product positioning: target segments, differentiators, and known gaps |

## Load the demo files

In Microsoft 365 Copilot Cowork, start a new task, click **+**, and attach `internal-positioning.docx` from the `demo-01-research-brief` folder. Keep it attached for the whole demo.

---

## Step 1: Research the market

**Overview:** Start on the outside: deep research on the real outdoor market, so the brief rests on current trends rather than assumptions.

**Research / Planning / Discussion:**

Send this prompt:

```
Do deep research on the European outdoor apparel and gear market for the coming season. I want the three or four trends shaping premium outdoor brands right now: sustainability claims and lifecycle transparency, the growth of trail running, direct-to-consumer versus wholesale, and repairability and circular programmes. Cite where each finding comes from and note anything a mid-premium Nordic brand should be worried about.
```

**Finding:** Deep Research runs longer than a normal answer; watch the side panel to see the skill working through sources. A strong result names concrete trends with citations and reads as synthesis, not a link dump; if it stays vague, ask it to back each trend with a source and say why it matters commercially.

**Expected Outcome:** Three or four cited market trends and an initial read on which ones create risk for a mid-premium Nordic brand.

---

## Step 2: Hold the research against your own positioning

**Overview:** Research only matters where it touches you. Bring the confidential positioning into the same task and let Cowork find the gaps.

**Research / Planning / Discussion:**

With `internal-positioning.docx` attached, send:

```
Now read internal-positioning.docx. Compare Aurora's stated positioning, differentiators, and known gaps against the market trends you just researched. Where is Aurora already aligned, and where is it exposed? Be specific about the gaps we admit to in our own document.
```

**Finding:** Check that Cowork connects the two sides instead of summarising each in turn: the repairability programme aligning with the circular trend, the missing sustainability metrics as the exposure, the thin trail-running presence colliding with that segment's growth. If it produces two separate lists, ask for the single biggest exposure.

**Expected Outcome:** A gap analysis pairing each trend with Aurora's actual position, naming the sustainability-metrics gap and the trail-running exposure.

---

## Step 3: Write the brief

**Overview:** Turn the research and the gap analysis into a short document a leadership team can read in five minutes and act on.

**Recipe:**

In the same task, send:

```
Create a Word document titled "AW26 Market Brief - Aurora Outdoor" with these sections:
1. Executive summary: five bullets a leader can read in one minute.
2. Market trends: the trends you researched, one short paragraph each, with sources.
3. Where Aurora stands: our alignment and our exposure, drawn from the positioning document.
4. Risks to watch: the two or three gaps that most threaten AW26.
Keep it to roughly two pages and write for an executive reader.
```

**Expected Outcome:** A `.docx` brief of about two pages with the four sections, cited trends, and risks that trace back to Aurora's own admitted gaps.

> The recipe above assumes the trends and gaps found above. If your research surfaced different trends, structure the brief around those.

---

## Step 4: Turn insight into a recommendation

**Overview:** A brief that only describes the world is half the job; the last step forces a point of view.

**Research / Planning / Discussion:**

In the same task, send:

```
Based on the brief, what are the three moves Aurora should make for AW26, in priority order? For each, say what the move is, which risk it closes, and roughly how hard it is to do before the season. If you had to pick only one to fund, which would it be?
```

**Finding:** A useful answer commits to a priority order and a single top pick tied to a specific risk, for example publishing sustainability metrics to close the transparency gap. If it lists moves without ranking them, ask it to choose the one to fund first and defend the choice.

**Recipe:**

Then send:

```
Add a Recommendations section to the market brief with those three prioritised moves, each as a short bullet naming the move and the risk it closes. Mark your top pick. Save the updated document, then export the finished brief as a PDF with the same name for distribution to leadership.
```

**Expected Outcome:** The brief updated in place with three prioritised moves and a flagged top pick, plus an `AW26 Market Brief - Aurora Outdoor.pdf` alongside the `.docx` in the working folder. Watch the side panel as the last part runs: the Word skill hands over to the PDF skill, one more built-in skill activating on its own because the task called for it.
