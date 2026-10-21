# Schedule Restaurant Staff Through an HR MCP Server

A restaurant manager plans every week's shifts from a staff list that lives in the HR system, so each plan starts with an export and ends with a copy that is out of date by Friday. Pasting that list into an agent only moves the problem. In this demo you rebuild the Restaurant HR Manager as a fresh Standard agent that reads the team and books shifts through the restaurant's own HR MCP server, then sends the finished schedule by email.

What you practice here: connecting your own MCP server through the onboarding wizard, letting structured instructions decide when its tools read and when they write, and adding the connector tool an instruction needs.

Duration: about 50 minutes.

## What you'll build

- A Standard agent named CS-Restaurant HR Manager with the structured scheduling instructions of the finished Restaurant HR Manager.
- The repository's HR MCP server connected as one tool, CS-HR MCP Server, through the MCP onboarding wizard.
- A read test that finds staff by role and language, and a write test that books two 8-hour shifts after a confirmation.
- An Office 365 Outlook tool, CS-Send an email, that delivers the schedule the instructions promise to send.

## Prerequisites

- A Copilot Studio license and the maker role in the class environment. Standard agents live in the classic experience: on the home page select the three dots (**…**) at the bottom of the side bar, then **Open classic experience**.
- The HR MCP server from [src/hr-mcp-server](../../../src/hr-mcp-server/) running behind an HTTPS URL, for example the App Service that [src/deploy-apis.ps1](../../../src/deploy-apis.ps1) creates as `hr-mcp-server-<env>`. It seeds eight restaurant employees on first start.
- An Office 365 Outlook mailbox you can send test mail from and receive it in.
- The finished agent's definition for reference: [src/cs-schema/agents/Restaurant HR Manager](../../../src/cs-schema/agents/Restaurant%20HR%20Manager/).

## Exercise 1: Create the CS-Restaurant HR Manager agent

The finished agent runs on long, structured instructions rather than topics: a purpose, guidelines, four numbered steps, error handling and an interaction example. The orchestrator reads them on every turn, so they decide when the agent asks, when it reads staff data and when it changes a schedule. You create a blank agent with the CS- name and paste the original description and instructions.

1. In the classic experience, go to **Agents**, select **Create blank agent**, enter the name `CS-Restaurant HR Manager`, and select **Create**.
2. On the **Overview** page, in the **Details** section, select **Edit**, paste this description, and save.

```text
Manages restaurant staff by assigning employees to schedules and ensuring proper staffing levels.
```

3. In the **Instructions** section, select **Edit**, replace any text with the instructions below, and select **Save**.

```text
# Purpose
The purpose of this agent is to manage restaurant staff scheduling by assigning employees to shifts, ensuring adequate coverage, and maintaining compliance with staffing policies.

# General Guidelines
- Maintain a professional and helpful tone.
- Ensure fairness and compliance with labor laws and company policies.
- Do not share confidential employee information with unauthorized parties.
- Always confirm changes before finalizing schedules.

# Skills
- Understanding of restaurant staffing requirements.
- Ability to create and adjust schedules.
- Knowledge of employee roles and availability.

# Step-by-Step Instructions
1. **Collect Employee Data**
   - Retrieve employee names, roles, and availability from the HR system.
   - Verify that the data is up to date.

2. **Analyze Staffing Needs**
   - Review the restaurant’s operational hours and expected customer volume.
   - Determine the number of staff required for each shift.

3. **Assign Employees to Shifts**
   - Match employees to shifts based on their roles and availability.
   - Ensure compliance with labor laws (e.g., maximum working hours, breaks).

4. **Communicate Schedule**
   - Send the finalized schedule to employees via email or internal communication tools.
   - Provide a way for employees to request changes or swaps.

# Error Handling
- If employee data is missing or outdated, request updated information before proceeding.
- If scheduling conflicts occur, suggest alternative shifts or escalate to a manager.

# Interaction Examples
- **User:** “Create a schedule for next week.”
- **Agent:** “Please confirm the number of shifts per day and any special requirements.”

# Nonstandard Terms
- **Shift:** A scheduled work period for an employee.

# Follow-up and Closing
- Confirm that the schedule meets the user’s requirements.
- Offer to send reminders or updates to employees if needed.
```

4. In the **Model** section, select **GPT Chat Latest**, the model every CS- agent of the class environment runs on. The original agent used GPT-5 Chat.
5. Select **Settings**, open **Generative AI**, and confirm that **Use generative AI orchestration for your agent's responses?** is set to **Yes**.

Expected: the **Overview** page shows CS-Restaurant HR Manager with the description above, the **Instructions** section starts with `# Purpose`, and the **Model** section names GPT Chat Latest. Orchestration shows **Yes**, which MCP needs because only the orchestrator decides when to call a server.

## Exercise 2: Connect the HR MCP server with the onboarding wizard

The wizard needs four things: a name, a description the orchestrator reads to decide whether to call the server, the server URL and an authentication type. It needs no tool list, because the agent discovers the tools from the server at runtime. The HR server answers MCP requests at the root of its HTTPS address and the finished agent connects without authentication, so the URL is the server's base address and the authentication is **None**.

