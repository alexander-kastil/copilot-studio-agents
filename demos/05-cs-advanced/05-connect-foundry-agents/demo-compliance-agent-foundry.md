# Run a New Hire Background Check Through a Foundry Agent

Before a new hire starts, HR checks who the person is, but the research behind that check lives with a data team that built it in Microsoft Foundry. Rebuilding their research in Copilot Studio would split it into two versions, and asking HR to use a second tool means the check gets skipped. In this demo you build CS-Compliance Agent, which collects and confirms the person's details and hands them to the social-profiler agent in Foundry for the actual research.

What you practice here: writing structured instructions that collect and confirm data before a hand-off, choosing an external model, and calling a Foundry agent as an external agent.

Duration: about 40 minutes.

## What you'll build

- CS-Compliance Agent, a Standard agent with step-by-step instructions for a background check.
- Claude Sonnet 4.6 as the agent's primary model.
- CS-Social Profiler, the social-profiler agent in Microsoft Foundry connected on the **Agents** page.
- A background check for a new hire, and a check that stops on an invalid email address.

## Prerequisites

- Copilot Studio in the classic experience: on the home page, select the three dots (**…**) at the bottom of the side bar, then **Open classic experience**.
- The `social-profiler` agent in your Microsoft Foundry project with the Activity Protocol turned on, as in Exercise 1 of [Connect a Foundry Agent to the Help Desk](./demo-connect-a-foundry-agent.md), and the project endpoint.
- A Copilot Studio account that can sign in to the Foundry project with at least the **Foundry Agent Consumer** role.
- External models allowed by your admin, so Claude models appear in the model list.
- The original agent definition, for reference: [src/cs-schema/agents/Compliance Agent](../../../src/cs-schema/agents/Compliance%20Agent/).

## Exercise 1: Create CS-Compliance Agent with structured instructions

A background check has a fixed order: explain, collect, confirm, hand off. The instructions spell that order out with headings and numbered steps, so the agent asks one thing at a time and never sends unconfirmed data on.

1. Go to the **Agents** page, select **Create blank agent**, enter the name `CS-Compliance Agent`, and select **Create**.
2. On the **Overview** page, in the **Details** section, select **Edit**, paste this description, and select **Save**.

```text
Performs background checks on individuals by collecting name, email, and company details, then prepares the data for integration with a social research agent.
```

3. In the **Instructions** section, select **Edit**, paste these instructions, and select **Save**.

```text
# Purpose
The purpose of this agent is to perform background checks by collecting essential personal and professional details (name, email, and company) and preparing them for further analysis by a linked social research agent.

# General Guidelines
- Maintain a professional and neutral tone.
- Ensure accuracy and completeness of collected data.
- Do not make assumptions; always confirm details with the user.
- Respect privacy and comply with applicable data protection regulations.

# Skills
- Data collection and validation.
- Secure handling of personal information.
- Preparing structured data for external processing.

# Step-by-Step Instructions
1. **Initiate Interaction**
   - Greet the user and explain the purpose of the background check.
   - Inform the user about the data you will collect: name, email, and company.

2. **Collect Data**
   - Ask for the individual's full name.
   - Ask for the individual's email address.
   - Ask for the individual's company name.
   - Validate the format of the email address.

3. **Confirm Details**
   - Repeat the collected information to the user for confirmation.
   - Allow the user to correct any mistakes.

4. **Prepare Data for Handoff**
   - Structure the collected data in a clear format (e.g., JSON or table) for easy integration with the social research agent.
   - Notify the user that the data is ready for the next step.

# Error Handling
- If the user provides incomplete or invalid data, politely request clarification or correction.
- If the user refuses to provide information, explain that the background check cannot proceed without it.

# Interaction Examples
**Example:**
- Agent: "Please provide the full name of the person you want to check."
- User: "John Doe"
- Agent: "Thank you. Now, please provide their email address."

# Nonstandard Terms
- **Social Research Foundry Agent**: The external system that will process the collected data for deeper social research.

# Follow-up and Closing
- After confirming the data, inform the user that the information has been prepared for the linked social research agent.
- Thank the user for their cooperation.
```

4. In the **Knowledge** section, check that **Web Search** is **Enabled**, as in the original agent.

Expected: the **Overview** page shows CS-Compliance Agent with the description under **Details** and the instructions with their headings under **Instructions**.

## Exercise 2: Choose Claude Sonnet 4.6 as the primary model

The original agent runs on Claude Sonnet 4.6, an external model from Anthropic. A model that follows long, ordered instructions closely suits a check where skipping the confirmation step is the real risk.

1. On the **Overview** page, in the **Model** section, select **Claude Sonnet 4.6** under **Anthropic**.
2. Open **Test your agent** and send:

```text
I need a background check on a new colleague.
```

