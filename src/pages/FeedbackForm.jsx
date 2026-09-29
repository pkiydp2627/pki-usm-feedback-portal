import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Loader2, ArrowRight, Sparkles, Flame, Lock } from 'lucide-react';
import { submitFeedback } from '../lib/feedbackService.js';

const CATEGORIES = ['Academic', 'Welfare', 'Sports', 'Culture', 'Facilities', 'Events', 'Others'];

const initialForm = {
  name: '',
  matricNumber: '',
  phone: '',
  email: '',
  category: '',
  title: '',
  description: '',
  isAnonymous: true,
  visibility: 'private',
};

export default function FeedbackForm() {
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
    if (!form.title.trim()) next.title = 'Give your feedback a short title.';
    else if (form.title.trim().length < 4) next.title = 'Title is too short.';
    if (!form.description.trim()) next.description = 'Please describe your feedback.';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'That email address doesn\u2019t look right.';
    if (form.phone && !/^[+\d][\d\s-]{6,}$/.test(form.phone)) next.phone = 'That phone number doesn\u2019t look right.';
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

  if (status === 'success') {
    return (
      <section className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center">
        {/* Decorative Diya */}
        <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-maroon-800 to-maroon-900 text-gold-400 border-2 border-gold-400 shadow-xl">
          <Flame className="h-10 w-10 diya-glow text-gold-400" />
        </span>
        <div className="mt-4 flex items-center gap-1.5 text-xs font-mono font-bold text-gold-600 uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5" />
          Submission Confirmed
        </div>
        <h1 className="mt-3 font-condensed font-bold uppercase tracking-tight text-maroon-950 text-4xl sm:text-5xl">
          Thank You
        </h1>
        <p className="mt-2 text-base font-semibold text-maroon-800 font-body">
          Your feedback has been safely received by the PKI committee.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-maroon-900/80 max-w-md font-body">
          Your feedback is now safely recorded in the PKI committee queue. If you voluntarily provided contact details, a committee representative will follow up with complete confidentiality.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button onClick={() => setStatus('idle')} className="btn-primary">
            Submit Another Feedback
          </button>
          <Link to="/" className="btn-secondary">
            Return to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="relative overflow-hidden py-14 px-5">
      <div className="pointer-events-none absolute inset-0 bg-kolam-pattern opacity-30" />

      <section className="relative mx-auto max-w-2xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-maroon-700 font-semibold">Student Voice Portal</p>
          <h1 className="mt-2 font-condensed font-bold uppercase tracking-tight text-maroon-950 text-4xl sm:text-5xl lg:text-6xl leading-[0.9]">
            Tell PKI What's on Your Mind
          </h1>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          <p className="mx-auto mt-3 text-sm leading-relaxed text-maroon-900/75 max-w-lg font-body">
            Every submission is sacred to us. Keep it 100% anonymous, or share your contact info
            if you would appreciate a personal follow-up.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative mt-8 rounded-3xl border-2 border-gold-500/40 bg-white/95 p-6 sm:p-10 shadow-xl backdrop-blur space-y-6"
        >
          {/* Ornate corner ornaments */}
          <div className="pointer-events-none absolute left-3 top-3 text-gold-500/70 text-xs">✦</div>
          <div className="pointer-events-none absolute right-3 top-3 text-gold-500/70 text-xs">✦</div>
          <div className="pointer-events-none absolute bottom-3 left-3 text-gold-500/70 text-xs">✦</div>
          <div className="pointer-events-none absolute bottom-3 right-3 text-gold-500/70 text-xs">✦</div>

          {/* Anonymity Banner */}
          <label className="flex cursor-pointer items-start gap-3.5 rounded-2xl border-2 border-gold-400/50 bg-gradient-to-r from-cream-50 via-gold-50/40 to-cream-50 p-4 transition-colors hover:border-gold-500">
            <input
              type="checkbox"
              checked={form.isAnonymous}
              onChange={(e) => update('isAnonymous', e.target.checked)}
              className="mt-1 h-5 w-5 rounded border-maroon-800 text-maroon-700 focus:ring-gold-400 accent-maroon-700"
            />
            <div>
              <span className="flex items-center gap-1.5 text-sm font-bold text-maroon-900">
                <Lock className="h-4 w-4 text-maroon-700" />
                Submit this anonymously
              </span>
              <span className="block text-xs leading-relaxed text-maroon-900/70 mt-0.5">
                When checked, your name, matric number, and contact info are NEVER recorded or transmitted.
              </span>
            </div>
          </label>

          {/* Conditional Name and Contact Fields */}
          {!form.isAnonymous && (
            <div className="grid gap-5 sm:grid-cols-2 rounded-2xl border border-cream-300 bg-cream-50/70 p-5">
              <div>
                <label className="label" htmlFor="name">Full Name (Optional)</label>
                <input
                  id="name"
                  type="text"
                  className="input-field"
                  placeholder="e.g. Priyanth"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                />
              </div>
              <div>
                <label className="label" htmlFor="matric">Matric Number (Optional)</label>
                <input
                  id="matric"
                  type="text"
                  className="input-field font-mono"
                  placeholder="e.g. 159823"
                  value={form.matricNumber}
                  onChange={(e) => update('matricNumber', e.target.value)}
                />
              </div>
              <div>
                <label className="label" htmlFor="phone">Phone Number (Optional)</label>
                <input
                  id="phone"
                  type="tel"
                  className="input-field"
                  placeholder="+60 12-345 6789"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
                {errors.phone && <p className="mt-1 text-xs font-semibold text-maroon-600">{errors.phone}</p>}
              </div>
              <div>
                <label className="label" htmlFor="email">Email Address (Optional)</label>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  placeholder="you@student.usm.my"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                />
                {errors.email && <p className="mt-1 text-xs font-semibold text-maroon-600">{errors.email}</p>}
              </div>
            </div>
          )}

          {/* Category Dropdown */}
          <div>
            <label className="label" htmlFor="category">Category</label>
            <select
              id="category"
              className="input-field font-medium cursor-pointer"
              value={form.category}
              onChange={(e) => update('category', e.target.value)}
            >
              <option value="">Select a category…</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.category && <p className="mt-1.5 text-xs font-semibold text-maroon-600">{errors.category}</p>}
          </div>

          {/* Title */}
          <div>
            <label className="label" htmlFor="title">Feedback Subject</label>
            <input
              id="title"
              type="text"
              className="input-field"
              placeholder="e.g. Indian cultural dance rehearsal space / Library resources"
              value={form.title}
              onChange={(e) => update('title', e.target.value)}
            />
            {errors.title && <p className="mt-1.5 text-xs font-semibold text-maroon-600">{errors.title}</p>}
          </div>

          {/* Detailed description */}
          <div>
            <label className="label" htmlFor="description">Detailed Feedback</label>
            <textarea
              id="description"
              rows={6}
              className="input-field resize-none leading-relaxed"
              placeholder="Share as much detail as you're comfortable with. Everything you write is strictly confidential..."
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
            />
            {errors.description && <p className="mt-1.5 text-xs font-semibold text-maroon-600">{errors.description}</p>}
          </div>

          {status === 'error' && (
            <div className="rounded-xl border border-maroon-300 bg-maroon-50 p-4 text-sm font-semibold text-maroon-800">
              Something went wrong sending your feedback. Please check your connection and try again.
            </div>
          )}

          {/* Footer Submit Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cream-200 pt-6">
            <p className="flex items-center gap-1.5 text-xs text-maroon-900/70">
              <ShieldCheck className="h-4 w-4 text-maroon-700" />
              <span>Firebase Encrypted in Transit &amp; Cloudflare Protected</span>
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full sm:w-auto"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-gold-300" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Feedback</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
