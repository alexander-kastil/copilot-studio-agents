# Tenant setup: Copilot Cowork access and billing

How to enable Microsoft 365 Copilot Cowork in a tenant, control its Copilot Credits consumption, and verify access.

## How access works

- Cowork is generally available and metered in **Copilot Credits** (usage-based billing), not a per-user seat.
- A user can open Cowork when a **spending policy** covers them and selects **Cowork** under *Agents and services*. A limit of one credit is enough to grant access.
- Frontier enrollment is not required. The old **Agents > All agents** control from the preview is deprecated and has no effect.
- The discovery setting controls visibility only, not access.

## Prerequisites

| Requirement | Detail |
|---|---|
| Copilot license | An active Microsoft 365 Copilot license (or a bundle such as Microsoft 365 Business Standard with Copilot) for every user and for the setup admin |
| Admin roles | Global or Billing administrator to create spending policies and billing; AI or License administrator can edit but not create policies |
| Billing method | Pay-as-you-go linked to an Azure subscription, a Copilot Credit capacity pack, or a pre-purchase plan (P3) |
| Browser | Microsoft Edge or Google Chrome; browser tasks need Edge 152 or later |
| Optional | Anthropic models, Frontier (App skill, GPT 5.5), browser use |

## 1. Turn on usage-based billing

1. Microsoft 365 admin center > **Copilot > Cost management** (`https://admin.cloud.microsoft/#/copilot/costmanagement`).
2. If the page shows **Get started**, select it and link a billing method (pay-as-you-go needs an Azure subscription and resource group).
3. When billing is active, the Overview shows *Total Copilot Credits used* and the Configuration tab lists spending policies.

## 2. Create or check the spending policy

1. **Configuration > Spending policies**.
2. Either open the existing policy (default *All Users Policy*) or select **Add spending policy**.
3. **Budget scope**: all users, or **Specific groups** for a pilot group.
4. **Agents and services**: make sure **Cowork** is selected. The default policy also includes Work IQ API, Copilot Studio, Copilot Managed Runtime, Teams Phone Agent and Advanced work in OneDrive/SharePoint, so they share one monthly limit.
5. **Spending limit**: *Limit monthly spending* with at least the minimum the page shows. Cowork tasks at higher reasoning effort use more credits, so leave headroom over other services in the same policy.
6. **User and group limits** (recommended for more than one user): *Limit monthly spending per user*.
7. **Alerts** (recommended): turn on *Define alerts*, pick a threshold, add recipients.
8. Optional: assign a **model profile** (Configuration > Model profiles; a Cowork-only profile needs at least two models).
9. Save, then confirm the Monthly limit column.

To remove a user's access, remove them from the policy scope.

## 3. Decide on Anthropic models

1. **Copilot > Settings > View all > AI providers operating as Microsoft subprocessors**.
2. The Anthropic family defaults to *No users* in the EU, EFTA and UK and is excluded from the EU Data Boundary. Route the decision through compliance review.
3. Turning it off does not block Cowork; **Auto** picks from the remaining models.

## 4. Set discovery

1. **Copilot > Settings > View all > AI experiences enabled by usage-based billing** (also under **Copilot > Cowork > Settings**).
2. Check **Allow users to discover and use AI experiences enabled by usage-based billing** and save.
3. Users who see Cowork but have no policy can request access, which an admin approves.

## 5. Plugins and skills

- **Agents > Settings > Agent and plugin access**: choose which publisher categories users can install (Microsoft, your organization, external publishers).
- **Copilot > Settings > View all > Advanced package uploads**: controls uploads of packages with actions or MCP servers. Skills-only plugins are basic packages and are not affected.
- Users upload their own plugin under **Cowork > Customize > Plugins > Upload plugin** and share with *Only you* or *Specific users* without admin approval. Org-wide sharing waits for admin approval under **Agents > Tools > Requests (preview)**.
- Allow or block individual plugins under **Agents > Tools**.
- Purview Information Barriers currently block plugin and skill uploads.

## 6. Optional: browser use

**Copilot > Cowork > Settings > Browser use in Microsoft Copilot**: *Allow Copilot experiences to use the local Microsoft Edge browser*. Off by default. Limit it to security groups and review the audit log of browser tasks.

## 7. Verify

1. A licensed user opens `https://copilot.cloud.microsoft`, selects **Cowork** in the top toggle next to Chat, starts a task, approves an action when asked, and finds it under **My tasks**.
2. **Copilot > Cowork > Overview** shows active users, tasks and monthly credits (usage data can lag).
3. **Cost management > Overview** lists Cowork under *Agents and services spending the most credits*.

If Cowork does not appear: check the user is in a policy that selects Cowork, the policy is enabled and below its limit, the Copilot license is assigned, and allow time for propagation.

## Booking terms: monthly or annual

| What you buy | Book for one month? | Annual commitment |
|---|---|---|
| Microsoft 365 Copilot Business (per user) | Yes, monthly term since March 2026, about 20% more than annual | Yes, cheapest when paid yearly; paid monthly about 5% more |
| Microsoft 365 Copilot (enterprise, per user) | No monthly term | Annual only |
| Copilot Credits, pay-as-you-go | Yes: no commitment, billed monthly in arrears to the linked Azure subscription; unlink the environment or lower the policy limit at any time | Not needed |
| Copilot Credit capacity pack (25,000 credits per pack per month) | Licence subscription bought in the Microsoft 365 admin center Marketplace; choose the term at checkout. Unused credits don't carry over to the next month | Choose at checkout |
| Copilot Credit pre-purchase plan (P3) | No | One-year term only, auto-renews by default; cheaper only for predictable, high usage |

Cancelling (Microsoft Customer Agreement billing account): a prorated refund is only possible within seven days of the start or renewal of a subscription. After that, turn off **recurring billing** so the subscription ends at the end of its term. Monthly terms are the flexible choice for a class that runs a few times a year, at a surcharge of about 20% over the annual price.

## Related setup guides

- [Copilot Credits for GitHub Copilot agents and Work IQ](./tenant-credit-setup.md)
- [Configure Copilot Credits for the Work IQ API](./work-iq-credit-quota.md)
- [Apps in Copilot Studio](./copilot-studio-apps-setup.md)

## References

- Managing usage-based billing (Copilot Credits): https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits
- Manage plugins for Copilot Cowork: https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-manage-plugins
- Manage plugins, skills, and MCP servers: https://learn.microsoft.com/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers
- Manage Microsoft Copilot settings (Advanced package uploads): https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-page
- Microsoft 365 Copilot Business with monthly commitment (topedia): https://blog.topedia.com/posts/microsoft-365-copilot-business-with-monthly-commitment
- Cancel your subscription: https://learn.microsoft.com/microsoft-365/commerce/subscriptions/cancel-your-subscription
- Copilot Credit pre-purchase plan: https://learn.microsoft.com/azure/cost-management-billing/reservations/copilot-credit-p3
