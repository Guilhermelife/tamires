import React, { useEffect, useRef, useState } from 'react';
import { Building2, ChevronDown } from 'lucide-react';
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
      <div className="hero-bg"></div>

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
          
          <div className="hero-title-separator"></div>

          <p className="hero-subtitle">
            Arquitetura que transforma fé e sonhos em <strong>realidade patrimonial.</strong>
          </p>

          <div className="hero-actions">
            <a href="#financing" className="hero-cta">
              <Building2 size={18} strokeWidth={1.5} className="hero-cta-icon" />
              <span>Iniciar meu projeto financiado</span>
            </a>
          </div>

        </div>

        <div className="hero-empty-col"></div>
      </div>

      {/* Scroll down indicator — mobile + desktop */}
      <div className={`hero-scroll-hint ${loaded ? 'hero-scroll-hint--visible' : ''}`}>
        <ChevronDown size={20} className="hero-scroll-chevron" strokeWidth={1.5} />
        <span className="hero-scroll-text">D E S L I Z E</span>
        <div className="hero-scroll-line" style={{ display: 'none' }}></div>
      </div>
    </section>
  );
};

export default Hero;
