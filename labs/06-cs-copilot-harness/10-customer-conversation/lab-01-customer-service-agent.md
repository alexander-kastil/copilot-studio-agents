# Build a Customer Service Agent with Sub-Agents and Topic Skills

A single customer agent that answers everything gets menu questions, catering requests and complaints mixed up, and it has no way to hand a customer to a person. This optional lab builds a Happy Longnose service desk on the Customer Conversation harness: a primary agent that greets customers and routes them, a menu specialist with a Generative skill on the class food catalog, and a catering specialist with a Topic skill that takes a catering request and an email handoff to the catering team. You finish with an agent you can open on its demo website and hand to a tester.

What you practice here: splitting a customer agent into specialists, and giving each the skill kind its job needs: a Generative skill for advice and a Topic skill for data that must be collected the same way every time.

Duration: about 80 minutes.

## What you'll build

- Happy Longnose Service Desk, a Customer Conversation agent whose primary agent greets customers and routes them.
- A Menu Specialist sub-agent with the class food catalog MCP server and the Generative skill `dish-recommendation`.
- A Catering Specialist sub-agent with the Topic skill `catering request` and an email handoff for customers who ask for a person.
- A demo website with an intro message and starter prompts for testers.

## What This Lab Covers

| Step | Focus |
|------|-------|
| 1 | Create the primary agent |
| 2 | Greet customers with the Conversation start event |
| 3 | Add the Menu Specialist with the food catalog |
| 4 | Recommend dishes with a Generative skill |
| 5 | Add the Catering Specialist and its Topic skill |
| 6 | Hand a customer to a person by email |
| 7 | Route customers to the specialists |
| 8 | Test the routing in Preview |
| 9 | Break it on purpose |
| 10 | Deploy to the demo website |

## Prerequisites

- Your own environment, named after your class account (for example `copilot-studio-01`), selected under **Switch environment** at the bottom of the left navigation.
- In that environment, the **Home** page offers **Customer conversation agent** under **Explore what else is possible with agents**, and Copilot Credits are allocated to it, because the harness uses credits in Preview. The harness is in preview; if the card is missing, follow the [demo](../../../demos/06-cs-copilot-harness/10-customer-conversation/demo-10-customer-service-with-topic-skills.md) instead.
- The class food catalog MCP server at `https://lab-food-catalog-api.azurewebsites.net/api/mcp`, hosted for the class with no sign-in. Every learner shares it, so this lab only reads from it.
- Your own mailbox, which receives the handoff in Step 9.
- No files to download. You paste every input from this guide.

## Step 1: Create the primary agent

The primary agent is the front desk: it greets customers, works out what they need and hands them on. It gets its job description now and its routing rules in Step 7, once the specialists exist.

1. On the **Home** page, select **Explore what else is possible with agents**, then **Customer conversation agent**. On **Create your Customer Assist Agent**, under **Start from scratch**, select **Create agent**.
2. In **Name your agent**, enter `Happy Longnose Service Desk` as **Agent name** and create the agent; the setup runs for about two minutes and ends with "Agent setup complete." In the editor panel, select **Edit description** and enter the text below.

```text
The service desk of Happy Longnose, an online food shop for Austrian dishes. Greets customers and routes menu and catering questions to the right specialist.
```

3. Paste the text below into the **General** tab of **Instructions** and select **Save** in the instructions panel.

```text
Role: You are the service desk of Happy Longnose, an online food shop for Austrian dishes. You greet customers, find out what they need and pass them to the right specialist.

You do not:
- Help with anything outside the food shop; say politely what you can help with instead.
- Take orders or payments; customers order in the shop.

Style: friendly and short.
```

Expected: the agent's tabs read **Build**, **Preview**, **Evaluate**, **Deploy** and **Monitor**, the header shows **Saved**, and the **Build** tab shows the primary agent's card named Happy Longnose Service Desk.

## Step 2: Greet customers with the Conversation start event

Events are the fixed moments of every conversation, and each one is a topic underneath. The greeting is the first thing every customer hears or reads, so it names what the desk can do.

1. On the **Build** tab, open **Conversation events**, then **Conversation start**.
2. In the topic canvas, replace the text of the greeting message with the text below. The message has a **Chat** and a **Voice** version and the panel opens on **Chat**; change **Voice** too if the phone greeting should match. The topic saves itself.

```text
Welcome to Happy Longnose! I can help you choose dishes for any occasion or plan catering for your event. What can I do for you?
```

Expected: **Conversation start** shows the new greeting, and the event is still turned on in **Conversation events**.

