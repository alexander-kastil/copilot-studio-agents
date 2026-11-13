# Customer Conversation Agents: Topic Skills, Sub-Agents, and Escalation

Copilot Studio runs every agent on one of three harnesses, and the third one is built for an organization's customers. The Customer Conversation harness powers an agent that answers questions and resolves issues for customers on a website or over the phone, and Microsoft calls an agent built on it a **Customer Assist Agent**. This topic teaches makers what that harness adds to the two kinds of agent the class already built: a primary agent that routes to specialist sub-agents, skills that come in a Generative and a Topic kind, fixed conversation events, and escalation to a human.

The maker takeaway is that deterministic flows did not disappear with the new harnesses. On a Customer Conversation agent, a flow of questions and conditions you author on the topic canvas is a skill of its own, the **Topic** skill, which sits next to the instruction-based **Generative** skill in the same **Add skill** dialog. A Microsoft Copilot harness agent offers only the instruction-based kind today, so its fixed steps go into workflows, hooks or skill scripts instead.

## Three Harnesses, Three Kinds of Agent

The harness is the runtime between what you build and the model: it decides when to call the model, what to send it, and which tools to run. A maker picks it when creating the agent, and the choice shapes how the agent works, what it can do out of the box and how it is billed.

| | Microsoft Copilot harness | Customer Conversation harness | Standard harness |
|---|---|---|---|
| Best for | Complex, multi-step business processes | Customer-facing, contact-center-style conversations over voice and chat | Rule-based agents and structured conversations |
| How it works | Reasons through a goal step by step | A primary agent routes to specialist sub-agents, each with its own escalation path | Follows the topics and rules you define |
| When something goes wrong | Retries and finds another path | Escalates to a human representative | Follows the paths you built |
| Skills | Markdown skills only | Generative skills and Topic skills | Not a focus |
| Published to | Internal teams or external customers | A website chat or a phone number | Internal teams or external customers |
| Billing | Copilot Credits | Copilot Credits | Standard harness licensing |

A Customer Conversation agent starts from the **Home** page: **Explore what else is possible with agents** > **Customer conversation agent** opens **Create your Customer Assist Agent**. You describe the scenario and Copilot Studio drafts a primary agent with a name, a description, instructions and suggested tools, or you select **Create agent** under **Start from scratch**, name the agent and add its description afterwards in the editor panel. The agent's tabs read **Build**, **Preview**, **Evaluate**, **Deploy** and **Monitor**: a **Deploy** tab where the Microsoft Copilot harness agent has none is the quickest way to tell the two apart.

## A Primary Agent That Routes to Specialists

Every Customer Conversation agent is a small team. The primary agent greets the customer, works out the intent and either answers or hands the conversation to a sub-agent that owns one job, such as billing, orders or catering. The orchestration compares each customer message with the name, description and instructions of every sub-agent and the primary agent's own instructions, so a description that overlaps another one is the most common reason a conversation lands with the wrong specialist.

| | Sub-agent | Connected agent |
|---|---|---|
| Built | Inside the primary agent | Outside, today only a Microsoft Foundry agent |
| Configuration, deployment and ALM | Shared with the primary agent | Its own |
| Reuse across primary agents | No | Yes |
| Can reference tools, topics, events and variables | Yes | No |

A sub-agent takes a name of up to 42 characters, a description of up to 1,024 characters and instructions of up to 20,000 characters, and it carries its own skills, tools, knowledge and input and output variables. Microsoft's guidance is to build sub-agents like departments of a contact center: mutually exclusive, each with the tools and knowledge to answer its kind of question alone, and each with its own escalation path. When two specialists must work together, the primary agent's instructions name them with `/`, for example "ask the /CheckingAccountAgent to confirm the balance, then have the /CreditCardAgent make the payment"; sub-agents can't reference each other.

## Generative Skills and Topic Skills

A skill on this harness is a reusable capability that the orchestration activates when a customer's request matches the skill's description. **Add skill** on the primary agent's or a sub-agent's card opens a dialog with two tabs, and the tab you pick decides who controls the conversation while the skill runs: the model or your flow.

