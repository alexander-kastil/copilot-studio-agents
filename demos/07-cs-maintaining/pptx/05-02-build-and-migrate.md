---
slide: "05-02"
topic: 05-agentic-building
title: "Building and migrating from the terminal"
subtitle: "The Grey Logistics IT Help Desk, cloned, extended, published and migrated"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: existing
media-file: demos/07-cs-maintaining/05-agentic-building/_images/build-and-migrate-from-the-terminal-overview.svg
photo-link: demos/07-cs-maintaining/05-agentic-building/_images/build-and-migrate-from-the-terminal-overview.svg
visual-prompt: >
  Existing demo diagram: Claude Code clones the Grey Logistics IT Help Desk, the Advisor reviews it, a
  VPN topic is added, pulled and pushed as a draft, published and point tested, then migrated.
order: 14
source: demos/07-cs-maintaining/05-agentic-building/demo-build-and-migrate-from-the-terminal.md
gamma_prompt: >
  Slide titled "Building and migrating from the terminal", subtitle "The Grey Logistics IT Help Desk,
  cloned, extended, published and migrated". Left: five bullets. Right, wider: the provided diagram of
  six numbered steps between Claude Code and Copilot Studio. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
---

# Building and migrating from the terminal

## Content

- **Clone first**: the plugin works only on an agent that already exists in an environment
- The **Advisor** ranks findings High, Medium and Low; the **Author** writes a validated VPN topic
- **Pull before you push**: the push lands as a draft for the Test pane
- **Publish**, then point test with "My VPN won't connect on my laptop"
- **/mcs-assistant:migrate** builds GH-Grey Logistics IT Help Desk; the original stays unchanged

## Speaker Notes

The demo hands three jobs on the Grey Logistics IT Help Desk agent to Claude Code: a review, a new topic and a move to the GitHub Copilot harness. Every change lands as a file you can diff.

Clone first: the plugin can't create an agent, so you clone the existing one into src/cs-schema/agents and commit the clone.

Advisor and Author: the Advisor reviews the agent and ranks its findings with file and line. The Author writes the VPN topic with three trigger phrases, a Windows or macOS question and numbered steps, and validation reports 0 errors.

Pull before you push: a push over stale files fails with ConcurrencyVersionMismatch. The push creates a draft that only the canvas, the Test pane and evaluations see.

Publish and point test: after you publish, the point test returns the operating system question from the new topic.

Migrate: /mcs-assistant:migrate writes a MIGRATION-PLAN file, waits for your Approve and builds a new agent in which the VPN topic becomes the skill vpn-wont-connect. The original Standard agent stays unchanged.
