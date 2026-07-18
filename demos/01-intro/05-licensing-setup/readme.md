# Licensing & Environment Setup

Before you build a single agent, the tenant has to be licensed and your environment configured, and the licensing model differs across Copilot, Copilot Studio, and Cowork. This topic explains the licensing options (full seats versus pay-as-you-go), walks through enabling each one, and lists the tools you set up once so every later module just works. Treat this as the pre-flight checklist for the whole course.

---

## Licensing Options: Full vs. Pay As You Go

Microsoft offers two billing models across the Copilot family, and they suit different rollout stages.

| Model | How you pay | Best for |
|---|---|---|
| Full (per-user seat) | A fixed monthly license per assigned user | Broad, predictable rollout to many users |
| Pay as you go (PAYG) | Metered by actual usage, billed to an Azure subscription | Pilots, spiky usage, and metered services like Cowork |

Full seats are simplest to reason about when everyone uses Copilot daily. Pay-as-you-go shines for pilots and for capabilities billed by consumption, because you pay only for what is actually used and can cap spend with policies. Copilot Studio message capacity and Cowork both lean on the PAYG model, so this course assumes you have it configured.

> Note: Pay-as-you-go always requires an Azure subscription and a resource group with Owner or Contributor rights. It is the shared billing plumbing behind Copilot, Copilot Studio, and Cowork.

---

## Pay As You Go Licensing

Each service is enabled from its own admin surface, but all three draw on the same Azure billing account.

### Copilot (message metering)

- Navigate to [Microsoft 365 Admin Center: Copilot: Billing & usage](https://admin.cloud.microsoft/?#/copilot/managecost).
- Configure a Billing Policy under the Billing Policies section.

### Copilot Studio

- Navigate to [Power Platform Admin Center: Copilot Studio](https://admin.powerplatform.microsoft.com/).
- Select Licensing, then Copilot Studio, then Manage billing plans.

> Note: You need an Azure Resource Group to set up pay-as-you-go. It is used for payment.

### Cowork

Cowork is a [Microsoft Frontier program](https://adoption.microsoft.com/en-us/copilot/frontier-program/) preview with extra prerequisites. The tenant needs at least one Microsoft 365 Copilot (or Microsoft E7) license, both the tenant and the managing admin account enrolled in Frontier, and Anthropic enabled as an AI subprocessor.

Cowork is not a per-user seat. It is metered by usage-based billing in Copilot Credits, so you pay only for what Cowork actually consumes.

- Navigate to **Microsoft 365 Admin Center -> Copilot -> Cost Management** and select **Get Started** to activate the default spending policy for the tenant.
- Choose an Azure subscription as the billing method, set a monthly spending limit and per-user limit, define alert thresholds, then select **Activate**.

> Note: Cowork PAYG uses the same Azure plumbing as the other services (an Azure subscription and resource group with Owner or Contributor rights). Prepaid capacity packs and Copilot Credit Pre-Purchase Plan (P3) credits are drawn down first; pay-as-you-go charges apply only after they are exhausted. Use the [Cowork Estimator](https://aka.ms/CustomerCoworkEstimator) to model credit usage before you enable it.

---

## Spending Governance

Pay-as-you-go without limits is a surprise waiting to happen, so set guardrails when you enable it. Spending policies cap monthly and per-user consumption and raise alerts before you hit the ceiling, which means a single heavy user cannot drain the tenant's credits.

| Guardrail | What it controls |
|---|---|
| Monthly spending limit | The tenant's total ceiling for the billing period |
| Per-user limit | The most any one user can consume |
| Alert thresholds | Notifications at set percentages of the limit |

Set these at activation, not after the first large bill. The Cowork Estimator helps you pick realistic numbers before go-live.

---

## Tools & Environment Configuration

A few one-time setup steps make every later module run smoothly. Do these once and you will not think about them again.

| Tool / setup | Why you need it | Where |
|---|---|---|
| GitHub account | Source control for pro-code samples and skills | [github.com](https://github.com/) |
| Microsoft 365 tenant with Copilot | The platform every demo runs on | Microsoft 365 admin |
| Power Platform environment | Where Copilot Studio agents are created and stored | [Power Platform Admin Center](https://admin.powerplatform.microsoft.com/) |
| Azure subscription | Billing target for all pay-as-you-go services | [portal.azure.com](https://portal.azure.com/) |
| Dev environment for Copilot | Prerequisites for extensibility work | See the Learn link below |

Confirm you have Owner or Contributor rights on the Azure resource group used for billing, because every PAYG service depends on it. With the tenant licensed and these tools in place, you are ready to start building.

---

## Setup Checklist

- [ ] Full or PAYG licensing decided per service
- [ ] Copilot billing policy configured
- [ ] Copilot Studio billing plan configured
- [ ] Cowork prerequisites met and spending policy activated (if using Cowork)
- [ ] Spending limits and alert thresholds set
- [ ] GitHub account ready
- [ ] Power Platform environment available
- [ ] Azure subscription and resource group with correct rights

---

## Where to Go Next

1. [Agents & Copilots for Microsoft 365](../01-agents-copilots/readme.md): the concepts you will now build on
2. [Extensibility & Development Paths](../04-extensibility/readme.md): pick where to build first

---

## Links & Resources

- [Set up pay-as-you-go for Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365/copilot/pay-as-you-go/setup)
- [Set up pay-as-you-go for Microsoft 365 Copilot Studio](https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up)
- [Set up usage-based billing for Cowork (Copilot Credits)](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits)
- [Usage-based billing and Copilot Credits overview](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits)
- [Set up your development environment for Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365-copilot/extensibility/prerequisites)
- [Microsoft Frontier Program](https://adoption.microsoft.com/en-us/copilot/frontier-program/)
