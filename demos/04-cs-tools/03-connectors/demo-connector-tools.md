# Give the Help Desk Agent Connector Tools

An employee tells the help desk agent that a laptop screen cracked, and today the agent can only explain the loaner policy. Someone still has to look up the manager, find the right colleague, and send the email. In this demo the Contoso IT Help Desk agent gets three prebuilt connector tools that do that work, chains them from one sentence, and then hands them to a component collection so the next agent can reuse them.

What you practice here: adding prebuilt connector actions as tools, controlling how their inputs are filled, and letting generative orchestration chain them.

Duration: about 40 minutes.

## What you'll build

- A Get my manager tool on the Office 365 Users connector, with its input fixed to the signed-in user.
- A Send help desk email tool on the Office 365 Outlook connector that asks the user to confirm before it sends.
- A Find a colleague tool on the Office 365 Users connector whose search term the orchestrator fills from the conversation.
- A component collection, Help Desk Notifications, that holds all three tools.

## Prerequisites

- A Copilot Studio environment where you can create agents.
- A Standard agent named Contoso IT Help Desk (on the home page, open the **New agent** dropdown and select **Agent** with the **Standard** badge under **Other ways to build**) with generative orchestration on (the default) and **Authenticate with Microsoft** under **Settings** > **Security** > **Authentication** (the default).
- A Microsoft 365 account with an Outlook mailbox and a manager set in Microsoft Entra ID, plus the name of one colleague in the same tenant. Check both before the session: a demo account without a manager breaks Exercise 1.

## Exercise 1: Look up the user's manager with a connector tool

Escalations go to the requester's manager, and the agent should never ask a user to type who that is. You add one action from the Office 365 Users connector and fix its input to the signed-in user, so the orchestrator cannot fill it with anyone else.

1. Open the agent, go to **Tools**, and select **Add a tool** > **Connector**.
2. Search for `Office 365 Users`, select **Get manager (V2)**, create the connection if prompted, and select **Add and configure**.
3. Set **Name** to `Get my manager` and replace the description:

```text
Returns the manager of the signed-in user: display name, email address and job title. Use it whenever a request needs the user's manager, for example to escalate, notify or ask for approval.
```

4. Under **Inputs**, set **Fill using** for **User (UPN)** to **Custom value**, choose the formula option, and enter:

```powerfx
System.User.Email
```

5. Select **Save**, then send this message in the test pane:

```text
Who is my manager?
```

Expected: the activity map shows Get my manager running with no question to the user, and the reply names your manager as stored in Microsoft Entra ID.

## Exercise 2: Send email only after the user confirms

An agent that sends mail on its own is a liability, so this tool asks first. The orchestrator fills the recipient, subject, and body from the conversation, which also means it can chain this tool after Get my manager.

1. Select **Add a tool** > **Connector**, search for `Office 365 Outlook`, select **Send an email (V2)**, and select **Add and configure**.
2. Set **Name** to `Send help desk email` and replace the description:

```text
Sends an email from the signed-in user's mailbox. Use it to notify a manager or colleague about a help desk issue. Write a short subject and a polite body that states the problem and what the user needs.
```

3. Under **Additional details**, set **Ask the end user before running** to **Yes**. Leave **To**, **Subject**, and **Body** on **Dynamically fill with AI**.
4. Select **Save**, then send:

```text
Email my manager that my laptop screen cracked and I need a loaner laptop until Friday.
```

5. Review the confirmation the agent shows and confirm it.

Expected: the activity map shows Get my manager followed by Send help desk email; the agent asks for confirmation with the manager's address, a subject, and a body before anything is sent, and after you confirm the email appears in your Sent Items.

> **Tip:** Decline the confirmation once on purpose. The tool does not run, which is the behavior you want to show anyone worried about agents sending mail.

## Exercise 3: Find a colleague from the conversation

Not every input can be fixed. When the user names a person, the orchestrator should take that name from the message and pass it to the search, and generate a question only when the name is missing.

1. Select **Add a tool** > **Connector**, search for `Office 365 Users`, select **Search for users (V2)**, and select **Add and configure**.
2. Set **Name** to `Find a colleague` and replace the description:

```text
Searches the company directory by name, email or alias and returns matching people with job title, department, office location, email and phone. Use it when a user asks who someone is or how to reach a colleague.
```

3. Leave **Search term** on **Dynamically fill with AI**. Under **Completion**, set **After running** to **Write the response with generative AI**, then select **Save**.
4. In the test pane, send this message with the colleague's name from the prerequisites:

```text
How can I reach <colleague name>?
```

5. Then send a request without a name:

```text
I need to find a colleague's phone number.
```

Expected: for the first message, the activity map shows Find a colleague with the colleague's name as the search term, and the reply lists the person's job title and email; for the second, the agent asks which person you mean before it runs the tool.

## Exercise 4: Chain the tools in one request

The payoff of good descriptions is that a user can ask for everything at once. The orchestrator builds a plan from the request, runs the tools in order, and asks only for what it cannot fill itself.

1. Start a new test conversation and send, with the colleague's name:

```text
Let <colleague name> know the projector in meeting room 4 is fixed, and copy my manager.
```

2. Confirm the email when the agent asks.
3. Open the activity map for this turn.

Expected: the activity map shows Find a colleague and Get my manager before Send help desk email in one plan; the confirmation lists both addresses, and the sent email states that the projector in meeting room 4 is fixed.

## Exercise 5: Package the tools in a component collection

The next agent your team builds will need the same three tools. A component collection keeps one copy of them that several agents reference, so the copies never drift apart.

1. Go to **Settings** > **Component collections**, select **Create** (or **New** if a collection already exists), name it `Help Desk Notifications`, and add this description:

```text
Tools that look up a user's manager, find colleagues in the directory and send help desk email.
```

2. Select **Next**, select the three tools, and keep the dependencies that are selected automatically. Select **Next**, then **Create**.
3. On the side bar, select the three dots (**…**) > **Component collections** and open Help Desk Notifications.

Expected: the collection lists the three tools and their connections, and Contoso IT Help Desk appears as a connected agent; the agent's **Tools** page still lists the tools, now provided by the collection.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Get my manager fails with a not-found error | The account has no manager in Microsoft Entra ID | Set a manager for the demo account in the Microsoft 365 admin center, or use another account |
| The agent asks "What is your email address?" | **User (UPN)** is still on **Dynamically fill with AI** | Set **Fill using** to **Custom value** with `System.User.Email` |
| Find a colleague returns no one | The search term does not match a display name, email or alias in the tenant | Use the colleague's full display name or email address |
| A connection prompt appears for every user | Tools use end user credentials, the default | Expected behavior: each user connects once; maker-provided credentials need an authenticated channel and may be disabled by your admin |
| A connector is greyed out in **Add a tool** | A data policy blocks the connector | Select the information icon to see the policy, and ask the administrator |

## Summary

You gave the Contoso IT Help Desk agent three prebuilt connector tools, chained them from a single request, and moved them into a reusable component collection. You can now:

- Add a connector action as a tool and fix an input with a Power Fx custom value
- Leave an input to the orchestrator and let it ask only when a value is missing
- Require user confirmation before a tool sends or writes
- Read the activity map to see the plan the orchestrator built
- Share tools between agents with a component collection

The next topic packages several steps into one agent flow tool.
