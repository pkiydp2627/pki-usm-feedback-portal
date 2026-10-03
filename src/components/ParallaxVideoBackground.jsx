import { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ParallaxVideoBackground({ videoRef }) {
  // Scroll tracking across the whole page
  const { scrollYProgress } = useScroll();

  // Smooth springs for scroll-based parallax transforms
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  // Sync ambient background video to scroll (No autoplay!)
  useEffect(() => {
    const vid = videoRef?.current;
    if (!vid) return;
    vid.pause();
    const unsubscribe = smoothProgress.on('change', (v) => {
      if (vid.duration && !isNaN(vid.duration)) {
        vid.currentTime = Math.min(vid.duration, Math.max(0, v * vid.duration));
      }
    });
    return () => unsubscribe();
  }, [smoothProgress, videoRef]);

  // Ambient background layer opacity (subtle, keeps site alive across sections)
  const ambientOpacity = useTransform(smoothProgress, [0, 0.15, 0.5, 0.85, 1], [0.3, 0.35, 0.3, 0.35, 0.25]);
  const ambientBlur = useTransform(smoothProgress, [0, 0.2, 0.6], ['blur(24px)', 'blur(32px)', 'blur(40px)']);

  // Parallax drift for ambient layer
  const ambientY = useTransform(smoothProgress, [0, 1], ['0%', '-15%']);

  return (
    <motion.div
      style={{
        y: ambientY,
        opacity: ambientOpacity,
        filter: ambientBlur,
      }}
      className="pointer-events-none fixed inset-0 z-0 h-[120vh] w-full overflow-hidden select-none"
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        src="/hero-video/hero.mp4"
        muted
        playsInline
        preload="auto"
        style={{ mixBlendMode: 'multiply' }}
        className="h-full w-full object-cover scale-110 brightness-90 contrast-150 opacity-40"
      />
      {/* Velvet Wine radial vignette so content is 100% legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#260212]/90 via-[#260212]/95 to-[#260212]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#260212_75%)]" />
    </motion.div>
  );
}
