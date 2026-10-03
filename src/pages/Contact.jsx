import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const myDetails = {
  name: 'Saahendrran Kathiresan',
  position: 'PKI President',
  phone: '+60 11-2966 8254',
  instagram: '_sahen.kathi_',
  email: 'pki.ydp2627@gmail.com',
};

export default function Contact() {
  return (
    <div className="relative min-h-[calc(100vh-75px)] bg-cream-50 text-maroon-950 overflow-hidden flex flex-col justify-between selection:bg-gold-300 selection:text-maroon-950">
      {/* Subtle Hairline Canvas Boundaries */}
      <div className="pointer-events-none absolute inset-x-4 sm:inset-x-8 md:inset-x-12 top-0 h-px bg-maroon-900/15" />
      <div className="pointer-events-none absolute inset-x-4 sm:inset-x-8 md:inset-x-12 bottom-0 h-px bg-maroon-900/15" />

      {/* Top Architectural Bar */}
      <header className="relative z-10 px-4 sm:px-8 md:px-12 pt-4 sm:pt-6 md:pt-8 flex items-center justify-between">
        {/* Left: Brandmark & Jaali Grid Glyph */}
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group">
          <span className="font-condensed text-2xl sm:text-3xl font-bold tracking-tight text-[#B2382D] group-hover:text-maroon-800 transition-colors uppercase">
            PKI USM
          </span>
          <div className="grid grid-cols-3 gap-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-80" aria-hidden="true">
            <span className="w-0.5 h-0.5 bg-[#B2382D] rounded-full" />
            <span className="w-0.5 h-0.5 bg-[#B2382D] rounded-full" />
            <span className="w-0.5 h-0.5 bg-[#B2382D] rounded-full" />
            <span className="w-0.5 h-0.5 bg-[#B2382D] rounded-full" />
            <span className="w-0.5 h-0.5 bg-[#B2382D] rounded-full" />
            <span className="w-0.5 h-0.5 bg-[#B2382D] rounded-full" />
            <span className="w-0.5 h-0.5 bg-[#B2382D] rounded-full" />
            <span className="w-0.5 h-0.5 bg-[#B2382D] rounded-full" />
            <span className="w-0.5 h-0.5 bg-[#B2382D] rounded-full" />
          </div>
        </Link>

        {/* Center: Architectural Hairline Top Notch */}
        <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none">
          <div className="w-[1.5px] h-8 md:h-9 bg-maroon-900/60" />
        </div>

        {/* Right: Marginal Sub-label */}
        <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-maroon-900/60 font-semibold">
          OFFICE DIRECTORY
        </div>
      </header>

      {/* Main Split Editorial Content */}
      <main className="relative z-10 px-4 sm:px-8 md:px-12 py-6 sm:py-10 md:py-14 lg:py-16 flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 items-center">
        {/* Left Margin Vertical Annotations (Desktop only) */}
        <div className="hidden xl:flex absolute left-4 top-1/2 -translate-y-1/2 h-72 flex-col justify-between items-center pointer-events-none select-none">
          <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-maroon-900/40 font-semibold">
            INITIATIVES
          </span>
          <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-maroon-900/40 font-semibold">
            ABOUT
          </span>
        </div>

        {/* Left Column: Monumental "CONTACT US" Typography */}
        <div className="md:col-span-5 lg:col-span-6 flex flex-col justify-center select-none">
          <h1 className="font-condensed font-bold uppercase tracking-tight text-[#B2382D] leading-[0.88] text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl transition-colors">
            <span className="block">CONTACT</span>
            <span className="block">US</span>
          </h1>
          <p className="mt-3 font-tamil text-sm sm:text-base text-maroon-800/80 font-semibold">
            தொடர்பு கொள்ளவும் • Speak to PKI Leadership
          </p>
        </div>

        {/* Right Column: Structured Architectural Metadata */}
        <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center">
          {/* Main Entity Title */}
          <div className="mb-6 sm:mb-8">
            <h2 className="font-condensed text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-maroon-950">
              PERSATUAN KEBUDAYAAN INDIA
            </h2>
            <p className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.18em] sm:tracking-[0.22em] text-maroon-800/80 uppercase mt-0.5">
              UNIVERSITI SAINS MALAYSIA
            </p>
          </div>

          {/* 2-Column Metadata Grid (Stacks on mobile, 2 cols on tablet & desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {/* Column 1: Representation & Get In Touch CTA */}
            <div className="flex flex-col justify-between space-y-5 sm:space-y-6 rounded-xl border border-cream-200/90 bg-white/70 p-4 sm:p-5 shadow-xs backdrop-blur">
              <div>
                <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-maroon-900/60 font-semibold mb-1.5">
                  PIC
                </span>
                <p className="font-body text-base sm:text-lg font-bold text-maroon-950">
                  {myDetails.name}
                </p>
                <p className="font-body text-xs sm:text-sm text-maroon-900/75 mt-0.5 font-medium">
                  {myDetails.position}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-maroon-900/60 font-semibold">
                    FEEDBACK
                  </span>
                  <span className="inline-block w-6 h-[2px] bg-[#B2382D]" />
                </div>
                <Link
                  to="/feedback"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white font-mono text-xs uppercase tracking-[0.2em] font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-sm"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>

            {/* Column 2: Telephone, Email & Social */}
            <div className="space-y-4 sm:space-y-5 rounded-xl border border-cream-200/90 bg-white/70 p-4 sm:p-5 shadow-xs backdrop-blur">
              {/* Telephone */}
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-maroon-900/60 font-semibold mb-1">
                  TELEPHONE
                </span>
                <a
                  href={`tel:${myDetails.phone}`}
                  className="font-mono text-sm sm:text-base font-semibold text-maroon-950 hover:text-[#B2382D] transition-colors inline-block py-0.5"
                >
                  {myDetails.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-maroon-900/60 font-semibold mb-1">
                  EMAIL
                </span>
                <a
                  href={`mailto:${myDetails.email}`}
                  className="font-mono text-xs sm:text-sm text-maroon-950 underline decoration-maroon-300 underline-offset-4 hover:text-[#B2382D] hover:decoration-[#B2382D] transition-colors break-all inline-block py-0.5"
                >
                  {myDetails.email}
                </a>
              </div>

              {/* Social */}
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-maroon-900/60 font-semibold mb-1">
                  SOCIAL
                </span>
                <a
                  href={`https://instagram.com/${myDetails.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs sm:text-sm font-semibold text-maroon-950 hover:text-[#B2382D] transition-colors inline-flex items-center gap-1.5 py-0.5"
                >
                  <span>@{myDetails.instagram}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Margin Vertical Annotations (Desktop only) */}
        <div className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 h-72 flex-col justify-between items-center pointer-events-none select-none">
          <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-maroon-900/40 font-semibold">
            SHARE
          </span>
          <div className="w-2 h-3.5 bg-maroon-900/60 rounded-[1px]" />
          <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-maroon-900/40 font-semibold">
            SOCIAL
          </span>
        </div>
      </main>

      {/* Bottom Editorial Footer Bar with Circular Seal Stamp */}
      <footer className="relative z-10 px-4 sm:px-8 md:px-12 pb-4 sm:pb-6 pt-3 border-t border-maroon-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Navigation Section cues */}
        <div className="flex items-center gap-6 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-maroon-900/60 font-semibold">
          <Link to="/" className="hover:text-maroon-950 transition-colors">PORTAL</Link>
          <Link to="/about" className="hover:text-maroon-950 transition-colors">ABOUT</Link>
          <span className="text-maroon-950 font-bold">CONTACT</span>
        </div>

        {/* Bottom Right: Circular Rotating Architectural Seal Stamp */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none">
          {/* Circular SVG text path */}
          <svg className="absolute inset-0 w-full h-full animate-[spin_25s_linear_infinite]" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="font-mono text-[8px] uppercase tracking-[0.24em] fill-maroon-900/70 font-semibold">
              <textPath href="#circlePath" startOffset="0%">
                PERSATUAN KEBUDAYAAN INDIA • USM •
              </textPath>
            </text>
          </svg>

          {/* Center Emblem */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-[10px] text-gold-600">✦</span>
            <span className="font-condensed text-[11px] font-bold tracking-wider text-maroon-950 uppercase">
              USM
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
