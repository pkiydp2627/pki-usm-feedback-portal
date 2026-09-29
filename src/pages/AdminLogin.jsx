import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Loader2, Sparkles, Flame } from 'lucide-react';
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
      console.error(err);
      setError('Login failed. Please check your committee credentials and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-5 py-16">
      <div className="pointer-events-none absolute inset-0 bg-kolam-pattern opacity-30" />

      <section className="relative w-full max-w-md">
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-maroon-800 to-maroon-900 text-gold-400 border border-gold-500/50 shadow-lg">
            <Flame className="h-7 w-7 diya-glow text-gold-400" />
          </span>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-maroon-800 uppercase tracking-widest">
            <Sparkles className="h-3 w-3 text-gold-600" />
            Committee Access
          </div>
          <h1 className="mt-2 font-condensed font-bold uppercase tracking-tight text-maroon-950 text-3xl sm:text-4xl">
            Committee Login
          </h1>
          <p className="mt-2 text-xs leading-relaxed text-maroon-900/70 font-body">
            Restricted access for PKI committee members with registered credentials.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative mt-8 rounded-3xl border-2 border-gold-500/40 bg-white/95 p-7 sm:p-9 shadow-xl backdrop-blur space-y-5"
        >
          {/* Corner ornaments */}
          <div className="pointer-events-none absolute left-3 top-3 text-gold-500/70 text-xs">✦</div>
          <div className="pointer-events-none absolute right-3 top-3 text-gold-500/70 text-xs">✦</div>
          <div className="pointer-events-none absolute bottom-3 left-3 text-gold-500/70 text-xs">✦</div>
          <div className="pointer-events-none absolute bottom-3 right-3 text-gold-500/70 text-xs">✦</div>

          <div>
            <label className="label" htmlFor="admin-email">Committee Email</label>
            <input
              id="admin-email"
              type="email"
              required
              className="input-field"
              placeholder="committee@pkiusm.my"
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
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="rounded-xl border border-maroon-300 bg-maroon-50 px-4 py-3 text-xs font-semibold text-maroon-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full mt-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-gold-300" />
                <span>Signing in...</span>
              </>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Shield className="h-4 w-4 text-gold-300" />
                <span>Sign In to Dashboard</span>
              </span>
            )}
          </button>
        </form>
      </section>
    </div>
  );
}
