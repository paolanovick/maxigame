import { useEffect, useRef, useState } from 'react';

const lerp = (a, b, t) => a + (b - a) * t;

export function useHorizontalScroll() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const targetX = useRef(0);
  const currentX = useRef(0);
  const maxScroll = useRef(0);
  const rafId = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const isMobile = () => window.matchMedia('(max-width: 900px)').matches;
    if (isMobile()) return;

    const computeMax = () => {
      maxScroll.current = Math.max(0, track.scrollWidth - window.innerWidth);
    };

    const onWheel = (e) => {
      if (isMobile()) return;
      e.preventDefault();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      targetX.current = Math.max(
        0,
        Math.min(maxScroll.current, targetX.current + delta)
      );
    };

    const onKey = (e) => {
      if (isMobile()) return;
      const step = window.innerWidth * 0.6;
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        targetX.current = Math.min(maxScroll.current, targetX.current + step);
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        targetX.current = Math.max(0, targetX.current - step);
        e.preventDefault();
      } else if (e.key === 'Home') {
        targetX.current = 0;
      } else if (e.key === 'End') {
        targetX.current = maxScroll.current;
      }
    };

    let touchStartX = 0;
    let touchStartScroll = 0;
    const onTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartScroll = targetX.current;
    };
    const onTouchMove = (e) => {
      const dx = touchStartX - e.touches[0].clientX;
      targetX.current = Math.max(0, Math.min(maxScroll.current, touchStartScroll + dx));
    };

    const tick = () => {
      currentX.current = lerp(currentX.current, targetX.current, 0.085);
      if (Math.abs(currentX.current - targetX.current) < 0.05) {
        currentX.current = targetX.current;
      }
      track.style.transform = `translate3d(${-currentX.current}px, 0, 0)`;
      const p = maxScroll.current > 0 ? currentX.current / maxScroll.current : 0;
      setProgress(p);
      rafId.current = requestAnimationFrame(tick);
    };

    computeMax();
    window.addEventListener('resize', computeMax);
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', computeMax);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const scrollToPanel = (index) => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      const panel = document.querySelector(`[data-panel-index="${index}"]`);
      panel?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const panel = document.querySelector(`[data-panel-index="${index}"]`);
    if (!panel || !trackRef.current) return;
    const rect = panel.getBoundingClientRect();
    const trackRect = trackRef.current.getBoundingClientRect();
    const offset = rect.left - trackRect.left;
    targetX.current = Math.max(0, Math.min(maxScroll.current, offset));
  };

  return { containerRef, trackRef, progress, scrollToPanel };
}
