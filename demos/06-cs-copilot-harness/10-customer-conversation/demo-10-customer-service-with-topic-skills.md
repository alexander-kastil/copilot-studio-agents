# Script an Allergen Answer with a Topic Skill

![Happy Longnose Customer Service on the Customer Conversation harness answers a dessert question with the Generative skill dish-recommendation, which reads prices and stock from the Happy Longnose Food Catalog, recommending Kaiserschmarrn at 9 EUR and Germknoedel at 7 EUR, and an allergen question with the Topic skill allergen enquiry, whose two fixed questions and condition lead to the severe or the standard message; the Preview Activity map shows the food catalog call for the desserts and allergen enquiry for the allergy.](./_images/10-customer-service-with-topic-skills-overview.svg)

A food shop's customer agent may recommend dishes in its own words, but a question about an allergy must get the same reviewed answer every time. This demo builds a Happy Longnose customer service agent on the Customer Conversation harness with both kinds of skill: a Generative skill that recommends dishes from the class food catalog, and a Topic skill that asks two fixed questions and answers allergen enquiries with fixed wording. The audience sees the model reason in one skill and follow a flow in the other, and the Activity map shows the tool call behind one answer and the topic behind the other.

What you practice here: splitting one agent's behaviour into a Generative skill for judgement and a Topic skill for the answers that must never vary.

Duration: about 30 minutes.

## Prerequisites

- A Copilot Studio environment whose **Home** page offers **Customer conversation agent** under **Explore what else is possible with agents**, with Copilot Credits allocated, because the harness uses credits in Preview.
- The class food catalog MCP server at `https://lab-food-catalog-api.azurewebsites.net/api/mcp`, hosted for the class with no sign-in.

## Step 1: Create the agent and connect the food catalog

The primary agent sets the scope and leaves allergen questions to a skill that doesn't exist yet. The food catalog gives it live dishes, prices and stock to recommend from.

1. On the **Home** page, select **Explore what else is possible with agents**, then **Customer conversation agent**. On **Create your Customer Assist Agent**, under **Start from scratch**, select **Create agent**.
2. In **Name your agent**, enter `Happy Longnose Customer Service` as **Agent name** and create the agent; the setup runs for about two minutes and ends with "Agent setup complete." In the editor panel, select **Edit description** and enter the text below.

```text
Answers Happy Longnose customers about dishes, prices, stock and allergens in the online food shop.
```

3. Paste the general instructions below into the **General** tab of **Instructions**, then the two lines that follow into the **Chat** and the **Voice** tab, and select **Save** in the instructions panel.

```text
Role: You are the customer service agent of Happy Longnose, an online food shop for Austrian dishes.

You do:
- Help customers choose dishes and tell them current prices and stock.
- Hand every question about allergies, intolerances or ingredients a customer must avoid to the allergen enquiry skill, and never answer it yourself.

You do not:
- Promise that a dish is free of any allergen.
- Take orders or payments; customers order in the shop.

Style: friendly and short.
```

```text
In chat, list dishes as short bullet points with the price in EUR.
```

```text
On the phone, name at most three dishes, say prices as words, and keep each reply to three sentences.
```

4. On the **Build** tab, select the primary agent's card. Select **+** next to **Tools**, select the **Model Context Protocol** chip, then **Add** > **MCP**, and fill in the values below with **Authentication** set to **None** (**Add** stays disabled until the three text fields are filled).
   - Server name: `Happy Longnose Food Catalog`
   - Server description: `Looks up Happy Longnose's live food catalog: dishes, current prices and units in stock. Only read from it.`
   - Server URL: `https://lab-food-catalog-api.azurewebsites.net/api/mcp`
5. Select **Add**. After "Happy Longnose Food Catalog custom connector has been created", open **Connection** > **Select a connection** > **Create new connection**, select **Create** in **Connect to Happy Longnose Food Catalog**, then **Add and configure**.
6. Select the server under **Tools** to open **Edit MCP server**. Turn **Allow all** off (the switches of single tools stay locked while it is on), switch off `add_food_item`, `update_food_item`, `update_food_item_stock` and `delete_food_item`, because every learner shares the catalog, and select **Save**.

Expected: the agent's tabs read **Build**, **Preview**, **Evaluate**, **Deploy** and **Monitor**, the editor shows **Saved**, and the primary agent's **Tools** list **Happy Longnose Food Catalog** with only `get_all_food_items`, `get_food_items_by_name` and `get_food_item_by_id` on.

## Step 2: Recommend dishes with a Generative skill

Recommending dishes takes judgement: the occasion, the number of guests and what is in stock today. A Generative skill gives the model a short playbook and leaves the wording to it.

1. On the primary agent's card, select **Add skill** in **Skills**, and open the **Generative** tab.
2. Set **Skill name** to `dish-recommendation` (kebab-case, at most 64 characters) and **Description** to the text below.

```text
Recommends Happy Longnose dishes for an occasion, a number of guests or a taste, with current prices and stock from the food catalog.
```

3. Paste the instructions below into **Instructions**. The `/` picker there offers **Suggested**, **Events** and **Variables**, not the tools, so the instructions name the food catalog in words.

