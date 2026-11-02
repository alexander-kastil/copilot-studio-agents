---
presents: demo-create-the-onboarding-assistant.md
budget: 5 min
beats: 5
---

# Present: Create the CS-Employee Onboarding Assistant

**Guide:** [Create the CS-Employee Onboarding Assistant](demo-create-the-onboarding-assistant.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · each beat links the exercise holding its prompt

**Agent:** CS-Employee Onboarding Assistant, created blank in Exercise 1 and rebuilt from the original [Employee Onboarding Assistant](../../../src/cs-schema/agents/Employee%20Onboarding%20Assistant/); the finished rebuild is [CS-Employee Onboarding Assistant](../../../src/cs-schema/cs-agents/CS-Employee%20Onboarding%20Assistant/)

**Initial prompt** (attach nothing; sent in the test panel once the blank agent has its name and description):

```text
What's the capital of Australia, and can you write me a limerick about it?
```

### Beat 1: A blank agent answers anything (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **…** > **Open classic experience** > **Agents** > **Create blank agent** · **Overview** > **Details** > **Edit** · **Test** · [Exercise 1](demo-create-the-onboarding-assistant.md#exercise-1-create-the-agent-and-give-it-its-description)
**What is there:** **Details** with the CS- name and the description; the reply "Canberra" plus a limerick, kept on screen for Beat 5.

### Beat 2: Instructions written in sections (1 min)

**Navigate:** **Overview** > **Instructions** > **Edit** > **Save** · [Exercise 2](demo-create-the-onboarding-assistant.md#exercise-2-paste-the-structured-instructions)
**What is there:** the **Instructions** section starting with `# Purpose` and ending with the Follow-up and Closing rules.

### Beat 3: The model behind every answer (1 min)

**Navigate:** **Overview** > **Model** > **GPT Chat Latest** · [Exercise 3](demo-create-the-onboarding-assistant.md#exercise-3-choose-the-primary-model)
**What is there:** the **Model** section shows GPT Chat Latest; the list marks GPT-5.5 Chat with "will retire on 10/30/2026".

### Beat 4: Settings decide where answers may come from (1 min)

**Navigate:** **Settings** > **Generative AI** > **Orchestration**, then **Knowledge** · [Exercise 4](demo-create-the-onboarding-assistant.md#exercise-4-set-orchestration-and-where-answers-may-come-from)
**What is there:** orchestration **Yes**, web information off, **Allow ungrounded responses** and **Tenant graph grounding with semantic search** on, moderation **Low**; **Overview** shows **Web Search** **Disabled**.

### Beat 5: The scope holds inside and outside the job (1 min)

**Navigate:** **Test your agent** > **…** > **Show activity map when testing** > **Reset** · [Exercise 5](demo-create-the-onboarding-assistant.md#exercise-5-prove-the-scope-inside-and-outside-the-job)
**What is there:** a first-week checklist ending with the supportive closing, the benefits question pointed to HR (no SharePoint source yet), and the off-topic question from Beat 1 declined.
