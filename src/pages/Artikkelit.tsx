import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import ServicePageHero from '@/components/ServicePageHero';
import ToimintaAlueetBanner from '@/components/ToimintaAlueetBanner';
import { getResponsiveSrc, getResponsiveSrcSet } from '@/lib/storage';

const heroBase = 'kirkkaan-punainen-tiilikatto-pinnoituksen-jalkeen';

const articles = [
  {
    slug: 'milloin-pinnoittaa-tiilikatto',
    title: 'Milloin tiilikatto pitää pinnoittaa? — 5 merkkiä',
    excerpt:
      'Epäiletkö kattosi kuntoa? Lue viisi selkeää merkkiä, jotka kertovat milloin pinnoituksen aika on käsillä.',
    imageBase: 'kirkkaan-punainen-tiilikatto-pinnoituksen-jalkeen',
  },
];

const Artikkelit = () => {
  return (
    <div>
      <SEO
        title="Artikkelit ja oppaat"
        description="Lue Pintasen oppaat tiilikaton pinnoituksesta, katon huollosta ja talon maalauksesta. Käytännön neuvoja pirkanmaalaisilta ammattilaisilta."
      />

      <ServicePageHero
        title=""
        subtitle=""
        backgroundImage={getResponsiveSrc(heroBase)}
        backgroundSrcSet={getResponsiveSrcSet(heroBase)}
      >
        <div className="bg-black/45 rounded-2xl p-4 md:p-8 max-w-4xl mx-auto text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Artikkelit ja{' '}
            <span className="text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">oppaat</span>
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed">
            Käytännön neuvoja <strong>tiilikaton pinnoituksesta</strong>, katon huollosta ja talon maalauksesta — kirjoitettuna pirkanmaalaisten ammattilaisten näkökulmasta.
          </p>
        </div>
      </ServicePageHero>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/artikkelit/${article.slug}`}
                  className="group block bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={getResponsiveSrc(article.imageBase)}
                      srcSet={getResponsiveSrcSet(article.imageBase)}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
                    <span className="inline-block mt-4 text-accent font-semibold">
                      Lue artikkeli →
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ToimintaAlueetBanner />
    </div>
  );
};

export default Artikkelit;
