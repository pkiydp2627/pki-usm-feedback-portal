import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';
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
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-leaf-500/10 text-leaf-500">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h1 className="mt-6 font-display text-2xl font-semibold text-ink-900 dark:text-sand-100">
          Thank you — your feedback has been received.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-700/75 dark:text-sand-100/70">
          It's now in the committee's queue. If you left contact details, someone from PKI may
          follow up.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => setStatus('idle')} className="btn-primary">
            Submit another response
          </button>
          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl px-5 py-14">
      <p className="eyebrow">Feedback Form</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-sand-100">
        Tell PKI what's on your mind
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-ink-700/75 dark:text-sand-100/70">
        Every field except your feedback itself is optional. Leave your name blank and stay
        completely anonymous, or add contact details if you'd like a personal follow-up.
      </p>

      <form onSubmit={handleSubmit} noValidate className="card mt-8 space-y-6 p-6 sm:p-8">
        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-marigold-400/40 bg-marigold-50 dark:bg-marigold-400/10 p-4">
          <input
            type="checkbox"
            checked={form.isAnonymous}
            onChange={(e) => update('isAnonymous', e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-ink-700/30 text-crimson-500 focus:ring-marigold-400"
          />
          <span>
            <span className="block text-sm font-semibold text-ink-900 dark:text-sand-100">
              Submit this anonymously
            </span>
            <span className="block text-xs text-ink-700/70 dark:text-sand-100/65">
              When checked, your name, matric number, phone number, and email are not saved with
              this submission.
            </span>
          </span>
        </label>

        {!form.isAnonymous && (
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="name">Name (Optional)</label>
              <input
                id="name"
                type="text"
                className="input-field"
                placeholder="Your full name"
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
                placeholder="e.g. 123456"
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
              {errors.phone && <p className="mt-1.5 text-xs font-medium text-crimson-500">{errors.phone}</p>}
            </div>
            <div>
              <label className="label" htmlFor="email">Email (Optional)</label>
              <input
                id="email"
                type="email"
                className="input-field"
                placeholder="you@student.usm.my"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
              />
              {errors.email && <p className="mt-1.5 text-xs font-medium text-crimson-500">{errors.email}</p>}
            </div>
          </div>
        )}

        <div>
          <label className="label" htmlFor="category">Category</label>
          <select
            id="category"
            className="input-field"
            value={form.category}
            onChange={(e) => update('category', e.target.value)}
          >
            <option value="">Select a category…</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.category && <p className="mt-1.5 text-xs font-medium text-crimson-500">{errors.category}</p>}
        </div>

        <div>
          <label className="label" htmlFor="title">Feedback Title</label>
          <input
            id="title"
            type="text"
            className="input-field"
            placeholder="Sum it up in a few words"
            value={form.title}
            onChange={(e) => update('title', e.target.value)}
          />
          {errors.title && <p className="mt-1.5 text-xs font-medium text-crimson-500">{errors.title}</p>}
        </div>

        <div>
          <label className="label" htmlFor="description">Detailed Feedback</label>
          <textarea
            id="description"
            rows={6}
            className="input-field resize-none"
            placeholder="Share as much detail as you're comfortable with…"
            value={form.description}
            onChange={(e) => update('description', e.target.value)}
          />
          {errors.description && <p className="mt-1.5 text-xs font-medium text-crimson-500">{errors.description}</p>}
        </div>

        {status === 'error' && (
          <p className="rounded-lg bg-crimson-50 px-4 py-3 text-sm font-medium text-crimson-600 dark:bg-crimson-500/10 dark:text-crimson-400">
            Something went wrong sending your feedback. Please try again in a moment.
          </p>
        )}

        <div className="flex items-center justify-between gap-4 border-t border-sand-200 dark:border-ink-700 pt-6">
          <p className="flex items-center gap-1.5 text-xs text-ink-700/60 dark:text-sand-100/55">
            <ShieldCheck className="h-4 w-4" /> Encrypted in transit &amp; storage
          </p>
          <button type="submit" disabled={status === 'submitting'} className="btn-primary">
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
              </>
            ) : (
              <>
                Submit <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
