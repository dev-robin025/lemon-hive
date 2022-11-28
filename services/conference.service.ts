import { gql } from "@apollo/client";

const GET_CONFERENCE = gql`
  query Conference($conferenceID: ID!) {
    conference(id: $conferenceID) {
      name
      slogan
      organizer {
        name
        about
        image {
          url
        }
      }
      schedules {
        day
        location {
          name
          about
          image {
            url
            title
          }
          country {
            name
          }
          city
          address
        }
      }
      speakers {
        name
        aboutShort
        image {
          url
        }
      }
      sponsors {
        name
        aboutShort
        location {
          city
          country {
            name
          }
        }
        image {
          url
        }
      }
      locations {
        address
        city
        name
        about
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
