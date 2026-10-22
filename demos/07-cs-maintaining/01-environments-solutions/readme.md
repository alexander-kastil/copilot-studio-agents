# Environments, Solutions & the Admin Center

Every Copilot Studio agent lives inside a Power Platform environment, and every agent is packaged inside a solution. Before you publish or move anything, you need an environment strategy and a working grasp of the Power Platform Admin Center, the control plane where admins create environments, assign security, and apply policies. This topic sets the foundation the rest of the module builds on.

## What this topic covers

- PowerPlatform Admin Center & Architecture: the admin control plane, Dataverse, and how tenants, environments, and security roles relate
- Introduction to Power Platform Environments & Solutions: environment types (default, developer, sandbox, production), an environment strategy for dev, test, and production, and solutions as the container that carries agents between them
- The deprecation of unmanaged developer environments and the Power Apps Developer Plan, and what admins and makers do before it takes effect
- Managed versus unmanaged solutions, and why a custom publisher and prefix matter
- Dataverse as the store for solutions, environment variables, and in-product pipelines

![The Power Platform Admin Center creates environments, assigns security and applies policies for a tenant with default, managed developer, sandbox and production environments. Inside an environment, Dataverse stores the default solution, a custom preferred solution with its own publisher and prefix, environment variables and in-product pipelines.](../pptx/images/01-01-environments-admin-center.svg)

## Why it matters

Agents created in Copilot Studio land in the default solution automatically, which is fine for a quick build but not for anything you plan to promote. To export, import, and manage agents across environments you create a custom solution and set it as your preferred solution, so new components are captured as you build. Getting this right early is what makes clean deployments possible later.

## Developer environments become managed only

Microsoft is retiring unmanaged developer environments, including the ones the free Power Apps Developer Plan creates on sign-up. The developer environment type stays, but only as a [managed environment](https://learn.microsoft.com/power-platform/admin/managed-environment-overview), and each user can create one. Developer environments that are already managed, including the personal ones that default environment routing creates, are not affected, and neither are production, sandbox, trial and default environments.

| Phase | Date | What happens |
| --- | --- | --- |
| Creation ends | November 15, 2026 | Signing up for the Power Apps Developer Plan no longer creates a developer environment, and Power Apps, the admin center, PowerShell and the Power Platform CLI can no longer create an unmanaged one |
| Suspension starts | December 15, 2026 | Existing unmanaged developer environments are suspended, and their apps, flows, agents and data are unavailable |
| Deletion starts | January 15, 2027 | Suspended unmanaged developer environments are deleted |

Admins find the affected environments in the Power Platform Admin Center under **Manage** > **Environments**, filtered to **Type** Developer and **Managed** No, and use the **Last activity** column to spot the ones still in use. For each one they still need, they either [enable Managed Environments](https://learn.microsoft.com/power-platform/admin/managed-environment-enable) on it or move its solutions to a sandbox before December 15, 2026. Converting needs premium licensing, such as a standalone Copilot Studio, Power Apps or Power Automate license, because the Developer Plan carries no Managed Environments use rights. To give every maker a personal space to build, admins turn on [default environment routing](https://learn.microsoft.com/power-platform/admin/default-environment-routing), which creates a managed developer environment for each maker.

Makers export the solutions from their developer environment before December 15, 2026, so their agents survive the suspension. This is one more reason to build in a custom solution from the start: an agent inside a solution moves to any other environment with one export and one import. To try premium capabilities without a license, a [standard trial environment](https://learn.microsoft.com/power-platform/admin/trial-environments) remains available.

## Links & Resources

- [Deprecation of unmanaged developer environments and the Power Apps Developer Plan](https://learn.microsoft.com/power-platform/important-changes-coming#deprecation-of-unmanaged-developer-environments-and-the-power-apps-developer-plan)

- [Environments overview](https://learn.microsoft.com/power-platform/admin/environments-overview)
- [Create and manage solutions in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview)
- [Solution concepts for ALM](https://learn.microsoft.com/power-platform/alm/solution-concepts-alm)
- [Plan an environment strategy for ALM](https://learn.microsoft.com/power-platform/alm/environment-strategy-alm)
- [Power Platform admin documentation](https://learn.microsoft.com/power-platform/admin/admin-documentation)
