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

  // En mobile detectamos el panel visible con IntersectionObserver
  useEffect(() => {
    const isMobile = () => window.matchMedia('(max-width: 900px)').matches;
    if (!isMobile()) return;

    const ratios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.panelIndex);
          ratios.set(idx, entry.intersectionRatio);
        });
        let bestIdx = -1;
        let bestRatio = 0;
        ratios.forEach((ratio, idx) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIdx = idx;
          }
        });
        setActiveIndex(bestIdx);
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    );

    const panels = document.querySelectorAll('[data-panel-index]');
    panels.forEach((p) => observer.observe(p));

    return () => observer.disconnect();
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
