---
presents: demo-connect-an-mcp-server.md
budget: 4 min
beats: 4
---

# Present: Connect the Help Desk Agent to the Microsoft Learn MCP Server

**Guide:** [Connect the Help Desk Agent to the Microsoft Learn MCP Server](demo-connect-an-mcp-server.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · each beat links the exercise holding its prompt

**Agent:** Grey Logistics IT Help Desk, a Standard agent with generative orchestration, which MCP requires

**Initial prompt** (attach nothing; sent in Exercise 2, after the server is added):

```text
How do I set up a passkey in Microsoft Authenticator?
```

### Beat 1: The server describes its own tools (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Tools** > **Add a tool** > Microsoft Learn Docs MCP Server > **Add and configure** · [Exercise 1](demo-connect-an-mcp-server.md#exercise-1-add-the-server-from-the-catalog)
**What is there:** the **Tools** section lists `microsoft_docs_search`, `microsoft_docs_fetch` and `microsoft_code_sample_search`, each with a description written by the server.

### Beat 2: One instruction line routes Microsoft questions (1 min)

**Navigate:** **Overview** > **Instructions** > **Edit** · test pane · **Open connection manager** > **Connect** > **Submit** > **Retry** · [Exercise 2](demo-connect-an-mcp-server.md#exercise-2-route-microsoft-questions-to-the-server)
**What is there:** the passkey question calls `microsoft_docs_search` and cites a `learn.microsoft.com` link; the first-day question makes no call to the server.

### Beat 3: Allow all off freezes the tool list (1 min)

**Navigate:** **Tools** > Microsoft Learn Docs MCP Server > **Allow all** off > `microsoft_code_sample_search` off > **Save** · [Exercise 3](demo-connect-an-mcp-server.md#exercise-3-restrict-the-tools-the-agent-may-call)
**What is there:** no call to `microsoft_code_sample_search`; the answer comes from docs search or fetch, or says it cannot provide a code sample.

### Beat 4: A URL is all the wizard needs (1 min)

**Navigate:** catalog tool > **Enabled** off > **Save** · **Add a tool** > **New tool** > **Model Context Protocol** > **Create** > **Add to agent** · [Exercise 4](demo-connect-an-mcp-server.md#exercise-4-connect-the-same-server-with-the-onboarding-wizard)
**What is there:** the wizard tool lists the same tools without you entering any; the passkey question runs `microsoft_docs_search` through Microsoft Learn (wizard).
