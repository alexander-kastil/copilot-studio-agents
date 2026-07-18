# Application Lifecycle Management & Source Control

Application Lifecycle Management (ALM) is the discipline of moving an agent through development, test, and production in a way that is reliable and repeatable. Solutions are the carrier that transports the agent, pipelines automate the promotion between environments, and Git integration gives you a source of truth outside Dataverse. This topic ties those pieces into a single deployment story.

## What this topic covers

- Application Lifecycle Management for Copilot Studio Agents: the three-environment model (dev, test, prod) and the ALM golden rules, such as never customizing outside development and always working in the context of solutions
- Exporting & Importing Agents between Environments: creating a custom solution, adding required objects, and the managed versus unmanaged decision when you import
- Copilot Studio specific items that are not solution-aware (deployed channels, authentication settings, sharing, and Application Insights) and need post-deployment steps in the target environment
- Deployment Pipelines & Source Control integration: one-click pipeline deployment from inside Copilot Studio, native Git integration, environment variables and connection references for settings that change per environment, and Azure DevOps or GitHub for pro-dev CI/CD

## Why it matters

Without ALM, promoting an agent means rebuilding it by hand and hoping nothing drifts between environments. Solutions plus environment variables let the same agent carry different settings in dev, test, and production without editing the agent itself. Pipelines and source control turn that from a careful manual ritual into an automated, auditable release.

## Links & Resources

- [Establish an ALM strategy for Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/alm)
- [Export and import agents using solutions](https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-import-export)
- [Set up pipelines in Power Platform](https://learn.microsoft.com/power-platform/alm/set-up-pipelines)
- [Git integration overview](https://learn.microsoft.com/power-platform/alm/git-integration/overview)
- [ALM overview with Power Platform](https://learn.microsoft.com/power-platform/alm/overview-alm)
