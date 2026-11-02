---
presents: demo-publish-to-teams-and-copilot.md
budget: 4 min
beats: 4
---

# Present: Publish the Help Desk Agent to Teams and SharePoint

**Guide:** [Publish the Help Desk Agent to Teams and SharePoint](demo-publish-to-teams-and-copilot.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) and [Teams](https://teams.microsoft.com) · have a SharePoint site you can write to

**Agent:** Grey Logistics IT Help Desk with the knowledge and suggested prompts from [Ground the Help Desk Agent in Public Content](../02-knowledge/demo-ground-with-knowledge.md)

**Initial prompt** (attach nothing; sent in Teams in Exercise 2, after the publish):

```text
OneDrive shows a red X on some files. What does it mean?
```

### Beat 1: One publish, Teams and Copilot from one channel (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Publish** · **Channels** > **Teams and Microsoft Copilot** > **Add channel** > **Open the agent in Teams** · [Teams](https://teams.microsoft.com) · [Exercise 1](demo-publish-to-teams-and-copilot.md#exercise-1-publish-the-agent) · [Exercise 2](demo-publish-to-teams-and-copilot.md#exercise-2-connect-teams-and-microsoft-copilot-and-install-it-for-yourself)
**What is there:** the publishing status with date and time; the Teams answer with the same citations as the test panel; the Copilot Chat welcome page shows the suggested prompts.

### Beat 2: The same agent on the IT SharePoint site (1 min)

**Navigate:** **Channels** > **SharePoint** > **Deploy** > **Confirm** · **Deployment Status** > site link · [Exercise 3](demo-publish-to-teams-and-copilot.md#exercise-3-deploy-the-agent-to-the-it-sharepoint-site)
**What is there:** a successful deployment with a link to the site; the answer on the site cites the Windows support pages.

### Beat 3: One publish updates every channel (1 min)

**Navigate:** **Overview** > **Instructions** > **Edit** · **Publish** · Teams chat > `start over` · [Exercise 4](demo-publish-to-teams-and-copilot.md#exercise-4-republish-a-change-and-reach-teams-at-once)
**What is there:** the Teams answer ends with "Still stuck? Open a ticket in the service desk portal."; the SharePoint answer too once a new session starts.

### Beat 4: Teammates find it without admin approval (1 min)

**Navigate:** [Share agents with other users](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots) · **Channels** > **Teams and Microsoft Copilot** > **Availability options** > **Show to my teammates and shared users** > **Update** · [Exercise 5](demo-publish-to-teams-and-copilot.md#exercise-5-share-the-agent-with-your-teammates)
**What is there:** a green **Added to Teams** label under **Show to my teammates and shared users**; shared teammates find the agent under **Built with Power Platform**.
