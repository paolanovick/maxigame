import { useEffect, useState } from 'react';
import { destinos } from './data/destinos';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';
import { LanguageProvider } from './i18n/LanguageContext';
import BrandLogo from './components/BrandLogo';
import Loader from './components/Loader';
import SideNav from './components/SideNav';
import HeroPanel from './components/HeroPanel';
import DestinoPanel from './components/DestinoPanel';
import OutroPanel from './components/OutroPanel';
import './App.css';

function MaxiGames() {
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(-1);
  const { containerRef, trackRef, progress, scrollToPanel } =
    useHorizontalScroll();

  useEffect(() => {
    document.title = 'Hubtravel.fun';
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const total = destinos.length + 1;
    const segment = 1 / total;
    const raw = Math.floor(progress / segment);
    const idx = raw === 0 ? -1 : Math.min(raw - 1, destinos.length - 1);
    setActiveIndex(idx);
  }, [progress]);

  // En mobile detectamos el panel visible por scroll
  useEffect(() => {
    const isMobile = () => window.matchMedia('(max-width: 900px)').matches;
    if (!isMobile()) return;

    let raf = null;
    const update = () => {
      raf = null;
      // Si estamos casi en el tope, es la intro
      if (window.scrollY < 80) {
        setActiveIndex(-1);
        return;
      }
      const center = window.innerHeight * 0.4;
      const panels = document.querySelectorAll('[data-panel-index]');
      let visibleIdx = -1;
      panels.forEach((p) => {
        const rect = p.getBoundingClientRect();
        if (rect.top <= center && rect.bottom > center) {
          visibleIdx = Number(p.dataset.panelIndex);
        }
      });
      setActiveIndex(visibleIdx);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, {
      passive: true,
      capture: true,
    });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll, true);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <Loader visible={loading} />
      <BrandLogo
        loaded={!loading}
        mode={activeIndex === -1 ? 'light' : 'dark'}
      />

      <SideNav
        progress={progress}
        activeIndex={activeIndex}
        onSelect={(i) => scrollToPanel(i)}
        panelMode={activeIndex === -1 ? 'light' : 'dark'}
      />

      <main className="scroll-container" ref={containerRef}>
        <div className="scroll-track" ref={trackRef}>
          <HeroPanel />
          {destinos.map((d, i) => (
            <DestinoPanel
              key={d.id}
              destino={d}
              index={i}
              isActive={activeIndex === i}
            />
          ))}
          <OutroPanel index={destinos.length} />
        </div>
      </main>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MaxiGames />
    </LanguageProvider>
  );
}
