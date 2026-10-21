# Ground the Onboarding Assistant in Two SharePoint Sites

The onboarding assistant from the last demo has good manners but no documents: it tells new employees to contact HR because it can't find a single form. The answers it needs already live on two SharePoint sites, one for HR documents and one for sightseeing tips. In this demo you add both sites as knowledge, write the descriptions the agent picks them by, and trace every answer back to its source through the citations.

What you practice here: grounding a Standard agent in SharePoint with source descriptions that steer generative orchestration, and checking each answer against its citation.

Duration: about 40 minutes.

## What you'll build

- An HR Documents SharePoint knowledge source with a description the orchestrator can choose by.
- A Sightseeing SharePoint knowledge source and the instruction section that makes it the source for sights.
- Answers with citations from each source, traced in the activity map.
- A question no source covers, answered once with ungrounded responses allowed and once without.

## Prerequisites

- CS-Employee Onboarding Assistant from [Create the CS-Employee Onboarding Assistant](../01-standard-agents/demo-create-the-onboarding-assistant.md), opened in the classic experience (home page, three dots (**…**) at the bottom of the side bar, **Open classic experience**).
- Two SharePoint sites your account can read: an HR Documents site with HR policies and onboarding documents, and a Sightseeing site with recommended sights near the office.
- The original definition: [src/cs-schema/agents/Employee Onboarding Assistant](../../../src/cs-schema/agents/Employee%20Onboarding%20Assistant/), the two files under `knowledge/`.

## Exercise 1: Add the HR Documents site

The instructions already call the HR SharePoint site the primary source of truth; this exercise gives the agent that site. With generative orchestration on, the agent reads each source's description to decide which one to search, so the description is part of the build, not a label.

1. On the **Overview** page, in the **Knowledge** section, select **Add knowledge**.
2. In the **Featured** section, select **SharePoint** and enter the URL of your HR Documents site.

```text
<your HR Documents site URL>
```

3. Enter the name and the description below, then select **Add to agent**.

```text
HR Documents
```

```text
This source provides any kind of Human Resources information
```

The original stores the source like this in `knowledge/`:

```yaml
mcs.metadata:
  componentName: HR Documents
  description: "This source provides any kind of Human Ressources information "
kind: KnowledgeSourceConfiguration
source:
  kind: SharePointSearchSource
  site: <your HR Documents site URL>
```

Expected: the **Knowledge** section lists HR Documents as a SharePoint source. Its status moves to ready once the site is indexed.

> **Tip:** The original's description reads "Human Ressources" with a trailing space. The description above fixes the spelling, because the orchestrator matches it against the user's words.

## Exercise 2: Add the Sightseeing site and point the instructions at it

New employees also ask what to see near the office, and those tips live on a separate site. A second source with its own description lets the agent keep HR answers and sightseeing answers apart, and one extra instruction section names the site as the source for sights.

1. In the **Knowledge** section, select **Add knowledge**, then **SharePoint** in the **Featured** section, and enter the URL of your Sightseeing site.

```text
<your Sightseeing site URL>
```

2. Enter the name and description below, then select **Add to agent**.

```text
Sightseeing
```

```text
Recommended Sightseeing info
```

3. In the **Instructions** section, select **Edit**, add the section below at the end of the instructions, replace the placeholder with the same site URL, and select **Save**.

```text
## Sightseeing

Take <your Sightseeing site URL> as the primary source for sights
```

Expected: the **Knowledge** section lists HR Documents and Sightseeing, and the **Instructions** section ends with the Sightseeing section. The agent now matches the original's two sources and its full instructions.

## Exercise 3: Answer an onboarding question from HR Documents

A grounded answer shows its sources as citations under the reply. Reading the citation, not just the reply, is how you prove the answer came from the HR site and not from the model's general knowledge.

1. In the **Test your agent** panel, select the three dots (**…**) and make sure **Show activity map when testing** is on.
2. Select the **Reset** icon, then send this message.

```text
Where can I find the benefits enrollment form?
```

3. Send the next message.

```text
What do I need to complete in my first week?
```

Expected: the activity map shows the plan searching HR Documents. The replies summarize what the HR documents say and show citations that link to the documents on the HR Documents site, as Step 3 of the instructions asks; in the live run the benefits answer cited Employee Onboarding.docx. Compare with the last demo, where the same benefits question ended with a suggestion to contact HR.

## Exercise 4: Answer a sightseeing question from the Sightseeing site

Two sources only help if the agent picks the right one per question. A sightseeing question should search the Sightseeing site, and the description plus the new instruction section are what steer it there.

1. Send this message in the same conversation.

```text
I start next Monday. What should I see near the office after work?
```

Expected: the activity map shows the plan searching Sightseeing for this turn. The reply recommends sights from that site with citations that link to the Sightseeing pages, and it ends with the supportive closing from the instructions.

> **Note:** If the map shows both sources searched, the orchestrator found the question relevant to both. Sharpen the descriptions so each one names the questions it answers, then retest.

## Exercise 5: Ask a question no source covers

A knowledge-grounded agent still meets questions its documents never mention. The **Allow ungrounded responses** setting decides what happens then: on, the model may answer from general knowledge without a citation; off, the turn is blocked and the Fallback topic answers.

1. Send this message.

```text
What is the company's policy on bringing my dog to the office?
```

2. Select **Settings**, then **Generative AI**, turn off **Allow ungrounded responses** in the **Knowledge** section, and select **Save**.
3. Select the **Reset** icon and send the same message again.
4. Turn **Allow ungrounded responses** back on and select **Save**, so the agent matches the original again.

Expected: with the setting on, and no document about dogs on either site, the reply carries no citation; the agent either answers in general terms or follows Error Handling and points to HR. With the setting off, the agent blocks the ungrounded reply and the Fallback topic asks you to rephrase. The difference between the two runs is the setting, not the instructions.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| A source stays in progress or shows an error | The site is still being indexed, or your account can't read it | Wait for indexing, then check that your account has at least **Read** access to the site |
| Answers come back without citations | **Allow ungrounded responses** is on and the agent answered from general knowledge | Rephrase with words from the document title, or turn the setting off to force grounded answers |
| A sightseeing question searches HR Documents | The descriptions are too close, or the Sightseeing section is missing from the instructions | Check both descriptions and the last instruction section, then reset the test conversation |
| The agent replies "no response" for a document you can open | The document is encrypted by a sensitivity label or password protected | Use an unencrypted copy of the document on the site |

## Summary

You grounded the CS-Employee Onboarding Assistant in two SharePoint sites. You can now:

- add SharePoint sites as knowledge with names and descriptions the orchestrator chooses by
- extend the instructions to name a source for one kind of question
- trace an answer to its citation and to the source in the activity map
- show what **Allow ungrounded responses** changes for a question no source covers

Next, [Identify an Employee Once and Reuse It Across HR Topics](../03-topics/demo-hr-buddy-employee-topics.md) builds the HR self-service agent from topics.
