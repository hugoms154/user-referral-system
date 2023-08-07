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

export interface Authenticate {
  authenticate: {
    token: string;
    user: User;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  indicatedBy?: string;
  referralCode: string;
}

export type AuthContextData = {
  isLogged: boolean;
  user: User | null;
  signIn: ({ email, password }: PayloadLogin) => Promise<{
    data: Authenticate;
    loading: boolean;
    error: any;
  }>;
  signUp: ({ email, password, referralCode }: PayloadSignUp) => void;
  signOut: () => void;
};

export type ChildrenData = {
  children: ReactNode;
};
