---
slide: "04-02"
topic: 04-advanced-channels
title: "Web channel security and Direct Line"
subtitle: "The secret stays on the server, the client gets a token"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/07-cs-maintaining/pptx/images/04-02-secured-access.svg
order: 11
source: demos/07-cs-maintaining/04-advanced-channels/readme.md
gamma_prompt: >
  Slide titled "Web channel security and Direct Line", subtitle "The secret stays on the server, the
  client gets a token". Left: four bullets. Right, wider: the provided diagram of an app asking a
  server for a token, the server exchanging a Direct Line secret, and the app talking to the agent over
  the Direct Line API. Use exactly the one image given for this card; do not generate or add any other
  images, icons or logos.
---

# Web channel security and Direct Line

## Content

- **Require secured access** makes every client present a secret or a token
- The **secret** lives only in server code; browsers and apps get a **token**
- Two secrets work at once, so you **rotate without downtime**
- The app starts a conversation, posts messages and reads replies over **Direct Line**

## Speaker Notes

Without further settings, anyone who knows an agent's ID can reach it through the demo and custom website channels. This slide shows how to close that door.

Require secured access: it sits under Settings, Security, Web channel security. Every client must then present a Direct Line secret or a token generated from it, and the switch takes up to two hours to propagate, so plan it before a launch.

Secret and token: a secret belongs only in server code. Your service exchanges it for a token that is valid for one conversation and expires unless it is refreshed.

Two secrets: both work at the same time, so you move clients to the second secret and then regenerate the first.

Direct Line: an app requests a token, starts a conversation, posts the user's messages and reads the agent's replies. For new apps, Learn also points to the Microsoft 365 Agents SDK client, which connects with the user's own sign-in.
