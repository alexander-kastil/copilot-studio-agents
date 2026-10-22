# Prepare the Tenant: Licenses & Credits

This topic is optional: take it when you prepare a tenant for this class, or when a demo stops at its first message for lack of credits. It collects what setting up and running the class tenant taught us: which licenses each module needs, the three places Copilot Credits come from, the error messages that mean one of them is missing, and where the cost of a run shows up. The step-by-step admin guides are in [Setup](../../../setup/readme.md); this topic explains the model behind them, so you know which guide a problem needs.

---

## The Licenses This Class Needs

Few of the licenses this class needs are per-user seats. Every learner needs a Microsoft 365 account with a Microsoft 365 Copilot license and access to Copilot Studio, and everything else is either usage in Copilot Credits or an Azure resource billed to one subscription. The last five rows of the table serve only optional topics, an optional lab step and the optional AI Teammates module.

![A matrix of the licenses this class needs against modules 1 to 8, grouped as per-user licenses, Copilot Credits, Azure, and the optional topics and module. Every learner needs Microsoft 365 with Microsoft 365 Copilot for modules 1, 2 and 8, Copilot Studio access for modules 3 to 8 and a GitHub account; module 7 adds Claude Code or GitHub Copilot CLI. Copilot Credits come from a billing plan on the agent environment, the same plan on each maker's personal developer environment for apps in module 6, and a Microsoft 365 spending policy for Cowork, the Work IQ API and app runtime. An Azure subscription pays every pay-as-you-go route and hosts the sample services and the Foundry project, while Dynamics 365 Contact Center, Azure Communication Services, a Fabric semantic model, Agent 365 and Autopilot access serve only optional topics and the optional AI Teammates module.](./_images/class-licenses.svg)

| License or plan | Who needs it | Modules | Cost and term |
|---|---|---|---|
| A Microsoft 365 plan with Microsoft 365 Copilot (the class tenant runs Business Standard with Copilot) | Every learner | 1 and 2, and the Frontier settings of 8 | Per user; Copilot Business has a monthly term since March 2026, enterprise Copilot is annual only |
| Copilot Studio access: a Microsoft 365 Copilot license, the free Copilot Studio user license, or the Copilot Studio trial | Every maker | 3 to 8 | Free; the user license needs a tenant credit pack, and the trial tests agents but can't publish them |
| A GitHub account | Every learner | Class prerequisite | Free |
| Claude Code or GitHub Copilot CLI | Every learner in [Agentic Building](../../07-cs-maintaining/05-agentic-building/readme.md) | 7 | A Claude plan or a GitHub Copilot plan |
| A Power Platform billing plan with the **Copilot Studio** meter on the agent environment | The tenant | 4 (computer use), 5 (autonomous runs), 6 (from the first build step), 8; channels outside Microsoft 365 in 7 | Copilot Credits pay-as-you-go, about $0.01 each |
| The same billing plan on each maker's personal developer environment | Every maker who builds an app | 6 ([Building Apps](../../06-cs-gh-copilot/06-apps/readme.md)) | Copilot Credits pay-as-you-go |
| A Microsoft 365 spending policy that selects Cowork, the Work IQ API and Copilot Managed Runtime | The tenant | 2 (Cowork), 5 and 6 (Work IQ API), 6 (published apps) | Copilot Credits up to a monthly limit |
| An Azure subscription and resource group with Owner or Contributor rights | The tenant admin | Pays every pay-as-you-go route; hosts the sample REST API and MCP server in 4 | Azure usage; the sample services ran on the free App Service F1 tier |
| A Microsoft Foundry project | The instructor | 5 ([Foundry agents](../../05-cs-advanced/04-foundry-agents/readme.md)); Foundry IQ in 6 is optional | Azure usage for the model deployment |
| A Microsoft Fabric semantic model | The instructor | 6, the optional Fabric IQ step | Access to a Fabric workspace and its semantic model |
| Azure Communication Services | The tenant | 5 (a phone number for voice) and 7 (a WhatsApp number), both optional | Azure usage |
| Dynamics 365 Contact Center | The tenant | 5, the optional [Voice Agents](../../05-cs-advanced/06-voice/readme.md) topic | Contact Center licensing, plus 10 to 75 credits per voice minute |
| Agent 365, one maker license and a Microsoft 365 Frontier for AI Teammates license per agent | One maker, plus each agent | 8 (agent accounts) | Agent 365 trial free for 30 days, then about $15 to $18 per user per month; Frontier for AI Teammates is free |
| Autopilot preview access: Frontier, an Intune policy and a GitHub Copilot Business or Enterprise seat | Invited tenants | 8 (Autopilot) | Private preview by invitation |

Admin roles cost nothing but gate every billing step: a Global or Billing Administrator creates spending policies, a Power Platform Administrator links billing plans, and a Global Administrator creates the Work IQ service principal once.

---

## What a Copilot License Covers, and What It Doesn't

A Microsoft 365 Copilot license covers Microsoft's own Copilot experiences and the Standard agents a licensed user runs inside Microsoft 365. For those agents, classic answers, generative answers and Microsoft Graph grounding in Copilot Chat, Teams and SharePoint are zero-rated. Outside that boundary, the same agent draws Copilot Credits, and several features in this class never sit inside it.

| Feature | Covered by a Microsoft 365 Copilot license? | Billed in Copilot Credits when |
|---|---|---|
| Standard agents (modules 3 to 5) | Yes, in Microsoft 365 channels | The user has no Copilot license, or the agent runs in a channel outside Microsoft 365 |
| Agent flows, prompts and workflows | Yes, inside a Standard agent used by a licensed user | In all other cases, including runs an autonomous agent starts; test runs aren't billed |
| Computer use | No | Every step, 5 credits on a standard model and 15 on a premium one |
| GitHub Copilot agents, workflows and apps (module 6) | No | From the first build step: authoring, Preview, tests and evaluations all bill |
| Work IQ API and the Work IQ MCP server | No | Every call, through a Microsoft 365 spending policy |
| Cowork (module 2) | Needs the license plus a spending policy | Every task, through a Microsoft 365 spending policy |

The test chat of a Standard agent costs nothing: its answers, actions and Graph grounding aren't counted, which is why every Standard agent demo in this class ran at 0 credits. The GitHub Copilot harness is the opposite. It charges for model tokens, tools and the harness itself from the moment you start building, so plan its credits before module 6 begins.

---

## Three Places Credits Come From

Copilot Credits are charged to the place where the work runs, whoever builds it. In this class that is three places, and each one has to have a credit source of its own before the module that uses it starts.

| Where the work runs | What runs there | Credit source | Set up in |
|---|---|---|---|
| The agent environment | Standard and GitHub Copilot agents, agent flows, workflows, computer use | A pay-as-you-go billing plan with the **Copilot Studio** meter, or an allocation of prepaid credits | Power Platform admin center, **Licensing** > **Copilot Studio** |
| The maker's personal developer environment | Building and previewing apps (module 6) | The same billing plan, with this environment added as a target | Power Platform admin center, **Licensing** > **Billing Plans** |
| The Microsoft 365 tenant | Cowork, the Work IQ API, Copilot Managed Runtime for published apps | A spending policy that selects each service | Microsoft 365 admin center, **Copilot** > **Cost management** |

The personal developer environment is the one that surprises people. Copilot Studio routes every maker to their own Developer environment for app creation, with no picker and no way to point the routing at another environment, and creates it the first time the maker opens the **App** tile. An agent environment can be fully billed while the app build in the same browser tab fails, because the app is built somewhere else.

The default spending policy, **All Users Policy**, selects new services automatically, so Cowork, the Work IQ API, Copilot Studio and Copilot Managed Runtime share one monthly limit. Set that limit with headroom for all of them: the admin center calculates a minimum from the number of users (1,000 credits for the small class tenant, 2,500 or more recommended). Developer and trial environments have been billed for usage since September 1, 2026, so a sandbox is no longer a free place to run a class. The class labs create a Trial environment, which works for 30 days and is then deleted, because new unmanaged Developer environments can't be created from November 15, 2026.

---

## Errors That Mean a Credit Source Is Missing

Most setup problems in this class surface as one of a handful of messages. Each points at one credit source, so the message tells you which admin center to open.

| What you see | What it means | Fix |
|---|---|---|
| `No usage quota is available for your account, so this request couldn't be completed.` and the banner *Your organization hasn't set up a pool of credits yet.* | The maker's personal developer environment has no credits, so the app build stops | Add that environment to the billing plan: [Apps in Copilot Studio](../../../setup/copilot-studio-apps-setup.md) |
| `The caller has exhausted the AI credit quota for WorkIQ.` | The spending policy that covers the user reached its monthly limit; retries don't help until the 1st of the next month | Raise the policy limit: [Configure Copilot Credits for the Work IQ API](../../../setup/work-iq-credit-quota.md) |
| *Spending limits for this policy are below the required minimum* | The policy limit is below the minimum the admin center calculates | Raise the limit to at least the minimum shown |
| Work IQ (Preview) is missing from the MCP list | The tenant has no Work IQ service principal yet | Create it once as a Global Administrator: [Copilot Credits for GitHub Copilot agents and Work IQ](../../../setup/tenant-credit-setup.md#4-work-iq-one-time-tenant-setup) |
| A GitHub Copilot agent won't build or preview | The environment shows Pay-as-you-go **No** and has no allocation | Link the environment to a billing plan: [Copilot Credits for GitHub Copilot agents and Work IQ](../../../setup/tenant-credit-setup.md) |
| An agent stops in the middle of a session | Its per-agent limit with **Stop usage** is lower than one build or preview session | Raise the limit in **Licensing** > **Copilot Studio** > **Manage Agents** |
| Cowork doesn't appear next to Chat | The user isn't in a spending policy that selects Cowork, the policy is at its limit, or the Copilot license is missing | Check the policy and the license: [Copilot Cowork access and billing](../../../setup/cowork-tenant-setup.md) |
| No **Agent account** button in Copilot Studio | The tenant has no Agent 365 enrollment and no Frontier for AI Teammates licenses | Follow the cheapest-first order in [AI Teammates: Autopilot and agent accounts](../../../setup/ai-teammates-setup.md) |

---

## Where a Run's Cost Shows, and How Late

Every demo in this class was run live and its cost read back from the portals, and no portal shows all of it. Copilot Studio usage posts within hours; Work IQ API, app and Azure costs had not posted on the day of the run in any portal. Record a cost that hasn't posted as not measured, never as 0.

| What you ran | Where its credits show | What the class run measured |
|---|---|---|
| A Standard agent in the test chat | The agent's **Monitor** page | 0 credits for every Standard agent demo |
| A GitHub Copilot agent in **Preview** | **Preview** > **History** per session, and **Manage Agents** in the Power Platform admin center | 169.7 credits for five Preview sessions of one agent |
| A workflow | **Manage Agents**, channel workflow-agents, feature Workflows | 26.67 credits for one workflow run |
| A computer use run | The session's **Map view** counts the actions | 4 actions, which is 20 credits at 5 per step |
| A Work IQ API call | Microsoft 365 **Cost management**, per service and per user only | No split per agent or per tool, so split by day |
| A Cowork task | Microsoft 365 **Cost management**, account-wide | No per-task cost at all |
| An app build | **Manage Agents**, grouped as **App** under billable features | Not posted on the day of the build |

**Manage Agents** is the per-agent source of truth, and an agent appears there only after it has billed credits. The Copilot Studio **Monitor** page counts Preview credits without listing the Preview sessions, so per-session detail stays in **Preview** > **History**.

---

## Guardrails Before the First Bill

Set three guardrails when you link a billing method, before the first invoice arrives. Each one works at a different level, and only one of them stops usage.

| Guardrail | Where | What it does |
|---|---|---|
| Azure budget on the billing resource group | Azure portal, **Cost Management** > **Budgets** | Sends alerts at thresholds such as 80% actual and 100% forecast; it never stops usage |
| Per-agent limit | Power Platform admin center, **Licensing** > **Copilot Studio** > **Manage Agents** > **Set limit** | Stops one agent at a monthly credit limit when **Stop usage** is on |
| Spending policy limits and alerts | Microsoft 365 admin center, **Copilot** > **Cost management** | Caps the policy's monthly total and each user's share, and mails a daily summary once a threshold is reached |

When a user is in more than one spending policy, the policy with the highest limit applies. A restrictive default policy plus a higher one for the class group gives the class room without opening the whole tenant.

---

## Book Only the Months a Class Runs

Everything this class needs can be booked month by month except the pre-purchase plan. Start with the free trials and pay-as-you-go, then book monthly terms only for the months a class runs.

| What you buy | Book for one month? | Annual commitment |
|---|---|---|
| Copilot Credits, pay-as-you-go | Yes: no commitment, billed monthly in arrears to the linked Azure subscription | Not needed |
| Copilot Credit capacity pack (25,000 credits per pack per month) | Choose the term at checkout; unused credits don't carry over | Choose at checkout |
| Copilot Credit pre-purchase plan (P3) | No | One-year term only, auto-renews by default |
| Microsoft 365 Copilot Business (per user) | Yes, monthly term since March 2026, about 20% more | Cheapest when paid yearly |
| Microsoft 365 Copilot (enterprise, per user) | No monthly term | Annual only |
| Agent 365 add-on (per user) | Yes, about $18 per month | About $15 per month |
| Agent 365 trial | 30 days free; converts to paid unless recurring billing is turned off | Not applicable |
| Microsoft 365 Business Premium, E5, Power Apps Premium (per user) | Usually yes, at about 20% more | Yes |

Prices are US list prices from partner sources, so check the euro price and the term on the checkout page. With a Microsoft Customer Agreement billing account, a prorated refund is possible only within seven days of the start or renewal of a subscription; after that, turn off **recurring billing** so it ends at the end of its term.

---

## Readiness for the AI Teammates Module

The optional [AI Teammates](../../08-ai-teammates/readme.md) module is the one the class tenant can't run live yet, and money for credits isn't the reason. Agents with an account bill like any GitHub Copilot agent, but creating one needs Agent 365, a **Microsoft 365 Frontier for AI Teammates** license per agent, and a maker license, and the admin center reports that the Frontier early access to Agent 365 has ended. Autopilot is a private preview by invitation, with an Intune policy and a GitHub Copilot Business or Enterprise seat on top.

Only the person who builds the agents needs a paid license, so test the cheapest path first and stop at the first one that brings back the **Agent account** button: the free 30-day Agent 365 trial (turn recurring billing off right after you start it), then one Business Premium seat with the Agent 365 add-on, then the documented Microsoft 365 E5 with Agent 365. [AI Teammates: Autopilot and agent accounts](../../../setup/ai-teammates-setup.md) has the prices, the trial trap and the activation order.

---

## Admin Guides, Skills and Scripts

The setup guides hold the clicks; the matching skills in `.claude/skills/` run the same checks read-only and ask before every billing change.

| Guide | Skill | Covers |
|---|---|---|
| [Copilot Cowork access and billing](../../../setup/cowork-tenant-setup.md) | `cowork-setup` | Usage-based billing, a spending policy that selects Cowork, discovery, Anthropic models, plugins and browser use |
| [Copilot Credits for GitHub Copilot agents and Work IQ](../../../setup/tenant-credit-setup.md) | `copilot-studio-credits` | Billing plans for the agent environment, the Work IQ service principal and cost guardrails |
| [Configure Copilot Credits for the Work IQ API](../../../setup/work-iq-credit-quota.md) | `work-iq-credits` | The Work IQ quota error and raising the spending policy limit |
| [Apps in Copilot Studio](../../../setup/copilot-studio-apps-setup.md) | `copilot-studio-apps-credits` | The personal developer environment and runtime coverage through Copilot Managed Runtime |
| [AI Teammates: Autopilot and agent accounts](../../../setup/ai-teammates-setup.md) | | Frontier and Agent 365 licensing from the cheapest option up |
| [Copilot Studio plugins for coding agents](../../07-cs-maintaining/05-agentic-building/readme.md#install) | | The two Microsoft plugins for Claude Code, GitHub Copilot CLI and VS Code, and the Power Platform CLI they need |

The PowerShell [scripts](../../../setup/scripts/readme.md) create class users with their licenses and environments, assign admin roles, report a student's permissions, and install the workstation prerequisites.

---

## Where to Go Next

1. [Where to Build and What It Costs](../04-where-to-build/readme.md): the three billing routes and spending limits in general
2. [Microsoft 365 Copilot Cowork](../../02-cowork/readme.md): the first module that bills Copilot Credits

---

## Links & Resources

- [Licensing for agents powered by the standard harness](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing)
- [Manage costs for agents powered by the GitHub Copilot harness](https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness)
- [Overview of usage-based billing](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview)
- [Manage Copilot Credits and capacity for Copilot Studio](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity)
- [Managing usage-based billing (Copilot Credits)](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits)
- [Environment routing for Copilot Managed Runtime](https://learn.microsoft.com/power-platform/admin/default-environment-routing-copilot-managed-runtime)
- [Automate web and desktop apps with computer use](https://learn.microsoft.com/microsoft-copilot-studio/computer-use)
- [License options for Microsoft Copilot](https://learn.microsoft.com/microsoft-365/copilot/copilot-license-options)
- [FAQ for Copilot Studio billing and licensing](https://learn.microsoft.com/microsoft-copilot-studio/faq-billing-licensing)
