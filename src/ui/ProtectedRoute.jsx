import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = Cookies.get("authToken");

  useEffect(
    function () {
      if (!token) navigate("/login");
    },
    [token, navigate]
  );

  if (token) return children;
}
