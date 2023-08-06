import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutesProps } from "./types";

export const PublicRoutes = ({
  isLogged,
  redirectPath = "/panel/home",
}: PublicRoutesProps) => {
  if (isLogged) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
