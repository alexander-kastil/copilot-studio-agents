# Writing a Cowork `/goal`

A `/goal` is not a longer chat message. It is a brief handed to a colleague with your permissions
and none of your context: it names the sources, fixes the guardrails, states the sections in order,
and stops for approval before it produces the artifact. That last clause is what separates a goal
from a prompt, because a goal is long enough that discovering it went wrong at the end is expensive.

Source for the pattern and for the branding-kit goal below: Nick Brattoli, "Copilot Cowork /goal
Prompt Vault", flowaltdelete.ca, 26 June 2026.

Microsoft's Cowork documentation does not mention a `/goal` command (checked against Learn on
2026-10-17). Use the pattern as a prompt structure; in course content, teach it as a way to write a
long delegated request, never as a documented product command, until Learn lists it.

## The five moves every good goal makes

1. **Discovery before production.** The first instruction is to go and find what already exists, not
   to start writing. "Your first job is discovery" earns its place at the top of the prompt.
2. **Confirmed versus recommended.** Every claim is labelled by whether evidence was found or a gap
   was filled. Without this split, a model asked to document something undocumented invents it, and
   the invention is indistinguishable from the findings.
3. **Named guardrails on the assets themselves**, not just on the output. The branding goal spends a
   whole block saying do not recreate, redraw, regenerate or restyle a logo, because a model handed
   an imperfect PNG will improve it unless told plainly not to.
4. **A numbered section list.** The sections are the contract. A goal that says "produce a branding
   kit" gets whatever shape the model likes; a goal that lists ten sections gets ten sections.
5. **An approval stop before the artifact.** Show me the sources, the assumptions and the proposed
   structure, then wait. One cheap turn to correct the premise beats one expensive turn to redo the
   deliverable.

Two failure modes these moves exist to prevent, worth naming when reviewing someone else's goal:
a model that starts producing before it has looked, and a model that fills a gap silently rather
than flagging it.

## Goal: organization branding kit

`templates/goal-branding-kit.md` holds the prompt verbatim, with its follow-up prompts.

Use it when an organization's branding is real but scattered: logos in a dozen folders, a deck that
is almost a template, colors that exist only inside a PNG, and no source of truth. The goal makes
Cowork inventory what exists first, then build the kit from actual assets, and it separates the
brand rules it found from the brand rules it is proposing.

Two things to get right before running it:

- **Fill both placeholders.** `[Organization Name]` and `[Website URL]`. The public domain is doing
  real work here: it is where tone, positioning and product language come from when the internal
  files only carry visuals.
- **Point it at real files.** Cowork reaches what the user's permissions reach. If the brand assets
  live in a SharePoint site the user has never opened, the discovery step finds nothing and the kit
  quietly becomes a recommendation document.

The follow-up prompts matter as much as the goal. The kit is a specification; each follow-up turns
one section of it into an artifact (Word letterhead, proposal template, PowerPoint structure,
one-page cheat sheet, social guide). Run them one at a time and review each, rather than asking for
all of them in a single turn.

The last follow-up is the one people skip and should not: pointing Cowork back at a template it
just generated and asking what is off-brand against the kit. It catches the drift that creeps in
when the kit is in one session and the artifact is produced in another.

## Where the output goes next

A branding kit that stays in a chat transcript is not a branding kit. The kit becomes durable in one
of two forms, and both belong to the authoring half of this skill:

- A **Cowork skill** whose body carries the brand rules and whose companion file is the kit itself,
  so on-brand content generation stops needing the prompt to be re-pasted. See `SKILL.md` and
  `references/authoring-and-tuning.md`.
- **Companion files in OneDrive** referenced by name from that skill: the kit document, the logo
  PNGs, the closest-template deck. A skill that paraphrases the format instead of pointing at the
  file will drift from it.

For a goal that mines Microsoft 365 signals rather than files, see `work-iq`.
