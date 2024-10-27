// src/api/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Base URL from .env
  timeout: 10000, // Optional timeout setting
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
