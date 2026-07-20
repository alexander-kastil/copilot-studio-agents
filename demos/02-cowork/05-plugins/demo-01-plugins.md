# Extend Cowork with a Community Plugin

Install a real community plugin, the `dietitian` plugin, and combine its two clinical skills with Cowork's built-in Word skill to produce a client nutrition packet.

## Related Topics

This demo builds on [Understanding Skills](../02-built-in-skills/readme.md), which explains how Cowork activates skills automatically from the side panel. It uses the open `SKILL.md` format introduced in [Creating Custom Skills](../03-custom-skills/readme.md), the same format a plugin ships. It puts into practice the sideloading and App Store paths described in [Extending Cowork with Plugins](./readme.md).

---

Each step follows the same pattern:

- Overview: what this step achieves
- Research / Planning / Discussion: an open prompt to reason through the problem before acting
- Finding: what to read and evaluate in the response before moving on
- Recipe: a complete implementation prompt you can use as-is or adapt from your own findings
- Expected Outcome: observable artefacts that confirm success

You are a registered dietitian who has Cowork and wants to speed up routine client prep. This demo steps outside the Aurora Outdoor sales scenario on purpose, because the plugin is domain-specific, and that is exactly the point of a plugin. You start from a client intake form and finish with a single Word packet: an assessment plus a client-facing education handout.

> **Warning:** Every skill in the `dietitian` plugin is for drafting only. Its output does not constitute medical nutrition therapy, and a registered dietitian must review and approve any content before it reaches a client. Treat everything Cowork produces here as a first draft for professional review, never as final clinical advice.

---

## Demo Files

Point Cowork at the `demo-01-plugins` folder.

| File | What it represents |
|------|--------------------|
| `client-intake.docx` | A fictional client intake form: demographics, conditions, labs, eating pattern, goals, and preferences, with enough detail for both plugin skills to produce differentiated output |

## Load the demo files

In Microsoft 365 Copilot Cowork, start a new task, click **+**, and attach `client-intake.docx` from the `demo-01-plugins` folder. Keep it attached through the assessment and handout steps.

---

## Step 1: Install the dietitian plugin

**Overview:** Before Cowork can produce clinical drafts, it needs the plugin's skills. The `dietitian` plugin comes from the community [awesome-copilot-cowork-plugins](https://github.com/alexclowe/awesome-copilot-cowork-plugins/tree/main/dietitian) repository, developed by "The AI Career Lab", and it summarizes itself as: generate nutrition assessments, meal plans, progress notes, and client education materials for dietitians. Getting it into Cowork means installing it as a Microsoft 365 app.

**Planning:**

The plugin is packaged as a Microsoft 365 / Teams app, not a single file: it is a `manifest.json` plus icon PNGs and a `skills/` folder that holds the two agent skills. That package shape decides how you install it. Work through these options in order:

- Download the `dietitian` folder from the repository.
- Zip the `manifest.json` together with its icon assets so you have a valid app package.
- Upload that package as a custom Microsoft 365 app, through the Microsoft 365 or Teams admin, then add it to Cowork.
- If the plugin is published to the Microsoft 365 App Store, install it from there instead with **Add**, which skips the manual packaging.

**Finding:** Uploading a custom app usually requires admin permission to sideload, so confirm your tenant allows custom app uploads before you start, or ask your IT admin to add the package for you. If custom uploads are blocked and the plugin is not yet in the App Store, that is your gate to clear first, not a Cowork problem.

**Expected Outcome:** After installing, starting a new task shows the plugin's two skills, `clinical-nutrition` and `dietary-communication`, available to Cowork. When a task matches their descriptions, they appear in the side panel alongside your built-in skills.

---

## Step 2: Draft the nutrition assessment

**Overview:** With the intake form attached, put the `clinical-nutrition` skill to work. Its description covers medical nutrition therapy, macronutrient calculations, lab interpretation, dietary guidelines, and condition-specific protocols, so this is where the numbers and the clinical reasoning come from.

**Research / Planning / Discussion:**

With `client-intake.docx` attached, send this prompt:

```
Read client-intake.docx. Using the clinical-nutrition skill, draft a nutrition assessment for this client. Calculate estimated energy and protein needs and show your assumptions. Interpret the labs, including A1C, fasting glucose, the lipid panel, and albumin. Identify the condition-specific considerations for type 2 diabetes and hypertension, and note any priorities a dietitian should weigh first.
```

