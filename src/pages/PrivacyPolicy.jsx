import { ShieldCheck } from 'lucide-react';

const sections = [
  {
    title: '1. What we collect',
    body: 'By default, submissions collect only your category, title, and detailed feedback. If you switch off "Submit this anonymously," we additionally store the name, matric number, phone number, and email you choose to provide \u2014 all of which remain optional.',
  },
  {
    title: '2. How anonymous submissions work',
    body: 'When you submit anonymously, your name, matric number, phone number, and email fields are never sent to our database \u2014 not hidden, not encrypted separately, simply never collected. There is no way for PKI or USM to trace an anonymous submission back to an individual student.',
  },
  {
    title: '3. Who can access submissions',
    body: 'Only authenticated PKI committee members can access the dashboard, which lists all submissions. Access is controlled through Firebase Authentication and enforced by database security rules \u2014 no public page or API exposes any submission or contact details.',
  },
  {
    title: '4. How we use your information',
    body: 'Feedback is used solely to understand and act on student concerns, track resolution progress, and, where contact details were voluntarily provided, follow up with the student directly.',
  },
  {
    title: '5. Data retention',
    body: 'Feedback records are retained to preserve institutional memory of student concerns across academic years. Students who provided contact information may request removal of their personal details by emailing pki.usm@studentassociation.my.',
  },
  {
    title: '6. Security',
    body: 'Data is transmitted over encrypted connections (HTTPS/TLS) and stored in Firebase Firestore with access rules that prevent public read access to submissions or identifying data.',
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-500/10 text-leaf-500">
        <ShieldCheck className="h-6 w-6" />
      </span>
      <p className="eyebrow mt-5">Privacy Policy</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-sand-100">
        How we protect your voice
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-ink-700/75 dark:text-sand-100/70">
        This policy explains exactly what happens to your feedback, especially when you choose to
        submit anonymously. Last updated August 2026.
      </p>

      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-sand-100">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/75 dark:text-sand-100/70">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
