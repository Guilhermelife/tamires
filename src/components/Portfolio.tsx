import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Residência Vista Bela',
    category: 'Residencial',
    image: '/projetos/Projeto 1/foto-1.jpg',
    gallery: [
      '/projetos/Projeto 1/foto-1.jpg',
      '/projetos/Projeto 1/foto-2.jpg',
      '/projetos/Projeto 1/foto-3.jpg',
    ],
    description: 'Projeto moderno focado em integração de ambientes e iluminação natural, utilizando acabamentos sofisticados.',
    size: 'tall' as const,
  },
  {
    id: 2,
    title: 'Casa Horizonte',
    category: 'Residencial',
    image: '/projetos/projeto 2/foto-1.jpg',
    gallery: [
      '/projetos/projeto 2/foto-1.jpg',
      '/projetos/projeto 2/foto-2.jpg',
      '/projetos/projeto 2/foto-3.jpg',
      '/projetos/projeto 2/foto-4.jpg',
    ],
    description: 'Residência clean e acolhedora, projetada para transmitir segurança e tranquilidade para toda a família.',
    size: 'normal' as const,
  },
  {
    id: 3,
    title: 'Apartamento Skyline',
    category: 'Interiores',
    image: '/projetos/projeto 3/foto-1.jpg',
    gallery: [
      '/projetos/projeto 3/foto-1.jpg',
      '/projetos/projeto 3/foto-2.jpg',
      '/projetos/projeto 3/foto-3.jpg',
      '/projetos/projeto 3/foto-4.jpg',
      '/projetos/projeto 3/foto-5.jpg',
    ],
    description: 'Design de interiores minimalista, destacando a elegância dos espaços e peças de design autoral.',
    size: 'wide' as const,
  },
  {
    id: 4,
    title: 'Casa Bosque',
    category: 'Residencial',
    image: '/projetos/projeto 4/foto-1.jpg',
    gallery: [
      '/projetos/projeto 4/foto-1.jpg',
      '/projetos/projeto 4/foto-2.jpg',
      '/projetos/projeto 4/foto-3.jpg',
      '/projetos/projeto 4/foto-4.jpg',
      '/projetos/projeto 4/foto-5.jpg',
    ],
    description: 'Fachada imponente, com forte presença de materiais naturais e paisagismo perfeitamente integrado.',
    size: 'normal' as const,
  },
  {
    id: 5,
    title: 'Escritório Boutique',
    category: 'Comercial',
    image: '/projetos/projeto 5/foto-1.jpg',
    gallery: [
      '/projetos/projeto 5/foto-1.jpg',
      '/projetos/projeto 5/foto-2.jpg',
      '/projetos/projeto 5/foto-3.jpg',
      '/projetos/projeto 5/foto-4.jpg',
      '/projetos/projeto 5/foto-5.jpg',
    ],
    description: 'Ambiente de luxo, com materiais nobres e layout otimizado para o máximo de produtividade.',
    size: 'tall' as const,
  }
];

const categories = ['Todos', 'Residencial', 'Comercial', 'Interiores'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Staggered reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    const cards = gridRef.current?.querySelectorAll('.portfolio-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-inner">
        <div className="container">
          
          {/* Header */}
          <div className="portfolio-header">
            <span className="portfolio-kicker">Nossos Projetos</span>
            <h2 className="portfolio-title">Portfólio</h2>
            <p className="portfolio-subtitle">
              Explore alguns dos nossos projetos mais recentes, onde técnica e estética se encontram.
            </p>
          </div>

          {/* Scrollable Filters */}
          <div className="portfolio-filters-wrapper" ref={filtersRef}>
            <div className="portfolio-filters">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Moodboard Grid */}
          <div className="portfolio-grid" ref={gridRef}>
            {filteredProjects.map((project, index) => (
              <div 
                className={`portfolio-card portfolio-card--${project.size} portfolio-card--idx-${index}`}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <img 
                  src={project.image} 
                  alt={`Projeto ${project.title}`} 
                  className="portfolio-img"
                  loading="lazy"
                />
                {/* Desktop hover overlay */}
                <div className="portfolio-overlay">
                  <ZoomIn size={32} className="portfolio-icon" strokeWidth={1.2} />
                  <div className="portfolio-info-overlay">
                    <h4>{project.title}</h4>
                    <span>{project.category}</span>
                  </div>
                </div>
                {/* Mobile glassmorphism label — always visible */}
                <div className="portfolio-label">
                  <span className="portfolio-label-text">{project.title}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Project Modal with Gallery */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-gallery">
              {selectedProject.gallery.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`${selectedProject.title} - Imagem ${index + 1}`} 
                  className="modal-img"
                  loading="lazy"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxImg(img);
                  }}
                />
              ))}
            </div>

            <div className="modal-info">
              <h3>{selectedProject.title}</h3>
              <span className="modal-category">{selectedProject.category}</span>
              <p>{selectedProject.description}</p>
              <a href="#contact" className="modal-cta" onClick={() => setSelectedProject(null)}>
                Quero um projeto assim
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox — full-screen zoom */}
      {lightboxImg && (
        <div className="portfolio-lightbox" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
            <X size={28} strokeWidth={1.5} />
          </button>
          <img src={lightboxImg} alt="Zoom" className="lightbox-img" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
