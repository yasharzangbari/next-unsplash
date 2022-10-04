import axios, {
  AxiosError,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import apiConfig from "@libs/API/config";

export const API = axios.create(apiConfig);

API.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    config.params["client_id"] = process.env.NEXT_PUBLIC_CLIENT_ID;
    return config;
  },
  (error: AxiosError) => Promise.reject(error.response)
);

API.interceptors.response.use(
  (response) => {
    return { data: response.data, status: response.status };
  },
  (error: AxiosError) => Promise.reject(error.response)
);

export const sendRequest = async (params: AxiosRequestConfig) => {
  try {
    return await API.request(params);
  } catch (error) {}
};
