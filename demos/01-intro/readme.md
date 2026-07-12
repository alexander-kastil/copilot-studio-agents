# Module 1: Introduction to Copilot Cowork & Copilot Studio

- Copilot & Agents Overview
- Introduction to Agents and Copilots for Microsoft 365
- The Microsoft 365 platform & Copilot for Microsoft 365 Ecosystem
- Copilot & Copilot Studio Licensing Options (Full vs PAYG)
- What is Agentic AI?
- Key Components of an Agent: Knowledge & Tools
- Prompt Engineering, Semantic Index & RAG
- Tools & Model Context Protocol (MCP)
- Microsoft Copilot Extensibility Fundamentals
- Choose a Copilot Extensibility Development path
- Envisioning Planning & Scenarios

## Pay as you go licensing

Copilot Licensing:

- Navigate to [Microsoft 365 Admin Center - Copilot - Billing & usage](https://admin.cloud.microsoft/?#/copilot/managecost)
- Configure a Billing Policy under the Billing Policies section

Copilot Studio Licensing:

- Navigate to [Power Platform Admin Center - Copilot Studio](https://admin.powerplatform.microsoft.com/)
- Select Licensing -> Copilot Studio -> Manage billing plans

> Note: You will need an Azure Resource Group to be able to setup Pay as you go. It will be used for payment.

Cowork Licensing:

- Cowork is a [Microsoft Frontier program](https://adoption.microsoft.com/en-us/copilot/frontier-program/) preview. The tenant needs at least one Microsoft 365 Copilot (or Microsoft E7) license, both the tenant and the managing admin account enrolled in Frontier, and Anthropic enabled as an AI subprocessor.
- Cowork is not a per-user seat. It is metered by usage-based billing in Copilot Credits, so you pay only for what Cowork actually consumes.
- Navigate to **Microsoft 365 Admin Center -> Copilot -> Cost Management** and select **Get Started** to activate the default spending policy for the tenant.
- Choose an Azure subscription as the billing method, set a monthly spending limit and per-user limit, define alert thresholds, then select **Activate**.

> Note: Cowork PAYG uses the same Azure plumbing as the other services (an Azure subscription and resource group with Owner or Contributor rights). Prepaid capacity packs and Copilot Credit Pre-Purchase Plan (P3) credits are drawn down first; pay-as-you-go charges apply only after they are exhausted. Use the [Cowork Estimator](https://aka.ms/CustomerCoworkEstimator) to model credit usage before you enable it.

## Links & Resources

[Microsoft 365 Copilot](https://learn.microsoft.com/en-us/copilot/microsoft-365/)

[Microsoft 365 Copilot Extensibility](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/)

[Set up your development environment for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/prerequisites?source=recommendations)

[Set up pay-as-you-go for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/pay-as-you-go/setup)

[Set up pay-as-you-go for Microsoft 365 Copilot Studio](https://learn.microsoft.com/en-us/power-platform/admin/pay-as-you-go-set-up)

[Set up usage-based billing for Cowork (Copilot Credits)](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-manage-copilot-credits)

[Usage-based billing and Copilot Credits overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-overview-copilot-credits)

[Microsoft 365 Copilot extensibility samples](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/samples)

[Microsoft 365 Copilot Sample Solution Gallery](https://adoption.microsoft.com/en-us/sample-solution-gallery/?product=Microsoft+Graph+connectors&product=Microsoft+365+Copilot)

[Copilot Chat](https://m365.cloud.microsoft/)

[Copilot Control System](https://admin.cloud.microsoft/?#/copilot/overview)

[Copilot Success Kit](https://adoption.microsoft.com/en-us/copilot/success-kit/)

[Microsoft Scenario Library](https://adoption.microsoft.com/en-us/scenario-library/)

## Additional Labs & Walkthroughs

[Learning Path - Prepare your organization for Copilot for Microsoft 365](https://learn.microsoft.com/en-us/training/paths/prepare-your-organization-microsoft-365-copilot/)
