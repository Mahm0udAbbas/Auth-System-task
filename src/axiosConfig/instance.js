import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: " https://dev.backend-api.goldady.com/user-api",
  headers: {
    "Content-Type": "application/json",
  },
});
