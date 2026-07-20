# Connect an MCP Server and Automate with a Workflow

Northwind Traders sellers can now ask the Sales Assistant about products and pricing, but the assistant still cannot see live account records: which orders are open, which support cases are unresolved, which accounts sit in which region. In this demo you give the Northwind Sales Assistant live Dataverse data through a prebuilt Microsoft MCP server, then automate a repeatable post-call follow-up with a workflow that hands a drafting step to the agent. You go from an agent that only knows your documents to one that reads live records and drives a saved, testable follow-up process.

## What you'll build

- The prebuilt Dataverse MCP server attached to the Northwind Sales Assistant as a tool, with a description the orchestrator uses to decide when to call it.
- A Preview conversation proving the orchestrator calls the server on its own to answer a live-data question, with no topic wiring.
- A workflow in the new designer that takes an account name as input and returns a drafted post-call follow-up.
- An agent node inside that workflow that calls the Northwind Sales Assistant to draft the follow-up text.
- A workflow tested node by node, with a saved version you can roll back to.

## Related Topics

This demo puts [Tools, MCP, and the New Workflows Designer](readme.md) into practice by adding an MCP server and building a workflow from the same Tools surface. It builds on [The Unified Build Surface and the New Orchestrator](../02-unified-build-and-orchestrator/readme.md), because the enhanced orchestration runtime is what reads the server description and decides, on its own, when to call the tool.

## Prerequisites

- A Copilot Studio environment with the new experience turned on and the maker role.
- The Northwind Sales Assistant you built in [Build and Ground Your First New-Experience Agent](../01-new-experience-overview/demo-01-build-and-ground-an-agent.md). This demo continues that agent; do not create a new one.
- A prebuilt Dataverse MCP server available in your environment (the Microsoft-published Dataverse, GitHub, and Outlook servers appear in the wizard without any custom setup).
- Sign in at [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com) and open the assistant on the **Build** tab.

## Exercise 1: Add the prebuilt Dataverse MCP server

The new experience lists three kinds of tools on one surface, and each is fit for a different purpose. A connector wraps a single named action against a known API (send this mail, create this row). An MCP server attaches a standardized bundle of related tools that a vendor maintains, so you get a whole capability without wiring each action. A workflow automates a repeatable, deterministic process you define. You want live account records here, so the MCP server is the right fit, and using a prebuilt Microsoft server makes the wizard a few fields instead of a custom build.

1. On the **Build** tab, open the **Tools** component in the components panel.
2. Select **Add a tool**, then choose **Model Context Protocol** to start the onboarding wizard.
3. Pick the prebuilt **Dataverse** server. If prompted, supply the Server name, the Server description, and the Server URL.
4. In the Server description field, paste the following:

```text
Look up Northwind account, order, and support case records in Dataverse. Use when a seller asks about a specific account's records, orders, or open cases.
```

5. For the auth type, choose **None**, **API key**, or **OAuth 2.0** as the server requires, then finish the wizard.

Expected: the Dataverse MCP server appears in the agent's **Tools** list with the name and description you gave it. Nothing has been tested yet; you have attached the capability, not confirmed the agent uses it.

> **Note:** The Server description is not documentation, it is routing logic. The orchestrator reads that text at runtime to decide whether a given question should call this server, so write it in terms of the questions a seller actually asks.

## Exercise 2: Trigger the MCP tool from Preview

You confirm the wiring by asking a natural question, not by clicking the tool. That is the point of the new experience: the orchestrator, not a hand-authored topic, decides to call the server based on the description you wrote. In classic Copilot Studio this behavior requires generative orchestration to be turned on, and a topic cannot call an MCP server directly. In the new experience the enhanced orchestration runtime is always on, so there is no setting to flip.

1. Open the **Preview** tab next to **Build**.
2. Send the following message:

```text
Which open support cases do we have for accounts in the North region?
```

3. Read the response and note whether the answer draws on live Dataverse records rather than general knowledge.

Expected: the answer lists open support cases for North region accounts using data returned by the Dataverse MCP server. If the agent answers vaguely or from general knowledge instead, sharpen the Server description from Exercise 1 so it matches this kind of question, then ask again.

> **Tip:** MCP uses a Streamable transport, so a change made on the server side is reflected in your agent without republishing. If the server owner adds a new record type today, your next Preview question can use it immediately.

## Exercise 3: Start a workflow and add the input trigger

