---
name: cowork-setup
description: Check and configure a Microsoft 365 tenant for Copilot Cowork access and Copilot Credits billing (license, spending policy with Cowork, discovery, Anthropic models, plugins, browser use) and verify access.
---

# Copilot Cowork tenant setup and billing

Use this skill when:

- The user wants Cowork available for themselves or a group.
- Cowork does not appear for a user, or a Cowork task fails on credits.
- The user asks how Cowork is licensed, billed or governed.
- Plugin uploads or installs in Cowork are blocked.

For Work IQ quota errors see the `work-iq-credits` skill; for Copilot Studio environments see `copilot-studio-credits`.

## Facts

- Access comes from a Copilot Credits spending policy that covers the user and selects **Cowork**. A one-credit limit is enough to grant access. Frontier is not required.
- Every user needs a Microsoft 365 Copilot license (a bundle such as Business Standard with Copilot counts).
- The **Agents > All agents** control from the preview is deprecated.
- Discovery (**AI experiences enabled by usage-based billing**) controls visibility only.
- The default *All Users Policy* includes Cowork together with Work IQ API, Copilot Studio and other services, so they share one monthly limit.
- Anthropic models are optional and turning them off never blocks access. In the EU, EFTA and UK they default to No users and are outside the EU Data Boundary.
- **Advanced package uploads** governs packages with actions or MCP servers. Skills-only plugins are basic and not affected.
- Browser use is off by default.
- No Cowork credit figure exists per task: a task's **...** > **Usage details** is account-wide, Cost management splits by policy, user and service, and an hour after eight demo tasks (2026-10-22) it still showed no Cowork row. Read a run's credits the next day.

## Procedure

### 1. Check (read only)

Microsoft 365 admin center (`https://admin.cloud.microsoft`):

1. **Billing > Licenses**: confirm a Copilot license is assigned to each target user. Open the product to see assignees.
2. **Copilot > Cost management**:
   - Overview: is billing active, which policies are near their limit, what consumes credits.
   - Configuration: does a policy covering the user select **Cowork**? Record its monthly limit, per-user limits, alerts and billing method.
3. **Copilot > Settings > View all**:
   - **AI experiences enabled by usage-based billing** (discovery checkbox)
   - **AI providers operating as Microsoft subprocessors** (Anthropic)
   - **Advanced package uploads**
4. **Agents > Settings > Agent and plugin access**: allowed publisher categories.
5. **Copilot > Cowork > Settings > Browser use in Microsoft Copilot**.
6. **Copilot > Cowork > Overview**: active users, tasks, monthly credits.

Report each item as OK, missing or optional, with the exact values read. Close every setting panel without saving.

### 2. Propose changes and get approval

Ask before every change, with concrete values:

- Turn on usage-based billing (Cost management > Get started). This links a billing method.
- Add Cowork to a policy or create a new policy for a pilot group.
- Raise the monthly limit, set a per-user limit, or add alerts. Note that the shared default policy also funds Work IQ and Copilot Studio.
- Turn on discovery.
- Change Anthropic models (flag compliance review in the EU).
- Change plugin access or advanced package uploads.
- Turn on browser use (suggest restricting it to a security group).

Never assign or buy licenses, capacity packs or prepurchase plans for the user. Point them to Billing instead.

### 3. Apply approved changes

- **Spending policy**: Cost management > Configuration > policy name.
  - Agents and services: tick Cowork.
  - Spending limit: Limit monthly spending, value, Save changes.
  - Optional: User and group limits, Alerts, Model profile.
  - New policy: Add spending policy, scope, select Cowork, limits, billing method, Save.
- **Discovery**: Copilot > Settings > View all > AI experiences enabled by usage-based billing > tick the checkbox > Save.
- **Other settings**: open the setting, change only the approved option, Save.

Re-read each page after saving and confirm the new value.

### 4. Verify

The user opens `https://copilot.cloud.microsoft`, selects **Cowork** next to Chat, runs a small task, approves an action, and finds it under **My tasks**. Consumption appears in Copilot > Cowork > Overview and in Cost management, usually with a delay.

## Rules

- Step 1 is read only.
- Report exact values from the admin center. Do not estimate credit consumption.
- Close browser tabs you opened when done.
