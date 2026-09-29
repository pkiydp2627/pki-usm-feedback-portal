import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, EyeOff, Users, GraduationCap, HeartHandshake,
  Trophy, Palette, Building2, CalendarDays, MoreHorizontal, Mic,
} from 'lucide-react';
import ManifestoBanner from '../components/ManifestoBanner.jsx';

const categories = [
  { label: 'Academic', icon: GraduationCap },
  { label: 'Welfare', icon: HeartHandshake },
  { label: 'Sports', icon: Trophy },
  { label: 'Culture', icon: Palette },
  { label: 'Facilities', icon: Building2 },
  { label: 'Events', icon: CalendarDays },
  { label: 'Others', icon: MoreHorizontal },
];

const steps = [
  {
    n: '01',
    title: 'Share what\u2019s on your mind',
    body: 'Academic struggles, welfare concerns, cultural ideas, sports facilities \u2014 whatever needs to be said, in your own words.',
  },
  {
  n: '02',
  title: 'Choose your privacy',
  body: 'Stay fully anonymous, or attach your name and details if you\u2019d like a personal follow-up.',
},
  {
    n: '03',
    title: 'PKI leadership reviews it',
    body: 'Every submission reaches the committee dashboard and is tracked from New, to In Progress, to Resolved.',
  },
];

export default function Home() {
  return (
    <div>
      <ManifestoBanner />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-900">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #E8A33D 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }} />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-marigold-400 text-ink-900">
                <Mic className="h-7 w-7" strokeWidth={2.25} />
              </span>
              <span className="waveform-bars animated text-marigold-400">
                <span /><span /><span /><span /><span /><span /><span /><span />
              </span>
            </div>

            <p className="eyebrow mt-6 text-marigold-300">Persatuan Kebudayaan India, USM</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-sand-100 sm:text-5xl">
              Your Voice, <span className="italic text-marigold-300">Our Responsibility.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sand-100/75 sm:text-lg">
              A trusted, anonymous channel for every Indian student at USM to raise academic,
              welfare, cultural, sporting, and campus concerns directly with PKI leadership.
              No login required. No question too small.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
  <Link to="/feedback" className="btn-primary">
    Submit Feedback
    <ArrowRight className="h-4 w-4" />
  </Link>
</div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-sand-100/70">
              <span className="flex items-center gap-2"><EyeOff className="h-4 w-4 text-marigold-300" /> Anonymous by default</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-marigold-300" /> Securely handled</span>
              <span className="flex items-center gap-2"><Users className="h-4 w-4 text-marigold-300" /> Reviewed by real committee members</span>
            </div>
          </div>

          <div className="card border-none bg-sand-50/95 p-7 dark:bg-ink-800/95">
            <p className="eyebrow">Vision Statement</p>
            <p className="mt-3 font-display text-2xl italic leading-snug text-ink-900 dark:text-sand-100">
              "Your Voice, Our Responsibility."
            </p>
            <div className="mt-6 space-y-4 border-t border-sand-200 dark:border-ink-700 pt-5">
              <p className="text-sm leading-relaxed text-ink-700/80 dark:text-sand-100/75">
                PKI exists to represent Indian students at Universiti Sains Malaysia. This portal
                is Manifesto Initiative #2 in action: a direct, always-open line between students
                and the committee that serves them.
              </p>
              <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-crimson-500 dark:text-marigold-400">
                Read about PKI <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="eyebrow">What you can raise</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink-900 dark:text-sand-100 sm:text-3xl">
          Seven categories, one shared channel
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map(({ label, icon: Icon }) => (
            <div key={label} className="card flex flex-col items-start gap-3 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-crimson-50 text-crimson-500 dark:bg-crimson-500/15 dark:text-crimson-400">
                <Icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <span className="text-sm font-semibold text-ink-900 dark:text-sand-100">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-sand-50 dark:bg-ink-900/60 border-y border-sand-200 dark:border-ink-700">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink-900 dark:text-sand-100 sm:text-3xl">
            From your keyboard to committee action
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="relative pl-1">
                <span className="font-mono text-sm text-marigold-500 dark:text-marigold-400">{step.n}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink-900 dark:text-sand-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/75 dark:text-sand-100/70">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="card flex flex-col items-start gap-6 overflow-hidden bg-crimson-500 p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold">Ready to be heard?</h2>
            <p className="mt-2 max-w-md text-sm text-white/85">
              It takes less than two minutes. Skip your name entirely, or attach it if you'd
              like a follow-up.
            </p>
          </div>
          <Link to="/feedback" className="inline-flex items-center justify-center gap-2 rounded-full bg-marigold-400 px-6 py-3 font-semibold text-ink-900 transition-colors hover:bg-marigold-300 whitespace-nowrap">
            Submit Feedback <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
