import axios from "axios";
import { store } from "../Redux/Store";
import { logOutUser, updateLoader } from "../Features/Userslice";

// Create Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});

// 🔐 Request Interceptor – Attach token
apiClient.interceptors.request.use(
  (config) => {
    store.dispatch(updateLoader(true));
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Handle multipart/form-data separately
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// ❌ Response Interceptor – Handle unauthorized (401)
apiClient.interceptors.response.use(
  (response) => {
    store.dispatch(updateLoader(false));
    return response;
  },
  (error) => {
    const status = error.response?.status;
    store.dispatch(updateLoader(false));
    if (status === 401) {
      store.dispatch(logOutUser());
    }

    return Promise.reject(error);
  },
);

export default apiClient;
