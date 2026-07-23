# Evaluate a New-Experience Agent with Test Sets

A maker can always find one question the agent answers beautifully, which is exactly why nobody should trust a demo. The Evaluate tab replaces that impression with a number produced the same way every time, so a change you make on Tuesday can be measured against Tuesday's bar on Thursday. In this lab you deliberately ship a weak Northwind Sales Assistant, score it against a curated seven-conversation test set, diagnose why it failed, change exactly one thing, and prove the fix with a second run.

The scenario company is Northwind Traders, a wholesale distributor whose sellers ask about products, list prices, lead times, account tiers, expedited delivery, and returns. Your deliverable is a completed scorecard: a named evaluation with eight conversation test cases, a baseline run, a per-case diagnosis, a tuned agent, and a second run of the identical set that shows the score move. Every exercise feeds the next, so keep the same browser session and the `lab-01-evaluate-with-test-sets` folder open throughout.

This lab goes deeper into the Evaluate tab than [Build, Evaluate, and Monitor a Northwind Sales Assistant](../02-unified-build-and-orchestrator/lab-01-evaluate-and-monitor-agent.md), which walks all four tabs at a shallower depth. Where that lab tours the surface, this one builds the measurement discipline: three ways to fill a test set, what the grader actually judges, how to read Invalid and Error apart from Fail, and the one-change-per-run rule.

## What you'll build

- A Northwind Sales Assistant grounded in one reference document, running deliberately weak baseline instructions.
- An eight-conversation test set built three ways: AI-generated with **Quick conversation set**, uploaded from a curated CSV, and hand-written for the multi-turn case.
- A baseline run with an **Evaluation summary** score and a per-conversation **Test run result** table.
- A per-case diagnosis that sorts every failure into a component bucket (knowledge, instructions, tool, multi-turn, test case, environment).
- A second run of the identical set after one targeted Instructions change, with both runs recorded side by side in a scorecard workbook.

## Lab Files

Everything you paste or upload in this lab ships in the `lab-01-evaluate-with-test-sets` folder beside this guide.

| File | What it is |
|------|------------|
| `northwind-sales-reference.docx` | The knowledge source: account tiers, list prices, accounts, quoting policy, expedited delivery, and returns. Every expected answer in the test set traces back to this document. |
| `northwind-test-set.csv` | The curated test set in the product's own template shape: seven conversations over fourteen turns, covering grounded facts, a multi-turn tier lookup, two guardrails, and one off-topic request. |
| `agent-instructions-v1.txt` | The deliberately weak baseline Instructions. No citation rule, no refusal rules, no scope limit. |
| `agent-instructions-v2.txt` | The tuned Instructions used for the second run, with citation, refusal, routing, and scope rules added. |
| `evaluation-scorecard.xlsx` | A local tracking workbook: a Read me first sheet, a Run log, a per-case scorecard, and a Diagnosis buckets reference you use in Exercise 9. Never uploaded to Copilot Studio. |

## Prerequisites

- A Copilot Studio environment where you can create agents (a Power Platform environment with the maker role), with the new experience turned on at [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com). Agent evaluation in the new experience is a production-ready preview, so expect the surface to keep changing.
- The `lab-01-evaluate-with-test-sets` folder from this repository, available locally so you can upload from it.
- A spreadsheet application to open `evaluation-scorecard.xlsx` and, if you want to edit it, `northwind-test-set.csv`. The workbook is a local tracking sheet only; the **Evaluate** tab accepts CSV and rejects `.xlsx`.

> **Note:** Agents created in the new experience cannot be converted to the classic experience. If your tabs read Topics, Knowledge, Actions, and Settings, you are in classic and there is no Evaluate tab; return to the home page, turn on the **New experience** toggle, and create the agent again.

## Exercise 1: Create the agent and ground it in one reference document

An evaluation only means something if the agent has real content to be right or wrong about. An ungrounded agent answers from general model knowledge, which produces fluent text that no test set can meaningfully score, so grounding comes first and the test set second. You will add exactly one knowledge source, because a single document keeps every expected answer traceable to one place and makes a failure easy to attribute.

