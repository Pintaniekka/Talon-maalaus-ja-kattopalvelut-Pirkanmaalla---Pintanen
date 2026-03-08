import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceContactSection from '@/components/ServiceContactSection';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import { getStorageUrl, getImageSrcSet } from '@/lib/storage';

type Category = 'all' | 'pinnoitus' | 'puhdistus' | 'maalaus';

interface ProjectImage {
  src: string;
  label: string;
}

interface GroupedProject {
  type: 'group';
  title: string;
  category: Category;
  images: ProjectImage[];
}

interface SingleProject {
  type: 'single';
  image: string;
  title: string;
  category: Category;
}

type Project = GroupedProject | SingleProject;

const CompositeThumbnail = ({ images }: { images: ProjectImage[] }) => (
  <div className="relative w-full h-full flex overflow-hidden">
    {images.map((img, idx) => (
      <div key={idx} className="h-full overflow-hidden" style={{ width: `${100 / images.length}%` }}>
        <OptimizedImage
          src={img.src}
          srcSet={getImageSrcSet(img.src)}
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={img.label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={{
            objectPosition: idx === 0 ? 'left center' : idx === images.length - 1 ? 'right center' : 'center center',
          }}
        />
      </div>
    ))}
  </div>
);

const Lightbox = ({
  project,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
}: {
  project: GroupedProject;
  currentIndex: number;
  onClose: () => void;
  onPrev: (e: React.MouseEvent) => void;
  onNext: (e: React.MouseEvent) => void;
  onSelectIndex: (idx: number) => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    onClick={onClose}
  >
    <button className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10" onClick={onClose}>
      <X className="w-8 h-8" />
    </button>

    {project.images.length > 1 && (
      <>
        <button
          className={`absolute left-4 p-3 rounded-full bg-black/50 text-white transition-all z-10 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/70'}`}
          onClick={onPrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className={`absolute right-4 p-3 rounded-full bg-black/50 text-white transition-all z-10 ${currentIndex === project.images.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/70'}`}
          onClick={onNext}
          disabled={currentIndex === project.images.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </>
    )}

    <div className="flex flex-col items-center max-w-5xl w-full">
      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        src={project.images[currentIndex].src}
        alt={project.images[currentIndex].label}
        className="max-w-full max-h-[75vh] object-contain rounded-lg"
        loading="eager"
        decoding="async"
        onClick={(e) => e.stopPropagation()}
      />

      {project.images.length > 1 && (
        <>
          <div className="mt-4 text-center">
            <p className="text-white text-lg font-medium">{project.images[currentIndex].label}</p>
            <p className="text-white/60 text-sm mt-1">{currentIndex + 1} / {project.images.length}</p>
          </div>
          <div className="flex gap-2 mt-4">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); onSelectIndex(idx); }}
                className={`relative w-16 h-12 rounded overflow-hidden border-2 transition-all ${idx === currentIndex ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  </motion.div>
);

const Referenssit = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<GroupedProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'Kaikki' },
    { key: 'pinnoitus', label: 'Tiilikaton pinnoitus' },
    { key: 'puhdistus', label: 'Katon puhdistus' },
    { key: 'maalaus', label: 'Talon maalaus' },
  ];

  const projects: Project[] = [
    {
      type: 'group',
      title: 'Tiilikaton pinnoitus – Valkeakoski',
      category: 'pinnoitus',
      images: [
        { src: getStorageUrl('Muut_referenssit/punainen-tiilikatto-maalaus-ennen-valkeakoski.webp'), label: 'Kulunut punainen tiilikatto ennen huoltomaalausta Valkeakoskella' },
        { src: getStorageUrl('Muut_referenssit/punainen-tiilikatto-maalaus-jalkeen-valkeakoski.webp'), label: 'Huoltomaalattu punainen tiilikatto Valkeakoskella' },
      ],
    },
    {
      type: 'group',
      title: 'Tiilikaton pinnoitus – Tampere',
      category: 'pinnoitus',
      images: [
        { src: getStorageUrl('Muut_referenssit/punainen-tiilikatto-maalaus-ennen-tampere.webp'), label: 'Haalistunut punainen tiilikatto ennen kattomaalausta Tampereella' },
        { src: getStorageUrl('Muut_referenssit/punainen-tiilikatto-maalaus-jalkeen-tampere.webp'), label: 'Valmis punainen tiilikatto kattomaalauksen jälkeen Tampereella' },
      ],
    },
    {
      type: 'group',
      title: 'Tiilikaton puhdistus – Sastamala',
      category: 'puhdistus',
      images: [
        { src: getStorageUrl('Muut_referenssit/Katto-ennen-mekaaninen-puhdistus-sastamala.webp'), label: 'Sammaloitunut tiilikatto ennen mekaanista puhdistusta Sastamalassa' },
        { src: getStorageUrl('Muut_referenssit/katto-jalkeen-mekaaninen-puhdistus-sastamala.webp'), label: 'Mekaanisesti puhdistettu tiilikatto käsittelyn jälkeen Sastamalassa' },
      ],
    },
    {
      type: 'group',
      title: 'Värinvaihto – Tampere',
      category: 'maalaus',
      images: [
        { src: getStorageUrl('Muut_referenssit/keltainen-talo-maalaus-varinvaihto-ennen-tampere.webp'), label: 'Puutalo ennen värinvaihtoa ja maalaustyötä Tampereella' },
        { src: getStorageUrl('Muut_referenssit/violetti-talo-maalaus-varinvaihto-jalkeen-tampere.webp'), label: 'Violetti omakotitalo värinvaihdon jälkeen Tampereella' },
      ],
    },
    {
      type: 'group',
      title: 'Sinisen talon maalaus – Hämeenkyrö',
      category: 'maalaus',
      images: [
        { src: getStorageUrl('Muut_referenssit/laivaston-sininen-talo-maalaus-ennen-hameenkyro.webp'), label: 'Haalistunut talo ennen maalausta Hämeenkyrössä' },
        { src: getStorageUrl('Muut_referenssit/laivaston-sininen-talo-maalaus-jalkeen-hameenkyro.webp'), label: 'Laivastonsininen puutalo maalauksen jälkeen Hämeenkyrössä' },
      ],
    },
    {
      type: 'group',
      title: 'Värinvaihto harmaaksi – Pirkanmaa',
      category: 'maalaus',
      images: [
        { src: getStorageUrl('Muut_referenssit/punainen-talon-maalaus-ennen-varinvaihdos-pirkanmaa.webp'), label: 'Punainen talo ennen värinvaihtomaalausta Pirkanmaalla' },
        { src: getStorageUrl('Muut_referenssit/harmaa-talon-maalaus-varinvaihdos-jalkeen-pirkanmaa.webp'), label: 'Talon värinvaihto punaisesta harmaaksi Pirkanmaalla' },
      ],
    },
    {
      type: 'group',
      title: 'Vihreän talon maalaus – Hämeenkyrö',
      category: 'maalaus',
      images: [
        { src: getStorageUrl('Muut_referenssit/Vihrea-talon-maalaus-ennen-hameenkyro.webp'), label: 'Vihreä puutalo ennen huoltomaalausta Hämeenkyrössä' },
        { src: getStorageUrl('Muut_referenssit/Virhea-talon-maalaus-jalkeen-hameenkyro.webp'), label: 'Vihreä omakotitalo maalauksen jälkeen Hämeenkyrössä' },
      ],
    },
    {
      type: 'group',
      title: 'Keltaisen talon maalaus – Hämeenlinna',
      category: 'maalaus',
      images: [
        { src: getStorageUrl('Muut_referenssit/keltainen-talon-maalaus-ennen-hameenlinna.webp'), label: 'Omakotitalo ennen huoltomaalausta Hämeenlinnassa' },
        { src: getStorageUrl('Muut_referenssit/keltainen-talo-maalaus-jalkeen-hameenlinna.webp'), label: 'Valmis keltainen puutalo ulkomaalauksen jälkeen Hämeenlinnassa' },
      ],
    },
    {
      type: 'group',
      title: 'Keltainen seinä – Pirkanmaa',
      category: 'maalaus',
      images: [
        { src: getStorageUrl('Muut_referenssit/Keltainen-seina-ennen-maalaus-pirkanmaa.webp'), label: 'Haalistunut keltainen puuseinä ennen ulkomaalausta Pirkanmaalla' },
        { src: getStorageUrl('Muut_referenssit/keltainen-seina-maalaus-jalkeen-pirkanmaa.webp'), label: 'Keltainen puujulkisivu maalauksen jälkeen Pirkanmaalla' },
      ],
    },
    {
      type: 'group',
      title: 'Parveke ja julkisivu – Ylöjärvi',
      category: 'maalaus',
      images: [
        { src: getStorageUrl('Muut_referenssit/talo-ja-parveke-maalaus-kunnostus-ennen-ylojarvi.webp'), label: 'Talo ja puuparveke ennen kunnostusmaalausta Ylöjärvellä' },
        { src: getStorageUrl('Muut_referenssit/talo-ja-parveke-maalaus-kunnostus-jalkeen-ylojarvi.webp'), label: 'Kunnostettu puuparveke ja julkisivu Ylöjärvellä' },
      ],
    },
    { type: 'single', image: getStorageUrl('Muut_referenssit/tiilenpunainen-tiilikatto-nokia.webp'), category: 'pinnoitus', title: 'Tiilenpunainen tiilikaton pinnoitus omakotitalossa Nokialla' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/tiilikaton-pinnoitus-tummanharmaa-pirkkala.webp'), category: 'pinnoitus', title: 'Tummanharmaa tiilikaton pinnoitus kohteessa Pirkkalassa' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/tummanharmaa-tiilikaton-pinnoitus.webp'), category: 'pinnoitus', title: 'Tummanharmaa tiilikatto pinnoituksen ja suojauksen jälkeen' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/tiilikatto-maalattu-forssa.webp'), category: 'pinnoitus', title: 'Ammattimaisesti maalattu tiilikatto Forssassa' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/katto-ennen-jalkeen-maalaus-forssa.webp'), category: 'pinnoitus', title: 'Tiilikaton maalaus ennen ja jälkeen -vertailu Forssassa' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/tiilikatto-pesu-hameenlinna.webp'), category: 'puhdistus', title: 'Tiilikaton pesu ja huolto Hämeenlinnassa' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/harjatiiviste-asennus-pirkanmaa.webp'), category: 'puhdistus', title: 'Harjatiivisteen asennus tiilikattoon Pirkanmaalla' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/suojausprojekti-akaa.webp'), category: 'maalaus', title: 'Terassin suojaus ennen talon maalausta Akaassa' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/talon-suojaus-akaa.webp'), category: 'maalaus', title: 'Julkisivun suojaustyöt ennen maalausta Akaassa' },
  ];

  const filteredProjects = activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory);

  const openGroupLightbox = (project: GroupedProject) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const openSingleLightbox = (image: string, title: string) => {
    setSelectedProject({ type: 'group', title, category: 'all', images: [{ src: image, label: '' }] });
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <SEO title="Referenssit – Katon pinnoitus ja talon maalaus" description="Tutustu toteuttamiimme katto- ja maalausprojekteihin Pirkanmaalla. Näe ero ennen maalausta ja maalauksen jälkeen." />
      <ServicePageHero title="Referenssit" subtitle="Tutustu tekemiimme töihin – laatu puhuu puolestaan" backgroundImage={getStorageUrl('Muut_referenssit/tiilikatto-pesu-hameenlinna.webp')} />

      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.key ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Referenssejä kattotöistä ja ulkomaalauksista</h2>
            <p className="text-muted-foreground text-base">
              Käy kurkkaamassa töitämme <strong>Pirkanmaan</strong> alueella. Olemme tehneet tiilikattojen pinnoituksia, katon puhdistuksia ja talojen ulkomaalauksia monissa paikoissa Pirkanmaalla ja lähikunnissa.
            </p>
            <p className="text-muted-foreground text-base">
              Kuvista näet, että hyviä tuloksia saadaan, kun työ tehdään huolellisesti ja ammattitaidolla. Jokainen projekti on erilainen, mutta tavoitteemme on aina sama – <strong>hyvä lopputulos ja siisti työnjälki.</strong>
            </p>
            <p className="text-muted-foreground text-base">
              Teemme töitä noin tunnin ajomatkan säteellä Tampereelta.
            </p>
          </motion.div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() =>
                    project.type === 'group' ? openGroupLightbox(project) : openSingleLightbox(project.image, project.title)
                  }
                >
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                    {project.type === 'group' && project.images.length > 1 ? (
                      <CompositeThumbnail images={project.images} />
                    ) : (
                      <OptimizedImage
                        src={project.type === 'group' ? project.images[0].src : project.image}
                        srcSet={getImageSrcSet(project.type === 'group' ? project.images[0].src : project.image)}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {project.type === 'group' && project.images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {project.images.length} kuvaa
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-primary-foreground font-bold">{project.title}</h3>
                      {project.type === 'group' && project.images.length > 1 && (
                        <p className="text-white/80 text-sm mt-1">{project.images.map((img) => img.label).join(' → ')}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Ei projekteja tässä kategoriassa.</p>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <Lightbox
            project={selectedProject}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
            onSelectIndex={setCurrentImageIndex}
          />
        )}
      </AnimatePresence>

      <ServiceContactSection variant="general" />
    </div>
  );
};

export default Referenssit;
