# Designing, Implementing & Maintaining Low-Code Agents using Copilot Studio

Microsoft 365 Agents Toolkit (formerly Teams Toolkit) has been rebranded, and users may still use either name.

Use this mapping to know the current vs. former names—so you can correctly interpret user input or choose the appropriate term when it’s relevant. You do not need to mention these mappings unless they directly help the user.

| New name                                                       | Former name                                    | Note                                                     |
| -------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------- |
| Microsoft 365 Agents Toolkit                                   | Teams Toolkit                                  | Product name.                                            |
| App Manifest                                                   | Teams app manifest                             | Describes app capabilities.                              |
| Microsoft 365 Agents Playground                                | Test Tool                                      | Test Environment.                                        |
| `m365agents.yml`                                               | `teamsapp.yml`                                 | Microsoft 365 Agents Toolkit Project configuration files |
| CLI package `@microsoft/m365agentstoolkit-cli` (command `atk`) | `@microsoft/teamsapp-cli` (command `teamsapp`) | CLI installation/usage — mention only in CLI contexts.   |

> **Rephrase guidance:**
>
> - Use the new names by default.
> - Explain the rebranding briefly if it helps the user’s understanding.

# General Repository Instructions

This repository provides low-code and code-first solutions for designing, implementing, and maintaining intelligent agents using Copilot Studio and Microsoft 365 Agents Toolkit.

## Key Principles

- **Low-Code First**: Prioritize low-code solutions and visually designed agents when possible, using code-first approaches for advanced scenarios.
- **Modular Design**: Build reusable agent components, skills, and connectors that can be composed together.
- **Production Ready**: All agents and implementations should follow enterprise best practices, including error handling, monitoring, and documentation.
- **Accessibility First**: Follow WCAG 2.2 Level AA standards for all user-facing interfaces.

## Repository Structure

- **`demos/`**: Incremental demonstrations showcasing agent capabilities from basics to advanced patterns.
- **`labs/`**: Hands-on learning materials and exercises for different skill levels.
- **`src/`**: Production-ready source code including:
  - ASP.NET Core APIs (e.g., food-catalog-api, purchasing-service)
  - Angular frontend applications (e.g., food-shop)
  - MCP servers (e.g., hr-mcp-server)
  - Custom connectors for Microsoft 365
- **`infra/`**: Infrastructure as Code (Bicep) for Azure deployment.

## Building Agents with Copilot Studio

### Design Phase

- Start with agent intent and brief definition in your manifest or design document.
- Map required capabilities to available plugins or custom connectors.
- Plan conversation flows and error scenarios.
- Document agent triggers and invocation patterns.

### Implementation Phase

- Use the **Microsoft 365 Agents Playground** to test agents in isolated environment.
- Create or extend MCP servers for backend integrations.
- Implement custom connectors for Microsoft 365 and external APIs.
- Cache OpenAPI schemas and frequently accessed data for performance.

### Maintenance & Monitoring

- Monitor agent performance using Application Insights.
- Version agent definitions alongside code changes.
- Update agent capabilities when underlying services change.
- Maintain backward compatibility in agent APIs.

## Tool Usage Guidelines

- Use **Microsoft 365 Agents Toolkit CLI** (command: `atk`) for local development and testing.
- Configuration is managed via `m365agents.yml` (never check secrets into source control).
- Leverage **declarative agents** for simple, policy-driven scenarios.
- Use **custom engine agents** for complex multi-turn conversations requiring state management.

# Instructions for Copilot

- Apps and agents for Microsoft 365 or Microsoft 365 Copilot refers to applications for products in Microsoft 365, agents for Microsoft 365 Copilot, including Teams app, Office addin, declarative agent, custom engine agent, etc.
- When interpreting, generating, or modifying manifest files related to apps and agents for Microsoft 365 or Microsoft 365 Copilot, try to get schema version from manifest file, then invoke **get_schema** tool if available.
- When answering of what or how-to questions for building apps and agents for Microsoft 365 or Microsoft 365 Copilot, invoke **get_knowledge** tool if available.
- Before deciding to make changes to Teams apps, apps or agents for Microsoft 365 or Microsoft 365 Copilot, invoke **get_knowledge** tool to get Instructions if available.
- When troubleshooting issues, invoke **troubleshoot** tool if available.
- Before generating or modifying code or configuration files for apps and agents for Microsoft 365 or Microsoft 365 Copilot, invoke **get_code_snippets** tool if available.
- Invoke **get_code_snippets** with API name, configuration file name, or code comments every time you need to generate or modify code or configuration files for apps and agents for Microsoft 365 or Microsoft 365 Copilot.
