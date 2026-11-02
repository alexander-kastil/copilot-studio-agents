---
presents: demo-dataverse-knowledge-and-records.md
budget: 4 min
beats: 4
---

# Present: Answer and Record Supplier Offers from Dataverse

**Guide:** [Answer and Record Supplier Offers from Dataverse](demo-dataverse-knowledge-and-records.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) and [Power Apps](https://make.powerapps.com) · the two offer tables and their rows exist before the session

**Agent:** Grey Logistics IT Help Desk, a Standard agent in a Dataverse environment, with generative orchestration and **Authenticate with Microsoft**

**Initial prompt** (attach nothing; sent in Exercise 2, after the Dataverse source is added):

```text
Which supplier offered the cheapest USB-C dock, and how many days does delivery take?
```

### Beat 1: Two tables become one described source (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Overview** > **Add knowledge** > **Dataverse** > **Add to agent** · [Exercise 1](demo-dataverse-knowledge-and-records.md#exercise-1-add-the-offer-tables-as-knowledge)
**What is there:** the **Knowledge** page lists the Dataverse source with Offer Request, Offer Request Detail and the description.

### Beat 2: Comparisons across rows (1 min)

**Navigate:** test pane · [Exercise 2](demo-dataverse-knowledge-and-records.md#exercise-2-ask-comparison-questions-over-the-rows)
**What is there:** OR-1001 from supplier 17 at 169.00 with 5 delivery days; the 27-inch Monitor in OR-1001 with 20 of 25 units offered; both answers cite the Dataverse source.

### Beat 3: Synonyms and a glossary map user words to columns (1 min)

**Navigate:** **Knowledge** > the Dataverse source > synonyms **Edit**, glossary **Edit** > **Back** > save · [Exercise 3](demo-dataverse-knowledge-and-records.md#exercise-3-teach-the-agent-the-column-vocabulary)
**What is there:** only OR-1001 at 229.00 with a 10-day lead time; OR-1003 cannot ship because its `isAvailable` value is No.

### Beat 4: A tool writes the row after the user confirms (1 min)

**Navigate:** **Tools** > **Add a tool** > **Connector** > **Microsoft Dataverse** > **Add a new row** > **Add and configure** · **Additional details** > **Ask the end user before running** > **Yes** · [Power Apps](https://make.powerapps.com) > Offer Request · [Exercise 4](demo-dataverse-knowledge-and-records.md#exercise-4-record-a-new-offer-with-a-dataverse-tool)
**What is there:** a confirmation with OR-1004, supplier 42 and 60; after confirming, a fourth row OR-1004 with today's date and time in `timestamp`.
