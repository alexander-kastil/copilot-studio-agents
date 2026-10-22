---
slide: "05-01"
topic: 05-setup
title: "Licenses and credit sources"
subtitle: "Few seats, and credits charged where the work runs"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/01-intro/pptx/images/05-01-licenses-credits.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, text #24292f and #57606a, minimum 26px type, no heading inside the image. Left grey
  panel "Per-user licenses" with three blue cards: "Microsoft 365 Copilot license" (modules 1, 2 and 8,
  paid per user), "Copilot Studio access" (modules 3 to 8, free), "GitHub account" (class prerequisite,
  free). Right purple panel "Copilot Credits, charged where the work runs" (about $0.01 per credit,
  pay-as-you-go) with three white cards, each listing what runs there, an amber credit-source box and
  where it is set up: "Agent environment" (billing plan with the Copilot Studio meter, Power Platform
  admin center), "Maker's personal developer environment" with an amber border (the same billing plan,
  this environment added), "Microsoft 365 tenant" (spending policy that selects each service, Microsoft
  365 admin center). An arrow leads down to a green bar "Azure subscription and resource group".
order: 14
source: demos/01-intro/05-setup/readme.md
gamma_prompt: >
  Slide titled "Licenses and credit sources", subtitle "Few seats, and credits charged where the work
  runs". Layout: Two columns. Left column: the bullets. Right column, wider than the left: the provided
  diagram as an inline content image at its natural 16:9 aspect ratio, scaled to fit the column, never
  cropped, never used as a background or side accent. Use exactly the one image given for this card; do
  not generate or add any other images, icons or logos.
---

# Licenses and credit sources

## Content

- **Per user**: a Microsoft 365 Copilot license, Copilot Studio access and a GitHub account
- Everything else is **Copilot Credits** or an Azure resource on one subscription
- Credits are charged **where the work runs**: agent environment, developer environment or tenant
- Each maker's **personal developer environment** needs the billing plan too

## Speaker Notes

This optional topic collects what setting up the class tenant taught us. Few of the licenses are per-user seats, and each credit source has to be in place before the module that uses it starts.

Per user: every learner needs a Microsoft 365 account with a Microsoft 365 Copilot license, every maker needs Copilot Studio access, and a GitHub account is a class prerequisite. Copilot Studio access is free through the Copilot license, the Copilot Studio user license or the trial.

Credits or Azure: everything else is usage in Copilot Credits, about one cent each, or an Azure resource. One Azure subscription and resource group, with Owner or Contributor rights for the admin, pays every pay-as-you-go route.

Where the work runs: agents, agent flows, workflows and computer use bill to the billing plan of the agent environment. Cowork, the Work IQ API and Copilot Managed Runtime bill through a Microsoft 365 spending policy that selects each service.

Personal developer environment: Copilot Studio builds every maker's apps there, with no picker, and creates it the first time the maker opens the App tile. An agent environment can be fully billed while the app build in the same browser tab fails, because the app is built somewhere else.
