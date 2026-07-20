# Add and Tune an Agent Skill

Northwind Traders sellers write a follow-up email after every customer call, and each one looks a little different. In this demo you package that follow-up recipe as a reusable Agent Skill for the Northwind Sales Assistant, so the agent drafts consistent, on-brand notes only when a request actually calls for one. You use the open `SKILL.md` format shared with Claude Code and GitHub Copilot, then test, refine, and download it to share.

## What you'll build

- A reusable Agent Skill named `follow-up-email-drafter`, attached to the Northwind Sales Assistant.
- A keyword-rich skill description that the orchestration runtime matches to decide when the skill activates.
- Markdown instructions that produce a consistent email shape: greeting, recap, next step, and sign-off.
- A tested skill that activates on a real follow-up request, stays quiet on an unrelated one, and downloads as a portable `SKILL.md`.

## Related Topics

This demo turns [Agent Skills in Copilot Studio](readme.md) into portal clicks by creating, uploading, testing, and downloading a real `SKILL.md`. It builds on [The Unified Build Surface and the New Orchestrator](../02-unified-build-and-orchestrator/readme.md), where the orchestration runtime matches a request to a skill's description before it loads the full instructions.

## Prerequisites

- A Copilot Studio environment where you can edit agents (a Power Platform environment with the maker role).
- The Northwind Sales Assistant from [Build and Ground Your First New-Experience Agent](../01-new-experience-overview/demo-01-build-and-ground-an-agent.md), already created and grounded. This demo continues that same agent.
- The new experience turned on, with the top tabs reading Build, Preview, Evaluate, and Monitor. If they read Topics, Knowledge, Actions, and Settings, you are in the classic experience and skills are not available.
- The companion `SKILL.md` file from this demo's folder, available on your machine for the upload step.

## Demo Files

| File | What it represents |
|------|--------------------|
| `demo-03-add-a-reusable-skill/SKILL.md` | A valid `follow-up-email-drafter` skill: YAML front matter with name and description, plus Markdown instructions. Used for the Upload a skill exercise, and identical in shape to a Claude Code or GitHub Copilot skill. |

## Exercise 1: Decide what belongs in a skill

Before you click anything, decide whether a follow-up email even belongs in a skill. An agent has three places to put behavior, and choosing the wrong one is the most common design mistake. Instructions are the always-in-context brief the runtime reads on every turn; tools are actions that reach out to data or systems; skills are named, self-contained recipes that load only when a request matches.

A follow-up-email recipe is procedural and situational: it applies to some messages (a seller asking to draft a note after a call) and not others (a lead-time lookup). Putting that recipe in Instructions would bloat the always-in-context brief with a format the agent needs only occasionally, which dilutes everything else. Packaging it as a skill keeps Instructions lean, makes the recipe reusable across agents, and loads the full text only on demand. That is the test: recurring, self-contained, and needed only sometimes points to a skill.

Read the three options and decide where a follow-up-email recipe fits, then say why in one sentence:

```text
Instructions: always in context, every turn. Best for identity, scope, and guardrails.
Tools: an action the agent invokes to fetch or change data. Best for live lookups and writes.
Skill: a named recipe (name + description + Markdown) loaded on demand when the description matches.
```

Expected: you can state that the follow-up-email recipe fits a skill because it is a reusable, self-contained procedure needed only on some turns, so it keeps Instructions lean and loads on demand.

> **Note:** The skill loads on demand, but its name and description stay in context at all times. That short pair is all the runtime sees until a request matches, which is why the description is the part you tune later.

## Exercise 2: Create a skill from blank

Now scaffold a skill in the UI so you see where skills live and what a blank one requires. A blank skill starts as just two fields: a name and a description. The description is not documentation, it is the matching surface the orchestration runtime compares a user request against to decide whether to activate the skill, so it must carry the phrases a seller would actually use.

1. Open your Northwind Sales Assistant agent and select the **Build** tab.
2. In the components panel, open the **Skills** panel.
3. Select **Add skill**, then **Create from blank**.
4. Enter the name below, then paste the description.

```text
Name:
follow-up-email-drafter

Description:
Draft a concise sales follow-up email after a customer call, meeting, or demo. Use when a Northwind Traders seller asks to follow up, recap next steps, thank a customer, confirm an order, or send a note after a discovery or pricing call.
```

5. Save the skill.

Expected: a new `follow-up-email-drafter` skill appears in the **Skills** panel. Only its name and description sit in the agent's context; there are no instructions behind it yet, so it can match a request but has no recipe to follow.

> **Tip:** Fill the description with the verbs and nouns sellers actually type ("follow up", "recap", "after my call") rather than an abstract summary. The runtime matches on those phrases, so vague descriptions activate unpredictably.

## Exercise 3: Upload the provided skill instead

The blank skill from Exercise 2 has a matching surface but no recipe. Rather than type the instructions by hand, you will upload a ready-made `SKILL.md`, which shows the portability story: Agent Skills use an open format, so the same file works in Copilot Studio, Claude Code, and GitHub Copilot without changes. A `SKILL.md` is just YAML front matter (name and description) followed by Markdown instructions, optionally bundled in a ZIP with the file at the root plus supporting scripts, templates, or references.

1. In the **Skills** panel choose **Upload a skill** and select `SKILL.md` from the `demo-03-add-a-reusable-skill` folder.
2. Review the imported name and description in the skill configuration panel.
3. Confirm the upload to attach the skill to the agent.

The uploaded file has this shape, an open format you could hand to any of the three tools:

```markdown
---
name: follow-up-email-drafter
description: Draft a concise sales follow-up email after a customer meeting or call. Use when a Northwind Traders seller asks to follow up, recap next steps, thank a customer, confirm an order, or send a note after a demo or discovery call.
---

# Follow-up email drafter

Draft a short, professional follow-up email a Northwind Traders seller can send after a customer meeting, call, or demo.

## Task
Turn the seller's notes into a ready-to-send email: capture the customer name, the topic, and any agreed next steps.

## Response format
Subject, greeting, one-line thank-you, a two or three sentence recap, one clear next step with a date, and a sign-off.
```

Expected: the `follow-up-email-drafter` skill is listed in the **Skills** panel with its imported name and description. Its Markdown instructions are now stored with the agent and load on demand when the description matches a request. You imported a Claude Code style skill unchanged.

> **Note:** If you kept both the blank skill from Exercise 2 and this upload, you now have two skills with the same name. Delete the blank one from its configuration panel so only the uploaded skill with real instructions remains.

## Exercise 4: Test activation in Preview

The **Preview** tab is where you confirm the description is specific enough for the runtime to pick the skill, and no more. A well-tuned skill activates on the requests it should own and stays quiet on everything else. You will send one prompt that should activate it and one that should not, so you see both sides of the matching decision.

1. Open the **Preview** tab.
2. Send the activation prompt:

```text
Draft a follow-up email after my call with Around the Horn about their green tea reorder.
```

3. Read the reply and confirm it follows the skill's format: subject, greeting, recap, a next step, and a sign-off.
4. Now send the non-activation prompt:

```text
What is the standard lead time for a Tier 3 account?
```

5. Read how the agent answers this one.

Expected: the first prompt activates the skill and the reply comes back as a structured follow-up email with a greeting, a recap of the green tea reorder, and a clear next step. The second prompt does not activate the skill; the agent answers the lead-time question normally from its instructions and knowledge, with no email format. Seeing the second stay quiet confirms the description is scoped, not greedy.

> **Tip:** Test the near-miss, not just the obvious hit. A skill that also fires on plain lookups has a description that is too broad, which you fix in the next exercise.

## Exercise 5: Refine the description and Replace in place

If Exercise 4 showed the skill activating on the wrong messages, the fix is the description, not the instructions. Activation is a matching problem: the runtime compares the request to the description, so an over-eager skill has a description that casts too wide a net. You tighten the description to the narrow set of requests the skill should own, then use **Replace** to update the existing skill without creating a duplicate.

1. In the **Skills** panel, select the `follow-up-email-drafter` skill to open its configuration panel.
2. Select **Replace**.
3. Provide the narrower description below (as an edited `SKILL.md` or inline, depending on how you imported it).

```text
Draft a follow-up email ONLY after a completed customer call, meeting, or demo, when the seller explicitly asks to follow up, recap, thank the customer, or confirm next steps. Do not use for product lookups, pricing questions, lead-time questions, or general account facts.
```

4. Save the replacement.

Expected: the same skill now carries the tighter description; no second skill appears in the panel. Re-run both prompts from Exercise 4 in **Preview**: the follow-up request still activates the skill, and the lead-time request now stays clear even if it was borderline before. You changed activation behavior without touching the email recipe itself.

## Exercise 6: Download the skill to share

A tuned skill is worth reusing. Downloading gives you a portable `SKILL.md` you can hand to another maker, attach to a second agent, or check into source control alongside your other skills. This is how skills travel today: per-agent distribution through the file. There is no cross-tenant skill catalog yet, so the file is the unit of sharing.

1. In the **Skills** panel, select the `follow-up-email-drafter` skill to open its configuration panel.
2. Select **Download**.
3. Save the file and open it to confirm it is the full skill.

You should get back a file that looks like this:

```markdown
---
name: follow-up-email-drafter
description: Draft a follow-up email ONLY after a completed customer call, meeting, or demo, when the seller explicitly asks to follow up, recap, thank the customer, or confirm next steps.
---

# Follow-up email drafter
...
```

Expected: a `SKILL.md` file downloads containing your tuned name, description, and the full Markdown instructions. The same configuration panel also offers **Replace** and **Delete** for managing the skill later. You now hold a portable file you can commit to a repository or upload into another agent, without any tenant-wide catalog.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| No **Skills** panel on the Build tab | You are in the classic experience | Return to the home page, turn on the New experience toggle, and reopen the agent so the tabs read Build, Preview, Evaluate, Monitor |
| Skill never activates in Preview | Description lacks the phrases the seller actually types | Open the skill config, Replace the description with seller verbs and nouns ("follow up", "recap", "after my call"), and retest |
| Skill activates on unrelated lookups | Description is too broad and matches too many requests | Replace it with the narrower description from Exercise 5, then re-run the near-miss prompt |
| Two skills with the same name in the panel | You created a blank skill in Exercise 2 and then uploaded another | Open the empty blank skill and choose Delete, keeping only the one with instructions |
| Upload rejected or imports with no instructions | The file is not a valid `SKILL.md` (missing YAML front matter or wrong root in the ZIP) | Confirm the file starts with a `---` name/description block, or that `SKILL.md` sits at the ZIP root, then upload again |

## Summary

You packaged the follow-up-email recipe as a reusable Agent Skill: created it from blank, uploaded an open-format `SKILL.md`, tested that it activates on a follow-up request and stays quiet on a lookup, tightened the description with Replace, and downloaded a portable copy to share. You can now:

- Decide whether behavior belongs in Instructions, a Tool, or a Skill, and explain why.
- Create a skill from blank or upload a Claude Code / GitHub Copilot `SKILL.md` unchanged.
- Test activation in Preview and fix over- or under-matching by tuning the description, not the instructions.
- Replace a skill in place and download it for per-agent distribution.

Next, give the assistant a live action by wiring an external tool through the Model Context Protocol in [Connect an MCP Server and Automate with a Workflow](../04-workflows-and-mcp/demo-04-connect-mcp-and-workflow.md).
