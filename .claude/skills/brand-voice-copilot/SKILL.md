---
name: brand-voice-copilot
description: >-
  Repo-local brand-voice checker for this Microsoft 365 / Copilot Studio &
  Copilot Cowork masterclass. Audits and fixes Markdown in demos/ and labs/
  against the four house rules (no em dashes, quoted Mermaid labels, 4-sentence
  paragraph cap, topic-specific slash-command tables). Run after writing or
  significantly editing any readme.md or guide. The create-class master skill
  discovers this skill by globbing .claude/skills/brand-voice-*. Trigger phrases:
  brand voice check, brand-voice-copilot, quality check readme, fix em dashes,
  check mermaid labels, cowork brand voice, audit readme, polish demos readme.
license: CC-BY-NC-SA-4.0
---

# Brand Voice (Cowork)

Repo-local brand-voice rules for this Copilot Studio and Copilot Cowork course.
This skill is intentionally kept local: the Cowork audience differs from other
classes, so brand voice never globalizes and never folds into the `create-class`
master. `create-class` discovers this skill at run time by globbing
`.claude/skills/brand-voice-*` and invokes it.

## When to use

- After writing or significantly editing any `readme.md` or guide under `demos/`
  or `labs/`.
- When asked to run a brand-voice or quality check on course Markdown.
- Before considering a module or lab README complete.

## The rules

Apply the full ruleset in [references/rules.md](references/rules.md). In short:

1. No em dashes in prose. Replace with `,` `;` `:` or `()`.
2. Mermaid node labels use `"quoted<br/>labels"`, never `\n`.
3. Paragraphs are capped at 4 sentences. Start a new paragraph at the 5th.
4. Slash-command tables are topic-specific, never the same generic set in every
   module. `/init` only appears in modules about project setup.
5. H1 headings start with an imperative verb (verb-first slugs). See the heading
   polish workflow below.

## How to run

1. Read the target file(s).
2. Check each rule against the content. Parallelize reads across multiple files.
3. Fix violations in place with minimal diffs. Do not rewrite a section to fix a
   single em dash.
4. Report each fix as `file:rule` so the change is auditable.

## Verb-first headings (polish slugs)

Rule 5 covers H1 headings across `demos/`. Every topic readme, demo guide, and code
project readme should start with a strong imperative verb (Build, Run, Configure,
Deploy, Publish, Orchestrate, Design, Secure, Add, Convert). Strip numbering
artifacts (`01:`, `Module 13.01`) and label prefixes (`Demo:`, `Lab 01`,
`Introduction to`). Use sentence case, no trailing punctuation, and include the
concrete technology (`Build a Custom MCP Server in C#`, not `Build MCP`).

Workflow when asked to polish slugs:

1. Glob topic readmes (`demos/XX/YY/readme.md`), standalone demo guides
   (`demos/XX/NN-*.md`), and code project readmes under a topic.
2. Read the first lines of each, extract the current H1, propose a polished
   replacement, and present a table grouped by module (`File | Current | Proposed`).
3. Stop and wait for approval.
4. On approval, edit only the H1 line of each file. Insert an H1 if none exists.
   Never rename files or folders; never touch `labs/`. Print `SUMMARY: N headings
   updated across M files`.
