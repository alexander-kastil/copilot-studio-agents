# Ground an Agent in Your Work Context with Work IQ

A seller who asks an agent about yesterday's customer email gets a confident answer only when the agent can read that email. Without a grounding tool, the agent answers from general knowledge, and the reply can sound right while naming nothing from your mailbox. In this demo you ask the same question before and after you add Work IQ, then open the activity trace to show the call that made the difference.

What you practice here: adding a grounding tool to an agent and proving the grounding in the activity trace.

Duration: about 15 minutes.

## What you'll build

- A new-experience agent named Aurora Provisions Account Assistant.
- A before and after pair of replies to the same work question: one from general knowledge, one from your own mailbox.
- A Work IQ (Preview) connection in the agent's Tools section.
- A trace view that shows the Work IQ call and what it returned.

## Related Topics

This demo applies [Grounding Agents with Work IQ, Foundry IQ, and Fabric IQ](readme.md) to a live agent. The lab repeats the steps with learners and adds routing instructions: [Ground an Agent with Work IQ and Route Work Questions to It](../../../../labs/03-copilot-studio/04-ui-update/06-iq-grounding/lab-01-ground-with-iq.md).

## Prerequisites

- A Copilot Studio environment where you can create agents (maker role), with the new experience turned on. The top tabs read Build, Preview, Evaluate, and Monitor.
- Work IQ enabled for your tenant, with your user assigned to the usage-based billing plan. An administrator completes the one-time setup in [Enable your tenant for Work IQ](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq). Confirm this before the session starts.
- A mailbox with a thread you can name in advance, such as a customer email from this week. Every input is in this guide, so nothing needs to be downloaded.

## Exercise 1: Ask an agent that cannot see your work

The baseline comes first, so the audience sees what the agent does with no grounding. You create the agent from a short description, then ask about a real thread in your mailbox. The question is specific on purpose: a grounded answer must name your thread, and an ungrounded answer cannot.

1. On the Copilot Studio home page, select the card for an agent powered by the GitHub Copilot harness.
2. Name the agent Aurora Provisions Account Assistant, paste the description below into the creation dialog, and finish creation.

```text
You are the Aurora Provisions Account Assistant. You help Aurora Provisions account managers prepare for customer calls. Keep answers short and professional, and say which source you used.
```

3. Open the **Preview** tab and send this question:

```text
What did the most recent customer email I received ask me to do, and by when?
```

Expected: the reply does not name a sender, subject, or deadline from your mailbox. It either says it cannot see your email or gives a general answer. The trace shows no tool node, so any specific detail in the reply is a guess.

## Exercise 2: Add Work IQ from the Tools panel

Work IQ gives the agent a tool that reads Microsoft 365 work context for the account you sign in with. Pick **Work IQ (Preview)** from the MCP list. The workload-specific tools sit beside it, and selecting one of them by mistake is the most common error in this step.

1. Open the **Build** tab and select **Tools** in the components panel.
2. Select **Add tool**, then select **MCP**.
3. Select **Work IQ (Preview)**, expand **Connection**, select **Create new connection**, then select **Create**.
4. Sign in with the presenter account, then select **Add and Configure**.

Expected: Work IQ (Preview) appears in the Tools section of the Build tab as a connected tool.

> **Warning:** Do not select Mail, Teams, OneDrive, SharePoint, or the other workload-specific tools. Learn says to use Work IQ (Preview) in their place, because those tools belong to a legacy experience with its own licensing.

## Exercise 3: Ask the same question with Work IQ

The question stays identical to Exercise 1, so any change in the reply comes from the tool. The first send asks for consent, because Work IQ connects to Microsoft 365 services for the signed-in account.

1. Open the **Preview** tab, start a new conversation, and send the Exercise 1 question unchanged.
2. When asked to allow Work IQ to connect and use services, select **Allow**.
3. Read the reply.

Expected: the reply names the sender, subject, and deadline of your real email, and you can check each detail against your inbox. Same question, new content: that difference is what grounding adds.

## Exercise 4: Read the activity trace

A reply that names your email could still come from memory, so the trace is the evidence. Each step the agent takes appears as a node in the trace, and expanding a node shows its input and output.

1. Keep the **Preview** tab open. Confirm the **End user preview** toggle is off, so the trace panel stays visible beside the chat.
2. Find the node for the Work IQ tool call in the trace and select it.
3. Read the input the agent sent and the output the tool returned.
4. Scroll to the end of the trace and find the green checkmark.

Expected: the Work IQ node's output contains the email your reply quoted, and the green checkmark shows that every tool call has finished. Point at both the reply and the node that supplied it.

> **Tip:** Keep the Exercise 1 reply in a second window so the audience can compare the before and after side by side.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Work IQ (Preview) does not appear in the MCP list | The tenant is not set up for Work IQ, or your user is not on the usage-based billing plan | Ask an administrator to complete the one-time setup in Enable your tenant for Work IQ and assign your user to the billing plan |
| The reply is still generic after you add Work IQ | Consent was not given, or the connection uses a different account | Confirm the connection under Tools, then send the question again and select **Allow** at the consent prompt |
| The trace shows no Work IQ node | The agent answered from memory, or the question does not match the tool's scope | Ask about one specific thread from your mailbox, then send again |
| A workload tool such as Mail appears in Tools | The wrong tool was added in Exercise 2 | Remove that tool from Tools and add Work IQ (Preview) |

## Summary

You grounded an agent in work context. You created it, asked the same question before and after adding Work IQ (Preview), and used the activity trace to tie the reply to a Work IQ call. You can now:

- Add Work IQ (Preview) from the Tools panel through the MCP tab.
- Compare a grounded reply with an ungrounded one in Preview.
- Read the activity trace to confirm which tool produced an answer.

Foundry IQ and Fabric IQ use the same Tools panel with different sources, and the lab's optional step adds them. Next, practice the routing in [Ground an Agent with Work IQ and Route Work Questions to It](../../../../labs/03-copilot-studio/04-ui-update/06-iq-grounding/lab-01-ground-with-iq.md).
