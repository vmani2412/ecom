import axios from "axios";
import { API_BASE_URL } from "./constants";

const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // <-- crucial for cookies
  headers: { "Content-Type": "application/json" },
});

// Automatically retry expired access tokens
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/login")
    ) {
      originalRequest._retry = true;

      try {
        const res = await API.post(REFRESH, {}); // Cookie is sent automatically
        const { access_token } = res.data;
        localStorage.setItem("access_token", access_token);
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return API(originalRequest);
      } catch (refreshErr) {
        localStorage.removeItem("access_token");
        window.location.href = "/login";
        return Promise.reject(refreshErr);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
