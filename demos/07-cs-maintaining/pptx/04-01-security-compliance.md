---
slide: "04-01"
topic: 04-advanced-channels
title: "Choosing an advanced channel"
subtitle: "Reach beyond Microsoft 365, with its own sign-in limits"
layout: diagram-full
visual-weight: full
visual-type: svg
media-source: opus-svg
media-file: demos/07-cs-maintaining/pptx/images/04-01-advanced-channels.svg
order: 10
source: demos/07-cs-maintaining/04-advanced-channels/readme.md
gamma_prompt: >
  Slide titled "Choosing an advanced channel", subtitle "Reach beyond Microsoft 365, with its own
  sign-in limits". The provided comparison diagram of four channels across the full card width, rows
  for use, authentication and what to watch, with one caption line below. Use exactly the one image
  given for this card; do not generate or add any other images, icons or logos.
---

# Choosing an advanced channel

## Content

- Advanced channels are **Standard-agent** channels and trade Microsoft sign-in for reach

## Speaker Notes

This optional topic is for agents that must reach people outside Microsoft 365: on a public website, inside your own app or on a phone messenger. Each channel brings its own authentication limits.

Demo website: every published agent gets one for testing with teammates and stakeholders. Learn is explicit that its URL never goes to customers.

Live website: the embed code on the Web channel only appears with No authentication, because an anonymous visitor cannot sign in. Turn on secured access and use tokens.

Mobile or custom app: the app talks to the agent over the Direct Line API. That is developer work, with the secret on the server and a token in the client.

WhatsApp: it runs through Azure Communication Services and accepts only No authentication or manual authentication. Agents connected before October 23, 2026 keep working; no new connection can be set up after that date.

Agent types: everything here applies to Standard agents. GitHub Copilot agents publish to Microsoft 365, Teams and a website today.
