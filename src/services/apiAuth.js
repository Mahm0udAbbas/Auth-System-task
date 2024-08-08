import { axiosInstance } from "../axiosConfig/instance";

export async function registerUser(userData) {
  try {
    const res = await axiosInstance.post("/auth/register", userData);
    return res.data;
  } catch (e) {
    console.error("Error registering user:", e);
    throw e;
  }
}

export async function loginUser(credentials) {
  try {
    const res = await axiosInstance.post("/auth/login", credentials);
    return res.data;
  } catch (e) {
    console.error("Error logging in user:", e);
    throw e;
  }
}
