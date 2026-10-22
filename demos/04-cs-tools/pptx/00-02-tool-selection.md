---
slide: "00-02"
topic: 04-cs-tools
title: "Overview"
subtitle: "Seven tool types, one demo agent each"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: opus-svg
media-file: demos/04-cs-tools/pptx/images/00-02-overview.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading inside the image, no
  arrow crossing a box or a label. Seven numbered cards in delivery order, four in the top row and three
  in the bottom row, joined by short arrows and one connector in the gap between the rows. Each card:
  number, tool type, demo agent, what it does. 01 Prompt, CS-Food Stock Buddy, turns demand and stock
  into the canteen order. 02 Dataverse, CS-Travel Expense Refund, writes each travel claim as a table
  row. 03 Connector, CS-Travel Agent, posts the trip summary to a Teams channel. 04 Agent flow,
  CS-Health Advisor, classifies symptoms and waits for a reviewer. 05 REST API, CS-Food Stock Buddy,
  reads live stock and books deliveries. 06 MCP server, CS-Restaurant HR Manager, finds staff and books
  shifts. 07 Computer use, CS-Grey Logistics IT Help Desk, reads and fills web apps that have no API.
  Static.
order: 2
source: demos/04-cs-tools/readme.md
gamma_prompt: >
  Slide titled "Overview", subtitle "Seven tool types, one demo agent each". Left column: five short
  bullets walking the path through the module. Right column, wider than the left: the provided diagram
  of seven numbered tool cards, each with its demo agent, as an inline content image at its natural 16:9
  aspect ratio, never cropped, never used as a background or side accent. Use exactly the one image
  given for this card; do not generate or add any other images, icons or logos.
---

# Overview

## Content

- A **prompt** calculates the canteen order, and a Dataverse table keeps every travel claim
- One Teams action posts a trip summary, and two **agent flows** run the Health Advisor's fixed steps
- Live canteen stock comes from a **REST API**, staff and shifts from an MCP server
- **Computer use** reads and fills web apps that have no API
- Each tool type has a job it does best, and choosing the right one is the maker skill

## Speaker Notes

This slide walks the seven topics once, in delivery order, with the agent that each demo builds.

Prompt and Dataverse: CS-Food Stock Buddy hands demand and stock to a prompt that returns the order quantities. CS-Travel Expense Refund saves every claim as a row through an agent flow.

Teams action and agent flows: CS-Travel Agent posts a trip summary with one prebuilt Microsoft Teams action. CS-Health Advisor classifies symptoms in one flow and waits for a reviewer in a second one.

REST API and MCP: CS-Food Stock Buddy comes back and swaps its sample stock for the live food catalog API. CS-Restaurant HR Manager reads staff and books shifts through the repository's HR MCP server.

Computer use: CS-Grey Logistics IT Help Desk reads values from one web app and types records into another. It is the route for systems that offer no API and no connector.

Choosing the right tool: a grounded agent can answer questions, a tooled agent can act. Each topic closes with when its tool fits and when another one fits better.
