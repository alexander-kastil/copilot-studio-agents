# Task: Topic-organize demos/03-copilot-studio/04-ui-update (+ labs)

Mirror the 02-cowork organization. Scenario across all artifacts: Northwind Traders / Northwind Sales Assistant.

## Topic map

| Topic subfolder | Demo | Lab |
|-----------------|------|-----|
| 01-new-experience-overview | demo-01-build-and-ground-an-agent | new lab (author) |
| 02-unified-build-and-orchestrator | demo-02-trace-agent-reasoning | new lab (author) |
| 03-agent-skills | demo-03-add-a-reusable-skill | lab-02-portable-skill (move) |
| 04-workflows-and-mcp | demo-04-connect-mcp-and-workflow | lab-01-sales-account-assistant (move) |

## Phase 1: Demos into topics (main thread)
- [ ] Move 4 demo .md + demo-03 companion folder into topic subfolders
- [ ] Fix relative links inside each demo (own topic -> ./, sibling demos -> ../topic/, lab link deepened)
- [ ] Update module readme.md Demos table paths

## Phase 2: Develop topic readmes into learning (subagents, 1 per topic)
- [ ] 01, 02, 03, 04: expand "What to teach" into learning prose; keep Key Topics + tables
- [ ] Each subagent also adds Hands-On Demo + Hands-On Lab sections to its topic readme

## Phase 3: Labs into topics
- [ ] Create labs/.../04-ui-update/NN-* topic subfolders
- [ ] Move lab-02-portable-skill -> 03-agent-skills; lab-01-sales-account-assistant -> 04-workflows-and-mcp (+ companions, fix links)
- [ ] Author new lab for 01 and 02 (subagents), Northwind scenario
- [ ] Update labs readme TOC + demos readme Labs table paths

## Phase 4: Verify
- [x] Resolve every relative link + anchor (83 links across the tree, all OK)
- [x] brand-voice on all touched files (no em dashes; subagents self-verified 4-sentence cap)

## Review

Done. demos/03-copilot-studio/04-ui-update now mirrors the 02-cowork topic-organized layout.

- Phase 1: 4 demos filed into their topic subfolders; demo-03 companion moved; all in-file links rewritten; module Demos table repathed (two link texts corrected to match H1s).
- Phase 2: 4 topic readmes developed from "What to teach" outlines into concept-first learning prose (subagents), each keeping its comparison table + Key Topics links and gaining Hands-On Demo + Hands-On Lab sections.
- Phase 3: labs side given the 4 numbered topic subfolders; lab-01-sales-account-assistant -> 04-workflows-and-mcp, lab-02-portable-skill -> 03-agent-skills/lab-01-portable-skill (renamed for per-topic numbering, self-refs + companion fixed); 2 new labs authored (01 compare-classic-and-new, 02 evaluate-and-monitor-agent), Northwind scenario; both lab TOCs + demos Labs table updated to 4 rows in topic order.
- Phase 4: 83 links + anchors resolve; brand-voice clean.

Not committed (per house rules).
