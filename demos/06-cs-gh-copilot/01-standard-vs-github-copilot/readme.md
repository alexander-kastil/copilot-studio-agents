# Standard vs. GitHub Copilot Agents

In June 2026 Microsoft shipped a rebuilt Copilot Studio as a production-ready preview and rolled it out worldwide. It runs beside the established authoring model, so one tenant now holds two kinds of agent: Standard agents (Learn: standard harness) and GitHub Copilot agents (Learn: GitHub Copilot harness). This topic gives makers a clear mental model of what differs and, above all, how to tell which kind of agent they are working on before they change anything.

The teaching goal is transfer. Students learn Standard agents first, the kind most production agents and ALM pipelines use today (Topics, Knowledge, Tools, Settings), then meet GitHub Copilot agents beside them so every concept carries over. In this course, Standard agents are the primary track and GitHub Copilot agents run as guided demos and labs.

### What launched

GitHub Copilot agents bring three changes a maker notices at once. An enhanced orchestration runtime reasons and plans across steps on every turn. Authoring is natural-language-first: you describe the agent's job and connect what it needs. One **Build** tab gathers instructions, knowledge, tools, skills, model, connected agents and memory, while Standard agents keep working unchanged.

Learn calls the runtime behind each kind a harness. The standard harness follows the topics, rules and paths you define, which suits help desk agents that must answer the same way every time. The GitHub Copilot harness takes a goal, breaks it into steps, calls tools across connectors, knowledge, MCP and connected agents, recovers when a step fails, and creates or edits Word, Excel, PowerPoint and PDF files. A third harness, the Copilot chat harness, extends Microsoft Copilot Chat with your organization's knowledge.

The name points to technology shared with GitHub Copilot. Learn states that the GitHub Copilot harness is a Copilot Studio authoring and orchestration framework and that customer data isn't sent to or processed by the GitHub Copilot service. The usual Copilot Studio privacy, security, compliance and data residency commitments apply.

### Choosing when you create an agent

You pick the kind of agent when you create it, from the **New agent** menu on the **Agents** page. Under **Optimize your business processes**, **Agent** with the **GitHub Copilot** badge creates "an agent to take actions and answer questions". Under **Other ways to build**, **Agent** with the **Standard** badge creates "an agent with predefined rules and flows".

Existing agents open from the **Agents** list, where each Standard agent is marked Standard. You also reach Standard agents and agent flows through **...** at the bottom of the side bar and **Open classic experience**.

> **Note:** Some Learn pages for Standard agents still begin with "Turn off **New experience**". When your tenant shows the **New agent** menu, use it: the result is the same Standard agent.

### Telling the two kinds apart

The fastest tell is the agent's own navigation. A Standard agent opens on an **Overview** page, with pages such as Knowledge, Tools, Topics and Settings. A GitHub Copilot agent opens on the **Build** tab, with **Build**, **Preview**, **Evaluate** and **Monitor** across the top. If you see Topics, you are in a Standard agent.

![A Standard agent lists its pages down the left, while a GitHub Copilot agent shows Build, Preview, Evaluate and Monitor tabs across the top with its Build tab components below.](../pptx/images/01-02-telling-experiences-apart.svg)

Confirming which kind you are in before you build is the habit that prevents the most rework. A minute spent reading the navigation saves an hour of building in the wrong place.

### The one-way conversion rule

An agent created as one kind can't be moved to the other: Learn states that agents created with the GitHub Copilot harness can't be transferred to the standard harness, and the reverse holds too. The two run on different architectures. Standard agents use authored topics, triggers and branching; GitHub Copilot agents use instructions plus the reasoning runtime.

The practical consequence is simple: decide the kind before you invest in an agent. Rebuilding a mature Standard agent as a GitHub Copilot agent means authoring it again from scratch, and the same holds in reverse. Read the navigation, confirm the kind, then start building.

![Inside one tenant, the choice made when an agent is created sends it into either the Standard lane of authored topics and branching or the GitHub Copilot lane of instructions plus the reasoning runtime, and the lanes never meet.](../pptx/images/01-01-experience-per-agent.svg)

### When to choose which

Standard agents lead where you need deterministic control: authored topics and branching, a configurable orchestration mode (classic or generative), and features GitHub Copilot agents don't offer. Those include the prompt tool, custom entities, Azure AI Search knowledge, manual authentication, computer use, and the SharePoint, WhatsApp and Dynamics 365 Contact Center channels. Reach for a Standard agent when the conversation must follow an exact, auditable path.

