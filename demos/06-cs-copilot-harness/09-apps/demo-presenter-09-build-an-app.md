---
presents: demo-09-build-an-app.md
budget: 4 min
beats: 4
---

# Present: Build an App from a Description

> **Note:** This demo shows no agent: it builds Tasting Request Tracker, an app made from the **App (preview)** tile.

**Guide:** [Build an App from a Description](demo-09-build-an-app.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · your personal environment needs Copilot Credits, and the first build takes about five minutes

**Agent:** none; the demo builds Tasting Request Tracker from the **App (preview)** tile in your personal environment

**Initial prompt** (attach nothing; sent from the **App (preview)** page in Exercise 1):

```text
Build a tasting request tracker for Aurora Provisions, a fictional provisions company. Sales reps log a customer tasting request with the customer name, the product, the requested date, and the status. Include a list of all requests and a summary that counts open requests by status. Use sample data for now.
```

### Beat 1: One message drafts, checks and publishes the app (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Home** > **App (preview)** > **Send** · **No, keep it local** > **Submit**
**What is there:** "Tasting Request Tracker is built and published:" with a link; a summary with the open count and a count per status, 11 sample requests grouped by month, a **Log request** button, and the five statuses Copilot chose under "Decisions for you".

### Beat 2: Data, logic and screens move together (1 min)

**Navigate:** conversation > **Send** · preview > summary
**What is there:** **HIGH PRIORITY**, **MEDIUM PRIORITY** and **LOW PRIORITY** sections with a badge per row; the statuses New, Scheduled, Completed and Cancelled, with 8 open and 3 closed for 11 requests.

### Beat 3: Real code, changed only by conversation (1 min)

**Navigate:** **Code view** (**</>**) > **Code preview** > `src` > `data` > `tasting-requests.ts`
**What is there:** `PRIORITIES = ["High", "Medium", "Low"]`, the `STATUSES` list and a `priority` field in the request type; typed characters change nothing.

### Beat 4: Publish and share are two actions (1 min)

**Navigate:** a New request > **Completed** · **Publish** · **Share** > **Add people** · **Link sharing** > **Copy link**
**What is there:** the open count down by one; "Published" with date and time in the app name menu; **Share Tasting Request Tracker** with **People in your org can use**; the link shows the priority sections and four statuses on fresh sample data.
