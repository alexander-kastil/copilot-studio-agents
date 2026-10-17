# Building Apps in Copilot Studio

Copilot Studio can turn a plain-language description into a working business app. Apps sit beside agents and workflows in the new experience, which Copilot Studio now calls the GitHub Copilot harness. This topic explains when an app is the right build, how the describe, draft, and refine loop works, and how data, publishing, and sharing differ.

| Section | Description |
| --- | --- |
| [What an app is](#what-an-app-is) | The parts of an app and what the maker sees and controls |
| [Choosing an app, a workflow, or an agent](#choosing-an-app-a-workflow-or-an-agent) | How to match the build to the shape of the work |
| [The describe, draft, and refine loop](#the-describe-draft-and-refine-loop) | How a conversation becomes a working app |
| [Data and permissions](#data-and-permissions) | Where app records live and who can reach them |
| [Publish and share](#publish-and-share) | Why publishing and sharing are two separate actions |
| [Runtime, administration, and credits](#runtime-administration-and-credits) | Where apps run, what admins control, and what they cost |
| [Preview status](#preview-status) | What is still changing and how to treat the output |
| [Hands-On Demo](#hands-on-demo) | The presenter-led build |
| [Hands-On Lab](#hands-on-lab) | The learner-led build on a real data source |
| [Key Topics covered in this module](#key-topics-covered-in-this-module) | Microsoft Learn pages behind this topic |

## What an app is

An app in Copilot Studio is an interactive web experience that a maker describes in plain language. Copilot Studio generates the data model, the logic, and the user interface, then shows the app in a live preview beside the conversation. Microsoft names the common uses as tracking work or inventory, collecting information, managing requests, and reviewing business data.

The maker can open the code behind the app, but the code view is read-only. The maker reads and checks the code there, and makes every change in the conversation.

## Choosing an app, a workflow, or an agent

The right build depends on the shape of the work. Ask who touches the work and whether that person needs a screen to see and update records or a conversation to get answers.

| Build this | When the work is | Example |
| --- | --- | --- |
| App | A person needs a screen to enter, find, or review records | A tasting request tracker that sales reps filter by status |
| Workflow | A fixed sequence of steps runs without a screen | Send a confirmation email when a request is marked Completed |
| Agent | People ask questions, and the answer depends on context and exceptions | An assistant that answers questions about tasting policy |

Microsoft describes the three as complementary. Apps provide the interface, workflows run repeatable steps, and agents handle questions, exceptions, and adaptation. A single business process often uses all three, so a sales follow-up might pair a tracker app, a confirmation workflow, and a pricing agent.

## The describe, draft, and refine loop

App creation is a conversation that builds toward a working app. Each pass through the loop moves the app closer to the version you want.

1. Describe the problem. Name the outcome, the people who use the app, the data, and the actions. Copilot Studio might ask follow-up questions before it starts building.
2. Review the draft. The app preview appears, and the chat moves to the left pane. Test the main scenario in the preview.
3. Refine by conversation. Describe one change, such as adding a filter or changing a field. You can also attach a file, add a screenshot, or annotate the canvas to point at the part you want changed.
4. Repeat until the main scenarios work, then publish.

Each change updates the data model, the logic, and the interface together. Keep requests small and review the preview after each one, because a large request is harder to check when something goes wrong. Microsoft recommends the same approach for complex apps: break the requirements into smaller changes.

The conversation has five areas you use during the loop:

| Area | What you do there |
| --- | --- |
| Conversation area | Answer questions, request changes, and attach files for context |
| Metadata and settings menu | Open the **Data** and **Connections** views for the app |
| Interactive app preview | Test features, behavior, and connected data |
| Code view | Read the generated files; the view is read-only |
| Play, share, and publish | Run the app, give others access, and release the latest version |

## Data and permissions

Every app needs data, and Copilot Studio offers three ways to supply it. Each one trades setup effort against how far the records can travel.

| Approach | Use it when | Limit to know |
| --- | --- | --- |
| Sample data | You are still designing the app | Changes can reset when the app reloads or when Copilot Studio regenerates part of it |
| Browser-local data | One person needs to keep information in one browser | Not shared with other users or other devices |
| Organizational data | Records must be shared, managed centrally, or reused | Needs a connection and permission on the source |

Organizational data comes from a SharePoint list, an existing Dataverse table, or another tabular source such as an Excel table or SQL, when the environment allows it. SharePoint lists suit straightforward, list-shaped team data such as trackers and requests. Dataverse suits structured business data that the organization already manages, and Microsoft notes that creating new Dataverse tables might not be supported in every preview release.

Attaching a file gives the agent context for building the app, but the attachment creates no live link to the data. Only a connected Excel table reads current workbook data, and that table must be defined in the workbook.

### Sharing the app is not sharing the data

Apps use the signed-in user's identity to reach connected data. Three separate decisions control who can use an app and what it shows them.

| Decision | Who controls it | Question it answers |
| --- | --- | --- |
| Share the app | The maker, within environment policy | Who can open and use the app? |
| Access the data | The owner of the SharePoint site or Dataverse table | Who can read or change the records? |
| Consent to a connection | Each user, at first use | Has this person allowed the app to act on their account? |

Microsoft's rule is direct: sharing an app doesn't give people access to the data it uses. Test with an account that resembles the intended users before you publish, and confirm that each user can reach the underlying list or table.

## Publish and share

Publishing and sharing are two actions with two jobs. Publishing makes the latest tested version available to the people the app is shared with. Sharing grants people or groups permission to open and use the app.

| Action | What it does | What it does not do |
| --- | --- | --- |
| Publish | Makes the latest version available to the people you share with | Choose recipients or give anyone edit rights |
| Share | Grants people, groups, or an allowed link permission to open and use the app | Let anyone edit the design, or grant access to connected data |

Changes made after publishing stay hidden from app users until you publish again. Your environment and administrator policies decide which share methods appear, and a blocked method is hidden or explained in the product.

## Runtime, administration, and credits

Apps run on Microsoft-hosted infrastructure. Microsoft's announcement describes Copilot Managed Runtime as providing Microsoft-operated hosting, identity, governed data access, and lifecycle management. The same runtime adds Git-backed versioning and central visibility across apps built in Copilot Studio, Copilot Cowork, and Copilot Code.

Administrators can turn app creation off, although it is on by default. They receive app inventory and policy information for the apps in their organization. Makers never choose an environment, because Copilot Studio routes app creation to the maker's personal environment and the app follows the organization's data and sharing policies.

Building, previewing, and testing an app consume Copilot Credits. Billing starts as soon as you start building, which differs from the standard harness, where billing starts after publishing. The **Monitor** page shows the credits an agent uses, and administrators allocate credits to environments in the Power Platform admin center.

## Preview status

Apps are in public preview, and Microsoft is still rolling them out. Your environment might not show the App tile yet, and available features vary by tenant, environment, license, and administrator setting. Treat the output as a starting point, because generated layouts, calculations, and actions can be incomplete or incorrect.

Microsoft's guidance is to use the normal design, security, testing, and release process for complex, regulated, or business-critical work. Preview features can change before general availability, so check the Learn pages again before you teach a production rollout.

## Hands-On Demo

- [Build an App from a Description](./demo-06-build-an-app.md): describe a tasting request tracker, refine it twice, read the code view, then publish and share it.

## Hands-On Lab

- [Build and Share a Business App](../../../../labs/03-copilot-studio/04-ui-update/07-apps/lab-01-build-an-app.md): connect an app to a SharePoint list, publish it, share it with a classmate, and confirm that data access is a separate permission.

## Key Topics covered in this module

[Apps overview (preview)](https://learn.microsoft.com/microsoft-copilot-studio/apps-experience/apps-overview)

[Create an app in Microsoft Copilot Studio (preview)](https://learn.microsoft.com/microsoft-copilot-studio/apps-experience/create-app)

[Manage data in your app (preview)](https://learn.microsoft.com/microsoft-copilot-studio/apps-experience/data-and-connections)

[Publish and share an app in Microsoft Copilot Studio (preview)](https://learn.microsoft.com/microsoft-copilot-studio/apps-experience/publish-share-app)

[FAQ for apps in Microsoft Copilot Studio (preview)](https://learn.microsoft.com/microsoft-copilot-studio/faq-apps)

[Overview of usage-based billing](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview)

[New and improved: build apps, extend agents, and transform business processes in Microsoft Copilot Studio](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/new-and-improved-build-apps-extend-agents-and-transform-business-processes-in-microsoft-copilot-studio/)

[Managing apps built in Copilot Studio](https://techcommunity.microsoft.com/blog/copilot-studio-blog/managing-apps-built-in-copilot-studio/4556774)
