# Answer Return Requests from a Shared Mailbox with an Autonomous Agent

Return requests land in a shared help mailbox and wait until someone opens each one, looks up the returns policy and types a reply. In this demo you rebuild the Returns Agent as CS-Returns Agent, which wakes up for every new email, checks the request against the returns policy and answers by mail, with nobody in the chat.

What you practice here: turning a policy-grounded agent into an autonomous one with a mailbox event trigger and a mail tool that runs on maker credentials.

Duration: about 50 minutes.

## What you'll build

- CS-Returns Agent, a Standard agent whose instructions limit it to returns and fix the reply format to an HTML email.
- The returns-policy.docx document from SharePoint as the agent's only knowledge source.
- CS-Work IQ Mail, the Work IQ Mail MCP server (listed as **Mail (Preview)**) added as a tool on maker-provided credentials, and one instruction sentence that tells the agent to send its answer with it.
- CS-When a new email arrives in a shared mailbox, an event trigger that sends every new email in the shared mailbox to the agent.
- A replayed trigger run and a published run, both followed on the agent's **Activity** page.

## Prerequisites

- The maker role in the class environment, with the classic experience open: on the Copilot Studio home page select the three dots (**…**) at the bottom of the side bar, then **Open classic experience**.
- A shared mailbox for returns (`<your shared returns mailbox>` below) that your account has full access to, and a second mailbox you can send test emails from. A shared mailbox created for this demo in the Microsoft 365 admin center (**Teams & groups**, **Shared mailboxes**, **Add a shared mailbox**, then **Add members**) needs about 15 minutes before a trigger can read its Inbox.
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

5. In the **Model** section, select **GPT Chat Latest**.
6. Open **Test** and send this message.

```text
Can you help me book a flight to Rome next week?
```

Expected: the **Overview** page shows CS-Returns Agent with its description, the two paragraphs of instructions exactly as pasted, and GPT Chat Latest under **Model**. The test answer declines the flight request, because the instructions say the agent does not deal with other topics.

> **Tip:** The rebuild fixes three typos in the clone: "acccordance to" becomes "accordance with", a double space before `<p>` is gone, and the knowledge description in Exercise 2 reads "our returns policy" instead of "out returns policy". The clone ran on GPT-5 Chat; the rebuild uses GPT Chat Latest, which always points to the current GPT chat model.

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

