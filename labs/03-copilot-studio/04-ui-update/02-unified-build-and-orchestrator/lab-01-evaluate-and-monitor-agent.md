# Build, Evaluate, and Monitor a Northwind Sales Assistant

Sellers do not trust an assistant because it answered one demo question well; they trust it because it answers the same questions the same way, every time, across a whole territory. The only way a maker earns that trust is to stop testing by hand and start scoring the agent against a fixed set of questions with objective graders, then watch the real runs to confirm the agent behaved as scored. In this lab you take a Northwind Sales Assistant across all four tabs of the new experience: you compose it on **Build**, smoke-test it on **Preview**, score it with a grader-backed test set on **Evaluate**, and review its runs on **Monitor**.

The scenario company is Northwind Traders, a wholesale distributor whose sellers each manage dozens of accounts. Your deliverable is a scored, tuned evaluation: a Northwind Sales Assistant with a named five-case test set, graders attached to each case, a first evaluation run with a baseline score, a targeted fix, and a second run that proves the fix, all reviewed on the Monitor tab. This lab deliberately stays inside the four tabs and does not add MCP servers, workflows, or uploaded skills; those live in the workflows and skills topics. Each exercise feeds the next: the Instructions and Knowledge you set shape the answers, the test set measures them, the score sends you back to Instructions, and Monitor confirms what actually ran.

## What you'll build

- A Northwind Sales Assistant composed on the **Build** tab from a description, scoped Instructions, one Knowledge source, and one Tool.
- A five-case test set on the **Evaluate** tab, each case carrying an expected response and a grader (test method).
- A baseline evaluation run with an aggregate quality score and a per-case scorecard.
- A targeted Instructions fix driven by a failing case, and a second run that shows the score move.
- A run review on the **Monitor** tab that confirms which knowledge and tools each answer actually used.

## Prerequisites

- A Copilot Studio environment where you can create agents (a Power Platform environment with the maker role), with the new experience turned on: open [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com), confirm the **New experience** toggle at the top right is on, and note that agent evaluation is a preview feature. This is the only setup step; everything after it is building.

## Exercise 1: Create the agent and confirm the four-tab surface

The new experience is natural-language-first: instead of authoring topics, you describe the agent's job in a sentence and Copilot Studio generates a starting configuration you then refine. Creating the agent this way is also the fastest way to see the four tabs you will work across in this lab, because they only appear once a new-type agent exists. Confirming the tabs now saves you from discovering an hour in that you built a classic agent that has no Evaluate tab at all.

1. On the Copilot Studio home page, select **Create**, then **New agent**.
2. In the description box, paste the following:

```text
You are the Northwind Sales Assistant. You help Northwind Traders sellers answer questions about products, pricing, standard lead times, and account tiers, and you always cite the source you drew each fact from.
```

3. Select **Continue**, set the agent name to Northwind Sales Assistant, then finish creation.
4. When the agent opens, read the tabs across the top: **Build**, **Preview**, **Evaluate**, and **Monitor**.

Expected: the agent opens on the **Build** tab, and the top tabs read Build, Preview, Evaluate, and Monitor. The components panel shows **Instructions** already seeded from your description, plus empty **Knowledge**, **Tools**, and **Skills**. You authored zero topics.

> **Note:** If the tabs read Topics, Knowledge, Actions, and Settings, you are in the classic experience, which has no Evaluate tab. Return to the home page, turn on the **New experience** toggle, and create the agent again; a new-experience agent cannot be converted from classic.

## Exercise 2: Scope the Instructions

Instructions are the always-in-context brief the enhanced orchestration runtime reasons against on every turn, so a tight, itemized block is the single biggest lever on answer quality and the thing your test set will measure. You will replace the auto-generated text with a sharper version that sets scope and a hard rule (cite the source), because that rule is exactly what a grader can later score as pass or fail.

1. On the **Build** tab, open the **Instructions** component.
2. Replace the contents with the following:

```text
Role: You are the Northwind Sales Assistant, an internal helper for Northwind Traders sellers.

You do:
- Answer questions about Northwind products, pricing, standard lead times, and account tiers.
- Cite the knowledge source you drew each fact from, in every answer.
- Keep answers concise and professional.

You do not:
- Give binding price quotes, contract terms, or legal advice.
- Invent facts; if the answer is not in your knowledge, say you do not have it.
- Answer questions unrelated to Northwind sales.
```

3. Select **Save**.

Expected: the **Instructions** component shows your saved text. Nothing else has changed yet; you have set behavior, not knowledge, so the agent still cannot cite a single Northwind fact.

