import { Flame, Sparkles } from 'lucide-react';

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
    <div className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Kolam & Mughal Texture */}
      <div className="pointer-events-none absolute inset-0 bg-kolam-pattern opacity-30" />

      <section className="relative mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-maroon-900/20 bg-cream-50 px-3.5 py-1 shadow-xs">
            <Flame className="h-3.5 w-3.5 text-gold-600 diya-glow" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-maroon-800 font-semibold">
              About PKI USM
            </span>
          </div>
          <h1 className="mt-3 font-condensed font-bold uppercase tracking-tight text-maroon-950 text-4xl sm:text-5xl lg:text-6xl leading-[0.88]">
            Persatuan Kebudayaan India
          </h1>
          <p className="mt-2 font-cinzel text-xs sm:text-sm font-bold tracking-[0.22em] text-maroon-800/80 uppercase">
            Indian Cultural Association • Universiti Sains Malaysia
          </p>
          <div className="mx-auto mt-3 h-0.5 w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <p className="mt-3 text-center max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-maroon-900/80 font-body">
            Established to represent, empower, and advocate for Indian students across every campus
            of Universiti Sains Malaysia.
          </p>
        </div>

        {/* Bento Grid: 3 Containers (Vision, Mission, Values) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Bento Cell 1: Our VISION (col-span-6) */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-3xl border-2 border-gold-500/40 bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E5] to-[#F5E8D0] p-8 sm:p-10 shadow-lg hover:shadow-2xl hover:border-gold-500/80 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[420px] group">
            {/* Mughal Corner Finials */}
            <div className="pointer-events-none absolute left-3 top-3 text-gold-500/70 text-xs">✦</div>
            <div className="pointer-events-none absolute right-3 top-3 text-gold-500/70 text-xs">✦</div>

            {/* Content Header & Body */}
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-maroon-700/70 font-bold block mb-1">
                Our
              </span>
              <h2 className="font-condensed text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-maroon-950 mt-1">
                VISION
              </h2>
              <div className="h-1.5 w-16 bg-gradient-to-r from-maroon-700 to-gold-500 rounded-full mt-2.5 mb-5" />
              <p className="text-base sm:text-lg leading-relaxed text-maroon-950/85 font-medium">
                To be the trusted, proactive, and empowering pillar for every Indian student at
                Universiti Sains Malaysia — cultivating an inclusive, heard, and flourishing campus
                community built upon mutual respect and institutional accountability.
              </p>
            </div>

            {/* Bottom Mughal Architectural Watermark: Mehrab Arch & Eye of Foresight */}
            <div className="relative z-0 mt-8 flex justify-center opacity-25 group-hover:opacity-40 transition-opacity">
              <svg
                className="w-56 h-36 text-maroon-800"
                viewBox="0 0 200 120"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                <path
                  d="M55 75 Q100 35 145 75 Q100 115 55 75 Z"
                  strokeWidth="2.5"
                  fill="currentColor"
                  fillOpacity="0.08"
                />
                <circle cx="100" cy="75" r="14" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
                <circle cx="100" cy="75" r="6" fill="currentColor" />
                <line x1="100" y1="45" x2="100" y2="35" strokeWidth="2" strokeLinecap="round" />
                <line x1="75" y1="52" x2="68" y2="43" strokeWidth="2" strokeLinecap="round" />
                <line x1="125" y1="52" x2="132" y2="43" strokeWidth="2" strokeLinecap="round" />
                <line x1="52" y1="68" x2="42" y2="64" strokeWidth="2" strokeLinecap="round" />
                <line x1="148" y1="68" x2="158" y2="64" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Bento Cell 2: Our MISSION (col-span-6) */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-3xl border-2 border-gold-500/40 bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E5] to-[#F5E8D0] p-8 sm:p-10 shadow-lg hover:shadow-2xl hover:border-gold-500/80 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[420px] group">
            {/* Mughal Corner Finials */}
            <div className="pointer-events-none absolute left-3 top-3 text-gold-500/70 text-xs">✦</div>
            <div className="pointer-events-none absolute right-3 top-3 text-gold-500/70 text-xs">✦</div>

            {/* Top Mughal Watermark: Imperial Sunburst & Aim Medallion */}
            <div className="absolute -top-6 -right-6 z-0 opacity-20 group-hover:opacity-35 transition-opacity pointer-events-none">
              <svg
                className="w-56 h-56 text-maroon-800"
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
                <path d="M25 135 L135 25 M135 25 L105 28 M135 25 L132 55" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25 135 L45 130 M25 135 L30 115" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Content Header & Body */}
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-maroon-700/70 font-bold block mb-1">
                Our
              </span>
              <h2 className="font-condensed text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-maroon-950 mt-1">
                MISSION
              </h2>
              <div className="h-1.5 w-16 bg-gradient-to-r from-maroon-700 to-gold-500 rounded-full mt-2.5 mb-5" />
              <p className="text-base sm:text-lg leading-relaxed text-maroon-950/85 font-medium font-body">
                To provide accessible, swift, and technology-enabled support systems across
                academics, welfare aid, cultural engagement, and campus facilities. We bridge students
                directly to the university administration, ensuring every legitimate concern is met
                with decisive action, transparency, and care.
              </p>
            </div>

            {/* Sub-badge highlighting initiative */}
            <div className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full border border-maroon-900/20 bg-white/90 px-4 py-2 shadow-xs w-fit">
              <Sparkles className="h-4 w-4 text-gold-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-maroon-800">
                Accountability • Action • Advocacy
              </span>
            </div>
          </div>

          {/* Bento Cell 3: Our VALUES (col-span-12 - Full Width Bento Span) */}
          <div className="lg:col-span-12 relative overflow-hidden rounded-3xl border-2 border-gold-500/40 bg-gradient-to-r from-[#FFFDF9] via-[#FAF3E5] to-[#F5E8D0] p-8 sm:p-12 shadow-lg hover:shadow-2xl hover:border-gold-500/80 transition-all duration-300 hover:-translate-y-1 group">
            {/* Mughal Corner Finials */}
            <div className="pointer-events-none absolute left-3 top-3 text-gold-500/70 text-xs">✦</div>
            <div className="pointer-events-none absolute right-3 top-3 text-gold-500/70 text-xs">✦</div>
            <div className="pointer-events-none absolute bottom-3 left-3 text-gold-500/70 text-xs">✦</div>
            <div className="pointer-events-none absolute bottom-3 right-3 text-gold-500/70 text-xs">✦</div>

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-maroon-700/70 font-bold block mb-1">
                  Our
                </span>
                <h2 className="font-condensed text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-maroon-950 mt-1">
                  VALUES
                </h2>
                <div className="h-1.5 w-20 bg-gradient-to-r from-maroon-700 to-gold-500 rounded-full mt-2.5 mb-7" />

                {/* Values Bullet Grid */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {values.map((v) => (
                    <div
                      key={v}
                      className="flex items-center gap-3 rounded-2xl border border-gold-500/25 bg-white/70 px-4 py-3 shadow-sm hover:bg-white hover:border-gold-500/50 transition-colors"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maroon-800 text-gold-300 text-xs shadow-sm">
                        ✦
                      </span>
                      <span className="text-sm sm:text-base font-bold text-maroon-950 leading-snug">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Mughal Watermark: Royal Clasped Hands & Lotus Motif */}
              <div className="relative flex justify-center lg:justify-end opacity-25 group-hover:opacity-40 transition-opacity">
                <svg
                  className="w-56 h-56 sm:w-64 sm:h-64 text-maroon-800"
                  viewBox="0 0 160 160"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M80 145 C20 100, 10 50, 40 25 C65 5, 78 20, 80 32 C82 20, 95 5, 120 25 C150 50, 140 100, 80 145 Z"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="currentColor"
                    fillOpacity="0.05"
                  />
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

        </div>
      </section>
    </div>
  );
}
