# Migration plan: CS-Grey Logistics IT Help Desk -> GH-Grey Logistics IT Help Desk

Status: plan APPROVED by user. Tool migration: done (nothing to convert). Architect: pending. Push: pending.

- Source: D:\git-classes\copilot-studio-agents\src\cs-schema\cs-agents\CS-Grey Logistics IT Help Desk
- Target: D:\git-classes\copilot-studio-agents\src\cs-schema\cs-agents\GH-Grey Logistics IT Help Desk
- Target display name: GH-Grey Logistics IT Help Desk
- Environment ID (bare GUID): d92b247e-90e0-4469-a129-6a32866c0d0a (source conn.json uses Default- prefix)
- Publisher prefix: catmgr
- Target agent schema name: catmgr_GHGreyLogisticsITHelpDesk
- PAC CLI: C:\Users\AlexanderKastil\.dotnet\tools\pac.exe (2.14.1); plain `pac` resolves to 2.3.2

## Purpose of the new agent
IT help desk assistant for Grey Logistics employees: VPN troubleshooting, client portfolio lookup, inventory registration. The last two use browser automation (computer use) because the web apps have no API. Anything else: "I can't help with that here" and point to the IT help desk.

## Capabilities
| Capability | Behavior |
| --- | --- |
| Greets the user | Opens each conversation with a short hello using the agent's name. |
| Signs the user in | Requires organizational sign-in every conversation. Access limited to one group. |
| Walks users through VPN fixes | Asks Windows or macOS, then gives the four matching steps (check internet, reconnect or restart client, remove and re-add VPN profile, restart computer). No tool, no redirect. |
| Looks up a client's portfolio | Asks for the client name if missing, never guesses. Reads manager and value from the portfolio dashboard, reports only that. |
| Registers inventory items | Opens the Product Inventory Update page, submits two fixed items (Rear Derailleur RD-4821, 50 units, 42.75, Tailspin Toys; Pedal Set PD-1738, 80 units, 19.99, Northwind Traders) with no confirmation, checks both are listed. |
| Handles failures honestly | Says so when a tool fails or returns nothing. Never reveals tool names or errors. |
| Answers in the user's language | Short, polite, professional replies. |
| Handles out-of-scope requests | Declines and points to the IT help desk. Asks to rephrase when nothing matches; after three misses shows the escalation message. |
| Handles requests for a human | Says escalation isn't configured, asks if it can help with anything else. |

## Tool/action decisions
| Action file | Display name | Operation | Status | Decision | Rationale |
| --- | --- | --- | --- | --- | --- |
| Computeruse-Computeruse.mcs.yml | CS-Look up portfolio | ComputerOperatorInvokeMcpCua | unsupported (InvokeComputerUsingAgentTaskAction) | manual | Architect rebuilds as computer-use tool with required ClientName input. URL https://computerusedemos.blob.core.windows.net/web/Portfolio/index.html, returns "Manager: <name>, Value: <value>". |
| Computeruse-Computeruse_Ka6.mcs.yml | CS-Register inventory items | ComputerOperatorInvokeMcpCua | unsupported (InvokeComputerUsingAgentTaskAction) | manual | Architect rebuilds as computer-use tool, no inputs. URL https://computerusedemos.blob.core.windows.net/web/Adventure/index.html. |

Both use connector shared_computeroperator, mode Maker, model hint sonnet4-5, enforceHttps, allowlist computerusedemos.blob.core.windows.net + Microsoft Edge. Converter not run (no `migrate` decisions). No connector-backed converted tools, so no connection-reference work in step 6.

## Gap handling (approved)
1. Inventory items stay the two fixed demo items.
2. Keep mode: Maker; drop the personal-address information-request recipient, list as open item.
3. Keep same two external URLs and Edge allowlist (unverifiable from files).
4. Keep sonnet4-5 for the tools, GPT56Chat for the agent.
5. Keep VPN topic; put routing for all three tasks in the instructions.
6. Keep placeholder escalation; omit the empty search/boost step (no knowledge source).
7. Use "Grey Logistics" in visible text.
8. useModelKnowledge and webBrowsing stay on, as in source.

Other source facts: GenerativeAIRecognizer, template default-2.1.0, language 1033, authenticationMode Integrated, authenticationTrigger Always, accessControlPolicy GroupMembership, contentModeration Low, isAgentConnectable true, isFileAnalysisEnabled true, isSemanticSearchEnabled true. Source instructions are in the source agent.mcs.yml.

## Progress
- [x] Describe, plan approved, init done
- [x] Tool migration: none to convert
- [x] Architect (5 files written: settings, VPN skill, 2 computer-use tools, connection reference)
- [ ] Push: user CONFIRMED the prerequisite pull for exactly D:\git-classes\copilot-studio-agents\src\cs-schema\cs-agents\GH-Grey Logistics IT Help Desk


- [x] Push done. Created Dataverse connection reference catmgr_GHGreyLogisticsITHelpDesk.cr.shared_computeroperator (display name 'GH Grey IT Help Desk Hosted browser', connectionid 06d475747a294d23a1ffa69158f872e5, connector shared_computeroperator) before push; first push failed without it. Push: 3 changes pushed. Not published.
