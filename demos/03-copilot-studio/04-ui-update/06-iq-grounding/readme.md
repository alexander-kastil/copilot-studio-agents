# Grounding Agents with Work IQ, Foundry IQ, and Fabric IQ

Uploaded knowledge files give an agent a fixed copy of your documents. Three IQ connections ground an agent in sources that stay where they live: Work IQ in your Microsoft 365 work context, Foundry IQ in a knowledge base a team built in Microsoft Foundry, and Fabric IQ in a semantic model in Microsoft Fabric.

This topic explains what each connection grounds on, who tunes it, how you add it, and what it costs to run. It closes with a table that helps you choose one.

| Section | Description |
|---------|-------------|
| Grounding versus uploaded knowledge | Why a live source differs from a file you upload |
| What each IQ grounds on | The source each connection reads and who tunes it |
| Adding an IQ to an agent | Where each connection lives in the new experience |
| Status, licensing, and billing | Preview and general availability status, and Copilot Credits |
| Choosing between the three | A table that matches a question to a source |
| Hands-On Demo | Presenter-led demo of Work IQ with the activity trace |
| Hands-On Lab | Learner lab that routes work questions to Work IQ |
| Key Topics covered in this module | Learn articles behind each claim |

## Grounding versus uploaded knowledge

Grounding means the agent's answer rests on a source it reads when the question arrives. An uploaded knowledge file works differently: the agent indexes a copy you supplied, and you change what it knows by uploading a new version. An IQ connection points at a source that already exists elsewhere, so the answer reflects that source's current state.

The difference matters most for questions about information that moves, such as a customer email from this morning or a figure refreshed overnight. A file uploaded last week cannot answer those questions. The activity trace also shows which lookups ran, so you can verify grounding without relying on the wording of the reply.

## What each IQ grounds on

### Work IQ

Work IQ grounds an agent in your Microsoft 365 work context. Microsoft describes it as unifying signals from files, emails, meetings, chats, and Business Applications across Microsoft 365. The maker does not tune Work IQ: administrators govern it in the Microsoft 365 admin center, and it is read-only unless an administrator turns on write operations. Your control as the maker is when the agent calls it, which you set in Instructions.

### Foundry IQ

Foundry IQ grounds an agent in a knowledge base that someone built in Microsoft Foundry. A knowledge base bundles one or more enterprise data sources with retrieval and relevance settings, so your agent can answer over that content without you rebuilding the setup in Copilot Studio. The team that owns the knowledge base tunes it in Microsoft Foundry by changing its sources, retrieval instructions, or ranking. Copilot Studio holds only the connection, so removing it leaves the knowledge base unchanged.

### Fabric IQ

Fabric IQ connects an agent to business data and analytics in Microsoft Fabric, grounded in a semantic model. The agent can then answer data questions from the tables and measures that model contains. The owner of the Fabric workspace and semantic model decides what the model holds, and the picker shows only the items your account can access.

## Adding an IQ to an agent

The new experience (Learn calls it agents powered by the GitHub Copilot harness) adds all three from the Tools panel on the Build tab. Each connection becomes a tool, so the orchestrator decides whether to call it from the tool's name and description. Learn asks you to make the Foundry IQ description as detailed as possible for that reason.

Work IQ connects through the MCP tab of the Add a tool dialog and needs a sign-in connection. Foundry IQ asks for a connection to your Search Service endpoint, using one of four authentication types, and then you pick a knowledge base. An agent holds one Foundry IQ connection. Fabric IQ comes from the same dialog and needs access to the Fabric workspace and semantic model.

## Status, licensing, and billing

Status tells you what you can promise a customer. Learn marks Work IQ and Fabric IQ as preview. The Foundry IQ article carries no preview label, and Microsoft announced general availability of Foundry IQ in Copilot Studio in October 2026.

| IQ | Status | Billing |
|----|--------|---------|
| Work IQ | Preview | Usage-based billing in Copilot Credits. An administrator creates a separate spending policy for Work IQ usage, and the tenant needs a usage-based billing plan. |
| Foundry IQ | No preview label on the Learn article; general availability announced October 2026 | Usage-based billing applies to using, building, testing, and evaluating agents. |
| Fabric IQ | Preview | Usage-based billing applies to using, building, testing, and evaluating agents. |

The legacy workload tools, such as Mail and Teams, appear in the same tool catalog but run on the standard harness with standard licensing. They are a different path, so choose Work IQ (Preview) when the goal is grounding in Microsoft 365 context. Work IQ is the most accessible of the three in a class tenant, but it still needs the one-time tenant setup.

## Choosing between the three

| Choose | When the answer lives in | Who tunes the source |
|--------|--------------------------|----------------------|
| Work IQ | Your Microsoft 365 email, meetings, chats, and files | Tenant administrators govern it; you control when the agent calls it through Instructions |
| Foundry IQ | A knowledge base a team already built and tuned in Microsoft Foundry | The knowledge base owner, in Microsoft Foundry |
| Fabric IQ | A semantic model in Microsoft Fabric | The owner of the Fabric workspace and semantic model |
| Uploaded knowledge file | A document set you own and can replace with a new version | You, by uploading the new version |

## Hands-On Demo

- [Ground an Agent in Your Work Context with Work IQ](./demo-05-ground-with-iq.md): the presenter asks the same work question before and after adding Work IQ, then opens the activity trace to show the call that changed the reply.

## Hands-On Lab

- [Ground an Agent with Work IQ and Route Work Questions to It](../../../../labs/03-copilot-studio/04-ui-update/06-iq-grounding/lab-01-ground-with-iq.md): learners add Work IQ, write Instructions that route work questions to it, and read the trace. An optional step adds Foundry IQ or Fabric IQ when the resources exist.

## Key Topics covered in this module

[Add Work IQ to an agent](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq)

[Enable your tenant for Work IQ](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq)

[Connect to Foundry IQ from an agent](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/foundry-iq-connect)

[Connect to Fabric IQ from an agent](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/fabric-iq-connect)

[Use the activity trace to debug your agent](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-activity-trace)

[Add a tool to an agent](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-tools-custom-agent)

[Manage costs for agents powered by the GitHub Copilot harness](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity)
