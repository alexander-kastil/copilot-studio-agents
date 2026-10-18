---
slide: "06-03"
topic: 06-staying-in-control
title: "Governance for admins"
subtitle: "Who can use Cowork, who sees it, and what it may reach"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/02-cowork/pptx/images/06-03-admin-governance.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. Two rows. Row "Access, who can use
  Cowork": a blue box "Spending policy" with the path "Copilot > Cost Management > Configuration",
  three ticks "Its scope includes the user", "It selects Cowork under Select agents and services", "A
  limit of one credit is enough" and the line "To block a user, remove them from the scope", with an
  arrow to a green box "Can use Cowork". Row "Visibility, who sees Cowork": a purple box "Discovery
  setting" with "AI experiences enabled by usage-based billing" and "Controls visibility only, not
  access", with an arrow to a grey box "Sees Cowork; billing not enabled: users request access,
  admins approve".
order: 20
source: demos/02-cowork/06-staying-in-control/readme.md
gamma_prompt: >
  Slide titled "Governance for admins", subtitle "Who can use Cowork, who sees it, and what it may
  reach". Left column: five short bullets. Right column: the provided diagram contrasting access,
  granted by a spending policy, with visibility, controlled by the discovery setting. White
  background, calm pastel accents. Use exactly the one image given for this card; do not generate or
  add any other images, icons or logos.
---

# Governance for admins

## Content

- A **spending policy** that covers the user and selects Cowork grants access, even at a one-credit limit
- The **discovery setting** controls visibility only; visible users without billing can request access
- **Cowork Browsing** is off by default and can be limited to security groups
- **Plugins** deploy to everyone or to groups and are allowed or blocked in Agents > Tools
- The **usage report** and Microsoft Purview cover adoption, auditing, labels and DLP

## Speaker Notes

Control does not stop at the individual user. Admins decide whether Cowork is available at all, and to whom.

Spending policy: under Copilot, Cost Management, Configuration, a policy grants access when its scope includes the user and it selects Cowork under Select agents and services; a limit of one credit is enough. To block a user, remove them from the scope, and rely on the policy's limits and alerts so no single user drains the tenant's Copilot Credits.

Discovery setting: AI experiences enabled by usage-based billing controls visibility only, not access. If Cowork is visible but billing is not enabled, users can request access and admins approve.

Cowork Browsing: the tenant setting is off by default; turn on Allow browser access in the Cowork settings, limit it to security groups and review the audit log of browser tasks. Model profiles under Cost management, Configuration let you build a Cowork-only profile of at least two models.

Plugins: deploy them to everyone or to groups, and allow or block them in Agents, Tools. Org-wide sharing needs admin approval.

Usage report and Purview: the Cowork usage report in the Microsoft 365 admin center shows active users, total tasks and scheduled versus user-initiated tasks. Purview supports Cowork for DSPM, auditing, sensitivity labels, DLP and more.
