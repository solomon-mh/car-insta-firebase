// src/PrivateRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "./context/AuthContext";

const PrivateRoute: React.FC = () => {
  const { currentUser } = useUserContext();
  // console.log(currentUser);

  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
