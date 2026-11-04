# Migrate Standard Agents to Microsoft Copilot Harness Agents

Modules 03 to 05 built Standard agents out of topics, entities, variables, Power Fx, Adaptive Cards, prompts, agent flows and child agents. None of those agents turns into a Microsoft Copilot harness agent by itself: an agent built on one harness can't be transferred to the other. What Copilot Studio offers instead is a copy, rebuilt on the GitHub Copilot harness, with a report of what came across. This topic teaches when a move pays off, the three routes to make it, where each Standard part lands, how the fixed paths you built with topics become workflows and hooks, and the three harness parts the class has only named so far: hooks, triggers and the agent sandbox.

## The Full Harness at a Glance

A harness is the runtime between what you design and the model you pick: it decides when to call the model, what to send it, how to read what comes back, and which tools to call. Before you map a Standard agent onto it, it helps to see every part at once. A run starts from a chat message, a trigger or a workflow's agent node, goes through the agent loop that plans, calls, checks and replans, and ends in an answer, a created file or an action taken through a tool.

![The full Microsoft Copilot harness: a run starts from a chat message, a trigger in preview or a workflow agent node, passes through the agent loop with its model, six hook points, the Build tab parts and the agent sandbox, and returns an answer, a created file card or actions through tools, with Preview, Evaluate and Monitor around it; hooks, triggers and the sandbox are highlighted as new in this topic.](../pptx/images/07-01-full-harness.svg)

The Build tab holds the parts you met in topics 1 to 5: instructions, knowledge, tools, skills, the model, connected agents and memory. Three parts sit outside it, and this topic gives each its own section after the migration map. Hooks run your workflows at six fixed points of the loop, triggers start the agent when an event happens in a connected service, and the agent sandbox runs code and creates Word, Excel, PowerPoint and PDF files. Preview, Evaluate and Monitor test and watch the whole run.

## Migrate When the Scenario Gains Something

Microsoft's guidance is blunt: a functioning Standard agent doesn't need to move simply because another harness is available. Move one when the scenario gains something you can name, such as better answer quality, more efficient orchestration, long-running execution, a reasoning model, or a capability only the GitHub Copilot harness has (skills, memory, the native code interpreter). Without that gain, the more capable harness can overwork a simple problem and raise Copilot Credit use and latency without improving the outcome.

The same guidance names the agents that should stay put. An HR intake bot that must always collect the same fields and hand the case to a fixed process is a Standard agent by design, because the ordered conversation is the product requirement. So is a production agent that depends on a channel, a rich card or a system variable the GitHub Copilot harness doesn't offer yet. A heavy, multi-source job that ends in several documents and actions is the case for moving.

Treat a migration as re-architecture. First write down the agent's tasks, outcomes, boundaries, risks and how you will evaluate it. Then list what each topic, flow, variable and prompt is for, and map that purpose onto instructions, skills, tools, workflows, memory, code execution and connected agents. The migration is done when the rebuilt agent completes its core journeys, proven with a test set.

## Three Routes to a Migrated Agent

All three routes leave the Standard agent untouched and produce a new agent next to it, so you can run both against the same test set before you switch users over.

![Three routes start from one Standard agent and end in a new Microsoft Copilot harness agent beside it: upgrade on the Copilot Studio home page with a report, rebuild by hand from a capability map, and migrate from the terminal with mcs-assistant and a plan file, while the original stays unchanged.](../pptx/images/07-03-migration-routes.svg)

