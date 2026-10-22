---
slide: "01-04"
topic: 01-standard-vs-github-copilot
title: "Matching the harness to the task"
subtitle: "Light tasks stay Standard, heavy ones earn the GitHub Copilot harness"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/06-cs-gh-copilot/pptx/images/01-04-task-weight-harness.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text
  #24292f and #57606a, pastel fills, no heading inside the image. Top row: a blue box "Light task"
  (bounded data, stable actions, one main outcome, Standard harness is enough) beside a purple box
  "Heavy task" (runs longer, several systems, large files, several outputs, a route that changes from
  run to run). Below the caption "The two harnesses can share one solution": a blue box "Standard
  agents" (the responsive layer users talk to) and a purple box "GitHub Copilot agent" (runs on a
  schedule, turns Excel workbooks into Dataverse tables, tidies SharePoint) with an arrow between
  them, and a green band "Only validated output goes back into the shared data". Static.
order: 6
source: demos/06-cs-gh-copilot/01-standard-vs-github-copilot/readme.md
gamma_prompt: >
  Slide titled "Matching the harness to the task", subtitle "Light tasks stay Standard, heavy ones
  earn the GitHub Copilot harness". Left column: four short bullets on task weight, the cost of the
  GitHub Copilot harness on a simple task, the route that changes from run to run and the shared data
  curation solution. Right column, wider than the left: the provided diagram of a light and a heavy
  task above a Standard agent and a scheduled GitHub Copilot agent sharing one solution, at its
  natural 16:9 aspect ratio, never cropped. White background, calm pastel accents. Use exactly the one
  image given for this card; do not generate or add any other images, icons or logos.
---

# Matching the harness to the task

## Content

- **Light task**: bounded data, stable actions, one main outcome, so the **Standard** harness is enough
- **Heavy task**: longer, several systems, large files, a route that changes from run to run
- On a simple task the **GitHub Copilot** harness adds reasoning, latency and **Copilot Credits**
- In a shared solution, **Standard** agents stay the responsive layer and a scheduled **GitHub Copilot** agent curates the data

## Speaker Notes

This slide turns the choice between the two kinds of agent into a question of task weight. The diagram shows a light and a heavy task above one shared solution.

Light task: Learn's harness comparison describes it as a bounded set of data, a stable set of actions and one main outcome. The Standard harness fits, and the GitHub Copilot harness would only add reasoning, latency and Copilot Credits without a better result.

Heavy task: it runs longer, spans several systems, loops over large files and produces several outputs. The GitHub Copilot harness earns its cost when the route changes from run to run: evidence comes from several sources, documents need interpretation, an intermediate result decides the next step, or a failed step can be recovered by another path. Connectors or MCP servers alone don't call for it.

One shared solution: in Learn's data curation scenario, high-volume Standard agents stay the responsive layer users talk to. A GitHub Copilot agent runs on a schedule, turns large Excel workbooks into structured Dataverse tables and tidies the SharePoint content those agents search.

Validated output only: only validated output goes back into the shared data, and each agent keeps the kind it was created as, so the one-way rule still holds.
