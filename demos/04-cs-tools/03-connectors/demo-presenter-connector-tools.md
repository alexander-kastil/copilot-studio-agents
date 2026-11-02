---
presents: demo-connector-tools.md
budget: 4 min
beats: 4
---

# Present: Give the Help Desk Agent Connector Tools

**Guide:** [Give the Help Desk Agent Connector Tools](demo-connector-tools.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · the demo account needs a manager in Microsoft Entra ID and one colleague's name

**Agent:** Grey Logistics IT Help Desk, a Standard agent with generative orchestration and **Authenticate with Microsoft**

**Initial prompt** (attach nothing; sent in Exercise 1, after Get my manager is added):

```text
Who is my manager?
```

### Beat 1: A fixed input the orchestrator cannot change (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Tools** > **Add a tool** > **Connector** > **Office 365 Users** > **Get manager (V2)** > **Add and configure** · **Inputs** > **User (UPN)** > **Custom value** · [Exercise 1](demo-connector-tools.md#exercise-1-look-up-the-users-manager-with-a-connector-tool)
**What is there:** the activity map shows Get my manager running with no question to the user; the reply names your manager from Microsoft Entra ID.

### Beat 2: Mail goes out only after a confirmation (1 min)

**Navigate:** **Add a tool** > **Connector** > **Office 365 Outlook** > **Send an email (V2)** · **Additional details** > **Ask the end user before running** > **Yes** · [Exercise 2](demo-connector-tools.md#exercise-2-send-email-only-after-the-user-confirms)
**What is there:** Get my manager followed by Send help desk email in the map; a confirmation with the manager's address, a subject and a body; after confirming, the email in Sent Items.

### Beat 3: The orchestrator fills and chains the tools (1 min)

**Navigate:** **Add a tool** > **Connector** > **Office 365 Users** > **Search for users (V2)** · **Completion** > **Write the response with generative AI** · activity map · [Exercise 3](demo-connector-tools.md#exercise-3-find-a-colleague-from-the-conversation) · [Exercise 4](demo-connector-tools.md#exercise-4-chain-the-tools-in-one-request)
**What is there:** Find a colleague with the name as search term, a question when no name is given; then one plan with Find a colleague and Get my manager before Send help desk email, both addresses in the confirmation.

### Beat 4: One copy of the tools for several agents (1 min)

**Navigate:** **Settings** > **Component collections** > **Create** · **…** > **Component collections** > Help Desk Notifications · [Exercise 5](demo-connector-tools.md#exercise-5-package-the-tools-in-a-component-collection)
**What is there:** the collection lists the three tools and their connections with Grey Logistics IT Help Desk as a connected agent; the agent's **Tools** page still lists the tools.
