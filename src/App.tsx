import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PerformanceMetrics } from './components/PerformanceMetrics';
import { PinnedStorySequence } from './components/PinnedStorySequence';
import { ServicesShowcase } from './components/ServicesShowcase';
import { WhyDiesamel } from './components/WhyDiesamel';
import { IndustriesServed } from './components/IndustriesServed';
import { RegionalMapSection } from './components/RegionalMapSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { initScrollAnimations } from './utils/animations';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize global GSAP ScrollTrigger animations
    initScrollAnimations();
  }, []);

  const handleExploreOperations = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactDispatch = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', color: '#0A0F1D' }}>
      {/* Top Precision Scroll Progress Bar */}
      <div id="scroll-progress-bar" />

      {/* Navigation */}
      <Navbar onExploreOperations={handleExploreOperations} />

      <main style={{ flex: 1 }}>
        {/* Cinematic Hero with Real Highway Tanker Photography & GSAP Entrances */}
        <Hero
          onExploreOperations={handleExploreOperations}
          onContactDispatch={handleContactDispatch}
        />

        {/* Operational Performance with Live ScrollTrigger Count-Up */}
        <PerformanceMetrics />

        {/* Pinned 4-Stage Story Sequence with Real Industrial Infrastructure Photography */}
        <PinnedStorySequence />

        {/* Bespoke Editorial Services Showcase with Staggered Scroll Reveals */}
        <ServicesShowcase onContactDispatch={handleContactDispatch} />

        {/* Why Diesamel Energy: Operational Advantages */}
        <WhyDiesamel />

        {/* Industries Served with Authentic Sector Operations Photography */}
        <IndustriesServed />

        {/* Geographic Identity & Regional Coverage Map with Animated SVG Corridors */}
        <RegionalMapSection />

        {/* Final Conversion & Operational Contacts */}
        <ContactSection onContactDispatch={handleContactDispatch} />
      </main>

      {/* Corporate Architectural Footer */}
      <Footer />
    </div>
  );
};

export default App;
