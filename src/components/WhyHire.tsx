import React, { useEffect, useRef } from 'react';
import './WhyHire.css';

const WhyHire: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-hire">
      <div className="why-hire-overlay"></div>
      <div className="why-hire-inner">
        <div className="container why-hire-container">
          
          <div className="why-hire-text-col reveal-left" ref={textRef}>
            <span className="why-hire-kicker">Porque Contratar</span>
            <h2 className="why-hire-title">
              Uma especialista em<br/>projeto residencial
            </h2>
            <div className="why-hire-paragraphs">
              <p>
                Ao contratar uma especialista, você garante que cada decisão, do conceito ao acabamento, seja pensada para o seu estilo de vida.
              </p>
              <p>
                Trabalhamos com foco total em personalização, valorizando seu imóvel e proporcionando uma experiência de obra segura e sem surpresas.
              </p>
            </div>
            
            <a href="#financing" className="why-hire-cta">
              Quero falar sobre meu projeto
            </a>
          </div>
          
          <div className="why-hire-image-col reveal-right" ref={imageRef}>
            <div className="why-hire-img-wrapper">
              <img 
                src="/why-hire.png" 
                alt="Especialista em projeto residencial" 
                className="why-hire-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyHire;
