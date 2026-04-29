import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <img src="/logo.png" alt="Tamires Araújo" className="logo-img" />
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#hero" onClick={toggleMenu}>Início</a></li>
            <li><a href="#about" onClick={toggleMenu}>A Arquiteta</a></li>
            <li><a href="#financing" onClick={toggleMenu}>Financiamento</a></li>
            <li><a href="#portfolio" onClick={toggleMenu}>Portfólio</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
