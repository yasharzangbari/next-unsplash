import i18n from "i18next";
import { Language } from "~types/global";

export const changeLanguage = (language: Language) =>
  i18n.changeLanguage(language).then();
