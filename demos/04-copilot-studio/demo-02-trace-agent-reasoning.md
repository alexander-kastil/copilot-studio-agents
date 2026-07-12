# Trace the Agentic Reasoning Loop

When a Northwind Traders seller asks one question that needs several facts at once (what an account ordered, whether they have an open case, and what their lead time is), the assistant should plan the work and pull from every relevant source in a single turn instead of answering half the question. In this demo you give the Northwind Sales Assistant a second knowledge source, ask a genuinely multi-source question, and then open the orchestrator's plan so you can see, trust, and debug how it reached the answer. You leave with an agent that reasons across sources and the skill to inspect that reasoning whenever an answer looks wrong.

## What you'll build

- A second knowledge source (account, order, and support-case data) added to the existing Northwind Sales Assistant, so the orchestrator has more than one place to look.
- A tested baseline that contrasts a single-source question with a multi-source one in the Preview tab.
- An inspected reasoning plan, read through Get rationale, that names each planned step and which source answered it.
- A post-hoc run review in the Monitor tab that confirms the chained actions for one turn.
- A reasoning instruction that forces deliberate, step-by-step planning, verified by re-asking and re-inspecting.

## Related Topics

This demo puts [The Unified Build Surface and the New Orchestrator](04-ui-update/02-unified-build-and-orchestrator/readme.md) into practice by exercising the single enhanced runtime that plans and reasons across multiple steps, then exposing that plan through Get rationale and the activity tracker. It builds on [The Two Copilot Studio Experiences](04-ui-update/01-new-experience-overview/readme.md), because only new-type agents run this one non-configurable orchestration runtime; a classic agent would answer single-pass with one tool per turn and would not expose a chained plan.

## Prerequisites

- A Copilot Studio environment where you can create agents (a Power Platform environment with the maker role).
- The new experience turned on: open [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) and confirm the New experience toggle at the top right is on.
- The Northwind Sales Assistant you built in [Build and Ground Your First New-Experience Agent](demo-01-build-and-ground-an-agent.md), grounded on the product and account reference document, open on the **Build** tab. This demo continues that same agent; do not start a new one.
- The ability to upload a second file as knowledge (the exact content is provided in Exercise 1).

## Exercise 1: Add a second source so there is something to chain

The new orchestrator can only plan a multi-step answer when the agent has more than one source or tool to choose between. With a single knowledge document there is nothing to route across, so every answer is a one-hop lookup and the reasoning loop never has to plan. To see planning at all, you first have to create the conditions for it: a second, distinct source that holds facts the first document does not.

In this exercise you add account, order, and support-case data as a separate knowledge source. It deliberately overlaps on account names with the product reference from demo-01 but carries different facts, so a question about one account can only be answered fully by consulting both documents.

1. Create a file named `northwind-accounts.md` (or a Word document) with exactly this content:

```text
# Northwind Traders - Account and Order Reference

## Accounts
- Alfreds Futterkiste (Tier 1): region North, owner J. Berg.
- Around the Horn (Tier 2): region North, owner M. Diaz.
- Blauer See Delikatessen (Tier 3): region South, owner P. Novak.

## Recent orders (last quarter)
- Alfreds Futterkiste: 40 cases Cold Brew Concentrate (CB-100), delivered on time.
- Around the Horn: 12 cases Organic Green Tea (GT-220), 1 case backordered.
- Blauer See Delikatessen: 8 bags Dark Roast Beans (DR-330), delivered late.

## Open support cases
- Alfreds Futterkiste: case 4821, damaged shipment, open.
- Around the Horn: none.
```

2. On the **Build** tab, open the **Knowledge** component and select **Add knowledge**.
3. Choose to upload a file, then select your `northwind-accounts` document.
4. Wait until the source status shows it has finished processing.

Expected: the **Knowledge** component now lists two sources, the original product reference and the new `northwind-accounts` source, both showing a ready status. The agent now has two distinct places to look, which is the precondition for planning.

> **Note:** Keep the two documents separate rather than merging them into one file. The point of this demo is to watch the orchestrator route across sources, and it can only do that when the facts actually live in different places.

## Exercise 2: Establish a single-source versus multi-source baseline

Before you inspect any reasoning, you need two reference answers to compare: one question that a single document can answer, and one that no single document can. The contrast is what makes the plan visible and meaningful. A single-source question produces a short, one-hop answer; a multi-source question forces the orchestrator to gather facts from more than one place and stitch them together in one turn.

You will ask both in the Preview tab, which is where the agent behaves before anyone else sees it. Read the multi-source answer closely: a correct response weaves the order history, the support-case status, and the lead time into one reply, which is only possible if the agent consulted both documents.

1. Open the **Preview** tab.
2. Send this single-source question first:

```text
What is a case of Organic Green Tea, and what is the standard lead time for a Tier 2 account?
```

3. Read the answer; both facts come from the product reference alone.
4. Now send this multi-source question:

```text
For Around the Horn, what did they order last quarter, do they have any open support cases, and what is their standard lead time?
```

5. Read how the second answer combines facts that live in different documents.

Expected: the first answer is a compact reply drawn entirely from the product reference. The second answer names the Organic Green Tea order with the backordered case (from `northwind-accounts`), states that Around the Horn has no open support cases (from `northwind-accounts`), and gives the Tier 2 lead time (from the product reference), showing that one turn pulled from both sources.

## Exercise 3: Inspect the plan with Get rationale

An answer that looks right is not the same as an answer you can trust. Get rationale opens the orchestrator's decision detail for a specific reply, showing the steps it planned and which source it used to satisfy each part of the question. This is how you move from hoping the agent chained sources correctly to confirming it did, and it is the first place you look when a multi-part answer drops or confuses a fact.

