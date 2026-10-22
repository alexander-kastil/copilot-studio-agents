# Read and Fill a Legacy Web App with Computer Use

![CS-Grey Logistics IT Help Desk uses CS-Look up portfolio to read Fourth Coffee's manager and value from the Financial Portfolio Dashboard and CS-Register inventory items to fill the Product Inventory Update form, both fenced to computerusedemos.blob.core.windows.net.](./_images/computer-use-overview.svg)

Departments keep asking the Grey Logistics IT Help Desk for lookups and data entry in old web apps that have no API, and a technician does each one by hand. In this demo the help desk agent does that work itself with computer use: it reads values from one web app, types records into another, and stays inside the boundaries you set. Microsoft hosts two sample web apps for computer use, and they stand in for the legacy apps here.

What you practice here: describing a screen task in plain language, parameterizing it with inputs, and fencing it with access control.

Duration: about 40 minutes.

## What you'll build

- A CS-Look up portfolio computer use tool that reads the manager and value of a client from the sample Financial Portfolio Dashboard.
- A `ClientName` input that makes the same tool work for any client the user names.
- Access control and HTTPS enforcement that restrict the tool to the sample site.
- A CS-Register inventory items tool that types two products into the sample Product Inventory Update form.

## Prerequisites

- A Standard agent named CS-Grey Logistics IT Help Desk (on the **Home** page, select **Other ways to build**, then **Agent** with the **Standard** badge under **Build with standard orchestration**) with generative orchestration on, which computer use requires (it is the default for new agents).
- A machine for computer use: the hosted browser (preview), which the tool selects with a ready connection when your environment offers it, or a Windows machine registered in Power Automate with Power Automate for desktop 2.61.132.25266 or later and **Enable for computer use** turned on.
- Copilot Credits in the environment: each step of a run consumes 5 credits with a standard model.
- Before the session, open both sample apps in a browser to check they load: `https://computerusedemos.blob.core.windows.net/web/Portfolio/index.html` and `https://computerusedemos.blob.core.windows.net/web/Adventure/index.html`.

## Exercise 1: Extract values from a web app

A lookup in a legacy portal is a sequence a person could describe to a colleague: open the page, find the row, read two values. Computer use takes that description literally, so you write it the same way and watch each step in the test view.

1. Open the agent, go to **Tools**, select **Add a tool**, and select the **Add new Computer use** card at the top of the **Add tool** dialog.
2. Paste these instructions into **Instructions** and select **Add and configure**:

```text
1. Go to https://computerusedemos.blob.core.windows.net/web/Portfolio/index.html.
2. Find the row for Fourth Coffee and record the Manager name and the Portfolio Value exactly as shown.
3. Return those two values as the final output.
```

3. The configuration page opens with the name Computer use. Under **Details**, set **Name** to `CS-Look up portfolio`, keep **Model** at **Claude Sonnet 4.5**, and replace **Description** with:

```text
Looks up the portfolio manager and portfolio value of a client in the Financial Portfolio Dashboard, a web app without an API. Use it when a user asks who manages a client's portfolio or what it is worth.
```

4. Scroll to **Machines** and check that **Machine** shows **Hosted browser** and **Connection** shows a green check; with your own machine, select it here instead. Select **Save**. If the page header still reads Computer use after the save, enter the name again and select **Save** once more.
5. In the **Instructions** card, select **Test directly**.

Expected: a **Test** window opens. The left column shows "Computer use will begin as soon as a computer is available", then the model's reasoning messages, while the **Preview** tab shows the hosted browser opening the dashboard and scrolling to the Fourth Coffee row. Within about a minute the status turns **Finished** and the last card reads `Manager: Yhlas Geldiyew Portfolio Value: $190,000,000`.

> **Note:** The **Model** list also offers **Computer-Using Agent (CUA)**. In the test run for this guide, CUA zoomed into the table until the Manager column was cut off and returned "Yhlas Galdiyew", so the guide keeps Claude Sonnet 4.5, which read the name exactly.

## Exercise 2: Make the client an input

A tool that only knows Fourth Coffee serves one question. An input lets the orchestrator pass whichever client the user names, and the tool combines it with the instructions at run time.

1. Close the **Test** window. In the **Inputs** card, select **Add input**, enter `ClientName` as **Name** and this **Description**, and select **Done**:

```text
The client name exactly as it appears in the Client Name column, for example Fourth Coffee or Northwind Traders.
```

2. Select all text in **Instructions**, delete it, and paste:

```text
1. Go to https://computerusedemos.blob.core.windows.net/web/Portfolio/index.html.
2. Find the row whose Client Name matches the ClientName input and record the Manager name and the Portfolio Value exactly as shown.
3. Return those two values as plain text in the form: Manager: <name>, Value: <value>.
```

3. Select **Save**, then **Test directly**. In **Configure test**, enter `Northwind Traders` as **ClientName** and select **Start test**.

Expected: the **Inputs** card lists ClientName with **Fill using** set to **Dynamically fill with AI**. The run opens the same dashboard and scrolls further down, because Northwind Traders sits near the end of the table, and after about two minutes it returns `Manager: Niklas Gasper, Value: $95,000,000`, the values shown in that row.

## Exercise 3: Fence the tool to one site

By default computer use may act on any website or app, which is more reach than a lookup needs. You restrict it to the sample site, confirm that HTTPS is required, and check who reviews runs that need a human decision.

1. Scroll to **Allowed websites and desktop apps** and turn on **Only allow specific websites and desktop apps**.
2. Select **Add**, keep **Type** at **Website**, enter this domain, and select **Add**:

```text
computerusedemos.blob.core.windows.net
```

3. Check that **Enforce HTTPS** is on; new computer use tools turn it on by default.
4. In **Human supervision**, check that **Assign requests to** lists you; the maker is the default reviewer, notified in Outlook.
5. Select **Save**, then **Test directly** with `Fourth Coffee` as **ClientName**.

Expected: the allow list shows two entries, computerusedemos.blob.core.windows.net (Website) and Microsoft Edge (Desktop app), which the hosted browser needs to open the site. The run succeeds exactly as before, because every action stays on the allowed `https://` site, and returns `Manager: Yhlas Geldiyew, Value: $190,000,000`.

> **Note:** Access control blocks actions outside the allow list; the model can still open another site, but any attempt to interact with it fails.

## Exercise 4: Let the agent call the tool from chat

The tool is only useful when the orchestrator picks it for the right questions and fills the input from the user's words. In a conversation the tool also shows its progress, which is worth seeing once before you decide where it belongs.

1. Close the **Test** window and select **Test** at the top right to open **Test your agent**. Select the **Start new test session** icon (the plus at the top of the pane), because a session opened before you added the tool may never answer.
2. Send:

```text
Who manages the Fourth Coffee portfolio, and what is it worth?
```

3. When the reply arrives, go to the **Activity** tab, open the newest session, and switch **View** to **Map view**.

Expected: the chat shows the model's reasoning messages with a screenshot after each step, then `Manager: Yhlas Geldiyew, Value: $190,000,000` and the reply "Fourth Coffee's portfolio is managed by Yhlas Geldiyew and is worth $190,000,000." The map view shows an **ExecuteCUA** node with a **Session replay**, an **Activity** list of the steps, and a **Summary** with `clientName` set to Fourth Coffee, **Model** Claude Sonnet 4.5, **Machine details** Hosted browser and **Number of actions** 4. The number of actions times 5 is the Copilot Credits the run consumes: 20 for this run.

## Exercise 5: Enter records with a second tool

Data entry is the other half of legacy work. A second tool with its own description types records into a form, and the orchestrator keeps lookups and entries apart by reading the two descriptions.

1. On the **Tools** page, select **Add a tool** > **Add new Computer use**, paste these instructions, and select **Add and configure**:

```text
1. Go to https://computerusedemos.blob.core.windows.net/web/Adventure/index.html.
2. Submit a new entry for each of the following items, filling Product Name, Product ID, Quantity, Price and Supplier in that order:
   Rear Derailleur, RD-4821, 50, 42.75, Tailspin Toys
   Pedal Set, PD-1738, 80, 19.99, Northwind Traders
3. After both entries, confirm that both items appear under Inventory Items. No confirmation from me is needed before submitting.
```

2. Set **Name** to `CS-Register inventory items` and **Description** to the text below, keep **Claude Sonnet 4.5** and the **Hosted browser**, and add the same website under **Allowed websites and desktop apps** as in Exercise 3. Select **Save**, and enter the name again if the header still reads Computer use.

```text
Enters product records into the Product Inventory Update web app, which has no API. Use it when a user asks to register, add or enter inventory items.
```

3. Select **Test directly**.

Expected: the preview shows the tool filling the five fields twice and submitting each entry. After about three minutes the status turns **Finished**, Pedal Set and Rear Derailleur are listed under **Inventory Items** with their IDs, quantities, prices, suppliers and an **Added** time, and the last card confirms both entries.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| **Add new Computer use** is missing or dimmed under **Add a tool** | Generative orchestration is off, or computer use is turned off for the environment | Turn on generative orchestration, or ask the administrator to turn on **Computer use** in the environment's features |
| **Machine** offers no **Hosted browser** and no machine | The hosted browser is turned off for the tenant, and no machine is registered or enabled for computer use | Register a machine in Power Automate and turn on **Enable for computer use** |
| "No machine able to run the automation has been found" on the hosted browser | Another hosted browser session of yours is still running, or demand-based throttling applies | Wait until the other run finishes, then test again |
| The test chat shows your question but never answers | The test session started before the tool was added | Select **Start new test session** and send the question again |
| A returned name differs from the page by a letter | The CUA model read a cut-off cell | Keep **Claude Sonnet 4.5** as the model |
| The run stops after Exercise 3 | An action targeted a site outside the allow list, or an `http://` page | Add the missing site to **Allowed websites and desktop apps**, or use the `https://` address |
| The run pauses and later stops | A human supervision request waited for a reply and timed out | Answer the Outlook review request before the response time limit |

## Summary

You gave the CS-Grey Logistics IT Help Desk agent two computer use tools that read from and write to web apps without an API, made one of them reusable with an input, and fenced both to a single HTTPS site. You can now:

- Write computer use instructions a model can follow step by step
- Parameterize a computer use tool with inputs the orchestrator fills
- Restrict a tool with access control, HTTPS enforcement, and a human reviewer
- Read the number of actions of a run in the map view and translate it into Copilot Credits

When the same app later gains an API or a connector, replace the computer use tool with it.
