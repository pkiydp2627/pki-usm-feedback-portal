import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Instagram, Mail, Flame, Sparkles } from 'lucide-react';

const myDetails = {
  position: 'PKI President',
  phone: '+60 11-2966 8254',
  instagram: '_sahen.kathi_',
  email: 'pki.ydp2627@gmail.com',
};

export default function Contact() {
  return (
    <div className="relative py-16 px-5">
      <div className="pointer-events-none absolute inset-0 bg-kolam-pattern opacity-30" />

      <section className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/50 bg-cream-50 px-4 py-1 shadow-sm">
          <Flame className="h-3.5 w-3.5 text-gold-500 diya-glow" />
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-maroon-800">
            Reach Out
          </span>
        </div>

        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-maroon-950">
          We Are Here to Listen
        </h1>
        <div className="mx-auto mt-3 h-0.5 w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-maroon-900/75">
          Your thoughts and concerns matter deeply to us. Feel free to connect directly or use the anonymous feedback form.
        </p>

        <div className="mt-12 inline-block rounded-2xl bg-maroon-800/10 px-5 py-2 border border-gold-500/30">
          <p className="font-cinzel text-sm sm:text-base font-bold uppercase tracking-wider text-maroon-800">
            {myDetails.position}
          </p>
        </div>

        <div className="mx-auto mt-8 grid gap-6 sm:grid-cols-3 max-w-3xl">
          {/* Phone */}
          <div className="card flex flex-col items-center gap-2 p-6 transition-all hover:-translate-y-1 hover:border-gold-400">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-maroon-700 to-maroon-900 text-gold-300 shadow-sm border border-gold-500/30">
              <Phone className="h-6 w-6" strokeWidth={2} />
            </span>
            <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-maroon-700">Phone</p>
            <a href={`tel:${myDetails.phone}`} className="text-base font-bold text-maroon-950 hover:text-maroon-700 transition-colors">
              {myDetails.phone}
            </a>
          </div>

          {/* Instagram */}
          <div className="card flex flex-col items-center gap-2 p-6 transition-all hover:-translate-y-1 hover:border-gold-400">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-maroon-700 to-maroon-900 text-gold-300 shadow-sm border border-gold-500/30">
              <Instagram className="h-6 w-6" strokeWidth={2} />
            </span>
            <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-maroon-700">Instagram</p>
            <a
              href={`https://instagram.com/${myDetails.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="text-base font-bold text-maroon-950 hover:text-maroon-700 transition-colors"
            >
              @{myDetails.instagram}
            </a>
          </div>

          {/* Email */}
          <div className="card flex flex-col items-center gap-2 p-6 transition-all hover:-translate-y-1 hover:border-gold-400">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-maroon-700 to-maroon-900 text-gold-300 shadow-sm border border-gold-500/30">
              <Mail className="h-6 w-6" strokeWidth={2} />
            </span>
            <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-maroon-700">Email</p>
            <a
              href={`mailto:${myDetails.email}`}
              className="text-sm font-bold text-maroon-950 hover:text-maroon-700 break-all transition-colors"
            >
              {myDetails.email}
            </a>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-sm text-maroon-900/75">
            Prefer to voice out without revealing your name?
          </p>
          <Link to="/feedback" className="btn-primary mt-4">
            <span>Submit Anonymous Feedback</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
