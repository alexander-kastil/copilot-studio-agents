---
presents: demo-route-to-child-and-connected-agents.md
budget: 4 min
beats: 4
---

# Present: Route Requests to Child and Connected Agents

**Guide:** [Route Requests to Child and Connected Agents](demo-route-to-child-and-connected-agents.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · publish Grey Logistics Software Licensing before the session

**Agent:** Grey Logistics IT Help Desk as the parent, plus Grey Logistics Software Licensing, a second Standard agent published with **Let other agents connect to and use this one** on

**Initial prompt** (attach nothing; sent in Exercise 2, after the parent instructions and the child agent exist):

```text
I typed my password wrong too often and now I'm locked out. What can I do?
```

### Beat 1: The parent is the only voice (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Settings** > **Generative AI** > **Orchestration** · **Overview** > **Instructions** · [Exercise 1](demo-route-to-child-and-connected-agents.md#exercise-1-give-the-parent-a-routing-pattern)
**What is there:** the routing instructions with the ONLY rule saved; orchestration reads **Yes**.

### Beat 2: A child agent for a task the team owns (1 min)

**Navigate:** **Agents** > **Add** > **New child agent** · test pane > map icon · [Exercise 2](demo-route-to-child-and-connected-agents.md#exercise-2-add-a-child-agent-for-account-access)
**What is there:** an Account Access node in the map; the 30-minute unlock and the self-service portal in a single message from the help desk.

### Beat 3: A connected agent another team owns (1 min)

**Navigate:** **Agents** > **Add an agent** > **Connect to an external agent** > **Copilot Studio** · **Pass conversation history to this agent** off · [Exercise 3](demo-route-to-child-and-connected-agents.md#exercise-3-connect-a-specialist-another-team-owns)
**What is there:** a Grey Logistics Software Licensing node with manager approval in one business day; the combined request runs Account Access and Grey Logistics Software Licensing in one plan with one combined reply.

### Beat 4: Outside every domain, and one specialist off (1 min)

**Navigate:** new test conversation · **Agents** > Account Access > **Enabled** off, then on · [Exercise 4](demo-route-to-child-and-connected-agents.md#exercise-4-test-outside-every-domain-and-switch-a-specialist-off)
**What is there:** the canteen question calls no agent node and gets a one-sentence decline with a ticket offer; without Account Access the lockout reply loses the 30-minute and portal details.
