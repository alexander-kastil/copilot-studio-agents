---
presents: demo-publish-hr-buddy.md
budget: 4 min
beats: 4
---

# Present: Publish CS-HR Buddy to Teams and Microsoft Copilot

**Guide:** [Publish CS-HR Buddy to Teams and Microsoft Copilot](demo-publish-hr-buddy.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience, and [Teams](https://teams.microsoft.com) · have the pilot security group ready

**Agent:** CS-HR Buddy with both employee topics from [Identify an Employee Once and Reuse It Across HR Topics](../03-topics/demo-hr-buddy-employee-topics.md); its settings mirror the original [HR Buddy](../../../src/cs-schema/agents/HR%20Buddy/)

**Initial prompt** (attach nothing; sent in Teams in Exercise 3, after the first publish):

```text
claim my employee reward
```

### Beat 1: Sign-in is settled before the first publish (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Settings** > **Security** > **Authentication** > **Authenticate with Microsoft** · **Generative AI** > **Connected agents** · [Exercise 1](demo-publish-hr-buddy.md#exercise-1-set-sign-in-and-connectivity-before-the-first-publish)
**What is there:** **Authenticate with Microsoft** selected and **Let other agents connect to and use this one** **On**.

### Beat 2: One channel serves Teams and Microsoft Copilot (1 min)

**Navigate:** **Publish** · **Channels** > **Microsoft 365 and Microsoft Teams** > **Add channel** > **See agent in Teams** · [Teams](https://teams.microsoft.com) · Microsoft 365 Copilot > **Agents** > **More agents** · [Exercise 2](demo-publish-hr-buddy.md#exercise-2-publish-and-connect-the-teams-and-microsoft-copilot-channel) · [Exercise 3](demo-publish-hr-buddy.md#exercise-3-test-the-published-agent-in-teams-and-microsoft-copilot)
**What is there:** "Published by" in **Channels**, "The channel was added", Teams "Added successfully!"; the reward request runs the four questions, the paid leave message and "Please choose your reward:".

### Beat 3: Sharing decides who may chat (1 min)

**Navigate:** **...** > **Share** · **Channels** > **Microsoft 365 and Microsoft Teams** > **Availability options** > **Show to my teammates and shared users** · [Exercise 4](demo-publish-hr-buddy.md#exercise-4-let-the-pilot-group-chat-with-the-agent)
**What is there:** "Successfully changed the sharing settings for your agent" in both dialogs; **Existing users** lists the pilot group as **Viewer** next to you as **Owner**.

### Beat 4: One publish rolls out a change (1 min)

**Navigate:** **Topics** > Collect Employee Data > **Message** · **Save** > **Publish** · Teams chat > `start over` > **Yes** · [Exercise 5](demo-publish-hr-buddy.md#exercise-5-push-a-change-through-with-one-publish)
**What is there:** the confirmation ends with "Ask me to collect your employee reward next."; a reward request right after detours through the employee questions again.
