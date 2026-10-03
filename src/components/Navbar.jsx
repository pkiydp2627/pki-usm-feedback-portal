import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame, Shield, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', num: '01', label: 'HOME / SANCTUARY' },
  { id: 'feedback', num: '02', label: 'VOICE IN (FEEDBACK)' },
  { id: 'about', num: '03', label: 'ABOUT PKI & PILLARS' },
  { id: 'faq', num: '04', label: 'FREQUENTLY ASKED' },
  { id: 'contact', num: '05', label: 'DIRECT LINE / CONTACT' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Live Scroll Spy to detect current section
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const scrollToSection = (id) => {
    setOpen(false);
    if (!isHomePage) {
      navigate(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{ backgroundColor: '#18010b' }}
      className="sticky top-0 z-50 w-full border-b border-white/10 text-white select-none transition-all shadow-md"
    >
      {/* Top Hairline kinetic red-gold accent gradient */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#e10600] via-[#DBB353] to-[#e10600]" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        {/* Left: Brandmark */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer text-left focus:outline-none"
        >
          <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#3b031d] to-[#1a010c] border border-[#DBB353]/30 text-[#DBB353] group-hover:scale-105 group-hover:border-[#DBB353] shadow-[0_0_12px_rgba(219,179,83,0.25)] transition-all">
            <Flame className="h-4 w-4 sm:h-5 sm:w-5 diya-glow text-[#DBB353]" />
          </span>
          <div className="flex flex-col">
            <span className="font-meat text-base sm:text-lg lg:text-xl font-bold tracking-[0.06em] text-[#e10600] group-hover:text-white transition-colors uppercase leading-none">
              PKI USM
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#ffc7c6] font-semibold mt-0.5">
              FEEDBACK PORTAL
            </span>
          </div>
        </button>

        {/* Center: Desktop Section Links with Impossible Active Pill */}
        <nav className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((sec) => {
            const isActive = isHomePage && activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`px-3.5 py-1.5 rounded-full font-meat text-xs tracking-[0.04em] uppercase transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#e10600] text-white font-bold shadow-[0_0_12px_rgba(225,6,0,0.5)]'
                    : 'text-[#ffc7c6] hover:text-white hover:bg-white/10'
                }`}
              >
                {sec.num} {sec.label.split(' ')[0]}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Link
            to="/committee/login"
            className="btn-impossible-ghost hidden md:inline-flex !py-1.5 !px-3 !text-xs"
          >
            <Shield className="h-3.5 w-3.5 text-[#DBB353]" />
            <span>LOGIN</span>
          </Link>

          <button
            onClick={() => scrollToSection('feedback')}
            className="bg-gradient-to-r from-[#e10600] to-[#b80500] hover:from-[#ff1a14] hover:to-[#e10600] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-meat text-[11px] sm:text-xs font-semibold uppercase tracking-[0.04em] flex items-center gap-1 shadow-[0_0_12px_rgba(225,6,0,0.4)] active:scale-95 transition-all cursor-pointer"
          >
            <span>VOICE IN</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            className="h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 lg:hidden cursor-pointer transition-all"
          >
            {open ? <X className="h-5 w-5 text-[#ffc7c6]" /> : <Menu className="h-5 w-5 text-[#ffc7c6]" />}
          </button>
        </div>
      </div>

      {/* Modern High-End 100% Solid Opaque Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark Backdrop Overlay to prevent content bleed */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
              className="fixed inset-0 z-40 backdrop-blur-md lg:hidden"
            />

            {/* 100% Opaque Solid Drawer Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{ backgroundColor: '#14010a' }}
              className="fixed inset-x-0 top-[53px] sm:top-[60px] border-b-2 border-[#DBB353]/40 shadow-[0_30px_90px_rgba(0,0,0,1)] z-50 px-4 py-5 lg:hidden max-h-[calc(100vh-60px)] overflow-y-auto"
            >
              {/* Background South Indian Kolam motif overlay */}
              <div className="pointer-events-none absolute inset-0 bg-kolam-dark opacity-10" aria-hidden="true" />

              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center justify-between px-2 mb-1">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#DBB353] font-bold uppercase flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3 text-[#DBB353]" />
                    <span>SECTIONS DIRECTORY</span>
                  </span>
                  <span className="font-tamil text-xs text-[#DBB353]">குரல்</span>
                </div>

                {SECTIONS.map((sec, idx) => {
                  const isActive = isHomePage && activeSection === sec.id;
                  return (
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03, duration: 0.18 }}
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      style={{
                        backgroundColor: isActive ? '#e10600' : '#220211',
                      }}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl font-meat text-xs sm:text-sm tracking-[0.04em] uppercase transition-all text-left cursor-pointer border ${
                        isActive
                          ? 'bg-gradient-to-r from-[#e10600] to-[#80031a] text-white font-bold border-[#e10600] shadow-[0_0_15px_rgba(225,6,0,0.5)]'
                          : 'text-[#ffc7c6] border-white/10 hover:border-[#DBB353]/50 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-xs font-semibold ${isActive ? 'text-[#DBB353]' : 'text-[#DBB353]/70'}`}>
                          {sec.num}
                        </span>
                        <span className="text-white font-bold">{sec.label}</span>
                      </div>
                      <ChevronRight className={`h-4 w-4 ${isActive ? 'text-white' : 'text-[#DBB353]/50'}`} />
                    </motion.button>
                  );
                })}

                {/* Mobile Drawer Bottom Quick Action Stack */}
                <div className="mt-3 pt-3 border-t border-white/15 flex flex-col gap-2.5">
                  <button
                    onClick={() => scrollToSection('feedback')}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#e10600] hover:bg-[#b80500] text-white font-meat font-bold text-xs uppercase tracking-wider shadow-[0_0_18px_rgba(225,6,0,0.6)] transition-all cursor-pointer active:scale-98"
                  >
                    <Flame className="h-4 w-4 text-[#DBB353] diya-glow" />
                    <span>VOICE IN — SUBMIT FEEDBACK NOW</span>
                  </button>

                  <Link
                    to="/committee/login"
                    onClick={() => setOpen(false)}
                    style={{ backgroundColor: '#220211' }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl border border-[#DBB353]/40 hover:border-[#DBB353] text-[#ffc7c6] hover:text-white font-meat text-xs uppercase tracking-wider transition-all"
                  >
                    <Shield className="h-4 w-4 text-[#DBB353]" />
                    <span>COMMITTEE PORTAL LOGIN</span>
                  </Link>

                  <p className="text-center font-mono text-[9px] tracking-widest text-[#DBB353]/70 uppercase pt-1">
                    ✦ PKI USM STUDENT SANCTUARY • 100% CONFIDENTIAL ✦
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
