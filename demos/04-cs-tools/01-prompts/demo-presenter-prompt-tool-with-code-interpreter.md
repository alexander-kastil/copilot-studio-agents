---
presents: demo-prompt-tool-with-code-interpreter.md
budget: 5 min
beats: 5
---

# Present: Triage and Analyze Help Desk Tickets with Prompt Tools

**Guide:** [Triage and Analyze Help Desk Tickets with Prompt Tools](demo-prompt-tool-with-code-interpreter.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · each beat links the exercise holding its prompt

**Agent:** Grey Logistics IT Help Desk, a Standard agent (**New agent** > **Agent** (**Standard**)) with generative orchestration and **Authenticate with Microsoft**, which code interpreter needs

**Initial prompt** (attach nothing; paste it into **Prompt assistant** in Exercise 1):

```text
Classify an IT help desk ticket into a category and a priority and summarize it in one sentence.
```

### Beat 1: A recurring task becomes one tested prompt (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Tools** > **Add a tool** > **New tool** > **Prompt** · **Prompt assistant** > **Submit** > **Keep it** · **/** > **Text** > **Test** · [Exercise 1](demo-prompt-tool-with-code-interpreter.md#exercise-1-draft-a-triage-prompt-with-prompt-assistant)
**What is there:** a prose triage with a Network category, a High priority, a one-sentence summary and a next step about the VPN client.

### Beat 2: A fixed JSON output (1 min)

**Navigate:** output > **JSON** · settings icon > **Apply** > **Test** > **Save custom** · **…** > **Settings** > **Temperature** · [Exercise 2](demo-prompt-tool-with-code-interpreter.md#exercise-2-lock-the-output-to-json)
**What is there:** the format label reads Custom; the response holds exactly `category`, `priority`, `summary` and `nextStep`.

### Beat 3: The description makes it a tool (1 min)

**Navigate:** **Save** > **Add and configure** > description > **Save** · test pane · [Exercise 3](demo-prompt-tool-with-code-interpreter.md#exercise-3-add-the-prompt-to-the-agent-and-call-it-from-chat)
**What is there:** the activity map shows Triage help desk ticket running; the reply states a Hardware category, a priority and a next step from the tool output.

### Beat 4: Code interpreter calculates instead of guessing (1 min)

**Navigate:** **Tools** > **Add a tool** > **New tool** > **Prompt** · **…** > **Settings** > **Enable code interpreter** · [Exercise 4](demo-prompt-tool-with-code-interpreter.md#exercise-4-calculate-backlog-figures-with-code-interpreter)
**What is there:** Hardware 2 tickets at 27.0, Network 3 at 5.0, Software 2 at 2.5, Password 3 at 1.0; overall 7.7 hours and 3 High tickets.

### Beat 5: The orchestrator picks between two prompts (1 min)

**Navigate:** **Save** > **Add and configure** > description · test pane · [Exercise 5](demo-prompt-tool-with-code-interpreter.md#exercise-5-let-the-orchestrator-choose-between-the-two-prompts)
**What is there:** the backlog question runs Analyze ticket backlog (Hardware at 27.0 hours, 3 high-priority tickets); the single ticket runs Triage help desk ticket with an Access or Password category.
