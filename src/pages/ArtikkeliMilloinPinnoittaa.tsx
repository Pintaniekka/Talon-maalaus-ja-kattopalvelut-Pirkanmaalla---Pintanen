import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';
import SEO from '@/components/SEO';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceContactSection from '@/components/ServiceContactSection';
import ToimintaAlueetBanner from '@/components/ToimintaAlueetBanner';
import FAQSection from '@/components/FAQSection';
import { getResponsiveSrc, getResponsiveSrcSet } from '@/lib/storage';

const heroBase = 'punainen-tiilikatto-kattopinnoitus-ja-huolto-jalkeen';
const img1 = 'haalistunut-punainen-tiilikatto-ennen-pinnoitusta';
const img2 = 'sammaleinen-tiilikatto-ennen-mekaanista-puhdistusta';
const img3 = 'uutta-vastaava-tiilikatto-pesu-ja-suojakasittely';
const imgWide = 'tummanharmaa-tiilikaton-pinnoitus-ja-huolto-jalkeen';

const trustStats = [
  { value: '4,9 / 5', label: 'Google-arvostelut' },
  { value: 'Yli 100', label: 'Pinnoitettua kattoa' },
  { value: '5 vuotta', label: 'Kirjallinen takuu' },
];

const faqItems = [
  {
    question: 'Kuinka paljon tiilikaton pinnoitus maksaa?',
    answer:
      'Hinta riippuu aina katon pinta-alasta, jyrkkyydestä ja nykykunnosta, mutta se on poikkeuksetta vain murto-osa täysin uuden katon asennuksen hinnasta. Teemme aina ilmaisen arviokäynnin kohteessa, jonka pohjalta saat tarkan ja pitävän tarjouksen. Työ on myös täysin kotitalousvähennyskelpoista.',
  },
  {
    question: 'Kauanko tiilikaton pinnoitustyö kestää?',
    answer:
      'Tyypillinen omakotitalon tiilikaton huoltoprosessi pesusta valmiiseen, kahteen kertaan maalattuun pintaan vie kohteesta riippuen 2–4 työpäivää. Työ tehdään ulkona, joten se ei häiritse normaalia asumista talossa.',
  },
  {
    question: 'Kuinka pitkän takuun annatte työlle?',
    answer:
      'Myönnämme kaikille tekemillemme tiilikaton pinnoituksille täyden 5 vuoden kirjallisen takuun. Käytämme työssä vain markkinoiden parhaita, Suomen sääolosuhteisiin suunniteltuja ammattilaistason materiaaleja.',
  },
  {
    question: 'Kannattaako katto pestä ja pinnoittaa itse?',
    answer:
      'Kevyempi roskien poisto onnistuu omatoimisesti, mutta pinnoitusta edeltävä syväpesu vaatii erittäin tehokkaan polttomoottoripesurin, jotta huokosiin kertynyt lika ja sammal saadaan oikeasti irti. Myös pinnoitteen levittäminen kestävästi ja tasaisesti edellyttää ammattitason korkeapaineruiskua. Ammattilaisen tekemänä saat työlle takuun ja varmuuden siitä, ettei pesuvettä paineta vahingossa aluskatteen läpi rakenteisiin.',
  },
  {
    question: 'Mihin vuodenaikaan pinnoituksen voi tehdä?',
    answer:
      'Katon pesuja ja pinnoituksia voidaan tehdä keväästä pitkälle syksyyn. Sääolosuhteet ovat ainoa rajoittava tekijä: lämpötilan on oltava plussan puolella ja katon pinnan on ehdittävä kuivua kunnolla pesun ja maalauskertojen välissä. Asiantuntijamme arvioivat aina sääikkunan sopivuuden ennen työn aloitusta.',
  },
];

const CTAButton = ({ children, to = '#yhteystiedot' }: { children: React.ReactNode; to?: string }) => (
  <a
    href={to}
    className="inline-block bg-accent text-accent-foreground font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
  >
    {children}
  </a>
);

const SectionImage = ({
  base,
  alt,
  side = 'left',
  children,
}: {
  base: string;
  alt: string;
  side?: 'left' | 'right';
  children: React.ReactNode;
}) => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <div
        className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto ${
          side === 'right' ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-md"
        >
          <img
            src={getResponsiveSrc(base)}
            srcSet={getResponsiveSrcSet(base)}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt={alt}
            className="w-full h-auto object-cover block"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  </section>
);

