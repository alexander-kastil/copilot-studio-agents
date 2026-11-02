---
presents: demo-hr-buddy-employee-topics.md
budget: 5 min
beats: 5
---

# Present: Identify an Employee Once and Reuse It Across HR Topics

**Guide:** [Identify an Employee Once and Reuse It Across HR Topics](demo-hr-buddy-employee-topics.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · have the HR Documents site URL ready

**Agent:** CS-HR Buddy, created blank in Exercise 1 from the original [HR Buddy](../../../src/cs-schema/agents/HR%20Buddy/); the finished rebuild is [CS-HR Buddy](../../../src/cs-schema/cs-agents/CS-HR%20Buddy/)

**Initial prompt** (attach nothing; sent in Exercise 3, after CS-HR Buddy and Collect Employee Data exist):

```text
add employee information
```

### Beat 1: The behavior lives in topics, not in the agent (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **...** > **Open classic experience** > **Agents** > **Create blank agent** · **Overview** > **Details**, **Instructions**, **Knowledge** > **Add knowledge** > **SharePoint** · [Exercise 1](demo-hr-buddy-employee-topics.md#exercise-1-create-cs-hr-buddy-with-its-hr-knowledge)
**What is there:** CS-HR Buddy with its description, the one-line instruction and HR Documents under **Knowledge**; orchestration reads **Yes**.

### Beat 2: A description, not phrases, picks the topic (1 min)

**Navigate:** **Topics** > **Add a topic** > **From blank** · **Trigger** (**The agent chooses**) · [Exercise 2](demo-hr-buddy-employee-topics.md#exercise-2-build-the-collect-employee-data-questions)
**What is there:** the **Trigger** node with the description and four **Question** nodes identifying Person name, Person name, the three department options and Number; one empty branch per department.

### Beat 3: A global variable remembers the employee (1 min)

**Navigate:** **Variable management** > **Set a variable value** > **Global (any topic can access)** · **Test your agent** · [Exercise 3](demo-hr-buddy-employee-topics.md#exercise-3-confirm-the-leave-and-mark-the-employee-as-identified)
**What is there:** the four questions in order, department buttons, "Hi Johanna Kurz. You have 25 days of paid leave left"; **Variables** lists `Global.EmployeeIdentified`.

### Beat 4: A condition sends unknown employees on a detour (1 min)

**Navigate:** **Topics** > **Add a topic** > **From blank** · **Add node** > **Add a condition** > **…** > **Change to formula** · **Topic management** > **Go to another topic** · [Exercise 4](demo-hr-buddy-employee-topics.md#exercise-4-redirect-unknown-employees-from-the-rewards-topic)
**What is there:** the condition `Not(Global.EmployeeIdentified)`, a **Redirect** node to Collect Employee Data, the reward question below both branches and one message per option.

### Beat 5: The detour runs once per session (1 min)

**Navigate:** **Test your agent** > new conversation · [Exercise 5](demo-hr-buddy-employee-topics.md#exercise-5-watch-the-detour-run-once)
**What is there:** the first reward request runs the employee questions and the paid leave message, then "Please choose your reward:" and the dinner voucher; the second asks only the reward question and confirms the tickets.
