# Voice Agents: IVR & Post-Call

This topic is optional: take it when your agents answer phone calls through Dynamics 365 Contact Center. Many customers and employees still pick up the phone, and a line that answers with "press 1 for passwords" frustrates callers who know exactly what they need, while a line that only listens frustrates callers on a noisy train. Copilot Studio builds interactive voice response (IVR) agents that handle both speech and the phone keypad, and that finish backend work after the caller hangs up.

The topic covers voice in Standard agents (Learn: standard harness): the two kinds of voice agents and when to choose each, what a phone line needs around the agent, how authoring for the ear differs from authoring for a chat window, how to test without dialing, and how post-call actions close the loop once the conversation ends.

## Two kinds of voice agents

Learn names two voice-enabled agent types. Basic voice agents use classic orchestration: language understanding models recognize intents and entities, and the maker scripts the conversation in topics. Real-time voice agents use generative orchestration with a real-time speech model for a low-latency, natural conversation.

| Question | Basic voice agent | Real-time voice agent |
| --- | --- | --- |
| Orchestration | Classic | Generative |
| How it understands callers | Language understanding for intents and entities, trigger phrases | A real-time model; Learn also describes a text-based variant that runs GPT-5-Chat (Preview) between speech recognition and synthesis |
| Conversation style | Scripted menus and questions, deterministic | Free conversation with barge-in and natural turn-taking, combined with topics where you need control |
| Channels | Phone | Phone, and digital messaging in preview |
| Fits when | Every step must be predictable and auditable | Callers describe problems in their own words |

Both support speech and dual-tone multi-frequency (DTMF) keypad input, context variables, call transfer, and customization of speech and keypad behavior. DTMF menus work best with classic orchestration, which is why the keypad-heavy IVR stays a basic voice scenario.

## The phone line around the agent

An agent doesn't answer calls by itself. You need a phone number, which Azure Communication Services provides or brings in, and the agent connects to Dynamics 365 Contact Center through the **Telephony** channel; Learn asks you to turn on that channel first and then connect Dynamics 365. Among customer engagement hubs, only Dynamics 365 Customer Service supports voice agents, while Genesys, LivePerson, Salesforce and ServiceNow support chat agents only.

Real-time voice agents add prerequisites: Dynamics 365 Contact Center with the voice or messaging channels provisioned, the omnichannel administrator role, and a supported model in your region. GPT-Realtime is hosted in North America, GPT-Realtime-Mini (Preview) in Australia, and GPT-5-Chat (Preview) supports in-region processing in the United States, the European Union, the United Kingdom and Australia. EU Data Boundary customers can use GPT-5-Chat (Preview) in region, but the two realtime models require cross-geo processing.

## Authoring for the ear

Voice is switched on per agent: on the **Settings** page select **Voice**, then **Enable voice**, and choose **Basic** for classic orchestration or **Real-time voice** for generative orchestration. **Enable voice** changes authoring only; the agent still needs the **Telephony** channel to take calls. Turning it on adds the **Speech & DTMF** modality to message and question nodes and three voice system topics: **Silence detection**, **Speech unrecognized** and **Unknown dial pad press**.

A message written for a screen rarely works read aloud, so voice authoring has its own controls.

| Control | What it does | Where you set it |
| --- | --- | --- |
| DTMF keys | Maps a keypad digit to each option of a multiple-choice question; list and Boolean questions get keys automatically | **Assign DTMF keys to options** on the **Question** node |
| Global DTMF commands | A key that works anywhere, such as 0 for a person | A topic with the **DTMF global command received** trigger |
| Barge-in | Lets callers interrupt a message they already know | **Allow barge-in** in the node's properties |
| Silence detection | How long to wait, how often to reprompt, then hang up, escalate or redirect | **Voice** properties of a **Question** node |
| Latency message | Speech that loops while a slow flow or tool runs | **Send a message** in the **Action** node properties |
| SSML | Pauses, emphasis, pitch, speed, language switches and recorded audio | The **SSML tags** menu in a **Speech & DTMF** message |
| Transfer | Hands the call to an external phone number or to a representative in Dynamics 365 Contact Center | **Topic management** > **Transfer conversation** |
| Hang up | Ends the call | **Topic management** > **End conversation** |

