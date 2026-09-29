import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, Mic } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/feedback', label: 'Submit Feedback' },
  { to: '/about', label: 'About PKI' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 dark:border-ink-700 bg-sand-100/90 dark:bg-ink-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-700 text-marigold-400 dark:bg-marigold-400 dark:text-ink-900">
            <Mic className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-ink-900 dark:text-sand-100">
              PKI USM
            </span>
            <span className="block text-[11px] font-mono uppercase tracking-[0.14em] text-crimson-500 dark:text-marigold-400">
              Feedback Portal
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-ink-700 text-white dark:bg-marigold-400 dark:text-ink-900'
                    : 'text-ink-700 hover:bg-ink-700/10 dark:text-sand-100 dark:hover:bg-sand-100/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-ink-700 hover:bg-ink-700/10 dark:text-sand-100 dark:hover:bg-sand-100/10"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link to="/committee/login" className="hidden text-sm font-semibold text-ink-700 hover:text-crimson-500 dark:text-sand-100 dark:hover:text-marigold-400 md:block">
            Committee Login
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-full p-2 text-ink-700 hover:bg-ink-700/10 dark:text-sand-100 dark:hover:bg-sand-100/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-sand-200 dark:border-ink-700 px-5 pb-4 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? 'bg-ink-700 text-white dark:bg-marigold-400 dark:text-ink-900'
                      : 'text-ink-700 dark:text-sand-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/committee/login"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-crimson-500 dark:text-marigold-400"
            >
              Committee Login
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
