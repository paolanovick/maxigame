import { AnimatePresence, motion } from 'framer-motion';
import styles from './BrandLogo.module.css';

export default function BrandLogo({ loaded, mode = 'light' }) {
  const modeClass = mode === 'dark' ? styles.dark : styles.light;

  return (
    <>
      <div
        className={`${styles.logo} ${loaded ? styles.loaded : styles.loading} ${modeClass}`}
        aria-hidden={loaded}
      >
        <img src="/logoPngSf.png" alt="Hub Travel" />
      </div>

      <AnimatePresence>
        {loaded && (
          <motion.div
            className={`${styles.secondary} ${modeClass}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.9,
              delay: 1.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className={styles.secondaryDivider} />
            <img src="/logoMaxiGames.png" alt="Maxi Games" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
