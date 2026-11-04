# Reconcile Payroll and Headcount Lists

Martin's monthly reconciliation of the payroll statistics (`BezStat`) with the headcount plans (`Soll`), built twice: once on a Standard agent and once on a Microsoft Copilot harness agent. The requirements are in [Beschreibung.docx](Beschreibung.docx); the test data is the anonymized May 2026 set from the mail.

| Lab | Deutsch | Focus |
|-----|---------|-------|
| [Reconcile Payroll and Headcount Lists with an Agent Flow](lab-01-reconcile-with-an-agent-flow.md) | [Deutsch](lab-01-reconcile-with-an-agent-flow-de.md) | Standard agent: a topic asks for the month and the folder, an agent flow runs two Office Scripts over every source file in SharePoint |
| [Reconcile Payroll and Headcount Lists with an Agent Skill](lab-02-reconcile-with-an-agent-skill.md) | [Deutsch](lab-02-reconcile-with-an-agent-skill-de.md) | Microsoft Copilot harness agent: a skill with a Python script reconciles the files from SharePoint knowledge, a workflow files the results |
