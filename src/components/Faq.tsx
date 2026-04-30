import React, { useState, useRef, useEffect } from 'react';
import './Faq.css';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Como funciona o financiamento da Caixa?",
    answer: "A Caixa Econômica Federal financia a aquisição do terreno e a construção da sua casa em uma única operação de crédito. O valor é liberado em parcelas, conforme o andamento da obra (cronograma físico-financeiro), com taxas de juros atrativas e longo prazo de pagamento."
  },
  {
    question: "Posso financiar terreno + construção?",
    answer: "Sim! É a modalidade mais vantajosa. Se você não possui lote, pode financiar a compra do terreno e a construção da casa no mesmo contrato. Caso já possua o terreno quitado, pode financiar apenas a construção."
  },
  {
    question: "Qual a renda mínima exigida?",
    answer: "Não existe uma renda mínima fixa, pois o financiamento depende do valor da obra. A Caixa compromete até 30% da sua renda familiar bruta mensal. Para projetos de médio/alto padrão, geralmente indicamos a composição de renda com cônjuge ou familiares."
  },
  {
    question: "Quanto tempo leva a aprovação?",
    answer: "Após a entrega de toda a documentação (pessoal e projetos), a análise de crédito bancária costuma levar de 15 a 30 dias. Com a nossa assessoria completa, evitamos retrabalhos e garantimos maior agilidade."
  },
  {
    question: "Preciso ter o projeto pronto para aprovar o crédito?",
    answer: "Nós realizamos uma simulação inicial sem compromisso para verificar sua capacidade de financiamento. Caso seja viável, iniciamos a criação do projeto arquitetônico, que é um requisito obrigatório para a aprovação final na Caixa."
  },
  {
    question: "Quais documentos são necessários?",
    answer: "Para a simulação e análise inicial, você precisará de RG/CPF (ou CNH), Certidão de Estado Civil, Comprovantes de Renda (Holerite ou Imposto de Renda), Comprovante de Endereço e extrato do FGTS caso vá utilizá-lo."
  },
  {
    question: "Atende obras fora de Paraíso do Tocantins?",
    answer: "Nosso foco presencial de projetos e acompanhamento físico de obra é em Paraíso do Tocantins e região (incluindo Palmas). Para outras cidades, trabalhamos com projetos online e consultoria remota."
  },
  {
    question: "O que está incluso no acompanhamento da arquiteta?",
    answer: "Acompanhamos desde a escolha do terreno e simulação de crédito até a aprovação dos projetos na prefeitura e no banco. Durante a construção, realizamos visitas técnicas para garantir a fidelidade do projeto arquitetônico e o padrão de excelência exigido."
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq" ref={sectionRef}>
      <div className="container faq-container">
        <div className={`faq-header ${isVisible ? 'fade-up' : 'opacity-0'}`}>
          <div className="faq-kicker">Dúvidas Frequentes</div>
          <h2 className="faq-title">
            Tudo sobre seu <br/>
            <span className="faq-title-serif">Financiamento</span>
          </h2>
          <p className="faq-subtitle">
            Transparência total para você construir o seu patrimônio com segurança.
          </p>
        </div>

        <div className={`faq-list ${isVisible ? 'fade-up-delay' : 'opacity-0'}`}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon">
                    <span className="faq-icon-h"></span>
                    <span className="faq-icon-v"></span>
                  </span>
                </button>
                <div 
                  className="faq-answer-wrapper"
                  style={{ maxHeight: isOpen ? '500px' : '0px' }}
                >
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
