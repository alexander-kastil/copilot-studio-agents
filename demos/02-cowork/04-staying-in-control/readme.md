# Staying in Control

> **Frontier Preview**: part of [Microsoft 365 Copilot Cowork](../01-intro/readme.md). Features are subject to change.

Cowork acts on your behalf, but never behind your back. It asks for approval before sensitive actions, shows what it is about to do, and lets you stop at any point. This topic covers the human-in-the-loop model for end users and the governance controls for admins.

---

## The Approval Model

Before Cowork does anything that leaves a mark (sending an email, posting in Teams, saving a file), it pauses and asks.

- **Approve actions**: Each action button reflects exactly what will happen (for example **Send**, **Post**, or **Save**). Nothing is committed until you confirm.
- **Risk indicators**: A risk level is shown on each action so medium and high-risk steps stand out before you approve them.
- **Skip future prompts**: Use the dropdown on an action button to allow similar actions for the rest of the current session without re-confirming each one.

### Risk Levels

| Risk | Examples | What it means |
|---|---|---|
| **Low** | Drafting a document, searching, summarizing | Reversible, stays within your workspace |
| **Medium** | Saving or reorganizing files, scheduling a meeting | Changes your content or others' calendars |
| **High** | Sending email, posting in Teams, external communication | Leaves your workspace and reaches other people |

---

## Steering an Active Task

You are never locked out while Cowork works.

- **Pause / Resume**: Stop Cowork mid-task, add context or change direction, then resume when ready.
- **Cancel**: End the current task entirely without applying pending actions.
- **Interrupt to redirect**: Add a new instruction during execution and Cowork adjusts its plan.

---

## Feedback

Every response can be rated and corrected, which also helps Cowork improve.

- Rate responses with thumbs up or thumbs down.
- Leave inline comments directly on a message to explain what should change.

---

## Governance for Admins

Control does not stop at the individual. Admins decide whether Cowork is available at all, and to whom.

- **Frontier enrollment**: Both the tenant and the managing admin account must be enrolled in the Frontier program (Copilot -> Settings -> Frontier).
- **Anthropic as a subprocessor**: Cowork uses Anthropic models, so Anthropic must be enabled as an AI subprocessor in the tenant.
- **Agent availability**: In the Microsoft 365 admin center under **Copilot -> Agents -> All agents**, Cowork can be set to **Available to all users**, **Available to specific users or groups**, or **Blocked**.
- **Spending policies**: Usage-based billing is governed by spending policies with monthly limits, per-user limits, and alert thresholds, so a single user cannot drain the tenant's Copilot Credits. See [Module 1: Pay as you go licensing](../../01-intro/04-licensing-setup/readme.md#pay-as-you-go-licensing).

---

## Hands-On Demo

- [Turn a Partner Meeting into a Follow-Up Package](./demo-02-follow-up.md): watch the approval gate and risk levels in action as Cowork edits a proposal, emails an external partner, and books a follow-up call, each held for your go-ahead.

---

## Where to Go Next

- **[Intro to Cowork](../01-intro/readme.md)**: revisit the interaction model this control layer sits on
- **[Automation & Plugins](../03-automation/readme.md)**: the same approval model applies to scheduled and plugin-driven actions

---

## Links & Resources

- [Use Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork)
- [Cowork Overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/)
- [Cowork FAQ](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-faq)
- [Frontier Program](https://adoption.microsoft.com/en-us/copilot/frontier-program/)
