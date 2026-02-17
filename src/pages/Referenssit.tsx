import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ServicePageHero from '@/components/ServicePageHero';
import ServiceContactSection from '@/components/ServiceContactSection';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import { getStorageUrl, getOptimizedUrl } from '@/lib/storage';

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
          alt={img.label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={600}
          height={450}
          transformWidth={400}
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
        src={getOptimizedUrl(project.images[currentIndex].src, 1200)}
        alt={project.images[currentIndex].label}
        className="max-w-full max-h-[75vh] object-contain rounded-lg"
        width={1200}
        height={900}
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
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" width={64} height={48} loading="lazy" decoding="async" />
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
      title: 'Tiilikattoprojekti 1',
      category: 'pinnoitus',
      images: [
        { src: getStorageUrl('Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kulunut katto ennen maalauspinnoitusta.webp'), label: 'Ennen' },
        { src: getStorageUrl('Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen katto maalauspinnoituksen jalkeen.webp'), label: 'Pinnoitettuna' },
      ],
    },
    {
      type: 'group',
      title: 'Tiilikattoprojekti 2',
      category: 'pinnoitus',
      images: [
        { src: getStorageUrl('Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen liakainen katto ennen maalauspinnoitusta.webp'), label: 'Ennen' },
        { src: getStorageUrl('Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen kiiltava katto maalaukspinnoituksen jalkeen.webp'), label: 'Pinnoitettuna' },
      ],
    },
    {
      type: 'group',
      title: 'Tiilikaton puhdistus',
      category: 'puhdistus',
      images: [
        { src: getStorageUrl('Muut_referenssit/Ennen puhdistusta.webp'), label: 'Ennen puhdistusta' },
        { src: getStorageUrl('Muut_referenssit/Puhdistuksen jalkeen.webp'), label: 'Puhdistuksen jälkeen' },
      ],
    },
    {
      type: 'group',
      title: 'Keltaisen talon maalaus',
      category: 'maalaus',
      images: [
        { src: getStorageUrl('Samaan_kohtaan_synkronoidut_kuvat_erikseen/Keltainen seina ennen maalausta.webp'), label: 'Ennen' },
        { src: getStorageUrl('Samaan_kohtaan_synkronoidut_kuvat_erikseen/Keltainen seina maalauksen jalkeen.webp'), label: 'Jälkeen' },
      ],
    },
    {
      type: 'group',
      title: 'Sinisen talon maalaus',
      category: 'maalaus',
      images: [
        { src: getStorageUrl('Samaan_kohtaan_synkronoidut_kuvat_erikseen/Sininen talo ennen maalausta.webp'), label: 'Ennen' },
        { src: getStorageUrl('Samaan_kohtaan_synkronoidut_kuvat_erikseen/sininen talo maalauksen jalkeen.webp'), label: 'Jälkeen' },
      ],
    },
    {
      type: 'group',
      title: 'Seinän värinvaihto',
      category: 'maalaus',
      images: [
        { src: getStorageUrl('Samaan_kohtaan_synkronoidut_kuvat_erikseen/Punainen seina ennen maalausta (varinvaihdos).webp'), label: 'Ennen' },
        { src: getStorageUrl('Samaan_kohtaan_synkronoidut_kuvat_erikseen/Harmaa seina varinvaihdon jalkeen.webp'), label: 'Jälkeen' },
      ],
    },
    { type: 'single', image: getStorageUrl('Muut_referenssit/katto valmist tiilen punainen.webp'), category: 'pinnoitus', title: 'Valmis pinnoitus' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/katto valmis harmaa.webp'), category: 'pinnoitus', title: 'Harmaa pinnoitus' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/katto valmis ruskea.webp'), category: 'pinnoitus', title: 'Ruskea pinnoitus' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/katto vanha vs uus.webp'), category: 'pinnoitus', title: 'Ennen ja jälkeen' },
    { type: 'single', image: getStorageUrl('Samaan_kohtaan_synkronoidut_kuvat_erikseen/Vihrea seina maalauksen jalkeen.webp'), category: 'maalaus', title: 'Valmis seinämaalaus' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/suojaus 1.webp'), category: 'maalaus', title: 'Suojaus' },
    { type: 'single', image: getStorageUrl('Muut_referenssit/suojaus 2.webp'), category: 'maalaus', title: 'Suojaus' },
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
      <SEO title="Referenssit" description="Tutustu Pintasen tekemiin tiilikattojen pinnoituksiin, puhdistuksiin ja ulkomaalauksiin. Laatu puhuu puolestaan." />
      <ServicePageHero title="Referenssit" subtitle="Tutustu tekemiimme töihin – laatu puhuu puolestaan" backgroundImage={getStorageUrl('Muut_referenssit/katto puolet pesty.webp')} />

      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
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
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={600}
                        height={450}
                        transformWidth={600}
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