> **Tip:** Write instructions as short "You do / You do not" lists rather than one long paragraph. The runtime follows scoped, itemized guardrails far more reliably, and the "cite the source" line is what makes the citation grader in Exercise 7 meaningful.

## Exercise 3: Ground the agent with a Knowledge source

An agent with no knowledge answers from the general model and cannot cite a single Northwind fact, which means every quality grader would fail it. Adding a **Knowledge** source grounds answers in your content and lets the agent show where each fact came from, giving your test set something real to score against. One combined reference document is enough for this lab because the goal here is evaluation, not multi-source chaining.

First, create a file named `northwind-reference.md` (or a Word document) with exactly this content:

```text
# Northwind Traders - Product and Account Reference

## Account tiers and standard lead times
- Tier 1 (strategic): 3 business days, priority support.
- Tier 2 (growth): 5 business days, standard support.
- Tier 3 (transactional): 10 business days, standard support.

## Selected products
- NWT Cold Brew Concentrate (SKU CB-100): case of 12, list price 48.00 USD.
- NWT Organic Green Tea (SKU GT-220): case of 24, list price 62.00 USD.
- NWT Dark Roast Beans (SKU DR-330): 5 kg bag, list price 74.00 USD.

## Accounts
- Alfreds Futterkiste (Tier 1): region North.
- Around the Horn (Tier 2): region North.
- Blauer See Delikatessen (Tier 3): region South.
```

1. On the **Build** tab, open the **Knowledge** component and select **Add knowledge**.
2. Choose to upload a file, then select your `northwind-reference` document.
3. Wait until the source status shows it has finished processing.

Expected: the document appears under **Knowledge** with a status indicating it is ready. The agent can now draw tier lead times, product prices, and account tiers from it, which is exactly what your test cases will check.

> **Note:** To ground the agent in live Microsoft 365 data such as emails and files, you would add Microsoft IQ from this same **Knowledge** component. This lab uses one uploaded file so any learner can complete it and so the expected answers stay fixed for scoring.

## Exercise 4: Add a Tool so a grader has an action to check

A **Tool** lets the agent act on a real system instead of only talking about one, and adding a single tool now gives you a concrete capability that a Tool-use grader can later confirm the agent reached for. You will add one connector action and a clear "call it when" description, because the orchestrator picks tools by matching a request against that description. Keep it to one tool; this lab is about measuring behavior, not wiring integrations.

1. On the **Build** tab, open the **Tools** component and select **Add a tool**.
2. Select the Office 365 Outlook connector and pick the **Send an email** action.
3. Complete the connection sign-in the connector requires.
4. In the tool description, paste the following:

```text
Use this action only when a seller explicitly asks to send an email and has given a recipient, subject, and body. Do not use it to answer product, pricing, or account questions.
```

5. Select **Save**.

Expected: the Office 365 Outlook **Send an email** action appears in the **Tools** list with your description. The agent now has one action available, and its scoped description means a plain product question should not trigger it, which is a behavior you will grade in Exercise 7.

## Exercise 5: Smoke-test on the Preview tab

Before you score anything, you need to confirm the agent is grounded and answering, because an evaluation run against a broken agent just produces noise. **Preview** is the live test surface where you talk to the agent and watch it apply instructions and knowledge in real time. This is a quick readiness check, not the measurement; the measurement is the whole point of the Evaluate tab and starts in the next exercise.

1. Open the **Preview** tab.
2. Send this message:

```text
What is the standard lead time for a Tier 2 account, and what does a case of Organic Green Tea cost?
```

3. Read the answer and confirm it cites the knowledge source.

Expected: **Preview** answers that a Tier 2 account has a 5 business day standard lead time and that a case of NWT Organic Green Tea (GT-220) lists at 62.00 USD, with a citation back to your `northwind-reference` source. If both facts are correct and cited, the agent is ready to evaluate; if not, fix Instructions or wait for Knowledge to finish processing before continuing.

## Exercise 6: Create a test set on the Evaluate tab

Hand-testing one question at a time cannot tell you whether the agent is reliable across everything sellers ask, and it cannot prove a later change did not break something that used to work. The **Evaluate** tab solves both problems with a test set: a named group of test cases, each a question with an optional expected response, that you can run again and again to get an aggregate score and per-case detail. In this exercise you create the test set and write its cases by hand so you control exactly what "correct" means.

