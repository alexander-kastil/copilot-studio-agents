# Package Team Knowledge into a Portable Skill

Northwind Traders sellers handle the same customer objections every week: price, timing, and competitors. Instead of pasting that guidance into every agent's instructions, you will capture it once as a portable Agent Skill and reuse it wherever it is needed. This lab walks a low-code maker from a raw repeatable task to a shareable skill package that runs on two different agents.

By the end you have one deliverable: a reusable `objection-handling` skill, packaged as a ZIP, tested, refined, and added to a second agent to prove portability. Each step builds on the last, so keep the same browser session and files open throughout. The lab closes by contrasting this approach with the classic topic-and-trigger-phrase model so you can explain why a skill is the more reusable choice.

## What you'll build

- A single `SKILL.md` file: YAML front matter (name plus a keyword-rich description) followed by Markdown instructions.
- A ZIP package with `SKILL.md` at its root and a `references/` reference document beside it.
- The skill uploaded, activation-tested in **Preview**, then refined and replaced in place on the first agent.
- The identical package downloaded and reused on a second agent, proving the skill is portable.

## What This Lab Covers

| Step | Focus | Module topic practised |
|------|-------|------------------------|
| 1 | Spot a repeatable task worth packaging | [Agent Skills in Copilot Studio](../../../demos/04-copilot-studio/04-ui-update/03-agent-skills/readme.md) |
| 2 | Design the skill name and description | [Agent Skills in Copilot Studio](../../../demos/04-copilot-studio/04-ui-update/03-agent-skills/readme.md) |
| 3 | Author SKILL.md front matter and instructions | [Agent Skills in Copilot Studio](../../../demos/04-copilot-studio/04-ui-update/03-agent-skills/readme.md) |
| 4 | Add a reference file and package a ZIP | [Agent Skills in Copilot Studio](../../../demos/04-copilot-studio/04-ui-update/03-agent-skills/readme.md) |
| 5 | Upload the skill to a new-experience agent | [The Two Copilot Studio Experiences](../../../demos/04-copilot-studio/04-ui-update/01-new-experience-overview/readme.md) |
| 6 | Test activation in the Preview tab | [The Two Copilot Studio Experiences](../../../demos/04-copilot-studio/04-ui-update/01-new-experience-overview/readme.md) |
| 7 | Refine the description and Replace the skill | [Agent Skills in Copilot Studio](../../../demos/04-copilot-studio/04-ui-update/03-agent-skills/readme.md) |
| 8 | Reuse the skill on a second agent | [Agent Skills in Copilot Studio](../../../demos/04-copilot-studio/04-ui-update/03-agent-skills/readme.md) |
| 9 | Contrast with the classic topic approach | [The Two Copilot Studio Experiences](../../../demos/04-copilot-studio/04-ui-update/01-new-experience-overview/readme.md) |

## Lab Files

| File | Purpose |
|------|---------|
| `lab-02-portable-skill/` | Folder that holds the finished skill package for this lab. |
| `lab-02-portable-skill/SKILL.md` | The skill definition: YAML front matter (name, description) plus Markdown instructions. |
| `lab-02-portable-skill/references/objection-handling.md` | Supporting reference doc with the standard Northwind Traders objection responses. |

## Prerequisites

- A Copilot Studio environment where you can create agents (a Power Platform environment with the maker role).
- The new experience turned on, and one new-type agent already built. If you do not have one, run [Build and Ground Your First New-Experience Agent](../../../demos/04-copilot-studio/04-ui-update/demo-01-build-and-ground-an-agent.md) first and keep that Sales Assistant agent open.
- A second new-type agent to reuse the skill across (for example an Account Manager). You can create it during Step 8 if you do not have it yet.
- A plain text editor (Notepad, VS Code, or similar) and the built-in ZIP tool of your operating system.

> **Note:** A Skill is just a name, a description, and Markdown in one `SKILL.md` file. The same open format is used by Claude Code and GitHub Copilot skills, so a skill you author here can be imported there, and skills from there can be imported into Copilot Studio.

## Step 1: Identify a repeatable task worth packaging

Skills earn their place when the same guidance is needed again and again across different conversations or agents. Objection handling is a strong candidate: the advice is stable, it applies to every seller, and it is only relevant for a narrow slice of requests. Baking it into an agent's instructions would bloat the always-in-context instruction block and force you to copy and maintain the same text on every agent that needs it.

A skill solves both problems at once. It is authored once and reused, and only its name and description sit in context until a request actually matches, so the full guidance loads on demand rather than on every turn.

1. Write the task down in one sentence, using the wording below as your test case.

```text
Help a Northwind seller respond to a customer objection about price, timing, or competitors.
```

