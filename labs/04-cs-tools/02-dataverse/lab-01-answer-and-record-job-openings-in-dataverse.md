# Answer and Record Job Openings in Dataverse

The HR team keeps its open positions in a table, and today someone opens it, filters it by hand, and keys in every new opening. In this lab the HR agent answers questions straight from a Dataverse table and records a new opening after the user confirms it.

Duration: about 20 minutes.

## What you'll build

- A Dataverse table `Job Opening` with three rows.
- A Dataverse knowledge source on the HR agent that answers questions over those rows.
- A `Record job opening` tool on the Microsoft Dataverse connector that creates a row after the user confirms.

## Prerequisites

- The HR agent from the previous labs, with **Authenticate with Microsoft** under **Settings** > **Security** > **Authentication**.
- The Environment Maker role in the agent's environment, with Dataverse search turned on (ask your administrator if **Dataverse** cannot be added as knowledge).

## Task 1: Create the Job Opening table

The agent can only answer from rows that exist, so you start with a small table whose answers you can check by eye.

1. In [Power Apps](https://make.powerapps.com), select the agent's environment, go to **Tables**, and select **New table** > **Set advanced properties**.
2. Set **Display name** to `Job Opening`, open the **Primary column** tab, set its **Display name** to `Title`, and select **Save**.
3. Select **+ New column** three times and add these columns:

| Display name | Data type |
|--------------|-----------|
| Department | Single line of text |
| Open Positions | Whole number |
| Location | Single line of text |

4. Select **Edit** in the command bar to open the rows in a grid, and add these rows:

| Title | Department | Open Positions | Location |
|-------|------------|----------------|----------|
| HR Generalist | Human Resources | 2 | Vienna |
| Software Engineer | IT | 4 | Graz |
| Sales Representative | Sales | 3 | Vienna |

Expected: the **Job Opening** table lists three rows with all four columns filled.

## Task 2: Add the table as knowledge and ask about it

The orchestrator searches a knowledge source only when its description says what is inside, so you describe the table in the words users ask with.

1. Open the HR agent and select **Add knowledge** on the **Overview** page.
2. Select **Dataverse**, search for `Job Opening`, select the table, and select **Next**.
3. Replace the knowledge description with:

```text
Open job positions at the company: one row per job opening with its title, department, number of open positions and location. Use it for questions about open jobs, vacancies and hiring needs.
```

4. Select **Add to agent**.
5. In the test pane, send:

```text
Which job openings do we have in Vienna, and how many positions are open?
```

Expected: the answer names HR Generalist with 2 positions and Sales Representative with 3, and cites the Dataverse source. If it finds nothing, wait a few minutes until Dataverse search has indexed the new rows and ask again.

## Task 3: Record a new opening with a Dataverse tool

Knowledge reads rows; a tool writes them. You add one action of the Microsoft Dataverse connector and make the agent ask for confirmation before it creates the row.

1. Go to **Tools** > **+ Add a tool**, search for `Microsoft Dataverse`, select **Add a new row**, create the connection if prompted, and select **Add and configure**.
2. Set **Name** to `Record job opening` and the description to:

```text
Creates a new job opening in the Job Opening table. Use it when a user asks to record, add or open a new job position. Requires the title, the department, the number of open positions and the location.
```

3. Under **Inputs**, set **Table name** to the custom value **Job Openings** and select **Save**. Leave the column inputs that appear on **Dynamically fill with AI**.
4. Under **Additional details**, set **Ask the end user before running** to **Yes** and select **Save**.
5. In the test pane, send:

```text
Record a new job opening: Payroll Specialist in Finance, 1 position, in Graz.
```

6. Check the values in the confirmation and confirm.
7. In Power Apps, open the **Job Opening** table and refresh the rows.

Expected: the agent shows Payroll Specialist, Finance, 1, and Graz for confirmation before it runs the tool; after you confirm, the table has a fourth row with these values.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| **Dataverse** is missing or the table cannot be selected in **Add knowledge** | Dataverse search is off, or you lack permission to the table | Ask the administrator to turn on Dataverse search and confirm your security role |
| The column inputs do not appear after you set **Table name** | The connector schema refreshes only after required inputs are set | Save the tool, close it, and reopen its configuration page |
| The new row does not appear in knowledge answers right away | The search index updates after the write | Check the row in Power Apps; knowledge answers catch up after indexing |
