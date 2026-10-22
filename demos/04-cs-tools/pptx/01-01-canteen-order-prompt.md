---
slide: "01-01"
topic: 01-prompts
title: "Calculating the canteen order with a prompt"
subtitle: "CS-Food Stock Buddy passes demand and stock as JSON"
layout: split-code
visual-weight: 1/2
visual-type: svg
media-source: existing
media-file: demos/04-cs-tools/01-prompts/_images/food-order-prompt-overview.svg
photo-link: demos/04-cs-tools/01-prompts/_images/food-order-prompt-overview.svg
visual-prompt: >
  Existing demo diagram: Global.orderDemand and the Set sample stock table flow as JSON into the
  CS-Calculate food to order prompt, which returns 16 Wiener Schnitzel, 8 Pizza Napoli and 12 Green Curry.
order: 3
source: demos/04-cs-tools/01-prompts/demo-food-order-prompt.md
gamma_prompt: >
  Slide titled "Calculating the canteen order with a prompt", subtitle "CS-Food Stock Buddy passes
  demand and stock as JSON". Split code layout: the short YAML of the prompt node in a light grey
  monospace panel on the left, the provided data flow diagram on the right at its natural aspect ratio,
  never cropped. Use exactly the one image given for this card; do not generate or add any other images,
  icons or logos.
---

# Calculating the canteen order with a prompt

## Content

- The topic binds both inputs with **JSON()** and reads the answer from the output's `text` field

```yaml
- kind: InvokeAIBuilderModelAction
  input:
    binding:
      foodDemand: =JSON(Global.orderDemand)
      foodStock: =JSON(Topic.foodStock)
  output:
    binding:
      predictionOutput: Topic.orderQuantityRecord
```

## Speaker Notes

A prompt is a reusable, single-turn instruction to a model that the agent calls like any other tool. Here it takes over the arithmetic someone used to do by hand: holding the canteen's demand against the stock list.

The rule: order quantity is demand plus minimum stock minus stock in hand, never below zero. With 40 Wiener Schnitzel demanded, 30 in stock and a minimum of 6, the prompt orders 16.

The binding: the topic passes Global.orderDemand and Topic.foodStock through JSON(), so the prompt receives two JSON texts. It reads the answer from the text field directly, because wrapping that in JSON() again escapes it a second time.

The stand-in: a node named Set sample stock holds nine rows with the API's field names. The REST API topic later replaces that one node with a live call and leaves the prompt untouched.

The orchestrator path: as a tool with the description Calculate food to order, the same prompt can also run without the topic. Then the model fills the inputs itself or asks for missing values, which is why the topic carries the real data.
