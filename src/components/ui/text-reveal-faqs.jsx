import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export const BlurredStagger = ({ text = '' }) => {
  const headingText = text;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: 'blur(8px)',
      y: 2,
    },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
    },
  };

  return (
    <div className="w-full">
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className="text-sm sm:text-base leading-relaxed break-words whitespace-normal text-maroon-950/85 font-medium"
      >
        {headingText.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default function TextRevealFAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'Is my feedback truly 100% anonymous?',
      answer: 'Yes, absolutely. When the "Submit this anonymously" option is selected (checked by default), no name, matric number, email, or IP identity is ever saved in Firestore. We strictly store only the feedback content and category.',
    },
    {
      id: 'item-2',
      question: 'Can the PKI committee or USM administration trace anonymous feedback?',
      answer: 'No. Anonymous entries simply do not contain identifying fields in the database. There is no technical mechanism to trace the submission back to you.',
    },
    {
      id: 'item-3',
      question: 'Will I receive a personal response to my submission?',
      answer: 'If you choose to leave your email or phone number, a PKI committee representative may contact you discreetly to offer support or update you on progress. If you submit anonymously, your concern will still be addressed in committee meetings and tracked through to resolution.',
    },
    {
      id: 'item-4',
      question: 'What kind of student topics and issues can I raise?',
      answer: 'Anything impacting your student journey at USM: academic struggles, coursework, welfare & financial aid, mental health, hostel or bus facilities, cultural practices, sports tournaments, and general campus feedback.',
    },
    {
      id: 'item-5',
      question: 'Who has access to read and manage my submission?',
      answer: 'Only authenticated, registered PKI executive committee members with secured Firebase credentials can access the committee dashboard. The submissions are never displayed publicly.',
    },
    {
      id: 'item-6',
      question: 'Why was this platform built under Manifesto Initiative #2?',
      answer: 'PKI believes in listening with humility and acting with strength. The name Kural reflects Thirukkural 411 ("The wealth of all wealth is the wealth gained through listening") — that listening to our student community is the highest honor.',
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Kolam & Mughal Texture */}
      <div className="pointer-events-none absolute inset-0 bg-kolam-pattern opacity-30" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Heading, Mughal Badge, and Contact Info */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/50 bg-cream-50 px-4 py-1 shadow-sm mb-4">
                <HelpCircle className="h-3.5 w-3.5 text-gold-500" />
                <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-maroon-800">
                  Help &amp; Clarity
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-maroon-950">
                Frequently Asked <br className="hidden sm:inline" />
                <span className="text-maroon-700 font-serif italic">Questions</span>
              </h1>
              <div className="h-1.5 w-20 bg-gradient-to-r from-maroon-700 to-gold-500 rounded-full mt-3 mb-5" />

              <p className="text-base sm:text-lg text-maroon-900/80 leading-relaxed max-w-md">
                Everything you need to know about confidentiality, submission handling, and our committee resolution process.
              </p>
            </div>
          </div>

          {/* Right Column: Accordion with BlurredStagger text reveal */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border-2 border-gold-500/40 bg-white/95 p-6 sm:p-10 shadow-xl backdrop-blur relative overflow-hidden">
              {/* Corner Finials */}
              <div className="pointer-events-none absolute left-3 top-3 text-gold-500/70 text-xs">✦</div>
              <div className="pointer-events-none absolute right-3 top-3 text-gold-500/70 text-xs">✦</div>
              <div className="pointer-events-none absolute bottom-3 left-3 text-gold-500/70 text-xs">✦</div>
              <div className="pointer-events-none absolute bottom-3 right-3 text-gold-500/70 text-xs">✦</div>

              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-b border-cream-300/80 py-2 last:border-b-0"
                  >
                    <AccordionTrigger className="cursor-pointer text-base sm:text-lg font-bold text-maroon-950 hover:text-maroon-700 hover:no-underline text-left py-4 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-4">
                      <div className="rounded-2xl border border-gold-500/25 bg-gradient-to-r from-cream-50 via-cream-100 to-cream-50 p-5 shadow-sm">
                        <BlurredStagger text={item.answer} />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
