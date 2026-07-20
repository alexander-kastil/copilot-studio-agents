# Turn a Market Brief into a Repeatable Product Pitch

Author a custom `SKILL.md` that converts a research brief into a partner-ready pitch deck in your house structure, then run and tune it until every pitch is backed by evidence rather than adjectives.

## Related Topics

This demo picks up where [Understanding Skills](../02-built-in-skills/readme.md) left off: the AW26 Market Brief that Deep Research produced there is the raw material the pitch is built from, so a research output becomes a sales input. It applies the `SKILL.md` anatomy and companion-file model introduced in [Creating Custom Skills](./readme.md), this time with a PowerPoint template as the companion. When the skill is stable, [Extending Cowork with Plugins](../05-plugins/readme.md) shows how a skill like this gets packaged and shared with the rest of the commercial team.

---

Each step follows the same pattern:

- Overview: what this step achieves
- Research / Planning / Discussion: an open prompt to reason through the problem before acting
- Finding: what to read and evaluate in the response before moving on
- Recipe: a complete implementation prompt you can use as-is or adapt from your own findings
- Expected Outcome: observable artefacts that confirm success

As Regional Manager for Northern Europe at Aurora Outdoor, you now have the AW26 Market Brief and a season to sell. Every wholesale partner gets the same pitch structure, and every season you rebuild it by hand from whatever research is current. This demo captures that conversion once as a reusable skill, so Cowork turns any brief into a house-format pitch deck on demand.

---

## Demo Files

Point Cowork at the `demo-01-product-pitch-skill` folder.

| File | What it represents |
|------|--------------------|
| `aw26-market-brief.docx` | The finished market brief from the Deep Research demo: trends with sources, where Aurora stands, risks, and three prioritised moves |
| `pitch-deck-structure.pptx` | Aurora's house pitch structure: seven cards with the heading and bracketed placeholders every partner pitch must follow |
| `product-pitch/` | The finished skill folder from Step 3, ready to copy into OneDrive: `SKILL.md` plus its companion structure deck |

## Load the demo files

In Microsoft 365 Copilot Cowork, start a new task, click **+**, and attach both `aw26-market-brief.docx` and `pitch-deck-structure.pptx` from the `demo-01-product-pitch-skill` folder. Keep them attached for the first three steps.

---

## Step 1: Find the pitch hiding in the brief

**Overview:** A market brief is written to inform a decision, not to sell anything. Before you can automate the conversion, you have to see what a pitch actually takes from a brief and what it has to leave behind. Aurora's brief closes with three prioritised moves, and only some of them carry a story a partner would want to hear.

**Research / Planning / Discussion:**

With both files attached, send this prompt:

```
Read aw26-market-brief.docx. It ends with three prioritised moves for AW26. For each move, tell me whether it could be pitched to a wholesale partner or whether it is purely internal work, and say why. Then tell me which parts of the brief are evidence a partner would find convincing, and which parts we would never put in front of them.
```

**Finding:** A strong answer separates the internal move from the partner-facing one: publishing sustainability metrics is an evidence project that partners benefit from but would not sit through a deck about, while the trail-running capsule is an actual product story with a growth number behind it. It should also name what stays confidential, such as our own admitted gaps and the thin-wholesale-base risk, and what travels well, such as the cited segment growth and the repair programme volumes. If it just summarises the brief section by section, ask it which single move a partner would give shelf space to and why.

**Expected Outcome:** A clear read on which recommendation becomes the pitch, plus a split between the evidence that can face a partner and the analysis that stays internal.

---

## Step 2: Map the house structure to its evidence

**Overview:** Aurora's pitch structure is fixed, so the real work of any pitch is deciding which evidence fills which card. Have Cowork do that mapping once, explicitly, against the structure you already use. This mapping becomes the body of the skill you write in the next step.

**Research / Planning / Discussion:**

With both files attached, send this prompt:

```
Now open pitch-deck-structure.pptx. This is our house pitch structure for wholesale partners. For each of the seven cards, tell me which specific content from aw26-market-brief.docx would fill it, and name the source or number you would cite. Flag any card the brief cannot fill on its own and say what else you would need.
```

**Finding:** Look for a card-by-card mapping that reaches for specific evidence rather than themes: the trend section feeding The shift with its named sources, the segment-growth figure sizing The gap, the repair programme and its pillar filling Why Aurora. It should flag the cards a market brief genuinely cannot answer, normally The product and The offer, since pricing, assortment, and terms are commercial decisions no research document holds. If every card comes back confidently filled, push back and ask which card it is inventing content for.

**Recipe:**

Then send:

```
Write me a short mapping table with one row per card: card number, card name, what fills it, and where that content comes from. Mark any card that needs input from me rather than from the brief.
```

**Expected Outcome:** A seven-row mapping table tying each card to named evidence, with the commercial cards flagged as requiring your input.

---

## Step 3: Author the Product Pitch skill

**Overview:** Now capture the mapping as a reusable custom skill. A `SKILL.md` file lets Cowork run this conversion by name against any brief, not just this one, and a companion file lets it carry the house structure with it. You author it once in your OneDrive skills folder and place the structure deck beside it.

**Recipe:**

Create a `SKILL.md` file in your OneDrive at `Documents/Cowork/skills/product-pitch/SKILL.md`, place a copy of `pitch-deck-structure.pptx` in the same folder, and paste this as the file contents:

