/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import i18n from "i18next";
import { initReactI18next } from "react-i18next"
// import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from 'i18next-http-backend'

import EN from '../public/locales/en/translation.json';
import RU from '../public/locales/ru/translation.json';
import EST from '../public/locales/est/translation.json';

i18n
.use(initReactI18next)
// .use(LanguageDetector)
.use(Backend)
.init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
        escapeValue: false
      },
    resourses: {
        en: {
            translation: EN,
        },
        ru: {
            translation: RU,
        },
        est: {
            translation: EST, 
        }
    }
})

export default i18n;