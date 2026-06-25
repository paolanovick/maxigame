import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { buildWhatsappUrl } from '../utils/whatsapp';
import styles from './OutroPanel.module.css';

const TERMS_PDF_URL = '/terminos-y-condiciones.pdf';

export default function OutroPanel({ index }) {
  const { t } = useLang();

  return (
    <section className={styles.outro} data-panel-index={index}>
      <div className={styles.inner}>
        <motion.a
          href="https://hubtravel.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.partnerLink}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.partnerText}>{t.outro.partnerText}</span>
          <img
            src="/logoPngSf.png"
            alt="Hub Travel"
            className={styles.partnerLogo}
          />
          <svg
            className={styles.partnerArrow}
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <path d="M3 11 L11 3 M6 3 H11 V8" />
          </svg>
        </motion.a>

        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.outro.eyebrow}
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.outro.titleStart} <em>{t.outro.titleAccent}</em>
          {t.outro.titleEnd}
        </motion.h2>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.outro.text}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            className={styles.primary}
            href={buildWhatsappUrl(t.outro.contactMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t.outro.cta}</span>
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path
                d="M0 5 L18 5 M14 1 L18 5 L14 9"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </a>
          <span className={styles.divider} />
          <a className={styles.secondary} href="mailto:info@hubtravel.com.ar">
            info@hubtravel.com.ar
          </a>
        </motion.div>

        <div className={styles.footer}>
          <div className={styles.footerLogos}>
            <img
              src="/logoPngSf.png"
              alt="Hub Travel"
              className={styles.footerLogo}
            />
            <span className={styles.footerLogosDivider} />
            <img
              src="/logoMaxiGames.png"
              alt="Maxi Games"
              className={styles.footerLogoMaxi}
            />
          </div>
          <div className={styles.footerText}>
            <span className={styles.footerMeta}>
              <span>{t.outro.copyright}</span>
              <span className={styles.footerMetaDivider}>·</span>
              <span>{t.outro.disclaimer}</span>
              <span className={styles.footerMetaDivider}>·</span>
              <a
                href={TERMS_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                {t.outro.terms}
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.bigType}>
        <span>hub</span>
        <span className={styles.bigTypeItalic}>travel</span>
      </div>
    </section>
  );
}
