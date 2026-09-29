import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: 'Is my feedback truly 100% anonymous?',
    a: 'Yes, absolutely. When the "Submit this anonymously" option is selected (checked by default), no name, matric number, email, or IP identity is ever saved in Firestore. We strictly store only the feedback content and category.',
  },
  {
    q: 'Can PKI committee or USM administration trace anonymous feedback?',
    a: 'No. Anonymous entries simply do not contain identifying fields in the database. There is no technical mechanism to trace the submission back to you.',
  },
  {
    q: 'Will I receive a personal response?',
    a: 'If you choose to leave your email or phone number, a PKI committee representative may contact you discreetly to offer support or update you on progress. If you submit anonymously, your concern will still be addressed in committee meetings and tracked through to resolution.',
  },
  {
    q: 'What kind of topics can I submit?',
    a: 'Anything impacting your student journey at USM: academic struggles, coursework, welfare & financial aid, mental health, hostel or bus facilities, cultural practices, sports tournaments, and general campus feedback.',
  },
  {
    q: 'Who can read my submission?',
    a: 'Only authenticated, registered PKI executive committee members with secured Firebase credentials can access the committee dashboard. The submissions are never displayed publicly.',
  },
  {
    q: 'Why was this platform built under Manifesto Initiative #2?',
    a: 'PKI believes in listening with humility and acting with strength. The name Kural reflects Thirukkural 411 ("The wealth of all wealth is the wealth gained through listening") — that listening to our student community is the highest honor.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="relative py-16 px-5">
      <div className="pointer-events-none absolute inset-0 bg-kolam-pattern opacity-30" />

      <section className="relative mx-auto max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/50 bg-cream-50 px-4 py-1 shadow-sm">
            <HelpCircle className="h-3.5 w-3.5 text-gold-500" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-maroon-800">
              Frequently Asked Questions
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold text-maroon-950 sm:text-4xl">
            Everything You Need to Know
          </h1>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <p className="mx-auto mt-3 text-sm leading-relaxed text-maroon-900/75 max-w-md">
            Common questions regarding confidentiality, submission handling, and our committee process.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item, i) => (
            <div
              key={item.q}
              className="card overflow-hidden transition-all duration-200 hover:border-gold-400"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-display font-bold text-base sm:text-lg text-maroon-950">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-maroon-700 transition-transform ${
                    open === i ? 'rotate-180 text-gold-600' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="border-t border-cream-200 bg-cream-50/50 p-5 pt-3">
                  <p className="text-sm leading-relaxed text-maroon-900/80 font-normal">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
