---
presents: demo-restaurant-hr-mcp.md
budget: 5 min
beats: 5
---

# Present: Schedule Restaurant Staff Through an HR MCP Server

**Guide:** [Schedule Restaurant Staff Through an HR MCP Server](demo-restaurant-hr-mcp.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · the HR MCP server from [src/hr-mcp-server](../../../src/hr-mcp-server/) must run behind HTTPS

**Agent:** CS-Restaurant HR Manager, created blank in Exercise 1 from the original [Restaurant HR Manager](../../../src/cs-schema/agents/Restaurant%20HR%20Manager/); the finished rebuild is [CS-Restaurant HR Manager](../../../src/cs-schema/cs-agents/CS-Restaurant%20HR%20Manager/)

**Initial prompt** (attach nothing; sent in Exercise 4, after the HR MCP server is connected):

```text
We need a bartender and a waiter for Friday evening. Who on the team can cover those roles, and which languages do they speak?
```

### Beat 1: Structured instructions instead of topics (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **…** > **Open classic experience** > **Agents** > **Create blank agent** · **Overview** > **Details**, **Instructions**, **Model** > **GPT Chat Latest** · **Settings** > **Generative AI** · [Exercise 1](demo-restaurant-hr-mcp.md#exercise-1-create-the-cs-restaurant-hr-manager-agent)
**What is there:** CS-Restaurant HR Manager with its description, instructions starting with `# Purpose`, GPT Chat Latest and orchestration **Yes**.

### Beat 2: Your own server, its own tool descriptions (1 min)

**Navigate:** **Tools** > **Add a tool** > **Add new MCP** > **Create** > **Create new connection** > **Add** · CS-HR MCP Server > **Tools** · [HRTools.cs](../../../src/hr-mcp-server/Tools/HRTools.cs) · [Exercise 2](demo-restaurant-hr-mcp.md#exercise-2-connect-the-hr-mcp-server-with-the-onboarding-wizard) · [Exercise 3](demo-restaurant-hr-mcp.md#exercise-3-read-the-tools-the-server-publishes)
**What is there:** CS-HR MCP Server as one tool; its **Tools** section lists six tools from `list_employees` to `assign_shift` with the server's descriptions, **Allow all** on.

### Beat 3: The agent reads staff from the HR system (1 min)

**Navigate:** **Test your agent** > new conversation > map icon · [Exercise 4](demo-restaurant-hr-mcp.md#exercise-4-find-staff-for-a-shift)
**What is there:** CS-HR MCP Server running `list_employees` or `search_employees`; the reply names Sofia Fernandez (Bartender) and Luca Rossi (Head Waiter) with their languages.

### Beat 4: A write waits for the confirmation (1 min)

**Navigate:** same conversation > activity map > each tool call · [Exercise 5](demo-restaurant-hr-mcp.md#exercise-5-book-the-shifts-after-a-confirmation)
**What is there:** no `assign_shift` call before your confirmation; after it, two `assign_shift` calls with `date` 2026-11-06 and `shiftStartHour` 14, each returning an "Assigned ... from 14:00 to 22:00." line.

### Beat 5: A tool gives the instruction its capability (1 min)

**Navigate:** **Tools** > **Add a tool** > **Connector** > **Office 365 Outlook** > **Send an email (V2)** > **Add and configure** · **Additional details** > **Ask the end user before running** > **Yes** · [Outlook inbox](https://outlook.office.com/mail/inbox) · [Exercise 6](demo-restaurant-hr-mcp.md#exercise-6-send-the-schedule-with-an-email-tool)
**What is there:** "Shall I send the schedule by email now?", one CS-Send an email call to your address, and the mail Staff Schedule - November 6, 2026 listing both shifts.
