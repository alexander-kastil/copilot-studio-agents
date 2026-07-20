# Compare the Classic and New Copilot Studio Experiences Side by Side

Every maker who opens Copilot Studio this year lands in a tenant where two experiences run at once, and building in the wrong one is expensive because agents cannot be converted between them. This lab gives you the habit that prevents that mistake: you stand up a minimal Northwind assistant in the new experience, open it beside a classic agent, and record what actually differs so the choice becomes obvious every time after. You leave with a working new-experience agent and a completed Northwind Two-Experience Decision Card you can reuse on your own tenant.

The scenario company is Northwind Traders, a wholesale distributor whose sellers need a quick account helper. You will not fully build that helper here (the demo and the capstone lab do that); instead you use a deliberately minimal version as the specimen you compare the two experiences against, so the focus stays on telling them apart, the toggle, coexistence, and the one-way conversion rule.

## What you'll build

- A minimal new-experience Northwind Sales Assistant, created from one plain-language sentence, that answers a single smoke-test question in Preview.
- A completed Northwind Two-Experience Decision Card: a filled comparison of the classic and new surfaces plus a recorded per-agent decision for two Northwind scenarios.
- A confirmed, first-hand understanding of the toggle, coexistence, the navigation tells, and the one-way conversion rule.

## Prerequisites

- A Copilot Studio environment where you can create agents (a Power Platform environment with the maker role), with access to [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com); no files, connectors, or API keys are needed because every input in this lab is provided inline.

## Exercise 1: Find the toggle and confirm both experiences are live

Before you can choose an experience, you need to see that both exist in your tenant at the same time. Copilot Studio does not replace classic when the new experience arrives; it runs the new surface beside it and lets you move between them per agent. The control that does this is the **New experience** toggle, reached through **Try it now** on the home banner.

1. Open [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) and let the home page load.
2. On the banner, select **Try it now**.
3. Find the **New experience** toggle at the top right and note its current position (on or off).
4. Flip it once to on, then back, and watch the surface change without creating or losing anything.

Start your deliverable now. Paste this blank card into a text file named `northwind-two-experience-decision-card.md` and keep it open; you will fill one section per exercise:

```text
# Northwind Two-Experience Decision Card

## Where the toggle lives
Path to switch experiences:

## Navigation tells
Classic navigation:
New-experience navigation:

## Authoring model
Classic (how you add behavior):
New experience (how you add behavior):

## Conversion between them
Can I convert an agent from one to the other?

## Per-agent decision
Scenario A (deterministic returns intake): experience =
Scenario B (greenfield M365 account helper): experience =
Reason for each:
```

Expected: the **New experience** toggle is visible at the top right, flipping it changes the surface immediately, and nothing you had is removed. In the card, fill "Path to switch experiences" with: home page, then **Try it now**, then the **New experience** toggle.

> **Note:** The toggle is a per-agent choice, not a tenant-wide switch you set once. Coexistence is the normal state, so you can keep both kinds of agent in the same environment.

## Exercise 2: Read the classic surface and capture its tells

The clearest way to identify classic later is to see its navigation now, with the new experience turned off. Classic is topic-driven: you author Topics, wire Knowledge and Actions, and configure Settings, all from the left navigation. Seeing this layout once makes it unmistakable on sight.

1. With the **New experience** toggle set to off, return to the Copilot Studio home page.
2. Open any existing classic agent, or begin creating one, so the authoring surface loads.
3. Look at the left navigation and read the top-level areas listed there.

Expected: the left navigation shows Topics, Knowledge, Actions, and Settings. In the card, fill "Classic navigation" with: Topics, Knowledge, Actions, Settings (left side). If you see Build or Preview tabs across the top instead, the toggle is still on; turn it off and reopen.

## Exercise 3: Create a minimal Northwind assistant in the new experience

Now switch to the new experience and create your comparison specimen. The new experience is natural-language-first: instead of authoring topics, you describe the agent's job in a sentence and Copilot Studio generates a starting configuration. This is your deliverable agent, kept deliberately minimal so the lab stays about the two experiences, not about grounding.

1. Return to the home page and turn the **New experience** toggle on.
2. Select **Create**, then **New agent**.
3. In the description box, paste the following:

```text
You are the Northwind Sales Assistant. You help Northwind Traders sellers by answering short questions about our products, standard lead times, and account tiers. Keep answers brief, factual, and professional.
```

