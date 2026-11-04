import argparse
import datetime
import json
import os
import re
import sys

import openpyxl

MONTHS = {
    "jän": 1, "jan": 1, "feb": 2, "mär": 3, "mrz": 3, "mar": 3, "apr": 4, "mai": 5, "may": 5,
    "jun": 6, "jul": 7, "aug": 8, "sep": 9, "sept": 9, "okt": 10, "oct": 10, "nov": 11, "dez": 12, "dec": 12,
}

BEZSTAT_COLUMNS = {
    "firma": ["firma"],
    "pn": ["personalnummer", "persnr", "pnr"],
    "name": ["name"],
    "kst": ["kostenstelle", "kst", "kstneu"],
    "ant": ["anteilig"],
}

SOLL_COLUMNS = {
    "kst": ["kstneu", "kostenstelle", "kst"],
    "pn": ["persnr", "personalnummer", "pnr"],
    "name": ["name"],
    "vn": ["vorname"],
}

SOLL_OPTIONAL = {"anm": ["anmerkung"]}


def parse_month(text):
    m = re.match(r"^\s*([A-Za-zÄäÖöÜü]{3,4})\.?\s*(\d{4})\s*$", str(text))
    if not m or m.group(1).lower() not in MONTHS:
        return None
    return int(m.group(2)), MONTHS[m.group(1).lower()]


def norm(value):
    if value is None:
        return ""
    return re.sub(r"[\s._\-]", "", str(value)).lower()


def key(value):
    if value is None:
        return ""
    if isinstance(value, float) and value.is_integer():
        value = int(value)
    return str(value).strip()


def empty(value):
    return key(value) == ""


def number(value):
    if empty(value):
        return None
    try:
        return float(str(value).replace(",", "."))
    except ValueError:
        return None


def same_value(a, b):
    x, y = number(a), number(b)
    if x is None and y is None:
        return key(a) == key(b)
    if x is None or y is None:
        return False
    return abs(x - y) < 1e-9


def find_header(rows, columns):
    for index, row in enumerate(rows[:15]):
        names = [norm(v) for v in row]
        found = {}
        for field, aliases in columns.items():
            for alias in aliases:
                if alias in names:
                    found[field] = names.index(alias)
                    break
        if len(found) == len(columns):
            return index, found, names
    return None, None, None


def is_month_header(value, year, month):
    if isinstance(value, datetime.datetime):
        return value.year == year and value.month == month and value.day == 1
    return parse_month(value) == (year, month)


def cell(row, index):
    return row[index] if index is not None and index < len(row) else None


def files_starting_with(folder, prefix):
    found = []
    for root, _, names in os.walk(folder):
        for name in names:
            if name.lower().startswith(prefix) and name.lower().endswith(".xlsx") and not name.startswith("~$"):
                found.append(os.path.join(root, name))
    return sorted(found)


def read_bezstat(path, skipped):
    rows_out = []
    book = openpyxl.load_workbook(path, data_only=True, read_only=True)
    for sheet in book.worksheets:
        rows = list(sheet.iter_rows(values_only=True, max_col=300))
        header, cols, _ = find_header(rows, BEZSTAT_COLUMNS)
        if header is None:
            skipped.append(f"{os.path.basename(path)} / {sheet.title}")
            continue
        for row in rows[header + 1:]:
            record = {field: cell(row, index) for field, index in cols.items()}
            if empty(record["pn"]) and empty(record["name"]):
                continue
            record["quelle"] = f"{os.path.basename(path)} / {sheet.title}"
            rows_out.append(record)
    return rows_out


def read_soll(path, year, month, skipped, without_month):
    rows_out = []
    book = openpyxl.load_workbook(path, data_only=True, read_only=True)
    for sheet in book.worksheets:
        rows = list(sheet.iter_rows(values_only=True))
        header, cols, names = find_header(rows, SOLL_COLUMNS)
        if header is None:
            skipped.append(f"{os.path.basename(path)} / {sheet.title}")
            continue
        anm = next((names.index(a) for a in SOLL_OPTIONAL["anm"] if a in names), None)
        vz = next((i for i, v in enumerate(rows[header]) if is_month_header(v, year, month)), None)
        if vz is None:
            without_month.append(f"{os.path.basename(path)} / {sheet.title}")
        for row in rows[header + 1:]:
            record = {field: cell(row, index) for field, index in cols.items()}
            if empty(record["pn"]) and empty(record["name"]) and empty(record["vn"]):
                continue
            record["vz"] = cell(row, vz)
            record["anm"] = cell(row, anm)
            record["quelle"] = f"{os.path.basename(path)} / {sheet.title}"
            rows_out.append(record)
    return rows_out


def dedupe(rows, value_field):
    result = []
    position = {}
    for row in rows:
        if empty(row["pn"]):
            result.append(row)
            continue
        k = (key(row["pn"]), key(row["kst"]))
        if k not in position:
            position[k] = len(result)
            result.append(row)
        elif empty(result[position[k]][value_field]) and not empty(row[value_field]):
            result[position[k]] = row
    return result


def write(path, sheets):
    book = openpyxl.Workbook()
    book.remove(book.active)
    for title, header, rows in sheets:
        sheet = book.create_sheet(title)
        sheet.append(header)
        for row in rows:
            sheet.append(row)
    book.save(path)


