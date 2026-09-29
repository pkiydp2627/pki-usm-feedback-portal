import { Link } from 'react-router-dom';
import { Mail, MapPin, Sparkles, Flame, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold-500/40 bg-gradient-to-b from-maroon-900 to-maroon-950 text-cream-100">
      {/* Decorative Gold Trim Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-maroon-800 via-gold-400 to-maroon-800 opacity-80" />

      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-maroon-950 shadow-md border border-gold-300">
                <Flame className="h-5 w-5 diya-glow" />
              </span>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-wide text-cream-50 block">
                  Persatuan Kebudayaan India, USM
                </span>
                <span className="text-xs text-gold-400 block tracking-wide">
                  Indian Cultural Association
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/75">
              A sacred and direct channel for every Indian student at Universiti Sains Malaysia to
              share their voice with dignity, confidentiality, and purpose.
            </p>

            <div className="mt-5 rounded-xl border border-gold-500/30 bg-maroon-800/50 p-3.5 max-w-sm">
              <p className="font-cinzel text-xs font-bold uppercase tracking-wider text-gold-300">
                Manifesto Initiative #2
              </p>
              <p className="mt-1 font-serif text-xs italic text-cream-100/70">
                "Your Voice, Our Responsibility."
              </p>
            </div>
          </div>

          <div>
            <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-gold-400">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-100/80">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-gold-300 transition-colors">
                  Submit Feedback
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors">
                  About PKI
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gold-300 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-gold-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/committee/login" className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors font-semibold">
                  <Shield className="h-3.5 w-3.5" />
                  <span>Committee Dashboard</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-gold-400">
              Contact PKI
            </p>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href="mailto:pki.ydp2627@gmail.com" className="hover:text-gold-300 break-all transition-colors">
                  pki.ydp2627@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>Universiti Sains Malaysia, 11800 USM, Pulau Pinang, Malaysia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold-500/20 pt-8 text-xs text-cream-100/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} PKI USM. Manifesto Initiative #2 • KURAL.</p>
          <p className="flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-gold-400" />
            <span>Built for trust, transparency, and Indian student empowerment.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
