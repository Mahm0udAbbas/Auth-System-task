import { Button } from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/apiAuth";
import useUser from "../hooks/useUser";
import Cookies from "js-cookie";

export default function Logout() {
  const navigate = useNavigate();
  const { clearUser } = useUser();
  async function handleLogout() {
    try {
      const token = Cookies.get("authToken");
      if (token) {
        await logoutUser(token);
        clearUser();
        Cookies.remove("authToken");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Button onClick={handleLogout}>
      <LogoutIcon />
    </Button>
  );
}
