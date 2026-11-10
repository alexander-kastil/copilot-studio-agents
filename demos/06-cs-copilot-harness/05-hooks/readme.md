# Hooks: Steps That Run Every Time

A hook binds one of your workflows to an event in the agent's run, such as a session starting, a tool about to run or an error, and Copilot Studio runs that workflow every time the event fires. This topic teaches makers when a rule belongs in a hook, which six events a Microsoft Copilot harness agent raises, and how a hook's response changes what the agent does next. It builds on the workflows designer from [topic 4](../04-workflows-and-mcp/readme.md), because the action of every hook is a published workflow.

The maker takeaway is placement by certainty. Guidance the agent may weigh goes into the instructions, a process the agent starts when it judges it relevant becomes a workflow tool, and a step that must happen on every session, every message or every tool call becomes a hook.

## Who Decides That a Step Runs

Instructions shape what the model plans, and the model weighs them against the request in front of it, so a line such as "log every order" holds most of the time and still leaves the choice to the agent. A workflow as a tool runs only when the agent picks it by its name and description. A hook runs when its event fires, with no decision by the agent in between, which makes it the place for rules you need applied consistently: an audit record for every tool call, a policy check before a tool runs, or the same background facts at the start of every session.

![Three cards from left to right: an Instruction, which the model reads while it plans and which holds as far as the model follows it; a Workflow as a tool, which the agent picks by name and description and which runs when the agent judges it relevant; and a Hook, which runs every time its event occurs; an arrow beneath runs from the agent decides to the event decides, with log every order as the example.](../pptx/images/05-01-who-decides.svg)

| | Instruction | Workflow as a tool | Hook |
|---|---|---|---|
| What starts it | The model reads it while it plans | The agent chooses it by name and description | The event fires |
| How reliably it runs | As far as the model follows it | When the agent judges it relevant | Every time the event occurs |
| What it changes | How the agent plans and answers | Gives the agent information it might use | Changes what the agent does next |

A hook has two parts: an event in the agent's lifecycle and an action, which today is always a workflow. When the event fires, Copilot Studio calls the workflow, passes it the details of what just happened and reads the workflow's response back into the conversation. The same workflow can serve as a tool and as several hooks, and one agent can carry many hooks.

## Six Events Along One Run

![One run of a Microsoft Copilot harness agent from session start to answer, with six hook events along it: Start (pre-loop) returns additionalContext, User prompt submitted returns modifiedPrompt, Pre tool use can deny the call or change its parameters as the only hook that blocks, Post tool use returns modifiedResult on success, After tool failure returns additionalContext on failure, and Error decides retry, skip or abort; every hook receives event, timestamp and metadata.](../pptx/images/05-02-hook-events.svg)

| Event | When it fires | What the workflow receives | What it can return |
|---|---|---|---|
| **Start (pre-loop)** | A new conversation begins | Only the three common inputs | `additionalContext`: background for the session |
| **User prompt submitted** | Each user message, before the agent reads it | `prompt` | `modifiedPrompt`, `suppressOutput` |
| **Pre tool use** | Before the agent calls a tool | `toolName`, `parameters` | `permissionDecision` (`deny`), `permissionDecisionReason`, `modifiedParameters`, `additionalContext`, `suppressOutput` |
| **Post tool use** | After a tool finishes successfully | `toolName`, `parameters`, `result` | `modifiedResult`, `additionalContext`, `suppressOutput` |
| **After tool failure** | When a tool returns an error | `toolName`, `parameters`, `error` | `additionalContext` |
| **Error** | An error outside a tool call | `error`, `errorContext`, `recoverable` | `errorHandling` (`retry`, `skip`, `abort`), `retryCount`, `userNotification`, `suppressOutput` |

