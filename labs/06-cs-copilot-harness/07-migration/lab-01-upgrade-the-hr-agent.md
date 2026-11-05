# Upgrade the HR Agent and Rebuild Its Topics

![The Standard HR Agent from module 03, with its instructions, two knowledge sources and three topics, is upgraded to HR Agent (Upgraded) on the GitHub Copilot harness: the knowledge is added again, the role topic becomes instructions plus a Start hook that greets the signed-in user, the candidate topic becomes the Register Candidate workflow tool that sends an email, and the Adaptive Card topic stays on the Standard agent.](./_images/lab-01-upgrade-the-hr-agent-overview.svg)

The Standard HR Agent of module 03 answers policy and job questions, asks people for their role, and registers candidates through fixed topics. In this lab you move it to the GitHub Copilot harness the way Microsoft's guidance describes: list what each part is for, upgrade a copy, rebuild what the upgrade skipped, and prove the same journeys on both agents. You end with an upgraded HR agent that registers a candidate through a workflow tool and greets every user through a hook.

What you practice here: migrating a Standard agent journey by journey, deciding per topic between instructions, a workflow tool and a hook.

Duration: about 40 minutes.

## What you'll build

- A purpose map of the HR Agent with a decision and an upgrade result per component.
- **HR Agent (Upgraded)**, a copy of your agent on the GitHub Copilot harness, with its knowledge added again.
- A `Register Candidate` workflow tool that takes four inputs, emails the candidate summary to you, and confirms back to the agent.
- A **Start (pre-loop)** hook whose workflow gives the agent the signed-in user's name at the start of every session.
- A side-by-side run of four journeys on the Standard and the upgraded agent.

## Prerequisites

