import { Button } from "@mui/material";
import React from "react";
import Logout from "./Logout";
export default function HeaderMenu() {
  return (
    <ul className="flex items-center">
      <li>
        <Logout />
      </li>
    </ul>
  );
}