Every event also sends `event`, `timestamp` and `metadata`. The `event` value names the event, such as `PreTool`, so one workflow can serve several hooks and branch on it. The `metadata` object carries `conversationId`, `userId`, `userAadObjectId`, `userDisplayName`, `channel`, `agentId`, `agentName` and `agentSchemaName`; any of them can be empty, and the user fields are empty when the person isn't signed in, so check a field before the workflow relies on it.

All outputs are optional, and an empty output leaves the agent's default behavior in place. That keeps a hook small: a Start hook that only sets `additionalContext`, or a Pre tool use hook that only fills `permissionDecision` when a rule is broken, is a complete hook. The outputs belong in the starter **Respond to the agent** node, the only response a hook workflow can have: a second response node stops the workflow from publishing, an **If/Else** branch that ends without one returns an error, and an output you add yourself is stored under a generic name the agent ignores, so a hook branches inside the output's expression.

## Four Patterns Worth Building

Most business rules that need a hook fall into four patterns, one per stage of the run. Each pattern below names the event, what the workflow reads and what it returns.

![Four hook patterns along one run from session start to answer: Start (pre-loop) loads the user's context such as the approval limit and manager from Dataverse, Pre tool use checks a call and returns deny with a reason, Post tool use and After tool failure record what the tools did, and Error decides whether to retry, skip or abort; a strip below warns that a hook fails open and is never the only safeguard.](../pptx/images/05-03-four-patterns.svg)

### Load the user's context when a session starts

A **Start (pre-loop)** hook looks up who is chatting and hands the agent the facts it needs before the first message. A purchasing agent, for example, reads the user's purchase order approval limit and manager from a Dataverse table by `userAadObjectId` and returns them as `additionalContext`, so every answer in the session already knows that this user approves up to 5,000 EUR and who signs above that. The text is background for this session only, and it takes over the job of the Conversation Start topic a Standard agent ran.

### Check a tool call before it runs

A **Pre tool use** hook receives `toolName` and `parameters` and can return `permissionDecision` set to `deny` with a `permissionDecisionReason`, which blocks the call; the agent reads the reason and explains it to the user. It can also return `modifiedParameters` to correct the arguments, for example to add a cost center the agent left out. It is the only event that can block an action, so a rule such as "no order above the user's limit" lives here, scoped in the **Tools** field to the tool that places the order.

The keys in `parameters` are the tool's own input keys, which for a workflow tool are the designer's `text`, `text_1` and `number`, so read them in the hook workflow's run history before you write the expression. In the class demo the agent held a 6,400 EUR order from the Start context alone and asked for approval; when the user insisted, it called the tool, and the Pre tool use hook blocked the call. The context made the right answer likely, and the hook made it certain.

### Record what the tools did

A **Post tool use** hook receives the call and its `result` after a tool succeeded: it can write an audit row to a Dataverse table or a SharePoint list, and return `modifiedResult` to redact a value before the model sees it. An **After tool failure** hook receives the `error` of a failed call, can log it the same way or send a mail, and returns `additionalContext` that tells the agent how to read the failure, for example "the HR system is unavailable, offer to try again later". Scoped to all tools, one hook of each covers every call the agent makes.

### Decide how the agent recovers from an error

An **Error** hook runs on errors outside a tool call and receives `error`, `errorContext` and `recoverable`, the agent's own guess whether a retry can work. Its `errorHandling` output tells the agent to `retry` (as often as `retryCount` says), `skip` or `abort`, and `userNotification` sets the short message the user sees. A failed tool call raises **After tool failure**, which has no retry output: its guidance is all the agent receives about that failure.

## Adding a Hook

Hooks live on the agent's command bar, next to the save and publish controls. Open them from the top menu bar with **…** > **Hooks** (marked **Preview**), then select **Create**. On the **Add hook** page you set four fields:

| Field | What it does |
|---|---|
| **Event type** | The event that runs the hook; changing it clears the selected workflow |
| **Name** | A label for you, prefilled from the event, for example `On session start` |
| **Tools** | For the three tool events only, and only when the agent has tools: the tools the hook watches; empty means **All tools** |
| **Workflow** | The published workflow to run; the list shows only workflows whose inputs and outputs fit the event |

**New workflow** on the same page opens the designer with a starter for the event: **When an agent calls the flow** carries the event's inputs and **Respond to the agent** carries its outputs. Keep those field names, because Copilot Studio matches a workflow to an event by them, and a renamed field drops the workflow from the **Workflow** list. Add your steps between the two nodes, then save and publish the workflow. Back on the agent, **Add hook** opens again with the name and the new workflow filled in, and **Done** finishes it; where it doesn't reopen, **Hooks** > **Create** with the published workflow picked does the same.

**Done** adds the hook to the draft. Select the **Save** icon to store it, and publish the agent before it runs for anyone but you. In the test pane the step list shows the hook as it runs, for example **Executed hook: SessionStart** above the first reply. To change or drop a hook later, open **…** > **Hooks**, then the **…** next to the hook and **Edit** or **Remove**.

## Scope, Failure and Trust

The three tool events run for every tool until you narrow them in the **Tools** field, and both scopes combine on one agent: a hook on all tools writes the audit record while a second hook on one sensitive tool adds the extra check. An MCP server appears in **Tools** as one entry, so a hook on it runs before every tool of the server, and its workflow picks the call to act on by `toolName`, for example with `if(equals(triggerBody()?['toolName'], 'add_employee'), 'deny', '')` as the value of `permissionDecision`. Microsoft's Copilot Studio team blog adds that **All tools** includes the agent's built-in tools, such as `web_search` and `bash`, so an audit hook on all tools also records searches and sandbox commands.

A hook fails open. If its workflow fails, times out or returns something the agent can't read, the agent continues as if the hook returned nothing, so a hook is never the only safeguard for a business-critical rule; the permission the user or the agent's connection holds in the target system stays the hard limit. The workflow must be published, and a hook stores a reference to it, so an edit to the workflow changes every hook and tool that uses it.

Treat every input as untrusted content. A prompt, a tool result and an error message can carry text the agent didn't write, including instructions aimed at the model, so the workflow validates a value before it acts on it or passes it on as `additionalContext`.

## Preview Status, Harness and Credits

Hooks are in preview, and their Microsoft Learn page is prerelease documentation that can change. They exist only on Microsoft Copilot harness agents, the agents Learn files under the GitHub Copilot harness. A Standard agent covers the same jobs with its system topics, Conversation Start and On Error, and [topic 8](../08-migration/readme.md) maps each of them to its hook when an agent moves.

The harness uses usage-based billing: using, building, testing and evaluating these agents can consume Copilot Credits, and every hook run calls a workflow. Keep a hook's workflow short, because it runs on every event it listens for, and a Pre tool use hook on all tools runs before every single call.

## Hands-On Demo

- [Enforce Purchase Limits with Hooks](./demo-05-purchase-limits-with-hooks.md): a purchasing agent whose Start hook loads the user's approval limit and manager from Dataverse, a Pre tool use hook that blocks an order above that limit, and an After tool failure hook that logs the error.

## Hands-On Lab

- [Guard the HR Agent with Hooks](../../../labs/06-cs-copilot-harness/05-hooks/lab-01-guard-the-hr-agent-with-hooks.md): an agent on the hosted HR MCP server that greets the signed-in user from a Start hook, refuses to remove employees through a Pre tool use hook, and records every tool call with a Post tool use hook.

## Key Topics covered in this module

[Hooks (GitHub Copilot) (preview)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/hooks-overview)

[Add a workflow to your agent as a tool (GitHub Copilot)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-add-workflow)

[Edit and manage your agent flow or workflow in the designer](https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flow-designer)

[Use the activity trace to debug your agent (GitHub Copilot)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-activity-trace)

[Hooks in Copilot Studio (Copilot Studio team blog)](https://microsoft.github.io/mcscatblog/posts/hooks-in-copilot-studio/)
