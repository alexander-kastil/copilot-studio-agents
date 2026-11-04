# Rebuild a Topic and Its Agent Flow as a Workflow

![The Standard Health Advisor's Check Symptoms topic, with three questions, an agent flow and a Power Fx condition, is upgraded to a Microsoft Copilot harness agent, where the same journey runs as one Check Symptoms workflow tool: inputs Age, Gender and Symptoms, a classify node with the branches Cleared for light work, See a doctor and Other, and Respond to the agent returning Outcome.](./_images/07-rebuild-a-topic-as-a-workflow-overview.svg)

The Health Advisor from module 04 walks every user through the same Check Symptoms topic: three fixed questions, an agent flow that judges the symptoms, and a Power Fx condition that decides the follow-up. A Microsoft Copilot harness agent has no topics, and the upgrade doesn't migrate Power Fx, so the deterministic part of that journey needs a new home. In this demo you upgrade the Health Advisor, then rebuild its symptom check as one workflow tool whose classify node replaces the formula, and you prove that the new agent reaches the same outcomes.

What you practice here: mapping a topic node by node to a workflow tool and instructions, then proving the rebuilt journey against the original.

Duration: about 50 minutes.

## What you'll build

- A purpose map of the Check Symptoms topic: what each node is for and where it lands.
- An upgraded copy of the Health Advisor on the GitHub Copilot harness, with the upgrade report read.
- A `Check Symptoms` workflow with the inputs `Age`, `Gender` and `Symptoms`, a classify node and one `Outcome` output per branch.
- The workflow attached as a tool, with instructions that collect only the missing inputs.
- A side-by-side run of the Standard and the upgraded agent on the same two questions.

## Prerequisites

- A Copilot Studio environment where the **New agent** menu offers **Agent** with the **GitHub Copilot** badge, and where you have the maker role.
- The Standard Health Advisor with its Check Symptoms topic and the `SummarizePatientSymtoms` agent flow, built in [Rebuild the Health Advisor with Two Agent Flows](../../04-cs-tools/04-agent-flows/demo-health-advisor-flows.md). The clone in `src/cs-schema/agents/Health Advisor` shows the same topic as YAML.
- Copilot Credits available in the environment: the upgrade, the workflow runs and every Preview turn consume them.

## Exercise 1: Map the Check Symptoms topic by purpose

The guidance for a migration is to list what each component is for before you rebuild anything, because the new agent needs the purpose, not the node. Check Symptoms is a good case: half of it collects values, a quarter judges them, and the rest decides what to say next.

1. Open the Standard Health Advisor, select **Topics**, and open **Check Symptoms**.
2. Walk the canvas from the trigger to the end and match each node to a row of the map below.
3. Open the action node that calls `SummarizePatientSymtoms` and note its three inputs (`number`, `text`, `text_1`) and its output `outcome`.

Copy the map into your notes; the following exercises fill the right column on the canvas.

```text
Standard node                                 Purpose                 On the GitHub Copilot harness
Trigger description (health issues)           When to run             Workflow description
Question "How old are you" (Age entity)       Collect a value         Workflow input Age
Question "What is your gender" (closed list)  Collect a value         Workflow input Gender
Question "Describe ... symptoms" (string)     Collect a value         Workflow input Symptoms
Action SummarizePatientSymtoms (AI prompt)    Judge the severity      Classify node
Condition (Power Fx) "cleared for light work" Branch on the result    Classify node branches
Message "this is the outcome"                 Tell the user           Respond to the agent, output Outcome
Question TookDrugs (Boolean entity)           Follow up               Instruction for the See a doctor case
```

Expected: every node on the canvas has a row, and none of the rows says "copy the node". The values collected by questions become inputs, the prompt and the formula become one classify node, and the follow-up question becomes a sentence in the instructions.

## Exercise 2: Upgrade the Health Advisor and read the report

The upgrade creates a copy on the GitHub Copilot harness and leaves the Standard agent untouched, so you keep a reference to compare against. It carries over instructions, tools and suggested prompts; knowledge sources, Power Fx expressions and child agents are not migrated.

1. Go to the Copilot Studio home page.
2. Type the request below into the input box and send it.

```text
upgrade my Health Advisor agent
```

3. Answer the questions Copilot Studio asks in the chat, for example confirm that it found the right agent.
4. When the cards appear, read the summary of what was migrated, what requires attention and what was skipped, and add each item to the map from Exercise 1.
5. Select the **Open** icon on the card named **Health Advisor (Upgraded)**.

Expected: a new agent named **Health Advisor (Upgraded)** opens on the **Build** tab, with the original instructions and the agent's tools under **Tools**. The report lists the Power Fx condition among the items that were not carried over, and the Standard Health Advisor still appears unchanged in the **Agents** list.

> **Note:** If the upgrade rebuilt Check Symptoms as a skill or a workflow, open it and compare it with the map. Remove that version from the agent before Exercise 5, so the agent has exactly one way to check symptoms.

## Exercise 3: Start the Check Symptoms workflow with three inputs

The three question nodes become the inputs of a workflow the agent calls as a tool. Each input gets a description, because the agent reads it to know what to collect and asks the user only for what is missing.

1. On the **Build** tab of **Health Advisor (Upgraded)**, select **+** next to **Tools**, then **+ Add** > **Workflow**. The designer opens with **When an agent calls the flow** and **Respond to the agent** already placed.
2. Select the trigger, then **+ Add an input** > **Text**, and add the three inputs below with their descriptions.

```text
Age: Age of the person in years.
Gender: Gender of the person: female, male or diverse.
Symptoms: The symptoms in the person's own words, including how long they have had them.
```

3. Select the title **Untitled workflow**, rename it to `Check Symptoms`, and select the **Save** icon.

Expected: the trigger shows the inputs `Age`, `Gender` and `Symptoms` above **Respond to the agent**, and the banner reads that the workflow has been saved and is ready to test or run after publishing. Nothing judges the symptoms yet.

## Exercise 4: Replace the prompt and the Power Fx condition with a classify node

In the Standard agent an AI Builder prompt judged the symptoms and a Power Fx formula searched its answer for the words "cleared for light work". A classify node does both in one step: it sorts the text into categories you describe, and each category becomes its own branch. The Standard prompt is the source of the category descriptions.

1. Select the **+** between the trigger and **Respond to the agent**, and select the **Classify** icon on the Add panel.
2. In **Input to classify**, type the text below and use the lightning icon to insert each trigger input at its label.

```text
Age: Age. Gender: Gender. Symptoms: Symptoms.
```

3. Under **Categories**, add the two categories below, each with its description in **Describe what belongs in this category**.

```text
Cleared for light work
Mild, short symptoms that still allow normal light activity: a light cold, a runny nose, a mild headache or a sore throat for a few days, no fever above 39 °C, no chest pain and no breathing problems.

See a doctor
Symptoms that need a doctor: fever above 39 °C, chest pain, shortness of breath, severe or worsening pain, symptoms that last longer than a week, or fever in a person over 70.
```

4. Under **Examples**, select **Add example**, choose **Cleared for light work** in **Select category**, and paste the example below.

```text
Age: 34. Gender: female. Symptoms: runny nose and a light sore throat since yesterday.
```

5. Wire each branch, **Other** included, to a **Respond to the agent** node, and on each one select **+ Add an output** > **Text** named `Outcome` with the value below for its branch.

```text
Cleared for light work: Cleared for light work. Rest when tired, drink enough, and check again if the symptoms last longer than three days.
See a doctor: See a doctor. Book an appointment with a doctor today.
Other: Unclear. Ask for more detail about the symptoms and how long they have lasted.
```

6. Select the **Save** icon, then **Publish**.

Expected: the canvas shows the trigger, the classify node with three branches (**Cleared for light work**, **See a doctor**, **Other**), and a **Respond to the agent** node at the end of each branch returning `Outcome`. The workflow status shows **Published**. Where the Standard topic needed a prompt, a variable and a formula, the workflow carries one node whose branches you can read on the canvas.

> **Tip:** The descriptions decide the result, so write what belongs and what doesn't. If a test lands on the wrong branch, sharpen the description or add an example for that category before you add more categories.

## Exercise 5: Attach the workflow and rewrite the instructions

The workflow appears under **Tools** because you created it from the agent. The instructions now carry what the topic's questions and its last condition did: collect the inputs in conversation, call the tool, and follow up when the outcome is serious.

1. Under **Tools**, select **Check Symptoms** and replace its description with the text below, then select **Save**.

```text
Checks reported health symptoms and returns whether the person is cleared for light work or should see a doctor. Call it whenever a user reports symptoms, once you know their age, gender and symptoms.
```

2. Open **Instructions** and replace the upgraded text with the instructions below.

```text
You are a friendly first responder for health and healthy lifestyle questions. When a user reports symptoms, collect their age, gender and a short description of the symptoms, asking only for what is still missing, then run Check Symptoms. Tell the user the Outcome in your own words. When the Outcome says to see a doctor, ask whether they have already taken any medication and recommend booking an appointment with a doctor. Never diagnose; you give first guidance only.
```

3. Select the **Save** icon, then **Publish** and **Publish agent**.

Expected: **Tools** lists **Check Symptoms** with the new description, the instructions name the tool, and the agent's status shows it is published.

## Exercise 6: Prove the journeys against the Standard agent

A migration is done when the rebuilt agent completes the original journeys. Run the same two questions against both agents: one that the topic cleared and one that it sent to a doctor.

1. Open **Preview** on **Health Advisor (Upgraded)**, with **Debug mode** on, and send the first message.

```text
I'm 34, female, and I've had a runny nose and a light sore throat since yesterday. Can I work today?
```

2. Start a new conversation and send the second message, then answer the questions the agent asks.

```text
I have chest pain and I'm short of breath.
```

3. Open the Standard Health Advisor, open its test pane, and send both messages again.

Expected: on the upgraded agent, the first message runs **Check Symptoms** at once, and the step list shows **Used tool** with its name and the output `Cleared for light work`. The second message makes the agent ask for the age and gender only, then run the tool, report **See a doctor**, and ask about medication. The Standard agent asks its three questions in fixed order on both messages and reaches the same two outcomes.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The home page answers but no **(Upgraded)** card appears | The request didn't name an agent it could find | Send `upgrade my Health Advisor agent` again with the exact agent name from the **Agents** list |
| **Check Symptoms** is missing from the workflows you can add | The workflow lacks **When an agent calls the flow** or **Respond to the agent**, or it isn't published | Restore both nodes, then **Publish** the workflow |
| Preview answers without calling the tool | The tool description doesn't match how users report symptoms | Rewrite the description with the words users use, then republish the agent |
| The tool runs but returns no `Outcome` | One branch ends without its own **Respond to the agent** node | Give every branch, **Other** included, a **Respond to the agent** node with `Outcome` |
| Every message lands on **Other** | The input to classify is empty or the descriptions overlap | Insert the three trigger inputs with the lightning icon, and sharpen the two descriptions |
| The tool call fails after a long wait | **Asynchronous response** is on, or the run exceeds 100 seconds | Turn **Asynchronous response** off under **Networking** and keep the workflow to the classify step |

## Summary

You rebuilt the Health Advisor's deterministic symptom check on the GitHub Copilot harness. You can now:

- Map a topic's nodes to their purpose before you rebuild them.
- Upgrade a Standard agent and use its report as the to-do list for the rebuild.
- Turn question nodes into workflow inputs, and a prompt plus a Power Fx condition into one classify node.
- Prove a migration by running the same journeys against both agents.

Next, migrate the HR agent you built in module 03 in [Upgrade the HR Agent and Rebuild Its Topics](../../../labs/06-cs-copilot-harness/07-migration/lab-01-upgrade-the-hr-agent.md), where a hook takes over what a system topic did.
