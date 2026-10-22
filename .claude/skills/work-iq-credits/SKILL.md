---
name: work-iq-credits
description: Diagnose and fix Work IQ "exhausted the AI credit quota" errors by checking and configuring Copilot Credits spending policies in the Microsoft 365 admin center.
---

# Work IQ credits and spending policies

Use this skill when:

- A Work IQ call or Work IQ MCP tool fails with `The caller has exhausted the AI credit quota for WorkIQ.`
- The user asks how Work IQ, Copilot Studio or other usage-based Copilot services are billed or limited.
- The user wants to review, raise, or add alerts to a Copilot Credits spending policy.

## Facts

- Since GA on 16 June 2026, Work IQ API calls from custom and third-party agents (Copilot Studio, Foundry, Claude, any MCP client) are billed in Copilot Credits.
- A Microsoft 365 Copilot license does not cover these calls.
- Credits are governed by spending policies in **Copilot > Cost management**. A policy defines who can spend, which services are covered, the billing method and a monthly limit.
- When a policy hits its limit, its users lose access to the covered services until the 1st of the next month.
- If a user is in several policies, the highest limit applies.
- The admin center enforces a minimum limit based on the number of users in the policy and shows a recommended value.
- Pay-as-you-go is roughly USD 0.01 per credit. Capacity packs and a pre-purchase plan (P3) are cheaper alternatives.

## Procedure

### 1. Diagnose (read only)

1. Open `https://admin.cloud.microsoft/#/copilot/costmanagement` in the user's signed-in browser.
2. On **Overview**, read:
   - Total Copilot Credits used, prepaid vs. pay-as-you-go
   - **Policies approaching or at limit** (for example `500 / 500`)
   - **Agents and services spending the most credits** (look for *Work IQ API for custom apps and agents*)
   - **Users spending the most credits**
3. On **Configuration**, list each spending policy: status, user and group access, agents and services, monthly limit, payment method.
4. Report to the user:
   - which policy is at its limit and by how much
   - which service and user consumed the credits
   - whether Work IQ is covered by the policy
   - the reset date (1st of next month)
   - any banner such as *Spending limits for this policy are below the required minimum*

### 2. Propose a change and get approval

Changing a limit increases what can be billed to the tenant's Azure subscription. Never change it without an explicit yes from the user.

Ask the user for the new monthly limit and offer options with approximate cost, for example:

| Limit | Approx. max cost per month |
|---|---|
| 2,000 credits | USD 20 |
| 5,000 credits | USD 50 |
| 10,000 credits | USD 100 |
| Leave unchanged | wait for reset |

Mention the minimum and recommended values shown by the admin center.

### 3. Apply the change

1. On **Configuration**, click the policy name to open its details panel.
2. Click **Spending limit** to open **Edit limits**.
3. Choose **Limit monthly spending** (or **No limit** only if the user asked for it).
4. Replace the value in **Set the monthly spending limit** with the approved number.
5. Leave **Select monthly budget limits for users** unchanged unless the user asked for per-user caps.
6. Click **Save changes**.
7. Re-read the Configuration tab and confirm the **Monthly limit** column shows the new value and the attention banner is gone.

### 4. Alerts (optional, ask first)

1. In **Edit limits**, enable **Define alerts**.
2. Set the threshold the user chose (for example 80%).
3. Add recipients in **Email alerts to**.
4. Save and confirm.

### 5. Verify

1. Wait a few minutes.
2. Retry a simple Work IQ call (for example a mail search).
3. If it still fails, refresh Cost management and check for another policy with a lower limit or a disabled status that applies to the user.

## Rules

- Diagnosis is read only. Every change to a limit, alert, policy, or purchase needs explicit user approval in chat.
- Never buy capacity packs or pre-purchase credits on the user's behalf. Point the user to **Buy pre-purchase credits** instead.
- Do not retry failing Work IQ calls while the quota is exhausted. Use another path to the data (for example a Microsoft 365 connector) and say so.
- Report exact numbers read from the admin center. Do not estimate consumption.
