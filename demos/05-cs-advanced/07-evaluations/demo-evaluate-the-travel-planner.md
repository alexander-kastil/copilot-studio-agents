# Find the Wrong Answer Behind a Passing Score

![The Travel planner routing test set, graded by Answer quality and Meaning match and run twice, splits into two failing cases: the canteen answer is an agent problem fixed by turning off Web Search, and the refund-claim card is a test-case problem that stays in the set.](./_images/evaluate-the-travel-planner-overview.svg)

CS-Business Travel Planner routes every travel question to a specialist, and in the multi-agent demo each route looked right when you tried it once. One try does not tell you what happens on the next run, or which answers came from a specialist and which from the open web. In this demo you put the planner on a routing test set, catch an answer that one grader passed and another failed, trace it to the setting that caused it, and prove the fix with two more runs.

What you practice here: grading an orchestrated agent with a test set, reading each case's route and activity, and separating an agent problem from a test-case problem before you change anything.

Duration: about 50 minutes.

## What you'll build

- A test set named Travel planner routing with seven questions: one per specialist, one per child agent and one that no agent owns.
- Two test methods on the set: **Answer quality** and **Meaning match** with a pass score of 50.
- A baseline run, a second run of the unchanged agent, and two runs after one fix, all listed under **Recent results**.
- A diagnosis for each failing case: one agent problem you fix, one test-case problem you leave in place on purpose.

## Prerequisites

- CS-Business Travel Planner from [Connect Your Travel Specialists Behind One Front Door](../03-multi-agent/demo-business-travel-planner.md), with its three connected agents published and **Web Search** on (the default for a new agent).
- The companion file [travel-planner-test-set.csv](./demo-evaluate-the-travel-planner/travel-planner-test-set.csv) on your machine.
- Copilot Studio in the classic experience, where the agent shows the tabs **Overview**, **Knowledge**, **Tools**, **Agents**, **Topics**, **Activity**, **Evaluation**, **Monitor** and **Channels**.

## Exercise 1: Import the routing test set

The test set is a file you can review in Excel and move between environments, so it starts as a CSV. Each row is one question and the answer you expect; the expected response is what **Meaning match** compares against later.

1. Open CS-Business Travel Planner and select the **Evaluation** tab.
2. Select **Create a test set**. On **New evaluation**, keep **Data type** on **Single response**.
3. Drag `travel-planner-test-set.csv` onto **Drag a file or click to upload (CSV)**.

The file uses the two columns of the product's own template (the **template** link on the same panel):

```text
"question","expectedResponse"
"I need to get from Vienna to Budapest on May 12 for two colleagues. Can you book it, and what can we see there in the evening?","The trip is booked by CS-Travel Agent, which first asks for the destination, the travel date and the number of travelers."
"What can I see in Budapest in the evening after my meetings?","Evening tips for Budapest such as the Castle District and a Danube cruise."
"I'm 42, male, and I have a mild cold with a sore throat. Should I still travel to Budapest tomorrow?","CS-Health Advisor asks about the symptoms and gives a first advice on whether the trip is reasonable."
"What is the official daily allowance for a business trip within Austria?","The tax-free daily allowance for a business trip within Austria is 30 euros per 24 hours, or 2.50 euros for each commenced hour."
"I want to claim a refund for my train ticket to Budapest.","CS-Travel Expense Refund takes the refund claim and asks for the claim details."
"Is there a gym I can use for free in Budapest after work?","Employees can use the No Pain - No Gain gym in Budapest for free, with up to three free one-day passes."
"What is on the canteen menu today?","The planner has no access to the canteen menu and says so."
```

Expected: the banner "Your file was uploaded successfully." and **Review your test cases (7)** with every question next to its expected response. The **Configure test set** panel on the right already lists **Answer quality**.

## Exercise 2: Grade every answer two ways

**Answer quality** judges a reply on its own and never reads the expected response; **Meaning match** compares the reply with it. A planner that answers from the wrong source can satisfy the first and fail the second, so this set uses both.

1. In **Configure test set**, select **Add test method**.
2. In **Select test method**, look at **Tool use** under **Check agent run** first: select it, select **Next**, then select the **Tools** cell of any case. **Select tools** lists the planner's 13 topics and no connected agents, so it cannot check a route to a specialist. Select **Cancel** and remove **Tool use** with its trash icon.
3. Select **Add test method** again, choose **Meaning match** under **Compare with reference**, and select **Next**.
4. Keep the **Pass score** at 50 and select **OK**.
5. Replace the **Name** with `Travel planner routing`.

Expected: **Test method** lists **Answer quality** and **Meaning match** with the tag **Pass score 50**.

> **Note:** The routes still show up after the run: every case lists the connected or child agent it used in its **Details** panel (Exercise 4).

## Exercise 3: Run it under your own profile

The gym answer comes from a SharePoint document, and CS-Travel Agent posts to Teams through a connection. The run needs an account that can reach both, so set the profile before you start.

