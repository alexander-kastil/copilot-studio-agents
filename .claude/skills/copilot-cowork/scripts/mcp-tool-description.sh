#!/usr/bin/env bash
set -euo pipefail

url=""
out=""
dry_run=0

while [ $# -gt 0 ]; do
  case "$1" in
    --url) url="$2"; shift 2 ;;
    --out) out="$2"; shift 2 ;;
    --dry-run) dry_run=1; shift ;;
    -h|--help)
      echo "usage: mcp-tool-description.sh --url <https mcp endpoint> --out <tools/name.json> [--dry-run]"
      exit 0 ;;
    *) echo "unknown argument: $1" >&2; exit 2 ;;
  esac
done

if [ -z "$url" ] || { [ -z "$out" ] && [ "$dry_run" -eq 0 ]; }; then
  echo "usage: mcp-tool-description.sh --url <https mcp endpoint> --out <tools/name.json> [--dry-run]" >&2
  exit 2
fi

raw=$(curl -s -X POST "$url" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}')

json=$(printf '%s\n' "$raw" | sed -n 's/^data: //p')
if [ -z "$json" ]; then
  json="$raw"
fi

result=$(printf '%s' "$json" | node -e "
let s='';
process.stdin.on('data',d=>s+=d).on('end',()=>{
  const r=JSON.parse(s).result;
  if(!r||!Array.isArray(r.tools)){console.error('no tools array in tools/list response');process.exit(1);}
  process.stdout.write(JSON.stringify(r,null,2));
});")

names=$(printf '%s' "$result" | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>console.log(JSON.parse(s).tools.map(t=>t.name).join(',')))")
count=$(printf '%s' "$names" | awk -F, '{print (length($0)?NF:0)}')

if [ "$dry_run" -eq 1 ]; then
  echo "tools=$count names=$names out=(dry-run)"
  exit 0
fi

mkdir -p "$(dirname "$out")"
printf '%s\n' "$result" > "$out"
echo "tools=$count names=$names out=$out"
