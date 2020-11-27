import { gql } from "apollo-boost";

export const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      stage
      horizontalNum
      heart
      gameEnd
    }
  }
`;