Keep compliance notices and the first message non-interruptible, and let menus be interrupted so regular callers can skip ahead. Learn also notes that creating and editing topics with Copilot doesn't generate **Speech & DTMF** messages or DTMF mappings for voice agents, so voice paths are authored by hand.

## Testing without a phone

The test panel simulates a call in text. Select the three dots at the top of the panel, point to **Chat mode** and select **Speech & DTMF**; the agent's spoken replies then appear as text, options read aloud show as "Press 1 or say ...", and messages that block barge-in are marked. Typing `/DTMFkey 1` simulates a key press, `/DTMFkey 123` a multi-digit entry, and `/debug set` sets a voice variable such as the caller ID.

The simulation has limits. It doesn't recognize real speech, doesn't validate DTMF grammar or digit timers, and doesn't run silence detection, so a test call on the real line stays part of every release.

## Post-call actions

Work often remains after the caller is gone: update the case, log how the call ended, start a follow-up flow. When a voice conversation ends, Copilot Studio sends an **End of conversation** activity, whether the caller hung up, the agent transferred to a phone number, or the call escalated to Dynamics 365 Contact Center. A post-call action topic listens for it: its trigger is **An activity occurs** with the activity type **End of conversation** set in the trigger properties.

The system property `Conversation.EndReason` says why the conversation ended, and a condition on it limits the topic to certain endings.

| `Conversation.EndReason` | Meaning | Set off by |
| --- | --- | --- |
| `CUSTOMER_HANGUP` | The caller disconnected | The caller |
| `BLIND_TRANSFER` | The agent transferred the call to an external phone number | **Transfer conversation** with **External phone number transfer** |
| `CCAAS_TRANSFER` | The agent escalated the call to Dynamics 365 Contact Center | **Transfer conversation** with **Transfer to agent** |

Without a condition the topic runs for every ending, which suits logging. With a condition such as `Conversation.EndReason` equal to `CUSTOMER_HANGUP`, it runs only when the caller hung up, which suits updating a case that a transfer would otherwise close too early.

## Billing

Voice is billed per minute in Copilot Credits, with the core agent activity in the call included.

| Voice tier | Copilot Credits per minute |
| --- | --- |
| Classic Voice, classic orchestration | 10 |
| GenAI Voice | 35 |
| Premium GenAI Voice | 75 |

## Hands-On Demo

- [Build a Voice Menu and a Post-Call Action](./demo-voice-agent.md): the presenter turns on basic voice for the Contoso IT Help Desk, builds a keypad and speech menu with a transfer, tests it in the **Speech & DTMF** chat mode, and adds a post-call action topic for caller hang-ups.

## Key Topics covered in this module

[Use interactive voice response in your agents](https://learn.microsoft.com/microsoft-copilot-studio/voice-overview)

[Basic voice agents overview](https://learn.microsoft.com/microsoft-copilot-studio/voice-basic-overview)

[Real-time agents overview](https://learn.microsoft.com/microsoft-copilot-studio/voice-realtime-voice-agents)

[Configure basic voice agents](https://learn.microsoft.com/microsoft-copilot-studio/voice-configuration)

[Turn on DTMF support for your voice-enabled agent](https://learn.microsoft.com/microsoft-copilot-studio/voice-dtmf)

[Test basic voice agents](https://learn.microsoft.com/microsoft-copilot-studio/voice-test)

[Configure post-call action topics](https://learn.microsoft.com/microsoft-copilot-studio/voice-post-call-actions)

[Integrate a voice-enabled agent with Dynamics 365 Contact Center](https://learn.microsoft.com/microsoft-copilot-studio/voice-get-started)

[Billing rates and management](https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management)
