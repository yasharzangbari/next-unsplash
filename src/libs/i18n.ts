import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from "../../public/locales/en/translation.json";
import translationFA from "../../public/locales/fa/translation.json";

export const isServer = typeof window === "undefined";

const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: (!isServer && localStorage.getItem("i18nextLng")) || "en",
    saveMissing: true,
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  })
  .then();

export default i18n;