**Finding:** A strong assessment pulls directly from the intake data rather than giving generic advice: it should cite this client's A1C of 8.1 percent, her lipid numbers, and her low-active desk job when it sets energy and protein targets. Check that the lab interpretation reads as clinical drafting, tying the glycemic and lipid results to diabetes and cardiovascular protocols, and that it flags the values worth a clinician's attention. If it reads like a generic diabetes leaflet, ask it to recalculate needs from her stated height, weight, and activity and to ground each point in a specific intake value.

**Expected Outcome:** A drafted nutrition assessment with estimated energy and protein needs, interpreted labs, and condition-specific considerations, all derived from the intake form.

---

## Step 3: Turn the assessment into a client handout

**Overview:** The assessment is written for a clinician. Now switch to the `dietary-communication` skill, whose description covers client education, meal-planning communication, behavior-change counseling, and motivational strategies, to translate that assessment into something the client can actually use.

**Recipe:**

In the same task, send:

```
Using the dietary-communication skill, turn the assessment into a client-facing education handout for this client. Write it at a simplified health-literacy level in plain language. Use weight-neutral, non-judgmental wording, and give food amounts in household measures like cups and spoons rather than grams. Include a simple one-day meal-plan outline that keeps her West African dishes, and finish with two or three SMART goals she can start this week.
```

**Finding:** The handout should read completely differently from the assessment: warm, plain, and free of clinical jargon, while still reflecting the same findings. Confirm it uses household measures, keeps the tone weight-neutral rather than shaming, and honours the client's cultural food preferences instead of replacing her meals with unfamiliar ones. The SMART goals should be specific and achievable this week, such as swapping one sugar-sweetened drink for water daily, not vague encouragement.

**Expected Outcome:** A client-facing education handout at a simplified reading level, with a culturally relevant one-day meal-plan outline and two or three SMART goals, all in weight-neutral plain language.

---

## Step 4: Compile the client nutrition packet

**Overview:** You now have two drafts from two plugin skills. Use Cowork's built-in Word skill to combine them into one document the whole nutrition team can open, with the mandatory review disclaimer on the page.

**Recipe:**

In the same task, send:

```
Using the Word skill, compile the nutrition assessment and the client education handout into one Word document titled "Client Nutrition Packet - NUT-2041". Put the clinical assessment first as an internal section, then the client-facing handout. At the top of the document, add this exact line in bold: "DRAFT ONLY. Not medical nutrition therapy. A registered dietitian must review and approve before any client use." Save it as a .docx.
```

**Finding:** Open the saved packet and check both sections carried over intact and in order, and that the disclaimer line sits at the top where no one can miss it. The disclaimer is not optional formatting: it is the honesty guardrail that keeps an unreviewed draft from being mistaken for approved clinical advice. If the disclaimer is missing or buried, ask Cowork to place it as the first line before anything else.

> **Warning:** The packet is a draft. Before any of it reaches a client, a registered dietitian must read every calculation, every lab interpretation, and every handout claim, and approve or correct it. The plugin speeds up the drafting, it does not replace the clinician.

**Expected Outcome:** A saved Word document, the client nutrition packet, containing the assessment and the handout in order with the review disclaimer as its first line.

---

## Step 5: Watch installed plugin skills behave like built-in ones

**Overview:** Look back at how the side panel behaved across the last three steps. The point of a plugin is that its skills are not a separate mode you switch into; they activate the same way your built-in skills do.

**Discussion:**

Across the run, the side panel surfaced `clinical-nutrition` when the task called for calculations and lab interpretation, then `dietary-communication` when the work turned to client education, then the built-in Word skill when it was time to compile. You never told Cowork which engine to route to; each skill activated from its description as the task shifted. That is the whole promise of the plugin model: once installed, a community skill sits in the same panel and follows the same context-based activation as the skills Microsoft ships. It also means the same governance applies, so the drafting-only disclaimer travels with the plugin's output no matter which skill produced it.

**Expected Outcome:** A clear read on plugin behavior: installed plugin skills and built-in skills share one side panel and one activation model, and you compose across all of them in a single task without any manual switching.
