---
slide: "03-01"
topic: 03-agent-harnesses
title: "Four harnesses in Copilot Studio"
subtitle: "The runtime you pick decides behavior, features and billing"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: opus-svg
media-file: demos/01-intro/pptx/images/03-01-four-harnesses.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  2px #8c959f borders, text #24292f and #57606a, pastel fills, minimum 28px type, no heading inside the
  image. Four equal cards in a row, each with a title, a one-line role, two short feature lines, a
  "Publishes to" line, a "Billing" line and a pill at the bottom. Blue #eaf2ff card "GitHub Copilot":
  role "Reasons toward a goal"; features "Plans, recovers, works with files", "Skills and memory";
  publishes "Internal or external"; billing "Copilot Credits"; pill "Module 6". Green #e9f7ef card
  "Standard": role "Follows the paths you define"; features "Topics, trigger phrases, branches", "Classic
  or generative orchestration"; publishes "Internal or external"; billing "Standard licensing"; pill
  "Modules 3 to 5". Purple #f3edff card "Copilot chat": role "Extends Copilot Chat for employees";
  features "Your organization's knowledge", "Each user's own permissions"; publishes "Internal teams";
  billing "Consumption or Microsoft 365 Copilot license"; pill "Like Agent Builder agents". Dashed amber
  #fff6e5 card "Customer Conversation" with a small "Preview" tag: role "Serves customers by chat and
  phone"; features "Sub-agents with a handover to a person", "Skills and memory"; publishes "Website chat
  or phone number"; billing "Copilot Credits"; pill "Not built in this class". Below the cards one wide
  grey #f6f8fa banner: "Chosen once, at creation: a Standard agent never becomes a GitHub Copilot agent,
  or back".
order: 10
source: demos/01-intro/03-agent-harnesses/readme.md
gamma_prompt: >
  Slide titled "Four harnesses in Copilot Studio", subtitle "The runtime you pick decides behavior,
  features and billing". Full-width diagram layout: title and subtitle at the top, the provided diagram
  across the whole card width at its natural aspect ratio, never cropped, then one caption line under it.
  Use exactly the one image given for this card; do not generate or add any other images, icons or logos.
---

# Four harnesses in Copilot Studio

## Content

- The harness is chosen **once, at creation**, and fixes behavior, features, publishing and billing

## Speaker Notes

Copilot Studio runs everything you build on a harness, and today there are four.

GitHub Copilot: for multistep business processes whose path depends on what each step returns. It plans, recovers from failed steps, creates and edits Office files and PDFs, and supports skills and memory. It bills Copilot Credits from the first build step; module 6 builds on it.

Standard: for rule-based agents and agent flows that must answer the same way every time. You define topics, trigger phrases and branches and choose classic or generative orchestration. Modules 3 to 5 build on it.

Copilot chat: extends Microsoft 365 Copilot Chat with your organization's knowledge for employees, retrieved with each user's own permissions. It is the same kind of declarative agent that Agent Builder builds.

Customer Conversation: in preview, shown in Copilot Studio as the Customer Assist Agent. It serves customers through website chat or a phone number, with sub-agents that hand over to a person. This class builds voice on Standard agents instead.

The banner is the rule to remember: you can't convert an agent between the standard and GitHub Copilot harnesses, so decide before you build.
