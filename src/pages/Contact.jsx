import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const myDetails = {
  position: 'PKI President',
  phone: '+60 11-2966 8254',
  instagram: '_sahen.kathi_',
  email: 'pki.ydp2627@gmail.com',
};

export default function Contact() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-cream-50 text-maroon-950 overflow-hidden flex flex-col justify-between selection:bg-gold-300 selection:text-maroon-950">
      {/* Subtle Hairline Canvas Boundaries */}
      <div className="pointer-events-none absolute inset-x-6 sm:inset-x-12 top-0 h-px bg-maroon-900/15" />
      <div className="pointer-events-none absolute inset-x-6 sm:inset-x-12 bottom-0 h-px bg-maroon-900/15" />

      {/* Top Architectural Bar */}
      <header className="relative z-10 px-6 sm:px-12 pt-6 sm:pt-8 flex items-center justify-between">
        {/* Left: Brandmark & Jaali Grid Glyph */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="font-condensed text-3xl font-bold tracking-tight text-[#B2382D] group-hover:text-maroon-800 transition-colors uppercase">
            PKI USM
          </span>
          <div className="grid grid-cols-3 gap-0.5 w-3.5 h-3.5 opacity-80" aria-hidden="true">
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
          <div className="w-[1.5px] h-9 bg-maroon-900/60" />
        </div>

        {/* Right: Marginal Sub-label */}
        <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-maroon-900/50 font-semibold">
          OFFICE DIRECTORY
        </div>
      </header>

      {/* Main Split Editorial Content */}
      <main className="relative z-10 px-6 sm:px-12 py-10 sm:py-16 lg:py-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Margin Vertical Annotations (Desktop only) */}
        <div className="hidden xl:flex absolute left-4 top-1/2 -translate-y-1/2 h-80 flex-col justify-between items-center pointer-events-none select-none">
          <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-maroon-900/40 font-semibold">
            INITIATIVES
          </span>
          <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-maroon-900/40 font-semibold">
            ABOUT
          </span>
        </div>

        {/* Left Column: Monumental "CONTACT US" Typography */}
        <div className="lg:col-span-6 flex flex-col justify-center select-none lg:pr-6">
          <h1 className="font-condensed font-bold uppercase tracking-tight text-[#B2382D] leading-[0.85] text-7xl sm:text-8xl md:text-9xl lg:text-[8.5rem] xl:text-[10.5rem] 2xl:text-[11.5rem] transition-colors">
            <span className="block">CONTACT</span>
            <span className="block">US</span>
          </h1>
        </div>

        {/* Right Column: Structured Architectural Metadata */}
        <div className="lg:col-span-6 flex flex-col justify-center lg:pl-6 xl:pl-10">
          {/* Main Entity Title */}
          <div className="mb-8 sm:mb-10">
            <h2 className="font-condensed text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-maroon-950">
              PERSATUAN KEBUDAYAAN INDIA
            </h2>
            <p className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.22em] text-maroon-800/80 uppercase mt-1">
              UNIVERSITI SAINS MALAYSIA
            </p>
          </div>

          {/* 2-Column Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {/* Column 1: Representation & Get In Touch CTA */}
            <div className="flex flex-col justify-between space-y-6 sm:space-y-8">
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.22em] text-maroon-900/60 font-semibold mb-2">
                  THE OFFICE
                </span>
                <p className="font-body text-base font-semibold text-maroon-950">
                  {myDetails.position}
                </p>
                <p className="font-body text-sm text-maroon-900/75 mt-0.5">
                  Universiti Sains Malaysia
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-maroon-900/60 font-semibold">
                    FEEDBACK
                  </span>
                  <span className="inline-block w-8 h-[2px] bg-[#B2382D]" />
                </div>
                <Link
                  to="/feedback"
                  className="inline-flex items-center justify-center bg-[#B8BAC0] hover:bg-maroon-900 text-white font-mono text-xs uppercase tracking-[0.22em] font-bold px-7 py-3.5 transition-all duration-200 shadow-xs hover:shadow-md"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>

            {/* Column 2: Telephone, Email & Social */}
            <div className="space-y-6 sm:space-y-7">
              {/* Telephone */}
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.22em] text-maroon-900/60 font-semibold mb-1.5">
                  TELEPHONE
                </span>
                <a
                  href={`tel:${myDetails.phone}`}
                  className="font-mono text-sm sm:text-base font-semibold text-maroon-950 hover:text-[#B2382D] transition-colors"
                >
                  {myDetails.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.22em] text-maroon-900/60 font-semibold mb-1.5">
                  EMAIL
                </span>
                <a
                  href={`mailto:${myDetails.email}`}
                  className="font-mono text-xs sm:text-sm text-maroon-950 underline decoration-maroon-300 underline-offset-4 hover:text-[#B2382D] hover:decoration-[#B2382D] transition-colors break-all"
                >
                  {myDetails.email}
                </a>
              </div>

              {/* Social */}
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.22em] text-maroon-900/60 font-semibold mb-1.5">
                  SOCIAL
                </span>
                <a
                  href={`https://instagram.com/${myDetails.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs sm:text-sm font-semibold text-maroon-950 hover:text-[#B2382D] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>INSTAGRAM / @{myDetails.instagram}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Margin Vertical Annotations (Desktop only) */}
        <div className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 h-80 flex-col justify-between items-center pointer-events-none select-none">
          <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-maroon-900/40 font-semibold">
            SHARE
          </span>
          {/* Subtle slider/pip indicator */}
          <div className="w-2.5 h-4 bg-maroon-900/60 rounded-[1px]" />
          <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-maroon-900/40 font-semibold">
            SOCIAL
          </span>
        </div>
      </main>

      {/* Bottom Editorial Footer Bar with Circular Seal Stamp */}
      <footer className="relative z-10 px-6 sm:px-12 pb-6 sm:pb-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Navigation Section cues */}
        <div className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.25em] text-maroon-900/60 font-semibold">
          <Link to="/" className="hover:text-maroon-950 transition-colors">PORTAL</Link>
          <Link to="/about" className="hover:text-maroon-950 transition-colors">ABOUT</Link>
          <span className="text-maroon-950 font-bold">CONTACT</span>
        </div>

        {/* Bottom Right: Circular Rotating Architectural Seal Stamp */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none">
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
            <span className="text-xs text-gold-600">✦</span>
            <span className="font-condensed text-xs font-bold tracking-wider text-maroon-950 uppercase">
              USM
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
