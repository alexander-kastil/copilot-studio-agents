# Build and Ground Your First GitHub Copilot Agent

Northwind Traders sellers lose the first ten minutes of every customer call hunting for account facts across files and email. In this demo you build a grounded sales assistant as a GitHub Copilot agent that answers product and account questions from your own documents, with citations, so a seller gets a trustworthy answer in seconds. You go from a plain-language description to a working, tested agent that is ready to publish.

## What you'll build

- A GitHub Copilot agent named Northwind Sales Assistant, created from a natural-language description.
- A focused instruction set that scopes the agent to seller support with a professional tone and clear guardrails.
- A knowledge source (a product and pricing sheet) that the agent cites when it answers.
- A tested agent that answers a real seller question from its knowledge source and refuses an out-of-scope request, verified in the Preview tab and its History.

![The finished Northwind Sales Assistant in Preview: its orchestration runtime answers the Tier 2 lead time and Cold Brew price question from the northwind-products knowledge source with a citation, and declines the signed contract price request because the Instructions forbid binding quotes.](./_images/northwind-assistant-grounded-answer.svg)

## Related Topics

This demo puts [Standard vs. GitHub Copilot Agents](readme.md) into practice by building a GitHub Copilot agent and confirming which kind of agent you are in. It grounds [The Unified Build Surface and the New Orchestrator](../02-unified-build-and-orchestrator/readme.md) by wiring Instructions and Knowledge together in the single Build view.

## Prerequisites

- A Copilot Studio environment where you can create agents (a Power Platform environment with the maker role).
- GitHub Copilot agents available in the environment: open [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com), go to **Agents**, and confirm that the **New agent** menu offers **Agent** with the **GitHub Copilot** badge. This is the only setup step; everything after it is building.
- A short product or pricing document to use as knowledge. If you do not have one, use the sample content in Exercise 3.

## Exercise 1: Create the agent from a description

A GitHub Copilot agent is natural-language-first. Instead of authoring topics and trigger phrases, you describe the agent's job in plain language and the orchestration runtime works from that description, which you then refine. This is the fastest way to a working agent, and it is the clearest way to feel how a GitHub Copilot agent differs from a Standard agent.

1. In the side pane, select **Agents**, open the arrow next to **New agent**, and under **Optimize your business processes** select **Agent** with the **GitHub Copilot** badge. The **Home** page offers the same agent as a card labelled **Agent** with the **GitHub Copilot** badge.
2. The agent opens on the **Build** tab with the name **Untitled Agent** selected. Enter `Northwind Sales Assistant`; the field takes at most 30 characters.
3. In the **Instructions** editor in the middle of the page, paste the following, then select the **Save** icon in the top bar (tooltip "Save (Ctrl+S)"):

```text
You are the Northwind Sales Assistant. You help Northwind Traders sellers prepare for customer calls by answering questions about our products, pricing, standard lead times, and account tiers. Keep answers short, factual, and professional, and cite the source you used.
```

4. Look at the tabs across the top and the panel on the right of the **Build** tab.

Expected: a toast confirms "Your agent has been saved.", and the top tabs read Build, Preview, Evaluate, and Monitor; Evaluate and Monitor stay disabled until the first save. The right panel lists **Model**, **Channels**, **Skills**, **Tools**, **Knowledge**, **Connected agents** and a **Memory** switch. Knowledge already holds **Search all websites**, which every new agent gets, and you authored zero topics.

![A Standard agent lists Topics, Knowledge, Actions and Settings down the left, while a GitHub Copilot agent shows Build, Preview, Evaluate and Monitor tabs across the top with Instructions filled and Knowledge, Tools and Skills empty on the Build tab.](../pptx/images/01-02-telling-experiences-apart.svg)

> **Note:** If the agent shows Topics, Knowledge, Tools, and Settings, you created a Standard agent. Open the **New agent** menu again, select **Agent** with the **GitHub Copilot** badge, and create the agent again.

## Exercise 2: Shape behavior with Instructions

In a GitHub Copilot agent, Instructions replace the topic logic of a Standard agent. They are the always-in-context brief the orchestration runtime reasons against on every turn, so a tight instruction block is the single biggest lever on answer quality. You will replace the description from Exercise 1 with a sharper version that sets scope, tone, and guardrails.

1. On the **Build** tab, click into the **Instructions** editor, press Ctrl+A and then Delete to clear it.
2. Paste the following:

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

3. Select the **Save** icon.

Expected: the Instructions editor shows your saved text, and the **Save** tooltip now reads "No unsaved changes". Nothing else changed yet; you have set behavior, not knowledge.

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

