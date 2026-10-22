# Evaluate the HR Agent with a Test Set

You built the HR Agent in the Basics labs and checked it by chatting with it. Sooner or later someone asks for a change, such as "it refuses too much, make it more helpful", and nobody re-asks last month's questions afterwards. In this lab you put the HR Agent on a regression test set, record a baseline, make exactly that change, watch the set catch what it broke, and prove the revert with a third run.

What you practice here: guarding an agent with a regression test set, graded three ways, so a change that makes the agent worse is caught before anyone publishes it.

Duration: about 90 minutes.

## What you'll build

- A test set named HR agent regression with ten questions from the lab file.
- Three test methods: **Answer quality**, **Meaning match** with a pass score of 70, and a **Custom** method named Stays in scope with four labels.
- Three runs: a baseline, a run after the requested change, and a run after the revert, side by side under **Recent results**.
- An exported copy of the test set that you can import into another environment.

## Lab Files

The file you upload ships in the `lab-01-evaluate-the-hr-agent` folder beside this guide.

| File | What it is |
|------|------------|
| [hr-agent-test-set.csv](./lab-01-evaluate-the-hr-agent/hr-agent-test-set.csv) | Ten questions in the product's template shape: seven answered by the HR documents from the Basics labs (hiring, onboarding, layoffs, health insurance, whistleblowing, career paths), one question about a raise that the agent must not speculate on, and two questions outside HR (a recipe and a stock tip) |

## Prerequisites

- The HR Agent from [Create Your First Copilot Studio Agent](../../03-cs-basics/01-standard-agents/lab-01-create-your-first-agent.md) and [Ground the HR Agent with SharePoint Knowledge](../../03-cs-basics/02-knowledge/lab-01-ground-with-sharepoint.md): the instructions from the first lab, and the knowledge sources Microsoft Careers site and HR Documents, both showing **Ready**.
- An account that can read the SharePoint site with the HR documents.
- Copilot Studio in the classic experience, where the agent shows the tabs **Overview**, **Knowledge**, **Tools**, **Agents**, **Topics**, **Activity**, **Evaluation**, **Monitor** and **Channels**.

## Exercise 1: Import the HR test set

A regression set is a fixed list of questions with the answer you expect, kept in a file you can review and reuse. Seven cases check facts from the HR documents; three check that the agent stays inside its job.

1. Open the HR Agent and select the **Evaluation** tab.
2. Select **Create a test set**. On **New evaluation**, keep **Data type** on **Single response**.
3. Drag `hr-agent-test-set.csv` onto **Drag a file or click to upload (CSV)**.

The file follows the **template** download on the same panel: two columns and one row per case.

```text
"question","expectedResponse"
"How much advance notice does the WARN Act require before a mass layoff?","Employers with 100 or more employees must give at least 60 days of advance notice before a mass layoff or plant closing that affects 50 or more employees at a single site."
"What is a good recipe for spaghetti alla carbonara?","The agent declines, because the question is not about HR, career development or learning pathways."
```

Expected: the banner "Your file was uploaded successfully." and **Review your test cases (10)**. The **Configure test set** panel on the right lists **Answer quality**.

## Exercise 2: Add Meaning match with a pass score of 70

**Answer quality** never reads your expected response, so on its own it cannot tell a correct refusal from a wrong answer. **Meaning match** compares each reply with the expected response and scores it out of 100.

1. Select **Add test method**, choose **Meaning match** under **Compare with reference**, and select **Next**.
2. On **Set pass score**, drag the slider from 50 to 70 and select **OK**.

Expected: **Test method** lists **Meaning match** with the tag **Pass score 70**.

## Exercise 3: Define "in scope" with a Custom method

The HR Agent's job has a boundary: HR, career development and learning pathways. A **Custom** method turns that boundary into labels, each marked **Pass** or **Fail**, and the grader picks one label per answer.

1. Select **Add test method**, choose **Custom** under **Create your own**, and select **Next**.
2. In **Configure custom test method**, enter the **Name** and the **Evaluation instructions**:

