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

interface Monat {
  jahr: number;
  monat: number;
  serial: number;
}

const MONATE: { [name: string]: number } = {
  "jän": 1, "jan": 1, "feb": 2, "mär": 3, "mrz": 3, "mar": 3, "apr": 4, "mai": 5, "may": 5,
  "jun": 6, "jul": 7, "aug": 8, "sep": 9, "sept": 9, "okt": 10, "oct": 10, "nov": 11, "dez": 12, "dec": 12
};

const BEZSTAT_SPALTEN: { [feld: string]: string[] } = {
  firma: ["firma"],
  pn: ["personalnummer", "persnr", "pnr"],
  name: ["name"],
  kst: ["kostenstelle", "kst", "kstneu"],
  wert: ["anteilig"]
};

const SOLL_SPALTEN: { [feld: string]: string[] } = {
  kst: ["kstneu", "kostenstelle", "kst"],
  pn: ["persnr", "personalnummer", "pnr"],
  name: ["name"],
  vn: ["vorname"]
};

function main(workbook: ExcelScript.Workbook, art: string, monat: string): string {
  const bezstat = art.trim().toLowerCase() === "bezstat";
  const spalten = bezstat ? BEZSTAT_SPALTEN : SOLL_SPALTEN;
  const ziel = leseMonat(monat);
  if (!bezstat && !ziel) {
    throw new Error(`Monat '${monat}' ist nicht im Format MMM.JJJJ, zum Beispiel Mai.2026`);
  }
  const datei = workbook.getName();
  const zeilen: Zeile[] = [];
  const ohneSpalten: string[] = [];
  const ohneMonat: string[] = [];

  for (const blatt of workbook.getWorksheets()) {
    const quelle = `${datei} / ${blatt.getName()}`;
    const benutzt = blatt.getUsedRange(true);
    if (!benutzt) {
      ohneSpalten.push(quelle);
      continue;
    }
    const zeilenAnzahl = benutzt.getRowIndex() + benutzt.getRowCount();
    const spaltenAnzahl = Math.min(benutzt.getColumnIndex() + benutzt.getColumnCount(), 300);
    const oben = blatt.getRangeByIndexes(0, 0, Math.min(15, zeilenAnzahl), spaltenAnzahl).getValues();
    const kopf = findeKopf(oben, spalten);
    if (kopf < 0) {
      ohneSpalten.push(quelle);
      continue;
    }
    const namen = oben[kopf].map(normiere);
    const index: { [feld: string]: number } = {};
    for (const feld of Object.keys(spalten)) {
      index[feld] = spalten[feld].map(alias => namen.indexOf(alias)).filter(i => i >= 0)[0];
    }
    if (!bezstat) {
      index["wert"] = oben[kopf].findIndex(v => istMonat(v, ziel));
      index["anm"] = namen.indexOf("anmerkung");
      if (index["wert"] < 0) {
        ohneMonat.push(quelle);
      }
    }
    const anzahl = zeilenAnzahl - kopf - 1;
    if (anzahl <= 0) {
      continue;
    }
    const daten: { [feld: string]: Wert[] } = {};
    for (const feld of ["firma", "pn", "name", "vn", "kst", "wert", "anm"]) {
      const spalte = index[feld];
      daten[feld] = spalte === undefined || spalte < 0
        ? new Array<Wert>(anzahl).fill("")
        : blatt.getRangeByIndexes(kopf + 1, spalte, anzahl, 1).getValues().map(z => z[0]);
    }
    for (let i = 0; i < anzahl; i++) {
      const zeile: Zeile = {
        quelle,
        firma: daten["firma"][i],
        pn: daten["pn"][i],
        name: daten["name"][i],
        vn: daten["vn"][i],
        kst: daten["kst"][i],
        wert: daten["wert"][i],
        anm: daten["anm"][i]
      };
      if (leer(zeile.pn) && leer(zeile.name) && leer(zeile.vn)) {
        continue;
      }
      zeilen.push(zeile);
    }
  }
  return JSON.stringify({ datei, zeilen, ohneSpalten, ohneMonat });
}

function findeKopf(oben: Wert[][], spalten: { [feld: string]: string[] }): number {
  for (let z = 0; z < oben.length; z++) {
    const namen = oben[z].map(normiere);
    const alle = Object.keys(spalten).every(feld => spalten[feld].some(alias => namen.indexOf(alias) >= 0));
    if (alle) {
      return z;
    }
  }
  return -1;
}

function normiere(wert: Wert): string {
  return String(wert).replace(/[\s._\-]/g, "").toLowerCase();
}

function leer(wert: Wert): boolean {
  return wert === undefined || wert === null || String(wert).trim() === "";
}

function leseMonat(text: string): Monat | undefined {
  const treffer = /^\s*([A-Za-zÄäÖöÜü]{3,4})\.?\s*(\d{4})\s*$/.exec(String(text));
  if (!treffer || MONATE[treffer[1].toLowerCase()] === undefined) {
    return undefined;
  }
  const jahr = Number(treffer[2]);
  const monat = MONATE[treffer[1].toLowerCase()];
  const serial = Math.round((Date.UTC(jahr, monat - 1, 1) - Date.UTC(1899, 11, 30)) / 86400000);
  return { jahr, monat, serial };
}

function istMonat(wert: Wert, ziel: Monat | undefined): boolean {
  if (!ziel) {
    return false;
  }
  if (typeof wert === "number") {
    return wert === ziel.serial;
  }
  const monat = leseMonat(String(wert));
  return monat !== undefined && monat.jahr === ziel.jahr && monat.monat === ziel.monat;
}
