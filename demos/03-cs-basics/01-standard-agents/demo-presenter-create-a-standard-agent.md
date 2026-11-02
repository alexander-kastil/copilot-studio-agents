---
presents: demo-create-a-standard-agent.md
budget: 4 min
beats: 4
---

# Present: Create a Standard IT Help Desk Agent

**Guide:** [Create a Standard IT Help Desk Agent](demo-create-a-standard-agent.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · each beat links the exercise holding its prompt

**Agent:** Grey Logistics IT Help Desk, a new Standard agent this demo creates; the help desk demos of this module build on it

**Initial prompt** (attach nothing; paste it as the agent description in Exercise 1):

```text
An IT help desk agent for Grey Logistics employees. It answers questions about Windows sign-in, VPN access, Microsoft 365 apps, and hardware requests, gives step-by-step fixes, and tells people to open a ticket with the service desk when it can't solve the issue.
```

### Beat 1: A description drafts the agent, instructions set its limits (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Home** > **New agent** > **Agent** (**Standard**) · **Overview** > **Details** > **Edit**, **Instructions** > **Edit** · [Exercise 1](demo-create-a-standard-agent.md#exercise-1-create-the-agent-from-a-description) · [Exercise 2](demo-create-a-standard-agent.md#exercise-2-set-the-name-and-write-instructions-with-boundaries)
**What is there:** the **Overview** page with Grey Logistics IT Help Desk in **Details** and the five pasted rules in **Instructions**; the knowledge, tool and channel suggestions dismissed.

### Beat 2: Two settings decide how the agent thinks (1 min)

**Navigate:** **Overview** > **Model** · **Settings** > **Generative AI** > **Orchestration**, then **Knowledge** > **Allow ungrounded responses** · [Exercise 3](demo-create-a-standard-agent.md#exercise-3-check-the-model-and-the-orchestration-settings)
**What is there:** **Model** names the default model, orchestration shows **Yes**, **Allow ungrounded responses** is on after **Save**.

### Beat 3: The activity map shows what the orchestrator decided (1 min)

**Navigate:** **Test your agent** > new conversation > activity map · [Exercise 4](demo-create-a-standard-agent.md#exercise-4-test-with-generative-orchestration-and-read-the-activity-map)
**What is there:** numbered VPN troubleshooting steps with a hint to open a ticket, the plan for that turn in the map; the lunch question gets a polite refusal pointing back to workplace IT.

### Beat 4: Classic orchestration needs topics (1 min)

**Navigate:** **Settings** > **Generative AI** > orchestration **No** > **Save** · **Test your agent** > tracking between topics · [Exercise 5](demo-create-a-standard-agent.md#exercise-5-run-the-same-question-under-classic-orchestration)
**What is there:** the VPN turn handled by system topics (**Conversational boosting**, then **Fallback** asking to rephrase); the greeting matches a predefined topic's trigger phrases.
