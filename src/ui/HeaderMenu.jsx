import { Button } from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <ul className="flex items-center">
      <li>
        <Button>Profile</Button>
      </li>
      <li>
        <Button onClick={() => navigate("/login")}>
          <LogoutIcon />
        </Button>
      </li>
    </ul>
  );
}
