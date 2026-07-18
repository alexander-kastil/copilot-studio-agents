# Lessons

## Skills

- **create-class peer subskills are nested, not top-level.** They live at `.claude/skills/create-class/<peer>/SKILL.md`. `Skill <peer>` returns "Unknown skill". Use a peer by reading its file. Never propose promoting them to top-level; the user rejected this firmly.

## Course content accuracy

- **It is "Microsoft Foundry", not "Azure AI Foundry".** Microsoft renamed it roughly a year ago. Never write "Azure AI Foundry" in course content.

## Course structure

- **File demos and labs inside the deepest numbered topic subfolder, not the module or sub-module root.** When a module (or a sub-module like `04-ui-update`) has `NN-topic` subfolders, each `demo-NN-*.md` / `lab-NN-*.md` and its companion folder belongs inside the matching topic subfolder. `create-guide` now does this natively (its old "module root" rule was updated). It previously defaulted to module root, which the user corrected twice (02-cowork, then 03-copilot-studio/04-ui-update). Place into the topic from the start.
- **Fix links after every move.** Own topic becomes `./`, sibling topics become `../NN-topic/`, and a depth change ripples to cross-tree links (labs reference demos with one extra `../`). Validate with a resolver that also checks `#anchors`; on Windows a grep end-anchor `$` silently misses CRLF lines, so use a script or drop `$`.
- **Per-topic lab numbering resets to `lab-01`.** With topics as sub-modules, each topic's first lab is `lab-01-<slug>`. When moving an existing lab into a topic, rename it to `lab-01` and update its self-references and companion folder name.

## Terminology

- **"Teaching" / "teachings" means learning content.** When the user says a topic "misses teachings," they mean: (1) the topic `readme.md` must be developed, concept-first LEARNING prose a student reads to learn (replace any "What to teach" instructor bullet outline with real prose under descriptive subheadings, keeping comparison tables and Key Topics links), and (2) each topic carries both a Hands-On Demo and a Hands-On Lab. A "learning" is a hands-on lab.

## Slides & decks (pptx)

- **A deck's filename number must match its `demos/NN-*` module folder number.** `01 …` maps to `demos/01-intro`, `02 …` to `demos/02-cowork`, `03 …` to `demos/03-copilot-studio`, `04 …` to `demos/04-maintaining`. The Copilot Studio deck was `02 Implementing…` while its module is `03-copilot-studio`; the user flagged it ("but it is 03-"). Number and title every deck to its module folder.
- **A module's identity lives in three assets that drift independently; reconcile all three.** The master TOC (`demos/readme.md`), the folder guides (`demos/NN-*/readme.md` topic table + topic H1s), and the pptx deck (filename + title slide + agenda + section dividers). The folder is the source of truth; align the TOC and deck to it. Keep a topic title identical across the TOC bullet, the module-table row, the topic H1, and the deck divider/agenda.
- **When one deck carries two modules, split it one-deck-per-module.** Extract the module's section into that module's own deck, mirroring the folder separation (the Publishing & Monitoring section moved out of the Copilot Studio deck into a Publishing & Maintaining deck).
- **Edit existing branded decks in place with python-pptx; never regenerate from scratch (that discards the branding).** The proven recipe is in the global `create-slides` skill (`references/edit-existing-pptx.md`): `PYTHONUTF8=1` plus `sys.stdout.reconfigure(encoding='utf-8')` to dodge the Windows cp1252 crash on zero-width chars; address slides by live order or title (part-file numbers resequence on save, so never trust `slideN.xml` == position across a save); delete via `sldIdLst.remove` + `drop_rel`; clone a slide by deep-copying shapes off a same-layout text-only template with rId remap; grow a bullet list by deep-copying the template `<a:p>`; split a deck by copy-then-keep-only (avoids fragile cross-package slide copy). No LibreOffice here, so verify new slides structurally (title, bullets, geometry within bounds) and tell the user no visual render ran.
