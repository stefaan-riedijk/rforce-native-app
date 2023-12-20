import { gql } from "@apollo/client";

export const query = gql`
  query {
    workoutProgramCollection(limit: 20) {
      items {
        programName
        image {
          url
        }
        slug
        description
        duration
      }
    }
  }
`;
