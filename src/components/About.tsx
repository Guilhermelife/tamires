import React, { useEffect, useRef } from 'react';
import { Building2 } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-el');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-bg-overlay"></div>
      <div className="about-inner">
        <div className="container about-container relative" ref={containerRef}>
          
          <div className="about-header reveal-el reveal-right">
            <span className="about-kicker">Sobre</span>
            <h2 className="about-title">A Arquiteta</h2>
          </div>
          
          <div className="about-text about-p1 reveal-el reveal-right">
            <p>
              Olá, sou Tamires Araújo. Minha trajetória na arquitetura sempre foi guiada por um propósito claro: transformar espaços com excelência técnica enquanto honro a confiança que cada cliente deposita em meu trabalho.
            </p>
          </div>

          <div className="about-image-wrapper reveal-el reveal-left">
            <img 
              src="/tamires-about.jpg" 
              alt="Tamires Araújo - Arquiteta" 
              className="about-image"
            />
            <div className="about-experience-badge">
              <span className="badge-number">+50</span>
              <span className="badge-text">projetos realizados</span>
            </div>
          </div>
          
          <div className="about-text about-p2 reveal-el reveal-right">
            <p>
              Ao longo dos anos, vivenciei um crescimento rápido e sólido, resultado de muita dedicação e da busca incessante pela perfeição. Para mim, a arquitetura vai muito além de erguer paredes; trata-se de materializar sonhos, proporcionar segurança e valorizar o patrimônio da sua família.
            </p>
          </div>
          
          <blockquote className="about-quote reveal-el reveal-right">
            "Cada projeto é uma oportunidade de agradecer a Deus e servir com excelência técnica. Acredito que Deus está nos detalhes, e é exatamente neles que foco minha atenção."
          </blockquote>
          
          <div className="about-text about-p3 reveal-el reveal-right">
            <p>
              Seja em projetos residenciais de alto padrão ou na viabilização de construções financiadas, minha equipe e eu estamos prontos para oferecer um atendimento acolhedor, transparente e altamente profissional.
            </p>
          </div>
          
          <div className="about-cta-wrapper reveal-el reveal-right">
            <a href="#portfolio" className="about-btn">
              <Building2 size={18} className="about-btn-icon" strokeWidth={1.5} />
              <span>Conheça meus projetos</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