1. Open the **Evaluate** tab.
2. Select **New evaluation**, then choose **Or, write some questions yourself**.
3. For each row below, select **Add conversations** then **Write**, paste the question as the user message, and paste the matching expected response.

```text
Question: What is the standard lead time for a Tier 1 account?
Expected response: Tier 1 (strategic) accounts have a standard lead time of 3 business days, cited from the Northwind reference.

Question: How much does a case of NWT Cold Brew Concentrate cost?
Expected response: A case of 12 NWT Cold Brew Concentrate (CB-100) lists at 48.00 USD, cited from the Northwind reference.

Question: What tier and region is Blauer See Delikatessen?
Expected response: Blauer See Delikatessen is a Tier 3 (transactional) account in region South, cited from the Northwind reference.

Question: Can you give me a binding quote for 500 cases of Dark Roast Beans?
Expected response: The assistant declines to give a binding quote, explains that it does not provide binding price quotes or contract terms, and offers list-price information instead.

Question: What is the capital of France?
Expected response: The assistant declines because the question is unrelated to Northwind sales.
```

4. In the **Configure test set** panel, set the **Name** to Northwind quality set.
5. Select **Save** (do not run it yet).

Expected: the **Evaluate** tab lists five test cases under Northwind quality set, each showing its question and expected response, and the set is saved but not yet run. Two of the five cases (the binding quote and the capital of France) deliberately test a refusal, not a fact, so the set measures guardrails as well as grounding.

> **Tip:** Give each expected response the citation phrasing you want ("cited from the Northwind reference"), not just the bare fact. That way the grader rewards the behavior your Instructions require, not only a correct number.

## Exercise 7: Attach graders to the test cases

A test set with no grader is just a list of questions; the grader (the test method) is what turns each answer into a pass or fail. Copilot Studio offers several test methods, and picking the right one per case is the skill this exercise builds: **General quality** compares the answer against your expected response, **Tool use** checks whether the agent called (or correctly avoided) a specific tool, and **Keyword match** checks that required words appear. Choosing per case is what makes the score trustworthy rather than a single blunt average.

1. On the **Evaluate** tab, open the Northwind quality set.
2. For each case, set the **Test method** as follows:

```text
Lead time for a Tier 1 account        -> General quality
Cost of a case of Cold Brew           -> General quality
Tier and region of Blauer See         -> General quality
Binding quote for 500 cases           -> General quality (expects a refusal)
Capital of France                     -> Tool use (expects that Send an email was NOT called)
```

3. Confirm each case now shows its assigned test method.
4. Select **Save**.

Expected: each of the five cases displays its chosen test method, mixing General quality for the fact and refusal cases with a Tool-use check on the off-topic case. The set now measures three things at once: correct grounded facts, correct refusals, and correct tool restraint.

> **Note:** Test methods are the graders. General quality uses a language model to compare the response to your expected answer, so it tolerates wording differences while still catching a wrong fact or a missing refusal.

## Exercise 8: Run the baseline evaluation and read the scorecard

Running the set turns your five cases into an objective baseline: an aggregate score plus a per-case breakdown you can point at instead of arguing from a single demo. This is the moment ad-hoc testing becomes measurement, and the baseline is what every later change is compared against. Read both levels of the result: the summary score tells you overall health, and the per-case table tells you exactly which behavior to fix.

1. On the **Evaluate** tab, with Northwind quality set selected, select **Evaluate** to start the run.
2. Wait for the run to finish; a five-case set takes a few minutes.
3. Read the **Evaluation summary** (the aggregate score, duration, and test-case count).
4. In the **Test run result** table, select any failing or low case to open its transcript and see the agent's actual answer against the expected one.

Expected: the run completes and produces an aggregate score with a per-case table under **Recent results**. The three grounded-fact cases should pass, and you will likely find one guardrail case (often the binding-quote refusal or the citation requirement) scoring lower than expected, which is the failing case you fix next. If every case passes on the first run, tighten one expected response to require the citation phrase and re-run so there is a failure to work with.

## Exercise 9: Tune from the failing case and re-run

A score is only useful if it drives a change, so this exercise closes the loop: read the failing case, make one targeted Instructions edit, and re-run the same set to prove the fix moved the number. Changing one thing at a time is deliberate; if you edit three things and the score rises, you cannot say which edit helped. The same test set run twice is what makes the before-and-after comparison honest.

1. Open the failing case from Exercise 8 and read why it failed (for example the answer gave a quote instead of refusing, or omitted the citation).
2. On the **Build** tab, open **Instructions** and sharpen the relevant line. For a missed refusal or missing citation, add:

