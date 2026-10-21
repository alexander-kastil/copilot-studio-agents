# Rebuild the Health Advisor with Two Agent Flows

A health first responder that judges symptoms freely gives two employees with the same complaint two different answers, and anything it posts to a team channel goes out before a person has seen it. The classification belongs in one fixed step, and the post belongs behind a human check. In this demo you rebuild the Health Advisor as CS-Health Advisor: one agent flow classifies the symptoms with a prompt, the topic branches on its outcome, and a second flow asks a reviewer before it posts to Teams.

What you practice here: calling agent flows from topics with bound inputs and outputs, branching a conversation on a flow result, and putting a human review step in front of an action.

Duration: about 50 minutes.

## What you'll build

- A Standard agent named CS-Health Advisor with its instructions and two Word documents as knowledge.
- An agent flow, CS-Summarize Patient Symptoms, that takes age, gender and symptoms, classifies them with the prompt CS-Classify Patient Symptoms and returns an Outcome.
- A Check Symptoms topic that collects the three values, calls the flow and asks a follow-up question when the outcome does not clear the patient for light work.
- An agent flow, CS-Post to teams, that answers the agent at once, waits for a reviewer through **Request for information** and then posts to a Teams channel.
- A Post to teams topic that hands the advice from the conversation to that flow.

## Prerequisites

- The classic experience in Copilot Studio: on the home page select the three dots (**…**) at the bottom of the side bar, then **Open classic experience**.
- The cloned definition of the original agent in [src/cs-schema/agents/Health Advisor](../../../src/cs-schema/agents/Health%20Advisor/) and its flows in [src/cs-schema/workflows](../../../src/cs-schema/workflows/). The two knowledge files sit in its `knowledge/files` folder.
- A Microsoft Teams team with a channel you can post to, and a reviewer mailbox in your own tenant.

## Exercise 1: Create CS-Health Advisor with its knowledge

The instructions set the agent's role and the one rule the flows support: light symptoms get advice, anything else gets a doctor recommendation. The two Word documents let it answer lifestyle and travel questions without a topic. Generative orchestration stays on, which is the default for new agents, so the agent picks topics by their descriptions in the later exercises.

1. On the home page, select **Other ways to build** and create a Standard agent named `CS-Health Advisor`.
2. On the **Overview** page, select **Edit** in **Details**, paste this description and save.

```text
An agent that helps with first advice on different symptoms. It demonstrates how to ask for information in a topic and then summarize it in a flow using an AI capability.
```

3. In the model selector on the **Overview** page, select **GPT Chat Latest**.
4. In **Instructions**, select **Edit**, paste these instructions and save.

```text
You are a friendly agent that acts as a first responder on issues related to health and a healthy lifestyle.
When symptoms are not considered light, you recommend booking an appointment with a doctor.
You respond in a friendly and professional manner.
```

5. Copy the file `Traveling with Health Issues` from the clone's `knowledge/files` folder and add `.docx` to the copy's name. Then select **Add knowledge**, upload `The Benefits of Intermittent Fasting.docx` and `Traveling with Health Issues.docx`, give each the description below, and select **Add to agent**.

```text
The Benefits of Intermittent Fasting
```

```text
Business regulations about traveling with health issues
```

6. In **Test your agent**, send this question.

```text
What are the benefits of intermittent fasting?
```

Expected: the **Overview** page shows CS-Health Advisor with the description, the model and the three instruction lines, and both files appear under **Knowledge** with the status Ready. The test answer summarizes the fasting document and cites it.

> **Tip:** The clone's description and instructions carry typos ("using using", "Your are", "Your respond"), and its second instruction line ends with "present this directory" although no directory exists. The rebuild fixes the typos and drops the dangling phrase; the clone's second knowledge file also ships without the `.docx` extension that the upload needs.

## Exercise 2: Collect age, gender and symptoms in a topic

The topic collects the three values with question nodes, so each one arrives as a clean, typed variable. A closed list entity turns "man" or "woman" into one of two values. The flow call follows in Exercise 4, once the flow exists.

1. Select **Settings**, then **Entities**, **Add an entity**, **New entity** and **Closed list**. Name it `Gender` and add this description.

```text
The gender at the time of birth
```

2. Under **List items**, add both values with their synonyms through **Synonyms**, turn on **Smart matching** and select **Save**.

```text
male: man
female: woman
```

