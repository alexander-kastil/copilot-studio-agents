---
name: copilot-studio
description: Authors and validates Microsoft Copilot Studio agent definitions (.mcs.yml) for the agents under src/agents/ in this M365 masterclass repo. Covers the topic YAML schema, the prebuilt entity catalog, Adaptive Card nodes, conversation design, and the language-server verification loop that settles "is this valid Copilot Studio YAML?" without guessing. Use when editing a topic, adding a Question or Adaptive Card, picking an entity, or when YAML might be Power Apps syntax instead of Copilot Studio syntax. Trigger phrases: copilot studio yaml, mcs.yml, topic yaml, AdaptiveDialog, Question node, AdaptiveCardPrompt, adaptive card, prebuilt entity, DatePrebuiltEntity, slot filling, trigger queries, is this valid copilot studio yaml, powerapps yaml, agent topic, onboarding agent, travel agent, food stock buddy.
---

# copilot-studio

Authoring and validating Copilot Studio agent definitions in this repo. The agents live under `src/agents/<Agent Name>/` with topics in `topics/*.mcs.yml`, tools in `actions/`, and a generated `.mcs/botdefinition.json`.

## The one rule that matters most

**Never write a Copilot Studio YAML token from memory or from a web search.** Microsoft Learn documents the *designer UI* and the *concepts*, but it almost never spells the literal YAML identifier. Blogs and search summaries contradict each other on exactly the tokens you need. This repo has a definitive local oracle instead: the language server binary shipped with the Copilot Studio VS Code extension contains the full valid token table.

Read [`references/schema-verification.md`](references/schema-verification.md) **first** whenever a token, node kind, or property name is in question. It is the shortest path from "I think it's called X" to "it is called X."

## Delegate map

| Task | Read |
| --- | --- |
| Confirm a node kind, entity token, or property name is real; validate an edit | [`references/schema-verification.md`](references/schema-verification.md) |
| Topic file anatomy, node kinds, Power Apps vs Copilot Studio YAML | [`references/topic-yaml.md`](references/topic-yaml.md) |
| Pick the right entity for a Question node; full prebuilt catalog | [`references/prebuilt-entities.md`](references/prebuilt-entities.md) |
| Add or replace an interactive card; card JSON contract and channel versions | [`references/adaptive-cards.md`](references/adaptive-cards.md) |
| Question flow, variable scoping, slot filling, when a card beats a question | [`references/conversation-design.md`](references/conversation-design.md) |
| Clone an agent from an environment, sync edits back, reattach a git-cloned folder | [`references/clone-and-sync.md`](references/clone-and-sync.md) |

## Working agreement

- **Match the surrounding file.** These topics are round-tripped through Copilot Studio, so the existing style in a file is proven-valid. Do not "improve" `variable: Topic.X` into `variable: init:Topic.X` (or vice versa) to match an external example; consistency with the file wins.
- **Prefer a working example in this repo over any external sample.** `src/agents/Food Stock Buddy/topics/SubmitDemand.mcs.yml` and `src/agents/HR Buddy/topics/SubmitExpenseClaim.mcs.yml` are real, validated Adaptive Card nodes.
- **Never hand-edit `.mcs/botdefinition.json`.** It is a generated bundle that embeds the topic YAML verbatim; it regenerates on export.
- **Verify before claiming done.** Run the diagnostics check in the verification leaf; do not assert an edit is valid on inspection alone.
