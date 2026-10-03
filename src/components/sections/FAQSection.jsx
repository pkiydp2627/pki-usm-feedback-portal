import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import DynamicSectionHeading from '../ui/DynamicSectionHeading.jsx';

// Blurred Stagger Word Reveal Animation from previous FAQ
export const BlurredStagger = ({ text = '' }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const wordAnimation = {
    hidden: {
      opacity: 0,
      filter: 'blur(6px)',
      y: 4,
    },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
    },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate="show"
      className="text-sm sm:text-base leading-relaxed text-white/95 font-body font-normal"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordAnimation}
          transition={{ duration: 0.25 }}
          className="inline-block mr-1.5"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

const CATEGORIES = [
  { id: 'all', label: 'ALL INQUIRIES', count: 6 },
  { id: 'privacy', label: 'CONFIDENTIALITY', count: 2 },
  { id: 'process', label: 'PROCESS & ACTION', count: 2 },
  { id: 'mandate', label: 'MANDATE & PURPOSE', count: 2 },
];

const FAQ_ITEMS = [
  {
    id: 'item-1',
    cat: 'privacy',
    num: '01',
    question: 'IS MY FEEDBACK TRULY 100% ANONYMOUS?',
    answer: 'Yes, unconditionally. When the Anonymous Transmission shield is selected, zero IP addresses, names, matric numbers, or device fingerprints are logged or saved to the database. We store strictly the feedback text and category.',
  },
  {
    id: 'item-2',
    cat: 'privacy',
    num: '02',
    question: 'CAN USM ADMINISTRATION OR FACULTY TRACE ANONYMOUS POSTS?',
    answer: 'No. Anonymous records contain no identifying fields in the database schema. There is zero technical bridge to trace submissions back to individual student accounts or networks.',
  },
  {
    id: 'item-3',
    cat: 'process',
    num: '03',
    question: 'WHAT TOPICS AND GRIEVANCES CAN BE SUBMITTED?',
    answer: 'Any matter impacting Indian students at USM: academic obstacles, coursework disparities, hostel living conditions, bus schedules, sports facilities, welfare emergencies, and cultural safety.',
  },
  {
    id: 'item-4',
    cat: 'process',
    num: '04',
    question: 'WHO HAS AUTHORIZED ACCESS TO SUBMITTED CASES?',
    answer: 'Only registered PKI Executive Committee leadership holding encrypted credentials can access the administration dashboard. Feedback is never sold, publicized, or leaked.',
  },
  {
    id: 'item-5',
    cat: 'mandate',
    num: '05',
    question: 'WILL I RECEIVE A PERSONAL RESPONSE TO MY SUBMISSION?',
    answer: 'If you opt for Identified Submission and provide contact details, PKI leadership will reach out directly to coordinate resolution. Anonymous submissions are compiled directly for executive university negotiation.',
  },
  {
    id: 'item-6',
    cat: 'mandate',
    num: '06',
    question: 'WHY WAS THIS PORTAL BUILT UNDER MANIFESTO INITIATIVE #2?',
    answer: 'Named after Thirukkural 411 ("The wealth of all wealth is the wealth gained through listening"), this portal fulfills PKI’s pledge to provide an unbreakable, fearless communication line for every student.',
  },
];

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [openItem, setOpenItem] = useState('item-1');

  const filteredItems =
    activeTab === 'all'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.cat === activeTab);

  return (
    <section
      id="faq"
      className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#260212] overflow-hidden flex flex-col justify-center"
    >
      {/* Background South Indian Kolam motif */}
      <div className="pointer-events-none absolute inset-0 bg-kolam-dark opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl w-full">
        {/* Dynamic Section Heading with Kinetic Mask & Bracket Accents */}
        <div className="mb-10">
          <DynamicSectionHeading
            eyebrow="CLEAR CLARITY & PROTOCOLS"
            icon={HelpCircle}
            tamilSub="வினா & விடை • DIRECT ANSWERS"
            titleLine1="ANSWERS"
            titleLine2="(NO RUNAROUND)"
            titleLine2Color="#e10600"
            description="DIRECT PROTOCOLS REGARDING DATA INTEGRITY, ANONYMITY, AND COMMITTEE RESOLUTION."
            align="center"
            size="section"
          />
        </div>

        {/* Category Tab with Number Badge (Impossible Foods Signature Pattern) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-[15px] transition-all cursor-pointer font-meat text-xs tracking-[0.04em] uppercase ${
                  isActive
                    ? 'bg-[#e10600] text-white border border-[#e10600]'
                    : 'bg-[#4f0423]/70 text-[#ffc7c6] border border-black/60 hover:bg-[#4f0423] hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white text-[#e10600]' : 'bg-[#000000] text-[#DBB353]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Accordion List (Burgundy Stage #4f0423 Surfaces with BlurredStagger animation) */}
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                className="rounded-[12px] bg-[#4f0423] border border-black overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? null : item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-black/10 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#000000] text-white font-meat text-xs font-bold border border-white/20">
                      {item.num}
                    </span>
                    <span className="font-meat text-base sm:text-lg font-bold tracking-wide uppercase text-white">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#000000] text-[#ffc7c6] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#e10600] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1">
                        <div className="p-4 rounded-[8px] bg-[#260212] border border-black/80">
                          {/* Restored BlurredStagger word reveal animation */}
                          <BlurredStagger key={item.id} text={item.answer} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
