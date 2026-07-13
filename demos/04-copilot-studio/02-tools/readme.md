# Extending Copilot Studio Agents with Tools

A grounded agent can answer questions; a tooled agent can act. This topic moves from an agent that reads knowledge to one that calls real systems: running an AI prompt, invoking a connector, reading and writing Dataverse, processing documents, reaching a standardized set of tools over MCP, calling a REST API, and even driving a UI that has no API at all. Each tool type has a job it does best, and the maker skill is choosing the right one.

The classic authoring surface exposes all of this from the Actions area, and adding a tool is a configuration task, not a coding task. MCP returns in the new experience ([04-workflows-and-mcp](../04-ui-update/04-workflows-and-mcp/readme.md)) under a redesigned Tools surface, so the concepts you learn here carry straight across.

## What to teach

- Prompt actions: reusable AI Builder prompts the agent runs as a tool to summarize, classify, or extract, configured with plain-language instructions and typed inputs and outputs.
- Connectors: hundreds of prebuilt Power Platform connectors (SharePoint, Outlook, Salesforce, SQL) added as actions, plus custom connectors for services that lack a prebuilt one.
- Dataverse: the operational data store behind Power Platform, used both as a knowledge source and as a read/write target, so an agent can look up and update business records.
- AI Builder and the Document Processing managed agent: a prebuilt agent that extracts, categorizes, and validates fields from invoices, contracts, and receipts without you training a model from scratch.
- Model Context Protocol (MCP): connect to an MCP server to give the agent a standardized, versioned set of tools and resources that many agents can share, which in classic requires generative orchestration.
- REST APIs: connect to any REST endpoint from an OpenAPI description with authentication and tool descriptions, the escape hatch when no connector fits.
- Computer use: automate visual tasks by having the agent interpret the screen and act on websites or desktop apps, for legacy systems with no API.

## When to use which tool

| Need | Best tool |
|------|-----------|
| Summarize, classify, or extract with AI | Prompt action |
| One action in a known service | Connector |
| Read or write business records | Dataverse |
| Pull fields from invoices or contracts | Document Processing managed agent |
| A shared, versioned toolset across agents | MCP server |
| Reach a service with no connector | REST API tool |
| Drive a legacy app that has no API | Computer use |

## Create Tables in Dataverse

The connector and Dataverse demos in this topic use two related tables. Create them in your environment before running those demos.

1. Table: OfferRequests

Primary Name Column: requestId (Text)
Columns:

id (GUID, Primary Key)
requestId: (String)
supplierId (Whole Number)
transportationCost (Currency)
timestamp (DateTime)

2. Table: OfferRequestDetails

Primary Name Column: productName (Text)
Columns:

basePrice (Currency)
offeredPrice (Currency)
requestedAmount (Whole Number)
offeredAmount (Whole Number)
deliveryDurationDays (Whole Number)
isAvailable (Boolean)
offerId (Lookup to Offers table)

Relationship:

Create a one-to-many relationship from OfferRequests to OfferRequestDetails using the offerId lookup field.

## Key Topics covered in this module

[Overview of prompts](https://learn.microsoft.com/microsoft-copilot-studio/prompts-overview)

[Use Power Platform connectors as tools](https://learn.microsoft.com/microsoft-copilot-studio/advanced-connectors)

[Add Dataverse as knowledge to an agent](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-dataverse)

[Document Processing managed agent](https://learn.microsoft.com/power-platform/release-plan/2025wave1/ai-builder/enhance-operational-efficiency-agent)

[Extend your agent with Model Context Protocol](https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp)

[Extend your agent with tools from a REST API](https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-rest-api)

[Automate web and desktop apps with computer use](https://learn.microsoft.com/microsoft-copilot-studio/computer-use)