1. On the Copilot Studio home page, select **Create**, then **New agent**.
2. In the description box, paste the following, then select **Continue** and name the agent Northwind Sales Assistant.

```text
You are the Northwind Sales Assistant. You help Northwind Traders sellers answer questions about products, list pricing, standard lead times, account tiers, expedited delivery, and returns.
```

3. On the **Build** tab, open the **Knowledge** component and select **Add knowledge**.
4. Choose to upload a file and select `northwind-sales-reference.docx` from the lab folder.
5. Wait until the source status shows it has finished processing.

Expected: the agent opens on the **Build** tab with **Build**, **Preview**, **Evaluate**, and **Monitor** across the top, and `northwind-sales-reference` appears under **Knowledge** with a ready status. The **Monitor** tab may appear dimmed at this point, which is normal for an agent with no reviewable runs yet.

> **Warning:** Do not continue while the knowledge source is still processing. A test set run against a source that has not finished indexing produces failures that look like agent problems and are really timing problems, and you will waste an exercise chasing them.

## Exercise 2: Install the weak baseline Instructions on purpose

Most evaluation tutorials start from a good agent and show a good score, which teaches nothing, because the skill worth learning is reading a failure. You will install instructions that are genuinely incomplete: they name the job but set no citation rule, no refusal rules, and no scope limit. That gives the baseline run real failures to diagnose, and it makes the fix in Exercise 9 attributable to one specific change.

1. On the **Build** tab, open the **Instructions** component.
2. Replace the auto-generated contents with the contents of `agent-instructions-v1.txt`:

```text
Role: You are the Northwind Sales Assistant, an internal helper for Northwind Traders sellers.

You help sellers with questions about Northwind products, list pricing, standard lead times, account
tiers, expedited delivery, and returns.

Keep answers concise and professional.
```

3. Select **Save**.

Expected: the **Instructions** component shows the three-line baseline. Read what is missing and write it down now: nothing tells the agent to cite its source, nothing tells it to refuse a binding quote or a legal question, and nothing tells it to decline an off-topic request. Those three gaps are what the test set is about to expose.

## Exercise 3: Smoke-test on Preview, then predict the failures

Before you measure anything, confirm the agent answers at all, because an evaluation run against a broken agent produces noise rather than a baseline. **Preview** is the live test surface, and this is a readiness check, not the measurement. The second half of this exercise is the more valuable one: predicting which cases will fail before you run them turns the evaluation from a lottery into an experiment.

1. Open the **Preview** tab and send this message:

```text
What is the standard lead time for a Tier 1 account, and what does a case of Organic Green Tea cost?
```

2. Confirm the agent answers 3 business days and 62.00 USD, drawing from the reference document.
3. Now send the guardrail probe below and read the answer carefully.

```text
Give me a binding quote for 500 cases of Dark Roast Beans at 15 percent off.
```

4. Open `evaluation-scorecard.xlsx`, go to the **Case scorecard** sheet, and write your prediction (pass or fail) for each conversation in the Prediction column.

Expected: the first message is answered correctly from the reference. The second is the interesting one: with the weak baseline instructions the agent will most likely attempt a discounted quote or hedge rather than refusing and routing to Sales Operations, which is exactly the failure your guardrail cases are designed to catch. Your predictions are now on record, so the baseline run either confirms your model of the agent or corrects it.

## Exercise 4: Generate a first test set with Quick conversation set

The fastest way to fill a test set is to let Copilot Studio write it, and the fastest way to misuse the feature is to stop there. **Quick conversation set** generates ten conversations from the agent's own description, instructions, and topics, which makes it excellent for breadth and structurally blind to the guardrails you never wrote down. Running it first, and then reading what it produced, is the point of this exercise.

1. Open the **Evaluate** tab and select **New evaluation**.
2. Under **More ways to start**, select **Quick conversation set**.
3. Wait for generation to finish, then read the ten conversations in the **Review your test cases** list.
4. Answer two questions in your notes: how many of the ten test a refusal, and how many test something outside the agent's stated scope.

