import React, { useEffect, useRef } from 'react';
import './About.css';

const About: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-bg-overlay"></div>
      <div className="about-inner">
        <div className="container about-container relative">
          <div className="about-image-wrapper reveal-left" ref={imageRef}>
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
          
          <div className="about-content reveal-right" ref={contentRef}>
            <span className="about-kicker">Sobre</span>
            <h2 className="about-title">A Arquiteta</h2>
            <div className="about-text">
              <p>
                Olá, sou Tamires Araújo. Minha trajetória na arquitetura sempre foi guiada por um propósito claro: transformar espaços com excelência técnica enquanto honro a confiança que cada cliente deposita em meu trabalho.
              </p>
              <p>
                Ao longo dos anos, vivenciei um crescimento rápido e sólido, resultado de muita dedicação e da busca incessante pela perfeição. Para mim, a arquitetura vai muito além de erguer paredes; trata-se de materializar sonhos, proporcionar segurança e valorizar o patrimônio da sua família.
              </p>
              <blockquote className="about-quote">
                "Cada projeto é uma oportunidade de agradecer a Deus e servir com excelência técnica. Acredito que Deus está nos detalhes, e é exatamente neles que foco minha atenção."
              </blockquote>
              <p>
                Seja em projetos residenciais de alto padrão ou na viabilização de construções financiadas, minha equipe e eu estamos prontos para oferecer um atendimento acolhedor, transparente e altamente profissional.
              </p>
            </div>
            
            <a href="#portfolio" className="about-btn">Conheça meus projetos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
