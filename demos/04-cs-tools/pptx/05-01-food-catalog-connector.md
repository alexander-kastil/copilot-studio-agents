---
slide: "05-01"
topic: 05-rest-api
title: "Live stock from the food catalog API"
subtitle: "An OpenAPI file becomes CS-Food Catalog and three tools"
layout: diagram
visual-weight: 1/2
visual-type: svg
media-source: existing
media-file: demos/04-cs-tools/05-rest-api/_images/food-catalog-rest-connector-overview.svg
photo-link: demos/04-cs-tools/05-rest-api/_images/food-catalog-rest-connector-overview.svg
visual-prompt: >
  Existing demo diagram: cs-food-catalog.json becomes the CS-Food Catalog connector, three of whose seven
  operations become tools that CS-Food Stock Buddy uses against food-catalog-api-dev.
order: 14
source: demos/04-cs-tools/05-rest-api/demo-food-catalog-rest-connector.md
gamma_prompt: >
  Slide titled "Live stock from the food catalog API", subtitle "An OpenAPI file becomes CS-Food Catalog
  and three tools". Left column: four short bullets on the wizard, the three selected tools, the
  operations left out and the live stock in the order topic. Right column, wider than the left: the
  provided diagram as an inline content image at its natural 16:9 aspect ratio, never cropped, never used
  as a background or side accent. Use exactly the one image given for this card; do not generate or add
  any other images, icons or logos.
---

# Live stock from the food catalog API

## Content

- The **REST API tool** wizard turns cs-food-catalog.json into the CS-Food Catalog custom connector
- Three of seven operations become tools: CS-Gets all food, CS-Add food and CS-Update food stock quantity
- UpdateFood, the two lookups and **Delete food item** stay out
- Calculate order quantity now reads **CS-Gets all food** instead of Set sample stock

## Speaker Notes

CS-Food Stock Buddy calculated its order from a sample table that never changes, so every order went wrong as soon as a delivery arrived. The food catalog API already knows the real stock, and its OpenAPI file describes everything it can do.

The wizard: Add a tool, Add new REST API, upload the file, describe the API, pick the authentication and select the operations. Custom connectors import OpenAPI 2.0; the REST API tool (preview) also translates a v3 file.

Three tools: every operation you select becomes a tool the orchestrator can call on its own. The canteen needs to read the stock, add a dish and book a delivery.

Left out: a canteen agent that rewrites or deletes dishes is a risk nobody asked for. You expose only the operations you select.

Live stock: the node keeps the variable name foodStock, so the prompt node from topic 01 stays untouched. The free-tier web app starts cold, so open the API once before you demo it.
