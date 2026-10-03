import { Phone, Mail, Instagram, ArrowRight, Flame, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import DynamicSectionHeading from '../ui/DynamicSectionHeading.jsx';

const PRESIDENT_DETAILS = {
  name: 'Saahendrran Kathiresan',
  position: 'President, Persatuan Kebudayaan India (PKI USM)',
  phone: '+60 11-2966 8254',
  instagram: '_sahen.kathi_',
  instagramUrl: 'https://instagram.com/_sahen.kathi_',
  email: 'pki.ydp2627@gmail.com',
};

export default function ContactSection({ onScrollToSection }) {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#260212] overflow-hidden flex flex-col justify-center"
    >
      {/* Background South Indian Kolam motif */}
      <div className="pointer-events-none absolute inset-0 bg-kolam-dark opacity-35" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Top Split: Monumental Typography vs Section Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 border-b border-black/80 pb-8">
          <div className="lg:col-span-7 select-none">
            <DynamicSectionHeading
              eyebrow="EXECUTIVE DIRECTORY"
              icon={Flame}
              tamilSub="தொடர்பு கொள்ளவும் • DIRECT ACCESS"
              titleLine1="CONTACT"
              titleLine2="US"
              titleLine2Color="#ffffff"
              align="left"
              size="hero"
            />
          </div>

          <div className="lg:col-span-5">
            <p className="font-meat text-sm sm:text-base tracking-[0.03em] uppercase text-[#ffc7c6] leading-relaxed">
              PKI LEADERSHIP STANDS READY TO LISTEN, ESCALATE, AND PROTECT. REACH OUT VIA DIRECT LINES OR SUBMIT CONFIDENTIALLY THROUGH OUR FEEDBACK FORM.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 rounded-[15px] bg-[#000000] px-3 py-1.5 text-xs font-mono text-[#DBB353] border border-black">
                <Globe className="h-3.5 w-3.5 text-[#e10600]" />
                <span>PAN-CAMPUS ADVOCACY • ALL USM CAMPUSES</span>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Directory Grid (Burgundy Stage #4f0423 Cards with motion entry) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Main Card: President Directory (md:col-span-7, 38px Feature Card) */}
          <div className="md:col-span-7 rounded-[38px] bg-[#4f0423] border border-black p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* South Indian Temple Corner Finials */}
            <div className="pointer-events-none absolute left-4 top-4 text-[#DBB353] text-sm">✦</div>
            <div className="pointer-events-none absolute right-4 top-4 text-[#DBB353] text-sm">✦</div>

            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#DBB353] font-bold block mb-1">
                PERSON-IN-CHARGE • YDP
              </span>
              <h3 className="font-meat text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
                {PRESIDENT_DETAILS.name}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#ffc7c6] font-semibold mt-1">
                {PRESIDENT_DETAILS.position}
              </p>

              <div className="my-6 h-px w-full bg-black/60" />

              {/* Direct Channels */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#000000] text-[#DBB353] border border-black">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-meat text-[11px] text-[#ffc7c6] uppercase tracking-wider block">
                      TELEPHONE / WHATSAPP
                    </span>
                    <a
                      href={`https://wa.me/${PRESIDENT_DETAILS.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm sm:text-base font-bold text-white hover:text-[#DBB353] transition-colors"
                    >
                      {PRESIDENT_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#000000] text-[#DBB353] border border-black">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-meat text-[11px] text-[#ffc7c6] uppercase tracking-wider block">
                      OFFICIAL EMAIL
                    </span>
                    <a
                      href={`mailto:${PRESIDENT_DETAILS.email}`}
                      className="font-mono text-sm sm:text-base font-bold text-white hover:text-[#DBB353] transition-colors"
                    >
                      {PRESIDENT_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#000000] text-[#DBB353] border border-black">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-meat text-[11px] text-[#ffc7c6] uppercase tracking-wider block">
                      INSTAGRAM PROFILE
                    </span>
                    <a
                      href={PRESIDENT_DETAILS.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm sm:text-base font-bold text-white hover:text-[#DBB353] transition-colors"
                    >
                      @{PRESIDENT_DETAILS.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Row */}
            <div className="relative z-10 mt-8 pt-6 border-t border-black/60 flex flex-wrap gap-3">
              <button
                onClick={() => onScrollToSection('feedback')}
                className="btn-impossible-primary cursor-pointer"
              >
                <span>TRANSMIT FEEDBACK</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={`tel:${PRESIDENT_DETAILS.phone}`}
                className="btn-impossible-ghost"
              >
                <Phone className="h-4 w-4 text-[#DBB353]" />
                <span>DIRECT CALL</span>
              </a>
            </div>
          </div>

          {/* Secondary Card: Pan-Campus Advocacy & Executive Access (md:col-span-5, 12px Card) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <div className="rounded-[12px] bg-[#4f0423] border border-black p-6 sm:p-8 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-5 w-5 text-[#e10600]" />
                <h4 className="font-meat text-lg uppercase tracking-wide text-white font-bold">
                  PAN-CAMPUS ADVOCACY
                </h4>
              </div>

              <p className="font-body text-sm text-[#ffc7c6] leading-relaxed mb-5">
                PKI USM operates across all Universiti Sains Malaysia campuses as an active student leadership body. We connect directly with students via digital channels, eliminating counter queues and physical office constraints.
              </p>

              <div className="space-y-2.5 font-mono text-xs text-white/90">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#e10600]" />
                  <span>Main Campus — Gelugor, Penang</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DBB353]" />
                  <span>Engineering Campus — Nibong Tebal</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DBB353]" />
                  <span>Health Campus — Kubang Kerian</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/60">
                <span className="font-meat text-xs text-[#DBB353] uppercase tracking-wider block font-bold mb-1">
                  DIRECT EXECUTIVE ACCESS
                </span>
                <p className="font-mono text-xs text-[#ffc7c6]/80 leading-relaxed">
                  Direct WhatsApp, official email, and 24/7 portal transmission. Executive oversight monitors communications continuously for student welfare and representations.
                </p>
              </div>
            </div>

            <div className="rounded-[12px] bg-[#000000] border border-black p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-[#DBB353]" />
                <h4 className="font-meat text-base uppercase tracking-wide text-white font-bold">
                  CONFIDENTIAL GUARANTEE
                </h4>
              </div>
              <p className="font-body text-xs text-[#ffc7c6] leading-relaxed">
                All communications and representations remain strictly within the protected jurisdiction of PKI USM executive oversight.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