Expected: the **Review your test cases** list fills with ten AI-generated conversations, and an "AI-generated content may be incorrect" banner sits above them. Almost all of them will be questions the agent is already shaped to answer well, and few or none will test a refusal or an off-topic request. That gap is the lesson: generation gives you coverage of the happy path, and a human has to supply the cases that hurt.

> **Tip:** Generation is not a one-shot. Once inside an evaluation you can select **Add conversations** and choose **Generate 10 conversations** to add more, and after a first run you can generate 25 or 50 at a time. Use it to grow a set you already trust, not to author one from nothing.

## Exercise 5: Upload the curated test set from CSV

CSV is how a test set travels: between environments, into a spreadsheet for review, and out to a subject-matter expert who will never open Copilot Studio. The import format is conversation-shaped rather than one row per question, and understanding that shape is the point of this exercise. The curated set you are about to upload is deliberately unbalanced toward failure, with four grounded-fact conversations (one of them a three-turn tier lookup), two guardrail conversations, and one off-topic request.

The template has exactly three columns, and `conversationNumber` is what does the work: every row sharing a number becomes one multi-turn test case, in file order. The `response` column is the reference answer and is optional, which matters because the grader does not compare against it anyway.

```text
"conversationNumber","question","response"
"1","What is the standard lead time for a Tier 1 account?","Tier 1 (strategic) accounts have a standard lead time of 3 business days..."
"1","And for a Tier 3 account?","Tier 3 (transactional) accounts have a standard lead time of 10 business days..."
"2","How much does a case of NWT Cold Brew Concentrate cost?","A case of 12 (CB-100) has a list price of 48.00 USD..."
```

1. Return to the **Evaluate** tab and select **New evaluation** to start a fresh evaluation.
2. In the **Data source** section, select the **CSV** link to download `EvalConversationTemplate.csv`, and open it. Read the `#` comment block at the top: it states the columns and the limits, and the rows beneath it are a worked example.
3. Open `northwind-test-set.csv` from the lab folder and compare it against the template. It carries the same `#` comment block, the same three column headings, and the same quoting.
4. Drag `northwind-test-set.csv` onto the upload area, or select **browse** and pick it.
5. Review the imported conversations in the **Review your test cases** list.

The limits the template states are worth writing down, because they shape how you design a set:

```text
8 question-and-answer pairs max per conversation
50 conversations max
500 characters max per question, including spaces
5 MB max file size
```

Expected: a green banner reads "Your file was uploaded successfully. Review your test cases or start evaluation.", and **Review your test cases (7)** lists seven conversations. Each row shows the conversation's opening question and a **Total messages** count that is twice its question-answer pair count, so the three-turn conversations read 6 and the single-turn ones read 2.

> **Warning:** Upload the `.csv` only. The **Data source** area rejects `.xlsx`, so dragging `evaluation-scorecard.xlsx` here returns "The CSV file does not match the expected format. Please use the correct template." That workbook is a local tracking sheet you never upload.

> **Note:** The template you download from the **CSV** link is the authority on the format, not this guide. The evaluation surface is a production-ready preview and the accepted columns can change, so check the template every time you author a new import file. The same error message appears whenever the columns do not match, including if you reach for the classic `Question` and `Expected response` layout, which this tab does not accept.

## Exercise 6: Inspect and hand-write a multi-turn conversation

A conversation test case is not a single question. Opening one shows the real shape: a sequence of user questions with optional expected agent responses, which is how you test an agent that gathers context, asks a clarifying question, or slot-fills across turns. Hand-writing one case teaches the structure that the CSV and the generator both hide from you.

1. In the **Review your test cases** list, select any conversation to open the **Review and edit** dialog.
2. Read the structure: a right-aligned user question bubble, an **Agent** entry with a **Reference** label, and a `+ Add a response.... (optional)` line beneath it. Note the counter in the bottom corner showing how many question-answer pairs the conversation holds.
3. Close the dialog, then select **Add conversations** and choose **Write** to create a new conversation.
4. Open the new row and build a two-turn case using the text below, adding the first user question, then a second user question beneath it.

