import { Link } from 'react-router-dom';
import { Mic, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-sand-200 dark:border-ink-700 bg-ink-900 text-sand-100">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-marigold-400 text-ink-900">
                <Mic className="h-4.5 w-4.5" strokeWidth={2.25} />
              </span>
              <span className="font-display text-lg font-semibold">Persatuan Kebudayaan India, USM</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-sand-100/70">
              A direct, anonymous channel for every Indian student at Universiti Sains Malaysia
              to be heard by their leadership — academic, welfare, cultural, sports, and beyond.
            </p>
            <p className="mt-4 font-display text-sm italic text-marigold-300">
              "Your Voice, Our Responsibility."
            </p>
          </div>

          <div>
            <p className="eyebrow text-marigold-300">Navigate</p>
            <ul className="mt-3 space-y-2 text-sm text-sand-100/80">
              <li><Link to="/feedback" className="hover:text-marigold-300">Submit Feedback</Link></li>
              <li><Link to="/about" className="hover:text-marigold-300">About PKI</Link></li>
              <li><Link to="/faq" className="hover:text-marigold-300">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-marigold-300">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-marigold-300">Reach Us</p>
            <ul className="mt-3 space-y-2.5 text-sm text-sand-100/80">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>pki.ydp2627@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Universiti Sains Malaysia, 11800 USM, Pulau Pinang</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-sand-100/10 pt-6 text-xs text-sand-100/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} PKI USM. Manifesto Initiative #2.</p>
          <p>Built for transparency, trust, and every student voice.</p>
        </div>
      </div>
    </footer>
  );
}
