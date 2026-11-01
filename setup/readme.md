# Setup

Tenant requirements and one-time admin setup for the class: Copilot Credits, spending policies and billing plans for Copilot Cowork, GitHub Copilot agents, Work IQ and Apps in Copilot Studio. Run these before the session, because several demos stop at the first message when credits are missing.

## Setup guides

| # | Guide | Covers |
| --- | --- | --- |
| 1 | [Lizenzen und Postfach](./01-lizenzen-und-postfach.md) | Class accounts: Microsoft 365 Business Standard for the mailbox and the Microsoft 365 Copilot add-on for Cowork (German) |
| 2 | [Spending Policy im Microsoft 365 Admin Center](./02-spending-policy-m365.md) | A spending policy for the class accounts that selects Cowork, Work IQ API and Copilot Managed Runtime, with limits and alerts (German) |
| 3 | [Billing Plan im Power Platform Admin Center](./03-billing-plan-power-platform.md) | Pay-as-you-go billing for the pod environments and each account's personal developer environment (German) |
| 4 | [SharePoint Team Site](./04-sharepoint-site.md) | One team site where all class accounts can create lists for lab 06-6 (German) |
| 5 | [Work IQ aktivieren](./05-work-iq-aktivieren.md) | The one-time Work IQ service principal for lab 06-5 (German) |
| 6 | [Cowork Plugin hochladen und freigeben](./06-cowork-plugin-upload.md) | Uploading and approving the lab 02-3 plugin in the Microsoft 365 admin center (German) |
| 7 | [Copilot Cowork access and billing](./07-cowork-tenant-setup.md) | Copilot license, usage-based billing, a spending policy that selects Cowork, discovery, Anthropic models, plugins and browser use |
| 8 | [Copilot Credits for GitHub Copilot agents and Work IQ](./08-tenant-credit-setup.md) | Power Platform billing plans for the agent environment, the Microsoft 365 spending policy, the Work IQ service principal and cost guardrails |
| 9 | [Apps in Copilot Studio](./09-copilot-studio-apps-setup.md) | The `No usage quota is available for your account` error, billing the maker's personal developer environment, and runtime coverage through Copilot Managed Runtime |
| 10 | [Configure Copilot Credits for the Work IQ API](./10-work-iq-credit-quota.md) | The `exhausted the AI credit quota for WorkIQ` error and how to raise the spending policy limit |
| 11 | [AI Teammates: Autopilot and agent accounts](./11-ai-teammates-setup.md) | Module 8 readiness: Frontier and Agent 365 licensing from the cheapest option up, the 30-day Agent 365 trial and how to avoid it converting to paid, and the activation order |
| 12 | [Copilot Studio plugins for coding agents](../demos/07-cs-maintaining/05-agentic-building/readme.md#install) | The two Microsoft plugins for Claude Code, GitHub Copilot CLI and VS Code: `copilot-studio` for Standard agents and `mcs-assistant` for GitHub Copilot agents, their two marketplaces, the Power Platform CLI prerequisite and switching plugins per module |

## Booking terms: monthly or annual

Everything the class needs can be booked month by month except the pre-purchase plan. Start with the free trials and pay-as-you-go, and book monthly terms only for the months a class runs.

| What you buy | Book for one month? | Annual commitment | Used in |
|---|---|---|---|
| Copilot Credits, pay-as-you-go | Yes: no commitment, billed monthly in arrears to the linked Azure subscription | Not needed | All guides |
| Copilot Credit capacity pack (25,000 credits per pack per month) | Choose the term at checkout; unused credits don't carry over to the next month | Choose at checkout | Cowork, agents, Work IQ, apps |
| Copilot Credit pre-purchase plan (P3) | No | One-year term only, auto-renews by default | Cowork, agents, Work IQ, apps |
| Microsoft 365 Copilot Business (per user) | Yes, monthly term since March 2026, about 20% more | Cheapest when paid yearly; paid monthly about 5% more | Cowork |
| Microsoft 365 Copilot (enterprise, per user) | No monthly term | Annual only | Cowork |
| Microsoft 365 Business Premium (per user) | Yes, cancel at any time | Yes, at a discount | AI Teammates |
| Agent 365 add-on (per user) | Yes, about $18 per month | About $15 per month | AI Teammates |
| Agent 365 trial | 30 days free; converts to paid unless recurring billing is turned off | Not applicable | AI Teammates |
| Microsoft 365 E5, Power Apps Premium (per user) | Usually yes, at about 20% more | Yes | AI Teammates, apps |

Prices are US list prices from partner sources; check the euro price and the term on the checkout page before buying. With a Microsoft Customer Agreement billing account, a prorated refund is only possible within seven days of the start or renewal of a subscription; after that, turn off **recurring billing** so the subscription ends at the end of its term.

## Admin skills

The matching skills in `.claude/skills/` run the same checks read-only and ask before every billing change:

| Skill | Use it for |
| --- | --- |
| `cowork-setup` | Cowork access and billing |
| `copilot-studio-credits` | Agent environments, billing plans and Azure budgets |
| `work-iq-credits` | Work IQ quota errors |
| `copilot-studio-apps-credits` | App build and runtime credits |

## Scripts

PowerShell scripts for user, license and workstation setup are in [scripts](./scripts/readme.md).
