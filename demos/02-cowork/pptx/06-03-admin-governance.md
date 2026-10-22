---
slide: "06-03"
topic: 06-staying-in-control
title: "Governance for admins"
subtitle: "Where each Cowork control lives"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: opus-svg
media-file: demos/02-cowork/pptx/images/06-03-admin-controls.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image, static. A 2 by 2 grid of cards with a
  coloured left edge. Blue "Copilot > Cost management": Configuration, a spending policy that selects
  Cowork grants access with limits and alerts; Model profiles, a Cowork-only profile with at least two
  models; Consumption, credits by policy, user and service. Purple "Cowork settings" with the path
  "Copilot > Settings > View All": Allow browser access (Cowork Browsing), off by default, limit it to
  security groups, the audit log records each browser task. Green "Agents > Tools", Plugins: deploy to
  everyone or to groups, allow or block each plugin, org-wide sharing waits for admin approval. Amber
  "Reports and Microsoft Purview": Cowork usage report with active users, total tasks, scheduled
  versus user-initiated and CSV export, refreshed once a day; Purview with auditing, sensitivity
  labels, DLP and eDiscovery.
order: 20
source: demos/02-cowork/06-staying-in-control/readme.md
gamma_prompt: >
  Slide titled "Governance for admins", subtitle "Where each Cowork control lives". The provided
  diagram of four cards, Cost management, Cowork settings, Agents > Tools, and reports with Purview,
  across the whole card width at its natural aspect ratio, never cropped. One caption line under the
  diagram. White background, calm pastel accents. Use exactly the one image given for this card; do
  not generate or add any other images, icons or logos.
---

# Governance for admins

## Content

- A **spending policy** grants access; browsing, plugins and reporting each have their own place in the admin center

## Speaker Notes

Control does not stop at the individual user. Admins decide whether Cowork is available at all, to whom, and what it may reach.

Cost management: a spending policy under Copilot > Cost management > Configuration grants access when its scope includes the user and it selects Cowork, and to block a user you remove them from the scope. Model profiles there hold a Cowork-only set of at least two models, and Consumption splits Copilot Credits by policy, user and service, never by task.

Visibility: the discovery setting AI experiences enabled by usage-based billing controls only who sees Cowork, not who can use it. The Agents > All agents control from the preview has no effect on access any more.

Cowork settings: the tenant setting Cowork Browsing is off by default. Turn on Allow browser access, limit it to security groups and review the audit log, which records each browser task.

Agents > Tools: deploy plugins to everyone or to groups and allow or block them there. Org-wide sharing needs admin approval, and no single setting turns off sharing with specific people.

Reports and Purview: the Cowork usage report shows active users, total tasks and scheduled versus user-initiated tasks, and it refreshes once a day. Purview supports Cowork for DSPM, auditing, sensitivity labels, DLP, Insider Risk Management, Communication Compliance, eDiscovery and Data Lifecycle Management.
