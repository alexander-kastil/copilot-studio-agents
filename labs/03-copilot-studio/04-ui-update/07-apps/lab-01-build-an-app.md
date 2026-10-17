# Build and Share a Business App

Aurora Provisions sales reps track customer tasting requests in email, so the status of each request is hard to see. In this lab you build an app that keeps those requests in a SharePoint list, refine it, publish it, and share it with a classmate. You finish by proving the rule that matters most after sharing: a person needs access to the data as well as to the app.

What you practice here: connecting a generated app to organizational data, then treating app sharing and data access as two separate permissions.

Duration: about 25 minutes.

---

Setup: sign in to Copilot Studio with the New experience toggle on, and open the lab folder `lab-01-build-an-app` so you can attach its CSV file. Your instructor names the SharePoint team site and the classmate you share with.

## What you'll build

- A tasting request app that stores its records in a SharePoint list.
- A status filter and a priority sort, both added by conversation.
- A published app that a classmate opens from a link, with access to the list granted separately.

## Lab Files

| File | What it represents |
|------|--------------------|
| `lab-01-build-an-app/aurora-provisions-tasting-requests.csv` | Ten sample tasting requests with the field names the app needs. You attach it in Step 2 as context, and Step 3 uses its rows as the first records in the list. |

## Prerequisites

- A Copilot Studio account where you can create apps, with the **App** tile visible on the **Home** page.
- The SharePoint team site your instructor names, where you can create lists.
- A classmate's work account for the sharing step in Step 7.
- Copilot Credits allocated to your environment. Building, previewing, and testing consume credits, so keep each request short.

## Step 1: Decide that an app fits the job

Before you build, confirm that the work needs a screen. Sales reps must look up requests, update their status, and see a summary, which needs records and a view. A workflow runs steps without a screen, and an agent answers questions, so neither one gives the team a place to update records.

1. Read the three build options in the topic readme's comparison table.
2. Write one sentence that says why the tasting request tracker needs a screen.

Expected: your sentence names the need for records, a view, and updates by several people. If your sentence describes only a question or a fixed sequence, reread the comparison table before continuing.

## Step 2: Create the app from the description and the CSV

Attaching the CSV gives the agent the field names and sample rows to work from. An attached file is context only, so it does not connect the app to live data. Step 3 makes the connection.

1. On the **Home** page, select the **App** tile.
2. Select **+** in the chat, then attach `aurora-provisions-tasting-requests.csv` from the `lab-01-build-an-app` folder.
3. Paste the description below and select **Submit**.

```text
Build a tasting request tracker for Aurora Provisions sales reps. Each request has a request ID, customer name, product, requested date, priority, and status. The statuses are New, Scheduled, Completed, and Cancelled. Use the attached CSV for the field names and sample rows.
```

4. Answer any follow-up question in one sentence.

Expected: the app preview appears and the chat moves to the left pane. The fields in the preview follow the column names of the CSV, such as request ID and customer name.

## Step 3: Connect the records to a SharePoint list

Sample data resets when the app reloads, so the records need a home that persists. A SharePoint list suits straightforward team records such as requests. This step asks the agent to store the records in a list on the team site your instructor named.

1. In the chat, paste the request below and send it.

```text
Store the tasting requests in a new SharePoint list named Aurora Tasting Requests on my team site. Load the rows from the attached CSV as the first records, and read and write the list for every change.
```

2. If the agent asks which site to use, reply with the team site your instructor named.
3. Approve any connection prompt that appears, using your own account.

Expected: open the **Data** view from the app's metadata menu. It names the SharePoint list Aurora Tasting Requests as the source, and the preview shows the CSV rows as records.

> **Note:** Creating a list is a supported preview scenario, but the options shown depend on your environment. If the list option is missing, ask your instructor for an existing list and connect to that instead.

## Step 4: Refine the app with a status filter

A filter is a single, checkable change. Keep the request to one change, so that if the preview breaks you know which change caused it.

1. Paste the request below and send it.

```text
Add a filter above the list so sales reps can show only the requests with one chosen status.
```

