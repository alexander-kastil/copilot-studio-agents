# Connector Tools: Prebuilt Connectors

A grounded agent can explain the VPN policy; it cannot tell you who your manager is or send the escalation email. Those jobs live in Microsoft 365, line-of-business systems, and SaaS services, and Power Platform connectors are how a Copilot Studio agent reaches them. Each connector action you add becomes one tool that the agent can call on its own.

This topic teaches prebuilt connector tools in Copilot Studio's Standard agents (Learn: standard harness). You learn how the orchestrator chooses a tool and fills its inputs, how confirmation and completion settings shape the call, which credentials a tool runs with, how to call a tool from a topic you designed, and how component collections let several agents reuse the same tools.

![The HR agent in Copilot Studio with two tools: List HR candidates reads a table through Excel Online (Business), and a second tool adds a row to the same table. Generative orchestration chooses each tool from its description, and a topic can also call a tool directly.](../../../labs/04-cs-tools/03-connectors/_images/hr-agent-excel-tools-overview.svg)

## Connectors as tools

A Power Platform connector is a wrapper around an API, built so Copilot Studio, Power Automate, Power Apps, and Azure Logic Apps can all call the same service. Prebuilt connectors come in two kinds: standard connectors such as SharePoint are included in every Copilot Studio plan, and premium connectors are available in select plans. Custom connectors wrap any API that has no prebuilt connector, and they are taught in [Custom Connectors & REST APIs](../05-rest-api/readme.md).

Each connector exposes actions, and in Copilot Studio each action you add becomes a tool. You can add a connector tool at agent level from the Tools page, call it inside a topic, or add some connectors as a knowledge source (that last option is in preview). A maker adds a tool in a few clicks: **Tools**, **Add a tool**, **Connector**, pick the service and the action, create or select a connection, then **Add and configure**. Give everything you create at environment level a prefix such as `CS-` (agents, flows, prompts, connectors, tables, and named connections), so cleanup finds it; topics, entities, and knowledge inside an agent go when the agent is deleted.

| Connector example | Typical action as a tool | Help desk use |
|-------------------|--------------------------|---------------|
| Office 365 Users | Get manager (V2), Search for users (V2) | Find the requester's manager or a colleague |
| Office 365 Outlook | Send an email (V2) | Notify a manager about an outage |
| SharePoint | Get items | Read a list of known issues |
| Microsoft Dataverse | Add a new row | Record a business entry, see [Dataverse: Knowledge & Business Records](../02-dataverse/readme.md) |

## How the orchestrator picks a tool

With generative orchestration on, which is the default for new agents, the agent decides at runtime which tool, topic, or knowledge source answers a request. It weighs the tool's name and description, the conversation so far, the user's intent, the inputs and outputs the tool needs, and the tools it already used in the conversation. The description carries most of the weight, so write what the tool does and when to use it in the words your users type. A vague description makes the agent answer without calling the tool, and names typed in the wizard don't carry over, so rename the tool on its settings page after **Add and configure**.

The orchestrator also fills the inputs. By default every input is set to Dynamically fill with AI: the agent pulls the value from the conversation, and when it cannot find one it generates a question to ask the user. You never author a question node for those inputs. When a value must never come from the user, set Fill using to Custom value and enter a fixed value, a variable, or a Power Fx formula such as `System.User.Email`.

| Fill using | Where the value comes from | Use it for |
|------------|----------------------------|------------|
| Dynamically fill with AI | The user's message, earlier turns, or a generated question | Values the user naturally supplies, such as a search term or a recipient |
| Custom value | A fixed value, a variable, or a Power Fx formula | Values the user must not choose, such as their own identity or a fixed site address |

A single request can need several tools. The orchestrator builds a plan, for example look up the manager and then send the email, runs the tools in sequence, and asks only for the inputs it cannot fill. With classic orchestration the agent answers only through topics, and a tool runs only when a topic calls it. The orchestrator supports up to 128 tools per agent, and Learn recommends 25 to 30 for the best results.

## Confirmation and completion

Two settings decide how a tool behaves around the call itself. **Ask the end user before running** makes the agent ask the user to confirm before it runs the tool; it is off by default, and you turn it on for anything that sends, writes, or deletes. **After running** decides what the user sees once the tool finishes.

