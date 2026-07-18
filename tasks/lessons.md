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
