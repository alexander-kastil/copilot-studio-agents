# Answer Return Requests from a Shared Mailbox with an Autonomous Agent

Return requests land in a shared help mailbox and wait until someone opens each one, looks up the returns policy and types a reply. In this demo you rebuild the Returns Agent as CS-Returns Agent, which wakes up for every new email, checks the request against the returns policy and answers by mail, with nobody in the chat.

What you practice here: turning a policy-grounded agent into an autonomous one with a mailbox event trigger and a mail tool that runs on maker credentials.

Duration: about 50 minutes.

## What you'll build

- CS-Returns Agent, a Standard agent whose instructions limit it to returns and fix the reply format to an HTML email.
- The returns-policy.docx document from SharePoint as the agent's only knowledge source.
- CS-Work IQ Mail, the Work IQ Mail (Preview) MCP server added as a tool on maker-provided credentials.
- CS-When a new email arrives in a shared mailbox, an event trigger that sends every new email in the shared mailbox to the agent.
- A replayed trigger run and a published run, both followed on the agent's **Activity** page.

## Prerequisites

- The maker role in the class environment, with the classic experience open: on the Copilot Studio home page select the three dots (**…**) at the bottom of the side bar, then **Open classic experience**.
- A shared mailbox for returns (`<your shared returns mailbox>` below) that your account has full access to, and a second mailbox you can send test emails from.
- The returns policy as a Word document in SharePoint (`<your returns-policy.docx URL>` below).
- An environment where data policies allow event triggers and solution-aware cloud flow sharing is turned on.
- The original agent definition for reference: [src/cs-schema/agents/Returns Agent](../../../src/cs-schema/agents/Returns%20Agent/).

## Exercise 1: Create CS-Returns Agent and set its boundaries

An autonomous run has nobody to ask, so the instructions carry the whole job: who the agent serves, what a reply looks like and what it refuses. The reply format matters because the answer goes out as an email body, not as a chat bubble.

1. On the **Home** page, open the **New agent** dropdown and select **Agent** with the **Standard** badge under **Other ways to build**.
2. Paste this description into the box where you describe your agent and submit it.

```text
An autonomous agent dealing with returns
```

3. When the **Overview** page appears, select **Edit** in the **Details** section, set the name to `CS-Returns Agent`, keep the description above and save.
4. In the **Instructions** section, select **Edit**, replace the generated text with these instructions and select **Save**.

```text
You are a helpful agent helping customers with their returns. Understand the needs of the customer and then respond with an email that uses <p> and <br> tags and is in accordance with our return policies.

You do not deal with other topics
```

5. In the **Model** section, select **GPT-5 Chat**.
6. Open **Test** and send this message.

```text
Can you help me book a flight to Rome next week?
```

Expected: the **Overview** page shows CS-Returns Agent with its description, the two paragraphs of instructions exactly as pasted, and GPT-5 Chat under **Model**. The test answer declines the flight request, because the instructions say the agent does not deal with other topics.

> **Tip:** The rebuild fixes three typos in the clone: "acccordance to" becomes "accordance with", a double space before `<p>` is gone, and the knowledge description in Exercise 2 reads "our returns policy" instead of "out returns policy".

## Exercise 2: Ground the answers in the returns policy

A returns answer is only as good as the policy behind it. Pointing the knowledge source at one document, rather than a whole site, keeps the agent from mixing in other content, and the description tells the orchestrator when to search it.

1. On the **Overview** page, select **Add knowledge**.
2. In the **Featured** section, select **SharePoint**.
3. Enter the URL of the policy document.

```text
<your returns-policy.docx URL>
```

4. Name the source `returns-policy.docx` and enter this description.

```text
Information about our returns policy
```

5. Select **Add to agent**.
6. Start a new test conversation and send this message.

```text
I bought wireless headphones 20 days ago and the left earbud stopped charging. Can I return them for a refund?
```

Expected: the **Knowledge** section lists returns-policy.docx. The answer applies the policy's rules to a 20-day-old defective item, reads like an email body with paragraph and line-break tags, and cites returns-policy.docx.

