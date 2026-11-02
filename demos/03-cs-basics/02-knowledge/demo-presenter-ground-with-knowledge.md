---
presents: demo-ground-with-knowledge.md
budget: 4 min
beats: 4
---

# Present: Ground the Help Desk Agent in Public Content

**Guide:** [Ground the Help Desk Agent in Public Content](demo-ground-with-knowledge.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · each beat links the exercise holding its prompt

**Agent:** Grey Logistics IT Help Desk from [Create a Standard IT Help Desk Agent](../01-standard-agents/demo-create-a-standard-agent.md), with **Allow ungrounded responses** on

**Initial prompt** (attach nothing; sent in Exercise 2, after the two website sources are added):

```text
Windows Hello face sign-in stopped working after an update. How do I set it up again?
```

### Beat 1: Descriptions tell the orchestrator which source to search (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Overview** > **Knowledge** > **Add knowledge** > **Public websites** · [Windows support](https://support.microsoft.com/en-us/windows) · [Microsoft 365 apps support](https://support.microsoft.com/en-us/office) · [Exercise 1](demo-ground-with-knowledge.md#exercise-1-add-two-public-websites-with-distinct-descriptions)
**What is there:** the **Knowledge** section lists Windows support and Microsoft 365 apps support, each with its description and a ready status.

### Beat 2: Citations and the map prove the source (1 min)

**Navigate:** **Test your agent** > new conversation > activity map · [Exercise 2](demo-ground-with-knowledge.md#exercise-2-ask-questions-and-read-the-citations-and-the-activity-map)
**What is there:** both answers carry numbered citations to support.microsoft.com; the map shows Windows support for the first question and Microsoft 365 apps support for the second.

### Beat 3: No source, no answer (1 min)

**Navigate:** **Settings** > **Generative AI** > **Knowledge** > **Allow ungrounded responses** off > **Save** · [Exercise 3](demo-ground-with-knowledge.md#exercise-3-block-answers-that-have-no-source)
**What is there:** with the setting on, a vacation-days reply without citations or a decline; with it off, the reply is blocked and **Fallback** asks you to rephrase.

### Beat 4: Web search reaches past your sources (1 min)

**Navigate:** **Overview** > **Knowledge** > **Web Search** · **Suggested prompts** > edit icon > **Save** · [Exercise 4](demo-ground-with-knowledge.md#exercise-4-turn-on-web-search-for-questions-beyond-your-sources) · [Exercise 5](demo-ground-with-knowledge.md#exercise-5-add-suggested-prompts-for-teams-and-copilot-chat)
**What is there:** the mouse answer cites a site outside support.microsoft.com and the map shows web search beside the website sources; **Suggested prompts** lists five titles, the test panel unchanged.
