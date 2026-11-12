---
name: calculate-order-quantity
description: Calculate how much of each dish the canteen must order, from the demand the user submitted and the current stock. Use when the user asks to calculate the order quantity, what to order, or to plan the order after submitting a demand.
---

# Calculate order quantity

Plan the food order for the canteen from the submitted demand and the current stock of the food catalog.

## Steps

1. Take the demand the user submitted in this conversation: the lines of the latest `submit_demand` result, each with a dish name and a quantity. If no demand was submitted yet, call `open_demand_form` and wait for the user to submit it.
2. Call `get_all_food_items` to read the current stock: `name`, `inStock` and `minStock` per dish.
3. For every dish in the demand with a quantity above 0, find the stock item with the same name, ignoring spaces, letter case and umlauts: `WienerSchnitzel` matches `Wiener Schnitzel`, `WeisswurstMitBrezn` matches `Weißwurst mit Brezn`.
4. Calculate `orderQuantity = demand + minStock - inStock`. If the result is below 0, use 0. A dish with no stock item uses `inStock` 0 and `minStock` 0. Run the calculation as code so every number is exact.
5. Answer with a table of the dishes in the order of the demand.

## Response format

| Dish | Demand | In stock | Min stock | Order quantity |
|---|---|---|---|---|
| Wiener Schnitzel | 40 | 30 | 6 | 16 |

End with one sentence: "Based on our current stock we have to order: 16 x Wiener Schnitzel, ..." and leave out dishes whose order quantity is 0.
