# Create a Standard IT Help Desk Agent

A help desk team asked for an agent, and the first draft answers anything anyone types, including questions it has no business answering. The fix is not more content: it is the identity, instructions, model, and orchestration setting you choose before any knowledge goes in. In this demo you create a Standard agent from a short description, tighten what it may do, and watch how the same question travels through generative and classic orchestration.

What you practice here: setting the identity, boundaries, and orchestration of a Standard agent and proving each setting in the test panel.

Duration: about 40 minutes.

## What you'll build

- A Standard agent named Contoso IT Help Desk, created from a natural-language description.
- Instructions that limit it to workplace IT and forbid handling secrets.
- A checked model and orchestration setting on the **Overview** and **Settings** pages.
- Two test runs of the same question, one per orchestration mode, read in the activity map and the topic tracking view.

## Prerequisites

- A Copilot Studio license or trial and the maker role in a Power Platform environment you may create agents in. Use a trial or sandbox environment: new unmanaged developer environments can't be created from November 15, 2026.
- The **New agent** dropdown on the Copilot Studio home page offers **Agent** with the **Standard** badge under **Other ways to build**; that entry creates a Standard agent.

## Exercise 1: Create the agent from a description

Describing the agent in plain words gives you a complete first draft in one step: Copilot Studio generates the name, description, and instructions, and suggests knowledge, tools, and channels. You keep what fits and refine the rest, which is faster than starting blank when the scope is clear.

1. Check the environment selector at the top right and switch to your demo environment if needed.
2. On the **Home** page, open the **New agent** dropdown and select **Agent** with the **Standard** badge under **Other ways to build**, then paste the following description into the box where you describe your agent, and submit it.

```text
An IT help desk agent for Contoso employees. It answers questions about Windows sign-in, VPN access, Microsoft 365 apps, and hardware requests, gives step-by-step fixes, and tells people to open a ticket with the service desk when it can't solve the issue.
```

3. Wait until provisioning finishes and the **Overview** page appears.
4. Review the suggestions Copilot Studio shows for knowledge, tools, and channels, and dismiss them for now.

Expected: the **Overview** page shows a generated name, a description, and instructions that mention VPN, Microsoft 365, and the service desk. The suggestions disappear once dismissed; Learn notes that they don't persist beyond the session.

## Exercise 2: Set the name and write instructions with boundaries

Generated instructions describe a helpful agent but rarely say what it must refuse. A help desk agent needs explicit scope and an explicit rule about secrets, because the orchestrator follows the instructions when it decides how to answer.

1. In the **Details** section, select **Edit**, change the name to `Contoso IT Help Desk`, and save.
2. In the **Instructions** section, select **Edit**, replace the generated text with the following instructions, and select **Save**.

```text
You are the Contoso IT Help Desk agent for employees.
- Answer questions about Windows sign-in, VPN access, Microsoft 365 apps, and hardware requests.
- Give numbered steps that the employee can follow on their own device.
- Never ask for, store, or repeat passwords, one-time codes, or recovery keys.
- When a request needs an administrator, say that a service desk ticket is needed and list the details the ticket should include.
- Politely decline questions that are not about workplace IT.
```

Expected: the **Details** section shows Contoso IT Help Desk, and the **Instructions** section shows the five rules exactly as pasted.

> **Tip:** Type a slash (`/`) inside the instructions to insert a reference to a tool, topic, variable, or Power Fx expression. You use this later in the module, once the agent has topics and tools to name.

## Exercise 3: Check the model and the orchestration settings

Two settings decide how the agent thinks before it answers: the primary model and the orchestration mode. This agent has no knowledge yet, so you also allow ungrounded responses for the demo, otherwise every answer in the next exercise would be blocked for lack of a source.

1. On the **Overview** page, open the **Model** dropdown and read which model is selected. Leave it on the default.
2. Select **Settings** on the top menu bar, then open the **Generative AI** section.
3. Under **Orchestration**, confirm that **Use generative AI orchestration for your agent's responses?** is set to **Yes**.
4. In the **Knowledge** section of the same page, turn on **Allow ungrounded responses**, then select **Save**.

Expected: the **Model** dropdown names the selected model, orchestration shows **Yes**, and **Allow ungrounded responses** is on after saving.

> **Note:** Turn **Allow ungrounded responses** off again once the agent has knowledge. With it off, Learn states that the agent blocks any reply produced in a turn that used no knowledge source or tool, and the Fallback topic answers that turn.

## Exercise 4: Test with generative orchestration and read the activity map

The activity map is the evidence of what the orchestrator decided. Reading it now, on an agent with almost nothing in it, makes the map easy to understand before topics, knowledge, and tools crowd it.

1. Open the **Test your agent** panel and start a new conversation.
2. Send the first prompt, then open the activity map.

```text
My VPN keeps disconnecting every few minutes. What can I try before I call the service desk?
```

3. Send the second prompt.

```text
Which restaurant near the office do you recommend for lunch?
```

Expected: the VPN question returns numbered troubleshooting steps and a hint to open a ticket if they fail, and the activity map shows the plan for that turn. The lunch question gets a polite refusal that points back to workplace IT, which comes from the last instruction you pasted.

## Exercise 5: Run the same question under classic orchestration

Classic orchestration ignores descriptions and matches the user's words against topic trigger phrases. Running the same question in both modes shows learners why an agent under classic orchestration needs topics, and why generative orchestration feels smarter on an empty agent.

1. Go to **Settings**, **Generative AI**, and set **Use generative AI orchestration for your agent's responses?** to **No**. Select **Save**.
2. In the test panel, start a new conversation and turn on tracking between topics.
3. Send the VPN prompt from Exercise 4 again.
4. Send a greeting.

```text
Hello
```

5. Set orchestration back to **Yes** and save.

Expected: with classic orchestration no custom topic has trigger phrases about VPNs, so the tracking view shows a system topic handling the turn (knowledge search through **Conversational boosting**, then **Fallback** asking you to rephrase when nothing is found). The greeting matches the trigger phrases of the predefined **Greeting** topic, and the tracking view highlights that topic's nodes.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The agent opens with **Build**, **Preview**, **Evaluate**, and **Monitor** tabs | The agent was created as a GitHub Copilot agent | Create it again from **New agent**, **Agent** with the **Standard** badge; agents never move between harnesses |
| Every answer is replaced by the Fallback message | **Allow ungrounded responses** is off and the agent has no knowledge or tools | Turn it on for this demo, as in Exercise 3 |
| The orchestration question is missing from **Settings** | An administrator turned off generative orchestration for the environment | Use another environment, or demo classic orchestration only |
| The test panel still answers with old instructions | The conversation started before you saved | Start a new conversation in the test panel |

## Summary

You built a Standard Contoso IT Help Desk agent with deliberate scope and verified each setting in the test panel. You can now:

- create a Standard agent from a description and refine what Copilot Studio generated
- write instructions that state scope, refusals, and handling of secrets
- check the primary model and switch between generative and classic orchestration
- read the activity map and the topic tracking view to see why the agent answered as it did

Next, the [Knowledge Sources & Suggested Prompts](../02-knowledge/readme.md) topic grounds this agent in real content.
