import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://104.154.104.125/api/v1"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
