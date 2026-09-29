import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is my feedback really anonymous?',
    a: 'Yes. If you tick "Submit this anonymously" (checked by default), no name, matric number, or email is saved with your submission. We only store the category, title, and details you write.',
  },
  {
    q: 'Can the committee still identify me if I stay anonymous?',
    a: 'No. Anonymous submissions are stored without any identifying fields at all \u2014 there is nothing in the database to trace back to you.',
  },
  {
    q: 'Will I get a response to my feedback?',
    a: 'If you left an email address, the committee may follow up directly. If you submitted anonymously, you won\u2019t receive a personal reply, but your submission is still reviewed and tracked to resolution.',
  },
  {
    q: 'How long does it take for feedback to be addressed?',
    a: 'It varies by category and complexity. Every submission is marked New, then In Progress once a committee member picks it up, and finally Resolved.',
  },
  {
    q: 'What kind of feedback can I submit?',
    a: 'Anything relevant to student life: academic concerns, welfare and wellbeing, sports facilities and teams, cultural events, campus facilities, PKI-organised events, or anything else on your mind.',
  },
  {
    q: 'Who can see my submission?',
    a: 'Only PKI committee members with a registered dashboard login can see submissions and any contact details you provide. Nothing you submit is shown publicly anywhere on the site.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <p className="eyebrow">FAQ</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-sand-100">
        Frequently Asked Questions
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-ink-700/75 dark:text-sand-100/70">
        Everything you need to know before submitting feedback.
      </p>

      <div className="mt-8 space-y-3">
        {faqs.map((item, i) => (
          <div key={item.q} className="card overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-ink-900 dark:text-sand-100">{item.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-ink-700/50 transition-transform dark:text-sand-100/50 ${open === i ? 'rotate-180' : ''}`}
              />
            </button>
            {open === i && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-ink-700/75 dark:text-sand-100/70">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