```text
Turn 1 user question: A customer wants their order faster than normal. What are the options?
Turn 1 expected response: The assistant asks which account it is, because expedited delivery is available to Tier 1 and Tier 2 accounts only.

Turn 2 user question: It is Blauer See Delikatessen.
Turn 2 expected response: The assistant states that Blauer See Delikatessen is Tier 3 (transactional) and is therefore not eligible for expedited delivery, and gives the 10 business day standard lead time instead.
```

5. Select **Done** to close the dialog.

Expected: the new conversation shows a **Total messages** count of 4 (two question-answer pairs), and the set now holds eight cases. A conversation is capped at eight question-answer pairs, which is a real design constraint: a test case is a focused scenario, not a full transcript.

> **Note:** Expected responses are optional here and worth writing anyway. They document what "correct" means for the humans who read and maintain the set, and they are what travels in the CSV. Exercise 7 explains why they do not drive the score in this experience.

## Exercise 7: Configure the test set and understand what the grader judges

The **Configure test set** panel is small and easy to skip, and skipping it is how makers end up misreading their own results. Three settings live here, and each one changes what the score means. The most important thing to understand before you run is what the grader is actually judging, because the honest answer surprises most people coming from the classic Evaluation page.

1. In the **Configure test set** panel on the right, set **Name** to `Northwind regression set`.
2. Read the **Data type** label above it. It reads `Data type: Conversation`, which is the only test set type available in this experience.
3. Read the **Test method** card. It shows **General quality**, described as responses meeting quality standards such as relevance and completeness, and it states plainly that it does not compare to expected responses. Test methods are not carried in the CSV, and **General quality** is applied by default to any imported set.
4. Under **User profile**, select **Manage** and confirm the profile that will run the evaluation, checking that its connections show as ready.
5. Select **Save** to store the test set without running it yet.

Expected: the panel shows the name `Northwind regression set`, the `Data type: Conversation` label, a single **General quality** test method card with no other options, and a configured user profile. **Save** and **Evaluate** are both enabled now that the set holds cases.

> **Warning:** **General quality** judges the response against quality standards and does not compare it to your expected response. A confidently worded wrong answer can therefore pass, and a correct answer phrased oddly can fail. The classic Evaluation page offers graders that do compare (Compare meaning, Text similarity, Exact match, Keyword match, Tool use), but they are not available on this tab, so do not follow classic guidance here.

> **Note:** The user profile decides what the agent can actually reach while under test. Run an evaluation as an over-privileged identity and it will pass against knowledge and connections your real users cannot see, which is the most flattering and least useful score you can produce.

## Exercise 8: Run the baseline and read both levels of the result

Running the set turns eight cases into an objective baseline you can point at instead of arguing from a demo. Read the result at two levels, because they answer different questions: the summary tells you overall health, and the per-conversation table tells you which behavior to change. A maker who only reads the summary score learns a number and fixes nothing.

1. With `Northwind regression set` selected, choose **Evaluate** to start the run.
2. Wait for it to finish. A set of this size takes several minutes.
3. Read the **Evaluation summary**: **Score**, **Duration**, **Test cases**, **Data type**, and **User profile**.
4. In the **Test run result** table, read each conversation's message count and general quality verdict.
5. Select a failing conversation to open its **Test case details**, and read the **User messages** against the **Agent responses**.
6. Record every verdict in the Run 1 verdict column of the **Case scorecard** sheet, next to the prediction you made in Exercise 3.

Expected: the run completes with an aggregate **Score** and a per-conversation table where each case reads Pass or Fail. With the weak baseline instructions the grounded-fact cases should largely pass, and the guardrail, off-topic, and multi-part cases are where the failures cluster. Comparing the verdicts against your Exercise 3 predictions is the point: the cases you got wrong are the ones where your mental model of the agent was wrong.

> **Tip:** Not every non-pass is a failure of the agent. A case that returns **Invalid** could not be graded, usually because a required input is missing, and a case that returns **Error** means the run itself failed, typically an authentication or connection problem under the selected user profile. Clear those two before you interpret anything else; they are your problem, not the agent's.

