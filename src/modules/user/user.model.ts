export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  referralCode: string;
  indicatedBy?: string;
}

export interface CreateUserModel {
  name: string;
  email: string;
  password: string;
  indicatedBy?: string;
}

export type UserModelWithOutPassword = Omit<UserModel, 'password'>;
export type GetUserModel = Pick<UserModel, 'id'>;
