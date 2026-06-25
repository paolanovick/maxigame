import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { destinos } from '../data/destinos';
import { useLang, pickLang } from '../i18n/LanguageContext';
import styles from './SideNav.module.css';

const HUB_URL = 'https://www.hubtravel.com.ar/';

export default function SideNav({
  progress,
  activeIndex,
  onSelect,
  panelMode = 'dark',
}) {
  const { lang, toggle, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (i) => {
    onSelect(i);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.aside
        className={`${styles.nav} ${
          panelMode === 'light' ? styles.navLight : ''
        }`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.brandSpacer} />

        <nav className={styles.list}>
          <button
            className={`${styles.item} ${
              activeIndex === -1 ? styles.active : ''
            }`}
            onClick={() => handleSelect(-1)}
          >
            <span className={styles.itemNum}>00</span>
            <span className={styles.itemName}>{t.nav.intro}</span>
          </button>

          {destinos.map((d, i) => (
            <button
              key={d.id}
              className={`${styles.item} ${
                activeIndex === i ? styles.active : ''
              }`}
              onClick={() => handleSelect(i)}
            >
              <span className={styles.itemNum}>{d.numero}</span>
              <span className={styles.itemName}>
                {pickLang(d.nombre, lang)}
              </span>
            </button>
          ))}

          <a
            href={HUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.item} ${styles.itemExternal}`}
          >
            <span className={styles.itemNum} aria-hidden="true">
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M3 9 L9 3 M5 3 H9 V7" />
              </svg>
            </span>
            <span className={styles.itemName}>{t.nav.external}</span>
          </a>
        </nav>

        <div className={styles.bottomBlock}>
          <button
            className={styles.langToggle}
            onClick={toggle}
            aria-label={`Switch to ${t.nav.languageSwitch}`}
          >
            <span className={styles.langActive}>{t.nav.languageLabel}</span>
            <span className={styles.langDivider}>/</span>
            <span className={styles.langInactive}>{t.nav.languageSwitch}</span>
          </button>

          <div className={styles.progressWrap}>
            <span className={styles.progressLabel}>
              {String(Math.round(progress * 100)).padStart(2, '0')}
              <span className={styles.progressLabelSlash}>/</span>100
            </span>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ transform: `scaleY(${progress})` }}
              />
            </div>
          </div>
        </div>
      </motion.aside>

      <button
        className={`${styles.mobileToggle} ${
          panelMode === 'light' ? styles.mobileToggleLight : ''
        } ${menuOpen ? styles.mobileToggleOpen : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileDrawer}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={styles.drawerInner}>
              <img
                src="/logoPngSf.png"
                alt="Hub Travel"
                className={styles.drawerLogo}
              />

              <button
                className={`${styles.drawerItem} ${
                  activeIndex === -1 ? styles.drawerItemActive : ''
                }`}
                onClick={() => handleSelect(-1)}
              >
                <span className={styles.drawerNum}>00</span>
                <span className={styles.drawerName}>{t.nav.intro}</span>
              </button>

              {destinos.map((d, i) => (
                <button
                  key={d.id}
                  className={`${styles.drawerItem} ${
                    activeIndex === i ? styles.drawerItemActive : ''
                  }`}
                  onClick={() => handleSelect(i)}
                >
                  <span className={styles.drawerNum}>{d.numero}</span>
                  <span className={styles.drawerName}>
                    {pickLang(d.nombre, lang)}
                  </span>
                </button>
              ))}

              <a
                href={HUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.drawerItem} ${styles.drawerItemExternal}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.drawerNum} aria-hidden="true">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M3 9 L9 3 M5 3 H9 V7" />
                  </svg>
                </span>
                <span className={styles.drawerName}>{t.nav.external}</span>
              </a>

              <div className={styles.drawerFooter}>
                <button className={styles.drawerLang} onClick={toggle}>
                  <span className={styles.langActive}>
                    {t.nav.languageLabel}
                  </span>
                  <span className={styles.langDivider}>/</span>
                  <span>{t.nav.languageSwitch}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
