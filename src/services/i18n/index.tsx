import TranslationsEN from '@Locale/en';
import TranslationsES from '@Locale/es';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const namespaces = ['general', 'firstStep', 'secondStep', 'thirdStep'];
const resources = {
  en: TranslationsEN,
  es: TranslationsES,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: {
      lookupLocalStorage: 'language',
    },
    fallbackLng: ['en'],
    debug: true,
    ns: namespaces,
    defaultNS: 'general',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

export default i18n;
