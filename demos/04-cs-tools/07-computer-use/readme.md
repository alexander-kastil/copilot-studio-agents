# Computer Use: Apps Without APIs

Some systems an agent must work with have no API and no connector: a supplier portal, a legacy desktop client, an internal web form from another decade. People still use them every day by looking at the screen, clicking, and typing. Computer use gives a Copilot Studio agent the same ability: it operates websites and Windows desktop apps through a virtual mouse and keyboard, guided by instructions written in plain language.

This topic teaches the computer use tool in Copilot Studio's Standard agents (Learn: standard harness), where it is generally available. You learn how the tool sees and acts, where it runs, how to configure and instruct it, what it costs per step, and which guardrails keep it inside the boundaries you set. It closes with the comparison every automation team asks for: computer use or scripted robotic process automation (RPA).

## How computer use works

Computer use runs a computer-using model, which combines vision with reasoning to operate a graphical interface; Microsoft calls this a Computer-Using Agent (CUA), and OpenAI's model of that name is one of several you can pick. Each run is a loop: the tool takes a screenshot, analyzes it to decide the next action, performs the action, and repeats until the task is done. Screenshots and reasoning steps are kept in the run history: on the agent's **Activity** tab, a session's **Map view** shows a session replay, the list of steps and a summary with the number of actions, so you can review every decision afterwards.

Because the model reads the screen, it adapts when a button moves or a page is redesigned, where a recorded script would break. You describe the task in plain language, with no code and no selectors. The tool needs generative orchestration, because the orchestrator decides when to call it from its name and description.

Computer use fits autonomous agents best, running tasks in the background without a user waiting. You can also call it in a conversation, where the tool shares its reasoning messages and screenshots of the machine in the chat. Learn lists computer use as planned for agents on the GitHub Copilot harness, so today it is a Standard agent capability.

## Where computer use runs

Every run needs a Windows machine, and you pick the machine per tool. Three options exist, and two of them are previews meant for getting started.

| Option | Status | Managed by | Fits |
|--------|--------|------------|------|
| Hosted browser (powered by Windows 365 for Agents) | Preview | Microsoft; not Entra joined or Intune managed | Quick web automation and early experiments, with throttling under demand |
| Cloud PC pool (powered by Windows 365 for Agents) | Preview | Your organization; Entra joined and Intune enrolled, scales automatically | Governed runs without bringing your own machines |
| Bring your own machine | Generally available | You, registered in Power Automate | Production runs that need your network, apps, and policies |

A bring-your-own machine needs Power Automate for desktop version 2.61.132.25266 or later, including the web extension for browser work, and the machine runtime app to register it in the environment. After registration you turn on **Enable for computer use** in the machine's settings in Power Automate. Runs that target a busy machine wait in a queue and start one after another.

## Configuring a computer use tool

You add the tool from **Tools** > **Add a tool** with the **Add new Computer use** card. Its first dialog asks only for the instructions (templates for invoice processing, data entry and data extraction help you start), and **Add and configure** opens the configuration page, where **Name**, **Description**, **Model** and **Instructions** are the four required fields. A new tool starts with the name Computer use and a generic description, so replace both: the orchestrator picks the tool by them. The rest decide whose access the run uses and where it may go.

| Setting | What it controls |
|---------|------------------|
| Inputs | Values that change per run, such as a customer name to look up, combined with the instructions at execution time; the orchestrator fills them (**Dynamically fill with AI**) |
| Machine | The target machine; where the environment offers it, the hosted browser comes preselected with a ready connection, and **Manage machines** opens Power Automate |
| Credentials to use | **Maker-provided credentials** (default, suited to autonomous agents) or **End user credentials** (each user needs access to the machine) |
| Human supervision | Who receives an Outlook review request when the run needs confirmation or more information, and how long the request stays open; the maker is the preset reviewer |
| Stored credentials | Usernames and passwords for websites or desktop apps, kept in Power Platform internal storage or in your Azure Key Vault |
| Access control | An allow list of websites and desktop apps the tool may act on; with the hosted browser, adding a website also adds Microsoft Edge as a desktop app |
| Enforce HTTPS | Restricts the tool to sites whose URL starts with `https://`; on by default for a new tool |

One warning deserves a slide of its own. With maker-provided credentials, anyone you share the agent with acts with the author's access on the configured machine. Use a dedicated machine account with least privilege, and prefer end user credentials for conversational agents.

## Writing instructions that work

The instructions decide how reliably the tool finishes. Learn's advice reads like briefing a new colleague: name every website by its full URL and every app by its exact name, state actions you want explicitly (including "submit without asking"), break complex navigation into small steps, and use a numbered list for longer tasks. Testing is built in: **Test directly** asks for a value per input, then opens a test window with the reasoning messages on the left and a live **Preview** of the machine on the right, and **Cancel test** halts the run; **Test in agent chat** runs the same tool through the orchestrator.