4. Select **Continue**, set the agent name to Northwind Sales Assistant, then finish creation.

Expected: the agent is created and opens on its authoring surface without you having written a single topic. The agent name reads Northwind Sales Assistant. You will read that surface in the next exercise.

> **Tip:** If **Create** offers a classic-looking flow with topic templates, you are still in classic. Cancel, confirm the **New experience** toggle is on from the home page, and start again.

## Exercise 4: Read the new surface and capture its tells

With the new agent open, read its layout the same way you read classic in Exercise 2. The new experience consolidates everything into one Build surface with tabs across the top, and the behavior you would have authored as topics is instead seeded as Instructions from your description. This contrast is the heart of the lab.

1. Look at the tabs across the top of the agent.
2. On the **Build** tab, find the components panel and note which components are present.
3. Confirm the **Instructions** component already contains text generated from your Exercise 3 description.

Expected: the top tabs read Build, Preview, Evaluate, and Monitor, and the **Build** tab shows **Instructions** seeded from your sentence plus empty Knowledge, Tools, and Skills. In the card, fill "New-experience navigation" with: Build, Preview, Evaluate, Monitor (top tabs). You authored zero topics.

## Exercise 5: Toggle between the two and confirm coexistence

You have now seen both surfaces; this exercise proves they live together. You will move from your new-experience agent back to a classic view and forward again, confirming that switching the experience neither deletes the other kind of agent nor changes the one you built. This is coexistence in action, and it is why the toggle is safe to use freely.

1. From the new agent, return to the Copilot Studio home page.
2. Turn the **New experience** toggle off and confirm your classic agent from Exercise 2 is still present.
3. Turn the toggle back on and confirm the Northwind Sales Assistant is still present and unchanged.

Expected: both agents survive every toggle; the classic agent appears when the toggle is off and the Northwind Sales Assistant appears when it is on, with neither altered. This confirms the two experiences coexist in the same environment. Nothing you did in one experience touched the other.

## Exercise 6: Contrast the authoring model in practice

The navigation difference reflects a deeper one: how you change what the agent does. In classic you would open a Topic, add trigger phrases, and wire branching nodes; in the new experience you edit plain-language Instructions and the runtime reasons against them. Editing Instructions once makes the difference concrete.

1. On your Northwind Sales Assistant, open the **Build** tab and open the **Instructions** component.
2. Replace the contents with the following:

```text
Role: You are the Northwind Sales Assistant, an internal helper for Northwind Traders sellers.

You do:
- Answer short questions about Northwind products, standard lead times, and account tiers.

You do not:
- Give binding price quotes, contract terms, or legal advice.
- Answer questions unrelated to Northwind sales.

Style: concise and professional.
```

3. Select **Save**.

Expected: the **Instructions** component shows your saved text, and you changed the agent's behavior without opening a single topic or trigger. In the card, fill "New experience (how you add behavior)" with: edit plain-language Instructions, and "Classic (how you add behavior)" with: author Topics with trigger phrases and branching nodes.

> **Tip:** Write instructions as short "You do / You do not" lists rather than one long paragraph. The runtime follows scoped, itemized guardrails more reliably than prose.

## Exercise 7: Smoke-test the new agent in Preview

A comparison is only fair if your specimen actually works, so give it one quick test. The **Preview** tab is where you see the agent respond before anyone else does, and it is unique to the new experience surface you are comparing. One in-scope question and one out-of-scope question confirm the Instructions took effect.

1. Open the **Preview** tab.
2. Send this message:

```text
What is the standard lead time for a Tier 1 account?
```

3. Then send this message to test the guardrail:

```text
Can you give me a signed contract price for 500 cases?
```

Expected: the first reply gives a short, professional answer about Tier 1 lead time, and the second declines the binding quote because your Exercise 6 "You do not" list forbids contract terms. The agent is a working specimen, which makes the rest of your comparison honest. You did not add any knowledge, so exact figures may be general; that is fine for this lab.

## Exercise 8: Test the one-way conversion rule

This is the rule that makes the choice matter. Agents built in one experience cannot be converted to the other because the architectures differ (classic authored topics versus instructions plus the reasoning runtime), so there is no import path either way. You will confirm there is no convert option, which is exactly what you should find.

1. On the Northwind Sales Assistant, open the agent menu and its **Settings** or overflow options.
2. Look for any "convert to classic", "switch this agent", or "export to classic" command.
3. Confirm no such command exists; the experience is fixed at creation time.