| After running | What the user sees |
|---------------|--------------------|
| Don't respond (default) | The agent works the tool output into its own reply |
| Write the response with generative AI | A generated reply based on the tool outputs |
| Send specific response | A message you author, with output variables inserted |
| Send an adaptive card | A card you design, with buttons and actions |

## Whose credentials a tool uses

Every connector call runs as someone, and that choice decides what data the agent can reach. By default a tool uses end user credentials: each person signs in to the connector the first time, and the agent can only do what that person could do. Maker-provided credentials run every call as the agent's author, which suits shared resources but means any user acts with the author's access.

| Credentials | Who signs in | Fits | Risk to manage |
|-------------|--------------|------|----------------|
| End user (default) | Each user, on first use | Personal data such as mail, calendar, and files | Users see a connection prompt the first time |
| Maker-provided | The agent author, once | Shared resources every user may read | Oversharing: users act with the author's permissions |

Maker-provided credentials need an authenticated channel, and administrators can turn the option off for an environment in the Power Platform admin center. Plan with that in mind before you build an agent around shared credentials.

The credential choice can also decide whether a tool runs at all. A Teams post tool on end user credentials stopped the test chat at "Let's get you connected first", and **Retry** kept failing until the tool was switched to **Maker-provided credentials**. The **Publish** dialog then warns "Your agent runs tools that use the author's credentials."

## One action or several steps

A connector tool runs one action. When a request needs several actions in a fixed order, such as generate a ticket number, write the ticket, and email the requester, those steps belong in an agent flow that the agent calls as one tool; agent flows are taught in [Agent Flows: Deterministic Automation](../04-agent-flows/readme.md).

## Calling a tool from a topic

Sometimes you want a tool at an exact point in a conversation you designed, for example after an adaptive card has collected a new hire's details. In a topic, select **Add node**, then **Add a tool**, and pick the tool from the Basic tools, Connector, or Tool tabs. The node maps topic variables to the tool's inputs, and the tool's outputs become variables for the next node.

Topic-level calls and agent-level tools coexist. Clear **Allow agent to decide dynamically when to use the tool** on a tool's configuration page when it should run only from a topic.

## Reusing tools with component collections

Once a team has a working set of tools, rebuilding them in every agent wastes time and drifts. A component collection packages agent components, including topics, knowledge, tools, child agents, MCP servers, connectors, flows, and entities, so several agents can use them. You create a collection from an agent's **Settings** > **Component collections**, or from the Component collections workspace on the side bar.

Adding components to a collection moves them out of the agent, and the agent then references them in the collection. Other authors can use the collection but cannot change the components inside it, and only the creator or a user with the system customizer or system admin role can edit it. Setting a primary agent restricts a collection to one agent. Exporting a collection produces a managed solution you can import into another environment; collections with connectors or environment variables travel better inside a solution you create yourself.

## Hands-On Demos

- [Post Trip Summaries to Teams with a Connector Tool](./demo-travel-agent-teams-tool.md): the presenter rebuilds the Travel Agent as CS-Travel Agent, collects a booking in a topic, and adds one Microsoft Teams action as a tool whose inputs the agent fills from the conversation to post a trip summary to a channel.
- [Give the Help Desk Agent Connector Tools](./demo-connector-tools.md) (optional): the presenter adds Office 365 Users and Outlook tools, fixes one input to the signed-in user, requires confirmation before mail goes out, watches the orchestrator chain the tools in one request, and moves them into a component collection.

## Hands-On Lab

- [Define Tools with Power Platform Connectors](../../../labs/04-cs-tools/03-connectors/lab-01-connector-and-flow-tools.md): learners give the HR agent an Excel Online connector tool and an agent flow tool, then call the flow from a topic that collects input with an adaptive card.

## Key Topics covered in this module

[Add tools to custom agents](https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent)

[Use Power Platform connectors as tools](https://learn.microsoft.com/microsoft-copilot-studio/advanced-connectors)

[Orchestrate agent behavior with generative AI](https://learn.microsoft.com/microsoft-copilot-studio/advanced-generative-actions)

[Configure user authentication in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/configuration-end-user-authentication)

[Control maker-provided credentials for authentication](https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication)

[Create and share reusable component collections](https://learn.microsoft.com/microsoft-copilot-studio/authoring-export-import-copilot-components)