| | Generative skill | Topic skill |
|---|---|---|
| What it is | Markdown instructions the agent reasons over in the moment | A deterministic flow of steps and conditions on the topic canvas |
| Name | Kebab-case, up to 64 characters, for example `order-lookup` | A descriptive name, for example `order lookup` |
| Description | Up to 200 characters, used for routing | Up to 200 characters, used for routing |
| Body | Instructions; `/` inserts an event or a variable | Message, Question, Ask with Adaptive Card, Condition, Variable management, Topic management, Add a tool and HTTP request nodes |
| Same wording every time | No | Yes |
| Use it for | Advice, explanations, anything that needs judgement | Collecting fixed data, enforcing a business rule, a legally reviewed answer, a hand-off to another system |

Microsoft recommends at most 3,000 characters of instructions per Generative skill and at most 10 skills per sub-agent, so each conversation keeps room for its own context. A Generative skill works the same way as a skill on a Microsoft Copilot harness agent, and [topic 3](../03-agent-skills/readme.md) teaches how its description drives activation. A Topic skill is the topic you built for a Standard agent in [Topics, Entities, and Variables](../../03-cs-basics/03-topics/readme.md): **Topic** > **Create topic** in the dialog opens the same canvas, or you pick an existing topic.

### Tell the model what the topic collects

The model reads the topic descriptions, the tool descriptions and the instructions together before it decides what to do. By default it asks follow-up questions for any detail it thinks is missing, so a topic that collects the details itself must say so in its description, or the customer is asked twice. A good description states what the topic does and what it collects, never what the agent should say. Microsoft's examples below run longer than the 200 characters the field accepts, so the class demo makes the same claim in one short sentence: "Runs a fixed flow that asks which ingredient to avoid and whether the allergy is severe. Call it when a customer mentions allergies, intolerances or ingredients to avoid; never ask these yourself."

| Avoid | Prefer |
|---|---|
| "Helps the customer order ice cream." | "Order Ice Cream hands off to a deterministic flow. The flow collects all order details, including flavor, size, and toppings. The model must immediately call this topic when the user wants to order and must not ask for order details." |
| "Say 'Here are your recent transactions' and ask which looks suspicious." | "Retrieves transactions from the last 72 hours for a verified account." |

Two more rules from the topic guidance keep a flow reliable. A value the customer corrects mid-conversation needs a **Variable management** node that overwrites it, because the model doesn't change a topic variable on its own. Save a topic's output as a variable, so the context survives when control returns to the generative orchestration.

## Where a Deterministic Flow Lives on Each Harness

| Harness | Where a fixed flow of questions and conditions lives |
|---|---|
| Standard | A topic |
| Customer Conversation | A Topic skill, beside the agent's Generative skills |
| Microsoft Copilot | A workflow tool ([topic 4](../04-workflows-and-mcp/readme.md)), or a script shipped in a skill ZIP ([topic 3](../03-agent-skills/readme.md)) |

The Microsoft Copilot harness supports only Markdown skills: **Add skill** offers **Create from blank**, **Generate with AI** and **Upload a skill**, and none of them is a topic. Microsoft Learn's skills overview names both skill types for the Customer Conversation harness and says nothing about Topic skills coming to the Microsoft Copilot harness. Until it does, the deterministic part of a topic moves into a workflow tool, or into a skill that ships its own script.

## Events: Fixed Moments of Every Conversation

The **Events** section of the **Build** tab opens **Conversation events**, the deterministic parts of a conversation that fire on what happens in it. Each event is a topic underneath, so you edit it on the same canvas; you can turn an event off or change it, but not remove it.

| Event | What you configure |
|---|---|
| **Conversation Start** | The greeting, and variables loaded at the start, such as the caller's phone number from the contact center |
| **End of Conversation** | The closing and the survey; another topic reaches it with a **Topic Redirect** node |
| **On Error** | Logging, for example to Azure analytics |
| **Prompt Website Login** | The text of the sign-in button, in chat channels only |
| **Reset Conversation** | The commands that start a new conversation |
| **Silence Detection** | How long the agent waits before it asks whether the customer is still there |

Turning on voice authentication adds three more events for the SMS one-time passcode, the consent to biometric enrollment and the speech collection for enrollment. Events play the role of the system topics of a Standard agent and of the hooks of a Microsoft Copilot harness agent.

## Escalation and Caller Verification

A customer agent needs a way out to a person. Microsoft Learn describes three paths for an **Escalate** tool; in the product they sit in the **Human handoff** section of the primary agent's or a sub-agent's card, under **Handoff method**, and **System tools** holds no Escalate. The class lab adds the **Email** method, whose form takes a name, a scenario description that tells the orchestration when to hand over, and the recipients.

