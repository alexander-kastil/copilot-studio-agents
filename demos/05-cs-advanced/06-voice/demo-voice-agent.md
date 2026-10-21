# Build a Voice Menu and a Post-Call Action

A caller who rings the IT hotline wants one of three things: help with an account, help with a device, or a person. A chat agent reads well on a screen but sounds wrong on the phone, ignores the keypad, and forgets the call the moment the caller hangs up. In this demo you turn a Standard agent (Learn: standard harness) into a basic voice agent with a spoken and keypad menu, test it without a phone, and add a topic that reports every call a caller ended by hanging up.

What you practice here: authoring for the Speech & DTMF modality and acting on the End of conversation activity with a condition on `Conversation.EndReason`.

Duration: about 30 minutes.

## What you'll build

- A Standard agent named Contoso IT Hotline with basic voice turned on and the three voice system topics added.
- An IT phone menu topic whose options answer to speech and to the keys 1, 2 and 0, with a transfer to a person on 0.
- A simulated call in the test panel's **Speech & DTMF** chat mode.
- A post-call action topic that emails the help desk when a caller hangs up.

## Prerequisites

- An environment where **Get new features early** is off, because basic voice agents aren't available in early release cycle environments.
- A Standard agent named Contoso IT Hotline, created from the **New agent** dropdown on the home page: under **Other ways to build**, select **Agent** with the **Standard** badge. On its **Settings** page, under **Generative AI** > **Orchestration**, set **Use generative AI orchestration for your agent's responses?** to **No**, because basic voice agents use classic orchestration.
- An Office 365 Outlook mailbox that can receive the post-call email.

## Exercise 1: Turn the agent into a basic voice agent

Voice is a separate authoring mode with its own system topics. Turning it on changes how you write messages and questions; the **Telephony** channel that takes real calls is a separate step for later.

1. Open **Settings** and select **Voice**.
2. Select **Enable voice**, keep **Make voice the default modality for creating and updating within topics** selected, choose **Basic**, and save.
3. Open the **Topics** page and look at the system topics.

Expected: the system topics now include **Silence detection**, **Speech unrecognized** and **Unknown dial pad press**, and new message nodes open in the **Speech & DTMF** modality.

## Exercise 2: Build a menu that answers to speech and the keypad

A phone menu has to work for callers who speak and for callers who press keys. DTMF keys on a multiple-choice question give both paths one set of options, and a transfer node hands the call to a person.

1. Create a topic named `IT phone menu` with these trigger phrases:

```text
I need help
IT support
help desk
```

2. Add a **Message** node with this text:

```text
Welcome to the Contoso IT hotline.
```

3. Add a **Question** node with this question and **Multiple choice options** as the entity:

```text
Do you need help with your account, your device, or do you want to talk to a person?
```

4. Add three options, `Account`, `Device` and `Person`, select **Assign DTMF keys to options**, and map them to 1, 2 and 0.
5. Open the question's **Properties**, select **Entity recognition**, and turn on reading the options aloud.
6. In the `Account` branch add a **Message** node, and in the `Device` branch another one:

```text
Account: You can unlock your account or reset your password yourself at aka.ms/sspr. A new password needs at least 14 characters.
Device: For a broken or bulging laptop battery, stop using the device and bring it to the IT desk today.
```

7. In the `Person` branch, add **Topic management** > **Transfer conversation**, set **Transfer type** to **External phone number transfer** and enter `+15555550123`. Save the topic.

Expected: the canvas shows the question with a keypad icon next to **Options for user**, three branches below it, and the transfer node in the `Person` branch.

## Exercise 3: Call the menu without a phone

The test panel can simulate the voice channel in text, which turns the spoken menu into readable output and lets you press keys with a command. It doesn't recognize real speech or run the silence timers, so this is a logic test.

1. In the test panel, select the three dots at the top, point to **Chat mode** and select **Speech & DTMF**.
2. Send `I need help`.
3. Send `/DTMFkey 1`.
4. Start a new test session, send `I need help` again, then send `/DTMFkey 0`.

Expected: the menu reads its options as "Press 1 or say Account" and so on. Key 1 returns the self-service password message. Key 0 shows a transfer message in the test panel, and **View details** next to it shows the external number and the context passed on.

## Exercise 4: Report every call the caller ended

When a call ends, Copilot Studio sends an **End of conversation** activity, whether the caller hung up, the call was transferred, or it escalated to Dynamics 365 Contact Center. A topic that listens for it can do backend work, and a condition on `Conversation.EndReason` limits it to the endings you care about.

1. Create a topic named `Post-call actions`.
2. On the **Trigger** node select **Change trigger** and select **An activity occurs**.
3. Open the trigger's **Properties**, set **Activity type** to **End of conversation**, and add the condition `Conversation.EndReason` is equal to `CUSTOMER_HANGUP`.
4. Below the trigger, select **Add node** > **Add a tool** > **Connector**, choose Office 365 Outlook **Send an email (V2)** and create the connection.
5. Set **To** to the help desk mailbox, the subject to the text below followed by the system variable **Conversation.EndReason**, and save the topic.

```text
Contoso IT hotline call ended:
```

Expected: the topic saves without errors, and its trigger shows **An activity occurs** with **End of conversation** and the `CUSTOMER_HANGUP` condition. The email itself is sent only on a real call over the **Telephony** channel when a caller hangs up; a transfer to the external number or to Contact Center doesn't send it.

> **Note:** A caller on the phone can't sign in to Outlook. Before the hotline goes live, the email tool needs a connection that runs without the caller, as the autonomous agents topic explains for **Maker-provided credentials**.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| **Enable voice** can't be turned on | The environment receives features early | Use an environment with **Get new features early** turned off |
| Typing `1` picks the wrong option | A plain digit matches the option order, not the DTMF key | Type `/DTMFkey 1` to simulate a key press |
| Messages stay empty on a test call | The message was written in the **Text** modality | Switch the node to **Speech & DTMF** and add the spoken text |
| The post-call topic never runs in the test panel | The test panel doesn't simulate the end of a real call | Verify on the **Telephony** channel after the agent is connected to Dynamics 365 Contact Center |

## Summary

You built Contoso IT Hotline, a basic voice agent with a spoken and keypad menu, a transfer to a person, and a post-call report for calls the caller ended. You can now:

- Turn on basic voice and recognize the voice system topics it adds
- Map DTMF keys to the options of a multiple-choice question and transfer a call
- Simulate a call with the **Speech & DTMF** chat mode and `/DTMFkey`
- Trigger a topic on **End of conversation** and filter it with `Conversation.EndReason`

Connecting the hotline to a phone number through Azure Communication Services and Dynamics 365 Contact Center is the step that puts it in front of real callers.
