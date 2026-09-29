import { ArrowBigUp, UserRound } from 'lucide-react';

const categoryStyles = {
  Academic: 'bg-crimson-50 text-crimson-600 dark:bg-crimson-500/15 dark:text-crimson-400',
  Welfare: 'bg-leaf-500/10 text-leaf-600 dark:text-leaf-500',
  Sports: 'bg-marigold-100 text-marigold-600 dark:bg-marigold-400/15 dark:text-marigold-300',
  Culture: 'bg-ink-700/10 text-ink-700 dark:bg-sand-100/10 dark:text-sand-100',
  Facilities: 'bg-sand-200 text-ink-700 dark:bg-ink-700/40 dark:text-sand-100',
  Events: 'bg-marigold-100 text-marigold-600 dark:bg-marigold-400/15 dark:text-marigold-300',
  Others: 'bg-sand-200 text-ink-700 dark:bg-ink-700/40 dark:text-sand-100',
};

const statusStyles = {
  New: 'bg-crimson-500 text-white',
  'In Progress': 'bg-marigold-400 text-ink-900',
  Resolved: 'bg-leaf-500 text-white',
};

export function formatDate(timestamp) {
  if (!timestamp) return 'Just now';
  try {
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-MY', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
}

export default function FeedbackCard({ item, onUpvote, hasUpvoted, showStatus = true }) {
  return (
    <article className="card p-5">
      <div className="flex items-start justify-between gap-3">
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${categoryStyles[item.category] || categoryStyles.Others}`}>
          {item.category}
        </span>
        {showStatus && (
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[item.status] || statusStyles.New}`}>
            {item.status}
          </span>
        )}
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold text-ink-900 dark:text-sand-100">
        {item.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-700/80 dark:text-sand-100/75 line-clamp-4">
        {item.description}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-sand-200 dark:border-ink-700 pt-3">
        <div className="flex items-center gap-1.5 text-xs text-ink-700/60 dark:text-sand-100/60">
          <UserRound className="h-3.5 w-3.5" />
          <span>{item.isAnonymous ? 'Anonymous student' : item.name || 'Anonymous student'}</span>
          <span className="mx-1">&middot;</span>
          <span>{formatDate(item.createdAt)}</span>
        </div>

        {onUpvote && (
          <button
            onClick={() => onUpvote(item.id)}
            disabled={hasUpvoted}
            className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${
              hasUpvoted
                ? 'border-marigold-400 bg-marigold-100 text-marigold-600 dark:bg-marigold-400/15 dark:text-marigold-300'
                : 'border-sand-200 text-ink-700 hover:border-marigold-400 hover:text-marigold-600 dark:border-ink-700 dark:text-sand-100 dark:hover:text-marigold-300'
            }`}
          >
            <ArrowBigUp className="h-4 w-4" strokeWidth={2.25} />
            {item.upvotes || 0}
          </button>
        )}
      </div>
    </article>
  );
}