3. Go to **Topics**, select **Add a topic**, then **From blank**, and name the topic `Check Symptoms`. On the **Trigger** node (**The agent chooses**), paste this description.

```text
This topic captures symptoms that a patient is experiencing and provides a potential diagnosis. It can answer questions like I want to check my symptoms
```

4. Add a **Message** node with this text.

```text
_I’m happy to help you, I just need to capture some more details_
```

5. Add three **Question** nodes, one per line below: the question text, the entity under **Identify**, and the variable name. For Gender, offer both values as options.

```text
How old are you | Age | Age
What is your gender | Gender | Gender
_Describe to me the symptoms that you're having_ | User's entire response | UserSymptoms
```

6. Select **Save**.

Expected: the **Entities** list shows Gender with two values and **Smart matching** on. The canvas shows the trigger with the description, the opening message and three questions identified as Age, Gender and User's entire response.

## Exercise 3: Build the CS-Summarize Patient Symptoms flow

The classification runs as an agent flow, so the same three inputs always reach the same prompt in the same order. The **When an agent calls the flow** trigger declares what the topic must hand over, the **Run a prompt** step makes one AI call, and **Respond to the agent** decides what comes back. Whatever **Respond to the agent** returns is all the topic ever sees.

1. Go to the **Workflows** page from the left pane and select **New flow**, then **Agent flow**. The designer opens with the **When an agent calls the flow** trigger and the **Respond to the agent** action.
2. On the trigger, add three inputs with these types, names and descriptions.

```text
Number  Age       The age of the patient
Text    Gender    The gender of the patient
Text    Symptoms  The patient's symptoms
```

3. Select **Insert a new action** between the trigger and **Respond to the agent**, and under **AI capabilities** select **Run a prompt**, then **New custom prompt**. Rename the prompt to `CS-Classify Patient Symptoms` by selecting the generated name at the top left.
4. Paste these instructions into **Instructions** and replace `{Age}`, `{Gender}` and `{Symptoms}` with the matching trigger values from the dynamic content picker. Select **Save**.

```text
Analyze the patient's health issues based on age, gender and symptoms: {Age} {Gender} {Symptoms}.

Use this classification to decide if the patient should be advised to stay in bed or just reduce activity:

Has stable vital signs (e.g., heart rate, blood pressure within normal range).
Demonstrates adequate muscle strength and joint mobility (can sit, stand, walk short distances).
Shows no signs of deep vein thrombosis (DVT) (no calf pain, swelling, or warmth).
Is mentally alert and emotionally stable (no signs of depression or confusion).
Can perform basic activities of daily living (ADLs) with minimal or moderate assistance.
Has no acute pain or only mild discomfort that does not limit movement.
Exhibits normal bowel and respiratory function (no constipation, shallow breathing, or secretion pooling).

If the patient experiences mild conditions, you do not have to mention the classification.

Besides your general recommendation, the analysis should end with: Patient is cleared for light work and movement. Encourage gentle mobility, hydration, and diversional activities. Monitor for fatigue or discomfort. Or a clear instruction to stay in bed or at least reduce movement until further medical examination.
```

5. On **Respond to the agent**, add a **Text** output named `Outcome` and set it to the text response of the **Run a prompt** step from the dynamic content picker. Under **Settings**, **Networking**, check that **Asynchronous response** is **Off**.
6. Name the flow `CS-Summarize Patient Symptoms`, select **Publish**, then select **Test**, run it manually and enter these values.

```text
Age: 34
Gender: female
Symptoms: slight headache and a runny nose since yesterday
```

Expected: the run succeeds, and the **Respond to the agent** step shows an Outcome that is the model's analysis, ending with the sentence that starts "Patient is cleared for light work and movement". The wording around it varies from run to run.

> **Tip:** You can also build the prompt first, outside the flow: on the agent's **Tools** page select **Add a tool**, then **Add new Prompt**. In the prompt editor type `/` and select **Text** to add each input, give it a **Name** (`Age`, `Gender`, `Symptoms`) and a sample value, and select **Test**; with the sample values `34`, `female` and the mild symptoms, the response ends with "Patient is cleared for light work and movement". Select **Save**, then **Cancel** instead of **Add and configure**, because the flow calls the prompt, not the agent. In the flow's **Run a prompt** step, select CS-Classify Patient Symptoms and map the three inputs.