2. Choose Scheduled in the new filter in the preview.

Expected: a status filter appears above the list, and choosing Scheduled shows only the Scheduled requests from the CSV rows.

## Step 5: Refine the app with a priority sort

The second refinement changes how the list reads. Sorting by priority puts the urgent requests first, which is how the sales team uses the list each morning.

1. Paste the request below and send it.

```text
Sort the list so High priority requests appear first, then Medium, then Low.
```

2. Check the first three rows in the preview.

Expected: the list opens with High priority requests, followed by Medium and then Low, and the status filter from Step 4 still works.

## Step 6: Publish the app

Publishing makes the latest tested version available to the people you share it with. Test the main scenario first, because changes made after publishing stay hidden until you publish again.

1. Run the app and open one request. Change its status to Completed, then confirm that the list updates.
2. Select **Publish**, read any validation messages, then confirm.
3. Open or copy the app's URL and check that the published app shows the filter and the sort.

Expected: publishing completes, and the app's URL opens the latest version with the status filter and the priority sort.

## Step 7: Share the app with a classmate

Sharing gives a person permission to open and use the app. It does not give them permission to edit the design, and it does not give them access to the SharePoint list. You will see that gap in Step 8.

1. Select **Share**.
2. Choose specific people, then enter your classmate's work account.
3. Read the data access and connection information shown in the share dialog, then send the invitation.

Expected: your classmate appears in the share list, and the dialog states what data and connections the app uses.

## Step 8: Confirm that data access is a separate permission

This step proves the rule from the topic readme. Your classmate can open the app, but the records come from the SharePoint list, and the list has its own permissions. You grant those permissions in SharePoint.

1. Ask your classmate to open the app link from Step 7 and select the sharing invitation.
2. Ask your classmate to note what the app shows. The app may open with no records, or show a permission message or a consent prompt for the connection.
3. If the classmate sees a consent prompt, the classmate approves the connection with their own account.
4. Open the **Aurora Tasting Requests** list in SharePoint, and grant your classmate access to the list using the site's sharing or permissions settings.
5. Ask your classmate to reload the app.

Expected: after the list permission is granted, the classmate sees the ten tasting requests in the app. Before the grant, the app opened without the records, which proves that sharing the app and sharing the data are two separate actions.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The preview is empty, or the agent keeps asking questions | The first request is too broad | Answer the follow-up questions in one message, or restart with a shorter description |
| The attached CSV has no effect on the app | An attached file is context only, not a live connection | Complete Step 3 so the app reads from the SharePoint list |
| The SharePoint list option does not appear | The list creation scenario is not offered in your environment | Ask your instructor for an existing list, then connect the app to it |
| The classmate sees the app but no records | Sharing the app does not grant access to the list | Complete Step 8 by granting the classmate access to the list in SharePoint |
| Changes disappear after the app reloads | The app is still using sample data | Open the **Data** view, confirm the SharePoint list is the source, and reconnect if needed |
| The **Share** choice you expect is missing | An environment or administrator policy hides it | Use the methods shown, or ask your instructor which sharing methods the environment allows |

## Verify

You have met the lab goal when all of the following are true:

1. The **Data** view names the SharePoint list Aurora Tasting Requests as the app's source.
2. The published app shows the status filter and the priority sort.
3. Your classmate opened the app after Step 7 and saw the records only after Step 8's list permission was granted.
4. You can state in one sentence why sharing an app does not share its data.

## Summary

You built a tasting request app on a SharePoint list, refined it with a filter and a sort, published it, and shared it with a classmate. You also showed that data access is a separate permission from app access. You can now:

- Decide whether a business task needs an app, a workflow, or an agent.
- Attach a file for context and connect the app to a live data source.
- Publish a tested version and share it with specific people.
- Grant data access in the source system and confirm that a shared app shows its records.

Next, return to the topic readme to compare apps with workflows and agents in the new experience.

## Cleanup

Remove the classmate's share from the app, then ask your instructor whether to delete the Aurora Tasting Requests list. Keep the `lab-01-build-an-app` folder so you can repeat the lab.