1. On the **Build** tab, select **+** next to **Knowledge** in the right panel. The **Add knowledge** dialog opens with a drop zone, **Drag and drop or click to upload**, above the sources **Public websites**, **SharePoint**, **OneDrive for Business**, **Dataverse** and **Azure SQL**.
2. Drop your `northwind-products` document on the drop zone (or select **SharePoint** and point at a site that holds it). In the **Upload files** dialog, keep the name, then select **Add to agent**.
3. After a minute or two, reload the page and select the document's entry under **Knowledge**. The **Edit knowledge source** panel shows its **Status**.

Expected: the document appears under Knowledge beside **Search all websites**, and its status moves from **In progress** to **Ready**; the status refreshes only after a page reload. The agent can now draw on it, though you have not yet confirmed that it does; that is the next exercise.

> **Note:** To ground the agent in live Microsoft 365 data (emails, files, meetings) instead of an uploaded file, add **Work IQ (Preview)** from **Tools**, on the **MCP** tab of **Add a tool**, as in [Ground an Agent in Your Work Context with Work IQ](../05-iq-grounding/demo-05-ground-with-iq.md). This demo uses a file so any learner can complete it without tenant data.

## Exercise 4: Test grounding and iterate in Preview

The Preview tab is where you see the agent behave before anyone else does. It shows the answer, the steps the agent took, and whether it stayed in scope, so it is your iteration loop. You will ask a grounded question, confirm which source it used, then push on a guardrail.

1. Open the **Preview** tab and check that **Debug mode** at the top is on.
2. Send this message:

```text
What is the standard lead time for a Tier 2 account, and what does a case of Cold Brew Concentrate cost?
```

3. Expand the step list above the answer (it starts with "Thought for N seconds" or "Ran 2 events in parallel") and look for **Used tool: Searched knowledge**.
4. Now test a guardrail by sending:

```text
Can you give me a signed contract price for 500 cases?
```

5. Read how the agent handles the out-of-scope request, then select **History** at the top of **Preview** and open this session.

Expected: the first answer states a 5 business day lead time and a 48.00 USD case price, and its step list shows **Used tool: Searched knowledge** followed by **Used skill: analyzing-docx** (or **analyzing-markdown** for a `.md` file), the built-in skill that reads the file. The second answer declines to give a binding quote, because your Exercise 2 instructions forbid contract terms. In **History**, the session transcript shows the answer with a numbered citation to `northwind-products`.

> **Tip:** In the live run, answers grounded in an uploaded file showed no citation inside **Preview**, while web results did under **Citations**. The step list and the **History** transcript are where you confirm the file was used.

## Exercise 5: Publish the agent

Publishing makes the agent available on channels such as Teams and Microsoft 365 Copilot. You do this once the Preview loop looks right, so sellers reach a version you have actually tested.

1. Select **Publish** at the top right of the agent. The dialog reads "Publish your agent to make it available." and explains under **Channels** that without a channel, triggers run the agent automatically.
2. Select **+ Add channel** to see the options **Teams + Microsoft 365**, **Demo website** and **App**, then close that dialog without adding one.
3. Select **Publish agent**.

Expected: the dialog confirms "Your agent is published" with "It isn't on any channels yet. Add a channel to make it available to people.", and the status chip next to the name changes from **Draft** to **Published**. **Add channels** in the same dialog is where you would reach sellers in Teams and Microsoft 365 Copilot.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Pages read Topics / Knowledge / Tools / Settings | You created a Standard agent | Open the **New agent** menu, select **Agent** with the **GitHub Copilot** badge, and recreate the agent |
| Answer is correct but shows no citation in **Preview** | File-grounded answers carry their citations in the **History** transcript, not in the Preview chat | Check the step list for **Used tool: Searched knowledge**, then open the session in **History** |
| The source stays **In progress** | The status refreshes only on reload | Reload the page after a minute or two and open the source again |
| Agent answers off-topic questions | Scope guardrails missing from Instructions | Re-add the "You do not" list from Exercise 2 and Save |
| Agent asks for an account name on every message | The ask-for-missing-details line is too broad | Narrow the final Style line so it asks only when the question actually needs an account or product name |

## Summary

You built the Northwind Sales Assistant: a GitHub Copilot agent created from a description, scoped with Instructions, grounded on a product document, and verified in Preview to answer a real seller question with a citation while refusing an out-of-scope request. You can now:

- Create and name a GitHub Copilot agent from natural language.
- Write scoped instructions that set behavior and guardrails.
- Ground an agent on a document and confirm in Preview and History that answers come from it.

Next, add tools and watch the orchestrator chain them across a multi-step question in [Trace an Agent's Reasoning in the New Orchestrator](../02-unified-build-and-orchestrator/demo-02-trace-agent-reasoning.md).