2. Confirm the task passes the three skill tests: it is repeatable, self-contained, and needed only for specific requests (not on every turn).
3. Name the alternative you are rejecting: pasting this same guidance into each agent's **Instructions** and maintaining every copy by hand.

Expected: you can state one reason a skill fits better than instructions here, namely that a skill is authored once and reused while instructions are per-agent and always in context.

## Step 2: Design the skill name and description

The runtime keeps only the name and description of each skill in context until a request matches, so those two lines do all of the activation work. A hyphenated, lowercase name reads cleanly across the open Agent Skills format, and a keyword-rich description is what makes activation reliable. Aim the description at the exact words a seller would type when they hit a wall.

Write the description so it says both what the skill does and when to use it. Pack it with the trigger words a real request would contain: objection, push-back, price, timing, budget, competitor.

1. Choose the name: `objection-handling` (lowercase, hyphenated, no spaces).
2. Draft the description from the block below, which names the task and the trigger phrases.

```text
Help a seller respond to common customer objections and push-back about price, timing, budget, or competitors during an active deal. Use when the user asks how to reply to, handle, or overcome a customer objection, a "too expensive" or "not the right time" comment, or a competitor comparison.
```

3. Read it back and confirm it answers both "what does this do" and "when should the runtime pick it".

Expected: you have a name and a one-to-two-sentence description whose keywords match the phrases a seller would type when they hit an objection.

> **Tip:** Description keywords are your activation dial, not a summary. If a skill fails to trigger, add the caller's real vocabulary ("too expensive", "not the right time") before you touch the instructions.

## Step 3: Author the SKILL.md instructions

A skill is a single `SKILL.md` file: YAML front matter for the name and description, then Markdown instructions for the behaviour. Keep the instructions focused on this one task with a clear method, a response format, and at least one edge case. The front matter is the only structured part; everything below the second `---` is plain Markdown the runtime reads when the skill activates.

Use the four-move method below (Acknowledge, Clarify, Reframe, Next step) so every reply has the same shape. The provided `lab-02-portable-skill/SKILL.md` is the finished example; author your own and compare against it.

1. Open your text editor and create a new file named `SKILL.md`.
2. Paste the full content below, keeping the front matter (between the two `---` lines) at the very top of the file.

```markdown
---
name: objection-handling
description: Help a seller respond to common customer objections and push-back about price, timing, budget, or competitors during an active deal. Use when the user asks how to reply to, handle, or overcome a customer objection, a "too expensive" or "not the right time" comment, or a competitor comparison.
---

# Objection handling

## Task

Help a Northwind Traders seller reply to a customer objection during an active deal. Turn a raw push-back (too expensive, not the right time, or a competitor looks better) into a calm, specific response the seller can send or say out loud. Keep the buyer relationship intact and move the deal one step forward.

## Method

Follow these four moves in order:

1. Acknowledge the concern in one sentence so the buyer feels heard.
2. Clarify with one question that exposes the real driver behind the objection.
3. Reframe with a Northwind Traders value point (total cost of ownership, delivery reliability, or account support), drawing the standard wording from the reference file.
4. Next step: propose one concrete action (a scoped pilot, a revised quote, or a reference call).

Ground every price or comparison claim in the reference document `references/objection-handling.md`. Do not invent discounts, dates, or figures that the seller has not confirmed.

## Response format

Return the reply in three short labelled parts:

- Acknowledge: one sentence.
- Clarify or reframe: one or two sentences.
- Next step: one sentence with a clear ask.

Keep the whole reply under 90 words and use plain, non-defensive language.

## Edge case

If the buyer raises more than one objection at once (for example price and timing together), do not answer both in one block. Ask the seller which objection is actually blocking the deal, handle that one first with the four moves, then note the second objection as a follow-up.
```

3. Save the file into a new folder named `lab-02-portable-skill`.

Expected: `lab-02-portable-skill/SKILL.md` exists, opens as readable Markdown, and its front matter matches the name and description you designed in Step 2.

## Step 4: Add a reference file and package a ZIP

A skill can bundle supporting files (scripts, templates, reference documents) alongside `SKILL.md` inside a ZIP. Here the reference file holds the standard Northwind Traders objection responses so the instructions stay short and the data stays maintainable in one place. The one hard rule: the ZIP must contain `SKILL.md` at its root, not inside a nested folder, or the upload is rejected.

1. Inside `lab-02-portable-skill`, create a `references` subfolder.
2. Save the objection responses as `references/objection-handling.md` using the content below.

