# Create the CS-Employee Onboarding Assistant

New employees ask HR the same questions in their first weeks: where the benefits form is, what to do first, who to ask. An agent with no identity and no rules answers those questions and every other question too, in whatever tone it likes. In this demo you re-create the Employee Onboarding Assistant as a Standard agent with structured instructions, a chosen model and deliberate answer settings, then prove in the test panel that it stays inside its job.

What you practice here: turning a blank Standard agent into a scoped assistant with a description, structured instructions, a chosen model and generative orchestration settings.

Duration: about 40 minutes.

## What you'll build

- A Standard agent named CS-Employee Onboarding Assistant with the original description.
- Structured instructions with purpose, guidelines, skills, steps, error handling, examples and a closing rule.
- GPT-5.5 Chat as the primary model.
- Generative orchestration with the original answer settings: no web search, ungrounded answers allowed, semantic search on, moderation Low.
- Two test runs of the same off-topic question, before and after the instructions, plus in-scope tests read in the activity map.

## Prerequisites

- Maker access to a Copilot Studio environment, opened in the classic experience: on the home page select the three dots (**…**) at the bottom of the side bar, then **Open classic experience**.
- The original definition this demo re-creates: [src/cs-schema/agents/Employee Onboarding Assistant](../../../src/cs-schema/agents/Employee%20Onboarding%20Assistant/), mainly `agent.mcs.yml` and `settings.mcs.yml`.

## Exercise 1: Create the agent and give it its description

The name and description are what users see in Teams and what other agents read when they decide whether to call this one. Create the agent blank, so the instructions you add next are the only behavior it has, and keep one off-topic answer as the baseline.

1. Go to **Agents** and select **Create blank agent**.
2. Enter the name below and select **Create**.

```text
CS-Employee Onboarding Assistant
```

3. On the **Overview** page, in the **Details** section, select **Edit**, paste the description below, and select **Save**.

```text
Helps new employees complete onboarding by providing guidance and resources from the HR SharePoint site.
```

4. Select **Test** and send this message in the **Test your agent** panel.

```text
What's the capital of Australia, and can you write me a limerick about it?
```

Expected: the **Details** section shows the CS- name and the description. The agent answers the question and writes the limerick, because nothing yet tells it what its job is. Keep this reply on screen for Exercise 5.

## Exercise 2: Paste the structured instructions

The original runs on instructions written in sections. Purpose and General Guidelines set tone and limits, Skills and Step-by-step Instructions say how to answer, Error Handling says what to do when a document is missing, and Follow-up and Closing fixes how every conversation ends.

1. On the **Overview** page, in the **Instructions** section, select **Edit**.
2. Paste the instructions below and select **Save**.

```text
# Purpose
The purpose of this agent is to assist new employees during the onboarding process by providing accurate information, resources, and guidance sourced from the HR SharePoint site.

## General Guidelines
- Always maintain a friendly, professional, and supportive tone.
- Provide clear and concise answers to onboarding-related questions.
- Use information from the HR SharePoint site as the primary source of truth.
- Do not share confidential or unrelated information.
- If unsure about an answer, guide the user to the appropriate HR contact or resource.

## Skills
- Access and retrieve HR policies and onboarding documents from the SharePoint site.
- Explain company policies, benefits, and onboarding steps in simple terms.
- Provide links to relevant documents when requested.

## Step-by-step Instructions
1. **Understand the User's Request**
   - Identify if the question relates to onboarding, HR policies, benefits, or required forms.

2. **Search the HR SharePoint Site**
   - Use the provided SharePoint link to locate the relevant document or policy.

3. **Provide Accurate Information**
   - Summarize the key points from the document.
   - Include a link to the original document for reference.

4. **Guide Through Onboarding Steps**
   - Offer a checklist of onboarding tasks if requested.
   - Explain how to complete each step and where to find necessary forms.

## Error Handling
- If the SharePoint site is inaccessible, inform the user and suggest contacting HR directly.
- If a document cannot be found, apologize and provide alternative guidance or HR contact details.

## Interaction Examples
- **User:** "Where can I find the benefits enrollment form?"
  **Agent:** "You can find the benefits enrollment form on our HR SharePoint site; the cited document below my answer links to it. Would you like me to summarize the steps for enrollment?"

## Nonstandard Terms
- **HR**: Human Resources
- **Onboarding**: The process of integrating a new employee into the organization.

## Follow-up and Closing
- Always ask if the user needs further assistance.
- End conversations with a supportive message, such as: "Let me know if you need help with anything else during your onboarding journey!"
```

Expected: the **Instructions** section shows the text with its headings, starting with `# Purpose` and ending with the Follow-up and Closing rules.

