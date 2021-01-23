import { absoluteUrl } from '@alangiacomin/js-utils';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import locales from './config/locales';
// import en from './locales/en';
// import it from './locales/it';

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend) // import Backend from 'i18next-http-backend';
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    backend: {
      loadPath: absoluteUrl('/locales/{{lng}}/{{ns}}.json'),
      queryStringParams: { v: '1.0' },
    },
    // resources: {
    //   it,
    //   en,
    // },
    debug: false,
    fallbackLng: locales.fallbackLanguages || ['en'], // fallback language
    detection: {
      checkWhitelist: true, // options for language detection
    },
    whitelist: locales.availableLanguages || ['en'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      // bindI18n: 'languageChanged',
      // bindI18nStore: '',
      // transEmptyNodeValue: '',
      // transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'em', 'b'],
      useSuspense: true,
    },
  });

export default i18n;