A workflow is the third tool type, and it exists for a different job than the MCP server. Where the orchestrator decides on the fly whether to call a server, a workflow runs a fixed sequence of steps you defined, on demand, the same way every time. That determinism is exactly what you want for a repeated process like a post-call follow-up, where the steps should not vary run to run. The new workflows designer is in public preview and supports node-by-node testing and versioning.

1. On the **Build** tab, open **Tools**, select **Add a tool**, and choose to create a workflow.
2. In the workflows designer, add the first node: a trigger that receives the process input.
3. Configure the trigger to take a single input value, the account name, so a run always starts from a named account.
4. Name the input clearly and save your progress in the designer.

Paste this as the trigger input description so the purpose is unambiguous:

```text
Account name for the customer call that just ended. The workflow uses it to draft a follow-up.
```

Expected: the designer canvas shows a single trigger node that accepts an account name, and the workflow is ready for its next node. No follow-up is produced yet; you have only defined the entry point.

## Exercise 4: Add an agent node that drafts the follow-up

A workflow can hand a step to an agent through an agent node, which is what lets a deterministic process reuse the reasoning you already built into the Northwind Sales Assistant. Instead of scripting the wording of a follow-up, you let the agent draft it from the account name the trigger provided. A final node then returns or composes that draft so the run produces a usable result.

1. Below the trigger, add an **agent** node and point it at the Northwind Sales Assistant.
2. Pass the account name from the trigger into the agent node, and give the agent the drafting instruction below.
3. Add a final node that returns the drafted text as the workflow output.
4. Save the workflow.

Paste this as the instruction the agent node sends to the assistant:

```text
Draft a short, professional post-call follow-up email for the named account. Summarize any open orders and open support cases, list one clear next step, and keep it under 120 words.
```

Expected: the canvas shows three nodes in order, trigger then agent node then final node, with the agent node calling the Northwind Sales Assistant from inside the workflow. The follow-up is defined but not yet run.

> **Note:** The agent node reuses the same assistant you gave Dataverse access to in Exercise 1, so the drafted follow-up can reference live orders and cases. The workflow supplies the structure; the agent supplies the language and the live data.

## Exercise 5: Test node by node and save a version

Node-by-node testing lets you confirm each step in isolation before you trust the whole run, so when something fails you know exactly which node to fix rather than guessing across the chain. Versioning then saves a known-good state, giving you a point to return to before you change anything. Together they make a multi-step workflow debuggable and safe to iterate on.

1. In the designer, run the trigger node alone and confirm it accepts an account name.
2. Run the **agent** node and confirm it returns a drafted follow-up from the Northwind Sales Assistant.
3. Run the final node and confirm it returns the composed follow-up as output.
4. Run the full workflow once end to end with a real account name, then save a version.

Use this account name when you run the full workflow:

```text
Alpine Ski House
```

Expected: each node passes when tested on its own, the full run produces a follow-up email for the named account, and the designer records a saved version you can compare against or roll back to later.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| **Model Context Protocol** is not offered under **Add a tool** | You are in the classic experience, where topics cannot call MCP directly | Return to the home page, confirm the new experience is on, and reopen the agent |
| Preview answers from general knowledge, not Dataverse | The Server description does not match the question, so the orchestrator did not route to the server | Rewrite the description in Exercise 1 to name accounts, orders, and cases, then re-ask |
| Agent node returns nothing in the workflow | The trigger's account name is not being passed into the agent node | Map the trigger input to the agent node's input, save, and re-run the node |
| A server-side data change does not appear | Assumed a republish is needed | No republish is required; the Streamable transport reflects server changes, so simply re-ask in Preview |
| No saved version to roll back to | The full run was never saved as a version | Run the workflow end to end, then save a version from the designer |

## Summary

You connected the Northwind Sales Assistant to live account data and automated a repeatable follow-up. You can now:

- Attach a prebuilt Microsoft MCP server and write a Server description that the orchestrator uses to route questions.
- Confirm from Preview that the orchestrator calls the server on its own, with no topic wiring.
- Build a workflow in the new designer with a trigger, an agent node, and a return node.
- Test a workflow node by node and save a version you can roll back to.

Next, put this together end to end in [Sales Account Assistant](../../../../labs/03-copilot-studio/04-ui-update/04-workflows-and-mcp/lab-01-sales-account-assistant.md), where you ground an agent, wire live data, and automate the seller's follow-up as one connected deliverable.
