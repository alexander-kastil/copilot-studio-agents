# Unify class-creation skills

Build in `m365-pilot` first, verify, then distribute to `~/.claude/skills` (global) and the other repos (ai-teacher, code-masterclass, cowork-masterclass, ai-103).

## Decisions (locked in /claude-looped discussion)

- Single master `create-class`, best-of-breed content from all 5 repos, seeded from ai-teacher.
- `create-*` naming; revert invented names: enrich-module->create-teaching, author-guide->create-guide, author-slides->create-slides, enhance-business->enhance-for-business-owner (folded in).
- All skills live in BOTH each repo AND global.
- Layout unified `demos/` + `labs/`; ai-103 `modules/`->`demos/`.
- Structure flexible; content quality is the goal.
- brand-voice-* stays repo-local, per audience; create-class bootstraps one (3-4 Qs) if missing. Absorbs polish-slug.
- create-slides: two paths, Gamma (merge-slides under it) and pptx. Both valid.
- run-demo (new, generic code demos) + run-foundry-demo (kept). run-guide-browser (was evaluate-guide): two backends, Qwen3-VL/Midscene or Claude native in-app browser.
- dashboard kept, self-contained, optional. mermaid-expert stays own skill.

## Target skills
- [ ] create-class (master)
- [ ] scaffold (interactive base-repo setup)
- [ ] create-teaching (+ enhance-for-business-owner folded in)
- [ ] create-guide (flexible; ai-103 authoring wisdom harvested)
- [ ] create-slides (Gamma + pptx paths, merge-slides)
- [ ] dashboard (self-contained assets)
- [ ] run-demo (new)
- [ ] run-foundry-demo (kept)
- [ ] run-guide-browser (two backends)
- [ ] mermaid-expert (own skill)
- [ ] brand-voice-* (repo-local; polish-slug folded in)

## Build sequence (m365-pilot)
1. [ ] Harvest best-of-breed sources into scratchpad (read ai-teacher + code-masterclass + cowork + ai-103)
2. [ ] Write create-class master (reverted names, delegation map)
3. [ ] Write the create-* leaves + scaffold
4. [ ] Write run-demo; keep run-foundry-demo; write run-guide-browser (two backends)
5. [ ] Write dashboard (copy assets into subfolders)
6. [ ] Fold polish-slug + enhance-for-business-owner into hosts
7. [ ] Verify: lint frontmatter, cross-references resolve, brand-voice glob works
8. [ ] Distribute to global + other repos; rename ai-103 modules/->demos/

## Review

Built the unified set in m365-pilot, then distributed to global + 4 repos. Lint clean everywhere (except 3 pre-existing, unrelated cowork issues: lowercase skill.md on pdf and brand-voice-cowork, pdf name drift).

Final skill set (in every repo AND global): create-class (master, delegates by name), scaffold, create-teaching, create-guide, create-slides, dashboard, run-demo, run-foundry-demo, run-guide-browser. Plus repo-local brand-voice-* and mermaid.

- Reverted invented names: enrich-module->create-teaching, author-guide->create-guide, author-slides->create-slides, enhance-business->enhance-for-business-owner (folded into create-teaching).
- polish-slug folded into brand-voice as rule 5. merge-slides folded under create-slides Gamma path. pptx path added.
- run-demo new (generic .NET/Python/Node); run-foundry-demo kept. run-guide-browser (was evaluate-guide) with two backends: Midscene+Qwen3-VL and Claude native in-app browser.
- create-class bootstraps a brand-voice-* (3-4 Qs) when a repo has none.
- ai-103 modules/->demos/ renamed (252 git renames, refs updated). ai-103 seeded with brand-voice-code.
- Superseded old leaf skills removed from all targets.

Not committed (per house rules). Distribution touched customer repos (ai-teacher, code-masterclass, cowork-masterclass, ai-103) as working-tree changes only.
