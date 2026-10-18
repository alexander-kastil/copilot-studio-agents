# Build an App from a Description

Aurora Provisions sales reps log customer tasting requests in email, so nobody can see which requests are open or who owns them. In this demo you describe a small tracker app in plain language, refine it twice by conversation, read the generated code, then publish and share it. The app runs on sample data, which keeps the focus on the build loop and away from connections.

What you practice here: turning a plain-language description into a published app through small, checked refinements.

Duration: about 15 minutes.

---

Setup: sign in to Copilot Studio, open the **Home** page, and confirm that the **App** tile appears. Nothing to install.

## What you'll build

- A tasting request tracker that lists requests and counts the open ones by status.
- A priority field and a status summary, both added by conversation.
- A published app that a colleague can open from a link.

## Exercise 1: Describe the app and let Copilot draft it

The first message sets the scope. Name the outcome, the people, the data, and the actions in one message. Copilot Studio asks follow-up questions when something is missing, then builds the draft. Sample data is enough here, because this exercise is about the shape of the app.

1. Sign in to Copilot Studio and select the **App** tile on the **Home** page.
2. In the conversation area, paste the description below and select **Submit**.

```text
Build a tasting request tracker for Aurora Provisions, a fictional provisions company. Sales reps log a customer tasting request with the customer name, the product, the requested date, and the status. Include a list of all requests and a summary that counts open requests by status. Use sample data for now.
```

3. Answer any follow-up question in one sentence, for example: "Sales reps only, and sample data is fine."

Expected: the app preview appears and the chat moves to the left pane. Expect a list of requests with sample rows and a summary of counts by status. The exact layout varies from run to run, so check that the result matches the description you sent.

## Exercise 2: Refine with one specific change

Refinement is where the app takes shape. A specific change works better than a general wish, because the app updates its data model, logic, and screens together, and you see the effect in the preview straight away.

1. In the conversation area, paste the change below and select **Submit**.

```text
Add a priority field with the choices High, Medium, and Low. Sort the list so High priority requests appear first.
```

2. Check the preview before you send another change.

Expected: the preview shows a priority field with three choices, and High priority rows sit above Medium and Low rows.

> **Tip:** Compare the preview with the change you asked for before you send the next one. If the reply describes the change but the preview does not show it, send a shorter, more specific request.

## Exercise 3: Refine the logic behind a label

The second refinement changes a rule. Changing the status choices also changes what the summary counts, so you can watch the logic move together with the interface.

1. Paste the change below and select **Submit**.

```text
Change the status choices to New, Scheduled, Completed, and Cancelled. Count New and Scheduled as open in the summary, and count Completed and Cancelled as closed.
```

2. Open the summary in the preview and add up the counts.

Expected: the status field offers the four choices, and the open and closed counts together equal the number of requests in the list.

## Exercise 4: Read the code view

Every app has real code behind it. The code view shows what Copilot Studio generated. The view is read-only, so you learn from the code but make every change through the conversation. Reading the priority field shows how your sentence became a data structure.

1. Switch from the app preview to the code view with the control that toggles between the app and its code.
2. Find the priority field and check that it lists High, Medium, and Low.
3. Try to edit a line. The view does not accept edits, so return to the conversation and describe the change there.

Expected: the code view shows the priority choices you asked for, and it refuses your edit. The conversation remains the only place where changes stick.

## Exercise 5: Publish and share

Publishing and sharing are separate actions. Publish makes the latest version available to the people you share it with. Share decides who can open it. Test the main scenario first, because changes made after publishing stay hidden until you publish again.

1. Run the app and test one scenario: open a request, change its status to Completed, and check that the summary updates.
2. Select **Publish**, read any validation messages, then confirm.
3. Select **Share**, enter a colleague's work account, and send the invitation.
4. Open the app's link and confirm that the published version shows the priority field and the four statuses.

Expected: publishing completes, the colleague appears in the share list, and the link opens the latest version. The records you see come from the sample data inside the app, because sample records can be part of the app itself. Sharing the app does not give your colleague access to a connected list, which the lab covers.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| No **App** tile on the **Home** page | The New experience toggle is off, or an administrator turned app creation off | Turn on the New experience toggle on the **Home** page; if the tile is still missing, ask your administrator |
| The preview stays empty or the agent keeps asking questions | The description is too broad | Answer the follow-up questions in one message, or start with a smaller app and add to it |
| Changes disappear after the app reloads | The app is using sample data, which can reset | Expected for sample data; the lab connects a real list so changes persist |
| The **Share** choice you expect is missing | Environment or administrator policy hides it | Use the share method that appears, or ask your administrator which methods the environment allows |
| The build slows down or warns about credits | Building and previewing consume Copilot Credits | Keep follow-up requests short and ask your instructor how many credits the class environment has |

## Summary

You described an app in plain language, refined it twice, read its code, published it, and shared it. You can now:

- Write a description that names the outcome, the people, the data, and the actions.
- Refine an app with one specific change at a time and check each change in the preview.
- Explain why the code view is read-only and where changes belong.
- Explain why publishing and sharing are two separate actions.

Next, the lab connects the same kind of app to a SharePoint list, then proves that data access needs its own permission.
