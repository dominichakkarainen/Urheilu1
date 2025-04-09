// henkilo.js

class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }

  getKokoNimi() {
    return `${this.etunimet} ${this.sukunimi}`;
  }

  getIka() {
    const vuosi = new Date().getFullYear();
    return vuosi - this.syntymavuosi;
  }
}

class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    kuva,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this._kuva = kuva;
    this._omapaino = omapaino;
    this._laji = laji;
    this._saavutukset = saavutukset;
  }

  // get ja set

  get kuva() {
    return this._kuva;
  }

  set kuva(url) {
    this._kuva = url;
  }

  get omapaino() {
    return this._omapaino;
  }

  set omapaino(paino) {
    this._omapaino = paino;
  }

  get laji() {
    return this._laji;
  }

  set laji(laji) {
    this._laji = laji;
  }

  get saavutukset() {
    return this._saavutukset;
  }

  set saavutukset(saavutukset) {
    this._saavutukset = saavutukset;
  }

  tulostaTiedot() {
    console.log(`Nimi: ${this.getKokoNimi()} (${this.kutsumanimi})`);
    console.log(`Ikä: ${this.getIka()}`);
    console.log(`Laji: ${this.laji}`);
    console.log(`Omapaino: ${this.omapaino} kg`);
    console.log(`Kuva: ${this.kuva}`);
    console.log(`Saavutukset: ${this.saavutukset.join(", ")}`);
    console.log("---");
  }
}

const urheilija1 = new Urheilija(
  "Mikael",
  "Granlund",
  "Mikke",
  1992,
  "https://api.mtvuutiset.fi/graphql/caas/v1/media/8644700/data/3de4a1a0a662513570d12b7da8be295a/landscape16_9/1024/7-17554420.jpg",
  84,
  "Jääkiekko",
  ["MM-kulta 2011", "NHL-ura useissa seuroissa"]
);

const urheilija2 = new Urheilija(
  "Kaisa",
  "Mäkäräinen",
  "Kaisa",
  1983,
  "https://img.ilcdn.fi/Moxvvdypy_gMsz7z-w_nM2sZMic=/full-fit-in/920x0/img-s3.ilcdn.fi/3acb6b45d6af76201a53aecdfdfc3bd5d42d985d5988f694cc6e0f438e6b75e0.jpg",
  60,
  "Ampumahiihto",
  ["Maailmancupin voitto 2011", "MM-hopea 2011"]
);

// tulostaa urheilijoiden tiedot
urheilija1.tulostaTiedot();
urheilija2.tulostaTiedot();
