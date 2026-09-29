import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, EyeOff, Users, GraduationCap, HeartHandshake,
  Trophy, Palette, Building2, CalendarDays, MoreHorizontal, Sparkles, Flame,
} from 'lucide-react';
import ManifestoBanner from '../components/ManifestoBanner.jsx';
import TamilKuralTypewriter from '../components/TamilKuralTypewriter.jsx';

const categories = [
  { label: 'Academic', icon: GraduationCap, desc: 'Curriculum, exams, faculty support' },
  { label: 'Welfare', icon: HeartHandshake, desc: 'Financial aid, accommodation, wellbeing' },
  { label: 'Sports', icon: Trophy, desc: 'Tournaments, equipment, facilities' },
  { label: 'Culture', icon: Palette, desc: 'Cultural programmes, arts, heritage' },
  { label: 'Facilities', icon: Building2, desc: 'Hostels, transport, campus amenities' },
  { label: 'Events', icon: CalendarDays, desc: 'PKI events, workshops, festive celebrations' },
  { label: 'Others', icon: MoreHorizontal, desc: 'General inquiries and general feedback' },
];

const steps = [
  {
    n: '01',
    tamil: 'முதற்படி',
    title: 'Share what\u2019s on your mind',
    body: 'Academic hurdles, welfare needs, cultural ideas, or campus facilities \u2014 speak freely in your own words.',
  },
  {
    n: '02',
    tamil: 'இரண்டாம்படி',
    title: 'Choose your confidentiality',
    body: 'Stay 100% anonymous, or leave your contact details if you would like a personal, confidential follow-up.',
  },
  {
    n: '03',
    tamil: 'மூன்றாம்படி',
    title: 'PKI leadership takes action',
    body: 'Every submission reaches the committee dashboard and is tracked with accountability until resolved.',
  },
];

