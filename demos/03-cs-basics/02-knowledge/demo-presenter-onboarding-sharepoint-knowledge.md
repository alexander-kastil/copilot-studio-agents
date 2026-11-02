---
presents: demo-onboarding-sharepoint-knowledge.md
budget: 5 min
beats: 5
---

# Present: Ground the Onboarding Assistant in Two SharePoint Sites

**Guide:** [Ground the Onboarding Assistant in Two SharePoint Sites](demo-onboarding-sharepoint-knowledge.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience · have the HR Documents and Sightseeing site URLs ready

**Agent:** CS-Employee Onboarding Assistant from [Create the CS-Employee Onboarding Assistant](../01-standard-agents/demo-create-the-onboarding-assistant.md); its two sources come from the original [Employee Onboarding Assistant](../../../src/cs-schema/agents/Employee%20Onboarding%20Assistant/)

**Initial prompt** (attach nothing; sent in Exercise 3, after both SharePoint sources are added):

```text
Where can I find the benefits enrollment form?
```

### Beat 1: A source description is part of the build (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Overview** > **Knowledge** > **Add knowledge** > **Featured** > **SharePoint** > **Add to agent** · [Exercise 1](demo-onboarding-sharepoint-knowledge.md#exercise-1-add-the-hr-documents-site)
**What is there:** the **Knowledge** section lists HR Documents as a SharePoint source, its status ready once the site is indexed.

### Beat 2: A second source and the instruction that names it (1 min)

**Navigate:** **Knowledge** > **Add knowledge** > **SharePoint** · **Instructions** > **Edit** > **Save** · [Exercise 2](demo-onboarding-sharepoint-knowledge.md#exercise-2-add-the-sightseeing-site-and-point-the-instructions-at-it)
**What is there:** **Knowledge** lists HR Documents and Sightseeing; **Instructions** ends with the Sightseeing section.

### Beat 3: The citation proves the HR site answered (1 min)

**Navigate:** **Test your agent** > **…** > **Show activity map when testing** · **Start new test session** (**+**) · [Exercise 3](demo-onboarding-sharepoint-knowledge.md#exercise-3-answer-an-onboarding-question-from-hr-documents)
**What is there:** the map searching HR Documents; replies with citations to the HR Documents site, Employee Onboarding.docx in the live run.

### Beat 4: The right source per question (1 min)

**Navigate:** **Activity** > newest session > **View** > **Map view** · [Exercise 4](demo-onboarding-sharepoint-knowledge.md#exercise-4-answer-a-sightseeing-question-from-the-sightseeing-site)
**What is there:** sights near the office with references; two **Search sources** steps, the first under **Refining knowledge query** searching the Sightseeing site "as the primary source".

### Beat 5: What happens when no source covers the question (1 min)

**Navigate:** **Settings** > **Generative AI** > **Knowledge** > **Allow ungrounded responses** off > **Save** · **Start new test session** (**+**) · [Exercise 5](demo-onboarding-sharepoint-knowledge.md#exercise-5-ask-a-question-no-source-covers)
**What is there:** the dog question stays grounded (no pet policy, confirm with HR); the capital question turns from "Canberra" and a limerick into "No information was found that could help answer this." with **Edit knowledge sources**, then the Fallback message.