## Step 3: Add the Menu Specialist with the food catalog

A sub-agent owns one kind of question and carries the tools for it. The Menu Specialist answers from the live food catalog, and its description is what the primary agent reads when it decides where a question goes.

1. On the **Build** tab, select **Add a sub-agent**; a card named "New Sub-Agent" appears at once. Select **Edit agent name**, enter `Menu Specialist` and select **Save name**, then paste the description with **Edit description** and the instructions with **Edit instructions**.

```text
Answers questions about Happy Longnose dishes: what is on the menu, current prices, units in stock and recommendations for an occasion.
```

```text
Role: You are the menu specialist of Happy Longnose.

You do:
- Answer questions about dishes, prices and stock from the food catalog only.
- Never name a dish, price or stock figure the food catalog did not return.

Style: friendly and short.
```

2. On the Menu Specialist's card, select **+** next to **Tools**, select the **Model Context Protocol** chip, then **Add** > **MCP**, and fill in the values below with **Authentication** set to **None** (**Add** stays disabled until the three text fields are filled). Select **Add**, then **Connection** > **Select a connection** > **Create new connection**, **Create**, and **Add and configure**.
   - Server name: `Happy Longnose Food Catalog`
   - Server description: `Looks up Happy Longnose's live food catalog: dishes, current prices and units in stock. Only read from it.`
   - Server URL: `https://lab-food-catalog-api.azurewebsites.net/api/mcp`
3. Select the server under **Tools** to open **Edit MCP server**, turn **Allow all** off, switch off `add_food_item`, `update_food_item`, `update_food_item_stock` and `delete_food_item`, and select **Save**.

Expected: the **Build** tab shows a Menu Specialist card next to the primary agent, and its **Tools** list **Happy Longnose Food Catalog** with only `get_all_food_items`, `get_food_items_by_name` and `get_food_item_by_id` on.

## Step 4: Recommend dishes with a Generative skill

A recommendation needs judgement about the occasion and today's stock, so it is a Generative skill: a short playbook the model reasons over. The skill sits on the Menu Specialist, because that is where the catalog is.

1. On the Menu Specialist's card, in **Skills**, select **Add skill** and open the **Generative** tab.
2. Set **Skill name** to `dish-recommendation` (kebab-case, at most 64 characters) and **Description** to the text below.

```text
Recommends Happy Longnose dishes for an occasion, a number of guests or a taste, with current prices and stock from the food catalog.
```

3. Paste the instructions below. The `/` picker in skill instructions offers **Suggested**, **Events** and **Variables**, not tools, so line 2 names the food catalog in words.

```text
1. If the customer has not said what the dishes are for, ask once for the occasion and the number of guests.
2. Look up matching dishes with the food catalog.
3. Suggest two or three dishes with their price in EUR and the units in stock.
4. Only name dishes, prices and stock the food catalog returned.
```

4. Select **Add skill**.

Expected: the Menu Specialist's **Skills** list the new skill as **Dish recommendation**.

## Step 5: Add the Catering Specialist and its Topic skill

A catering request needs the same three facts every time, in the same order, before anyone can plan it. That is a Topic skill: a flow you author on the topic canvas, which the model starts and then follows. Its description claims the three questions in at most 200 characters, so the model does not ask them itself first.

1. Select **Add a sub-agent** again, rename it to `Catering Specialist` with **Edit agent name** and **Save name**, and paste the description and the instructions below with **Edit description** and **Edit instructions**.

```text
Takes catering requests for events, parties and offices: the event date, the number of guests and the customer's email address.
```

```text
Role: You are the catering specialist of Happy Longnose. You take catering requests for events, parties and offices.

You do:
- Start the catering request skill for every catering request.

Style: friendly and short.
```

2. On the Catering Specialist's card, in **Skills**, select **Add skill**, open the **Topic** tab and leave **Create topic** selected.
3. Set **Skill name** to `catering request` and **Description** to the text below, then select **Add skill**. The topic canvas opens.

```text
Runs a fixed flow that collects the event date, the number of guests and the customer's email address. Call it for every catering request; never ask for these details yourself.
```

