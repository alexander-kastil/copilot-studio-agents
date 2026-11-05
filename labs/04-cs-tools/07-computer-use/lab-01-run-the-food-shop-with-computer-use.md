# Run a Food Shop Back Office with Computer Use

The kitchen of Passion for Food checks portions, restocks dishes and enters phone orders in the shop's web back office by hand, several times a day. In this lab you build a Copilot Studio agent that does that work itself: it reads the stock list, changes stock on the edit page of a dish and places an order through the shop's checkout, all by operating the web app on screen. You finish with one agent and three computer use tools that the orchestrator chains from a single chat request.

What you practice here: turning a screen task into a computer use tool with inputs, fencing it to one site, and letting the orchestrator combine several screen tools.

Duration: about 65 minutes.

## What you'll build

- A Standard agent, CS-Food Shop Assistant, with instructions that say which tool serves which request.
- CS-Read food stock, a computer use tool that returns every dish with its price and portions in stock.
- CS-Update food stock, a tool with two inputs that opens a dish's edit page and saves a new stock value.
- CS-Place food order, a tool that fills the cart and the checkout form and returns the order number.
- Access control and HTTPS enforcement that keep all three tools on the shop's site.

## Prerequisites

- A Copilot Studio environment where computer use is available, and Copilot Credits: each step of a run consumes 5 credits with a standard model.
- The hosted browser (preview) as the machine, which the tool selects with a ready connection when your environment offers it, or a Windows machine registered in Power Automate with **Enable for computer use** turned on.
- The class food shop open in your browser: `https://victorious-sky-029f1cb03.6.azurestaticapps.net/food/catalog`.

> **Note:** The food shop is the Angular app in [src/food-shop](../../../src/food-shop), and its catalog data comes from the .NET service in [src/food-catalog-service](../../../src/food-catalog-service). Both are deployed for the class in the resource group `rg-copilotstudio-labs`: the shop as the Static Web App `lab-food-shop` (`https://victorious-sky-029f1cb03.6.azurestaticapps.net`), the catalog as the Web App `lab-food-catalog-service` (`https://lab-food-catalog-service.azurewebsites.net/food`). All learners share one catalog, so stock values change while you work.

## Exercise 1: Create the shop assistant

The orchestrator picks a computer use tool by its name and description, and the agent instructions tell it how the tools work together. You create the agent first, so every tool you add later lands in the same place.

1. In Copilot Studio, on **Home** select **Other ways to build**, then, under **Build with standard orchestration**, select **Agent** with the **Standard** badge.
2. In the **Name your agent** dialog, enter `CS-Food Shop Assistant` and confirm.
3. On the agent's configuration page, select **Edit** in the **Instructions** section, paste these instructions, and select **Save**:

```text
You are the back-office assistant of Passion for Food, a restaurant web shop.
Use CS-Read food stock to answer questions about dishes, prices and portions in stock.
Use CS-Update food stock to change the portions in stock of one dish; when several dishes must change, call it once per dish.
Use CS-Place food order to order dishes for a customer.
Answer with the values the tools return and never guess a stock number.
```

Expected: the configuration page shows CS-Food Shop Assistant with the instructions in the **Instructions** section, and the **Tools** section lists no tools yet.

## Exercise 2: Read the stock list

A stock check is a page a person reads row by row. The tool does the same from the instructions you give it, and the test view shows each step it takes.

1. Go to **Tools**, select **Add a tool**, and select the **Add new Computer use** card.
2. Paste these instructions and select **Add and configure**:

```text
1. Go to https://victorious-sky-029f1cb03.6.azurestaticapps.net/food/catalog.
2. Wait until the Catalog table shows its rows with the columns Id, Name, Price and In Stock.
3. Return every row as a JSON array of objects with the fields name, price and inStock, using the values exactly as shown, and nothing else.
```

3. Set **Name** to `CS-Read food stock`, keep **Model** at **Claude Sonnet 4.5**, and replace **Description** with:

```text
Reads every dish of the Passion for Food catalog with its price and portions in stock from the shop's back office. Use it when a user asks what is in stock, how many portions of a dish are left, or what a dish costs.
```

4. Under **Machines**, check that **Machine** shows **Hosted browser** and **Connection** shows a green check. Select **Save**, and if the header still reads Computer use, enter the name again and select **Save** once more.
5. In the **Instructions** card, select **Test directly**.

