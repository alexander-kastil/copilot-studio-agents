# Choose the Harness in Copilot Studio

![The presenter walks four exercises in order: the Home create cards and their harness badges, the Powered by column in the Agents list, the CS- and GH-Grey Logistics IT Help Desk compared by topic, skill and model, and four help desk requests each matched to a harness, ending with no agent created and no Copilot Credits used.](./_images/choose-the-harness-overview.svg)

Duration: about 10 minutes.

A help desk team asks for "an agent" and gets the wrong one: a scripted bot for work that needs judgement, or a planner that spends Copilot Credits on a form that never changes. Fixing that means building the agent again, because an agent can't move to another harness. In this demo the presenter shows where Copilot Studio asks for the harness, reads it off agents that already exist, and turns four Grey Logistics help desk requests into a harness decision with a control line for each. Nothing is created and no credits are spent.

## What you'll build

- A map of where each harness starts in Copilot Studio.
- A side-by-side reading of one help desk job built on the standard harness and on the GitHub Copilot harness.
- A harness decision record for four Grey Logistics help desk requests: the harness, the deciding answer, and what the agent may do alone, confirm first or hand to a person.

## Prerequisites

- Maker access to a Copilot Studio environment that holds at least one Standard agent and one GitHub Copilot agent. In the class environment, **CS-Grey Logistics IT Help Desk** and **GH-Grey Logistics IT Help Desk** do the same job on the two harnesses.
- Nothing to install. The demo creates no agent and sends no message to a GitHub Copilot agent, so it uses no Copilot Credits.

## Exercise 1: Find where each harness starts

The harness is picked with the first click on a create card, before the agent has a name. Reading the cards first shows which harnesses this environment offers and which of them bill Copilot Credits.

1. Open [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) and select **Home**.
2. Read the cards under **Optimize your business processes**.

Expected: the label **Uses Copilot Credits** beside the heading, and three cards, **Agent**, **Workflow** and **App (preview)**, each with the **GitHub Copilot** badge.

3. Select **Other ways to build**.

Expected: **Customer Assist Agent** with the **Customer conversation** badge, then under **Build with standard orchestration** an **Agent** and **Agent flows**, both with the **Standard** badge. Select the back arrow without opening a card.

> **Note:** The Copilot chat harness has no card here. Learn creates those agents from the separate **Microsoft Copilot** page in Copilot Studio, and Agent Builder in [Copilot Chat & Productivity Agents](../05-chat-productivity/readme.md) builds the same kind of agent.

## Exercise 2: Read the harness of an existing agent

An agent keeps its harness for life, so the Agents list records it for every agent. This is where a team checks what it already owns before it asks for something new.

1. Select **Agents** in the side pane.
2. Read the **Powered by** column for a CS- agent and a GH- agent.

Expected: **Standard** for the CS- agents and **GitHub Copilot** for the GH- agents, with these descriptions:

```text
This agent uses standard orchestration. Included with your Microsoft 365 Copilot license at no additional credit cost.
This agent uses GitHub Copilot. Copilot Credits are used as you create and edit it.
```

3. Select the arrow next to **New agent** (**More create options**).

Expected: **Agent** with the **GitHub Copilot** badge under **Optimize your business processes**, and **Customer Assist Agent** (**Customer conversation**) and **Agent** (**Standard**) under **Other ways to build**. A credits icon sits next to the two that bill Copilot Credits. Press **Esc** to close the menu.

## Exercise 3: Compare one job on two harnesses

Both help desk agents troubleshoot VPN problems, look up a client's portfolio and register inventory items. Opening them side by side shows what the harness changes for the maker: the screens, the model and the way a request is routed.

1. Open **CS-Grey Logistics IT Help Desk**.

Expected: the tabs **Overview**, **Knowledge**, **Tools**, **Agents**, **Topics**, **Activity**, **Evaluation**, **Monitor** and **Channels** across the top, the model picker set to **GPT Chat Latest** on **Overview**, and the test pane on the right. In **Instructions**, the VPN rule runs the topic **VPN won't connect**.

2. Go back to **Agents** and open **GH-Grey Logistics IT Help Desk**. Stay on **Build**.

Expected: the tabs **Build**, **Preview**, **Evaluate** and **Monitor**, the **Instructions** in the middle, and a right panel with **Model** (**Claude Sonnet 4.6**), **Channels**, **Skills** (**vpn-wont-connect**), **Tools**, **Knowledge**, **Connected agents** and a **Memory** switch. The same VPN rule here uses the skill `vpn-wont-connect`: the standard harness routes to a topic the maker drew, the GitHub Copilot harness to a skill the agent applies as it plans.

> **Warning:** Don't open **Preview** on the GitHub Copilot agent during this demo. Every message there bills Copilot Credits.

## Exercise 4: Decide the harness for four requests

A decision is only useful when it is written down before anyone builds. Walk each request through the five questions in [Choose Before You Build](./readme.md#choose-before-you-build), then set the control line: what the agent may do alone (Proceed), what it confirms with the user first (Confirm), and what it hands to a person (Escalate).

1. Show the four requests the Grey Logistics help desk collected:

```text
1. "My VPN drops every morning. Walk me through the fix." The fix is the same five checks every time.
2. "Compare this month's inventory export with last month's and tell me which items went missing." Both exports are Excel files.
3. "What does our travel policy say about first-class rail tickets?" Employees ask this in Copilot Chat; the policy is on the HR SharePoint site.
4. "Where is my shipment?" Customers call about it and want a person when a parcel is lost.
```

2. For each request, ask the room for the first question that gets a clear Yes, then fill the record.

Expected: a decision record like this one.

| Request | Harness | Deciding answer | Proceed | Confirm | Escalate |
|---|---|---|---|---|---|
| VPN drops every morning | Standard | The same checks every time, in a maker's order | Show the next check | Open a help desk ticket | Reset the user's network account |
| Missing inventory items | GitHub Copilot | Two files, and the next step depends on what the comparison finds | Read both exports | Save the comparison workbook to the team site | Write off the missing stock |
| First-class rail policy | Copilot chat | Employees, inside Copilot Chat, from SharePoint they may open | Answer with a link to the policy | | Approve an exception to the policy |
| Where is my shipment | Customer Conversation | Customers by phone, with a person behind the agent | Read the tracking status | Change the delivery address | Hand a lost parcel to a dispatcher |

The control line doesn't replace platform security: sign-in, permissions and data policies still decide what the agent can reach.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| **Home** shows no **GitHub Copilot** cards | The environment doesn't offer GitHub Copilot agents | Switch to an environment whose **New agent** menu offers **Agent** with the **GitHub Copilot** badge |
| An agent opens with a layout you didn't expect | It runs on the other harness: **Topics** among the tabs means Standard, **Build**, **Preview**, **Evaluate** and **Monitor** mean GitHub Copilot | Read **Powered by** in the Agents list before you open the agent |
| Credits appear for the demo agent afterwards | A message was sent in **Preview** of the GitHub Copilot agent | Read the GitHub Copilot agent on **Build** only |
| No card for the Copilot chat harness | Those agents aren't created from the **New agent** menu | Use the **Microsoft Copilot** page in Copilot Studio, or Agent Builder in Microsoft 365 Copilot |

## Summary

You mapped where Copilot Studio asks for the harness and turned four requests into a written harness decision. You can now:

- find the harness of any agent in the **Powered by** column before you change or rebuild it
- tell a Standard agent from a GitHub Copilot agent by its tabs and its routing
- pick a harness with the five questions and set a Proceed, Confirm and Escalate line for its actions

[Where to Build and What It Costs](../04-where-to-build/readme.md) shows how each choice bills.