const ArtikkeliMilloinPinnoittaa = () => {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Milloin tiilikatto pitää pinnoittaa? — 5 merkkiä, että aika on nyt',
    description:
      'Epäiletkö, onko kattosi pinnoituksen aika? Lue 5 selkeää merkkiä, jotka kertovat milloin tiilikaton pinnoitus on välttämätön.',
    image: getResponsiveSrc(heroBase),
    author: { '@type': 'Organization', name: 'Pintanen Oy' },
    publisher: {
      '@type': 'Organization',
      name: 'Pintanen Oy',
    },
  };

  return (
    <div>
      <SEO
        title="Milloin tiilikatto pitää pinnoittaa? 5 merkkiä"
        description="Epäiletkö, onko kattosi pinnoituksen aika? Lue 5 selkeää merkkiä, jotka kertovat milloin tiilikaton pinnoitus on välttämätön. Ilmainen arvio Pirkanmaalla."
        ogImage={getResponsiveSrc(heroBase)}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      {/* HERO */}
      <ServicePageHero
        title=""
        subtitle=""
        backgroundImage={getResponsiveSrc(heroBase)}
        backgroundSrcSet={getResponsiveSrcSet(heroBase)}
      >
        <div className="bg-black/25 backdrop-blur-md rounded-2xl p-6 max-w-3xl mx-auto text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Milloin tiilikatto pitää pinnoittaa? —{' '}
            <span className="text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">5 merkkiä</span>, että aika on nyt
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed">
            Tiilikatto kannattaa yleensä pinnoittaa, kun <strong>väri haalistuu</strong>, pinta muuttuu <strong>huokoiseksi</strong> tai <strong>sammal alkaa palata nopeasti</strong> puhdistuksen jälkeen. Useimmiten tämä tapahtuu noin <strong>10–15 vuoden kohdalla</strong>.
          </p>
        </div>
      </ServicePageHero>

      {/* Trust grid */}
      <section className="py-10 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl p-5 text-center shadow-sm border border-border/50"
              >
                <p className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-sm font-semibold text-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro: Pitääkö tiilikatto pinnoittaa */}
      <section className="section-padding bg-secondary">
        <div className="section-container max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Pitääkö tiilikatto pinnoittaa?</h2>
            <ul className="space-y-3 text-lg text-foreground list-disc list-inside mb-6">
              <li>Väri on haalistunut</li>
              <li>Sammal palaa nopeasti</li>
              <li>Pinta tuntuu karhealta</li>
              <li>Tiilissä näkyy halkeamia</li>
              <li>Katto on yli 10 vuotta vanha</li>
            </ul>
            <p className="text-lg text-muted-foreground">
              → Jos tunnistat näistä useamman, <strong className="text-foreground">pinnoitus kannattaa yleensä tehdä lähiaikoina</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Väri haalistunut */}
      <SectionImage base={img1} alt="Haalistunut tiilikatto ennen pinnoitusta — suojapinta kulunut" side="left">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
          1. Väri on haalistunut tai muuttunut epätasaiseksi
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            Uusi tiilikatto on väriltään <strong className="text-foreground">tasainen ja kiinteä</strong>. Kun alkuperäinen tehdaspinnoite alkaa kulua, väri haalistuu — usein ensin etelään tai länteen päin olevilla lappeilla.
          </p>
          <p>
            Jos kattosi näyttää "kulahtaneelta" tai väri vaihtelee lappeiden välillä, suojapinta on ohentunut. Tiili on alkanut <strong className="text-foreground">imeä vettä</strong>, mikä kiihdyttää rapautumista erityisesti pakkasen tullessa.
          </p>
        </div>
      </SectionImage>

      {/* 2. Sammal palaa */}
      <SectionImage base={img2} alt="Sammaloitunut tiilikatto ennen ammattimaista puhdistusta" side="right">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
          2. Sammal kasvaa nopeasti takaisin puhdistuksen jälkeen
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            Sammal tarvitsee kasvualustakseen <strong className="text-foreground">huokoisen ja kostean pinnan</strong>. Jos olet puhdistanut katon muutama vuosi sitten mutta sammal on jo palannut, se kertoo yhden asian: tiilen pinta on niin kulunut, että se imee kosteutta ja tarjoaa sammaleelle ihanteelliset kasvuolosuhteet.
          </p>
          <p>
            Pelkkä puhdistus ei enää riitä — tiili tarvitsee <strong className="text-foreground">uuden suojaavan pinnoitteen</strong>, joka tekee pinnasta vettä hylkivän ja estää sammalen kiinnittymisen.
          </p>
          <div className="pt-2">
            <Link
              to="/katon-puhdistus-pirkanmaa"
              className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Tiilikaton mekaaninen puhdistus ja käsittely →
            </Link>
          </div>
        </div>
      </SectionImage>

      {/* 3. Karhea pinta */}
      <SectionImage base={img3} alt="Tuore tiilikaton pinnoite lähikuvassa — vettähylkivä sileä pinta" side="left">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
          3. Tiilien pinta tuntuu karhealta tai hiekkapaperimaiselta
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            Tämän testin voit tehdä itse: kosketa katon tiiltä turvallisesti maasta käsin tai tikkaita pitkin. Uusi tai hyväkuntoinen tiili tuntuu <strong className="text-foreground">sileältä ja kovalta</strong>. Kulunut tiili tuntuu karhealta — lähes kuin hiekkapaperista.
          </p>
          <p>
            Karhea pinta tarkoittaa, että tiilen suojakerros on murtunut ja tiili on muuttunut huokoiseksi. Huokoinen tiili imee vettä, joka talvella jäätyy tiilen sisällä ja laajentuu — tästä syntyy <strong className="text-foreground">pakkasrapautuminen</strong>, joka halkaisee tiilet vuosien saatossa.
          </p>
        </div>
      </SectionImage>

      {/* Review card + CTA */}
      <section className="py-12 bg-background">
        <div className="section-container max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-md border border-border"
          >
            <div className="flex items-center gap-1 mb-3" aria-label="5 tähteä">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg text-foreground italic mb-4">
              "Työt hoitui sovitusti ja työn jälki siistiä. Iso suositus kaikille kattohuoltoa tarvitseville!"
            </p>
            <p className="font-semibold text-foreground">— Jukka Jukarainen</p>
          </motion.div>
          <div className="text-center mt-8">
            <CTAButton>Pyydä Pintasen ilmainen arvio tiilikaton pinnoituksesta</CTAButton>
          </div>
        </div>
      </section>

      {/* 4. Halkeamia */}
      <section className="section-padding bg-secondary">
        <div className="section-container max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              4. Tiilessä näkyy halkeamia tai lohkeamia
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Halkeilevat tiilet ovat merkki siitä, että <strong className="text-foreground">vesi on jo päässyt tiilen sisärakenteeseen</strong>. Jäätymis-sulamissykli on alkanut tehdä tuhojaan. Tässä vaiheessa tilanne on jo kiireellisempi — yksittäiset rikkinäiset tiilet vaihdetaan uusiin ennen pinnoitusta.
              </p>
              <p>
                Jos halkeamia on paljon, pelkkä pinnoitus ei enää riitä vaan katto vaatii laajemman kuntoarvion. Siksi teemmekin <strong className="text-foreground">jokaiselle kohteelle ilmaisen arviokäynnin</strong> ennen työn aloittamista.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Yli 10 vuotta */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              5. Katto on yli 10–15 vuotta vanha eikä sitä ole koskaan pinnoitettu
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                Tiilikaton tehdaspinnoite kestää tyypillisesti <strong className="text-foreground">10–15 vuotta</strong> riippuen ilmasto-olosuhteista, katon suuntauksesta ja puiden varjostuksesta. Jos kattosi on tässä iässä eikä sitä ole koskaan huollettu ammattimaisesti, pinnoituksen aika on todennäköisesti jo käsillä — vaikka selviä vaurioita ei vielä näkyisi.
              </p>
              <p>
                Ennaltaehkäisevä pinnoitus on aina <strong className="text-foreground">halvempaa</strong> kuin rikkinäisten tiilien vaihto tai pahimmassa tapauksessa koko katon uusiminen.
              </p>
            </div>
            <CTAButton>Pyydä ilmainen arvio</CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Mitä pinnoitus tarkoittaa + wide image */}
      <section className="section-padding bg-secondary">
        <div className="section-container max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Mitä pinnoitus käytännössä tarkoittaa?
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-8">
              <img
                src={getResponsiveSrc(imgWide)}
                srcSet={getResponsiveSrcSet(imgWide)}
                sizes="100vw"
                alt="Ammattimaisesti pinnoitettu tummanharmaa tiilikatto Pirkanmaalla"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <ul className="space-y-3 text-lg text-foreground list-disc list-inside mb-6">
              <li>Tiilikaton huolellinen pesu ja huuhtelu.</li>
              <li>Kasvustonestokäsittely, joka tuhoaa sammalen juuret syvältä tiilestä.</li>
              <li>Rikkinäisten tiilien vaihto uusiin.</li>
              <li>Kaksi kerrosta laadukasta pinnoitusmaalia ruiskutettuna.</li>
            </ul>
            <p className="text-lg text-muted-foreground mb-6">
              Työ kestää <strong className="text-foreground">2–4 työpäivää</strong>. <strong className="text-foreground">5 vuoden kirjallinen takuu</strong>. Kotitalousvähennys.
            </p>
            <Link
              to="/tiilikaton-pinnoitus-pirkanmaa"
              className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Tiilikaton pinnoitus →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA intro */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Epäiletkö kattosi kuntoa? Pyydä ilmainen arvio.
            </h2>
            <p className="text-lg text-muted-foreground">
              Paras tapa selvittää kattosi todellinen kunto on <strong className="text-foreground">ilmainen arviokäynti</strong>. Tulemme paikan päälle, arvioimme katon kunnon ja kerromme rehellisesti, kannattaako pinnoitus tehdä nyt vai vielä odottaa.
            </p>
          </motion.div>
        </div>
      </section>

      <ServiceContactSection variant="katto" />
      <FAQSection items={faqItems} />
      <ToimintaAlueetBanner />
    </div>
  );
};

export default ArtikkeliMilloinPinnoittaa;
