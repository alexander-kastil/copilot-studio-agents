# Migrate Standard Agents to Microsoft Copilot Harness Agents

Modules 03 to 05 built Standard agents out of topics, entities, variables, Power Fx, Adaptive Cards, prompts, agent flows and child agents. None of those agents turns into a Microsoft Copilot harness agent by itself: an agent built on one harness can't be transferred to the other. What Copilot Studio offers instead is a copy, rebuilt on the GitHub Copilot harness, with a report of what came across. This topic teaches when a move pays off, the three routes to make it, where each Standard part lands, and how the fixed paths you built with topics become workflows and hooks.

## Migrate When the Scenario Gains Something

Microsoft's guidance is blunt: a functioning Standard agent doesn't need to move simply because another harness is available. Move one when the scenario gains something you can name, such as better answer quality, more efficient orchestration, long-running execution, a reasoning model, or a capability only the GitHub Copilot harness has (skills, memory, the native code interpreter). Without that gain, the more capable harness can overwork a simple problem and raise Copilot Credit use and latency without improving the outcome.

The same guidance names the agents that should stay put. An HR intake bot that must always collect the same fields and hand the case to a fixed process is a Standard agent by design, because the ordered conversation is the product requirement. So is a production agent that depends on a channel, a rich card or a system variable the GitHub Copilot harness doesn't offer yet. A heavy, multi-source job that ends in several documents and actions is the case for moving.

Treat a migration as re-architecture. First write down the agent's tasks, outcomes, boundaries, risks and how you will evaluate it. Then list what each topic, flow, variable and prompt is for, and map that purpose onto instructions, skills, tools, workflows, memory, code execution and connected agents. The migration is done when the rebuilt agent completes its core journeys, proven with a test set.

## Three Routes to a Migrated Agent

All three routes leave the Standard agent untouched and produce a new agent next to it, so you can run both against the same test set before you switch users over.

![Three routes start from one Standard agent and end in a new Microsoft Copilot harness agent beside it: upgrade on the Copilot Studio home page with a report, rebuild by hand from a capability map, and migrate from the terminal with mcs-assistant and a plan file, while the original stays unchanged.](../pptx/images/08-02-migration-routes.svg)

