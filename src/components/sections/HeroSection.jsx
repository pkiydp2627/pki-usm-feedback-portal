import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import TransparentFramePlayer from '../TransparentFramePlayer.jsx';

export default function HeroSection({
  onScrollToSection,
}) {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[200vh] sm:h-[220vh] w-full bg-[#260212]"
    >
      {/* Sticky Full-Screen Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-end pb-6 bg-[#260212] overflow-hidden relative">
        {/* Background South Indian Kolam motif overlay */}
        <div className="pointer-events-none absolute inset-0 bg-kolam-dark opacity-35" aria-hidden="true" />

        {/* Floating Organic Decorative Shapes */}
        <div
          className="pointer-events-none absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#e10600]/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[#DBB353]/10 blur-3xl"
          aria-hidden="true"
        />

        {/* Monumental Transparent Video Canvas Stage — Full-Bleed All Four Edges (Left, Right, Up, Down) */}
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-auto">
          <TransparentFramePlayer />
        </div>

        {/* Interactive Scroll Cue Indicator Floating Above Bottom Courtyard */}
        <div className="relative z-20 mx-auto w-full flex flex-col items-center pb-2 pointer-events-none">
          <button
            onClick={() => onScrollToSection('feedback')}
            className="flex flex-col items-center text-[#ffc7c6] hover:text-white transition-colors cursor-pointer group pointer-events-auto"
            aria-label="Scroll to Feedback Section"
          >
            <span className="font-meat text-[10px] sm:text-[11px] tracking-[0.08em] uppercase font-medium flex items-center gap-1.5 bg-[#260212]/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 shadow-lg group-hover:border-[#e10600]/60 transition-colors">
              <span>SCROLL TO ANIMATE & EXPLORE</span>
              <span className="text-[#DBB353]">◂</span>
            </span>
            <ArrowDown className="h-3.5 w-3.5 mt-1 animate-bounce text-[#e10600]" />
          </button>
        </div>
      </div>
    </section>
  );
}
