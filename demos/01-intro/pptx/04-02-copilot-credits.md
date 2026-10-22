---
slide: "04-02"
topic: 04-where-to-build
title: "What agents cost"
subtitle: "Copilot Credits and the three billing routes"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/01-intro/pptx/images/04-02-copilot-credits.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  2px #8c959f borders, text #24292f and #57606a, pastel fills, minimum 28px type, no heading inside
  the image. Three blue #eaf2ff columns: "Copilot Chat & SharePoint agents" (users without a Copilot
  license; Microsoft 365 admin center, Copilot: Billing & usage; amber pill "Billing policy"),
  "Copilot Studio agents" (Power Platform admin center, Licensing: Pay-as-you-go plans; amber pill
  "Billing plan") and "Cowork & usage-based services" (Microsoft 365 admin center, Copilot: Cost
  Management; amber pill "Spending policy"). An arrow drops from each column into one wide purple
  #f3edff band "Copilot Credits" with the line "Prepaid packs and P3 first, then pay-as-you-go".
  From the band one arrow drops into a green #e9f7ef box "Azure subscription and resource group" with
  the line "Owner or Contributor rights". SMIL animation, 6 second loop: an amber dot travels down
  each column's arrow in turn, through the band, into the Azure box.
order: 14
source: demos/01-intro/04-where-to-build/readme.md
gamma_prompt: >
  Slide titled "What agents cost", subtitle "Copilot Credits and the three billing routes". Layout:
  Two columns. Left column: the bullets. Right column, wider than the left: the provided diagram as
  an inline content image at its natural 16:9 aspect ratio, scaled to fit the column, never cropped,
  never used as a background or side accent. Use exactly the one image given for this card; do not
  generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# What agents cost

## Content

- **Copilot Credits**: one currency for agent usage since September 2025
- A **Copilot license** zero-rates Copilot Studio agents in Chat, Teams and SharePoint
- **Three routes**: billing policy, billing plan, spending policy
- **Prepaid first**, then pay-as-you-go to one Azure subscription

## Speaker Notes

Since September 2025, Copilot Credits are the common currency for agent usage across Microsoft 365 Copilot and Copilot Studio.

Copilot license: licensed users run Copilot Studio agents in Copilot Chat, Teams and SharePoint at zero-rated usage for classic answers, generative answers and Graph grounding. Everything else draws credits.

Three routes: agents in Copilot Chat and SharePoint agents for unlicensed users bill through a billing policy in the Microsoft 365 admin center, and Copilot Studio agents through a billing plan in the Power Platform admin center. Cowork, the Work IQ API and other usage-based services bill through a spending policy under Copilot, Cost Management.

Prepaid first: prepaid capacity packs and the Copilot Credit Pre-Purchase Plan are drawn down first, then pay-as-you-go bills an Azure subscription and resource group on which the admin holds Owner or Contributor rights.
