# Tenant setup: Copilot Credits for GitHub Copilot agents and Work IQ

How to prepare a Microsoft 365 / Power Platform tenant so that agents, workflows and apps built with the **GitHub Copilot harness** in Copilot Studio, and **Work IQ** grounding, have the Copilot Credits they need.

## What consumes credits

| Feature | Covered by a Microsoft 365 Copilot license? | Billed through |
|---|---|---|
| GitHub Copilot harness agents, workflows, apps | No. Billing starts when you start building: authoring, Preview, tests and evaluations all consume credits | Power Platform: the environment's prepaid allocation or its pay-as-you-go billing plan |
| Work IQ (Preview) tool and Work IQ API / MCP | No | Microsoft 365 admin center: a Copilot Credits spending policy that includes **Work IQ API** |
| Standard harness agents | Yes, in Microsoft 365 channels for licensed users | Power Platform, otherwise |

Credits are charged to the **environment** where the agent runs, not to the maker. Apps are always created in the maker's personal developer environment, which needs its own billing (step 2).

## Prerequisites

- Global Administrator (for the one-time Work IQ setup) and Power Platform Administrator.
- An Azure subscription and resource group for pay-as-you-go billing.
- The Copilot Studio environment you build in (check the environment switcher in Copilot Studio; the current one is marked).

## 1. Power Platform: give the environment credits

1. Open the Power Platform admin center: `https://admin.powerplatform.microsoft.com/`
2. Go to **Licensing > Copilot Studio**.
3. On **Summary**, check **Prepaid capacity**. If *Copilot Credits capacity* shows 0 purchased, the environment must use pay-as-you-go.
4. Open the **Environments** tab. For your environment, check the columns **Pay-as-you-go**, **Allocated capacity** and **Draw from tenant**.
   - Pay-as-you-go **Yes**: the environment is billable. Continue with step 2.
   - Pay-as-you-go **No** and no allocation: GitHub Copilot harness work is blocked there.

### Link the environment to a billing plan (if needed)

1. **Licensing > Copilot Studio > Manage billing plans** (or **Licensing > Billing Plans**).
2. Select a plan whose **Products** include **Copilot Studio** and whose **Region** matches the environment, then **Edit**. Or create one with **New billing plan**: name, Azure subscription, resource group, region, meter **Copilot Studio** (plus Dataverse if needed), target environments.
3. Add the environment under target environments and save.
4. **See details** on the plan shows the meter list and target environments for verification.

Note: developer and trial environments are billed for usage since 1 September 2026.

### Prepaid alternative

If you bought Copilot Credit capacity packs, use **Manage Copilot Credits**, select the environment, enter an allocation, and choose the overage behavior under **Capacity overages**:

- **Draw from the available capacity in my tenant**
- **Bill to my pay-as-you-go billing plan**

## 2. Power Platform: give the apps environment credits

Apps in Copilot Studio (preview) are never built in the environment you build agents in. Copilot Studio routes every maker to a **personal developer environment**, which needs its own credit source, otherwise the build fails with `No usage quota is available for your account`. Follow [Tenant setup: Apps in Copilot Studio](./09-copilot-studio-apps-setup.md) to find that environment, add it to the same billing plan, and check runtime coverage.

## 3. Microsoft 365: spending policy for Work IQ

1. Open the Microsoft 365 admin center: `https://admin.cloud.microsoft/#/copilot/costmanagement`
2. On **Configuration > Spending policies**, open the policy that covers your users (by default *All Users Policy*).
3. Confirm **Agents and services** includes **Work IQ API for custom apps and agents** and **Copilot Studio**.
4. Click **Spending limit** and set **Limit monthly spending** to at least the minimum the page shows (1,000 credits for a small tenant; 2,500 or more recommended). Save.
5. Optional: **Define alerts** with a threshold and recipients.

A policy at its limit returns `The caller has exhausted the AI credit quota for WorkIQ.` until the limit is raised or the 1st of the next month.

## 4. Work IQ one-time tenant setup

Only if Work IQ (Preview) is missing from the MCP list in Copilot Studio:

```
az ad sp create --id fdcc1f02-fc51-4226-8753-f668596af7f7
```

or POST `{"appId": "fdcc1f02-fc51-4226-8753-f668596af7f7"}` to `https://graph.microsoft.com/v1.0/servicePrincipals` in Graph Explorer as a Global Administrator. A conflict error means it already exists.

## 5. Cost guardrails

### Azure budget on the billing resource group

Azure budgets send alerts; they do not stop usage.

1. Azure portal > **Resource groups** > the billing plan's resource group > **Cost Management > Budgets** > **Add**.
2. Name, reset period **Billing month**, expiry, amount (for example EUR 40).
3. **Set alerts**: for example *Actual cost 80%* and *Forecasted cost 100%*, plus an email recipient.
4. **Create**.

### Per-agent hard stop (optional)

1. Power Platform admin center > **Licensing > Copilot Studio > Manage Agents**.
2. Agents appear only after they have billed credits.
3. Select the agent > **Set limit**: monthly credits, notification threshold, **Stop usage** on. Save.

Keep the limit well above a single build or preview session, or the agent stops mid-session.

## 6. Verify

1. In Copilot Studio, confirm the environment switcher shows the environment you configured.
2. Create a GitHub Copilot agent and run one Preview question.
3. Add **Work IQ (Preview)** from Tools > MCP and ask a question about one of your mails.
4. Next day: **Licensing > Copilot Studio > Environments** shows pay-as-you-go consumption for the environment; Microsoft 365 **Cost management > Overview** shows Work IQ consumption.

## Booking terms: monthly or annual

| What you buy | Book for one month? | Annual commitment |
|---|---|---|
| Copilot Credits, pay-as-you-go | Yes: no commitment, billed monthly in arrears to the linked Azure subscription; unlink the environment or lower the policy limit at any time | Not needed |
| Copilot Credit capacity pack (25,000 credits per pack per month) | Licence subscription bought in the Microsoft 365 admin center Marketplace; choose the term at checkout. Unused credits don't carry over to the next month | Choose at checkout |
| Copilot Credit pre-purchase plan (P3) | No | One-year term only, auto-renews by default; cheaper only for predictable, high usage |
| Azure budget and alerts | Free | Free |

Cancelling (Microsoft Customer Agreement billing account): a prorated refund is only possible within seven days of the start or renewal of a subscription. After that, turn off **recurring billing** so the subscription ends at the end of its term. Monthly terms are the flexible choice for a class that runs a few times a year, at a surcharge of about 20% over the annual price.

## Related setup guides

- [Apps in Copilot Studio](./09-copilot-studio-apps-setup.md)
- [Configure Copilot Credits for the Work IQ API](./10-work-iq-credit-quota.md)
- [Copilot Cowork access and billing](./07-cowork-tenant-setup.md)

## References

- Manage costs for agents powered by the GitHub Copilot harness: https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness
- Manage Copilot Credits and capacity for Copilot Studio: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- Overview of usage-based billing: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- Copilot Managed Runtime licensing FAQ: https://learn.microsoft.com/microsoft-365/admin/manage/apps/licensing-faq
- Environment routing for Copilot Managed Runtime: https://learn.microsoft.com/power-platform/admin/default-environment-routing-copilot-managed-runtime
- Enable your tenant for Work IQ: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq
- Cancel your subscription: https://learn.microsoft.com/microsoft-365/commerce/subscriptions/cancel-your-subscription
- Copilot Credit pre-purchase plan: https://learn.microsoft.com/azure/cost-management-billing/reservations/copilot-credit-p3
