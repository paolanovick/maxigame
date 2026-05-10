import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang, pickLang } from '../i18n/LanguageContext';
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
        </div>
      </div>
    </section>
  );
}
