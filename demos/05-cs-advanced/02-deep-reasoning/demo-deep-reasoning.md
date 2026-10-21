# Prioritize a Ticket Backlog with Deep Reasoning

A help desk lead who asks an agent which ticket to work on next gets a confident ordered list, and it is easy to miss that the list sorted by priority alone and skipped an overdue ticket. Ordering a backlog means applying several rules at once: priority, an exception for the executive board, deadlines and the clock. In this demo you give the Contoso IT Help Desk that job twice, once on the default model and once with `reason` on the ranking step, and compare both plans in the activity map.

What you practice here: scoping deep reasoning to the one instruction step that has to weigh several rules, and proving the scope in the activity map.

Duration: about 30 minutes.

## What you'll build

- Prioritization instructions for the Contoso IT Help Desk with five numbered steps.
- A baseline answer for a nine-ticket backlog on the default model.
- The same answer with **Deep reasoning (preview)** on and `reason` on step 4, with its reasoning node in the activity map.
- A check that a simple question still runs on the fast path.

## Prerequisites

- An environment in the United States or in the EU outside the United Kingdom, where deep reasoning is available.
- A Standard agent (Learn: standard harness) named Contoso IT Help Desk, created from the **New agent** dropdown on the home page: under **Other ways to build**, select **Agent** with the **Standard** badge. Keep generative orchestration on (the default for new agents), and leave **Deep reasoning (preview)** off.

## Exercise 1: Record a baseline on the default model

A baseline shows what the fast model makes of the rules before anything changes. The backlog contains three traps: one ticket is already overdue, one board member's ticket moves up a level, and a slow shared drive for twelve people is still usable.

1. On the **Overview** page, replace the instructions with this text:

```text
You are the Contoso IT Help Desk. When asked to prioritize a ticket backlog, follow these steps:
1. Assign each ticket a priority. P1: more than 10 people cannot work, or a security incident is suspected. P2: one person cannot work at all. P3: a workaround exists. P4: requests for equipment, software or information.
2. Apply the board rule: a ticket from a member of the executive board moves up one priority level, to at most P1.
3. Compute each deadline from the submission time: P1 1 hour, P2 4 hours, P3 24 hours, P4 72 hours.
4. Order the tickets by time remaining until the deadline, shortest first. Overdue tickets come first, the most overdue at the top.
5. Present a table with ticket, priority, deadline and time remaining, then one sentence about the top ticket.
```

2. Open the test pane, select the map icon, and send:

```text
It is Tuesday 10:00. Put this backlog in the order the team should work on it.
T-101, Tuesday 09:40: Printer on floor 3 jams. The printer on floor 2 works.
T-102, Monday 18:30: A new hire starting Thursday needs a laptop.
T-103, Tuesday 09:15: Board member Anna Berger cannot open Outlook on her laptop. Webmail works.
T-104, Tuesday 07:30: A sales rep cannot sign in to the CRM at all. No workaround.
T-105, Tuesday 09:50: Three people in Finance reported a suspicious email with a link. One of them clicked it.
T-106, Monday 08:00: Request for a Visio license.
T-107, Monday 15:00: The shared drive is slow for the marketing team of 12 people, but they can still use it.
T-108, Tuesday 08:30: A developer's laptop won't boot.
T-109, Monday 09:00: A monitor flickers. The second monitor works.
```

3. Write down the order the agent returns and note how long the reply took.

Expected: a table comes back within seconds, and the activity map shows no deep reasoning node. Check the order against the rules: by the instructions it is T-109 (overdue by one hour), T-105, T-104, T-108, T-103, T-107, T-101, T-102, T-106. The default model often lists T-105 first and misses that T-109 is overdue, or leaves T-103 at P3; your result depends on the model and may differ.

## Exercise 2: Turn on deep reasoning and scope it to one step

Deep reasoning is a per-agent setting, and the `reason` keyword decides which step uses it. Only the ranking step has to combine the priority, the board rule, the deadline and the clock, so only that step gets the keyword.

1. Open **Settings** and turn on **Deep reasoning (preview)**, then save.
2. On the **Overview** page, replace step 4 of the instructions with this line:

```text
4. Use reason to check the priorities and deadlines from steps 1 to 3 against the current time, then order the tickets by time remaining until the deadline, shortest first. Overdue tickets come first, the most overdue at the top.
```

3. Start a new test conversation and send the same backlog message from Exercise 1.

Expected: the reply takes noticeably longer, and the activity map shows a deep reasoning node for the ranking step while the other steps run without one.

> **Note:** Deep reasoning consumes billed Copilot Credits at the premium rate for the reasoning tokens. Keep test runs short and don't add `reason` to steps that only list or format.

## Exercise 3: Read the reasoning and compare the two answers

The reasoning node shows what the model weighed, which turns "the answer looks better" into evidence. Comparing it with the baseline shows whether the slower step changed the result.

1. In the activity map, select the deep reasoning node to expand it.
2. Find where the model handles T-109, T-103 and T-107.
3. Put the new order next to the one you wrote down in Exercise 1.

Expected: the expanded node lists the reasoning steps, the ticket data it used and its output. A correct run places T-109 first as overdue, raises T-103 to P2 under the board rule, and keeps T-107 at P3 because the marketing team can still work. Where the baseline already matched, the comparison shows that this backlog didn't need the slower model, which is a valid finding too.

## Exercise 4: Prove the fast path is still fast

Deep reasoning should only run where `reason` asks for it or where the agent decides a step needs it. A simple question should go straight through on the default model.

1. In the same conversation, send:

```text
How do I connect my phone to the guest Wi-Fi?
```

2. Check the activity map for this turn.
3. Open the **Overview** page and look at the **Model** section, without changing it.

Expected: the answer arrives quickly and the activity map shows no deep reasoning node for this turn. The **Model** list shows the primary model options with their tags, including models tagged Deep, which is a separate choice from the **Deep reasoning (preview)** setting you used.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| **Deep reasoning (preview)** isn't in **Settings** | Generative orchestration is off, or the environment's region doesn't support it | Turn on generative orchestration; use an environment in the United States or the EU outside the United Kingdom |
| No deep reasoning node appears after adding `reason` | The setting isn't saved, or the step was edited in an old test conversation | Save the setting, then start a new test conversation |
| Every turn becomes slow | `reason` appears in several steps, or in a step every question passes through | Keep `reason` on the ranking step only |
| Both runs return the same order | The model already handled the rules on the default path | Record it as a finding; deep reasoning pays off only when the default model misses rules |

## Summary

You gave the Contoso IT Help Desk a multi-rule prioritization task and measured what deep reasoning changed. You can now:

- Turn on **Deep reasoning (preview)** for an agent with generative orchestration
- Force the reasoning model for one instruction step with the `reason` keyword
- Read a deep reasoning node in the activity map and compare it with a baseline
- Tell the per-step reasoning setting apart from the primary model selection

The next topic splits the help desk into specialists the main agent routes to: [Generative Orchestration & Multi-Agent Routing](../03-multi-agent/readme.md).
