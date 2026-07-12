# Build and Ground Your First New-Experience Agent

Northwind Traders sellers lose the first ten minutes of every customer call hunting for account facts across files and email. In this demo you build a grounded sales assistant in the new Copilot Studio experience that answers product and account questions from your own documents, with citations, so a seller gets a trustworthy answer in seconds. You go from a plain-language description to a working, tested agent that is ready to publish.

## What you'll build

- A new-experience agent named Northwind Sales Assistant, created from a natural-language description.
- A focused instruction set that scopes the agent to seller support with a professional tone and clear guardrails.
- A knowledge source (a product and pricing sheet) that the agent cites when it answers.
- A tested agent that answers a real seller question with a citation and refuses an out-of-scope request, verified in the Preview tab.

## Related Topics

This demo puts [The Two Copilot Studio Experiences](04-ui-update/01-new-experience-overview/readme.md) into practice by building entirely on the new-experience surface and confirming which experience you are in. It grounds [The Unified Build Surface and the New Orchestrator](04-ui-update/02-unified-build-and-orchestrator/readme.md) by wiring Instructions and Knowledge together in the single Build view.

## Prerequisites

- A Copilot Studio environment where you can create agents (a Power Platform environment with the maker role).
- The new experience turned on: open [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com), select Try it now on the banner, and confirm the New experience toggle at the top right is on. This is the only setup step; everything after it is building.
- A short product or pricing document to use as knowledge. If you do not have one, use the sample content in Exercise 3.

## Exercise 1: Create the agent from a description

The new experience is natural-language-first. Instead of authoring topics and trigger phrases, you describe the agent's job and Copilot Studio generates the starting configuration, which you then refine. This is the fastest way to a working agent, and it is the clearest way to feel how the new experience differs from classic.

1. On the Copilot Studio home page, select **Create**, then **New agent**.
2. In the description box, paste the following:

```text
You are the Northwind Sales Assistant. You help Northwind Traders sellers prepare for customer calls by answering questions about our products, pricing, standard lead times, and account tiers. Keep answers short, factual, and professional, and cite the source you used.
```

3. Select **Continue**, set the agent name to Northwind Sales Assistant, then finish creation.
4. When the agent opens, look at the tabs across the top and the components panel on the Build tab.

Expected: the agent opens on the **Build** tab, and the top tabs read Build, Preview, Evaluate, and Monitor. The components panel shows Instructions already seeded from your description, plus empty Knowledge, Tools, and Skills. You authored zero topics.

> **Note:** If the tabs read Topics, Knowledge, Actions, and Settings, you are in the classic experience. Return to the home page, turn on the New experience toggle, and create the agent again.

## Exercise 2: Shape behavior with Instructions

In the new experience, Instructions replace classic topic logic. They are the always-in-context brief the orchestration runtime reasons against on every turn, so a tight instruction block is the single biggest lever on answer quality. You will replace the auto-generated text with a sharper version that sets scope, tone, and guardrails.

1. On the **Build** tab, open the **Instructions** component.
2. Replace the contents with the following:

```text
Role: You are the Northwind Sales Assistant, an internal helper for Northwind Traders sellers.

You do:
- Answer questions about Northwind products, pricing, standard lead times, and account tiers.
- Prepare a short pre-call briefing when a seller names an account.
- Cite the knowledge source you drew each answer from.

You do not:
- Give binding price quotes, contract terms, or legal advice.
- Answer questions unrelated to Northwind sales.

Style: concise and professional. If a request is missing the account or product name it needs, ask for it before answering.
```

3. Select **Save**.

Expected: the Instructions component shows your saved text and the agent identity reflects the seller-support role. Nothing else changed yet; you have set behavior, not knowledge.

> **Tip:** Write instructions as short "You do / You do not" lists rather than one long paragraph. The runtime follows scoped, itemized guardrails more reliably than prose.

## Exercise 3: Ground the agent with Knowledge

An agent with no knowledge answers from the general model and cannot cite Northwind facts. Adding a Knowledge source grounds answers in your content and lets the agent show where each fact came from, which is what makes it trustworthy for sellers. You will add one document so the assistant answers from real Northwind data.