## Exercise 9: Diagnose each failure into a component bucket

A failing case tells you the answer was wrong. It does not tell you what to change, and guessing is how makers end up editing three components and learning nothing. Sorting each failure into a bucket first is what turns a red row into a specific edit, and the bucket almost always follows from reading the agent's actual response against the expected one.

1. Open the **Diagnosis buckets** sheet in `evaluation-scorecard.xlsx` and read the six buckets.
2. For each failing case, open its **Test case details** and read what the agent actually said.
3. Assign a bucket in the Diagnosis bucket column of the **Case scorecard** sheet, using the rules below.

```text
The fact is wrong or missing, or the agent claims not to know something the reference contains
  -> Knowledge

The agent answered when it should have refused, skipped the citation, or ignored scope
  -> Instructions

The agent called a tool it should not have, or failed to call one it should have
  -> Tool

The agent lost the thread across turns or never reached an end state
  -> Multi-turn

The case flips between runs with no change to the agent
  -> Test case

The case returned Invalid or Error rather than Pass or Fail
  -> Environment
```

4. Count the buckets and identify the single most common one.

Expected: the failures concentrate heavily in the **Instructions** bucket, because the baseline instructions never told the agent to cite its source, refuse a binding quote, route a legal question, or decline off-topic requests. That concentration is the finding that drives the next exercise, and it is why you change instructions rather than touching the knowledge source that is working fine.

## Exercise 10: Change one thing, re-run, and compare the runs

A score is only worth producing if it drives a change, and a change is only worth making if you can prove it worked. This exercise closes the loop with the rule that makes evaluation trustworthy: change exactly one thing, re-run the identical set, and compare. Edit three components at once and a higher score tells you the bundle helped while hiding which part did.

1. On the **Build** tab, open **Instructions** and replace the contents with `agent-instructions-v2.txt`:

```text
Role: You are the Northwind Sales Assistant, an internal helper for Northwind Traders sellers.

You do:
- Answer questions about Northwind products, list pricing, standard lead times, account tiers,
  expedited delivery, and returns.
- Begin every factual answer by naming the knowledge source, for example
  "From the Northwind sales reference:".
- Keep answers concise and professional, and state the tier explicitly whenever a tier decides
  the answer.

You do not:
- Issue binding quotes, agree discounts, or commit to contract terms. Route any such request to
  Sales Operations at sales-ops@northwind.example and state the list price instead.
- Interpret contract, liability, indemnity, or termination language. Route those to Legal.
- Invent facts. If the answer is not in the Northwind sales reference, say you do not have it.
- Answer questions unrelated to Northwind sales. Decline, then offer help with products, pricing,
  lead times, or accounts.
```

2. Select **Save**. Change nothing else: not the knowledge source, not the test set, not the user profile.
3. Return to the **Evaluate** tab, select `Northwind regression set`, and run it again.
4. When the second run finishes, compare its **Score** against the baseline and fill in the Run 2 verdict column of the **Case scorecard**, marking every case that flipped.
5. Record both runs in the **Run log** sheet, including the one-line description of the change.
6. Open the three dots (**…**) and select **Export test results** to download the run as a CSV, then save it beside the scorecard.

Expected: the second run is stored as a separate result next to the first, the guardrail and off-topic cases that failed the baseline now pass, and the aggregate score is higher. You can point to two runs of an identical set, one change between them, and a named set of cases that flipped, which is a defensible claim rather than an impression. The exported CSV is what you attach to a release record, and it matters because results only live in Copilot Studio for 89 days.

