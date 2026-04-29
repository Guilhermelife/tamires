import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <img src="/logo.png" alt="Tamires Araújo" className="logo-img" />
          </div>
          <p className="footer-slogan">A arquitetura dá forma a sonhos.</p>
        </div>
        
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#about">A Arquiteta</a></li>
            <li><a href="#financing">Financiamento Caixa</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4>Redes Sociais</h4>
          <ul>
            <li><a href="#" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">Pinterest</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Tamires Araújo Arquitetura e Interiores. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
