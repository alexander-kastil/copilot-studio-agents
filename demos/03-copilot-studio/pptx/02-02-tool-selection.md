---
slide: "02-02"
topic: 02-tools
title: "How the orchestrator picks a tool"
subtitle: "Tool names, descriptions and routing lines decide which tool runs"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/03-copilot-studio/pptx/images/02-02-tool-selection.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, Helvetica, Arial, sans-serif,
  borders #8c959f 2px, text #24292f and #57606a, minimum 28px type, no heading inside the image, no
  arrow crossing a box or a label. Left: three grey #f6f8fa question cards from the Product Support
  lab, "What product support files are available?" (calls: List product support files), "How many
  Nimbus 500 units do we have in stock, and where are they?" (calls: Get product stock levels) and
  "Give me everything you have on the Aurora X1: which support documents exist and how many units
  are left." (calls: both tools in one turn), each with an arrow into a purple #f3edff box "Enhanced
  orchestrator" that reads the routing lines in the instructions, every tool name and description.
  Right: two blue #eaf2ff tool cards, "List product support files" (SharePoint: List folder, Products
  document library) and "Get product stock levels" (Excel: List rows present in a table, Stock table
  in ProductInventory.xlsx). SMIL animation on a 12 second loop: each question in turn lights up
  amber, a dot travels to the orchestrator and on to its tool, and the third question sends two dots
  to both tools.
order: 7
source: labs/03-copilot-studio/02-tools/lab-3/readme.md
gamma_prompt: >
  Slide titled "How the orchestrator picks a tool", subtitle "Tool names, descriptions and routing
  lines decide which tool runs". Left column: five short bullets on what the orchestrator reads,
  routing lines in the instructions, two tool calls in one turn, negative guidance against overlap,
  and the reasoning card as proof. Right column, wider than the left: the provided diagram of three
  questions passing through the enhanced orchestrator to a SharePoint tool and an Excel tool, as an
  inline content image at its natural 16:9 aspect ratio, never cropped, never used as a background or
  side accent. White background, calm pastel accents. Use exactly the one image given for this card;
  do not generate or add any other images, icons or logos.
---

# How the orchestrator picks a tool

## Content

- The orchestrator reads each **tool name and description** to decide whether a question is its job
- **Routing lines** in the instructions say when the business wants a tool used
- A question that needs both sources gets **two tool calls** in one turn
- **Negative guidance** on the over-selected tool stops two tools from overlapping
- The **reasoning card** in the maker preview shows which tool ran

## Speaker Notes

This slide comes from the Product Support Assistant lab, where one agent gets a SharePoint tool and an Excel tool. It shows how the agent decides which of them a question needs.

Name and description: the orchestrator has no memory of your intent and reads only the tool name, the description and the input descriptions. Renaming List folder to List product support files in business language is what makes selection reliable.

Routing lines: the description says what a tool can do, the instructions say when the business wants it used. An explicit routing line is the cheapest way to stop an agent from answering a live-data question from general knowledge.

Two tools in one turn: walk the three questions in the diagram, the last one asks for documents and stock together. The orchestrator then calls both tools and combines the results into one answer.

Negative guidance: a vague description such as Gets product data makes the orchestrator pick the wrong tool. Adding "Do not use this tool to list documents or files" to the over-selected tool fixes the overlap.

Reasoning card: with End user preview off, the card shows each tool execution step and the values it returned. It is the instrument for every selection problem.
