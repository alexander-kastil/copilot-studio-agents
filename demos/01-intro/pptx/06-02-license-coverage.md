---
slide: "06-02"
topic: 06-cost-license
title: "What a Copilot license covers"
subtitle: "The harness decides whether building draws credits"
layout: diagram
visual-weight: 1/2
visual-type: screenshot
media-source: existing
media-file: demos/01-intro/pptx/images/06-02-harness-credits.png
photo-link: demos/01-intro/pptx/images/06-02-harness-credits.png
visual-prompt: >
  Live screenshot (pool 06-01-002), cropped at native size to the build panel of the Copilot Studio home
  page (x 550 to 1190, y 66 to 406): "Optimize your business processes" with the Uses Copilot Credits
  label over three cards, Agent, Workflow and App (preview), each tagged GitHub Copilot, and below them
  Other ways to build, which leads to Customer Assist Agent, Copilot and standard orchestration.
order: 19
source: demos/01-intro/06-cost-license/readme.md
gamma_prompt: >
  Slide titled "What a Copilot license covers", subtitle "The harness decides whether building draws
  credits". Layout: Two equal columns. Left column: title, subtitle and bullets at normal size. Right
  column: the provided screenshot as an inline content image at its natural aspect ratio, scaled to fit
  the column, never cropped. Use exactly the one image given for this card; do not generate or add any other images, icons
  or logos.
---

# What a Copilot license covers

## Content

- **Standard agents** run zero-rated for licensed users in Microsoft 365 channels
- Their test chat costs nothing: every Standard agent demo ran at **0 credits**
- **GitHub Copilot agents**, workflows and apps bill from the first build step
- The Copilot Studio home page marks the paths that use **Copilot Credits**

## Speaker Notes

A Microsoft 365 Copilot license covers Microsoft's own Copilot experiences and the Standard agents a licensed user runs inside Microsoft 365. The screenshot shows where the difference starts: the Copilot Studio home page.

Standard agents: classic answers, generative answers and Microsoft Graph grounding are zero-rated in Copilot Chat, Teams and SharePoint. The same agent draws credits when the user has no Copilot license or it runs in a channel outside Microsoft 365.

Test chat at zero: answers, actions and Graph grounding in a Standard agent's test chat aren't counted, which is why every Standard agent demo in this class ran at 0 credits.

GitHub Copilot harness: it charges for model tokens, tools and the harness itself from the first build step, including authoring, Preview, tests and evaluations. Plan its credits before module 6 begins.

The credits label: the home page puts Agent, Workflow and App, all on the GitHub Copilot harness, under the label Uses Copilot Credits, and moves standard orchestration to Other ways to build. Computer use and the Work IQ API are never covered by the license, and Cowork needs the license plus a spending policy.
