import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/auth";
import { LoginPage } from "../modules/authentication/screens/login/login";
import { HomePage } from "../modules/home/screens/home";
import { TestePage } from "../modules/teste/page";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";

export const AppRouter = () => {
  const { isLogged } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<PublicRoutes isLogged={isLogged} />}>
        <Route index element={<LoginPage />} />
      </Route>

      <Route path="/panel" element={<PrivateRoutes isLogged={isLogged} />}>
        <Route path="home" element={<HomePage />} />
        <Route path="teste" element={<TestePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
