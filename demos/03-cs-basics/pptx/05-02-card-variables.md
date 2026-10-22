---
slide: "05-02"
topic: 05-adaptive-cards
title: "From card inputs to variables"
subtitle: "Input id, binding and type must agree"
layout: split-code
visual-weight: 1/2
visual-type: svg
media-source: existing
media-file: demos/03-cs-basics/05-adaptive-cards/_images/food-demand-card-overview.svg
photo-link: demos/03-cs-basics/05-adaptive-cards/_images/food-demand-card-overview.svg
visual-prompt: >
  Existing demo diagram: the Submit Demand card in CS-Food Stock Buddy takes a quantity for each of nine
  dishes, stores all nine as numbers in Global.orderDemand and confirms only the three dishes above 0.
order: 15
source: demos/03-cs-basics/05-adaptive-cards/demo-food-demand-card.md
gamma_prompt: >
  Slide titled "From card inputs to variables", subtitle "Input id, binding and type must agree".
  Layout: split code. Left column a light grey panel with the YAML excerpt of the node's output binding
  and output type, exactly as given; right column the provided diagram of the demand card, its nine
  typed outputs, Global.orderDemand and the filtered confirmation, at its natural aspect ratio, never
  cropped. Use exactly the one image given for this card; do not generate or add any other images,
  icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# From card inputs to variables

## Content

- Each input **id** becomes a typed output bound to a topic variable
- `Global.orderDemand` keeps all nine numbers for the order calculation

```yaml
output:
  binding:
    qty.WienerSchnitzel: Topic.qtyWienerSchnitzel
    qty.PizzaNapoli: Topic.qtyPizzaNapoli
    qty.GreenCurry: Topic.qtyGreenCurry
outputType:
  properties:
    qty.WienerSchnitzel: Number
```

## Speaker Notes

When the manager selects Submit Demand, every input id of the card becomes a node output. The diagram follows the nine numbers from the card to the confirmation.

Three-part contract: the input id in the JSON, the output binding that maps it to a variable and the output type must match. The excerpt shows three of the nine bindings and one type; numbers have to stay numbers, or the order calculation later works on text.

Edit Schema: if a generated variable has the wrong type, such as a number read as text, fix it with Edit Schema in the node properties or in the code editor.

Global record: a Set a variable value node stores all nine quantities as one record in Global.orderDemand, so the order topic of the next module can read it.

Confirmation: a second formula keeps only rows with a quantity above 0 and turns them into compact JSON. That filter also catches clients that ignore min on a number input.