```text
1. If the customer has not said what the dishes are for, ask once for the occasion and the number of guests.
2. Look up matching dishes with the food catalog.
3. Suggest two or three dishes with their price in EUR and the units in stock.
4. Only name dishes, prices and stock the food catalog returned.
5. If the customer mentions an allergy or an ingredient to avoid, stop and leave the question to the allergen enquiry skill.
```

4. Select **Add skill**.

Expected: **Skills** lists the new skill as **Dish recommendation**, and the editor shows **Saved**.

## Step 3: Answer allergen questions with a Topic skill

An allergen answer is a fixed text the shop has reviewed, so the model must neither phrase it nor skip a question. A Topic skill runs the same two questions and one of two messages every time. Its description says that the flow collects the answers, or the model would ask for them itself first, and it has to make that claim in at most 200 characters.

1. Select **Add skill** again, open the **Topic** tab and leave **Create topic** selected.
2. Set **Skill name** to `allergen enquiry` and **Description** to the text below, then select **Add skill**. The topic canvas opens, with the trigger "The agent chooses".

```text
Runs a fixed flow that asks which ingredient to avoid and whether the allergy is severe. Call it when a customer mentions allergies, intolerances or ingredients to avoid; never ask these yourself.
```

3. Select **+** under the trigger, then **Ask a question**, and enter `Which ingredient do you need to avoid?`. **Identify** already reads **User's entire response**. Open the output variable's properties, type `Allergen` in **Name** and select the pencil **Rename** button.
4. Add a second question with **Ask a question**: `Is it a severe allergy, where even traces are dangerous?`. Under **Identify**, search **Choose information to identify** for **Boolean**, and rename its variable to `Severe` the same way.
5. Select **+** > **Add a condition**: `Severe` is equal to **True**. Under the condition select **+** > **Send a message** with the first text below; under **All other conditions** add one with the second. Replace `{Allergen}` in each with the `Allergen` variable from **Select a variable** (tab **Topic**).

```text
For severe allergies we can't confirm that any dish is free of traces of {Allergen}, because every Happy Longnose dish is prepared in the same kitchen. Please don't order online. Our kitchen team answers at kitchen@happylongnose.example on working days.
```

```text
Every Happy Longnose dish is prepared in the same kitchen, so traces of {Allergen} can occur in any dish. Each dish page in the shop lists its main ingredients. For a question about one dish, write to kitchen@happylongnose.example.
```

6. Go back to the **Build** tab; the topic saves itself.

Expected: **Skills** lists **allergen enquiry** next to **Dish recommendation**, and its canvas shows two question nodes, each with a **Chat** and a **Voice** version, one condition and two message nodes.

## Step 4: Watch each skill run in Preview

The same agent now answers one kind of question in its own words and the other from a script. The Activity map beside the chat shows the tool call behind the first answer and the topic behind the second.

1. Open the **Preview** tab, which opens on **Voice Call**, and select **Web Chat**; the **Activity map** is already open beside it. Send the first message.

```text
We're six people for a birthday on Saturday. Which desserts do you recommend, and what do they cost?
```

2. Start a new test session and send the allergen question. Answer the topic's questions with `Nuts` and **Yes**.

```text
Can I eat the Kaiserschmarrn? I have a nut allergy.
```

3. Start a new test session, send the same question, and answer with `Nuts` and **No**.

Expected: the session opens with "Hello, I'm Happy Longnose Customer Service, powered by Microsoft Contact Center Intelligence. How can I help?" For the desserts, the Activity map shows **Executing tool action** with the food catalog call `get all food items`, and the reply recommends Kaiserschmarrn at EUR 9.00 and Germknoedel at EUR 7.00 with their units in stock; the Generative skill has no Activity map entry of its own. For the allergen question, the Activity map shows **Interpreting topic intent** and **Topic executed: allergen enquiry**, the agent asks both questions word for word although the customer already named nuts, the second one with **Yes** and **No** buttons, and the reply is the severe message with "Nuts" inserted as typed. The third run ends with the second message: the branch changes with the answer, and the wording never does.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| **Home** shows no **Customer conversation agent** card | Home sometimes loads its older layout, or the preview hasn't reached this environment | Reload **Home** or switch environment and back; if the card stays missing, present from the readme |
| **Add MCP server** spins for about a minute and ends with "Couldn't create the MCP server. Please try again." | The environment rejects the new custom connector as a duplicate name, even for a name never used; one class environment did this for every name, while another accepted the same server on the first try | Switch to another environment and add the server there |
| **Add skill** stays disabled on the Topic tab | The description is longer than 200 characters | Shorten it to the Step 3 text |
| The agent asks about the allergy itself before the topic starts | The topic's description doesn't claim the questions, or the instruction line on allergies is missing | Paste the Step 3 description and the Step 1 instructions again and start a new session |
| The dessert reply names dishes without a food catalog call | The food catalog's reading tools are off, or the skill's line 2 no longer names the food catalog | Check **Edit MCP server** and the skill's instructions, then start a new session |
| Preview answers with the old behaviour | The last edit hasn't saved yet | Wait until the editor shows **Saved**, then start a new test session |
| Preview answers "You need credits to continue" | The environment has no Copilot Credits left | Ask the admin to allocate Copilot Credits to the environment |

## Cleanup

Delete the Happy Longnose Customer Service agent when the demo is over; the class food catalog stays unchanged.