Choose a GitHub Copilot agent for a greenfield agent that reasons over Microsoft 365 data, for longer multi-step work across several tools and files, and when you want Skills, memory and the enhanced orchestrator. Topics have a counterpart there: hooks run workflows at set points, such as when a session starts or before a tool runs. In this module, Standard agents stay the primary production track and GitHub Copilot agents run as guided demos and labs.

![Two columns of choice drivers: a Standard agent for deterministic control, auditable paths, authored topics and its mature feature set; a GitHub Copilot agent for greenfield agents that reason over Microsoft 365 data with instructions, Skills and the enhanced orchestrator.](./_images/when-to-choose-standard-or-github-copilot.svg)

### Matching the harness to the weight of the task

Learn's harness comparison frames the choice as task weight. A light task works on a bounded set of data, a stable set of actions and one main outcome; heavy work runs longer, spans several systems, loops over large files and produces several outputs. The GitHub Copilot harness earns its cost when the route to the outcome changes from run to run: evidence comes from several sources, documents need interpretation, an intermediate result decides the next step, or a failed step can be recovered by another path. On a simple task it adds reasoning, latency and Copilot Credits without a better result, and connectors or MCP servers alone don't call for it.

The two harnesses can also share one solution. In Learn's data curation scenario, high-volume Standard agents stay the responsive layer users talk to, while a GitHub Copilot agent runs on a schedule, turns large Excel workbooks into structured Dataverse tables and tidies the SharePoint content those agents search. Only validated output goes back into the shared data. Each agent keeps the kind it was created as, so the one-way rule still holds.

### Where each rule lives

