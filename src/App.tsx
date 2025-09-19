import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import OrbExporter from './components/OrbExporter';
import DesignExporter from './components/DesignExporter';
import BrochurePresentationNew from './components/BrochurePresentationNew';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  // Mostrar exportadores según parámetros URL
  const showOrbExporter = window.location.search.includes('orbs=export');
  const showDesignExporter = window.location.search.includes('design=export');
  const showBrochure = window.location.search.includes('brochure=presentation');

  if (showOrbExporter) {
    return <OrbExporter />;
  }

  if (showDesignExporter) {
    return <DesignExporter />;
  }

  if (showBrochure) {
    return <BrochurePresentationNew />;
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;