1. Go to the **Tools** page of CS-Restaurant HR Manager, select **Add a tool**, then the **Add new MCP** card at the top of the **Add tool** dialog.
2. Fill in the wizard with these values and select **Create**.

| Field | Value |
|-------|-------|
| Server name | `CS-HR MCP Server` |
| Server description | `Knows about employees and how they can be used in our restaurant` |
| Server URL | `https://<your-hr-mcp-server-host>/` |
| Authentication | None |

3. A banner confirms "CS-HR MCP Server custom connector has been created", and **Connection** reads **Not connected**. Open it, select **Create new connection**, enter `CS-HR MCP Server` as **Display name (optional)**, and select **Create**. When the connection shows a green dot, select **Add**.

The finished agent's clone shows what the wizard creates behind such a tool: a connector with a single POST operation at the root, marked with the Streamable HTTP protocol that Copilot Studio supports. Your connector carries the server name you entered instead of the clone's title.

```json
{
  "swagger": "2.0",
  "info": {
    "title": "Restaurant HR MCP",
    "description": "Knows about employees and how they can be used in our restaurant",
    "version": "1.0.0"
  },
  "host": "<your-hr-mcp-server-host>",
  "basePath": "/",
  "schemes": [
    "https"
  ],
  "paths": {
    "/": {
      "post": {
        "x-ms-agentic-protocol": "mcp-streamable-1.0",
        "operationId": "InvokeServer"
      }
    }
  }
}
```

Expected: the **Tools** page lists CS-HR MCP Server as one tool, and the connector behind it carries the same CS- name, so it stands apart from the finished agent's Restaurant HR MCP connector in the same environment.

> **Note:** The connection carries the display name CS-HR MCP Server you entered, so you find it by name when you clean up the old environment.

## Exercise 3: Read the tools the server publishes

On an MCP tool, the descriptions the orchestrator reads come from the server, not from Copilot Studio. In the HR server each tool is a C# method marked `[McpServerTool]`, and its `[Description]` attributes become the tool and parameter descriptions. The scheduling tool shows how much the server, not the maker, defines.

```csharp
[McpServerTool]
[Description("Assigns an employee to an 8-hour shift by name, date, and position")]
public async Task<string> AssignShift(
    [Description("Full or partial name of the employee")] string employeeName,
    [Description("Date of the shift in yyyy-MM-dd format")] string date,
    [Description("Position for the shift (e.g. bar, waiter, host, chef)")] string position,
    [Description("Hour (0-23) at which the 8-hour shift starts. Defaults to 8")] int shiftStartHour = 8)
```

1. On the **Tools** page, select CS-HR MCP Server to open its settings page.
2. Scroll to the **Tools** section and compare it with the methods in [HRTools.cs](../../../src/hr-mcp-server/Tools/HRTools.cs).

| Tool | Description from the server |
|------|-----------------------------|
| `list_employees` | Provides the whole list of employees |
| `add_employee` | Adds a new employee to the list |
| `update_employee` | Updates an existing employee by email |
| `remove_employee` | Removes an employee by email |
| `search_employees` | Searches for employees by name, email, skills, or current role |
| `assign_shift` | Assigns an employee to an 8-hour shift by name, date, and position |

Expected: the **Tools** section lists the six tools with these descriptions, and **Allow all** is on, so the agent may call every one of them.

> **Note:** If `assign_shift` is missing, the deployed server predates the scheduling tool; the server's own readme still speaks of five tools. Redeploy `src/hr-mcp-server`, and the tool appears without any change to the agent, which is runtime discovery at work.

## Exercise 4: Find staff for a shift

Step 1 of the instructions tells the agent to retrieve names, roles and availability from the HR system before it plans. The question below never names a tool, so the activity map shows whether the orchestrator connects the request to the server on its own.

1. Open the **Test your agent** panel and start a new conversation.
2. Send this message. If the agent asks you to connect to the server first, follow the connection prompt in the chat and send the message again.

```text
We need a bartender and a waiter for Friday evening. Who on the team can cover those roles, and which languages do they speak?
```

3. Open the activity map with the map icon at the top of the test panel.

Expected: the activity map shows a call to CS-HR MCP Server running `list_employees` or `search_employees`. The reply names Sofia Fernandez (Bartender; Portuguese, Spanish, English) and Luca Rossi (Head Waiter; Italian, English, Spanish) from the seeded staff, not invented people.

## Exercise 5: Book the shifts after a confirmation

A read is harmless; a write changes the schedule. The guideline "Always confirm changes before finalizing schedules" makes the agent stop before `assign_shift`, and the tool's own date format rule is why the request gives the date as `yyyy-MM-dd`.

1. In the same conversation, send this request.

```text
Put Sofia Fernandez on the bar and Luca Rossi on waiter duty on 2026-11-06, both starting at 14:00.
```

2. When the agent asks you to confirm, reply:

