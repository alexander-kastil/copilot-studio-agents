---
presents: demo-returns-agent-mailbox-trigger.md
budget: 5 min
beats: 5
---

# Present: Answer Return Requests from a Shared Mailbox with an Autonomous Agent

**Guide:** [Answer Return Requests from a Shared Mailbox with an Autonomous Agent](demo-returns-agent-mailbox-trigger.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · have the shared mailbox, a second sender mailbox and the returns-policy.docx URL ready

**Agent:** CS-Returns Agent, created in Exercise 1 from the original [Returns Agent](../../../src/cs-schema/agents/Returns%20Agent/); the finished rebuild is [CS-Returns Agent](../../../src/cs-schema/cs-agents/CS-Returns%20Agent/)

**Initial prompt** (attach nothing; paste it as the agent description in Exercise 1):

```text
An autonomous agent dealing with returns
```

### Beat 1: Instructions and one policy carry the whole job (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Home** > **New agent** > **Agent** (**Standard**) · **Details**, **Instructions**, **Model** > **GPT Chat Latest** · **Add knowledge** > **Featured** > **SharePoint** · [Exercise 1](demo-returns-agent-mailbox-trigger.md#exercise-1-create-cs-returns-agent-and-set-its-boundaries) · [Exercise 2](demo-returns-agent-mailbox-trigger.md#exercise-2-ground-the-answers-in-the-returns-policy)
**What is there:** CS-Returns Agent with the two instruction paragraphs and GPT Chat Latest; the flight request declined; the headphone answer as an email body with paragraph tags, citing returns-policy.docx.

### Beat 2: A mail tool that works without a user (1 min)

**Navigate:** **Tools** > **Add tool** > **Model Context Protocol** > **Mail (Preview)** > **Add** · **Additional details** > **Credentials to use** > **Maker-provided credentials** · **Instructions** > **Edit** · [Exercise 3](demo-returns-agent-mailbox-trigger.md#exercise-3-give-the-agent-a-mail-tool-that-works-without-a-user)
**What is there:** CS-Work IQ Mail under **Tools**; the test answer starts with **Email sent**, says the 14-day window has passed and cites returns-policy.docx; the email arrives at the test address.

### Beat 3: Every new email wakes the agent (1 min)

**Navigate:** **Triggers** > **Add trigger** > **All** > **When a new email arrives in a shared mailbox (V2)** > **Next** · **Folder** > **Inbox** > **Create trigger** · [Exercise 4](demo-returns-agent-mailbox-trigger.md#exercise-4-wake-the-agent-for-every-new-email-in-the-shared-mailbox)
**What is there:** "Time to test your trigger!" with "Your trigger was successfully added."; the trigger in the **Triggers** section with a test icon.

### Beat 4: A real email replayed into the test pane (1 min)

**Navigate:** second mailbox > send · trigger test icon > **Start testing** · **Expand test pane** > **Trigger detected** · [Exercise 5](demo-returns-agent-mailbox-trigger.md#exercise-5-replay-a-real-email-and-read-the-plan)
**What is there:** **Trigger detected** ("Only visible to you") with the email as JSON (`body`, `from`, `toRecipients`); **Email sent** citing returns-policy.docx; **Search sources** in the activity.

### Beat 5: Published, it answers alone (1 min)

**Navigate:** trigger > **…** > **Edit in Power Automate** · **Publish** · **Activity** > **Automated** · [Exercise 6](demo-returns-agent-mailbox-trigger.md#exercise-6-look-behind-the-trigger-publish-and-watch-it-work-alone)
**What is there:** the flow with the mailbox trigger and **Sends a prompt to the specified copilot for processing**; the two publish review items; an **Automated** row on the **Activity** page.
