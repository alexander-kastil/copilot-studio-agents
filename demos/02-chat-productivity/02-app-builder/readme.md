# Build No-Code Apps with App Builder

App Builder is an agent inside Microsoft 365 Copilot that turns a plain-language description into a working app. You describe the app you want, App Builder generates the pages in real time, and you refine it through conversation. No code, no screen design, and the result lives right inside the Copilot experience for you or your team.

---

## App Builder Is Not Agent Builder

Copilot Chat has two natural-language builders that look alike but produce different things. Knowing which is which saves confusion.

| | App Builder | Agent Builder |
|---|---|---|
| What you get | An app: pages, forms, and data views | An agent: a scoped chatbot with instructions and knowledge |
| You describe | "Build an app that tracks and visualizes X" | "Build an assistant that answers questions about X" |
| Where data lives | Microsoft Lists in a SharePoint site | Grounded on SharePoint, connectors, and the web |

This topic is about App Builder. Building agents is covered later in [Module 4: Copilot Studio](../../04-copilot-studio/readme.md).

---

## What You Can Build

App Builder is made for interactive prototypes, data visualizations, and small productivity tools for a person or a team. Describe the outcome in natural language and iterate until the layout and behavior match what you pictured.

- Team trackers: log requests, tasks, or inventory and see status at a glance
- Dashboards: visualize data from a list as charts and summaries
- Lightweight tools: a form to collect input, plus a view to browse what was submitted

You can enrich your description with context such as people, meetings, tags, and documents like Word, PowerPoint, and Excel to give the app meaningful detail.

---

## How It Works

1. Open App Builder from the agents list in the Microsoft 365 Copilot app.
2. Describe the app you want in plain language, including the data it should track.
3. Watch App Builder generate the pages in an interactive, conversational preview.
4. Refine by conversation: adjust elements, layout, and functionality until it fits.
5. Save and share the app with your team.

Behind the scenes each app stores its data in a Microsoft List in an associated SharePoint site, and the app can create, read, update, and delete that data.

---

## Good to Know

A few limits shape what App Builder is right for today. Give clear descriptions of straightforward problems and test the app before you share it.

- Apps connect to data in Microsoft Lists and do CRUD operations on it.
- You cannot manually edit the generated code.
- Complex design requirements can be difficult for the agent.
- App Builder is available in English only.

Admins govern App Builder in the Microsoft 365 admin center under Copilot then Agents, where they can enable, disable, or scope access. Apps live in a dedicated Power Platform environment for the tenant that is hidden from all but tenant admins.

---

## Practical Scenarios

| Scenario | What App Builder Produces |
|---|---|
| Track team requests | An app with a submission form and a status board backed by a List |
| Visualize a dataset | A dashboard that charts the rows in a SharePoint List |
| Run a quick prototype | A shareable interactive app to validate an idea before you invest in it |

---

## Where to Go Next

1. [Productivity & SharePoint Agents](../03-productivity-sharepoint-agents/readme.md): prebuilt agents and site-grounded assistants
2. [Module 4: Copilot Studio](../../04-copilot-studio/readme.md): build and ground full agents

---

## Links & Resources

- [FAQs for App Builder](https://learn.microsoft.com/microsoft-365/copilot/responsible-ai/faq-app-builder)
- [App Builder privacy and data subject request FAQ](https://learn.microsoft.com/microsoft-365/copilot/app-builder-privacy-data-subject-request-faq)
- [Manage Copilot agents in the Microsoft 365 admin center](https://learn.microsoft.com/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps)
