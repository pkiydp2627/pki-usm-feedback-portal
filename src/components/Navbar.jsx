import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sparkles, Shield, Flame } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/feedback', label: 'Submit Feedback' },
  { to: '/about', label: 'About PKI' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold-500/30 bg-cream-50/95 backdrop-blur shadow-sm">
      {/* Top subtle golden decorative hairline */}
      <div className="h-1 w-full bg-gradient-to-r from-maroon-800 via-gold-500 to-maroon-800" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-maroon-800 to-maroon-900 text-gold-400 border border-gold-500/50 shadow-md group-hover:scale-105 transition-transform">
            <Flame className="h-6 w-6 diya-glow text-gold-400" />
          </span>
          <span className="leading-tight">
            <span className="block font-cinzel text-lg font-bold tracking-wide text-maroon-900">
              PKI USM
            </span>
            <span className="block text-[10px] font-cinzel uppercase tracking-[0.18em] text-gold-600 font-semibold">
              Feedback Portal • குரல்
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-maroon-800 text-cream-50 shadow-sm border border-gold-500/40'
                    : 'text-maroon-900/80 hover:bg-cream-200/80 hover:text-maroon-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/committee/login"
            className="hidden items-center gap-1.5 rounded-full border border-maroon-800/30 bg-cream-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-maroon-900 transition-colors hover:bg-maroon-800 hover:text-cream-50 sm:inline-flex"
          >
            <Shield className="h-3.5 w-3.5 text-gold-600" />
            <span>Committee Login</span>
          </Link>

          <Link
            to="/feedback"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-maroon-700 to-maroon-800 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cream-50 shadow-sm border border-gold-500/40 hover:from-maroon-600 hover:to-maroon-700 transition-all"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold-300" />
            <span>Voice In</span>
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-xl p-2 text-maroon-900 hover:bg-cream-200 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav className="border-t border-gold-500/20 bg-cream-50 px-5 pb-5 pt-3 lg:hidden shadow-lg">
          <div className="flex flex-col gap-1.5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-maroon-800 text-cream-50'
                      : 'text-maroon-900 hover:bg-cream-200'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 pt-2 border-t border-cream-200 flex flex-col gap-2">
              <NavLink
                to="/committee/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-maroon-800/30 bg-cream-100 py-2.5 text-xs font-bold uppercase tracking-wider text-maroon-900"
              >
                <Shield className="h-4 w-4 text-gold-600" />
                <span>Committee Login</span>
              </NavLink>
              <NavLink
                to="/feedback"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-maroon-800 py-2.5 text-xs font-bold uppercase tracking-wider text-cream-50"
              >
                <Sparkles className="h-4 w-4 text-gold-300" />
                <span>Submit Feedback</span>
              </NavLink>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
