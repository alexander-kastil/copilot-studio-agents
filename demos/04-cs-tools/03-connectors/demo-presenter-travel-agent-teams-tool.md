---
presents: demo-travel-agent-teams-tool.md
budget: 5 min
beats: 5
---

# Present: Post Trip Summaries to Teams with a Connector Tool

**Guide:** [Post Trip Summaries to Teams with a Connector Tool](demo-travel-agent-teams-tool.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com), classic experience, and [Teams](https://teams.microsoft.com) · have the Sightseeing site URL and the team and channel ids ready

**Agent:** CS-Travel Agent, created blank in Exercise 1 from the original [Travel Agent](../../../src/cs-schema/agents/Travel%20Agent/); the finished rebuild is [CS-Travel Agent](../../../src/cs-schema/cs-agents/CS-Travel%20Agent/)

**Initial prompt** (attach nothing; sent in the test panel in Exercise 1):

```text
What should I pack for three days in Vienna in May?
```

### Beat 1: A one-line job and web search (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **…** > **Open classic experience** > **Agents** > **Create blank agent** · **Overview** > **Details**, **Instructions**, **Knowledge** > **Web Search** · **Test** · [Exercise 1](demo-travel-agent-teams-tool.md#exercise-1-create-cs-travel-agent)
**What is there:** CS-Travel Agent with description, instructions and **Web Search** on; packing advice with the websites it used as citations.

### Beat 2: The travel desk's own pages as knowledge (1 min)

**Navigate:** **Knowledge** > **Add knowledge** > **SharePoint** > **Add to agent** · **Reset** · [Exercise 2](demo-travel-agent-teams-tool.md#exercise-2-ground-the-agent-in-the-sightseeing-site)
**What is there:** Sightseeing beside **Web Search** in **Knowledge**; the one-day visit answer cites Sightseeing pages.

### Beat 3: A topic pasted as YAML collects the booking (1 min)

**Navigate:** **Topics** > **Add a topic** > **From blank** > **More** > **Open code editor** · [Exercise 3](demo-travel-agent-teams-tool.md#exercise-3-add-the-book-trip-topic-from-its-yaml)
**What is there:** the **Trigger** node, three **Question** nodes and a **Message** node; the chat ends with the trip summary naming Vienna, the date and 2 people.

### Beat 4: One Teams action the agent fills itself (1 min)

**Navigate:** **Tools** > **Add a tool** > **Connector** > **Microsoft Teams** > Post message in a chat or channel > **Add and configure** · **Credentials to use** > **End user credentials** · **Overview** > **Instructions** > **Edit** · [Exercise 4](demo-travel-agent-teams-tool.md#exercise-4-add-the-teams-connector-tool)
**What is there:** CS-Post message in a chat or channel on **Tools**, every input on **Dynamically fill with AI**; the instructions carry the team id and the `19:` channel id.

### Beat 5: Topic and tool in one plan (1 min)

**Navigate:** **Reset** > **…** > **Show activity map when testing** · **Connect to continue** > **Allow** · [Teams](https://teams.microsoft.com) · [Exercise 5](demo-travel-agent-teams-tool.md#exercise-5-post-the-trip-summary-to-a-channel)
**What is there:** the map shows the tool with a `messageBody` and a `recipient` holding `channelId` and `groupId`; the summary in the channel under your name and the agent's confirmation.
