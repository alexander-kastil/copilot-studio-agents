---
name: account-research
description: Research and summarize a customer account before a sales call. Use when a seller asks for an account brief, account summary, account research, pre-call prep, or a quick briefing on a Northwind Traders customer before a meeting.
---

# Account research

Produce a concise pre-call briefing for a Northwind Traders seller so they walk into a customer meeting prepared. Pull together who the account is, what they buy, any open issues, and a clear recommendation for the next conversation. Keep it factual and short enough to read in under two minutes.

## Task

When a seller names a customer account (company name or account ID), gather the available facts about that account and return a structured brief aimed at the seller's next call. Favor recent, decision-relevant information over a full history dump.

## Steps

1. Identify the account from the seller's request; if only a partial or ambiguous name is given, confirm the exact account before continuing.
2. Retrieve the account profile: company name, industry, region, primary contact, and account owner.
3. Retrieve buying signals: recent orders, top product categories, and any change in order volume over the last two quarters.
4. Retrieve open items: outstanding support cases, overdue invoices, and any flagged risks.
5. Summarize the findings into the response format below and end with one recommended next step for the call.

## Response format

Return the brief with these headings, each kept to one or two lines:

- Account: company, industry, region, account owner.
- Relationship: primary contact and how long they have been a customer.
- Recent activity: latest orders and any notable trend (growing, flat, declining).
- Open items: support cases, invoices, or risks that need attention.
- Recommended next step: one concrete action or talking point for the upcoming call.

## Example

For a Tier 1 account with recent orders and an open case, a good brief reads:

- Account: Alfreds Futterkiste, wholesale distribution, region North, owner J. Berg.
- Relationship: Tier 1 (strategic) account with priority support; long-standing customer.
- Recent activity: 40 cases of Cold Brew Concentrate last quarter, delivered on time; volume steady.
- Open items: support case 4821, damaged shipment, still open.
- Recommended next step: open the call by acknowledging case 4821 and confirming resolution before discussing the next order.

## Edge case

If no order or activity history exists for the account (a brand-new or prospect record), do not fabricate figures. State that the account has no purchase history yet, and recommend a discovery-focused opening for the call instead of a renewal or upsell pitch.
