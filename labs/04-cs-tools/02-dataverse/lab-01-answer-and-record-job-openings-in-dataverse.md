# Answer and Record Job Openings in Dataverse

The HR team keeps its open positions in a table, and today someone opens it, filters it by hand, and keys in every new opening. In this lab the HR agent answers questions straight from a Dataverse table and records a new opening after the user confirms it.

Duration: about 20 minutes.

## What you'll build

- A Dataverse table `Job Opening` with three rows.
- A Dataverse knowledge source on the HR agent that answers questions over those rows.
- A `Record job opening` tool on the Microsoft Dataverse connector that creates a row after the user confirms.

## Prerequisites

- The HR agent with **Authenticate with Microsoft** under **Settings** > **Security** > **Authentication**; [Set up the HR Agent](#set-up-the-hr-agent) builds it if you don't have it.
- The Environment Maker role in the agent's environment, with Dataverse search turned on (ask your administrator if **Dataverse** cannot be added as knowledge).

## Set up the HR Agent

This lab starts from a Standard agent named HR Agent with its description and instructions. If you built it in the Basics labs, for example in [Create Your First Copilot Studio Agent](../../03-cs-basics/01-standard-agents/lab-01-create-your-first-agent.md), open it from **Agents** and skip this section. Otherwise create it now:

1. Go to [Copilot Studio](https://copilotstudio.microsoft.com), on **Home** select **Other ways to build**, then, under **Build with standard orchestration**, select **Agent** with the **Standard** badge.
2. In the **Name your agent** dialog, enter `HR Agent` and select **Create**.
3. Wait until the agent has finished setting up (the **Edit** commands stay disabled for about a minute). On the **Overview** tab, select **Edit** in the **Details** section, paste the following text into **Description** and select **Save**.

```txt
You help employees to find information about HR related policies
```

4. Select **Edit** in the **Instructions** section, paste the following instructions and select **Save**.

```txt
- Provide employees with clear, accurate information about HR policies and procedures.
- Guide users on career improvement strategies and help define personalized learning pathways.
- Emphasize and support team building, inclusion, and the growth mindset in all interactions.
- Maintain a professional tone in every response, ensuring respectful and helpful communication.
- Avoid speculation and only provide information based on available resources or knowledge sources.
- Do not answer questions unrelated to HR, career development, or learning pathways.
- Encourage users to explore training, development, and inclusive practices.
- Respond promptly and clearly to all user queries.
```

5. Select **Settings** > **Security** > **Authentication** and check that **Authenticate with Microsoft** is selected.

Expected: the **Overview** tab of HR Agent shows the description and the instructions, and **Authentication** shows **Authenticate with Microsoft**.

## Task 1: Create the Job Opening table

The agent can only answer from rows that exist, so you start with a small table whose answers you can check by eye.

1. In [Power Apps](https://make.powerapps.com), select the agent's environment, go to **Tables**, and select **New table** > **Table (advanced properties)**.
2. Set **Display name** to `Job Opening`, keep the filled-in **Plural name**, open the **Primary column** tab, set its **Display name** to `Title`, and select **Save**.
3. Select **+** at the end of the column header row three times and add these columns (**Whole number** is under **Number**):

| Display name | Data type |
|--------------|-----------|
| Department | Single line of text |
| Open Positions | Whole number |
| Location | Single line of text |

4. Select **Edit** in the command bar to open the rows in a grid. If the grid shows only **Title** and **Created On**, select the **+N more** entry at the end of the header > **Show existing column**, tick **Department**, **Location** and **Open Positions**, and select **Save**. Then add these rows one at a time, letting each row save before you start the next:

| Title | Department | Open Positions | Location |
|-------|------------|----------------|----------|
| HR Generalist | Human Resources | 2 | Vienna |
| Software Engineer | IT | 4 | Graz |
| Sales Representative | Sales | 3 | Vienna |

Expected: the **Job Opening** table lists three rows with all four columns filled.

## Task 2: Add the table as knowledge and ask about it

The orchestrator searches a knowledge source only when its description says what is inside, so you describe the table in the words users ask with.

1. Open the HR agent and select **Add knowledge** on the **Overview** page.
2. Select **Dataverse**, search for `Job Opening`, select the table, and select **Add to agent**.
3. On the **Knowledge** tab, open the new source and replace its description with:

```text
Open job positions at the company: one row per job opening with its title, department, number of open positions and location. Use it for questions about open jobs, vacancies and hiring needs.
```

4. Select **Save**.
5. In the test pane, send:

```text
Which job openings do we have in Vienna, and how many positions are open?
```

Expected: the answer names HR Generalist with 2 positions and Sales Representative with 3, and cites the Dataverse source. If it finds nothing, wait a few minutes until Dataverse search has indexed the new rows and ask again.

## Task 3: Record a new opening with a Dataverse tool

Knowledge reads rows; a tool writes them. You add one action of the Microsoft Dataverse connector and make the agent ask for confirmation before it creates the row.

1. Go to **Tools** > **+ Add a tool**, search for `Microsoft Dataverse`, select **Add a new row to selected environment** in the **Add tool** dialog. If prompted, select **Create new connection** > **Create** and pick your account, then select **Add and configure**.
2. Set **Name** to `Record job opening` and the description to:

```text
Creates a new job opening in the Job Opening table. Use it when a user asks to record, add or open a new job position. Requires the title, the department, the number of open positions and the location.
```

3. Under **Inputs**, set **Environment** to **(Current)**, pick **Job Openings** (the table's plural name) as the **Table name** value and select **Save**. Then select **Add input** to add **Title**, **Department**, **Open Positions** and **Location**, leave each on **Dynamically fill with AI**, and select **Save**.
4. Expand **Additional details** and set **Ask the end user before running** to **Yes**. Under **How do you want to ask the user?**, keep **Send specific response**, enter the following message and select **Save**.

```text
Do you want me to create this job opening?
```

5. In the test pane, send:

```text
Record a new job opening: Payroll Specialist in Finance, 1 position, in Graz.
```

6. Answer `Yes` to the confirmation question. If a **Connect to continue** card appears, select **Allow**. If the agent asks again, check the table first: your first answer may already have created the row.
7. In Power Apps, open the **Job Opening** table and refresh the rows.

Expected: the agent asks the confirmation question before it runs the tool; after you confirm, the table has a fourth row with Payroll Specialist, Finance, 1 and Graz.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| **Dataverse** is missing or the table cannot be selected in **Add knowledge** | Dataverse search is off, or you lack permission to the table | Ask the administrator to turn on Dataverse search and confirm your security role |
| The column inputs do not appear after you set **Table name** | The connector schema refreshes only after required inputs are set | Save the tool, close it, and reopen its configuration page |
| The new row does not appear in knowledge answers right away | The search index updates after the write | Check the row in Power Apps; knowledge answers catch up after indexing |
