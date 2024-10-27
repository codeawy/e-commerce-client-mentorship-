import React from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}
const ProtectedRout = ({ children, isAuthenticated }: IProps) => {
  if (!isAuthenticated) {
    return <Navigate to="login" replace />;
  }
  return children;
};
export default ProtectedRout;
