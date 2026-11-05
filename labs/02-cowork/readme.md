# Copilot Cowork Labs

Hands-on labs for Copilot Cowork: tenant setup, the execution model, custom Agent Skills, and packaged plugins with MCP connectors. Work through them in order, each lab builds on the previous one.

| # | Lab | Deutsch | What you build | Minutes |
|---|-----|---------|----------------|---------|
| 1 | [Cowork Setup and Extensibility](./lab-01-cowork-setup.md) | [Copilot Cowork einrichten und erweitern](./lab-01-cowork-setup-de.md) | A Cowork-ready tenant with a spending policy that selects Cowork, a first delegated task, and a map of the skills vs plugins extensibility surfaces | 30 |
| 2 | [Build Your First Cowork Skill](./lab-02-cowork-skills.md) | [Ihren ersten Cowork Skill bauen](./lab-02-cowork-skills-de.md) | A custom Agent Skill, created once with the guided flow and once by hand-authoring `SKILL.md` | 35 |
| 3 | [Organize Work with Cowork Projects](./lab-03-cowork-projects.md) | [Arbeit mit Cowork Projects organisieren](./lab-03-cowork-projects-de.md) | A Vienna Hub Launch project with instructions that every task inside it follows, two board documents under Outputs, and the project archived and restored | 30 |
| 4 | [Build Your First Cowork Plugin](./lab-04-cowork-plugins.md) | [Ihr erstes Cowork Plugin bauen](./lab-04-cowork-plugins-de.md) | A plugin package with three skills and a Microsoft Learn MCP connector, deployed from the admin center | 75 |
| | **Total** | | | **170** |

## Prerequisites

- A Microsoft 365 tenant with tenant admin access (needed for the billing setup in lab 1 and the admin plugin deployment in lab 4), for example from the [Microsoft 365 Developer Program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)
- An active Microsoft 365 Copilot license and Cowork availability in the tenant
- Usage-based billing configured for Copilot Credits, with a spending policy that selects **Cowork** (set up in lab 1)
- Optional: Frontier enrollment for the **App** skill and the **GPT 5.5 (Frontier)** model. Anthropic models are optional too; turning them off does not block Cowork access.
- Visual Studio Code for the skill and plugin authoring exercises

> Authoring and testing custom skills and plugins consumes Copilot Credits. Set spending limits before you start.

Pairs with [Module 2: Cowork](../../demos/02-cowork/readme.md). The lab content is adapted from the [Copilot Developer Camp](https://microsoft.github.io/copilot-camp/pages/copilot-cowork/00-cowork-setup/) Cowork pathway.
