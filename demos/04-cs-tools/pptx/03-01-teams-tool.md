---
slide: "03-01"
topic: 03-connectors
title: "Posting a trip summary to Teams"
subtitle: "One Microsoft Teams action as a tool of CS-Travel Agent"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: existing
media-file: demos/04-cs-tools/03-connectors/_images/travel-agent-teams-tool-overview.svg
photo-link: demos/04-cs-tools/03-connectors/_images/travel-agent-teams-tool-overview.svg
visual-prompt: >
  Existing demo diagram: CS-Travel Agent collects Vienna, May 12 and 2 people in Book Trip, then after
  Allow on Connect to continue the CS-Post message in a chat or channel tool posts the summary to the
  General channel.
order: 8
source: demos/04-cs-tools/03-connectors/demo-travel-agent-teams-tool.md
gamma_prompt: >
  Slide titled "Posting a trip summary to Teams", subtitle "One Microsoft Teams action as a tool of
  CS-Travel Agent". Full-width layout: the provided diagram across the whole card under the title at its
  natural aspect ratio, never cropped, with one caption line below it. Use exactly the one image given
  for this card; do not generate or add any other images, icons or logos.
---

# Posting a trip summary to Teams

## Content

- Book Trip collects Vienna, May 12 and 2 people, then **CS-Post message in a chat or channel** posts the summary to the General channel

## Speaker Notes

A trip request that stays in the chat helps nobody, because the travel desk works in a Teams channel. This demo gives CS-Travel Agent one prebuilt Teams action it can call on its own.

Connector tools: each action of a Power Platform connector you add becomes one tool, added from Tools, Add a tool, Connector. Standard connectors such as SharePoint come with every Copilot Studio plan, premium ones with select plans.

The plan: the Book Trip topic collects the booking, then the orchestrator picks the tool and writes the message from the trip summary. The activity map shows the prepared messageBody and recipient.

Channel ids: the connector addresses a channel by the team's group id and the channel id, never by names. Without the ids in the instructions, the live run failed with "Group ID does not exist"; with them, the post went through.

One action or several steps: a connector tool runs one action. When a request needs several actions in a fixed order, those steps belong in an agent flow, the next topic.
