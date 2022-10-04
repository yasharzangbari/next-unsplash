import { BASE_URL } from "@constants/api.endpoints";
import axios, { AxiosRequestConfig } from "axios";
import { TOKEN } from "@constants/storages";
import { isServer } from "@libs/i18n";

axios.defaults.headers.common["Authorization"] =
  !isServer && (localStorage.getItem(TOKEN) as string);

axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";

const apiConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: +process.env.NEXT_API_TIMEOUT!,
};

export default apiConfig;
