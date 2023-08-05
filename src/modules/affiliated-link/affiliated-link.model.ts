export interface AffiliatedLinkModel {
  id: string;
  sourceLink: string;
}

export interface CreateAffiliatedLinkModel {
  sourceLink: string;
  userId: number;
}

export interface GetAffiliatedLinkModel {
  code: string;
}