import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextData, ChildrenData, PayloadLogin } from "./types";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: ChildrenData) => {
  const [isLogged, setIsLogged] = useState(false);

  const signIn = ({ email, password }: PayloadLogin) => {
    // consultar da api
    console.log("email: ", email);
    console.log("password: ", password);
    setIsLogged(true);
  };

  const signOut = () => {
    localStorage.removeItem(`${import.meta.env.VITE_KEY_STORAGE}:login`);
    setIsLogged(false);
  };

  useEffect(() => {
    const checkLogin = localStorage.getItem(
      `${import.meta.env.VITE_KEY_STORAGE}:login`
    );
    setIsLogged(checkLogin === "true");
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
