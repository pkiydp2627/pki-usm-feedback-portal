import { Sparkles } from 'lucide-react';

export default function ManifestoBanner() {
  return (
    <div className="bg-ink-700 dark:bg-ink-900 border-b border-ink-600 dark:border-ink-700">
      <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-5 py-2 text-sand-100 sm:flex-row sm:items-center sm:gap-4 sm:py-3.5">
        <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-marigold-400 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wide text-ink-900 sm:px-3 sm:py-1 sm:text-xs">
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          Manifesto Initiative #2
        </span>
        <p className="text-xs leading-snug text-sand-100/90 sm:text-sm">
          <span className="font-semibold text-sand-100">Empowering Every Student Voice.</span>{' '}
          This platform was created to ensure every Indian student in USM has a direct channel
          to share concerns, suggestions, and ideas with PKI leadership.
        </p>
      </div>
    </div>
  );
}
