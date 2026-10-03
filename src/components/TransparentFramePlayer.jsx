import { useState, useEffect, useRef, useCallback } from 'react';
import { RotateCw, Smartphone, Maximize2 } from 'lucide-react';

const TOTAL_FRAMES = 95;
const FRAME_PATH = (idx) => `/hero-video/frame_${String(idx).padStart(3, '0')}.png`;

export default function TransparentFramePlayer() {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameIndexRef = useRef(1);
  const touchStartRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [mobileMode, setMobileMode] = useState('horizontal'); // 'horizontal' | 'fitted'
  const [windowDims, setWindowDims] = useState({ w: 0, h: 0 });

  // Detect mobile & orientation dynamically
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setIsMobile(w < 768);
      setIsLandscape(w > h);
      setWindowDims({ w, h });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // 1. Preload all 95 transparent PNG frames into memory
  useEffect(() => {
    let mounted = true;
    let count = 0;
    const imgs = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        if (!mounted) return;
        count++;
        if (i === 1) {
          drawFrame(1);
        }
        if (count >= 5 && !isReady) {
          setIsReady(true);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;

    return () => {
      mounted = false;
    };
  }, []);

  // 2. Render target frame onto HTML5 Canvas with pristine scaling & zero distortion
  const drawFrame = useCallback((frameNum) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const idx = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameNum))) - 1;
    const img = imagesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Use device pixel ratio capped at 2 for performance and sharp text
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const isMobileWidth = window.innerWidth < 768;
    const isPortrait = window.innerHeight > window.innerWidth;
    const isRotated = isMobileWidth && isPortrait && mobileMode === 'horizontal';

    let logicalW, logicalH;
    if (isRotated) {
      // In 90deg horizontal mobile mode: width spans screen height, height spans screen width
      // This maintains the 16:9 landscape aspect ratio at full native resolution without shrinking
      logicalW = window.innerHeight;
      logicalH = window.innerWidth;
    } else if (isMobileWidth && isPortrait && mobileMode === 'fitted') {
      // In fitted mode, preserve horizontal 16:9 ratio centered in portrait
      logicalW = window.innerWidth;
      logicalH = Math.round(window.innerWidth / (800 / 450));
    } else {
      // Desktop / Landscape: fill stage
      logicalW = canvas.offsetWidth || window.innerWidth;
      logicalH = canvas.offsetHeight || window.innerHeight;
    }

    const w = Math.round(logicalW * dpr);
    const h = Math.round(logicalH * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    // Clear canvas to 100% transparency — zero background box
    ctx.clearRect(0, 0, w, h);

    // Maximum rendering fidelity
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Draw uncropped full frame horizontally
    ctx.drawImage(img, 0, 0, w, h);
  }, [mobileMode]);

  // 3. Direct Native Scroll Listener for 60/120fps Frame Scrubbing
  useEffect(() => {
    let animId = null;

    const updateFrame = () => {
      const hero = document.getElementById('hero');
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const totalScrollable = hero.offsetHeight - window.innerHeight;

      let progress = 0;
      if (totalScrollable > 0) {
        const scrolled = -rect.top;
        progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      }

      const targetFrame = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1)
      );

      if (targetFrame !== frameIndexRef.current) {
        frameIndexRef.current = targetFrame;
        drawFrame(targetFrame);
      }
    };

    const handleScroll = () => {
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(updateFrame);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateFrame();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [drawFrame]);

  // Redraw when ready, resized, or mode changed
  useEffect(() => {
    if (isReady) {
      drawFrame(frameIndexRef.current);
    }
  }, [isReady, drawFrame, mobileMode, isLandscape]);

  // Redraw on window resize
  useEffect(() => {
    const handleResize = () => {
      drawFrame(frameIndexRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // 3D Perspective Tilt on Hover (Desktop only)
  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * 3.5, y: x * 3.5 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Direct Touch Swipe Scrubbing for Mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        frame: frameIndexRef.current,
      };
    }
  };

  const handleTouchMove = (e) => {
    if (!touchStartRef.current || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const isRotated = isMobile && !isLandscape && mobileMode === 'horizontal';

    // In rotated mode, horizontal swipe maps along phone's Y axis
    const delta = isRotated
      ? touch.clientY - touchStartRef.current.y
      : touch.clientX - touchStartRef.current.x;

    const frameDelta = Math.round(delta / 3.5);
    const target = Math.max(1, Math.min(TOTAL_FRAMES, touchStartRef.current.frame + frameDelta));
    if (target !== frameIndexRef.current) {
      frameIndexRef.current = target;
      drawFrame(target);
    }
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
  };

  const isRotatedMobile = isMobile && !isLandscape && mobileMode === 'horizontal';
  const isFittedMobile = isMobile && !isLandscape && mobileMode === 'fitted';

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Mobile Orientation Cue & Viewport Mode Toggle */}
      {isMobile && !isLandscape && (
        <div className="absolute top-3 left-0 right-0 z-30 flex flex-col items-center gap-1.5 px-4 pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={() => setMobileMode((m) => (m === 'horizontal' ? 'fitted' : 'horizontal'))}
              className="flex items-center gap-1.5 bg-[#18010b]/90 hover:bg-[#260212] backdrop-blur-md px-3 py-1 rounded-full border border-[#DBB353]/30 text-[#DBB353] text-[10px] font-meat tracking-[0.06em] uppercase shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <RotateCw className="h-3 w-3 text-[#e10600] animate-spin-slow" />
              <span>{mobileMode === 'horizontal' ? 'HORIZONTAL WIDESCREEN' : 'FITTED VIEW'}</span>
            </button>
          </div>

          <div className="flex items-center gap-1 text-[9px] font-mono tracking-widest text-[#ffc7c6]/75 uppercase bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
            <Smartphone className="h-2.5 w-2.5 text-[#DBB353]" />
            <span>Turn phone sideways for landscape fullscreen</span>
          </div>
        </div>
      )}

      {/* Pristine Canvas Stage — Rotated 90deg on Mobile Portrait so Horizontal 16:9 Frame Does Not Shrink */}
      <div
        style={
          isRotatedMobile
            ? {
                width: `${windowDims.h || (typeof window !== 'undefined' ? window.innerHeight : 844)}px`,
                height: `${windowDims.w || (typeof window !== 'undefined' ? window.innerWidth : 390)}px`,
                transform: 'translate(-50%, -50%) rotate(90deg)',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transformOrigin: 'center center',
              }
            : isFittedMobile
            ? {
                width: '100%',
                maxWidth: '100vw',
                aspectRatio: '16 / 9',
              }
            : {
                width: '100%',
                height: '100%',
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }
        }
        className="bg-transparent flex items-center justify-center transition-all duration-300"
      >
        {/* Transparent Canvas Layer */}
        <canvas
          ref={canvasRef}
          style={{
            imageRendering: '-webkit-optimize-contrast',
          }}
          className="w-full h-full block filter drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
        />
      </div>
    </div>
  );
}
