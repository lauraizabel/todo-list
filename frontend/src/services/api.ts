import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { getAuthData } from "./auth";

export const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API,
};

const api: AxiosInstance = axios.create(config);

api.interceptors.request.use(async (request) => {
  const token = getAuthData();
  if (!request.headers.authorization && token) {
    request.headers.authorization = token;
  }
  return request;
});

export default api;
