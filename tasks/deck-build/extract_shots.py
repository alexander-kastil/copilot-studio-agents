import json, glob, os, base64, re, io, sys
from PIL import Image
root = os.path.expanduser('~/.claude/projects/D--git-classes-copilot-studio-agents')
out = sys.argv[1]
since = '2026-10-20T12'
files = [f for f in glob.glob(root + '/**/*.jsonl', recursive=True) if os.path.getmtime(f) > 1792540800 - 86400*0]
index = []
def text_of(c):
    if isinstance(c, str): return c
    if isinstance(c, list):
        return ' '.join(b.get('text', '') for b in c if isinstance(b, dict) and b.get('type') == 'text')
    return ''
for f in sorted(glob.glob(root + '/**/*.jsonl', recursive=True)):
    if os.path.getmtime(f) < 1792454400: continue
    sid = os.path.relpath(f, root).split(os.sep)[0][:8]
    agent = os.path.basename(f).replace('.jsonl', '')
    agent = 'main' if len(agent) > 30 else ('wf-' if 'workflows' in f else '') + agent.replace('agent-', '')[:12]
    first_prompt = None
    tools = {}
    last_text = ''
    n = 0
    with open(f, encoding='utf-8', errors='replace') as fh:
        for line in fh:
            try: d = json.loads(line)
            except: continue
            ts = d.get('timestamp', '')
            msg = d.get('message', {}) if isinstance(d.get('message'), dict) else {}
            c = msg.get('content')
            if d.get('type') == 'user' and first_prompt is None and agent != 'main':
                t = text_of(c).strip()
                if t: first_prompt = t[:1500]
            if not isinstance(c, list): continue
            for b in c:
                if not isinstance(b, dict): continue
                if b.get('type') == 'text' and msg.get('role') == 'assistant':
                    last_text = b['text'][-400:]
                if b.get('type') == 'tool_use':
                    tools[b['id']] = (b['name'], json.dumps(b.get('input', {}))[:600])
                if b.get('type') == 'tool_result' and isinstance(b.get('content'), list) and ts >= since:
                    tname, tin = tools.get(b.get('tool_use_id'), ('?', ''))
                    if tname == 'Read': continue
                    ctx = ' '.join(x.get('text', '') for x in b['content'] if x.get('type') == 'text')[:500]
                    for x in b['content']:
                        if x.get('type') != 'image': continue
                        src = x.get('source', {})
                        if src.get('type') != 'base64': continue
                        try:
                            im = Image.open(io.BytesIO(base64.b64decode(src['data']))).convert('RGB')
                        except Exception: continue
                        n += 1
                        d_out = os.path.join(out, f'{sid}-{agent}')
                        os.makedirs(d_out, exist_ok=True)
                        p = os.path.join(d_out, f'{n:04d}.jpg')
                        im.save(p, quality=88)
                        url = re.findall(r'https?://[^\s"\\]+', ctx + ' ' + tin)
                        index.append(dict(file=os.path.relpath(p, out).replace(os.sep, '/'), session=sid, agent=agent, ts=ts[:16], w=im.width, h=im.height, tool=tname.split('__')[-1], input=tin[:300], result=ctx[:300], before=last_text[-300:], url=url[0] if url else ''))
    if n:
        with open(os.path.join(out, f'{sid}-{agent}', 'task.txt'), 'w', encoding='utf-8') as t:
            t.write(first_prompt or '(main session)')
        print(sid, agent, n)
json.dump(index, open(os.path.join(out, 'index.json'), 'w', encoding='utf-8'), indent=1)
print('total', len(index))
