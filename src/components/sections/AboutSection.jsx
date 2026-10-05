import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Target, Compass, Sparkles, Shield, HeartHandshake, Eye, ArrowRight } from 'lucide-react';
import DynamicSectionHeading from '../ui/DynamicSectionHeading.jsx';

// Official PKI USM Mission Manifesto
const MANIFESTO_TEXT =
  'TO BE THE UNCOMPROMISING PILLAR FOR EVERY INDIAN STUDENT AT UNIVERSITI SAINS MALAYSIA — CULTIVATING A COMMUNITY WHERE EVERY VOICE IS HEARD, EVERY GRIEVANCE IS DEFENDED, AND NO STUDENT WALKS ALONE.';

const HIGHLIGHT_WORDS = [
  'UNCOMPROMISING',
  'PILLAR',
  'EVERY',
  'INDIAN',
  'STUDENT',
  'COMMUNITY',
  'HEARD,',
  'DEFENDED,',
  'NO',
  'WALKS',
  'ALONE.',
];

function ManifestoDisplay({ text }) {
  const words = text.split(' ');

  return (
    <div className="font-meat font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[0.03em] uppercase text-left max-w-5xl mx-auto my-4 select-none">
      {words.map((word, i) => {
        const isHighlight = HIGHLIGHT_WORDS.includes(word);

        return (
          <span
            key={i}
            className={`inline-block mr-2 sm:mr-3 my-1 ${
              isHighlight
                ? 'text-[#e10600] font-black drop-shadow-[0_0_8px_rgba(225,6,0,0.5)]'
                : 'text-white/90'
            }`}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}

// Kinetic Marquee Punk Tape (Runs 100% on browser compositor thread with 0 JS lag)
function MarqueeTape({ text, reverse = false, bg = 'bg-[#000000]', textColor = 'text-[#DBB353]' }) {
  const animClass = reverse ? 'animate-marquee-reverse-css' : 'animate-marquee-css';
  return (
    <div className={`w-full overflow-hidden select-none py-2.5 ${bg} border-y border-black`}>
      <div className={`${animClass} whitespace-nowrap font-meat text-xs sm:text-sm font-bold tracking-[0.1em] uppercase`}>
        <span className={`mr-6 ${textColor}`}>{text}</span>
        <span className={`mr-6 ${textColor}`}>{text}</span>
        <span className={`mr-6 ${textColor}`}>{text}</span>
        <span className={`mr-6 ${textColor}`}>{text}</span>
      </div>
    </div>
  );
}

const TABS = [
  { id: 'vision', label: 'OUR VISION', num: '01', desc: 'Sacred Calling' },
  { id: 'mission', label: 'OUR MISSION', num: '02', desc: 'Direct Action' },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#260212] overflow-hidden flex flex-col justify-center section-contain"
    >
      {/* Background South Indian Kolam motif overlay */}
      <div className="pointer-events-none absolute inset-0 bg-kolam-dark opacity-35" aria-hidden="true" />

      {/* Floating Organic Mask Cut-out 1 (Desktop only, GPU accelerated) */}
      <div
        style={{
          clipPath: 'polygon(14% 0%, 92% 10%, 100% 75%, 82% 100%, 12% 92%, 0% 32%)',
        }}
        className="pointer-events-none absolute -left-10 top-1/4 z-0 hidden xl:block w-72 h-80 overflow-hidden shadow-none select-none opacity-40 hover:opacity-70 transition-opacity"
      >
        <img
          src="/images/indian_heritage_hero.jpg"
          alt="South Indian Heritage"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover scale-110 filter contrast-125 saturate-150"
        />
        <div className="absolute inset-0 bg-[#260212]/30 mix-blend-multiply" />
      </div>

      {/* Floating Organic Mask Cut-out 2 (Right Side) */}
      <div
        style={{
          clipPath: 'polygon(20% 0%, 100% 18%, 88% 88%, 70% 100%, 0% 82%, 8% 25%)',
        }}
        className="pointer-events-none absolute -right-12 bottom-1/4 z-0 hidden xl:block w-64 h-72 overflow-hidden shadow-none select-none opacity-35 hover:opacity-60 transition-opacity"
      >
        <img
          src="/images/indian_border_pattern.jpg"
          alt="Tamil Cultural Motifs"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover scale-110 filter contrast-125"
        />
        <div className="absolute inset-0 bg-[#e10600]/25 mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Dynamic Section Heading with Kinetic Mask & Bracket Accents */}
        <div className="mb-6">
          <DynamicSectionHeading
            eyebrow="PERSATUAN KEBUDAYAAN INDIA USM"
            icon={Flame}
            tamilSub="எங்கள் நோக்கம் • SACRED MANIFESTO"
            titleLine1="OUR SACRED"
            titleLine2="MISSION"
            titleLine2Color="#e10600"
            description="READ THE MANIFESTO BELOW — OUR PLEDGE FOR EVERY INDIAN STUDENT AT UNIVERSITI SAINS MALAYSIA."
            align="center"
            size="section"
          />
        </div>

        {/* 1. Kinetic Marquee Punk Ribbon 1 (Forward Direction) */}
        <div className="my-6">
          <MarqueeTape
            text="✦ PKI USM MANIFESTO ✦ UNCOMPROMISING ADVOCACY ✦ CONFIDENTIAL & DIRECT ✦ குரல் • THE VOICE ✦ ZERO RETALIATION ✦ PERSATUAN KEBUDAYAAN INDIA ✦"
            reverse={false}
            bg="bg-[#000000]"
            textColor="text-[#DBB353]"
          />
        </div>

        {/* 2. THE MANIFESTO PLEDGE CARD */}
        <div
          className="relative my-8 p-6 sm:p-12 rounded-[24px] bg-[#4f0423]/70 border border-black/80 backdrop-blur-sm shadow-2xl"
        >
          {/* Top Eyebrow Tag */}
          <div className="flex items-center justify-between border-b border-black/60 pb-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#DBB353] font-bold">
              THE PLEDGE • சத்தியப்பிரமாணம்
            </span>
            <span className="font-meat text-xs text-[#ffc7c6] uppercase tracking-wider">
              OFFICIAL MANDATE ▾
            </span>
          </div>

          {/* Clean High-Performance Manifesto Display */}
          <ManifestoDisplay text={MANIFESTO_TEXT} />
        </div>

        {/* 3. Kinetic Marquee Ribbon 2 (Reverse Direction in Impossible Red) */}
        <div className="my-6">
          <MarqueeTape
            text="◂ WE ADVOCATE ◂ WE PROTECT ◂ WE EMPOWER ◂ WE ELEVATE ◂ மாணவர் உரிமை ◂ REAL IMPACT ◂"
            reverse={true}
            bg="bg-[#e10600]"
            textColor="text-white"
          />
        </div>

        {/* 4. Category Tabs with Number Badges (Impossible Foods Pattern) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-8">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2.5 px-4 sm:px-6 py-2.5 rounded-[15px] transition-all cursor-pointer font-meat text-xs sm:text-sm tracking-[0.04em] uppercase ${
                  isActive
                    ? 'bg-[#e10600] text-white border border-[#e10600] shadow-md'
                    : 'bg-[#4f0423]/70 text-[#ffc7c6] border border-black/60 hover:bg-[#4f0423] hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white text-[#e10600]' : 'bg-[#000000] text-[#DBB353]'
                  }`}
                >
                  {tab.num}
                </span>

                {/* Impossible active underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-1.5 inset-x-4 h-[2px] bg-white rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* 5. Animated Tab Content Stage (Impossible 38px and 12px Flat Cards) */}
        <AnimatePresence mode="wait">
          {activeTab === 'vision' && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Feature Card (38px radius) */}
              <div className="lg:col-span-8 rounded-[38px] bg-[#4f0423] border border-black p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between">
                <div className="pointer-events-none absolute left-4 top-4 text-[#DBB353] text-sm">✦</div>
                <div className="pointer-events-none absolute right-4 top-4 text-[#DBB353] text-sm">✦</div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-[#DBB353]" />
                    <span className="font-meat text-xs uppercase tracking-[0.1em] text-[#ffc7c6] font-bold">
                      PILLAR 01 • STRATEGIC VISION
                    </span>
                  </div>
                  <h3 className="font-meat text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mt-1">
                    OUR CORE VISION
                  </h3>
                  <div className="h-1 w-16 bg-[#e10600] mt-2 mb-5 rounded-full" />
                  <p className="font-body text-base sm:text-lg leading-relaxed text-[#ffffff]/90 font-medium">
                    To be the trusted, proactive, and empowering pillar for every Indian student at
                    Universiti Sains Malaysia — cultivating an inclusive, heard, and flourishing campus
                    community built upon mutual respect, cultural dignity, and institutional accountability.
                  </p>
                </div>

                {/* Mehrab Watermark */}
                <div className="relative z-0 mt-8 flex justify-center opacity-25">
                  <svg className="w-56 h-24 text-[#DBB353]" viewBox="0 0 200 100" fill="none">
                    <path
                      d="M10 100 C 10 30, 45 10, 100 0 C 155 10, 190 30, 190 100 Z"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <circle cx="100" cy="50" r="16" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Side Stat Card (12px radius) */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-4">
                <div className="p-6 rounded-[12px] bg-[#000000] border border-black flex-1 flex flex-col justify-center">
                  <span className="font-meat text-4xl sm:text-5xl font-bold text-[#e10600] block">
                    100%
                  </span>
                  <span className="font-meat text-xs uppercase tracking-wider text-white mt-1 block">
                    CONFIDENTIALITY CHARTER
                  </span>
                  <p className="font-body text-xs text-[#ffc7c6] mt-2 leading-relaxed">
                    Zero student identifiers stored. Complete protection against administrative retribution.
                  </p>
                </div>

                <div className="p-6 rounded-[12px] bg-[#4f0423] border border-black flex-1 flex flex-col justify-center">
                  <span className="font-meat text-4xl sm:text-5xl font-bold text-[#DBB353] block">
                    MAIN
                  </span>
                  <span className="font-meat text-xs uppercase tracking-wider text-white mt-1 block">
                    USM MAIN CAMPUS JURISDICTION
                  </span>
                  <p className="font-body text-xs text-[#ffc7c6] mt-2 leading-relaxed">
                    Dedicated advocacy, representations, and grievance resolution for students at USM Main Campus (Gelugor).
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'mission' && (
            <motion.div
              key="mission"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-8 rounded-[38px] bg-[#4f0423] border border-black flex flex-col justify-between">
                <div>
                  <span className="font-meat text-xs text-[#DBB353] uppercase tracking-widest font-bold block mb-2">
                    DIRECTIVE 01
                  </span>
                  <h4 className="font-meat text-2xl sm:text-3xl font-bold uppercase text-white">
                    HERITAGE & CELEBRATION
                  </h4>
                  <div className="h-0.5 w-12 bg-[#e10600] my-3" />
                  <p className="font-body text-sm sm:text-base text-[#ffc7c6] leading-relaxed">
                    Celebrate South Indian culture, Tamil literature, traditional festivals, and student talents through vibrant campus gatherings and community events.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 font-mono text-[11px] text-[#DBB353]">
                  <span>✦ PRIORITY LEVEL 1</span>
                </div>
              </div>

              <div className="p-8 rounded-[38px] bg-[#4f0423] border border-black flex flex-col justify-between">
                <div>
                  <span className="font-meat text-xs text-[#DBB353] uppercase tracking-widest font-bold block mb-2">
                    DIRECTIVE 02
                  </span>
                  <h4 className="font-meat text-2xl sm:text-3xl font-bold uppercase text-white">
                    STUDENT WELLBEING
                  </h4>
                  <div className="h-0.5 w-12 bg-[#e10600] my-3" />
                  <p className="font-body text-sm sm:text-base text-[#ffc7c6] leading-relaxed">
                    Provide practical, direct support for students in need, including food assistance, meal relief, and small financial aids.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 font-mono text-[11px] text-[#DBB353]">
                  <span>✦ PRIORITY LEVEL 1</span>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
