import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import styles from './Loader.module.css';

export default function Loader({ visible }) {
  const { t } = useLang();
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.loader}
          initial={{ y: 0 }}
          exit={{ y: '-101%' }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
        >
          <div className={styles.lineWrap}>
            <motion.div
              className={styles.line}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>

          <motion.div
            className={styles.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>{t.loader.label}</span>
            <span className={styles.dots}>
              <span>·</span>
              <span>·</span>
              <span>·</span>
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
