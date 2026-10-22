# Triage and Analyze Help Desk Tickets with Prompt Tools

![Grey Logistics IT Help Desk sends a triage request to the Triage help desk ticket prompt, which returns category, priority, summary and nextStep as JSON, and a ticket log question to the Analyze ticket backlog prompt, whose code interpreter shows Hardware at 27.0 hours and 3 high-priority tickets.](./_images/prompt-tool-with-code-interpreter-overview.svg)

A help desk agent that triages tickets in its own words gives a different shape of answer every time, and nobody downstream can rely on it. Ask the same agent for the average resolution time of last week's tickets and it guesses a number. In this demo you give the Grey Logistics IT Help Desk agent two prompt tools: one that returns every triage in the same JSON shape, and one whose code interpreter calculates exact backlog figures.

What you practice here: turning a recurring model task into a prompt tool with a fixed output, and moving arithmetic into code interpreter.

Duration: about 40 minutes.

## What you'll build

- A prompt tool, Triage help desk ticket, drafted with Prompt assistant and locked to a JSON output with four fields.
- A prompt tool, Analyze ticket backlog, with code interpreter turned on, that returns exact counts and averages from a CSV log.
- A Standard agent that picks the right prompt from each tool's description.

## Prerequisites

- A Copilot Studio environment where you can create agents, with Copilot Credits available for prompts.
- A Standard agent named Grey Logistics IT Help Desk (on the home page, open the **New agent** dropdown and select **Agent** with the **Standard** badge under **Other ways to build**). Generative orchestration stays on, which is the default for new agents.
- Under **Settings** > **Security** > **Authentication**, the agent uses **Authenticate with Microsoft**, the default for new agents. Code interpreter needs user authentication.

## Exercise 1: Draft a triage prompt with Prompt assistant

Triage is the same task hundreds of times a week, so it deserves one fixed, tested instruction. You start from a Prompt assistant draft, then replace it with tested instructions so the demo stays repeatable.

1. Open the agent, go to **Tools**, select **Add a tool** > **New tool** > **Prompt**.
2. Rename the prompt at the top left to `Triage help desk ticket`.
3. In the **Prompt assistant** field, paste this intent and select **Submit**, then **Keep it**:

```text
Classify an IT help desk ticket into a category and a priority and summarize it in one sentence.
```

4. Point out the draft, then replace the instructions with the tested version below. Where the last line says to insert the input, type `/`, select **Text**, and name the input `Ticket text`.

```text
You triage IT help desk tickets for Grey Logistics.

Read the ticket below and classify it.
- category: one of Password, Network, Hardware, Software, Access
- priority: High when the person cannot work at all, Medium when work is slowed down, Low otherwise
- summary: one sentence of at most 20 words, in plain language
- nextStep: the first thing a help desk technician should check

Ticket:
[insert the Ticket text input here]
```

5. Enter this sample value for **Ticket text** and select **Test**:

```text
Since this morning my VPN drops every five minutes. I'm working from home and can't open the finance share or join the 10:00 budget call. Laptop is a ThinkPad with Windows 11. I already restarted twice.
```

Expected: the response panel shows a triage in prose with a Network category, a High priority, a one-sentence summary, and a next step about the VPN client.

## Exercise 2: Lock the output to JSON

A prose triage is readable, but a flow or another tool cannot pick the priority out of a sentence. Switching the output to JSON and saving a custom example makes every run return the same four fields.

1. In the top-right corner of the editor, change the output to **JSON** and select **Test** again.
2. Select the settings icon next to **Output: JSON** and replace the example with:

```json
{
  "category": "Network",
  "priority": "High",
  "summary": "VPN disconnects every few minutes, so the user cannot reach file shares.",
  "nextStep": "Check the VPN client version and recent sign-in errors."
}
```

3. Select **Apply**, then **Test**, then **Save custom**.
4. Open the three dots (**…**) > **Settings** and confirm **Temperature** is 0.

Expected: the format label reads Custom, and the test response is a JSON object with exactly the keys `category`, `priority`, `summary`, and `nextStep`, with `category` set to one of the five allowed values.

> **Tip:** If the test fails with "A JSON could not be generated", add the line `Don't include JSON markdown in your answer.` to the instructions and test again.

## Exercise 3: Add the prompt to the agent and call it from chat

A saved prompt is only a tool once the agent has it, and the orchestrator only calls it when the description matches the request. You add the prompt, describe it in the words users actually use, and watch the call happen.

1. Select **Save**, then **Add and configure**.
2. On the tool's configuration page, replace the description with the text below and select **Save**:

```text
Triages an IT help desk ticket: returns the category, priority, a one-sentence summary and the first check for a technician. Use it when a user pastes a problem description or asks to triage, classify or prioritize a ticket.
```

3. In the test pane, send:

```text
Please triage this ticket: my monitor stays black after the docking station update, the laptop screen works fine.
```

Expected: the activity map shows the Triage help desk ticket tool running, and the reply states a Hardware category with a priority and a next step taken from the tool output.

## Exercise 4: Calculate backlog figures with code interpreter

Ask a model for the average of ten numbers and it often produces a plausible wrong answer. Code interpreter makes the prompt write and run Python, so the figures come from a calculation you can check.

1. Go to **Tools** > **Add a tool** > **New tool** > **Prompt** and name it `Analyze ticket backlog`.
2. Open the three dots (**…**) on the information bar > **Settings**, select **Enable code interpreter**, and close **Settings**.
3. Paste these instructions and insert a Text input named `Ticket log` where marked:

```text
You analyze Grey Logistics IT help desk ticket logs.

The ticket log below is CSV with the columns id, category, priority, hours_to_resolve.
Use code to calculate every figure:
1. For each category, the number of tickets and the average hours_to_resolve, rounded to one decimal.
2. The overall average hours_to_resolve, rounded to one decimal.
3. The number of tickets with priority High.

Return a table sorted by average hours, highest first, followed by the two totals.

Ticket log:
[insert the Ticket log input here]
```

4. Enter this sample value for **Ticket log** and select **Test**:

```text
id,category,priority,hours_to_resolve
HD-101,Password,Low,0.5
HD-102,Network,High,6
HD-103,Hardware,Medium,24
HD-104,Password,Low,1
HD-105,Software,Medium,3
HD-106,Network,High,4
HD-107,Hardware,High,30
HD-108,Software,Low,2
HD-109,Password,Medium,1.5
HD-110,Network,Medium,5
```

Expected: the figures match this check table exactly; a model guessing without code usually misses at least one of them.

| Category | Tickets | Average hours |
|----------|---------|---------------|
| Hardware | 2 | 27.0 |
| Network | 3 | 5.0 |
| Software | 2 | 2.5 |
| Password | 3 | 1.0 |

The overall average is 7.7 hours, and 3 tickets have priority High.

## Exercise 5: Let the orchestrator choose between the two prompts

Two prompt tools on one agent only work if their descriptions keep them apart. You describe the second prompt, then send one request for each and check which tool ran.

1. Select **Save**, then **Add and configure**, and set this description:

```text
Calculates statistics from a help desk ticket log in CSV form: tickets and average resolution hours per category, the overall average and the count of high-priority tickets. Use it when a user pastes a ticket log or asks for backlog figures, averages or counts.
```

2. In the test pane, send the backlog question with the same CSV pasted below it:

```text
Here is last week's ticket log. Which category takes longest to fix, and how many tickets were high priority?
```

3. Then send a single ticket for triage:

```text
Triage this one: a new hire cannot sign in to Teams, the account was created yesterday.
```

Expected: the first request runs Analyze ticket backlog and the answer names Hardware at 27.0 hours and 3 high-priority tickets; the second request runs Triage help desk ticket and returns an Access or Password category.

> **Note:** Each run of a code interpreter prompt is billed as a premium text and generative AI tool, so keep sample logs small during a class.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The backlog prompt fails at runtime but works in the prompt editor | The agent uses No authentication, and code interpreter needs user authentication | Set **Authenticate with Microsoft** under **Settings** > **Security** > **Authentication**, then publish |
| "A JSON could not be generated" in Exercise 2 | The model wraps the JSON in markdown | Add `Don't include JSON markdown in your answer.` to the instructions |
| The agent answers a triage request itself without calling the tool | The tool description does not match the user's wording | Add the words users type, such as triage, classify and prioritize, to the description |
| **Prompt** is missing or disabled in **Add a tool** | A data policy blocks the tool, or prompts are not available in the environment's region | Select the information icon next to the tool, or ask the admin about the policy and region |
| Figures in Exercise 4 differ from the check table | Code interpreter is off, so the model estimated | Reopen **Settings** and confirm **Enable code interpreter** is selected |

## Summary

You built two prompt tools for the Grey Logistics IT Help Desk agent: a triage prompt with a fixed JSON output and a backlog prompt that calculates with code interpreter. You can now:

- Draft a prompt with Prompt assistant and replace it with tested instructions
- Add inputs, test with sample data, and lock the output format to JSON
- Turn on code interpreter for calculations a model should not guess
- Write tool descriptions that let the orchestrator choose between two prompts

The next topic gives the same agent prebuilt connector tools that act on Microsoft 365.