```text
# Northwind Traders objection responses

| Objection                                    | Recommended response                                                                 |
|----------------------------------------------|--------------------------------------------------------------------------------------|
| "Your price is higher than the others."      | Shift to total cost of ownership: bundled onboarding, no overage fees, fixed 3-year rate. |
| "We do not have budget this quarter."         | Propose a scoped pilot now with a start-of-next-quarter rollout.                     |
| "A competitor offers the same thing cheaper." | Name Northwind differentiators: 99.9% delivery reliability, named account manager, same-region support. |
| "We are happy with our current supplier."     | Do not attack the incumbent; ask what one thing they wish worked better, then map one strength to it. |
| "Send me information and I will look later."   | Send one focused one-pager, then book a 15-minute follow-up while still on the call. |
| "We need to think about it."                  | Ask which part needs the most thought (price, fit, or timing) so the real objection surfaces. |
```

3. Select `SKILL.md` and the `references` folder together, then compress them into a ZIP. On Windows, select both items, right-click, and choose **Compress to ZIP file**.
4. Open the ZIP and confirm `SKILL.md` sits at the root, with `references/objection-handling.md` beside it.

Expected: a ZIP whose root entry is `SKILL.md`, with `references/objection-handling.md` next to it and no wrapper folder in between.

> **Warning:** If you right-click the `lab-02-portable-skill` folder itself and zip that, `SKILL.md` lands one level deep inside a `lab-02-portable-skill/` entry and the upload will fail. Open the folder first, select the contents, then zip.

## Step 5: Upload the skill to a new-experience agent

Skills live on the **Build** tab of a new-experience agent, in the **Skills** panel. Uploading imports your package so the agent can activate it on demand. This is the same panel that imports Claude Code or GitHub Copilot skills, since they share the open format.

You will need the files from the `lab-02-portable-skill` folder you created in Steps 3 and 4 (the `SKILL.md` and the ZIP). Have that folder open in a file explorer window before you start.

1. Open your first agent (for example the Sales Assistant) at [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com).
2. On the **Build** tab, find the **Skills** panel and select **Add skill**.
3. Choose **Upload a skill** (rather than **Create from blank**), then browse to `lab-02-portable-skill` and select your ZIP.
4. Confirm the upload and wait for `objection-handling` to appear in the **Skills** list.

Expected: `objection-handling` shows in the agent's **Skills** panel with the description you wrote. Only the name and description are loaded into context now; the full instructions load when a request matches.

## Step 6: Test activation in the Preview tab

The **Preview** tab is where you confirm the description actually triggers the skill. You send a realistic objection and check that `objection-handling` activated, rather than the agent answering from its general instructions. Reading which skill activated, and which did not, is the core skill-authoring feedback loop.

Send two messages: one that should activate the skill and one that should not. The contrast is what proves the description is scoped correctly rather than firing on anything price-related.

1. Open the **Preview** tab on the same agent.
2. Send the activation message below and read which skill the agent used.

```text
A customer says we are more expensive than a competitor. How should I reply?
```

3. Now send the non-activation message below, which is a general policy lookup, not an objection.

```text
What is our standard return policy?
```

4. Compare the two: the first should follow the Acknowledge, Clarify, Next step format from your skill; the second should be a plain answer with no skill activation.

Expected: the objection message activates `objection-handling` and the reply follows the labelled format, while the return-policy message does not activate the skill. That contrast confirms the description scoped the trigger correctly.

> **Tip:** If the reply looks right but you are not sure the skill fired, watch the activation indicator in **Preview** that names the skill used. A correct-looking answer from general instructions is not the same as a skill activation.

## Step 7: Refine the description and Replace the skill

If the skill activates on the wrong requests (for example on any pricing lookup, not just objections), the fix is the description, not the instructions. You tighten the wording so it activates only for objection and push-back questions, then use **Replace** to update the uploaded skill in place. **Replace** updates the existing skill rather than adding a duplicate, so the skill count stays at one.

1. In your text editor, replace the `description:` line in the front matter with the narrower wording below, which names push-back explicitly and excludes general lookups.

```text
description: Help a seller answer a customer objection or push-back during a live deal, such as "too expensive", "not the right time", "no budget this quarter", or a competitor comparison. Use only when the user is responding to resistance in a deal, not for general product, pricing, or policy lookups.
```

2. Save `SKILL.md` and re-create the ZIP as in Step 4, keeping `SKILL.md` at the root.
3. In the agent's **Skills** panel, open the `objection-handling` configuration and choose **Replace**.
4. Upload the updated package, then re-run both **Preview** messages from Step 6.

Expected: after **Replace**, the objection message still activates the skill and the general policy question still does not, while the **Skills** list still shows exactly one `objection-handling` entry, confirming **Replace** updated rather than duplicated it.

## Step 8: Reuse the skill on a second agent

Portability is the payoff: a skill created once can be added to many agents. You **Download** the skill from the first agent, then **Upload a skill** to a second agent to prove it travels without re-authoring. Distribution is per-agent, so each agent gets its own copy of the package; there is no shared cross-tenant catalog yet.