The [GitHub Copilot Harness Execution](https://github.com/microsoft/ai-agent-runbooks/blob/main/02-patterns/GitHub-Copilot-Harness-Execution/GitHub-Copilot-Harness-Execution.md) pattern in Microsoft's AI Agent Runbooks starts with a sorting rule: put each requirement in the component that can carry it, and keep the user's request about the outcome. Rules that hold for every run belong in the agent's configuration.

| Requirement | Put it in | What to remember |
|-------------|-----------|------------------|
| Role, scope, forbidden actions, when to escalate | Instructions | They apply on every turn, so no request has to repeat them |
| Approved policies, standards and trusted records | Knowledge | A knowledge search finds passages; it doesn't prove the agent read a whole document |
| A narrow operation with clear inputs, outputs and errors | Tools | Remove the connector actions and turn off the MCP tools the task doesn't need, so the agent can't call them |
| A repeatable procedure and its output format | Skills | A `SKILL.md` guides the agent; it isn't a security boundary |
| An approval, a record update or a notification | Workflows | The authored path runs the same way every time |
| A check before a tool runs | Hooks | **Pre tool use** can deny the call; the target system still checks access itself |

### Bounding the agent's loop

A GitHub Copilot agent plans its own route, so the pattern sets the limits that route must stay inside. The agent asks for missing inputs, makes a plan, picks the knowledge, skills and tools it needs, runs the steps it may run, and checks that the evidence supports its output. When something is missing and recovery is safe, it plans again; when access is denied, a safety rule fails or a limit on calls, time or retries is reached, it stops and reports the work as partial or blocked. Replanning never widens permissions or works around a denial.

The loop ends at a handoff. The agent returns a draft with its evidence, uncertainty and exceptions, and a person or a deterministic workflow takes the consequential step: the approval, the record update, the payment. When the analysis is done, no business action has happened yet, so the output says which parts are complete, partial or blocked.

![Inside the agent run, a task contract leads to a plan, the plan to running only allowed steps with read-only tools, and those steps to a check of the evidence and output: a gap that is safe to recover sends the agent back to planning, a denial, a safety failure or a reached limit stops the run with a partial or blocked report, and a complete result leaves the agent as a draft that a person or workflow approves, records or pays.](./_images/bounded-execution-loop.svg)

### What the harness leaves to you

Read-only tools, mandatory human approval and protection against duplicate writes are part of your design, and the harness adds none of them by itself. Give the agent read-only tools and keep write access behind a workflow. Check how each tool signs in: with maker-provided credentials every user acts with the maker's permissions, so a user can reach data or actions their own account can't. Administrators can require end-user credentials under **Control maker credential options** in the Power Platform admin center, but the setting covers the whole environment or environment group and makes scheduled and background runs fail.

Hooks and human review have limits to know before you rely on them. A hook that fails, times out or returns something unreadable lets the agent continue as though it returned nothing, so a business-critical rule also needs a check in the system that owns the data. **Request for information** in a workflow pauses for a person, but it sends through Outlook only, reaches people in your tenant only, and uses the first response; it is not an all-reviewers approval.

Treat everything the agent reads as data. A document, a mail or a tool result can carry instructions, and none of them can change the agent's role or grant it permissions. Files the agent creates are capped at 10 MB each and deleted 28 days after the conversation's last activity, so accepted deliverables move to approved storage through a workflow. Memory is private to each user and is deleted after 28 days without interaction, so it never serves as the record of what was approved.

### Calling, publishing and paying for it

A GitHub Copilot agent joins an automation through a workflow: the **Agent** node of a Copilot Studio workflow calls the published agent, while the Microsoft Copilot Studio connector in Power Automate calls Standard agents only. The agent publishes to Microsoft Teams, Microsoft Copilot, the Demo website and a Web app, with MCP and A2A clients in preview; SharePoint, Native app, Email and the messaging channels aren't available yet.

Building, testing, evaluating and running a GitHub Copilot agent all consume Copilot Credits, and a Microsoft 365 Copilot license doesn't cover any of it. An agent's monthly limit under **Licensing** > **Copilot Studio** > **Manage Agents** > **Set limit** in the Power Platform admin center stops the agent only when **Stop usage** is on; the notification threshold and Azure budgets only warn. A monthly limit isn't a per-run limit either, so a run that must stop after a set number of calls or retries needs that limit in the tool or workflow it calls.

## Standard to GitHub Copilot at a glance

| Concept | Standard agent | GitHub Copilot agent |
|---------|----------------|----------------------|
| Create it | **New agent** menu, **Other ways to build**, **Agent** with the **Standard** badge | **New agent** menu, **Agent** with the **GitHub Copilot** badge |
| Navigation | Overview, Knowledge, Tools, Topics and Settings pages | Build, Preview, Evaluate and Monitor tabs |
| Authoring model | Topics, triggers, branching nodes | Natural-language instructions plus reasoning |
| Orchestration | Configurable (classic or generative) | Enhanced runtime, used for all agents |
| Reusable behavior | Topics, prompt tool | Skills, hooks |
| Convert to the other kind | Not possible | Not possible |
| Billing | Copilot Studio licensing for the standard harness | Usage-based Copilot Credits |
| Status | Generally available | Production-ready preview |

## Hands-On Demo

- [Build and Ground Your First GitHub Copilot Agent](./demo-01-build-and-ground-an-agent.md): the maker creates a Northwind Sales Assistant from the **New agent** menu, scopes it with Instructions, grounds it on a product document, and verifies a cited answer in Preview.
- [Tenant setup: Copilot Credits for GitHub Copilot agents and Work IQ](../../../setup/tenant-credit-setup.md): the one-time admin steps that give the environment and Work IQ the Copilot Credits every demo in this module consumes.

## Hands-On Lab

- [Compare Standard and GitHub Copilot Agents Side by Side](../../../labs/06-cs-gh-copilot/01-standard-vs-github-copilot/lab-01-compare-standard-and-github-copilot.md): the maker stands up a minimal Northwind assistant as a GitHub Copilot agent, contrasts it with a Standard agent, and records a per-agent decision that reinforces the **New agent** menu, coexistence, and the one-way conversion rule.

## Key Topics covered in this module

[Harnesses in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/harnesses-overview)

[Agents powered by the GitHub Copilot harness overview](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/overview)

[Access standard harness agents and agent flows](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/switch-experiences)

[Create a new agent (GitHub Copilot)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/build-new-agent)

[GitHub Copilot Harness Execution in Copilot Studio (AI Agent Runbooks)](https://github.com/microsoft/ai-agent-runbooks/blob/main/02-patterns/GitHub-Copilot-Harness-Execution/GitHub-Copilot-Harness-Execution.md)

[GitHub Copilot Harness Execution Runbook (AI Agent Runbooks)](https://github.com/microsoft/ai-agent-runbooks/blob/main/02-patterns/GitHub-Copilot-Harness-Execution/GitHub-Copilot-Harness-Execution-Runbook.md)

[What's new in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/whats-new)

[Meet the new Copilot Studio (announcement)](https://techcommunity.microsoft.com/blog/copilot-studio-blog/meet-the-new-copilot-studio-rebuilt-for-more-complex-multi-step-work/4526488)
