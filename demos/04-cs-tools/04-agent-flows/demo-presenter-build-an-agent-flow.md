---
presents: demo-build-an-agent-flow.md
budget: 4 min
beats: 4
---

# Present: Build an Agent Flow and Call It from an Agent

**Guide:** [Build an Agent Flow and Call It from an Agent](demo-build-an-agent-flow.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · each beat links the exercise holding its prompt

**Agent:** Grey Logistics IT Help Desk, a Standard agent with generative orchestration and the instructions from the guide's prerequisites

**Initial prompt** (attach nothing; Exercise 1 builds the trigger, this is the **Run a prompt** text in Exercise 2, followed by the `IssueSummary` token):

```text
Classify the priority of this IT help desk ticket. Answer with exactly one value: P1, P2, P3 or P4.
P1: many people cannot work, or a security incident is suspected.
P2: one person cannot work at all.
P3: one person can work with a workaround.
P4: a question, or a request for new equipment or software.
Ticket:
```

### Beat 1: The trigger makes the flow a tool (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Workflows** > **New workflow** > **Agent flows** · **When an agent calls the flow** > **Add an input** > **Text** · [Exercise 1](demo-build-an-agent-flow.md#exercise-1-start-a-flow-that-an-agent-can-call)
**What is there:** the trigger card with `IssueSummary` and `RequesterEmail`; the flow listed as a draft on **Workflows**.

### Beat 2: Classify, confirm, respond in a fixed order (1 min)

**Navigate:** **Insert a new action** > **AI capabilities** > **Run a prompt** · **Send an email (V2)** · **Respond to the agent** · **Flow checker** > **Publish** > **Test** > **Manually** · [Outlook inbox](https://outlook.office.com/mail/inbox) · [Exercise 2](demo-build-an-agent-flow.md#exercise-2-classify-confirm-and-respond-in-a-fixed-order)
**What is there:** a green checkmark on every card, `P1` in the **Run a prompt** output, the confirmation email with ticket text and priority.

### Beat 3: The description is all the orchestrator knows (1 min)

**Navigate:** **Tools** > **Add a tool** > **Flow** > **Log help desk ticket** > **Add and configure** · [Exercise 3](demo-build-an-agent-flow.md#exercise-3-hand-the-flow-to-the-agent-as-a-tool)
**What is there:** Log help desk ticket in the agent's tools with the description and the two inputs.

### Beat 4: The activity map traces the call (1 min)

**Navigate:** test pane > map icon · **Workflows** > Log help desk ticket > **Express mode** · [Exercise 4](demo-build-an-agent-flow.md#exercise-4-log-a-ticket-from-a-conversation-and-trace-the-call)
**What is there:** a **Log help desk ticket** node with `IssueSummary`, `RequesterEmail` and `Priority` P2; the monitor request returns P4; one confirmation email per ticket.
