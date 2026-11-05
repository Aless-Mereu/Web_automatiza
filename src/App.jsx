import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Metrics from './components/Metrics.jsx';
import Problems from './components/Problems.jsx';
import Benefits from './components/Benefits.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import UseCases from './components/UseCases.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './useReveal.js';

// Orden de las secciones: reordena o comenta líneas para probar variantes.
export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Problems />
        <Benefits />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
