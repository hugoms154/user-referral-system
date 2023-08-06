import { UserModel } from "../user/user.model";

export interface AuthenticationModel {
  token: string;
  user: UserModel;
}

export interface AuthenticateModel {
  email: string;
  password: string;
}