4. Add three questions with **+** > **Ask a question**, each with its **Identify** type (search **Choose information to identify**) and a renamed variable (open the variable's properties, type the name in **Name** and select the pencil **Rename** button):

| Question text | Identify | Variable |
|---|---|---|
| `On which date is your event?` | **Date** | `EventDate` |
| `How many guests do you expect?` | **Number** | `Guests` |
| `Which email address should we use for your offer?` | **Email** | `CustomerEmail` |

5. Select **+** > **Add a condition**: `Guests` `>` `40`. Under the condition select **+** > **Send a message** with the first text below; under **All other conditions** add one with the second. Replace each name in braces with its variable from the **{x}** button (tab **Topic**).

```text
Thank you. An event with {Guests} guests needs a tailored offer, so our catering team will write to you at {CustomerEmail} within one working day.
```

```text
Thank you. We have noted catering for {Guests} guests on {EventDate}. Our menu options for your event go to {CustomerEmail}.
```

6. Go back to the **Build** tab; the topic saves itself.

Expected: the Catering Specialist's **Skills** list **catering request**, and its canvas shows three question nodes, one condition and two message nodes.

## Step 6: Hand a customer to a person by email

A customer who asks for a person must get one, and a catering question that needs a human answer doesn't need a live call: the handoff method is **Email**. Its scenario description tells the orchestration when to use it, and a line in the Catering Specialist's instructions names it.

1. On the Catering Specialist's card, open the **Human handoff** section and select **Handoff method** > **Email**.
2. Change **Name** from "Handoff by email" to `Email the catering team`, paste the text below into **Scenario description**, enter your own email address under **Recipients**, and select **Add method**.

```text
Sends the conversation to the catering team when the customer asks for a person.
```

3. In the Catering Specialist's instructions, add the line below under "You do:". Then delete the words `Email the catering team` in it, type `/` in their place, open the **Tools** tab and pick **Email the catering team** (listed as a system tool). Select **Save**.

```text
- When the customer asks for a person, hand over with Email the catering team and tell the customer that the team will write to them.
```

Expected: the Catering Specialist's **Tools** list **Email the catering team**, and its instructions show the tool as an inserted reference.

## Step 7: Route customers to the specialists

The orchestration already compares each message with the specialists' descriptions. Explicit routing lines in the primary agent's instructions remove the doubt for requests that could go either way, and they stop the primary agent from collecting the catering details itself before it hands over.

1. Select the primary agent's card and add the block below to its **Instructions**, after the "Role" paragraph.
2. Replace each specialist's name with the `/` reference: delete `Menu Specialist`, type `/`, open the **Agents** tab and pick **Menu Specialist**, then do the same for `Catering Specialist`. Select **Save**.

```text
Routing:
- Questions about dishes, prices, stock or recommendations go to Menu Specialist.
- Every catering request, for an event, a party or an office, goes to Catering Specialist. Do not ask the customer for the date, the number of guests or the email address yourself.
```

Expected: the primary agent's **Instructions** show **Menu Specialist** and **Catering Specialist** as inserted references.

## Step 8: Test the routing in Preview

Microsoft's test guidance works outward: greeting and scope first, then routing, then tools and topics. The Activity map shows which specialist took each turn and which tool or topic ran, so you prove the routing instead of trusting the reply.

1. Open the **Preview** tab, which opens on **Voice Call**, and select **Web Chat**; the **Activity map** is already open beside it. Read the greeting.
2. Send the menu question.

```text
Which desserts do you recommend for a birthday with six people, and what do they cost?
```

3. Start a new test session and send the small catering request. Answer the topic's questions with a date next month, `20` and your email address.

```text
I'd like catering for a team lunch.
```

4. Start a new test session and send the large catering request. Answer with a date next month, `60` and your email address.

```text
We're planning a summer party and need catering.
```

Expected: the session opens with the Step 2 greeting, and the Activity map shows **Conversation start** as the topic executed. The menu question goes to **Menu Specialist**, the Activity map shows the food catalog call `get all food items`, and the reply names dishes with prices and stock from the catalog, for example Germknoedel at EUR 7 with 26 in stock and Kaiserschmarrn at EUR 9 with 22 in stock. Both catering requests go to **Catering Specialist** and run **catering request**, which asks its three questions word for word; 20 guests ends with "We have noted catering for 20 guests on" and your date, and 60 guests ends with the tailored offer message and no handoff.

## Step 9: Break it on purpose

The happy path proves the agent can work; these tests prove it fails safely. Each one checks a rule from the instructions or the handoff.

1. In a new test session, send the out-of-scope request.

```text
Can you book me a taxi to the airport?
```

2. In a new test session, ask for a person.

```text
Please escalate this to a person on the catering team.
```

Expected: the taxi request is declined with a short note that the desk helps with dishes, prices, recommendations and catering, and the Activity map shows no specialist and no tool. The request for a person runs **Email the catering team** (the Activity map can show a first call as Cancelled before the handoff runs), the agent says it will escalate to a human agent and send the details, and the handoff email reaches your mailbox.

## Step 10: Deploy to the demo website

Testers need a page they can open without Copilot Studio. Publishing creates a demo website, and its intro message and starter prompts tell a tester what to try.

1. Open the **Deploy** tab and select **Publish**. **Review before publishing** lists warnings, such as tools that use author credentials or no evaluation run yet; they don't block the publish.
2. Under **Share a preview**, select **Configure** on the **Demo website** card. In **Set up agent demo**, paste the intro message below (at most 250 characters) and the two starter prompts (at most 80 characters each), and save.

```text
Test the Happy Longnose service desk: ask for a dessert recommendation, then request catering for 60 guests.
```

```text
Which desserts do you recommend?
```

```text
I need catering for our office party.
```

3. Select **Open demo**, select the first starter prompt, and answer the agent's question about the occasion and the number of guests.

Expected: the demo website opens in a new tab with your intro message and starters, plus a default "Connect me with support". The first starter answers with a question about the occasion and the number of guests, and after your answer it recommends dishes from the food catalog. **Copy link** gives the URL you hand to a tester, on `ccai.preview.microsoft.com`; the demo website is for testing and never for customers.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| **Home** shows no **Customer conversation agent** card | Home loaded its older layout ("What would you like to build?"), or the preview hasn't reached this environment | Switch environment and back; a reload alone often keeps the old layout. If the card stays missing, follow the demo |
| **Add MCP server** spins for about a minute and ends with "Couldn't create the MCP server. Please try again." | The environment rejects the new custom connector as a duplicate name, even for a name never used | Add the server in another environment |
| **Add skill** stays disabled on the Topic tab | The description is longer than 200 characters | Shorten it to the Step 5 text |
| A menu question lands with the Catering Specialist, or the reverse | The descriptions overlap, or Step 7 isn't saved | Compare the two sub-agent descriptions with Steps 3 and 5, check the routing block, **Save**, and start a new session |
| The primary agent asks for the date and guests, then the topic asks again | The routing line lacks "Do not ask the customer for the date, the number of guests or the email address yourself" | Paste the Step 7 block again, **Save**, and start a new session |
| No **Escalate** tool under **Tools** > **System tools** | The email handoff lives in the **Human handoff** section | Use **Human handoff** > **Handoff method** > **Email** (Step 6) |
| No handoff email arrives | The recipient address is wrong, or the mail sits in the junk folder | Check **Recipients** in **Email the catering team** and your junk folder |
| A reply names dishes without a food catalog call | The food catalog's reading tools are off, or the skill no longer names the food catalog | Check **Edit MCP server** and the skill's instructions, then start a new session |
| Preview answers with the old behaviour | The last edit hasn't saved yet | Wait until the header shows **Saved**, then start a new test session |
| Preview answers "You need credits to continue" | The environment has no Copilot Credits left | Ask the admin to allocate Copilot Credits to the environment |

## Verify

You have met the lab goal when all of the following are true:

1. The **Build** tab shows the primary agent with two sub-agents, Menu Specialist and Catering Specialist.
2. The Menu Specialist carries **Happy Longnose Food Catalog** with only its reading tools on and the Generative skill **Dish recommendation**.
3. The Catering Specialist carries the Topic skill **catering request** and the email handoff **Email the catering team**.
4. In Step 8 the Activity map routes each request to the expected specialist, and in Step 9 the request for a person ran **Email the catering team**.
5. The demo website opens with your intro message and answers the first starter prompt.

## Summary

You built a Customer Conversation agent as a small team: a front desk that greets and routes, a menu specialist that reasons over the live catalog with a Generative skill, and a catering specialist that collects fixed data with a Topic skill and hands a customer who asks for a person to the catering team by email. You can now:

- Create a Customer Conversation agent, edit its Conversation start event, and add sub-agents with their own tools and skills.
- Choose a Generative skill for advice and a Topic skill for data that must be collected the same way every time, and write a topic description that claims its questions.
- Add a human handoff, write routing that keeps the primary agent from collecting what a topic collects, test routing in the Activity map, and publish a demo website for testers.

Return to [Customer Conversation Agents: Topic Skills, Sub-Agents, and Escalation](../../../demos/06-cs-copilot-harness/10-customer-conversation/readme.md) to compare where a fixed flow lives on each harness.

## Cleanup

Delete Happy Longnose Service Desk from the agent list when you no longer need it. The class food catalog stays unchanged, because every write tool was turned off.
