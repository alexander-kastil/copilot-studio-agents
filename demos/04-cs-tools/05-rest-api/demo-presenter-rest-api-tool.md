---
presents: demo-rest-api-tool.md
budget: 5 min
beats: 4
---

# Present: Call a Public API from a Topic and as a REST API Tool

**Guide:** [Call a Public API from a Topic and as a REST API Tool](demo-rest-api-tool.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · check [the API](https://date.nager.at/api/v3/PublicHolidays/2026/AT) returns JSON before the session

**Agent:** Grey Logistics IT Help Desk, a Standard agent with generative orchestration

**Initial prompt** (attach nothing; sent in the test pane in Exercise 1, then answer `AT`):

```text
Which public holidays do we have this year?
```

### Beat 1: A topic calls the API at a fixed point (1.5 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Topics** > **Add a topic** > **From blank** · **Add node** > **Advanced** > **Send HTTP request** > **From sample data** · [Exercise 1](demo-rest-api-tool.md#exercise-1-call-the-api-from-a-topic)
**What is there:** the topic asks for the country and replies with a count and a list from New Year's Day to St. Stephen's Day; 20 for 2026 and Austria.

### Beat 2: An OpenAPI file turns the endpoint into a tool (1 min)

**Navigate:** `public-holidays.json` · **Tools** > **Add a tool** > **New tool** > **REST API** > **None** > **GetPublicHolidays** · **Create connection** > **Add and configure** · [Exercise 2](demo-rest-api-tool.md#exercise-2-describe-the-endpoint-in-openapi) · [Exercise 3](demo-rest-api-tool.md#exercise-3-add-the-rest-api-tool)
**What is there:** Get public holidays on **Tools** with the inputs `year` and `countryCode`, both **Dynamically fill with AI**.

### Beat 3: The orchestrator fills the inputs from the question (1 min)

**Navigate:** **Topics** > Public holidays off · new test conversation · [Exercise 4](demo-rest-api-tool.md#exercise-4-let-the-orchestrator-call-the-tool)
**What is there:** Get public holidays with `year` 2026 and `countryCode` AT, no question to the user; Immaculate Conception confirmed, then 8, 25 and 26 December listed.

### Beat 4: Only the tool can answer another year (1.5 min)

**Navigate:** **Topics** > Public holidays on · test pane · [Exercise 5](demo-rest-api-tool.md#exercise-5-ask-for-what-only-the-tool-can-answer)
**What is there:** the activity map shows Get public holidays with `year` 2027, and the reply lists the 2027 holidays.
