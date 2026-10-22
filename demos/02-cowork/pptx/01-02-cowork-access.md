---
slide: "01-02"
topic: 01-intro
title: "Setting up Cowork access"
subtitle: "A spending policy that selects Cowork"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/02-cowork/pptx/images/01-02-cowork-access.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. Left: blue box "Pilot user in your
  pilot group, Microsoft 365 Copilot license". Arrow into a purple card "Spending policy, Copilot > Cost
  Management" with six rows: "Usage-based billing turned on", "Scope includes the user", a green row
  "Selects Cowork", "Limit: one credit is enough", "Per-user limit, billing method", "Model profile
  (optional)". Arrow out to a green box "Cowork in the top toggle next to Chat, copilot.cloud.microsoft".
  Bottom row under the caption "Set separately, each with its own job": four grey chips "Anthropic
  models: the models Auto picks", "Frontier: App skill and GPT 5.5", "Discovery setting: visibility
  only", "Agents > All agents: deprecated for access".
order: 4
source: demos/02-cowork/01-intro/readme.md
gamma_prompt: >
  Slide titled "Setting up Cowork access", subtitle "A spending policy that selects Cowork". Left
  column: five short bullets on the license, usage-based billing, the spending policy and the optional
  settings. Right column, wider than the left: the provided diagram of a pilot user reaching Cowork
  through a spending policy, with four separate settings listed below, at its natural 16:9 aspect
  ratio, never cropped. White background, calm pastel accents. Use exactly the one image given for
  this card; do not generate or add any other images, icons or logos.
---

# Setting up Cowork access

## Content

- Every pilot user and the setup admin need a **Microsoft 365 Copilot license**
- Turn on **usage-based billing** under Copilot > Cost Management
- A **spending policy** scoped to the pilot group with Cowork selected grants access; one credit is enough
- **Anthropic models** and **Frontier** are optional for access
- The **discovery** setting controls visibility only

## Speaker Notes

Before anyone opens Cowork, a tenant admin enables a few things, and this is admin work rather than maker work. A user gets Cowork when a spending policy that selects Cowork covers them.

Copilot license: every pilot user, and the admin account doing the setup, needs an active Microsoft 365 Copilot license. Global or Billing administrators create spending policies; AI or License administrators can edit them but not create them.

Usage-based billing: a Global or Billing administrator opens Copilot > Cost Management in the Microsoft 365 admin center and selects Get Started. Cowork is metered in Copilot Credits, not a per-user seat.

Spending policy: scope it to your pilot group and select Cowork under Select agents and services. A one-credit limit grants access, and a per-user limit keeps one person from draining the whole budget.

Optional settings: Anthropic models default to No users in the EU, EFTA and the UK and are excluded from the EU Data Boundary, so route that choice through compliance review. Frontier is needed only for the App skill and GPT 5.5.

Discovery: the AI experiences enabled by usage-based billing setting controls visibility only. If Cowork still does not appear, first check whether the user is in scope of a spending policy that selects Cowork.
