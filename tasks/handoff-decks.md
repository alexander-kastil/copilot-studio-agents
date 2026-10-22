# Handoff: class decks (stopped before Gamma, 2026-10-22)

Owner request: "create the pptx for this class. a good mixture of svg and images ... for the images try to re-use many of the screenshots that you created in the last 1 1/2 days when you executed the demo guides. when you pick a screenshot reflect if it makes sense in the context. use 8 agents as it is 8 modules". Workflow: `/create-pptx`, Gamma path, run as the global `/create-repo-pptx` playbook. The owner stopped the run before Gamma.

## Done

- `.claude/rules/decks.md`: json block for `repo_decks.py`, photo facts, screenshot rule, storage account route. Gamma template `g_dnrfhnxxzj9ligv` confirmed reachable.
- All 8 modules specced: 154 specs, `topics.json` per module, `demos/pptx/portraits.json` with all 8 module portraits. `check_specs.py --pptx-dirs demos/*/pptx --links demos labs` prints `problems=0`, `photo_mix=0`, `layout_mix=0`.
- Cleanup (owner: "delete all that you dont need when you are done", "before the gamma step"): obsolete specs `01-intro/02-03-semantic-index.md`, `01-intro/02-04-mcp-server.md`, `07-cs-maintaining/04-04-agent-sprawl.md` deleted and order renumbered; 20 files in `demos/*/pptx/images/` that no spec names and no readme, lab or archive readme links to deleted (unused crops and the PNG renders of SVGs only readmes embed); agent scratch folders removed. SVGs a readme or `archive/` readme embeds stay.
- Demo-run screenshot pools (659 PNGs, 107 MB, contact sheets and captions) at `C:\Users\ALEXAN~1\AppData\Local\Temp\claude\D--git-classes-copilot-studio-agents\d527e1e7-0a54-4afa-8981-6c23d1ebe261\scratchpad\pools\<NN>\<NN-MM>\`. If the scratchpad is gone, rebuild them with the global create-pptx script: `python ~/.claude/skills/create-pptx/scripts/transcript_screenshots.py --projects-dir ~/.claude/projects/D--git-classes-copilot-studio-agents --out <scratch>/pools --since 2026-10-20T12 --only-listed` plus the `--map`/`--track` pairs taken from `FOLDER_TOPIC` in `tasks/deck-build/pools.py` (`--track` for the four keys whose topic follows the run's `NN/MM` codes); it prints `kept=659`. Agent brief: `tasks/deck-build/brief.md`.

| Module | Slides | SVG | Screenshots | Photos | Notes |
| --- | --- | --- | --- | --- | --- |
| 01-intro | 17 | 10 | 4 | 3 | readme still embeds the 4-topic `00-02-module-path.svg`; the deck uses the new 5-topic `00-02-topic-path.svg` |
| 02-cowork | 21 | 10 | 7 | 4 | `02-02-skill-sources.svg` (readmes embed it) still shows old menu paths |
| 03-cs-basics | 20 | 9 | 6 | 5 | |
| 04-cs-tools | 22 | 9 | 7 | 6 | `00-01-tool-types.svg` (readmes embed it) is outdated: lists Document Processing, no agent flows |
| 05-cs-advanced | 20 | 9 | 6 | 5 | |
| 06-cs-gh-copilot | 21 | 10 | 7 | 4 | no GitHub Copilot Evaluate screenshot exists (all evaluation runs were Standard agents) |
| 07-cs-maintaining | 15 | 9 | 2 | 4 | its demo shots were 922 px, so SVGs replaced them |
| 08-ai-teammates | 18 | 12 | 1 | 5 | no demo runs of its own |

## Open, in this order

1. **Screenshot readability (owner, 2026-10-22: a whole-page capture with tiny text makes no sense on a slide).** Each screenshot shows one focal part (a dialog, a panel, a chat answer, a trace) whose text can be read when the image fills half a slide. Fix in this order: crop to the part the bullets name at native size, no upscaling; when the source is a 941 px pool shot that would need more than 1.5x enlargement, exchange it for a sharper 1537 or 1568 px shot of the same screen (`index.md` lists sizes); when neither works, an SVG. Then align bullets and `visual-prompt`. Modules 03, 04, 05, 07 and `01-intro` 02-02 already comply. Still upscaled to 1600 px, to check:
   - `01-intro`: `01-03-cowork-result`, `05-02-harness-credits`, `05-03-manage-agents`
   - `02-cowork`: `01-03-q3-review-deck`, `02-02-customize-page`, `02-03-market-brief-pdf`, `03-03-trail-capsule-deck`, `04-03-recurring-task-card`, `05-02-nutrition-packet`, `06-01-calendar-approval-card`
   - `06-cs-gh-copilot`: `01-03-new-agent-menu`, `02-02-plan-in-preview`, `03-02-skill-activation`, `04-02-mcp-edit-tool`, `04-03-workflow-run`, `05-02-work-iq-trace`, `06-02-tasting-request-tracker` (02-02 and 03-02 also have the mouse pointer over the text)
   - `08-ai-teammates`: `03-03-tool-authentication`
2. **Photos (owner: "gamma only makes the layout ... if you need new photos use media creator mcp (global)").** Gamma generates no image. `/create-repo-pptx` steps 1 to 7: `repo_decks.py check`, the owner approves the photo lines (each agent's verdicts are in the specs' `subject:` and `visual-prompt:`; 36 photos plus 8 portraits), `repo_decks.py emit`, ONE `mcp__claude_ai_Media_Creator__generate_images_batch` call, `install`, contact sheet and full-size check of every printed page and screen.
3. **Reused `_images` SVGs:** `python ~/.claude/skills/create-pptx/scripts/existing_pngs.py --pptx-dirs demos/*/pptx` (dry run first) renders the PNGs Gamma needs (03: 4, 04: 6, 05: 5, 06: 1, 07: 1, 02: 1).
4. **Upload to our storage account before Gamma (owner, 2026-10-22), SAS valid 12 hours.** Container `slide-production` in storage account `integrationsmediacreator` (rg `rg-integrations-at`, subscription `cd091145-5ea2-4703-ba5d-41063b1d4308`), one folder per module under `copilot-studio-agents/<module>/`:
   - `az storage blob upload-batch --auth-mode login --account-name integrationsmediacreator -d slide-production --destination-path copilot-studio-agents/<module> -s demos/<module>/pptx/images --pattern "*.png" --overwrite`, and again with `--pattern "*.jpg"`.
   - `SAS=$(az storage container generate-sas --as-user --auth-mode login --account-name integrationsmediacreator -n slide-production --permissions r --expiry $(date -u -d "+12 hours" '+%Y-%m-%dT%H:%MZ') -o tsv)`
   - `repo_decks.py prep` takes no base URL or SAS, only `--url-map`: write a JSON `{file name: https://integrationsmediacreator.blob.core.windows.net/slide-production/copilot-studio-agents/<module>/<file>?<SAS>}` per module and pass it, or build the parts with `gamma_deck.py prompt --specs demos/<module>/pptx --base-url <container>/copilot-studio-agents/<module> --url-suffix "?$SAS" --check-urls`. Gate: `bad_urls=0`.
   - Upload in the same session as the Gamma run: the SAS lasts 12 hours and the lifecycle rule deletes blobs after 7 days.
5. **Gamma and delivery:** `/create-repo-pptx` steps 9 to 14: `prep`, one `generate_from_template` per part (no `themeId`, about 4 credits per card, 154 cards plus the module slides), `finish` per module (`cards_off=0`, `tight=0`, `unmatched=0 missing=0`), contact sheets, `deliver` to `E:\Onedrive\OneDrive - Integrations IT Solutions\Classes\copilot-studio-agents`.