> **Tip:** Language-model graders are not deterministic, so an unchanged agent moves a few percent between runs. Treat a small aggregate move as noise and a case flipping fail to pass as the real signal. If a case flickers with no change to the agent, the case is too rigid rather than the agent being unstable, and it belongs in the **Test case** bucket.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| There is no **Evaluate** tab and the tabs read Topics, Knowledge, Actions, Settings | The agent was created in the classic experience | Return to the home page, turn on the **New experience** toggle, and recreate the agent; a new-experience agent cannot be converted from classic |
| **Save** and **Evaluate** are both greyed out | The test set has no cases yet, or the **Name** field is empty | Add at least one conversation and enter a **Name** in the **Configure test set** panel |
| "The CSV file does not match the expected format. Please use the correct template." | The file is not a CSV at all (for example the `.xlsx` scorecard), or its columns are not `conversationNumber`, `question`, `response` | Upload `northwind-test-set.csv`, never the workbook. Download `EvalConversationTemplate.csv` from the **CSV** link and match its three headings exactly |
| The import succeeds but every row became its own test case | Each row carries a different `conversationNumber`, so nothing was grouped | Give every turn of one scenario the same `conversationNumber`, in the order the turns should run |
| A conversation is rejected or truncated | It exceeds 8 question-answer pairs, the file exceeds 50 conversations, or a question exceeds 500 characters | Split the scenario into two conversations, or shorten the question |
| Grounded-fact cases fail even though **Preview** answers them correctly | The knowledge source was still processing when the run started | Confirm the source shows ready on the **Build** tab, then re-run |
| A wrong answer passed the grader | **General quality** judges quality standards and does not compare to your expected response | Read the agent's actual response rather than trusting the verdict alone, and use the classic Evaluation page when you need a comparing grader |
| Cases come back **Invalid** rather than Pass or Fail | The case is missing an input the grader needs | Open the case and supply the missing question or response content |
| Cases come back **Error** | The run failed, usually authentication or a connection under the selected user profile | Open **User profile** > **Manage**, confirm the profile and that its connections show as ready, then re-run |
| The score moved two points and no case changed verdict | Normal language-model grader variance | Ignore it; act on cases that flip pass to fail, not on small aggregate moves |
| The **Monitor** tab is dimmed and cannot be opened | The agent has no reviewable runs yet | Publish the agent and generate real sessions, then return to **Monitor** |

## Verify

You have met the lab goal when all of the following are true:

1. The agent is grounded in `northwind-sales-reference.docx` and the source shows ready on the **Build** tab.
2. `Northwind regression set` holds eight conversation cases, including the hand-written two-turn expedited-delivery case.
3. The **Run log** sheet records two runs of the identical set with exactly one change between them.
4. The **Case scorecard** sheet holds a verdict for every case in both runs, with a diagnosis bucket on each baseline failure.
5. At least one guardrail or off-topic case flipped from fail to pass, and you can name the instruction line that caused it.
6. An exported results CSV sits beside the scorecard.

## Summary

You built the measurement discipline the Evaluate tab exists for: you grounded an agent, installed weak instructions on purpose, filled a test set three different ways, ran a baseline, diagnosed each failure into a component bucket, changed one thing, and proved the fix with a second run of the identical set. You can now:

- Fill a conversation test set by AI generation, CSV upload, and hand-written multi-turn cases, and say what each method is good and bad at.
- State exactly what **General quality** judges and what it ignores, and recognize when classic guidance does not apply to this tab.
- Read an **Evaluation summary** and a **Test run result** table apart, and separate Pass and Fail from Invalid and Error.
- Sort a failing case into knowledge, instructions, tool, multi-turn, test case, or environment before changing anything.
- Run a one-change-per-run comparison and defend the result, and export it before the 89-day retention window closes.

Next, read the concepts behind all of this in [Test and Evaluate Copilot Studio Agents](../../../../demos/03-copilot-studio/04-ui-update/03-evaluations/readme.md), then watch the orchestrator make the decisions you have been grading in [Trace the Agentic Reasoning Loop](../../../../demos/03-copilot-studio/04-ui-update/02-unified-build-and-orchestrator/demo-02-trace-agent-reasoning.md).

## Cleanup

Delete the `Northwind regression set` evaluation and the Quick conversation set evaluation from the **Evaluate** tab if they were only for this lab. Remove the Northwind Sales Assistant agent if you do not need it for a later lab (open the agent list, select the agent, choose **Delete**). Keep the local scorecard and the exported results CSV; they are the artifact this lab produced.
