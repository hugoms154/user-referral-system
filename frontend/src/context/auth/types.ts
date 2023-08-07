import { ReactNode } from "react";

export type PayloadLogin = {
  email: string;
  password: string;
};

export type PayloadSignUp = {
  email: string;
  password: string;
  referralCode?: string;
};

export type AuthContextData = {
  isLogged: boolean;
  signIn: ({ email, password }: PayloadLogin) => Promise<{
    data: unknown;
    loading: boolean;
    error: any;
  }>;
  signUp: ({ email, password, referralCode }: PayloadSignUp) => void;
  signOut: () => void;
};

export type ChildrenData = {
  children: ReactNode;
};
