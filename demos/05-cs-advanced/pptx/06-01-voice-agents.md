---
slide: "06-01"
topic: 06-voice
title: "Voice agents"
subtitle: "A phone menu that answers to speech and the keypad"
layout: content
visual-weight: 1/2
visual-type: photo
subject: hands-artefact
media-source: nano-banana
media-file: demos/05-cs-advanced/pptx/images/06-01-voice-agents.jpg
visual-prompt: >
  ONE single continuous photograph taken with one camera in one moment: no split screen, no diptych, no
  collage. Close-up on a light-oak desk in a bright office: one hand holds the lifted handset of a plain
  white desk phone without a display just out of frame on its coiled cord, while the index finger of the
  other hand presses the 1 key of the phone's keypad; the keys carry only their standard digits, and the
  phone body carries no letters, labels or printing anywhere else. A green plant and a window with soft
  daylight are softly out of focus behind. The hands and the keypad are centred in the frame. Modern,
  light, bright and friendly: high-key natural daylight, soft pastel accents in light blue, mint and
  lavender, green plants, 2020s design. 2:3 portrait, hands centred, contemporary editorial photography.
  Avoid: readable text other than the keypad digits, logos, watermarks, faces, extra people, dark or moody
  lighting, vintage or retro decor, grime, clutter.
order: 16
source: demos/05-cs-advanced/06-voice/readme.md
gamma_prompt: >
  Slide titled "Voice agents", subtitle "A phone menu that answers to speech and the keypad".
  Side-accent layout: title, subtitle and four bullets on the left half on plain white, the provided
  photograph of a hand pressing the 1 key on a desk phone filling the right half, no text over it. Use
  exactly the one image given for this card; do not generate or add any other images, icons or logos.
  Theme: Integrations House (themeId idege54tfobdv2k), Montserrat bold headings, Poppins body, #1B365D accent.
---

# Voice agents

## Content

- **Basic** voice agents use classic orchestration; **real-time** voice agents use generative orchestration
- DTMF keys map the keypad to the menu: 1 for Account, 2 for Device, 0 for a person
- The **Speech & DTMF** chat mode tests a call in text, and `/DTMFkey 1` presses a key
- A post-call topic runs on **End of conversation** and filters on `Conversation.EndReason`

## Speaker Notes

This optional topic takes an agent to the phone through Dynamics 365 Contact Center. Callers who know what they need should be able to say it, and callers on a noisy train should be able to press a key.

Two kinds: a basic voice agent scripts the conversation in topics on classic orchestration, which keeps every step predictable. A real-time voice agent uses a real-time speech model on generative orchestration for free conversation.

Keypad and speech: the Grey Logistics IT Hotline asks whether the caller needs help with an account, a device or a person. Assign DTMF keys to options maps 1, 2 and 0, and 0 transfers the call to an external number.

Testing: the test panel simulates the call in text and reads options as "Press 1 or say Account". It doesn't recognize real speech or run silence detection, so a test call on the real line stays part of every release.

After the call: a topic triggered by End of conversation with Conversation.EndReason equal to CUSTOMER_HANGUP emails the help desk when a caller hangs up. Voice is billed per minute: 10, 35 or 75 Copilot Credits by tier.