Expected: the **Test** window shows the model's reasoning on the left while **Preview** shows the hosted browser opening the shop's **Catalog** page. The status turns **Finished** and the last card holds a JSON array with the five dishes Falafel Plate, Hand pulled Noodles, Pad Kra Pao, Pizza Tartufo and Wiener Schnitzel, each with the price and stock the table showed. Compare it with the Catalog page in your own browser: on a fresh deployment the In Stock column reads 9, 9, 12, 4 and 13.

## Exercise 3: Fence the tools to the shop

The stock tool needs one site, but by default it may act on any website or app. You restrict it before you add tools that change data.

1. Close the **Test** window. Scroll to **Allowed websites and desktop apps** and turn on **Only allow specific websites and desktop apps**.
2. Select **Add**, keep **Type** at **Website**, enter this domain, and select **Add**:

```text
victorious-sky-029f1cb03.6.azurestaticapps.net
```

3. Check that **Enforce HTTPS** is on, select **Save**, and run **Test directly** again.

Expected: the allow list shows the shop's domain as a Website and Microsoft Edge as a Desktop app, which the hosted browser needs. The run returns the same JSON array as before, because every action stays on the allowed `https://` site.

## Exercise 4: Change stock on a dish's edit page

Restocking means opening one dish, changing one field and saving. Two inputs let the orchestrator pass the dish and the new value, so one tool serves every restock.

1. On the **Tools** page, select **Add a tool** > **Add new Computer use**, paste these instructions, and select **Add and configure**:

```text
1. Go to https://victorious-sky-029f1cb03.6.azurestaticapps.net/food/catalog.
2. In the Catalog table, find the row whose Name matches the DishName input and select the pencil icon (Edit) in that row.
3. On the Edit page, replace the value of In stock with the NewStock input. Do not change Name or Price.
4. Select Save. No confirmation from me is needed.
5. Back on the Catalog page, read the In Stock value of that dish and return it in the form: <DishName>: <In Stock>.
```

2. Set **Name** to `CS-Update food stock` and **Description** to the text below, keep **Claude Sonnet 4.5** and the **Hosted browser**, and add the shop's domain under **Allowed websites and desktop apps** as in Exercise 3.

```text
Sets the portions in stock of one dish in the Passion for Food back office. Use it when a user asks to restock a dish or to set, raise or lower its stock. Call it once per dish.
```

3. In the **Inputs** card, select **Add input** twice and create these two inputs, then select **Save**:

| Name | Description |
|------|-------------|
| `DishName` | The dish name exactly as it appears in the Name column, for example Pizza Tartufo |
| `NewStock` | The new number of portions in stock, a whole number such as 20 |

4. Select **Test directly**, enter `Pizza Tartufo` as **DishName** and `20` as **NewStock**, and select **Start test**.

Expected: the preview shows the Catalog page, then the edit page at `/food/catalog/edit/5` with the heading **Edit** and Pizza Tartufo beside it, the fields **Name**, **Price** and **In stock**, and the buttons **Cancel** and **Save**. After **Save** the browser is back on the Catalog page, and the last card reads `Pizza Tartufo: 20`. Reload the Catalog page in your own browser: Pizza Tartufo shows 20 in the In Stock column.

> **Tip:** The **Inputs** card lists both inputs with **Fill using** set to **Dynamically fill with AI**, which is how the orchestrator fills them from the user's words in Exercise 6.

## Exercise 5: Place an order through the checkout

Phone orders go through the same shop front a customer uses: the dish cards, the cart and a checkout form. This tool types a customer's details into that form and reports the order number the shop returns.

1. Add a third computer use tool with these instructions and select **Add and configure**:

```text
1. Go to https://victorious-sky-029f1cb03.6.azurestaticapps.net/food.
2. On the card of the dish that matches the DishName input, select the plus button (Add one <dish>) as many times as the Quantity input says.
3. Check that the Actions panel shows the expected number of items in cart, then select Checkout.
4. On the Checkout page, replace Name with the CustomerName input and E-Mail with the CustomerEmail input. Keep all other fields as they are.
5. Select Complete Checkout. No confirmation from me is needed.
6. Return the order number shown after "Your order number is".
```

2. Set **Name** to `CS-Place food order`, **Description** to the text below, add the shop's domain to the allow list, and create the inputs `DishName`, `Quantity`, `CustomerName` and `CustomerEmail` with the descriptions in the table. Select **Save**.

