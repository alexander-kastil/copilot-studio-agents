# Lab 03: Analyze Data with the Analyst Agent

In this lab you use the Analyst agent in Microsoft Copilot to analyze survey data from an Excel workbook. You ask natural-language prompts to find trends and averages, and you generate charts that communicate the findings. The lab is adapted from the [Microsoft Learn unit Use the Analyst agent](https://learn.microsoft.com/en-us/training/modules/explore-prebuilt-microsoft-365-copilot-agents/3-exercise-analyst-agent).

> **Note: bring your own license.** You need your own licensed access to Microsoft Copilot and Microsoft 365 data to complete this lab. A course-provided Copilot subscription is not included.

The Analyst agent helps you analyze and visualize data from sources such as Excel and Forms. It turns raw numbers into clear summaries and stakeholder-ready charts, which saves time and manual effort when you analyze results.

## Exercise 1: Analyze survey results with the Analyst agent

In this exercise you use the Analyst agent to interpret and visualize the Project Nexus survey results.

Project Nexus was a six-week pilot program that improved collaboration between departments through a new digital workspace platform. Employees from IT, HR, Marketing, and Operations used the platform for daily communication, document sharing, and task management. After the pilot, participants completed a survey about project satisfaction, communication effectiveness, timeline adherence, and their overall experience.

You use the prebuilt Analyst agent to explore the survey results stored in an Excel workbook. You can enter your own prompts or use the agent's starter prompts to analyze the data, create visualizations, identify insights, and generate recommendations.

### Step 1: Download the survey results

1. In a web browser, go to the following link to access a copy of the **Project Nexus Survey Results**: `https://github.com/MicrosoftLearning/MS-4004-Empower-workforce-copilot-use-cases/raw/refs/heads/master/ResourceFiles/Project_Nexus_survey_results.xlsx`.
1. Select the **Download file** button at the top of the screen to save the file to your device.

> **Tip:** The same workbook is also in this course repository. Use [Project_Nexus_survey_results.xlsx](./lab-03-analyst-agent/Project_Nexus_survey_results.xlsx) if the link above is not available.

### Step 2: Sign in to Microsoft Copilot

1. Open a new browser tab, navigate to **Microsoft Copilot** at `https://m365.cloud.microsoft`, and sign in using your credentials for this exercise.
1. If prompted, choose the option to stay signed in.
1. Skip any Welcome messages that appear.

### Step 3: Open the Analyst agent

1. In **Microsoft Copilot**, in the navigation pane, select **Analyst** under **Pinned**. The agent opens with the header **Analyst, Created by Microsoft** and the prompt **What do you want to analyze today?**
1. If **Analyst** is not pinned, select **Plugins** in the navigation pane, open the **Chat** tab, and select **Analyst**.

The **Analyst** agent window appears.

### Step 4: Upload the survey workbook

1. In the prompt field, select the **Add and manage sources** button.
1. In the menu that appears, select **Upload images and files**.
1. In **File Explorer**, navigate to the **Downloads** folder, select the **Project Nexus Survey Results** file that you downloaded earlier, and then select **Open**. The file appears as a chip in the prompt field, and a banner says that a copy is kept in your OneDrive (**Manage uploads**).

### Step 5: Identify the top three trends

1. In the prompt field, enter the following prompt next to the linked **Project Nexus Survey Results** file.

    ```text
    Analyze this spreadsheet and tell me the top three trends
    ```

> **Note:** Analyst reasons over the data before it answers; the response starts with a collapsed **Reasoned for** line that you can expand to see the steps. Check how it reads the rating scale: in a test run it read 1 as best and 5 as worst.

### Step 6: Review the average rating for each category

1. To drill deeper into each category, enter the following prompt.

    ```text
    What is the average rating for each survey category?
    ```

### Step 7: Create a bar chart of the average ratings

1. Enter the following prompt. Answering `Yes` to a follow-up offer can return only a text placeholder such as `attachment:...png` instead of the picture; the explicit prompt renders the chart in a **Chart** card.

    ```text
    Create a bar chart comparing the average ratings for Project Satisfaction, Communication Effectiveness, Timeline Adherence, and Overall Experience.
    ```

> **Note:** A large amount of blank space might appear between the agent's response and the prompt field. If so, scroll up to find the response and scroll to the bottom of the page to find the prompt field. This is a known display issue that might be resolved by the time you complete this exercise.

1. If necessary, scroll up to the results of the prior prompt and review them.

### Step 8: Explore the data further

You can spend as much time as you want analyzing the survey results. Enter your own prompts, or try any of the following prompts, depending on the analysis you want to perform.

Quantitative analysis prompts:

```text
Which category received the highest average rating, and which received the lowest?
How many participants rated the project satisfaction as 4 or higher?
What percentage of participants rated timeline adherence below 3?
Can you identify any correlations between communication effectiveness and overall experience?
```

Qualitative analysis prompts:

```text
Summarize the most common themes in the comments section.
Are there any recurring concerns or suggestions mentioned in the comments?
Identify any comments that mention issues with communication or timeline.
```

Insight and recommendation prompts:

```text
Based on the survey data, what are the top three strengths of Project Nexus?
What are the key areas for improvement suggested by the participants?
Provide a summary report of the survey findings with actionable recommendations.
```

Quantitative visualization prompts:

```text
Generate a pie chart of overall ratings distribution.
Create a radar chart comparing the average ratings across all survey categories.
Plot a histogram of the satisfaction ratings to see their distribution.
Generate a scatter plot to analyze the relationship between Communication Effectiveness and Overall Experience.
Create a correlation heatmap for all numeric rating categories.
Make a box plot for each rating category to show the range and quartiles.
Plot a line graph showing timeline adherence ratings over participants ordered by Participant ID.
```
