---
slide: "05-02"
topic: 05-setup
title: "What a Copilot license covers"
subtitle: "The harness decides whether building draws credits"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/01-intro/pptx/images/05-02-harness-credits.png
photo-link: demos/01-intro/pptx/images/05-02-harness-credits.png
visual-prompt: >
  Live screenshot (pool 06-01-004): the Copilot Studio Agents list with the New agent menu open, offering
  Agent (GitHub Copilot) and Customer Assist Agent with the credits icon and Agent (Standard) without it;
  the column on the right shows Standard or GitHub Copilot per agent.
order: 15
source: demos/01-intro/05-setup/readme.md
gamma_prompt: >
  Slide titled "What a Copilot license covers", subtitle "The harness decides whether building draws
  credits". Layout: Two equal columns. Left column: title, subtitle and bullets at normal size. Right
  column: the provided screenshot as an inline content image, scaled down to fit the card height, never
  cropped. Use exactly the one image given for this card; do not generate or add any other images, icons
  or logos.
---

# What a Copilot license covers

## Content

- **Standard agents** run zero-rated for licensed users in Microsoft 365 channels
- Their test chat costs nothing: every Standard agent demo ran at **0 credits**
- **GitHub Copilot agents**, workflows and apps bill from the first build step
- The New agent menu marks the paths that use **Copilot Credits**

## Speaker Notes

A Microsoft 365 Copilot license covers Microsoft's own Copilot experiences and the Standard agents a licensed user runs inside Microsoft 365. The screenshot shows where the difference starts: the New agent menu in Copilot Studio.

Standard agents: classic answers, generative answers and Microsoft Graph grounding are zero-rated in Copilot Chat, Teams and SharePoint. The same agent draws credits when the user has no Copilot license or it runs in a channel outside Microsoft 365.

Test chat at zero: answers, actions and Graph grounding in a Standard agent's test chat aren't counted, which is why every Standard agent demo in this class ran at 0 credits.

GitHub Copilot harness: it charges for model tokens, tools and the harness itself from the first build step, including authoring, Preview, tests and evaluations. Plan its credits before module 6 begins.

The credits icon: the menu lists Agent with the GitHub Copilot harness first, marked with the icon the Copilot Studio home page labels Uses Copilot Credits, and Agent Standard under Other ways to build without it. Computer use, the Work IQ API and Cowork are never covered by the license.
