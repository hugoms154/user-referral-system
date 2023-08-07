import { ApolloError, useMutation } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AUTHENTICATE_MUTATION,
  CREATE_USER_MUTATION,
} from "../../data/graphql";
import {
  AuthContextData,
  Authenticate,
  ChildrenData,
  PayloadLogin,
  PayloadSignUp,
  User,
} from "./types";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: ChildrenData) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const [
    authenticateMutation,
    { loading: authenticateLoading, reset: authenticateReset },
  ] = useMutation(AUTHENTICATE_MUTATION);
  const [
    createUserMutation,
    { loading: createUserLading, reset: createUserReset },
  ] = useMutation(CREATE_USER_MUTATION);

  const signIn = async ({ email, password }: PayloadLogin) => {
    authenticateReset();

    const { data, error } = await new Promise<{
      data: Authenticate | null;
      error: any;
    }>((resolve) => {
      authenticateMutation({
        variables: {
          data: {
            email,
            password,
          },
        },
        onCompleted(data) {
          resolve({ data, error: null });
        },
        onError(error: ApolloError) {
          resolve({ data: null, error });
        },
      });
    });

    if (error) {
      return { data, loading: authenticateLoading, error };
    }

    const user: User | null = data?.authenticate.user
      ? data.authenticate.user
      : null;
    setUser(user);
    setIsLogged(true);
    navigate("/");
    return { data, loading: authenticateLoading, error };
  };

  const signUp = ({ email, password, referralCode }: PayloadSignUp) => {
    createUserReset();
    createUserMutation({
      variables: {
        data: {
          name: email.split("@")[0],
          password,
          email,
          indicatedBy: referralCode ?? null,
        },
      },
      onCompleted() {
        signIn({ email, password });
        setIsLogged(true);
        navigate("/");
      },
    });
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
    <AuthContext.Provider value={{ isLogged, user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
