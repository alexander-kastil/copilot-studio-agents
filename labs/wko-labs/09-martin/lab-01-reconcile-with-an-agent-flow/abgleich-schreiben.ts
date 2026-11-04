type Wert = string | number | boolean;

interface Zeile {
  quelle: string;
  firma: Wert;
  pn: Wert;
  name: Wert;
  vn: Wert;
  kst: Wert;
  wert: Wert;
  anm: Wert;
}

interface Teil {
  datei: string;
  zeilen: Zeile[];
  ohneSpalten: string[];
  ohneMonat: string[];
}

function main(workbook: ExcelScript.Workbook, teil: string, bezstat: string, soll: string, monat: string): string {
  const bezTeile = lade(bezstat);
  const sollTeile = lade(soll);
  const b = doppelteEntfernen(bezTeile.flatMap(t => t.zeilen));
  const s = doppelteEntfernen(sollTeile.flatMap(t => t.zeilen));
  const ergebnis = abgleichen(b, s);
  const label = monat.trim();
  const art = teil.trim().toLowerCase();

  if (art === "bezstat") {
    schreibe(workbook, 0, "BezStat", ["Firma", "Personalnummer", "Name", "Kostenstelle", "anteilig"],
      b.map(z => [z.firma, z.pn, z.name, z.kst, z.wert]));
  } else if (art === "soll") {
    schreibe(workbook, 0, "Soll", ["Pers.Nr", "Name", "Vorname", "KST-neu", `VZÄ ${label}`],
      s.map(z => [z.pn, z.name, z.vn, z.kst, z.wert]));
  } else {
    schreibe(workbook, 0, "Differenzen", ["Firma", "Personalnummer", "Name", "BezStat_Kostenstelle", "Soll_KST-neu",
      "BezStat_Anteilig", `Soll_VZÄ_${label}`], ergebnis.differenzen);
    schreibe(workbook, 1, "Fehlerliste", ["Quelle", "Grund", "Firma", "Personalnummer", "Name", "Vorname",
      "Kostenstelle", "Anmerkung"], ergebnis.fehler);
  }

  return JSON.stringify({
    dateien: bezTeile.concat(sollTeile).map(t => t.datei),
    zeilenBezStat: b.length,
    zeilenSoll: s.length,
    differenzen: ergebnis.differenzen.length,
    fehlerliste: ergebnis.fehler.length,
    blaetterOhneSpalten: bezTeile.concat(sollTeile).flatMap(t => t.ohneSpalten),
    blaetterOhneMonat: sollTeile.flatMap(t => t.ohneMonat)
  });
}

function lade(text: string): Teil[] {
  const liste = JSON.parse(text) as (string | Teil)[];
  const teile = liste.map(t => typeof t === "string" ? JSON.parse(t) as Teil : t);
  return teile.sort((x, y) => x.datei < y.datei ? -1 : x.datei > y.datei ? 1 : 0);
}

function schluessel(wert: Wert): string {
  return wert === undefined || wert === null ? "" : String(wert).trim();
}

function leer(wert: Wert): boolean {
  return schluessel(wert) === "";
}

function zahl(wert: Wert): number | undefined {
  if (leer(wert)) {
    return undefined;
  }
  const n = Number(String(wert).replace(",", "."));
  return isNaN(n) ? undefined : n;
}

function gleich(a: Wert, b: Wert): boolean {
  const x = zahl(a);
  const y = zahl(b);
  if (x === undefined && y === undefined) {
    return schluessel(a) === schluessel(b);
  }
  if (x === undefined || y === undefined) {
    return false;
  }
  return Math.abs(x - y) < 1e-9;
}

function doppelteEntfernen(zeilen: Zeile[]): Zeile[] {
  const ergebnis: Zeile[] = [];
  const position: { [k: string]: number } = {};
  for (const z of zeilen) {
    if (leer(z.pn)) {
      ergebnis.push(z);
      continue;
    }
    const k = `${schluessel(z.pn)}|${schluessel(z.kst)}`;
    if (position[k] === undefined) {
      position[k] = ergebnis.length;
      ergebnis.push(z);
    } else if (leer(ergebnis[position[k]].wert) && !leer(z.wert)) {
      ergebnis[position[k]] = z;
    }
  }
  return ergebnis;
}