Expected: the **Model** section shows Claude Sonnet 4.6, and the agent explains the purpose of the check, names the three details it will collect, and asks for the full name first.

> **Note:** If Claude Sonnet 4.6 is visible but can't be selected, or is missing, your admin hasn't allowed external models for this environment. Choose a GPT model for the demo and ask the admin to allow Anthropic.

## Exercise 3: Connect the social-profiler agent as CS-Social Profiler

The research itself belongs to the team that built social-profiler in Foundry, so CS-Compliance Agent calls it instead of copying it. The connection tells Copilot Studio which Foundry project to reach, and the entry's description tells the planner when to call it.

1. Go to the **Agents** page and select **Add an agent**.
2. Under **Connect to an external agent**, select **Microsoft Foundry**.
3. Create a new connection with your Foundry project endpoint (`<your Foundry project endpoint>`), sign in when asked, and select **Next**.
4. Enter `CS-Social Profiler` as the **Name**, paste this **Description**, and enter `social-profiler` as the **Agent Id**:

```text
Get a social profile and background check based on name, e-mail and company
```

5. Select **Add Agent**.

Expected: CS-Social Profiler appears on the **Agents** page with its **Enabled** toggle on.

> **Note:** If the connection dialog lets you name the connection, call it `CS-Microsoft Foundry`. If it doesn't, the connection is listed under the Azure AI Foundry Agent Service connector, which is how you find it for cleanup.

## Exercise 4: Hand the confirmed details to CS-Social Profiler

The original instructions end with "the data is ready for the next step" and never tell the agent to call the Foundry agent, so a check could stop before any research ran. One added step names CS-Social Profiler as a reference and says when to call it: only after the user confirmed the details.

1. On the **Overview** page, in the **Instructions** section, select **Edit**.
2. Directly under step 4, **Prepare Data for Handoff**, add this step:

```text
5. **Run the Background Check**
   - After the user confirmed the details, call CS-Social Profiler with the full name, the email address and the company name.
   - Summarize what CS-Social Profiler returns for the user, and say that it comes from the social research agent.
```

3. Select the text CS-Social Profiler in the new step, type `/`, and pick CS-Social Profiler from the menu so it becomes a reference. Do the same for the second mention.
4. Select **Save**.

Expected: the **Instructions** section shows step 5 with CS-Social Profiler as a reference.

> **Tip:** Step 5 is new in the rebuild. Without it the original agent only promised a hand-off; with it the planner calls the Foundry agent at the one point the data is confirmed.

## Exercise 5: Run a background check for a new hire

A full run proves the order of the instructions: one question at a time, a confirmation, then the Foundry call. A second run with a broken email address proves the error handling stops the check before any data leaves the agent.

1. Open **Test your agent**, select the three dots (**…**), and turn on **Show activity map when testing**.
2. Start a new test conversation and answer the agent's questions with these values, one per turn:

```text
I need a background check on our new hire before she starts on Monday.
```

```text
Jana Novak
```

```text
jana.novak@example.com
```

```text
Fabrikam Consulting
```

3. When the agent repeats the details, confirm them:

```text
Yes, that's correct.
```

4. Start a new test conversation, ask for a check again, and give this email address when asked:

```text
jana.novak(at)example
```

Expected: in the first run the agent asks for the name, the email and the company in separate turns, repeats all three for confirmation, and only after your confirmation the activity map shows a CS-Social Profiler node and the reply summarizes what the Foundry agent returned. In the second run the agent asks you to correct the email address, and no CS-Social Profiler node appears.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Calls fail with HTTP 400 about activity | The Activity Protocol isn't on the Foundry agent endpoint | Turn it on as in Exercise 1 of [Connect a Foundry Agent to the Help Desk](./demo-connect-a-foundry-agent.md) |
| Adding the agent fails with `404 - Version not found` | social-profiler was created in the previous Foundry portal | Recreate it in the current Microsoft Foundry portal |
| The call returns 403 Forbidden | Your account lacks a Foundry role on the project | Ask the project owner for **Foundry Agent Consumer** |
| The agent confirms the details but never calls CS-Social Profiler | Step 5 is missing or the name isn't a reference | Add step 5 and turn the name into a reference with `/` |
| Claude Sonnet 4.6 can't be selected | External models are blocked for the environment | Ask the admin to allow Anthropic, or use a GPT model |

## Summary

You rebuilt the Compliance Agent as CS-Compliance Agent and let a Foundry agent do the research it was always meant to hand off. You can now:

- Write structured instructions that collect, confirm and only then hand off
- Choose an external model from Anthropic as an agent's primary model
- Connect a Microsoft Foundry agent on the **Agents** page with a project endpoint and an agent ID
- Prove in the activity map that the Foundry call runs only after confirmation

The optional voice topic takes agents to the phone: [Voice Agents: IVR & Post-Call](../06-voice/readme.md).
