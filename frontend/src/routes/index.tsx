import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/auth";
import { LoginPage } from "../modules/authentication/screens/login/login";
import { SignUpPage } from "../modules/authentication/screens/sign-up/sign-up";
import { HomePage } from "../modules/home/screens/home";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";

export const AppRouter = () => {
  const { isLogged } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<PublicRoutes isLogged={isLogged} />}>
        <Route index element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>

      <Route path="/panel" element={<PrivateRoutes isLogged={isLogged} />}>
        <Route path="home" element={<HomePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