For data extraction, say exactly what to return. The tool can return plain values or a JSON object you describe field by field, which makes the output easy to pass on. When another tool must use the extracted data, for example to email it, say so in the agent instructions and add both tools to the agent.

## Models and cost

Computer use is billed per step through the Agent action feature. A step can include several low-level actions such as clicking, typing, and navigating; each step consumes 5 Copilot Credits with a standard model and 15 with a premium model. A four-step time-sheet run therefore costs 20 credits with a standard model and 60 with a premium one. To price a real run, read **Number of actions** in the session's map view: the demo's portfolio lookup took 4, which is 20 credits.

| Model | Provider | Tier | Status | Credits per step |
|-------|----------|------|--------|------------------|
| Computer-Using Agent (CUA) | OpenAI | Standard | Generally available | 5 |
| GPT-6 Sol | OpenAI | Standard | Generally available | 5 |
| Claude Sonnet 4.5 | Anthropic | Standard | Generally available | 5 |
| Claude Sonnet 4.6 | Anthropic | Standard | Experimental | 5 |
| Claude Opus 4.6 | Anthropic | Premium | Experimental | 15 |

Anthropic models work only after an administrator turns on access to external models for the environment. Shorter instructions that reach the goal in fewer steps cost less, which is one more reason to write precise ones.

Learn's list and the picker can differ: in the class environment the **Model** list offered CUA, Claude Sonnet 4.5 (preselected), Claude Sonnet 4.6 and Claude Opus 4.6, but no GPT-6 Sol, so check the list in your own environment. The model also decides how accurately the tool reads the screen. In the demo run CUA zoomed into the portfolio table until the Manager column was cut off and returned "Yhlas Galdiyew" for "Yhlas Geldiyew", while Claude Sonnet 4.5 read the name exactly.

## Guardrails

A tool that clicks and types can also click the wrong thing, so the boundaries belong in the configuration and on the machine. Learn's security recommendations are concrete:

| Recommendation | Why |
|----------------|-----|
| Use dedicated machines for computer use | Limits cross-contamination from unrelated software and access |
| Give the machine account least privilege | The tool can do only what the account can do |
| Allow web access to trusted sites only | Narrows where hidden instructions can come from |
| Allow only the desktop apps the task needs | Removes tools the agent should never touch |

Access control in the tool limits actions: the model can still open a site outside the allow list, but any attempt to interact with it fails. Human supervision is probabilistic as well; it can ask when no pause is needed and stay silent when a person would want one, so it complements the guardrails above. Learn also warns about prompt injection, where hidden instructions in a web page or screenshot try to steer the model, and recommends trusted, isolated environments.

## Computer use or RPA

Power Automate desktop flows automate the same interfaces with scripts. The two approaches solve different problems, and Microsoft's guidance compares them directly.

| Aspect | RPA (desktop flows) | Computer use (CUA) |
|--------|---------------------|--------------------|
| Automation type | Rule based | Model driven |
| Interaction | UI element tree | Vision |
| Authoring | Recorded or scripted | Natural language instructions |
| Decisions | Predefined rules | Visual reasoning, self-correcting |
| Best when | The UI is stable, rules are clear, volume is high, and an RPA team owns it | The UI changes often, the task depends on what is visible, decisions are fuzzy, or the RPA backlog is full |

When an API or a connector exists, use it: it is faster, cheaper per call, and easier to test than any screen-driven approach. Computer use is the route for the systems that leave you no other door.

## Hands-On Demo

- [Read and Fill a Legacy Web App with Computer Use](./demo-computer-use.md): the presenter adds a computer use tool that looks up values in a sample portfolio web app, makes the client name an input, locks the tool to one site with access control and HTTPS, and adds a second tool that submits inventory items into a sample web form.

## Key Topics covered in this module

[Automate web and desktop apps with computer use](https://learn.microsoft.com/microsoft-copilot-studio/computer-use)

[Configure where computer use runs](https://learn.microsoft.com/microsoft-copilot-studio/configure-where-computer-use-runs)

[Human supervision of computer use](https://learn.microsoft.com/microsoft-copilot-studio/human-supervision-computer-use)

[FAQ for the computer use tool](https://learn.microsoft.com/microsoft-copilot-studio/faqs-computer-use)

[Use agent tools to extend, automate, and enhance your agents](https://learn.microsoft.com/microsoft-copilot-studio/guidance/agent-tools)

[Billing rates and management](https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management)