To skip the typing, copy the whole `product-pitch` folder from `demo-01-product-pitch-skill` into `Documents/Cowork/skills/` instead: it already holds the `SKILL.md` below and its companion deck. Author it by hand at least once, though, since the wording is what you tune in Step 5.

```text
---
name: product-pitch
description: Turns a market brief, research report, or product document into a wholesale partner pitch deck in Aurora Outdoor house structure, with every claim traced back to a named source. Use whenever I say build a pitch, pitch this to partners, turn this brief into a deck, or name a range or season to pitch.
---

Produce a seven-card partner pitch deck in the house structure defined by pitch-deck-structure.pptx, which sits in this skill folder.

Identify the source document I am pitching from and read it in full before writing any card. Identify the product, range, or move being pitched from my request. If my request does not name one, ask me before continuing.

Fill the seven cards in order:
- Title and promise: the range name and one sentence on what it gives the partner, phrased as their gain rather than our feature.
- The shift: the market movement that makes this range necessary, with two supporting facts and the source named for each.
- The gap: what the partner's current assortment cannot answer, which customer leaves without buying, and the size of the gap as a number.
- The product: what the range is, the three things it does that the incumbent range does not, and its price band.
- Why Aurora: the proof we can substantiate with a figure, the differentiator a competitor cannot copy this season, and which messaging pillar the range carries.
- The offer: order tiers, partner-facing services included, and marketing support.
- Next step: the one action asked of the partner, the date, and the owner on each side.

Every factual claim on The shift, The gap, and Why Aurora must trace to the source document. Name the source in the card. If the source does not support a claim, leave the claim out rather than softening it.

Never invent pricing, order tiers, assortment, or terms. The product and The offer cards depend on commercial decisions, so ask me for that input and leave the cards as placeholders until I supply it.

Keep every card to three short bullets or fewer. Save the finished deck as a PowerPoint file titled with the range name and the season.
```

**Finding:** Cowork discovers custom skills at the start of each conversation, so start a new task after saving and confirm Product Pitch is listed. The `name` is kebab-case and matches its folder exactly, which is what the Agent Skills format requires; a mismatch between folder and name is the most common reason a skill fails to load. The `description` is the only part Cowork reads when deciding whether the skill applies, so check that yours names the trigger phrases you would actually type.

**Expected Outcome:** A `SKILL.md` saved at `Documents/Cowork/skills/product-pitch/` with the structure deck beside it as a companion file, listed as an available custom skill in a new task.

---

## Step 4: Run the skill and pressure-test the result

**Overview:** A pitch skill that produces confident slides is worse than no skill at all if the confidence is unearned. Run it against the AW26 brief, then hold every claim on the deck up against the source and see what does not survive.

**Recipe:**

In a new Cowork task, attach `aw26-market-brief.docx` from the `demo-01-product-pitch-skill` folder and send:

```
Run my Product Pitch skill against aw26-market-brief.docx. The pitch is for the AW26 trail-running capsule going to our wholesale partners. Build the seven-card deck and show it to me before you save anything.
```

**Research / Planning / Discussion:**

When the deck comes back, send:

```
Go through every factual claim on The shift, The gap, and Why Aurora. For each one, quote the line in aw26-market-brief.docx that supports it. Show me any claim you cannot support that way, and tell me whether you carried over anything from the brief that should have stayed internal.
```

**Finding:** The cards should map back cleanly to the trend sources and the segment-growth figure, and The product and The offer should have come back as placeholders rather than invented price bands. Watch for two specific failures: a claim that sounds sourced but traces to nothing, and confidential material from the brief's risk section leaking onto a partner-facing card. If the skill happily filled in pricing, note it as the instruction to sharpen next.

**Expected Outcome:** A seven-card deck where the market claims each cite the brief, the commercial cards await your input, and you have a named list of any claims or leaks that failed the check.

---

## Step 5: Tune the skill for discovery and evidence discipline

**Overview:** The skill works, but the first run always exposes both a discovery gap and a quality gap. Refine the description so Cowork reaches for Product Pitch without being told, and tighten the instruction behind whichever card failed your check.

**Research / Planning / Discussion:**

In the same task, send:

```
Look at my Product Pitch skill description and instructions. Which pitch requests phrased the way I actually talk would fail to trigger it? And which instruction let through the weak claims we just found? Suggest a tighter description and the specific instruction changes that would fix both.
```

**Finding:** A good answer points to natural phrasings the description misses, such as asking for a partner deck or a range presentation without saying pitch, and it ties each weak claim back to the instruction that permitted it. Usually the fix is to make the sourcing rule refuse rather than soften, and to name the confidential sections that must never travel onto a card. Fold both into the `SKILL.md`.

**Recipe:**

Save the edited `SKILL.md`, start a new task, attach `aw26-market-brief.docx`, and confirm the skill triggers without being named:

```
I need a partner deck for the AW26 trail-running capsule off the back of this brief. Build it in our usual structure.
```

**Expected Outcome:** A refined Product Pitch skill that Cowork auto-discovers from natural phrasing, producing a house-structure deck whose claims cite the brief, with commercial cards left open and confidential analysis kept off the slides.

> The skill folder can hold up to 20 companion files. Adding last season's winning pitch beside the structure deck gives Cowork a worked example to match, not just a shape to fill. See [Creating Custom Skills](./readme.md).
