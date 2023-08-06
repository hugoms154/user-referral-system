import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutesProps } from "./types";

export const PrivateRoutes = ({
  isLogged,
  redirectPath = "/",
}: PrivateRoutesProps) => {
  if (!isLogged) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
