import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/context/AuthContext";

export default function ProtectedRoute({
  children,
  redirectPath,
}: {
  children: ReactNode;
  redirectPath: string;
}) {
  const auth = useContext(AuthContext);
  if (!auth.isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}