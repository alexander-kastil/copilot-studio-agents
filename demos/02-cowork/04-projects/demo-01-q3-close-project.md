# Run the Q3 Close as a Project

![Five steps on one track: create the Q3 Close project and save its instructions, write the Q3 close summary from the project page, turn it into a one-slide decision ask, run the same summary request outside the project to compare, and archive the project when the close is done; both files land under Outputs.](./_images/01-q3-close-project-overview.svg)

Every quarter-close document you hand to leadership repeats the same rules: who reads it, what the region is called, how revenue is shown and what it ends with. This demo writes those rules into a Cowork project once, so every task of the close follows them without being told.

What you practice here: putting the facts of one piece of work into project instructions and starting each task from the project page.

Duration: about 15 minutes.

> **Reasoning effort:** Use **Light** for every step. Set it with the effort slider next to the send arrow. Each task consumes Copilot Credits; archive the project at the end so it stays out of your navigation.

## Related Topics

This demo practises [Organizing Work with Projects](./readme.md). It continues the Aurora Outdoor Q3 close from [Compile a Q3 Business Review Deck](../01-intro/demo-01-quarterly-review.md), but runs on its own: the two source files ship with it. The repeatable procedure behind a recurring report belongs in a skill, as [Creating Custom Skills](../03-custom-skills/readme.md) shows; this demo keeps the project-specific facts in the project.

---

Each step follows the same pattern:

- Overview: what this step achieves
- Recipe: a complete prompt or UI sequence you can use as-is
- Expected Outcome: observable artefacts that confirm success

You are the Regional Manager for Northern Europe at Aurora Outdoor, closing out Q3 FY26. Leadership expects a summary, a decision ask and a few follow-ups, all in the same house rules.

---

## Demo Files

Point Cowork at the `demo-01-q3-close-project` folder.

| File | What it represents |
|------|--------------------|
| `q3-sales-by-region.xlsx` | Q3 revenue by country and category in EUR thousands, with Q2 and prior-year columns, plus a **Targets** sheet with target, actual, attainment and headcount per country |
| `q3-regional-notes.docx` | Your notes on what drove the numbers and what needs a decision |

---

## Step 1: Create the Q3 Close project and its instructions

**Overview:** The project holds the rules of the close, so no later prompt has to repeat them. Create it first, then give it instructions.

**Recipe:**

1. In Microsoft 365 Copilot, set the **Chat / Cowork** toggle to **Cowork**. In the left navigation, hover the **Projects** heading and select the **+** that appears.
2. In the **New project** dialog, enter `Q3 Close` as the **Project name**, choose a color and select **Create**.
3. On the project page, open **More actions** (**...**) > **Edit instructions**, paste the text below and select **Save**.

```text
This project is the Aurora Outdoor Northern Europe Q3 FY26 close. Every document goes to the Nordic leadership team.
Call the region "Northern Europe", never "Nordics" or "Scandinavia".
Report revenue in EUR thousands and compare it with the Targets sheet of q3-sales-by-region.xlsx.
Keep every document to two pages, open with the decision you need from leadership, and end with a section titled "Open decisions".
```

**Expected Outcome:** **Q3 Close** is listed under **Projects** in the left navigation, and its page shows the chat input and the tabs **Recent**, **Outputs** and **Project context**, with "No chats or tasks yet" under **Recent**. **More actions** > **Edit instructions** shows the four saved lines.

---

## Step 2: Write the Q3 close summary from the project page

**Overview:** A task started on the project page belongs to the project from its first message and carries its instructions. The prompt below says nothing about the audience, the naming or the format.

**Recipe:**

On the **Q3 Close** project page, select **+** > **Upload images and files**, attach `q3-sales-by-region.xlsx` and `q3-regional-notes.docx` from the `demo-01-q3-close-project` folder, then send:

```text
Read q3-sales-by-region.xlsx and q3-regional-notes.docx and write the Q3 close summary as a Word document named q3-close-summary.docx.
```

**Expected Outcome:** `q3-close-summary.docx` follows the project instructions although the prompt never mentioned them: it opens with the decision you need from leadership, calls the region "Northern Europe", gives revenue in EUR thousands against the **Targets** sheet, stays within two pages and ends with **Open decisions**. Back on the project page, the task is listed under **Recent** and the file under **Outputs**.

---

## Step 3: Turn the summary into a one-slide decision ask

**Overview:** The second task of the project builds on the first one's file and inherits the same rules, so the slide speaks to the same audience in the same terms.

**Recipe:**

On the **Q3 Close** project page, attach `q3-close-summary.docx` from **Outputs** or your OneDrive output folder, then send:

```text
Turn q3-close-summary.docx into a one-slide PowerPoint named q3-decision-ask.pptx that asks leadership for the top decision.
```

**Expected Outcome:** `q3-decision-ask.pptx` puts the leadership decision first and uses "Northern Europe" and EUR thousands. **Recent** lists two tasks and **Outputs** lists both files side by side.

---

## Step 4: Run the same summary outside the project

**Overview:** Project instructions stop at the project's edge. The same request in a task that belongs to no project shows what the instructions were doing.

**Recipe:**

Select **New** in the left navigation, outside the project, attach the same two files, then send the same prompt:

```text
Read q3-sales-by-region.xlsx and q3-regional-notes.docx and write the Q3 close summary as a Word document named q3-close-summary.docx.
```

**Expected Outcome:** Cowork writes a summary from the same data in its own default layout. Nothing tells it about the leadership audience, the two-page limit or the **Open decisions** section, so compare the openings and the endings of the two documents side by side. The new file does not appear under **Outputs** of **Q3 Close**.

---

## Step 5: Archive the project when the close is done

**Overview:** A finished project leaves the navigation without losing its tasks or files.

**Recipe:**

Open **Q3 Close**, select **More actions** > **Archive** and confirm with **Archive**. Cowork opens the projects page: select **Archived**, open **Q3 Close** and check **Outputs**.

**Expected Outcome:** **Q3 Close** is gone from the left navigation and listed under **Archived**, with both tasks and both files still in place. **More actions** > **Restore** brings it back to **Active** for next quarter's close.
