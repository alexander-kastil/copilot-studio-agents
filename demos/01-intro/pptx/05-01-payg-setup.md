---
slide: "05-01"
topic: 05-licensing-setup
title: "Pay-as-you-go setup"
subtitle: "Each service has its own admin center and bills to Azure"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/01-intro/pptx/images/05-01-payg-setup.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. Three blue columns: "Copilot"
  (Message metering; Microsoft 365 Admin Center, Copilot: Billing & usage; amber pill "Billing
  policy"), "Copilot Studio" (Message capacity; Power Platform Admin Center, Licensing: Copilot
  Studio; amber pill "Billing plan") and "Cowork" (Copilot Credits; Microsoft 365 Admin Center,
  Copilot: Cost Management; amber pill "Spending policy"). An arrow drops from each column into one
  wide green box "Azure subscription and resource group" with the line "Owner or Contributor rights,
  the shared billing plumbing for all three". SMIL animation, 6 second loop: an amber dot travels
  down each arrow in turn.
order: 15
source: demos/01-intro/05-licensing-setup/readme.md
gamma_prompt: >
  Slide titled "Pay-as-you-go setup", subtitle "Each service has its own admin center and bills to
  Azure". Left column: four short bullets. Right column: the provided diagram showing Copilot,
  Copilot Studio and Cowork each set up in its own admin center and all three billing to one Azure
  subscription. White background, calm pastel accents. Use exactly the one image given for this
  card; do not generate or add any other images, icons or logos.
---

# Pay-as-you-go setup

## Content

- **Full seats**: a fixed monthly license per user, for a broad, predictable rollout
- **Pay-as-you-go**: metered by actual usage, for pilots, spiky usage and Cowork
- **Admin centers**: Copilot and Cowork in Microsoft 365, Copilot Studio in Power Platform
- **Azure subscription** and resource group with Owner or Contributor rights behind all three

## Speaker Notes

Before anyone builds an agent, the tenant needs licensing, and this slide compares the two billing models. The course assumes pay-as-you-go is configured.

Full seats: a fixed monthly license per assigned user is the simplest model when everyone uses Copilot daily.

Pay-as-you-go: you pay only for actual usage and can cap spend with policies. Copilot Studio message capacity and Cowork both lean on this model.

Admin centers: Copilot and Cowork are enabled in the Microsoft 365 Admin Center, Copilot Studio in the Power Platform Admin Center. Each sets up its own billing policy, billing plan or spending policy.

Azure subscription: all three services bill to the same Azure subscription and resource group. Confirm Owner or Contributor rights on that resource group, because every pay-as-you-go service depends on it.