```text
Orders dishes for a customer in the Passion for Food web shop and returns the order number. Use it when a user asks to order or buy dishes for a customer.
```

| Name | Description |
|------|-------------|
| `DishName` | The dish name exactly as shown on its card, for example Falafel Plate |
| `Quantity` | How many portions to order, a whole number |
| `CustomerName` | The customer's full name |
| `CustomerEmail` | The customer's email address |

3. Select **Test directly** with `Falafel Plate`, `2`, `Mara Huber` and `mara.huber@example.com`.

Expected: the preview shows the Food page with the dish pictures, the Actions panel changing to "2 items in cart" and "24.00 €", then the Checkout page with the form, one row for Falafel Plate with "item price:" 12 and "Total: 24.00 €". After **Complete Checkout** the page reads "Your order was submitted" and "Thank you for your order!", the panel is back at "0 items in cart", and the last card returns the order number, a GUID.

> **Note:** The class shop simulates the checkout: it returns an order number without storing the order, so you can run this tool as often as you like.

## Exercise 6: Let the agent choose the tool

Each tool works on its own. Now the orchestrator decides which one a request needs and fills the inputs from the user's words.

1. Select **Test** at the top right and select the **Start new test session** icon, because a session opened before you added the tools may never answer.
2. Send these three messages one after another, and wait for each reply:

```text
Which dishes have fewer than 10 portions in stock?
```

```text
Set the stock of Pizza Tartufo to 25.
```

```text
Order 2 Falafel Plate for Mara Huber, mara.huber@example.com.
```

Expected: the first reply comes from CS-Read food stock and names the dishes whose In Stock value is below 10 at that moment, with their numbers. The second runs CS-Update food stock with Pizza Tartufo and 25 and confirms `Pizza Tartufo: 25`. The third runs CS-Place food order and replies with an order number. During each run the chat shows the tool's reasoning messages with a screenshot after each step.

## Exercise 7: Restock several dishes in one request

The agent instructions tell the orchestrator to call the update tool once per dish. One request now chains both tools: a read to find the low dishes, then one update per dish it found.

1. In the same test session, send:

```text
Restock every dish with fewer than 10 portions to 20.
```

2. When the reply arrives, reload the shop's Catalog page in your own browser.

Expected: the reply lists each dish it restocked with its new value. The run calls CS-Read food stock once and CS-Update food stock once for every dish that was below 10, and the Catalog page shows 20 in the In Stock column for those dishes.

## Exercise 8: Price the runs in the map view

Computer use bills each step, so the same request costs more when it needs more screens. The map view of each session shows how many actions every run took.

1. Go to the agent's **Activity** tab and open the session of Exercise 7.
2. Switch **View** to **Map view** and select each **ExecuteCUA** node in turn.
3. For each node, note the tool, the **Number of actions** in its **Summary**, and multiply that number by 5.

Expected: the map shows one ExecuteCUA node for the stock read and one per restocked dish, each with a **Session replay**, an **Activity** list of its steps and a **Summary** with **Model** Claude Sonnet 4.5, **Machine details** Hosted browser and its **Number of actions**. The sum of all actions times 5 is the Copilot Credits the restock request consumed, and the update runs together cost more than the single read.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| **Add new Computer use** is missing or dimmed | Generative orchestration is off, or computer use is turned off for the environment | Turn on generative orchestration, or ask the administrator to turn on **Computer use** in the environment's features |
| "No machine able to run the automation has been found" | Another hosted browser session of yours is still running, or demand-based throttling applies | Wait until the other run finishes, then test again |
| A stock value differs from what you set | Another learner changed the same dish in the shared catalog | Read the stock again; the last save wins |
| The update run stops on the Catalog page | DishName does not match a Name in the table | Use the dish name exactly as the Catalog page shows it |
| The run stops after you added access control | An action targeted a site outside the allow list or an `http://` page | Check the domain under **Allowed websites and desktop apps** and use the `https://` address |
| The test chat shows your message but never answers | The test session started before the tools were added | Select **Start new test session** and send the message again |

## Summary

You built CS-Food Shop Assistant with three computer use tools that read, change and order through the food shop's web pages, fenced them to the shop's site, and let the orchestrator chain them from one request. You can now:

- Write computer use instructions that read a table and return structured values
- Parameterize a tool with several inputs the orchestrator fills from a chat message
- Fill and submit a multi-field web form with computer use
- Restrict tools with access control and HTTPS enforcement
- Price a computer use request from the number of actions in the map view
