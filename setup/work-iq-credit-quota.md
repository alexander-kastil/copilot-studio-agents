# Configure Copilot Credits for the Work IQ API

How to unblock and configure usage-based billing for the Work IQ API (and other Copilot Credit services) in the Microsoft 365 admin center.

## Symptom

A Work IQ call (for example through the Work IQ MCP server) fails with:

```
The caller has exhausted the AI credit quota for WorkIQ.
```

Retries do not help. Every Work IQ tool fails the same way until the limit is raised or the monthly period resets.

## Background

- Since general availability on 16 June 2026, Work IQ API calls from custom and third-party agents (Copilot Studio, Foundry, Claude, other MCP clients) are billed in **Copilot Credits**.
- A Microsoft 365 Copilot license does **not** cover these calls. It only covers Microsoft's prebuilt Copilot experiences.
- Credits are controlled by **spending policies**. A policy grants users or groups access to usage-based services and caps how many credits they can spend per month.
- When a policy reaches its limit, its users lose access to the covered services until credits reset on the **1st of the next month**.
- If a user is in several policies, the policy with the **highest** spending limit applies.

## Prerequisites

- Global Administrator or Billing Administrator role in the tenant.
- A billing method: pay-as-you-go linked to an Azure subscription, a Copilot Credit capacity pack, or a pre-purchase plan (P3).

## 1. Check current consumption

1. Open the Microsoft 365 admin center: `https://admin.cloud.microsoft/`
2. Go to **Copilot > Cost management** (`https://admin.cloud.microsoft/#/copilot/costmanagement`).
3. On the **Overview** tab, review:
   - **Total Copilot Credits used** (month to date)
   - **Prepaid capacity pack credits used** vs. **Pay-as-you-go credits used**
   - **Policies approaching or at limit**: a policy showing e.g. `500 / 500` is the cause of the quota error.
   - **Agents and services spending the most credits**: confirms that *Work IQ API for custom apps and agents* is the consumer.
   - **Users spending the most credits**
   - **Users requesting credit increases**

## 2. Review the spending policy

1. Switch to the **Configuration** tab.
2. Under **Spending policies**, check each policy's columns: Status, User and group access, Agents and services, Monthly limit, Payment method, Credits available.
3. Make sure **Work IQ API for custom apps and agents** is in the policy's *Agents and services* list. New services are added automatically to the default *All Users Policy*.
4. Click the policy name to open its details panel. The panel shows:
   - Status
   - Policy name
   - Budget scope (users and groups)
   - Agents and services
   - Billing method
   - Spending limit
   - User and group limits
   - Alerts and alert recipients

A yellow banner *"Spending limits for this policy are below the required minimum"* means the limit must be raised before the policy works reliably.

## 3. Raise the monthly spending limit

1. In the policy details panel, click **Spending limit**.
2. In **Edit limits**, under *Set the monthly spending limit for this policy*, choose one of:
   - **No limit**: the policy can use the organization's credits without restriction.
   - **Limit monthly spending**: enter a value in **Set the monthly spending limit**.
3. Respect the minimum. The admin center calculates a minimum from the number of users in the policy and shows a recommended value. For a small tenant the minimum was 1,000 credits, with 2,500 or more recommended.
4. Optionally, under *Select monthly budget limits for users*, choose **Limit monthly spending per user** to cap each user individually.
5. Click **Save changes**.
6. Back on the Configuration tab, confirm the new value in the **Monthly limit** column and that the attention banner is gone.

Cost guide: pay-as-you-go is roughly USD 0.01 per credit, so 1,000 credits is about USD 10. Check current pricing before committing to a large limit.

## 4. Turn on alerts

1. In **Edit limits**, enable **Define alerts**.
2. Set the threshold (for example 80% of the monthly limit).
3. Add the recipients under **Email alerts to**.
4. Save. Recipients receive a daily summary once the threshold is reached, until the policy is adjusted.

## 5. Optional: separate policies

Use **Add spending policy** to create targeted policies, for example:

- A policy for a developer group that runs Work IQ agents, with a higher limit.
- A restrictive default policy for everyone else.

Remember that the highest limit wins when a user is in more than one policy.

## 6. Optional: cheaper credits

- **Copilot Credit capacity packs**: prepaid monthly packs per tenant (25,000 credits for USD 200 per month at GA pricing).
- **Pre-purchase plan (P3)**: annual commitment with a discount. Use **Buy pre-purchase credits** on the Configuration tab. Overage still falls back to pay-as-you-go.

## 7. Verify

1. Wait a few minutes for the change to apply.
2. Run a simple Work IQ call (for example a mail search).
3. If it still fails with the quota error, refresh the Cost management page, confirm the limit, and check whether the user is in another policy with a lower limit or a disabled status.

## Booking terms: monthly or annual

| What you buy | Book for one month? | Annual commitment |
|---|---|---|
| Copilot Credits, pay-as-you-go | Yes: no commitment, billed monthly in arrears to the linked Azure subscription; unlink the environment or lower the policy limit at any time | Not needed |
| Copilot Credit capacity pack (25,000 credits per pack per month) | Licence subscription bought in the Microsoft 365 admin center Marketplace; choose the term at checkout. Unused credits don't carry over to the next month | Choose at checkout |
| Copilot Credit pre-purchase plan (P3) | No | One-year term only, auto-renews by default; cheaper only for predictable, high usage |

Cancelling (Microsoft Customer Agreement billing account): a prorated refund is only possible within seven days of the start or renewal of a subscription. After that, turn off **recurring billing** so the subscription ends at the end of its term. Monthly terms are the flexible choice for a class that runs a few times a year, at a surcharge of about 20% over the annual price.

## Related setup guides

- [Copilot Credits for GitHub Copilot agents and Work IQ](./tenant-credit-setup.md)
- [Copilot Cowork access and billing](./cowork-tenant-setup.md)

## References

- Microsoft 365 Message Center MC1332672: General availability of the Work IQ API with Copilot Credits billing
- Microsoft 365 Roadmap ID 559020
- Work IQ announcement: https://devblogs.microsoft.com/microsoft365dev/work-iq-production-ready-intelligence-for-every-agent/
- Copilot Credit pre-purchase plan: https://learn.microsoft.com/azure/cost-management-billing/reservations/copilot-credit-p3
