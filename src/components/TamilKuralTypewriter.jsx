import { useState, useEffect, useRef } from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';

const LINE_1 = 'செல்வத்துள் செல்வம் செவிச்செல்வம் அச்செல்வம்';
const LINE_2 = 'செல்வத்துள் எல்லாம் தலை.';

// Helper to safely split Tamil graphemes using Intl.Segmenter
function getGraphemes(text) {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter('ta', { granularity: 'grapheme' });
    return [...segmenter.segment(text)].map((s) => s.segment);
  }
  return text.split('');
}

export default function TamilKuralTypewriter() {
  const [displayedLine1, setDisplayedLine1] = useState('');
  const [displayedLine2, setDisplayedLine2] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [key, setKey] = useState(0); // For restarting animation

  const graphemes1 = useRef(getGraphemes(LINE_1));
  const graphemes2 = useRef(getGraphemes(LINE_2));

  useEffect(() => {
    let isCancelled = false;
    setDisplayedLine1('');
    setDisplayedLine2('');
    setIsTyping(true);
    setIsCompleted(false);

    let idx1 = 0;
    let idx2 = 0;

    const g1 = graphemes1.current;
    const g2 = graphemes2.current;

    // Type line 1
    const timer1 = setInterval(() => {
      if (isCancelled) return;
      if (idx1 < g1.length) {
        idx1++;
        setDisplayedLine1(g1.slice(0, idx1).join(''));
      } else {
        clearInterval(timer1);
        // Pause briefly, then type line 2
        setTimeout(() => {
          if (isCancelled) return;
          const timer2 = setInterval(() => {
            if (isCancelled) return;
            if (idx2 < g2.length) {
              idx2++;
              setDisplayedLine2(g2.slice(0, idx2).join(''));
            } else {
              clearInterval(timer2);
              setIsTyping(false);
              setIsCompleted(true);
            }
          }, 75);
        }, 350);
      }
    }, 70);

    return () => {
      isCancelled = true;
      clearInterval(timer1);
    };
  }, [key]);

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-gold-500/50 bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E5] to-[#F5E8D0] p-6 shadow-xl sm:p-8">
      {/* Decorative Ornate Indian Corner Accents */}
      <div className="pointer-events-none absolute left-3 top-3 text-gold-500/80 text-sm">✦</div>
      <div className="pointer-events-none absolute right-3 top-3 text-gold-500/80 text-sm">✦</div>
      <div className="pointer-events-none absolute bottom-3 left-3 text-gold-500/80 text-sm">✦</div>
      <div className="pointer-events-none absolute bottom-3 right-3 text-gold-500/80 text-sm">✦</div>

      {/* Subtle traditional watermark motif */}
      <div className="pointer-events-none absolute -right-8 -bottom-8 opacity-10 text-maroon-800">
        <svg width="160" height="160" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Header Tag */}
      <div className="flex items-center justify-between gap-2 border-b border-gold-500/30 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-maroon-700 text-gold-300 text-xs shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-maroon-800">
            திருக்குறள் • THIRUKKURAL 411
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block rounded-full bg-maroon-100 px-2.5 py-0.5 font-tamil text-xs font-semibold text-maroon-800">
            அதிகாரம்: கேள்வி
          </span>
          <button
            onClick={() => setKey((k) => k + 1)}
            title="Replay typewriter"
            aria-label="Replay Thirukkural typewriter"
            className="flex items-center gap-1 rounded-full border border-gold-500/40 bg-white/70 px-2 py-1 text-[11px] font-medium text-maroon-800 hover:bg-gold-100 hover:text-maroon-900 transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            <span className="hidden sm:inline">Replay</span>
          </button>
        </div>
      </div>

      {/* The Typed Thirukkural Section */}
      <div className="my-5 min-h-[96px] sm:min-h-[110px] flex flex-col justify-center">
        {/* Line 1: 4 words */}
        <p className="font-tamil text-xl sm:text-2xl lg:text-[26px] font-bold leading-relaxed text-maroon-900 tracking-wide drop-shadow-sm">
          {displayedLine1}
          {isTyping && !displayedLine2 && (
            <span className="cursor-blink ml-1 inline-block h-6 w-1 translate-y-1 bg-maroon-700 font-normal">|</span>
          )}
        </p>

        {/* Line 2: 3 words */}
        <p className="mt-2 font-tamil text-xl sm:text-2xl lg:text-[26px] font-bold leading-relaxed text-maroon-900 tracking-wide drop-shadow-sm">
          {displayedLine2}
          {isTyping && displayedLine2 && (
            <span className="cursor-blink ml-1 inline-block h-6 w-1 translate-y-1 bg-maroon-700 font-normal">|</span>
          )}
          {isCompleted && (
            <span className="cursor-blink ml-1 inline-block h-5 w-0.5 translate-y-0.5 bg-gold-600"></span>
          )}
        </p>
      </div>

      {/* English Meaning & Cultural Context */}
      <div className="border-t border-gold-500/30 pt-3">
        <p className="font-display text-xs sm:text-sm italic leading-relaxed text-maroon-950/80">
          "The wealth of all wealth is the wealth gained through the ear (listening); that wealth is foremost of all wealth."
        </p>
        <p className="mt-1 text-[11px] text-maroon-800/70 font-medium">
          — The bedrock of PKI USM's listening initiative: Hearing your voice is our greatest responsibility.
        </p>
      </div>
    </div>
  );
}