1. Under **User profile**, select **Manage**.
2. In **Manage profile and connections**, pick your own account under **User**.
3. Under **Connections**, expand **Microsoft Teams** (Connected agent: CS-Travel Agent) and pick a connection with a green status. Select **Save**.
4. Select **Run**.

Expected: the run opens as **Travel planner routing** plus a date stamp, and the cases finish one after another in about two to three minutes. The **Evaluation summary** then shows a bar per method. In the live run this guide was written from it read **Answer quality** 86% and **Meaning match** 71%; your numbers can differ by a case or two.

## Exercise 4: Read the route and the verdict of every case

The summary tells you how many cases failed; each case tells you why. Open them one by one and read three things: the response, the verdict with its analysis, and the agent that took part.

1. Select the first case to open **Results**. Under **Details**, note **Connected agents: CS-Travel Agent**.
2. Use the question list on the left to step through the cases. Each specialist case names its agent: CS-Travel Agent twice, CS-Health Advisor, CS-Travel Expense Refund twice, and **Child agents: Work life balance Buddy** for the gym.
3. Select **What is on the canteen menu today?**. No agent is listed. In the live run the planner answered with a full menu (breakfast, lunch and a secondary choice), **Answer quality** passed it, and **Meaning match** gave it **Fail • 0**.
4. Select the map icon at the top of **Details**. Under **Search sources**, the referenced sources are public web pages such as "MENUS FOR OCTOBER 2026 CNMI Public School".
5. Go back and open **I want to claim a refund for my train ticket to Budapest.**. The response is only **Expense Claim**, both methods fail, and **Answer quality** reads "Not answered". Open the map icon: CS-Travel Expense Refund answered with its **Expense Claim** Adaptive Card, a form with **Submit Claim**.

Expected: two failing cases with two different owners. The canteen answer is an agent problem: **Web Search** let the planner answer from any public website. The claim answer is a test-case problem: the specialist did the right thing, and a text grader cannot judge a form.

> **Tip:** Leave the claim case in the set. Its job here is to prove the route, which **Details** shows; the form itself belongs in CS-Travel Expense Refund's own evaluation.

## Exercise 5: Run it again before you change anything

Language-model answers vary, and so do the graders. Run the unchanged agent once more so you know which cases move on their own.

1. In the **Evaluation summary**, select the run icon next to **...**.
2. In **Manage profile and connections**, keep the profile and select **Run**.
3. When it finishes, open the canteen case again.

Expected: in the live second run the planner said it couldn't find a reliable canteen menu, because the search only surfaced unrelated public menus. **Meaning match** gave it **Pass • 100** and **Answer quality** failed it as "Not answered", so the totals swapped to 71% and 86%. The same case flipped with no change: it is unstable, and the activity shows why, because it still searched the web.

## Exercise 6: Fix the agent with one change, then prove it

The planner needs no knowledge of its own, since every answer it gives should come from a specialist. Turning off **Web Search** removes the source the canteen answer came from and changes nothing else.

1. Select **Overview**, scroll to **Web Search**, and switch it to **Disabled**.
2. Select **Evaluation**, open the latest run, and start two more runs with the run icon.
3. Open the canteen case in both runs and select the map icon.

Expected: in both live runs after the change the planner answered "I couldn't find a published company canteen menu for Wednesday, October 21, 2026, in the available organizational resources", with **Meaning match** **Pass • 100** both times and no public web pages under the referenced sources. **Answer quality** still marks the refusal "Not answered", and its total moved between 71% and 57% as other cases flickered. **Meaning match** held at 86%; the one remaining failure is the claim card. **Recent results** lists all four runs with their scores side by side.

![Answer quality swings from run to run (86%, 71%, 71%, 57%), while after one change, Web Search switched to Disabled, Meaning match holds at 86% and its last failure is the refund-claim card case.](./_images/planner-four-runs.svg)

> **Warning:** If you run the multi-agent demo again later, switch **Web Search** back to **Enabled** first: its canteen check expects the planner to search the web.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The upload fails with a format error | The header row differs from the template | Use `question` and `expectedResponse` exactly, as in the **template** download |
| The gym case answers without the gym document | The profile can't read the SharePoint library | Pick an account with access under **Manage** and run again |
| **Select tools** shows no connected agents | **Tool use** lists the agent's own topics and tools only | Read the routes in **Details** and remove **Tool use** from this set |
| A case flips between runs without any change | The answer depends on an unstable source, such as web search | Open the case's activity in both runs and compare the referenced sources |
| **Answer quality** fails a correct refusal | Its abstention check marks "I can't" as "Not answered" | Judge refusals with **Meaning match** |

## Summary

You put CS-Business Travel Planner on a routing test set and found the one answer that came from the open web. You can now:

- Import a single-response test set from the product's CSV template and add a comparing test method
- Read each case's verdicts, analysis, route and activity
- Tell an agent problem from a test-case problem before you change anything
- Prove a fix with repeated runs instead of a single score

Next, the lab [Evaluate the HR Agent with a Test Set](../../../labs/05-cs-advanced/07-evaluations/lab-01-evaluate-the-hr-agent.md) applies the same loop to the HR agent from the Basics labs.
