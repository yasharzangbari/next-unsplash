import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../i18n";
import { useTranslation } from "react-i18next";
function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  return <Component {...pageProps} translate={t} />;
}

export default MyApp;
