import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Shield, Trophy, Sparkles, MessageSquare, HeartHandshake, ArrowRight } from 'lucide-react';
import EditorialMaskedHeading from '../ui/EditorialMaskedHeading.jsx';

const CATEGORIES = ['ALL', 'SILAMBAM', 'KABADDI', 'DANCE', 'WELFARE', 'EVENT FEEDBACK'];

const TRACK_CARDS = [
  {
    id: 1,
    category: 'SILAMBAM',
    badge: 'MARTIAL ARTS UNIT',
    title: 'SILAMBAM TRAINING & SKILLS',
    description: 'Learn and master the traditional South Indian martial art of Silambam. Regular stick-fighting training, weapon handling, discipline, and campus showcase opportunities.',
    icon: Shield,
    metric: 'WEEKLY PRACTICE',
    metricLabel: 'Learn Traditional Art',
    highlightColor: '#DBB353',
    actionText: 'JOIN OR INQUIRE',
  },
  {
    id: 2,
    category: 'KABADDI',
    badge: 'TRADITIONAL SPORTS UNIT',
    title: 'KABADDI SQUAD & MATCHES',
    description: 'Train with the USM PKI Kabaddi team. Build agility, endurance, teamwork, and strength while representing the club in friendly varsity matches and sports events.',
    icon: Trophy,
    metric: 'TEAM SQUAD',
    metricLabel: 'Traditional Sports',
    highlightColor: '#E60000',
    actionText: 'JOIN THE TEAM',
  },
  {
    id: 3,
    category: 'DANCE',
    badge: 'PERFORMING ARTS UNIT',
    title: 'CULTURAL DANCE TROUPE',
    description: 'Express your talents through classical, semi-classical, and folk Tamil dance choreography. Rehearse, learn routines, and take the stage at cultural events.',
    icon: Sparkles,
    metric: 'STAGE SHOWCASE',
    metricLabel: 'Showcase Your Talent',
    highlightColor: '#FFE6D2',
    actionText: 'DANCE AUDITIONS',
  },
  {
    id: 4,
    category: 'EVENT FEEDBACK',
    badge: 'ORGANIZER FEEDBACK',
    title: 'ISSUES WITH PKI ORGANIZED EVENTS?',
    description: 'Faced any problem, logistics issue, or grievance during events or programs organized by PKI USM? Share your experience directly so our club committee can improve.',
    icon: MessageSquare,
    metric: 'DIRECT VOICE',
    metricLabel: 'Feedback to Exco',
    highlightColor: '#E60000',
    actionText: 'SUBMIT EVENT FEEDBACK',
  },
  {
    id: 5,
    category: 'WELFARE',
    badge: 'CLUB WELFARE',
    title: 'STUDENT WELFARE ASSISTANCE',
    description: 'As a student club, we are here to support fellow Indian students at USM Main Campus through peer guidance, welfare assistance, and a caring community network.',
    icon: HeartHandshake,
    metric: 'PEER SUPPORT',
    metricLabel: 'Club Welfare Help',
    highlightColor: '#DBB353',
    actionText: 'SEEK WELFARE HELP',
  },
];

export default function CampusActionTrack({ onScrollToSection }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const sectionRef = useRef(null);

  // Track vertical scroll across this 250vh section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Inertial smooth spring for silky horizontal scrub
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Map vertical scroll progress to horizontal translation
  const x = useTransform(smoothProgress, [0.05, 0.95], ['0%', '-55%']);

  const filteredCards = selectedCategory === 'ALL'
    ? TRACK_CARDS
    : TRACK_CARDS.filter((c) => c.category === selectedCategory);

  const handleActionClick = () => {
    if (onScrollToSection) {
      onScrollToSection('feedback');
    } else {
      const el = document.getElementById('feedback');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="action-tracks"
      className="relative h-[250vh] w-full bg-[#320014] select-none"
    >
      {/* Sticky Full-Viewport Horizon Scrub Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 px-4 sm:px-8 md:px-12 bg-gradient-to-b from-[#320014] via-[#260212] to-[#320014]">
        
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-[#E60000]/10 rounded-full blur-3xl" />

        {/* Section Header & Category Filters */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <span className="font-meat text-xs tracking-[0.2em] uppercase text-[#DBB353] font-bold block mb-1">
                PINNED HORIZON SCRUB • CLUB UNITS & WELFARE
              </span>
              <EditorialMaskedHeading
                text="OUR UNITS & ACTIVITIES"
                highlightWord="ACTIVITIES"
                as="h2"
                className="font-meat font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.9] text-white"
                highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#DBB353] via-[#FFE6D2] to-[#E60000]"
              />
            </div>

            {/* Category Filter Pills (Spring animated transitions) */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-4 py-2 rounded-full font-meat text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'text-white'
                        : 'text-[#FFE6D2]/70 hover:text-white bg-white/5 border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 rounded-full bg-[#E60000] shadow-md shadow-[#E60000]/40 -z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Horizontal Track Canvas (Scrubbed on X-axis) */}
        <div className="relative z-10 w-full overflow-visible py-4">
          <motion.div
            style={{ x }}
            className="flex gap-6 sm:gap-8 items-stretch will-change-transform"
          >
            <AnimatePresence mode="popLayout">
              {filteredCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl bg-[#42041D]/90 border border-white/15 hover:border-[#E60000] p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md shadow-2xl transition-colors group cursor-pointer"
                    onClick={handleActionClick}
                  >
                    <div>
                      {/* Card Header Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-meat text-[11px] uppercase tracking-wider font-bold text-[#FFE6D2] bg-white/10 px-3 py-1 rounded-md">
                          {card.badge}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-[#E60000]/20 border border-[#E60000]/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4 text-[#FFE6D2]" />
                        </div>
                      </div>

                      {/* Card Title & Desc */}
                      <h3 className="font-meat font-bold text-xl sm:text-2xl text-white uppercase tracking-wide leading-tight mb-3 group-hover:text-[#FFE6D2] transition-colors">
                        {card.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-[#FFE6D2]/80 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Card Footer Metric & Action */}
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="font-meat text-base font-bold text-[#DBB353] block leading-none">
                          {card.metric}
                        </span>
                        <span className="font-mono text-[10px] text-[#FFE6D2]/60 uppercase">
                          {card.metricLabel}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 font-meat text-xs text-white uppercase tracking-wider font-bold group-hover:text-[#E60000] transition-colors">
                        <span>{card.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Scroll Progress Scrub Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-[#FFE6D2]/60">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-meat tracking-widest text-[#DBB353]">
              SCROLL TO SCRUB UNITS
            </span>
            <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: smoothProgress }}
                className="h-full bg-gradient-to-r from-[#DBB353] to-[#E60000] origin-left"
              />
            </div>
          </div>

          <span className="hidden sm:inline">
            USM MAIN CAMPUS • SILAMBAM, KABADDI, DANCE & WELFARE
          </span>
        </div>
      </div>
    </section>
  );
}