```text
- When asked for a binding quote or contract terms, refuse and offer list-price information from the Northwind reference instead.
- Begin every factual answer by naming the knowledge source, for example "From the Northwind reference:".
```

3. Select **Save**.
4. Return to the **Evaluate** tab, select Northwind quality set, and under **Recent results** choose **Evaluate test set again**.
5. When the second run finishes, compare its aggregate score and the previously failing case against the first run.

Expected: the second run is saved as a separate result next to the first, the previously failing case now passes, and the aggregate score is higher than the baseline. You can point to two runs of the identical set as objective proof that the Instructions change improved quality without breaking the passing cases.

> **Tip:** Language-model graders vary a few percent run to run, so treat a small score move as noise and a flipped case (fail to pass) as the real signal. If a case flickers between runs, your expected response is probably too rigid; loosen it to accept any correct phrasing.

## Exercise 10: Review the runs on the Monitor tab

Evaluate tells you whether an answer was right; **Monitor** tells you what the agent actually did to produce it, across the sessions it has handled. Reviewing runs here confirms from an independent view that a passing answer passed for the right reason (it used the Knowledge source) and that the off-topic case passed because the agent correctly did not call the Outlook tool. This is the after-the-fact view a maker uses to explain, days later, why a given answer came out the way it did.

1. Open the **Monitor** tab.
2. Locate the recent sessions, including the Preview smoke test from Exercise 5 and the evaluation runs.
3. Open the activity or transcript for the Tier 2 lead-time answer and confirm it shows a lookup against the `northwind-reference` knowledge source.
4. Open the off-topic "capital of France" turn and confirm the activity shows the agent did not call the Send an email tool.

Expected: **Monitor** lists the agent's sessions, and opening a turn shows its transcript and the resources it used. The grounded answer's activity names the Knowledge source, and the off-topic turn shows no tool call, matching the scores from the Evaluate tab and confirming the agent passed for the right reasons. You now have a scored, tuned, and independently verified Northwind Sales Assistant.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Tabs read Topics / Knowledge / Actions / Settings and there is no Evaluate tab | The agent was created in the classic experience | Return to the home page, turn on the **New experience** toggle, and recreate the agent; a new-experience agent cannot be converted from classic |
| The **Evaluate** tab is missing or **New evaluation** is greyed out | Agent evaluation is a preview feature not enabled, or the agent has not been saved | Confirm the environment has the evaluation preview available and that the agent is saved, then reopen the **Evaluate** tab |
| A grounded-fact case fails even though Preview answers correctly | The Knowledge source was still processing when the run started, or the expected response is too rigid | Confirm the source shows ready on the **Build** tab, loosen the expected response to accept correct phrasing, then re-run |
| The refusal case fails | Instructions do not explicitly tell the agent to refuse binding quotes | Add the refusal line from Exercise 9 to **Instructions**, save, and re-run the set |
| The Tool-use case fails because the agent called Send an email | The tool description is too broad, so the orchestrator matched an unrelated question | Sharpen the Step 4 tool description to "only when a seller explicitly asks to send an email", save, and re-run |
| The score changes slightly on every run with no edits | Language-model graders are non-deterministic within a few percent | Treat small moves as noise; average three runs for a baseline and act only on a case that flips pass to fail |

## Summary

You took a Northwind Sales Assistant across all four tabs of the new experience: you composed it on **Build** with Instructions, one Knowledge source, and one Tool, smoke-tested it on **Preview**, scored it against a five-case test set with graders on **Evaluate**, tuned a failing case and proved the fix with a second run, and confirmed the behavior on **Monitor**. You can now:

- Recognize what each of the four tabs is for and confirm you are in the new experience before you build.
- Compose a scoreable agent on the **Build** tab with scoped Instructions, grounded Knowledge, and a scoped Tool.
- Build a test set on the **Evaluate** tab and choose the right grader (General quality, Tool use, Keyword match) per case.
- Run a baseline evaluation, read the aggregate score and per-case scorecard, and drive a targeted fix from a failing case.
- Re-run the same set to prove a change moved the score, and review the underlying runs on the **Monitor** tab.

Next, put this reasoning under the microscope in [Trace the Agentic Reasoning Loop](../../../../demos/03-copilot-studio/04-ui-update/02-unified-build-and-orchestrator/demo-02-trace-agent-reasoning.md), then build the full assistant end to end in the capstone [Build a Sales Account Assistant in the New Experience](../04-workflows-and-mcp/lab-01-sales-account-assistant.md).
