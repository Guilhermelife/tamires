import React, { useEffect, useRef } from 'react';
import { 
  Building2, ArrowRight, ShieldCheck, Clock, Users,
  Calculator, FileText, CheckCircle, HardHat, Key
} from 'lucide-react';
import './Financing.css';

const timelineSteps = [
  {
    num: '01',
    title: 'Simulação',
    desc: 'Análise de viabilidade e simulação de crédito junto à Caixa Econômica.',
    icon: <Calculator size={22} strokeWidth={1.2} />
  },
  {
    num: '02',
    title: 'Projeto',
    desc: 'Desenvolvimento do projeto arquitetônico e aprovação nos órgãos competentes.',
    icon: <FileText size={22} strokeWidth={1.2} />
  },
  {
    num: '03',
    title: 'Aprovação Bancária',
    desc: 'Cuidamos de toda a burocracia, entrega de planilhas e aprovação do financiamento.',
    icon: <CheckCircle size={22} strokeWidth={1.2} />
  },
  {
    num: '04',
    title: 'Obra',
    desc: 'Execução acompanhada de perto, garantindo o cronograma físico-financeiro do banco.',
    icon: <HardHat size={22} strokeWidth={1.2} />
  },
  {
    num: '05',
    title: 'Entrega das Chaves',
    desc: 'Seu sonho realizado com segurança, solidez e garantia de qualidade.',
    icon: <Key size={22} strokeWidth={1.2} />
  }
];

const Financing: React.FC = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="financing" className="financing">
      <div className="financing-inner">
        <div className="container">
          
          {/* Centered Header */}
          <div className="financing-header">
            <span className="financing-kicker">Construções Financiadas</span>
            <h2 className="financing-main-title">
              Construa com Segurança<br/>e Planejamento
            </h2>
            <p className="financing-subtitle">Do projeto à entrega das chaves, cuidamos de tudo para você.</p>
          </div>

          {/* Two-column layout */}
          <div className="financing-grid">

            {/* Left — Authority Column */}
            <div className="financing-left reveal-left" ref={leftRef}>
              <Building2 size={48} className="financing-icon-main" strokeWidth={1} />
              <h3 className="financing-info-title">
                Especialistas em<br/>financiamento <span className="caixa-highlight">CAIXA</span>
              </h3>
              <div className="financing-divider"></div>
              
              <div className="financing-paragraphs">
                <p>
                  Cuidamos de todo o processo para que você construa com tranquilidade — do crédito à execução da obra.
                </p>
                <p>
                  Aprovações rápidas, planejamento estratégico e acompanhamento completo em cada etapa.
                </p>
              </div>
              
              <a href="#contact" className="financing-cta">
                <span>Solicitar simulação gratuita</span>
                <ArrowRight size={18} />
              </a>

              {/* Features at the bottom */}
              <div className="financing-features">
                <div className="feature-item">
                  <ShieldCheck size={28} className="feature-icon" strokeWidth={1} />
                  <div>
                    <h4>Segurança</h4>
                    <p>Processo 100%<br/>seguro</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Clock size={28} className="feature-icon" strokeWidth={1} />
                  <div>
                    <h4>Agilidade</h4>
                    <p>Aprovações<br/>mais rápidas</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Users size={28} className="feature-icon" strokeWidth={1} />
                  <div>
                    <h4>Acompanhamento</h4>
                    <p>Do início ao fim,<br/>com você</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Vertical Timeline */}
            <div className="financing-timeline reveal-right" ref={rightRef}>
              <div className="timeline-line"></div>
              
              {timelineSteps.map((step, index) => (
                <div className="timeline-step" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="timeline-dot-wrapper">
                    <div className="timeline-dot"></div>
                  </div>
                  
                  <div className="timeline-card">
                    <div className="timeline-card-icon">
                      {step.icon}
                    </div>
                    <div className="timeline-card-content">
                      <div className="timeline-card-header">
                        <span className="timeline-num">{step.num}</span>
                        <h4 className="timeline-card-title">{step.title}</h4>
                      </div>
                      <p className="timeline-card-desc">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Financing;
