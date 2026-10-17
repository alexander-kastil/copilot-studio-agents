# Cowork Skill Format Reference

The authoritative contract for a Copilot Cowork custom skill, validated against Microsoft Learn.

## Frontmatter fields

YAML frontmatter followed by a Markdown body. Only two fields are required.

| Field | Required | Constraints |
|-------|----------|-------------|
| `name` | Yes | 1 to 64 characters, kebab-case, must match the folder name exactly |
| `description` | Yes | 1 to 1024 characters; states what the skill does and when to use it, including trigger phrases |
| `license` | No | License name or a reference to a bundled license file |
| `compatibility` | No | Environment requirements, such as intended product or required packages |
| `metadata` | No | Arbitrary key-value mapping |
| `allowed-tools` | No | Space-separated list of pre-approved tools |

### Name validation

| Example | Valid | Why |
|---------|-------|-----|
| `bond-relative-value` | Yes | Lowercase with hyphens |
| `email` | Yes | Single word |
| `Bond_Relative_Value` | No | Underscores and uppercase |
| `--my-skill--` | No | Leading and trailing hyphens |
| `my--skill` | No | Consecutive hyphens |

The folder must match: `skills/contract-analysis/SKILL.md` requires `name: contract-analysis`. `ContractAnalysis` or a folder named `my-skill` with `name: contract-analysis` both fail.

> Microsoft's OneDrive authoring page shows a title-case example (`name: Weekly Report`) that contradicts the plugin-development page's kebab-case Error-severity rule. The kebab-case rule is the strict one and satisfies both surfaces. Author kebab-case always.

## Limits

| Limit | Value |
|-------|-------|
| Custom skills per user | 50 |
| `SKILL.md` file size | 1 MB |
| Companion files per skill | 20 |
| Size per companion file | 5 MB |
| Total companion size per skill | 10 MB |
| Companion download timeout | 15 seconds |
| Uploaded archive | 10 MB compressed, 50 MB uncompressed, 100 files |

`SKILL.md` itself does not count as a companion file.

## Companion file rules

Companion files are anything in the skill folder other than `SKILL.md`: templates, reference documents, scripts, past examples. Reference them by name in the body so Cowork knows to open them.

Path rules, all Error severity on validation:

- Relative paths only, no absolute paths
- No path traversal (`..` segments)
- No backslashes or null bytes in file names
- No hidden files (names starting with `.`)
- No Windows reserved names (`CON`, `PRN`, `AUX`, `NUL`, `COM1` to `COM9`, `LPT1` to `LPT9`)
- Safe characters only: alphanumeric, hyphens, underscores, dots, spaces, and `!`

## Three-layer loading

Context is loaded progressively, which is why a lean `SKILL.md` with references beats one long file.

| Layer | When loaded | Target size |
|-------|-------------|-------------|
| Frontmatter (`name` + `description`) | Always, at session start | ~100 tokens |
| `SKILL.md` body | When the skill triggers | Under 5000 tokens (1500 to 2000 words) |
| `references/` | On demand by the agent | Unlimited |
| `scripts/` | Executed, not loaded into context | N/A |

Declare the subdirectories explicitly in the body so the agent knows they exist:

```markdown
## Additional Resources

- `references/clause-taxonomy.md`: full taxonomy of contract clause types
- `references/risk-scoring.md`: risk scoring methodology and thresholds
- `scripts/extract-clauses.py`: automated clause extraction utility
```

## Folder structure

Personal skill in OneDrive:

```text
Documents/Cowork/skills/
  weekly-report/
    SKILL.md
    weekly-status-template.docx
  contract-analysis/
    SKILL.md
    references/
      clause-taxonomy.md
    scripts/
      extract-clauses.py
```

## Distribution paths

| Path | How |
|------|-----|
| OneDrive | Save `SKILL.md` under `Documents/Cowork/skills/<name>/`; discovered at the start of each session |
| Customize page | **Customize** > **Skills** > **Add** > **Create new** for a guided authoring flow |
| From chat | Tell Cowork you want help creating a skill; it writes the `SKILL.md` to OneDrive |
| Upload | **Customize** > **Skills** > **Add** > **Upload skill**, accepting `.md`, `.zip`, or `.skill`; an archive needs `SKILL.md` at its root |
| Plugin | Package skills (and optionally MCP connectors) into a plugin; see "Plugin packaging" below |

An uploaded skill whose name collides with an existing one is kept alongside it with a number appended, not overwritten.

## Plugin packaging

A plugin is a Microsoft 365 app package: `manifest.json`, `color.png` (192x192), `outline.png` (32x32), a `skills/` folder of `SKILL.md` folders, and for connectors a `tools/` folder. Verified 2026-10-17:

| Fact | Value |
|------|-------|
| `manifestVersion` | `"1.28"` with the v1.28 `$schema` for hand-authored packages; `wiqd plugin create` pins `"1.29"`; `atk import openplugin` emits `devPreview`, which a 1.28 channel rejects |
| Strict schema | v1.28 sets `additionalProperties: false` at the root, so any extra field (for example `packageName`) fails the upload |
| `mcpToolDescription` | Required on every `remoteMcpServer` at 1.28: the published schema lists `required: ["mcpServerUrl", "mcpToolDescription"]`, although the Learn page also calls it optional. Optional at 1.29 |
| Tool-description file | Must match the server's `tools/list` response; generate it with `scripts/mcp-tool-description.sh --url <mcp url> --out tools/<name>.json` instead of writing it by hand |
| Connector auth | `None`, `OAuthPluginVault`, or Dynamic Client Registration (omit `authorization`); API key auth isn't available in Cowork yet |
| Author self-test | **Customize** > **Plugins** > **Upload plugin**, share **Only you**; no admin needed (one Learn page labels the button **Add plugin**) |
| Admin listing in **Discover** | Microsoft 365 admin center **Agents** > **Tools** > **Registry** > **Upload**, review components, **Next**, **Scope users**, **Install** (checked live; Learn also cites **All agents** > **Upload custom agent** and **Manage apps** > **Upload custom app**, neither of which is the plugin path) |
| `wiqd plugin share` | Lands in **Shared with me** under **Sources & Skills** > **Plugins**, not in **Discover** |

When two Learn pages disagree on a manifest rule, the published JSON schema decides (`https://developer.microsoft.com/json-schemas/teams/v1.28/MicrosoftTeams.schema.json`); when they disagree on a UI path, the live admin center decides.

## Cross-platform compatibility

Cowork skills use the Agent Skills open standard, so the same `SKILL.md` works elsewhere:

| Platform | Compatibility |
|----------|---------------|
| Claude Code | Full, same `SKILL.md` format |
| Claude.ai Projects | Full, uploaded as project files |
| VS Code / GitHub Copilot | Full, in agent mode |
| Gemini CLI, JetBrains Junie, OpenAI Codex, Cursor | Full |

When authoring for both Claude Code and Cowork, start from the Claude Code plugin structure since it is the superset, then convert to an M365 package for publishing.

## Security note

A skill runs as instructions to the AI. Only upload or install skills from sources you trust. Cowork shows a reminder on first upload for exactly this reason.
