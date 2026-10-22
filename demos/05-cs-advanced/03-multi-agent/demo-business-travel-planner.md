# Connect Your Travel Specialists Behind One Front Door

![Five test messages (booking, health, allowance, gym, canteen) go into CS-Business Travel Planner, which routes each one to CS-Travel Agent, CS-Health Advisor, CS-Travel Expense Refund, its child agent Work life balance Buddy or Web Search, and each route shows the answer the guide expects.](./_images/business-travel-planner-overview.svg)

An employee planning a business trip should not have to know that booking, a health check and the expense claim live in three different agents. When each specialist has its own chat, people pick the wrong one, repeat themselves, and give up. In this demo you build CS-Business Travel Planner, connect the specialists you built in modules 3 and 4, give it a child agent for gym benefits, and trace every question to the agent that answered it.

What you practice here: composing a parent agent from connected agents and a child agent, routing on descriptions, and proving each route in the activity map.

Duration: about 50 minutes.

## What you'll build

- CS-Business Travel Planner, a Standard agent whose instructions name a specialist for every travel request.
- Three connected agents: CS-Travel Agent for booking and sightseeing, CS-Health Advisor for a health check before the trip, CS-Travel Expense Refund for claims and allowances.
- A child agent, Work life balance Buddy, that answers from the company gym document.
- A test run that lands one question in each specialist and one outside all of them.

## Prerequisites

- Copilot Studio in the classic experience: on the home page, select the three dots (**…**) at the bottom of the side bar, then **Open classic experience**.
- CS-Travel Agent from [Post Trip Requests to Teams with a Connector Tool](../../04-cs-tools/03-connectors/demo-travel-agent-teams-tool.md), CS-Health Advisor from [Rebuild the Health Advisor with Two Agent Flows](../../04-cs-tools/04-agent-flows/demo-health-advisor-flows.md), and CS-Travel Expense Refund from the [Power Fx demo](../../03-cs-basics/04-power-fx/demo-expense-claim-power-fx.md) and the [Dataverse demo](../../04-cs-tools/02-dataverse/demo-expense-claims-in-dataverse.md), all in the same environment.
- The gym document (No Pain - No Gain Europe’s Premier Employee Gym Experience.docx) in a SharePoint library you can read.
- The original agent definition, for reference: [src/cs-schema/agents/Business Travel Planner](../../../src/cs-schema/agents/Business%20Travel%20Planner/).

## Exercise 1: Create CS-Business Travel Planner

The planner is the only agent employees talk to, so its description says what it is for in one line. It needs no knowledge of its own: every answer comes from a specialist.

1. Go to the **Agents** page, select **Create blank agent**, enter the name `CS-Business Travel Planner`, and select **Create**.
2. On the **Overview** page, in the **Details** section, select **Edit**, paste this description, and select **Save**.

```text
Plans business trips for employees by routing booking, health, expense and gym questions to the specialist agent that owns each one.
```

3. In the **Model** section, select GPT-5 Chat, the model of the original agent.

Expected: the **Overview** page shows CS-Business Travel Planner with the description under **Details** and GPT-5 Chat in the **Model** section. The **Agents** page is still empty.

> **Note:** The original description read "An agent that demonstrates a simple multi scenario using connected agents", which tells the orchestrator nothing about when to use it. The rebuild states the job instead.

## Exercise 2: Make the three specialists connectable

A connected agent must be published in the same environment and must allow other agents to call it. The parent always uses the last published version, so an unpublished change in a specialist never reaches the planner.

1. Open CS-Travel Agent, select **Settings**, and on the **Generative AI** page check that **Let other agents connect to and use this one** under **Connected agents** is on.
2. Select **Publish** and confirm.
3. Repeat both steps for CS-Health Advisor and CS-Travel Expense Refund.

Expected: all three agents show a fresh publish time, and the toggle is on in each agent's **Settings**.

> **Note:** For CS-Health Advisor and CS-Travel Expense Refund the **Publish this agent** dialog first lists "Your agent runs tools that use the author's credentials", with **View 4 tools** and **View 2 tools**: their agent flows run with your connections. Anyone who chats with the published agent uses those connections, so share the agents only with your class.

## Exercise 3: Connect the specialists with routing descriptions

The planner decides where a question goes from each connected agent's description, and that description is a local copy you control on the planner side. Each one says what the specialist covers and what it does not, so two descriptions never claim the same question. The original agent passed the conversation history to every specialist, so a specialist sees what the employee already said.

1. In CS-Business Travel Planner, go to the **Agents** page and select **Add an agent**.
2. Under **Connect to an external agent**, select **Copilot Studio**, then select CS-Travel Agent.
3. Replace the description with the text below, keep **Pass conversation history to this agent** selected, and save.

```text
Books business trips: collects the destination, the travel date and the number of travelers, and gives travel information and sightseeing tips for the destination. Does not handle health questions, expense claims or gym benefits.
```

4. Add CS-Health Advisor the same way with this description:

```text
An agent that helps with first advice on different symptoms. It can be used to decide if an employee can start a business trip
```

5. Add CS-Travel Expense Refund the same way with this description:

```text
An agent that helps with helping to claim travel expense refunds by taking the refund claim and then storing it for further processing. It also knows about official compensation rates for business travel
```

Expected: the **Agents** page lists CS-Travel Agent, CS-Health Advisor and CS-Travel Expense Refund, each with its **Enabled** toggle on.

