export default function StatCard({ label, value, icon: Icon, tone = 'ink' }) {
  const tones = {
    ink: 'bg-ink-700 text-white dark:bg-ink-800',
    crimson: 'bg-crimson-500 text-white',
    marigold: 'bg-marigold-400 text-ink-900',
    leaf: 'bg-leaf-500 text-white',
  };

  return (
    <div className="card flex items-center gap-4 p-5">
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tones[tone]}`}>
        {Icon && <Icon className="h-5 w-5" strokeWidth={2.25} />}
      </span>
      <div>
        <p className="font-display text-2xl font-semibold text-ink-900 dark:text-sand-100">{value}</p>
        <p className="text-xs font-medium uppercase tracking-wide text-ink-700/60 dark:text-sand-100/60">{label}</p>
      </div>
    </div>
  );
}
