import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@libs/i18n";
import { useTranslation } from "react-i18next";
import { store } from "@redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  return (
    <Provider store={store}>
      <Component {...pageProps} translate={t} />
    </Provider>
  );
}

export default MyApp;
