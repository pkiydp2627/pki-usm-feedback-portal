import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockKeyhole, Loader2 } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase.js';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/committee/dashboard');
    } catch (err) {
      setError('Login failed. Check your committee email and password and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto flex max-w-md flex-col items-center px-5 py-20">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-700 text-marigold-400 dark:bg-marigold-400 dark:text-ink-900">
        <LockKeyhole className="h-6 w-6" />
      </span>
      <h1 className="mt-5 font-display text-2xl font-semibold text-ink-900 dark:text-sand-100">
        Committee Login
      </h1>
      <p className="mt-2 text-center text-sm text-ink-700/70 dark:text-sand-100/65">
        Restricted to PKI committee members with a registered account.
      </p>

      <form onSubmit={handleSubmit} className="card mt-8 w-full space-y-5 p-6">
        <div>
          <label className="label" htmlFor="admin-email">Email</label>
          <input
            id="admin-email"
            type="email"
            required
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            required
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && (
          <p className="rounded-lg bg-crimson-50 px-3 py-2.5 text-xs font-medium text-crimson-600 dark:bg-crimson-500/10 dark:text-crimson-400">
            {error}
          </p>
        )}
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Signing in...</> : 'Sign In'}
        </button>
      </form>
    </section>
  );
}
