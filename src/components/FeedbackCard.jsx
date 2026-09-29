import { ArrowBigUp, UserRound } from 'lucide-react';

const categoryStyles = {
  Academic: 'bg-maroon-100 text-maroon-800 border border-maroon-200',
  Welfare: 'bg-leaf-50 text-leaf-600 border border-leaf-100',
  Sports: 'bg-gold-100 text-maroon-900 border border-gold-300',
  Culture: 'bg-maroon-50 text-maroon-700 border border-maroon-200',
  Facilities: 'bg-cream-200 text-maroon-900 border border-cream-300',
  Events: 'bg-gold-100 text-gold-700 border border-gold-300',
  Others: 'bg-cream-100 text-maroon-800 border border-cream-200',
};

const statusStyles = {
  New: 'bg-gradient-to-r from-maroon-600 to-maroon-700 text-cream-50',
  'In Progress': 'bg-gradient-to-r from-gold-400 to-gold-500 text-maroon-950 font-bold',
  Resolved: 'bg-gradient-to-r from-leaf-500 to-leaf-600 text-cream-50',
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
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[item.category] || categoryStyles.Others}`}>
          {item.category}
        </span>
        {showStatus && (
          <span className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${statusStyles[item.status] || statusStyles.New}`}>
            {item.status}
          </span>
        )}
      </div>

      <h3 className="mt-3 font-display text-lg font-bold text-maroon-950">
        {item.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-maroon-900/80 line-clamp-4">
        {item.description}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-cream-200 pt-3">
        <div className="flex items-center gap-1.5 text-xs text-maroon-900/60 font-medium">
          <UserRound className="h-3.5 w-3.5 text-maroon-700" />
          <span>{item.isAnonymous ? 'Anonymous Student' : item.name || 'Student'}</span>
          <span className="mx-1">&middot;</span>
          <span>{formatDate(item.createdAt)}</span>
        </div>

        {onUpvote && (
          <button
            onClick={() => onUpvote(item.id)}
            disabled={hasUpvoted}
            className={`flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
              hasUpvoted
                ? 'border-gold-400 bg-gold-100 text-maroon-900'
                : 'border-cream-300 text-maroon-800 hover:border-gold-400 hover:text-gold-600'
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
