import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with your authentication logic

  // const user = JSON.parse(localStorage.getItem("user"));
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
