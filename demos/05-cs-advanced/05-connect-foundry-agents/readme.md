# Foundry Agents in Copilot Studio

A developer team has built a specialist in Microsoft Foundry, and the help desk agent that employees already talk to lives in Copilot Studio. Copying the specialist's rules into Copilot Studio would split one source of truth into two. Connecting the Foundry agent keeps each team on its own platform: the maker owns the conversation, the channels and the routing, and the developers keep owning the specialist's model, tools and versions.

This topic explains how a Standard Copilot Studio agent (Learn: standard harness) connects a Microsoft Foundry agent as a connected agent, what the Foundry side has to provide first, how generative orchestration decides when to call it, how the call is authenticated, and which preview limits apply. It builds on the routing rules from [Generative Orchestration & Multi-Agent Routing](../03-multi-agent/readme.md) and the Foundry concepts from [Microsoft Foundry Agents: Core Concepts](../04-foundry-agents/readme.md).

## What the connection is

A connected Foundry agent sits on the main agent's **Agents** page, next to child agents and connected Copilot Studio agents. The main agent can call it to respond to a user or to an event trigger, and the Foundry agent answers with its own model, instructions and tools. Learn marks the connection as preview: it isn't meant for production use and its behavior can change.

| Part | Lives in | Owned by |
| --- | --- | --- |
| The conversation, channels, routing and the description the planner reads | Copilot Studio | The maker |
| The connection that holds the Foundry project endpoint | Copilot Studio | The maker |
| The specialist's model, instructions, tools, versions and endpoint protocols | Microsoft Foundry | The developer team |

## What the Foundry agent needs first

Two things on the Foundry side decide whether the connection works. The agent must have been created in the current Foundry portal; Learn states that an agent from the previous portal fails with a `404 - Version not found` error. And the agent's endpoint must speak the Activity Protocol, which is the protocol Copilot Studio uses to exchange messages with it.

A new Foundry agent doesn't have the Activity Protocol turned on. Its endpoint starts with the Responses protocol and Microsoft Entra authorization, and Learn's Copilot Studio page adds that the portal shows only **Responses** and **A2A** under **Endpoints**. Without the Activity Protocol you can still add the connection in Copilot Studio, but every call fails at runtime with an HTTP 400 error saying the agent endpoint doesn't support activity.

You enable it with the Foundry REST API or the Python SDK; the Foundry portal doesn't offer the setting yet. The update replaces the whole list of protocols and authorization schemes, so the request names every protocol and scheme the endpoint must keep, alongside the new `activity` protocol and the `BotServiceRbac` scheme.

```json
{
  "agent_endpoint": {
    "protocol_configuration": {
      "responses": {},
      "activity": {},
      "a2a": {}
    },
    "authorization_schemes": [
      { "type": "Entra" },
      { "type": "BotServiceRbac" }
    ]
  }
}
```

The body goes to the agent with `PATCH {project-endpoint}/agents/{agent-name}?api-version=v1` and the content type `application/merge-patch+json`. After the update the portal still lists only **Responses** and **A2A** under **Endpoints**; Learn calls this omission expected. Learn's page for the GitHub Copilot harness names a second route: publishing the Foundry agent to Microsoft 365 or Teams turns on the Activity Protocol and `BotServiceRbac` automatically.

## Connecting the agent in Copilot Studio

The steps run on the main agent's **Agents** page. You select **Add an agent**, choose **Microsoft Foundry** under **Connect to an external agent**, and pick an existing connection or create one by entering the Foundry project endpoint. After **Next**, you give the agent a **Name** and **Description**, enter its **Agent Id**, and select **Add Agent**; the **Agent Id** can be changed later on the agent's details page.

| Field | What to enter | Why it matters |
| --- | --- | --- |
| Connection | The Foundry project endpoint, `https://<resource>.services.ai.azure.com/api/projects/<project>` | Tells Copilot Studio which project hosts the agent |
| **Name** | A short, distinct name such as Grey Logistics Device Specialist | Appears in the activity map and helps routing |
| **Description** | What the specialist covers and what it excludes | The planner's main signal for when to call it |
| **Agent Id** | The identifier of the Foundry agent | Selects the agent inside the project |