- The Standard HR Agent of the module 03 labs, starting with [Create Your First Copilot Studio Agent](../../03-cs-basics/01-standard-agents/lab-01-create-your-first-agent.md), or built in [Set up the Standard HR Agent](#set-up-the-standard-hr-agent): its instructions, the Microsoft Careers site and the SharePoint HR Documents knowledge, and the topics from [Define Topics, Entities, and Variables](../../03-cs-basics/03-topics/lab-01-build-topics.md) and [Collect Input with Adaptive Cards](../../03-cs-basics/05-adaptive-cards/lab-01-collect-input-with-adaptive-cards.md).
- A Copilot Studio environment where the **New agent** menu offers **Agent** with the **GitHub Copilot** badge, with the maker role and Copilot Credits available: the upgrade, workflow runs, hooks and Preview turns consume them.
- Your own environment: select the environment name at the bottom of the left navigation (**Switch environment**) and check that **Current environment** shows the environment named after your account, for example `copilot-studio-01` (Sandbox) for `copilot-studio-01@mst.fastlane.net`. Work through the whole lab in it, never in the shared Default environment.
- An Office 365 Outlook connection for your own account, so the workflow can send you the candidate summary.
- The demo [Rebuild a Topic and Its Agent Flow as a Workflow](../../../demos/06-cs-copilot-harness/07-migration/demo-07-rebuild-a-topic-as-a-workflow.md) watched or worked, so the workflow designer is familiar.

## Set up the Standard HR Agent

This lab migrates the Standard HR Agent of module 03: its instructions, two knowledge sources, three topics and its Teams and Microsoft 365 Copilot channel. If you built it in the module 03 labs, open it from **Agents** and skip this section. Otherwise build it now; the three topics come as YAML that you paste into each topic's code editor.

1. Go to [Copilot Studio](https://copilotstudio.microsoft.com), on **Home** select **Other ways to build**, then, under **Build with standard orchestration**, select **Agent** with the **Standard** badge.
2. In the **Name your agent** dialog, enter `HR Agent` and select **Create**.
3. Wait until the agent has finished setting up (the **Edit** commands stay disabled for about a minute). On the **Overview** tab, select **Edit** in the **Details** section, paste the following text into **Description** and select **Save**.

```txt
You help employees to find information about HR related policies
```

4. Select **Edit** in the **Instructions** section, paste the following instructions and select **Save**.

```txt
- Provide employees with clear, accurate information about HR policies and procedures.
- Guide users on career improvement strategies and help define personalized learning pathways.
- Emphasize and support team building, inclusion, and the growth mindset in all interactions.
- Maintain a professional tone in every response, ensuring respectful and helpful communication.
- Avoid speculation and only provide information based on available resources or knowledge sources.
- Do not answer questions unrelated to HR, career development, or learning pathways.
- Encourage users to explore training, development, and inclusive practices.
- Respond promptly and clearly to all user queries.
```

5. In the **Knowledge** section, select **+ Add knowledge** > **Public websites**, enter `https://careers.microsoft.com/` and select **Add**. Name the site `Microsoft Careers site`, paste the following description and select **Add to agent**.

```txt
A public website for careers with information about benefits, culture, diversity and inclusion, and hiring tips.
```

6. Download the [HR documents](https://download-directory.github.io/?url=https://github.com/alexander-kastil/copilot-studio-agents/tree/master/src/assets/hr-documents&filename=hr-documents), unzip them and upload them to the **Documents** library of a SharePoint Teams site in your tenant. Copy the URL of the site.
7. In the **Knowledge** section, select **+ Add knowledge** > **SharePoint**, enter the site URL and select **Add**. Name the source `HR Documents`, paste the following description and select **Add to agent**.

```txt
Provides documents about policies, procedures, and rules related to the HR department.
```

8. Create the three topics below, one at a time: on the **Topics** tab select **+ Add a topic** > **From blank**, select the topic name at the top left (it reads **Untitled**), select all of it and enter the name given below, open **...** at the top right and select **Open code editor**, replace all of the text with the topic's YAML, and select **Save**.

Topic `Collect user's role`:

```yaml
kind: AdaptiveDialog
modelDescription: |-
  This topic can handle queries like these: collect user's role and provide feedback,
  give me a feedback based on my role, what's your feedback for my role?
beginDialog:
  kind: OnRecognizedIntent
  id: main
  intent: {}
  actions:
    - kind: Question
      id: question_role01
      variable: Topic.UserRole
      prompt: What is your role?
      entity:
        kind: EmbeddedEntity
        definition:
          kind: ClosedListEntity
          optionSetName: UserRoleOptions
          items:
            - id: Candidate
              displayName: Candidate

            - id: Employee
              displayName: Employee

            - id: HRStaff
              displayName: HR staff member

    - kind: ConditionGroup
      id: conditionGroup_role02
      conditions:
        - id: conditionItem_role03
          condition: =Topic.UserRole = UserRoleOptions.Candidate
          actions:
            - kind: SendActivity
              id: sendMessage_role04
              activity: You are a new candidate, as such you can submit your resume for evaluation.

        - id: conditionItem_role05
          condition: =Topic.UserRole = UserRoleOptions.Employee
          actions:
            - kind: SendActivity
              id: sendMessage_role06
              activity: |-
                As an employee, you can ask me about how to improve your career or about
                how to learn more about your growth mindset.

        - id: conditionItem_role07
          condition: =Topic.UserRole = UserRoleOptions.HRStaff
          actions:
            - kind: SendActivity
              id: sendMessage_role08
              activity: As an HR staff member, you can manage the list of candidates and all the hiring procedures.

    - kind: EndDialog
      id: endDialog_role09

inputType: {}
outputType: {}
```

Topic `Register a new candidate`:

```yaml
kind: AdaptiveDialog
modelDescription: |-
  This topic helps to collect information about a new candidate to process. Trigger sentences can be:
  register a new candidate, create a new candidate, add a new candidate.
beginDialog:
  kind: OnRecognizedIntent
  id: main
  intent: {}
  actions:
    - kind: Question
      id: question_cand01
      variable: Topic.FirstName
      prompt: What is the candidate's first name?
      entity: StringPrebuiltEntity

    - kind: Question
      id: question_cand02
      variable: Topic.LastName
      prompt: What is the candidate's last name?
      entity: StringPrebuiltEntity

    - kind: Question
      id: question_cand03
      variable: Topic.Email
      prompt: What is the candidate's e-mail?
      entity: EmailPrebuiltEntity

    - kind: Question
      id: question_cand04
      variable: Topic.CurrentRole
      prompt: What is the candidate's current role?
      entity: StringPrebuiltEntity

    - kind: SendActivity
      id: sendMessage_cand05
      activity: "Candidate: {Topic.FirstName} {Topic.LastName}, e-mail {Topic.Email}, current role {Topic.CurrentRole}."

    - kind: Question
      id: question_cand06
      variable: Topic.Confirmation
      prompt: Is it ok for you to insert this new candidate?
      entity:
        kind: EmbeddedEntity
        definition:
          kind: ClosedListEntity
          optionSetName: ConfirmationOptions
          items:
            - id: "Yes"
              displayName: "Yes"

            - id: "No"
              displayName: "No"

    - kind: ConditionGroup
      id: conditionGroup_cand07
      conditions:
        - id: conditionItem_cand08
          condition: =Topic.Confirmation = ConfirmationOptions.Yes
          actions:
            - kind: SendActivity
              id: sendMessage_cand09
              activity: 👍

        - id: conditionItem_cand10
          condition: =Topic.Confirmation = ConfirmationOptions.No
          actions:
            - kind: SendActivity
              id: sendMessage_cand11
              activity: 👎

    - kind: EndDialog
      id: endDialog_cand12

inputType: {}
outputType: {}
```

Topic `Register new candidate with adaptive cards`:

```yaml
kind: AdaptiveDialog
modelDescription: |-
  This topic helps to collect information about a new candidate to process. Trigger sentences can be:
  register a new candidate, create a new candidate, add a new candidate.
beginDialog:
  kind: OnRecognizedIntent
  id: main
  intent: {}
  actions:
    - kind: AdaptiveCardPrompt
      id: adaptiveCardPrompt_card01
      card: |-
        {
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "TextBlock",
                    "size": "Medium",
                    "weight": "Bolder",
                    "text": "New HR Candidate Information"
                },
                {
                    "type": "Input.Text",
                    "id": "firstname",
                    "placeholder": "First Name"
                },
                {
                    "type": "Input.Text",
                    "id": "lastname",
                    "placeholder": "Last Name"
                },
                {
                    "type": "Input.Text",
                    "id": "email",
                    "placeholder": "Email"
                },
                {
                    "type": "Input.Text",
                    "id": "current_role",
                    "placeholder": "Current Role"
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "spoken_languages",
                    "placeholder": "Spoken Languages",
                    "isMultiSelect": true,
                    "choices": [
                        {
                            "title": "English",
                            "value": "English"
                        },
                        {
                            "title": "French",
                            "value": "French"
                        },
                        {
                            "title": "German",
                            "value": "German"
                        },
                        {
                            "title": "Italian",
                            "value": "Italian"
                        },
                        {
                            "title": "Portuguese",
                            "value": "Portuguese"
                        },
                        {
                            "title": "Spanish",
                            "value": "Spanish"
                        }
                    ]
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "skills",
                    "placeholder": "Skills",
                    "isMultiSelect": true,
                    "choices": [
                        {
                            "title": "Computer Programming",
                            "value": "Computer Programming"
                        },
                        {
                            "title": "Project Management",
                            "value": "Project Management"
                        },
                        {
                            "title": "Team Lead",
                            "value": "Team Lead"
                        }
                    ]
                }
            ],
            "actions": [
                {
                    "type": "Action.Submit",
                    "title": "Submit"
                }
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.5"
        }
      output:
        binding:
          actionSubmitId: Topic.actionSubmitId
          current_role: Topic.current_role
          email: Topic.email
          firstname: Topic.firstname
          lastname: Topic.lastname
          skills: Topic.skills
          spoken_languages: Topic.spoken_languages

      outputType:
        properties:
          actionSubmitId: String
          current_role: String
          email: String
          firstname: String
          lastname: String
          skills:
            type:
              kind: Table
              properties:
                Value: String

          spoken_languages:
            type:
              kind: Table
              properties:
                Value: String

    - kind: SendActivity
      id: sendMessage_card02
      activity:
        attachments:
          - kind: AdaptiveCardTemplate
            cardContent: |-
              ={
                type: "AdaptiveCard",
                body: [
                  {
                    type: "TextBlock",
                    size: "Medium",
                    weight: "Bolder",
                    text: "Candidate Summary"
                  },
                  {
                    type: "FactSet",
                    facts: [
                      {
                        title: "First Name:",
                        value: Topic.firstname
                      },
                      {
                        title: "Last Name:",
                        value: Topic.lastname
                      },
                      {
                        title: "E-mail:",
                        value: Topic.email
                      },
                      {
                        title: "Current Role:",
                        value: Topic.current_role
                      },
                      {
                        title: "Spoken Languages:",
                        value: Text(Concat(Topic.spoken_languages, Value, ", "))
                      },
                      {
                        title: "Skills:",
                        value: Text(Concat(Topic.skills, Value, ", "))
                      }
                    ]
                  }
                ],
                '$schema': "http://adaptivecards.io/schemas/adaptive-card.json",
                version: "1.3"
              }

    - kind: EndDialog
      id: endDialog_card03

inputType: {}
outputType: {}
```

9. Select **Publish** in the upper right corner, then **Publish** in the dialog. Open **Channels**, select **Microsoft 365 and Microsoft Teams**, keep **Make agent available in Microsoft 365 Copilot** selected and select **Add channel**.

Expected: **Knowledge** lists **Microsoft Careers site** and **HR Documents**, both showing **Ready**; **Topics** lists the three custom topics; **Channels** shows **Microsoft 365 and Microsoft Teams** as added.

## Step 1: Map the HR Agent and record a baseline

Before anything moves, write down what each part of the HR Agent is for, and run the journeys the new agent must repeat. The map is your plan and, at the end, your receipt: the migration is done when every row has a home and the journeys pass on both agents.

1. Open the Standard HR Agent and check its **Overview**, **Knowledge** and **Topics** against the map below; add a row for anything else you built.
2. Copy the map into a text file named `hr-agent-migration.txt`.

```text
Component (Standard HR Agent)                      Purpose                          On the GitHub Copilot harness        Upgrade result
Instructions (eight bullets)                       Tone and scope                   Instructions
Knowledge: Microsoft Careers site                  Answer job questions             Knowledge, added again
Knowledge: SharePoint HR Documents                 Answer policy questions          Knowledge, added again
Topic: Collect user's role                         Tailor answers to the role       Instructions plus a Start hook
Topic: Register a new candidate                    Collect and confirm a candidate  Workflow tool Register Candidate
Topic: Register new candidate with adaptive cards  Collect a candidate on a card    Stays on the Standard agent
Channels: Teams and Microsoft 365 Copilot          Reach employees                  Published again
```

3. Open the Standard HR Agent's test pane and send each message below in a new conversation, noting in the file which topic or knowledge source answered.

```text
I'm a candidate. What should I know before I apply?
```

```text
Where can I find open jobs at Microsoft?
```

```text
What do our HR documents say about the onboarding of new employees?
```

```text
I want to register a new candidate.
```

Expected: `hr-agent-migration.txt` lists every component with a purpose and a destination, and the Adaptive Card topic is the one row without a rebuild, because Adaptive Cards have no documented equivalent on the GitHub Copilot harness. In the test pane, the orchestrator picks a topic or a knowledge source by its description, so note what actually answered: the first message runs **Collect user's role** or answers straight from HR Documents, the second and third answer from the Microsoft Careers site and HR Documents, and the fourth runs one of the two candidate topics, because both share the same description.

## Step 2: Upgrade the agent and add back what it skipped

The upgrade builds a copy on the GitHub Copilot harness, leaves your Standard agent as it is, and reports what was migrated, what requires attention and what was skipped. Knowledge sources are never part of the upgrade, so the job and policy journeys fail until you add them back.

1. On the Copilot Studio home page, type the request below into the input box, using your agent's exact name from the **Agents** list. The chat asks one question per knowledge source and per topic and offers to rebuild each as a skill; answer **I'll handle it myself** each time, because this lab rebuilds them by hand.

```text
upgrade my HR Agent
```

2. Read each item of the report, under **Carried over**, **Not copied automatically** and **Needs your attention**, and fill the **Upgrade result** column of `hr-agent-migration.txt`. **Needs your attention** marks authentication, tenant or runtime policy and gpt components as "Blocks adoption and publishing"; in the live run the agent still published.
3. Select the **Open** icon on the card named **HR Agent (Upgraded)**.
4. On the **Build** tab, select **+** next to **Knowledge** and add the public website `https://careers.microsoft.com/` with the name `Microsoft Careers site`.
5. Add the SharePoint site with the HR documents that the Standard HR Agent uses, with the name `HR Documents` and the description below, then select the **Save** icon.

```text
Provides documents about policies, procedures, and rules related to the HR department.
```

Expected: **HR Agent (Upgraded)** opens on the **Build** tab with your instructions, **Knowledge** lists **Microsoft Careers site** and **HR Documents**, and the Standard HR Agent is still listed unchanged on the **Agents** page. Every row of the map carries an upgrade result, and both knowledge rows read not copied automatically.

> **Note:** When the upgrade already built a skill or a workflow for a topic, compare it with your map, keep the one that matches and remove the other, so the agent has one way to do each job.

## Step 3: Rebuild the candidate topic as a workflow tool

The candidate topics collected four values, showed them back and asked for a yes before inserting. The workflow takes the four values as inputs and does the work; the agent collects them in conversation, and the yes or no question becomes one sentence in the instructions, next to the rule that replaces the role topic.

1. On the **Build** tab, select **+** next to **Tools**, then **+ Add** > **Workflow**.
2. The trigger **When an agent calls the flow** is already in place. Select it, then **+ Add an input** > **Text**, and add these four inputs with their descriptions.

```text
FirstName: The candidate's first name.
LastName: The candidate's last name.
Email: The candidate's e-mail address.
CurrentRole: The candidate's current job role.
```

3. Select the **+** between the trigger and **Respond to the agent**, search for **Office 365 Outlook**, and add **Send an email** with your own address in **To**, the subject `New candidate`, and the body below, inserting each input with the lightning icon at its label.

```text
New candidate: FirstName LastName, e-mail Email, current role CurrentRole. Registered by the HR agent.
```

4. Select **Respond to the agent**, then **+ Add an output** > **Text** named `Confirmation` with the value below, the inputs inserted at their labels.

```text
Registered FirstName LastName (Email) and sent the summary to HR.
```

5. Rename the workflow to `Register Candidate`, select the **Save** icon, then **Publish**.
6. Back on the agent, the published workflow is not listed under **Tools** yet: select **+** next to **Tools**, then **Add**, open the **Workflows** tab and add **Register Candidate**. Select the pencil in **Workflow details**, paste the description below, and select **Save**.

```text
Registers a new job candidate and emails the summary to HR. Use it when a member of HR staff wants to register a candidate, after you have the first name, last name, e-mail address and current role.
```

7. Open **Instructions**, add the paragraph below after the upgraded text, and select the **Save** icon.

```text
Every user is a candidate, an employee or a member of HR staff. If you don't know which, ask once before you answer an HR question. Candidates get information about applying and open jobs from the Microsoft Careers site; employees get answers about policies and procedures from HR Documents; HR staff can also register a new candidate with Register Candidate. Before you run Register Candidate, show the four values back to the user and run it only after they confirm.
```

Expected: the workflow canvas shows the trigger with four inputs, **Send an email** and **Respond to the agent** with `Confirmation`, and its status shows **Published**. **Tools** lists **Register Candidate** with its description, and the instructions name the three roles, both knowledge sources, the tool and the confirmation rule.

## Step 4: Add a Start hook that greets the signed-in user

A Conversation Start topic ran at the beginning of every Standard conversation. A **Start (pre-loop)** hook takes over that job: its workflow runs every time a session begins and returns `additionalContext`, background text the agent reads before the first message, so the greeting and the role question no longer depend on the agent deciding to ask.

1. On the top menu bar, select **…** > **Hooks** (marked **Preview**), then **Create**.
2. **Event type** already reads **Start (pre-loop)**. Replace the prefilled **Name** `On session start` with `Greet the signed-in user`, then select **New workflow**. The workflow designer opens and leaves the dialog, so the hook itself is not saved yet.
3. In the starter workflow, keep the field names. Select **Respond to the agent** and set `additionalContext` to the text below, inserting `userDisplayName` from the variable picker at its label.

```text
The user's name is userDisplayName. Greet them by first name in your first reply, and ask whether they are a candidate, an employee or a member of HR staff unless they have already said so.
```

4. Select the **Save** icon, then **Publish**. Back on the agent, select **…** > **Hooks** > **Create** again, set **Name** to `Greet the signed-in user`, pick the new workflow under **Workflow**, and select **Done**.
5. Select the **Save** icon on the agent, then **Publish** and **Publish agent**.

Expected: the **Hooks** dialog lists **Greet the signed-in user** with the event type **Start (pre-loop)**, and the agent is published with the hook, the tool and both knowledge sources.

> **Warning:** Renaming or removing the starter fields makes the workflow disappear from the hook's **Workflow** list. Keep `event`, `timestamp`, `metadata` and `additionalContext` as they are.

## Step 5: Run the four journeys and close the map

Repeat the baseline from Step 1 on the upgraded agent. Each journey should reach the same result through its new home, and the map records whether it did.

1. Open **Preview** with **Debug mode** on and start a new conversation for each message from Step 1.
2. For the fourth message, answer as a member of HR staff, give the candidate below, and confirm when the agent shows the values back.

```text
Ana Silva, ana.silva@greylogistics.com, current role Project Manager
```

3. Open your Outlook inbox.
4. In `hr-agent-migration.txt`, mark each row as done, stays Standard, or open, and note the Standard and the upgraded result of each journey side by side.

Expected: the first reply in each conversation greets you by first name, and the step list shows **Executed hook: SessionStart**, which is the hook's context at work. The candidate question gets applying advice, while the job, onboarding and registration questions may first get the role question and, once you answer it (for example `I'm an employee`), answer from **Microsoft Careers site** and **HR Documents** with citations. The fourth journey shows the four values back before the step list shows **Used tool** **Register Candidate** with the confirmation text in its output. An email with the subject `New candidate` and Ana Silva's details is in your inbox, and every row of the map except the Adaptive Card topic reads done.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| No **HR Agent (Upgraded)** card appears | The request didn't match an agent name | Send the request again with the exact name from the **Agents** list |
| Job and policy questions get answers without citations | The knowledge from Step 5 is missing or wasn't saved | Add both sources again and save the agent |
| The new workflow doesn't appear in the hook's **Workflow** list | The starter fields were renamed or removed, or the workflow isn't published | Restore `additionalContext` and the input fields, then publish the workflow |
| The first reply doesn't greet you by name | The agent wasn't republished after adding the hook, or the user isn't signed in | Publish the agent again; `userDisplayName` is empty for anonymous users |
| The agent registers without asking for confirmation | The confirmation sentence is missing from the instructions | Add the sentence from Step 8 and republish |
| **Register Candidate** fails on the email step | The Outlook connection is missing or belongs to another account | Open the workflow, fix the connection on **Send an email (V2)**, and publish again |

## Verify

- `hr-agent-migration.txt` has an upgrade result and a final state for every row.
- The **Hooks** dialog lists **Greet the signed-in user** on **Start (pre-loop)**.
- An email with the subject `New candidate` arrived after the fourth journey.
- The Standard HR Agent is unchanged and still answers the four baseline messages.

## Summary

You migrated the HR Agent to the GitHub Copilot harness journey by journey. You can now:

- Map a Standard agent's parts to their purpose and to their place on the new harness.
- Upgrade a copy and turn the upgrade report into a rebuild list.
- Rebuild a data-collecting topic as a workflow tool, with its confirmation moved into the instructions.
- Replace a Conversation Start topic with a **Start (pre-loop)** hook.
- Prove a migration by running the same journeys on both agents.

## Cleanup

Delete **HR Agent (Upgraded)** from the **Agents** list if you don't need it any more, delete the `Register Candidate` and hook workflows from the **Workflows** page, and delete the `New candidate` email; the Standard HR Agent stays as it was.
