---
name: copilot-studio-credits
description: Check and configure a tenant so GitHub Copilot harness agents, workflows and apps in Copilot Studio and Work IQ grounding have Copilot Credits (Power Platform billing plans, M365 spending policy, Azure budget).
---

# Copilot Studio and Work IQ credit setup

Use this skill when:

- The user wants a tenant or environment ready for GitHub Copilot harness agents, workflows or apps in Copilot Studio.
- Building, Preview, tests or app builds are blocked or warn about credits.
- Work IQ (Preview) is missing, or Work IQ calls fail with a quota error.
- The user asks for cost guardrails (budgets, limits, alerts) for Copilot Studio.

For Work IQ quota errors only, the `work-iq-credits` skill covers the Microsoft 365 spending policy in more depth.

## Facts

- GitHub Copilot harness usage is never covered by a Microsoft 365 Copilot license. Billing starts at build time: authoring, Preview, tests and evaluations consume credits.
- Credits are charged to the environment where the agent runs, from its prepaid allocation or its pay-as-you-go billing plan.
- Apps are created in the maker's personal developer environment (Copilot Managed Runtime routing, cannot be changed). It is created automatically, is Managed, has no Dataverse, and needs its own billing plan or allocation. Without it the build fails with `No usage quota is available for your account`.
- Running apps is billed per user through the Microsoft 365 spending policy service **Copilot Managed Runtime**, not through the environment.
- Developer and trial environments are billed since 1 September 2026.
- Work IQ is billed through a Microsoft 365 Copilot Credits spending policy that includes Work IQ API, separately from Power Platform.
- Azure budgets only alert. A hard stop needs a per-agent limit with Stop usage in Power Platform.

## Procedure

### 1. Identify the environment (read only)

Ask which environment the user builds in, or have them check the Copilot Studio environment switcher. Do not assume the default environment.

### 2. Power Platform check (read only)

1. Open `https://admin.powerplatform.microsoft.com/billing/licenses/copilotStudio/overview`.
2. Summary: read prepaid Copilot Credits capacity (purchased, assigned, consumed) and the count of pay-as-you-go billing plans.
3. **Environments** tab: for each environment record type, Pay-as-you-go, Allocated capacity, Draw from tenant.
4. **Manage billing plans**: for each plan, use **See details** to read meters, region, Azure subscription, resource group and target environments.
5. Report:
   - whether the user's environment is on a plan with the **Copilot Studio** meter
   - the plan name, region, subscription and resource group
   - any environment with neither pay-as-you-go nor allocation (blocked)
   - the maker's personal developer environment for apps and whether it is on a plan

### 3. Microsoft 365 check (read only)

1. Open `https://admin.cloud.microsoft/#/copilot/costmanagement`.
2. Overview: policies at or near limit, top services, top users.
3. Configuration: confirm the policy covering the user includes **Work IQ API for custom apps and agents** and **Copilot Studio**, and read the monthly limit.

### 4. Propose changes and get approval

Every change below affects billing. Ask first, with concrete values, and wait for an explicit yes:

- Link an environment to a billing plan (region must match the environment).
- Allocate prepaid credits and choose the overage behavior.
- Raise the Microsoft 365 spending policy limit. Respect the minimum and recommended values the page shows.
- Create an Azure budget. Ask for amount, alert thresholds and recipient email.
- Set a per-agent monthly limit. Agents appear in **Manage Agents** only after they have billed credits. Warn when a limit is too low for a single build or preview session.

Never buy capacity packs or prepurchase plans for the user.

### 5. Apply approved changes

**Billing plan**: Licensing > Billing Plans > select plan > Edit > add the environment under target environments > Save. Verify with See details.

**Spending policy limit**: Cost management > Configuration > policy name > Spending limit > Limit monthly spending > value > Save changes. Verify the Monthly limit column.

**Azure budget**:
1. Azure portal > Resource groups > the billing plan's resource group > Cost Management > Budgets > Add.
2. Name, reset period Billing month, amount.
3. Next, then Set alerts with the approved conditions (for example Actual cost 80%, Forecasted cost 100%) and recipient.
4. Create.
5. Verify the budget appears in the list.
6. Leave existing budgets in the resource group unchanged.

**Per-agent limit**: Licensing > Copilot Studio > Manage Agents > agent > Set limit > credits, notification threshold, Stop usage > Save.

**Work IQ missing from the MCP list**: the one-time setup is creating the service principal for app ID `fdcc1f02-fc51-4226-8753-f668596af7f7` (`az ad sp create --id ...`). Have the user run it as Global Administrator. Do not run it yourself without approval.

### 6. Verify

1. One Preview question on a GitHub Copilot agent in the configured environment.
2. One Work IQ question.
3. Consumption shows up the next day in Power Platform Licensing > Copilot Studio > Environments and in Microsoft 365 Cost management > Overview.

## Rules

- Steps 1 to 3 are read only.
- Report exact values read from the admin centers. Do not estimate consumption.
- Close browser tabs you opened when done.
