# Tenant setup: Apps in Copilot Studio

How to give Apps in Copilot Studio (preview) the Copilot Credits they need, both for building in the maker's personal developer environment and for running published apps.

## Symptom

The first message on a new app stops with:

```text
No usage quota is available for your account, so this request couldn't be completed.
```

Copilot Studio also shows the banner *Your organization hasn't set up a pool of credits yet.* The environment your agents run in can be fully billed and still show this error, because apps are built somewhere else.

## How apps are billed

Apps run on **Copilot Managed Runtime**, and building and running them are billed separately.

| Activity | Billed through | Managed in |
|---|---|---|
| Building, previewing and testing an app | Copilot Credits on the maker's **personal developer environment** (GitHub Copilot harness, billed from the first message) | Power Platform admin center |
| Running a published app | Copilot Credits **per user**, service **Copilot Managed Runtime** (0.1 credit per API call, such as launching the app or reading a record) | Microsoft 365 admin center, Copilot > Cost management |

- Users with a **Power Apps Premium** license run apps without consuming credits. Power Apps use rights included in Microsoft 365 or Dynamics 365 don't count.
- A Microsoft 365 Copilot license is not needed to run an app.
- Sharing an app doesn't license the recipient. Each user still needs Power Apps Premium or a spending policy.
- During the preview, a user without runtime coverage gets a warning first. Access is blocked after 20 app operations or five minutes of use.

## Why apps don't use your agent environment

- Copilot Studio routes every maker to a personal developer environment for app creation. There's no environment picker.
- Routing for Copilot Managed Runtime is on in every tenant and can't be changed. It sends makers to their own environments in an environment group, so a rule can't point at the default environment.
- The environment is created automatically the first time a maker opens the **App** tile. It's a Developer environment, Managed **Yes**, Dataverse **No**, in the group *Default Environment Group*, named after the maker.
- Agents and workflows are not affected. They keep running in the environment you build them in.

## Prerequisites

- Power Platform Administrator or Global Administrator.
- A pay-as-you-go billing plan with the **Copilot Studio** meter in the same region as the personal environment, or prepaid Copilot Credit capacity.
- For runtime: usage-based billing turned on in the Microsoft 365 admin center.

## 1. Find the personal developer environment

1. Open the Power Platform admin center: `https://admin.powerplatform.microsoft.com/`
2. Go to **Manage > Environments**.
3. Find the Developer environment named after the maker, with Managed **Yes**, Dataverse **No** and group *Default Environment Group*. The creation date matches the first time the maker opened the App tile.
4. Optional: open it, select **Edit** in the Details card, and give it a clearer name and purpose (for example *Integrations Apps*). The new name also appears in the Copilot Studio environment switcher after a refresh.

## 2. Give the environment credits

Use one of these options.

### Pay-as-you-go (recommended for a class tenant)

1. **Licensing > Billing Plans**.
2. Select the plan your agent environment already uses (its meters must include **Copilot Studio**, and its region must match), then **Edit**.
3. Select **Add or remove environments**, tick the personal developer environment, and select **Update environments**.
4. Select **Save**.
5. Use **See details** to confirm the environment is listed under *Target environments*.

Usage then bills to the same Azure subscription and resource group as your agents, so an existing Azure budget on that resource group covers app builds too.

### Prepaid capacity

1. **Licensing > Copilot Studio > Manage Copilot Credits**.
2. Select the personal developer environment and enter an allocation.
3. Under **Capacity overages**, choose **Draw from the available capacity in my tenant** or **Bill to my pay-as-you-go billing plan**.
4. Select **Save**.

*Draw from tenant* alone doesn't help when the tenant has no prepaid credits.

## 3. Cover runtime for app users

1. Microsoft 365 admin center > **Copilot > Cost management > Configuration**.
2. Open the spending policy that covers the app users (default *All Users Policy*).
3. Confirm **Copilot Managed Runtime** is listed under *Agents and services*. The default policy auto-applies new services, so it's usually already there.
4. Check that the monthly limit leaves room for runtime next to Cowork, Work IQ and the other services in the same policy.

## 4. Optional: control who can build apps

- Microsoft 365 admin center > **Apps > Overview > Set up app creation spaces**: turn Copilot Studio app creation off, or limit it to security groups.
- The same with the Power Platform CLI:

```bash
pac admin update-tenant-settings --setting-name powerPlatform.powerapps.enableManagedAppsMcsPreview --setting-value 'off'
pac admin update-tenant-settings --setting-name powerPlatform.powerapps.enabledGroupsManagedAppsMcsPreview --setting-value '<security-group-object-id>'
```

These controls stop new app creation. They don't delete existing personal environments.

## 5. Verify

1. **Licensing > Copilot Studio > Environments**: the personal environment shows Pay-as-you-go **Yes** (this view can still show the old name for a while after a rename).
2. Wait a few minutes, refresh Copilot Studio, open the **App** tile and send the first message again.
3. Next day: build usage appears in Power Platform under **Top agents by credit usage**, grouped as **App** under *Billable features*. Runtime usage appears in Microsoft 365 Cost management under **Copilot Managed Runtime**.

## Booking terms: monthly or annual

| What you buy | Book for one month? | Annual commitment |
|---|---|---|
| Copilot Credits, pay-as-you-go | Yes: no commitment, billed monthly in arrears to the linked Azure subscription; unlink the environment or lower the policy limit at any time | Not needed |
| Power Apps Premium (per user, runs apps without credits) | Usually yes, monthly term at about 20% more | Yes |
| Copilot Credit capacity pack (25,000 credits per pack per month) | Licence subscription bought in the Microsoft 365 admin center Marketplace; choose the term at checkout. Unused credits don't carry over to the next month | Choose at checkout |
| Copilot Credit pre-purchase plan (P3) | No | One-year term only, auto-renews by default; cheaper only for predictable, high usage |

Cancelling (Microsoft Customer Agreement billing account): a prorated refund is only possible within seven days of the start or renewal of a subscription. After that, turn off **recurring billing** so the subscription ends at the end of its term. Monthly terms are the flexible choice for a class that runs a few times a year, at a surcharge of about 20% over the annual price.

## Related setup guides

- [Copilot Credits for GitHub Copilot agents and Work IQ](./08-tenant-credit-setup.md)
- [Configure Copilot Credits for the Work IQ API](./10-work-iq-credit-quota.md)
- [Copilot Cowork access and billing](./07-cowork-tenant-setup.md)

## References

- Apps overview (preview): https://learn.microsoft.com/microsoft-copilot-studio/apps-experience/apps-overview
- Copilot Managed Runtime overview, licensing and billing: https://learn.microsoft.com/microsoft-365/admin/manage/apps/
- Copilot Managed Runtime licensing FAQ: https://learn.microsoft.com/microsoft-365/admin/manage/apps/licensing-faq
- Environment routing for Copilot Managed Runtime: https://learn.microsoft.com/power-platform/admin/default-environment-routing-copilot-managed-runtime
- Manage Copilot Credits and capacity for Copilot Studio: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- Cancel your subscription: https://learn.microsoft.com/microsoft-365/commerce/subscriptions/cancel-your-subscription
- Copilot Credit pre-purchase plan: https://learn.microsoft.com/azure/cost-management-billing/reservations/copilot-credit-p3
