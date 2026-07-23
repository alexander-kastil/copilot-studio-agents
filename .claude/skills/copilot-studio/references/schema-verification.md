# Schema verification — settling what is actually valid

The problem this leaf solves: you need the literal YAML token (`DatePrebuiltEntity`? `DateTimePrebuiltEntity`?) and the usual sources cannot tell you.

## Ladder of authority

Work down this ladder. Stop at the highest tier that answers the question.

| Tier | Source | Answers | Trust |
| --- | --- | --- | --- |
| 1 | Language server binary, or a template the product itself generates (below) | Exact tokens, node kinds, validator rules, import file formats | Definitive |
| 2 | A working `.mcs.yml` in this repo, or one exported from Copilot Studio | Full node shape, property names, nesting | High |
| 3 | Microsoft Learn | Concepts, behavior, channel limits, base types | High for prose, silent on tokens, and split across two surfaces |
| 4 | Blogs, forum posts, search summaries | Hints only | Never authoritative |

Tier 4 actively misleads. Searching for the date entity returned confident claims for both `DatePrebuiltEntity` and `DateTimePrebuiltEntity`; both strings exist, but they are different entities, and only tier 1 disambiguates them.

## Tier 1 also means: the template the product hands you

Any file the product generates for you to fill in is tier 1, exactly like the language server's string table. A downloadable template, an export, or a schema endpoint states the contract the importer actually enforces, which is the thing you need.

The trap is treating your own written caveat as if it were verification. Shipping a companion asset built from documentation while the guide says "check the downloaded template, it is the authority" is not verification; it is deferring your unfinished work to the learner. The evaluations lab did exactly this and shipped a CSV in the classic column layout, which the new experience rejects with `The CSV file does not match the expected format. Please use the correct template.` **Get the template first, then author the asset against it.**

When the download is generated client-side (a `<button>` with no `href` that builds a Blob), you can read it without saving a file:

```javascript
const oc = URL.createObjectURL;
URL.createObjectURL = function (b) { window.__capBlob = b; return oc.call(URL, b); };
HTMLAnchorElement.prototype.click = function () {};
// click the product's download control, then:
const text = await window.__capBlob.text();
```

Split the text into lines and read it in slices rather than as one string, which also avoids tripping content filters on large blobs.

## Tier 3 caveat: Learn documents two Copilot Studio surfaces

Classic and the new agent experience have separate, near-identically titled documentation trees, and search interleaves them with no visual tell. The URL path is the only reliable signal:

| Path | Surface |
| --- | --- |
| `learn.microsoft.com/microsoft-copilot-studio/<page>` | Classic |
| `learn.microsoft.com/microsoft-copilot-studio/agents-experience/<page>` | New agent experience |

Both trees carry pages called "Evaluate an agent", "Create a test set for an agent", and "Run an evaluation". They describe genuinely different features: classic offers seven per-case graders (General quality, Compare meaning, Tool use, Keyword match, Text similarity, Exact match, Custom) and two test set types, while the new experience offers one **General quality** method applied per set and conversation test sets only. Mixing them produces confident, wrong guidance, such as telling a maker to pick a `Tool use` grader on a tab that has no grader picker. Check the path segment before quoting a Learn page, and say which surface the fact came from.

## Tier 1: the language server binary

The Copilot Studio VS Code extension (`ms-copilotstudio.vscode-copilotstudio`) ships the validator as a .NET binary. Its embedded string tables hold every valid token and every diagnostic name.

```bash
LSP=$(ls -d ~/.vscode/extensions/ms-copilotstudio.vscode-copilotstudio-*/lspOut | tail -1)

# Every prebuilt entity token
grep -aoE '[A-Za-z]+PrebuiltEntity' "$LSP/LanguageServerHost.exe" | sort -u

# Adaptive Card validation rules the authoring tool enforces
grep -aoE 'AdaptiveCard[A-Za-z]+' "$LSP/LanguageServerHost.exe" | sort -u

# Trigger kinds
grep -aoE '\bOn(RecognizedIntent|ConversationStart|UnknownIntent|SelectIntent|Error|Inactivity|Redirect)\b' \
  "$LSP/LanguageServerHost.exe" | sort -u
```

Notes that cost time if missed:

- **`grep -a` is required.** Without it grep prints `Binary file ... matches` and no results.
- **Glob the version.** The folder carries a version and platform suffix (`-1.6.68-win32-x64`) that changes on update; never hardcode it.
- **Tokens are ASCII, not UTF-16.** A UTF-16 decode pass finds almost nothing; plain `grep -a` is correct.
- **Case variants are noise.** The table contains `datePrebuiltEntity`, `DatePrebuiltEntity`, plus generated `Read*`/`Write*`/`Visit*` visitor-method names. The PascalCase bare form is the YAML token.
- **Diagnostic names double as a requirements checklist.** `AdaptiveCardMissingActionSubmit` tells you a card must have an `Action.Submit`, and `AdaptiveCardInputIsRequiredMissingLabel` tells you a required input needs a `label`. Reading the error catalog is faster than discovering rules by trial.

## Tier 2: existing YAML, with one trap

A working topic in this repo is strong evidence. But:

**`.mcs/botdefinition.json` is NOT independent confirmation.** It embeds the topic YAML verbatim as an escaped string, so finding a token there only proves the same local file contains it. It does not prove Copilot Studio ever accepted it. Treat the bundle and the `.yml` as one source, not two.

GitHub code search is a useful tier-2 extension for node shapes that this repo has no example of:

```
"kind: AdaptiveCardPrompt" extension:yml
```

Prefer hits under `pnp/copilot-pro-dev-samples` and other Microsoft-adjacent orgs.

## Verify the edit

The extension analyzes the whole agent folder live, so diagnostics are a real feedback loop, not a guess.

1. Make the edit.
2. Call `mcp__ide__getDiagnostics` with no `uri` to get all files, then find the topic by path.
3. Expect an entry with `"diagnostics": []`.

Passing a `uri` for a file that is not open can return an empty list that merely means "not analyzed." Fetching all files and locating the entry (it reports `linesInFile`) proves the file was genuinely analyzed and is clean.

If the IDE MCP connection is unavailable, fall back to the editor: open the file in VS Code and check the **Problems** pane (`Ctrl+Shift+M`), which is the same language server reporting the same diagnostics. `Copilot Studio: Apply changes` also refuses to run against a file with validation errors, so a clean Problems pane is a prerequisite for sync (see [`clone-and-sync.md`](clone-and-sync.md)).

Do not report an edit as valid without this step.
