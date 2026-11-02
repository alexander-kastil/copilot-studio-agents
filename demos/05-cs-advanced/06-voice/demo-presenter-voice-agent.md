---
presents: demo-voice-agent.md
budget: 4 min
beats: 4
---

# Present: Build a Voice Menu and a Post-Call Action

**Guide:** [Build a Voice Menu and a Post-Call Action](demo-voice-agent.md) · runs in [Copilot Studio](https://copilotstudio.microsoft.com) · the environment must have **Get new features early** off

**Agent:** Grey Logistics IT Hotline, a Standard agent created for this demo as the guide's prerequisites describe

**Initial prompt** (attach nothing; sent in Exercise 3 with the test panel in **Speech & DTMF** chat mode):

```text
I need help
```

### Beat 1: Voice is its own authoring mode (1 min)

**Navigate:** [Copilot Studio](https://copilotstudio.microsoft.com) > **Settings** > **Voice** > **Enable voice** > **Basic** · **Topics** · [Exercise 1](demo-voice-agent.md#exercise-1-turn-the-agent-into-a-basic-voice-agent)
**What is there:** the system topics **Silence detection**, **Speech unrecognized** and **Unknown dial pad press**; new message nodes open in **Speech & DTMF**.

### Beat 2: One menu for speech and the keypad (1 min)

**Navigate:** **Topics** > IT phone menu > **Question** > **Assign DTMF keys to options** · **Topic management** > **Transfer conversation** > **External phone number transfer** · [Exercise 2](demo-voice-agent.md#exercise-2-build-a-menu-that-answers-to-speech-and-the-keypad)
**What is there:** the question with a keypad icon next to **Options for user**, three branches below it and the transfer node in the `Person` branch.

### Beat 3: A call simulated without a phone (1 min)

**Navigate:** test panel > **…** > **Chat mode** > **Speech & DTMF** · `/DTMFkey 1`, then `/DTMFkey 0` · [Exercise 3](demo-voice-agent.md#exercise-3-call-the-menu-without-a-phone)
**What is there:** "Press 1 or say Account" and so on; key 1 returns the self-service password message; key 0 shows a transfer message whose **View details** names the external number.

### Beat 4: The end of a call can trigger work (1 min)

**Navigate:** **Topics** > Post-call actions > **Change trigger** > **An activity occurs** > **End of conversation** · **Add node** > **Add a tool** > **Connector** > **Send an email (V2)** · [Exercise 4](demo-voice-agent.md#exercise-4-report-every-call-the-caller-ended)
**What is there:** the topic saves; its trigger shows **An activity occurs** with **End of conversation** and the `CUSTOMER_HANGUP` condition; the email goes out only on a real **Telephony** call.
