import argparse
import pathlib
import re
import sys

LIST_PREFIXES = ("|", "#", "-", "*", ">", "<!--")
ABBREVIATIONS = re.compile(r"\b(e\.g|i\.e|vs|etc|approx|Fig|No)\.")


def markdown_files(paths):
    for raw in paths:
        p = pathlib.Path(raw)
        if p.is_dir():
            yield from sorted(p.rglob("*.md"))
        elif p.suffix.lower() == ".md" and p.exists():
            yield p


FENCE = re.compile(r"^(`{3,})([^\n]*)\n.*?^\1[ \t]*$", re.M | re.S)


def split_fences(text):
    prose, mermaid, last = [], [], 0
    for m in FENCE.finditer(text):
        prose.append(text[last:m.start()])
        if m.group(2).strip().startswith("mermaid"):
            mermaid.append(m.group(0))
        last = m.end()
    prose.append(text[last:])
    return "\n".join(prose), mermaid


def sentence_count(paragraph):
    flat = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", paragraph)
    flat = re.sub(r"`[^`]*`", "x", flat)
    flat = ABBREVIATIONS.sub("x", flat)
    return len(re.findall(r"[.!?](?:\s|$)", flat))


def check(path, cap):
    text = path.read_text(encoding="utf-8")
    prose, mermaid = split_fences(text)
    findings = []
    for line in prose.splitlines():
        if "—" in line or " – " in line:
            findings.append(("em_dash", line.strip()[:80]))
    for block in mermaid:
        if "\\n" in block:
            findings.append(("mermaid_newline", block.splitlines()[1][:80] if len(block.splitlines()) > 1 else ""))
    for para in re.split(r"\n\s*\n", prose):
        lines = []
        for line in para.strip().splitlines():
            s = line.strip()
            if s.startswith(LIST_PREFIXES) or re.match(r"^\d+\.\s", s):
                break
            lines.append(s)
        p = " ".join(lines)
        if not p:
            continue
        n = sentence_count(p)
        if n > cap:
            findings.append(("over_cap", f"{n} sentences: {p[:70].replace(chr(10), ' ')}"))
    return findings


def main():
    ap = argparse.ArgumentParser(description="Mechanical brand-voice checks: em dashes, Mermaid \\n labels, sentence cap.")
    ap.add_argument("--paths", nargs="+", required=True, help="Markdown files or folders")
    ap.add_argument("--cap", type=int, default=4, help="Maximum sentences per paragraph")
    args = ap.parse_args()
    sys.stdout.reconfigure(encoding="utf-8")

    totals = {"em_dash": 0, "mermaid_newline": 0, "over_cap": 0}
    files = list(markdown_files(args.paths))
    for f in files:
        for kind, detail in check(f, args.cap):
            totals[kind] += 1
            print(f"{f.as_posix()}: {kind}: {detail}")
    print(f"files={len(files)} em_dash={totals['em_dash']} mermaid_newline={totals['mermaid_newline']} over_cap={totals['over_cap']}")
    sys.exit(1 if any(totals.values()) else 0)


if __name__ == "__main__":
    main()
