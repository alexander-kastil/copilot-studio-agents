# Brief: slide specs for one module deck

Repo: `D:\git-classes\copilot-studio-agents` (Git Bash: `/d/git-classes/copilot-studio-agents`), a four-day class "Automate Business Processes with Copilot Studio and Copilot Cowork". The owner asked: "create the pptx for this class. a good mixture of svg and images ... for the images try to re-use many of the screenshots that you created in the last 1 1/2 days when you executed the demo guides. when you pick a screenshot reflect if it makes sense in the context."

The decks are built on the create-pptx Gamma path. You write the specs and the images of ONE module; the main thread later renders the photos, publishes the images and runs Gamma. Your module and its folders are named in your prompt.

## Read first

1. `C:\Users\AlexanderKastil\.claude\skills\create-pptx\references\gamma-deck.md`, Steps 1 to 3 (spec fields, photo prompts and subjects, deck mix, diagram rules).
2. `C:\Users\AlexanderKastil\.claude\skills\create-pptx\references\slide-titles.md` and `pptx-own-images.md` (photo prompt rules).
3. `C:\Users\AlexanderKastil\.claude\plugins\cache\integrations-marketplace\class-authoring-plugin\0.1.7\skills\create-class\references\create-slides.md` (spec format and formatting rules).
4. `D:\git-classes\copilot-studio-agents\.claude\rules\decks.md` (audience, business case, screenshot location).
5. Your module's `readme.md`, every numbered topic `readme.md` and every demo guide `demo-*.md` in the topic folders, and the specs already in your `pptx/` folder (`demos/01-intro/pptx/04-01-productivity-agents.md` is a finished example of the format).

## Deliverable

In `demos/<module>/pptx/` only:

- 14 to 22 spec files `NN-MM-<slug>.md` for the whole module: `00-01` title slide (layout `content`, side-accent nano-banana photo), `00-02` overview (diagram walking the path through the module), 1 to 3 slides per numbered topic folder with `NN` = the topic folder number, and a closing `Takeaways` slide (layout `content`, photo). No card that lists the topics or opens a topic (the script adds those), no quote card.
- Keep the existing specs that still match the current topic folders, update their `topic:`, `source:` and `media-file:` paths to today's folders, and rewrite the ones that do not fit. Never delete a file: an existing spec that no longer fits is rewritten in place for a slide you need, or named in your report as obsolete.
- `topics.json`: one entry per numbered topic folder in folder order, `{"topics": [{"title": "<topic title from the module readme table>", "subtitle": "<one short line>"}]}`.
- Every spec ends with `## Speaker Notes` written as paragraphs (gamma-deck Step 1). Every fact comes from the module files or a verified demo run. No em dashes anywhere. Run the `humanizer` skill over titles, subtitles, bullets and notes.

## The image mix

Aim for a good mixture across the deck: roughly a third live screenshots from the demo runs (where your module has runs), a third SVG diagrams, the rest Nano Banana photos (title, takeaways and a few scene photos). `check_specs.py` must pass `photo_mix` (subjects, at most one screen photo in three) and `layout_mix` (at least 3 layouts, no more than 3 cards of one layout in a row): vary `diagram`, `diagram-full`, `content`, `statement`, and `split-code` where a short `SKILL.md`, YAML or prompt snippet carries the slide.

### Screenshots (media-source `existing`)

