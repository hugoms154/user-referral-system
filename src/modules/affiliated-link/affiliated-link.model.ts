import { UserModel } from "../user/user.model";

export interface AffiliatedLinkModel {
  id: string;
  sourceLink: string;
  user: UserModel;
}

export interface CreateAffiliatedLinkModel {
  sourceLink: string;
  userId: number;
}

export interface GetAffiliatedLinkModel {
  code: string;
}