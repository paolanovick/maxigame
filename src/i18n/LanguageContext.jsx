import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'es';
    const stored = localStorage.getItem('maxigames-lang');
    if (stored === 'es' || stored === 'en') return stored;
    const browser = navigator.language || '';
    return browser.toLowerCase().startsWith('en') ? 'en' : 'es';
  });

  useEffect(() => {
    localStorage.setItem('maxigames-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'));
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}

export const pickLang = (field, lang) => {
  if (field == null) return '';
  if (typeof field === 'string') return field;
  return field[lang] ?? field.es ?? '';
};