> **Warning:** The cloned flow returns the trigger body in **Respond to the agent** instead of the prompt response, so its Outcome only repeats the inputs and every check falls into the serious branch. The rebuild binds the prompt response; it also fixes the clone's input title "Sympton" and the prompt typos ("symtoms", "activiy", "pacient").

## Exercise 4: Call the flow from the topic and branch on the Outcome

The flow call passes the three variables in and stores the Outcome in the topic. A Power Fx condition then reads the Outcome text and decides whether the conversation needs a follow-up question. Two test runs prove the branch in both directions.

1. Attach the flow to the agent first: on the **Tools** page select **Add a tool**, then the **Workflows** filter, the CS-Summarize Patient Symptoms card and **Add and configure**. The settings page lists Age, Gender and Symptoms on **Dynamically fill with AI**; leave them, because the topic maps them in the next step.
2. Open **Check Symptoms**. Below the symptoms question select **Add node**, then **Add a tool**, and select **CS-Summarize Patient Symptoms**. A new **Action** node appears.
3. Map **Age** to `Topic.Age` and **Symptoms** to `Topic.UserSymptoms`. For **Gender**, select the **>** icon, switch to **Formula** and enter the formula below, because the entity value has to become text. Save **Outcome** to a new variable named `Outcome`.

```powerfx
Text(Topic.Gender)
```

4. Add a **Message** node that shows the result, inserting the variable with the **{x}** icon.

```text
this is the outcome {Topic.Outcome}
```

5. Select **Add node**, then **Add a condition**. On the **Condition** node select the three dots (**…**), then **Change to formula**, select the **>** icon, open the **Formula** tab, enter the formula below and select **Insert**.

```powerfx
!("cleared for light work" in Topic.Outcome)
```

6. Under the **Condition** branch, add a **Question** node with the text below, identify **Boolean**, name the variable `TookDrugs`, then select **Save**.

```text
_Your condition looks serious. Did you take any drugs or medication?_
```

7. In **Test your agent**, start a new conversation, send the first message and answer `34`, `woman` and the mild symptoms. Start another conversation, send the same first message and answer `61`, `man` and the serious symptoms.

```text
I want to check my symptoms
```

```text
slight headache and a runny nose since yesterday
```

```text
chest pain and shortness of breath for two hours, and my left calf is swollen and warm
```

Expected: both conversations open with the "happy to help" message and ask for age, gender and symptoms. The first shows "this is the outcome Based on the patient's age (34 years), gender (female)…" with an analysis ending in "Patient is cleared for light work and movement", and the orchestrator adds a short summary of its own. The second shows an analysis that tells the patient to stay in bed and seek medical evaluation, followed by "Your condition looks serious. Did you take any drugs or medication?" with **Yes** and **No** as options.

> **Note:** The topic ends after the medication question, so the answer goes back to the orchestrator. In the live run a **No** made it answer from the Escalate system topic ("Escalating to a representative is not currently configured"). Add a message or an action under the question if the answer should lead somewhere.

## Exercise 5: Build the CS-Post to teams flow with a review step

A post to a shared channel should not leave the agent unseen, so the flow sends a **Request for information** to a reviewer first and posts only after the reviewer submits. A person can take hours to answer, while an agent waits at most 100 seconds for a flow. That is why **Respond to the agent** goes first: the agent gets its answer at once and the flow keeps running behind it.

1. Go to the **Workflows** page and select **New flow**, then **Agent flow**.
2. On the trigger, add one **Text** input named `Post Text` with this description.

```text
Please enter your input
```

3. Leave **Respond to the agent** directly below the trigger, with no outputs, and **Asynchronous response** **Off**.
4. Below it, select **Insert a new action** and, under **Human review**, select **Request for information**. Enter the title and message below, inserting **Post Text** from the dynamic content picker where the message names it, enter `<reviewer email in your tenant>` in **Assigned to**, and set **Channel** to **Outlook**, which sends the request as an email.

```text
Posting Control
```

```text
Decide if we should post this: {Post Text}
```

5. Below it, add the Microsoft Teams action **Post message in a chat or channel**. Set **Post as** to **User** and **Post in** to **Channel**, select `<your team>` and `<your channel>`, and enter this message with **Post Text** inserted.

```text
A new post with content: {Post Text}
```

6. Name the flow `CS-Post to teams`, then select **Publish**.