## Exercise 3: Give the agent a mail tool that works without a user

The agent must send its answer itself, so it needs a mail tool, and a trigger run has no signed-in user to lend credentials. The Work IQ Mail (Preview) MCP server brings the Outlook mail tools as one tool entry; Learn lists such workload-specific Work IQ tools as the standard-harness option, while the unified Work IQ (Preview) belongs to the GitHub Copilot harness.

The clone stores the tool as an MCP call:

```yaml
kind: TaskDialog
modelDisplayName: Work IQ Mail (Preview)
action:
  kind: InvokeExternalAgentTaskAction
  connectionReference: <connection reference>
  connectionProperties:
    mode: Invoker

  operationDetails:
    kind: ModelContextProtocolMetadata
    operationId: mcp_MailTools
```

1. Go to the **Tools** page and select **Add a tool**.
2. Select **Model Context Protocol** and pick **Work IQ Mail (Preview)** from the list of MCP connectors.
3. Authorize the connection with your account, then select **Add and configure**.
4. On the settings page that opens, rename the tool in **Details** to `CS-Work IQ Mail`.
5. Under **Details** > **Additional details** > **Credentials to use**, select **Maker-provided credentials**, then save.
6. Review the **Tools** section of the settings page, which lists the mail tools the server offers, and leave **Allow all** turned on.
7. Start a new test conversation, open the activity map with the map icon, and send this message.

```text
A customer at <a test customer address> wants to return wireless headphones bought 20 days ago because the left earbud stopped charging. Email them our answer.
```

Expected: the **Tools** page lists CS-Work IQ Mail, and its details show **Maker-provided credentials**. The activity map shows a knowledge search on returns-policy.docx followed by a call to CS-Work IQ Mail, and the test address receives an email whose body is split into paragraphs. If the test pane asks you to connect or allow access the first time, confirm it.

> **Tip:** The clone left this tool on end-user credentials (`mode: Invoker` above). Learn's guidance for MCP servers that run from a trigger is **Maker-provided credentials**, so the rebuild switches it; every reply then goes out through your account, so keep this agent to the returns job.

## Exercise 4: Wake the agent for every new email in the shared mailbox

The trigger turns each new email into a message for the agent. It is a small Power Automate flow that watches the mailbox and hands the email to the agent with a payload instruction; the clone keeps the default payload, because the agent's instructions already say what to do with a customer email.

The clone stores the trigger as a reference to its flow:

```yaml
kind: ExternalTriggerConfiguration
externalTriggerSource:
  kind: WorkflowExternalTrigger
  flowId: <trigger flow id>

extensionData:
  triggerConnectionType: Office 365 Outlook
```

1. On the **Overview** page, go to the **Triggers** section and select **Add trigger**.
2. Search for `shared mailbox`, select **When a new email arrives in a shared mailbox (V2)** and select **Next**.
3. Name the trigger `CS-When a new email arrives in a shared mailbox`, confirm the Microsoft Copilot Studio and Office 365 Outlook connections, and select **Next**.
4. Set **Original Mailbox Address** to your shared mailbox and **Folder** to **Inbox**.

```text
<your shared returns mailbox>
```

5. Keep the default payload instruction below in the additional instructions for the agent, then select **Create trigger**.

```text
Use content from Body
```

Expected: CS-When a new email arrives in a shared mailbox appears in the **Triggers** section of the **Overview** page, and a confirmation invites you to test it.

> **Note:** In the clone, the trigger and its flow carry the same name, so the CS- name marks both for cleanup. The two connections take no name in this dialog; when you clean up the old environment, find them by their connectors, Office 365 Outlook and Microsoft Copilot Studio.

## Exercise 5: Replay a real email and read the plan

Until you publish, the trigger doesn't fire on its own. You send one real email, replay it into the test pane and check in the activity map that the agent read the payload, searched the policy and called the mail tool.

1. From your second mailbox, send this email to the shared mailbox.

