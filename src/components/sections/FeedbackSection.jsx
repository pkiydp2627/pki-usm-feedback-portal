import { useState } from 'react';
import { CheckCircle2, ShieldCheck, Loader2, ArrowRight, Sparkles, Flame, Lock, User, Send } from 'lucide-react';
import { submitFeedback } from '../../lib/feedbackService.js';
import DynamicSectionHeading from '../ui/DynamicSectionHeading.jsx';

const CATEGORIES = ['Academic', 'Welfare', 'Sports', 'Culture', 'Facilities', 'Events', 'Others'];

const initialForm = {
  name: '',
  matricNumber: '',
  phone: '',
  email: '',
  category: 'Welfare',
  title: '',
  description: '',
  isAnonymous: true,
  visibility: 'private',
};

export default function FeedbackSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.category) next.category = 'Please select a category.';
    if (!form.title.trim()) next.title = 'Please provide a concise title.';
    else if (form.title.trim().length < 3) next.title = 'Title must be at least 3 characters.';
    if (!form.description.trim()) next.description = 'Please detail your feedback or concern.';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please provide a valid email.';
    if (form.phone && !/^[+\d][\d\s-]{6,}$/.test(form.phone)) next.phone = 'Please provide a valid phone number.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      await submitFeedback(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <section
      id="feedback"
      className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#260212] overflow-hidden flex flex-col justify-center"
    >
      {/* Background South Indian Kolam motif */}
      <div className="pointer-events-none absolute inset-0 bg-kolam-dark opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl w-full">
        {/* Dynamic Section Heading with Kinetic Mask & Bracket Accents */}
        <div className="mb-10">
          <DynamicSectionHeading
            eyebrow="DIRECT & CONFIDENTIAL ACTION"
            icon={ShieldCheck}
            tamilSub="கருத்துக்களம் • THE CRUCIBLE"
            titleLine1="SPEAK YOUR TRUTH"
            titleLine2="(ANONYMOUSLY)"
            titleLine2Color="#e10600"
            description="SUBMIT CONCERNS, PROPOSALS, OR INCIDENTS DIRECTLY TO THE PKI USM EXECUTIVE COMMITTEE."
            align="center"
            size="section"
          />
        </div>

        {/* Success Confirmation State */}
        {status === 'success' ? (
          <div className="mx-auto max-w-xl text-center p-8 sm:p-12 rounded-[12px] bg-[#4f0423] border border-black text-white">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#000000] border border-[#DBB353]">
              <Flame className="h-8 w-8 text-[#DBB353] diya-glow" />
            </div>

            <div className="mt-4 font-mono text-xs font-bold uppercase tracking-widest text-[#DBB353]">
              ✦ RECORDED IN SANCTUARY ✦
            </div>

            <h3 className="font-meat font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mt-2">
              NANDRI • THANK YOU
            </h3>

            <p className="font-body text-sm sm:text-base text-[#ffc7c6] mt-2 leading-relaxed">
              Your submission has been securely delivered to PKI USM Leadership. Every voice is reviewed with uncompromising confidentiality.
            </p>

            <button
              onClick={() => setStatus('idle')}
              className="mt-6 btn-impossible-primary"
            >
              <span>SUBMIT ANOTHER RESPONSE</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          /* Submission Crucible (Flat Burgundy Stage Surface) */
          <div className="rounded-[12px] bg-[#4f0423] border border-black p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Filter Pills (Impossible Foods 15px radius pills) */}
              <div>
                <label className="block font-meat text-xs tracking-[0.04em] uppercase text-[#ffc7c6] mb-3">
                  SELECT CONCERN CATEGORY *
                </label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => {
                    const isSelected = form.category === cat;
                    return (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => update('category', cat)}
                        className={`cursor-pointer ${
                          isSelected ? 'impossible-pill-active' : 'impossible-pill-default'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
                {errors.category && (
                  <p className="mt-1.5 font-mono text-xs text-[#e10600]">{errors.category}</p>
                )}
              </div>

              {/* Anonymity Shield Toggle (Pill Toggle Pattern) */}
              <div className="p-4 rounded-[12px] bg-[#260212]/90 border border-black/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4f0423] text-[#DBB353] border border-black">
                    {form.isAnonymous ? <Lock className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div>
                    <span className="font-meat text-sm tracking-wide text-white uppercase block">
                      {form.isAnonymous ? 'ANONYMOUS TRANSMISSION (SECURE)' : 'IDENTIFIED TRANSMISSION'}
                    </span>
                    <span className="font-body text-xs text-[#ffc7c6] block">
                      {form.isAnonymous
                        ? 'Zero personal identifiers stored. Strict protection guaranteed.'
                        : 'PKI Leadership can contact you back directly regarding this case.'}
                    </span>
                  </div>
                </div>

                <div className="inline-flex rounded-[15px] border border-black/80 bg-[#000000] p-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => update('isAnonymous', true)}
                    className={`rounded-[12px] px-3.5 py-1 text-xs font-meat uppercase tracking-wider transition-all cursor-pointer ${
                      form.isAnonymous
                        ? 'bg-[#e10600] text-white font-bold'
                        : 'text-[#ffc7c6] hover:text-white'
                    }`}
                  >
                    ANONYMOUS
                  </button>
                  <button
                    type="button"
                    onClick={() => update('isAnonymous', false)}
                    className={`rounded-[12px] px-3.5 py-1 text-xs font-meat uppercase tracking-wider transition-all cursor-pointer ${
                      !form.isAnonymous
                        ? 'bg-[#DBB353] text-[#260212] font-bold'
                        : 'text-[#ffc7c6] hover:text-white'
                    }`}
                  >
                    IDENTIFIED
                  </button>
                </div>
              </div>

              {/* Identified Fields (Revealed if Anonymous is false) */}
              {!form.isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-[12px] bg-[#260212]/50 border border-black/60">
                  <div>
                    <label className="block font-meat text-xs tracking-wider uppercase text-[#ffc7c6] mb-1">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="e.g. Priyanthini"
                      className="w-full rounded-[8px] bg-[#000000] border border-black px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#e10600] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-meat text-xs tracking-wider uppercase text-[#ffc7c6] mb-1">
                      MATRIC NUMBER
                    </label>
                    <input
                      type="text"
                      value={form.matricNumber}
                      onChange={(e) => update('matricNumber', e.target.value)}
                      placeholder="e.g. 159821"
                      className="w-full rounded-[8px] bg-[#000000] border border-black px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#e10600] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-meat text-xs tracking-wider uppercase text-[#ffc7c6] mb-1">
                      WHATSAPP / PHONE
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+60 1x-xxxxxxx"
                      className="w-full rounded-[8px] bg-[#000000] border border-black px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#e10600] outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1 font-mono text-xs text-[#e10600]">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-meat text-xs tracking-wider uppercase text-[#ffc7c6] mb-1">
                      STUDENT EMAIL
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="student@student.usm.my"
                      className="w-full rounded-[8px] bg-[#000000] border border-black px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#e10600] outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1 font-mono text-xs text-[#e10600]">{errors.email}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Title Field */}
              <div>
                <label className="block font-meat text-xs tracking-[0.04em] uppercase text-[#ffc7c6] mb-1.5">
                  FEEDBACK HEADLINE / TITLE *
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => update('title', e.target.value)}
                  placeholder="e.g. Desasiswa Harapan prayer hall timing & water dispenser repair"
                  className="w-full rounded-[8px] bg-[#260212] border border-black px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#e10600] outline-none transition-colors"
                />
                {errors.title && (
                  <p className="mt-1 font-mono text-xs text-[#e10600]">{errors.title}</p>
                )}
              </div>

              {/* Description Field */}
              <div>
                <label className="block font-meat text-xs tracking-[0.04em] uppercase text-[#ffc7c6] mb-1.5">
                  DETAILED PERSPECTIVE *
                </label>
                <textarea
                  rows={5}
                  value={form.description}
                  onChange={(e) => update('description', e.target.value)}
                  placeholder="Detail what happened, where it happened, who is impacted, and what practical solution PKI leadership should take forward to USM management..."
                  className="w-full rounded-[8px] bg-[#260212] border border-black p-4 text-sm text-white placeholder-white/30 focus:border-[#e10600] outline-none transition-colors leading-relaxed"
                />
                {errors.description && (
                  <p className="mt-1 font-mono text-xs text-[#e10600]">{errors.description}</p>
                )}
              </div>

              {/* Action Buttons Row (Dual CTA Pattern) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ffc7c6]/80">
                  <ShieldCheck className="h-4 w-4 text-[#DBB353]" />
                  <span>Enforced by PKI USM Student Protection Charter</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-impossible-primary w-full sm:w-auto cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>DISPATCHING...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT TO LEADERSHIP</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-[8px] bg-[#e10600]/20 border border-[#e10600] text-center font-mono text-xs text-white">
                  Failed to transmit feedback. Please verify your connection or try the Quick Voice Drawer.
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
