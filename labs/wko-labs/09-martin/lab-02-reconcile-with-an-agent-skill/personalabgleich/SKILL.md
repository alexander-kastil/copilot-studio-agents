---
name: personalabgleich
description: Reconciles the payroll statistics (Excel files whose names start with BezStat) with the headcount plans (Excel files whose names start with Soll) for one month and returns three workbooks, the two extracts and a reconciliation with the sheets Differenzen and Fehlerliste. Use when the user asks for the Personalabgleich, a reconciliation of BezStat and Soll, VZÄ against anteilig, or cost center differences (Kostenstelle, KST-neu) for a month such as Mai.2026.
---

# Personalabgleich

When this skill is activated:

1. Ask for the month in the format MMM.JJJJ, for example Mai.2026, unless the user already named it. Keep the user's spelling.
2. Collect every Excel file whose name starts with BezStat or Soll, in any letter case: the files attached to the chat, otherwise the files of the knowledge folder Eingang. Put all of them into one input folder.
3. Run `python scripts/abgleich.py --month <month> --input <input folder> --output output`. Never write your own comparison code and never edit the script: the script holds the business rules.
4. If the script prints `fehler`, show that message and ask for the month again.
5. Otherwise offer the three files from the output folder as downloads and report these numbers from the script's summary: `zeilen_bezstat`, `zeilen_soll`, `differenzen`, `fehlerliste`, and the sheets in `blaetter_ohne_monat`.

## Rules the script applies

- Columns are found by their header name in the first 15 rows of every sheet, never by column letter. BezStat: Firma, Personalnummer (or PNR, Pers.Nr), Name, Kostenstelle (or KST), anteilig. Soll: KST-neu, Pers.Nr, Name, Vorname, the column whose header is the requested month, and Anmerkung.
- A sheet without these headers is skipped and listed in `blaetter_ohne_spalten`. A Soll sheet without a column for the month keeps its rows with an empty VZÄ and is listed in `blaetter_ohne_monat`.
- A combination of Personalnummer and Kostenstelle appears once. When it appears on several sheets, the first row that carries a value (anteilig or VZÄ) wins.
- Rows are matched on Personalnummer and Pers.Nr. A pair with a different Kostenstelle or a different value goes to Differenzen.
- A row with an empty Personalnummer, Pers.Nr, Name or Vorname, and a person found in only one of the two lists, goes to Fehlerliste with the reason in Grund and the Soll Anmerkung of that row.
