---
paths:
  - "src/cs-schema/agents/**"
  - "src/cs-schema/cs-agents/**"
---

# Copilot Studio agents in this repo

The global `copilot-studio` skill holds the generic rules. These are the facts it leaves out because they belong to this repo.

## Where the agents live

- `src/cs-schema/agents/<Agent Name>/` holds Copilot Studio agents cloned from the environment **Integrations e. U. (default)** (`Default-d92b247e-90e0-4469-a129-6a32866c0d0a`) and committed here; they can be pushed back with the extension.
- Folders that arrived via `git clone` have no `.mcs/conn.json`, so run **Reattach Agent** before Preview, Get or Apply. Folders cloned with the extension carry it.
- `.mcs/botdefinition.json` is committed here, so every sync produces a noisy diff; never hand-edit it.

## Cloning more agents

- Pick `D:\git-classes\copilot-studio-agents\src\cs-schema\agents` as the clone folder; the extension then reopens that folder, so the second window comes back titled `agent.mcs.yml - agents - Visual Studio Code`.
- Standalone workflows (**Copilot Studio: Clone workflow**) go to `D:\git-classes\copilot-studio-agents\src\cs-schema\workflows`; its flow picker lists every cloud flow in the environment, so take the names from the Copilot Studio **Workflows** page.
- The default environment is the top item of the first picker.

## Proven examples to copy from

- Adaptive Card nodes: `src/cs-schema/agents/Food Stock Buddy/topics/SubmitDemand.mcs.yml` (also shows a top-level `modelDescription:`) and `src/cs-schema/agents/HR Buddy/topics/SubmitExpenseClaim.mcs.yml`.
- `NumberPrebuiltEntity`: `src/cs-schema/agents/Travel Agent/topics/BookTrip.mcs.yml` and `src/cs-schema/agents/HR Buddy/topics/CollectEmployeeData.mcs.yml`.
- `DatePrebuiltEntity`: `src/cs-schema/agents/Travel Agent/topics/BookTrip.mcs.yml:31` (trip date).
- Variable style: the topics here write plain `variable: Topic.X`, never `init:`; match it.

## The CS- rebuilds

- `src/cs-schema/cs-agents/CS-<Agent Name>/` holds the CS- rebuilds of the agents above, built in the same environment and pulled with **Get changes** after each portal step. Diff a rebuild against its original in `src/cs-schema/agents/` to prove what a guide step wrote.
- MCP tool on maker credentials (`mode: Maker`; the original's `mode: Invoker`): `src/cs-schema/cs-agents/CS-Returns Agent/actions/MailMCP-MailPreview.mcs.yml`.
- Event trigger and its flow (shared mailbox `help@integrations.at`, folder typed as `Inbox`): `src/cs-schema/cs-agents/CS-Returns Agent/trigger/` and `workflows/`.
- Publish, channels and a shared security group (Copilot Users) in settings: `src/cs-schema/cs-agents/CS-HR Buddy/settings.mcs.yml`.