| Path | When to use it | What you configure |
|---|---|---|
| **Teams Phone** | A caller needs a person now | An external phone number or SIP URI, or a Teams call queue reached through tags |
| **Email** | A request needs follow-up later, by a person who answers by mail | One or more recipient addresses |
| **Customer Engagement** | A customer asks for a live representative, or the instructions detect the need | Name and description; the whole conversation goes to the engagement hub, which picks the representative |

For voice, the **Voice capabilities** section adds **Biometric Authentication**, which identifies a caller by phone number or a custom identifier and verifies the voice. An admin turns it on in the Microsoft Contact Center Intelligence portal first. Name the tool for its purpose, such as "Verify callers before discussing account details", because a generic "Authenticate user" invites the orchestration to call it too often.

## One Agent for Speech and Chat

Every Customer Conversation agent serves both a chat window and a phone line, so the instructions have a **General** tab and separate **Voice** and **Chat** tabs (Microsoft Learn calls the voice tab Speech), each up to 20,000 characters. Voice instructions keep replies to about three sentences, spell out codes character by character, say dates as words and repeat names and numbers back before acting on them. Speech channels support no end-user sign-in, so knowledge sources that need the customer's own credentials answer only in chat.

Memory on this harness is not the free-form recall of the Microsoft Copilot harness. It stores structured context in a schema of built-in and custom parameters, keeps it for 30 days, and gives a returning customer continuity across speech and chat when both channels share a contact identifier.

## Test in Preview, Then Deploy

The **Preview** tab tests the last saved version of the agent in **Web Chat** or a live **Voice Call**, with a **Live Transcript** beside it; it opens on **Voice Call**. The **Activity map** shows which sub-agent took the conversation, which tool and topic ran and what came back, which is how you tell a routing problem from a broken tool. A Generative skill has no entry of its own there: in the class demo the map showed the food catalog call behind the recommendation and **Topic executed: allergen enquiry** for the Topic skill. Microsoft's test guidance works outward in five layers and fixes them in order, because an early failure cascades.

| Layer | It works when |
|---|---|
| Greeting and scope | The opening matches the description and in-scope requests are accepted |
| Routing | The Activity map shows the expected specialist |
| Tools and topics | Real values from the tool or topic appear in the reply |
| Knowledge | Citations appear and match the configured sources |
| Guardrails | Refusals, escalation and business rules hold |

**Deploy** publishes the agent and connects its channels in one place. Publishing creates a demo website for teammates, with a welcome message and conversation starters you set; a web chat script embeds the agent in a live site; and Teams Phone gives it a number once a Teams admin assigns one. Dynamics 365 Contact Center, Genesys and other contact centers connect through the Microsoft Contact Center Intelligence portal, where an Omnichannel Admin deploys the agent to a live contact center.

## Preview Status and Credits

The Customer Conversation harness and all its Microsoft Learn pages are in preview, and the documentation is prerelease and can change. The harness uses usage-based billing: using, building, testing and evaluating these agents can consume Copilot Credits. An agent moves to another environment through a solution export and import, and it must be deployed again before it can be shared.

## Hands-On Demo

- [Script an Allergen Answer with a Topic Skill](./demo-10-customer-service-with-topic-skills.md): a Happy Longnose customer service agent that recommends dishes from the class food catalog with a Generative skill and answers allergen questions with a Topic skill that asks fixed questions and gives the same reviewed wording every time.

## Hands-On Lab (optional)

- [Build a Customer Service Agent with Sub-Agents and Topic Skills](../../../labs/06-cs-copilot-harness/10-customer-conversation/lab-01-customer-service-agent.md): a primary agent that routes to a menu and a catering sub-agent, a Generative skill that recommends dishes, a Topic skill that takes a catering request, an email escalation, and a demo website for testers.

## Key Topics covered in this module

[Harnesses in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/harnesses-overview)

[Agents powered by the Customer Conversation harness overview (preview)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/overview-customer-conversation)

[Skills overview for agents](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-overview)

[Create a skill for an agent (Customer Conversation)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/skills-create-customer-conversation)

[Create a topic (Customer Conversation)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/topics-create-customer-conversation)

[Sub-agents overview (Customer Conversation)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/sub-agents-overview-customer-conversation)

[Events overview (Customer Conversation)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/events-overview-customer-conversation)

[Add prebuilt contact center tools (Customer Conversation)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-prebuilt-add-customer-conversation)

[Preview and test an agent (Customer Conversation)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/preview-test-customer-conversation)

[Deploy an agent (Customer Conversation)](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/publication-deploy-customer-conversation)
