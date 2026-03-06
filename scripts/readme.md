# Scripts

## Prerequisites

Some scripts in this folder require the Microsoft Power Platform CLI (`pac`).

Install it with `winget`:

```powershell
winget install --id Microsoft.PowerAppsCLI -e
```

### Verify installation

```powershell
Get-Command pac | Format-List
pac
```

### Authenticate PAC CLI

Before running scripts that assign users to Power Platform environments, authenticate once:

```powershell
pac auth create
```

Verify access:

```powershell
pac admin list --json
```

## create-copilot-studio-users.ps1

This script creates Copilot Studio users, assigns licenses, and assigns the target environment role using `pac admin assign-user`.

Run it from PowerShell 7 (`pwsh`):

```powershell
cd D:\git-classes\low-code-agents\scripts
.\create-copilot-studio-users.ps1
```
