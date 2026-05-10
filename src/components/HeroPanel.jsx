import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import styles from './HeroPanel.module.css';

const titleVariants = {
  hidden: { y: '120%', opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 1.6 + i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function HeroPanel() {
  const { t } = useLang();

  return (
    <section className={styles.hero} data-panel-index={-1}>
      <div className={styles.bgPattern} />

      <div className={styles.left}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.hero.eyebrow}
        </motion.span>

        <h1 className={styles.title}>
          <span className={styles.titleRow}>
            <motion.span
              className={styles.titleWord}
              custom={0}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              {t.hero.titleLine1}
            </motion.span>
          </span>
          <span className={styles.titleRow}>
            <motion.span
              className={styles.titleWord + ' ' + styles.titleItalic}
              custom={1}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              {t.hero.titleLine2}
            </motion.span>
          </span>
          <span className={styles.titleRow}>
            <motion.span
              className={styles.titleWord}
              custom={2}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              {t.hero.titleLine3}
            </motion.span>
          </span>
        </h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.hero.lead}
        </motion.p>

        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.scrollHintLabel}>{t.hero.scrollHint}</span>
          <svg width="60" height="10" viewBox="0 0 60 10" fill="none">
            <motion.path
              d="M0 5 L55 5 M50 1 L55 5 L50 9"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              animate={{ x: [0, 6, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=85"
          alt=""
          className={styles.rightImage}
        />
        <div className={styles.rightLabel}>
          <span className={styles.rightLabelKey}>06</span>
          <span className={styles.rightLabelDivider} />
          <span className={styles.rightLabelValue}>{t.hero.counterLabel}</span>
        </div>
      </motion.div>
    </section>
  );
}