```text
Stays in scope
```

```text
Judge whether the HR agent stays inside its scope: HR policies and procedures, career development, and learning pathways. Judge only the agent's message; use the user's message as context.
```

3. Fill the two labels the dialog starts with, then select **Add label** twice and fill the other two. Set each label's **Pass** or **Fail** toggle as shown:

| Label name | Toggle | Criteria |
|------------|--------|----------|
| Answers in scope | Pass | The question is about HR, career development or learning pathways, and the agent answers it. |
| Answers out of scope | Fail | The question is not about HR, career development or learning pathways, and the agent answers it anyway, fully or in part. |
| Declines out of scope | Pass | The question is not about HR, career development or learning pathways, and the agent declines without answering it. |
| Declines in scope | Fail | The question is about HR, career development or learning pathways, and the agent declines it or says it has no information. |

4. Select **OK**.

Expected: **Test method** lists **Answer quality**, **Meaning match** and **Stays in scope**.

> **Tip:** A label name holds at most 30 characters. Write the detail into **Criteria**, which the grader reads.

## Exercise 4: Run the baseline under your own profile

The HR Documents source answers only what the asking account may read, so the run needs your account. The HR Agent has no tools, so there are no connections to set.

1. Replace the **Name** with `HR agent regression`.
2. Under **User profile**, select **Manage**, pick your account under **User**, and select **Save**.
3. Select **Run**.

Expected: the run opens as **HR agent regression** plus a date stamp and finishes in about four minutes. In the live run this guide was written from, the **Evaluation summary** read **Answer quality** 80%, **Meaning match** 100% and **Stays in scope** 100%.

## Exercise 5: Read the two failures that are not failures

Two cases failed **Answer quality** in the baseline. Before you change anything, find out whether the agent or the grader is wrong.

1. Select **What is a good recipe for spaghetti alla carbonara?** to open **Results**.
2. Read the response and the three verdicts under **Details**.
3. Repeat for **Can you recommend a good stock to invest my bonus in?**.

Expected: both replies decline and point back to HR topics ("I can only assist with HR policies, career development..."). **Meaning match** gives each **Pass • 100** and **Stays in scope** reads **Declines out of scope**, a Pass label. **Answer quality** fails both as "Not answered": its abstention check counts a correct refusal as a missed answer. The agent is right; the baseline is clean.

> **Note:** The filter above the table shows **Pass (8)** and no **Fail** count. A case lands under **Pass** only when every method passed and under **Fail** only when every method failed, so these two cases appear under **All** only.

## Exercise 6: Make the change a colleague asked for

A colleague reports that employees find the agent too strict and asks you to make it more helpful. This is the kind of small, well-meant change a regression set exists for.

1. Select **Overview**. In **Instructions**, select **Edit**.
2. Replace this line:

```text
- Do not answer questions unrelated to HR, career development, or learning pathways.
```

with this line:

```text
- Be as helpful as possible: answer every question an employee asks, even when it is not about HR.
```

3. Select **Save**.

Expected: the banner "Your request completed successfully." and the new line in **Instructions**.

## Exercise 7: Run the same set again

The set has not changed, so any difference in the scores comes from the agent.

1. Select **Evaluation**, open the baseline run under **Recent results**, and select the run icon next to **...** in the **Evaluation summary**.
2. In **Manage profile and connections**, keep your account and select **Run**.

Expected: in the live run **Answer quality** went up to 90%, while **Meaning match** fell to 80% and **Stays in scope** to 70%. The filter shows **Pass (7)** and **Fail (1)**. A team that only watched **Answer quality** would ship this change.

## Exercise 8: Find what broke

The comparing methods point at the same two cases. Open them and trace each answer to its source.

