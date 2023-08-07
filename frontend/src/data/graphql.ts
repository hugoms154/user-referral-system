import { gql } from "@apollo/client";

export const USER_QUERY = gql`
  query User($data: GetUserInput!) {
    user(data: $data) {
      id
      name
      email
      indicatedBy
      referralCode
    }
  }
`;

export const AUTHENTICATE_MUTATION = gql`
  mutation Authenticate($data: AuthenticateInput!) {
    authenticate(data: $data) {
      token
      user {
        id
        name
        email
        indicatedBy
        referralCode
      }
    }
  }
`;

export const CREATE_AFFILIATED_LINK_MUTATION = gql`
  mutation CreateAffiliatedLink($data: CreateAffiliatedLinkInput!) {
    createAffiliatedLink(data: $data) {
      id
      sourceLink
      viewsCount
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      id
      name
      email
      indicatedBy
      referralCode
    }
  }
`;
