# Topic YAML anatomy

## Copilot Studio YAML is not Power Apps YAML

They look similar and are not interchangeable. Power Apps YAML describes controls and properties in a canvas app. Copilot Studio topic YAML describes a dialog: a trigger plus an ordered `actions` list of conversation nodes. If a snippet references controls, `OnSelect`, or a screen hierarchy, it is Power Apps and does not belong in a `.mcs.yml`.

## Agent folder layout

```text
src/agents/<Agent Name>/
├── agent.mcs.yml                 # main agent definition
├── settings.mcs.yml              # configuration
├── connectionreferences.mcs.yml  # connection references used by connectors
├── topics/*.mcs.yml              # conversation topics (AdaptiveDialog)
├── actions/*.mcs.yml             # tools and connectors
├── workflows/<name>/             # metadata.yaml + workflow.json
├── trigger/*.mcs.yml             # event triggers
├── knowledge/files/              # knowledge sources
├── icon.png
└── .mcs/botdefinition.json       # GENERATED bundle, never hand-edit
```

## Topic skeleton

```yaml
mcs.metadata:
  componentName: User Account Creation
kind: AdaptiveDialog
beginDialog:
  kind: OnRecognizedIntent
  id: main
  intent:
    triggerQueries:
      - create account
      - sign up

  actions:
    - kind: Question
      id: Question_vslIaf
      variable: Topic.LastName
      prompt: What is your last name?
      entity: PersonNamePrebuiltEntity

inputType: {}
outputType: {}
```

`modelDescription:` at the top level (see `Food Stock Buddy/topics/SubmitDemand.mcs.yml`) describes the topic to the generative orchestrator so it can select the topic as a tool.

## Trigger kinds

`OnRecognizedIntent`, `OnConversationStart`, `OnUnknownIntent`, `OnSelectIntent`, `OnError`, `OnInactivity`, `OnRedirect`.

`OnRecognizedIntent` carries `intent.triggerQueries`. `OnUnknownIntent` typically carries `priority: -1` (the conversational boosting fallback).

## Action node kinds

Confirmed in the language server binary:

`SendActivity`, `Question`, `AdaptiveCardPrompt`, `ConditionGroup`, `SetVariable`, `SetTextVariable`, `ParseValue`, `BeginDialog`, `EndDialog`, `EndConversation`, `Foreach`, `SearchAndSummarizeContent`, `InvokeConnectorAction`, `TransferToAgent`, `LogCustomTelemetryEvent`, `CSATQuestion`.

Every node needs a **unique `id`** within the topic. Cloning a node without changing its id is the single most common code-editor mistake.

## Node property notes

- **`SendActivity.activity`** takes either a plain string, a block scalar (`|-`) for multi-line, or a structured form with `text:` (a list of variations) and `speak:` for voice.
- **`ConditionGroup`** holds `conditions:`, each with an `id`, a Power Fx `condition:` (prefixed `=`), and nested `actions:`.
- **Power Fx** appears anywhere a value is computed, always prefixed with `=`: `condition: =!IsBlank(Topic.Answer)`, `value: =JSON({...})`.
- **Variable interpolation** in message text uses braces: `Thank you, {Global.FirstName}`.

## The init: prefix

Some Microsoft samples write `variable: init:Topic.SurveyResponse`; the topics in this repo write `variable: Topic.LastName`. Both forms are valid. External guides claiming `init:` is mandatory are wrong, and the working topics here prove it. **Match the surrounding file** rather than converting a file to the other style.