```text
Subject: Return request for order 10482

Hello, I bought wireless headphones in your web shop 20 days ago. The left earbud stopped charging. Can I return them for a refund?

Kind regards,
Maria Huber
```

2. Wait about a minute; the clone's flow checks the mailbox once a minute.
3. On the **Overview** page, select the test trigger icon next to CS-When a new email arrives in a shared mailbox.
4. Select the new email from the list of instances and select **Start testing**.
5. In the test pane, select the map icon to open the activity map.

Expected: the test chat shows the trigger payload as a message that only you see, starting with "Use content from" and carrying the email's sender, subject and body. The activity map shows a knowledge search on returns-policy.docx and a call to CS-Work IQ Mail, and your second mailbox receives an HTML reply that answers the return request along the policy.

## Exercise 6: Look behind the trigger, publish and watch it work alone

Publishing is the moment the agent starts answering on its own with your credentials. One look at the flow first shows what the trigger really sends.

1. Next to the trigger, select the three dots (**…**) and **Edit in Power Automate**.
2. Compare the trigger card and the action card with the clone's flow, then close Power Automate without changes.

```json
{
  "triggers": {
    "When_a_new_email_arrives_in_a_shared_mailbox_(V2)": {
      "recurrence": { "interval": 1, "frequency": "Minute" },
      "inputs": {
        "host": { "operationId": "SharedMailboxOnNewEmailV2" },
        "parameters": { "mailboxAddress": "<your shared returns mailbox>", "folderId": "<Inbox folder id>" }
      }
    }
  },
  "actions": {
    "Sends_a_prompt_to_the_specified_copilot_for_processing": {
      "inputs": {
        "host": { "operationId": "ExecuteCopilot" },
        "parameters": { "Copilot": "<agent schema name>", "body/message": "Use content from @{triggerBody()}" }
      }
    }
  }
}
```

3. Back in Copilot Studio, select **Publish** and read the warnings about author credentials before you confirm.
4. From your second mailbox, send an email that is not about returns.

```text
Subject: Invoice address change

Hello, please change the billing address on my customer account to Hauptstrasse 12, 8010 Graz.
```

5. Open the agent's **Activity** page, select the newest activity, then select **View** and **Transcript + Map view**.

Expected: the flow shows the shared mailbox trigger followed by **Sends a prompt to the specified copilot for processing**. Within a few minutes the **Activity** page lists an activity started by the trigger for the invoice email, and its transcript shows the payload. The agent does not change the address; depending on the model it sends no reply or a short reply saying it only handles returns.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| **Add trigger** is missing or blocked | Generative orchestration is off, data policies block triggers, or solution-aware cloud flow sharing is off | Check **Settings** > **Generative AI**, then ask the environment admin about data policies and flow sharing |
| No email shows up as a test instance | Your account lacks full access to the shared mailbox, or a mail rule moved the email out of the folder the trigger watches | Get full access to the mailbox, or set **Folder** to the folder the email lands in |
| The run asks someone to sign in, or no reply goes out | CS-Work IQ Mail still uses end-user credentials | Set **Credentials to use** to **Maker-provided credentials** and test again |
| **Maker-provided credentials** can't be selected | An admin restricted the maker credential options for the environment | Ask the admin to allow maker-provided credentials in the Power Platform admin center |
| The payload carries no message body | The email is encrypted or protected, which the Office 365 Outlook trigger can't read | Test with an unprotected email |

## Summary

You rebuilt the Returns Agent as CS-Returns Agent, which answers every new email in the shared mailbox along the returns policy. You can now:

- Write instructions that carry an autonomous agent's whole job, including its reply format and its limits
- Ground an agent in a single SharePoint document
- Add a Work IQ MCP server as a tool and run it on maker-provided credentials
- Add a shared mailbox trigger, replay a recorded email and read the plan in the activity map
- Find the flow behind a trigger and follow published runs on the **Activity** page

Next, [Deep Reasoning Models](../02-deep-reasoning/readme.md) gives one step of a plan a slower, more careful model.
