---
name: copilot-studio-apps-credits
description: Fix "No usage quota is available for your account" when building Apps in Copilot Studio, by giving the maker's personal developer environment Copilot Credits and checking runtime coverage (Copilot Managed Runtime).
---

# Apps in Copilot Studio: build and runtime credits

Use this skill when:

- Building an app in Copilot Studio fails with `No usage quota is available for your account, so this request couldn't be completed.` or the banner *Your organization hasn't set up a pool of credits yet.*
- The user asks how Apps in Copilot Studio or Copilot Managed Runtime are billed.
- App users are warned or blocked when they run a published app.
- The user asks why apps can't be built in the default or agent environment.

The full guide is `setup/copilot-studio-apps-setup.md`. For agent environments see the `copilot-studio-credits` skill; for Microsoft 365 spending policies see `work-iq-credits` and `cowork-setup`.

## Facts

- App creation always routes to the maker's **personal developer environment**. Routing for Copilot Managed Runtime is fixed in every tenant; there's no environment picker and no rule can point at the default environment.
- The environment is created automatically on first use: Developer, Managed **Yes**, Dataverse **No**, group *Default Environment Group*, named after the maker.
- **Build** usage (authoring, preview, testing) is billed per environment through Copilot Studio billing in the Power Platform admin center, from the first message.
- **Run** usage is billed per user through the Microsoft 365 spending policy service **Copilot Managed Runtime**, 0.1 credit per API call.
- Power Apps Premium users run apps without credits. Power Apps rights included in Microsoft 365 or Dynamics 365 don't count. Sharing an app doesn't license the recipient.
- During the preview, uncovered app users are blocked after 20 operations or five minutes.
- *Draw from the available capacity in my tenant* doesn't help when the tenant has no prepaid credits.

## Procedure

### 1. Diagnose (read only)

1. Power Platform admin center > **Manage > Environments**: find the maker's personal developer environment (Developer, Managed Yes, Dataverse No, Default Environment Group). Note its region and creation date.
2. **Licensing > Copilot Studio** Summary: prepaid Copilot Credits capacity (purchased, assigned).
3. **Licensing > Copilot Studio > Environments**: Pay-as-you-go, Allocated capacity and Draw from tenant for that environment.
4. **Licensing > Billing Plans**: for each plan, **See details** shows meters, region and target environments. Find a plan with the **Copilot Studio** meter in the environment's region.
5. Microsoft 365 admin center > **Copilot > Cost management > Configuration**: does the policy covering app users include **Copilot Managed Runtime**, and what is its limit?
6. Report the cause:
   - the personal environment has neither pay-as-you-go nor allocation (build blocked), or
   - app users lack runtime coverage

### 2. Propose and get approval

Billing changes need an explicit yes in chat. Offer:

- Add the personal environment to the existing pay-as-you-go plan the agent environment uses (same subscription, resource group and budget). Recommended for class tenants.
- Or allocate prepaid credits to it.
- Optional: rename it (Details > Edit) so it is recognizable, for example *Integrations Apps*.

Never buy capacity or prepurchase plans for the user.

### 3. Apply

- **Rename (optional)**: Manage > Environments > environment > Details **Edit** > Name, Purpose > **Save**.
- **Billing plan**:
  1. Licensing > Billing Plans > select the plan > **Edit**.
  2. **Add or remove environments**: tick the environment > **Update environments**.
  3. **Save**.
- **Prepaid**: Licensing > Copilot Studio > Manage Copilot Credits > environment > allocation and overage option > **Save**.

### 4. Verify

1. **See details** on the plan lists the environment under *Target environments*.
2. Licensing > Copilot Studio > Environments shows Pay-as-you-go **Yes**. This view can lag behind a rename.
3. The maker waits a few minutes, refreshes Copilot Studio and resends the first app message.

## Rules

- Step 1 is read only.
- Report exact values from the admin centers. Do not estimate consumption.
- Don't delete or move personal developer environments.
- Close browser tabs you opened when done.
