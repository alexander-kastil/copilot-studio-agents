# Extend Cowork with a Community Plugin

Install a real community plugin, the `dietitian` plugin, and combine its two clinical skills with Cowork's built-in Word skill to produce a client nutrition packet.

> **Reasoning effort:** Use **Medium** for Step 2, because the assessment involves calculations and lab interpretation. Use **Light** for the handout in Step 3, the compile in Step 4 and the walkthrough in Step 5. Do not raise it to High or Max to make clinical output more trustworthy; the dietitian review is the control, not the effort level.

## Run Cost

| Token type | Tokens | Opus 5.5 (run) | Sonnet 5.5 (estimate) | Haiku 5.5 (estimate) |
| --- | --- | --- | --- | --- |
| Input | 190 | €0.00 | €0.00 | €0.00 |
| Cache write | 272K | €1.21 | €0.61 | €0.10 |
| Cache read | 14.5M | €2.58 | €2.58 | €0.60 |
| Output | 45K | €0.80 | €0.40 | €0.09 |
| **Total** | **14.8M** | **€4.59** | **€3.59** | **€0.79** |

## Related Topics

This demo builds on [Understanding Skills](../02-built-in-skills/readme.md), which explains how Cowork activates skills automatically from the side panel. It uses the open `SKILL.md` format introduced in [Creating Custom Skills](../03-custom-skills/readme.md), the same format a plugin ships. It puts into practice the upload and Discover paths described in [Extending Cowork with Plugins](./readme.md).

---

Each step follows the same pattern:

- Overview: what this step achieves
- Research / Planning / Discussion: an open prompt to reason through the problem before acting
- Finding: what to read and evaluate in the response before moving on
- Recipe: a complete implementation prompt you can use as-is or adapt from your own findings
- Expected Outcome: observable artefacts that confirm success

You are a registered dietitian who has Cowork and wants to speed up routine client prep. This demo steps outside the Aurora Outdoor sales scenario on purpose, because the plugin is domain-specific, and that is exactly the point of a plugin. You start from a client intake form and finish with a single Word packet: an assessment plus a client-facing education handout.

