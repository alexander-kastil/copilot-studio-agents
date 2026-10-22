---
slide: "05-03"
topic: 05-setup
title: "Where a run's cost shows"
subtitle: "Billed credits per agent in the Power Platform admin center"
layout: diagram
visual-weight: 2/3
visual-type: screenshot
media-source: existing
media-file: demos/01-intro/pptx/images/05-03-manage-agents.png
photo-link: demos/01-intro/pptx/images/05-03-manage-agents.png
visual-prompt: >
  Live screenshot (pool cost-023): the Copilot Studio Agents page in the Power Platform admin center with
  billed credits per channel and feature: GH-Food Buddy (Autonomous 13.85, pva-published-engine-direct
  17.63, pva-studio 20.19), GH-Health Advisor (pva-studio 169.72) and a workflow (workflow-agents,
  Workflows, 26.67).
order: 16
source: demos/01-intro/05-setup/readme.md
gamma_prompt: >
  Slide titled "Where a run's cost shows", subtitle "Billed credits per agent in the Power Platform admin
  center". Layout: Two columns. Left column: the bullets. Right column, wider than the left: the provided
  screenshot as an inline content image at its natural aspect ratio, scaled to fit the column, never
  cropped, never used as a background or side accent. Use exactly the one image given for this card; do
  not generate or add any other images, icons or logos.
---

# Where a run's cost shows

## Content

- **Manage Agents** lists billed credits per agent, channel and feature
- A GitHub Copilot agent: **169.72 credits** for five Preview sessions
- One workflow run: **26.67 credits** on the workflow-agents channel
- Work IQ API and Cowork costs show only in Microsoft 365 **Cost management**

## Speaker Notes

Every demo in this class was run live and its cost read back from the portals, and no portal shows all of it. This is the Agents page under Copilot Studio in the Power Platform admin center, known as Manage Agents, after the class runs.

Manage Agents: it is the per-agent source of truth, split by channel and billable feature, and an agent appears there only after it has billed credits. Copilot Studio usage posts within hours.

GitHub Copilot agent: GH-Health Advisor shows 169.72 credits on the pva-studio channel, the cost of five Preview sessions. Per-session detail stays in Preview, History, because the Monitor page counts Preview credits without listing the sessions.

Workflow: one workflow run billed 26.67 credits, listed under the workflow-agents channel with the Workflows feature.

Microsoft 365 services: Work IQ API calls show in Microsoft 365 Cost management per service and per user only, and Cowork only account-wide. Work IQ API, app and Azure costs had not posted on the day of the run, so record such a cost as not measured, never as 0.
