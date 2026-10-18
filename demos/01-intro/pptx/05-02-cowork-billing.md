---
slide: "05-02"
topic: 05-licensing-setup
title: "Cowork billing"
subtitle: "Prepaid credits first, pay-as-you-go after"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/01-intro/pptx/images/05-02-cowork-billing.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. Left: a blue box "Cowork usage in
  Copilot Credits" with an arrow into a two-stage bar. Green stage with badge "1", "Drawn down first",
  holding two white chips "Prepaid capacity packs" and "Copilot Credit Pre-Purchase Plan (P3)
  credits". Amber stage with badge "2", "Pay-as-you-go charges", "Apply only after packs and P3
  credits are exhausted", and a white chip "Azure subscription as the billing method". SMIL
  animation, 8 second loop: stage 1 is highlighted for the first half, stage 2 for the second.
order: 16
source: demos/01-intro/05-licensing-setup/readme.md
gamma_prompt: >
  Slide titled "Cowork billing", subtitle "Prepaid credits first, pay-as-you-go after". Left column:
  five short bullets. Right column: the provided diagram showing Cowork usage drawing down prepaid
  packs and P3 credits first and pay-as-you-go charges second. White background, calm pastel
  accents. Use exactly the one image given for this card; do not generate or add any other images,
  icons or logos.
---

# Cowork billing

## Content

- **Frontier preview**: a Microsoft 365 Copilot or E7 license, Frontier enrolment, Anthropic enabled as AI subprocessor
- **Copilot Credits**: metered by usage, not a per-user seat
- **Drawdown order**: prepaid capacity packs and P3 credits first, pay-as-you-go after
- **Activate** under Copilot, Cost Management with an Azure subscription and limits
- **Cowork Estimator** models credit usage before you enable it

## Speaker Notes

Cowork uses the same pay-as-you-go plumbing as the other services, with its own prerequisites and billing unit.

Frontier preview: Cowork is a Microsoft Frontier program preview. The tenant needs at least one Microsoft 365 Copilot or Microsoft E7 license, the tenant and the managing admin account enrolled in Frontier, and Anthropic enabled as an AI subprocessor.

Copilot Credits: Cowork is not a per-user seat. It is metered in Copilot Credits, so you pay only for what it actually consumes.

Drawdown order: prepaid capacity packs and Copilot Credit Pre-Purchase Plan (P3) credits are drawn down first. Pay-as-you-go charges apply only after they are exhausted.

Activate: in the Microsoft 365 Admin Center under Copilot, Cost Management, select Get Started, choose an Azure subscription, set the monthly and per-user limits and alert thresholds, then select Activate. Model credit usage with the Cowork Estimator before you do.