![The dietitian plugin's clinical-nutrition skill turns client-intake.docx into a nutrition assessment, dietary-communication turns it into a client handout, and the built-in Word skill compiles both into the Client Nutrition Packet. A registered dietitian reviews and approves the packet before it reaches a client.](./_images/dietitian-packet-flow.svg)

> **Warning:** Every skill in the `dietitian` plugin is for drafting only. Its output does not constitute medical nutrition therapy, and a registered dietitian must review and approve any content before it reaches a client. Treat everything Cowork produces here as a first draft for professional review, never as final clinical advice.

---

## Demo Files

The file lives in the `demo-01-plugins` folder.

| File | What it represents |
|------|--------------------|
| `client-intake.docx` | A fictional client intake form: demographics, conditions, labs, eating pattern, goals, and preferences, with enough detail for both plugin skills to produce differentiated output |

## Load the demo files

Do this after Step 1 installs the plugin. In Microsoft Copilot with **Cowork** selected in the top toggle, select **New task**, click **+** > **Upload images and files**, and pick `client-intake.docx` from the `demo-01-plugins` folder. It shows as a **client-intake, Word document** chip above the composer and stays under **References** in the **Workspace** panel for the rest of the task.

---

## Step 1: Install the dietitian plugin

**Overview:** Before Cowork can produce clinical drafts, it needs the plugin's skills. The `dietitian` plugin comes from the community [awesome-copilot-cowork-plugins](https://github.com/alexclowe/awesome-copilot-cowork-plugins/tree/main/dietitian) repository, developed by "The AI Career Lab", and it summarizes itself as: generate nutrition assessments, meal plans, progress notes, and client education materials for dietitians. Getting it into Cowork means installing it as a Microsoft 365 app.

**Planning:**

The plugin is packaged as a Microsoft 365 / Teams app, not a single file: it is a `manifest.json` plus icon PNGs and a `skills/` folder that holds the two agent skills. That package shape decides how you install it. Work through these options in order:

- Download the `dietitian` folder from the repository.
- Zip `manifest.json`, the icon PNGs and the `skills/` folder into one `.zip`, with `manifest.json` at the root of the archive.
- In Cowork, open **Customize** > **Add** > **Upload** and choose the zip in the **Upload a skill or plugin** dialog, which takes `.MD`, `.ZIP` or `.SKILL` files.
- In the **Publish "dietitian"** dialog, keep **Only you** under **This plugin will be available to** and select **Publish**.
- If a search in **Customize** finds the plugin under **Discover**, select it and **Add** instead.

**Finding:** Uploading a plugin for yourself needs no admin; only org-wide sharing waits for admin approval. If the upload is blocked, the tenant has blocked that plugin or uses Purview Information Barriers, which currently block plugin and skill uploads, so that is the gate to clear with IT.

![Four widening steps of reach for an uploaded plugin: Only you and Specific users in your organization need no admin, the whole organization waits for admin approval, and a public store listing goes through Partner Center.](../pptx/images/05-03-sharing-a-plugin.svg)

**Expected Outcome:** **Customize** lists `dietitian` first under **Added**. Its page reads **Created by The AI Career Lab**, the **Enable dietitian** switch is on, and **Skills** lists `clinical-nutrition` and `dietary-communication`. In a task, each skill appears under **Plugins** in the **Workspace** panel, for example `dietitian (clinical-nutrition)`, once Cowork loads it.

---

## Step 2: Draft the nutrition assessment

**Overview:** With the intake form attached, put the `clinical-nutrition` skill to work. Its description covers medical nutrition therapy, macronutrient calculations, lab interpretation, dietary guidelines, and condition-specific protocols, so this is where the numbers and the clinical reasoning come from.

**Research / Planning / Discussion:**

With `client-intake.docx` attached, send this prompt:

```
Read client-intake.docx. Using the clinical-nutrition skill, draft a nutrition assessment for this client. Calculate estimated energy and protein needs and show your assumptions. Interpret the labs, including A1C, fasting glucose, the lipid panel, and albumin. Identify the condition-specific considerations for type 2 diabetes and hypertension, and note any priorities a dietitian should weigh first.
```

**Finding:** A strong assessment pulls directly from the intake data rather than giving generic advice: it should cite this client's A1C of 8.1 percent, her lipid numbers, and her low-active desk job when it sets energy and protein targets. Check that the lab interpretation reads as clinical drafting, tying the glycemic and lipid results to diabetes and cardiovascular protocols, and that it flags the values worth a clinician's attention. If it reads like a generic diabetes leaflet, ask it to recalculate needs from her stated height, weight, and activity and to ground each point in a specific intake value.

**Expected Outcome:** A drafted nutrition assessment in the chat with estimated energy and protein needs, interpreted labs, and condition-specific considerations, all derived from the intake form. The run shows a **Reviewed custom skill dietitian (clinical-nutrition)** step, and the **Workspace** panel lists `dietitian (clinical-nutrition)` under **Plugins**.

---

## Step 3: Turn the assessment into a client handout

**Overview:** The assessment is written for a clinician. Now switch to the `dietary-communication` skill, whose description covers client education, meal-planning communication, behavior-change counseling, and motivational strategies, to translate that assessment into something the client can actually use.

**Recipe:**

In the same task, open the **Auto Medium** picker next to the send arrow, move the slider to the **Faster** end so it reads **Auto Light**, then send:

```
Using the dietary-communication skill, turn the assessment into a client-facing education handout for this client. Write it at a simplified health-literacy level in plain language. Use weight-neutral, non-judgmental wording, and give food amounts in household measures like cups and spoons rather than grams. Include a simple one-day meal-plan outline that keeps her West African dishes, and finish with two or three SMART goals she can start this week.
```

**Finding:** The handout should read completely differently from the assessment: warm, plain, and free of clinical jargon, while still reflecting the same findings. Confirm it uses household measures, keeps the tone weight-neutral rather than shaming, and honours the client's cultural food preferences instead of replacing her meals with unfamiliar ones. The SMART goals should be specific and achievable this week, such as swapping one sugar-sweetened drink for water daily, not vague encouragement.

**Expected Outcome:** A client-facing education handout in the chat at a simplified reading level, with a culturally relevant one-day meal-plan outline and two or three SMART goals, all in weight-neutral plain language. A **Reviewed custom skill dietitian (dietary-communication)** step appears, and **Plugins** gains `dietitian (dietary-communication)`.

---

## Step 4: Compile the client nutrition packet

**Overview:** You now have two drafts from two plugin skills. Use Cowork's built-in Word skill to combine them into one document the whole nutrition team can open, with the mandatory review disclaimer on the page.

**Recipe:**

In the same task, send:

```
Using the Word skill, compile the nutrition assessment and the client education handout into one Word document titled "Client Nutrition Packet - NUT-2041". Put the clinical assessment first as an internal section, then the client-facing handout. At the top of the document, add this exact line in bold: "DRAFT ONLY. Not medical nutrition therapy. A registered dietitian must review and approve before any client use." Save it as a .docx.
```

**Finding:** Cowork builds the file in a background task, **Build nutrition packet document**, which can take around ten minutes. When it finishes, select the file under **Output** in the **Workspace** panel to open the preview, and check both sections carried over intact and in order, and that the disclaimer line sits at the top where no one can miss it. The disclaimer is not optional formatting: it is the honesty guardrail that keeps an unreviewed draft from being mistaken for approved clinical advice. If the disclaimer is missing or buried, ask Cowork to place it as the first line before anything else.

> **Warning:** The packet is a draft. Before any of it reaches a client, a registered dietitian must read every calculation, every lab interpretation, and every handout claim, and approve or correct it. The plugin speeds up the drafting, it does not replace the clinician.

**Expected Outcome:** `Client Nutrition Packet - NUT-2041.docx` under **Output**, saved to the `output` folder of your OneDrive, with **Word** added under **Plugins**. The bold review disclaimer sits directly under the title, Part 1 holds the internal clinical assessment, and Part 2, the client handout, starts on its own page.

---

## Step 5: Watch installed plugin skills behave like built-in ones

**Overview:** Look back at how the **Workspace** panel behaved across the last three steps. The point of a plugin is that its skills are not a separate mode you switch into; they activate the same way your built-in skills do.

**Discussion:**

Across the run, the **Plugins** list in the **Workspace** panel grew as the work shifted: `dietitian (clinical-nutrition)` for the calculations and lab interpretation, `dietitian (dietary-communication)` for the client education, then the built-in **Word** for the compile. Each prompt named its skill, and Cowork loaded each plugin skill with a **Reviewed custom skill** step and listed it beside Word, with no mode to switch into. That is the whole promise of the plugin model: once installed, a community skill sits in the same list and follows the same activation as the skills Microsoft ships. It also means the same governance applies, so the drafting-only disclaimer travels with the plugin's output no matter which skill produced it.

![Six skill sources, among them plugin skills from Discover and your own plugin package, feed one step: Cowork reads each description and loads the skill when the work calls for it, so you do not name it. The loaded skills appear as chips in one Skills section.](../pptx/images/02-02-skill-sources.svg)

**Expected Outcome:** A clear read on plugin behavior: installed plugin skills and built-in skills share one **Plugins** list in the **Workspace** panel and one activation model, and you compose across all of them in a single task without switching modes.
