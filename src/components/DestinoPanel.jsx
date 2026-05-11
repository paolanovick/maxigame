import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang, pickLang } from '../i18n/LanguageContext';
import { buildWhatsappUrl } from '../utils/whatsapp';
import styles from './DestinoPanel.module.css';

export default function DestinoPanel({ destino, index, isActive }) {
  const { lang, t } = useLang();
  const [hoverIdx, setHoverIdx] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const activeImage =
    hoverIdx !== null
      ? destino.destacados[hoverIdx]?.imagen || destino.imagen
      : destino.imagen;
  const activeKey = `${destino.id}-${hoverIdx ?? 'main'}`;
  const hoverStyle = destino.hoverStyle || 'glass';

  return (
    <section
      className={styles.panel}
      data-panel-index={index}
      aria-label={pickLang(destino.nombre, lang)}
    >
      <div className={styles.imageWrap}>
        <AnimatePresence mode="sync">
          <motion.img
            key={activeKey}
            src={activeImage}
            alt={pickLang(destino.destacados[hoverIdx]?.titulo, lang)}
            className={styles.image}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: isActive ? 1.02 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            loading={index < 2 ? 'eager' : 'lazy'}
          />
        </AnimatePresence>
        <div className={styles.overlay} />
        {hoverStyle === 'gradient' && (
          <div
            className={`${styles.gradientOverlay} ${
              isHovering ? styles.gradientOverlayActive : ''
            }`}
          />
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.topRow}>
            <span className={styles.numero}>{destino.numero}</span>
            <span className={styles.region}>{pickLang(destino.region, lang)}</span>
          </div>

          <h2 className={styles.titulo}>
            <span className={styles.tituloLine}>
              {pickLang(destino.nombre, lang)}
            </span>
          </h2>

          <p className={styles.subtitulo}>
            {pickLang(destino.subtitulo, lang)}
          </p>

          <p className={styles.descripcion}>
            {pickLang(destino.descripcion, lang)}
          </p>

          <div className={styles.precio}>
            <span className={styles.precioLabel}>{t.destino.faresFrom}</span>
            <span className={styles.precioMonto}>
              <span className={styles.precioCurrency}>ARS</span>
              {destino.precio}
            </span>
            <span className={styles.precioPersona}>
              {t.destino.perPerson} · {pickLang(destino.duracion, lang)}
            </span>
          </div>
        </div>

        <div
          className={`${styles.right} ${styles[`style_${hoverStyle}`]} ${
            isHovering ? styles.rightActive : ''
          }`}
          onMouseLeave={() => {
            setIsHovering(false);
            setHoverIdx(null);
          }}
          onMouseEnter={() => setIsHovering(true)}
        >
          <div className={styles.rightHeader}>
            <img
              src="/logoPngSf.png"
              alt="Maxi Games"
              className={styles.rightLogo}
            />
            <span className={styles.rightEyebrow}>
              {t.destino.includesEyebrow}
            </span>
          </div>

          <ul className={styles.destacados}>
            {destino.destacados.map((d, i) => (
              <li
                key={`${destino.id}-${i}`}
                className={`${styles.destacado} ${
                  isHovering && hoverIdx === i ? styles.destacadoActive : ''
                }`}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setHoverIdx(i);
                }}
                onFocus={() => {
                  setIsHovering(true);
                  setHoverIdx(i);
                }}
                tabIndex={0}
              >
                <span className={styles.destacadoIndex}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className={styles.destacadoBody}>
                  <span className={styles.destacadoTitulo}>
                    {pickLang(d.titulo, lang)}
                  </span>
                  <AnimatePresence>
                    {isHovering && hoverIdx === i && (
                      <motion.span
                        className={styles.destacadoDescripcion}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {pickLang(d.descripcion, lang)}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            ))}
          </ul>

          <a
            className={styles.contactRow}
            href={buildWhatsappUrl(
              t.destino.contactMessage(pickLang(destino.nombre, lang))
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.contactIcon} aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="currentColor">
                <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.41L3.2 28.8l6.59-1.73a12.74 12.74 0 0 0 6.21 1.59h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05A12.71 12.71 0 0 0 16.001 3.2zm0 23.36h-.01a10.62 10.62 0 0 1-5.41-1.48l-.39-.23-4.04 1.06 1.08-3.94-.25-.4a10.62 10.62 0 0 1-1.63-5.67c0-5.87 4.78-10.65 10.65-10.65 2.85 0 5.52 1.11 7.53 3.12a10.6 10.6 0 0 1 3.12 7.53c0 5.87-4.78 10.66-10.65 10.66zm5.84-7.98c-.32-.16-1.9-.94-2.19-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.91-1.79-2.23-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55-.19-.01-.4-.01-.62-.01-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z"/>
              </svg>
            </span>
            <span className={styles.contactLabel}>{t.destino.contact}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
