import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MessageSquare, ArrowRight, ChevronDown, Shield, Flame, Sparkles, Building2 } from 'lucide-react';
import EditorialMaskedHeading from '../ui/EditorialMaskedHeading.jsx';

export default function HeroSection({ onScrollToSection }) {
  const containerRef = useRef(null);

  // Scroll tracking across the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Inertial smooth spring for silky parallax response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Multi-speed scroll parallax transforms (Velocities: -0.3, 0.2, -0.15, 0.4)
  const yParallax1 = useTransform(smoothProgress, [0, 1], [0, -180]); // -0.3
  const yParallax2 = useTransform(smoothProgress, [0, 1], [0, 120]);  //  0.2
  const yParallax3 = useTransform(smoothProgress, [0, 1], [0, -90]);  // -0.15
  const yParallax4 = useTransform(smoothProgress, [0, 1], [0, 240]);  //  0.4

  const handleScroll = (id) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen w-full bg-[#320014] overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-12"
    >
      {/* South Indian Kolam motif texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-kolam-dark opacity-20" aria-hidden="true" />

      {/* Atmospheric Ambient Light Glows */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[400px] rounded-full bg-[#E60000]/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-[#FFE6D2]/10 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#42041D]/60 blur-[90px]"
        aria-hidden="true"
      />

      {/* ========================================================
          PERIPHERY: 4 Floating Asset Cutouts / Cards
          Multi-speed Parallax + Idle Sine-Wave Bobbing (3.5s, ±8px)
         ======================================================== */}

      {/* Asset 1: Top-Left (Velocity -0.3) */}
      <motion.div
        style={{ y: yParallax1 }}
        className="pointer-events-none absolute top-28 left-4 xl:left-12 z-20 hidden md:block select-none"
      >
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity, delay: 0 }}
          className="rounded-2xl bg-[#42041D]/90 border border-white/15 p-4 backdrop-blur-md shadow-2xl flex items-center gap-3 w-56 hover:border-[#E60000] transition-colors pointer-events-auto group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#E60000]/20 border border-[#E60000]/40 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 text-[#FFE6D2] group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <span className="font-meat text-[11px] font-bold uppercase tracking-wider text-white block">
              MAIN CAMPUS
            </span>
            <span className="font-mono text-[10px] text-[#FFE6D2]/70 block leading-tight">
              Gelugor, Penang Focus
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Asset 2: Top-Right (Velocity +0.2) */}
      <motion.div
        style={{ y: yParallax2 }}
        className="pointer-events-none absolute top-32 right-4 xl:right-12 z-20 hidden md:block select-none"
      >
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity, delay: 0.9 }}
          className="rounded-2xl bg-[#42041D]/90 border border-white/15 p-4 backdrop-blur-md shadow-2xl flex items-center gap-3 w-56 hover:border-[#DBB353] transition-colors pointer-events-auto group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#DBB353]/20 border border-[#DBB353]/40 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-[#DBB353] group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <span className="font-meat text-[11px] font-bold uppercase tracking-wider text-white block">
              TAMIL HERITAGE
            </span>
            <span className="font-mono text-[10px] text-[#FFE6D2]/70 block leading-tight">
              Dignity & Culture
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Asset 3: Bottom-Left (Velocity -0.15) */}
      <motion.div
        style={{ y: yParallax3 }}
        className="pointer-events-none absolute bottom-24 left-6 xl:left-14 z-20 hidden lg:block select-none"
      >
        <motion.div
          animate={{ y: [-7, 9, -7] }}
          transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity, delay: 1.7 }}
          className="rounded-2xl bg-[#42041D]/90 border border-white/15 p-4 backdrop-blur-md shadow-2xl flex items-center gap-3 w-60 hover:border-[#E60000] transition-colors pointer-events-auto group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#E60000]/20 border border-[#E60000]/40 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-[#E60000] group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <span className="font-meat text-[11px] font-bold uppercase tracking-wider text-white block">
              100% ENCRYPTED
            </span>
            <span className="font-mono text-[10px] text-[#FFE6D2]/70 block leading-tight">
              Zero Identifier Tracking
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Asset 4: Bottom-Right (Velocity +0.4) */}
      <motion.div
        style={{ y: yParallax4 }}
        className="pointer-events-none absolute bottom-28 right-6 xl:right-14 z-20 hidden lg:block select-none"
      >
        <motion.div
          animate={{ y: [7, -9, 7] }}
          transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity, delay: 2.5 }}
          className="rounded-2xl bg-[#42041D]/90 border border-white/15 p-4 backdrop-blur-md shadow-2xl flex items-center gap-3 w-60 hover:border-[#DBB353] transition-colors pointer-events-auto group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#DBB353]/20 border border-[#DBB353]/40 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 text-[#DBB353] group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <span className="font-meat text-[11px] font-bold uppercase tracking-wider text-white block">
              DIRECT EXCO ACTION
            </span>
            <span className="font-mono text-[10px] text-[#FFE6D2]/70 block leading-tight">
              Rapid 48h Resolution SLA
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* ========================================================
          CENTER: Large Editorial Typographic Lockup
         ======================================================== */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center text-center my-auto">
        
        {/* Top Official Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#FFE6D2] mb-6 shadow-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E60000] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60000]"></span>
          </span>
          <span className="font-meat tracking-[0.18em] text-[11px] sm:text-xs font-semibold uppercase text-white">
            PERSATUAN KEBUDAYAAN INDIA USM • MAIN CAMPUS ADVOCACY
          </span>
        </motion.div>

        {/* Editorial Masked Staggered Heading */}
        <EditorialMaskedHeading
          text="THE குரல்"
          highlightWord="குரல்"
          as="h1"
          stagger={0.1}
          duration={0.85}
          className="font-meat font-black text-6xl sm:text-8xl md:text-9xl lg:text-[130px] tracking-tight uppercase leading-[0.85] text-white max-w-5xl"
          highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#DBB353] via-[#FFE6D2] to-[#E60000]"
        />

        {/* Subtitle / Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#FFE6D2]/80 max-w-2xl font-light leading-relaxed"
        >
          The dedicated sanctuary for Indian students at Universiti Sains Malaysia Main Campus (Gelugor). Submit grievances, suggest campus initiatives, or seek council support — totally confidential and acted upon with urgency.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScroll('feedback')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E60000] hover:bg-[#c00500] text-white font-meat tracking-[0.1em] text-sm uppercase font-bold flex items-center justify-center gap-3 shadow-lg shadow-[#E60000]/30 hover:shadow-[#E60000]/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <MessageSquare className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
            <span>VOICE IN / SUBMIT FEEDBACK</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleScroll('about')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-meat tracking-[0.1em] text-sm uppercase font-semibold border border-white/15 hover:border-white/30 backdrop-blur-sm transition-all cursor-pointer"
          >
            DISCOVER OUR MISSION & VISION
          </button>
        </motion.div>
      </div>

      {/* Gentle Scroll Cue */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8">
        <button
          onClick={() => handleScroll('feedback')}
          className="flex flex-col items-center gap-1 text-[#FFE6D2]/60 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll to Feedback Form"
        >
          <span className="font-meat text-[10px] tracking-[0.2em] uppercase font-medium">
            EXPLORE PORTAL
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#DBB353]" />
        </button>
      </div>
    </section>
  );
}
