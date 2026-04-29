import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className={`hero ${loaded ? 'hero--loaded' : ''}`}
      ref={heroRef}
    >
      {/* Ken Burns animated background */}
      <div 
        className="hero-bg" 
        style={{ backgroundImage: `url('/capawebsite.svg')` }}
      ></div>

      {/* Gradient overlay — left dark → right transparent */}
      <div className="hero-overlay"></div>

      {/* Bottom fade to next section */}
      <div className="hero-bottom-fade"></div>

      {/* Content */}
      <div className="container hero-container">
        <div className={`hero-text-col ${loaded ? 'hero-text--visible' : ''}`} ref={textRef}>
          
          <h1 className="hero-title">
            <span className="hero-title-line">Arquitetura que dá </span>
            <span className="hero-title-line">forma a <em className="hero-title-serif">sonhos</em> e </span>
            <span className="hero-title-line">solidez ao seu <em className="hero-title-serif">futuro</em></span>
          </h1>

          <p className="hero-subtitle">
            Arquitetura que Transforma Fé e Sonhos em <strong>Realidade Patrimonial</strong>
          </p>

          <div className="hero-actions">
            <a href="#financing" className="hero-cta">
              <span>Iniciar meu projeto financiado</span>
              <svg className="hero-cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

        </div>

        <div className="hero-empty-col"></div>
      </div>

      {/* Scroll down indicator — mobile + desktop */}
      <div className={`hero-scroll-hint ${loaded ? 'hero-scroll-hint--visible' : ''}`}>
        <span className="hero-scroll-text">Deslize</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
