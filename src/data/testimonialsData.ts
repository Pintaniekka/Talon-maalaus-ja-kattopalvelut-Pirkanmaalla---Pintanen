/**
 * Keskitetty arvosteludata + kaupunki- ja kategoriajakauma.
 *
 * `category` luokittelee arvostelun:
 *  - "katto" → katto- tai pinnoitustöitä koskevat arviot
 *  - "seina" → talon-/seinämaalausta koskevat arviot
 *  - "yleinen" → ei selvää kohdetta; näkyy vain yleisessä karusellissa
 */

export type TestimonialCategory = "katto" | "seina" | "yleinen";

export interface Testimonial {
  /** Asiakkaan nimi (Google-arvostelusta, sanasta sanaan). */
  name: string;
  /** 1-5 tähteä. */
  stars: number;
  /** Arvostelun teksti, sanasta sanaan. ÄLÄ lyhennä. */
  text: string;
  /** Mihin palvelukategoriaan arvio liittyy. */
  category: TestimonialCategory;
}

/** Master-lista kaikista käytettävissä olevista arvosteluista. */
export const allTestimonials: Testimonial[] = [
  {
    name: "Anna-Riitta Taipale",
    stars: 5,
    text: "Katon pesu ja maalaus hoitui aikataulussa. Työnjälki on hyvä ja ammattitaidolla tehty. Olemme olleet tyytyväisiä.",
    category: "katto",
  },
  {
    name: "J S",
    stars: 5,
    text: "Reipas nuorimies joka tuli sovittuna ajankohtana.Korjasi,pesi ja maalasi tiilikaton sovitun hinnan mukaan.Hyvin tehty työ.",
    category: "katto",
  },
  {
    name: "Mauri Rajuvaara",
    stars: 5,
    text: "Excellent quality of work within agreed budget and time frame",
    category: "yleinen",
  },
  {
    name: "Juuso Heimonen",
    stars: 5,
    text: "Erittäin hyvää palvelua. Urakka valmistui juuri niin kuin sovittiin ja työn jälki oli erinomaista. Suosittelen!",
    category: "yleinen",
  },
  {
    name: "Timo Leppänen",
    stars: 5,
    text: "Erittäin toimiva palvelu; hyvä yhteydenpito, siisti työnjälki ja ripeää toimintaa! Suosittelen!",
    category: "yleinen",
  },
  {
    name: "Timo Piilonen",
    stars: 5,
    text: "Eerik Pitkänen teki hyvän tarjouksen kattomaalauksesta ja -pinnoituksesta. Tarjous piti hyvin, työn laatu oli loistava ja itse työ sujui aikataulun mukaisesti. Erityisesti jäivät mieleen työn jälkien siistiminen ja maalarin hyvä raportointi tehdyistä toimista. Suosittelen lämpimästi.",
    category: "katto",
  },
  {
    name: "Terttu Anneli",
    stars: 4,
    text: "Olemme tyytyväisiä työhön. Katollammme oli runsaasti sammalta jonka puhdistus ja käsittely tuli tarpeeseen.",
    category: "katto",
  },
  {
    name: "Jukka Peurala",
    stars: 5,
    text: "Haluan vilpittömästi kiittää upeasta työnjäljestä ja loistavasta palvelusta! Kattomaalaus toteutettiin äärimmäisen ammattitaidolla alusta loppuun asti. Työn jälki on ensiluokkaista – katto näyttää kuin uudelta, ja lopputulos ylitti reilusti odotuksemme. Erityisesti arvostan työn sujuvuutta ja tehokkuutta. Projekti hoidettiin nopeasti mutta huolellisesti. Kaikesta tekemisestä huokui vahva kokemus ja osaaminen. Lisäksi työskentely oli siistiä ja järjestelmällistä, mikä teki koko kokemuksesta erittäin miellyttävän. Kommunikointi oli selkeää ja ystävällistä koko prosessin ajan, ja sovituista asioista pidettiin kiinni täsmällisesti. Suosittelen lämpimästi! 👍",
    category: "katto",
  },
  {
    name: "Päivi Tuominen",
    stars: 5,
    text: "Hirsimökin maalausurakka sujui todella sujuvasti ja hyvin alusta loppuun asti. Vahva suositus.",
    category: "seina",
  },
  {
    name: "Satu Junkkila",
    stars: 5,
    text: "Olemme erittäin tyytyväisiä vanhempieni rintamamiestalon maalaukseen. Kaikki sujui kuten oli sovittu ja luvattu. Työnjälki on laadukasta ja maalausurakka pysyi täysin luvatussa aikataulussa. Palvelu oli ystävällistä, iloista ja asiantuntevaa. Kiitokset vielä täältä Orivedeltä ☺️",
    category: "seina",
  },
  {
    name: "Jukka Jukarainen",
    stars: 5,
    text: "Työt hoitui sovitusti ja työn jälki siistiä. Iso suositus kaikille kattohuoltoa tarvitseville!",
    category: "katto",
  },
  {
    name: "Antti Esko",
    stars: 5,
    text: "Eerik Pitkänen, Pintanen Oy teki meille tiilikaton puhdistuksen, sammaleenestokäsittelyn sekä pinnoituksen. Asiointi, yhteydenpito, työn suunnittelu ja itse työn jälki oli huippuluokkaa. Jälkitöistä siivouksineen ei jäänyt myöskään vaimollakaan moitittavaa. Vahva suositus.",
    category: "katto",
  },
];

/** Vain kattoon liittyvät arviot. */
export const roofTestimonials: Testimonial[] = allTestimonials.filter(
  (t) => t.category === "katto",
);

/** Vain seinä-/talonmaalaukseen liittyvät arviot. */
export const wallTestimonials: Testimonial[] = allTestimonials.filter(
  (t) => t.category === "seina",
);

/**
 * Valitsee deterministisesti N arvostelua kaupungin slugin perusteella
 * syklittäen master-listaa. Sama slug → aina sama setti samassa
 * järjestyksessä, mutta naapurikaupungit saavat eri yhdistelmän.
 */
export const getTestimonialsForCity = (
  citySlug: string,
  count = 4,
): Testimonial[] => {
  const total = allTestimonials.length;
  if (total === 0) return [];

  let offset = 0;
  for (let i = 0; i < citySlug.length; i++) {
    offset = (offset + citySlug.charCodeAt(i)) % total;
  }

  const picked: Testimonial[] = [];
  for (let i = 0; i < Math.min(count, total); i++) {
    picked.push(allTestimonials[(offset + i) % total]);
  }
  return picked;
};
