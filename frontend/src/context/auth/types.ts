import { ReactNode } from "react";

export type PayloadLogin = {
  email: string;
  password: string;
};

export type AuthContextData = {
  isLogged: boolean;
  signIn: ({ email, password }: PayloadLogin) => Promise<{
    data: unknown;
    loading: boolean;
    error: any;
  }>;
  signOut: () => void;
};

export type ChildrenData = {
  children: ReactNode;
};
