# Produce a Competitive Market Brief

Send Cowork out to research the outdoor market, hold its findings up against your own positioning document, and come back with a decision-ready brief.

## Related Topics

This demo is built on the Deep Research and Enterprise Search capabilities described in [Skills](./readme.md): Cowork gathers from the open web and from your own files in a single task. It is the research half of the [Intro to Cowork](../01-intro/readme.md) capability map, and the same recurring-report idea returns in [Automation & Plugins](../03-automation/readme.md) when you put a brief like this on a schedule.

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

Point Cowork at the `demo-03-research-brief` folder.

| File | What it represents |
|------|--------------------|
| `internal-positioning.docx` | Aurora's confidential brand and product positioning, including its target segments, differentiators, and known gaps |

## Load the demo files

In Microsoft 365 Copilot Cowork, start a new task, click **+**, and attach `internal-positioning.docx` from the `demo-03-research-brief` folder. Keep it attached for the whole demo.

---

## Step 1: Research the market

**Overview:** Start on the outside. Have Cowork run deep research on the real outdoor apparel and gear market so the brief rests on current trends, not assumptions. This step touches the open web, not your files.

**Research / Planning / Discussion:**

Send this prompt:

```
Do deep research on the European outdoor apparel and gear market for the coming season. I want the three or four trends shaping premium outdoor brands right now: what is happening with sustainability claims and lifecycle transparency, the growth of trail running, direct-to-consumer versus wholesale, and repairability and circular programmes. Cite where each finding comes from and note anything a mid-premium Nordic brand should be worried about.
```

**Finding:** Deep Research runs longer than a normal answer; watch the side panel to see it working through sources. A strong brief-in-progress names concrete trends with citations and reads as synthesis rather than a link dump. If it stays vague, ask it to back each trend with a source and to say why that trend matters commercially, not just that it exists.

**Expected Outcome:** A researched summary of three or four current market trends, each with a citation, and an initial read on which trends create risk for a mid-premium Nordic brand.

---

## Step 2: Hold the research against your own positioning

**Overview:** Research only matters where it touches you. Now bring your confidential positioning into the same task and let Cowork find the gaps between where the market is going and where Aurora stands.

**Research / Planning / Discussion:**

With `internal-positioning.docx` attached, send:

```
Now read internal-positioning.docx. Compare Aurora's stated positioning, differentiators, and known gaps against the market trends you just researched. Where is Aurora already aligned with where the market is heading, and where is it exposed? Be specific about the gaps we admit to in our own document.
```

**Finding:** Check that Cowork connects the two sides rather than summarising each in turn. It should notice that Aurora's repairability programme aligns with the circular-economy trend but that the admitted lack of published sustainability metrics is exactly where specialist competitors are pulling ahead, and that the thin trail-running presence collides with that segment's growth. If it treats the market and the document as separate lists, ask it to name the single biggest exposure.

**Expected Outcome:** A gap analysis that pairs each market trend with Aurora's actual position, calling out the sustainability-metrics gap and the trail-running exposure by name.

---

## Step 3: Write the brief

**Overview:** You have the raw research and the gap analysis. Turn them into a short, scannable document that a leadership team can read in five minutes and act on.

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

**Expected Outcome:** A `.docx` brief of about two pages with the four sections, cited trends, and a risks section that traces back to Aurora's own admitted gaps.

> The recipe above assumes the trends and gaps found above. If your research surfaced different trends, structure the brief around those.

---

## Step 4: Turn insight into a recommendation

**Overview:** A brief that only describes the world is half the job. The last step forces a point of view: what should Aurora actually do about what the research found.

**Research / Planning / Discussion:**

In the same task, send:

```
Based on the brief, what are the three moves Aurora should make for AW26, in priority order? For each, say what the move is, which risk it closes, and roughly how hard it is to do before the season. If you had to pick only one to fund, which would it be?
```

**Finding:** A useful answer commits to a priority order and a single top pick, rather than hedging with "it depends". It should tie each recommendation to a specific risk from the brief, for example publishing sustainability metrics to close the transparency gap. If it lists moves without ranking them, ask it to choose the one to fund first and defend the choice.

**Recipe:**

Then send:

```
Add a Recommendations section to the market brief with those three prioritised moves, each as a short bullet naming the move and the risk it closes. Mark your top pick. Save the updated document.
```

**Expected Outcome:** The brief is updated with a Recommendations section listing three prioritised moves, a flagged top pick, and each move tied back to a named risk.
