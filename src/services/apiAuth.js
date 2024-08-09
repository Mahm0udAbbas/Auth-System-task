import toast from "react-hot-toast";
import { axiosInstance } from "../axiosConfig/instance";

export async function registerUser(userData, setError) {
  try {
    const res = await axiosInstance.post("/auth/register", userData);

    return res.data;
  } catch (error) {
    console.log(error.response.data.message);
    if (error.response && error.response.data) {
      const serverErrors = error.response.data.message;
      // Assuming server errors come in the format: { fieldName: "error message" }
      let errors;
      Object.keys(serverErrors).forEach((field) => {
        console.log(serverErrors[field][0].en);
        setError(field, { type: "server", message: serverErrors[field][0].en });
      });
    } else {
      // Handle unexpected errors
      console.error("Unexpected error:", error);
    }
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
