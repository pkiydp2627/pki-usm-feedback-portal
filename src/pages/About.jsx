import { Target, Eye, HeartHandshake, Users2, Sparkles, Flame } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission • நோக்கம்',
    body: 'To represent, support, and uplift Indian students at Universiti Sains Malaysia across academic excellence, cultural identity, welfare protection, and holistic student growth.',
  },
  {
    icon: Eye,
    title: 'Our Vision • பார்வை',
    body: '"Your Voice, Our Responsibility." (உங்களின் குரல், எங்கள் பொறுப்பு). A leadership committed to listening first and acting with unwavering accountability.',
  },
  {
    icon: HeartHandshake,
    title: 'How We Work • செயல்முறை',
    body: 'Through open forums, emergency welfare assistance, celebratory cultural festivals, sports tournaments, and now, a standing 24/7 digital feedback portal.',
  },
  {
    icon: Users2,
    title: 'Who We Serve • சேவை',
    body: 'Every Indian student across USM — undergraduate and postgraduate — regardless of school, campus, or year of study.',
  },
];

export default function About() {
  return (
    <div className="relative py-16 px-5">
      <div className="pointer-events-none absolute inset-0 bg-kolam-pattern opacity-30" />

      <section className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/50 bg-cream-50 px-4 py-1 shadow-sm">
            <Flame className="h-3.5 w-3.5 text-gold-500 diya-glow" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-maroon-800">
              About PKI USM • எங்களைப் பற்றி
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold text-maroon-950 sm:text-5xl">
            Persatuan Kebudayaan India
          </h1>
          <p className="mt-2 font-tamil text-lg font-semibold text-maroon-800">
            இந்திய கலாச்சார சங்கம், யுனிவர்சிட்டி சைன்ஸ் மலேசியா
          </p>
          <div className="mx-auto mt-3 h-0.5 w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>

        <p className="mt-6 text-center max-w-2xl mx-auto text-base leading-relaxed text-maroon-900/80">
          Persatuan Kebudayaan India (PKI) is the premier cultural association representing Indian
          students at Universiti Sains Malaysia. For decades, PKI has stood as an anchor of cultural
          pride, student advocacy, fellowship, and student welfare.
        </p>

        {/* 4 Pillars */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card p-6 border-cream-300 hover:border-gold-400">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-maroon-700 to-maroon-900 text-gold-300 shadow-sm border border-gold-500/30">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-maroon-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-maroon-900/75">{body}</p>
            </div>
          ))}
        </div>

        {/* Manifesto Initiative #2 Card */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border-2 border-gold-500/50 bg-gradient-to-br from-maroon-900 to-maroon-950 p-8 sm:p-10 text-cream-50 shadow-xl">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold-400" />
            <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-gold-300">
              Manifesto Initiative #2
            </p>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-cream-50">
            Empowering Every Student Voice (குரல்)
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-cream-100/85">
            This digital portal is our pledge fulfilled. No student concern should ever be overlooked
            because someone felt isolated or hesitated to speak in person. The feedback received
            here is handled directly by elected PKI leaders with complete confidentiality, compassion,
            and swift action.
          </p>
        </div>
      </section>
    </div>
  );
}
