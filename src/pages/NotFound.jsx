import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center px-5 py-24 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand-200 text-ink-700 dark:bg-ink-800 dark:text-sand-100">
        <Compass className="h-7 w-7" />
      </span>
      <h1 className="mt-6 font-display text-2xl font-semibold text-ink-900 dark:text-sand-100">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-ink-700/70 dark:text-sand-100/65">
        That page doesn't exist. Let's get you back on track.
      </p>
      <Link to="/" className="btn-primary mt-6">Back to Home</Link>
    </section>
  );
}
