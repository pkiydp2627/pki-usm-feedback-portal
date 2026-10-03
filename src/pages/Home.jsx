import { useState, useRef, useEffect } from 'react';
import ParallaxVideoBackground from '../components/ParallaxVideoBackground.jsx';
import HeroSection from '../components/sections/HeroSection.jsx';
import FeedbackSection from '../components/sections/FeedbackSection.jsx';
import AboutSection from '../components/sections/AboutSection.jsx';
import FAQSection from '../components/sections/FAQSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  const videoRef = useRef(null);

  // Smooth scroll handler with navbar offset
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If user arrived with a hash (e.g. /#feedback), smoothly scroll to that section on mount
  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(hashId);
      }, 200);
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#260212] text-white flex flex-col selection:bg-[#e10600] selection:text-white">
      {/* Continuous Parallax Video Canvas (Silent, Ambient) */}
      <ParallaxVideoBackground videoRef={videoRef} />

      {/* 01. The Gateway / Hero Stage */}
      <HeroSection onScrollToSection={scrollToSection} />

      {/* 02. The Crucible / Submit Feedback Form */}
      <FeedbackSection />

      {/* 03. The Manifesto / About PKI USM & Pillars */}
      <AboutSection />

      {/* 04. Direct Clarity / Frequently Asked Questions */}
      <FAQSection />

      {/* 05. Direct Line / Contact PKI Leadership */}
      <ContactSection
        onScrollToSection={scrollToSection}
      />

      {/* Sticky Butcher Black / Velvet Wine Footer */}
      <Footer onScrollToSection={scrollToSection} />
    </div>
  );
}