Expected: there is no option to convert this new-experience agent to classic, and the same is true in reverse for a classic agent. In the card, fill "Can I convert an agent from one to the other?" with: No, the choice is fixed when the agent is created. Rebuilding across experiences means re-authoring from scratch.

> **Warning:** Because conversion is impossible, decide the experience before you invest in an agent, not after. A mature classic agent rebuilt in the new experience is a full re-author, and the reverse is too.

## Exercise 9: Record a per-agent decision for two Northwind scenarios

The point of telling the experiences apart is to choose well per agent. Classic leads where you need deterministic, auditable paths and its broader mature feature set; the new experience leads for greenfield agents that reason over Microsoft 365 data with a simpler instructions-first model. Apply that to two real Northwind scenarios.

Read these two scenarios and decide the experience for each using the guidance above:

```text
Scenario A: A returns-intake agent that must walk a warehouse clerk through an exact, auditable sequence of steps and branch on fixed rules, using features the team already relies on in production today.

Scenario B: A greenfield account helper that reasons over a seller's Microsoft 365 emails, files, and meetings and is described in plain language rather than authored as topics.
```

1. In the card, set "Scenario A" to your chosen experience and "Scenario B" to yours.
2. In "Reason for each", write one sentence per scenario tying the choice to a concrete driver (deterministic branching and mature features, or greenfield M365 reasoning and instructions-first).

Expected: Scenario A is assigned to classic (deterministic, auditable branching plus mature production features) and Scenario B to the new experience (greenfield, reasons over M365 data, instructions-first). Your reasons name the driver, not just the label.

## Exercise 10: Complete and review the Decision Card

With every section filled, do a final pass so the card stands on its own as a reference you can hand to a teammate. A good card lets someone identify an experience on sight, explain why conversion is off the table, and make the per-agent call without opening this lab. This completed card is your deliverable.

1. Reopen `northwind-two-experience-decision-card.md` and confirm every section has a value: toggle path, both navigations, both authoring models, the conversion answer, and both scenario decisions with reasons.
2. Read the card top to bottom and fix any section that only restates a label instead of naming a concrete tell or driver.
3. Save the file and keep the Northwind Sales Assistant agent in place as your live specimen.

Expected: the Northwind Two-Experience Decision Card is complete and internally consistent, and the Northwind Sales Assistant is still standing in the new experience. Someone reading the card can tell the two experiences apart, state the one-way conversion rule, and choose an experience per agent. That is the deliverable.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The agent shows Topics, Knowledge, Actions, and Settings | You created or opened the agent in classic | Return to the home page, turn the **New experience** toggle on, and create the agent again |
| The **New experience** toggle is not visible | You are on the home page before selecting **Try it now**, or your environment has not enabled the preview | Select **Try it now** on the banner first; if it is still absent, confirm the new experience is enabled for your environment |
| **Create** opens a topic-template flow | The toggle reverted to off between sessions | Cancel, confirm the **New experience** toggle is on from the home page, then select **Create** and **New agent** again |
| No convert-to-classic option appears anywhere | Working as designed; conversion between experiences is not possible | Record this in the card as expected behavior; plan to rebuild rather than convert if you ever need the other experience |
| Preview gives vague figures for the smoke-test question | The minimal agent has no Knowledge source, so it answers generally | This is fine for this lab; the demo and capstone lab add grounded Knowledge for cited, exact answers |

## Summary

You built two things: a minimal new-experience Northwind Sales Assistant and a completed Northwind Two-Experience Decision Card that captures, from first-hand inspection, how the classic and new experiences differ and how to choose between them. You can now:

- Locate the **New experience** toggle through **Try it now** and switch experiences per agent.
- Identify each experience on sight from its navigation (Topics, Knowledge, Actions, Settings for classic; Build, Preview, Evaluate, Monitor for new).
- Explain the one-way conversion rule and why it makes the per-agent choice a real commitment.
- Confirm coexistence: both experiences and both agents survive every toggle, untouched.
- Choose the right experience for a given Northwind scenario and justify it with a concrete driver.

Next, put the new experience to work end to end by grounding an agent and confirming cited answers in [Build and Ground Your First New-Experience Agent](../../../../demos/03-copilot-studio/04-ui-update/01-new-experience-overview/demo-01-build-and-ground-an-agent.md).
