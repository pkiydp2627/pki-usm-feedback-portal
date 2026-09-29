import { Flame, Sparkles, CheckCircle2 } from 'lucide-react';

const values = [
  'Integrity & Student Advocacy',
  'Transparency in Action & Governance',
  'Uncompromising Confidentiality & Trust',
  'Compassionate Student Welfare',
  'Cultural Pride & Heritage Celebration',
  'Inclusivity Across All Schools & Campuses',
];

export default function About() {
  return (
    <div className="relative py-14 px-5">
      {/* Background Kolam & Mughal Texture */}
      <div className="pointer-events-none absolute inset-0 bg-kolam-pattern opacity-30" />

      <section className="relative mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/50 bg-cream-50 px-4 py-1 shadow-sm">
            <Flame className="h-3.5 w-3.5 text-gold-500 diya-glow" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-maroon-800">
              About PKI USM
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold text-maroon-950 sm:text-5xl">
            Persatuan Kebudayaan India
          </h1>
          <p className="mt-2 text-base font-semibold text-maroon-800">
            Indian Cultural Association • Universiti Sains Malaysia
          </p>
          <div className="mx-auto mt-3 h-0.5 w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <p className="mt-4 text-center max-w-2xl mx-auto text-sm leading-relaxed text-maroon-900/80">
            Established to represent, empower, and advocate for Indian students across every campus
            of Universiti Sains Malaysia.
          </p>
        </div>

        {/* Master Mughal Structured Poster Layout */}
        <div className="rounded-3xl border-2 border-gold-500/50 bg-[#FDFBF7] p-5 sm:p-7 shadow-2xl space-y-6">

          {/* Top Row: Two Cards (VISION & MISSION) */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* Top Left Card: Our VISION */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-gold-500/40 bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E5] to-[#F5E8D0] p-7 sm:p-9 shadow-md flex flex-col justify-between min-h-[380px] group transition-all hover:border-gold-500 hover:shadow-card">
              {/* Ornate Mughal Corner Finials */}
              <div className="pointer-events-none absolute left-3 top-3 text-gold-500/70 text-xs">✦</div>
              <div className="pointer-events-none absolute right-3 top-3 text-gold-500/70 text-xs">✦</div>

              {/* Card Header & Body */}
              <div className="relative z-10">
                <span className="font-display italic text-base sm:text-lg text-maroon-700 font-semibold block">
                  Our
                </span>
                <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-wider text-maroon-900 mt-0.5">
                  VISION
                </h2>
                <div className="h-1 w-12 bg-gradient-to-r from-maroon-700 to-gold-500 rounded-full mt-2 mb-4" />
                <p className="text-sm sm:text-base leading-relaxed text-maroon-950/85 font-medium max-w-sm">
                  To be the trusted, proactive, and empowering pillar for every Indian student at
                  Universiti Sains Malaysia — cultivating an inclusive, heard, and flourishing campus
                  community built upon mutual respect and institutional accountability.
                </p>
              </div>

              {/* Bottom Mughal Architectural Watermark: Mughal Mehrab Arch & Eye of Vision */}
              <div className="relative z-0 mt-8 flex justify-center opacity-25 group-hover:opacity-35 transition-opacity">
                <svg
                  className="w-48 h-32 text-maroon-800"
                  viewBox="0 0 200 120"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Mughal Cusped Mehrab Arch Outline */}
                  <path
                    d="M20 115 V60 C20 40, 50 45, 70 30 C85 20, 95 10, 100 5 C105 10, 115 20, 130 30 C150 45, 180 40, 180 60 V115"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M35 115 V65 C35 50, 60 52, 75 40 C88 30, 96 22, 100 18 C104 22, 112 30, 125 40 C140 52, 165 50, 165 65 V115"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  {/* Mughal Eye of Vision */}
                  <path
                    d="M55 75 Q100 35 145 75 Q100 115 55 75 Z"
                    strokeWidth="2.5"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                  <circle cx="100" cy="75" r="14" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
                  <circle cx="100" cy="75" r="6" fill="currentColor" />
                  {/* Radiant Sunburst Eyelashes / Rays */}
                  <line x1="100" y1="45" x2="100" y2="35" strokeWidth="2" strokeLinecap="round" />
                  <line x1="75" y1="52" x2="68" y2="43" strokeWidth="2" strokeLinecap="round" />
                  <line x1="125" y1="52" x2="132" y2="43" strokeWidth="2" strokeLinecap="round" />
                  <line x1="52" y1="68" x2="42" y2="64" strokeWidth="2" strokeLinecap="round" />
                  <line x1="148" y1="68" x2="158" y2="64" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Top Right Card: Our MISSION */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-gold-500/40 bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E5] to-[#F5E8D0] p-7 sm:p-9 shadow-md flex flex-col justify-between min-h-[380px] group transition-all hover:border-gold-500 hover:shadow-card">
              {/* Ornate Mughal Corner Finials */}
              <div className="pointer-events-none absolute left-3 top-3 text-gold-500/70 text-xs">✦</div>
              <div className="pointer-events-none absolute right-3 top-3 text-gold-500/70 text-xs">✦</div>

              {/* Top Mughal Element: Imperial Sunburst Medallion & Aim Watermark */}
              <div className="absolute -top-4 -right-4 z-0 opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
                <svg
                  className="w-48 h-48 text-maroon-800"
                  viewBox="0 0 160 160"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="80" cy="80" r="70" strokeWidth="1.5" strokeDasharray="4 2" />
                  <circle cx="80" cy="80" r="54" strokeWidth="2.5" />
                  <circle cx="80" cy="80" r="38" strokeWidth="2" />
                  <circle cx="80" cy="80" r="22" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
                  <circle cx="80" cy="80" r="8" fill="currentColor" />
                  {/* Mughal Arrow / Scepter Line */}
                  <path d="M25 135 L135 25 M135 25 L105 28 M135 25 L132 55" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M25 135 L45 130 M25 135 L30 115" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Card Header & Body */}
              <div className="relative z-10">
                <span className="font-display italic text-base sm:text-lg text-maroon-700 font-semibold block">
                  Our
                </span>
                <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-wider text-maroon-900 mt-0.5">
                  MISSION
                </h2>
                <div className="h-1 w-12 bg-gradient-to-r from-maroon-700 to-gold-500 rounded-full mt-2 mb-4" />
                <p className="text-sm sm:text-base leading-relaxed text-maroon-950/85 font-medium">
                  To provide accessible, swift, and technology-enabled support systems across
                  academics, welfare aid, cultural engagement, and campus facilities. We bridge students
                  directly to the university administration, ensuring every legitimate concern is met
                  with decisive action, transparency, and care.
                </p>
              </div>

              {/* Sub-badge highlighting initiative */}
              <div className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-white/80 px-4 py-1.5 shadow-sm w-fit">
                <Sparkles className="h-3.5 w-3.5 text-gold-600" />
                <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-maroon-800">
                  Accountability • Action • Advocacy
                </span>
              </div>
            </div>

          </div>

          {/* Middle/Bottom Row: Wide Horizontal Card (Our VALUES) */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold-500/40 bg-gradient-to-r from-[#FFFDF9] via-[#FAF3E5] to-[#F5E8D0] p-7 sm:p-9 shadow-md group transition-all hover:border-gold-500 hover:shadow-card">
            {/* Ornate Corner Finials */}
            <div className="pointer-events-none absolute left-3 top-3 text-gold-500/70 text-xs">✦</div>
            <div className="pointer-events-none absolute right-3 top-3 text-gold-500/70 text-xs">✦</div>
            <div className="pointer-events-none absolute bottom-3 left-3 text-gold-500/70 text-xs">✦</div>
            <div className="pointer-events-none absolute bottom-3 right-3 text-gold-500/70 text-xs">✦</div>

            <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <span className="font-display italic text-base sm:text-lg text-maroon-700 font-semibold block">
                  Our
                </span>
                <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-wider text-maroon-900 mt-0.5">
                  VALUES
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-maroon-700 to-gold-500 rounded-full mt-2 mb-6" />

                {/* Bullet List styled with Mughal Gold Badges */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {values.map((v) => (
                    <div key={v} className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-maroon-800 text-gold-300 text-[10px] shadow-sm">
                        ✦
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-maroon-950/90 leading-snug">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Mughal Watermark: Royal Clasped Hands of Fellowship & Lotus Motif */}
              <div className="relative flex justify-center md:justify-end opacity-25 group-hover:opacity-35 transition-opacity">
                <svg
                  className="w-48 h-48 sm:w-56 sm:h-56 text-maroon-800"
                  viewBox="0 0 160 160"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Mughal Ornate Heart Frame */}
                  <path
                    d="M80 145 C20 100, 10 50, 40 25 C65 5, 78 20, 80 32 C82 20, 95 5, 120 25 C150 50, 140 100, 80 145 Z"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="currentColor"
                    fillOpacity="0.05"
                  />
                  {/* Clasped Hands in Mughal Linear Style */}
                  <path
                    d="M48 78 C55 68, 70 65, 85 75 L105 92 C108 95, 115 95, 120 90 C125 85, 125 78, 118 72 L96 54 C90 48, 78 48, 70 55"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M112 82 C105 92, 90 95, 75 85 L55 68 C52 65, 45 65, 40 70 C35 75, 35 82, 42 88 L64 106 C70 112, 82 112, 90 105"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Mughal Lotus Blossom at the Top */}
                  <path
                    d="M80 35 C75 22, 65 18, 62 18 C65 26, 75 32, 80 35 Z"
                    strokeWidth="1.5"
                    fill="currentColor"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M80 35 C85 22, 95 18, 98 18 C95 26, 85 32, 80 35 Z"
                    strokeWidth="1.5"
                    fill="currentColor"
                    fillOpacity="0.1"
                  />
                  <circle cx="80" cy="36" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Row: Mughal Insignia Bar */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold-500/60 bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-950 p-5 sm:p-6 text-cream-50 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-maroon-950 shadow-md border border-gold-300">
                <Flame className="h-6 w-6 diya-glow" />
              </span>
              <div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-cream-50">
                  Persatuan Kebudayaan India • USM
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-gold-300">
                  "Your Voice, Our Responsibility."
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-gold-400/40 bg-maroon-900/80 px-4 py-1.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-gold-400" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-gold-300">
                Manifesto Initiative #2
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
