---
presents: demo-deep-reasoning.md
budget: 4 min
beats: 4
---

# Present: Prioritize a Ticket Backlog with Deep Reasoning

**Guide:** [Prioritize a Ticket Backlog with Deep Reasoning](demo-deep-reasoning.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · the environment must be in the United States or the EU outside the United Kingdom

**Agent:** Grey Logistics IT Help Desk, a Standard agent with generative orchestration and **Deep reasoning (preview)** off at the start

**Initial prompt** (attach nothing; sent in Exercise 1 after the five-step instructions are pasted, and again in Exercise 2):

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

### Beat 1: A fast baseline with three traps (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Overview** > **Instructions** · test pane > map icon · [Exercise 1](demo-deep-reasoning.md#exercise-1-record-a-baseline-on-the-default-model)
**What is there:** a table within seconds and no deep reasoning node; the correct order to check against: T-109, T-105, T-104, T-108, T-103, T-107, T-101, T-102, T-106.

### Beat 2: The reason keyword scopes deep reasoning to one step (1 min)

**Navigate:** **Settings** > **Deep reasoning (preview)** · **Overview** > **Instructions** > step 4 · new test conversation · [Exercise 2](demo-deep-reasoning.md#exercise-2-turn-on-deep-reasoning-and-scope-it-to-one-step)
**What is there:** a noticeably slower reply; a deep reasoning node for the ranking step only.

### Beat 3: The reasoning node is evidence (1 min)

**Navigate:** activity map > deep reasoning node · [Exercise 3](demo-deep-reasoning.md#exercise-3-read-the-reasoning-and-compare-the-two-answers)
**What is there:** the reasoning steps, the ticket data and the output; T-109 first as overdue, T-103 raised to P2, T-107 kept at P3.

### Beat 4: A simple question stays on the fast path (1 min)

**Navigate:** same conversation · **Overview** > **Model** · [Exercise 4](demo-deep-reasoning.md#exercise-4-prove-the-fast-path-is-still-fast)
**What is there:** a quick Wi-Fi answer with no deep reasoning node; the **Model** list showing models tagged Deep, a separate choice.
