import { motion } from 'framer-motion';

/**
 * EditorialMaskedHeading
 * Implements Impossible Foods-style staggered masked typography reveals.
 * Each word is wrapped in an overflow:hidden container.
 * When scrolled into view, words slide up from translateY(100%) to translateY(0%).
 */
export default function EditorialMaskedHeading({
  text,
  highlightWord,
  className = '',
  highlightClassName = 'text-transparent bg-clip-text bg-gradient-to-r from-[#DBB353] via-[#ffc7c6] to-[#e10600]',
  as: Component = 'h2',
  stagger = 0.08,
  duration = 0.8,
}) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '110%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1], // Equivalent to power3.out
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some', margin: '150px 0px 0px 0px' }}
        className="inline-block"
      >
        {words.map((word, idx) => {
          const isHighlight = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());
          return (
            <span
              key={idx}
              className="inline-block overflow-hidden align-bottom pb-1 mr-[0.25em] last:mr-0"
            >
              <motion.span
                variants={wordVariants}
                className={`inline-block ${isHighlight ? highlightClassName : ''}`}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}
