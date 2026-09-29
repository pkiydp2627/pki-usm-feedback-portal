export default function StatCard({ label, value, icon: Icon, tone = 'maroon' }) {
  const tones = {
    maroon: 'bg-gradient-to-br from-maroon-700 to-maroon-900 text-cream-50 border border-gold-500/40',
    gold: 'bg-gradient-to-br from-gold-400 to-gold-600 text-maroon-950 border border-gold-300',
    leaf: 'bg-gradient-to-br from-leaf-500 to-leaf-600 text-cream-50',
    crimson: 'bg-gradient-to-br from-maroon-600 to-maroon-700 text-cream-50',
    ink: 'bg-maroon-800 text-cream-50 border border-gold-500/30',
    marigold: 'bg-gradient-to-br from-gold-400 to-gold-500 text-maroon-950',
  };

  return (
    <div className="card flex items-center gap-4 p-5 hover:border-gold-400 transition-all">
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm ${tones[tone] || tones.maroon}`}>
        {Icon && <Icon className="h-6 w-6" strokeWidth={2} />}
      </span>
      <div>
        <p className="font-display text-2xl font-bold text-maroon-950">{value}</p>
        <p className="text-xs font-semibold uppercase tracking-wider text-maroon-900/60">{label}</p>
      </div>
    </div>
  );
}
