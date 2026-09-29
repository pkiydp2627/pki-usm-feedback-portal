import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Instagram, Mail } from 'lucide-react';

// 👉 Fill in your real details here
const myDetails = {
  position: 'PKI President',   // e.g. 'PKI President'
  phone: '+60 11-2966 8254',          // e.g. '+60 12-345 6789'
  instagram: '_sahen.kathi_',  // e.g. '@yourhandle'
  email: 'pki.ydp2627@gmail.com',          // e.g. 'yourname@studentassociation.my'
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center">
      <p className="eyebrow">Contact</p>

      <h1
        className="mt-5 font-display font-semibold text-ink-900 dark:text-sand-100"
        style={{ fontSize: '65px', lineHeight: 1.02 }}
      >
        Get in touch
      </h1>
      <p className="mx-auto mt-4 max-w-sm text-base text-ink-700/70 dark:text-sand-100/65">
        Your voice matters to us — reach out anytime, we're here to listen.
      </p>

      <p
        className="mt-16 font-display italic text-crimson-500 dark:text-marigold-400"
        style={{ fontSize: '38px' }}
      >
        {myDetails.position}
      </p>

      <div className="mx-auto mt-4 grid gap-6 sm:grid-cols-3">
        <div className="card flex flex-col items-center gap-1 px-5 py-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-crimson-50 text-crimson-500 dark:bg-crimson-500/15 dark:text-crimson-400">
            <Phone className="h-9 w-9" strokeWidth={2} />
          </span>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson-500 dark:text-marigold-400">Phone</p>
          <p className="text-base font-semibold text-ink-900 dark:text-sand-100">{myDetails.phone}</p>
        </div>

        <div className="card flex flex-col items-center gap-1 px-5 py-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-crimson-50 text-crimson-500 dark:bg-crimson-500/15 dark:text-crimson-400">
            <Instagram className="h-9 w-9" strokeWidth={2} />
          </span>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson-500 dark:text-marigold-400">Instagram</p>
          <p className="text-base font-semibold text-ink-900 dark:text-sand-100">{myDetails.instagram}</p>
        </div>

        <div className="card flex flex-col items-center gap-1 px-5 py-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-crimson-50 text-crimson-500 dark:bg-crimson-500/15 dark:text-crimson-400">
            <Mail className="h-9 w-9" strokeWidth={2} />
          </span>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson-500 dark:text-marigold-400">Email</p>
          <p className="break-all text-base font-semibold text-ink-900 dark:text-sand-100">{myDetails.email}</p>
        </div>
      </div>

      <div style={{ marginTop: '96px' }}>
        <p className="text-sm text-ink-700/70 dark:text-sand-100/65">
          Prefer to stay anonymous? You can still be heard.
        </p>
        <Link to="/feedback" className="btn-primary mt-4">
          Submit Feedback <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