The first route is the upgrade, in preview. On the Copilot Studio home page you type a request such as `upgrade my HR Buddy agent` into the input box, answer the questions Copilot Studio asks in the chat (whether it found the right agent, what to do with features that don't carry over), and the new agent appears as a card whose name ends in **(Upgraded)**. The upgrade carries over instructions, tools and suggested prompts, can rebuild custom topics as skills or workflows, and reports what was migrated, what requires attention and what was skipped. Knowledge sources, Power Fx expressions and child agents are not migrated, and the upgrade itself consumes Copilot Credits.

The second route is the rebuild by hand: you create a new agent with the **GitHub Copilot** badge and add each capability from the map in the next section. It costs more of your time, and it is the route the guidance describes, because you decide per journey what the new agent needs. The third route runs from the terminal: the `mcs-assistant` plugin's `/mcs-assistant:migrate` command describes the source agent, writes a migration plan you approve, then builds and pushes the new agent, as the lab [Build and Migrate an Agent from the Terminal](../../../labs/07-cs-maintaining/05-agentic-building/lab-01-build-and-migrate-from-the-terminal.md) shows on the Grey Logistics IT Help Desk.

## Where Each Standard Part Lands

The table maps every Standard capability modules 03 to 05 teach onto its place on the GitHub Copilot harness. The last column says whether the upgrade brings it across or you add it yourself.

![Standard parts on the left map to their places on a Microsoft Copilot harness agent on the right: instructions and tools carry over, topics become skills, workflows and hooks, prompts become skills, agent flows are rebuilt as workflows, knowledge is added again, child agents become connected agents or skills, and computer use, voice, Adaptive Cards and some channels stay on Standard agents.](../pptx/images/08-03-where-parts-land.svg)

| Standard capability (where taught) | On the GitHub Copilot harness | Upgrade |
|---|---|---|
| Instructions and suggested prompts ([03/01](../../03-cs-basics/01-standard-agents/readme.md)) | Instructions and suggested prompts | Carried over |
| Knowledge: websites, files, SharePoint, Dataverse tables, Graph connectors ([03/02](../../03-cs-basics/02-knowledge/readme.md), [04/02](../../04-cs-tools/02-dataverse/readme.md)) | The same source types under **Knowledge**; Azure AI Search isn't supported | Added again |
| Topics triggered by phrases or a description ([03/03](../../03-cs-basics/03-topics/readme.md)) | A skill for know-how the agent applies, a workflow tool for fixed steps, a hook for what must run every time | Rebuilt as skills or workflows |
| System topics such as Conversation Start and On Error ([03/03](../../03-cs-basics/03-topics/readme.md)) | Hooks on **Start (pre-loop)** and **Error** | Rebuilt |
| Question nodes, slot filling and custom entities ([03/03](../../03-cs-basics/03-topics/readme.md)) | The agent asks in conversation and passes the values as workflow inputs; custom entities aren't supported | Rebuilt |
| Topic and global variables ([03/03](../../03-cs-basics/03-topics/readme.md)) | Workflow inputs and outputs; user, channel and agent details arrive in a hook's `metadata`; **Memory** for what should outlast a session | Rebuilt |
| Power Fx formulas ([03/04](../../03-cs-basics/04-power-fx/readme.md)) | Branching and data steps inside a workflow, or the native code interpreter | Not migrated |
| Adaptive Cards in a topic ([03/05](../../03-cs-basics/05-adaptive-cards/readme.md)) | No documented equivalent; a workflow's human-in-the-loop action can request information instead | Stays Standard |
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
| Voice and phone menus ([05/06](../../05-cs-advanced/06-voice/readme.md)) | Not on the GitHub Copilot harness; voice agents run on the Customer Conversation harness | Stays Standard |
| Evaluations ([05/07](../../05-cs-advanced/07-evaluations/readme.md)) | The **Evaluate** tab, as in [topic 7](../07-evaluations/readme.md) | Rebuilt |

Two rows decide most migrations. Every topic you built is a question about purpose: if it carries know-how, it becomes a skill; if it runs fixed steps, it becomes a workflow; if it must happen on every turn or every tool call, it becomes a hook. The rows marked "Stays Standard" are the reason some agents shouldn't move yet, and the reason a team often runs both kinds side by side.

> [!NOTE]
> Power Fx has no direct replacement on the GitHub Copilot harness, and the upgrade lists every formula as not migrated. Its logic moves by purpose: fixed branches and data steps go into a workflow, whose fields take an expression to set a value dynamically, and know-how the agent applies goes into a skill. Exact computation goes to the agent sandbox, a Bash container where the agent runs code and creates or edits Word, Excel, PowerPoint and PDF files. Microsoft's guidance puts it in one line: "tools, workflows, and the agent sandbox provide access, repeatable execution, and exact computation."

## Deterministic Steps Without Topics

A Standard topic gives you a path the agent walks node by node, which is why modules 03 and 04 used topics whenever a process had to run the same way every time. The GitHub Copilot harness has no topics, yet Microsoft's guidance states that both harnesses allow predictable, deterministic responses: through predefined topics on the standard harness and through workflows on the GitHub Copilot harness. What changes is who decides that the fixed steps run, and the harness gives you three answers.

![Three ways to keep fixed steps on a Microsoft Copilot harness agent: a workflow tool that the agent chooses by its description, a hook whose workflow runs every time its event fires, and a workflow that owns the order and calls the agent from one agent node.](../pptx/images/08-04-tool-hook-agent-node.svg)

A workflow as a tool keeps the steps fixed and leaves the decision to the agent. The workflow starts with the trigger **When an agent calls the flow**, ends with **Respond to the agent**, and runs connectors, branches, loops and AI actions in between; the agent picks it by its name and description, the way a generative Standard agent picks a topic by its description. It must be published, it must answer within the 100 second action limit, and **Asynchronous response** under **Networking** must stay off. Agent flows you built in module 04 aren't converted, so each one is rebuilt as a workflow in the designer.

A hook takes the decision away from the agent. You add it from the top menu bar (**…** > **Hooks** > **Create**), pick an event and bind a workflow whose inputs and outputs fit that event, and the workflow runs every time the event fires. The events are **Start (pre-loop)**, **User prompt submitted**, **Error**, **Pre tool use**, **Post tool use** and **After tool failure**; a **Start (pre-loop)** hook replaces a Conversation Start topic by returning `additionalContext`, and only **Pre tool use** can block a call, by returning `permissionDecision` set to `deny`. A failing hook doesn't stop the agent, so it is never the only safeguard for a business-critical rule.

| | Workflow as a tool | Hook |
|---|---|---|
| What starts it | The agent chooses it by name and description | The event fires |
| How reliably it runs | When the agent judges it relevant | Every time the event occurs |
| What its response does | Gives the agent information it might use | Changes what the agent does next |

The third answer inverts the relationship: a workflow owns the order of the steps and calls the agent from one agent node, as the follow-up workflow in [topic 4](../04-workflows-and-mcp/readme.md) does. Use it when the process itself is the product, for example an approval that must always run through the same three steps and only needs the agent to draft one of them.

## Rebuilding a Topic Node by Node

A topic with questions, conditions and a flow call translates into a workflow plus a short instruction. The trigger phrases or the trigger description become the workflow's description, because that text now tells the agent when to call it. Each question node becomes a workflow input with a description, and the agent collects the value in conversation; the agent's instructions say what to ask for when it is missing.

The Action node that called an agent flow becomes the steps of that flow inside the workflow, and the conditions written in Power Fx become branches on the canvas or move into the agent's reasoning when the rule depends on what the text means. Message nodes become outputs of **Respond to the agent**, which the agent words for the user. A redirect to another topic becomes another tool or skill the agent can reach, and the whole conversation is proven in **Preview**, where the step list shows **Used tool** with the workflow's name.

## Hands-On Demo

- [Rebuild a Topic and Its Agent Flow as a Workflow](./demo-08-rebuild-a-topic-as-a-workflow.md): upgrade the Health Advisor from module 04, read what the upgrade carried over and skipped, and rebuild its symptom topic and agent flow as a workflow tool the upgraded agent calls.

## Hands-On Lab

- [Upgrade the HR Agent and Rebuild Its Topics](../../../labs/06-cs-copilot-harness/08-migration/lab-01-upgrade-the-hr-agent.md): upgrade the HR agent you built in module 03, map each of its topics to a skill, a workflow or a hook, rebuild the employee data topic as a workflow tool, add a session-start hook, and prove both in Preview.

## Key Topics covered in this module

[Compare Copilot Studio agent harnesses](https://learn.microsoft.com/microsoft-copilot-studio/guidance/choose-harness)

[Upgrade agents to the GitHub Copilot harness (preview)](https://learn.microsoft.com/microsoft-copilot-studio/upgrade-to-github-copilot-from-standard-harness)

[Agents powered by the GitHub Copilot harness overview](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/overview)

[Add a workflow to your agent as a tool](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-add-workflow)

[Hooks (GitHub Copilot) (preview)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/hooks-overview)

[Workflows overview (GitHub Copilot)](https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview)

[FAQ for workflows (GitHub Copilot)](https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/faq-workflows)