Screenshot pools from the demo runs, deduplicated, are under `C:\Users\ALEXAN~1\AppData\Local\Temp\claude\D--git-classes-copilot-studio-agents\d527e1e7-0a54-4afa-8981-6c23d1ebe261\scratchpad\pools\<NN>\<NN-MM>\`: `NN-MM-XXX.png` full images, `sheet-NN.jpg` contact sheets with the ids in red, and `index.md` with each shot's size, time and a caption of what the run was doing right before it. The `NN-MM` tag is approximate (the last topic code the run mentioned), so look through every pool of your module and the pools your prompt names.

For every screenshot slide:

1. Pick from the contact sheets, then open the full PNG with Read before deciding. Reflect whether it fits: it shows exactly what the slide's bullets say, on the agent or item of this module's demo, in a finished state (a result, a filled form, a trace), not a spinner, an error the guide does not teach, an empty page or a sign-in screen. Skip shots that show private mail or calendar content of real people, keys, tokens, connection strings or environment and tenant IDs in readable size; crop them out when the rest fits.
2. Crop with Pillow to the region the slide talks about (a dialog, a panel, a chat answer), keep an aspect between 4:3 and 2:1, and when the crop is narrower than 1600 px upscale it with LANCZOS to 1600 px wide. Save as PNG at `demos/<module>/pptx/images/<slide>-<slug>.png`.
3. Spec fields: `media-source: existing`, `media-file:` and `photo-link:` both that path, `layout: diagram` (or `diagram-full` with one caption bullet for a wide shot), `visual-type: screenshot`, and a one-line `visual-prompt:` saying what the screenshot shows and its pool id.

### SVG diagrams

- Reuse first: the SVGs already in `demos/<module>/pptx/images/` and the demo SVGs in each topic's `_images/` folder (one per demo guide). Spec a topic `_images` SVG as `media-source: existing` with `media-file` at its `_images` path; do not copy it. Check that its basename does not collide with a file in `pptx/images/`, and run `grep -l '@keyframes\|<animate'` over it: name in your report every animated one whose first frame is incomplete (`python ~/.claude/skills/create-pptx/scripts/gamma_deck.py svg-frames --svg <file> --out-dir <your scratch> --times 0`).
- New diagrams are `opus-svg`, hand-written by gamma-deck Step 3 (viewBox 0 0 1920 1080, no heading inside, `svg { font-size }` never `text { font-size }`, labels only from the module files, no arrow through a box). Render with `python ~/.claude/skills/create-pptx/scripts/gamma_deck.py render-svg --in demos/<module>/pptx/images` and look at every new PNG.

### Photos (media-source `nano-banana`)

Write `subject:` and `visual-prompt:` per gamma-deck Step 2 and pptx-own-images, people, places and artefacts from your module's running examples. Run the three-question fit gate on every photo prompt. Do not render any photo and do not call any Media Creator or Gamma tool.

Also write one module-slide portrait scene (2:3 portrait, the module's running example, the gamma-deck Step 2 rules) and return it as text; do not write `demos/pptx/portraits.json`.

## Gate

From the repo root run `python ~/.claude/skills/create-pptx/scripts/check_specs.py --pptx-dirs demos/<module>/pptx --renumber`, then without `--renumber` until it prints `problems=0` and no `photo_mix` or `layout_mix` finding for your module.

## Boundaries

- Write only inside `demos/<module>/pptx/` and your own scratch folder `C:\Users\ALEXAN~1\AppData\Local\Temp\claude\D--git-classes-copilot-studio-agents\d527e1e7-0a54-4afa-8981-6c23d1ebe261\scratchpad\work-<NN>\`. Never edit a readme, demo guide, topic `_images` file, the pools, or another module's folder. Never delete a file.
- Never run `git checkout --`, `git restore`, `git stash`, `git reset`, `git commit` or `git push`: other sessions share this checkout.
- No Gamma call, no Media Creator call, no image render.
- Report every side effect a diff cannot show (Chrome tabs, processes, files outside the module folder).

## Report (final message, no prose beyond this)

1. Slide table: `slide | title | layout | media-source | media-file`.
2. Screenshots: `slide | pool id | crop | why it fits` (one line each), plus the shots you considered and rejected with a few words why.
3. Photos: one line each, `<slide> pass|fixed <reason>`.
4. The portrait scene text.
5. Animated `_images` SVGs with an incomplete first frame, obsolete specs, and the final `check_specs.py` summary line.
