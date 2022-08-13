import { Language } from "../types/global";
import i18n from "i18next";

export const changeLanguage = (language: Language) =>
  i18n.changeLanguage(language).then();