Expected: the designer shows the trigger, **Respond to the agent**, **Request for information** and **Post message in a chat or channel** in that order, and CS-Post to teams appears on the **Workflows** page as published.

> **Note:** The cloned flow has no **Respond to the agent** at all, which an agent flow needs before an agent can call it; the rebuild keeps the starter's action and places the long-running steps after it. The Teams connection this flow creates takes no CS- name, so find it by its connector, Microsoft Teams, when you clean up.

## Exercise 6: Save the advice to Teams from a topic

The Post to teams topic takes the advice as a topic input, so the orchestrator fills it from the conversation instead of asking the user to retype it. The topic then passes that text to CS-Post to teams, and the review step decides whether it reaches the channel.

1. Go to **Topics**, select **Add a topic**, then **From blank**, and name the topic `Post to teams`. On the **Trigger** node, paste this description.

```text
This topic can send text content to teams. Can you save this information to my teams
```

2. Select **Details**, open the **Inputs** tab and select **Create a new variable**. Name it `SymptomsSummary`, choose the text type, keep **Dynamically fill with the best option** and **Should prompt user**, select **User's entire response** under **Identify as**, and paste this description.

```text
The advice from the agent
```

3. Attach CS-Post to teams to the agent as in Exercise 4, step 1. On its settings page, expand **Additional details**, set **Credentials to use** to **Maker-provided credentials** and select **Save**, so the flow runs with your Teams and Human review connections.
4. Back in the topic, select **Add node**, then **Add a tool**, and select **CS-Post to teams**. Map **Post Text** to `Topic.SymptomsSummary`, then select **Save**.
5. In **Test your agent**, run the mild symptom check from Exercise 4 again, then send this message.

```text
Can you save this information to my teams
```

6. Open the reviewer's Outlook inbox, open the request and select **Submit**.

Expected: the agent answers right away without asking for the text again, for example "Done. I saved your symptom summary and the health guidance to your Teams." The reviewer receives an email from Microsoft Power Automate titled "Posting Control" that reads "Decide if we should post this:" followed by a summary of the advice, and after **Submit** the Teams channel shows a post that starts "A new post with content:" with the same advice.

> **Tip:** The request has no inputs, so any submission posts. To give the reviewer a real choice, select **Add an input** on **Request for information**, add a **Yes/No** input without spaces in its name, and put a condition on it before the Teams action.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Every symptom check ends with "Your condition looks serious" | **Respond to the agent** returns the trigger body, as in the cloned flow | Set **Outcome** to the text response of the **Run a prompt** step and publish again |
| The flow is missing under **Add a tool** | The flow isn't published, lacks **When an agent calls the flow** or **Respond to the agent**, or has **Asynchronous response** on | Publish the flow, check both steps and turn **Asynchronous response** off |
| Saving to Teams times out with an error | **Respond to the agent** sits after **Request for information**, so the agent waits past 100 seconds | Move **Respond to the agent** directly below the trigger |
| No review email arrives | **Assigned to** names a mailbox outside your tenant | Use a reviewer mailbox in your own tenant |
| Saving to Teams answers "Let's get you connected first" with an **Open connection manager** link, and **Retry** fails | The tool runs with **End user credentials**, the default | Set **Credentials to use** to **Maker-provided credentials** on the tool, as in Exercise 6, step 3 |
| Publishing the flow fails with "missing required property 'RequestForInformationInput/channel'" | **Channel** on **Request for information** is empty | Set **Channel** to **Outlook** |
| "woman" isn't recognized as female | The synonym is missing, or the question doesn't identify the Gender entity | Check the Gender values and the question's **Identify** setting |

## Summary

You rebuilt the Health Advisor as CS-Health Advisor with two agent flows behind its topics. You can now:

- build an agent flow with typed trigger inputs, a **Run a prompt** step and a returned output
- call a flow from a topic, bind topic variables to its inputs and branch on its output with Power Fx
- fill a topic input from the conversation instead of a question
- put a **Request for information** review in front of an action and answer the agent before the review ends

CS-Health Advisor returns in [Generative Orchestration & Multi-Agent Routing](../../05-cs-advanced/03-multi-agent/readme.md), where CS-Business Travel Planner connects to it. Next, [Custom Connectors & REST APIs](../05-rest-api/readme.md) calls an API of your own from an agent.
