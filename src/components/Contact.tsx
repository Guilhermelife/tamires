import React, { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    type: '',
    budget: '',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${formData.name}. Gostaria de orçar um projeto de ${formData.type} com estimativa de ${formData.budget}. Mensagem: ${formData.message}`;
    window.open(`https://wa.me/5563999999999?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="container">
          
          {/* Header */}
          <div className="contact-header">
            <span className="contact-kicker">Fale Conosco</span>
            <h2 className="contact-title">Vamos conversar sobre<br/>o seu projeto?</h2>
          </div>

          <div className="contact-grid">

            {/* LEFT — Info + Location */}
            <div className="contact-info reveal-left" ref={leftRef}>
              <p className="contact-subtitle">
                Preencha o formulário ao lado ou entre em contato diretamente pelos nossos canais. Estamos prontos para transformar sua visão em realidade.
              </p>
              
              <div className="contact-details">
                <a href="https://maps.google.com/?q=Paraiso+do+Tocantins" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <MapPin size={22} strokeWidth={1.2} className="contact-icon" />
                  <div>
                    <h4>Endereço</h4>
                    <p>Paraíso do Tocantins - TO</p>
                  </div>
                </a>

                <a href="https://wa.me/5563999999999" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <MessageCircle size={22} strokeWidth={1.2} className="contact-icon" />
                  <div>
                    <h4>WhatsApp</h4>
                    <p>(63) 99999-9999</p>
                  </div>
                </a>

                <a href="tel:+5563999999999" className="contact-item">
                  <Phone size={22} strokeWidth={1.2} className="contact-icon" />
                  <div>
                    <h4>Telefone</h4>
                    <p>(63) 99999-9999</p>
                  </div>
                </a>

                <a href="mailto:contato@tamiresaraujo.com.br" className="contact-item">
                  <Mail size={22} strokeWidth={1.2} className="contact-icon" />
                  <div>
                    <h4>E-mail</h4>
                    <p>contato@tamiresaraujo.com.br</p>
                  </div>
                </a>
              </div>

              {/* Embedded Map — dark styled */}
              <div className="contact-map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31236.48!2d-48.88!3d-10.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b3b0b0b0b0b0b%3A0x0!2zUGFyYcOtc28gZG8gVG9jYW50aW5z!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="180"
                  style={{ border: 0, borderRadius: '12px', filter: 'grayscale(100%) brightness(0.4) contrast(1.2)', opacity: 0.6 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização - Paraíso do Tocantins"
                ></iframe>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="contact-form-container reveal-right" ref={rightRef}>
              <h3 className="form-title">Solicite seu orçamento</h3>
              <p className="form-subtitle">Retornamos em até 24 horas</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="whatsapp">WhatsApp</label>
                  <input 
                    type="tel" 
                    id="whatsapp" 
                    name="whatsapp" 
                    required 
                    placeholder="(63) 99999-9999"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="type">Tipo de Obra</label>
                    <select 
                      id="type" 
                      name="type" 
                      required
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Selecione</option>
                      <option value="Arquitetura">Projeto de Arquitetura</option>
                      <option value="Interiores">Design de Interiores</option>
                      <option value="Financiada">Construção Financiada (CAIXA)</option>
                      <option value="Comercial">Projeto Comercial</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="budget">Orçamento Estimado</label>
                    <select 
                      id="budget" 
                      name="budget" 
                      required
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Selecione</option>
                      <option value="Até R$ 100.000">Até R$ 100.000</option>
                      <option value="R$ 100.000 a R$ 300.000">R$ 100k a R$ 300k</option>
                      <option value="R$ 300.000 a R$ 800.000">R$ 300k a R$ 800k</option>
                      <option value="Acima de R$ 800.000">Acima de R$ 800k</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={3} 
                    placeholder="Fale um pouco sobre o que você imagina..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <span>Solicitar Orçamento</span>
                  <Send size={16} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
