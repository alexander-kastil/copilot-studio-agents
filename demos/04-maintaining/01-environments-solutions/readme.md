# Environments, Solutions & the Admin Center

Every Copilot Studio agent lives inside a Power Platform environment, and every agent is packaged inside a solution. Before you publish or move anything, you need an environment strategy and a working grasp of the Power Platform Admin Center, the control plane where admins create environments, assign security, and apply policies. This topic sets the foundation the rest of the module builds on.

## What this topic covers

- PowerPlatform Admin Center & Architecture: the admin control plane, Dataverse, and how tenants, environments, and security roles relate
- Introduction to Power Platform Environments & Solutions: environment types (default, developer, sandbox, production), an environment strategy for dev, test, and production, and solutions as the container that carries agents between them
- Managed versus unmanaged solutions, and why a custom publisher and prefix matter
- Dataverse as the store for solutions, environment variables, and in-product pipelines

## Why it matters

Agents created in Copilot Studio land in the default solution automatically, which is fine for a quick build but not for anything you plan to promote. To export, import, and manage agents across environments you create a custom solution and set it as your preferred solution, so new components are captured as you build. Getting this right early is what makes clean deployments possible later.

## Links & Resources

- [Environments overview](https://learn.microsoft.com/power-platform/admin/environments-overview)
- [Create and manage solutions in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview)
- [Solution concepts for ALM](https://learn.microsoft.com/power-platform/alm/solution-concepts-alm)
- [Plan an environment strategy for ALM](https://learn.microsoft.com/power-platform/alm/environment-strategy-alm)
- [Power Platform admin documentation](https://learn.microsoft.com/power-platform/admin/admin-documentation)
