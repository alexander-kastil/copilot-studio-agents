# Route Requests to Child and Connected Agents

![A sequence diagram shows the Grey Logistics IT Help Desk sending the lockout to its child agent Account Access and only the task to the connected Grey Logistics Software Licensing, collecting both sets of findings and giving the user one combined reply, with the canteen and Account Access switched off tests below.](./_images/route-to-child-and-connected-agents-overview.svg)

A help desk agent that knows everything about passwords, software licenses, hardware and the network ends up with dozens of overlapping topics and tools, and its planner starts picking the wrong one. Splitting it into specialists only helps when the main agent routes to them cleanly and still speaks with one voice. In this demo the Grey Logistics IT Help Desk hands account problems to a child agent and licensing questions to a connected agent, and you trace every route in the activity map.

What you practice here: designing a parent that routes on descriptions, delegates to a child and a connected agent, and stays the only voice the user hears.

Duration: about 30 minutes.

## What you'll build

- Parent instructions for the Grey Logistics IT Help Desk that define the routing pattern and the single-responder rule.
- A child agent named Account Access inside the help desk agent.
- A connection to Grey Logistics Software Licensing, a separate published agent.
- A set of test messages that prove each route, a combined route, and a request outside every domain.

## Prerequisites

- A Standard agent (Learn: standard harness) named Grey Logistics IT Help Desk, created from the **New agent** dropdown on the home page: under **Other ways to build**, select **Agent** with the **Standard** badge. Keep generative orchestration on (the default for new agents).
- A second Standard agent named Grey Logistics Software Licensing in the same environment. Paste the instructions below on its **Overview** page, turn on **Let other agents connect to and use this one** on its **Settings** page, and publish it.

```text
You are Grey Logistics Software Licensing. You answer questions about which software Grey Logistics employees can get and how to get it.
Standard software, available to every employee at no cost: Microsoft 365 apps, Teams, Edge, Adobe Acrobat Reader.
Licensed on request with manager approval: Visio Plan 2, Project Plan 3, Adobe Acrobat Pro. Approval takes one business day.
Not available: games, unapproved browser extensions.
When another agent calls you, return your answer as findings for that agent.
```

## Exercise 1: Give the parent a routing pattern

A parent that only knows "there are subagents" produces duplicate or partial replies. Learn's multi-agent guidance asks the parent to state who answers the user, which specialist covers what, and what happens when nobody does, in directive language.

1. Open Grey Logistics IT Help Desk and check **Settings** > **Generative AI** > **Orchestration**: **Use generative AI orchestration for your agent's responses?** must be **Yes**.
2. On the **Overview** page, replace the instructions with this text:

```text
You are the Grey Logistics IT Help Desk, the front door for IT questions at Grey Logistics.
You are the ONLY agent that communicates with the user. Child and connected agents return findings to you; combine them into one reply.
Route account lockouts, password resets and multifactor sign-in problems to Account Access.
Route questions about software licenses and software requests to Grey Logistics Software Licensing.
If a request matches no specialist and you cannot answer it yourself, say so in one sentence and offer to log a ticket. NEVER guess.
```

Expected: the instructions are saved, and the orchestration setting reads **Yes**.

## Exercise 2: Add a child agent for account access

Account problems are one narrow task the help desk team owns itself, which makes them a fit for a child agent: it lives inside the main agent, is published with it and always sees the parent's context. Its description decides when the planner picks it, and its instructions tell it that it is a subagent.

1. Go to the **Agents** page, select **Add** and select **New child agent**.
2. Name it `Account Access`, keep **The agent chooses - Based on description**, and paste this description:

```text
Handles account lockouts, password resets and multifactor authentication sign-in problems for Grey Logistics employees. Does not handle software, hardware or network questions.
```

3. Paste these instructions and select **Save**:

```text
You are a subagent of the Grey Logistics IT Help Desk. Do NOT reply to the user directly; return your findings to the parent agent.
Lockouts: accounts unlock automatically after 30 minutes, or immediately through the self-service portal at https://aka.ms/sspr.
Password resets: use the self-service portal at https://aka.ms/sspr. A new password needs at least 14 characters.
Multifactor sign-in problems: re-register the authenticator app at https://aka.ms/mysecurityinfo.
If you need more information, ask the user a question and wait for the answer.
```

4. Open the test pane, select the map icon, and send:

```text
I typed my password wrong too often and now I'm locked out. What can I do?
```

Expected: the activity map shows an Account Access node, and the reply mentions the 30-minute unlock and the self-service portal in a single message from the help desk.

## Exercise 3: Connect a specialist another team owns

Licensing belongs to another team that publishes its own agent, so the help desk connects to it and uses the rules where that team maintains them. The description you write on the help desk side is a local copy that only the planner of this agent reads.

1. On the **Agents** page, select **Add an agent**, then select **Copilot Studio** under **Connect to an external agent** and pick Grey Logistics Software Licensing.
2. Replace the description with this text:

```text
Answers questions about software licenses at Grey Logistics: which software is standard, which needs manager approval, and how to request it. Does not handle account, password or hardware problems.
```

3. Clear **Pass conversation history to this agent** so the licensing agent receives only the task, then save.
4. Start a new test conversation and send:

```text
Can I get a Visio license?
```

5. Send a request that touches both specialists:

```text
I'm locked out of my account, and once I'm back in I also need Project for my new role.
```

Expected: the first message shows a Grey Logistics Software Licensing node and a reply about manager approval and one business day. The second shows Account Access and Grey Logistics Software Licensing in sequence in the same plan, followed by one combined reply.

> **Note:** A connected agent only reflects changes after it is published again. If the licensing answers look outdated, publish Grey Logistics Software Licensing and retest.

## Exercise 4: Test outside every domain and switch a specialist off

Learn's guidance asks for tests that match no specialist, because that is where a parent guesses or a subagent invents an answer. Switching a child agent off shows how much of the routing depended on it.

1. In a new test conversation, send:

```text
What is on the canteen menu today?
```

2. On the **Agents** page, turn off **Enabled** for Account Access.
3. In a new test conversation, send the lockout message from Exercise 2 again.
4. Turn **Enabled** back on for Account Access.

Expected: the canteen question calls no agent node in the activity map, and the help desk says in one sentence that it can't help with that and offers a ticket. With Account Access switched off, the lockout question runs without an Account Access node and the reply loses the 30-minute and portal details, which shows that the knowledge lived in the child agent.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Grey Logistics Software Licensing doesn't appear under **Copilot Studio** | It isn't published, lives in another environment, or doesn't allow connections | Publish it in the same environment and turn on **Let other agents connect to and use this one** |
| Two messages arrive for one question | A subagent replies to the user and the parent repeats it | Keep the "do NOT reply to the user directly" line in the subagent instructions and the ONLY rule in the parent |
| The licensing question goes to Account Access | Descriptions overlap or name the same words | Tighten both descriptions and state what each one excludes |
| The **Agents** page or child agent options are missing | Generative orchestration is off | Set **Use generative AI orchestration for your agent's responses?** to **Yes** |

## Summary

You split the Grey Logistics IT Help Desk into a child agent and a connected specialist and kept the help desk as the one voice the user hears. You can now:

- Write parent instructions that define routing, the single-responder rule and the fallback
- Create a child agent whose description drives routing and whose instructions declare its role
- Connect a published Copilot Studio agent and control the description and history it receives
- Prove routes in the activity map, including a combined route and a request outside every domain

The next topic looks at agents that a developer team builds outside Copilot Studio: [Microsoft Foundry Agents: Core Concepts](../04-foundry-agents/readme.md).