You can test right after adding the agent. If the first call fails with the 400 error about activity, go back to the Foundry side and enable the Activity Protocol. A connection is bound to one project endpoint, so a new project needs its own connection, and the **Connection** list can preselect an older one. Choose **Create new connection**, enter a display name, **Microsoft Entra ID User Login** and the project endpoint, complete the "Sign in to Microsoft Foundry" window, then select **Add and configure**.

In the agent's YAML the Foundry agent is an action: it pulls as `actions/<FileName>.mcs.yml`, and the reference `{System.Bot.Components.Agents.'<schema>.action.<FileName>'.DisplayName}` renders as an agent chip, so the `/` insert into the instructions can also be written in code.

## How orchestration routes to it

A connected Foundry agent is one more choice for the generative orchestrator, chosen by its description like a tool, a topic or a connected Copilot Studio agent. Under classic orchestration, connected agents aren't available. The description you enter in Copilot Studio is the one that counts: write it to name the domain, the typical questions and what the specialist doesn't cover, and keep it distinct from every other tool and agent on the main agent.

The multi-agent rules from the routing topic apply unchanged. The main agent should stay the only voice the user hears, the Foundry agent's instructions should keep it inside its domain, and tests should include questions no specialist covers. Each call adds a hop with its own model run, so expect more latency than for a tool, and expect Learn's known limitation that citations aren't always kept when an answer comes back from another agent.

Validate the input in Copilot Studio before the external call runs. Ordered instructions in the demo ask for one detail per turn and confirm them in a table before the Foundry call, so an invalid email address stopped the run before any call was made.

## Authentication and access

Copilot Studio reaches the agent through the connection you created with the project endpoint, and the Foundry endpoint accepts only Microsoft Entra ID and Azure Bot Service authorization; API keys aren't supported. Under the `Entra` scheme a caller needs at least the **Foundry Agent Consumer** role on the project or agent. The `BotServiceRbac` scheme, which the Activity Protocol request above adds, lets only identities with the Azure permissions to call the agent in Foundry invoke it.

Plan access with the project owner before the demo or the rollout: who signs in to create the connection, which role that account holds, and whether end users need access of their own. Learn's GitHub Copilot harness page states that the connection authenticates with the user's Microsoft Entra ID sign-in.

## Preview limits and responsibilities

Learn lists the connection to Microsoft Foundry agents as public preview, together with the other external agent types. Learn also puts the responsibility for a connected external agent on you, the maker.

| Check before you rely on it | What it means here |
| --- | --- |
| Data flows | The conversation content that reaches the Foundry agent, and where Foundry processes it, fit your requirements |
| Quality and reliability | The specialist meets your standards when it is called from Copilot Studio as well as in the Foundry playground |
| Permissions and approvals | The Foundry agent's tools can't do more than the main agent should allow |
| Observability and oversight | Copilot Studio's activity map and Foundry's tracing together let you follow a request end to end |

A version pinned on the Foundry side keeps the specialist stable while its owners keep editing, and an unpinned agent serves every new version immediately. Agree with the developer team which of the two the help desk relies on.

## Hands-On Demos

- [Run a New Hire Background Check Through a Foundry Agent](./demo-compliance-agent-foundry.md): the presenter builds CS-Compliance Agent on Claude Sonnet 4.6, has it collect and confirm a new hire's details, hands them to the social-profiler agent in Microsoft Foundry, and shows the check stop on an invalid email address.
- [Connect a Foundry Agent to the Help Desk](./demo-connect-a-foundry-agent.md) (optional): the presenter enables the Activity Protocol on the Grey Logistics Device Specialist, connects it to the Grey Logistics IT Help Desk, routes a device question to it, and watches a change on the Foundry side reach the help desk.

## Key Topics covered in this module

[Connect to a Microsoft Foundry agent (preview)](https://learn.microsoft.com/microsoft-copilot-studio/add-agent-foundry-agent)

[Add other agents overview](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents)

[Configure and share your agent](https://learn.microsoft.com/azure/foundry/agents/how-to/configure-agent)

[Publish agents to Microsoft Copilot and Microsoft Teams](https://learn.microsoft.com/azure/foundry/agents/how-to/publish-copilot)

[Multi-agent orchestration patterns and best practices](https://learn.microsoft.com/microsoft-copilot-studio/guidance/multi-agent-patterns)

[Add a Foundry agent as a connected agent (GitHub Copilot)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-agent-foundry)
