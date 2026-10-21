# Read and Fill a Legacy Web App with Computer Use

Departments keep asking the Contoso IT Help Desk for lookups and data entry in old web apps that have no API, and a technician does each one by hand. In this demo the help desk agent does that work itself with computer use: it reads values from one web app, types records into another, and stays inside the boundaries you set. Microsoft hosts two sample web apps for computer use, and they stand in for the legacy apps here.

What you practice here: describing a screen task in plain language, parameterizing it with inputs, and fencing it with access control.

Duration: about 40 minutes.

## What you'll build

- A Look up portfolio computer use tool that reads the manager and value of a client from the sample Financial Portfolio Dashboard.
- A `ClientName` input that makes the same tool work for any client the user names.
- Access control and HTTPS enforcement that restrict the tool to the sample site.
- A Register inventory items tool that types two products into the sample Product Inventory Update form.

## Prerequisites

- A Standard agent named Contoso IT Help Desk (on the home page, open the **New agent** dropdown and select **Agent** with the **Standard** badge under **Other ways to build**) with generative orchestration on, which computer use requires (it is the default for new agents).
- A machine for computer use: the hosted browser (preview) if your environment offers it, or a Windows machine registered in Power Automate with Power Automate for desktop 2.61.132.25266 or later and **Enable for computer use** turned on.
- Copilot Credits in the environment: each step of a run consumes 5 credits with a standard model.
- Before the session, open both sample apps in a browser to check they load: `https://computerusedemos.blob.core.windows.net/web/Portfolio/index.html` and `https://computerusedemos.blob.core.windows.net/web/Adventure/index.html`.

## Exercise 1: Extract values from a web app

A lookup in a legacy portal is a sequence a person could describe to a colleague: open the page, find the row, read two values. Computer use takes that description literally, so you write it the same way and watch each step in the test view.

1. Open the agent, go to **Tools**, and select **Add a tool** > **New tool** > **Computer use**.
2. Paste these instructions and select **Add and configure**:

```text
1. Go to https://computerusedemos.blob.core.windows.net/web/Portfolio/index.html.
2. Find the row for Fourth Coffee and record the Manager name and the Portfolio Value exactly as shown.
3. Return those two values as the final output.
```

3. Set **Name** to `Look up portfolio`, set **Model** to **Computer-Using Agent (CUA)**, and use this description:

```text
Looks up the portfolio manager and portfolio value of a client in the Financial Portfolio Dashboard, a web app without an API. Use it when a user asks who manages a client's portfolio or what it is worth.
```

4. Under **Machine**, select the hosted browser or your registered machine, then select **Save** and **Test**.

Expected: the left panel shows the instructions and a step-by-step reasoning log, the right panel shows the browser opening the dashboard and finding the Fourth Coffee row, and the run ends with **Test completed** and the two values from that row (when this guide was written, Yhlas Geldiyew and $190,000,000).

## Exercise 2: Make the client an input

A tool that only knows Fourth Coffee serves one question. An input lets the orchestrator pass whichever client the user names, and the tool combines it with the instructions at run time.

1. On the tool's configuration page, under **Inputs**, add an input named `ClientName` with this description:

```text
The client name exactly as it appears in the Client Name column, for example Fourth Coffee or Northwind Traders.
```

2. Replace the instructions with:

```text
1. Go to https://computerusedemos.blob.core.windows.net/web/Portfolio/index.html.
2. Find the row whose Client Name matches the ClientName input and record the Manager name and the Portfolio Value exactly as shown.
3. Return those two values as plain text in the form: Manager: <name>, Value: <value>.
```

3. Select **Save**, then **Test** with `Northwind Traders` as the input value.

Expected: the run opens the same dashboard, finds the Northwind Traders row, and returns one line in the form `Manager: <name>, Value: <value>` with the values shown in that row.

## Exercise 3: Fence the tool to one site

By default computer use may act on any website or app, which is more reach than a lookup needs. You restrict it to the sample site, require HTTPS, and name a reviewer for runs that need a human decision.

1. On the configuration page, turn on **Access control** and add this website:

```text
computerusedemos.blob.core.windows.net
```

2. Turn on **Enforce HTTPS**.
3. Under **Human supervision**, add yourself to **Assign requests to**.
4. Select **Save** and run **Test** again with `Fourth Coffee`.

Expected: the run succeeds exactly as before, because every action stays on the allowed `https://` site; the configuration page now lists one allowed website, HTTPS enforcement on, and you as the reviewer.

> **Note:** Access control blocks actions outside the allow list; the model can still open another site, but any attempt to interact with it fails.

## Exercise 4: Let the agent call the tool from chat

The tool is only useful when the orchestrator picks it for the right questions and fills the input from the user's words. In a conversation the tool also shows its progress, which is worth seeing once before you decide where it belongs.

1. In the test pane, send:

```text
Who manages the Fourth Coffee portfolio, and what is it worth?
```

2. Open the activity map for the turn and count the computer use steps.

Expected: the activity map shows Look up portfolio with `ClientName` set to Fourth Coffee, the chat shows reasoning messages and screenshots while the tool runs, and the reply names the manager and the value; the number of steps times 5 is the Copilot Credits the run consumed.

## Exercise 5: Enter records with a second tool

Data entry is the other half of legacy work. A second tool with its own description types records into a form, and the orchestrator keeps lookups and entries apart by reading the two descriptions.

1. Select **Add a tool** > **New tool** > **Computer use**, paste these instructions, and select **Add and configure**:

```text
1. Go to https://computerusedemos.blob.core.windows.net/web/Adventure/index.html.
2. Submit a new entry for each of the following items, filling Product Name, Product ID, Quantity, Price and Supplier in that order:
   Rear Derailleur, RD-4821, 50, 42.75, Tailspin Toys
   Pedal Set, PD-1738, 80, 19.99, Northwind Traders
3. After both entries, confirm that both items appear under Inventory Items. No confirmation from me is needed before submitting.
```

2. Set **Name** to `Register inventory items`, the description to the text below, the same machine as before, and the same access control website; select **Save**.

```text
Enters product records into the Product Inventory Update web app, which has no API. Use it when a user asks to register, add or enter inventory items.
```

3. Select **Test**.

Expected: the preview shows the tool filling the five fields twice, and the run ends with Rear Derailleur and Pedal Set listed under Inventory Items.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| **Computer use** is missing under **Add a tool** | Generative orchestration is off, or a data policy blocks the tool | Turn on generative orchestration and select the information icon next to the tool |
| No machine appears under **Machine** | No machine is registered or enabled for computer use | Register a machine in Power Automate and turn on **Enable for computer use**, or use the hosted browser if offered |
| Runs wait as **Queued** | Another run is using the same machine | Wait, or check **Run queue** on the machine in Power Automate |
| The run stops after Exercise 3 | An action targeted a site outside the allow list, or an `http://` page | Add the missing site to **Access control**, or use the `https://` address |
| The run pauses and later stops | A human supervision request waited for a reply and timed out | Answer the Outlook review request, or the inline card in the activity map |

## Summary

You gave the Contoso IT Help Desk agent two computer use tools that read from and write to web apps without an API, made one of them reusable with an input, and fenced both to a single HTTPS site. You can now:

- Write computer use instructions a model can follow step by step
- Parameterize a computer use tool with inputs the orchestrator fills
- Restrict a tool with access control, HTTPS enforcement, and a human reviewer
- Read the step count of a run and translate it into Copilot Credits

When the same app later gains an API or a connector, replace the computer use tool with it.
