import { ShieldCheck, Flame } from 'lucide-react';

const sections = [
  {
    title: '1. What We Collect',
    body: 'By default, feedback submissions collect only the category, subject title, and feedback message. When you keep "Submit this anonymously" checked, no identifying fields (name, matric number, email, or phone) are ever transmitted or stored.',
  },
  {
    title: '2. Complete Technical Anonymity',
    body: 'When submitted anonymously, the identity fields are set to null and completely omitted from our Firestore document. PKI leadership and Universiti Sains Malaysia have no technological means to trace an anonymous submission back to an individual student.',
  },
  {
    title: '3. Authorized Committee Access',
    body: 'Only designated PKI committee members with registered credentials authenticated by Firebase Authentication can access the internal dashboard. No feedback submissions are exposed publicly.',
  },
  {
    title: '4. Purpose & Action',
    body: 'Your submissions are reviewed strictly to address student challenges, improve facilities, coordinate with USM authorities, and track resolution. If contact details were optionally provided, they are used solely for respectful follow-up.',
  },
  {
    title: '5. Security & Infrastructure',
    body: 'All communications are protected in transit via TLS encryption and stored securely in Google Cloud Firestore with security rules preventing unauthorized access or unauthenticated reading.',
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="relative py-16 px-5">
      <div className="pointer-events-none absolute inset-0 bg-kolam-pattern opacity-30" />

      <section className="relative mx-auto max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/50 bg-cream-50 px-4 py-1 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-maroon-700" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-maroon-800">
              Privacy Policy
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-maroon-950">
            How We Protect Your Voice
          </h1>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <p className="mx-auto mt-3 text-sm leading-relaxed text-maroon-900/75 max-w-md">
            Our sacred commitment to confidentiality, integrity, and student protection.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {sections.map((s) => (
            <div key={s.title} className="card p-6 border-cream-300">
              <h2 className="font-display text-lg font-bold text-maroon-950">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-maroon-900/80">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
