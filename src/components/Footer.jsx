import { Flame, Shield, ArrowUp, MapPin } from 'lucide-react';

export default function Footer({ onScrollToSection }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = (id) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t-2 border-black bg-[#000000] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 select-none z-10">
      {/* Top Hairline Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#e10600] to-transparent opacity-80" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Manifesto */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#260212] border border-[#e10600] text-[#DBB353]">
                  <Flame className="h-5 w-5 diya-glow" />
                </span>
                <div>
                  <span className="font-meat text-2xl font-bold uppercase tracking-[0.06em] text-[#e10600] block leading-none">
                    PERSATUAN KEBUDAYAAN INDIA
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#DBB353] font-semibold mt-0.5 block">
                    UNIVERSITI SAINS MALAYSIA • குரல்
                  </span>
                </div>
              </div>

              <p className="mt-4 font-body text-xs sm:text-sm text-[#ffc7c6] leading-relaxed max-w-md">
                A confidential, fearless sanctuary for Indian students across every USM campus to share feedback, voice concerns, and drive institutional accountability.
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-[15px] bg-[#260212] border border-black px-3.5 py-1.5 max-w-xs">
              <Shield className="h-3.5 w-3.5 text-[#DBB353]" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#ffc7c6]">
                Manifesto Initiative #2: Zero Retaliation
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="font-meat text-xs uppercase tracking-[0.1em] text-[#DBB353] font-bold block mb-4">
              SECTION DIRECTORY
            </span>
            <ul className="space-y-2.5 font-meat text-sm tracking-wider uppercase text-[#ffc7c6]">
              <li>
                <button
                  onClick={() => handleScroll('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  01 • THE GATEWAY
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('feedback')}
                  className="hover:text-[#e10600] transition-colors cursor-pointer"
                >
                  02 • SUBMIT FEEDBACK
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  03 • ABOUT & PILLARS
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  04 • FAQ & CLARITY
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  05 • CONTACT & LEADERSHIP
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Campuses & Address */}
          <div className="md:col-span-3">
            <span className="font-meat text-xs uppercase tracking-[0.1em] text-[#DBB353] font-bold block mb-4">
              USM CAMPUS COVERAGE
            </span>
            <ul className="space-y-2 font-mono text-xs text-[#ffc7c6]/80">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e10600]" />
                <span>Main Campus, Gelugor (Penang)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#DBB353]" />
                <span>Engineering Campus, Nibong Tebal</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#DBB353]" />
                <span>Health Campus, Kubang Kerian</span>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 rounded-[15px] border border-white/20 bg-white/5 px-3.5 py-1.5 font-meat text-xs uppercase tracking-wider text-white hover:bg-[#e10600] hover:border-[#e10600] transition-colors cursor-pointer"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>RETURN TO TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tamil Proverb */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#ffc7c6]/60">
          <p>
            © {new Date().getFullYear()} Persatuan Kebudayaan India (PKI USM). All rights reserved.
          </p>
          <p className="font-tamil text-xs text-[#DBB353] opacity-80">
            செல்வத்துள் செல்வம் செவிச்செல்வம் • திருக்குறள் 411
          </p>
        </div>
      </div>
    </footer>
  );
}
