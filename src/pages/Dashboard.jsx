import { useEffect, useMemo, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, LineChart, Line, Legend,
} from 'recharts';
import {
  Search, LogOut, Inbox, Clock3, CheckCircle2, MessagesSquare, Loader2, ChevronDown, Trash2,
} from 'lucide-react';
import { auth } from '../lib/firebase.js';
import { subscribeToFeedback, updateFeedbackStatus, deleteFeedbackItem } from '../lib/feedbackService.js';
import StatCard from '../components/StatCard.jsx';
import { formatDate } from '../components/FeedbackCard.jsx';

const CATEGORIES = ['All', 'Academic', 'Welfare', 'Sports', 'Culture', 'Facilities', 'Events', 'Others'];
const STATUSES = ['New', 'In Progress', 'Resolved'];
const PIE_COLORS = ['#8B1E3F', '#E8A33D', '#1B2A4A', '#2F855A', '#B4405C', '#F0C877', '#243560'];

export default function Dashboard() {
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All');
  const [status, setStatus] = useState('All');
  const [search, setSearch] = useState('');
  const [updating, setUpdating] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthChecked(true);
      if (!u) navigate('/committee/login');
    });
    return unsub;
  }, [navigate]);

  useEffect(() => {
    if (!user) return;
    const unsub = subscribeToFeedback((all) => {
      setItems(all);
      setLoading(false);
    });
    return unsub;
  }, [user]);

  const filtered = useMemo(() => {
    let list = items;
    if (category !== 'All') list = list.filter((i) => i.category === category);
    if (status !== 'All') list = list.filter((i) => i.status === status);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          (i.name || '').toLowerCase().includes(q)
      );
    }
    return list;
  }, [items, category, status, search]);

  const stats = useMemo(() => {
    const counts = { New: 0, 'In Progress': 0, Resolved: 0 };
    items.forEach((i) => { counts[i.status] = (counts[i.status] || 0) + 1; });
    return counts;
  }, [items]);

  const categoryData = useMemo(() => {
    const map = {};
    items.forEach((i) => { map[i.category] = (map[i.category] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [items]);

  const trendData = useMemo(() => {
    const map = {};
    items.forEach((i) => {
      const d = i.createdAt?.toDate ? i.createdAt.toDate() : new Date();
      const key = d.toLocaleDateString('en-MY', { day: '2-digit', month: 'short' });
      map[key] = (map[key] || 0) + 1;
    });
    return Object.entries(map)
      .map(([date, count]) => ({ date, count }))
      .slice(-14);
  }, [items]);

  async function handleStatusChange(id, newStatus) {
    setUpdating(id);
    try {
      await updateFeedbackStatus(id, newStatus);
    } finally {
      setUpdating(null);
    }
  }

  async function handleDelete(id, title) {
    const confirmed = window.confirm(
      `Delete "${title}"? This can't be undone.`
    );
    if (!confirmed) return;
    setDeletingId(id);
    try {
      await deleteFeedbackItem(id);
      if (expandedId === id) setExpandedId(null);
    } catch (err) {
      console.error(err);
      alert('Something went wrong deleting this. Please try again.');
    } finally {
      setDeletingId(null);
    }
  }

  if (!authChecked || !user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-ink-700/50 dark:text-sand-100/50" />
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Committee Dashboard</p>
          <h1 className="mt-1 font-display text-2xl font-semibold text-ink-900 dark:text-sand-100 sm:text-3xl">
            All student feedback
          </h1>
          <p className="mt-1 text-sm text-ink-700/60 dark:text-sand-100/55">
            Signed in as {user.email}
          </p>
        </div>
        <button
          onClick={() => signOut(auth)}
          className="btn-secondary"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total submissions" value={items.length} icon={Inbox} tone="ink" />
        <StatCard label="New" value={stats.New} icon={MessagesSquare} tone="crimson" />
        <StatCard label="In Progress" value={stats['In Progress']} icon={Clock3} tone="marigold" />
        <StatCard label="Resolved" value={stats.Resolved} icon={CheckCircle2} tone="leaf" />
      </div>

      {/* Charts */}
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="card p-5 lg:col-span-2">
          <p className="font-display text-sm font-semibold text-ink-900 dark:text-sand-100">Submissions over time</p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-sand-200 dark:text-ink-700" />
                <XAxis dataKey="date" fontSize={11} stroke="currentColor" className="text-ink-700/60 dark:text-sand-100/50" />
                <YAxis allowDecimals={false} fontSize={11} stroke="currentColor" className="text-ink-700/60 dark:text-sand-100/50" />
                <Tooltip contentStyle={{ borderRadius: 12, border: 'none', fontSize: 12 }} />
                <Line type="monotone" dataKey="count" stroke="#8B1E3F" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-5">
          <p className="font-display text-sm font-semibold text-ink-900 dark:text-sand-100">By category</p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryData} dataKey="value" nameKey="name" innerRadius={45} outerRadius={75} paddingAngle={2}>
                  {categoryData.map((entry, index) => (
                    <Cell key={entry.name} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12, border: 'none', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card mt-6 p-5">
        <p className="font-display text-sm font-semibold text-ink-900 dark:text-sand-100">Category volume</p>
        <div className="mt-4 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-sand-200 dark:text-ink-700" />
              <XAxis dataKey="name" fontSize={11} stroke="currentColor" className="text-ink-700/60 dark:text-sand-100/50" />
              <YAxis allowDecimals={false} fontSize={11} stroke="currentColor" className="text-ink-700/60 dark:text-sand-100/50" />
              <Tooltip contentStyle={{ borderRadius: 12, border: 'none', fontSize: 12 }} />
              <Bar dataKey="value" fill="#E8A33D" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-700/40 dark:text-sand-100/40" />
          <input
            type="text"
            placeholder="Search feedback..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field pl-10"
          />
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field w-auto py-2.5 text-sm">
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="input-field w-auto py-2.5 text-sm">
          <option value="All">All statuses</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <p className="mt-3 text-xs text-ink-700/50 dark:text-sand-100/45">
        Click any row to read the full feedback.
      </p>

      {/* Table */}
      <div className="card mt-2 overflow-x-auto">
        {loading ? (
          <div className="flex items-center justify-center p-16">
            <Loader2 className="h-6 w-6 animate-spin text-ink-700/50 dark:text-sand-100/50" />
          </div>
        ) : filtered.length === 0 ? (
          <p className="p-10 text-center text-sm text-ink-700/60 dark:text-sand-100/55">
            No feedback matches these filters.
          </p>
        ) : (
          <table className="w-full min-w-[780px] text-left text-sm">
            <thead>
              <tr className="border-b border-sand-200 text-xs uppercase tracking-wide text-ink-700/50 dark:border-ink-700 dark:text-sand-100/50">
                <th className="px-5 py-3 font-medium"></th>
                <th className="px-5 py-3 font-medium">Title</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Submitted by</th>
                <th className="px-5 py-3 font-medium">Phone</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => {
                const isOpen = expandedId === item.id;
                return (
                  <Fragment key={item.id}>
                    <tr
                      onClick={() => setExpandedId(isOpen ? null : item.id)}
                      className="cursor-pointer border-b border-sand-200/70 last:border-0 hover:bg-sand-50 dark:border-ink-700/70 dark:hover:bg-ink-700/30"
                    >
                      <td className="px-3 py-4 text-ink-700/40 dark:text-sand-100/40">
                        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </td>
                      <td className="px-5 py-4">
                        <p className="font-semibold text-ink-900 dark:text-sand-100">{item.title}</p>
                        <p className="mt-0.5 line-clamp-1 max-w-xs text-xs text-ink-700/60 dark:text-sand-100/55">{item.description}</p>
                      </td>
                      <td className="px-5 py-4 text-ink-700/80 dark:text-sand-100/75">{item.category}</td>
                      <td className="px-5 py-4 text-ink-700/80 dark:text-sand-100/75">
                        {item.isAnonymous || !item.name ? 'Anonymous' : item.name}
                        {item.matricNumber && <span className="block font-mono text-xs text-ink-700/50 dark:text-sand-100/45">{item.matricNumber}</span>}
                      </td>
                      <td className="px-5 py-4 font-mono text-xs text-ink-700/80 dark:text-sand-100/75">
                        {item.phone || '—'}
                      </td>
                      <td className="px-5 py-4 text-ink-700/70 dark:text-sand-100/65">{formatDate(item.createdAt)}</td>
                      <td className="px-5 py-4" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={item.status}
                          disabled={updating === item.id}
                          onChange={(e) => handleStatusChange(item.id, e.target.value)}
                          className="rounded-full border border-sand-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-900 dark:border-ink-700 dark:bg-ink-800 dark:text-sand-100"
                        >
                          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                      <td className="px-3 py-4" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => handleDelete(item.id, item.title)}
                          disabled={deletingId === item.id}
                          aria-label="Delete feedback"
                          className="rounded-lg p-2 text-ink-700/40 transition-colors hover:bg-crimson-50 hover:text-crimson-500 disabled:opacity-50 dark:text-sand-100/40 dark:hover:bg-crimson-500/15 dark:hover:text-crimson-400"
                        >
                          {deletingId === item.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </button>
                      </td>
                    </tr>
                    {isOpen && (
                      <tr className="border-b border-sand-200/70 bg-sand-50 dark:border-ink-700/70 dark:bg-ink-900/40">
                        <td colSpan={8} className="px-8 py-5">
                          <p className="text-xs font-semibold uppercase tracking-wide text-ink-700/50 dark:text-sand-100/45">
                            Full feedback
                          </p>
                          <p className="mt-2 max-w-3xl whitespace-pre-wrap text-sm leading-relaxed text-ink-800 dark:text-sand-100/90">
                            {item.description}
                          </p>
                          {!item.isAnonymous && item.email && (
                            <p className="mt-3 text-xs text-ink-700/60 dark:text-sand-100/55">
                              Email: {item.email}
                            </p>
                          )}
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
