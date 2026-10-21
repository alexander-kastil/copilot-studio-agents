# Publish CS-HR Buddy to Teams and Microsoft Copilot

HR Buddy only helps when employees can reach it where they already work, and only the right employees: an HR agent that answers anyone with a link, or that keeps last week's behavior after a fix, causes more questions than it answers. The original HR Buddy runs in Teams and Microsoft Copilot with Microsoft sign-in, and its settings let other agents connect to it. In this demo you give CS-HR Buddy the same setup, test it in Teams, share it with a group, and push a change through with one publish.

What you practice here: preparing a Standard agent's sign-in and connection settings, publishing it to the Teams and Microsoft Copilot channel, controlling who can chat with it, and rolling out a change.

Duration: about 40 minutes.

## What you'll build

- CS-HR Buddy with **Authenticate with Microsoft** and **Let other agents connect to and use this one** turned on, matching HR Buddy's settings.
- A published CS-HR Buddy connected to the **Teams and Microsoft Copilot** channel and installed for yourself.
- A share that lets a security group chat with the agent, and the agent listed for them in the **Built with Power Platform** section of the Teams app store.
- A republished change that reaches Teams after `start over`.

## Prerequisites

- CS-HR Buddy with the Collect Employee Data and Collect Employee rewards topics from [Identify an Employee Once and Reuse It Across HR Topics](../03-topics/demo-hr-buddy-employee-topics.md), opened in the classic experience (**Home**, the three dots (**...**) at the bottom of the side bar, **Open classic experience**).
- The reference definition of the original agent: [src/cs-schema/agents/HR Buddy](../../../src/cs-schema/agents/HR%20Buddy/). Its `settings.mcs.yml` lists the `MsTeams` and `Microsoft365Copilot` channels, `authenticationMode: Integrated` and `isAgentConnectable: true`, which the first three exercises reproduce.
- Power Platform apps allowed in Teams for your tenant, and a security group for the pilot users, for example `<your HR pilot group>`.

## Exercise 1: Set sign-in and connectivity before the first publish

The **Teams and Microsoft Copilot** channel accepts only **Authenticate with Microsoft**, and authentication changes take effect only after a publish, so you settle this first. With that option, users are always signed in, which is what lets you decide later who may chat with the agent.

1. Select **Settings**, then **Security**, then **Authentication**.
2. Select **Authenticate with Microsoft** if it isn't selected, and select **Save**.
3. Back in **Settings**, turn on **Let other agents connect to and use this one** if it isn't already on, and save.

Expected: **Authentication** shows **Authenticate with Microsoft**, the setting that HR Buddy's `authenticationMode: Integrated` records. The connect setting is on, so a parent agent can add CS-HR Buddy as a connected agent, the way the multi-agent demo connects the travel specialists.

> **Note:** **Require users to sign in** stays on and can't be turned off with **Authenticate with Microsoft**; the option only matters for manual authentication.

## Exercise 2: Publish and connect the Teams and Microsoft Copilot channel

Publishing copies the draft to the live version every channel uses, and the channel can't be connected before the first publish. One channel configuration serves both Teams and Microsoft Copilot, mirroring the two channel IDs in HR Buddy's settings.

1. Select **Publish** at the top right, select **Publish** again in the dialog, and wait for the confirmation.
2. Select **Channels**, then **Teams and Microsoft Copilot**.
3. Under **Turn on Microsoft 365**, keep **Make agent available in Microsoft Copilot** selected, then select **Add channel**.
4. Select **See agent in Teams**, then **Add** in the Teams dialog.

Expected: the publish confirmation shows the date and time of this version, the channel panel shows the channel as added, and CS-HR Buddy appears in the agent list on the left in Teams.

## Exercise 3: Test the published agent in Teams and Microsoft Copilot

The test panel runs the draft; Teams runs what you published. Running the reward request here proves that both topics and the global variable work in the published version.

1. In the Teams chat with CS-HR Buddy, send the message below, answer the four employee questions, and pick a reward.

```text
claim my employee reward
```

2. Open Microsoft Copilot, enter **@**, select CS-HR Buddy from the list, and send the message below.

```text
add employee information
```

Expected: in Teams, the agent asks for last name, first name, department and cost center, confirms the 25 days of paid leave, then asks "Please choose your reward:" and confirms the chosen reward. In Microsoft Copilot, the same employee questions start.

> **Tip:** Teams runs the **Conversation Start** topic only once per user, the first time they add the agent, so a changed greeting doesn't show for existing Teams users.

## Exercise 4: Let the pilot group chat with the agent

Installing the agent doesn't give anyone permission to use it: with **Authenticate with Microsoft**, sharing decides who can chat. Listing it for shared users in the Teams app store then lets the pilot group find it without an admin approval.

1. On the top menu bar, select the three dots (**...**), then **Share**.
2. Enter `<your HR pilot group>`, review its permission, and select **Share**.
3. In **Channels**, open **Teams and Microsoft Copilot** and select **Availability options**.
4. Select **Show to my teammates and shared users**, review who has access, confirm that **Show in Built By Your Colleagues** is selected, and select **Update**.

Expected: the sharing screen lists the pilot group as able to use the agent, and a green **Added to Teams** label appears under **Show to my teammates and shared users**. Members of the group find CS-HR Buddy in the **Built with Power Platform** section of the Teams app store.

## Exercise 5: Push a change through with one publish

Every change reaches users only through **Publish**, and one publish updates the channel for Teams and Microsoft Copilot at once. A running Teams conversation keeps the old version until a new session starts, which `start over` forces.

1. Go to **Topics**, open Collect Employee Data, and replace the text of the **Message** node with the text below, inserting the variables with **{x}** as before.

```text
Hi {Topic.FirstName} {Topic.LastName}. You have 25 days of paid leave left. Ask me to collect your employee reward next.
```

2. Select **Save**, then **Publish**, and confirm.
3. In the Teams chat with CS-HR Buddy, send the reset command, then the request below, and answer the four questions.

```text
start over
```

```text
add employee information
```

Expected: after `start over`, the confirmation ends with "Ask me to collect your employee reward next." Because **Start Over** also clears global variables such as `Global.EmployeeIdentified`, a reward request right after it detours through the employee questions again.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| The **Teams and Microsoft Copilot** channel is blocked | The agent uses an authentication option other than **Authenticate with Microsoft** | Switch back in **Settings**, **Security**, **Authentication**, then publish again |
| A pilot user can open the agent in Teams but can't chat with it | The agent isn't shared with that user or their group | Share it with the group from **Share**, then retest with that account |
| Teams still shows the old message after publishing | The conversation is still in the old session | Type `start over`, or wait for a new session |
| CS-HR Buddy doesn't appear in **Built with Power Platform** | Teams caches the app list, or the share exceeds the tenant's discovery limit | Sign out and back in, or refresh the Teams web app; ask the admin about the discovery policy |

## Summary

You took CS-HR Buddy live with the same sign-in, channels and connect setting as HR Buddy. You can now:

- choose the authentication that the Teams and Microsoft Copilot channel requires, before the first publish
- publish a Standard agent, connect the channel and install it for yourself
- share an agent for chat with a group and list it in the Teams app store without admin approval
- roll out a change with one publish and force the new version with `start over`

Next, [Using Advanced Channels: WhatsApp, Web & Direct Line](../../07-cs-maintaining/04-advanced-channels/readme.md) takes agents beyond Teams and Microsoft Copilot.