function gruppiere(zeilen: Zeile[]): Map<string, Zeile[]> {
  const gruppen = new Map<string, Zeile[]>();
  for (const z of zeilen) {
    if (leer(z.pn)) {
      continue;
    }
    const k = schluessel(z.pn);
    if (!gruppen.has(k)) {
      gruppen.set(k, []);
    }
    gruppen.get(k).push(z);
  }
  return gruppen;
}

function abgleichen(bez: Zeile[], soll: Zeile[]): { differenzen: Wert[][]; fehler: Wert[][] } {
  const proB = gruppiere(bez);
  const proS = gruppiere(soll);
  const differenzen: Wert[][] = [];

  proB.forEach((bZeilen, pn) => {
    const sZeilen = proS.get(pn);
    if (!sZeilen) {
      return;
    }
    const offenS = sZeilen.slice();
    const offenB: Zeile[] = [];
    const paare: [Zeile | undefined, Zeile | undefined][] = [];
    for (const b of bZeilen) {
      const i = offenS.findIndex(s => schluessel(s.kst) === schluessel(b.kst));
      if (i < 0) {
        offenB.push(b);
      } else {
        paare.push([b, offenS[i]]);
        offenS.splice(i, 1);
      }
    }
    for (let i = 0; i < Math.max(offenB.length, offenS.length); i++) {
      paare.push([offenB[i], offenS[i]]);
    }
    for (const [b, s] of paare) {
      if (b && s && schluessel(b.kst) === schluessel(s.kst) && gleich(b.wert, s.wert)) {
        continue;
      }
      differenzen.push([
        b ? b.firma : "",
        b ? b.pn : s.pn,
        b ? b.name : `${schluessel(s.name)} ${schluessel(s.vn)}`.trim(),
        b ? b.kst : "",
        s ? s.kst : "",
        b ? b.wert : "",
        s ? s.wert : ""
      ]);
    }
  });

  const fehler: Wert[][] = [];
  for (const b of bez) {
    const gruende: string[] = [];
    if (leer(b.pn)) {
      gruende.push("Personalnummer fehlt");
    }
    if (leer(b.name)) {
      gruende.push("Name fehlt");
    }
    if (!leer(b.pn) && !proS.has(schluessel(b.pn))) {
      gruende.push("fehlt in Soll");
    }
    if (gruende.length > 0) {
      fehler.push([b.quelle, gruende.join(", "), b.firma, b.pn, b.name, "", b.kst, ""]);
    }
  }
  for (const s of soll) {
    const gruende: string[] = [];
    if (leer(s.pn)) {
      gruende.push("Pers.Nr fehlt");
    }
    if (leer(s.name)) {
      gruende.push("Name fehlt");
    }
    if (leer(s.vn)) {
      gruende.push("Vorname fehlt");
    }
    if (!leer(s.pn) && !proB.has(schluessel(s.pn))) {
      gruende.push("fehlt in BezStat");
    }
    if (gruende.length > 0) {
      fehler.push([s.quelle, gruende.join(", "), "", s.pn, s.name, s.vn, s.kst, s.anm]);
    }
  }
  return { differenzen, fehler };
}

function schreibe(workbook: ExcelScript.Workbook, index: number, name: string, kopf: string[], zeilen: Wert[][]) {
  let blatt = workbook.getWorksheets()[index];
  if (blatt) {
    blatt.setName(name);
    blatt.getRange().clear();
  } else {
    blatt = workbook.addWorksheet(name);
  }
  const werte: Wert[][] = [kopf as Wert[]].concat(zeilen).map(z => z.map(v => v === undefined || v === null ? "" : v));
  blatt.getRangeByIndexes(0, 0, werte.length, kopf.length).setValues(werte);
}
