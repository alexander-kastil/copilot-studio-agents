# Tenant setup: AI Teammates (Autopilot and agent accounts)

Requirements, costs and readiness for [Module 8: AI Teammates](../demos/08-ai-teammates/readme.md). Status as checked on 2026-10-22: the class tenant can't run the module's live demos, and no change has been made.

## Readiness in the class tenant

| Requirement | Needed for | Status |
|---|---|---|
| Copilot Frontier on (**Copilot > Settings > View all > Copilot Frontier**) | Everything | ✅ All users |
| Agent 365 Frontier enrollment and Agent 365 terms | Agent accounts (topics 3 to 5) | ❌ The admin center says the Frontier early access to Agent 365 has ended and offers **Start trial** |
| **Microsoft 365 Frontier for AI Teammates** licenses, one per agent, assigned at publish | Publishing an agent with an account | ❌ None under **Billing > Licenses** |
| Maker license for one person: documented as Microsoft 365 E5 with the Agent 365 add-on (see [Costs](#costs-cheapest-option-first) for cheaper paths to test first) | Creating agents with accounts | ❌ The tenant has Business Standard with Copilot and Business Basic, no Business Premium |
| **Agent accounts** setting (Power Platform admin center, **Copilot > Settings**) | Agent accounts per environment | ❌ Not shown, which fits the missing licenses |
| Environment on the **Early** release cycle | Agent accounts | ✅ Integrationsonline (Early, on a pay-as-you-go billing plan) |
| Autopilot (Scout): Frontier, an Intune policy, the admin attestation form, a GitHub Copilot Business or Enterprise seat | Topics 1 and 2 | ❌ Private preview by invitation; Business Standard has no Intune |

Copilot Credits are not the blocker. Agents with accounts bill per environment like any GitHub Copilot agent, and Integrationsonline is already on a pay-as-you-go plan. Work IQ calls bill through the Microsoft 365 spending policy.

## What each topic needs

| Topic | Planned demo | Without Agent 365 licenses |
|---|---|---|
| 1 and 2 Autopilot | Hand Autopilot a process | Not possible; the trial doesn't help either |
| 3 Agent accounts | Create the Cadence agent with an account | Not possible |
| 4 Proactive teammates | Cadence on a schedule, replies and @mentions | Not possible as planned; only a trigger on a normal GitHub Copilot agent, not yet verified in the tenant |
| 5 Shared memory | Read the teammate's memory | Not possible as planned; only the personal **Memory** toggle as a contrast |

All demos and labs in Module 8 are still marked *Planned*, so this is a planning decision, not a broken class.

## Costs: cheapest option first

Only the person who builds the agent needs a paid license; agents with an account use the free Frontier for AI Teammates pool, and usage runs on the existing pay-as-you-go setup. Work through the options in this order and stop at the first one that brings back the **Agent account** button.

| Order | Option | Cost (US list, per user per month) | Flexibility | Caveat |
|---|---|---|---|---|
| 1 | **Agent 365 trial** | $0 for 30 days | Turn recurring billing off right after starting it, see below | Adds Agent 365 only; whether that enables agent accounts on Business Standard isn't documented |
| 2 | **Business Premium + Agent 365 add-on**, one maker seat (an upgrade from the tenant's Business Standard) | about $22 + $15 (Agent 365 about $18 on a monthly term) | Both bookable month by month; cancel when the class is over | Business Premium is the documented prerequisite for buying Agent 365, but Learn doesn't list it as a maker license for agent accounts. Test it with the trial before buying |
| 3 | **Microsoft 365 E5 + Agent 365 add-on**, one maker seat | about $60 + $15 | Same as above | The maker license Learn documents |
| 4 | Microsoft 365 E7, one maker seat | $99 | Usually annual | Only if Microsoft blocks the other paths; the Agent 365 Frontier page states a tenant needs at least one E7 license. E7 bundles Microsoft 365 Copilot, which this tenant already pays for |

Other costs:

- **Frontier for AI Teammates**: $0, the pool of 25 comes with Frontier enrollment.
- **Usage**: Copilot Credits, about $0.01 each, already covered by the Integrationsonline billing plan and the Microsoft 365 spending policy.
- Prices come from secondary sources; euro prices differ, check **Billing > Purchase services** before buying. A monthly term usually costs more than an annual one but can be cancelled after the class.

## Agent 365 trial

- **Start trial** on **Agents > Overview** offers a **free 30-day trial** with **25 licenses**.
- The trial adds Agent 365 only, not E5. Whether that brings back the **Agent account** button and the Frontier for AI Teammates licenses on Business Standard isn't documented.
- Most Microsoft 365 trials **convert to paid automatically** at the end of the trial when the tenant has a billing profile. Converted at 25 licenses, that's about $375 per month; at 1 license, about $15.
- To pay nothing: start the trial, then immediately open **Billing > Your products**, select the trial, and turn **recurring billing** off. The trial then expires after 30 days.
- Start it a few days before the class, not weeks ahead, and allow up to three hours for Frontier settings to apply.

## Activation order once licensed

1. A global admin enrolls in Frontier from **Agents > Overview** and accepts the Agent 365 terms, then checks **Billing > Licenses** for the Frontier for AI Teammates licenses.
2. **All agents**, filter **Agent template: Yes**, select **Copilot Studio (Frontier)**, **Activate**, and pick the users or groups who may create agents with accounts.
3. Power Platform admin center, **Copilot > Settings > Agent accounts**: turn it on for Integrationsonline.
4. Build in Copilot Studio Preview (`https://copilotstudio.preview.microsoft.com/`) in the early release environment, add the account before the first publish, then publish.

## Booking terms: monthly or annual

| What you buy | Book for one month? | Annual commitment |
|---|---|---|
| Agent 365 trial | 30 days free; converts to paid unless recurring billing is turned off | Not applicable |
| Agent 365 add-on (per user) | Yes, about $18 per month on a monthly term | About $15 per month (yearly payment) or $15.75 (monthly payment) |
| Microsoft 365 Business Premium (per user) | Yes, pay monthly and cancel at any time | Yes, at a discount |
| Microsoft 365 E5 (per user) | Usually yes, monthly term at about 20% more | Yes |
| Microsoft 365 E7 (per user) | Check at checkout; usually sold annually | Yes |
| Frontier for AI Teammates (per agent) | Free with Frontier enrollment | Free |
| Copilot Credits, pay-as-you-go | Yes: no commitment, billed monthly in arrears to the linked Azure subscription; unlink the environment or lower the policy limit at any time | Not needed |

Cancelling (Microsoft Customer Agreement billing account): a prorated refund is only possible within seven days of the start or renewal of a subscription. After that, turn off **recurring billing** so the subscription ends at the end of its term. Monthly terms are the flexible choice for a class that runs a few times a year, at a surcharge of about 20% over the annual price.

## Related setup guides

- [Copilot Credits for GitHub Copilot agents and Work IQ](./08-tenant-credit-setup.md)
- [Apps in Copilot Studio](./09-copilot-studio-apps-setup.md)
- [Copilot Cowork access and billing](./07-cowork-tenant-setup.md)

## References

- Give your agent an account (Frontier): https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-account
- FAQ for agent accounts (Frontier): https://learn.microsoft.com/microsoft-copilot-studio/faq-agent-accounts
- Preview Microsoft Agent 365 features through the Frontier program: https://learn.microsoft.com/microsoft-agent-365/frontier
- Overview of Microsoft Agent 365: https://learn.microsoft.com/microsoft-agent-365/overview
- Admin access overview for Microsoft Scout: https://learn.microsoft.com/microsoft-scout/admin-access-overview
- Partner Center July 2026 announcements (Agent 365 prerequisites): https://learn.microsoft.com/partner-center/announcements/2026-july#new-licensing-prerequisite-for-agent-365
- Try or buy a Microsoft 365 for business subscription: https://learn.microsoft.com/microsoft-365/commerce/try-or-buy-microsoft-365
- Cancel your subscription (free trial): https://learn.microsoft.com/microsoft-365/commerce/subscriptions/cancel-your-subscription
- Agent 365 term options and prices (O365HQ): https://o365hq.com/subscriptions/agent-365
- Microsoft 365 Copilot Business with monthly commitment (topedia): https://blog.topedia.com/posts/microsoft-365-copilot-business-with-monthly-commitment
- Microsoft 365 E7 pricing (Office Watch): https://office-watch.com/2026/microsoft-365-e7-a-99-frontier-suite-the-future-or-an-expensive-bundle/
