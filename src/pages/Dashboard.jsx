import { useEffect, useMemo, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, LineChart, Line, Legend,
} from 'recharts';
import {
  Search, LogOut, Inbox, Clock3, CheckCircle2, MessagesSquare, Loader2, ChevronDown, Trash2, Shield, Sparkles,
} from 'lucide-react';
import { auth } from '../lib/firebase.js';
import { subscribeToFeedback, updateFeedbackStatus, deleteFeedbackItem } from '../lib/feedbackService.js';
import StatCard from '../components/StatCard.jsx';
import { formatDate } from '../components/FeedbackCard.jsx';

const CATEGORIES = ['All', 'Academic', 'Welfare', 'Sports', 'Culture', 'Facilities', 'Events', 'Others'];
const STATUSES = ['New', 'In Progress', 'Resolved'];
const PIE_COLORS = ['#751128', '#C59B27', '#2D6A4F', '#9B2226', '#E9CD83', '#5A0B1E', '#3D0B16', '#85172E'];

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
          i.title?.toLowerCase().includes(q) ||
          i.description?.toLowerCase().includes(q) ||
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
    } catch (err) {
      console.error(err);
      alert('Could not update status. Please try again.');
    } finally {
      setUpdating(null);
    }
  }

  async function handleDelete(id, title) {
    const confirmed = window.confirm(
      `Permanently delete "${title}"? This cannot be undone.`
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
        <Loader2 className="h-8 w-8 animate-spin text-maroon-700" />
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gold-500/30 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-maroon-800 text-gold-300">
              <Shield className="h-4 w-4" />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-maroon-800 font-semibold">
              PKI Committee Portal
            </p>
          </div>
          <h1 className="mt-1 font-condensed font-bold uppercase tracking-tight text-maroon-950 text-3xl sm:text-4xl">
            Student Feedback Dashboard
          </h1>
          <p className="mt-1 text-sm text-maroon-900/70 font-body">
            Signed in as <span className="font-semibold text-maroon-900">{user.email}</span>
          </p>
        </div>
        <button
          onClick={() => signOut(auth)}
          className="btn-secondary text-sm"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>

      {/* Stats Cards */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total Submissions" value={items.length} icon={Inbox} tone="maroon" />
        <StatCard label="New Submissions" value={stats.New} icon={MessagesSquare} tone="crimson" />
        <StatCard label="In Progress" value={stats['In Progress']} icon={Clock3} tone="gold" />
        <StatCard label="Resolved" value={stats.Resolved} icon={CheckCircle2} tone="leaf" />
      </div>

      {/* Visual Analytics */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <p className="font-condensed text-lg font-bold uppercase tracking-tight text-maroon-950">Submissions Over Time</p>
            <span className="font-mono text-xs font-semibold text-maroon-700/60 uppercase">Last 14 days</span>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3E8D3" />
                <XAxis dataKey="date" fontSize={11} stroke="#5A0B1E" />
                <YAxis allowDecimals={false} fontSize={11} stroke="#5A0B1E" />
                <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #E8D5B5', backgroundColor: '#FFFDF9', fontSize: 12 }} />
                <Line type="monotone" dataKey="count" stroke="#751128" strokeWidth={2.5} dot={{ r: 4, fill: '#C59B27' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <p className="font-condensed text-lg font-bold uppercase tracking-tight text-maroon-950">By Category</p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryData} dataKey="value" nameKey="name" innerRadius={45} outerRadius={75} paddingAngle={3}>
                  {categoryData.map((entry, index) => (
                    <Cell key={entry.name} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #E8D5B5', backgroundColor: '#FFFDF9', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card mt-6 p-6">
        <p className="font-condensed text-lg font-bold uppercase tracking-tight text-maroon-950">Submissions by Category</p>
        <div className="mt-4 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3E8D3" />
              <XAxis dataKey="name" fontSize={11} stroke="#5A0B1E" />
              <YAxis allowDecimals={false} fontSize={11} stroke="#5A0B1E" />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #E8D5B5', backgroundColor: '#FFFDF9', fontSize: 12 }} />
              <Bar dataKey="value" fill="#C59B27" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center w-full">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-maroon-800/40" />
            <input
              type="text"
              placeholder="Search feedback..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field w-auto py-2.5 text-sm font-medium">
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="input-field w-auto py-2.5 text-sm font-medium">
            <option value="All">All Statuses</option>
            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <p className="text-xs font-semibold text-maroon-900/60 shrink-0">
          Showing {filtered.length} of {items.length} records
        </p>
      </div>

      {/* Submissions Table */}
      <div className="card mt-4 overflow-hidden border-2 border-gold-500/30">
        {loading ? (
          <div className="flex items-center justify-center p-16">
            <Loader2 className="h-8 w-8 animate-spin text-maroon-700" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-base font-semibold text-maroon-900">No feedback submissions found</p>
            <p className="text-xs text-maroon-900/60 mt-1">Try resetting the filters or check back later.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead className="bg-cream-200/70 border-b border-cream-300">
                <tr className="text-xs font-cinzel font-bold uppercase tracking-wider text-maroon-900">
                  <th className="px-4 py-3.5 w-8"></th>
                  <th className="px-5 py-3.5">Title &amp; Summary</th>
                  <th className="px-5 py-3.5">Category</th>
                  <th className="px-5 py-3.5">Submitted By</th>
                  <th className="px-5 py-3.5">Contact</th>
                  <th className="px-5 py-3.5">Date</th>
                  <th className="px-5 py-3.5">Status</th>
                  <th className="px-4 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200">
                {filtered.map((item) => {
                  const isOpen = expandedId === item.id;
                  return (
                    <Fragment key={item.id}>
                      <tr
                        onClick={() => setExpandedId(isOpen ? null : item.id)}
                        className={`cursor-pointer transition-colors ${
                          isOpen ? 'bg-cream-100' : 'hover:bg-cream-50'
                        }`}
                      >
                        <td className="px-4 py-4 text-maroon-800/40">
                          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180 text-maroon-700' : ''}`} />
                        </td>
                        <td className="px-5 py-4">
                          <p className="font-bold text-maroon-950">{item.title}</p>
                          <p className="mt-0.5 line-clamp-1 max-w-xs text-xs text-maroon-900/70">{item.description}</p>
                        </td>
                        <td className="px-5 py-4 font-semibold text-maroon-900">{item.category}</td>
                        <td className="px-5 py-4 text-maroon-900">
                          {item.isAnonymous || !item.name ? (
                            <span className="rounded-full bg-cream-200 px-2 py-0.5 text-xs font-semibold text-maroon-800">Anonymous</span>
                          ) : (
                            <div>
                              <span className="font-semibold block">{item.name}</span>
                              {item.matricNumber && <span className="font-mono text-xs text-maroon-700/60">{item.matricNumber}</span>}
                            </div>
                          )}
                        </td>
                        <td className="px-5 py-4 font-mono text-xs text-maroon-900/80">
                          {item.phone || item.email || '—'}
                        </td>
                        <td className="px-5 py-4 text-xs font-medium text-maroon-900/70">{formatDate(item.createdAt)}</td>
                        <td className="px-5 py-4" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={item.status}
                            disabled={updating === item.id}
                            onChange={(e) => handleStatusChange(item.id, e.target.value)}
                            className="rounded-full border border-gold-500/50 bg-white px-3 py-1.5 text-xs font-bold text-maroon-900 shadow-sm cursor-pointer"
                          >
                            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </td>
                        <td className="px-4 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => handleDelete(item.id, item.title)}
                            disabled={deletingId === item.id}
                            aria-label="Delete submission"
                            className="rounded-lg p-2 text-maroon-800/40 transition-colors hover:bg-maroon-100 hover:text-maroon-800"
                          >
                            {deletingId === item.id ? (
                              <Loader2 className="h-4 w-4 animate-spin text-maroon-700" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}
                          </button>
                        </td>
                      </tr>
                      {isOpen && (
                        <tr className="bg-cream-100 border-b border-cream-300">
                          <td colSpan={8} className="px-8 py-6">
                            <div className="rounded-2xl border border-cream-300 bg-white p-5 shadow-sm">
                              <p className="font-cinzel text-xs font-bold uppercase tracking-wider text-maroon-700">
                                Detailed Student Submission
                              </p>
                              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-maroon-950 font-medium">
                                {item.description}
                              </p>
                              {!item.isAnonymous && (
                                <div className="mt-4 flex flex-wrap gap-4 border-t border-cream-200 pt-3 text-xs text-maroon-900/80 font-medium">
                                  {item.email && <span>Email: <a href={`mailto:${item.email}`} className="text-maroon-700 underline">{item.email}</a></span>}
                                  {item.phone && <span>Phone: <a href={`tel:${item.phone}`} className="text-maroon-700 underline">{item.phone}</a></span>}
                                  {item.matricNumber && <span>Matric: {item.matricNumber}</span>}
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
