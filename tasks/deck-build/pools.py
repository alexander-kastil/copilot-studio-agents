import json, glob, os, re, io, base64, shutil, collections
from PIL import Image, ImageDraw, ImageFont

root = os.path.expanduser('~/.claude/projects/D--git-classes-copilot-studio-agents')
here = os.path.dirname(os.path.abspath(__file__))
out = os.path.join(here, 'pools')
since = '2026-10-20T12'

FOLDER_TOPIC = {
    '735a41cc-wf-a0ea238f527b': '02/05', '735a41cc-wf-a2214ca18bf2': '02/03+02/06', '735a41cc-wf-a7984cdfe254': '02/01',
    '735a41cc-wf-a9519be8a347': '02/03', '735a41cc-wf-aab58b8592a3': '02/02', '735a41cc-wf-ab3308de8769': '02/01',
    '735a41cc-wf-adb7bb3605a4': '02/04', '735a41cc-main': '02/04', 'a05a93a2-main': '02/05',
    '40163078-wf-a6e3df8cb9f3': '06/01', '40163078-wf-a7ffa8390e73': '06/05', '40163078-wf-ab1cd82e26c0': '06/04',
    '40163078-ab1cd82e26c0': '06/04', '40163078-wf-a5cc855455d9': 'cost', '40163078-wf-ade727379d7f': 'cost',
    '40163078-a5cc855455d9': 'cost', '25a523e7-main': '04/07', '03bc699e-main': '07/05', 'df75be1d-main': '05/07',
    '73dbb9b2-main': '03/01', '40163078-main': '03/01',
}
CODE = re.compile(r'\b0([2-8])/0([1-7])\b')


def text_of(c):
    if isinstance(c, str):
        return c
    if isinstance(c, list):
        return ' '.join(b.get('text', '') for b in c if isinstance(b, dict) and b.get('type') == 'text')
    return ''


def dhash(im, n=12):
    g = im.convert('L').resize((n + 1, n), Image.LANCZOS)
    px = list(g.getdata())
    bits = 0
    for r in range(n):
        for c in range(n):
            bits = (bits << 1) | (px[r * (n + 1) + c] > px[r * (n + 1) + c + 1])
    return bits


shots = []
for f in sorted(glob.glob(root + '/**/*.jsonl', recursive=True)):
    if os.path.getmtime(f) < 1792454400:
        continue
    sid = os.path.relpath(f, root).split(os.sep)[0][:8]
    base = os.path.basename(f).replace('.jsonl', '')
    agent = 'main' if len(base) > 30 else ('wf-' if 'workflows' in f else '') + base.replace('agent-', '')[:12]
    key = f'{sid}-{agent}'
    if key not in FOLDER_TOPIC:
        continue
    topic = FOLDER_TOPIC[key].split('+')[0]
    tools, last = {}, ''
    with open(f, encoding='utf-8', errors='replace') as fh:
        for line in fh:
            try:
                d = json.loads(line)
            except Exception:
                continue
            ts = d.get('timestamp', '')
            msg = d.get('message') if isinstance(d.get('message'), dict) else {}
            c = msg.get('content')
            if not isinstance(c, list):
                continue
            for b in c:
                if not isinstance(b, dict):
                    continue
                if b.get('type') == 'text' and msg.get('role') == 'assistant':
                    last = b['text']
                    codes = CODE.findall(last)
                    if codes and key in ('40163078-main', '735a41cc-wf-a2214ca18bf2', '40163078-wf-a6e3df8cb9f3', '40163078-wf-a7ffa8390e73'):
                        topic = f'0{codes[-1][0]}/0{codes[-1][1]}'
                if b.get('type') == 'tool_use':
                    tools[b['id']] = b['name']
                    th = b.get('input', {}).get('thought') or b.get('input', {}).get('description') or ''
                    if th:
                        last = th
                        codes = CODE.findall(th)
                        if codes and key in ('40163078-main', '735a41cc-wf-a2214ca18bf2', '40163078-wf-a6e3df8cb9f3', '40163078-wf-a7ffa8390e73'):
                            topic = f'0{codes[-1][0]}/0{codes[-1][1]}'
                if b.get('type') == 'tool_result' and isinstance(b.get('content'), list) and ts >= since:
                    if tools.get(b.get('tool_use_id'), '') == 'Read':
                        continue
                    for x in b['content']:
                        if x.get('type') != 'image' or x.get('source', {}).get('type') != 'base64':
                            continue
                        try:
                            im = Image.open(io.BytesIO(base64.b64decode(x['source']['data']))).convert('RGB')
                        except Exception:
                            continue
                        if im.width < 700:
                            continue
                        shots.append(dict(key=key, topic=topic, ts=ts[:16], im=im, caption=re.sub(r'\s+', ' ', last)[-260:]))

kept = collections.defaultdict(list)
for s in shots:
    h = dhash(s['im'])
    pool = kept[s['topic']]
    if any(bin(h ^ k['hash']).count('1') <= 10 for k in pool[-40:]):
        continue
    s['hash'] = h
    pool.append(s)

shutil.rmtree(out, ignore_errors=True)
font = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 34)
summary = collections.Counter()
for topic, pool in sorted(kept.items()):
    mod = 'cost' if topic == 'cost' else topic[:2]
    tdir = os.path.join(out, mod, topic.replace('/', '-'))
    os.makedirs(tdir, exist_ok=True)
    rows = []
    for i, s in enumerate(pool, 1):
        sid = f"{topic.replace('/', '-')}-{i:03d}"
        p = os.path.join(tdir, sid + '.png')
        s['im'].save(p)
        rows.append(f"| {sid} | {s['im'].width}x{s['im'].height} | {s['ts']} | {s['caption'].replace('|', '/')} |")
    with open(os.path.join(tdir, 'index.md'), 'w', encoding='utf-8') as h:
        h.write(f"# Screenshots {topic}\n\nCaption = what the run was doing right before the screenshot.\n\n| id | size | time | caption |\n| --- | --- | --- | --- |\n" + '\n'.join(rows) + '\n')
    for start in range(0, len(pool), 12):
        chunk = pool[start:start + 12]
        tw, th = 640, 330
        sheet = Image.new('RGB', (tw * 3, (th + 46) * ((len(chunk) + 2) // 3)), 'white')
        dr = ImageDraw.Draw(sheet)
        for j, s in enumerate(chunk):
            t = s['im'].copy()
            t.thumbnail((tw - 8, th - 8))
            x, y = (j % 3) * tw, (j // 3) * (th + 46)
            sheet.paste(t, (x + 4, y + 46))
            dr.text((x + 6, y + 4), f"{topic.replace('/', '-')}-{start + j + 1:03d}", fill='#c24141', font=font)
        sheet.save(os.path.join(tdir, f'sheet-{start // 12 + 1:02d}.jpg'), quality=82)
    summary[topic] = len(pool)
print('raw', len(shots), 'kept', sum(summary.values()))
for t, n in sorted(summary.items()):
    print(t, n)