The first route is the upgrade, in preview. On the Copilot Studio home page you type a request such as `upgrade my HR Buddy agent` into the input box, answer the questions Copilot Studio asks in the chat (whether it found the right agent, what to do with features that don't carry over), and the new agent appears as a card whose name ends in **(Upgraded)**. The upgrade carries over instructions, tools and suggested prompts, can rebuild custom topics as skills or workflows, and reports what was migrated, what requires attention and what was skipped. Knowledge sources, Power Fx expressions and child agents are not migrated, and the upgrade itself consumes Copilot Credits.

The second route is the rebuild by hand: you create a new agent with the **GitHub Copilot** badge and add each capability from the map in the next section. It costs more of your time, and it is the route the guidance describes, because you decide per journey what the new agent needs. The third route runs from the terminal: the `mcs-assistant` plugin's `/mcs-assistant:migrate` command describes the source agent, writes a migration plan you approve, then builds and pushes the new agent, as the lab [Build and Migrate an Agent from the Terminal](../../../labs/07-cs-maintaining/05-agentic-building/lab-01-build-and-migrate-from-the-terminal.md) shows on the Grey Logistics IT Help Desk.

## Where Each Standard Part Lands

The table maps every Standard capability modules 03 to 05 teach onto its place on the GitHub Copilot harness. The last column says whether the upgrade brings it across or you add it yourself.

![Standard parts on the left map to their places on a Microsoft Copilot harness agent on the right: instructions and tools carry over, topics become skills, workflows and hooks, prompts become skills, agent flows are rebuilt as workflows, knowledge is added again, child agents become connected agents or skills, and computer use, voice, Adaptive Cards and some channels stay on Standard agents.](../pptx/images/07-04-where-parts-land.svg)

| Standard capability (where taught) | On the GitHub Copilot harness | Upgrade |
|---|---|---|
| Instructions and suggested prompts ([03/01](../../03-cs-basics/01-standard-agents/readme.md)) | Instructions and suggested prompts | Carried over |
| Knowledge: websites, files, SharePoint, Dataverse tables, Graph connectors ([03/02](../../03-cs-basics/02-knowledge/readme.md), [04/02](../../04-cs-tools/02-dataverse/readme.md)) | The same source types under **Knowledge**; Azure AI Search isn't supported | Added again |
| Topics triggered by phrases or a description ([03/03](../../03-cs-basics/03-topics/readme.md)) | A skill for know-how the agent applies, a workflow tool for fixed steps, a hook for what must run every time | Rebuilt as skills or workflows |
| System topics such as Conversation Start and On Error ([03/03](../../03-cs-basics/03-topics/readme.md)) | Hooks on **Start (pre-loop)** and **Error** | Rebuilt |
| Question nodes, slot filling and custom entities ([03/03](../../03-cs-basics/03-topics/readme.md)) | The agent asks in conversation and passes the values as workflow inputs; custom entities aren't supported | Rebuilt |
| Topic and global variables ([03/03](../../03-cs-basics/03-topics/readme.md)) | Workflow inputs and outputs; user, channel and agent details arrive in a hook's `metadata`; **Memory** for what should outlast a session | Rebuilt |
| Power Fx formulas ([03/04](../../03-cs-basics/04-power-fx/readme.md)) | Branching and data steps inside a workflow, or the native code interpreter | Not migrated |
| Adaptive Cards in a topic ([03/05](../../03-cs-basics/05-adaptive-cards/readme.md)) | No card designer; each purpose moves elsewhere: the agent asks for input in conversation and passes it to a workflow, shows results as formatted text or a generated Word, Excel, PowerPoint or PDF file, and a workflow's **Request for information** asks a person outside the chat | Stays Standard |
| Publishing and authentication ([03/06](../../03-cs-basics/06-publishing/readme.md)) | Microsoft 365 and Teams, websites; Entra ID or no authentication. SharePoint, WhatsApp and Dynamics 365 Contact Center channels and manual authentication aren't supported | Published again |
| Prompt tool ([04/01](../../04-cs-tools/01-prompts/readme.md)) | Not supported; replaced by skills, with the code interpreter for computation | Rebuilt |
| Connector tools and custom connectors ([04/03](../../04-cs-tools/03-connectors/readme.md), [04/05](../../04-cs-tools/05-rest-api/readme.md)) | **Connectors** on the Tools surface | Carried over as tools |
| Agent flows called from a topic ([04/04](../../04-cs-tools/04-agent-flows/readme.md)) | Workflows with **When an agent calls the flow** and **Respond to the agent**; agent flows aren't converted | Rebuilt |
| HTTP request node and REST API tool ([04/05](../../04-cs-tools/05-rest-api/readme.md)) | A connector, or an HTTP step inside a workflow; the tool types are connectors, MCP servers and workflows | Rebuilt |
| MCP servers ([04/06](../../04-cs-tools/06-mcp/readme.md)) | **MCP** on the Tools surface, as in [topic 4](../04-workflows-and-mcp/readme.md) | Carried over as tools |
| Computer use ([04/07](../../04-cs-tools/07-computer-use/readme.md)) | Planned | Stays Standard |
| Event triggers and autonomous runs ([05/01](../../05-cs-advanced/01-autonomous-agents/readme.md)) | Triggers (preview), or a workflow whose agent node calls the agent | Rebuilt |
| Deep reasoning ([05/02](../../05-cs-advanced/02-deep-reasoning/readme.md)) | A reasoning model chosen under **Model** on the **Build** tab; no `reason` keyword | Rebuilt |
| Child agents ([05/03](../../05-cs-advanced/03-multi-agent/readme.md)) | Skills, or a connected agent | Not migrated |
| Connected Copilot Studio, Foundry and A2A agents ([05/03](../../05-cs-advanced/03-multi-agent/readme.md), [05/05](../../05-cs-advanced/05-connect-foundry-agents/readme.md)) | **Connected agents** | Added again |
| Voice and phone menus | Not on the GitHub Copilot harness; voice agents run on the Customer Conversation harness | Stays Standard |
| Evaluations ([05/06](../../05-cs-advanced/06-evaluations/readme.md)) | The **Evaluate** tab, as in [topic 6](../06-evaluations/readme.md) | Rebuilt |

Two rows decide most migrations. Every topic you built is a question about purpose: if it carries know-how, it becomes a skill; if it runs fixed steps, it becomes a workflow; if it must happen on every turn or every tool call, it becomes a hook. The rows marked "Stays Standard" are the reason some agents shouldn't move yet, and the reason a team often runs both kinds side by side.

> [!NOTE]
> Power Fx has no direct replacement on the GitHub Copilot harness, and the upgrade lists every formula as not migrated. Its logic moves by purpose: fixed branches and data steps go into a workflow, whose fields take an expression to set a value dynamically, and know-how the agent applies goes into a skill. Exact computation goes to the agent sandbox, a Bash container where the agent runs code and creates or edits Word, Excel, PowerPoint and PDF files. Microsoft's guidance puts it in one line: "tools, workflows, and the agent sandbox provide access, repeatable execution, and exact computation."

## Deterministic Steps Without Topics

A Standard topic gives you a path the agent walks node by node, which is why modules 03 and 04 used topics whenever a process had to run the same way every time. The GitHub Copilot harness has no topics, yet Microsoft's guidance states that both harnesses allow predictable, deterministic responses: through predefined topics on the standard harness and through workflows on the GitHub Copilot harness. What changes is who decides that the fixed steps run, and the harness gives you three answers.

![Three ways to keep fixed steps on a Microsoft Copilot harness agent: a workflow tool that the agent chooses by its description, a hook whose workflow runs every time its event fires, and a workflow that owns the order and calls the agent from one agent node.](../pptx/images/07-05-tool-hook-agent-node.svg)

A workflow as a tool keeps the steps fixed and leaves the decision to the agent. The workflow starts with the trigger **When an agent calls the flow**, ends with **Respond to the agent**, and runs connectors, branches, loops and AI actions in between; the agent picks it by its name and description, the way a generative Standard agent picks a topic by its description. It must be published, it must answer within the 100 second action limit, and **Asynchronous response** under **Networking** must stay off. Agent flows you built in module 04 aren't converted, so each one is rebuilt as a workflow in the designer.

A hook takes the decision away from the agent. You add it from the top menu bar (**…** > **Hooks** > **Create**), pick an event and bind a workflow whose inputs and outputs fit that event, and the workflow runs every time the event fires. The events are **Start (pre-loop)**, **User prompt submitted**, **Error**, **Pre tool use**, **Post tool use** and **After tool failure**; a **Start (pre-loop)** hook replaces a Conversation Start topic by returning `additionalContext`, and only **Pre tool use** can block a call, by returning `permissionDecision` set to `deny`. A failing hook doesn't stop the agent, so it is never the only safeguard for a business-critical rule.

| | Workflow as a tool | Hook |
|---|---|---|
| What starts it | The agent chooses it by name and description | The event fires |
| How reliably it runs | When the agent judges it relevant | Every time the event occurs |
| What its response does | Gives the agent information it might use | Changes what the agent does next |

The third answer inverts the relationship: a workflow owns the order of the steps and calls the agent from one agent node, as the follow-up workflow in [topic 4](../04-workflows-and-mcp/readme.md) does. Use it when the process itself is the product, for example an approval that must always run through the same three steps and only needs the agent to draft one of them.

## Hooks: Six Points Where Your Workflow Runs

A hook has two parts: an event in the agent's lifecycle and a workflow that runs when the event fires. Copilot Studio passes the workflow what just happened and reads its response back into the conversation, so the response changes what the agent does next. You manage hooks from the top menu bar (**…** > **Hooks**), and on the **Add hook** page you pick the **Event type**, a **Name**, the **Tools** for the three tool events and the **Workflow**. **New workflow** opens a starter with **When an agent calls the flow** carrying the event's inputs and **Respond to the agent** carrying its outputs; keep those field names, because Copilot Studio matches the workflow to the event by them.

![One run of a Microsoft Copilot harness agent from session start to answer, with six hook events along it: Start (pre-loop) returns additionalContext, User prompt submitted returns modifiedPrompt, Pre tool use can deny the call or change its parameters as the only hook that blocks, Post tool use returns modifiedResult on success, After tool failure returns additionalContext on failure, and Error decides retry, skip or abort; every hook receives event, timestamp and metadata.](../pptx/images/07-06-hook-events.svg)

| Event | When it fires | What the workflow receives | What it can return |
|---|---|---|---|
| **Start (pre-loop)** | A new conversation begins | Only the three common inputs | `additionalContext`: background for the session |
| **User prompt submitted** | Each user message, before the agent reads it | `prompt` | `modifiedPrompt`, `suppressOutput` |
| **Pre tool use** | Before the agent calls a tool | `toolName`, `parameters` | `permissionDecision` (`deny`), `permissionDecisionReason`, `modifiedParameters`, `additionalContext`, `suppressOutput` |
| **Post tool use** | After a tool finishes successfully | `toolName`, `parameters`, `result` | `modifiedResult`, `additionalContext`, `suppressOutput` |
| **After tool failure** | When a tool returns an error | `toolName`, `parameters`, `error` | `additionalContext` |
| **Error** | An error outside a tool call | `error`, `errorContext`, `recoverable` | `errorHandling` (`retry`, `skip`, `abort`), `retryCount`, `userNotification`, `suppressOutput` |

Every event also sends `event`, `timestamp` and `metadata`, an object with the conversation ID, the user's channel ID and Entra object ID, the display name, the channel and the agent's ID and names. Any metadata field can be empty, and the user fields are empty when the person isn't signed in, so check a field before the workflow relies on it. All outputs are optional: an empty output leaves the agent's default behavior in place.

Each event answers one kind of need. A **Start (pre-loop)** hook looks up the user's region, team or open cases and hands it to the agent before the first message, the job a Conversation Start topic did. **User prompt submitted** standardizes what the agent receives, and **Pre tool use** checks a call against a business rule, blocks it with `permissionDecision` set to `deny`, or corrects the arguments. **Post tool use** redacts or reformats a result or writes an audit record, **After tool failure** tells the agent how to read a failed call, and **Error** decides whether to retry, skip or abort and what the user is told.

The three tool events run for every tool until you narrow them in the **Tools** field, and both scopes combine: one hook on all tools writes the audit record while a second hook on one sensitive tool adds an extra check. One workflow can serve as a tool and as several hooks, because a hook stores a reference to it, so editing the workflow changes every hook that uses it. The workflow must be published, hooks are stored only when you save the agent and reach users only after you publish it, and every input (prompts, tool results, error messages) is untrusted content to validate. A hook that fails, times out or returns something unreadable lets the agent continue as if it returned nothing, which is why it is never the only safeguard for a business-critical rule.

## Triggers: Agents That Start on an Event

Triggers, in preview, make a Microsoft Copilot harness agent autonomous: it runs when something happens in a connected service, such as an email arriving, an item created in SharePoint or a scheduled time. They are the counterpart of the event triggers you gave Standard autonomous agents in [module 05](../../05-cs-advanced/01-autonomous-agents/readme.md). A trigger sends only the event details, and the agent's instructions and tools decide what happens with them. So add the tools first and write instructions that say how to handle the event and when to use each tool.

![Three event sources, New email, SharePoint item created and Recurrence, feed a Trigger (preview) with its connection, extra instructions and trigger options; the trigger sends event details to the agent, whose instructions and tools do the work, tested with Start listening or a previous event, and after publishing the agent is activated for the maker with maker credentials or shared so others run it with their own credentials, billed in Copilot Credits to the environment.](../pptx/images/07-07-triggers.svg)

You add a trigger under **Triggers** on the agent and configure it in four parts. The connection must show a green check, except for triggers such as **Recurrence** and the Copilot and Teams triggers, which need none. Optional extra instructions tell the agent what this trigger means, which matters as soon as an agent has more than one, and the **Trigger options** decide which events invoke the agent (for **New email**: the folder, To and CC). **Editable by user** marks the options people may change once you share the agent, and **Advanced parameters** hold the rest.

Test every trigger before you publish with the testing flask, reachable from the trigger on the **Build** tab or from the **Preview** tab. **Start listening** waits while you cause a real event, such as sending the email, and **Test with previous trigger events** replays the last email or file. The agent runs on its own only after you publish it, and every change to a trigger, its instructions or its tools needs a republish that users accept.

After publishing, the success dialog asks who runs the agent. **Activate for myself** opens **Agent management**, where you turn the agent on and it runs with your maker credentials. **Share with others** lets each person run it with their own credentials once you share the agent and configure its triggers and tools for user authentication; recipients complete their connections and change only the options you left editable. Every run uses Copilot Credits, totalled and billed through the environment that hosts the agent.

## The Agent Sandbox: Code and Files

Every task of a Microsoft Copilot harness agent runs in a secure sandbox governed by Copilot Studio, a Bash container where the agent runs code. It is the native code interpreter of the harness comparison (Standard agents get one only as an opt-in for prompts) and the place where exact computation from a Power Fx formula lands. There is no tool to add and no switch to turn on: when a request needs a file or a calculation, the agent writes and runs the code itself.

![A chat request to chart revenue by region with sales.xlsx attached runs in the agent sandbox, where Python code uses pandas, matplotlib, openpyxl, python-docx, python-pptx and reportlab with the built-in file skills, and returns a created file card with a Download button; a follow-up makes the agent read the file back, and each file is limited to 10 MB and kept 28 days after the last activity.](../pptx/images/07-08-agent-sandbox.svg)

The sandbox comes with Python packages for file and data work, and the user only describes the result, for example a summary of a sales workbook with a chart of revenue by region.

| Task | Package |
|---|---|
| Create and edit Word documents | `python-docx` |
| Create and edit Excel workbooks | `openpyxl` |
| Create and edit PowerPoint presentations | `python-pptx` |
| Create PDF files | `reportlab` |
| Filter, group and summarize tabular data | `pandas` |
| Create charts from data | `matplotlib` |

Packages supply the code libraries, and the built-in skills from [topic 3](../03-agent-skills/readme.md) supply the instructions for reading CSV, Word, HTML, Markdown, PDF, PowerPoint and Excel files. The turn that produces a file ends with a created file card below the message: the file name and type, a preview or icon, and **Download**. The card appears in **Preview** and in every published channel, and a follow-up such as `make the chart taller` makes the agent read the file back and return a new version.

Created files stay with the conversation for 28 days after its last activity, the same period as files a user attaches, and each file can be up to 10 MB. A larger file isn't shown in the response; the turn goes on and the agent usually explains why, so ask it to split the output, for example one document per chapter. Because the files expire, a workflow moves accepted deliverables to approved storage, as [topic 1](../01-standard-vs-copilot-harness/readme.md) recommends.

## Rebuilding a Topic Node by Node

A topic with questions, conditions and a flow call translates into a workflow plus a short instruction. The trigger phrases or the trigger description become the workflow's description, because that text now tells the agent when to call it. Each question node becomes a workflow input with a description, and the agent collects the value in conversation; the agent's instructions say what to ask for when it is missing.

The Action node that called an agent flow becomes the steps of that flow inside the workflow, and the conditions written in Power Fx become branches on the canvas or move into the agent's reasoning when the rule depends on what the text means. Message nodes become outputs of **Respond to the agent**, which the agent words for the user. A redirect to another topic becomes another tool or skill the agent can reach, and the whole conversation is proven in **Preview**, where the step list shows **Used tool** with the workflow's name.

## Hands-On Demo

- [Rebuild a Topic and Its Agent Flow as a Workflow](./demo-07-rebuild-a-topic-as-a-workflow.md): upgrade the Health Advisor from module 04, read what the upgrade carried over and skipped, and rebuild its symptom topic and agent flow as a workflow tool the upgraded agent calls.

## Hands-On Lab

- [Upgrade the HR Agent and Rebuild Its Topics](../../../labs/06-cs-copilot-harness/07-migration/lab-01-upgrade-the-hr-agent.md): upgrade the HR agent you built in module 03, map each of its topics to a skill, a workflow or a hook, rebuild the employee data topic as a workflow tool, add a session-start hook, and prove both in Preview.

## Key Topics covered in this module

[Compare Copilot Studio agent harnesses](https://learn.microsoft.com/microsoft-copilot-studio/guidance/choose-harness)

[Upgrade agents to the GitHub Copilot harness (preview)](https://learn.microsoft.com/microsoft-copilot-studio/upgrade-to-github-copilot-from-standard-harness)

[Agents powered by the GitHub Copilot harness overview](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/overview)

[Add a workflow to your agent as a tool](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-add-workflow)

[Hooks (GitHub Copilot) (preview)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/hooks-overview)

[Harnesses in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/harnesses-overview)

[Add triggers to an agent (GitHub Copilot) (preview)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-add-event-trigger)

[Files the agent creates (GitHub Copilot) (preview)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/created-files-overview)

[Workflows overview (GitHub Copilot)](https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview)

[FAQ for workflows (GitHub Copilot)](https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/faq-workflows)