def reconcile(bez, soll):
    by_pn_b, by_pn_s = {}, {}
    for b in bez:
        if not empty(b["pn"]):
            by_pn_b.setdefault(key(b["pn"]), []).append(b)
    for s in soll:
        if not empty(s["pn"]):
            by_pn_s.setdefault(key(s["pn"]), []).append(s)

    differences = []
    for pn, b_rows in by_pn_b.items():
        s_rows = by_pn_s.get(pn)
        if not s_rows:
            continue
        open_s = list(s_rows)
        pairs, open_b = [], []
        for b in b_rows:
            match = next((s for s in open_s if key(s["kst"]) == key(b["kst"])), None)
            if match is None:
                open_b.append(b)
            else:
                open_s.remove(match)
                pairs.append((b, match))
        for i in range(max(len(open_b), len(open_s))):
            pairs.append((open_b[i] if i < len(open_b) else None, open_s[i] if i < len(open_s) else None))
        for b, s in pairs:
            if b and s and key(b["kst"]) == key(s["kst"]) and same_value(b["ant"], s["vz"]):
                continue
            differences.append([
                b["firma"] if b else None,
                b["pn"] if b else s["pn"],
                b["name"] if b else f"{key(s['name'])} {key(s['vn'])}".strip(),
                b["kst"] if b else None,
                s["kst"] if s else None,
                b["ant"] if b else None,
                s["vz"] if s else None,
            ])

    errors = []
    for b in bez:
        reasons = []
        if empty(b["pn"]):
            reasons.append("Personalnummer fehlt")
        if empty(b["name"]):
            reasons.append("Name fehlt")
        if not empty(b["pn"]) and key(b["pn"]) not in by_pn_s:
            reasons.append("fehlt in Soll")
        if reasons:
            errors.append([b["quelle"], ", ".join(reasons), b["firma"], b["pn"], b["name"], None, b["kst"], None])
    for s in soll:
        reasons = []
        if empty(s["pn"]):
            reasons.append("Pers.Nr fehlt")
        if empty(s["name"]):
            reasons.append("Name fehlt")
        if empty(s["vn"]):
            reasons.append("Vorname fehlt")
        if not empty(s["pn"]) and key(s["pn"]) not in by_pn_b:
            reasons.append("fehlt in BezStat")
        if reasons:
            errors.append([s["quelle"], ", ".join(reasons), None, s["pn"], s["name"], s["vn"], s["kst"], s["anm"]])
    return differences, errors


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--month", required=True)
    parser.add_argument("--input", default=".")
    parser.add_argument("--output", default="output")
    args = parser.parse_args()

    parsed = parse_month(args.month)
    if parsed is None:
        print(json.dumps({"fehler": f"Monat '{args.month}' ist nicht im Format MMM.JJJJ, zum Beispiel Mai.2026"}, ensure_ascii=False))
        sys.exit(2)
    year, month = parsed
    label = args.month.strip()

    skipped, without_month = [], []
    bez_files = files_starting_with(args.input, "bezstat")
    soll_files = files_starting_with(args.input, "soll")
    bez = dedupe([r for f in bez_files for r in read_bezstat(f, skipped)], "ant")
    soll = dedupe([r for f in soll_files for r in read_soll(f, year, month, skipped, without_month)], "vz")
    differences, errors = reconcile(bez, soll)

    os.makedirs(args.output, exist_ok=True)
    out_bez = os.path.join(args.output, f"BezStat_Auszug_{label}.xlsx")
    out_soll = os.path.join(args.output, f"Soll_Auszug_{label}.xlsx")
    out_abgleich = os.path.join(args.output, f"Abgleich_{label}.xlsx")
    write(out_bez, [("BezStat", ["Firma", "Personalnummer", "Name", "Kostenstelle", "anteilig"],
                     [[r["firma"], r["pn"], r["name"], r["kst"], r["ant"]] for r in bez])])
    write(out_soll, [("Soll", ["Pers.Nr", "Name", "Vorname", "KST-neu", f"VZÄ {label}"],
                      [[r["pn"], r["name"], r["vn"], r["kst"], r["vz"]] for r in soll])])
    write(out_abgleich, [
        ("Differenzen", ["Firma", "Personalnummer", "Name", "BezStat_Kostenstelle", "Soll_KST-neu",
                         "BezStat_Anteilig", f"Soll_VZÄ_{label}"], differences),
        ("Fehlerliste", ["Quelle", "Grund", "Firma", "Personalnummer", "Name", "Vorname", "Kostenstelle",
                         "Anmerkung"], errors),
    ])

    summary = {
        "dateien_bezstat": [os.path.basename(f) for f in bez_files],
        "dateien_soll": [os.path.basename(f) for f in soll_files],
        "zeilen_bezstat": len(bez),
        "zeilen_soll": len(soll),
        "differenzen": len(differences),
        "fehlerliste": len(errors),
        "blaetter_ohne_spalten": skipped,
        "blaetter_ohne_monat": without_month,
        "ausgabe": [out_bez, out_soll, out_abgleich],
    }
    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
