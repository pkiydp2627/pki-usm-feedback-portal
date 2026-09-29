import { Link } from 'react-router-dom';
import { Compass, Flame } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center px-5 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-maroon-800 text-gold-400 border border-gold-500/40 shadow-lg">
        <Compass className="h-8 w-8" />
      </span>
      <h1 className="mt-6 font-condensed font-bold uppercase tracking-tight text-maroon-950 text-4xl sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-2 text-sm text-maroon-900/75 font-body">
        The page you are looking for does not exist. Let's return to the portal.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Return to Home
      </Link>
    </section>
  );
}