export default function Home() {
  return (
    <div className="bg-cream-100 text-maroon-950">
      <ManifestoBanner />

      {/* Hero Section with Indian Royal Aesthetic & Tamil Kural Typewriter */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5EC] via-[#F6ECE0] to-[#FAF5EC] border-b border-gold-500/30">
        {/* Subtle Kolam / Rangoli Indian Pattern Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-kolam-pattern opacity-40" />

        {/* Heritage Artwork Subtle Ambience */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-full w-full max-w-2xl opacity-15 bg-cover bg-no-repeat bg-right-top"
          style={{ backgroundImage: 'url("/images/indian_heritage_hero.jpg")' }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            {/* Indian Cultural Sub-badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 bg-cream-50 px-4 py-1.5 shadow-sm">
              <Flame className="h-4 w-4 text-gold-500 diya-glow" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-maroon-800">
                Persatuan Kebudayaan India • USM
              </span>
            </div>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.12] text-maroon-950 sm:text-5xl lg:text-[54px]">
              Your Voice, <br />
              <span className="font-serif italic text-maroon-700 underline decoration-gold-400 decoration-wavy decoration-2">
                Our Responsibility.
              </span>
            </h1>

            <p className="mt-3 font-tamil text-lg font-semibold text-maroon-800/90">
              உங்களின் குரல், எங்கள் பொறுப்பு.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-maroon-900/80 sm:text-lg">
              A trusted, anonymous sanctuary for every Indian student at Universiti Sains Malaysia
              to raise academic, welfare, cultural, sporting, and campus concerns directly with PKI
              leadership.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/feedback" className="btn-primary text-base">
                <span>Submit Feedback • குரல் கொடுங்கள்</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="btn-secondary text-base">
                About PKI USM
              </Link>
            </div>

            {/* Cultural Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-maroon-900/75">
              <span className="flex items-center gap-2 rounded-lg bg-cream-200/60 px-3 py-1.5 border border-cream-300">
                <EyeOff className="h-4 w-4 text-maroon-700" /> Anonymous by default
              </span>
              <span className="flex items-center gap-2 rounded-lg bg-cream-200/60 px-3 py-1.5 border border-cream-300">
                <ShieldCheck className="h-4 w-4 text-maroon-700" /> End-to-end confidential
              </span>
              <span className="flex items-center gap-2 rounded-lg bg-cream-200/60 px-3 py-1.5 border border-cream-300">
                <Users className="h-4 w-4 text-maroon-700" /> Direct committee action
              </span>
            </div>
          </div>

          {/* Right Column: Tamil Kural with Typewriter Effect */}
          <div className="relative">
            <TamilKuralTypewriter />

            {/* Additional Cultural Vision Card */}
            <div className="mt-6 rounded-2xl border border-cream-300 bg-white/90 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold-500" />
                <p className="font-cinzel text-xs font-bold uppercase tracking-wider text-maroon-800">
                  The Essence of Kural (குரல்)
                </p>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-maroon-900/80">
                In classical Tamil literature, listening to wisdom is the highest treasure. PKI USM's
                portal is dedicated to listening to your everyday student life, challenges, and hopes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Traditional Indian Procession Border Divider */}
      <div className="relative h-12 sm:h-20 w-full overflow-hidden border-y border-gold-500/40 bg-[#FAF5EC]">
        <img
          src="/images/indian_border_pattern.jpg"
          alt="Traditional Indian Border"
          className="h-full w-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-transparent to-cream-100" />
      </div>

      {/* Seven Categories Section */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="text-center">
          <p className="eyebrow">Seven Categories • ஒரு பொது மேடை</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-maroon-950 sm:text-4xl">
            What You Can Raise
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-maroon-900/75">
            Every aspect of your USM journey matters. Select the category that best fits your concern.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ label, icon: Icon, desc }) => (
            <div
              key={label}
              className="card group relative overflow-hidden p-6 transition-all hover:-translate-y-1 hover:border-gold-400"
            >
              {/* Corner brass motif */}
              <div className="pointer-events-none absolute right-3 top-3 text-[10px] text-gold-500/40 group-hover:text-gold-500 transition-colors">
                ✦
              </div>

              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-maroon-700 to-maroon-800 text-gold-300 shadow-sm border border-gold-500/30 group-hover:scale-105 transition-transform">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>

              <h3 className="mt-4 font-display text-lg font-bold text-maroon-900 group-hover:text-maroon-700 transition-colors">
                {label}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-maroon-900/70">
                {desc}
              </p>

              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-maroon-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Submit {label}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-y border-gold-500/30 bg-[#FFFDF9] py-16 sm:py-20 relative">
        <div className="pointer-events-none absolute inset-0 bg-kolam-pattern opacity-25" />

        <div className="relative mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="eyebrow">A Direct &amp; Transparent Journey</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-maroon-950 sm:text-4xl">
              From Your Words to Committee Action
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.n}
                className="relative rounded-2xl border border-cream-300 bg-cream-50/90 p-7 shadow-sm transition-all hover:border-gold-400 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-2xl font-black text-gold-600">
                    {step.n}
                  </span>
                  <span className="rounded-full bg-maroon-100 px-2.5 py-0.5 font-tamil text-xs font-semibold text-maroon-800">
                    {step.tamil}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-maroon-900">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-maroon-900/75">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Royal Procession Banner & Call to Action */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="relative overflow-hidden rounded-3xl border-2 border-gold-500/60 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-950 p-8 sm:p-12 text-cream-50 shadow-2xl">
          {/* Subtle heritage artwork in background */}
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay"
            style={{ backgroundImage: 'url("/images/indian_heritage_hero.jpg")' }}
          />

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-3 py-1 border border-gold-400/40 text-xs font-cinzel font-bold text-gold-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-gold-400" />
                PKI USM 2026/2027
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-cream-50">
                Ready to make your voice count?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cream-100/80">
                It takes less than two minutes. Stay completely anonymous, or leave your details for
                a direct follow-up. Let us build a stronger community together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link to="/feedback" className="btn-gold text-base whitespace-nowrap">
                <span>Submit Feedback Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/30 bg-white/10 px-6 py-3 font-semibold text-cream-50 hover:bg-white/20 transition-colors"
              >
                Read FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