If you do not have a product sheet, create a file named `northwind-products.md` (or a Word document) with this content, then use it below:

```text
# Northwind Traders - Product and Account Reference

## Account tiers and standard lead times
- Tier 1 (strategic): standard lead time 3 business days, priority support.
- Tier 2 (growth): standard lead time 5 business days, standard support.
- Tier 3 (transactional): standard lead time 10 business days, standard support.

## Selected products
- NWT Cold Brew Concentrate (SKU CB-100): case of 12, list price 48.00 USD.
- NWT Organic Green Tea (SKU GT-220): case of 24, list price 62.00 USD.
- NWT Dark Roast Beans (SKU DR-330): 5 kg bag, list price 74.00 USD.

## Notes
- Lead times assume in-stock items. Backordered items add 5 business days.
- Tier 1 accounts may request expedited 1-day shipping at extra cost.
```

1. On the **Build** tab, open the **Knowledge** component and select **Add knowledge**.
2. Choose to upload a file, then select your `northwind-products` document (or point at a SharePoint site that holds it).
3. Wait until the source status shows it has finished processing.

Expected: the document appears under Knowledge with a status indicating it is ready. The agent can now draw on it, though you have not yet confirmed that it does; that is the next exercise.

> **Note:** To ground the agent in live Microsoft 365 data (emails, files, meetings) instead of an uploaded file, add Microsoft IQ from the same Knowledge component. This demo uses a file so any learner can complete it without tenant data.

## Exercise 4: Test grounding and iterate in Preview

The Preview tab is where you see the agent behave before anyone else does. It shows the answer, the citation, and whether the agent stayed in scope, so it is your iteration loop. You will ask a grounded question, confirm the citation, then push on a guardrail.

1. Open the **Preview** tab.
2. Send this message:

```text
What is the standard lead time for a Tier 2 account, and what does a case of Cold Brew Concentrate cost?
```

3. Read the answer and look for a citation back to your knowledge source.
4. Now test a guardrail by sending:

```text
Can you give me a signed contract price for 500 cases?
```

5. Read how the agent handles the out-of-scope request.

Expected: the first answer states a 5 business day lead time and a 48.00 USD case price, with a citation to the `northwind-products` source. The second answer declines to give a binding quote and points back to what it can do, because your Exercise 2 instructions forbid contract terms.

> **Tip:** If a grounded question comes back with no citation, the fix is almost always the knowledge source (still processing) or the instructions (the cite line was removed), not a hidden setting. Grounding quality is an instructions plus knowledge problem.

## Exercise 5: Publish the agent

Publishing makes the agent available on channels such as Teams and Microsoft 365 Copilot. You do this once the Preview loop looks right, so sellers reach a version you have actually tested.

1. Select **Publish** at the top of the agent.
2. Complete the publish dialog.
3. Note the channel options offered so you know where sellers will reach the assistant.

Expected: the agent publishes without errors and shows the channels where it can be added.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Tabs read Topics / Knowledge / Actions / Settings | You are in the classic experience | Return to the home page, turn on the New experience toggle, and recreate the agent |
| Answer is correct but has no citation | Knowledge source still processing, or the cite instruction was removed | Wait for the source status to show ready, confirm the cite line from Exercise 2, ask again |
| Agent answers off-topic questions | Scope guardrails missing from Instructions | Re-add the "You do not" list from Exercise 2 and Save |
| Agent asks for an account name on every message | The ask-for-missing-details line is too broad | Narrow the final Style line so it asks only when the question actually needs an account or product name |

## Summary

You built the Northwind Sales Assistant: a new-experience agent created from a description, scoped with Instructions, grounded on a product document, and verified in Preview to answer a real seller question with a citation while refusing an out-of-scope request. You can now:

- Create and name a new-experience agent from natural language.
- Write scoped instructions that set behavior and guardrails.
- Ground an agent on a document and confirm cited answers in Preview.

Next, add tools and watch the orchestrator chain them across a multi-step question in [Trace an Agent's Reasoning in the New Orchestrator](demo-02-trace-agent-reasoning.md).
