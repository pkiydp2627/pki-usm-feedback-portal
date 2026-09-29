import { Sparkles } from 'lucide-react';

export default function ManifestoBanner() {
  return (
    <aside aria-label="Manifesto Initiative Banner" className="bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 border-b border-gold-500/40 text-cream-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-2.5 sm:flex-row sm:items-center sm:gap-4 sm:py-3">
        <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-3 py-1 text-[11px] font-cinzel font-bold uppercase tracking-wider text-maroon-950 shadow-sm border border-gold-300">
          <Sparkles className="h-3.5 w-3.5" />
          Manifesto Initiative #2
        </span>
        <p className="text-xs leading-relaxed text-cream-100/90 sm:text-sm">
          <span className="font-semibold text-gold-300">Empowering Every Student Voice (குரல்).</span>{' '}
          A direct, confidential channel for every Indian student at USM to share concerns,
          suggestions, and feedback directly with PKI leadership.
        </p>
      </div>
    </aside>
  );
}