> **Tip:** The CS-Travel Agent description merges two jobs of the original environment: the Transportation Agent mock that invented bookings, and the sightseeing knowledge of the old child agent. One real specialist replaces both.

## Exercise 4: Add the gym benefits child agent

Gym benefits are a small task this team owns itself, so they fit a child agent: it lives inside the planner, ships with it, and has knowledge no other agent sees. Its description decides when the planner picks it.

1. On the **Agents** page, select **Add**, then **New child agent**.
2. Name it `Work life balance Buddy`, keep **The agent chooses - Based on description**, and paste this description:

```text
Provides information about employee benefits on business trips, like free gyms the employee can use after work.
```

3. Paste these instructions:

```text
Provide information about employee benefits on business trips based on your knowledge
Knows about free gyms to workout as an employee
Specialized in the cities of Vienna and Budapest
```

4. In the **Knowledge** section, select **Add**, select SharePoint, and add the gym document with this name and description:

```text
Name: No Pain - No Gain Europe’s Premier Employee Gym for Employees
Description: Gym locations that the employee can use for free on business trips
URL: <your gym document URL>
```

5. Select **Save**.

Expected: Work life balance Buddy appears on the **Agents** page next to the three connected agents, and its page lists the gym document under **Knowledge**.

> **Tip:** The original child agent also covered sightseeing and free event tickets, and its knowledge description read "busniness". Sightseeing now lives in CS-Travel Agent, the Event table is not part of the class environment, and the typo is fixed.

## Exercise 5: Write the routing instructions

Descriptions tell the planner what each agent can do; instructions tell it which one to use for which request. A slash reference turns an agent's name into a link the orchestrator resolves, so renaming an agent never breaks the instructions.

1. On the **Overview** page, in the **Instructions** section, select **Edit** and paste this text:

```text
You are a helpful and knowledgeable business travel planning assistant who helps users create personalized business trips.

Instructions:

When asked about gyms or other employee benefits on a business trip, consult Work life balance Buddy.
Booking a trip from the employee's place of residence to a business location, and sightseeing at the destination, are handled by CS-Travel Agent.
If the user is not sure whether they should start a business trip because of health conditions, use CS-Health Advisor to get a first advice.
Travel expense claims can be made through CS-Travel Expense Refund.
CS-Travel Expense Refund can also answer questions regarding official travel allowances.
```

2. Select each agent name in the text, type `/`, and pick the matching agent from the menu so it becomes a reference.
3. Select **Save**.

Expected: the **Instructions** section shows the four agent names as references, not as plain text.

> **Tip:** The original instructions wrote "weather" for "whether" and sent event questions to a Dataverse table. The rebuild fixes the word and drops the event line, because the planner no longer has that knowledge.

## Exercise 6: Prove every route in the activity map

Each test should land in exactly one specialist, and one should land in none. The activity map shows which agent node ran, so you can see a wrong route before an employee does.

1. Open **Test your agent**, select the three dots (**…**), and turn on **Show activity map when testing**.
2. Send each message below in a new test conversation:

```text
I need to get from Vienna to Budapest on May 12 for two colleagues. Can you book it, and what can we see there in the evening?
```

```text
I'm 42, male, and I have a mild cold with a sore throat. Should I still travel to Budapest tomorrow?
```

```text
What is the official daily allowance for a business trip within Austria?
```

```text
Is there a gym I can use for free in Budapest after work?
```

```text
What is on the canteen menu today?
```

Expected: each message lands in one place, and the activity map shows it.

- Booking: a CS-Travel Agent node runs its Book Trip topic, which asks for the place, the date and the number of travelers even though the message names them. Answer `Budapest`, `May 12, 2027` and `2`; the agent returns the trip summary and evening tips such as the Castle District and a Danube cruise, citing your Sightseeing pages.
- Health: CS-Health Advisor runs CS-Summarize Patient Symptoms and its Check Symptoms topic. After `42`, `male` and `mild cold with a sore throat` it advises that traveling is reasonable while the symptoms stay mild, citing Traveling with Health Issues.
- Allowance: CS-Travel Expense Refund answers with the tax-free allowance of €30 per 24 hours and €2.50 per commenced hour, citing the WKO page.
- Gym: Work life balance Buddy names the No Pain - No Gain gym in Budapest with up to three free one-day passes and cites the gym document.
- Canteen: no agent node runs. With **Web Search** on, the planner searches the web and then answers that it has no access to today's canteen menu.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| A specialist is missing under **Copilot Studio** | It isn't published, lives in another environment, or doesn't allow connections | Publish it in the same environment and turn on **Let other agents connect to and use this one** |
| A specialist answers with old behavior | The planner calls the last published version | Publish the specialist again and retest |
| The allowance question goes to CS-Travel Agent | Two descriptions claim travel questions | Keep the "does not handle" clause in the CS-Travel Agent description |
| The gym question gets a generic answer | The child agent can't read the gym document | Check the document URL and your access to the SharePoint library |
| The **Agents** page is missing | Generative orchestration is off | Turn on generative orchestration in **Settings** > **Generative AI** |

## Summary

You put CS-Business Travel Planner in front of the travel specialists you built across the class, so employees ask one agent. You can now:

- Make Standard agents connectable and keep their published version current
- Connect agents with descriptions that claim one job each and pass conversation history
- Add a child agent with knowledge only it can see
- Write routing instructions with slash references and prove each route in the activity map

Next, [Microsoft Foundry Agents: Core Concepts](../04-foundry-agents/readme.md) looks at specialists a developer team builds outside Copilot Studio.
