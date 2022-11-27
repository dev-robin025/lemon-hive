import { gql } from "@apollo/client";

const GET_CONFERENCE = gql`
  query Conference($conferenceID: ID!) {
    conference(id: $conferenceID) {
      name
      organizer {
        name
        image {
          url
        }
      }
      speakers {
        name
        image {
          url
        }
      }
      locations {
        address
        city
        image {
          url
        }
        country {
          name
        }
      }
    }
  }
`;

export default GET_CONFERENCE;
