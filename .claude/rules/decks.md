---
paths:
  - "demos/*/pptx/**"
  - "demos/pptx/**"
---

# Decks

Facts for the global create-pptx skill (`references/gamma-deck.md`) and the `/create-repo-pptx` command. The json block is the input of `scripts/repo_decks.py`; keep it in step with the lists below.

```json
{
  "modules": "demos/*/pptx",
  "portraits": "demos/pptx/portraits.json",
  "footer": "Automate Business Processes with Copilot Studio and Copilot Cowork",
  "gammaTemplate": "g_dnrfhnxxzj9ligv",
  "themeId": "idege54tfobdv2k",
  "rawBase": "https://raw.githubusercontent.com/alexander-kastil/copilot-studio-agents/master",
  "deliverTo": "E:/Onedrive/OneDrive - Integrations IT Solutions/Classes/copilot-studio-agents"
}
```

## Photos

- Audience: Power Platform makers, software engineers and solution architects who build agents for business teams.
- Business case: the running examples each module, topic readme and demo guide states (the canteen food stock, HR onboarding, travel expense refunds, the Grey Logistics IT help desk, returns, business travel, compliance). People, roles, documents and sites come from those files, nothing else.
- Never shown: readable UI, product logos, code on screens, server rooms.
- Module-slide portraits: `demos/pptx/portraits.json`.

## Screenshots

- Live screenshots from the demo runs of 2026-10-21 and 2026-10-22 are `existing` media, copied as PNG to `<module>/pptx/images/<slide>-<slug>.png` and cropped to the part the slide talks about.

## Build

- Footer: `Automate Business Processes with Copilot Studio and Copilot Cowork` (the class readme title).
- Gamma template: Professsional Process Review, `g_dnrfhnxxzj9ligv`. Theme: Integrations House, `idege54tfobdv2k`, for `generate` only: `generate_from_template` refuses a saved theme, so template calls pass no `themeId`.
- The repo is private, so images go to the storage account before Gamma: container `slide-production` in `integrationsmediacreator`, prefix `copilot-studio-agents/<module>/`, read through a 12-hour user delegation SAS (`gamma_deck.py prompt --base-url ... --url-suffix "?$SAS"`), per gamma-deck Step 4.

## Delivery

- Class OneDrive folder: `E:\Onedrive\OneDrive - Integrations IT Solutions\Classes\copilot-studio-agents`. The first `deliver` creates it.
- The OneDrive copy is the owner's working copy: `cmp` before overwriting a deck already there.