```text
Yes, book both shifts.
```

3. Open the activity map and select each tool call to read its inputs and output.

Expected: before your confirmation the activity map shows no `assign_shift` call. After it, the map shows two `assign_shift` calls with `date` set to 2026-11-06 and `shiftStartHour` set to 14, and each returns a line in the server's format, such as `Assigned Sofia Fernandez to 'bar' on 2026-11-06 from 14:00 to 22:00.` The end time comes from the server, which always adds eight hours.

> **Tip:** A scheduling agent has no reason to delete staff. On the settings page of CS-HR MCP Server, turn off **Allow all**, then turn off `remove_employee` and select **Save**; tools the server adds later then stay off until you turn them on.

## Exercise 6: Send the schedule with an email tool

Step 4 of the instructions tells the agent to send the finished schedule by email, but instructions only shape what the agent tries; a tool gives it the capability. The Office 365 Outlook connector adds that capability as one action, and **Ask the end user before running** shows a confirmation message when the agent calls it.

1. On the **Tools** page, select **Add a tool**, then the **Connector** filter and the **Office 365 Outlook** card. In the action search box type `Send an email (V2)` and select the action.
2. If **Connection** reads **Not connected**, open it, select **Create new connection**, sign in with your test mailbox, and select **Create**; an existing Outlook connection shows your account with a green dot. Then select **Add and configure**.
3. On the configuration page, in **Details**, set the name to `CS-Send an email` and replace the description with the text below.

```text
Sends the finalized shift schedule by email to the recipients the user names. Use it only after the user has confirmed the schedule.
```

4. Under **Additional details**, set **Ask the end user before running** to **Yes** and keep **Credentials to use** on **End user credentials**, so the mail goes out from the mailbox of the person in the chat. Two more fields appear: keep **How do you want to ask the user?** on **Send specific response (specify below)** and type the text below into **Message to display**, then select an empty area of the page so the editor keeps the text.

```text
Shall I send the schedule by email now?
```
5. Under **Inputs**, keep **Dynamically fill with AI** for **To**, **Subject** and **Body**, then select **Save**.
6. In the same test conversation, send this request with your own address. Do not use the seeded staff addresses, because they belong to a domain you do not own.

```text
Send the schedule for 2026-11-06 by email to <your test mailbox address>.
```

Expected: the chat shows "Shall I send the schedule by email now?", the activity map shows one CS-Send an email call whose **To** is your address, and a mail with the subject Staff Schedule - November 6, 2026 that lists both shifts arrives in your test mailbox. In the live run the mail was sent while the message was on screen, before the answer, so the message informs rather than blocks; the confirmation that holds the action is the one the instructions ask for in Exercise 5.

> **Note:** Without a **Message to display**, the call fails with "This tool requires user confirmation, but no confirmation message has been set." Check that the editor still shows your text after **Save**.

> **Tip:** The cloned Restaurant HR Manager has no mail tool, so step 4 of its instructions could never run there. This exercise is the fix the rebuild adds.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The **Add new MCP** card is missing or disabled in the **Add tool** dialog | A data policy blocks the connector, or generative orchestration is off | Check orchestration in **Settings** and ask the administrator about the data policy for custom connectors |
| The wizard connection fails or the tool lists no tools | The URL points to the wrong path, or the App Service is stopped or still starting | Use the server's HTTPS base address ending in `/`, start the App Service, and wait for its first request to finish |
| `assign_shift` is not on the settings page | The deployed server is older than the scheduling tool | Redeploy `src/hr-mcp-server` and reopen the settings page of CS-HR MCP Server |
| The reply names people who are not in the seeded staff | The orchestrator answered without calling the server | Ask about "the team" or "our staff", start a new test conversation, and confirm the tool is **Enabled** |
| The tool answers `No employee found matching` | The name is not in the seeded data | Use a seeded name such as Sofia Fernandez, Luca Rossi or Anna Schmidt |
| The agent says it couldn't verify Sofia Fernandez or Luca Rossi in the employee records and books nothing | The deployed server predates the full-name search, so `search_employees` with "Sofia Fernandez" returns an empty list | Redeploy `src/hr-mcp-server`, which matches full names in `SearchEmployeesAsync`, and send the request again |
| The agent says it cannot send email | CS-Send an email is turned off, or its description does not match the request | Open the tool, check **Enabled**, and ask for the schedule "by email" to a named address |

## Summary

You rebuilt the Restaurant HR Manager as CS-Restaurant HR Manager, gave it the team and the shift book through one MCP tool, and added the mail tool its instructions always assumed. You can now:

- connect your own Streamable HTTP MCP server through the onboarding wizard with a name, a description and a URL
- read the tools and descriptions a server publishes and trace them back to its code
- prove in the activity map that the orchestrator reads before it writes and asks before it changes data
- close an instruction gap with a connector tool and keep a confirmation in front of every write

Next, [Computer Use: Apps Without APIs](../07-computer-use/readme.md) reaches systems that offer no API and no MCP server at all.
