/**
 * Keskitetty arvosteludata + kaupunkikohtainen mappaus.
 *
 * Aluesivut (ServiceAreaPage) saavat oman 4 arvostelun setin
 * `getTestimonialsForCity(slug)` -funktion kautta. Arvostelut
 * syklittyvät kaupunkien välillä, jotta jokainen aluesivu näyttää
 * eri yhdistelmän (auttaa myös duplicate content -mielikuvaa).
 */

export interface Testimonial {
  /** Asiakkaan nimi (Google-arvostelusta, sanasta sanaan). */
  name: string;
  /** 1-5 tähteä. */
  stars: number;
  /** Arvostelun teksti, sanasta sanaan. ÄLÄ lyhennä. */
  text: string;
}

/** Master-lista kaikista käytettävissä olevista arvosteluista. */
export const allTestimonials: Testimonial[] = [
  {
    name: "Anna-Riitta Taipale",
    stars: 5,
    text: "Katon pesu ja maalaus hoitui aikataulussa. Työnjälki on hyvä ja ammattitaidolla tehty. Olemme olleet tyytyväisiä.",
  },
  {
    name: "J S",
    stars: 5,
    text: "Reipas nuorimies joka tuli sovittuna ajankohtana.Korjasi,pesi ja maalasi tiilikaton sovitun hinnan mukaan.Hyvin tehty työ.",
  },
  {
    name: "Mauri Rajuvaara",
    stars: 5,
    text: "Excellent quality of work within agreed budget and time frame",
  },
  {
    name: "Juuso Heimonen",
    stars: 5,
    text: "Erittäin hyvää palvelua. Urakka valmistui juuri niin kuin sovittiin ja työn jälki oli erinomaista. Suosittelen!",
  },
  {
    name: "Timo Leppänen",
    stars: 5,
    text: "Erittäin toimiva palvelu; hyvä yhteydenpito, siisti työnjälki ja ripeää toimintaa! Suosittelen!",
  },
  {
    name: "Timo Piilonen",
    stars: 5,
    text: "Eerik Pitkänen teki hyvän tarjouksen kattomaalauksesta ja -pinnoituksesta. Tarjous piti hyvin, työn laatu oli loistava ja itse työ sujui aikataulun mukaisesti. Erityisesti jäivät mieleen työn jälkien siistiminen ja maalarin hyvä raportointi tehdyistä toimista. Suosittelen lämpimästi.",
  },
  {
    name: "Terttu Anneli",
    stars: 4,
    text: "Olemme tyytyväisiä työhön. Katollammme oli runsaasti sammalta jonka puhdistus ja käsittely tuli tarpeeseen.",
  },
];

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

  // Deterministinen offset slugista (yksinkertainen char-summa).
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