1. On the **Overview** page, in the **Tools** section, select **Add tool**.
2. Select the **Model Context Protocol** filter, search for `Work IQ Mail` and press Enter, then select **Mail (Preview)** with the subtitle **Mail MCP**.
3. Check that **Connection** shows a connection with a green check (create one with your account if it doesn't), then select **Add**.
4. When "Your tool was added to the agent" appears, select **Mail (Preview)** in the **Tools** section and rename it in **Details** > **Name** to `CS-Work IQ Mail`.
5. Expand **Additional details**, set **Credentials to use** to **Maker-provided credentials**, and select **Save**.
6. Review the **Tools** section of the settings page, which lists the mail tools the server offers, and leave the **Allow all** switch at its top turned on.
7. Go back to the **Overview** page, select **Edit** in the **Instructions** section, add the sentence below at the end of the first paragraph, and select **Save**.

```text
Send that email to the customer with CS-Work IQ Mail.
```

8. Start a new test conversation and send this message.

```text
A customer at <a test customer address> wants to return wireless headphones bought 20 days ago because the left earbud stopped charging. Email them our answer.
```

Expected: the confirmation "The tool was saved" appears, and the **Overview** page lists CS-Work IQ Mail under **Tools**. The test answer starts with **Email sent**, summarizes that the 14-day return window has passed and cites returns-policy.docx. The test address receives an email from your account whose body is split into `<p>` paragraphs, with a `<br>` in the sign-off.

> **Tip:** The clone left this tool on end-user credentials (`mode: Invoker` above). Learn's guidance for MCP servers that run from a trigger is **Maker-provided credentials**, so the rebuild switches it; every reply then goes out through your account, so keep this agent to the returns job.

> **Note:** The instruction sentence from step 7 is new in the rebuild. Without it, the triggered run in Exercise 5 wrote the reply only into the test chat: the activity showed CS-Work IQ Mail invoked but never finished, and no email went out. A test message that says "Email them" works without it, but a trigger payload carries only the customer's email.

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
2. Select the **All** filter, because the dialog opens on **Featured**, which doesn't list this trigger. Search for `shared mailbox`, select **When a new email arrives in a shared mailbox (V2)** and select **Next**.
3. Replace the trigger name with the name below, check that Microsoft Copilot Studio and Office 365 Outlook both show a green check under **Sign in**, and select **Next**.

```text
CS-When a new email arrives in a shared mailbox
```

4. Set **Original Mailbox Address** to your shared mailbox, then select the folder icon in **Folder** and pick **Inbox**.

```text
<your shared returns mailbox>
```

5. Keep the default in **Additional instructions to the agent when it's invoked by this trigger**, "Use content from" followed by the **Body** token, then select **Create trigger**.

Expected: the dialog shows "Time to test your trigger!" with "Your trigger was successfully added." After **Close**, CS-When a new email arrives in a shared mailbox appears in the **Triggers** section of the **Overview** page with a test icon next to it.

> **Note:** If the folder picker answers "The requested user is invalid", the mailbox address doesn't exist. If it answers "Default folder Root not found", the mailbox is still being provisioned: type `Inbox` into **Folder** and continue. Wait about 15 minutes before you send the test email in Exercise 5, because an email that lands before the trigger can read the mailbox is never picked up.

> **Note:** In the clone, the trigger and its flow carry the same name, so the CS- name marks both for cleanup. The two connections take no name in this dialog; when you clean up the old environment, find them by their connectors, Office 365 Outlook and Microsoft Copilot Studio.

## Exercise 5: Replay a real email and read the plan

Until you publish, the trigger still records each new email, but its flow run fails at the agent call, so nothing is answered on its own. You send one real email, replay it into the test pane and check in the activity that the agent read the payload, searched the policy and called the mail tool.

1. From your second mailbox, send this email to the shared mailbox.

```text
Subject: Return request for order 10482

Hello, I bought wireless headphones in your web shop 20 days ago. The left earbud stopped charging. Can I return them for a refund?

Kind regards,
Maria Huber
```

2. Wait about a minute; the clone's flow checks the mailbox once a minute.
3. On the **Overview** page, select the test icon next to CS-When a new email arrives in a shared mailbox.
4. In **Test your trigger**, keep the newest instance selected (date and time of the email) and select **Start testing**.
5. Select **Expand test pane** in the test pane header to see the activity next to the chat, and expand **Trigger detected** in the chat.

Expected: the test chat shows **Trigger detected** with "Only visible to you", and the expanded payload carries the email as JSON, including its headers, `body`, `from` and `toRecipients`. The agent answers with **Email sent** and a citation of returns-policy.docx, and the activity shows the cards **Search sources** and **CS-Work IQ Mail**. Your second mailbox receives "Re: Return request for order 10482", which explains that the 14-day return window has passed.

## Exercise 6: Look behind the trigger, publish and watch it work alone

Publishing is the moment the agent starts answering on its own with your credentials. One look at the flow first shows what the trigger really sends.

1. Next to the trigger, select the three dots (**…**) and **Edit in Power Automate**. If Power Automate asks you to reauthenticate connections of other flows, select **Not now**.
2. Select the action card and compare **Agent** and **Message** with the clone's flow below, then close the Power Automate tab without saving.

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

3. Back in Copilot Studio, select **Publish**. Read the two items under **Review the following before publishing**, **Full Access for Editors** and **Your agent includes triggers that use the author's credentials**, then select **Publish**.
4. From your second mailbox, send an email that is not about returns.

```text
Subject: Invoice address change

Hello, please change the billing address on my customer account to Hauptstrasse 12, 8010 Graz.
```

5. Open the agent's **Activity** page and select the newest row, named **Automated**.

Expected: the flow shows the shared mailbox trigger followed by **Sends a prompt to the specified copilot for processing**, whose **Agent** is the agent's schema name and whose **Message** is "Use content from" with the **Body** token. Within a minute the **Activity** page lists an **Automated** row with the status **Completed**, which opens as CS-When a new email arrives in a shared mailbox. Its transcript shows **Trigger detected** and the agent's answer that it only handles returns and can't process a billing-address change; no reply email went out in the live run.

> **Tip:** The **Activity** page also lists your test sessions under your own name, and their **Last step** column shows which mail tool ran, for example **SendEmailWithAttachments**. Only trigger runs after the publish appear as **Automated**.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| **Add trigger** is missing or blocked | Generative orchestration is off, data policies block triggers, or solution-aware cloud flow sharing is off | Check **Settings** > **Generative AI**, then ask the environment admin about data policies and flow sharing |
| No email shows up as a test instance | Your account lacks full access to the shared mailbox, or a mail rule moved the email out of the folder the trigger watches | Get full access to the mailbox, or set **Folder** to the folder the email lands in |
| The run asks someone to sign in, or no reply goes out | CS-Work IQ Mail still uses end-user credentials | Set **Credentials to use** to **Maker-provided credentials** and test again |
| The replay answers in the chat, but no email goes out | The instructions don't tell the agent to send its answer | Add the sentence from Exercise 3, step 7, and replay the instance again |
| The folder picker shows "The requested user is invalid" or "Default folder Root not found" | The mailbox address doesn't exist, or the new shared mailbox is still being provisioned | Check the address in the Microsoft 365 admin center, or type `Inbox` and wait about 15 minutes |
| **Add trigger** doesn't list the shared mailbox trigger | The dialog opens on the **Featured** filter | Select **All**, then search again |
| **Maker-provided credentials** can't be selected | An admin restricted the maker credential options for the environment | Ask the admin to allow maker-provided credentials in the Power Platform admin center |
| The payload carries no message body | The email is encrypted or protected, which the Office 365 Outlook trigger can't read | Test with an unprotected email |

## Summary

You rebuilt the Returns Agent as CS-Returns Agent, which answers every new email in the shared mailbox along the returns policy. You can now:

- Write instructions that carry an autonomous agent's whole job, including its reply format and its limits
- Ground an agent in a single SharePoint document
- Add a Work IQ MCP server as a tool, run it on maker-provided credentials and name it in the instructions
- Add a shared mailbox trigger, replay a recorded email and read the plan in the activity map
- Find the flow behind a trigger and follow published runs on the **Activity** page

Next, [Deep Reasoning Models](../02-deep-reasoning/readme.md) gives one step of a plan a slower, more careful model.
