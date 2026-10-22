# Publish the Help Desk Agent to Teams and SharePoint

![One publish of the Grey Logistics IT Help Desk draft reaches Teams, Microsoft Copilot and an IT SharePoint site, where the new instruction ends answers with "Still stuck? Open a ticket in the service desk portal.", and the agent is then shown to teammates in Built with Power Platform.](./_images/publish-to-teams-and-copilot-overview.svg)

The help desk agent works in the test panel, but employees look for help in Teams, in Microsoft Copilot, and on the IT SharePoint site. Each of those needs the agent published, connected, and shared with the right people, and a change made next week has to reach all of them without a second setup. In this demo you take the agent live in three places and push one change through all of them.

What you practice here: publishing a Standard agent, connecting Microsoft channels, and rolling a change out to every connected channel.

Duration: about 40 minutes.

## What you'll build

- A published Grey Logistics IT Help Desk agent with the default **Authenticate with Microsoft** setting.
- The agent installed for yourself in Teams and available in Microsoft Copilot, with its suggested prompts on the welcome page.
- The agent deployed to an IT SharePoint site.
- A republished change that reaches Teams after a `start over`, and a teammate share through the **Built with Power Platform** section.

## Prerequisites

- A Standard agent such as Grey Logistics IT Help Desk from the earlier demos, with **Authenticate with Microsoft** under **Settings**, **Security**, **Authentication**, and suggested prompts configured on the **Overview** page.
- A SharePoint site where you have write access, for example an IT team site.
- Power Platform apps allowed in Teams for your tenant; an administrator manages this in the Teams admin center.

## Exercise 1: Publish the agent

Publishing copies the current draft to the live version that every channel uses. Until you publish, a channel has nothing to show, which is why Learn asks for one publish before any channel can be connected.

1. With the agent open, select **Publish** at the top right.
2. Select **Publish** again in the dialog and confirm.
3. Wait until the confirmation appears.

Expected: Copilot Studio confirms the publish and the publishing status shows the date and time of this version.

## Exercise 2: Connect Teams and Microsoft Copilot and install it for yourself

The **Teams and Microsoft Copilot** channel serves both places from one configuration. Installing the agent for yourself first lets you test the published version before anyone else sees it.

1. Select **Channels** on the top menu bar, then **Teams and Microsoft Copilot**.
2. Under **Turn on Microsoft 365**, keep **Make agent available in Microsoft Copilot** selected, then select **Add channel**.
3. Select **Open the agent in Teams**, then add the agent in the Teams dialog that opens.
4. In the Teams chat with the agent, send the first prompt.

```text
OneDrive shows a red X on some files. What does it mean?
```

5. Open Microsoft Copilot Chat, find Grey Logistics IT Help Desk in the agents list, and open it.

Expected: the agent answers in Teams with the same grounding and citations you saw in the test panel. In Copilot Chat, the agent's welcome page shows the suggested prompts you configured, which the test panel never displays.

> **Note:** Teams runs the **Conversation Start** topic only once per user, the first time they add the agent. If your welcome message changes later, existing Teams users don't see it again.

## Exercise 3: Deploy the agent to the IT SharePoint site

Employees who browse the IT site should find the help desk agent there without opening Teams. The SharePoint channel adds the agent to a site you can write to, with the same sign-in and the same knowledge permissions.

1. In **Channels**, select the **SharePoint** tile.
2. Select your IT site from the list or enter its name, then select **Deploy** and **Confirm**.
3. After the success message, select the site link in the **Deployment Status** area.
4. On the site, open the agent and send the prompt.

```text
How do I set up Windows Hello again after an update?
```

Expected: the configuration panel shows a successful deployment with a link to the site, and the agent answers on the SharePoint site with citations to the Windows support pages.

> **Tip:** Mark the agent as **Approved** in SharePoint when it should appear for every user of the site in the **Approved** section of the agent picker.

## Exercise 4: Republish a change and reach Teams at once

Every change goes through **Publish**, and one publish updates every connected channel. Running conversations keep the old version until a new session starts, so `start over` is the quickest way to prove the new version in Teams.

1. On the **Overview** page, edit the instructions, add the line below at the end, and select **Save**.

```text
- End every answer with: "Still stuck? Open a ticket in the service desk portal."
```

2. Select **Publish** and confirm.
3. In the Teams chat with the agent, type the reset command, then ask a question.

```text
start over
```

```text
Teams can't find my camera in meetings. How do I fix it?
```

4. Ask the same question on the SharePoint site.

Expected: after `start over`, the Teams answer ends with the new ticket sentence. The SharePoint answer ends with it too once a new session starts there, without any change to the SharePoint configuration.

## Exercise 5: Share the agent with your teammates

Showing the agent to shared users puts it in the **Built with Power Platform** section of the Teams app store, with no admin approval. It's the step between testing alone and submitting the agent to the whole organization.

1. Share the agent with the teammates who should use it, following [Share agents with other users](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots).
2. In **Channels**, open **Teams and Microsoft Copilot**, then select **Availability options**.
3. Select **Show to my teammates and shared users**, review who has access, confirm that **Show in Built By Your Colleagues** is selected, and select **Update**.

Expected: a green **Added to Teams** label appears under **Show to my teammates and shared users**, and shared teammates find the agent in the **Built with Power Platform** section of the Teams app store.

> **Note:** **Show to everyone in my org** submits the agent for admin approval. Do that only after the pilot, because a later change to the agent's details needs a new approval.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| A channel tile is disabled | A data policy or the authentication setting blocks it | Select the information icon on the tile and follow the reason it gives |
| Teams still shows the old behavior after publishing | The conversation is still in the old session | Type `start over`, or wait for a new session |
| The agent doesn't appear in **Built with Power Platform** | Teams caches the app list, or the share exceeds the tenant's discovery limit | Sign out and back in, or refresh the Teams web app; ask the admin about the discovery policy |
| **Deploy** fails for the SharePoint site | You lack write access to the site | Pick a site you own or ask its owner for access |

## Summary

You published the help desk agent and reached employees in Teams, Microsoft Copilot, and SharePoint from one draft. You can now:

- publish a Standard agent and explain when users get the new version
- connect the Teams and Microsoft Copilot channel and test it for yourself first
- deploy an agent to a SharePoint site
- share an agent with teammates and know when an admin approval is needed

The labs continue with the HR agent; advanced channels follow in [Using Advanced Channels: WhatsApp, Web & Direct Line](../../07-cs-maintaining/04-advanced-channels/readme.md).
