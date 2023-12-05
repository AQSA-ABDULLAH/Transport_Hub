import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", //this is our backend api
  headers: {
    "Content-Type": "application/json",
  },
}); 

axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.headers.withoutAuth) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    delete config.headers.withoutAuth;

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Something went wrong");
    }
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      window.location.href = "/login";
      return;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
