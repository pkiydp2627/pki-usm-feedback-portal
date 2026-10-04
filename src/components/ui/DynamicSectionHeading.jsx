import { motion } from 'framer-motion';

const titleContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const maskLineVariants = {
  hidden: {
    y: '105%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Equivalent to power3.out
    },
  },
};

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function DynamicSectionHeading({
  eyebrow,
  icon: Icon,
  tamilSub,
  titleLine1,
  titleLine2,
  titleLine2Color = '#e10600',
  description,
  align = 'center',
  size = 'section',
  showDivider = true,
}) {
  const isHero = size === 'hero';
  const isCompact = size === 'compact';
  const isCenter = align === 'center';

  return (
    <div
      className={`relative select-none ${
        isCenter ? 'text-center mx-auto' : 'text-left'
      } max-w-5xl w-full flex flex-col ${isCenter ? 'items-center' : 'items-start'}`}
    >
      {/* 1. Dynamic Eyebrow Pill with Live Radar Beacon & Oscillating Chevrons */}
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some', margin: '150px 0px 0px 0px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 mb-2.5 px-3.5 py-1.5 rounded-[15px] bg-[#000000] border border-white/15 shadow-lg group hover:border-[#e10600]/50 transition-colors"
        >
          {/* Live Pulsing Beacon Dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e10600] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e10600]" />
          </span>

          <motion.span
            animate={{ x: [-2, 1, -2] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[#e10600] font-mono text-xs font-bold"
          >
            ◂
          </motion.span>

          {Icon && <Icon className="h-3.5 w-3.5 text-[#DBB353] diya-glow shrink-0" />}

          <span className="font-meat font-semibold text-xs tracking-[0.06em] text-[#e10600] uppercase">
            {eyebrow}
          </span>

          <motion.span
            animate={{ x: [2, -1, 2] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[#e10600] font-mono text-xs font-bold"
          >
            ▸
          </motion.span>
        </motion.div>
      )}

      {/* 2. Sacred Tamil Calligraphy Header Callout */}
      {tamilSub && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some', margin: '150px 0px 0px 0px' }}
          transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
          className="flex items-center gap-2 font-tamil text-base sm:text-xl lg:text-2xl font-bold tracking-wide text-[#DBB353] mb-1.5 drop-shadow-[0_2px_10px_rgba(219,179,83,0.3)]"
        >
          <span className="text-[#DBB353] opacity-60 text-xs">✦</span>
          <span>{tamilSub}</span>
          <span className="text-[#DBB353] opacity-60 text-xs">✦</span>
        </motion.div>
      )}

      {/* 3. Colossal Monumental Display Title (Impossible Foods Masked Editorial Reveal) */}
      <motion.div
        variants={titleContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some', margin: '150px 0px 0px 0px' }}
        className={`w-full flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}
      >
        {titleLine1 && (
          <div className={`overflow-hidden w-full flex ${isCenter ? 'justify-center' : 'justify-start'} pb-1`}>
            <motion.h2
              variants={maskLineVariants}
              className={`font-meat font-bold tracking-[0.01em] text-[#ffffff] uppercase drop-shadow-md transition-all duration-300 hover:tracking-[0.03em] ${
                isHero
                  ? 'text-[52px] sm:text-[84px] md:text-[120px] lg:text-[160px] leading-[0.76] md:leading-[0.73]'
                  : isCompact
                  ? 'text-[30px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[0.85]'
                  : 'text-[38px] sm:text-[62px] md:text-[84px] lg:text-[103px] leading-[0.78] md:leading-[0.75]'
              }`}
            >
              {titleLine1}
            </motion.h2>
          </div>
        )}

        {titleLine2 && (
          <div className={`overflow-hidden w-full flex ${isCenter ? 'justify-center' : 'justify-start'} pb-1 mt-1 sm:mt-2`}>
            <motion.div
              variants={maskLineVariants}
              style={{ color: titleLine2Color }}
              className={`font-meat font-bold tracking-[0.01em] uppercase drop-shadow-md transition-all duration-300 hover:tracking-[0.03em] ${
                isHero
                  ? 'text-[52px] sm:text-[84px] md:text-[120px] lg:text-[160px] leading-[0.88] md:leading-[0.84]'
                  : isCompact
                  ? 'text-[30px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[0.88]'
                  : 'text-[38px] sm:text-[62px] md:text-[84px] lg:text-[103px] leading-[0.86] md:leading-[0.82]'
              }`}
            >
              {titleLine2}
            </motion.div>
          </div>
        )}

        {/* Dynamic Kinetic Laser Rule Accent */}
        {showDivider && (
          <motion.div
            variants={dividerVariants}
            style={{ originX: isCenter ? 0.5 : 0 }}
            className={`h-1 w-20 sm:w-32 bg-gradient-to-r from-[#e10600] via-[#DBB353] to-[#e10600] my-3 rounded-full shadow-[0_0_12px_rgba(225,6,0,0.6)] ${
              isCenter ? 'mx-auto' : ''
            }`}
          />
        )}
      </motion.div>

      {/* 4. Parenthetical / Explanatory Sub-text */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some', margin: '150px 0px 0px 0px' }}
          transition={{ duration: 0.45, delay: 0.25, ease: 'easeOut' }}
          className={`font-meat font-medium text-xs sm:text-sm md:text-base tracking-[0.04em] text-[#ffc7c6] uppercase mt-1 max-w-2xl leading-snug ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