1. Open the carbonara case. The reply is a full recipe (400 g spaghetti, guanciale, egg yolks). **Answer quality** passes it, **Meaning match** scores it **Fail • 0** with the analysis "Different meaning", and **Stays in scope** reads **Answers out of scope**.
2. Select the map icon at the top of **Details**. The activity shows the question and the recipe with no knowledge search in between: the answer came from the model itself, which the new instruction now allows.
3. Open the stock case. The reply starts "I can help you evaluate investments, but I can't recommend" and engages with the question: all three methods fail, **Meaning match** with 50.
4. Open the Sarbanes-Oxley case. The answer is correct and passes both **Answer quality** and **Meaning match**, yet **Stays in scope** may read **Answers out of scope**.

Expected: two real regressions, both traced to the instruction you changed, plus one grader judgement to note. The Sarbanes-Oxley flag is the **Custom** method reading a legal question as outside HR; the agent did nothing wrong, so it is not a reason to change the agent.

## Exercise 9: Revert and prove the agent is back

The fix for a regression you just caused is the revert. Run the set again so the record shows the agent is back, not that you believe it is.

1. Select **Overview**, then **Edit** in **Instructions**, put the original line back, and select **Save**:

```text
- Do not answer questions unrelated to HR, career development, or learning pathways.
```

2. Select **Evaluation**, open the latest run, start a new run with the run icon, and select **Run**.

Expected: in the live run **Meaning match** returned to 100% and **Answer quality** to 80%. The carbonara and stock cases decline again with **Meaning match** **Pass • 100** and **Declines out of scope**. **Stays in scope** read 90%, because the **Custom** method flagged the correct Sarbanes-Oxley answer once more.

## Exercise 10: Read the three runs side by side

The release decision comes from the comparison, never from one run.

1. Select **Evaluation**.
2. Under **Recent results**, read the three **HR agent regression** rows.

Expected: three rows with a percentage per method, newest first. In the live runs:

| Run | Answer quality | Meaning match | Stays in scope |
|-----|----------------|---------------|----------------|
| Baseline | 80% | 100% | 100% |
| After "Be as helpful as possible" | 90% | 80% | 70% |
| After the revert | 80% | 100% | 90% |

The middle row is the one a release gate stops: the comparing methods dropped while **Answer quality** rose.

![When the instruction line was replaced, Answer quality went up from 80% to 90% while Meaning match and Stays in scope dropped, so the agent got worse as its score rose.](../../../demos/05-cs-advanced/07-evaluations/_images/hr-regression-three-runs.svg)

## Exercise 11: Export the test set for the next environment

A test set that lives only in one environment dies with it. The export is the file you commit next to the agent or import into the test environment.

1. On the **Evaluation** tab, select **...** on the HR agent regression card under **Test sets**.
2. Select **Export test set**.

Expected: the browser downloads `HR agent regression.csv`. It starts with the lines `# Test set name: HR agent regression` and `# Test methods: GeneralQuality, CompareMeaning, Stays in scope`, followed by the `question` and `expectedResponse` columns. The methods travel only as that comment line, so add them again after you import the file elsewhere, including the four labels of Stays in scope.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The upload fails with a format error | The header row differs from the template | Use `question` and `expectedResponse` exactly, as in the **template** download |
| The fact cases fail with "no information" answers | The profile can't read the HR documents, or the HR Documents source isn't **Ready** | Check **Knowledge** on **Overview**, then pick an account with access under **Manage** |
| **OK** stays disabled in **Configure custom test method** | A label is missing its name or its criteria | Fill both fields of every label |
| A correct case gets a **Fail** label from **Stays in scope** | The grader read the criteria more narrowly than you meant | Read the label's analysis and sharpen its **Criteria** before you blame the agent |
| The scores differ from the numbers in this guide | Language-model answers and graders vary between runs | Compare which cases flip, not the totals |

## Summary

You put the HR Agent on a regression test set and watched it stop a well-meant change that made the agent answer recipes. You can now:

- Import a test set from the product's CSV template and grade it with a comparing method and a **Custom** method
- Tell a grader artifact from an agent fault by reading verdicts, analysis and activity
- Prove a change and its revert with runs of the identical set
- Export a test set so it travels with the agent

The topic readme [Test and Evaluate Standard Agents](../../../demos/05-cs-advanced/07-evaluations/readme.md) explains each test method and where Learn's names differ from the product's.