Reading a rationale for a question you already understand teaches you what a healthy plan looks like, so that a broken one later is easy to spot. For the Around the Horn question, a healthy plan breaks the request into its parts (orders, support cases, lead time) and attributes each to the document that holds it.

1. In the **Preview** tab, find the multi-source answer from Exercise 2.
2. On that answer, select **Get rationale** to open the planner's decision detail.
3. Read the ordered steps and note which source each step drew from.

Expected: the rationale lists multiple steps for the one question, and the steps span both documents: at least one step against the product reference (for the lead time) and one or more against the `northwind-accounts` source (for the order history and support-case status). You can see the request was decomposed, not answered in a single undifferentiated pass.

> **Tip:** If the rationale shows only one step or only one source for a clearly multi-part question, the usual cause is that the second source is still processing or is missing the fact you asked about. Re-check the source status on the **Build** tab before assuming the planner failed.

## Exercise 4: Review the run after the fact in Monitor

Get rationale answers "how did this one reply happen" while you are watching. The **Monitor** tab answers "what has this agent been doing" across sessions, so you can debug routing after the fact instead of only in the moment. This matters because the questions that expose a bad plan are often the ones a colleague asked yesterday, not the one in front of you; Monitor lets you open that turn and read exactly what the orchestrator chained.

In this exercise you locate the turn from Exercise 2 in Monitor and open its activity, confirming from a second, independent view that the orchestrator really did chain multiple actions for a single question.

1. Open the **Monitor** tab.
2. Select the session that contains the Around the Horn question you asked in Preview.
3. Open the activity tracker for that turn and read the ordered list of actions.

Expected: the activity for that one turn lists multiple chained actions, a lookup against each knowledge source, confirming the multi-step plan from an after-the-fact record rather than the live Preview. This is the view you would use to explain, days later, why a given answer came out the way it did.

## Exercise 5: Shape the plan with a reasoning instruction

Deep reasoning is applied automatically when the orchestrator judges a task complex, and you can force it on a specific behavior with the keyword reason. Adding a "reason step by step" instruction tells the runtime to plan deliberately (identify the account tier, then look up orders and cases, then summarize) rather than gathering facts in whatever order it lands on. Makers use this to make planning predictable for high-stakes flows, and to see how much the instruction changes the shape of the plan.

This is the lever that separates the new orchestrator from classic generative orchestration. Classic orchestration is single-pass and picks one tool per turn, so there is no multi-step plan to shape; here you are directly influencing how deeply the runtime plans before it answers. You will add the instruction, re-ask the multi-source question, and re-open the rationale to see the ordered plan the keyword produced.

1. On the **Build** tab, open the **Instructions** component.
2. Add the following as a new instruction step, then select **Save**:

```text
When a seller names an account, reason step by step: first identify the account tier, then look up recent orders and open cases, then summarize.
```

3. Return to the **Preview** tab and re-send the multi-source question:

```text
For Around the Horn, what did they order last quarter, do they have any open support cases, and what is their standard lead time?
```

4. On the new answer, select **Get rationale** and compare the plan to the one you read in Exercise 3.

Expected: the instruction saves with the word reason present, and the new rationale shows a more deliberate, ordered plan that follows your stated sequence (tier first, then orders and cases, then a summary) before producing the reply. Contrast this with classic generative orchestration, which would select one tool for the turn and expose no chained, shapeable plan at all.

> **Note:** You do not configure the orchestration runtime itself; every new-type agent runs the same enhanced runtime. What you shape is how it plans, through instructions and the reason keyword, not through a settings switch.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Multi-source answer drops the order history or the case status | The second source is still processing or was not added | Open the **Knowledge** component on the **Build** tab, confirm `northwind-accounts` shows a ready status, then re-ask |
| Get rationale shows only one step for a multi-part question | The question was answerable from a single source, or the second source is missing the fact | Use the exact Exercise 2 multi-source prompt, and confirm both documents are ready under **Knowledge** |
| Monitor activity shows only one action for the turn | You opened the single-source turn from Exercise 2, not the multi-source one | Select the session turn that contains the Around the Horn question and open its activity tracker |
| The reason instruction did not change the plan | The step was not saved, or the keyword reason is absent from the text | Reopen the **Instructions** component, confirm the step contains the word reason, select **Save**, then re-ask |
| Tabs read Topics / Knowledge / Actions / Settings | The agent is a classic-experience agent | This flow needs a new-type agent; return to [Build and Ground Your First New-Experience Agent](demo-01-build-and-ground-an-agent.md) and use that agent |

## Summary

You gave the Northwind Sales Assistant a second knowledge source, asked a question that no single document could answer, and then opened the orchestrator's plan through Get rationale and the Monitor activity tracker to confirm it chained both sources in one turn. You also shaped how deeply the runtime plans with a reason instruction and watched the rationale change. You can now:

- Create the conditions for multi-step reasoning by giving an agent more than one source to route across.
- Contrast single-source and multi-source answers in the **Preview** tab to make a plan worth inspecting.
- Inspect a reply's plan with **Get rationale** and read which source answered each part.
- Review a past turn's chained actions in the **Monitor** tab to debug routing after the fact.
- Shape the depth of planning with a reason instruction, and explain how that differs from classic single-pass orchestration.

Next, package a reusable set of instructions and actions the orchestrator can call as one unit in [Add a Reusable Skill to Your Agent](demo-03-add-a-reusable-skill.md).