1. On the first agent's **Skills** panel, open the `objection-handling` configuration and choose **Download** to save the package.
2. Open or create a second new-type agent, for example an Account Manager agent.
3. On the second agent's **Build** tab, open the **Skills** panel, select **Add skill**, then **Upload a skill** and select the package you just downloaded.
4. Open the second agent's **Preview** tab and send the activation message below to confirm the skill travelled.

```text
A customer says now is not the right time to buy. What should I say?
```

Expected: `objection-handling` now runs on both agents and produces the same labelled reply. You reused the identical package with no changes, which demonstrates the skill is portable across agents.

> **Note:** Distribution is per-agent by design. There is no shared catalog that pushes one skill to every agent at once yet, so a new agent means a fresh **Upload a skill**, not a subscription to a central copy.

## Step 9: Contrast with the classic topic approach

Understanding what you avoided makes the value concrete. In the classic experience you would have built this as a topic with a set of trigger phrases, branching nodes, and message actions, all living inside a single agent. That topic could not be lifted out and dropped onto another agent as a self-contained package the way a skill can.

The reuse story is the whole point. A skill is authored once, packaged, downloaded, and added to any new-experience agent, while a classic topic is bound to the agent it was built in.

1. Sketch the classic version in your notes.

```text
Topic: Objection Handling
Trigger phrases: "too expensive", "not the right time", "competitor is cheaper"
Nodes: branch on objection type, then send a scripted message per branch
Scope: lives inside one agent only
```

2. Note the classic limits: the logic is bound to one agent, and reusing it means rebuilding the topic elsewhere by hand.
3. Note the skill advantages: authored once, packaged, downloaded, and added to any new-experience agent.
4. Record the one-way rule: agents built in the new experience cannot be converted back to classic, so the skill approach is the forward path for these agents.

Expected: you can explain in one or two sentences why the portable skill is more reusable than a classic topic, and you can state that new-experience agents cannot be converted back to classic.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The skill never activates on an objection message | The description is missing the caller's real vocabulary | Add the exact trigger words ("too expensive", "not the right time", "competitor") to the `description`, then **Replace** the skill |
| The skill activates on the wrong messages (any pricing or policy question) | The description is too broad and overlaps general lookups | Narrow the description as in Step 7 to name objection and push-back explicitly and exclude general lookups, then **Replace** |
| Upload is rejected or the skill does not appear | `SKILL.md` is nested inside a wrapper folder in the ZIP, not at the root | Re-zip from inside `lab-02-portable-skill` so `SKILL.md` sits at the ZIP root with `references/` beside it |
| Upload fails with a front-matter or format error | The YAML front matter is malformed (missing a `---` line, a missing `name` or `description`, or a colon inside an unquoted value) | Confirm both `---` fences are present, `name` and `description` are both set, and any value containing a colon is wrapped in quotes; save and re-upload |
| A second copy of the skill appears after editing | You used **Add skill** again instead of **Replace** | Delete the duplicate, then use the `objection-handling` configuration's **Replace** to update in place |

## Verify

You have met the lab goal when all of the following are true:

1. `lab-02-portable-skill/SKILL.md` has valid front matter (name `objection-handling` plus a keyword-rich description) and Markdown instructions with the four-move method.
2. The ZIP package holds `SKILL.md` at its root with `references/objection-handling.md` beside it.
3. The skill activates in **Preview** for an objection message and stays silent for the return-policy request.
4. The same downloaded package runs on a second agent and produces the same labelled reply, proving portability.

## Summary

You packaged team knowledge into a portable `objection-handling` skill: a single `SKILL.md` with keyword-rich front matter and a four-move method, bundled with a reference file into a ZIP, tested in **Preview**, refined with **Replace**, and reused on a second agent with **Download**. You can now:

- Decide when a repeatable task belongs in a skill rather than in an agent's always-in-context instructions.
- Author `SKILL.md` front matter and instructions, and package a valid ZIP with `SKILL.md` at the root.
- Upload, activation-test, and refine a skill's description as the lever that controls when it fires.
- Reuse one authored skill across multiple new-experience agents through **Download** and **Upload a skill**.

Next, wire an external system into the same agent in [Connect an MCP Server and Publish a Workflow](../../../demos/04-copilot-studio/04-ui-update/demo-04-connect-mcp-and-workflow.md).

## Cleanup

Delete the skill from each agent's **Skills** panel if the agents were only for this lab: open the `objection-handling` configuration and choose **Delete**. Remove any throwaway agents you created (open the agent list, select the agent, choose **Delete**). Keep the local `lab-02-portable-skill` folder and its ZIP if you want to reuse the skill in a later lab.
