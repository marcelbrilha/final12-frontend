import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_HOST });

api.interceptors.request.use(
  (config) => {
    if (!config.url.endsWith("token")) {
      const token = sessionStorage.getItem("token");

      if (!!token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