> **Tip:** The original's interaction example ends its answer with a literal `[link]`, which the agent can copy into real replies. The version above points to the citation instead, which is where the agent's real link appears once the next demo adds the SharePoint sources. The original's last section, Sightseeing, is added in the next demo together with its source.

## Exercise 3: Choose the primary model

The model does the reasoning behind every answer and every plan. The original runs on GPT-5.5 Chat, a generally available model with the General tag, which fits short grounded answers and checklists.

1. On the **Overview** page, in the **Model** section, open the model list.
2. Select **GPT-5.5 Chat**.

The original stores the choice as a model hint in `agent.mcs.yml`:

```yaml
aISettings:
  model:
    modelNameHint: GPT55Chat
```

Expected: the **Model** section shows GPT-5.5 Chat.

## Exercise 4: Set orchestration and where answers may come from

Generative orchestration lets the agent pick knowledge, tools and topics from their descriptions instead of from trigger phrases. Four more settings on the same page decide where answers may come from, and the original sets each one on purpose: web search off, ungrounded answers allowed, tenant graph grounding on for SharePoint, and moderation Low.

1. Select **Settings** on the top menu bar, then **Generative AI**.
2. Under **Orchestration**, set **Use generative AI orchestration for your agent's responses?** to **Yes**.
3. In the **Knowledge** section, turn off **Use information from the web**, turn on **Allow ungrounded responses**, and turn on **Tenant graph grounding with semantic search**.
4. Set the content moderation level to **Low**, then select **Save**.

These are the original's settings, the first from `agent.mcs.yml` and the rest from `settings.mcs.yml`:

```yaml
gptCapabilities:
  webBrowsing: false
```

```yaml
configuration:
  settings:
    GenerativeActionsEnabled: true
  aISettings:
    useModelKnowledge: true
    isSemanticSearchEnabled: true
    contentModeration: Low
  recognizer:
    kind: GenerativeAIRecognizer
```

Expected: after **Save**, orchestration shows **Yes**, web information is off, **Allow ungrounded responses** and **Tenant graph grounding with semantic search** are on, and moderation shows **Low**.

> **Note:** **Tenant graph grounding with semantic search** can only be changed while the agent's authentication is **Authenticate with Microsoft**, which is the default for a new agent.

## Exercise 5: Prove the scope inside and outside the job

The instructions only matter if the test panel shows them working. Run two questions the agent should answer, then the off-topic question from Exercise 1, and read the plan in the activity map.

1. In the **Test your agent** panel, select the three dots (**…**) and turn on **Show activity map when testing**.
2. Select the **Reset** icon to start a new conversation, then send this message.

```text
Give me a checklist of onboarding tasks for my first week.
```

3. Send the next message.

```text
Where can I find the benefits enrollment form?
```

4. Send the off-topic message from Exercise 1 again.

```text
What's the capital of Australia, and can you write me a limerick about it?
```

Expected: the checklist reply lists tasks with a line each on how to complete them, as Step 4 of the instructions asks, and ends with the supportive closing. The benefits question follows Error Handling: the agent has no SharePoint source yet, so it says it can't find the form and suggests contacting HR. The off-topic reply depends on the model: usually the agent declines the limerick and steers back to onboarding; if it still answers, that is **Allow ungrounded responses** letting the model use general knowledge, and the reply is still narrower than the one from Exercise 1.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The agent opens with **Build**, **Preview** and **Evaluate** tabs | It was created as a GitHub Copilot agent outside the classic experience | Open the classic experience and create it again from **Agents**, **Create blank agent** |
| The agent still answers off-topic questions | **Allow ungrounded responses** is on, so the model may use its general knowledge | Keep it on to match the original, or turn it off and retest to show the stricter behavior |
| **Tenant graph grounding with semantic search** can't be turned on | The agent doesn't use **Authenticate with Microsoft** | Set authentication back to **Authenticate with Microsoft** in **Settings** |
| The test panel answers with the old behavior | The conversation started before the last **Save** | Select the **Reset** icon and send the message again |

## Summary

You re-created the Employee Onboarding Assistant as a scoped Standard agent. You can now:

- create a blank Standard agent and set its name and description
- write structured instructions that fix tone, steps, error handling and the closing
- choose a primary model and explain its tag
- set generative orchestration and the settings that decide where answers come from
- prove scope in the test panel and read the plan in the activity map

Next, [Ground the Onboarding Assistant in Two SharePoint Sites](../02-knowledge/demo-onboarding-sharepoint-knowledge.md) gives this agent the HR Documents and Sightseeing sources it already refers to.
