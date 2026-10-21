---
slide: "05-02"
topic: 05-memory-governance
title: "Admin activation"
subtitle: "Four steps, in order, before anyone builds"
layout: diagram
visual-weight: 1/2
visual-type: photo
media-source: opus-svg
media-file: demos/08-ai-teammates/pptx/images/05-02-admin-activation.svg
visual-prompt: >
  Hand-written SVG, viewBox 0 0 1920 1080, white background, Segoe UI, 2px #8c959f borders, text #24292f
  and #57606a, pastel fills, no heading inside the image, minimum 28px type. Four numbered cards left to
  right under three bracket labels. Microsoft 365 admin center: blue card 1 Enroll in Frontier (a global
  admin, Agents > Overview > Try now, accept the Agent 365 terms) and blue card 2 Activate Copilot
  Studio (Frontier) (All Agents, filter Agent template: Yes, pick users or groups). Power Platform admin
  center: green card 3 Turn on Agent accounts (Copilot > Settings under Copilot Studio, for the
  environment). The environment: purple card 4 Release cycle set to Early. An arrow from card 4 leads to
  a full-width green box: Only the users and groups chosen in step 2 can create agents with accounts.
  SMIL animation, 10 s loop: the cards light up in order, then the outcome; complete and readable at
  t=0.
order: 15
source: demos/08-ai-teammates/05-memory-governance/readme.md
gamma_prompt: >
  Slide titled "Admin activation", subtitle "Four steps, in order, before anyone builds". Left: five
  bullets. Right, wider: the provided diagram of four numbered activation steps across the Microsoft 365
  admin center, the Power Platform admin center and the environment, ending in who can create agents
  with accounts. Use exactly the one image given for this card; do not generate or add any other images,
  icons or logos.
---

# Admin activation

## Content

- **Frontier enrollment** by a global admin, accepting the Agent 365 terms
- **Copilot Studio (Frontier)** activated for the users or groups allowed to build
- **Agent accounts** turned on for the environment in the Power Platform admin center
- The environment's **release cycle** set to Early
- In the **European Economic Area**, Teams presence needs a Teams license

## Speaker Notes

None of this works until a tenant is prepared, and the order matters. Run these steps before the class starts.

Frontier enrollment: a global admin enrolls the tenant from the Microsoft 365 admin center under Agents, Overview, Try now, and accepts the Agent 365 terms.

Copilot Studio (Frontier): an admin opens All Agents, filters by Agent template: Yes, activates it and picks the users or groups. Only those users and groups can create agents with accounts.

Agent accounts: in the Power Platform admin center, under Copilot, Settings, an admin turns on Agent accounts for the environment.

Release cycle: the environment must be set to Early. Agent accounts live on an environment that uses the early release cycle.

European Economic Area: Teams is licensed separately there. The agent still gets its account, mailbox and directory entry, but appears in Teams only if the tenant licenses Teams.
