import { Target, Eye, HeartHandshake, Users2 } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    body: 'To represent, support, and uplift Indian students at Universiti Sains Malaysia across academic, cultural, welfare, and social matters.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    body: '"Your Voice, Our Responsibility." A committee that listens first and acts with accountability, built on a direct line to every student.',
  },
  {
    icon: HeartHandshake,
    title: 'How We Work',
    body: 'Through open forums, welfare drives, cultural events, sports programmes, and now, a standing digital channel for feedback at any time.',
  },
  {
    icon: Users2,
    title: 'Who We Serve',
    body: 'Every Indian student at USM \u2014 undergraduate and postgraduate \u2014 regardless of school, campus, or year of study.',
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <p className="eyebrow">About Us</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-sand-100 sm:text-4xl">
        Persatuan Kebudayaan India, USM
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700/80 dark:text-sand-100/75">
        Persatuan Kebudayaan India (PKI) is the official student association representing Indian
        students at Universiti Sains Malaysia. We exist to be a bridge between students and the
        university, championing academic wellbeing, cultural identity, welfare support, and an
        active campus life.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {pillars.map(({ icon: Icon, title, body }) => (
          <div key={title} className="card p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-crimson-50 text-crimson-500 dark:bg-crimson-500/15 dark:text-crimson-400">
              <Icon className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink-900 dark:text-sand-100">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/75 dark:text-sand-100/70">{body}</p>
          </div>
        ))}
      </div>

      <div className="card mt-8 bg-ink-900 p-8 text-sand-100">
        <p className="eyebrow text-marigold-300">Manifesto Initiative #2</p>
        <h2 className="mt-2 font-display text-xl font-semibold">Empowering Every Student Voice</h2>
        <p className="mt-3 text-sm leading-relaxed text-sand-100/80">
          This feedback portal was built as a direct commitment from PKI leadership: no student
          concern should go unheard because they didn't know who to ask, or worried about being
          identified. The dashboard behind this site is checked regularly by the committee, and
          every category from academics to sports has a named point of contact who tracks
          submissions through to resolution.
        </p>
      </div>
    </section>
  );
}
