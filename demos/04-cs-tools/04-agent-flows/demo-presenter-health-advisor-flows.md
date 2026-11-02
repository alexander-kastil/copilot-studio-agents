---
presents: demo-health-advisor-flows.md
budget: 6 min
beats: 6
---

# Present: Rebuild the Health Advisor with Two Agent Flows

**Guide:** [Rebuild the Health Advisor with Two Agent Flows](demo-health-advisor-flows.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · have a Teams channel and a reviewer mailbox in your tenant

**Agent:** CS-Health Advisor, created in Exercise 1 from the original [Health Advisor](../../../src/cs-schema/agents/Health%20Advisor/) and its [workflows](../../../src/cs-schema/workflows/); the finished rebuild is [CS-Health Advisor](../../../src/cs-schema/cs-agents/CS-Health%20Advisor/)

**Initial prompt** (add `The Benefits of Intermittent Fasting.docx` and `Traveling with Health Issues.docx` as knowledge first; sent in the test panel at the end of Exercise 1):

```text
What are the benefits of intermittent fasting?
```

### Beat 1: Instructions set the one rule the flows support (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Other ways to build** · **Overview** > **Details**, **Model** > **GPT Chat Latest**, **Instructions** · **Add knowledge** · [Exercise 1](demo-health-advisor-flows.md#exercise-1-create-cs-health-advisor-with-its-knowledge)
**What is there:** CS-Health Advisor with description, model and three instruction lines, both files Ready under **Knowledge**; the fasting answer cites the document.

### Beat 2: Question nodes deliver clean, typed values (1 min)

**Navigate:** **Settings** > **Entities** > **Add an entity** > **New entity** > **Closed list** · **Topics** > **Add a topic** > **From blank** · [Exercise 2](demo-health-advisor-flows.md#exercise-2-collect-age-gender-and-symptoms-in-a-topic)
**What is there:** Gender with two values and **Smart matching** on; Check Symptoms with the trigger description, the opening message and three questions identified as Age, Gender and User's entire response.

### Beat 3: The classification is one fixed flow step (1 min)

**Navigate:** **Workflows** > **New flow** > **Agent flow** · **Insert a new action** > **AI capabilities** > **Run a prompt** > **New custom prompt** · **Respond to the agent** > `Outcome` · **Publish** > **Test** · [Exercise 3](demo-health-advisor-flows.md#exercise-3-build-the-cs-summarize-patient-symptoms-flow)
**What is there:** a successful run; **Respond to the agent** shows an Outcome ending with "Patient is cleared for light work and movement".

### Beat 4: The topic branches on the flow result (1 min)

**Navigate:** **Tools** > **Add a tool** > **Workflows** > CS-Summarize Patient Symptoms > **Add and configure** · Check Symptoms > **Add node** > **Add a tool** · **Add a condition** > **Change to formula** · [Exercise 4](demo-health-advisor-flows.md#exercise-4-call-the-flow-from-the-topic-and-branch-on-the-outcome)
**What is there:** the mild run shows "this is the outcome Based on the patient's age (34 years), gender (female)…" ending with the cleared sentence; the serious run reaches the medication question.

### Beat 5: Answer the agent first, then wait for a person (1 min)

**Navigate:** **Workflows** > **New flow** > **Agent flow** · **Human review** > **Request for information** · **Post message in a chat or channel** · **Publish** · [Exercise 5](demo-health-advisor-flows.md#exercise-5-build-the-cs-post-to-teams-flow-with-a-review-step)
**What is there:** trigger, **Respond to the agent**, **Request for information** and **Post message in a chat or channel** in that order; CS-Post to teams published on **Workflows**.

### Beat 6: A reviewer decides what reaches the channel (1 min)

**Navigate:** **Topics** > **Add a topic** > **From blank** > **Details** > **Inputs** · CS-Post to teams > **Additional details** > **Credentials to use** > **Maker-provided credentials** · [Outlook inbox](https://outlook.office.com/mail/inbox) · [Teams](https://teams.microsoft.com) · [Exercise 6](demo-health-advisor-flows.md#exercise-6-save-the-advice-to-teams-from-a-topic)
**What is there:** the agent answers at once without asking for the text again; the reviewer gets "Posting Control" from Microsoft Power Automate, and **Submit** releases the post.
