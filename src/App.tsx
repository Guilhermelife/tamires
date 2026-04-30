import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyHire from './components/WhyHire';
import Financing from './components/Financing';
import Portfolio from './components/Portfolio';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyHire />
        <Financing />
        <Portfolio />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
