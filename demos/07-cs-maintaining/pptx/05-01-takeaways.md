---
slide: "05-01"
topic: 05-agentic-building
title: "Copilot Studio plugins for coding agents"
subtitle: "One plugin per agent type, one active at a time"
layout: split-code
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/07-cs-maintaining/pptx/images/05-01-two-plugins.svg
order: 13
source: demos/07-cs-maintaining/05-agentic-building/readme.md
gamma_prompt: >
  Slide titled "Copilot Studio plugins for coding agents", subtitle "One plugin per agent type, one
  active at a time". Left: a light grey panel with the settings.local.json code block exactly as
  given. Right: the provided diagram of the copilot-studio and mcs-assistant plugins between the
  coding agent and Copilot Studio. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
---

# Copilot Studio plugins for coding agents

## Content

```json
{
  "enabledPlugins": {
    "mcs-assistant@copilot-studio-plugin": false
  }
}
```

## Speaker Notes

Topic 3 put agents under source control; this topic hands the authoring itself to a coding agent. Microsoft publishes two open-source plugins, and the class needs both.

copilot-studio: it targets Standard agents in modules 3 to 5 and reaches Copilot Studio through the VS Code Copilot Studio extension. A session hook routes every request to one of four sub-agents, Manage, Author, Test and Advisor, which use 31 skills.

mcs-assistant: it targets GitHub Copilot agents in module 6 through the Power Platform CLI 2.9.3 or later. Its migrate command moves a Standard agent to the GitHub Copilot harness, and chat tests a published agent from the terminal.

One plugin per module: the migrate command warns that the two may conflict. Keep both installed and turn off the one the current module doesn't need in .claude/settings.local.json, as in the code on the left, then start a new session.

Sharp edges: both plugins are experimental and the YAML schema can change without notice, so review generated YAML before you push it.
