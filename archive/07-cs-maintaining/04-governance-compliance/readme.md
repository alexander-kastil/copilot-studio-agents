# Governance, Compliance & Preventing Agent Sprawl

Governance keeps a growing fleet of agents secure, compliant, and countable. It spans environment-level data loss prevention, Microsoft Purview compliance, the agent registry in the Microsoft 365 admin center, and deliberate controls that stop agents from multiplying unchecked. This topic is where the maker mindset meets the admin mindset.

## What this topic covers

- Copilot Studio Compliance & Security: tenant, environment, and agent level settings, geographic data residency, data loss prevention (DLP), and connector governance that limits which systems an agent can reach
- Introduction to Microsoft Purview: sensitivity labels respected by agents, unified audit logs, DLP for Microsoft 365 Copilot, and retention policies
- The agent registry in the Microsoft 365 admin center and Agent 365: viewing every agent, the agents-at-risk signals from Defender, Entra, and Purview, and governance actions to block, reassign, or delete an agent
- The plugin registry: the tools registry beside the agent registry, publisher categories in Agent and plugin access, per-plugin user scope, access requests, blocks, MCP server approval, and tool-level toggles
- Preventing Agent Sprawl: default environment routing, managed environments, and publishing approval so agents are catalogued and reviewed before they spread across the tenant

![Every agent in the tenant appears in the agent registry, which takes agents-at-risk signals from Microsoft Defender, Microsoft Entra and Microsoft Purview. From the registry an admin blocks, reassigns or deletes an agent.](../pptx/images/04-02-agent-registry.svg)

## The plugin registry

Agents are only one kind of extension. A plugin packages skills, connectors, agents and the configuration for MCP servers. Microsoft introduced the plugin registry on September 30, 2026, as one place to discover, publish, manage and govern plugins across Copilot Home (Chat and Cowork), Code, Autopilot, Word, Excel, PowerPoint and SharePoint. Copilot Studio, GitHub Copilot and Microsoft Foundry are announced for the registry as future targets.

![Plugins from every publisher pass the publisher categories in Agent and plugin access, then the tools registry, then per-plugin user access. The Agent 365 Tooling Gateway enforces tool toggles at runtime.](../pptx/images/04-03-plugin-registry.svg)

### Tools registry and agent registry

The tools registry and the agent registry are related, but they are not interchangeable. The tools registry inventories plugin packages, skills, MCP servers and connectors. The agent registry inventories agents.

| Registry | What it inventories | Admin center path |
| --- | --- | --- |
| Tools registry | Plugins, skills, MCP servers and connectors | Agents > Tools > Registry |
| Agent registry | Agents | Agents > All agents > Registry |

Plugins is a type filter inside the Registry. Each entry shows its type, status, publisher and source, and an Upload button adds a plugin package to the tenant. The admin center paths in this section were checked on 2026-10-21. In the Copilot app, a Plugins button replaces the Agents and Customize buttons as the rollout reaches each tenant.

### Publisher categories

Agents > Settings > Agent and plugin access decides which publishers a tenant allows. The three categories are Microsoft, your organization, and certified external publishers. A plugin from a category that is not selected shows the message "This plugin is blocked by your organization's policy."

### Per-plugin user scope

Each plugin has its own Users setting: All users, No users, or Specific users and groups. The actions on a plugin are Install or Uninstall, Manage user availability, Delete and Block. Delete applies only to plugins uploaded to the tenant.

### Access requests

A user who lacks access to a plugin selects Request access. An admin approves or rejects the request under Agents > Tools > Requests (preview).

### Blocking

Blocking a plugin also blocks the agents it includes. Blocking an MCP server disables all of its tools, and it can block the plugins that depend on that server.

### MCP server approval

Approving an MCP server registration requires the AI Administrator or Global Administrator role, plus tenant-wide consent. After approval, the server can take up to 30 minutes to appear in all Copilot Studio environments.

### Tool-level toggles

For MCP servers registered in Agent 365, an admin sets each tool to Enabled or Disabled. The Agent 365 Tooling Gateway enforces that setting at runtime. This control is rolling out.

### Plugins compared with Claude plugins

| | Anthropic | Microsoft |
| --- | --- | --- |
| What gets installed | Plugin: skills, agents, commands, hooks, MCP servers | Plugin: skills, declarative agents, connectors, MCP servers |
| Where it is listed | Marketplaces (public or org-private) | Plugin registry (Microsoft, partner, tenant) |
| Who controls it | Org admin settings | Agent 365: publisher filters, user scopes, access requests, tool toggles |
| Format | Claude plugin, `SKILL.md` | M365 app package, the same `SKILL.md`, imports and exports the Claude format |

### Retiring SharePoint .agent agents

Message center item MC1511052 (2026-10-16) states that SharePoint `.agent` agents upgrade to the Microsoft Copilot Agent Builder and the Plugin store from mid-November 2026. The `.agent` agents stop working in early to mid April 2027, so plan the move before then.

## Why it matters

Every agent that connects to enterprise data is a new surface for oversharing and compliance risk, and a tenant can accumulate them fast. Purview and environment-level DLP put guardrails on what agents can see and do, while the agent registry gives admins one place to see and act on the whole estate. Preventing sprawl is not about blocking makers; it is about making sure every published agent is visible, owned, and governed.

![Makers build agents that pass default environment routing, managed environments and publishing approval, so they are catalogued and reviewed before they spread across the tenant. Every published agent is visible, owned and governed.](../pptx/images/04-04-agent-sprawl.svg)

## Links & Resources

- [Copilot Studio security and governance](https://learn.microsoft.com/microsoft-copilot-studio/security-and-governance)
- [Copilot Control System: security and governance](https://learn.microsoft.com/microsoft-365/copilot/copilot-control-system/security-governance)
- [Microsoft Purview for Microsoft 365 Copilot](https://learn.microsoft.com/purview/ai-m365-copilot)
- [Manage the agent registry in the Microsoft 365 admin center](https://learn.microsoft.com/microsoft-365/admin/manage/agent-registry)
- [Introducing the plugin registry](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/introducing-the-plugin-registry---one-place-to-discover-and-govern-plugins-for-m/4559682) (last checked 2026-10-21)
- [Govern plugins in Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365/copilot/extensibility/govern-plugins) (last checked 2026-10-21)
- [Manage plugins, skills, and MCP servers](https://learn.microsoft.com/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers) (last checked 2026-10-21)
- [What is a Microsoft 365 Copilot plugin?](https://learn.microsoft.com/microsoft-365/copilot/extensibility/plugins-overview) (last checked 2026-10-21)
- [Default environment routing](https://learn.microsoft.com/power-platform/admin/default-environment-routing)
- [Microsoft Purview billing models](https://learn.microsoft.com/en-gb/purview/purview-billing-models)
